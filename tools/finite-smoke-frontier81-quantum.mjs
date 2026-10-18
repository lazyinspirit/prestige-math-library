// Fixed bounded computations for the 27 frontier-81 quantum smoke obligations.
// No asymptotic assertion or general operator/category theorem is certified.
const close = (a,b) => Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-11;
const insist = (p,m) => { if(!p) throw Error(m); };
const entropy = xs => -xs.reduce((s,x)=>s+(x===0?0:x*Math.log(x)),0);
const mm = (a,b) => a.map(r=>b[0].map((_,j)=>r.reduce((s,x,k)=>s+x*b[k][j],0)));
const tr = a => a.reduce((s,r,i)=>s+r[i],0);
const transpose = a => a[0].map((_,j)=>a.map(r=>r[j]));
const eye = n => Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j)));
const eq = (a,b) => a.length===b.length&&a.every((r,i)=>r.length===b[i].length&&r.every((x,j)=>close(x,b[i][j])));
const scale = (a,c)=>a.map(r=>r.map(x=>x*c));
const outer = v=>v.map(x=>v.map(y=>x*y));
const eig2 = a => { const d=Math.hypot(a[0][0]-a[1][1],2*a[0][1]); return [(tr(a)+d)/2,(tr(a)-d)/2]; };
const pop = n=>{let c=0; for(;n;n&=n-1)c++; return c;};
const dot = (x,y)=>pop(x&y)%2;
function rank(rows) { const piv=new Map(); for(let r of rows) { while(r) { const p=31-Math.clz32(r); if(piv.has(p))r^=piv.get(p); else {piv.set(p,r);break;} } } return piv.size; }
function span(rows) { let xs=[0]; for(const r of rows) { const ys=xs.map(x=>x^r); xs=[...new Set([...xs,...ys])]; } return new Set(xs); }
function mask(indices) { return indices.reduce((s,e)=>s^(1<<e),0); }
function torus() {
 const L=3, mod=x=>(x+L)%L, h=(i,j)=>mod(i)*L+mod(j), v=(i,j)=>L*L+h(i,j);
 const edges=Array.from({length:18},(_,e)=>{const k=e%9,i=Math.floor(k/3),j=k%3;return e<9?[[i,j],[mod(i+1),j]]:[[i,j],[i,mod(j+1)]];});
 const stars=Array.from({length:9},(_,q)=>mask(edges.flatMap((ends,e)=>ends.some(p=>p[0]===Math.floor(q/3)&&p[1]===q%3)?[e]:[])));
 const faces=Array.from({length:9},(_,q)=>{const i=Math.floor(q/3),j=q%3;return mask([h(i,j),v(i+1,j),h(i,j+1),v(i,j)]);});
 return {L,edges,stars,faces,z:[mask([h(0,0),h(1,0),h(2,0)]),mask([v(0,0),v(0,1),v(0,2)])],x:[mask([h(0,0),h(0,1),h(0,2)]),mask([v(0,0),v(1,0),v(2,0)])],h,v};
}
function inventory(t) {
 insist(t.edges.length===18&&t.stars.length===9&&t.faces.length===9,'cell counts');
 insist(t.stars.every(s=>pop(s)===4)&&t.faces.every(s=>pop(s)===4),'four distinct support edges');
 insist(t.edges.every(([a,b])=>String(a)!==String(b)),'distinct endpoints');
}
function ranks(t) {
 for(const rows of [t.stars,t.faces]) {
  insist(rank(rows)===8,'binary rank');
  const zeros=[];for(let s=0;s<512;s++) {let r=0;for(let j=0;j<9;j++)if(s&(1<<j))r^=rows[j];if(r===0)zeros.push(s);}
  insist(String(zeros)==='0,511','only empty and full relations');
 }
}
function commutation(t) {
 for(const a of t.stars)for(const b of t.faces)insist([0,2].includes(pop(a&b)),'star-face overlap');
 for(let e=0;e<18;e++)for(const rs of [t.stars,t.faces])insist(rs.filter(r=>r&(1<<e)).length===2,'edge degree');
}
function loops(t) {
 for(let i=0;i<2;i++)for(let j=0;j<2;j++)insist(pop(t.z[i]&t.x[j])===+(i===j),'loop intersection matrix');
 for(const z of t.z)insist(t.stars.every(a=>!dot(a,z))&&!span(t.faces).has(z),'Z logical class');
 for(const x of t.x)insist(t.faces.every(a=>!dot(a,x))&&!span(t.stars).has(x),'X logical class');
}
function distances(stars,faces,n) {
 const sb=span(stars),fb=span(faces);let dz=Infinity,dx=Infinity;
 for(let s=1;s<2**n;s++) {const w=pop(s); if(w<dz&&!fb.has(s)&&stars.every(r=>!dot(r,s)))dz=w;if(w<dx&&!sb.has(s)&&faces.every(r=>!dot(r,s)))dx=w;}
 return [dz,dx];
}
function planar() {
 const d=3, edges=[]; for(let i=0;i<=d;i++)for(let j=0;j<=d;j++){if(i<d)edges.push([[i,j],[i+1,j]]);if(j<d&&i>0&&i<d)edges.push([[i,j],[i,j+1]]);}
 const stars=[];for(let i=1;i<d;i++)for(let j=0;j<=d;j++)stars.push(mask(edges.flatMap((ab,e)=>ab.some(p=>p[0]===i&&p[1]===j)?[e]:[])));
 const faces=[];for(let i=0;i<d;i++)for(let j=0;j<d;j++)faces.push(mask(edges.flatMap(([a,b],e)=>a[0]>=i&&b[0]<=i+1&&a[1]>=j&&b[1]<=j+1?[e]:[])));
 return {edges,stars,faces};
}
const computations={
 'gentle':()=>{for(const lambda of [1,0]) {const rho=1,u=1-lambda,disturbance=Math.abs(rho-Math.sqrt(lambda)*rho*Math.sqrt(lambda));insist(close(disturbance,u)&&disturbance<=2*Math.sqrt(u),'unnormalized scalar disturbance');}return 'rho=[1], Lambda=1,0: disturbances 0,1 and bounds 0,2';},
 'sqrt-order':()=>{const A=0,B=1;const sa=Math.sqrt(A),sb=Math.sqrt(B);insist(close(sa*sa,A)&&close(sb*sb,B)&&sa<=sb,'singular square-root order');return 'A=[0], B=[1]: spectral roots 0,1, nonnegative ordered difference';},
 'hayashi-nagaoka':()=>{const values=[];for(const [s,t]of [[0,0],[1,0],[0,1]]) {const x=s+t,r=x===0?0:1/Math.sqrt(x),left=1-r*s*r,right=2*(1-s)+4*t;insist(left<=right,'support-inverse inequality');values.push([left,right]);}insist(eq(values,[[1,2],[0,0],[1,6]]),'endpoint values');return 'support inverse computed at (S,T)=(0,0),(1,0),(0,1): 1<=2, 0<=0, 1<=6';},
 'entropy-zero':()=>{for(const spectrum of [[1],[1,0]])insist(close(entropy(spectrum),0),'zero eigenvalue entropy');return 'entropy independently summed for spectra (1) and (1,0), including 0 log 0';},
 'packing-one':()=>{for(const u of [0,1/4,1]) {const M=1,d=1,D=1,cross=Array.from({length:M},(_,m)=>Array.from({length:M},(_,j)=>j===m?0:d/D).reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b,0)/M;const bound=2*(u+2*Math.sqrt(u))+4*cross;insist(cross===0&&close(bound,2*(u+2*Math.sqrt(u))),'one-message cross term'); // Actual one-state square-root POVM, Pi=Pi_x=I, has zero decoding error.
 const gamma=1,lambda=(1/Math.sqrt(gamma))*gamma*(1/Math.sqrt(gamma)),error=1-lambda;insist(error<=bound,'M=1 decoding bound');}return 'M=1, d=D=1 and u=0,1/4,1: explicitly empty cross sums; one-state POVM error 0';},
 'schmidt-pure':()=>{const eig=[1,0,0],M=1,top=eig.slice(0,M).reduce((a,b)=>a+b,0); // Encoder E_j=<j| and decoder D=|0> give K_j=|0><j|.
 let fidelity=0;for(let j=0;j<3;j++){const K=Array.from({length:3},(_,a)=>Array.from({length:3},(_,b)=>+(a===0&&b===j)));const overlap=K.reduce((s,r,i)=>s+eig[i]*r[i],0);fidelity+=overlap**2;}
 insist(top===1&&fidelity===1&&fidelity<=top,'rank-one source compression');return 'spectrum (1,0,0), M=1: direct three-Kraus encoder/prepare decoder fidelity 1, top-eigenvalue sum 1';},
 'typical-pure':()=>{for(let n=1;n<=8;n++){const probs=[1];const selected=probs.filter(p=>Math.abs(-Math.log(p)-n*entropy([1]))<=n/4);insist(selected.length===1&&selected.reduce((a,b)=>a+b,0)===1&&selected.length<=Math.exp(n/4),'pure typical projector');}return 'rho=[1], n=1..8, delta=1/4: sole eigenword surprisal 0, rank=mass=1';},
 'schumacher-pure':()=>{for(let n=1;n<=8;n++){const spectrum=Array.from({length:2**n},(_,i)=>+(i===0));const selected=spectrum.filter(p=>p>0&&Math.abs(-Math.log(p)-n*entropy([1,0]))<=n/4);const rank=selected.length,M=rank+1,mass=selected.reduce((a,b)=>a+b,0);insist(rank===1&&M===2&&mass**2===1&&close(Math.log(M)/n,Math.LN2/n),'pure Schumacher flag construction');}return 'rho=diag(1,0), n=1..8, delta=1/4: rank 1 typical support, flag code M=2, fidelity contribution 1 and rate ln(2)/n';},
 'hsw-single':()=>{for(const eig of [[1],[1,0],[1/2,1/2],[1/4,3/4]]){const p=[1],average=eig.map(x=>p[0]*x),chi=entropy(average)-p[0]*entropy(eig);const prob=average.reduce((a,b)=>a+b,0);insist(close(chi,0)&&close(1-prob,0),'singleton Holevo or one-message POVM');}return '|X|=1 at four fixed spectra: direct entropy difference chi=0 and POVM {I} error=0';},
 'qubit-rates':()=>{const ps=[0,1/2,1],expected=[0,Math.LN2,0];ps.forEach((p,i)=>{const S=entropy([p,1-p]);insist(close(S,expected[i])&&close(S/Math.LN2,+(i===1)),'qubit entropy/unit conversion');});return 'p=0,1/2,1: direct spectral entropies 0,ln2,0 nats and 0,1,0 qubits';},
 'fixed-povm':()=>{const basis=[[1,0],[0,1]],outcomes=[[1/Math.sqrt(2),1/Math.sqrt(2)],[1/Math.sqrt(2),-1/Math.sqrt(2)]];const joint=basis.map(v=>outcomes.map(w=>0.5*v.reduce((s,x,i)=>s+x*w[i],0)**2));let I=0;for(let i=0;i<2;i++)for(let j=0;j<2;j++){const px=joint[i].reduce((a,b)=>a+b,0),py=joint.reduce((s,r)=>s+r[j],0),p=joint[i][j];I+=p*Math.log(p/(px*py));insist(close(p,1/4),'Born joint probabilities');}const chi=entropy([1/2,1/2])-entropy([1,0]);insist(close(I,0)&&close(chi,Math.LN2)&&I<chi,'strict Holevo witness');return 'four Born joint probabilities 1/4, mutual-information sum 0, spectral Holevo ln2';},
 'binary-pure':()=>{for(const c of [0,1]){const v=[c,Math.sqrt(1-c*c)],avg=outer(v).map((r,i)=>r.map((x,j)=>(x+ +(i===0&&j===0))/2));const vals=eig2(avg),chi=entropy(vals);insist(vals.every((x,i)=>close(x,(1+(i===0?c:-c))/2))&&close(chi,c===0?Math.LN2:0),'binary pure output entropy');}return 'c=0,1: form two output projectors and diagonalize average via characteristic discriminant; chi=ln2,0';},
 'toric-inventory':()=>{inventory(torus());return 'modulo-3 endpoint construction: 9 vertices, 18 edges, 9 four-edge stars and 9 four-edge faces';},
 'toric-ranks':()=>{ranks(torus());return 'two explicit 9x18 F2 matrices rank 8; all 512 row subsets each checked, exactly empty/full relations';},
 'toric-commutation':()=>{commutation(torus());return 'all 81 star-face overlaps are 0 or 2; every one of 18 edges has star degree=face degree=2';},
 'toric-dimension':()=>{const t=torus();ranks(t);commutation(t);const r=rank(t.stars)+rank(t.faces),n=t.edges.length;insist(r===16&&2**(n-r)===4,'separate X/Z rank and code dimension');return 'explicit independent X and Z coordinate ranks 8+8=16 on 18 qubits; dimension 2^(18-16)=4';},
 'toric-loops':()=>{loops(torus());return 'four coordinate loops: intersection matrix I2, check parity zero, and exclusion from explicitly enumerated stabilizer spans';},
 'toric-gap':()=>{const t=torus();for(const [je,jm]of [[1,1],[1,2],[3,1],[1/2,3/4]]) {let least=Infinity;for(let a=0;a<512;a++)if(pop(a)%2===0)for(let b=0;b<512;b++)if(pop(b)%2===0&&(a||b))least=Math.min(least,2*je*pop(a)+2*jm*pop(b));insist(close(least,4*Math.min(je,jm)),'even syndrome gap');for(let e=0;e<18;e++){insist(t.stars.filter(r=>r&(1<<e)).length===2,'one-edge e defect witness');insist(t.faces.filter(r=>r&(1<<e)).length===2,'one-edge m defect witness');}}return 'all 65,535 nonzero even-parity sign pairs at four positive coupling pairs; one-edge two-defect attainability checked';},
 'toric-worked':()=>{const t=torus();inventory(t);ranks(t);commutation(t);loops(t);let support=0;for(let k=0;k<3;k++){support^=1<<t.h(k,0);const syndrome=t.stars.flatMap((r,q)=>dot(r,support)?[q]:[]);const expected=k===0?[0,3]:k===1?[0,6]:[];insist(String(syndrome)===String(expected),'successive loop endpoint syndrome');}return 'L=3 inventory, ranks, relations, loops plus computed prefix syndromes {q00,q10}, {q00,q20}, empty';},
 'planar-toric':()=>{const t=torus(),p=planar();insist(p.edges.length===18,'relative edge count');const pd=distances(p.stars,p.faces,18),td=distances(t.stars,t.faces,18);insist(String(pd)==='3,4'&&String(td)==='3,3','exhaustive CSS distances');insist(2**(18-rank(p.stars)-rank(p.faces))===2&&2**(18-rank(t.stars)-rank(t.faces))===4,'code dimensions');return 'enumerated every 18-bit support in planar relative and toric periodic CSS models: distances (3,4)/(3,3), code dimensions 2/4';},
 'fusion-measurement':()=>{for(const state of [[Math.sqrt(3/5),Math.sqrt(2/5)],[1,0],[0,1]]){const probabilities=[];for(let a=0;a<2;a++){const projected=state.map((x,i)=>i===a?x:0),p=projected.reduce((s,x)=>s+x*x,0);probabilities.push(p);if(p===0)insist(projected.every(x=>x===0),'zero branch');else{const normalized=projected.map(x=>x/Math.sqrt(p));insist(normalized.every((x,i)=>close(x,+(i===a))),'conditional basis branch');}}insist(close(probabilities.reduce((a,b)=>a+b,0),1),'Born normalization');if(state.every(x=>x>0))insist(close(probabilities[0],3/5)&&close(probabilities[1],2/5),'3/5,2/5 branches');}return 'project both channel basis effects on the authored vector and two zero-coefficient endpoints; probabilities and all defined conditional states checked';},
 'controlled-phase':()=>{const psi=[1/Math.sqrt(2),0,1/Math.sqrt(2),0],diagonals=[[1,1,1,1],[1,1,-1,-1]],laws=[];for(const diag of diagonals){const out=psi.map((x,i)=>x*diag[i]);laws.push([1,-1].map(sign=>((out[0]+sign*out[2])/Math.sqrt(2))**2+((out[1]+sign*out[3])/Math.sqrt(2))**2));}insist(eq(laws,[[1,0],[0,1]])&&close(laws[0].reduce((s,p,i)=>s+Math.abs(p-laws[1][i]),0)/2,1),'controlled global phase Born witness');return 'multiply C(I), C(-I) by |+0>, project control in X basis: laws (1,0)/(0,1), TV=1';},
 'b6-identity':()=>{const U=eye(4),det=U.reduce((s,r,i)=>s*r[i],1),word=[];let exponent=0;for(const letter of word)exponent+=Math.sign(letter);for(const n of [5,8]){const target=eye(n);target[4][4]=1/det;let braid=eye(n);for(const _ of word)throw Error('unexpected nonempty fixture');insist(eq(target,braid),'empty braid block error');const V=Array.from({length:n},(_,i)=>Array.from({length:4},(_,j)=>+(i===j)));insist(eq(mm(transpose(V),mm(braid,V)),U),'code restriction');const Q=eye(n).map((r,i)=>r.map((x,j)=>x-(i<4&&i===j?1:0)));insist(eq(mm(Q,mm(braid,V)),Array.from({length:n},()=>Array(4).fill(0))),'leakage');}insist(exponent===0&&Math.cos(-4*Math.PI/5*exponent)===1&&Math.sin(-4*Math.PI/5*exponent)===0,'common phase');return 'empty word in dimensions 5,8: determinant-corrected targets, embedded code restriction and orthogonal leakage computed; exponent=0 phase=1';},
 'sk-budget':()=>{let numerator=-13,denominator=1;const levels=[[numerator,denominator]];for(let j=0;j<2;j++){numerator=12*denominator+3*numerator;denominator*=2;levels.push([numerator,denominator]);}insist(String(levels)==='-13,1,-27,2,-57,4','exact log2 recurrence');const J=levels.findIndex(([a,b])=>a<=-14*b);insist(J===2&&5**J===25,'minimal level and symbolic length');for(const M of [1,2,10]){const epsilon=2**-14,eta0=2**-13,delta=Math.min(epsilon/(2*M),eta0/2);insist(M*delta<=epsilon/2,'factor error allocation');}return 'exact rational base-2 exponent recurrence -13,-27/2,-57/4; first level <=-14 is 2, 5^2=25; allocations checked at M=1,2,10';},
 'multiplicity-two':()=>{const surrounding=['fixed-left','fixed-right'],paths=[0,1].map(mu=>[...surrounding,mu]);const basis=paths.map((_,i)=>paths.map((_,j)=>+(i===j)));insist(new Set(paths.map(x=>JSON.stringify(x))).size===2&&rank(basis.map(r=>mask(r.flatMap((x,j)=>x?[j]:[]))))===2,'independent multiplicity-index states');return 'two distinct complete tuples with fixed surrounding labels and mu=0,1 give a 2x2 identity Gram matrix of rank 2';},
 'ising-periodic':()=>{const labels=['D','1','eta'],fuses=(a,b)=>a==='D'?b!=='D':b==='D',paths=[];for(const a of labels)for(const b of labels)if(fuses(a,b)&&fuses(b,a))paths.push([a,b]);insist(paths.length===4&&paths.filter(p=>p[0]==='D').length===2&&paths.filter(p=>p[1]==='D').length===2,'cyclic Ising paths');const shift=paths.map(p=>paths.findIndex(q=>q[0]===p[1]&&q[1]===p[0]));insist(new Set(shift).size===4&&shift.every((j,i)=>j!==i&&shift[j]===i),'one-step shift exchanges sectors');return 'enumerate all 3^2 cyclic label pairs using D fusion: four closed paths, two in each parity sector; shift is sector-exchanging involution';},
 'fib-projector':()=>{const phi=(1+Math.sqrt(5))/2,u=1/phi,v=1/Math.sqrt(phi),F=[[u,v],[v,-u]],P1=[[1,0],[0,0]],P2=mm(transpose(F),mm(P1,F));insist(eq(mm(transpose(F),F),eye(2)),'F unitarity');insist(eq(P2,[[u*u,u*v],[u*v,v*v]])&&eq(mm(P2,P2),P2)&&close(tr(P2),1)&&close(P2[0][0]*P2[1][1]-P2[0][1]*P2[1][0],0),'rank-one channel projector');insist(eq(mm(P1,mm(P2,P1)),scale(P1,phi**-2)),'corner TL coefficient');return 'direct F transpose/P1/F products: unitarity, displayed P2, idempotence, trace 1 determinant 0 and corner factor phi^-2';}
};
const allowed=new Set(['check','asserts','claim','checked_in','case','result','id','name','status','evidence','command','input','calculation','fixture']);
export const frontier81QuantumChecks=Object.fromEntries(Object.entries(computations).map(([name,compute])=>[`frontier81-quantum-${name}`,s=>{
 try { insist(s&&typeof s==='object'&&!Array.isArray(s),'expected obligation object');insist(Object.keys(s).every(k=>allowed.has(k)),'unsupported fixture parameter');insist(s.fixture===`frontier81-quantum-${name}-v1`,'unsupported or missing fixed fixture');const summary=compute();return {ok:true,summary:`${summary}; bounded fixture only`}; }catch(error){return {ok:false,summary:error.message};}
}]));
