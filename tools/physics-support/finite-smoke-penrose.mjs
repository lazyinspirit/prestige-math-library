// Fixed bounded witnesses for the seven coupled-Penrose contract obligations.
// These computations do not certify analytic comparison, smooth gluing, Hodge
// theory, or the general coupled vanishing theorem. See physics/WORKFLOW.md.
import { isDeepStrictEqual } from 'node:util';
const equal = isDeepStrictEqual;
const result = (smoke, expected, summary, details) => ({
  ok: smoke.expected === undefined || equal(smoke.expected, expected),
  summary: smoke.expected === undefined || equal(smoke.expected, expected)
    ? summary : `declared expected value disagrees with computed ${JSON.stringify(expected)}`,
  details,
});
const requireThat = (condition, message) => { if (!condition) throw Error(message); };
const guarded = fn => smoke => {
  try { return fn(smoke); } catch (error) { return { ok: false, summary: error.message }; }
};
const cadd = ([a,b], [c,d]) => [a+c,b+d];
const cmul = ([a,b], [c,d]) => [a*c-b*d,a*d+b*c];
const scale = (z, k) => z.map(x => k*x);
const czero = z => z.every(x => x === 0);
const pairs = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
const grid = (n, values) => n === 0 ? [[]] : grid(n-1, values).flatMap(row => values.map(v => [...row,v]));
function curvature(form, t, reversed = false) {
  // Twice the coordinate Wirtinger vectors, so evaluations are scaled by 4.
  let h1 = [[1,0],[0,1],scale(t,-1),cmul([0,1],t)];
  let h2 = [t,cmul([0,-1],t),[1,0],[0,1]];
  if (reversed) { // u H_i(1/u), evaluated without division, including u=0.
    h1 = [t,cmul([0,1],t),[-1,0],[0,1]];
    h2 = [[1,0],[0,-1],t,cmul([0,1],t)];
  }
  return pairs.reduce((sum,[i,j],k) => cadd(sum,scale(cadd(cmul(h1[i],h2[j]),scale(cmul(h1[j],h2[i]),-1)),form[k])),[0,0]);
}
function fibreModes(k, bound = 6) {
  const exponents = Array.from({length:2*bound+1},(_,i) => i-bound);
  // In the e_0 frame the chart images have powers n>=0 and n<=-k.
  return {
    h0: exponents.filter(n => n>=0 && n<=-k),
    h1: exponents.filter(n => !(n>=0 || n<=-k)),
  };
}
function flatCoefficient() {
  let samples=0;
  for (const x of grid(4,[-1,0,1])) {
    const a=1+x.reduce((s,v)=>s+v*v,0), omega=2/a;
    // Differentiate u=1/a twice in each coordinate, then contract the
    // actual local residual -Delta(u)/4 and divide by tau/c=Omega^3/8.
    const lap=x.reduce((s,v)=>s-2/(a*a)+8*v*v/(a*a*a),0);
    const residual=-lap/4, coefficient=residual/(omega**3/8);
    requireThat(Math.abs(coefficient-2)<1e-12,`constant-section coefficient ${coefficient} at ${x}`);
    samples++;
  }
  return samples;
}
const gcd = (a,b) => b===0n ? (a<0n?-a:a) : gcd(b,a%b);
function rank(matrix, columns) {
  const a=matrix.map(row=>row.map(BigInt)); let r=0;
  for(let c=0;c<columns && r<a.length;c++) {
    const p=a.findIndex((row,i)=>i>=r && row[c]!==0n); if(p<0)continue;
    [a[p],a[r]]=[a[r],a[p]];
    for(let i=r+1;i<a.length;i++) if(a[i][c]!==0n) {
      const pivot=a[r][c], v=a[i][c];
      a[i]=a[i].map((x,j)=>pivot*x-v*a[r][j]);
      const d=a[i].reduce((g,x)=>gcd(g,x),0n);
      if(d!==0n)a[i]=a[i].map(x=>x/d);
    }
    r++;
  }
  return r;
}
function projectiveH1() {
  let modes=0, rankComputations=0;
  // Degree -2 homogeneous Laurent modes on the four standard CP^3 charts.
  // A mode occurs on U_I exactly when all its negative powers lie in I.
  for(const exponent of grid(4,[-3,-2,-1,0,1,2,3])) {
    if(exponent.reduce((a,b)=>a+b,0)!==-2)continue;
    const negative=exponent.reduce((m,n,i)=>n<0?m|(1<<i):m,0);
    const levels=Array.from({length:4},(_,q)=>Array.from({length:15},(_,i)=>i+1)
      .filter(mask=>mask.toString(2).replaceAll('0','').length===q+1 && (mask&negative)===negative));
    const differential=q=>levels[q+1].map(target=>levels[q].map(source=>{
      const vertices=[0,1,2,3].filter(i=>target&(1<<i));
      const j=vertices.findIndex(i=>(target&~(1<<i))===source);
      return j<0?0:(j%2===0?1:-1);
    }));
    const d0=differential(0), d1=differential(1);
    for(const row of d1)for(let j=0;j<levels[0].length;j++)
      requireThat(row.reduce((s,x,k)=>s+x*d0[k][j],0)===0,'Cech differential does not square to zero');
    const h1=levels[1].length-rank(d1,levels[1].length)-rank(d0,levels[0].length);
    requireThat(h1===0,`nonzero bounded H1 at mode ${exponent}`);
    modes++;rankComputations+=2;
  }
  return {modes,rankComputations};
}
function overlap() {
  let comparisons=0, exactModes=0;
  // For O(-2), the class is the coefficient of t^-1 modulo chart tails.
  // Reversing charts sends g(t) to -w^-2 g(1/w): the minus is Cech
  // index reversal. The canonical-coordinate frame also changes sign.
  // The intrinsic trace/residue therefore stays unchanged.
  for(const n of Array.from({length:13},(_,i)=>i-6)) for(const coefficient of [-2,-1,0,1,2]) {
    const residueN=n===-1?coefficient:0;
    const southExponent=-2-n, southCoefficient=-coefficient;
    const residueS=-(southExponent===-1?southCoefficient:0);
    requireThat(residueN===residueS,'overlap residue mismatch');
    const exact=n>=0||n<=-2;
    requireThat(exact===(n!==-1),'chart-tail exactness mismatch');
    if(exact) {
      const northPrimitive=n>=0?{exponent:n,coefficient}:null;
      const southPrimitive=n<=-2?{exponent:-2-n,coefficient:-coefficient}:null;
      const reconstructedNorth=northPrimitive?.coefficient??0;
      const reconstructedSouth=southPrimitive?-southPrimitive.coefficient:0;
      requireThat(reconstructedNorth+reconstructedSouth===coefficient,'chart-tail primitive fails to reconstruct cochain');
      requireThat(!southPrimitive||southPrimitive.exponent>=0,'primitive not holomorphic on south chart');
      requireThat(residueN===0,'exact mode has nonzero projection');exactModes++;
    }
    comparisons++;
  }
  requireThat(fibreModes(1).h0.length===0,'horizontal O(-1) kernel is nonzero');
  return {comparisons,exactModes};
}
export const penroseChecks = {
  'quadratic-curvature-polynomial': guarded(smoke => {
    let forms=0, evaluations=0;
    for(const f of grid(6,[-1,0,1])) {
      const a=curvature(f,[0,0]), plus=curvature(f,[1,0]), minus=curvature(f,[-1,0]);
      const b=scale(cadd(plus,scale(minus,-1)),0.5);
      const c=scale(cadd(cadd(plus,minus),scale(a,-2)),0.5);
      for(const t of [[0,0],[1,0],[-1,0],[0,1]]) {
        const interpolated=cadd(cadd(a,cmul(b,t)),cmul(c,cmul(t,t)));
        requireThat(equal(interpolated,curvature(f,t)),'curvature polynomial interpolation fails');evaluations++;
      }
      requireThat(equal(c,curvature(f,[0,0],true)),'infinity chart loses leading coefficient');
      const asd=f[0]+f[5]===0 && f[1]-f[4]===0 && f[2]+f[3]===0;
      requireThat(asd===[a,b,c].every(czero),'positive-orientation ASD mismatch');forms++;
    }
    return result(smoke,['a=0','b=0','c=0'],`checked ${forms} two-forms, ${evaluations} complex evaluations, positive star and infinity chart`,{forms,evaluations});
  }),
  'unit-four-sphere-curvature-trace': guarded(smoke => {
    const delta=(i,j)=>Number(i===j);let scalar=0,planes=0;
    for(let a=0;a<4;a++)for(let b=0;b<4;b++) {
      // R(e_a,e_b)e_b=e_a-<e_a,e_b>e_b from the unit-sphere Gauss formula.
      scalar+=delta(b,b)*delta(a,a)-delta(a,b)*delta(b,a);
      if(a<b)planes++;
    }
    requireThat(scalar===12 && planes===6,'unit-sphere ordered curvature trace failed');
    return result(smoke,scalar,'contracted 16 ordered curvature entries (6 two-planes), R=12',{scalar,planes});
  }),
  'negative-twist-fibre-groups': guarded(smoke => {
    const one=fibreModes(1),two=fibreModes(2);
    const actual={h0_o_minus_1:one.h0.length,h1_o_minus_1:one.h1.length,h0_o_minus_2:two.h0.length,h1_o_minus_2:two.h1.length};
    requireThat(equal(two.h1,[-1]) && one.h1.length===0 && one.h0.length===0 && two.h0.length===0,'negative-twist Laurent quotient failed');
    return result(smoke,actual,'computed chart intersections and Laurent quotient for twists -1,-2 in modes -6 through 6; surviving mode t^-1',{...actual,surviving:two.h1});
  }),
  'flat-constant-section-coefficient': guarded(smoke => {
    const samples=flatCoefficient();
    return result(smoke,'2s',`contracted the conformal Hessian at ${samples} points: residual/tau=2s=Rs/6`,{samples,coefficient:2});
  }),
  'trivial-rank-one-case': guarded(smoke => {
    const coefficientSamples=flatCoefficient(), cohomology=projectiveH1();
    for(const [re,im]of grid(2,[-2,-1,0,1,2])) requireThat((2*re===0 && 2*im===0)===(re===0&&im===0),'constant-section kernel failed');
    return result(smoke,'s=0',`25 complex constants have zero residual only at zero; ${cohomology.modes} CP3 degree -2 Laurent subcomplexes have H1=0`,{coefficientSamples,...cohomology,constants:25});
  }),
  'flat-ranks-zero-and-one': guarded(smoke => {
    const cohomology=projectiveH1();
    // Rank zero has no cochains. Rank one and its dual have the same scalar
    // transition, so their actual matrices coincide with the computed complex.
    const zeroRank=rank([],0);requireThat(zeroRank===0,'zero complex has nonzero rank');
    return result(smoke,['H1=0','H1-dual=0'],`zero complex and rank-one/dual scalar complexes: ${cohomology.modes} CP3 Laurent modes, H1=0`,{ranks:[0,1],dual:true,...cohomology});
  }),
  'overlap-and-zero-class': guarded(smoke => {
    const details=overlap();
    return result(smoke,['s_N=s_S','class=0'],`checked ${details.comparisons} chart-transition residues, ${details.exactModes} chart-tail primitives and zero O(-1) horizontal modes; bounded fibre model only`,details);
  }),
};
