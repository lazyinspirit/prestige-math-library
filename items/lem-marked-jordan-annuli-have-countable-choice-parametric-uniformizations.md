---
id: lem-marked-jordan-annuli-have-countable-choice-parametric-uniformizations
kind: lemma
title: Marked Jordan annuli have parametric uniformizations under Countable Choice
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: R. Courant, Über eine Eigenschaft der Abbildungsfunktionen bei konformer Abbildung (1914), pp. 101–109
      url: https://manifests.sub.uni-goettingen.de/iiif/presentation/PPN252457811_1914/manifest
    - title: R. Courant, Bemerkung zu meiner Note über eine Eigenschaft der Abbildungsfunktionen (1922), pp. 69–70
      url: https://manifests.sub.uni-goettingen.de/iiif/presentation/PPN252457811_1922/manifest
    - title: L. V. Ahlfors, Complex Analysis, pp. 229–233 and 246–257
proof_strategy: direct
deps:
  - def-countable-choice
  - thm-cauchy-integral-formula-circle
  - thm-argument-principle-as-image-winding-number
  - lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
---

## Statement

Assume Countable Choice. Let $A:\mathbb R^2\to\mathbb R^2$ be an orientation-preserving homeomorphism fixing $0$, and let $u>0$. Put

$$\rho(A,u)=\tfrac12\min\left(u,\min_{|z|=u}|A(z)|\right),\qquad \Omega(A,u)=A(D_u)\setminus\overline{D_{\rho(A,u)}}.$$

There is a unique number $R(A,u)>1$ and conformal bijection

$$F_{A,u}:\Omega(A,u)\longrightarrow\{w\in\mathbb C:1<|w|<R(A,u)\}$$

whose extension to the two closed annuli is a homeomorphism taking the inner boundary to the inner boundary and satisfying $F_{A,u}(\rho(A,u))=1$. Give the homeomorphisms the topology of uniform convergence on compact sets of both map and inverse. Then $R$ and the closed maps and inverse maps vary continuously: if $(A_n,u_n)\to(A,u)$ and $z_n\in\overline{\Omega(A_n,u_n)}$ converge to $z$, then $F_{A_n,u_n}(z_n)\to F_{A,u}(z)$; if $1\le |w_n|\le R(A_n,u_n)$ and $w_n\to w$, then $F_{A_n,u_n}^{-1}(w_n)\to F_{A,u}^{-1}(w)$. These conclusions concern $u>0$ and do not assert uniform control at $u=0$ or $u=\infty$.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

[F1] Countable Choice is assumed as in [[def-countable-choice]]. Only finite choices and sequences of approximants are used; uniqueness defines all maps indexed by parameters.

[F2] The disk Cauchy formula is supplied by [[thm-cauchy-integral-formula-circle]]. Differentiating this formula on smaller disks gives the compact-interior derivative estimates used below.

[F3] The logarithmic-derivative winding identity, including its zero count for null-homologous contours, is supplied by [[thm-argument-principle-as-image-winding-number]].

[F4] The explicit circle Poisson kernel, its positivity, integral one and boundary approximate-identity property are supplied by [[lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity]].

[F5] A nowhere-zero holomorphic function on a homologically simply connected domain has a holomorphic logarithm, as supplied by [[thm-holomorphic-logarithms-homologically-simply-connected-domains]]. The domains used for logarithms below are disks or domains homeomorphic to disks.

## Proof

**Given:** $A$, $u$, and the topology and normalization in the Statement. Identify $\mathbb R^2$ with $\mathbb C$; $D_r=\{z:|z|<r\}$.

1.1 The elementary disk harmonic identities needed below follow directly from [F4]. For continuous boundary data b on the unit circle, integrate b against P_z(e^{it})=Re((e^{it}+z)/(e^{it}−z)). On each smaller disk its geometric series and all its derivatives converge uniformly; termwise integration shows that the result is harmonic. Positivity and integral one give the maximum bound, and the approximate-identity property gives the continuous boundary values. The mean-value identity follows by integrating the series on concentric circles. A harmonic function with an interior maximum is constant, because its mean equals its maximum and hence the function equals that maximum on each small circle; connectedness propagates this. The subharmonic version follows from the mean-value inequality. Harnack comparisons follow by taking the ratio of the positive Poisson kernels on a smaller disk. All these calculations use finite integrals and locally uniform series and require no additional choice principle. [F1, F2, F3, F5, construct]

1.2 We construct the normalized conformal map φ:G→D for a bounded simply connected plane domain G containing 0; φ(0)=0 and φ'(0)>0. Elementary Cauchy integral, Poisson formula, argument principle, and maximum principle are used. The limiting arguments are recorded to specify the choice strength. [F1, F2, F3, F5, construct]

1.3 The class of injective holomorphic maps G→D vanishing at 0 is nonempty. Choose b outside G. A holomorphic logarithm of z−b is obtained by integrating 1/(z−b) along polygonal paths, with simple connectivity giving independence of path modulo 2πi. Hence a square root s exists. Its image is disjoint from its negative: equality s(z)=−s(z') would imply z=z' and s(z)=0, impossible. A small disk in the negative image is therefore omitted by s(G). Reciprocal about its center is a bounded injective map. Rescale, apply a disk automorphism, and rotate to obtain the required normalization. These are finite choices. [F1, F2, F3, F5, construct]

1.4 Let B be the supremum of positive derivatives at 0 in this class. It is positive and finite by Cauchy's derivative bound on D_r⊂G. Countable Choice selects f_n with f_n'(0)>B−1/n. Cauchy's formula gives uniform derivative bounds on compact subsets. A diagonal subsequence on a countable rational exhaustion gives locally uniform convergence to f with derivative B. The usual normal-family extraction here is countable: successively subdivide bounded ranges into rational squares at a countable dense set and then use the common local derivative bounds. A nonconstant limit of injective holomorphic maps is injective: otherwise contour winding numbers on disjoint small circles force two zeros of f_n−f_n(a). Thus f is injective. [F1, F2, F3, F5, construct]

1.5 If f omits a∈D, a≠0, form g=(f−a)/(1−ā f), take its holomorphic square root h, and normalize h to vanish at 0. The new injective disk map has derivative magnitude [F1, F2, F3, F5, construct]

1.6 B(1+|a|)/(2 sqrt(|a|)) > B, [F1, F2, F3, F5, construct]

1.7 contradicting the supremum. Thus f is onto. The maximum principle applied to h(z)/z proves Schwarz's inequality; applying it to the two compositions proves uniqueness of the normalized map. No choice over the collection of domains is made: uniqueness defines φ_G. [F1, F2, F3, F5, construct]

2.1 We include boundary dependence; an interior normal-family argument alone would not supply it. The primary proof is Courant1914 pp103–109, with his1922 pp69–70 correction replacing **length** of a short connecting path by its **diameter**. Here is that argument in the restricted form used below. [F1, F2, F3, construct]

2.2 We apply the boundary argument only to the following controlled family of domains. The Jordan domains G_n contain D_r, lie in D_L, converge in kernel to a Jordan domain G, their **closed domains converge in Hausdorff distance to the closed domain of G**, and their boundaries converge in Hausdorff distance to its boundary. They also have uniform local inside connectivity: two points near a limiting boundary point can be connected inside G_n by a polygonal path of uniformly small diameter. These additional closed-set assertions are essential; kernel convergence alone can leave a remote bubble attached by a vanishing neck. [F1, F2, F3, construct]

2.3 Here these hypotheses follow directly from the actual parameters. For a convergent sequence (A_n,u_n)→(A,u), all source disks lie in one bounded disk; uniform convergence of A_n there gives Hausdorff convergence A_n(closed D_{u_n})→A(closed D_u) and A_n(∂D_{u_n})→A(∂D_u). Uniform convergence of the inverses proves kernel convergence and common positive inner radius. There is a common finite outer radius. Uniform convergence of A_n and A_n^{-1} on the relevant compact sets gives common moduli of continuity. If two inside points approach one boundary point, their inverse images approach the same point of ∂D_u. Their straight segment in the convex disk D_{u_n} has small diameter, so its A_n-image does too; polygonal approximation of this compact inside path stays inside and changes its diameter by arbitrarily little. This proves exactly the corrected small-diameter hypothesis. [F1, F2, F3, construct]

2.4 First establish convergence of the maps in the interior, **before** using a uniform boundary estimate. Cauchy estimates give subsequential limits of φ_n on compact subsets of G and of ψ_n=φ_n^{-1} on D. The derivatives at 0 are bounded above and below, since 1/L≤φ_n'(0)≤1/r. The image of the limiting nonconstant ψ is open and lies in the limiting closed domain, by the closed-domain Hausdorff convergence. Since the interior of that Jordan closed domain is exactly G, the image lies in G. The limiting compositions are identities; consequently uniqueness identifies the limits with φ and ψ. In particular boundary properness is uniform in this family: if z_n→P∈∂G and |φ_n(z_n)| failed to tend to 1, a subsequence φ_n(z_n)→w∈D and interior inverse convergence would give P=ψ(w)∈G, a contradiction. The same reasoning for a fixed domain proves ordinary boundary properness. The remaining task is continuity, including the boundary, of these maps and their inverses. [F1, F2, F3, construct]

2.5 To prove this, from a disk map form the horizontal-slit map q=c(φ+φ^{-1})+d, normalized by q(z)=1/z+O(z) at 0; here c=φ'(0)>0 and d removes the constant term. The two banks of the slit are kept distinct. Outside a fixed small disk about 0, the integral of |q'|² is bounded by the area of a fixed bounded disk. This bound is uniform for the indicated family. Indeed ψ=φ^{-1} is bounded by L, so Cauchy's estimate gives |ψ(w)|≤2L|w| when |w|≤½. Thus |φ(z)|≥min(½,|z|/(2L)); also 1/L≤φ'(0)≤1/r and Cauchy's bound on φ'' controls d. These give the asserted uniform bound on q outside the pole disk. The integral of |q'|² is precisely image area, since q is injective. [F1, F2, F3, construct]

2.6 If q were not uniformly continuous away from its pole, points z_n,z'_n tending to the same boundary point P would have images separated by 2a>0. The imaginary part approaches the slit height uniformly at boundary approaches by the uniform boundary properness proved above; the Laurent normalization coefficients also converge by interior derivative convergence. Consequently one can take |Re q(z_n)−Re q(z'_n)|>a. Pull back vertical half-lines from q(z_n),q(z'_n) towards infinity on their actual banks; choose the direction which does not cross the slit. They are disjoint level arcs of Re q running to the pole. Fix a small radius R about P excluding that pole. The two points can be joined by an inside polygonal path lying in a circle of arbitrarily small radius s about P. Perturb and trim this path so it meets the two level rays only at its endpoints: take the first passage between the rays along the joining path. The pole tails of the rays can be joined inside a small punctured disk about the pole, disjoint from the R-circle about P. The resulting simple closed curve bounds a Jordan quadrilateral Q contained in G_n; simple connectivity ensures its bounded interior is inside G_n. Its inner edge lies in B_s(P), its outer edge lies outside B_R(P), and its two side edges lie on the two distinct level rays. All circle intersections below are outside the pole disk. [F1, F2, F3, construct]

2.7 For almost every σ∈(s,R), the intersection of the σ-circle with Q contains an arc joining the two side edges. Indeed the circle separates the inner edge from the outer edge. Its intersection arcs cannot meet these two edges. The planar rectangle crossing principle then gives an arc joining the remaining pair of edges: otherwise the disjoint arc components do not separate inner from outer. This principle follows by cutting the rectangle along the arc components; an arc with both endpoints on the same side only cuts off a cap and cannot disconnect the other two sides. A closed circle component wholly inside Q is impossible here, since its disk would then be inside Q and would contain the inner boundary edge, contrary to that edge being on ∂Q. The assertion follows first for transverse finite intersections; generic circle radii have this property because the side curves are analytic and the joining path is polygonal. These actual inside arcs give the required oscillation. This is the only local-connectivity input, and it uses the diameter, not the length, of the connecting path. [F1, F2, F3, construct]

2.8 Write v=Re q. Across that circle subarc the oscillation of v is at least a, so Cauchy–Schwarz gives [F1, F2, F3, construct]

2.9 a² ≤ 2π ∫ |∂v/∂θ|² dθ. [F1, F2, F3, construct]

2.10 Integration in dσ/σ gives [F1, F2, F3, construct]

2.11 a² log(R/s) ≤ 2π ∫ |q'|² dxdy, [F1, F2, F3, construct]

2.12 where the right side is taken away from the fixed pole disk and is uniformly bounded. Letting s→0 is a contradiction. Thus q extends continuously to the boundary, uniformly for the family. To recover φ, the inverse quadratic has two distinct continuous branches near a nonendpoint of the slit. A connected small inside neighborhood stays on one bank, since changing banks requires passing an endpoint; the small-diameter connecting paths and the continuity just proved exclude such a passage. At a slit endpoint the two inverse branches coincide. This proves the corresponding closed-boundary continuity of φ. [F1, F2, F3, construct]

2.13 Its extension is injective. If distinct boundary points P,Q had the same disk image ξ, choose disjoint inside arcs from a common inside point to P and Q. Their images bound a region with vertex ξ. On the small circles about ξ the inverse map has a fixed positive coordinate oscillation between these arcs, because its two limiting values P,Q differ. Apply the same circle-arc integration on this region, with the inverse map in place of q. It would force ∫|ψ'|²=∞. That integral is area(G)≤πL². This contradiction proves injectivity. The circle arcs here are provided by separation of the two image arcs; truncate the arcs at interior points and then pass to the limiting vertex. Surjectivity on the boundary follows from compactness and interior surjectivity. Thus the extension is a homeomorphism. In the slit version of this argument the banks must be distinguished; their geometric identification is not an injective boundary parametrization. [F1, F2, F3, construct]

2.14 The preceding finite-area estimate is uniform for the family, hence gives equicontinuity at the boundary in addition to the already established interior convergence. Thus φ_n converge continuously on the closed varying domains. For the inverse assertion let w_n→w in the closed disk. The values ψ_n(w_n) lie in a fixed bounded set; each subsequential limit lies in the limiting closed domain by its Hausdorff convergence and satisfies φ(z)=w by the just-proved continuous convergence. Injectivity of the closed limiting map fixes z uniquely. This proves closed inverse convergence as well. [F1, F2, F3, construct]

2.15 The minimum defining ρ is continuous because A_n(u_n e^{iθ}) converges uniformly in θ. On a convergent sequence of parameters and its limit, ρ is bounded away from zero. This is the compact parameter family used below; no local compactness of the homeomorphism space is asserted. [F1, F2, F3, construct]

3.1 Apply the disk map φ to A(D_u). The image of Ω is an annulus V whose outside boundary is the unit circle and whose inside boundary is C=φ(ρ e^{iθ}). The latter is analytic: A(D_u) contains D_{2ρ}, so φ is holomorphic and injective on a neighborhood of D_ρ, with nonzero derivative. Let c=φ(ρ) be the inner marked point. Along a convergent sequence of parameters these inner parametrizations converge with all derivatives, by Cauchy's formula on a common slightly larger disk. The outer circle is fixed. Thus, for the sequentially compact family consisting of this convergent sequence and its limit, there are uniform analytic collars of the two boundaries. The same reduction to a convergent sequence is used in every continuity assertion below. [F1, F2, F3, F4, construct]

3.2 Construct the harmonic function h with boundary values 0 on C and 1 on the outer circle by the Perron envelope. Specifically take the supremum H of continuous subharmonic functions bounded above by 1 with boundary upper limits bounded by the prescribed data; 0 is one such function. On a disk compactly inside V, replacing a member by the Poisson extension of its boundary values increases it and preserves admissibility. Choose a sequence approaching H at the center, take successive maxima, and perform this replacement. The increasing bounded harmonic functions on the disk converge to a harmonic function h there; this follows directly from the Poisson formula and Harnack's inequality on smaller disks. The latter inequality is the comparison of positive Poisson kernels. At the center the limit equals H. If some admissible function exceeded h somewhere on the disk, lift its maximum with the preceding sequence. The limiting positive harmonic difference would vanish at the center and be positive somewhere, contrary to Harnack. Hence H=h on that disk. Applying this argument on disks about arbitrary interior points proves H harmonic without choosing an uncountable collection of approximants. [F1, F2, F3, F4, construct]

3.3 The boundary values are attained continuously. At a point P of either analytic boundary take a small exterior tangent disk, center a and radius s, touching only at P. The local function log(|z−a|/s) is positive harmonic inside V and vanishes at P. On the other edge of a small neighborhood it has a positive minimum. Its minimum with a suitable positive constant, extended by that constant, is a superharmonic barrier. Comparison with boundary data plus/minus ε plus/minus a multiple of this barrier gives the asserted limit. The maximum principle gives uniqueness and 0<h<1. Analytic flattening and odd reflection of h minus its constant boundary value give a harmonic extension across each edge. This reflection follows from the mean-value identity across a straight edge, or by cancellation of the normal boundary terms in its distributional Laplacian followed by the disk Poisson formula. [F1, F2, F3, F4, construct]

3.4 Let *dh=−h_y dx+h_x dy, and let P be its integral on a counterclockwise core curve. Harmonicity makes P independent of the chosen core. Green's formula, with h=0 on the inner edge and 1 on the outer edge, gives Here integration by parts on the smooth bounded annulus is obtained by a finite coordinate covering and a finite smooth partition of unity, followed by the one-variable fundamental theorem of calculus; opposite internal boundary terms cancel. It introduces no choice beyond finite choice. [F1, F2, F3, F4, construct]

3.5 P=∫_V |∇h|² dxdy >0. [F1, F2, F3, F4, construct]

3.6 Finiteness follows from the harmonic extension across the analytic boundaries. A local conjugate k has dk=*dh. Its periods are the integral multiples of P, since V is an annulus. Therefore [F1, F2, F3, F4, construct]

3.7 G(z)=exp((2π/P)(h(z)+i k(z))) [F1, F2, F3, F4, construct]

3.8 is single valued and holomorphic. Its boundary moduli are 1 and R=exp(2π/P), and its winding on each positively oriented boundary is 1. For any 1<|w|<R, the argument principle gives exactly one zero, counted with multiplicity, of G−w: the outer boundary has index 1 about w and the inner has index 0. Thus G is an injective surjection with no critical point. At an analytic boundary the inward normal derivative of a positive harmonic function vanishing on that boundary is strictly positive: compare it on an interior tangent disk with a positive multiple of the logarithmic barrier on the concentric annulus, and let the point approach the tangency point. Applying this to h or 1−h shows that the boundary restrictions of G have nonzero derivative. They have degree 1, so are circle homeomorphisms. Thus G extends homeomorphically to the closed annuli. Rotate it uniquely so that G(c)=1; then F=G∘φ has the required marking. [F1, F2, F3, F4, construct]

3.9 For uniqueness, the logarithm of the modulus of a conformal equivalence between two round annuli with their inner boundaries preserved solves the constant-boundary Dirichlet problem. It is a constant multiple of log|z|. Winding number 1 forces that multiple to be 1; the Cauchy–Riemann equations then give a rotation. The marked point fixes this rotation. [F1, F2, F3, F4, construct]

4.1 For a convergent sequence of parameters and its limit, the analytic inner boundaries converge in C^k for every k, and the outer circle is fixed. Uniform analytic collars give uniform exterior tangent disks after reducing their radii. The preceding barriers therefore have uniform sizes and constants. They give equicontinuity of h_n at the boundary. Differentiating the Poisson formula gives compact-interior bounds on every derivative. Subsequential compactness and uniqueness of the boundary-value problem imply continuous convergence of h_n on the closed varying annuli, and derivative convergence on compact subsets of the interior. [F1, F2, construct]

4.2 Choose a fixed core curve in the limiting annulus; it lies in all sufficiently late annuli of the sequence. Integration there gives P_n→P>0, and hence R_n→R. In particular the maps G_n are bounded above and away from zero uniformly. Reflection extends them across the analytic boundaries. At the outer unit circle the formula is [F1, F2, construct]

4.3 G_n(z)=R_n² / overline(G_n(1/overline z)). [F1, F2, construct]

4.4 For the inner boundary use the original circular coordinate ζ, with z=φ_n(ζ): [F1, F2, construct]

4.5 G_n(φ_n(ζ))=1 / overline(G_n(φ_n(ρ_n²/overline ζ))). [F1, F2, construct]

4.6 The maps φ_n and their inverse collar coordinates converge holomorphically, with nonvanishing derivative, on slightly smaller collars. These reflection formulas give uniform bounds on genuine neighborhoods of the two edges. Cauchy's estimates give equicontinuity there and on the remaining compact interior. Every subsequential limit is holomorphic in the interior, has boundary moduli 1 and R, winding 1, and value 1 at c. Uniqueness identifies it with G. Thus G_n converge continuously on both closed edges as well as inside. Composing with the closed disk maps from §2 proves the required convergence of F_n. [F1, F2, construct]

4.7 If w_n→w in the varying closed round annuli, the preimages lie in one bounded planar set. Every subsequential limit belongs to the limiting closed annulus and satisfies F(z)=w by continuous convergence. The limiting closed map is injective, so all subsequences have the same limit F^{-1}(w). This proves the inverse assertion and completes the exact analytic contract. [F1, F2, construct] ∎

## Remarks

The choice ledger and all limiting constructions are part of the proof. The compact parameter sets used there are a convergent sequence together with its limit; no local compactness of the homeomorphism space is assumed. No analytic limit at a degenerate annulus is used. This restricted construction does not replace or weaken a separate full-Choice general Riemann-mapping theorem.
