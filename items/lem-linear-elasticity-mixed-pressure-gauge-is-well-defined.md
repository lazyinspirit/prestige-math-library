---
id: lem-linear-elasticity-mixed-pressure-gauge-is-well-defined
kind: lemma
title: "The mixed pressure has the mean-zero gauge"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-stokes-zero-mean-pressure-and-velocity-spaces, lem-na-zero-mean-of-zero-boundary-divergence, def-countable-choice, thm-holder-inequality-for-integrals, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§5.1, printed p. 13: pressure is introduced through the divergence constraint."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §8.2, printed pp. 462–463: zero-mean pressure gauge from the divergence pairing."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be bounded and open, let $0<\lambda<\infty$, and let $u\in H^1_0(D;\mathbb R^d)$. Since $D$ has finite measure, Hölder's inequality makes every $L^2(D)$ representative integrable, and almost-everywhere equal representatives have the same integral. Thus the local mean-zero space
$$Q_D:=\left\{q\in L^2(D;\mathbb R):\int_Dq=0\right\}.$$
Set $p=-\lambda\operatorname{div}u$. Then $p\in Q_D$. If additionally $d\in\{2,3\}$ and $D$ is nonempty, connected, and Lipschitz, this $Q_D$ is exactly the space $Q=L^2_0(D)$ of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], so $p$ belongs to the mixed elasticity model's pressure space.

## Facts & Assumptions

**Given:** Countable Choice, a bounded open $D$, a finite $\lambda>0$, $u\in H^1_0(D;\mathbb R^d)$, the local pressure space $Q_D$ in the Statement, and $p=-\lambda\operatorname{div}u$.

[A1] Countable Choice is required by the zero-mean-divergence supplier. ([[def-countable-choice]])

[F1] Every zero-boundary field has an $L^2$ divergence with integral zero. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

[F2] On bounded $D$, every $L^2(D)$ representative is integrable by Hölder, the integral is unchanged under almost-everywhere equality, and it is linear; hence $Q_D=\{q\in L^2(D;\mathbb R):\int_Dq=0\}$ is a well-defined linear subspace. When $d\in\{2,3\}$ and $D$ is nonempty, bounded, connected, and Lipschitz, the imported Stokes definition uses exactly this $Q_D$. ([[thm-holder-inequality-for-integrals]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

## Proof

1.1 Under [A1], [F1] gives $\operatorname{div}u\in L^2(D)$ and $\int_D\operatorname{div}u=0$. By the definition of $Q_D$ in [F2], this means $\operatorname{div}u\in Q_D$. [A1, F1, F2, given]

2.1 Multiplication by the finite scalar $-\lambda$ preserves membership in the linear subspace $Q_D$. Therefore $p=-\lambda\operatorname{div}u\in Q_D$. In the stated connected Lipschitz model domain, [F2] identifies $Q_D$ with $Q$, giving the model-space conclusion as well. [given, F2, step 1.1, algebra] ∎
