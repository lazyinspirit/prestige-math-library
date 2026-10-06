---
id: thm-kostant-weight-multiplicity-formula
kind: theorem
title: Kostant's weight multiplicity formula
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-formal-character-of-a-finite-dimensional-weight-module, thm-weyl-character-formula, def-kostant-partition-function, lem-geometric-series-invertibility-in-the-completed-character-ring, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-completed-formal-character-ring-for-downward-cones, thm-weyl-denominator-identity, def-weyl-alternation-operator]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed p. 142, Exercise 26.7(ii) (dim L_λ[γ] = Σ_w(−1)^{ℓ(w)}p(w(λ+ρ)−ρ−γ))"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 322, Corollary 5.83 (Kostant multiplicity formula, with P(ν) = 0 off Q+)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--3, Theorem 1.4 (N_μ = Σ_σ det(σ)P(σ(Λ+δ)−(μ+δ)))"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Definition 13.3 and Theorem 13.10 (Kostant: m_λ(μ) = Σ_w(−1)^{ℓ(w)}p(μ+ρ−w(λ+ρ)))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every dominant
integral weight $\lambda\in\Lambda^+$ and every $\mu\in\mathfrak h^*$, the
multiplicity of $\mu$ as a weight of the finite-dimensional simple module
$L(\lambda)$ is
$$m_\lambda(\mu)=\sum_{w\in W}(-1)^{\ell(w)}P\bigl(w(\lambda+\rho)-(\mu+\rho)\bigr),$$
where $P$ is the Kostant partition function of
[[def-kostant-partition-function]] and $P(\nu)=0$ for $\nu\notin Q_+$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, an element $\mu\in\mathfrak h^*$, the multiplicities
$m_\lambda(\mu)$ of $L(\lambda)$, the Kostant partition function $P$ and the
completed character ring $\mathcal R$.

[A1] The Axiom of Choice is assumed; it enters through the Weyl character
formula of [F1] ([[def-axiom-of-choice]]).

[F1] $\operatorname{ch}L(\lambda)=A(\lambda+\rho)\cdot A(\rho)^{-1}$ with
$A(\lambda+\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)}$ and
$A(\rho)^{-1}=e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$
([[thm-weyl-character-formula]],
[[thm-weyl-denominator-identity]],
[[def-weyl-alternation-operator]],
[[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F2] $\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}=\sum_{\beta\in Q_+}P(\beta)e^{-\beta}$
in $\mathcal R$, with $P(\beta)\in\mathbb Z_{\ge0}$ finite and $P(\nu)=0$
for $\nu\notin Q_+$ ([[def-kostant-partition-function]]).

[F3] $\operatorname{ch}L(\lambda)=\sum_\mu m_\lambda(\mu)e^\mu$, so
$m_\lambda(\mu)$ is the coefficient of $e^\mu$ in $\operatorname{ch}L(\lambda)$
([[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F4] In $\mathcal R$ the coefficient of $e^\eta$ in a product is the finite
sum $\sum_{\gamma+\delta=\eta}c_\gamma d_\delta$ of the coefficients of the
factors, and coefficient extraction is additive over finite sums
([[def-completed-formal-character-ring-for-downward-cones]]).

## Proof

**Proof technique:** direct.

1.1 Substituting [F2] into $A(\rho)^{-1}=e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$ of [F1] and multiplying out gives $\operatorname{ch}L(\lambda)=\sum_{w\in W}(-1)^{\ell(w)}e^{w(\lambda+\rho)-\rho}\sum_{\beta\in Q_+}P(\beta)e^{-\beta}$, an identity in the ring $\mathcal R$; by [F3] the multiplicity $m_\lambda(\mu)$ is the coefficient of $e^\mu$ on both sides. [F1, F2, F3, algebra, A1]

2.1 By [F4] the coefficient of $e^\mu$ in the product of step 1.1 is $\sum_{w\in W}(-1)^{\ell(w)}\sum_{\substack{\beta\in Q_+\\w(\lambda+\rho)-\rho-\beta=\mu}}P(\beta)$, a finite sum because the $w$-sum is finite and for each $w$ at most one $\beta=w(\lambda+\rho)-\rho-\mu$ occurs; writing $w(\lambda+\rho)-\rho-\mu=w(\lambda+\rho)-(\mu+\rho)$ and using $P(\nu)=0$ for $\nu\notin Q_+$ from [F2] turns this into $\sum_{w\in W}(-1)^{\ell(w)}P(w(\lambda+\rho)-(\mu+\rho))$, which equals $m_\lambda(\mu)$ by step 1.1. [F2, F4, step 1.1, algebra] ∎ 