---
id: ex-green-correspondence-identity-boundaries
kind: example
title: Green correspondence identity boundaries
status: draft
origin: pipeline
deps: [thm-green-correspondence-with-exceptional-families, cor-green-correspondence-for-modules-of-vertex-exactly-p, def-relative-projectivity, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Example

Assume AC for the inherited correspondence and relative-$1$/projective comparison. In the finite-dimensional characteristic-$p$ Green setting, if $H=G$ then restriction and induction are identity functors up to the displayed natural isomorphism below, and the Green maps are identities on their stated vertex domains. Both exceptional families are empty. If $P=1$, the normalizer hypothesis forces $H=G$, and the exact-$P$ correspondence is the identity on projective indecomposables.

## Facts & Assumptions

**Given:** The finite group, field, $p$-subgroup and normalizer hypothesis of the full correspondence.

[A1] AC ([[def-axiom-of-choice]]) is inherited in F1–F3.

[F1] Green correspondence and its error clauses hold ([[thm-green-correspondence-with-exceptional-families]]).

[F2] The fixed-$P$ version holds on modules having $P$ as a vertex ([[cor-green-correspondence-for-modules-of-vertex-exactly-p]]).

[F3] Under AC, relative $1$-projectivity is equivalent to projectivity ([[def-relative-projectivity]]).

## Verification

1.1 Suppose $H=G$. Restriction leaves every action unchanged. The map $kG\otimes_{kG}U\to U$, $g\otimes u\mapsto gu$, is balanced, since $(ga)u=g(au)$. Its inverse is $u\mapsto1\otimes u$: the tensor relation $g\otimes u=1\otimes gu$ verifies the other composite. Thus induction is naturally isomorphic to the identity. Also $G\setminus H$ is empty, so $\mathcal X=\mathcal Y=\varnothing$ and $\mathcal Z=\{Q:Q\leq P\}$. [F1, given, algebra]

2.1 For a nonzero indecomposable input in this domain, the identity module has just itself as an indecomposable summand: any proposed nonzero complement contradicts indecomposability. Thus both distinguished assignments are identity maps and the errors vanish. This also follows from the empty-family clauses of F1. AC is retained for the general theorem used to identify these assignments, not for the explicit tensor maps in 1.1. [A1, F1, step 1.1]

3.1 If $P=1$, then every element normalizes $P$, so $N_G(P)=G$ and necessarily $H=G$. A nonzero indecomposable has vertex $1$ exactly when it is relatively $1$-projective: one implication is part of vertex minimality, and the other follows because $1$ has no proper subgroup. By F3 these are exactly the projective indecomposables. F2 therefore restricts the identity map from 2.1 to precisely that domain. Zero remains outside the domain, and zero errors cause no exception. This proves both boundary assertions. [F2, F3, step 2.1, given] ∎
