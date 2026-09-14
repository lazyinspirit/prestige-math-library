---
id: ex-leray-hirsch-for-a-trivial-product-bundle
kind: example
title: Leray–Hirsch for a trivial product bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-leray-hirsch-module-isomorphism, thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 33"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Theorem 33.5 and product case, printed pp.122–123"
---

## Example

Assume AC.  Let $B$ be a path-connected CW complex, let $R$ be a commutative
PID, and suppose every $H_q(F;R)$ is finite free and finitely many homogeneous
classes $b_1,\ldots,b_m$ form an $R$-basis of $H^*(F;R)$.  For
$p:B\times F\to B$, the classes $1\times b_i$ give Leray–Hirsch and recover
the cohomological Künneth module isomorphism.

## Facts & Assumptions

**Given:** The spaces, PID and finite homogeneous basis above.

[F1] [[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]]
gives $H^*(B\times F;R)\cong H^*(B;R)\otimes_RH^*(F;R)$ by external product,
under AC and the stated finite-free fiber homology hypothesis.

[F2] [[thm-leray-hirsch-module-isomorphism]] gives the module isomorphism from
a supplied global restricting fiber basis.

[A1] [[def-axiom-of-choice]] is used exactly through [F1]–[F2].

## Verification

**Proof technique:** calculate restrictions and the displayed formula.

1.1 Define $e_i=1\times b_i=\operatorname{pr}_B^*1\smile\operatorname{pr}_F^*b_i$.  On the fiber $\{b\}\times F$, the first factor restricts to $1$ and the second to $b_i$, so $e_i|_{F_b}=b_i$.  The supplied list is therefore a basis on every fiber. [F1]

2.1 Apply [F2].  Its map sends $(a_i)$ to $\sum_i p^*a_i\smile e_i=\sum_i a_i\times b_i$.  This is exactly the cross-product map in [F1], and the basis identifies its source with $H^*(B;R)\otimes_RH^*(F;R)$.  Thus both isomorphisms agree, not merely their abstract modules. [F1, F2, step 1.1]

3.1 If $m=0$, the fiber cohomology and both sides are zero; $m=1$ gives one shifted copy.  A point fiber has basis $1$, and a point base recovers $H^*(F)$.  Empty $F$, degree zero, zero classes and all finite direct-sum endpoints are included in the formulas.  The zero ring is outside the stated PID convention.  No basis is chosen: it is supplied.  AC is used exactly through [A1] in Künneth and cohomological Serre/Leray–Hirsch. [F1, F2, A1, step 1.1, step 2.1] ∎
