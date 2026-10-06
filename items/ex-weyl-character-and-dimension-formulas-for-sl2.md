---
id: ex-weyl-character-and-dimension-formulas-for-sl2
kind: example
title: Weyl character and dimension formulas for sl2
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
deps: [def-axiom-of-choice, thm-weyl-character-formula, thm-weyl-dimension-formula, def-weyl-alternation-operator, def-weyl-vector-rho-for-a-chosen-positive-system, def-integral-dominant-and-strictly-dominant-weights, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-completed-formal-character-ring-for-downward-cones, lem-geometric-series-invertibility-in-the-completed-character-ring, thm-weyl-denominator-identity]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26, printed pp. 138--144 (the sl2 specialization of the character formula, the telescoping quotient and the dimension m+1)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Example 13.9 (sl2: ch V(λ) = ch M(λ) − ch M(−λ−2))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Take
$\mathfrak g=\mathfrak{sl}_2$ with positive root $\alpha$, $W=\{1,s\}$,
$\rho=\alpha/2$ and $\lambda=m\omega$, $\omega=\alpha/2$, $m\ge0$ dominant
integral. Then $A(\nu)=e^{\nu}-e^{-\nu}$ for every $\nu$, and the Weyl
character formula ([[thm-weyl-character-formula]]) gives
$$\operatorname{ch}L(m\omega)=\frac{e^{(m+1)\omega}-e^{-(m+1)\omega}}{e^{\omega}-e^{-\omega}}=e^{m\omega}+e^{(m-2)\omega}+\cdots+e^{-m\omega},$$
a sum of $m+1$ terms; the Weyl dimension formula
([[thm-weyl-dimension-formula]]) gives
$\dim L(m\omega)=((m+1)\omega,\alpha)/((\omega,\alpha))=m+1$; the boundary
case $m=0$ gives the one-term character $\operatorname{ch}L(0)=1$ and
$\dim L(0)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$ with its positive root $\alpha$, fundamental weight $\omega=\alpha/2$, Weyl group $W=\{1,s\}$, Weyl vector $\rho=\omega$, and the dominant integral weights $m\omega$ with $m\ge0$.

[A1] The Axiom of Choice is assumed; it enters through the character and dimension formulas below ([[def-axiom-of-choice]]).

[F1] $\alpha=2\omega$, $W=\{1,s\}$, $s\omega=-\omega$, $\rho=\omega$ and $\lambda+\rho=(m+1)\omega$; the length of $s$ is $1$ ([[def-weyl-vector-rho-for-a-chosen-positive-system]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F2] $A(\nu)=e^{\nu}-e^{-\nu}$ for every $\nu\in\mathfrak h^*$, and the Weyl character formula and Weyl dimension formula read $\operatorname{ch}L(\lambda)=A(\lambda+\rho)A(\rho)^{-1}$ and $\dim L(\lambda)=\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$ ([[def-weyl-alternation-operator]], [[thm-weyl-character-formula]], [[thm-weyl-dimension-formula]]).

[F3] In the completed ring $\mathcal R$ the elements $e^{\pm\omega}$ are invertible with $e^{\omega}e^{-\omega}=e^0$, and $e^{\omega}-e^{-\omega}=e^{\omega}(1-e^{-\alpha})$ is invertible with inverse $e^{-\omega}(1-e^{-\alpha})^{-1}$, because $1-e^{-\alpha}$ is invertible ([[def-completed-formal-character-ring-for-downward-cones]], [[lem-geometric-series-invertibility-in-the-completed-character-ring]], [[thm-weyl-denominator-identity]]).

[F4] For $m\ge0$ the module $L(m\omega)$ is the finite-dimensional simple module of highest weight $m\omega$ ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

## Verification

1.1 By [F2] the character is $\operatorname{ch}L(m\omega)=A((m+1)\omega)A(\omega)^{-1}=\bigl(e^{(m+1)\omega}-e^{-(m+1)\omega}\bigr)\bigl(e^{\omega}-e^{-\omega}\bigr)^{-1}$, the quotient being the formal product with the inverse of [F3]. [F1, F2, F3, A1]

2.1 Multiplying the displayed quotient by $e^{\omega}-e^{-\omega}$ telescopes: $\bigl(e^{\omega}-e^{-\omega}\bigr)\bigl(e^{m\omega}+e^{(m-2)\omega}+\cdots+e^{-m\omega}\bigr)=e^{(m+1)\omega}-e^{-(m+1)\omega}$, so the finite sum $e^{m\omega}+e^{(m-2)\omega}+\cdots+e^{-m\omega}$ of $m+1$ terms is the product of the numerator with the inverse of $e^{\omega}-e^{-\omega}$ and hence equals $\operatorname{ch}L(m\omega)$ by step 1.1. [F3, step 1.1, algebra]

3.1 By [F2] the dimension formula gives $\dim L(m\omega)=((m+1)\omega,\alpha)/((\omega,\alpha))=m+1$, since $\lambda+\rho=(m+1)\omega$ by [F1] and the positive system consists of the single root $\alpha$; specializing to $m=0$ gives $A(\omega)A(\omega)^{-1}=e^0=1$ for the character and $(m+1)=1$ for the dimension. [F1, F2, F4, step 1.1] ∎ 