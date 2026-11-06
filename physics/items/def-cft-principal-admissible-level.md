---
id: def-cft-principal-admissible-level
kind: definition
title: Nondegenerate principal admissible affine level
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - def-cft-root-data-for-principal-w-levels
  - def-dual-coxeter-number-for-normalized-form
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
justified_by: [lem-cft-principal-level-affine-admissibility]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tomoyuki Arakawa, Rationality of W-algebras: principal nilpotent cases"
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Theorem 10.2, the exact nondegenerate principal-admissible inequalities.
    - title: Tomoyuki Arakawa, Rationality of admissible affine vertex algebras in the category O
      url: https://arxiv.org/pdf/1207.4857v4
      locator: Proposition 3.1, admissible level and lacing-number conventions.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For the root data of def-cft-root-data-for-principal-w-levels, write $h=h_{\mathfrak g}$, $h^\vee=h^\vee_{\mathfrak g}$, $r^\vee$ for the lacing number, and $h^\vee_{\widetilde{\mathfrak g}}$ for the normalized dual Coxeter datum of a supplied Langlands-dual simple Lie algebra. A **nondegenerate principal admissible level** is
$$k=-h^\vee+\frac pq,$$
where $p,q\in\mathbb Z_{>0}$, $\gcd(p,q)=1$, and one of the following mutually source-specified tests holds:
$$
\gcd(q,r^\vee)=1,\quad p\ge h^\vee,\quad q\ge h;
$$
or
$$
\gcd(q,r^\vee)=r^\vee,\quad p\ge h,\quad q\ge r^\vee h^\vee_{\widetilde{\mathfrak g}}.
$$
The second test is conditional on the dual-root realization and normalization in the preceding definition. Since $p/q>0$, every such level is noncritical: $k\ne-h^\vee$.



## Definition references

[[def-cft-root-data-for-principal-w-levels]]

## Facts & Assumptions

**Given:** A finite-dimensional complex simple $\mathfrak g$, its normalized root data, and positive coprime integers $p,q$.

[F1] [[def-cft-root-data-for-principal-w-levels]]: $h$, $h^\vee$, and $r^\vee$ have the stated root and form conventions; the supplied dual realization and its optional Choice-based construction are precise.

[F2] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee_{\mathfrak g}$ is the dual Coxeter number for the invariant form normalized by long roots of squared length $2$.

[C1] This is the nondegenerate principal-W threshold predicate. It is stronger than the general admissible-number predicate; no converse equivalence is asserted. The actual forward implication is proved in the linked justifier.

## Proof

1.1 Positive coprime integers and the supplied normalized root data make every gcd test and inequality a well-defined arithmetic condition. The second branch uses the supplied dual realization from F1; no unsupported existence claim is inserted. The two tests agree in the simply-laced case where their gcd conditions coincide. [given, F1, F2, C1, algebra]

2.1 Positivity gives $p/q>0$, hence k+hvee is nonzero and the level is noncritical. This proves the Definition's stated consequence. The stronger denominator thresholds distinguish nondegeneracy; they are not an equivalence with all admissible affine numbers. [given, F1, F2, C1, step 1.1, algebra] ∎

## Proof status

The arithmetic predicate and noncriticality assertion are proved. Its exact forward admissibility implication is proved by the attached justifier; the false stronger converse is not claimed.


