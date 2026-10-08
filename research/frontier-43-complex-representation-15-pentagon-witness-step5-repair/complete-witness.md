# Complete concrete pentagon witness — Step 5, new branch round 1

This is a complete local candidate for the five genuine escalated obligations in batch 11. It preserves the named double-pentagon and algebraic model, in addition to the existing general conditional period calculation. No new item ID is mathematically necessary. Root has confirmed native Alpha11 drain and has authorized only the two existing example carriers and their B page after this complete argument is recorded and checked.

## 1. An explicit smooth projective model

In projective four-space define X by
Z1²=Z0 Z2, Z1 Z2=Z0 Z3, Z2²=Z1 Z3, Z4²=Z2 Z3−Z0².
These homogeneous quadrics give a closed subset of compact Hausdorff projective space. On Z0≠0 the point is [1:x:x²:x³:y] with y²=x⁵−1. The affine equation is nonsingular: at every point either x≠0 and the inverse theorem for x↦x⁵ gives x as a holomorphic function of y, or y≠0 and the inverse theorem for y↦y² gives y as a holomorphic function of x. Its two partial derivatives cannot both vanish on the equation.

Z0=0 forces Z1=Z2=Z4=0, leaving the unique infinity point p=[0:0:0:1:0]. In the Z3=1 chart put u=Z2, v=Z4. The equations become Z1=u², Z0=u³, v²=u−u⁶. Since F(u)=u−u⁶ has F'(0)=1, the inverse theorem gives u=v² b(v), with b holomorphic and b(0)=1. Thus v is a genuine local coordinate at p. The affine charts and this infinity chart make X a smooth compact projective complex curve.

Define T(x,y)=(ζx,y), ζ=exp(2πi/5). In homogeneous coordinates T scales Zj by ζ^j for j=0,1,2,3 and fixes Z4. This preserves all four equations and has order five. At infinity it sends u to ζ^−1 u and v to ζ²v. The meromorphic function y=v/u³ has a pole of order five at p and extends to a holomorphic map X→sphere. Away from ±i, its fibre is the five distinct fifth roots x of y²+1, permuted transitively by T. At y=±i, x=0 and x is a coordinate; y−y0 has leading term x⁵/(2y0), hence local degree five. Infinity has local degree five from the v chart. Thus y is exactly the degree-five orbit quotient, branched only at ±i and infinity. The local multipliers of T are ζ at the two finite branch points and ζ² at infinity; relative to T, their positive-loop monodromies are respectively 1,1,3.

Connectedness will follow from the explicit two-disk decomposition below; no connectedness or genus is assumed here.

## 2. Exact disks above the upper and lower y-half-planes

Let κ=4^(1/5) exp(πi/5), so κ⁵=−4. On the unit disk use the branch of powers of 1−z⁵ whose value at zero is one. It exists because Re(1−z⁵)>0; the principal logarithm is holomorphic there.

For each sign ε=±1 define
x(z)=κ z/(1−z⁵)^(2/5),  yε(z)=ε i(1+z⁵)/(1−z⁵).
A direct calculation gives yε²+1=−4z⁵/(1−z⁵)²=x(z)⁵. The Cayley map i(1+r)/(1−r) carries |r|<1 to the upper half-plane, while its negative carries it to the lower half-plane. For a point over either half-plane, r=(y−ε i)/(y+ε i) belongs to the disk. Each choice of its fifth root z gives a different x, except at r=0 where x=0 and the formula is locally invertible. These formulas therefore parametrize the full respective preimages biholomorphically by one disk each.

At a boundary root z⁵=1, u=1/x tends to zero and v=y/x³ tends to zero, with orders 2/5 and 1/5 in 1−z⁵. Thus the maps extend continuously to p at all five such roots. Between consecutive roots, yε is real and monotone: for z=exp(iθ), φ=5θ modulo 2π, y+=−cot(φ/2) increases from −infinity to +infinity, while y−=cot(φ/2) decreases. These boundary arcs cover the five real-y sheets x=ζ^j(1+y²)^(1/5), one sheet on each arc.

## 3. A regular pentagon primitive, including univalence

Put H(z)=integral from zero to z of (1−w⁵)^−2/5 dw on the unit disk. The integrand is holomorphic, so the star-shaped primitive supplier applies. H'(z) never vanishes and H(ζz)=ζH(z). H(1)=L is the positive finite radial integral ∫0^1(1−r⁵)^−2/5 dr.

H extends continuously to each fifth root a. Factor 1−z⁵=(a−z) q(z), q(a)=5a⁴≠0. On the disk side of a small neighborhood, choose the compatible local branch, expand the holomorphic unit q(z)^−2/5 in powers of a−z and integrate termwise. The local primitive is a constant plus a convergent series whose first exponent is 3/5. Hence the limit exists independently of approach and its difference from the limit is O(|z−a|^(3/5)). On the other boundary arcs the derivative and primitive extend holomorphically across the circle, since 1−z⁵ is nonzero there. This proves continuity on the closed disk and therefore uniform convergence of H(rexp(iθ)) to the boundary values as r increases to one.

For 0<θ<2π/5,
arg(1−exp(5iθ))=5θ/2−π/2,
so arg(dH(exp(iθ))/dθ)=π/2+θ−(2/5)(5θ/2−π/2)=7π/10.
Its magnitude is positive. The first boundary arc therefore traces the straight segment from L to ζL exactly once. Rotation gives the other four successive segments, so H maps the boundary bijectively to the positively oriented convex regular pentagon with vertices Lζ^j.

This boundary fact alone is not used as an unproved univalence theorem. If w is off that polygon boundary, uniform convergence ensures that the quotient
(H(rexp(iθ))−w)/(H(exp(iθ))−w)
lies in the disk of radius less than one centered at one for r close to one. It has a continuous single-valued argument returning to its initial value, so both loops have the same argument increment. The polygon boundary has increment 2π about an interior point: each ray from that point meets the convex boundary once. For an exterior point its increment is zero: a separating supporting line places the polygon in a half-plane admitting one continuous argument. The argument principle, applied on |z|=r to H(z)−w, therefore gives exactly one preimage, counted with multiplicity, for every interior w and none for exterior w. Taking r arbitrarily close to one proves the claim on the whole disk. No interior point can map to the polygon boundary, since the open-mapping theorem would then produce exterior image points. H'≠0 makes the unique inverse holomorphic. Thus H is a biholomorphism onto the pentagon interior, and its closed-disk extension is a homeomorphism onto the closed pentagon.

## 4. Actual analytic double-pentagon identification

Let α=dx/y. In the two disk coordinates,
α=(κ/(ε i))(1−z⁵)^−2/5 dz.
The cancellation remains valid where 1+z⁵=0 by holomorphic continuation. Its primitives are W+=cH and W−=−cH, c=κ/i. Therefore the two open halves of X are two opposite regular pentagons P and −P in translation coordinates.

On the real-y sheet e_j, oriented from −infinity to +infinity,
α=(2/5)ζ^j(1+y²)^−4/5 dy.
The coefficient is a positive real function times ζ^j, and both face primitives have derivative α on that same seam. They therefore differ by a constant and identify the corresponding sides by translation, with reversed boundary orientation. More precisely, if V_k=cLζ^k are the vertices of P, the upper arc between ζ^k and ζ^(k+1) has x on sheet j=k+1; the matching lower arc is the opposite side, with y traversed in reverse. Their gluing translation is W↦W−V_k−V_(k+1), which sends V_k to −V_(k+1) and V_(k+1) to −V_k. All ten polygon vertices map to the unique smooth point p.

The resulting translation quotient maps continuously and bijectively to X: the disk interiors parametrize the disjoint upper/lower preimages, each paired side gives exactly one real-y sheet, and all vertices give p. Compactness of the polygon quotient and Hausdorffness of X make it a homeomorphism. Its interior and seam charts are biholomorphic because their primitive derivatives are nonzero; at p they extend to the actual v chart. Equivalently, the ten vertex angles total 10·3π/5=6π, and α has a double zero there, so a local primitive is a nonzero cubic term in v and the cone coordinate is its cube root. This is an analytic identification with the standard double regular-pentagon translation surface, not a conclusion from topological genus alone. T acts as W↦ζW in both polygons.

## 5. The integral cyclic generator, with no lattice-index inference

The decomposition gives a genuine finite cell structure with one vertex p, five oriented edges e_j and two disk faces. Each e_j is the continuous closed path x=ζ^j(1+y²)^(1/5), −infinity≤y≤+infinity, with both ends p. The boundary of the upper face traverses every e_j once positively; that of the lower face traverses every edge once negatively. Thus
C2=Z², C1=Z⁵, C0=Z,
d1=0, d2(a,b)=(a−b)(1,1,1,1,1).
The actual characteristic maps are the two continuous closed-disk parametrizations above. The cellular incidence and singular-homology comparison suppliers apply.

Consequently H1(X;Z)=Z⁵/<e0+e1+e2+e3+e4>. The relation vector is primitive; the classes e0,e1,e2,e3 form an integral basis, since the relation eliminates e4 with coefficient one and imposes no relation among the first four. Set C=[e0]. T e_j=e_(j+1), so C,TC,T²C,T³C are exactly that basis and T⁴C=−C−TC−T²C−T³C. Hence A=Z[T]/(1+T+T²+T³+T⁴) maps isomorphically to H1 by p↦p(T)C. The proof is over Z; no real-independence or finite-index argument substitutes for an integral basis.

The two disk closures meet along their shared edges, proving X connected. Its finite Euler characteristic is 1−5+2=−2, so its topological genus is two by the existing genus/Euler supplier.

## 6. Two actual holomorphic differentials and nonzero periods

Both α=dx/y and β=x dx/y are holomorphic. At y=0 the local coordinate is y and they become 2/(5x⁴)dy and 2/(5x³)dy, respectively. At x=0, y=±i, the x chart makes this immediate. At infinity u=v² b(v) gives
α=−u du/v=−v² b(v)(2b(v)+v b'(v))dv,
β=−du/v=−(2b(v)+v b'(v))dv.
Thus α has a double zero at p and β is nonzero there. They are linearly independent because β/α=x is nonconstant. Genus two and the dimension supplier make them a basis of Ω(X). T*α=ζα and T*β=ζ²β.

On C=e0 their periods are the strictly positive convergent real numbers
I1=(2/5)∫_(−infinity)^infinity(1+y²)^−4/5 dy,
I2=(2/5)∫_(−infinity)^infinity(1+y²)^−3/5 dy.
Their tails are O(|y|^−8/5) and O(|y|^−6/5). At both endpoints the v chart is holomorphic; local primitive differences identify the continuous closed-path integrals with these improper limits. Normalize ω1=α/I1 and ω2=β/I2. Then P(T^k C,ω_i)=ζ^(ki), literally, by the displayed real-sheet coefficients. Because the four cycles are an integral basis, the full period lattice is exactly the integer span of the four claimed vectors. The native real matrix/root-bound proof then gives its covolume and full rank. Picard and Abel-image conclusions use the existing proved general suppliers.

## Candidate theta graph cross-check

The parent's suggested arc between −i and+i also gives an integral witness: its five lifts have two vertices and five edges; a Joukowski disk parameter for the complement is y=(i/2)(s⁵+s^−5), x=η s^−2(1−s^10)^(2/5), η⁵=−1/4. This shows the complement is a disk, with s=0 representing p. The edge-difference generators e_(j+1)−e_j are triangular with determinant one relative to e_j−e0, and their five-orbit sum is zero. That alternative is sound, but the two-half-plane/pentagon decomposition above simultaneously supplies the analytic model identification, actual integral basis and explicit periods, so it is the shorter canonical route.

## Existing suppliers and source reading

The exact operative local suppliers were read: complex projective space/charts (batch10, earlier A page); scalar holomorphic inverse theorem; principal/nonvanishing-disc logarithm and star-shaped primitive; argument principle as image winding and null-homologous zero count; polynomial root bound; cellular incidence-degree formula and cellular-to-singular comparison; genus/Euler formula; local proper-map degree; holomorphic-differential dimension and period/path integration. All supporting claims are proved locally above rather than delegated to a new unproved Schwarz–Christoffel or branched-cover classification supplier.

Full Stein–Shakarchi Complex Analysis PDF was fetched and Chapter8 §§4.1–4.4, printed231–245, read in full. It confirms the singular-exponent boundary calculation and explicitly warns that mapping a boundary to a polygon does not alone prove conformality. Our special convex regular case therefore includes its own argument-principle proof. The complete McMullen printed128 paragraph and Theorem15.3 were read from the existing full PDF; they corroborate the named example but omit the witness. Lebl printed158 was also inspected: its Schwarz–Christoffel discussion is only a remark promising an explicit construction, so it is not claimed as a proof source.

No last-resort external theorem citation is needed. No mathematical uncertainty remains in the displayed special-model construction after the independent algebra, boundary orientation and integral-basis checks. Canonical application will retain the native matrix and polynomial-root corrections and the full conditional calculation, add this concrete witness inline, and revise only the consumer/B-page wording necessary to point to the now unconditional named model. Shared manifests/contracts/decisions remain root-owned under the current write authorization.
