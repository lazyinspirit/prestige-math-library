---
id: thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity
kind: theorem
title: "Local coherent acyclicity on sufficiently small polydiscs"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "Pure local complex analytic sheaf cohomology under the Axiom of Choice; no physical model or empirical claim is made."
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-dolbeault-lemma-polydisc
  - thm-dolbeault-cohomology-polydisc-vanishes-positive-q
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-abelian-sheaves-have-enough-injectives
  - def-sheaf-cohomology-derived-global-sections
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
  - lem-qftx-gaga-euclidean-sheaf-cohomological-dimension
  - def-bigraded-complex-differential-forms
  - def-holomorphic-function-in-several-complex-variables
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - thm-cauchy-riemann-characterization-in-several-complex-variables
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-dolbeault-cohomology-polydisc-vanishes-positive-q: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-abelian-sheaves-have-enough-injectives: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  lem-qftx-gaga-euclidean-sheaf-cohomological-dimension: mathematical-premise
  def-bigraded-complex-differential-forms: mathematical-premise
  def-holomorphic-function-in-several-complex-variables: mathematical-premise
  cor-holomorphic-functions-in-several-variables-are-smooth: mathematical-premise
  thm-cauchy-riemann-characterization-in-several-complex-variables: mathematical-premise
justified_by: []
forward_refs: []
aliases: [thm-qftx-gaga-local-coherent-acyclicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.A, Proposition 4.1 (vanishing for strongly q-complete manifolds with q>=1 in cohomological degrees k>=q, including the scalar q=1 case), and §4.B, equation (4.3) and Lemma 4.4, printed pp. 419–421: local free resolutions and dimension shifting. The source uses its topological-dimension bound; this item supplies the required ordinary Euclidean bound and scalar Dolbeault vanishing."
    - title: "Joachim Wehler, Stein Manifolds"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
      locator: "§5.2, Proposition 5.9, Theorem 5.14 and Corollary 5.15, printed pp. 171–180: acyclicity from a finite free resolution, coherent free resolutions after shrinking to a relatively compact polydisc, and the resulting coherent-sheaf vanishing. This corroborates the conclusion; no full finite resolution is used by the partial-resolution proof here."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Statement

Assume the full Axiom of Choice. Let $N\ge0$, let $U$ be an open neighborhood
of $x\in\mathbb C^N$, and let $\mathcal F$ be a coherent analytic
$\mathcal O_U$-module. A coordinate polydisc centered at $x$ means a set
$$W=\{z\in\mathbb C^N:|z_j-x_j|<r_j\ (1\le j\le N)\},\qquad r_j>0,$$
contained in $U$. There is such a $W$ for which the following hold.

For every nonempty coordinate polydisc $D\subseteq W$ and every integer
$q>0$, ordinary derived-functor sheaf cohomology satisfies
$$H^q(D,\mathcal F|_D)=0.$$
On each such $D$, scalar sheaf cohomology of $\mathcal O_D$ is computed by the
global smooth Dolbeault complex. Here $\mathcal A_D^{0,q}$ is the sheaf of
smooth complex-valued differential forms of type $(0,q)$ and $\bar\partial$ is
the Dolbeault differential:
$$\Gamma(D,\mathcal A_D^{0,0})\xrightarrow{\bar\partial}\cdots \xrightarrow{\bar\partial}\Gamma(D,\mathcal A_D^{0,N}),$$
and in particular $H^q(D,\mathcal O_D)=0$ for $q>0$. The polydisc $W$ may be
chosen inside a neighborhood on which there is a partial finite-rank free resolution
$$\mathcal O_W^{p_\ell}\longrightarrow\cdots\longrightarrow \mathcal O_W^{p_0}\longrightarrow\mathcal F|_W\longrightarrow0$$
that is exact at $\mathcal F|_W$ and at every free term except possibly the
leftmost one, with $\ell=2N+1>2N$. No exactness at the leftmost term and no
global free resolution are asserted.

## Statement references

[Demailly, Chapter IX §4.A, Proposition 4.1 and §4.B, equation (4.3) and Lemma 4.4, pp. 419–421: local-resolution and dimension-shift method; scalar vanishing and the ordinary Euclidean bound are proved here](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §5.2, Proposition 5.9, Theorem 5.14 and Corollary 5.15, pp. 171–180](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** Full AC, $N\ge0$, a point $x$ in an open set $U\subseteq\mathbb C^N$, and a coherent analytic module $\mathcal F$ on $U$. All cohomology below is ordinary right-derived global-sections cohomology on the indicated open set.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice function. This is the ambient axiom used by the sheaf-theoretic supplier theorems.

[F1] [[def-qftx-analytic-coherent-module]]: coherence means local finite type together with local finite type of the kernels of all finite-rank free module maps into the sheaf.

[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: under full AC, the holomorphic structure sheaf on a finite-dimensional complex manifold is coherent; coherent analytic modules are closed under kernels, cokernels and finite extensions. For every coherent module, point and finite integer $\ell\ge0$, there is a chart neighborhood with a partial finite-rank free resolution exact at the module and at every free term except possibly the leftmost. No global free resolution is asserted.

[F3] For $N\ge1$, [[thm-dolbeault-lemma-polydisc]] gives local exactness in every positive antiholomorphic degree. At degree zero, [[def-bigraded-complex-differential-forms]] says that $\bar\partial f=0$ is exactly the Cauchy–Riemann system for a smooth function. Holomorphic functions are smooth by [[cor-holomorphic-functions-in-several-variables-are-smooth]], and [[thm-cauchy-riemann-characterization-in-several-complex-variables]] says that a $C^1$ function is holomorphic exactly when that system holds at every point, with holomorphy defined by [[def-holomorphic-function-in-several-complex-variables]]. Thus the full smooth Dolbeault sequence is an exact resolution of $\mathcal O_D$.

[F4] [[thm-smooth-function-module-sheaves-are-acyclic]]: sheaves of modules over the smooth-function sheaf on a smooth manifold are acyclic for global sections.

[F5] [[thm-acyclic-resolution-theorem-for-right-derived-functors]]: a sheaf resolution by acyclic sheaves computes the right-derived functors of global sections by its global-section complex.

[F6] [[thm-dolbeault-cohomology-polydisc-vanishes-positive-q]]: on every coordinate polydisc in $\mathbb C^N$ with $N\ge1$, every smooth $\bar\partial$-closed $(0,q)$-form is $\bar\partial$-exact for $1\le q\le N$. This is a statement about the global Dolbeault complex; its identification with sheaf cohomology is established in step 1.3.

[F7] [[thm-abelian-sheaves-have-enough-injectives]] and [[def-sheaf-cohomology-derived-global-sections]]: abelian sheaves admit injective resolutions, and $H^q(D,-)$ denotes the right-derived functors of global sections. Finite direct sums of acyclic sheaves are acyclic, since finite direct sums of injective resolutions remain injective and global sections and cohomology commute with finite direct sums.

[F8] [[thm-exactness-of-sheaves-stalkwise]]: exactness of a sequence of sheaves is equivalent to exactness on every stalk; restriction to an open subset preserves a short exact sequence.

[F9] [[thm-long-exact-sequence-sheaf-cohomology]]: every short exact sequence of sheaves induces the natural long exact sequence in derived sheaf cohomology.

[F10] [[lem-qftx-gaga-euclidean-sheaf-cohomological-dimension]]: if $D$ is a nonempty open subset of $\mathbb R^{2N}$ and $\mathcal G$ is any sheaf of abelian groups on $D$, then $H^r(D,\mathcal G)=0$ for $r>2N$.

## Proof

**Proof technique:** direct.

1.1 If $N=0$, the chart neighborhood is the one-point space. Coherence makes the stalk a finitely generated $\mathbb C$-vector space, hence finite dimensional; choose a basis to identify $\mathcal F$ with a finite-rank free module on that point. Global sections on a point are the identity functor on abelian groups, so they are exact and have zero higher derived functors by [F7]. The Dolbeault complex consists only of degree-zero sections, and the isomorphism $\mathcal O^{p_0}\to\mathcal F$ preceded by the zero free module gives a partial free presentation with $\ell=1>2N=0$, exact at the required terms. [A1, F1, F7, given, algebra]

1.2 Suppose $N\ge1$. Apply [F2] with $\ell=2N+1$ and choose a coordinate polydisc $W$ about $x$ inside its chart neighborhood and $U$. Restrict the partial resolution to $W$. Write $K_0=\mathcal F|_W$ and, successively, let $K_{j+1}$ be the kernel of the induced surjection $\mathcal O_W^{p_j}\twoheadrightarrow K_j$ for $0\le j<\ell$. Exactness of the partial resolution gives these surjections; [F2] makes every $K_{j+1}$ coherent. Thus each sequence $$0\longrightarrow K_{j+1}\longrightarrow\mathcal O_W^{p_j} \longrightarrow K_j\longrightarrow0$$ is short exact. The last kernel is the image of the leftmost map; no injectivity at that leftmost free term is needed. [F1, F2, given, construct]

1.3 Let $D\subseteq W$ be a nonempty coordinate polydisc. By [F3], the smooth Dolbeault sequence on $D$ is an exact resolution of $\mathcal O_D$. Its terms are modules over the sheaf of smooth functions, so [F4] makes them acyclic; [F5] therefore identifies $H^q(D,\mathcal O_D)$ with the cohomology of the displayed global Dolbeault complex. By [F6] that global complex has zero cohomology in degrees $1\le q\le N$, and it is zero in degrees $q>N$. Hence $H^q(D,\mathcal O_D)=0$ for every $q>0$. [F3, F4, F5, F6, given]

2.1 For each finite rank $p_j$, the restriction $\mathcal O_D^{p_j}$ is acyclic: step 1.3 gives acyclicity of each copy of $\mathcal O_D$, and [F7] gives additivity for the finite direct sum. Restricting the short exact sequences of step 1.2 to $D$ preserves exactness by [F8]. [F7, F8, step 1.2, step 1.3]

3.1 Fix $q>0$. In the long exact sequence of each restricted short exact sequence, the groups $H^q(D,\mathcal O_D^{p_j})$ and $H^{q+1}(D,\mathcal O_D^{p_j})$ vanish by step 2.1. Exactness from [F9] therefore makes the connecting homomorphism $$H^q(D,K_j|_D)\xrightarrow{\ \cong\ }H^{q+1}(D,K_{j+1}|_D)$$ an isomorphism. Composing for $j=0,\ldots,\ell-1$ yields $$H^q(D,\mathcal F|_D)\cong H^{q+\ell}(D,K_\ell|_D).$$ [F9, step 2.1, given, algebra]

4.1 Since $D$ is open in $\mathbb R^{2N}$ and $q+\ell\ge1+(2N+1)>2N$, [F10] makes the right-hand group in step 3.1 zero. Hence $H^q(D,\mathcal F|_D)=0$. The same $W$ works for every such $D$ and every $q>0$, because the partial resolution is fixed on $W$ and the scalar and dimension bounds apply to every open subpolydisc. [F10, step 3.1] ∎
