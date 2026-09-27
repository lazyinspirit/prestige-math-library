---
id: thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
kind: theorem
title: "A sigma-finite signed measure that is absolutely continuous with respect to a sigma-finite positive measure has a unique almost-everywhere density"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-total-variation-of-a-signed-or-complex-measure, def-axiom-of-choice, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a positive measure and let $\nu$ be a signed measure on $(X,\mathcal A)$. Assume there is an increasing measurable exhaustion $(X_n)$ with $\bigcup_nX_n=X$, $\mu(X_n)<+\infty$, and $|\nu|(X_n)<+\infty$ for every $n$. If $\nu\ll\mu$, then there exists a measurable real-valued function $f$, unique up to $\mu$-almost-everywhere equality, such that
$$\nu(E)=\int_Ef\,d\mu\qquad(E\in\mathcal A).$$
If in addition $|\nu|(X)<+\infty$, then $f\in L^1(\mu)$.

## Facts & Assumptions

**Given:** AC, a positive measure $\mu$, a signed measure $\nu$ with a common finite exhaustion $(X_n)$, and the hypothesis $\nu\ll\mu$.

[L1] The Lebesgue decomposition theorem gives $\nu=\nu_a+\nu_s$ with $\nu_a\ll\mu$, $\nu_s\perp\mu$, and $\nu_a(E)=\int_Ef\,d\mu$ for every measurable $E$, with $f$ real-valued and $\int_{X_n}|f|\,d\mu<\infty$. ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]])

[L2] A signed or complex measure that is both absolutely continuous and singular with respect to $\mu$ is zero. ([[thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero]])

[L3] Real integrability means finiteness of both positive and negative integrals; the integral is linear on $L^1$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[L5] Variation dominates $|\nu(E)|$ by its partition definition. ([[def-total-variation-of-a-signed-or-complex-measure]])

[L4] AC is assumed for the selections in [L1]. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 By [L1], write $\nu=\nu_a+\nu_s$, where $\nu_a\ll\mu$, $\nu_s\perp\mu$, and $\nu_a(E)=\int_Ef\,d\mu$ for every measurable $E$, with $f$ real-valued and $\int_{X_n}|f|\,d\mu<\infty$. [L1, choose]

2.1 Because $\nu\ll\mu$ and $\nu_a\ll\mu$, on each $\mu$-null set $E$ the decomposition gives $0=0+\nu_s(E)$, so $\nu_s\ll\mu$ without subtracting infinite values. Step 1.1 already gives $\nu_s\perp\mu$, so [L2] forces $\nu_s=0$. Hence $\nu=\nu_a$, and the displayed integral formula for $f$ represents $\nu$ on every measurable set. [step 1.1, L2, algebra]

3.1 Suppose $g$ is another measurable real-valued function with $\nu(E)=\int_Eg\,d\mu$ for every measurable $E$. Fix $n$. The formula on $X_n$ gives $\int_{X_n}g\,d\mu=\nu(X_n)\in\mathbb R$, so both positive and negative integrals of $g$ there are finite. Thus $f,g\in L^1(X_n)$, and [L3] permits subtraction of their integrals over every measurable subset of $X_n$. For each $m\ge1$, let $$P_{n,m}:=X_n\cap\{f-g\ge1/m\},\qquad N_{n,m}:=X_n\cap\{g-f\ge1/m\}.$$ Applying the two representation formulas to $P_{n,m}$ gives $$0=\int_{P_{n,m}}(f-g)\,d\mu\ge\mu(P_{n,m})/m,$$ so $\mu(P_{n,m})=0$; the same argument with $N_{n,m}$ gives $\mu(N_{n,m})=0$. Therefore $$X_n\cap\{f\ne g\}=\bigcup_{m\ge1}P_{n,m}\cup\bigcup_{m\ge1}N_{n,m}$$ is $\mu$-null. Since $X=\bigcup_nX_n$, the functions $f$ and $g$ agree $\mu$-almost everywhere on $X$. [step 2.1, choose, algebra]

3.2 If $|\nu|(X)<\infty$, use the representation on the measurable sets $P=\{f\ge0\}$ and $N=\{f<0\}$. It gives $\int f^+\,d\mu=\nu(P)$ and $\int f^-\,d\mu=-\nu(N)$. Both are finite: $|\nu(E)|\le|\nu|(X)$ for every $E$, directly from the partition definition of variation. Hence $f\in L^1(\mu)$ by [L3]. [L3, step 2.1, algebra]

4.1 Steps 2.1, 3.1, and 3.2 prove existence, almost-everywhere uniqueness, and the finite-measure integrability clause. [step 2.1, step 3.1, step 3.2] ∎
