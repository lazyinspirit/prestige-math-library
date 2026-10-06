---
id: thm-weyl-denominator-identity
kind: theorem
title: The Weyl denominator identity
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-weyl-alternation-operator, lem-geometric-series-invertibility-in-the-completed-character-ring, cor-bgg-euler-character-identity, def-formal-character-of-a-finite-dimensional-weight-module, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional, def-representation-of-a-lie-algebra, def-grothendieck-group-and-character-of-category-o, def-completed-formal-character-ring-for-downward-cones, def-weyl-vector-rho-for-a-chosen-positive-system, lem-positive-root-pairings-of-a-dominant-integral-weight, def-integral-dominant-and-strictly-dominant-weights, lem-finite-weyl-positive-roots-and-simple-reflections, def-finite-weyl-root-system-lattice-and-chamber-conventions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed p. 140, Corollary 26.5 (Weyl denominator formula Δ = Σ_{w∈W}(−1)^{ℓ(w)}e^{wρ}, proved from the character formula at λ = 0)"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 320, Corollary 5.76 (Weyl denominator formula)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Definition 13.4 and Exercise 13.3(c),(f): the Weyl function q = ∏_{α>0}(e^{α/2}−e^{−α/2}) and the identity q = e^{ρ}∏(1−e^{−α})"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the completed
character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]],
$$A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha});$$
equivalently
$$\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})\qquad\text{and}\qquad\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}=\prod_{\alpha\in\Phi^+}\bigl(e^{\alpha/2}-e^{-\alpha/2}\bigr),$$
where $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$ is the Weyl vector
([[def-weyl-vector-rho-for-a-chosen-positive-system]]) and $A(\rho)$ is the
alternant of [[def-weyl-alternation-operator]]. Both sides are finite
expressions: the left side is a finite sum and the right side is a finite
product, and the identity holds in the group ring $\mathbb Z[P]$.
Consequently $A(\rho)$ is invertible, with
$$A(\rho)^{-1}=e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, the finite root system with positive system
$\Phi^+$, Weyl group $W$, length $\ell$ and Weyl vector $\rho$, the completed
character ring $\mathcal R$, and the alternants $A(\nu)$.

[A1] The Axiom of Choice is assumed; it enters through the BGG Euler identity
of [F1] and the classification of [F2] ([[def-axiom-of-choice]]).

[F1] For every $\lambda\in\Lambda^+$ the BGG Euler identity gives
$\operatorname{ch}L(\lambda)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
in $\mathcal R$, where the dot action is $w\circ\lambda=w(\lambda+\rho)-\rho$;
in particular $w\circ0=w\rho-\rho$
([[cor-bgg-euler-character-identity]],
[[def-grothendieck-group-and-character-of-category-o]]).

[F2] $L(0)$ is the trivial one-dimensional module: the module $\mathbb C$
with zero action is finite-dimensional, irreducible and of highest weight
$0$, so by the classification it is $L(0)$, and
$\operatorname{ch}\mathbb C=e^0=1$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]],
[[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]],
[[def-representation-of-a-lie-algebra]],
[[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F3] The product $e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ is
invertible in $\mathcal R$, with inverse
$e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
([[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F4] $\rho\in P$: the pairings $\langle\rho,\beta^\vee\rangle$ are positive
integers for every positive root $\beta$
([[lem-positive-root-pairings-of-a-dominant-integral-weight]],
[[def-integral-dominant-and-strictly-dominant-weights]]), and $W$ preserves
the weight lattice $P$, so every $w\rho$ and every exponent
$\rho-\sum_{\alpha\in S}\alpha$ occurring in the expansion of the finite
product lies in $P$
([[lem-finite-weyl-positive-roots-and-simple-reflections]],
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]]).

[F5] $A(\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}$ is the finite alternant
of [[def-weyl-alternation-operator]], and monomials satisfy
$e^\mu e^\nu=e^{\mu+\nu}$, so $e^{\alpha/2}-e^{-\alpha/2}=e^{-\alpha/2}(e^{\alpha}-1)$
and $\prod_{\alpha\in\Phi^+}e^{\pm\alpha/2}=e^{\pm\rho}$ in $\mathcal R$
([[def-completed-formal-character-ring-for-downward-cones]]).

## Proof

**Proof technique:** direct.

1.1 The Euler identity [F1] at the dominant integral weight $\lambda=0$ reads $\operatorname{ch}L(0)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$, and [F2] gives $\operatorname{ch}L(0)=1=e^0$. [F1, F2, algebra, A1]

2.1 Multiplying both sides of step 1.1 by the invertible element $e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ of [F3] and cancelling the inverse against the product yields $e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho-\rho+\rho}=A(\rho)$, which is the first form of the identity. [F3, F5, step 1.1, algebra]

3.1 For the half-root form, expand each factor using [F5]: $\prod_{\alpha\in\Phi^+}(e^{\alpha/2}-e^{-\alpha/2})=\prod_{\alpha\in\Phi^+}e^{-\alpha/2}\prod_{\alpha\in\Phi^+}(e^{\alpha}-1)=e^{-\rho}(-1)^{|\Phi^+|}\prod_{\alpha\in\Phi^+}(1-e^{\alpha})=e^{-\rho}(-1)^{|\Phi^+|}(-1)^{|\Phi^+|}e^{2\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$, using $1-e^{\alpha}=-e^{\alpha}(1-e^{-\alpha})$ and $\sum_{\alpha\in\Phi^+}\alpha=2\rho$; with step 2.1 this equals $A(\rho)$. [F5, step 2.1, algebra]

4.1 All exponents in $A(\rho)$ are the $w\rho$, and all exponents in the expanded right side are $\rho$ minus sums of positive roots; both lie in $P$ by [F4], so the identity of steps 2.1 and 3.1 is an identity in $\mathbb Z[P]$, and since $A(\rho)$ equals the invertible element of [F3], it is invertible with the stated inverse. [F3, F4, step 2.1, step 3.1, algebra] ∎ 