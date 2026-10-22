---
id: lem-qftx-finite-graph-scaling-degree
kind: lemma
title: Finite scalar graphs have finite scaling degree
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-qftx-local-time-ordered-system
  - thm-qftx-wavefront-product
  - def-qft-distribution-scaling-degree
  - thm-qft-finite-scaling-degree-extension
  - prop-qft-local-counterterm-jet-classification
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  thm-qft-finite-scaling-degree-extension: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 7, equations (81)–(89), finite graph expansion and scaling-degree extension; derivative-kernel estimates are supplied here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 4–7, printed pp. 18–25 and 26–33, causal graph expansion, local microlocal scaling-degree product bound and extension across partial diagonals. Their final discussion restricts the displayed power-counting formula to undifferentiated monomials; finite-jet derivative bounds are supplied here.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice and fix admissible scalar free data as defined by the local time-ordered product contract. In addition assume the following product-scaling bound (PB): whenever two finite-scaling-degree distributions $u,v$ on one resolved causal stratum have a wavefront-transversal product, their product has finite relative scaling degree and
$$\operatorname{sd}_0(uv)\le\operatorname{sd}_0(u)+\operatorname{sd}_0(v).$$
Assume (PB) at every successive product of edge pullbacks and lower-order local counterterms used below. Fix a finite loopless multigraph $\Gamma$ with $n\ge2$ labeled vertices, parallel edges allowed, and a finite multi-index derivative $\alpha_e$ on each edge $e$. Suppose every proper partial-diagonal subgraph has already received an extension of finite scaling degree by induction on its number of vertices. Then the numerical graph distribution on the complement of the total diagonal has finite scaling degree in the $4(n-1)$ relative coordinates. For a primitive graph, with no proper divergent subgraph, the bound is
$$\operatorname{sd}_0(t_\Gamma)\le 2|E(\Gamma)|+\sum_{e\in E(\Gamma)}|\alpha_e|.$$
For a graph with proper subgraphs, the same induction gives a finite bound obtained from this edge estimate and the finitely many derivative orders of its lower-order local counterterms.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[thm-qftx-wavefront-product]]

[[thm-qft-finite-scaling-degree-extension]]

## Facts & Assumptions

**Given:** A finite graph $\Gamma$, the scalar contraction kernel $H_F$ with relative scaling degree at most $2$, finite jet orders at its vertices, and finite-scaling-degree extensions of every proper subgraph.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] for the finite-scaling-degree extension theorem and Countable Choice [[def-countable-choice]] for the microlocal product inputs.

[A2] Product-scaling bound (PB): at every successive multiplication on a resolved causal stratum, wavefront-transversal finite-degree factors have a product of finite degree at most the sum of their degrees. The current local wavefront-product supplier proves existence and wavefront bounds, but does not prove (PB) from the ordinary scaling-degree hypotheses; this is an explicit additional hypothesis of this conditional lemma.

[F1] [[def-qftx-local-time-ordered-system]]: the fixed contraction kernel has $\operatorname{sd}_0(H_F)\le2$; its off-diagonal products satisfy the stated wavefront transversality condition; each graph has finitely many edges and finite derivative orders.

[F2] [[def-qft-distribution-scaling-degree]]: $T_\rho(\varphi)=\rho^{-d}T(\varphi(\cdot/\rho))$ in relative dimension $d$, and $\operatorname{sd}_0(T)$ is the infimum of exponents making $\rho^\omega T_\rho\to0$ on every fixed test.

[F3] [[thm-qftx-wavefront-product]]: under wavefront transversality, products and pullbacks exist; on compact coordinate patches their Fourier transforms obey the conic convolution and rapid-decay bounds proved in that item.

[F4] [[thm-qft-finite-scaling-degree-extension]]: under [A1], a punctured distribution with finite real scaling degree has an extension of the same degree.

[F5] [[prop-qft-local-counterterm-jet-classification]]: two same-degree extensions in relative dimension $d$ differ by a finite sum of $\partial^\beta\delta_0$, with $|\beta|\le\lfloor\delta-d\rfloor$ when $\delta\ge d$; when $\delta<d$ the extension is unique.

## Proof

**Proof technique:** direct.

**Given:** [A1], [A2] and [F1]–[F5].

1.1 If $T$ has finite scaling degree $\delta$ in dimension $d$, then for a multi-index $\alpha$,
$$\langle(\partial^\alpha T)_\rho,\varphi\rangle=\rho^{-|\alpha|}\langle T_\rho,\partial^\alpha\varphi\rangle.$$
Thus every exponent strictly above $\delta+|\alpha|$ makes the scaled derivative tend to zero, so $\operatorname{sd}_0(\partial^\alpha T)\le\delta+|\alpha|$. For a surjective linear map $L:\mathbb R^D\to\mathbb R^d$, choose linear coordinates $(y,w)$ with $y=Lx$ and $w\in\ker L$. The pullback $L^*T$ is $T(y)\otimes1(w)$ when it exists; integrating a test in $w$ shows the dilation factors $\rho^{-D}$ and the $w$-Jacobian $\rho^{D-d}$ cancel to the ordinary relative factor $\rho^{-d}$. Hence $\operatorname{sd}_0(L^*T)\le\operatorname{sd}_0(T)$. [F1, F2, algebra]

1.2 For a wavefront-transversal pair $u,v$ on a resolved stratum, apply (PB) [A2] to obtain a finite-degree product and the bound $\operatorname{sd}_0(uv)\le\operatorname{sd}_0(u)+\operatorname{sd}_0(v)$. This step is exactly the extra product-scaling input; no conclusion that it follows from ordinary scaling degrees alone is used. [A2, F2, F3]

2.1 On a causal configuration stratum after proper partial diagonals have been resolved, a primitive graph coefficient is a finite product of edge kernels $\partial^{\alpha_e}H_F(x_i-x_j)$. Each difference map $(x_1,\ldots,x_n)\mapsto x_i-x_j$ is surjective in relative coordinates. By steps 1.1–1.2 and [F1], each pulled-back edge has finite scaling degree at most $2+|\alpha_e|$, and each successive product is defined by [F3] on the stated stratum. Iterating the product bound gives
$$\operatorname{sd}_0(t_\Gamma)\le\sum_{e\in E(\Gamma)}(2+|\alpha_e|).$$
The sum is finite because $\Gamma$ has finitely many edges and each vertex functional has finite jet order. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For a graph with proper subgraphs, apply [F4] to each already finite-degree subgraph distribution in its relative coordinates. By [F5], its extension ambiguity is a finite list of delta derivatives of bounded order. Inserting any such counterterm contracts that subgraph to a local vertex and adds only its finite derivative order to the remaining edge factors. The contracted graph has fewer vertices, so induction and steps 1.1–2.1 give finite scaling degree for each resulting term. A fixed finite graph has only finitely many proper subgraphs, forests, edge derivatives and allowed counterterm jets; the maximum of these finitely many finite bounds is finite. This is the required bound for the graph after all proper partial diagonals have been resolved. [A1, A2, F4, F5, step 1.1, step 2.1, construct] ∎

## Remarks

This is a complete conditional estimate under (PB). Brunetti–Fredenhagen, Lemma 6.6 and the graph estimate in Section 7, use microlocal scaling degree and establish the product bound in that directional topology; the local supplier available here states ordinary scaling degree and wavefront transversality only. The implication from the current free-kernel hypotheses to (PB), or a local microlocal-scaling supplier that proves it, remains unresolved and is escalated. The estimate asserts neither convergence of the formal perturbation series nor an adiabatic limit.
