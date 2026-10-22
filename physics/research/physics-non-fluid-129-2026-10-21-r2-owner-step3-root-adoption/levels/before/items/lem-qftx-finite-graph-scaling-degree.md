---
id: lem-qftx-finite-graph-scaling-degree
kind: lemma
title: Scalar graph coefficients have finite upper scaling bounds
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-qftx-local-time-ordered-system
  - thm-qftx-wavefront-product
  - lem-qftx-transverse-center-scaling-bound
  - lem-test-function-cutoffs-and-euclidean-localization
  - def-qft-distribution-scaling-degree
  - thm-qft-finite-scaling-degree-extension
  - prop-qft-local-counterterm-jet-classification
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  lem-qftx-transverse-center-scaling-bound: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
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

Assume the Axiom of Choice and Countable Choice and fix admissible scalar free data as defined by the local time-ordered product contract. Fix a finite loopless multigraph $\Gamma$ with vertex set $V=\{1,\ldots,n\}$, $n\ge2$, parallel edges allowed, and a finite multi-index derivative $\alpha_e$ on each edge $e$. In this lemma a vertex subgraph is always the induced multigraph $\Gamma[S]$ on a subset $S\subseteq V$: it retains all edges of $\Gamma$ whose two endpoints lie in $S$, with their multiplicities and derivative labels. The associated partial diagonal is $\Delta_S=\{(x_i)_{i\in V}\in(\mathbb R^4)^V:x_i=x_j\text{ for all }i,j\in S\}$; its codimension is $4(|S|-1)$, and $\Delta_V$ is the total diagonal. Put $i_0=\min S$ and use $(x_i-x_{i_0})_{i\in S\setminus\{i_0\}}$ as relative coordinates on the quotient by simultaneous translations. The scaling degree at $\Delta_S$ means the scaling degree at the origin in these relative coordinates, using positive dilations as in the scaling-degree definition. For $|S|\ge2$, let $t_{\Gamma[S]}$ be the numerical coefficient on the complement of its total diagonal after the coefficients for all strictly smaller vertex subsets $T\subsetneq S$, $|T|\ge2$, have been extended across their partial diagonals. Call $\Gamma[S]$ divergent exactly when $\operatorname{sd}_0(t_{\Gamma[S]})\ge4(|S|-1)$; call $\Gamma$ primitive when none of its proper induced vertex subgraphs is divergent. A translation-invariant extension here is invariant under simultaneous translations of all vertices in the relevant subset.

Suppose for every proper subset $S\subsetneq V$ with $|S|\ge2$, the coefficient $t_{\Gamma[S]}$ has already received a translation-invariant extension across its total diagonal, obeying the scaling upper bounds of the contract and agreeing on intersections, by induction on $|S|$. Then the numerical graph distribution $t_\Gamma$ on the complement of the total diagonal has a finite upper scaling bound in the $4(n-1)$ relative coordinates. For a primitive graph, the bound is
$$\operatorname{sd}_0(t_\Gamma)\le 2|E(\Gamma)|+\sum_{e\in E(\Gamma)}|\alpha_e|.$$
For a graph with proper subgraphs, the same induction gives a finite bound obtained from this edge estimate and the finitely many derivative orders of its lower-order local counterterms.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[thm-qftx-wavefront-product]]

[[thm-qft-finite-scaling-degree-extension]]

## Facts & Assumptions

**Given:** A finite graph $\Gamma$, the scalar contraction kernels $W,H_F$ with relative scaling degree at most $2$, finite edge derivative orders, and the lower-order translation-invariant graph extensions in the Statement.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] for scaling-degree extensions and Countable Choice [[def-countable-choice]] for Fourier and product inputs.

[F1] [[def-qftx-local-time-ordered-system]] fixes the translation-invariant kernels $W(x,y)=w(x-y)$ and $H_F(x,y)=h_F(x-y)$, their scaling bounds, the positive-frequency wavefront set of $W$, causal factorization, and the finite graph convention. On a causal split, a cross-block $H_F$ edge agrees with $W$ oriented from the later block to the earlier block.

[F2] [[def-qft-distribution-scaling-degree]] defines relative positive dilations and their scaling degree, including scaling for distributions already defined at the origin.

[F3] [[thm-qftx-wavefront-product]] defines products and pullbacks when their wavefront covectors cannot cancel, including at coincident points if that condition holds there.

[F4] [[lem-qftx-transverse-center-scaling-bound]]: distributions already defined at the scaling center, with nonnegative upper scaling bounds $a_j$ and joint no-cancellation there, have a product of scaling degree at most $\sum_j a_j$.

[F5] [[thm-qft-finite-scaling-degree-extension]] supplies same-degree extensions under [A1]; [[prop-qft-local-counterterm-jet-classification]] classifies their ambiguity as finitely many delta derivatives with bounded order.

[F6] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies smooth cutoffs and partitions subordinate to an open cover; restricting to coordinate patches of the relative unit sphere gives a finite smooth angular partition.

## Proof

**Proof technique:** causal block induction with transversality at the full scaling center.

**Given:** [A1], [F1]–[F6] and the lower-order extensions in the Statement.

1.1 Differentiation adds at most its order to a scaling upper bound: $\langle(\partial^\alpha T)_\rho,\varphi\rangle=(-1)^{|\alpha|}\rho^{-|\alpha|}\langle T_\rho,\partial^\alpha\varphi\rangle$. A surjective linear pullback does not increase that bound: in coordinates $(y,z)$ with $y=Lx$, $L^*T=T(y)\otimes1(z)$, and integration of a test in $z$ cancels the extra dilation Jacobian. The same observation shows that a translation-invariant kernel, written as a relative distribution tensored with a constant center coordinate, has the same full-coordinate and relative scaling bounds. Its wavefront covectors satisfy $\sum_i\xi_i=0$: with a product localization in center and relative coordinates the center Fourier transform decreases rapidly, and the convolution localization argument of [F3] gives the statement for arbitrary localizations. Thus every cross edge $\partial^{\alpha_e}W(x_i,x_j)$ has upper scaling bound $2+|\alpha_e|$, while every lower-order block kernel has covectors whose sum within its block is zero. [F1, F2, F3, algebra]

2.1 Fix a nontrivial partition $I\mid J$ of the vertices. The extended subgraph kernels $t_I$ and $t_J$ are distributions on their entire separate coordinate blocks, including their own total diagonals. Lift the two kernels to the full vertex-coordinate space by tensoring with the constant distribution in the other block. Step 1.1 preserves their finite nonnegative upper scaling bounds $b_I,b_J$. Their covector tuples occupy disjoint blocks, so their product is their tensor product and [F4] bounds its degree by $b_I+b_J$. A one-vertex block contributes the constant kernel and bound zero. Multiply this tensor product by all cross-edge kernels oriented as $\partial^{\alpha_e}W(x_i,x_j)$ with $i\in I,j\in J$. At a full-diagonal point every nonzero wavefront contribution from a cross edge places a future null covector at $i$ and its negative at $j$. If the sum of all factor covectors were zero, summing its entries over $I$ would give a sum of future null covectors equal to zero, because the internal block covectors sum to zero by step 1.1. The future causal cone is pointed, so every cross-edge covector must vanish. The two remaining block tuples occupy disjoint coordinate blocks, and hence must separately vanish. This proves joint no-cancellation at the full diagonal. It also proves it at other points, since the wavefront condition on $W$ has the same orientation everywhere. [F1, F3, F4, step 1.1, construct, algebra]

3.1 By [F3] and step 2.1 the causal block expression
$$B_I=t_I\otimes t_J\prod_{e=(i,j),\ i\in I,\ j\in J}\partial^{\alpha_e}W(x_i,x_j)$$
is a distribution even at the full diagonal. Apply [F4] there and step 1.1 to obtain the finite upper bound
$$\operatorname{sd}_0(B_I)\le b_I+b_J+\sum_{e\text{ crossing }I\mid J}(2+|\alpha_e|).$$
All factors are already defined at the center where [F4] is used. This argument requires no product of coincident $H_F$ factors and no directional property of an arbitrary unextended punctured-stratum product. Translation invariance makes the full-coordinate estimate exactly the relative-coordinate estimate. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 The causal split sets $C_I=\{x_i\notin J^-(x_j):i\in I,j\notin I\}$ cover the complement of the total diagonal. Indeed, choose a timelike linear time function taking unequal values on two distinct entries of a configuration, then split the finitely many values at a level attained by none of them. These open sets are invariant under translations and positive relative dilations. Their intersections with the relative unit sphere form a finite open cover of that compact sphere. Using [F6] in its coordinate patches, choose a finite smooth partition $f_I$ there, subordinate to the cover, and extend it homogeneously by $f_I(\rho z)=f_I(z)$ to punctured relative space. On $C_I$, [F1] and lower-order causal factorization identify the graph coefficient with $B_I$. The lower-order expressions agree on overlaps: refining two causal splits into their intersections expresses both as the same block product, and the two incomparable blocks are spacelike, where $W=W^{\mathsf T}$. Hence the graph distribution is $t_\Gamma=\sum_I f_I B_I$ off zero. For a fixed punctured test $\varphi$, each $f_I\varphi$ is a fixed smooth compactly supported punctured test; homogeneity gives $(f_I B_I)_\rho(\varphi)=(B_I)_\rho(f_I\varphi)$. The finite sum therefore has the maximum of the finite bounds in step 3.1. [F1, F2, F3, F6, step 3.1, construct, algebra]

5.1 For a primitive graph, the definitions above mean every proper induced vertex subgraph lies below its divergence threshold. Induct on vertex number with the engineering upper bound $b_I=\sum_{e\text{ internal to }I}(2+|\alpha_e|)$ for a block $I$, and likewise for $J$. For independent balanced subgraph coefficients choose same-degree extensions by [F5]; their total-derivative descendants and any allowed local normalizations retain the contract's engineering upper bounds. Thus the lower-order block kernels, including any permitted finite delta-derivative terms, have these nonnegative upper bounds, starting from the zero bound at one vertex. Step 3.1 then counts every edge exactly once and step 4.1 gives $\operatorname{sd}_0(t_\Gamma)\le2|E(\Gamma)|+\sum_e|\alpha_e|$. If a proper vertex subgraph has a chosen local counterterm, [F5] makes it a finite sum of finite-order delta derivatives. Each has finite relative scaling degree equal to its relative dimension plus its derivative order. Its translation-invariant lift still has block momentum sum zero by step 1.1, so steps 2.1–4.1 apply with a finite nonnegative upper bound for that chosen block. There are only finitely many vertex subsets and finitely many counterterm jets at this fixed graph order. Taking their finite maximum proves the stated general finite upper bound. [A1, F2, F5, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The argument uses transversality at the full scaling center for the causal block factors, not the false general inference from ordinary punctured scaling bounds and punctured transversality. In this translation-invariant setting, block momentum conservation and the pointed future cone provide exactly that stronger transversality. The scalar free-data contract is unchanged. The estimate asserts neither convergence of the perturbation series nor an adiabatic limit.
