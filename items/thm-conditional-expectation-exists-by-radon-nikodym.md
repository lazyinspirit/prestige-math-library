---
id: thm-conditional-expectation-exists-by-radon-nikodym
kind: theorem
title: "Conditional expectation exists by radon nikodym"
status: draft
origin: pipeline
deps: [def-conditional-expectation-given-a-sigma-algebra, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For every real integrable $X$ on $(\Omega,\mathcal F,P)$ and every sub-sigma-algebra $\mathcal G$, a conditional-expectation version of $X$ given $\mathcal G$ exists.

## Facts & Assumptions

**Given:** AC, a probability space $(\Omega,\mathcal F,P)$, a sub-sigma-algebra $\mathcal G$, and real $X\in L^1(P)$.

[F1] A version is real, integrable, $\mathcal G$-measurable, and has the required event integrals. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F2] The indefinite integral of a nonnegative measurable function is a measure. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]])

[F3] Under AC, an absolutely continuous signed measure with a common finite exhaustion has a real measurable RN density, integrable when its total variation is finite. ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]])

[F4] Linear combinations of integrable functions are integrable and event integrals are linear. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F5] A nonnegative measurable function has zero integral exactly when it is zero almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F6] AC supplies the selections in the cited RN proof: a maximizing sequence and countably many Hahn decompositions. ([[def-axiom-of-choice]])

[F7] Nonnegative integrals over measurable null sets vanish. ([[cor-integral-over-a-null-set-vanishes]])

## Proof

**Proof technique:** direct.

1.1 Let $\mu=P|_{\mathcal G}$ and $\nu_\pm(A)=\int_A X^\pm\,dP$. Restricting the measures in [F2] from $\mathcal F$ to $\mathcal G$ makes $\nu_\pm$ finite positive measures, with total mass at most $E|X|$. If $\mu(A)=0$, [F7] gives $\nu_\pm(A)=0$, so $\nu_\pm\ll\mu$. The constant exhaustion $\Omega$ has finite $\mu$ and finite variation for both positive measures. [F2, F7]

2.1 Apply [F3] separately to $(\mu,\nu_+)$ and $(\mu,\nu_-)$. Its AC hypothesis is [F6]; its exhaustion and absolute continuity were checked in step 1.1. It supplies real, $\mathcal G$-measurable integrable $f_+,f_-$ with $\int_A f_\pm\,d\mu=\nu_\pm(A)$. They are nonnegative almost everywhere: on $N_\pm=\{f_\pm<0\}$ positivity of $\nu_\pm$ and nonpositivity of the integral force $\int_{N_\pm}(-f_\pm)=0$, so [F5] makes $N_\pm$ null. Set them to zero there. These are $\mathcal G$-measurable null sets, so the modification is legitimate without completing $\mathcal G$. The current RN interface already supplies real integrable densities, so no infinite density is subtracted. [step 1.1, F3, F5, F6, F7]

3.1 Put $Y=f_+-f_-$. It is real, $\mathcal G$-measurable and integrable, and for every $A\in\mathcal G$, $\int_A Y\,dP=\nu_+(A)-\nu_-(A)=\int_A(X^+-X^-)\,dP=\int_A X\,dP$, with only finite subtractions. Thus [F1] makes $Y$ the required version. [step 2.1, F1, F4] ∎

## Source notes

Durrett §4.1, existence paragraph, printed pp.206–207; van der Vaart Theorem 1.3, printed pp.1–2. The local current RN statement (including AC and its integrable real-valued output) is used exactly as stated.
