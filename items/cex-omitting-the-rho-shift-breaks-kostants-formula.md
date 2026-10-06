---
id: cex-omitting-the-rho-shift-breaks-kostants-formula
kind: counterexample
title: Omitting the rho shift breaks Kostant's formula
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-kostant-partition-function, thm-kostant-weight-multiplicity-formula, def-integral-dominant-and-strictly-dominant-weights, thm-finite-dimensional-representations-of-sl-two, def-fundamental-weights, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-weyl-vector-rho-for-a-chosen-positive-system]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed p. 142, Exercise 26.7(ii) (the shift μ ↦ μ+ρ inside the Kostant partition arguments)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--3, Theorem 1.4 (N_μ = Σ_σ det(σ)P(σ(Λ+δ)−(μ+δ)), with both shifts present)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim.** In Kostant's weight multiplicity formula the second shift can
be omitted, that is, the multiplicity of $\mu$ as a weight of $L(\lambda)$
equals $\widehat m_\lambda(\mu):=\sum_{w\in W}(-1)^{\ell(w)}P(w(\lambda+\rho)-\mu)$
as well.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$ with positive
root $\alpha$, fundamental weight $\omega=\alpha/2$, Weyl group $W=\{1,s\}$,
Weyl vector $\rho=\omega$, the weight $\lambda=2\omega$, the weight
$\mu=0$, and the Kostant partition function $P$.

[A1] The Axiom of Choice is assumed; it enters through the Kostant formula
used in the counterexample ([[def-axiom-of-choice]]).

[F1] For $\mathfrak{sl}_2$ the positive root satisfies $\alpha=2\omega$ and
$s\omega=-\omega$, so $\rho=\alpha/2=\omega$ and $\lambda+\rho=3\omega$
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
[[def-fundamental-weights]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] $L(2\omega)$ is the irreducible three-dimensional
$\mathfrak{sl}_2$-module whose weights are $2\omega,0,-2\omega$, each with
multiplicity one ([[thm-finite-dimensional-representations-of-sl-two]],
[[def-integral-dominant-and-strictly-dominant-weights]]).

[F3] $P(\beta)$ counts the families $(n_\alpha)$ with
$n_\alpha\alpha=\beta$, so $P(\alpha)=P(2\omega)=1$, while
$P(-4\omega)=P(3\omega)=0$ because $-4\omega$ and
$3\omega=\tfrac32\alpha$ are not nonnegative integral multiples of the simple
root $\alpha$; the multiplicity formula of the Statement is
$m_\lambda(\mu)=\sum_{w\in W}(-1)^{\ell(w)}P(w(\lambda+\rho)-(\mu+\rho))$
([[def-kostant-partition-function]],
[[thm-kostant-weight-multiplicity-formula]]).

## Counterexample

**Proof technique:** direct.

1.1 The correct formula of [F3] gives $m_{2\omega}(0)=P(3\omega-\omega)-P(-3\omega-\omega)=P(2\omega)-P(-4\omega)=1-0=1$, in agreement with the weight string of [F2]. [F1, F2, F3, A1]

1.2 The modified expression omitting the shift $\mu\mapsto\mu+\rho$ gives $\widehat m_{2\omega}(0)=P(3\omega-0)-P(-3\omega-0)=P(3\omega)-P(-3\omega)=0-0=0$, because $3\omega=\tfrac32\alpha$ and $-3\omega$ are not nonnegative integral multiples of $\alpha$. [F1, F3]

2.1 Steps 1.1 and 1.2 exhibit a weight, namely $\mu=0$ in $L(2\omega)$, whose true multiplicity is $1$ while the modified formula returns $0$; hence the modified formula is false, and the shift $\mu\mapsto\mu+\rho$ inside the partition argument is not a convention that can be dropped. [step 1.1, step 1.2] ∎ 