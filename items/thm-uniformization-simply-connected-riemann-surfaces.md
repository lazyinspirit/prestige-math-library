---
id: thm-uniformization-simply-connected-riemann-surfaces
kind: theorem
title: "Uniformization of simply connected Riemann surfaces"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-canonical-green-kernel-riemann-surface
  - def-biholomorphic-map
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-green-function-uniformizes-simply-connected-surface
  - lem-nongreen-simply-connected-surface-is-plane-or-sphere
  - lem-three-simply-connected-models-are-inequivalent
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: cases
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 6-9, Theorem 4 (the Green-function case), the proof in Case 2 (the dipole Green function and its endgame), and the closing statement of the theorem on pp. 8-9"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (existence and uniqueness of the disc, plane and sphere models)"
---

## Statement

Assume the Axiom of Choice. Every simply connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) is biholomorphic to exactly one
of the Riemann sphere $\widehat{\mathbb C}$, the complex plane $\mathbb C$ and
the unit disc $\mathbb D$ ([[def-biholomorphic-map]]).

## Facts & Assumptions
**Given:** The Axiom of Choice; a simply connected Riemann surface $X$; a point $p_0\in X$; the Perron envelope $g_X(\cdot,p_0)$ of [[def-canonical-green-kernel-riemann-surface]].

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function; applied to countable families it yields the Countable Choice $\mathrm{AC}_\omega$ of [[def-countable-choice]], which is the hypothesis of the dichotomy supplier [F3].

[F1] Riemann surfaces and biholomorphy ([[def-riemann-surface-and-holomorphic-atlas]], [[def-biholomorphic-map]]): a Riemann surface is nonempty, connected, Hausdorff and second countable with a holomorphic atlas; a biholomorphism of Riemann surfaces is a bijective holomorphic map whose inverse is holomorphic, and the relation "$X$ is biholomorphic to $Y$" is symmetric and transitive because composites and inverses of biholomorphisms are again of that kind.

[F2] Canonical Green kernel and Perron envelope ([[def-canonical-green-kernel-riemann-surface]]): for a Riemann surface $X$ and a point $p$ the Perron family $\mathcal F_p$ and its envelope $g_X(\cdot,p)=\sup\{v(\cdot):v\in\mathcal F_p\}$ are defined, with values in $[0,+\infty]$ on $X\setminus\{p\}$; $X$ admits a finite canonical Green kernel at $p$ exactly when $g_X(q,p)<+\infty$ for every $q\in X\setminus\{p\}$.

[F3] Dichotomy ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): for a Riemann surface $V$ and a pole $p$, either $g_V(q,p)=+\infty$ for every $q\in V\setminus\{p\}$, or $g_V(\cdot,p)$ is finite (and strictly positive and harmonic) on $V\setminus\{p\}$; the lemma assumes Countable Choice.

[F4] The Green case ([[lem-green-function-uniformizes-simply-connected-surface]]): under the Axiom of Choice, a simply connected Riemann surface which admits a finite canonical Green kernel at some point $p_0$ is biholomorphic to the unit disc $\mathbb D$.

[F5] The non-Green case ([[lem-nongreen-simply-connected-surface-is-plane-or-sphere]]): under the Axiom of Choice, a simply connected Riemann surface whose canonical Green envelope is infinite at some point $p_0$, that is, $g_X(q,p_0)=+\infty$ for every $q\in X\setminus\{p_0\}$, is biholomorphic to the complex plane $\mathbb C$ if it is noncompact, and to the Riemann sphere $\widehat{\mathbb C}$ if it is compact.

[F6] The models are pairwise distinct ([[lem-three-simply-connected-models-are-inequivalent]]): the Riemann sphere, the complex plane and the unit disc are simply connected Riemann surfaces, and no two of them are biholomorphic.

## Proof

1.1 **Setup and the dichotomy at the chosen pole.** The surface $X$ is nonempty [F1], so fix a point $p_0\in X$; by [F2] the envelope $g_X(\cdot,p_0)$ is defined on $X\setminus\{p_0\}$ with values in $[0,+\infty]$. Since the Axiom of Choice [A1] supplies the Countable Choice required by [F3], the dichotomy applies to the pole $p_0$: either $g_X(q,p_0)=+\infty$ for every $q\in X\setminus\{p_0\}$, or $g_X(\cdot,p_0)$ is finite on $X\setminus\{p_0\}$, which by [F2] says exactly that $X$ admits a finite canonical Green kernel at $p_0$. [A1, F1, F2, F3, given]

2.1 **Finite case: $X$ is the disc.** If $X$ admits a finite canonical Green kernel at $p_0$, then the Green case [F4] applies to the simply connected surface $X$ and provides a biholomorphism of $X$ onto the unit disc $\mathbb D$. [F4, assume-case finite, step 1.1]

2.2 **Infinite case: $X$ is the plane or the sphere.** If instead $g_X(q,p_0)=+\infty$ for every $q\in X\setminus\{p_0\}$, then the non-Green case [F5] applies: $X$ is biholomorphic to $\mathbb C$ when $X$ is noncompact, and to $\widehat{\mathbb C}$ when $X$ is compact. [F5, assume-case infinite, step 1.1]

3.1 **Every simply connected surface is one of the three models.** The two alternatives of step 1.1 exhaust the possibilities for the envelope $g_X(\cdot,p_0)$ by the dichotomy [F3]; hence steps 2.1 and 2.2 show that $X$ is biholomorphic to $\mathbb D$, to $\mathbb C$ or to $\widehat{\mathbb C}$. Moreover the last two are themselves simply connected Riemann surfaces [F6], so each alternative really is one of the three models. [F3, F6, cases-exhaustive, step 2.1, step 2.2]

4.1 **At most one model.** Suppose that $X$ is biholomorphic to two of the models, say to $M_1$ and to $M_2$ with $M_1,M_2\in\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$; then $M_1$ is biholomorphic to $M_2$, because the composite of a biholomorphism $X\to M_1$ with the inverse of a biholomorphism $X\to M_2$ is again a biholomorphism [F1]. By [F6] no two distinct members of $\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$ are biholomorphic, so $M_1=M_2$. Hence $X$ is biholomorphic to at most one of the three models. [F1, F6, step 3.1]

5.1 **Conclusion and choice accounting.** Steps 3.1 and 4.1 together say that $X$ is biholomorphic to exactly one of the Riemann sphere, the complex plane and the unit disc, which is the statement. The Axiom of Choice [A1] is used exactly through the Countable Choice consumed by the dichotomy [F3] in step 1.1 and through its two uses in the branch lemmas, namely the Riemann mapping theorem inside [F4] and [F5]; beyond the single point $p_0$ chosen in step 1.1 no selection is made. [A1, F3, F4, F5, step 3.1, step 4.1] ∎
