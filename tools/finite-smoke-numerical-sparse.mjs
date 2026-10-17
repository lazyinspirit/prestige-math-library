// Research-only bounded sparse fixtures. Not a proof of any general theorem.
import { q, qadd, qsub, qmul, qdiv, qcmp, qstr } from './finite-smoke-numerical-core.mjs';
const FIXTURES = ['three-leaf-star-ordering-fill', 'two-by-two-pivot-example', 'one-vertex-dirichlet-poisson-grid'];
const isRecord = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const expect = (test, message) => { if (!test) throw new Error(message); };
const eq = (a,b) => qcmp(a,b) === 0;
const edge = (i,j) => i < j ? `${i},${j}` : `${j},${i}`;
function eliminate(vertices, edges, order) {
  const active = new Set(vertices), graph = new Set(edges), inserted = [];
  expect(order.length === vertices.length && new Set(order).size === vertices.length && order.every(x => active.has(x)), 'invalid graph permutation');
  for (const pivot of order) {
    const later = [...active].filter(v => v !== pivot && graph.has(edge(v,pivot)));
    for (let i=0;i<later.length;i++) for(let j=i+1;j<later.length;j++) {
      const key=edge(later[i],later[j]);
      if (!graph.has(key)) { graph.add(key); inserted.push(key); }
    }
    active.delete(pivot);
    for (const v of active) graph.delete(edge(v,pivot));
  }
  return inserted;
}
function star(parameters) {
  expect(Object.keys(parameters).every(k => ['fixture','m','t'].includes(k)), 'unknown star parameter');
  expect(parameters.m === undefined || parameters.m === 3, 'bounded star fixture requires m=3');
  expect(parameters.t === undefined || parameters.t === '1/(2 sqrt(3))', 'bounded star fixture requires the exact source t');
  const vertices=[0,1,2,3], original=[edge(0,1),edge(0,2),edge(0,3)];
  const leavesFirst=eliminate(vertices,original,[1,2,3,0]);
  const centerFirst=eliminate(vertices,original,[0,1,2,3]);
  expect(leavesFirst.length===0,'leaf-first order inserted fill');
  expect(centerFirst.length===3 && ['1,2','1,3','2,3'].every(x=>centerFirst.includes(x)),'center-first order did not produce the leaf clique');
  // Source t=1/(2sqrt(3)), hence t^2=1/12 exactly. Eliminate pivot A00=1.
  const tSquared=q(1,12), S=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>qsub(q(Number(i===j)),qdiv(tSquared,q(1)))));
  for(let i=0;i<3;i++) for(let j=0;j<3;j++) expect(eq(S[i][j], i===j?q(11,12):q(-1,12)), 'incorrect exact Schur entry');
  // Leading principal minors of center-plus-k leaves are 1-k*t^2.
  for(let k=0;k<=3;k++) expect(qcmp(qsub(q(1),qmul(q(k),tSquared)),q(0))>0,'source star is not positive definite in this fixture');
  return {ok:true,summary:`m=3: symbolic leaf-first fill ${leavesFirst.length}, center-first fill ${centerFirst.length}; exact Schur off-diagonal ${qstr(S[0][1])}; four positive leading minors`};
}
const matmul = (A,B) => A.map(row=>B[0].map((_,j)=>row.reduce((s,a,k)=>qadd(s,qmul(a,B[k][j])),q(0))));
const matvec = (A,x) => A.map(row=>row.reduce((s,a,i)=>qadd(s,qmul(a,x[i])),q(0)));
function pivot(parameters) {
  expect(Object.keys(parameters).every(k=>['fixture','dimension','theta'].includes(k)),'unknown pivot parameter');
  expect(parameters.dimension===undefined || parameters.dimension===2,'bounded pivot fixture requires dimension2');
  const domainText='any value in (0,1]';
  expect(parameters.theta===undefined || parameters.theta===domainText || [1,0.5,0.25].includes(parameters.theta),'theta must select a bounded exact fixture value');
  const thetas=typeof parameters.theta==='number'?[q(parameters.theta===1?1:1,parameters.theta===1?1:parameters.theta===0.5?2:4)]:[q(1),q(1,2),q(1,4)];
  const A=[[q(0),q(1)],[q(1),q(0)]], det=qsub(qmul(A[0][0],A[1][1]),qmul(A[0][1],A[1][0]));
  expect(eq(det,q(-1)),'pivot determinant incorrect');
  const inverse=[[qdiv(A[1][1],det),qdiv(qsub(q(0),A[0][1]),det)],[qdiv(qsub(q(0),A[1][0]),det),qdiv(A[0][0],det)]];
  const plus=matvec(A,[q(1),q(1)]), minus=matvec(A,[q(1),q(-1)]);
  expect(plus.every(x=>eq(x,q(1))) && eq(minus[0],q(-1)) && eq(minus[1],q(1)),'eigenvector signs incorrect');
  for(const theta of thetas) {
    for(let i=0;i<2;i++) expect(qcmp(q(1),qmul(qdiv(q(1),theta),A[i][i]))>0,'zero scalar pivot unexpectedly passed');
    // No external rows: c1=c2=0; apply the actual inverse-block row test.
    for(const row of inverse) {
      const left=row.reduce((s,x)=>qadd(s,qmul(q(x.n<0n?-x.n:x.n,x.d),q(0))),q(0));
      expect(qcmp(left,qdiv(q(1),theta))<=0,'declared two-by-two block rejected');
    }
  }
  const I=[[q(1),q(0)],[q(0),q(1)]], product=matmul(matmul(I,A),I);
  expect(product.every((row,i)=>row.every((x,j)=>eq(x,A[i][j]))),'exact LDL reconstruction failed');
  return {ok:true,summary:`A=[[0,1],[1,0]]: det=${qstr(det)}, eigenvalues +/-1; both scalar pivots fail and exact2x2 pivot passes at ${thetas.length} bounded thresholds; P=L=I reconstruction exact`};
}
function poisson(parameters) {
  expect(Object.keys(parameters).every(k=>['fixture','k'].includes(k)),'unknown grid parameter');
  expect(parameters.k===undefined || parameters.k===1,'bounded Poisson fixture requires k=1');
  const k=1, vertices=[];for(let i=0;i<k;i++)for(let j=0;j<k;j++)vertices.push([i,j]);
  const edges=[];for(let a=0;a<vertices.length;a++)for(let b=a+1;b<vertices.length;b++)if(vertices[a].reduce((s,x,j)=>s+Math.abs(x-vertices[b][j]),0)===1)edges.push([a,b]);
  const A=vertices.map((_,i)=>vertices.map((_,j)=>q(i===j?4:edges.some(([a,b])=>a===i&&b===j||b===i&&a===j)?-1:0)));
  expect(vertices.length===1 && edges.length===0 && eq(A[0][0],q(4)),'one-vertex stencil differs from source');
  const missing=4-edges.filter(([a,b])=>a===0||b===0).length;
  for(const x of [q(-2),q(0),q(1),q(3)])expect(eq(qmul(x,matvec(A,[x])[0]),qmul(q(missing),qmul(x,x))),'grid energy identity failed');
  // No side length >=2: the prescribed recursion appends its terminal vertex.
  const order=vertices.filter(v=>v.every(()=>k<2)).map(([i,j])=>i*k+j);
  expect(order.length===1 && order[0]===0,'terminal nested-dissection order incorrect');
  const L=[[q(2)]], reconstructed=matmul(L,L);
  expect(eq(reconstructed[0][0],A[0][0]),'scalar Cholesky reconstruction failed');
  return {ok:true,summary:'k=1: one vertex/no edges, A=[4], four exact energy samples, terminal order[0], Cholesky[2] has one factor entry'};
}
export const numericalSparseChecks = {
  'numerical-sparse-fixture'(smoke={}) {
    try {
      const parameters=smoke.parameters===undefined?{}:smoke.parameters;expect(isRecord(parameters),'parameters must be an object');
      if(Object.keys(parameters).length===0) {
        const results=[star({}),pivot({}),poisson({})];
        return {ok:results.every(x=>x.ok),summary:results.map(x=>x.summary).join('; ')};
      }
      expect(typeof parameters.fixture==='string' && FIXTURES.includes(parameters.fixture),'unknown sparse fixture');
      return parameters.fixture===FIXTURES[0]?star(parameters):parameters.fixture===FIXTURES[1]?pivot(parameters):poisson(parameters);
    } catch(error) { return {ok:false,summary:String(error.message??error)}; }
  },
};
