---
id: thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
kind: theorem
title: "A sigma-finite signed measure that is absolutely continuous with respect to a sigma-finite positive measure has a unique almost-everywhere density"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-total-variation-of-a-signed-or-complex-measure, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data, thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero, thm-jordan-decomposition-for-signed-measures, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\mu$ be a positive measure and let $\nu$ be a signed measure on $(X,\mathcal A)$. Assume there is an increasing measurable exhaustion $(X_n)$ with $\bigcup_nX_n=X$, $\mu(X_n)<+\infty$, and $|\nu|(X_n)<+\infty$ for every $n$. If $\nu\ll\mu$, then there exists a measurable real-valued function $f$, unique up to $\mu$-almost-everywhere equality, such that
$$\nu(E)=\int_Ef\,d\mu\qquad(E\in\mathcal A).$$
If in addition $|\nu|(X)<+\infty$, then $f\in L^1(\mu)$.

## Facts & Assumptions

**Given:** A positive measure $\mu$, a signed measure $\nu$ with a common finite exhaustion $(X_n)$, and the hypothesis $\nu\ll\mu$.

[L1] The Lebesgue decomposition theorem gives $\nu=\nu_a+\nu_s$ with $\nu_a\ll\mu$, $\nu_s\perp\mu$, and $\nu_a(E)=\int_Ef\,d\mu$ whenever the integral is defined. ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]])

[L2] A signed or complex measure that is both absolutely continuous and singular with respect to $\mu$ is zero. ([[thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero]])

[L3] If a signed measure is absolutely continuous with respect to $\mu$, then its Jordan parts are too. ([[thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data]])

[L4] Jordan decomposition writes $\nu=\nu^+-\nu^-$, and for a signed measure one has $|\nu|(X)=\nu^+(X)+\nu^-(X)$. ([[thm-jordan-decomposition-for-signed-measures]], [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 By [L1], write $\nu=\nu_a+\nu_s$, where $\nu_a\ll\mu$, $\nu_s\perp\mu$, and $\nu_a(E)=\int_Ef\,d\mu$ whenever the integral is defined. [L1, choose]

2.1 Because $\nu\ll\mu$ and $\nu_a\ll\mu$, the difference $\nu_s=\nu-\nu_a$ is also absolutely continuous with respect to $\mu$. Step 1.1 already gives $\nu_s\perp\mu$, so [L2] forces $\nu_s=0$. Hence $\nu=\nu_a$, and the displayed integral formula for $f$ represents $\nu$ on every measurable set. [step 1.1, L2, algebra]

3.1 Suppose $g$ is another measurable real-valued function with $\nu(E)=\int_Eg\,d\mu$ for every measurable $E$. Fix $n$. For each $m\ge1$, let $$P_{n,m}:=X_n\cap\{f-g\ge1/m\},\qquad N_{n,m}:=X_n\cap\{g-f\ge1/m\}.$$ Applying the two representation formulas to $P_{n,m}$ gives $$0=\int_{P_{n,m}}(f-g)\,d\mu\ge\mu(P_{n,m})/m,$$ so $\mu(P_{n,m})=0$; the same argument with $N_{n,m}$ gives $\mu(N_{n,m})=0$. Therefore $$X_n\cap\{f\ne g\}=\bigcup_{m\ge1}P_{n,m}\cup\bigcup_{m\ge1}N_{n,m}$$ is $\mu$-null. Since $X=\bigcup_nX_n$, the functions $f$ and $g$ agree $\mu$-almost everywhere on $X$. [step 2.1, choose, algebra]

4.1 If $|\nu|(X)<+\infty$, let $\nu=\nu^+-\nu^-$ be the Jordan decomposition from [L4]. Then [L3] makes both $\nu^+$ and $\nu^-$ absolutely continuous with respect to $\mu$. Apply the positive-measure part of [L1] to obtain nonnegative measurable functions $f^+,f^-$ with $$\nu^+(E)=\int_Ef^+\,d\mu,\qquad \nu^-(E)=\int_Ef^-\,d\mu\qquad(E\in\mathcal A).$$ Then $f^+-f^-$ is another representative of $\nu$, so step 3.1 gives $f=f^+-f^-$ $\mu$-almost everywhere. Hence $|f|\le f^++f^-$ almost everywhere, and $$\int|f|\,d\mu\le\int f^+\,d\mu+\int f^-\,d\mu=\nu^+(X)+\nu^-(X)=|\nu|(X)<+\infty.$$ Therefore $f\in L^1(\mu)$ by the definition of integrability. [L3, L4, step 3.1, algebra]

5.1 Steps 2.1, 3.1, and 4.1 prove existence, almost-everywhere uniqueness, and the finite-measure integrability clause. [step 2.1, step 3.1, step 4.1] ∎
