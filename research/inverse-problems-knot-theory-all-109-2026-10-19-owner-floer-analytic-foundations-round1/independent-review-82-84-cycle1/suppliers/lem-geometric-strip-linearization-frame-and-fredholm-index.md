---
id: lem-geometric-strip-linearization-frame-and-fredholm-index
kind: lemma
title: "A geometric strip linearization has a global frame and a boundary winding index"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-local-frame-and-global-frame-of-a-vector-bundle
  - lem-complex-frame-loop-extension-determinant-winding
  - lem-scalar-totally-real-strip-boundary-winding-index
  - lem-finite-energy-transverse-strip-end-convergence
  - lem-product-integrable-generator-neighborhoods-and-relative-tame-extension
proof_strategy: direct
axiom_use: "Countable Choice only through the local strip-index and finite-energy end suppliers. The bundle/frame construction uses finite covers, finite-dimensional matrix ODE series and finite matrix factorizations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2, printed pp.20–22"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §4.1, printed pp.972–974"
      url: "https://arxiv.org/pdf/math/0502404"
    - title: "Hatcher, Vector Bundles and K-Theory, §1.2, printed pp.23–26"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
---

## Statement

Assume Countable Choice. Let $E$ be a smooth real rank-$2m$ vector bundle on $S=\mathbb R_s\times[0,1]_t$, $m\ge1$, with a smooth endomorphism $J$ satisfying $J^2=-I$. On the two boundary edges let $F_0,F_1$ be smooth real rank-$m$ subbundles with $F_j\cap JF_j=0$. Suppose that outside a compact strip there are specified smooth complex frames $\tau_\pm:\mathbb C^m\to E$, intertwining $i$ and $J$, in which $F_0=\mathbb R^m$ and $F_1=i\mathbb R^m$. Let $P$ be a smooth real linear first-order operator on sections of $E$ with symbol
$$P(f\xi)=fP\xi+f_s\xi+f_tJ\xi$$
for every smooth real function $f$, and suppose its expression in each end frame is exactly $\partial_s+i\partial_t$ outside a compact strip.

There exist a global smooth complex frame $\Phi$, a sign matrix $S_+=\operatorname{diag}(\sigma,1,\ldots,1)$ with $\sigma\in\{1,-1\}$, an integer $\ell$, and a smooth real function $\vartheta(s)$, constant at $\pi/2$ on the negative end and $\pi/2+\ell\pi$ on the positive end, such that $\Phi=\tau_-$ on the negative end, $\Phi=\tau_+S_+$ on the positive end, and
$$F_0=\Phi\mathbb R^m,\qquad F_1=\Phi\left(e^{i\vartheta(s)}\mathbb R\times i\mathbb R^{m-1}\right).$$
In this frame $P$ is $\partial_s+i\partial_t+B(s,t)$ with smooth compactly supported real linear $B$. On the $H^1$ completion of compactly supported smooth sections satisfying those actual boundary subbundles, with the norm defined by finite bundle charts on a compact core and the prescribed frames on the ends, $P$ maps to the corresponding $L^2(E)$ space and is real Fredholm, with
$$\operatorname{ind}_{\mathbb R}P=-\ell.$$
The same index holds with the weight $e^{\delta|s|}$ for $0\le\delta<\pi/2$. These are indices before any translation quotient. The integer $\ell$ is independent of the choices in the construction, since it is minus the index of this fixed operator.

In particular the conclusion applies to the actual linearization at a smooth $J_t$-holomorphic strip of finite Dirichlet energy, measured in a smooth target metric, in a compact target, with compact totally real boundary submanifolds of transverse finite intersection, whenever the chosen target charts at their intersections identify those submanifolds with $\mathbb R^m,i\mathbb R^m$ and $J_t$ with the constant structure $i$ for every $t$. For product Heegaard tori such a geometric choice is available by the product-integrable generator-neighborhood construction. No domain Euler-measure formula, corner/excision theorem, generic regularity, or moduli count is part of this conclusion.

## Statement references

[[def-countable-choice]]

[[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]

[[def-local-frame-and-global-frame-of-a-vector-bundle]]

[[lem-complex-frame-loop-extension-determinant-winding]]

[[lem-scalar-totally-real-strip-boundary-winding-index]]

[[lem-finite-energy-transverse-strip-end-convergence]]

[[lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]]

## Facts & Assumptions

**Given:** The smooth complex bundle, its totally real edge subbundles, two specified product end frames, and the actual first-order operator with the stated symbol and exact end expressions; Countable Choice.

[F1] A smooth invertible complex matrix loop bounds a smooth invertible disk map exactly when its determinant winding vanishes, including extension relative to prescribed smooth collar data ([[lem-complex-frame-loop-extension-determinant-winding]]).

[F2] A constant-principal strip operator on a given rotating scalar/product real-line boundary, with zeroth-order term tending to zero, is Fredholm with real index equal to the sum of the two endpoint angle floor differences. The same index holds for two-sided weights below the limiting spectral gap ([[lem-scalar-totally-real-strip-boundary-winding-index]]).

[F3] Actual finite-energy strips under the compact uniform smooth and totally real boundary hypotheses converge uniformly at each end to one of the transverse intersection points ([[lem-finite-energy-transverse-strip-end-convergence]]).

[F4] For the specified product Heegaard tori there are disjoint generator charts with the tori exactly $\mathbb R^m,i\mathbb R^m$ and a global allowed $J_t$ equal to $i$ there for every $t$, preserving the diagonal/divisor neighborhoods and tameness elsewhere ([[lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]]).

## Proof

1.1 **A complex frame on a compact core, constructed rather than assumed.** Choose $R$ large enough that the stated end frames and exact operator expressions hold on neighborhoods of the vertical edges of the rectangle $Q=[-R,R]\times[0,1]$. The complex bundle on this rectangle has a finite complex-chart cover: locally choose $m$ real vectors whose images with their $J$ multiples form a basis at a point; their linear independence persists nearby, giving a complex chart. Compactness gives finitely many such charts $g_a:E\to\mathbb C^m$ and smooth nonnegative bumps $\beta_a$ supported in them with $\sum_a\beta_a^2>0$. These bumps can be made from finitely many smaller coordinate rectangles using the ordinary explicit smooth bump on a Euclidean ball. The map $I_x(v)=(\beta_a(x)g_a(v))_a$ embeds each fiber complex linearly in one fixed $\mathbb C^N$; zero extension is smooth because each bump has support inside its chart. Orthogonal projection $Q_x$ onto its image is smooth: in a local complex frame with image-column matrix $V_x$, it is $V_x(V_x^*V_x)^{-1}V_x^*$. Fix a basis in the image at one point $x_0$ of the rectangle and transport it to $x$ along $x_r=x_0+r(x-x_0)$ by the matrix equation $Z_r=[(Q_{x_r})_r,Q_{x_r}]Z$. The coefficient is skew-Hermitian. The identity $Q Q_r Q=0$, obtained by differentiating $Q^2=Q$, shows that a transported vector initially in the image stays in the image. Its norm and all inner products are preserved. The iterated-integral series has term bounds $M^n/n!$ on the compact parameter set; differentiating in $x$ adds only polynomial factors in $n$ and finite derivative bounds, so it gives a smooth family and a unique solution. Pulling the transported basis back by $I_x$ yields a smooth complex frame $\Psi$ on the whole rectangle. Thus contractibility of the base has not been substituted for a relative boundary framing argument. [given, construct, algebra]

2.1 **Real frames and their endpoint orientation signs.** In $\Psi$ coordinates each $F_j$ is a smooth real rank-$m$ subbundle of $\mathbb R^{2m}$ along an interval. Its real orthogonal projection $Q_j(s)$ is smooth by the same finite matrix formula. The real equation $h'_j=[Q'_j,Q_j]h_j$, starting with any ordered basis in its initial fiber, transports a smooth real basis along the whole edge, by the same series and projection identities as in step 1.1. Start the lower basis at $\tau_-\mathbb R^m$ and the upper basis at $\tau_- i\mathbb R^m$. On the positive end compare the transported lower basis with $\tau_+$ and the transported upper basis with $\tau_+ i$. Let their real determinant signs be $\sigma_0,\sigma_1\in\{1,-1\}$. Set $S_+=\operatorname{diag}(\sigma_0,1,\ldots,1)$ and choose the unique $p\in\{0,1\}$ with $\sigma_0(-1)^p=\sigma_1$. The desired lower terminal basis $\tau_+S_+$ and upper terminal basis $\tau_+S_+\operatorname{diag}(i(-1)^p,i,\ldots,i)$ then have the same orientations as the respective transported bases. We may correct the transported bases by smooth real matrices to obtain frames $f_0(s),f_1(s)$ equal to those specified bases on entire end collars, and to the initial specified bases on the negative collar. Here is the needed path construction: real matrices of positive determinant can be joined to the identity using row-addition paths $I+t cE_{ab}$ to diagonalize, positive diagonal rescalings, and planar rotations removing pairs of negative diagonal entries. A zero pivot can first be made nonzero by adding a row with a nonzero entry, so no row permutation of negative determinant is required. There are finitely many steps. On each end collar the correction matrix has positive determinant; flatten its source coordinate on an inner collar, join its resulting constant value to the identity by this finite path, and retain its original values on a smaller outer collar. This matches all derivatives where pieces are pasted. [step 1.1, construct, algebra]

3.1 **The boundary frame loop and its actual obstruction.** Choose a smooth cutoff $\chi(s)$ equal to zero on the negative collar and one on the positive collar. First put $\vartheta_0(s)=\pi/2+p\pi\chi(s)$. Prescribe a complex frame along the rectangle boundary as follows: on the bottom it is $f_0(s)$; on the top it is $f_1(s)\operatorname{diag}(e^{-i\vartheta_0(s)},-i,\ldots,-i)$; on the left it is $\tau_-$; on the right it is $\tau_+S_+$. The columns of $f_j$ are complex linearly independent, since $F_j\cap JF_j=0$: a complex dependence has real and imaginary parts in $F_j$ whose $J$ images coincide, forcing both to vanish. Thus these are invertible complex frames. Their values agree on the corner collars by step 2.1. Express them in the global core frame $\Psi$ to obtain an invertible matrix loop $G$, oriented by $ds\wedge dt$ on the rectangle. Round the four corners inside their end-frame neighborhoods and use the already specified end frame along each rounded arc. This gives a smooth matrix loop on the rounded core; the old edge path and rounded arc are homotopic within that end neighborhood, so their determinant windings agree. Let $k=w(G)\in\mathbb Z$. The lower orientation correction alone has not forced this integer to vanish. [F1, step 1.1, step 2.1, construct, algebra]

4.1 **Absorb the winding and extend the frame relative to the ends.** Replace the top angle by $\vartheta(s)=\vartheta_0(s)-2\pi k\chi(s)$. The new top frame differs from the old one by $\operatorname{diag}(e^{2\pi i k\chi(s)},1,\ldots,1)$. The oriented top edge is traversed from $s=R$ to $s=-R$, so this changes determinant winding by $-k$. The new boundary loop therefore has winding zero; its negative and positive angle limits are $\pi/2$ and $\pi/2+\ell\pi$, where $\ell=p-2k$. It retains exactly the prescribed vertical frames because the added end phases are integer multiples of $2\pi$. Extend the boundary matrix data to a thin collar in $Q$, keeping them equal to $\Psi^{-1}\tau_-$ and $\Psi^{-1}\tau_+S_+$ on smaller vertical collars. Such collar data can be built locally by extending each edge matrix in its normal direction; near a corner the vertical data are already smooth invertible matrices on a full corner neighborhood and agree with the horizontal edge data. Shrink the remaining collars so all overlapping values lie in a small convex matrix ball contained in $\operatorname{GL}_m(\mathbb C)$, and patch with finitely many scalar bumps, retaining the exact edge and vertical values. The relative-collar part of [F1] now fills this zero-winding matrix map on the rounded core disk. Multiplying the filling by $\Psi$ and retaining the given end frames on the removed corner neighborhoods gives $\Phi$ on the whole core rectangle. It equals the specified vertical frames on collars, so extends to all $S$ by $\tau_-$ and $\tau_+S_+$ on the ends. Its two horizontal boundary frames give exactly the two subbundle identities in the Statement. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **Identify the actual operator and Sobolev domains.** A finite collection of smooth bundle charts on the compact core, with compactly supported scalar cutoffs and the two given end frames, defines an $H^1$ norm on compactly supported smooth sections. Any two such choices give equivalent norms: chart transition matrices and their first derivatives are bounded on the finitely many compact overlaps, and outside the core both use the given end frames. The same argument applies to the $L^2$ target norm. Multiplication by $\Phi$ and $\Phi^{-1}$ is bounded for these norms, because their matrices and first derivatives are bounded on the compact core and they are the constant comparisons $I,S_+$ on the ends. They send the actual compactly supported smooth boundary sections bijectively to the scalar/product-line sections prescribed by $\vartheta$, hence identify their completions. The symbol identity and $\Phi i=J\Phi$ show that $\Phi^{-1}P\Phi$ has principal part $\partial_s+i\partial_t$. To see this directly, write a section as a sum of the $2m$ real coordinate functions times $\Phi e_a$ and $J\Phi e_a$ and apply the stated real Leibniz identity to each summand. The remaining terms define a smooth real linear multiplication matrix $B$. On the ends $\Phi$ is the given end frame times the constant $I$ or $S_+$, and the operator there is exactly $D$; thus $B=0$ there. It is therefore compactly supported and bounded. This establishes the normal form for the actual operator and its domain, rather than assuming them from its principal symbol alone. [step 4.1, given, construct, algebra]

6.1 **Fredholm index and weights.** Apply [F2] to the operator of step 5.1. The first upper angle has end values $\pi/2$ and $\pi/2+\ell\pi$; every other angle is constantly $\pi/2$. The floor differences are consequently $0-\ell=-\ell$ for the first component and zero for the rest. Thus $P$ is Fredholm with real index $-\ell$. All limiting product-angle spectra have gap $\pi/2$, so [F2] also applies with every $0\le\delta<\pi/2$. The frame comparison commutes with the scalar weight and remains bounded on weighted completions by the same compact-core estimates. Source and target isomorphisms preserve kernel, range and cokernel, proving the weighted claim for $P$. Different choices of frames, real basis signs or filling which meet the same hypotheses still compute this fixed Fredholm operator's index, so they give the same integer $\ell$. Nothing has been subtracted for source translation. [F2, step 4.1, step 5.1, algebra]

7.1 **Apply this to the actual geometric linearization.** Let $u$ be the smooth finite-energy strip in the last clause. By [F3], its two far ends lie in the specified generator charts. There the nonlinear equation is exactly $v_s+i v_t=0$ in target coordinates, so its coordinate linearization is exactly $D=\partial_s+i\partial_t$, with boundary variations in $\mathbb R^m,i\mathbb R^m$. On the whole strip put $E=u^*TX$, $J(s,t)=J_t(u(s,t))$ and $F_j=u(\cdot,j)^*TL_j$. These are smooth bundles with $F_j\cap JF_j=0$ by the given totally real hypothesis. The coordinate formula for the actual real linearization at a solution is $P\xi=\xi_s+J_t(u)\xi_t+(dJ_t)_u[\xi]u_t$. It has exactly the stated symbol. These local formulas transform as a bundle operator: differentiating a change of target coordinates introduces its derivative on the Cauchy–Riemann section, whose value at this solution is zero, so no extra principal or residual term occurs. Equivalently the covariant and coordinate formulas agree after the corresponding source and target bundle identification. Thus all hypotheses of the frame, normal-form and index arguments above hold, proving the claimed actual real $H^1$ Fredholm theorem. For product Heegaard tori their Lagrangian tangent spaces are totally real for a tame $J$: a nonzero $v$ with $v,Jv$ both tangent would give $\omega(v,Jv)=0$, contradicting tameness. The geometric product charts and the simultaneous all-$t$ exact values of $J_t$ are supplied by [F4]. This completes the asserted application, while the equality with domain Euler measure and corner multiplicities still requires separate corner, excision and domain-comparison proofs. [F3, F4, step 5.1, step 6.1, construct, algebra] ∎
