---
id: thm-qftx-gaga-local-coherent-acyclicity
kind: theorem
title: "Local coherent acyclicity on sufficiently small polydiscs"
status: draft
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
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Demailly, Analytic Methods in Algebraic Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.B, Proposition 4.1 and Lemma 4.4 with its complete proof, printed pp. 419–421: partial local free resolutions, scalar polydisc vanishing, and dimension shift. The proof here supplies the ordinary sheaf cohomological-dimension bound explicitly."
    - title: "Joachim Wehler, Stein Manifolds"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
      locator: "§5.2, Proposition 5.9, Theorem 5.14 and Corollary 5.15, printed pp. 171–180: scalar polydisc vanishing, coherent resolutions, and coherent-sheaf vanishing on relatively compact polydiscs; used as an independent treatment of the local ingredients."
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
$$\Gamma(D,\mathcal A_D^{0,0})\xrightarrow{\bar\partial}\cdots
\xrightarrow{\bar\partial}\Gamma(D,\mathcal A_D^{0,N}),$$
and in particular $H^q(D,\mathcal O_D)=0$ for $q>0$. The polydisc $W$ may be
chosen inside a neighborhood on which there is a partial finite-rank free resolution
$$\mathcal O_W^{p_\ell}\longrightarrow\cdots\longrightarrow
\mathcal O_W^{p_0}\longrightarrow\mathcal F|_W\longrightarrow0$$
that is exact at $\mathcal F|_W$ and at every free term except possibly the
leftmost one, with $\ell=2N+1>2N$. No exactness at the leftmost term and no
global free resolution are asserted.

## Statement references

[Demailly, Chapter IX §4.B, Proposition 4.1 and Lemma 4.4, pp. 419–421](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §5.2, Proposition 5.9, Theorem 5.14 and Corollary 5.15, pp. 171–180](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** Full AC, $N\ge0$, a point $x$ in an open set $U\subseteq\mathbb C^N$, and a coherent analytic module $\mathcal F$ on $U$. All cohomology below is ordinary right-derived global-sections cohomology on the indicated open set.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice function. This is the ambient axiom used by the sheaf-theoretic supplier theorems.

[F1] [[def-qftx-analytic-coherent-module]]: coherence means local finite type together with local finite type of the kernels of all finite-rank free module maps into the sheaf.

[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: for a coherent analytic module and each finite integer $\ell$, the current supplier statement asserts a chart neighborhood with a partial finite-rank free resolution exact at the module and every free term except the leftmost, and it asserts closure of coherent modules under kernels, cokernels, and finite extensions. Its full current proof and manifest statement have been inspected and the interface matches this use. The supplier is present in batch 63, but its existing `ready` record is hash-stale; its transitive bounded-degree-relations helper also has a stale `ready` record. This unresolved current readiness input is not treated as proved by the carrier's draft status or pending precheck.

[F3] [[thm-dolbeault-lemma-polydisc]]: the smooth Dolbeault sequence is locally exact on a polydisc, hence is an exact resolution of the holomorphic function sheaf there.

[F4] [[thm-smooth-function-module-sheaves-are-acyclic]]: sheaves of modules over the smooth-function sheaf on a smooth manifold are acyclic for global sections.

[F5] [[thm-acyclic-resolution-theorem-for-right-derived-functors]]: a sheaf resolution by acyclic sheaves computes the right-derived functors of global sections by its global-section complex.

[F6] [[thm-dolbeault-cohomology-polydisc-vanishes-positive-q]]: for every coordinate polydisc $D\subset\mathbb C^N$, $H^q(D,\mathcal O_D)=0$ for every $q>0$.

[F7] [[thm-abelian-sheaves-have-enough-injectives]] and [[def-sheaf-cohomology-derived-global-sections]]: abelian sheaves admit injective resolutions, and $H^q(D,-)$ denotes the right-derived functors of global sections. Finite direct sums of acyclic sheaves are acyclic, since finite direct sums of injective resolutions remain injective and global sections and cohomology commute with finite direct sums.

[F8] [[thm-exactness-of-sheaves-stalkwise]]: exactness of a sequence of sheaves is equivalent to exactness on every stalk; restriction to an open subset preserves a short exact sequence.

[F9] [[thm-long-exact-sequence-sheaf-cohomology]]: every short exact sequence of sheaves induces the natural long exact sequence in derived sheaf cohomology.

[F10] [[lem-qftx-gaga-euclidean-sheaf-cohomological-dimension]]: if $D$ is a nonempty open subset of $\mathbb R^{2N}$ and $\mathcal G$ is any sheaf of abelian groups on $D$, then $H^r(D,\mathcal G)=0$ for $r>2N$.

## Proof

**Proof technique:** direct.

1.1 If $N=0$, the chart neighborhood is the one-point space. Coherence makes the stalk a finitely generated $\mathbb C$-vector space, hence finite dimensional; choose a basis to identify $\mathcal F$ with a finite-rank free module on that point. Global sections on a point are the identity functor on abelian groups, so they are exact and have zero higher derived functors by [F7]. The Dolbeault complex consists only of degree-zero sections, and the chosen free presentation has length one, which is greater than $2N=0$. [A1, F1, F7, given, algebra]

1.2 Suppose $N\ge1$. Apply [F2] with $\ell=2N+1$ and choose a coordinate polydisc $W$ about $x$ inside its chart neighborhood and $U$. Restrict the partial resolution to $W$. Write $K_0=\mathcal F|_W$ and, successively, let $K_{j+1}$ be the kernel of the induced surjection $\mathcal O_W^{p_j}\twoheadrightarrow K_j$ for $0\le j<\ell$. Exactness of the partial resolution gives these surjections; [F2] makes every $K_{j+1}$ coherent. Thus each sequence
$$0\longrightarrow K_{j+1}\longrightarrow\mathcal O_W^{p_j}
\longrightarrow K_j\longrightarrow0$$
is short exact. The last kernel is the image of the leftmost map; no injectivity at that leftmost free term is needed. [F1, F2, given, construct]

2.1 Let $D\subseteq W$ be a nonempty coordinate polydisc. By [F3], the smooth Dolbeault sequence on $D$ is an exact resolution of $\mathcal O_D$. Its terms are modules over the sheaf of smooth functions, so [F4] makes them acyclic; [F5] therefore identifies $H^q(D,\mathcal O_D)$ with the cohomology of the displayed global Dolbeault complex. In particular [F6] gives $H^q(D,\mathcal O_D)=0$ for every $q>0$. [F3, F4, F5, F6, given]

2.2 For each finite rank $p_j$, the restriction $\mathcal O_D^{p_j}$ is acyclic: [F6] gives acyclicity of each copy of $\mathcal O_D$, and [F7] gives additivity for the finite direct sum. Restricting the short exact sequences of step 1.2 to $D$ preserves exactness by [F8]. [F6, F7, F8, step 1.2]

3.1 Fix $q>0$. In the long exact sequence of each restricted short exact sequence, the groups $H^q(D,\mathcal O_D^{p_j})$ and $H^{q+1}(D,\mathcal O_D^{p_j})$ vanish by step 2.2. Exactness from [F9] therefore makes the connecting homomorphism
$$H^q(D,K_j|_D)\xrightarrow{\ \cong\ }H^{q+1}(D,K_{j+1}|_D)$$
an isomorphism. Composing for $j=0,\ldots,\ell-1$ yields
$$H^q(D,\mathcal F|_D)\cong H^{q+\ell}(D,K_\ell|_D).$$
[F9, step 2.2, given, algebra]

3.2 Since $D$ is open in $\mathbb R^{2N}$ and $q+\ell\ge1+(2N+1)>2N$, [F10] makes the right-hand group in step 3.1 zero. Hence $H^q(D,\mathcal F|_D)=0$. The same $W$ works for every such $D$ and every $q>0$, because the partial resolution is fixed on $W$ and the scalar and dimension bounds apply to every open subpolydisc. [F10, step 3.1] ∎
