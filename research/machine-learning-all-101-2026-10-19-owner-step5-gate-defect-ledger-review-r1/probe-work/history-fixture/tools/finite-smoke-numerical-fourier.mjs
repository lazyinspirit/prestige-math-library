// Research-only unexecuted proposal. Six bounded periodic-grid falsification fixtures.
// No finite fixture proves a universal power estimate, a refining-family failure,
// existence/nonexistence of a common-space lift, or the full source theorem.
const FIXTURES = [
  'n2-wave-root-boundary', 'n2-periodic-alias-boundary',
  'n2-wave-nyquist-endpoint-and-supercfl', 'n4-z-i-upwind-downwind',
  'n4-centered-cfl-half', 'n4-upwind-grid-mode-not-common-space-lift',
];
const expect = (test, message) => { if (!test) throw new Error(message); };
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const add = ([a,b],[c,d]) => [a+c,b+d];
const scale = (a,[x,y]) => [a*x,a*y];
const mul = ([a,b],[c,d]) => [a*c-b*d,a*d+b*c];
const sub = (a,b) => add(a,scale(-1,b));
const abs2 = ([a,b]) => a*a+b*b;
const near = (a,b) => Math.abs(a-b) <= 1e-11*Math.max(1,Math.abs(a),Math.abs(b));
const same = (x,y) => x.length===y.length && x.every((z,i)=>near(z[0],y[i][0])&&near(z[1],y[i][1]));
const times = (g,x) => x.map(z=>mul(g,z));
const norm2 = x => x.reduce((s,z)=>s+abs2(z),0); // h=1 in every fixture.
const mode2 = () => [[1,0],[-1,0]];
const mode4 = () => [[1,0],[0,1],[-1,0],[0,-1]];
const previous = (j,n) => (j+n-1)%n;
const next = (j,n) => (j+1)%n;
// Apply the ORIGINAL cyclic stencils, not the expected scalar symbol formula.
function stencil(kind,x,nu) {
  const n=x.length;
  return x.map((u,j)=>{
    const left=x[previous(j,n)],right=x[next(j,n)];
    if(kind==='upwind')return sub(u,scale(nu,sub(u,left)));
    if(kind==='downwind')return sub(u,scale(nu,sub(right,u)));
    if(kind==='centered')return sub(u,scale(nu/2,sub(right,left)));
    if(kind==='lax-friedrichs')return sub(scale(.5,add(right,left)),scale(nu/2,sub(right,left)));
    if(kind==='lax-wendroff')return add(sub(u,scale(nu/2,sub(right,left))),scale(nu*nu/2,add(sub(right,scale(2,u)),left)));
    throw new Error('unknown stencil');
  });
}
function waveStep(current,old,nu) {
  return current.map((u,j)=>add(sub(scale(2,u),old[j]),scale(nu*nu,add(sub(current[next(j,current.length)],scale(2,u)),current[previous(j,current.length)]))));
}
// Infer the scalar recurrence from the actual vector stencil by probing its two
// independent start states, then compare with the source's characteristic roots.
function waveCoefficient(nu) {
  const v=mode2(),zero=v.map(()=>[0,0]);
  const a=waveStep(v,zero,nu)[0][0], b=waveStep(zero,v,nu)[0][0];
  expect(same(waveStep(v,zero,nu),v.map(z=>scale(a,z)))&&b===-1,'wave Nyquist mode/probe mismatch');
  return {a,b};
}
function waveRoots() {
  // nu^2=1/2 is checked via the stencil coefficient, with binary64 tolerance
  // only for the irrational nu and root components. Other inputs are dyadic.
  const strict=waveCoefficient(1/Math.sqrt(2));
  expect(near(strict.a,0)&&strict.b===-1,'nu=1/sqrt2 roots are not +/-i');
  const endpoint=waveCoefficient(1);
  expect(endpoint.a===-2&&endpoint.b===-1,'nu=1 polynomial is not (r+1)^2');
  const v=mode2();let compatibleOld=v,compatible=v.map(z=>scale(-1,z));
  let parasiticOld=v,parasitic=v.map(()=>[0,0]);
  for(let n=2;n<=12;n++) {
    const c=waveStep(compatible,compatibleOld,1),p=waveStep(parasitic,parasiticOld,1);
    expect(same(c,v.map(z=>scale((-1)**n,z))),'compatible Nyquist start grew');
    expect(same(p,v.map(z=>scale(((-1)**n)*(1-n),z))),'parasitic Nyquist recurrence differs');
    [compatibleOld,compatible]=[compatible,c];[parasiticOld,parasitic]=[parasitic,p];
  }
  return 'N=2 wave: independently probed roots +/-i at nu=1/sqrt2; repeated -1 at nu=1; 12-level compatible and parasitic starts distinguished';
}
function advectionAliases() {
  const v=mode2();let samples=0;
  for(const nu of [0,.25,.5,1,1.5,2]) {
    expect(same(stencil('centered',v,nu),v),'N=2 centered alias differs from identity');
    expect(same(stencil('lax-friedrichs',v,nu),times([-1,0],v)),'N=2 LF alias modulus differs from1');
    samples++;
  }
  expect(norm2(stencil('upwind',v,1.5))>norm2(v),'N=2 super-CFL upwind did not grow');
  expect(norm2(stencil('lax-wendroff',v,1.5))>norm2(v),'N=2 super-CFL LW did not grow');
  return `N=2: ${samples} fixed nu samples preserve centered/LF aliases, including super-CFL; independent upwind/LW comparison grows`;
}
// Direct modified-energy evaluation with h=k=1 and c=nu. The finite cyclic
// forward differences are formed independently of the claimed modal energy.
function energy(Y,X,nu) {
  let difference=0,gradient=0;
  for(let j=0;j<X.length;j++) {
    difference+=abs2(sub(Y[j],X[j]));
    const dy=sub(Y[next(j,Y.length)],Y[j]),dx=sub(X[next(j,X.length)],X[j]);
    gradient+=dy[0]*dx[0]+dy[1]*dx[1];
  }
  return difference/2+nu*nu*gradient/2;
}
function waveEnergy() {
  const X=mode2(),Y=times([-1,0],X),zero=X.map(()=>[0,0]);
  expect(energy(Y,X,1)===0,'endpoint Nyquist energy is not semidefinite witness0');
  expect(energy(Y,X,2)===-6*norm2(X),'nu=2 negative modified energy coefficient differs');
  expect(energy(zero,X,2)>0,'nu=2 lacks independent positive energy witness');
  const {a,b}=waveCoefficient(2);expect(a===-14&&b===-1,'nu=2 wave polynomial coefficients differ');
  const roots=[-7+4*Math.sqrt(3),-7-4*Math.sqrt(3)];
  expect(roots.every(r=>near(r*r-a*r-b,0))&&roots.some(r=>Math.abs(r)>1),'nu=2 roots do not give claimed growing mode');
  return 'N=2: nu=1 zero modified-energy witness; nu=2 negative -6||X||^2 and positive independent witness; roots -7+/-4sqrt3 verified from stencil';
}
function upwindDownwind() {
  const v=mode4(),up=stencil('upwind',v,.5),down=stencil('downwind',v,.5);
  expect(same(up,times([.5,-.5],v))&&same(down,times([1.5,-.5],v)),'N=4 z=i up/down stencil multipliers differ');
  expect(norm2(up)/norm2(v)===.5&&norm2(down)/norm2(v)===2.5,'N=4 up/down norm squares differ');
  let u=v,d=v;
  for(let k=1;k<=8;k++) {u=stencil('upwind',u,.5);d=stencil('downwind',d,.5);expect(near(norm2(u)/norm2(v),.5**k)&&near(norm2(d)/norm2(v),2.5**k),'bounded up/down power recurrence differs');}
  return 'N=4,z=i,nu=1/2: raw up/down stencils yield (1-i)/2 and(3-i)/2, squared norm ratios1/2 and5/2; eight powers checked';
}
function centered() {
  const v=mode4(),out=stencil('centered',v,.5);
  expect(same(out,times([1,-.5],v))&&norm2(out)/norm2(v)===1.25,'centered z=i multiplier/norm differ');
  let x=v;for(let k=1;k<=8;k++){x=stencil('centered',x,.5);expect(near(norm2(x)/norm2(v),1.25**k),'bounded centered powers differ');}
  return 'N=4,z=i,nu=1/2: centered raw stencil gives1-i/2, norm-square5/4 and eight growing powers; no continuum consistency or refining-family theorem proved';
}
function commonSpaceLimit() {
  // Check all four columns of the N=4 Fourier basis as cyclic arrays. This is
  // deliberately a per-grid computation. No boolean test here purports to
  // establish whether an external Banach-space lift has been constructed.
  const modes=[Array.from({length:4},()=>[1,0]),mode4(),[[1,0],[-1,0],[1,0],[-1,0]],[[1,0],[0,-1],[-1,0],[0,1]]];
  const factors=[[1,0],[.5,-.5],[0,0],[.5,.5]];
  for(let i=0;i<4;i++){
    let x=modes[i];for(let k=1;k<=8;k++){x=stencil('upwind',x,.5);expect(norm2(x)<=norm2(modes[i])+1e-12,'sampled grid mode not contractive');}
    expect(same(stencil('upwind',modes[i],.5),times(factors[i],modes[i])),'upwind full-grid Fourier column mismatch');
  }
  return 'N=4,nu=1/2: all four grid Fourier columns and eight upwind powers satisfy the finite contraction calculation; no fixed Banach space, lift or consistency is supplied/tested';
}
const run = {
  'n2-wave-root-boundary':waveRoots,
  'n2-periodic-alias-boundary':advectionAliases,
  'n2-wave-nyquist-endpoint-and-supercfl':waveEnergy,
  'n4-z-i-upwind-downwind':upwindDownwind,
  'n4-centered-cfl-half':centered,
  'n4-upwind-grid-mode-not-common-space-lift':commonSpaceLimit,
};
export const numericalFourierChecks = {
  'numerical-periodic-grid-fixture'(smoke={}) {
    try {
      expect(record(smoke),'finite smoke entry must be an object');
      const parameters=smoke.parameters===undefined?{}:smoke.parameters;
      expect(record(parameters),'parameters must be an object');
      expect(Object.keys(parameters).every(k=>k==='fixture'),'unknown periodic-grid parameter');
      if(Object.hasOwn(parameters,'fixture'))expect(typeof parameters.fixture==='string'&&FIXTURES.includes(parameters.fixture),'unknown bounded periodic-grid fixture');
      const selected=parameters.fixture===undefined?FIXTURES:[parameters.fixture];
      return {ok:true,summary:selected.map(name=>run[name]()).join('; ')};
    } catch(error) { return {ok:false,summary:String(error.message??error)}; }
  },
};
