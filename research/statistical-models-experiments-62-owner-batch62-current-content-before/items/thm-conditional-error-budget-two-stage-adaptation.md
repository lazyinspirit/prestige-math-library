---
id: thm-conditional-error-budget-two-stage-adaptation
kind: theorem
title: "Conditional-error budget for two-stage adaptation"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-tower-property-of-conditional-expectation
  - cor-expectation-of-an-indicator-is-probability
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Kenkichi Sugiura and Hiroyuki Uesaka, Theoretical Basis of Adaptive Designs for Clinical Trials in Phase II and III, Japanese Journal of Biometrics 29, Special Issue 1 (2008), S33–S52"
      url: "https://www.jstage.jst.go.jp/article/jjb/29/Special_Issue_1/29_Special_Issue_1_S33/_pdf/-char/en"
      locator: "§5.1.3, PDF pp.8–9 (printed S40–S41): integrate the conditional-error function over the interim null law to obtain the whole-trial null rejection probability."
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, University of Warwick (2013)"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
      locator: "Complete Chapter 5, especially §5.4.2, printed pp.77–79 = PDF pp.98–100: defines conditional error as conditional null rejection probability, bounds its expectation, and uses iterated conditional rejection probabilities for the adapted test."
---

## Statement

Assume AC. Let $P_0$ be one fixed null probability law on $(\Omega,\mathcal F)$,
and let $\mathcal F_1\subseteq\mathcal F$ be the interim sigma-algebra. Let
$R_0\in\mathcal F$ be the original design's rejection event, and let
$R_1\in\mathcal F$ be the adapted design's event of any eventual rejection,
including early and final decisions. Choose versions
$$A=E_0[\mathbf1_{R_0}\mid\mathcal F_1],\qquad Q=E_0[\mathbf1_{R_1}\mid\mathcal F_1].$$
For $\alpha\in[0,1]$, if $P_0(R_0)\le\alpha$ and $Q\le A$ almost surely,
then $P_0(R_1)\le\alpha$. The original conditional error $A$ is an
almost-sure class; changing its version does not change any rejection
probability.

## Facts & Assumptions

**Given:** AC; one probability space and one fixed null law $P_0$; a sub-sigma-algebra $\mathcal F_1$; events $R_0,R_1\in\mathcal F$; $\alpha\in[0,1]$; $P_0(R_0)\le\alpha$; and versions $A,Q$ of the stated conditional expectations with $Q\le A$ almost surely.

[A1] AC is assumed for the library's conditional-expectation existence interface. [[def-axiom-of-choice]]

[F1] Under AC, the conditional expectation is the unique almost-sure class of integrable, $\mathcal F_1$-measurable versions satisfying all $\mathcal F_1$ event-integral identities. [[def-conditional-expectation-as-an-ae-class]]

[F2] Conditional expectation preserves order and ordinary expectation, and a constant is its own conditional expectation. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F3] For nested sigma-algebras, conditioning twice gives the conditional expectation at the smaller sigma-algebra. [[thm-tower-property-of-conditional-expectation]]

[F4] The expectation of an event indicator is the probability of that event. [[cor-expectation-of-an-indicator-is-probability]]

## Proof

**Proof technique:** identify the mean conditional errors by the tower property, then compare their expectations.

1.1 By [A1] and [F1], both conditional-expectation classes exist. Since $0\le\mathbf1_{R_j}\le1$ for $j=0,1$, order preservation and the constant rule in [F2] give $0\le A,Q\le1$ almost surely. All representatives of either class agree almost surely by [F1], so the rejection probabilities do not depend on the chosen versions. [A1, F1, F2]

2.1 Let $\mathcal F_0=\{\varnothing,\Omega\}$. By [F3], $E_0[A\mid\mathcal F_0]=E_0[\mathbf1_{R_0}\mid\mathcal F_0]$. Each side is constant almost surely because it is $\mathcal F_0$-measurable; testing its defining event identity at $\Omega$ shows its constant is its ordinary expectation. Thus [F4] gives $E_0A=E_0\mathbf1_{R_0}=P_0(R_0)\le\alpha$. The same argument gives $E_0Q=P_0(R_1)$. Order preservation [F2], applied to $Q\le A$ with conditioning sigma-algebra $\mathcal F_0$, gives $E_0[Q\mid\mathcal F_0]\le E_0[A\mid\mathcal F_0]$; these constants are $E_0Q$ and $E_0A$, so $P_0(R_1)=E_0Q\le E_0A\le\alpha$. [F2, F3, F4, given] ∎

## Source notes

Both treatments express the global null rejection probability as the mean of the interim conditional rejection probability. The proof here states the event and sigma-algebra hypotheses directly and uses the published conditional-expectation tower and order properties; the source exposition alone is not used as a proof.
