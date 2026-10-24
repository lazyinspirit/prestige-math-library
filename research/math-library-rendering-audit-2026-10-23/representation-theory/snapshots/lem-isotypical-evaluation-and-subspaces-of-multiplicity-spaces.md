---
id: "lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces"
kind: "lemma"
title: "Isotypical evaluation and multiplicity subspaces"
status: published
origin: "pipeline"
deps: ["cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order", "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars", "def-tensor-product-of-complex-representations", "thm-universal-property-of-module-tensor-products"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Ivan Losev, Representation Theory, Chapter 0. Basics — §2.3 Theorem 2.14, Corollary 2.16 and Proposition 2.17 pp.10–11"
      url: "https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf"
proof_strategy: direct
---

## Statement

Let $N$ be a finite group, let $S$ be an irreducible complex $N$-module with character $\theta$, and let $U$ be a finite-dimensional $\theta$-isotypical $N$-module, allowing $U=0$. Put $M=\operatorname{Hom}_N(S,U)$ and give $M$ the trivial $N$-action. Evaluation is an $N$-isomorphism
$$ E_U:S\otimes_{\mathbb C}M\longrightarrow U,\qquad s\otimes f\longmapsto f(s). $$
Every $N$-submodule $U_0\subseteq U$ is $E_U(S\otimes M_0)$ for a unique subspace $M_0\subseteq M$, namely $M_0=\operatorname{Hom}_N(S,U_0)$ viewed inside $M$ by inclusion. If $U^\prime$ is another such module and $M^\prime=\operatorname{Hom}_N(S,U')$, then every $N$-map $U\to U'$ is uniquely $E_{U'}(1_S\otimes a)E_U^{-1}$ for a linear map $a:M\to M^\prime$. These identifications preserve composition.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] Finite-dimensional complex representations of a finite group are completely reducible. ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] Every endomorphism of an irreducible representation over an algebraically closed field is scalar. ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F3] The tensor representation has diagonal action on elementary tensors; in particular, when the second factor is trivial, $n(s\otimes m)=(ns)\otimes m$. ([[def-tensor-product-of-complex-representations]]).

[F4] A balanced map on a right and a left module induces a unique homomorphism from their tensor product, with the specified values on elementary tensors. ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 The map $(s,f)\mapsto f(s)$ is complex bilinear, so the tensor universal property defines evaluation. It is complex linear since this is true on elementary tensors, and it is $N$-linear because $f(ns)=nf(s)$ and $N$ acts trivially on the second factor. [F3, F4, given]

2.1 Complete reducibility and the isotypical hypothesis give $U\cong S^{\oplus m}$ for some integer $m\ge0$. Fix inclusions $j_1,\ldots,j_m:S\to U$ from such a decomposition. Each component of an $N$-map $S\to U$ is a scalar endomorphism of $S$, so the $j_a$ form a basis of $M$. Evaluation sends $s\otimes j_a$ to $j_a(s)$ and is therefore an isomorphism. When $m=0$, both spaces and this map are zero. [F1, F2, step 1.1]

3.1 If $U_0\subseteq U$ is an $N$-submodule, it is completely reducible. Every simple summand $R$ of $U_0$ is isomorphic to $S$: some coordinate projection $R\to S$ is nonzero, and its kernel and image are submodules, forcing an isomorphism. Apply step 2.1 to $U_0$. Inclusion of its Hom space into $M$ intertwines the two evaluation maps on every elementary tensor, hence gives equality of actual subspaces $U_0=E_U(S\otimes M_0)$, with $M_0=\operatorname{Hom}_N(S,U_0)$. [F1, step 2.1, algebra]

4.1 For any subspace $M_0\subseteq M$, the space $E_U(S\otimes M_0)$ is $N$-stable. The natural map $M_0\to\operatorname{Hom}_N(S,E_U(S\otimes M_0))$, sending $m$ to $(s\mapsto E_U(s\otimes m))$, is an isomorphism by the scalar-coordinate calculation of step 2.1, and agrees with inclusion into $M$. Thus recovery of $M_0$ is exact and unique, including $M_0=0$ and $M_0=M$. [F3, step 2.1, step 3.1]

5.1 Choose simple decompositions of $U$ and $U^\prime$. An $N$-map between them is a matrix whose entries are endomorphisms of $S$, hence scalars. Those scalar matrices are exactly the linear maps $a:M\to M^\prime$. This proves the map assertion and uniqueness, also if either multiplicity space is zero. Composition satisfies $(1_S\otimes b)(1_S\otimes a)=1_S\otimes(ba)$ on elementary tensors, proving compatibility. [F2, step 2.1, algebra] ∎
