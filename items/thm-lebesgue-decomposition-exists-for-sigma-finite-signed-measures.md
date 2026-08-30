---
id: thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
kind: theorem
title: "Every sigma-finite signed measure admits a Lebesgue decomposition relative to a sigma-finite positive measure"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-absolutely-continuous-with-respect-to-a-positive-measure, def-measure-concentrated-on-a-measurable-set, def-measure-with-density, def-restriction-of-a-measure, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, prop-restriction-is-a-measure, thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero, thm-continuity-from-below-for-measures, thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13.2-13.3"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and the proof preceding it"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\mu$ be a positive measure on $(X,\mathcal A)$ and let $\nu$ be a signed measure on $(X,\mathcal A)$. Assume there is an increasing measurable exhaustion $(X_n)_{n\in\mathbb N}$ with $\bigcup_n X_n=X$, $\mu(X_n)<+\infty$, and $|\nu|(X_n)<+\infty$ for every $n$. Then there exist signed measures $\nu_a,\nu_s$ and a measurable real-valued function $f$ such that
$$\nu=\nu_a+\nu_s,\qquad \nu_a\ll\mu,\qquad \nu_s\perp\mu,\qquad \nu_a(E)=\int_E f\,d\mu$$
for every measurable set $E$ for which the integral is defined; equivalently, on each finite exhaustion piece $X_n$ one has $\nu_a(E\cap X_n)=\int_{E\cap X_n}f\,d\mu$.

## Facts & Assumptions

**Given:** A positive measure $\mu$, a signed measure $\nu$, and an exhaustion $(X_n)$ with $\mu(X_n)<+\infty$ and $|\nu|(X_n)<+\infty$.

[L1] For a positive measure, the restriction $\mu_{X_n}(A)=\mu(A\cap X_n)$ is again a measure on the original sigma-algebra. ([[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]])

[L2] A nonnegative measurable function defines a measure by $A\mapsto\int_A f\,d\mu$. ([[def-measure-with-density]])

[L3] For a signed measure, the Jordan parts satisfy $|\nu|(E)=\nu^+(E)+\nu^-(E)$ on every measurable set. ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

[L4] Monotone convergence passes increasing measurable limits through the integral. ([[thm-monotone-convergence-for-the-integral]])

[L5] Increasing measurable-set unions pass through positive measures. ([[thm-continuity-from-below-for-measures]])

[L6] Hahn decomposition supplies a positive set for a signed measure that is not everywhere nonpositive. ([[thm-hahn-decomposition-for-signed-measures]])

[L7] Jordan decomposition writes a signed measure as $\nu=\nu^+-\nu^-$ with positive mutually singular parts. ([[thm-jordan-decomposition-for-signed-measures]])

[L8] A signed or complex measure that is both absolutely continuous and singular with respect to the same positive measure is zero. ([[thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero]])

## Proof

**Proof technique:** direct.

1.1 First assume $\eta$ and $\mu$ are finite positive measures. Let $\mathcal F$ be the set of measurable $g\ge0$ such that $\int_A g\,d\mu\le\eta(A)$ for every measurable $A$. Then $0\in\mathcal F$, every $g\in\mathcal F$ satisfies $\int g\,d\mu\le\eta(X)$, and if $g,h\in\mathcal F$ then $\max\{g,h\}\in\mathcal F$ because on $B:=\{g\ge h\}$ one has $\max\{g,h\}=g\chi_B+h\chi_{X\setminus B}$ and the defining inequality splits over $A\cap B$ and $A\setminus B$. [given, L4, construct]

2.1 Let $M:=\sup_{g\in\mathcal F}\int g\,d\mu$, choose $g_k\in\mathcal F$ with $\int g_k\,d\mu\to M$, and put $f_n:=\max_{k\le n}g_k$. By step 1.1 each $f_n$ lies in $\mathcal F$ and $f_n\uparrow f:=\sup_nf_n$. Monotone convergence gives $\int f\,d\mu=M$ and $\int_A f\,d\mu=\lim_n\int_A f_n\,d\mu\le\eta(A)$ for every measurable $A$. Because [L2] makes $A\mapsto\int_A f\,d\mu$ a measure, the difference $$\rho(A):=\eta(A)-\int_A f\,d\mu$$ defines a finite positive measure with $\eta=f\,d\mu+\rho$. [L2, L4, step 1.1, construct]

3.1 The residual $\rho$ is singular to $\mu$. Assume not. For each $m\ge1$, choose a Hahn decomposition $X=P_m\sqcup N_m$ of the signed measure $\rho-\mu/m$ using [L6]. If every $\mu(P_m)$ were $0$, then $P:=\bigcup_mP_m$ would be $\mu$-null. For every measurable $A\subseteq X\setminus P$, one has $A\subseteq N_m$ for every $m$, so $(\rho-\mu/m)(A)\le0$ and therefore $\rho(A)\le\mu(A)/m$. Because $\mu$ is finite, this forces $\rho(A)=0$. Thus $\rho$ would be concentrated on the $\mu$-null set $P$, contradicting the assumption that $\rho$ is not singular to $\mu$. Hence $\mu(P_m)>0$ for some $m$; fix such an $m$ and write $\varepsilon:=1/m$, $P:=P_m$. Every measurable $A\subseteq P$ then satisfies $\rho(A)\ge\varepsilon\mu(A)$, so for every measurable $A$, $$\eta(A)=\int_A f\,d\mu+\rho(A)\ge\int_A(f+\varepsilon\chi_P)\,d\mu.$$ Thus $f+\varepsilon\chi_P\in\mathcal F$, while $$\int(f+\varepsilon\chi_P)\,d\mu=\int f\,d\mu+\varepsilon\mu(P)>M,$$ contradicting step 2.1. Therefore $\rho\perp\mu$. [step 2.1, L6, assume-contra, contradiction: maximality, discharge-contradiction]

4.1 Now assume $\eta$ is a positive measure satisfying the same finite-exhaustion hypothesis as $\nu$. For each $n$, [L1] makes $\mu_{X_n}$ a finite positive measure, and $\eta_{X_n}(A):=\eta(A\cap X_n)$ is finite because $\eta(X_n)<+\infty$. Apply steps 1.1-3.1 to $(\mu_{X_n},\eta_{X_n})$. This yields $$\eta_{X_n}=\alpha_n+\sigma_n,\qquad \alpha_n=g_n\,d\mu_{X_n},\qquad \alpha_n\ll\mu_{X_n},\qquad \sigma_n\perp\mu_{X_n},$$ with $g_n\ge0$ measurable. If $m<n$, restricting the $n$th decomposition to $X_m$ gives another absolutely-continuous/singular decomposition of $\eta_{X_m}$ relative to $\mu_{X_m}$. Subtracting the two decompositions and applying [L8] to the common difference shows $$\alpha_n(E\cap X_m)=\alpha_m(E),\qquad \sigma_n(E\cap X_m)=\sigma_m(E)\qquad(E\in\mathcal A).$$ For each $n\ge1$, replacing $g_n$ on $X_{n-1}$ by $g_{n-1}$ does not change $\alpha_n$, so we may assume $g_n=g_{n-1}$ pointwise on $X_{n-1}$. Define a measurable nonnegative function $f$ by $f=g_n$ on $X_n$. [L1, step 3.1, L8, discharge-construct]

5.1 Let $\eta_a:=f\,d\mu$. By [L2], this is a positive measure, and for every measurable $E$ and every $n$ the overlap construction gives $$\eta_a(E\cap X_n)=\alpha_n(E).$$ The compatibility in step 4.1 makes the sequence $\sigma_n(E)$ increasing, so define $$\eta_s(E):=\lim_{n\to\infty}\sigma_n(E).$$ An increasing compatible limit of the measures $\sigma_n$ is a positive measure: countable additivity follows by applying it to each $\sigma_n$ and then using monotone convergence for the resulting nonnegative double sequence. Taking limits in $\eta(E\cap X_n)=\alpha_n(E)+\sigma_n(E)$ and using [L5] yields $\eta(E)=\eta_a(E)+\eta_s(E)$ without any subtraction of infinite values. Choose $\mu$-null sets $N_n$ on which each $\sigma_n$ is concentrated and put $N:=\bigcup_nN_n$. Then $\mu(N)=0$, and if $A\subseteq X\setminus N$ is measurable, every $\sigma_n(A)=0$, hence $\eta_s(A)=0$. Thus $\eta_s\perp\mu$, and every sigma-finite positive $\eta$ admits a decomposition $$\eta=\eta_a+\eta_s,\qquad \eta_a=f\,d\mu,\qquad \eta_a\ll\mu,\qquad \eta_s\perp\mu.$$ [L2, L4, L5, step 4.1]

6.1 Return to the given signed measure $\nu$. By [L7], write $\nu=\nu^+-\nu^-$. The formula in [L3] and the hypothesis $|\nu|(X_n)<+\infty$ show that $\nu^+(X_n)$ and $\nu^-(X_n)$ are finite for every $n$, so both Jordan parts satisfy the same finite-exhaustion hypothesis as $\nu$. Apply step 5.1 to $\nu^+$ and $\nu^-$ to obtain $$\nu^\pm=\alpha^\pm+\sigma^\pm,\qquad \alpha^\pm=f^\pm\,d\mu,\qquad \alpha^\pm\ll\mu,\qquad \sigma^\pm\perp\mu,$$ with $f^\pm\ge0$ measurable. Put $$f:=f^+-f^-,\qquad \nu_a:=\alpha^+-\alpha^-,\qquad \nu_s:=\sigma^+-\sigma^-.$$ Then $\nu=\nu_a+\nu_s$, the difference of two absolutely continuous measures is absolutely continuous, and if $N^\pm$ are $\mu$-null sets on which $\sigma^\pm$ are concentrated, then $\nu_s$ is concentrated on $N^+\cup N^-$ and hence singular with respect to $\mu$. Finally, $$\nu_a(E)=\int_E f^+\,d\mu-\int_E f^-\,d\mu=\int_E f\,d\mu$$ whenever the integral is defined. This is exactly the claimed Lebesgue decomposition with density. [L3, L7, step 5.1, algebra] ∎
