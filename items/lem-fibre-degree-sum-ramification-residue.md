---
id: lem-fibre-degree-sum-ramification-residue
kind: lemma
title: "Fibre degree sum with ramification and residue degrees"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-nonconstant-morphism-curves-degree
  - def-ramification-index-curve-map
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice. Let $f:C\to D$ be a nonconstant morphism of smooth
proper geometrically integral curves over a field $k$, put $n=\deg(f)$, and let
$q$ be a closed point of $D$. Then the fibre $f^{-1}(q)$ is finite and
$$\sum_{p\in f^{-1}(q)}e_p\,[\kappa(p):\kappa(q)]=n,$$
where $e_p$ is the ramification index of $f$ at $p$.

## Facts & Assumptions

**Given:** AC, a nonconstant morphism $f:C\to D$ of smooth proper geometrically integral curves over $k$, $n=\deg(f)$, and a closed point $q\in D$.

[F1] Under AC, such a morphism is finite and surjective, and its degree definition establishes the weighted fibre formula
$$\sum_{p\in f^{-1}(q)}\operatorname{ord}_p(f^*t_q)[\kappa(p):\kappa(q)]=\deg(f),$$
where $t_q$ is a uniformizer at $q$. The fibre is finite: on an affine neighbourhood of $q$ it is the spectrum of a finite-dimensional residue-field algebra, whose Artinian decomposition has finitely many local factors. ([[def-nonconstant-morphism-curves-degree]])

[F2] Under the same hypotheses and AC, the ramification index is $e_p=\operatorname{ord}_p(f^*t_q)$, independently of the chosen uniformizer. ([[def-ramification-index-curve-map]])

[A1] Assume the Axiom of Choice, inherited from the finite curve-map, smooth-curve DVR and algebraic suppliers in [F1] and [F2]. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; apply the fibre formula already established in the degree definition, with the ramification-index notation.

1.1 The hypotheses and AC license [F1], so $f^{-1}(q)$ is finite and its weighted order sum equals $\deg(f)=n$. [F1, A1]

2.1 At each point $p$ of this finite fibre, [F2] identifies $\operatorname{ord}_p(f^*t_q)$ with $e_p$. Substitution in step 1.1 gives $\sum_{p\in f^{-1}(q)}e_p[\kappa(p):\kappa(q)]=n$. This uses no separability assumption and no further Choice. [F2, step 1.1] ∎
