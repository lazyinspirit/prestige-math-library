---
id: thm-leray-hirsch-module-isomorphism
kind: theorem
title: Leray–Hirsch module isomorphism
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-global-fiber-basis-trivializes-serre-monodromy, lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity, thm-cohomological-serre-spectral-sequence, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, def-axiom-of-choice]
proof_strategy: direct
verification:
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
    - title: "Miller, MIT 18.906 notes, Theorem 33.5"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 33, Theorem 33.5 and proof, printed pp.122–123"
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Leray–Hirsch theorem and applications, printed pp.77–81"
---

## Statement

Assume AC, and let $R$ be a commutative unital ring.  Let
$F\to E\xrightarrow{p}B$ be a Serre fibration over a path-connected CW
complex, and suppose the finitely many homogeneous classes $e_i\in H^*(E;R)$
restrict to an $R$-basis on every fiber.  Then
$$\Phi:\bigoplus_iH^{*-|e_i|}(B;R)\longrightarrow H^*(E;R);\quad (a_i)\longmapsto\sum_i p^*a_i\smile e_i$$
is an $H^*(B;R)$-module isomorphism.  It is natural for maps of such
fibrations that pull the specified classes on the target to the specified
classes on the source.

## Facts & Assumptions

**Given:** The commutative unital ring, fibration, finite homogeneous family,
and basis hypothesis in the statement.

[F1] [[lem-global-fiber-basis-trivializes-serre-monodromy]] identifies the
fiber-cohomology system as constant in the displayed basis.

[F2] [[lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity]]
lifts the associated-graded basis isomorphism for this actual map $\Phi$.

[F3] [[thm-cohomological-serre-spectral-sequence]] identifies the $E_2$ page
and the edge classes, while
[[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]]
identifies cup products and their pagewise products.

[A1] [[def-axiom-of-choice]] is assumed exactly as in [F1]–[F2].

## Proof

**Proof technique:** identify the Serre-page map and lift it.

1.1 By [F1] and [F3], the $E_2$ page is $H^p(B;R)\otimes_RH^q(F;R)$ in the named basis.  Each $e_i$ comes from total-space cohomology, so its fiber restriction is represented by the fiber edge and is a permanent cycle.  The product in [F3] therefore makes the map induced by $\Phi$ on $E_2$ the basis map $\bigoplus_iH^{p}(B;R)[-|e_i|]\to H^p(B;R)\otimes_RH^q(F;R)$.  It is an isomorphism in every bidegree. [F1, F3]

2.1 A morphism of spectral sequences that is an isomorphism on one page is an isomorphism on all subsequent pages, so step 1.1 gives the associated-graded isomorphism at $E_\infty$.  Applying [F2] to the actual filtered cup-product map proves that $\Phi$ is an isomorphism in every total degree. [F2, step 1.1]

3.1 The formula gives $\Phi(ca_i)=p^*c\smile\Phi(a_i)$, so it is an $H^*(B;R)$-module map.  For a map of fibrations carrying every specified target $e_i$ to the corresponding source $e_i$, contravariance of pullback and cup naturality make the two displayed formulas commute; this is the asserted, choice-of-basis-relative naturality.  If the finite list is empty, all fiber cohomology is zero and both sides are zero; one basis element, the zero ring, degree-zero classes, and filtration endpoints are included in steps 1.1–2.1.  No splitting or basis is selected, and AC is used exactly through [A1]. [F1, F2, A1, step 1.1, step 2.1] ∎
