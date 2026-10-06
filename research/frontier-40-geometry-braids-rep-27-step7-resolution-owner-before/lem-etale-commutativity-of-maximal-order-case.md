---
id: "lem-etale-commutativity-of-maximal-order-case"
kind: "lemma"
title: "Etale commutativity of the maximal-order resolution step"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 11
deps:
  - "def-axiom-of-choice"
  - "def-canonical-resolution-invariants"
  - "def-equivalence-of-marked-ideals"
  - "def-etale-morphism-schemes"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "lem-coefficient-ideal-restriction-support"
  - "lem-controlled-transform-is-well-defined"
  - "lem-glueing-homogenized-ideals"
  - "lem-order-semicontinuity-and-snc-strata"
  - "lem-refined-giraud-maximal-contact"
  - "lem-smooth-pullback-of-multiple-test-blowups"
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

In the setting of Step 1 of [[prop-canonical-resolution-of-marked-ideals]], let $\varphi\colon X'\to X$ be an etale morphism ([[def-etale-morphism-schemes]]) and let $(X_i)_{0\le i\le m}$ be the canonical resolution of the maximal-order marked ideal $(\mathcal J,E,\mu)$ constructed in Step 1.
Then:
(1) the induced sequence $\varphi^*(X_i)_{0\le i\le m}$ is an extension of the canonical resolution $(X'_j)_{0\le j\le m'}$ of $\varphi^*(\mathcal J,E,\mu)$;
(2) for every $x'\in\operatorname{supp}(\varphi^*(\mathcal J_i,E_i,\mu))$ the invariants agree:
$$\operatorname{inv}(x')=\operatorname{inv}(\varphi_i(x')),\qquad \nu(x')=\nu(\varphi_i(x')),\qquad \rho(x')=\rho(\varphi_i(x')).$$

## Facts & Assumptions

**Given:** A maximal-order marked ideal $(\mathcal J,E,\mu)$ on the smooth finite-type $K$-scheme $X$, its canonical resolution $(X_i)_{0\le i\le m}$ from Step 1 of [[prop-canonical-resolution-of-marked-ideals]], and an étale morphism $\varphi\colon X'\to X$.



[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[prop-canonical-resolution-of-marked-ideals]]: the resolution is constructed via the splitting sequence $s_{i_0}>\dots>s_{i_k}$ of maximal numbers of divisors of $E$ through the support; between consecutive indices the process is reduced to resolving the restrictions to the strata $H^s_\alpha$, and in the non-boundary case to a hypersurface of maximal contact $V(u)$, always by the inductive hypothesis in lower dimension.

[F2] [[lem-coefficient-ideal-restriction-support]], [[lem-smooth-pullback-of-multiple-test-blowups]]: étale base change of the marked ideal commutes with restriction to the strata and with multiple test blow-ups, and preserves supports; invariant equality for the lower-dimensional canonical sequences is provided by induction.

[F3] [[lem-glueing-homogenized-ideals]], [[lem-refined-giraud-maximal-contact]]: the reduced problem on a hypersurface of maximal contact is independent of the choice of tangent direction, and the inverse image of a hypersurface of maximal contact is again one.

[F4] [[def-canonical-resolution-invariants]]: the invariants are upper semicontinuous and their maximal loci are the centers; equality of invariants for the induced sequence follows once the centers and the reductions agree stage by stage.

[F5] [[lem-smooth-pullback-of-multiple-test-blowups]]: étale morphisms are smooth, so the order/SNC calculation used in that supplier preserves orders of ideals and hence supports.

## Proof

1.1 The splitting sequence of the pullback. Let $s'_0>\dots>s'_{k'}$ be the corresponding sequence of maximal divisor counts for the canonical resolution of $\varphi^*(\mathcal J,E,\mu)$; since $\varphi$ is flat, the inverse image of $E$ has the same intersection pattern, so $s'_j\le s_{i}$-values at corresponding stages. We prove by induction on the pairs $(l,l')$ of the two splitting sequences that the induced sequence $\varphi^*(X_i)$ agrees with the canonical sequence of the pullback up to extension and that the invariants correspond. [A1, F1, F5]

2.1 Case 1: the étale image misses the strata. If $s(\varphi^*(X_{i_l}))<s_{i_l}$, then the centers blown up in $(X_i)_{i_l\le i\le i_{l+1}}$ lie in strata that do not meet the image of $\varphi$, so their inverse images are empty and the induced morphisms are isomorphisms; the equality of marked ideals and invariants with the pullback at stage $i_l$ is inherited from stage $l$. [A1, F2, F4, step 1.1]

3.1 Case 2: the strata meet the image. If $s(\varphi^*(X_{i_l}))=s_{i_l}>0$, the strata of the pullback are the inverse images of the strata of $X$, and $\varphi^*(J_{i_l}|_{H^s_\alpha})=J'_{j_{l'}}|_{(H')^s_\alpha}$; the resolution process is reduced on both sides to the restrictions, so by the inductive hypothesis in lower dimension (the strata have dimension $<\dim X$) the canonical resolutions correspond and the invariants satisfy $\operatorname{inv}(x')=\operatorname{inv}(\varphi(x'))$, as do $\nu$ and $\rho$. [A1, F1, F2, step 2.1]

4.1 Case 3: the non-boundary case. If $s(\varphi^*(X_{i_k}))=s_{i_k}=0$, first apply Step 1ba of [F1]. Its codimension-one support components are regular and isolated; étale pullback preserves their codimension and their local equation $J=(u^\mu)$. Their labelled Cartier-center blowups divide by $u^\mu$ and give the unit ideal near them. Thus this branch corresponds on both sides, with an inserted isomorphism only when a center has empty inverse image. The remaining support has codimension at least two. Only now apply Step 1bb: its maximal-contact hypersurface has a generically nonzero restricted ideal, so the lower-dimensional canonical-resolution induction applies. Its inverse image is a hypersurface of maximal contact by [F3], and the induction gives matching centers and invariants; [F3] gives independence of the direction. The codimension-one branch carries the same top encoded invariant on both sides, and all other points receive the values from their later unchanged lifts as in the proposition's successive assignment. [A1, F1, F2, F3, step 3.1]

5.1 Conclusion. Combining the preceding cases over the finitely many elements of the splitting sequence, $\varphi^*(X_i)$ is an extension of the canonical resolution of the pullback and the invariants agree on all supports; this proves (1) and (2). [A1, F4, step 2.1, step 3.1, step 4.1] ∎ 
