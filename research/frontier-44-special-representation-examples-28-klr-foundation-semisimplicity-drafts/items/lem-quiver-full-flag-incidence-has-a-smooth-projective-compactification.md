---
id: lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification
kind: lemma
title: "Quiver full-flag incidence has a smooth projective compactification"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - def-projective-bundle-scheme
  - lem-grassmannian-standard-affine-charts
  - thm-projective-morphism-proper
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, sections 1–2"
      url: https://arxiv.org/pdf/0901.3992
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the relative Proj and scheme-properness suppliers. Let $\Gamma$ be a finite loopless quiver, with arbitrary finitely many arrows between two distinct vertices. Let $V=\bigoplus_iV_i$ be a finite-dimensional complex graded vector space, $\beta_i=\dim V_i$, $E_V=\bigoplus_{h:i\to j}\operatorname{Hom}(V_i,V_j)$ and $G_V=\prod_i\operatorname{GL}(V_i)$. Let $\nu=(\nu_1,\ldots,\nu_m)$ be a word with $\beta_i$ occurrences of $i$. Let $\mathcal F_\nu$ be the variety of increasing full graded flags $0=F^0\subset F^1\subset\cdots\subset F^m=V$ with $F^r/F^{r-1}$ of color $\nu_r$. Then $X_\nu=\{(x,F):x_hF_i^r\subset F_j^r\text{ for all }h:i\to j,r\}$ is a $G_V$-equivariant vector subbundle $W_\nu$ of $E_V\times\mathcal F_\nu$. Its rank is $\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ and its dimension is that rank plus $\sum_i\beta_i(\beta_i-1)/2$. The map $\pi_\nu:X_\nu\to E_V$ is projective.

Put $\mathbb P_{\rm lines}(U)=\operatorname{Proj}\operatorname{Sym}(U^\vee)$. Then the bundle inclusion defines a $G_V$-equivariant projective map $\bar\pi_\nu:\mathbb P_{\rm lines}(W_\nu\oplus\mathcal O)\to\mathbb P_{\rm lines}(E_V\oplus\mathbb C)$ whose source is smooth projective and whose restriction over the affine chart $t\ne0$ is exactly $\pi_\nu$. The analogous associated-bundle construction over any finite product of complex Grassmannians formed from tautological bundles is a projective map between smooth projective varieties, restricting over its affine chart to the associated incidence map.

## Facts & Assumptions

**Given:** the Axiom of Choice and the complex quiver, dimension, word and increasing flag convention of the Statement.

[F1] $\mathbb P_{\rm lines}(U)$ uses the dual of the finite locally free sheaf in the quotient convention of [[def-projective-bundle-scheme]]. On a bundle trivialization it is a product with complex projective space, with homogeneous coordinates the vector's coefficients. The standard affine charts have independent ratios, hence are smooth when the base is smooth.

[F2] Grassmannians have the explicit graph charts of [[lem-grassmannian-standard-affine-charts]]. Their Plücker realization sends a $d$-plane to its top exterior-power line. The image is the closed locus of decomposable lines: on each nonzero Plücker-coordinate chart the other coordinates are minors of the graph matrix, so the Plücker equations cut out exactly those graphs. This supplies smoothness and projectivity, including the rank-zero point.

[F3] Under the declared Axiom of Choice, a projective morphism is proper ([[thm-projective-morphism-proper]]). Closed incidence inside a product with a projective variety exhibits a projective morphism: compose its closed immersion with the projective projection, using the Segre embedding for finite products of projective spaces.

## Proof

**Given:** the data and choice assumption in the Statement.

1.1 Forgetting repeated steps identifies $\mathcal F_\nu$ with $\prod_i\operatorname{Flag}(V_i)$. The full flag variety is the closed incidence locus in $\prod_{d=1}^{\beta_i-1}\operatorname{Gr}(d,V_i)$ cut out by successive inclusions of the tautological subspaces. It is projective by the Plücker and Segre embeddings. Its smoothness and dimension follow by constructing a flag successively: choose a line in $V_i$, then a line in its quotient, and continue. Each map is locally a projective-space bundle of dimensions $\beta_i-1,\beta_i-2,\ldots,1$, so the total space is smooth of dimension $\beta_i(\beta_i-1)/2$. The standard graph charts give algebraic local bases adapted to the tautological flag. Empty products and flags of dimensions zero or one are points. [F1, F2, given]

2.1 On such a local adapted-basis chart, label a basis vector $e_p$ by its occurrence $p$ in $\nu$. Stability says that the coefficient of $e_q$ in $x_he_p$ vanishes whenever $q>p$. A loopless arrow has distinct source and target colors, so $q=p$ never occurs. All coefficients with $q<p$ are independent free coordinates. The defining equations are homogeneous linear equations in the representation coordinates, with precisely the rank stated in the Statement. Changes of adapted basis preserve stability and act linearly on these free coordinates; consequently these local kernels glue to a vector subbundle $W_\nu\subset E_V\times\mathcal F_\nu$, whose quotient is locally free. The total space is smooth and its dimension is the sum of base dimension and rank. Applying $g\in G_V$ to both the matrices and flags preserves the same incidence equations, establishing equivariance. [step 1.1, algebra, construct]

3.1 Intrinsically the incidence is the common zero locus of the maps from each tautological $F_i^r$ to $V_j/F_j^r$ induced by $x_h$, so it is closed in $E_V\times\mathcal F_\nu$. The latter projects projectively to $E_V$ by step 1.1; hence $\pi_\nu$ is projective and proper. No condition on a fiber's paving or semismallness has entered. [F3, step 1.1, step 2.1, construct]

3.2 The inclusion $W_\nu\oplus\mathcal O\hookrightarrow(E_V\oplus\mathbb C)\times\mathcal F_\nu$ induces a closed immersion of line projectivizations: on each local bundle chart the equations are the same homogeneous linear equations, with the extra coordinate $t$ unconstrained. Its image in $\mathbb P_{\rm lines}(E_V\oplus\mathbb C)\times\mathcal F_\nu$ is therefore closed. Projection gives $\bar\pi_\nu$, a projective map with projective source. The source is smooth by [F1] and step 1.1. If $t\ne0$ the line has the unique representative $(w,1)$, and the incidence equations say exactly $w\in W_{\nu,F}$. Thus the inverse image of that affine chart is exactly $X_\nu$, scheme-theoretically, and the map there is $(w,F)\mapsto w$. Every construction commutes with the $G_V$ action. [F1, F3, step 1.1, step 2.1, construct]

3.3 For the finite associated version put $B_N=\prod_{\beta_i>0}\operatorname{Gr}(\beta_i,N_i)$ and let $S_i$ be the tautological bundle. The associated flag base $\mathcal F_{\nu,N}$ parametrizes chains inside each $S_i$ and is the smooth projective partial flag variety recording also the terminal $\beta_i$-plane in $\mathbb C^{N_i}$; the chart and incidence proof of step 1.1 applies. Set $E_N=\bigoplus_{h:i\to j}\operatorname{Hom}(S_i,S_j)$, omitting zero-rank terms. Local adapted bases prove that the associated incidence $W_{\nu,N}$ is a vector subbundle of the pullback of $E_N$ exactly as in step 2.1. Its projectivization with an extra trivial line is smooth by [F1]. [F1, F2, step 1.1, step 2.1, construct]

4.1 Absolute projectivity of the target needs no general compactification theorem. Put $D=\bigotimes_{\beta_i>0}\det S_i$. For every nonzero arrow term, $\operatorname{Hom}(S_i,S_j)\otimes D$ is canonically $\bigwedge^{\beta_i-1}S_i\otimes S_j\otimes\bigotimes_{l\ne i}\det S_l$, since $S_i^\vee\otimes\det S_i=\bigwedge^{\beta_i-1}S_i$. Each exterior-power tautological bundle is a vector subbundle of the corresponding exterior power of the trivial bundle. Their tensor products therefore are subbundles of finite trivial bundles. The same holds for $D$ itself. Taking their direct sum embeds $(E_N\oplus\mathcal O)\otimes D$ into a finite trivial bundle, with locally free quotient. Tensoring all lines by $D$ identifies its line projectivization with $\mathbb P_{\rm lines}(E_N\oplus\mathcal O)$. Consequently that target embeds as a closed subvariety of $B_N\times\mathbb P^M$, proving its absolute projectivity; it is smooth by [F1]. [F1, F2, step 3.3, algebra, construct]

5.1 The incidence inclusion now embeds $\mathbb P_{\rm lines}(W_{\nu,N}\oplus\mathcal O)$ closed in $\mathbb P_{\rm lines}(E_N\oplus\mathcal O)\times_{B_N}\mathcal F_{\nu,N}$, as in step 3.2. This fiber product is closed in the product of the two projective varieties, because it is the inverse image of the closed diagonal of the projective base. Thus the source and the induced map to the target are projective. Its inverse image of $t\ne0$ is the associated incidence by the same unique representative $(w,1)$. This proves every asserted compactification, including empty dimension, zero arrows and arbitrary finite multiplicities. [F3, step 3.2, step 3.3, step 4.1] ∎

## Proof contract boundary

Choice is used only through the existing relative Proj and projective-implies-proper suppliers; all adapted-basis choices involve fixed finite dimensions. The statement is geometry over $\mathbb C$; the sheaf coefficient field is not used here. It preserves all finite loopless quivers and dimensions. The full incidence varieties, rather than arbitrary fibers of their projections, are the vector bundles. The statement supplies finite-dimensional associated varieties, not an equivariant category or a Borel stabilization theorem.
