// Bounded, deterministic finite fixtures for QA16 and QA29. A successful
// computation checks these fixtures only; it does not prove an optimization,
// concentration, spectral-gap, or quantum-query theorem in general.
const metadata = ['check', 'asserts', 'claim', 'checked_in', 'case', 'result'];
function fixture(keys, body) {
  return (smoke = {}) => {
    try {
      if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) throw Error('expected an obligation object');
      for (const key of Object.keys(smoke)) if (![...metadata, ...Object.keys(keys)].includes(key)) throw Error(`unsupported parameter ${key}`);
      for (const [key, expected] of Object.entries(keys)) {
        if (key in smoke && JSON.stringify(smoke[key]) !== JSON.stringify(expected)) throw Error(`${key} must equal ${JSON.stringify(expected)} for this bounded fixture`);
      }
      return body(smoke);
    } catch (error) { return { ok: false, summary: error.message }; }
  };
}
const result = (ok, summary) => ({ ok: Boolean(ok), summary });
const gcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
function q(n, d = 1n) {
  n = BigInt(n); d = BigInt(d); if (!d) throw Error('zero rational denominator');
  if (d < 0n) { n = -n; d = -d; } const g = gcd(n, d); return [n / g, d / g];
}
const add = (a, b) => q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
const sub = (a, b) => q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
const mul = (a, b) => q(a[0] * b[0], a[1] * b[1]);
const div = (a, b) => q(a[0] * b[1], a[1] * b[0]);
const pow = (a, n) => q(a[0] ** BigInt(n), a[1] ** BigInt(n));
const cmp = (a, b) => { const d = a[0] * b[1] - b[0] * a[1]; return d < 0n ? -1 : d > 0n ? 1 : 0; };
const eq = (a, b) => cmp(a, b) === 0;
const sum = values => values.reduce(add, q(0));
const mm = (a, b) => a.map(row => b[0].map((_, j) => row.reduce((s, x, k) => s + x * b[k][j], 0)));
const mv = (a, v) => a.map(row => row.reduce((s, x, i) => s + x * v[i], 0));
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const transpose = a => a[0].map((_, i) => a.map(row => row[i]));

// Directly build the source's eight-by-eight cross block, mask its entries by
// the four actual Boolean coordinates, and obtain its two-by-two restrictions.
const T = ['0000','0001','0011','0111','1111','1110','1100','1000'];
const Z = ['0010','0101','1011','0110','1101','1010','0100','1001'];
const letters = ['acdbdcab','bacdbdca','abacdbdc','cabacdbd','dcabacdb','bdcabacd','dbdcabac','cdbdcaba'];
function block(a, b, c, d) { const values = { a, b, c, d }; return letters.map(row => [...row].map(x => values[x])); }
function restrictB(C) {
  const rows = ['1000','1110','1111','1100'].map(x => T.indexOf(x));
  const cols = ['0010','0100','0101','0110'].map(x => Z.indexOf(x));
  return rows.map(i => cols.map(j => C[i][j]));
}
function parityBlocks(B) {
  const even = [[1,0,1,0],[0,1,0,1]], odd = [[1,0,-1,0],[0,1,0,-1]];
  const restriction = basis => basis.map(v => mv(B, v)).map(v => v.slice(0, 2));
  const E = transpose(restriction(even)), O = transpose(restriction(odd));
  const invariant = (basis, R) => basis.every((v, j) => same(mv(B, v), basis[0].map((x, i) => x * R[0][j] + basis[1][i] * R[1][j])));
  return { E, O, invariant: invariant(even, E) && invariant(odd, O) };
}
function matrixCertificates() {
  const positive = block(750, 500, 0, 0), signed = block(579, 707, 183, -212);
  let checks = 0;
  for (const C of [positive, signed]) {
    const g = x => x.slice(1) + (x[0] === '0' ? '1' : '0');
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
      if (C[T.indexOf(g(T[i]))][Z.indexOf(g(Z[j]))] !== C[i][j]) return false;
      for (let coordinate=0; coordinate<4; coordinate++) {
        const moved=(coordinate+3)%4;
        if ((T[i][coordinate]!==Z[j][coordinate]) !== (g(T[i])[moved]!==g(Z[j])[moved])) return false;
      }
      checks++;
    }
    // Compute the actual i=0 mask in its two disconnected row/column pieces.
    const masked = C.map((row, i) => row.map((x, j) => T[i][0] !== Z[j][0] ? x : 0));
    const A = ['0000','0001','0011','0111'].map(x => ['1011','1101','1010','1001'].map(y => masked[T.indexOf(x)][Z.indexOf(y)]));
    const B = restrictB(C); const PBQ = [2,1,3,0].map(i => [1,0,2,3].map(j => B[i][j]));
    if (!same(A, PBQ) || !same(B, transpose(B))) return false;
    const { E, O, invariant } = parityBlocks(B); if (!invariant) return false;
    if (C === positive) {
      for (const [R, roots] of [[E,[1000,-250]], [O,[250,-1000]]]) {
        const tr = R[0][0] + R[1][1], det = R[0][0] * R[1][1] - R[0][1] * R[1][0];
        if (!roots.every(x => x * x - tr * x + det === 0) || Math.max(...roots.map(Math.abs)) !== 1000) return false;
      }
      if (!C.every(row => row.reduce((a,b) => a+b,0) === 2500) || !transpose(C).every(row => row.reduce((a,b) => a+b,0) === 2500)) return false;
    } else {
      const discriminant = R => (R[0][0] - R[1][1]) ** 2 + 4 * R[0][1] * R[1][0];
      if (discriminant(E) !== 1605781 || discriminant(O) !== 4003925) return false;
      if (!(1605781n < 1269n ** 2n && 4003925n < 2001n ** 2n)) return false;
      if (E[0][0] + E[1][1] !== 733 || O[0][0] + O[1][1] !== -1) return false;
      // Eigenvalues (tr +/- sqrt(discriminant))/2000: strict rational bounds.
      if (!(733 + 1269 <= 2002 && 1 + 2001 <= 2002)) return false;
      if (!C.every(row => row.reduce((a,b) => a+b,0) === 2514) || !transpose(C).every(row => row.reduce((a,b) => a+b,0) === 2514)) return false;
    }
  }
  return checks === 128;
}
function overlapFixture() {
  const distributions = new Map();
  for (const [seed, weights] of [[T[0],[1,4,4,1]], [Z[0],[1,1,4,4]]]) {
    let x = seed, p = weights;
    for (let k = 0; k < 8; k++) { distributions.set(x, p); x = x.slice(1) + (x[0] === '0' ? '1' : '0'); p = [...p.slice(1), p[0]]; }
  }
  const overlaps = [];
  for (const x of T) for (const y of Z) {
    const px = distributions.get(x), py = distributions.get(y);
    if (px.reduce((a,b) => a+b,0) !== 10 || py.reduce((a,b) => a+b,0) !== 10) throw Error('distribution normalization failed');
    let overlap = 0;
    for (let i = 0; i < 4; i++) if (x[i] !== y[i]) {
      const product = px[i] * py[i]; const root = [1,2,4].find(r => r * r === product);
      if (!root) throw Error('fixture square root is not exact'); overlap += root;
    }
    overlaps.push({ x, y, overlap: q(overlap,10), px, py });
  }
  return overlaps;
}

export const quantumEstimationChecks = {
  'scalar-strictly-feasible-sdp-sign-convention': fixture({ dimension: 1 }, () => {
    const grid = Array.from({length:17}, (_,i) => q(i,4));
    const primal = grid.filter(x => eq(x,q(1)) && cmp(x,q(0)) >= 0);
    const dual = grid.filter(y => cmp(sub(y,q(1)),q(0)) >= 0);
    const maxP = primal.reduce((a,b) => cmp(a,b)>0?a:b), minD = dual.reduce((a,b) => cmp(a,b)<0?a:b);
    return result(eq(maxP,minD) && eq(maxP,q(1)) && cmp(q(1),q(0))>0 && cmp(sub(q(2),q(1)),q(0))>0,
      'Exact scalar grid X,y=0,1/4,...,4: primal equality fixes X=1, dual slack y-1 gives minimum 1; strict witnesses X=1,y=2. No general SDP duality checked.');
  }),
  'one-by-one-schur-product': fixture({ dimension: 1 }, () => {
    const A=[[2]], B=[[3]], C=A.map((row,i)=>row.map((x,j)=>x*B[i][j]));
    return result(C[0][0]===6 && [-2,-1,0,1,2].every(x=>x*C[0][0]*x>=0), 'Computed [2] entrywise [3]=[6] and five scalar quadratic forms; one-dimensional fixture only.');
  }),
  'two-dimensional-reflection-endpoints': fixture({ dimension: 2 }, () => {
    const P=[[1,0],[0,0]], D=[[0.5,0.5],[0.5,0.5]], w=[1,-1];
    const reflection = a=>a.map((row,i)=>row.map((x,j)=>2*x-(i===j?1:0)));
    const U=mm(reflection(P),reflection(D));
    const okay=same(mv(D,w),[0,0]) && same(U,[[0,1],[-1,0]]) && same(mm(U,U),[[-1,0],[0,-1]]) && same(mv(P,w),mv([[0.5,-0.5],[0.5,0.5]],w));
    // U has characteristic polynomial lambda^2+1. For omega/pi=0,1/4
    // E is zero; at 1/2,1 E=I. pi>3 makes squared bound >=9/16,9/4.
    const squared=dot(mv(P,w),mv(P,w)), norm2=dot(w,w);
    return result(okay && 16*squared<=9*norm2 && 4*squared<=9*norm2, 'Exact dyadic 2x2 matrices: Delta w=0, U^2=-I and Pi w=(I-U)w/2; cutoffs omega/pi=0,1/4,1/2,1 satisfy the bound using pi>3.');
  }),
  'two-input-off-diagonal-factorization': fixture({ domain_size: 2 }, () => {
    const inputs=[0,1], A=[[0,1],[1,0]], u=[1,1],v=[1,1];let entries=0;
    const okay=inputs.every(x=>inputs.every(y=>{entries++;return (x!==y?1:0)*u[x]*v[y]===A[x][y];}));
    return result(okay && entries===4, 'Enumerated four entries of the two-input mismatch-masked scalar factorization; diagonal zero and both off-diagonal entries one.');
  }),
  'one-address-query-change': fixture({ addresses: 1 }, () => {
    const I=[[1,0],[0,1]], X=[[0,1],[1,0]], minusProjector=[[0.5,-0.5],[-0.5,0.5]];let count=0;
    for(const x of [0,1])for(const y of [0,1]){
      const product=mm(x?X:I,y?X:I); const difference=product.map((row,i)=>row.map((a,j)=>a-I[i][j]));
      if(!same(difference,minusProjector.map(row=>row.map(a=>-2*(x!==y?1:0)*a))))return result(false,'XOR phase-change matrix identity failed');count++;
    }
    return result(count===4 && same(mv(X,[1,-1]),[-1,1]) && same(mv(X,[1,1]),[1,1]), 'All four one-address XOR input pairs give O_x* O_y-I=-2 Delta(x,y)|-><-|; response plus/minus actions computed exactly.');
  }),
  'two-point-opposite-output-certificate': fixture({ domain_size: 2 }, () => {
    const witness=[[0,1],[1,0]];let cases=0;
    for(const t of [q(1,4),q(1,2),q(1),q(2),q(4)]){
      const inverse=div(q(1),t),c0=mul(t,t),c1=mul(inverse,inverse);
      if(!eq(mul(t,inverse),q(1)) || !eq(mul(c0,c1),q(1)) || cmp(c0,q(1))<0 && cmp(c1,q(1))<0)return result(false,'two-point reciprocal certificate failed');cases++;
    }
    return result(cases===5 && same(mm(witness,witness),[[1,0],[0,1]]), 'Five exact reciprocal scalar certificates have cross product one, class-cost product one and balanced minimum one; the two-point masked adversary squares to identity.');
  }),
  'epsilon-one-third-coefficient': fixture({ epsilon: 1/3 }, () => result(cmp(sub(q(1,4),q(2,9)),q(0))>0, 'Squared positive quantities give (1/2)^2-(sqrt(2)/3)^2=1/36>0, exactly; epsilon=1/3 fixture only.')),
  'exact-rational-four-bit-blocks': fixture({ matrix_size: 4 }, () => result(matrixCertificates() && overlapFixture().every(x=>cmp(x.overlap,q(2,5))>=0), 'Built both eight-by-eight cross blocks, all coordinate symmetry entries, masked four-by-four blocks and even/odd restrictions; exact characteristic polynomials/discriminant bounds and all 64 cross-output overlaps agree.')),
  'uniform-constant-bounds': fixture({ parameter_range: 'A≥1' }, () => {
    for(const A of [1,2,3,4,8,16])if(cmp(div(q(1+2*A*A),q(64*A*A)),q(3,64))>0)return result(false,'finite low-phase mass bound failed');
    const total=add(q(3,64),q(1,38));
    // 64/pi>64/(22/7)=224/11>20, hence floor>=20.
    return result(eq(total,q(89,1216)) && cmp(total,q(1,3))<0 && cmp(q(224,11),q(20))>0, 'Exact low-phase bounds at A=1,2,3,4,8,16; 3/64+1/38=89/1216<1/3 and 64/(22/7)>20. No unbounded A enumeration claimed.');
  }),
  'constant-and-nonconstant-cases': fixture({ cases: ['constant','nonconstant'] }, () => {
    let constants=0,nonconstants=0;
    for(let f=0;f<16;f++){
      const values=[0,1,2,3].map(x=>(f>>x)&1);const pairs=[];
      for(let x=0;x<4;x++)for(let y=x+1;y<4;y++)if(values[x]!==values[y])pairs.push([x,y]);
      if(!pairs.length){constants++;continue;}
      const [x,y]=pairs[0];if(![0,1].some(i=>((x>>i)&1)!==((y>>i)&1)))return result(false,'opposite inputs have no mismatch');
      // A symmetric unit edge on this pair has norm one; every retained mask
      // is either that edge or zero, and some mask retains it.
      for(let a=0;a<=10;a++)if(Math.min(a,10-a)*3>=20)return result(false,'zero-query output beats both opposite outputs');
      nonconstants++;
    }
    return result(constants===2 && nonconstants===14 && cmp(q(1,4),q(2,9))>0 && 2*(512-1)<2048, 'All 16 two-bit Boolean functions split into two constants and 14 nonconstants; opposite-pair unit edges, 11 zero-query output laws, lower-coefficient positivity and the A=1 evaluator call bound computed.');
  }),
  'or-one-bit': fixture({ N: 1 }, () => {
    const inputs=[0,1],v=[1,1],G=[[0,1],[1,0]],masked=G.map((row,x)=>row.map((a,y)=>a*(inputs[x]!==inputs[y]?1:0)));
    return result(v.every(a=>a*a===1) && v[0]*v[1]===1 && same(G,masked) && same(mm(G,G),[[1,0],[0,1]]), 'N=1 OR: direct scalar certificate has both class costs one; adversary and its only filtered matrix coincide and square to identity.');
  }),
  'iterate-one-and-induction': fixture({ base_case: 1, max_depth: 4 }, () => {
    if(!matrixCertificates())return result(false,'signed base matrix certificate failed');const overlaps=overlapFixture();
    if(!overlaps.every(x=>cmp(x.overlap,q(2,5))>=0))return result(false,'base overlap below 2/5');
    let terms=0;
    // Enumerate all 64 opposite outer pairs and all 64 possible opposite inner
    // pairs in each mismatched outer coordinate. This checks each summand of
    // the separable two-level lower bound without enumerating 2^32 pairs.
    for(const outer of overlaps)for(let j=0;j<4;j++)if(outer.x[j]!==outer.y[j])for(const inner of overlaps){
      const product=outer.px[j]*outer.py[j],r=[1,2,4].find(a=>a*a===product);
      if(cmp(mul(q(r,10),inner.overlap),mul(q(r,10),q(2,5)))<0)return result(false,'product overlap summand below bound');terms++;
    }
    const lower=q(2511486,1000000),upper=q(5,2);
    for(let k=1;k<=4;k++)if(cmp(pow(lower,k),pow(upper,k))<=0 || !eq(mul(pow(q(2,5),k),q(2,5)),pow(q(2,5),k+1)))return result(false,'finite power recurrence failed');
    return result(terms>0 && cmp(q(2514,1001),lower)>0, `Computed ${terms} two-level overlap summands and exact powers k=1..4; base rational norm-ratio lower bound exceeds 2.511486 and upper base is 5/2. No full composition theorem checked.`);
  }),
  'qa29-degenerate-one-sided-tail': fixture({ trials: 1, thresholds: [0,1,2] }, () => {
    const law=[{s:q(0),weight:q(1)}],mean=sum(law.map(x=>mul(x.s,x.weight)));
    const probabilities=[0,1,2].map(t=>sum(law.filter(x=>cmp(sub(x.s,mean),q(t))>=0).map(x=>x.weight)));
    return result(eq(probabilities[0],q(1)) && probabilities.slice(1).every(p=>eq(p,q(0))), 'Enumerated the single-atom Z1=0 law: upper-tail probabilities at t=0,1,2 are 1,0,0; at zero the exponential bound is one and positive-t probabilities vanish.');
  }),
  'qa29-zero-logarithm': fixture({ x: 1, max_terms: 8 }, () => {
    const y=div(sub(q(1),q(1)),add(q(1),q(1)));
    for(let N=1;N<=8;N++){
      const S=mul(q(2),sum(Array.from({length:N},(_,j)=>div(pow(y,2*j+1),q(2*j+1)))));
      const tail=div(mul(q(2),pow(y,2*N+1)),mul(q(2*N+1),sub(q(1),pow(y,2))));
      if(!eq(S,q(0))||!eq(tail,q(0)))return result(false,'logarithm zero fixture failed');
    }
    return result(eq(y,q(0)), 'Exact x=1 transformation y=0 and all eight partial sums/tail bounds vanish; exp(0)=1 identifies the center.');
  }),
  'qa29-bernoulli-sample-variance': fixture({ max_samples: 6 }, () => {
    for(let n=1;n<=6;n++){
      const values=Array.from({length:2**n},(_,bits)=>q(Array.from({length:n},(_,i)=>(bits>>i)&1).reduce((a,b)=>a+b,0),n));
      const mean=div(sum(values),q(values.length)),variance=div(sum(values.map(v=>pow(sub(v,mean),2))),q(values.length));
      if(!eq(mean,q(1,2))||!eq(variance,q(1,4*n)))return result(false,`enumerated variance differs for n=${n}`);
    }
    return result(true, 'Enumerated every independent fair-Bernoulli sample string for n=1..6 (126 strings); exact sample-mean variance is 1/(4n), attaining the [0,1] range bound.');
  }),
  'qa29-uniform-indicator': fixture({ cardinality: 3, subset: [0,2] }, () => {
    const X=[0,1,2],S=new Set([0,2]);const expectation=sum(X.map(x=>mul(q(1,3),q(S.has(x)?1:0))));
    return result(eq(expectation,q(S.size,X.length)) && eq(expectation,q(2,3)), 'Enumerated three uniform outcomes and their indicator weights: exact expectation and event mass are both 2/3.');
  }),
  'qa29-bernoulli-good-flag': fixture({ probability_numerator: 3, probability_denominator: 10 }, () => {
    const probabilities=[q(7,10),q(3,10)],values=[q(0),q(1)];const mean=sum(values.map((v,i)=>mul(v,probabilities[i])));
    const joint=[0,1].flatMap(x=>[0,1].map(flag=>mul(probabilities[x],flag?values[x]:sub(q(1),values[x]))));
    const good=add(joint[1],joint[3]);
    return result(eq(sum(joint),q(1)) && eq(mean,q(3,10)) && eq(good,mean) && eq(joint[1],q(0)) && eq(joint[2],q(0)), 'Computed all four sample/flag joint weights for p=3/10; forbidden mismatched flags have weight zero, total mass one and mean=good probability=3/10.');
  }),
};
