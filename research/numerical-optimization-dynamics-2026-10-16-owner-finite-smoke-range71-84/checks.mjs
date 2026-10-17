// Proposed bounded numerical fixtures. Research only; not executed by this author.
// Root may relocate the helper import with the registry merge.
import {q,qadd,qsub,qmul,qdiv,qcmp,qnum,qstr,close,identity,matVec,solveDense} from '../numerical-optimization-dynamics-2026-10-16-owner-finite-smoke-core-rosenbrock/numerical-core.mjs';
const outcome=(ok,summary)=>({ok,summary});
function family(spec,variants,run,label){
 try{
  if(!spec||typeof spec!=='object'||Array.isArray(spec))return outcome(false,'fixture obligation must be an object');
  const p=spec.parameters===undefined?{}:spec.parameters;
  if(!p||typeof p!=='object'||Array.isArray(p)||Object.keys(p).some(k=>k!=='variant'))return outcome(false,'only the explicit bounded variant parameter is accepted');
  const selected=p.variant===undefined?variants:[p.variant];
  if(selected.some(v=>typeof v!=='string'||!variants.includes(v)))return outcome(false,'unknown bounded '+label+' variant');
  const results=selected.map(v=>({variant:v,...run(v)}));
  return outcome(results.every(r=>r.ok),results.map(r=>r.variant+': '+r.summary).join('; ')+'; bounded fixtures only, no general proof coverage');
 }catch(e){return outcome(false,label+' fixture rejected: '+e.message);}
}
const rq=x=>typeof x==='number'?q(x):x;
const add=(a,b)=>qadd(rq(a),rq(b)),sub=(a,b)=>qsub(rq(a),rq(b)),mul=(a,b)=>qmul(rq(a),rq(b));
const eq=(a,b)=>qcmp(rq(a),rq(b))===0;
function parareal(F,G,x0,N,K){
 let old=[x0];for(let n=0;n<N;n++)old.push(G(old[n]));const rows=[old];
 for(let k=0;k<K;k++){const next=[x0];for(let n=0;n<N;n++)next.push(add(G(next[n]),sub(F(old[n]),G(old[n]))));rows.push(next);old=next;}
 return rows;
}
const vecAdd=(a,b)=>a.map((x,i)=>x+b[i]),vecSub=(a,b)=>a.map((x,i)=>x-b[i]);
function timeFixture(v){
 if(v==='dissipative-heat'){
  const h=q(1,4),H=q(1,2),F=x=>mul(sub(1,h),mul(sub(1,h),x)),G=x=>qdiv(x,add(1,H));
  const rows=parareal(F,G,q(1),3,1),fine=F(F(q(1))),coarse=rows[0][2],corrected=rows[1][2];
  const e0=sub(coarse,fine),e1=sub(fine,corrected);
  return outcome(eq(F(q(1)),q(9,16))&&eq(G(q(1)),q(2,3))&&eq(corrected,q(11,36))&&eq(e0,q(295,2304))&&eq(e1,q(25,2304))&&qcmp(e1,e0)<0,'exact recurrence gives endpoint '+qstr(corrected)+', errors '+qstr(e0)+' and '+qstr(e1));
 }
 if(v==='phase-mismatch'){
  const F=x=>x.slice(),G=x=>x.map(y=>-y),x0=[1,0],rows=[[x0,G(x0),G(G(x0))]];
  for(let k=0;k<2;k++){const old=rows[k],next=[x0];for(let n=0;n<2;n++)next.push(vecAdd(G(next[n]),vecSub(F(old[n]),G(old[n]))));rows.push(next);}
  return outcome(close(Math.hypot(...vecSub(rows[1][2],x0)),4)&&close(Math.hypot(...vecSub(rows[2][2],x0)),0)&&rows[1][2][0]===-3,'two-dimensional I/-I recurrence has transient error4 and exact second sweep');
 }
 if(v==='nonlinear-tube'){
  const F=x=>mul(x,x),G=x=>x,rows=parareal(F,G,q(1,4),2,1),u=rows[1][2];
  // The analytical finite model uses |(F-G)(x)-(F-G)(y)|=|x-y||x+y-1|.
  // Exhaust a fixed rational grid as an independent boundary sanity check;
  // this is not a proof of the Lipschitz inequality on the whole interval.
  let grid=true;for(let i=0;i<=16;i++)for(let j=0;j<=16;j++){const x=q(i,16),y=q(j,16),fx=F(x),fy=F(y);grid&&=qcmp(fx,0)>=0&&qcmp(fx,1)<=0&&Math.abs(qnum(sub(sub(fx,x),sub(fy,y))))<=Math.abs(qnum(sub(x,y)))+1e-14;}
  return outcome(grid&&eq(u,q(-1,8))&&qcmp(u,0)<0,'rational grid checks G and F-G bounds, corrected value '+qstr(u)+' leaves[0,1]; no F-Lipschitz-constant1 claim');
 }
 // Construct the two-grid cycle as linear algebra on each input basis vector.
 const alpha=3/4,psi=2/3,A=identity(4);for(let i=1;i<4;i++)A[i][i-1]=-alpha;
 function cycle(e){const relaxed=[0,e[1],alpha*e[1],e[3]],residual=matVec(A,relaxed),z=solveDense([[1,0],[-psi,1]],[residual[1],residual[3]]);if(z.status!=='success')throw Error('coarse solve failed');const Pz=[0,z.x[0],alpha*z.x[0],z.x[1]],corrected=vecSub(relaxed,Pz);return [0,corrected[1],alpha*corrected[1],corrected[3]];}
 const cols=identity(4).map(cycle),E=identity(4).map((_,i)=>cols.map(col=>col[i])),norm=M=>Math.max(...M.map(r=>r.reduce((s,x)=>s+Math.abs(x),0)));
 const inverse=identity(4).map((_,i)=>identity(4).map((_,j)=>i>=j?alpha**(i-j):0));
 let form=true;for(let i=0;i<4;i++)for(let j=0;j<4;j++)form&&=close(E[i][j],i===3&&j===1?-5/48:0);
 return outcome(form&&close(norm(E),5/48)&&close(norm(A),7/4)&&close(norm(inverse),175/64),'independent F-relax/coarse-solve cycle gives single entry-5/48 and infinity operator norms');
}
export const numericalTimeParallelChecks={'numerical-time-parallel-fixture':spec=>family(spec,['dissipative-heat','phase-mismatch','nonlinear-tube','mgrit-two-grid'],timeFixture,'time-parallel')};

function finiteVolume(M,widths,edgeGrowth,loss,daughter,dt,birth=0){
 const flux=[birth,...M.map((x,j)=>edgeGrowth[j]*x/widths[j])];
 const cfl=widths.map((h,j)=>dt*(edgeGrowth[j]/h+loss[j]));
 if(cfl.some(x=>x>1))throw Error('fixture violates CFL');
 return {mass:M.map((x,j)=>x-dt*(flux[j+1]-flux[j])-dt*loss[j]*x+dt*daughter[j].reduce((s,a,l)=>s+a*M[l],0)),flux,cfl};
}
const primitive=(k,a,b)=>(b**(k+1)-a**(k+1))/(k+1);
function populationFixture(v){
 if(v==='triangular-maturation'){
  const a=2,eps=1/2,R=3,t=3,left=a-eps,right=a+eps;
  const moment=k=>(primitive(k+1,left,a)-left*primitive(k,left,a)+right*primitive(k,a,right)-primitive(k+1,a,right))/eps**2;
  const mass=moment(0),mean=moment(1),variance=moment(2)-2*a*mean+a*a*mass;
  const convolution=R*(t*t*mass-2*t*mean+moment(2)),delay=R*(t-a)**2;
  return outcome(close(mass,1)&&close(mean,a)&&close(variance,eps**2/6)&&close(convolution-delay,R*eps**2/6)&&convolution>delay,'piecewise polynomial integration gives unit mass, mean2, variance1/24 and positive finite-width discrepancy1/8');
 }
 if(v==='half-size-division'){
  const edges=[0,.5,1.5,2.5,3.5],widths=edges.slice(1).map((x,j)=>x-edges[j]),centers=widths.map((h,j)=>edges[j]+h/2),M=[0,0,3,0],D=Array.from({length:4},()=>Array(4).fill(0));
  for(let l=0;l<4;l++){const daughter=centers[l]/2;const j=edges.findIndex((x,k)=>k<4&&daughter>=x&&(daughter<edges[k+1]||(k===3&&daughter<=edges[k+1])));if(j>=0)D[j][l]=2;}
  const run=finiteVolume(M,widths,Array(4).fill(.1),Array(4).fill(1),D,.1),N=run.mass.reduce((a,b)=>a+b,0),W=run.mass.reduce((a,b,j)=>a+b*centers[j],0);
  return outcome(D[1][2]===2&&close(Math.max(...run.cfl),.12)&&run.mass.every((x,j)=>close(x,[0,.6,2.67,.03][j]))&&close(N,3.3)&&close(W,6.03),'kernel-to-cell assembly and independent flux update give masses0,.6,2.67,.03, number3.3 and weighted size6.03');
 }
 if(v==='localized-fertility'){
  const beta=a=>Math.max(1-2*Math.abs(a-1.5),0),points=[1.125,1.375,1.625,1.875],birth=points.reduce((s,a)=>s+beta(a)/4,0);
  const triangleArea=1*1/2,run=finiteVolume([0,1,0,0],Array(4).fill(1),Array(4).fill(1),Array(4).fill(1),Array.from({length:4},()=>Array(4).fill(0)),.25,birth);
  return outcome(close(birth,triangleArea)&&close(birth,.5)&&close(Math.max(...run.cfl),.5)&&run.mass.every((x,j)=>close(x,[1/8,1/2,1/4,0][j])),'four midpoint samples give birth1/2, CFL1/2 and masses1/8,1/2,1/4,0; initial corner remains incompatible');
 }
 let M=Array.from({length:4},(_,j)=>Math.exp(-j)-Math.exp(-(j+1))),outflow=0,ok=true;
 for(let k=1;k<=3;k++){const run=finiteVolume(M,Array(4).fill(1),Array(4).fill(1),Array(4).fill(0),Array.from({length:4},()=>Array(4).fill(0)),1);outflow+=run.flux[4];M=run.mass;const retained=M.reduce((a,b)=>a+b,0),tail=Math.exp(-(4-k));ok&&=close(retained,1-tail)&&close(outflow+Math.exp(-4),tail);}
 return outcome(ok,'three independent upwind shifts preserve exact initial-cell masses and separate discarded outflow plus omitted initial tail');
}
export const numericalPopulationChecks={'numerical-population-fixture':spec=>family(spec,['triangular-maturation','half-size-division','localized-fertility','cutoff-shift'],populationFixture,'population')};

function legendreData(){
 const moments=Array.from({length:4},(_,k)=>primitive(k,-1,1)),coeff=solveDense([[moments[0],moments[1]],[moments[1],moments[2]]],[-moments[2],-moments[3]]);
 if(coeff.status!=='success')throw Error('moment matrix singular');const [c0,c1]=coeff.x,disc=c1*c1-4*c0,nodes=[(-c1-Math.sqrt(disc))/2,(-c1+Math.sqrt(disc))/2];
 const w=solveDense([[1,1],nodes],[moments[0],moments[1]]);if(w.status!=='success')throw Error('distinct-node moment solve failed');return {moments,coeff:coeff.x,nodes,weights:w.x};
}
function gaussFixture(v){
 if(v==='one-node-discrete'){
  const atoms=[-1,1],moments=[atoms.length,atoms.reduce((s,x)=>s+x,0)],h0=moments[0],alpha0=moments[1]/h0,node=[alpha0,alpha0],weight=[moments[0],moments[0]],a=-1,b=1,epsX=.25,epsW=.25;
  const certified=node[1]-node[0]<=epsX&&weight[1]-weight[0]<=epsW&&a<node[0]&&node[1]<b;
  return outcome(certified&&h0>0&&alpha0===0&&weight[0]===2,'one-node Jacobi branch from two discrete atoms yields node[0,0],weight[2,2] within strict domain');
 }
 const {moments,coeff,nodes,weights}=legendreData();
 if(v==='cardinal-squares'){
  let ok=true;for(let i=0;i<2;i++){const other=nodes[1-i],denom=(nodes[i]-other)**2,integral=(moments[2]-2*other*moments[1]+other*other*moments[0])/denom;ok&&=close(integral,weights[i])&&integral>0;}
  return outcome(ok,'moment polynomial integration of both cardinal squares equals independently moment-solved positive weights');
 }
 if(v==='tensor-four'){
  let tuples=[[]];for(let j=0;j<4;j++)tuples=tuples.flatMap(t=>nodes.map(x=>[...t,x]));const unique=new Set(tuples.map(t=>JSON.stringify(t))),exponents=[3,2,1,0];
  const quadrature=tuples.reduce((sum,t)=>sum+t.reduce((p,x,j)=>p*weights[nodes.indexOf(x)]*x**exponents[j],1),0),moment=exponents.reduce((p,k)=>p*moments[k],1);
  // Include all4^4 bounded coordinate monomials, not merely the zero odd-moment example.
  let all=true;for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let c=0;c<4;c++)for(let d=0;d<4;d++){const ex=[a,b,c,d],Q=tuples.reduce((s,t)=>s+t.reduce((p,x,j)=>p*weights[nodes.indexOf(x)]*x**ex[j],1),0),I=ex.reduce((p,k)=>p*moments[k],1);all&&=close(Q,I);}
  return outcome(unique.size===16&&close(quadrature,moment)&&all,'explicit tensor enumeration gives16distinct tuples and all256 degree-box monomial moments');
 }
 let all=true;for(let k=0;k<4;k++)all&&=close(nodes.reduce((s,x,j)=>s+weights[j]*x**k,0),moments[k]);
 const beta=moments[2]/moments[0],off=Math.sqrt(beta),eigenvectors=[[1/Math.sqrt(2),-1/Math.sqrt(2)],[1/Math.sqrt(2),1/Math.sqrt(2)]];
 const eig=eigenvectors.every((z,i)=>close(off*z[1],nodes[i]*z[0])&&close(off*z[0],nodes[i]*z[1])&&close(moments[0]*z[0]**2,weights[i]));
 return outcome(all&&eig&&close(coeff[0],-1/3)&&close(coeff[1],0)&&weights.every(w=>close(w,1)),'moments from polynomial primitives determine p2=X^2-1/3, Jacobi eigenpairs, weights1 and degree0-through3 exactness');
}
export const numericalGaussChecks={'numerical-gauss-fixture':spec=>family(spec,['one-node-discrete','cardinal-squares','tensor-four','legendre-two-node'],gaussFixture,'Gaussian quadrature')};
