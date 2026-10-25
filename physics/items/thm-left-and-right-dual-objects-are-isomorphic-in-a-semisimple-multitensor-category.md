---
id: thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category
kind: theorem
title: "Left and right dual objects are isomorphic in a semisimple multitensor category"
status: published
origin: pipeline
deps: [def-fusion-and-multifusion-category, def-left-dual-and-right-dual-object, thm-dualization-in-a-multitensor-category-is-exact]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Proposition 4.8.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

In a semisimple multitensor category, every left dual of an object is isomorphic
to every right dual of that object.

## Facts & Assumptions

**Given:** A semisimple multitensor category and an object $X$.

[F2] Left and right duals are characterized by their evaluation and coevaluation maps ([[def-left-dual-and-right-dual-object]]).

[F3] Left dualization is exact ([[thm-dualization-in-a-multitensor-category-is-exact]]).

## Proof

**Proof technique:** direct.

1.1 By semisimplicity, decompose $X$ into simple summands. For a simple summand $V$ and a simple object $Z$, dual transposition from [F2] gives $$\operatorname{Hom}(\mathbf1,V\otimes Z)\cong\operatorname{Hom}(V^\vee,Z),\qquad \operatorname{Hom}(V\otimes Z,\mathbf1)\cong\operatorname{Hom}(Z,{}^\vee V).$$ Rigidity makes left and right dualization quasi-inverse contravariant equivalences, and exactness in [F3] therefore preserves simple objects. Hence the first space is nonzero exactly when $Z\cong V^\vee$, and the second exactly when $Z\cong{}^\vee V$. [F2, F3, given]

2.1 This comparison does not require $k$ to be algebraically closed. Write the semisimple objects as $\mathbf1\cong\bigoplus_i S_i^{\oplus a_i}$ and $V\otimes Z\cong\bigoplus_i S_i^{\oplus b_i}$ with pairwise nonisomorphic simples $S_i$. Then both $\dim_k\operatorname{Hom}(\mathbf1,V\otimes Z)$ and $\dim_k\operatorname{Hom}(V\otimes Z,\mathbf1)$ equal $\sum_i a_i b_i\dim_k\operatorname{End}(S_i)$. Hence the two unique simples detected in step 1.1 agree: $V^\vee\cong{}^\vee V$. Taking finite direct sums over the simple summands gives the result for $X$. [step 1.1, given] ∎
