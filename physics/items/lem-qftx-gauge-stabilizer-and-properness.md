---
id: lem-qftx-gauge-stabilizer-and-properness
kind: lemma
title: Gauge stabilizers and properness of the Sobolev action
status: "published"
origin: pipeline
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice. The proof uses the stated unitary Schur, Sobolev compactness, and analytic suppliers."
deps:
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-gauge-sobolev-calculus
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - def-axiom-of-choice
  - thm-schurs-lemma-for-unitary-representations
  - thm-continuous-dependence-of-odes-on-initial-data-and-parameters
  - lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
dependency_roles:
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-gauge-sobolev-calculus: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-schurs-lemma-for-unitary-representations: mathematical-premise
  thm-continuous-dependence-of-odes-on-initial-data-and-parameters: mathematical-premise
  lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§§5.13.2–5.13.3, PDF pp. 113–117: properness proof sketch, stabilizer as a holonomy centralizer, and irreducibility convention."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§§4.3–4.4, PDF pp. 27–36: properness criterion and compact-gauge subsequence interface; the group is U(1), so the local proof treats SU(N)."
verification:
  precheck: pending
---

## Statement

Assume the configuration data and integer $k>d/2+1$ from the preceding definition, and let $\mathcal A_k^*$ be the locus where the holonomy representation on $\mathbb C^N$ is irreducible. For any $A\in\mathcal A_k$, evaluation at $p_m$ identifies its stabilizer in $\mathcal G_{k+1}$ with the centralizer of $\operatorname{Hol}_{p_m}(A)$ in $SU(N)$. Thus an irreducible connection has stabilizer exactly $Z_N$, and the induced action of $\bar{\mathcal G}_{k+1}=\mathcal G_{k+1}/Z_N$ on $\mathcal A_k^*$ is free. The subset $\mathcal A_k^*$ is open in $\mathcal A_k$.

The Sobolev action is proper: if $A_j\to A$ and $A_j^{u_j}\to B$ in $H^k(T^*M\otimes\operatorname{ad}P)$ for sequences $A_j,A,B\in\mathcal A_k$ and $u_j\in\mathcal G_{k+1}$, then some subsequence $u_{j_\ell}$ converges in $H^{k+1}(\operatorname{Ad}P)$ to $u\in\mathcal G_{k+1}$ and $B=A^u$. Equivalently, the action map $\bar{\mathcal G}_{k+1}\times\mathcal A_k^*\to\mathcal A_k^*\times\mathcal A_k^*$ is proper, meaning inverse images of compact sets are compact.

## Statement references

[Walpuski, proper action, stabilizers, and the irreducibility convention](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, properness and the local gauge slice](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the compact connected Riemannian bundle data; $k>d/2+1$; and the right gauge action fixed in the preceding definition.

[A1] The Axiom of Choice is the inherited axiom base. [[def-axiom-of-choice]]

[F1] The spaces, finite-atlas norms, right-action formula, and irreducibility convention are those of the preceding definition; $H^k$ embeds continuously in $C^1$. [[def-qftx-smooth-sobolev-gauge-configuration]], [[lem-qftx-gauge-sobolev-calculus]]

[F2] Along each fixed smooth path segment, the local matrix transport equation has a unique solution. The cited ODE supplier gives common-interval existence and continuous dependence on its initial data and stated parameters; it does not assert differentiability in endpoint parameters. A piecewise smooth path is handled by finitely many such segments. [[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]

[F3] Every bounded equicontinuous sequence of curves from a compact interval into finite-dimensional Euclidean space has a uniformly convergent subsequence. [[lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence]]

[F4] Every bounded sequence in $H^{k+1}$ of sections on the compact manifold has a subsequence converging in $H^k$. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]], assertion 1.

[F5] A bounded operator intertwining an irreducible complex unitary representation with itself is scalar. [[thm-schurs-lemma-for-unitary-representations]]

[F6] The finite-atlas Sobolev product bounds hold in every integer order $0\le r\le k$: $\|fg\|_{H^r}\le C\|f\|_{H^k}\|g\|_{H^r}$. They follow by the product rule, the embeddings in [F1], and Hölder; when derivative orders are $b$ and $c$ with $b+c\le r$, the residual Sobolev orders $k-b$ and $r-c$ have sum at least $k>d/2$, so exponents can be chosen with reciprocal sum at most $1/2$. [[thm-higher-order-sobolev-embedding]], [[cor-sobolev-algebra-above-the-critical-index]], [[lem-qftx-gauge-sobolev-calculus]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 A gauge section $u$ stabilizes $A$ exactly when the local action formula gives $du=uA-Au$, that is, $d_Au=0$. This equation says that $u$ is parallel for the induced connection on $\operatorname{Ad}P$. Since $M$ is connected, parallel transport determines $u$ everywhere from its value at $p_m$, so evaluation is injective on the stabilizer. A parallel section's value commutes with transport around every based loop, hence lies in the holonomy centralizer. [given, A1, F1, algebra]

1.2 Let $B_j=A_j^{u_j}$ and work in the fixed finite atlas. The local action formula gives $du_j=u_jB_j-A_ju_j$. Since $u_j$ is unitary, its pointwise matrix norm is bounded uniformly. The convergent sequences $A_j,B_j$ are bounded in $H^k$, so the equation gives a uniform $H^1$ bound on $u_j$. If a uniform $H^r$ bound holds for some $0\le r\le k$, [F6] bounds both products on the right in $H^r$; hence $du_j$ is bounded in $H^r$ and $u_j$ is bounded in $H^{r+1}$. Induction through $r=k$ gives a uniform $H^{k+1}$ bound. [given, F1, F6, algebra]

2.1 Conversely, let $g\in SU(N)$ commute with every element of $\operatorname{Hol}_{p_m}(A)$. Transport $g$ from $p_m$ along any path to a point $x$ and conjugate it by the path's parallel-transport matrix. Two paths give the same value because their concatenation has holonomy commuting with $g$. This defines a parallel section $u$ with $u(p_m)=g$. To verify its endpoint regularity, fix $x_0$ and a coordinate ball $V$ with a smooth bundle trivialization. Choose a fixed piecewise smooth path from $x_m$ to $x_0$, then join $x_0$ to each $x\in V$ by radial paths that depend smoothly on $(t,x)$. On each varying segment the transport matrix solves $U(t,x)=U_0-\int_0^t C(s,x)U(s,x)\,ds$, where $C(s,x)=A_{\gamma_x(s)}(\dot\gamma_x(s))$ is $C^1$ in $(s,x)$ because the local coefficients of $A$ are $C^1$. On a compact subball, for a coordinate direction $e_j$, the difference quotients $Q_h(t,x)=(U(t,x+he_j)-U(t,x))/h$ satisfy
$$Q_h(t,x)=-\int_0^t C(s,x+he_j)Q_h(s,x)\,ds-\int_0^t \frac{C(s,x+he_j)-C(s,x)}{h}U(s,x)\,ds.$$
The coefficients in this linear integral equation converge uniformly as $h\to0$ to $C$ and $\partial_{x_j}C$. The equation
$$V_j(t,x)=-\int_0^t\bigl(C(s,x)V_j(s,x)+\partial_{x_j}C(s,x)U(s,x)\bigr)\,ds$$
has a unique continuous solution by successive approximation for the corresponding linear ODE. Because $\|(C(s,x+he_j)-C(s,x))/h\|$ is uniformly bounded by $\|\partial_{x_j}C\|_\infty$, the equation for $Q_h$ first gives $q_h(t)\le b+L\int_0^t q_h(s)\,ds$ with one $b$ independent of $h$. Iterating $n$ times gives $q_h(t)\le b\sum_{q=0}^{n-1}(Lt)^q/q!+\sup_s q_h(s)(Lt)^n/n!$; for each $h$, $q_h$ is bounded on the compact interval, so letting $n\to\infty$ yields $q_h(t)\le be^{LT}$ uniformly in $h$. Subtracting the equation for $V_j$ from that for $Q_h$ gives $f_h(t)\le a_h+L\int_0^t f_h(s)\,ds$, where $f_h(t):=\|Q_h(t,x)-V_j(t,x)\|$ and $a_h:=T(\|C(\cdot,x+he_j)-C(\cdot,x)\|_\infty\|V_j\|_\infty+\|(C(\cdot,x+he_j)-C(\cdot,x))/h-\partial_{x_j}C\|_\infty\|U\|_\infty)\to0$ uniformly on the compact cylinder. Iterating this inequality $n$ times gives $f_h(t)\le a_h\sum_{q=0}^{n-1}(Lt)^q/q!+\sup_s f_h(s)(Lt)^n/n!$. The already established uniform bound on $Q_h$ bounds the remainder; letting $n\to\infty$ yields $f_h(t)\le a_he^{Lt}\to0$. Thus $Q_h\to V_j$ uniformly. The same difference estimate applied at nearby $x$, together with continuity of $C$, $\partial_{x_j}C$, and $U$, shows $V_j$ is continuous in $(t,x)$. Hence $U$ is $C^1$ in the endpoint. Concatenating finitely many fixed and varying segments and changing smooth bundle frames preserve this regularity, so the path-independent section has $C^1$ local representatives. Since $M$ is compact, these representatives lie in $H^1$ in the finite-atlas norms. If $u\in H^r$ for some $1\le r\le k$, then the right side of $du=uA-Au$ is in $H^r$ by [F6], so $du\in H^r$ and $u\in H^{r+1}$. Induction gives $u\in H^{k+1}$, so $u\in\mathcal G_{k+1}$ and stabilizes $A$. Thus evaluation has exactly the stated image. [given, F1, F2, F6, step 1.1]

2.2 By [F4], a subsequence converges strongly in $H^k$ to a section $u$. The $H^k\hookrightarrow C^0$ embedding preserves the pointwise $SU(N)$ equations and the bundle transition law, so $u$ is a group-bundle section. In the gauge equation, $A_j\to A$, $B_j\to B$, and $u_j\to u$ in $H^k$; because $H^k$ is an algebra, $u_jB_j-A_ju_j\to uB-Au$ in $H^k$. Thus $du_j$ converges in $H^k$ and the local coefficients converge in $H^{k+1}$. The limit satisfies $du=uB-Au$, equivalently $B=A^u$, and $u\in\mathcal G_{k+1}$. [F1, F2, F4, step 1.2]

3.1 On the standard $\mathbb C^N$, the holonomy matrices are unitary. If the representation is irreducible, [F5] makes every matrix commuting with the representation a scalar $\lambda I_N$. Membership in $SU(N)$ gives $|\lambda|=1$ and $\lambda^N=1$, hence its centralizer is $Z_N$. The stabilizer equality from steps 1.1 and 2.1 therefore gives full stabilizer $Z_N$ and trivial reduced stabilizer. [F5, step 1.1, step 2.1, algebra]

4.1 For each $1\le r<N$, represent an $r$-plane in $\mathbb C^N$ by its Hermitian orthogonal projection $Q$, so the Grassmannian is $\{Q:Q^*=Q,\ Q^2=Q,\ \operatorname{tr}Q=r\}$ in the finite-dimensional matrix space. Such projections have norm one. Regard any sequence of them as constant curves on $[0,1]$; [F3] gives a uniformly convergent subsequence, and the three defining equations pass to its limit. Thus each Grassmannian is compact. Suppose $A_j\to A$ and each $A_j$ is reducible. A subsequence has a fixed invariant dimension $r$, and by compactness another subsequence of invariant projections converges to $Q$. For a fixed based piecewise smooth loop $\gamma$, subdivide it into finitely many segments lying in bundle charts. On one segment, let $C_j(t)$ and $C(t)$ be the local matrix coefficients in the parallel-transport equations for $A_j$ and $A$. Since $H^k\hookrightarrow C^1$ by [F1], $A_j\to A$ in $H^k$ implies $C_j\to C$ uniformly. There is a common bound $\|C_j\|_\infty\le L$, and the transport matrices $U_j,U$ have norm one. Their integral equations, with the same initial matrix on the first segment, give for $W_j=U_j-U$ the inequality $\|W_j(t)\|\le T\delta_j+L\int_0^t\|W_j(s)\|\,ds$, where $T$ is the segment length and $\delta_j=\|C_j-C\|_\infty\to0$. Iterating as in step 2.1 yields $\sup_t\|W_j(t)\|\le T e^{LT}\delta_j\to0$. At each later segment the initial matrices already converge, and the same inequality adds their vanishing initial difference to the right side. Induction over the finite subdivision proves $\operatorname{Hol}_{p_m}(A_j,\gamma)\to\operatorname{Hol}_{p_m}(A,\gamma)$. Since the holonomy matrices are unitary and preserve $\operatorname{ran}Q_j$, they commute with $Q_j$; passing to the limit shows that $\operatorname{Hol}_{p_m}(A,\gamma)$ commutes with $Q$ for every loop. Therefore $\operatorname{ran}Q$ is a nonzero proper invariant subspace and $A$ is reducible. The reducible locus is closed, so $\mathcal A_k^*$ is open. [F1, F2, F3, step 3.1, algebra]

5.1 The action map is continuous by the preceding Sobolev-calculus lemma. For a compact subset of $\mathcal A_k^*\times\mathcal A_k^*$, any sequence in its inverse image has a subsequence whose connection and transformed-connection coordinates converge in that compact set. Steps 1.2 and 2.2 give a further subsequence of gauge classes converging in $\bar{\mathcal G}_{k+1}$, while step 3.1 gives freeness. The inverse image is closed because the action map is continuous, so sequential compactness in these metrizable spaces is compactness. This proves properness. By step 3.1 the reduced action is free. [F1, step 3.1, step 1.2, step 2.2] ∎
