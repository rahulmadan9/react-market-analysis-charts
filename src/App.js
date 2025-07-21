import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

const MarketAnalysisCharts = () => {
  const [activeTab, setActiveTab] = useState('growth');

  // Market Growth Data
  const marketGrowthData = [
    { year: '2024', value: 2.44, projected: false },
    { year: '2025', value: 3.12, projected: true },
    { year: '2026', value: 4.87, projected: true },
    { year: '2027', value: 7.23, projected: true },
    { year: '2028', value: 9.78, projected: true },
  ];

  // Competition Comparison
  const competitionData = [
    { name: 'Boodmo', skus: 13, strength: 85 },
    { name: 'Amazon', skus: 2, strength: 70 },
    { name: 'SparesHub', skus: 0.5, strength: 60 },
    { name: 'Our Platform', skus: 3, strength: 90 },
  ];

  // Revenue Mix Evolution
  const revenueMixData = [
    { phase: 'MVP', parts: 100, commission: 0, services: 0, subscription: 0 },
    { phase: 'V1', parts: 100, commission: 0, services: 0, subscription: 0 },
    { phase: 'V2', parts: 80, commission: 20, services: 0, subscription: 0 },
    { phase: 'Vision', parts: 60, commission: 25, services: 10, subscription: 5 },
  ];

  // Investment vs Returns
  const investmentData = [
    { phase: 'MVP', investment: 50, revenue: 20 },
    { phase: 'V1', investment: 90, revenue: 100 },
    { phase: 'V2', investment: 165, revenue: 400 },
    { phase: 'Vision', investment: 265, revenue: 1200 },
  ];

  const COLORS = ['#1E40AF', '#F97316', '#10B981', '#8B5CF6'];

  return (
    <div className="app">
      <div className="container">
        <h2 className="title">
          Auto Parts E-commerce Market Analysis
        </h2>
        
        {/* Tab Navigation */}
        <div className="tab-nav">
          {['growth', 'competition', 'revenue', 'investment'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Market Growth Chart */}
        {activeTab === 'growth' && (
          <div className="chart-section">
            <h3 className="chart-title">
              Indian Auto Parts E-commerce Market Growth (in Billion USD)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={marketGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}B`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#1E40AF" 
                  strokeWidth={3}
                  dot={{ fill: '#1E40AF', r: 6 }}
                  name="Market Size"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-note">
              CAGR: 21.9% | Current Penetration: &lt;1% | Potential: $9.78B by 2028
            </div>
          </div>
        )}

        {/* Competition Analysis */}
        {activeTab === 'competition' && (
          <div className="chart-section">
            <h3 className="chart-title">
              Competitive Landscape Analysis
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={competitionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="skus" fill="#1E40AF" name="SKUs (Millions)" />
                <Bar dataKey="strength" fill="#F97316" name="Market Strength %" />
              </BarChart>
            </ResponsiveContainer>
            <div className="info-box">
              <p>
                <strong>Our Strategy:</strong> Achieve 3M SKUs with superior UX to capture 5% market share
              </p>
            </div>
          </div>
        )}

        {/* Revenue Mix Evolution */}
        {activeTab === 'revenue' && (
          <div className="chart-section">
            <h3 className="chart-title">
              Revenue Stream Evolution
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueMixData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="parts" stackId="a" fill="#1E40AF" name="Parts Sales" />
                <Bar dataKey="commission" stackId="a" fill="#F97316" name="Commission" />
                <Bar dataKey="services" stackId="a" fill="#10B981" name="Services" />
                <Bar dataKey="subscription" stackId="a" fill="#8B5CF6" name="Subscription" />
              </BarChart>
            </ResponsiveContainer>
            <div className="phase-grid">
              {revenueMixData.map((phase, index) => (
                <div key={phase.phase} className="phase-card">
                  <div className="phase-name">{phase.phase}</div>
                  <div className="phase-desc">
                    {phase.commission > 0 ? 'Multi-revenue' : 'Single-revenue'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Investment vs Returns */}
        {activeTab === 'investment' && (
          <div className="chart-section">
            <h3 className="chart-title">
              Investment vs Revenue Projection (in Lakhs)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={investmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value}L`} />
                <Legend />
                <Bar dataKey="investment" fill="#EF4444" name="Cumulative Investment" />
                <Bar dataKey="revenue" fill="#10B981" name="Annual Revenue" />
              </BarChart>
            </ResponsiveContainer>
            <div className="metrics-grid">
              <div className="metric-card green">
                <div className="metric-value">18-24</div>
                <div className="metric-label">Months to Break-even</div>
              </div>
              <div className="metric-card blue">
                <div className="metric-value">₹2.65 Cr</div>
                <div className="metric-label">Total Investment</div>
              </div>
              <div className="metric-card orange">
                <div className="metric-value">₹500 Cr</div>
                <div className="metric-label">Year 2 GMV Target</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketAnalysisCharts;