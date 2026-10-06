---
id: thm-weyl-character-formula
kind: theorem
title: The Weyl character formula
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
deps: [def-axiom-of-choice, lem-bgg-euler-character-gives-the-weyl-numerator, thm-weyl-denominator-identity, lem-geometric-series-invertibility-in-the-completed-character-ring, def-formal-character-of-a-finite-dimensional-weight-module, def-weyl-alternation-operator, def-completed-formal-character-ring-for-downward-cones]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed pp. 139--142 (Theorem 26.4: χ_λ = Σ_w(−1)^{ℓ(w)}e^{w(λ+ρ)}/Δ, with the class of the quotient made precise by Δχ_λ ∈ Z[P])"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 322, Theorem 5.75 (char(V) = d^{−1}Σ_w ε(w)e^{w(λ+δ)} with d = Σ_w ε(w)e^{wδ})"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed pp. 93--95, Theorem 13.11 (Weyl character formula and denominator identity)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "p. 2, Theorem 1.2 (the Weyl character theorem in numerator form)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every dominant
integral weight $\lambda\in\Lambda^+$, the character of the finite-dimensional
simple module $L(\lambda)$ is
$$\operatorname{ch}L(\lambda)=A(\lambda+\rho)\cdot A(\rho)^{-1}=\Bigl(\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}\Bigr)\Big/\Bigl(e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})\Bigr),$$
the quotient being taken in the completed character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]], where
$A(\rho)$ is invertible with inverse
$e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
([[thm-weyl-denominator-identity]],
[[lem-geometric-series-invertibility-in-the-completed-character-ring]]). No
quotient of ordinary functions is intended before this formal cancellation is
justified.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, the character $\operatorname{ch}L(\lambda)$, the Weyl
vector $\rho$, the alternants $A(\nu)$ and the ring $\mathcal R$.

[A1] The Axiom of Choice is assumed; it enters through the BGG numerator
identity [F1] ([[def-axiom-of-choice]]).

[F1] $\operatorname{ch}L(\lambda)\cdot A(\rho)=A(\lambda+\rho)$ in
$\mathcal R$ ([[lem-bgg-euler-character-gives-the-weyl-numerator]]).

[F2] $A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ and
$A(\rho)^{-1}=e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$, the
product $\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ being invertible in
$\mathcal R$ ([[thm-weyl-denominator-identity]],
[[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F3] $\mathcal R$ is a commutative ring, so multiplication by the invertible
element $A(\rho)^{-1}$ is well defined, and
$A(\lambda+\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}$
([[def-completed-formal-character-ring-for-downward-cones]],
[[def-weyl-alternation-operator]]).

[F4] $\operatorname{ch}L(\lambda)$ is an element of $\mathcal R$, namely the
finite sum $\sum_\mu m_\lambda(\mu)e^\mu$
([[def-formal-character-of-a-finite-dimensional-weight-module]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] the element $A(\rho)$ is invertible in $\mathcal R$ and $\operatorname{ch}L(\lambda)A(\rho)=A(\lambda+\rho)$; multiplying this identity on the right by $A(\rho)^{-1}$ and using associativity and commutativity of the product in the ring $\mathcal R$ of [F3] gives first $A(\rho)A(\rho)^{-1}=e^0$ and then $\operatorname{ch}L(\lambda)=\operatorname{ch}L(\lambda)A(\rho)A(\rho)^{-1}=A(\lambda+\rho)A(\rho)^{-1}$. [F1, F2, F3, F4, algebra, A1]

2.1 Substituting into step 1.1 the explicit finite sum of [F3] for the numerator and the product form and inverse of [F2] for the denominator gives the displayed quotient in $\mathcal R$; the quotient is by definition the product of the finite alternant $A(\lambda+\rho)$ with the element $A(\rho)^{-1}=e^{-\rho}\prod(1-e^{-\alpha})^{-1}$ of $\mathcal R$, so it is a formal quotient in the completed ring and no quotient of ordinary functions is involved. [F2, F3, step 1.1] ∎ 