---
id: lem-bgg-euler-character-gives-the-weyl-numerator
kind: lemma
title: The BGG Euler identity gives the Weyl numerator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-formal-character-of-a-finite-dimensional-weight-module, def-weyl-alternation-operator, lem-geometric-series-invertibility-in-the-completed-character-ring, thm-weyl-denominator-identity, cor-bgg-euler-character-identity, def-grothendieck-group-and-character-of-category-o, def-completed-formal-character-ring-for-downward-cones, def-integral-dominant-and-strictly-dominant-weights, lem-finite-weyl-positive-roots-and-simple-reflections, def-weyl-vector-rho-for-a-chosen-positive-system]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3--26.4, printed pp. 139--141 (Theorem 26.4 and the proof of the Weyl character formula via the anti-invariant product Δχ_λ)"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 322, Theorem 5.77 (alternative formulation of the Weyl character formula: (Σ_w ε(w)e^{wδ})char(V) = Σ_w ε(w)e^{w(λ+δ)})"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "p. 2, eq. (6) and Theorem 1.2 (A_e(δ)chΛ = A_e(Λ+δ))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every dominant
integral weight $\lambda\in\Lambda^+$,
$$\operatorname{ch}L(\lambda)\cdot A(\rho)=A(\lambda+\rho)$$
in the completed character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]]; equivalently,
$$\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}=\operatorname{ch}L(\lambda)\cdot e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha}).$$
Both sides are finite expressions, so the identity holds in $\mathbb Z[P]$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, the module $L(\lambda)$ with its formal character, the
Weyl vector $\rho$, the positive system $\Phi^+$, and the alternants
$A(\nu)$.

[A1] The Axiom of Choice is assumed; it enters through the BGG Euler identity
of [F1] ([[def-axiom-of-choice]]).

[F1] The BGG Euler identity in character form reads
$\operatorname{ch}L(\lambda)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
in $\mathcal R$, where $w\circ\lambda=w(\lambda+\rho)-\rho$
([[cor-bgg-euler-character-identity]],
[[def-grothendieck-group-and-character-of-category-o]]).

[F2] The denominator identity gives $A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$
and $A(\rho)^{-1}=e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
([[thm-weyl-denominator-identity]]), and the product
$\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ is invertible
([[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F3] $A(\lambda+\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}$ is a
finite sum, $\operatorname{ch}L(\lambda)$ is a finite-support element, and
$w\circ\lambda+\rho=w(\lambda+\rho)$
([[def-weyl-alternation-operator]],
[[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F4] For $\lambda\in\Lambda^+$ one has $\rho\in P$ and
$\lambda+\rho\in P$, and $W$ preserves $P$, so all exponents of the two sides
lie in the weight lattice and the identity is an identity of finite sums in
$\mathbb Z[P]$ ([[def-integral-dominant-and-strictly-dominant-weights]],
[[lem-finite-weyl-positive-roots-and-simple-reflections]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]]).

## Proof

**Proof technique:** direct.

1.1 Multiplying the identity [F1] by $A(\rho)$ and substituting the product form of [F2] gives $\operatorname{ch}L(\lambda)\cdot A(\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}\cdot e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$; the inverse and the product cancel by [F2], and $w\circ\lambda+\rho=w(\lambda+\rho)$ by [F3], so $\operatorname{ch}L(\lambda)\cdot A(\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}=A(\lambda+\rho)$. [F1, F2, F3, algebra, A1]

2.1 Both sides of step 1.1 are finite expressions: the left side is a product of a finite-support element with a finite-support element, and the right side is the finite alternant; all exponents occurring lie in $P$ by [F4], so the identity holds in the group ring $\mathbb Z[P]$, and reading the product form of [F2] on the left side gives the displayed equivalent form. [F2, F3, F4, step 1.1] ∎ 