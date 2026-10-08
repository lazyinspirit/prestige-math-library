---
id: def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
kind: definition
title: "The maximal Dolbeault operator and its Hilbert adjoint on a compact Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-axiom-of-choice
  - def-compactly-supported-differential-form
  - def-complex-l-two-inner-product
  - def-countable-choice
  - def-densely-defined-closed-and-closable-operator
  - def-dual-and-hom-vector-bundles
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-hilbert-space
  - def-hk-and-hk-zero-notation
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-orthogonality-and-orthogonal-complement
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-smooth-section-local-section-and-support
  - def-sobolev-space-wkp-and-its-norm
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - lem-weak-derivatives-are-unique-almost-everywhere
  - prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-closable-iff-adjoint-domain-is-dense
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-general-stokes-theorem
  - thm-riesz-representation-for-hilbert-space
  - thm-self-adjointness-range-criterion
  - thm-extreme-value-metric
  - thm-double-orthogonal-complement-is-closure
  - thm-smooth-partitions-of-unity-exist-on-manifolds
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §1, (1.4)–(1.5), printed pp. 287–288: L² pairings and the formal-adjoint definition; §3.2, (3.9)–(3.12), printed pp. 292–293: the formal adjoint of d and smooth Hodge Laplacian. §3.3, (3.15)–(3.16), printed pp. 294–295 assumes a flat Hermitian connection; only its conventional energy identity is analogous here. This source does not establish the unbounded Dolbeault domains or their self-adjointness, which are proved in this item."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, printed pp. 65–67: the formal adjoint of d, the Hodge Laplacian, and the energy characterization of harmonic forms"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), carried here by the Sobolev restriction and cutoff localization interface; the partitions, $L^2$ completions, Hilbert adjoints, and graph-space Riesz argument use only Countable Choice ([[def-countable-choice]]). Let $X$ be a compact Riemann surface, $E$ a holomorphic line bundle with Hermitian metric $h$, and $g$ a compatible Riemannian metric ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]). For $q=0,1$, let
$$L^2_q:=L^2(X,\Lambda^{0,q}T^*X\otimes E)$$
be the complex Hilbert completion in the first-variable-linear $L^2$ pairing.

**Weak Dolbeault derivative.** For $u\in L^2_0$ and $v\in L^2_1$, say that $u$ has weak Dolbeault derivative $v$ when
$$\int_X v\wedge\varphi=-\int_X u\wedge\bar\partial_{E^*}\varphi\qquad\text{for every }\varphi\in C_c^\infty(X,\Lambda^{1,0}T^*X\otimes E^*),$$
where the $E$ and $E^*$ factors are paired by evaluation. Such $v$, if it exists, is unique. The maximal Dolbeault operator is
$$\bar D:\operatorname{dom}\bar D\subseteq L^2_0\longrightarrow L^2_1,\qquad \operatorname{dom}\bar D:=\{u\in L^2_0:\exists v\in L^2_1\text{ satisfying the weak identity above}\},\qquad \bar Du:=v.$$
It is densely defined and closed, and extends the smooth operator $\bar\partial_E$ defined in [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]. Its Hilbert adjoint
$$\bar D^*:\operatorname{dom}\bar D^*\subseteq L^2_1\longrightarrow L^2_0$$
is the unique operator satisfying
$$\langle\bar Du,w\rangle_{L^2}=\langle u,\bar D^*w\rangle_{L^2}\qquad(u\in\operatorname{dom}\bar D,\ w\in\operatorname{dom}\bar D^*).$$
It is closed and densely defined, and
$$\ker\bar D^*=(\operatorname{ran}\bar D)^\perp\quad\text{in }L^2_1.$$

**Dolbeault Laplacian.** On $L^2_0\oplus L^2_1$ define
$$\Delta'':=\begin{pmatrix}\bar D^*\bar D&0\\0&\bar D\bar D^*\end{pmatrix},$$
with
$$\operatorname{dom}\Delta''=\{(u_0,u_1):u_0\in\operatorname{dom}\bar D,\ \bar Du_0\in\operatorname{dom}\bar D^*,\ u_1\in\operatorname{dom}\bar D^*,\ \bar D^*u_1\in\operatorname{dom}\bar D\}.$$
This is a self-adjoint nonnegative operator, and
$$\langle\Delta''(u_0,u_1),(u_0,u_1)\rangle_{L^2}=\|\bar Du_0\|_{L^2}^2+\|\bar D^*u_1\|_{L^2}^2.$$
Consequently $\ker\Delta''=(\ker\bar D)\oplus(\ker\bar D^*)$. Write
$$\mathcal H^{0,q}(X,E):=\ker\Delta''_q\subseteq L^2_q\quad(q=0,1)$$
for the harmonic $(0,q)$-forms, where $\Delta''_0=\bar D^*\bar D$ and $\Delta''_1=\bar D\bar D^*$.

**Sobolev spaces.** Fix a finite holomorphic chart and frame cover $(U_j,e_j)$, a subordinate smooth partition of unity $(\chi_j)$, and $q=0,1$. For $k=1,2$, the space $H^k(X,\Lambda^{0,q}T^*X\otimes E)$ is the completion of smooth $E$-valued $(0,q)$-forms in the norm
$$\|u\|_{H^k}^2:=\sum_j\| (\chi_j u)_{e_j}\|_{W^{k,2}(U_j)}^2,$$
where $(\chi_j u)_{e_j}$ is the scalar local coefficient, including the $d\bar z_j$ coefficient when $q=1$. Different finite covers, frames, and subordinate partitions give equivalent norms and the same completed space. The natural inclusions
$$H^2(X,\Lambda^{0,q}T^*X\otimes E)\hookrightarrow H^1(X,\Lambda^{0,q}T^*X\otimes E)\hookrightarrow L^2_q$$
are continuous, and smooth forms are dense in each $H^k$.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$, a holomorphic line bundle $E$, supplied compatible metrics $g,h$, and the stated Axiom of Choice and Countable Choice assumptions.

[F1] In holomorphic coordinates and frames, $\bar\partial_E$ and $\bar\partial_{E^*}$ are globally defined, and the bundle-valued Hodge star identifies smooth $(0,1)$-forms with smooth $E^*$-valued $(1,0)$-forms. Smooth compactly supported forms are dense in $L^2_q$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F2] The first-variable-linear $L^2$ pairings are Hilbert pairings and satisfy Cauchy–Schwarz; the density integral of an exact compactly supported top form on a boundaryless manifold is zero ([[def-complex-l-two-inner-product]], [[lem-complex-lp-completeness-density-and-inner-product]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[thm-general-stokes-theorem]], [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]).

[F3] A densely defined Hilbert-space operator has a unique Hilbert adjoint; its adjoint is closed and satisfies $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)$. A closable densely defined operator has dense adjoint domain and double adjoint equal to its closure ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]], [[thm-closable-iff-adjoint-domain-is-dense]]).

[F4] A closed operator's graph norm is complete, so its domain with $\langle x,y\rangle_T=\langle x,y\rangle+\langle Tx,Ty\rangle$ is a Hilbert space; every bounded linear functional on a Hilbert space has a Riesz representative ([[def-densely-defined-closed-and-closable-operator]], [[def-unbounded-linear-operator-domain-and-graph]], [[def-hilbert-space]], [[thm-riesz-representation-for-hilbert-space]], [[def-countable-choice]]).

[F5] For a densely defined symmetric operator $T$, surjectivity of both $T-i$ and $T+i$ implies self-adjointness; for a linear subspace $M$ of a Hilbert space, $M^{\perp\perp}=\overline M$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[thm-self-adjointness-range-criterion]], [[def-orthogonality-and-orthogonal-complement]], [[thm-double-orthogonal-complement-is-closure]]).

[F6] The Euclidean $W^{k,2}$ norm is the finite sum of the $L^2$ norms of weak derivatives; restriction to open sets and multiplication by smooth cutoffs are bounded, smooth coordinate changes obey the chain rule, and smooth partitions of unity exist ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]], [[thm-chain-rule-for-differentials-of-smooth-maps]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F7] Locally integrable weak derivatives are unique as almost-everywhere classes, and continuous functions and their derivatives are bounded on compact supports ([[lem-weak-derivatives-are-unique-almost-everywhere]], [[thm-extreme-value-metric]]).

## Proof

**Proof technique:** define the weak operator by duality, use graph Hilbert spaces for its adjoint and Laplacian, and compare finite local Sobolev norms.

1.1 For smooth $u\in C^\infty(X,E)$ and a smooth test form $\varphi\in C_c^\infty(X,K\otimes E^*)$, the product $u\wedge\varphi$ contracts to a degree-one form. On a curve its exterior derivative is its $\bar\partial$ part because the $(2,0)$ component vanishes. Stokes and the graded Leibniz rule give $\int_X\bar\partial_Eu\wedge\varphi=-\int_Xu\wedge\bar\partial_{E^*}\varphi$, so smooth $u$ has weak derivative $\bar\partial_Eu$. If two $L^2_1$ forms $v,v'$ satisfy the same weak identity, their difference pairs to zero with every test. By [F1], every test is $\star_Ew$ for a smooth $w$; the star identity turns that pairing into $\langle v-v',w\rangle_{L^2}$. Density of smooth $w$ in $L^2_1$ implies $v=v'$. Thus the weak derivative is unique and $\bar D$ extends $\bar\partial_E$. [F1, F2, given, algebra]

1.2 Let $B:H_0\to H_1$ be closed and densely defined between Hilbert spaces, with $B^*$ closed and densely defined, and set $T=B^*B$ on $M=\{x\in\operatorname{dom}B:Bx\in\operatorname{dom}B^*\}$. The graph inner product $\langle x,y\rangle_B=\langle x,y\rangle_{H_0}+\langle Bx,By\rangle_{H_1}$ makes $\operatorname{dom}B$ Hilbert by [F4]. For any $f\in H_0$, Riesz applied to $x\mapsto\langle x,f\rangle$ gives $u\in\operatorname{dom}B$ with $\langle x,u\rangle+\langle Bx,Bu\rangle=\langle x,f\rangle$ for every $x\in\operatorname{dom}B$. Hence $\langle Bx,Bu\rangle=\langle x,f-u\rangle$, so $Bu\in\operatorname{dom}B^*$ and $B^*Bu=f-u$; therefore $u\in M$ and $(T+I)u=f$, proving $\operatorname{ran}(T+I)=H_0$. If $y\perp M$, apply this construction with $f=y$ to obtain $u\in M$ and $(T+I)u=y$. Then $0=\langle u,y\rangle=\langle u,(T+I)u\rangle=\|u\|^2+\|Bu\|^2$, so $u=y=0$; hence $M^\perp=0$ and $M$ is dense by [F5]. For $x,y\in M$, $\langle Tx,y\rangle=\langle Bx,By\rangle=\langle x,Ty\rangle$; also $\langle Tx,x\rangle=\|Bx\|^2$, so $T$ is symmetric and nonnegative. If $x_n\to x$ and $Tx_n\to y$, then $\|B(x_n-x_m)\|^2=\langle x_n-x_m,T(x_n-x_m)\rangle\le\|x_n-x_m\|\,\|Tx_n-Tx_m\|$, making $Bx_n$ Cauchy. Closedness of $B$ gives $Bx_n\to Bx$, and closedness of $B^*$ applied to $(Bx_n,Tx_n)$ gives $x\in M$ and $Tx=y$. Thus $T$ is closed. [F3, F4, F5, given]

1.3 With the fixed chart/frame/partition data, each coefficient norm in the statement is the Euclidean $W^{k,2}$ norm of a compactly supported coefficient. On each nonempty compact support, the smooth positive metric and volume weights are bounded above and below, so these local norms are equivalent to the same coefficient norms measured against the Riemannian density; empty supports contribute zero. For a second choice, split each first partitioned term over the finitely many second charts meeting its compact support and insert the second partition. On each resulting compact overlap, coefficients transform by smooth frame and $d\bar z$ factors and by a smooth coordinate change $F$. For a scalar coefficient $f$, the first- and second-derivative formulas are $D_i(f\circ F)=(D_af\circ F)D_iF_a$ and $D_{ij}(f\circ F)=(D_{ab}f\circ F)D_iF_aD_jF_b+(D_af\circ F)D_{ij}F_a$; multiplying by the smooth frame and form transitions uses the Leibniz rule. All transition derivatives through order two are bounded on these compact supports by [F7], and [F6] gives bounded restriction and cutoff maps. Comparing the invariant density norms, summing finitely many terms gives $\|u\|_{H^k,1}\le C\|u\|_{H^k,2}$ for $k=1,2$; reversing the choices gives the converse. Thus the norms are equivalent and their completions have the same smooth-form identification. [F6, F7, given]

2.1 If $y\in\ker(T^*-i)$, choose $x\in M$ with $(T+I)x=y$ using the surjectivity in step 1.2. Since $T^*y=iy$, the first-variable-linear convention gives $\|y\|^2=\langle(T+I)x,y\rangle=(1-i)\langle x,y\rangle$, while $\langle x,y\rangle=\langle x,(T+I)x\rangle=\|Bx\|^2+\|x\|^2$ is real and nonnegative. Therefore $y=0$. The same argument with $-i$ gives $\ker(T^*+i)=0$. For $z=\pm i$, symmetry gives $\|(T-z)x\|^2=\|Tx\|^2+\|x\|^2$; if $(T-z)x_n$ converges, this estimate makes $x_n$ Cauchy and then $Tx_n$ converges, so closedness of $T$ makes $\operatorname{ran}(T-z)$ closed. By [F3], the orthogonal complements of these two ranges are the opposite deficiency kernels, hence both ranges are dense and therefore equal $H_0$. The range criterion [F5] proves that $B^*B$ is self-adjoint. [F3, F5, step 1.2, given]

2.2 Smooth forms are dense in $L^2_0$ by [F1], and step 1.1 shows they lie in $\operatorname{dom}\bar D$, so this domain is dense. If $u_n\to u$ in $L^2_0$ and $\bar Du_n\to v$ in $L^2_1$, then for every smooth test $\varphi$, Cauchy–Schwarz makes the wedge pairings continuous and gives $\int_Xv\wedge\varphi=\lim_n\int_X\bar Du_n\wedge\varphi=-\lim_n\int_Xu_n\wedge\bar\partial_{E^*}\varphi=-\int_Xu\wedge\bar\partial_{E^*}\varphi$. Thus $v$ is the weak derivative of $u$, so the graph of $\bar D$ is closed. [F1, F2, step 1.1, given]

2.3 In the fixed chart data, each local $W^{k,2}$ norm contains the local $L^2$ norm, and the positive metric weights on compact supports give $\|u\|_{L^2}\le C\|u\|_{H^1}$; the derivative sums give $\|u\|_{H^1}\le C'\|u\|_{H^2}$ for smooth $u$. These bounds extend the identity to continuous maps $H^2\to H^1\to L^2$. They are injective: if an $H^k$ Cauchy sequence of smooth forms tends to zero in $L^2$, each local coefficient tends to zero in $L^2$ while its derivatives through order $k$ have $L^2$ limits. Integration by parts against compactly supported smooth tests shows every such limit is a weak derivative of zero, hence vanishes by [F7]. The $H^k$ norm limit is therefore zero. Smooth forms are dense by the definition as completion. [F1, F6, F7, step 1.3]

3.1 Put $\mathcal H=L^2_0\oplus L^2_1$ and define the single-space operator $A(u,w)=(0,\bar Du)$ on $\operatorname{dom}A=\operatorname{dom}\bar D\oplus L^2_1$. By step 2.2, $A$ is densely defined and closed. For $(a,b)\in\mathcal H$, the adjoint identity $\langle A(u,w),(a,b)\rangle_{\mathcal H}=\langle(u,w),A^*(a,b)\rangle_{\mathcal H}$ for all $(u,w)\in\operatorname{dom}A$ holds exactly when $b\in\operatorname{dom}\bar D^*$ and $A^*(a,b)=(\bar D^*b,0)$: vary $w$ first, then apply the adjoint identity on $L^2_0,L^2_1$. If $b_n\to b$ and $\bar D^*b_n\to c$, closedness of $A^*$ applied to $(0,b_n)\to(0,b)$ proves that $\bar D^*$ is closed. Since $A$ is closable, [F3] makes $\operatorname{dom}A^*=L^2_0\oplus\operatorname{dom}\bar D^*$ dense in $\mathcal H$, so $\operatorname{dom}\bar D^*$ is dense in $L^2_1$. Also $\ker A^*=\operatorname{ran}(A)^\perp$ by [F3]; with $\operatorname{ran}A=\{0\}\oplus\operatorname{ran}\bar D$ and $A^*(a,b)=(\bar D^*b,0)$, intersecting with $\{0\}\oplus L^2_1$ yields $\ker\bar D^*=(\operatorname{ran}\bar D)^\perp$. Finally, $A^{**}=A$ because $A$ is closed; the same block calculation gives $A^{**}(u,w)=(0,(\bar D^*)^*u)$, hence $(\bar D^*)^*=\bar D$. [F3, step 2.2, given]

4.1 Apply steps 1.2 and 2.1 to $B=\bar D$ and to $B=\bar D^*$. Step 3.1 gives the closed dense adjoints needed for both applications and $(\bar D^*)^*=\bar D$, so both $\bar D^*\bar D$ on $L^2_0$ and $\bar D\bar D^*$ on $L^2_1$ are self-adjoint nonnegative operators. Their direct sum on the stated domain is densely defined and symmetric; its shifts by $\pm i$ are onto because the corresponding shifts of each summand are onto, so [F5] makes the direct sum self-adjoint. The adjoint identity gives $\langle\bar D^*\bar Du_0,u_0\rangle=\|\bar Du_0\|^2$ and $\langle\bar D\bar D^*u_1,u_1\rangle=\|\bar D^*u_1\|^2$. Adding these identities proves the energy formula; it vanishes exactly when $\bar Du_0=0$ and $\bar D^*u_1=0$, which proves the harmonic-kernel description. [F3, F5, step 1.2, step 2.1, step 3.1]

5.1 Steps 1.1–4.1 establish the unique weak maximal operator, its densely defined closed Hilbert adjoint, the self-adjoint nonnegative block Laplacian and its energy kernel, and the choice-independent Sobolev completions with continuous inclusions. Full AC is used through the stated Sobolev restriction and cutoff localization interface [F6]; the other interfaces named in [F1]–[F5] and the partition construction use only Countable Choice. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
