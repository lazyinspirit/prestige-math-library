---
id: thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
kind: theorem
title: "Every sigma-finite signed measure admits a Lebesgue decomposition relative to a sigma-finite positive measure"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-additivity-of-the-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, def-axiom-of-choice, def-signed-measure, cor-finite-nonnegative-integral-implies-finite-almost-everywhere, cor-integral-over-a-null-set-vanishes, def-absolutely-continuous-with-respect-to-a-positive-measure, def-measure-concentrated-on-a-measurable-set, def-measure-with-density, def-restriction-of-a-measure, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, prop-restriction-is-a-measure, thm-continuity-from-below-for-measures, thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, thm-monotone-convergence-for-the-integral]
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
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13.2-13.3"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and the proof preceding it"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a positive measure on $(X,\mathcal A)$ and let $\nu$ be a signed measure on $(X,\mathcal A)$. Assume there is an increasing measurable exhaustion $(X_n)_{n\ge1}$ with $\bigcup_n X_n=X$, $\mu(X_n)<+\infty$, and $|\nu|(X_n)<+\infty$ for every $n$. Then there exist signed measures $\nu_a,\nu_s$ and a measurable real-valued function $f$ such that
$$\nu=\nu_a+\nu_s,\qquad \nu_a\ll\mu,\qquad \nu_s\perp\mu,\qquad \nu_a(E)=\int_E f\,d\mu$$
for every measurable set $E$. The integral is always defined as an extended real number, and $\int_{X_n}|f|\,d\mu<\infty$ for every $n$.

## Facts & Assumptions

**Given:** AC, a positive measure $\mu$, a signed measure $\nu$, and an exhaustion $(X_n)$ with $\mu(X_n)<+\infty$ and $|\nu|(X_n)<+\infty$.

[L1] For a positive measure, the restriction $\mu_{X_n}(A)=\mu(A\cap X_n)$ is again a measure on the original sigma-algebra. ([[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]])

[L2] A nonnegative measurable function defines a measure by $A\mapsto\int_A f\,d\mu$. ([[def-measure-with-density]])

[L3] For a signed measure, the Jordan parts satisfy $|\nu|(E)=\nu^+(E)+\nu^-(E)$ on every measurable set. ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

[L4] Monotone convergence and nonnegative additivity hold; the real integral is the difference of the positive and negative integrals when at least one is finite. ([[thm-monotone-convergence-for-the-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]])

[L5] Increasing measurable-set unions pass through positive measures. ([[thm-continuity-from-below-for-measures]])

[L6] Hahn decomposition supplies a positive set for a signed measure that is not everywhere nonpositive. ([[thm-hahn-decomposition-for-signed-measures]])

[L7] Jordan decomposition writes a signed measure as $\nu=\nu^+-\nu^-$ with positive mutually singular parts. ([[thm-jordan-decomposition-for-signed-measures]])

[L8] A finite nonnegative integral has a measurable null set of infinite values; a nonnegative integral over a measurable null set vanishes. ([[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]], [[cor-integral-over-a-null-set-vanishes]])

[L9] AC permits the countable selections below, including those in the Hahn-decomposition argument. A signed measure takes at most one infinite sign. ([[def-axiom-of-choice]], [[def-signed-measure]])

## Proof

**Proof technique:** direct.

1.1 First assume $\eta$ and $\mu$ are finite positive measures. Let $\mathcal F$ be the set of measurable $g\ge0$ such that $\int_A g\,d\mu\le\eta(A)$ for every measurable $A$. Then $0\in\mathcal F$, every $g\in\mathcal F$ satisfies $\int g\,d\mu\le\eta(X)$, and if $g,h\in\mathcal F$ then $\max\{g,h\}\in\mathcal F$ because on $B:=\{g\ge h\}$ one has $\max\{g,h\}=g\chi_B+h\chi_{X\setminus B}$ and the defining inequality splits over $A\cap B$ and $A\setminus B$. [given, L4, construct]

2.1 Let $M:=\sup_{g\in\mathcal F}\int g\,d\mu$, use AC to choose $g_k\in\mathcal F$ with $\int g_k\,d\mu\to M$, and put $f_n:=\max_{k\le n}g_k$. By step 1.1 each $f_n$ lies in $\mathcal F$ and $f_n\uparrow f:=\sup_nf_n$. Monotone convergence gives $\int f\,d\mu=M$ and $\int_A f\,d\mu=\lim_n\int_A f_n\,d\mu\le\eta(A)$ for every measurable $A$. Because [L2] makes $A\mapsto\int_A f\,d\mu$ a measure, the difference $$\rho(A):=\eta(A)-\int_A f\,d\mu$$ defines a finite positive measure with $\eta=f\,d\mu+\rho$. [L2, L4, step 1.1, construct]

3.1 The residual $\rho$ is singular to $\mu$. Assume not. For each $m\ge1$, use AC to choose a Hahn decomposition $X=P_m\sqcup N_m$ of the signed measure $\rho-\mu/m$ using [L6]. If every $\mu(P_m)$ were $0$, then $P:=\bigcup_mP_m$ would be $\mu$-null. For every measurable $A\subseteq X\setminus P$, one has $A\subseteq N_m$ for every $m$, so $(\rho-\mu/m)(A)\le0$ and therefore $\rho(A)\le\mu(A)/m$. Because $\mu$ is finite, this forces $\rho(A)=0$. Thus $\rho$ would be concentrated on the $\mu$-null set $P$, contradicting the assumption that $\rho$ is not singular to $\mu$. Hence $\mu(P_m)>0$ for some $m$; fix such an $m$ and write $\varepsilon:=1/m$, $P:=P_m$. Every measurable $A\subseteq P$ then satisfies $\rho(A)\ge\varepsilon\mu(A)$, so for every measurable $A$, $$\eta(A)=\int_A f\,d\mu+\rho(A)\ge\int_A(f+\varepsilon\chi_P)\,d\mu.$$ Thus $f+\varepsilon\chi_P\in\mathcal F$, while $$\int(f+\varepsilon\chi_P)\,d\mu=\int f\,d\mu+\varepsilon\mu(P)>M,$$ contradicting step 2.1. Therefore $\rho\perp\mu$. [step 2.1, L6, assume-contra, contradiction: maximality, discharge-contradiction]

4.1 In the finite construction, $Z=\{f=\infty\}$ is measurable and $\mu$-null by [L8]. Replace $f$ by $0$ on $Z$. This leaves every integral unchanged by [L8], so the density may be taken finite-valued everywhere. [L8, step 2.1, step 3.1]

5.1 For a positive $\eta$ satisfying the exhaustion hypothesis, put $X_0=\varnothing$ and $D_n=X_n\setminus X_{n-1}$. Apply the finite construction to the restrictions of $\mu,\eta$ to each $D_n$. AC selects these decompositions and their singular carriers simultaneously. Write $\eta(E\cap D_n)=\int_{E\cap D_n}g_n\,d\mu+\sigma_n(E)$ with $g_n$ nonnegative and finite-valued, and choose a carrier $N_n\subseteq D_n$ with $\mu(N_n)=0$. This last condition follows by intersecting a carrier null for $\mu_{D_n}$ with $D_n$; also $\sigma_n$ vanishes outside $D_n$ since it is dominated by $\eta_{D_n}$. Set $g=g_n$ on $D_n$, $\eta_a=g\,d\mu$ and $\eta_s(E)=\sum_n\sigma_n(E)$. The function $g$ is measurable and finite-valued. The sum is a measure: for disjoint $E_j$, exchange the two nonnegative sums in $\sum_n\sum_j\sigma_n(E_j)$, which is legitimate because each is the supremum of finite subsums. Monotone convergence gives $\eta_a(E)=\sum_n\int_{E\cap D_n}g_n\,d\mu$, hence $\eta=\eta_a+\eta_s$. The measure $\eta_a$ vanishes on $\mu$-null sets by [L8], and $\eta_s$ is carried by the $\mu$-null set $\bigcup_nN_n$. Both components are dominated by $\eta$. [L1, L2, L4, L8, L9, step 4.1, construct]

6.1 Write $\nu=\nu^+-\nu^-$ by [L7]. By [L3], both parts are finite on every $X_n$. Apply step 5.1 to obtain $\nu^\pm=\alpha_\pm+\sigma_\pm$ with $\alpha_\pm=g_\pm\,d\mu$, where $g_\pm$ are nonnegative finite-valued, and $\sigma_\pm\perp\mu$. At least one Jordan part is finite on $X$: on a Hahn partition $P,N$ its total masses are $\nu(P)$ and $-\nu(N)$; if both were infinite, $\nu$ would take both infinite signs, contrary to [L9]. Domination therefore makes at least one sign finite for each of $\alpha_+-\alpha_-$ and $\sigma_+-\sigma_-$. These differences are signed measures: countable additivity follows by subtracting the nonnegative series, one of which has finite total. Define $\nu_a=\alpha_+-\alpha_-$ and $\nu_s=\sigma_+-\sigma_-$. The same finite-sign bound makes their sum defined and gives $\nu=\nu_a+\nu_s$. Null-set vanishing gives $\nu_a\ll\mu$; the union of carriers of $\sigma_+,\sigma_-$ gives $\nu_s\perp\mu$. [L3, L7, L8, L9, step 5.1, algebra]

7.1 Set $f=g_+-g_-$. It is measurable and real-valued. To justify its integral, put $h=\min(g_+,g_-)$, so $g_+=f^++h$ and $g_-=f^-+h$. At least one of $\int g_+\,d\mu,\int g_-\,d\mu$ is finite by step 6.1; thus $\int h\,d\mu$ and at least one of $\int f^+\,d\mu,\int f^-\,d\mu$ are finite. Additivity of the nonnegative integral now permits cancellation of the finite common term $\int_Eh\,d\mu$, giving $\int_Ef\,d\mu=\alpha_+(E)-\alpha_-(E)=\nu_a(E)$ for every $E$. Furthermore $|f|\le g_++g_-$ gives $\int_{X_n}|f|\,d\mu\le\nu^+(X_n)+\nu^-(X_n)=|\nu|(X_n)<\infty$. This proves all assertions. [L3, L4, step 6.1, algebra] ∎
