---
id: "lem-etale-commutativity-of-companion-step"
kind: "lemma"
title: "Etale commutativity of the companion-ideal step"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 12
deps:
  - "def-axiom-of-choice"
  - "def-companion-ideal-and-monomial-part"
  - "def-equivalence-of-marked-ideals"
  - "def-etale-morphism-schemes"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "lem-addition-and-multiplication-of-marked-ideals"
  - "lem-coefficient-ideal-is-equivalent"
  - "lem-derivative-ideals-under-etale-morphisms"
  - "lem-etale-commutativity-of-maximal-order-case"
  - "lem-order-and-snc-under-smooth-morphisms"
  - "prop-canonical-resolution-of-marked-ideals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

In the setting of Step 2 of [[prop-canonical-resolution-of-marked-ideals]], let $\varphi\colon X'\to X$ be an etale morphism and let $(X_i)_{0\le i\le m}$ be the canonical resolution of the marked ideal $(\mathcal I,E,\mu)$.
Then:
(1) the induced sequence $\varphi^*(X_i)_{0\le i\le m}$ is an extension of the canonical resolution of $\varphi^*(\mathcal I,E,\mu)$;
(2) for every $x'\in\operatorname{supp}(\varphi^*(\mathcal I_i,E_i,\mu))$ the invariants agree:
$$\operatorname{inv}(x')=\operatorname{inv}(\varphi_i(x')),\qquad \nu(x')=\nu(\varphi_i(x')),\qquad \rho(x')=\rho(\varphi_i(x')).$$

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,E,\mu)$ with $\mathcal I\ne0$, its canonical resolution from [[prop-canonical-resolution-of-marked-ideals]] with the sequence of values $\operatorname{ord}_N(I_{r_0})>\dots>\operatorname{ord}_N(I_{r_k})$ read along Step 2a, and an étale morphism $\varphi$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[prop-canonical-resolution-of-marked-ideals]], [[def-companion-ideal-and-monomial-part]]: Step 2a resolves the companion ideal $O(\mathcal I,\mu)$, which is of maximal order, and the resolution strictly decreases $\operatorname{ord}_N$ on the support; the process terminates either with empty support or in residual order zero, where $I=M(I)$ on a neighbourhood of the support, which is handled by the discrete invariant $\nu$ of Step 2b.

[F2] [[lem-addition-and-multiplication-of-marked-ideals]], [[lem-coefficient-ideal-is-equivalent]]: the decomposition $\mathcal I=M(\mathcal I)N(\mathcal I)$, the companion ideal and its support identity commute with the sum and product operations; pointwise residual orders are preserved by étale pullback. A global maximum on a nonsurjective étale image can be smaller; equal maxima are required only in the matching companion pass.

[F3] [[lem-etale-commutativity-of-maximal-order-case]]: the canonical resolution of a maximal-order marked ideal commutes with étale morphisms, with equality of invariants.

[F4] [[lem-derivative-ideals-under-etale-morphisms]], [[lem-order-and-snc-under-smooth-morphisms]]: étale pullback commutes with derivative ideals, and the monomial part pulls back to the monomial part with the same exponents; hence $\varphi^*(N(\mathcal I))=N(\varphi^*\mathcal I)$ and $\operatorname{ord}_{x'}N(\varphi^*\mathcal I)=\operatorname{ord}_{\varphi(x')}N(\mathcal I)$ at corresponding points. The maxima over the two supports need not be equal.

## Proof

1.1 The trichotomy. If the pulled-back support is empty, every center has empty inverse image, so the induced sequence consists of isomorphisms and the assertion is immediate. Otherwise, along Step 2a we compare $\operatorname{ord}_N(I_{r_l})$ with $\operatorname{ord}_N(\varphi^*(I_{r_l}))$; by [F4] the pointwise residual orders agree; the global maximum on the image can be smaller, so the pullback may omit a companion pass. If the value at stage $r_l$ exceeds the value of the pullback, the centers of $(X_i)_{r_l\le i<r_{l+1}}$ lie in the locus where $\operatorname{ord}_N$ attains its maximal value, which does not meet the image of $\varphi$, so the induced morphisms are isomorphisms; if the values agree, the companion ideals correspond, $\varphi^*(O(I_{r_l}))=O(\varphi^*I_{r_l})$, and [F3] gives the commutativity of the maximal-order step together with equality of the invariants. [A1, F1, F2, F4]

2.1 The monomial end and conclusion. If the residual maximum is zero, restrict to the open neighbourhood of the support where $N(I_{r_k})$ is a unit. There $I_{r_k}=M(I_{r_k})$ is monomial, as is its pullback by [F4], and both resolutions are controlled by the invariant $\rho$ on subsets of $E$; the ordered boundary labels and exponents identify the pointwise values of $\rho$ and $\nu$. If the image misses the current global maximum of $\rho$, the inverse center is empty and its blowup pulls back to an isomorphism. If it meets that maximum, the pulled-back center is precisely the maximal $\rho$ locus on the pullback. Iterating these two cases gives the same nonempty centers and invariant values, with isomorphism steps inserted where a larger maximum is missed. All centers lie in the support, so these local monomial sequences extend by the identity off it and agree on overlaps. Values on lower residual-order strata skipped by earlier companion passes are transferred through their unchanged lifts from the first later applicable pass, as in the proposition; the same transfers commute with étale pullback. Assembling the finitely many stages proves (1) and (2). [A1, F1, F4, step 1.1] ∎ 
