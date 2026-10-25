---
id: lem-qftx-gauge-stabilizer-and-properness
kind: lemma
title: Gauge stabilizers and properness of the Sobolev action
status: draft
origin: pipeline
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice. The proof uses the stated unitary Schur, Sobolev compactness, and analytic suppliers."
deps:
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
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
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

[F2] The parallel-transport ODE has a common-interval continuous-dependence estimate for nearby coefficients and parameters. A piecewise smooth loop is handled by finitely many such intervals. [[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]

[F3] Every bounded equicontinuous sequence of curves from a compact interval into finite-dimensional Euclidean space has a uniformly convergent subsequence. [[lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence]]

[F4] Every bounded sequence in $H^{k+1}$ of sections on the compact manifold has a subsequence converging in $H^k$. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F5] A bounded operator intertwining an irreducible complex unitary representation with itself is scalar. [[thm-schurs-lemma-for-unitary-representations]]

[F6] The finite-atlas Sobolev product bounds hold in every integer order $0\le r\le k$: $\|fg\|_{H^r}\le C\|f\|_{H^k}\|g\|_{H^r}$. They follow by the product rule, the embeddings in [F1], and Hölder; when derivative orders are $b$ and $c$ with $b+c\le r$, the residual Sobolev orders $k-b$ and $r-c$ have sum at least $k>d/2$, so exponents can be chosen with reciprocal sum at most $1/2$. [[thm-higher-order-sobolev-embedding]], [[cor-sobolev-algebra-above-the-critical-index]], [[lem-qftx-gauge-sobolev-calculus]]

## Proof

**Given:** The hypotheses of the Statement.

**Given:** The hypotheses of the Statement.

1.1 A gauge section $u$ stabilizes $A$ exactly when the local action formula gives $du=uA-Au$, that is, $d_Au=0$. This equation says that $u$ is parallel for the induced connection on $\operatorname{Ad}P$. Since $M$ is connected, parallel transport determines $u$ everywhere from its value at $p_m$, so evaluation is injective on the stabilizer. A parallel section's value commutes with transport around every based loop, hence lies in the holonomy centralizer. [given, A1, F1, algebra]

1.2 Let $B_j=A_j^{u_j}$ and work in the fixed finite atlas. The local action formula gives $du_j=u_jB_j-A_ju_j$. Since $u_j$ is unitary, its pointwise matrix norm is bounded uniformly. The convergent sequences $A_j,B_j$ are bounded in $H^k$, so the equation gives a uniform $H^1$ bound on $u_j$. If a uniform $H^r$ bound holds for some $0\le r\le k$, [F6] bounds both products on the right in $H^r$; hence $du_j$ is bounded in $H^r$ and $u_j$ is bounded in $H^{r+1}$. Induction through $r=k$ gives a uniform $H^{k+1}$ bound. [given, F1, F6, algebra]

2.1 Conversely, let $g\in SU(N)$ commute with every element of $\operatorname{Hol}_{p_m}(A)$. Transport $g$ from $p_m$ along any path to a point $x$ and conjugate it by the path's parallel-transport matrix. Two paths give the same value because their concatenation has holonomy commuting with $g$. In local coordinates this gives a parallel section $u$ with $u(p_m)=g$. It is $C^1$ since $A\in H^k\hookrightarrow C^1$ and the parameter-dependent parallel-transport ODE is $C^1$ in the endpoint. The equation $du=uA-Au$, the bounds [F6], and induction on $r=0,1,\ldots,k$ show $u\in H^{k+1}$: starting with its $C^1$ local coefficients, if $u\in H^r$ then the right side is in $H^r$, so all first derivatives are in $H^r$ and $u\in H^{r+1}$. Thus $u\in\mathcal G_{k+1}$ and stabilizes $A$, proving that evaluation has exactly the stated image. [given, F1, F2, F6, step 1.1]

2.2 By [F4], a subsequence converges strongly in $H^k$ to a section $u$. The $H^k\hookrightarrow C^0$ embedding preserves the pointwise $SU(N)$ equations and the bundle transition law, so $u$ is a group-bundle section. In the gauge equation, $A_j\to A$, $B_j\to B$, and $u_j\to u$ in $H^k$; because $H^k$ is an algebra, $u_jB_j-A_ju_j\to uB-Au$ in $H^k$. Thus $du_j$ converges in $H^k$ and the local coefficients converge in $H^{k+1}$. The limit satisfies $du=uB-Au$, equivalently $B=A^u$, and $u\in\mathcal G_{k+1}$. [F1, F2, F4, step 1.2]

3.1 On the standard $\mathbb C^N$, the holonomy matrices are unitary. If the representation is irreducible, [F5] makes every matrix commuting with the representation a scalar $\lambda I_N$. Membership in $SU(N)$ gives $|\lambda|=1$ and $\lambda^N=1$, hence its centralizer is $Z_N$. The stabilizer equality from steps 1.1 and 2.1 therefore gives full stabilizer $Z_N$ and trivial reduced stabilizer. [F5, step 1.1, step 2.1, algebra]

4.1 For each $1\le r<N$, represent an $r$-plane in $\mathbb C^N$ by its Hermitian orthogonal projection $Q$, so the Grassmannian is $\{Q:Q^*=Q,\ Q^2=Q,\ \operatorname{tr}Q=r\}$ in the finite-dimensional matrix space. Such projections have norm one. Regard any sequence of them as constant curves on $[0,1]$; [F3] gives a uniformly convergent subsequence, and the three defining equations pass to its limit. Thus each Grassmannian is compact. Suppose $A_j\to A$ and each $A_j$ is reducible. A subsequence has a fixed invariant dimension $r$, and by compactness another subsequence of invariant projections converges to $Q$. For every fixed based loop $\gamma$, [F2] and [F1] give $\operatorname{Hol}_{p_m}(A_j,\gamma)\to\operatorname{Hol}_{p_m}(A,\gamma)$. Since the holonomy matrices are unitary and preserve $\operatorname{ran}Q_j$, they commute with $Q_j$; passing to the limit shows that $\operatorname{Hol}_{p_m}(A,\gamma)$ commutes with $Q$ for every loop. Therefore $\operatorname{ran}Q$ is a nonzero proper invariant subspace and $A$ is reducible. The reducible locus is closed, so $\mathcal A_k^*$ is open. [F1, F2, F3, step 3.1, algebra]

5.1 The action map is continuous by the preceding Sobolev-calculus lemma. For a compact subset of $\mathcal A_k^*\times\mathcal A_k^*$, any sequence in its inverse image has a subsequence whose connection and transformed-connection coordinates converge in that compact set. Steps 1.2 and 2.2 give a further subsequence of gauge classes converging in $\bar{\mathcal G}_{k+1}$, while step 3.1 gives freeness. The inverse image is closed because the action map is continuous, so sequential compactness in these metrizable spaces is compactness. This proves properness. By step 3.1 the reduced action is free. [F1, step 3.1, step 1.2, step 2.2] ∎
