---
id: thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas
kind: theorem
title: Hermite recurrence formulas for Gaussian nuclear-attraction and two-electron Coulomb integrals
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-cartesian-gaussian-primitives-and-contractions, def-boys-function-and-coulomb-auxiliary-recurrence, def-hermite-gaussian-coulomb-auxiliary-functions, lem-cartesian-gaussian-moments-and-parameter-derivatives, thm-cartesian-gaussian-integrals-absolutely-convergent, thm-gaussian-product-theorem-and-polynomial-shift, thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence, thm-boys-integral-identities-series-and-incomplete-gamma, thm-gaussian-integral, thm-substitution-for-improper-integrals, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
proof_strategy: direct
axiom_use: None. Tonelli/Fubini and dominated convergence apply to the explicitly integrable Gaussian majorants; no choice is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Laplace representation, Boys reduction, Hermite Coulomb derivatives, and recurrences on pp. 18–27. The convergence and derivative justifications are completed locally."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§III–IV, pp. 10–18, one- and two-electron auxiliary integral formulas and recurrence table."
---

## Statement

For $p>0$, $P,C\in\mathbb R^3$, and $\eta=pq/(p+q)$ with $p,q>0$, the Hermite Coulomb auxiliaries of [[def-hermite-gaussian-coulomb-auxiliary-functions]] satisfy
$$R^n_{000}(p,P-C)=(-2p)^nF_n(p\|P-C\|^2),$$
$$R^n_{t+1,u,v}=(P_1-C_1)R^{n+1}_{tuv}+tR^{n+1}_{t-1,u,v},$$
with the corresponding coordinate formulas for increasing $u$ or $v$ and with negative-index terms zero. The one-center and two-center base Coulomb integrals are
$$\int_{\mathbb R^3}\frac{e^{-p\|x-P\|^2}}{\|x-C\|}\,dx=\frac{2\pi}{p}F_0(p\|P-C\|^2),$$
$$\int\!\!\int\frac{e^{-p\|x-P\|^2}e^{-q\|y-Q\|^2}}{\|x-y\|}\,dy\,dx=\frac{2\pi^{5/2}}{pq\sqrt{p+q}}F_0(\eta\|P-Q\|^2).$$
For a primitive pair expansion $g_ag_b=\sum_{tuv}E_{ab}^{tuv}\Lambda_{tuv}$, the nuclear attraction integral is
$$V_C(g_a,g_b)=\frac{2\pi}{p}\sum_{tuv}E_{ab}^{tuv}R^0_{tuv}(p,P-C).$$
For two primitive pairs, with coefficients $E_{ab}$ and $E_{cd}$ and centers $P,Q$, the Coulomb integral is
$$G(g_a,g_b;g_c,g_d)=\frac{2\pi^{5/2}}{pq\sqrt{p+q}}\sum_{tuv}\sum_{\tau\nu\phi}\overline{E_{ab}^{tuv}}E_{cd}^{\tau\nu\phi}(-1)^{\tau+\nu+\phi}R^0_{t+\tau,u+\nu,v+\phi}(\eta,P-Q).$$
All sums are finite; the largest Boys order is bounded by the total polynomial degree in the participating primitives.

## Facts & Assumptions

**Given:** Primitive Gaussians and Lebesgue integral conventions from [[def-cartesian-gaussian-primitives-and-contractions]], Hermite and $R^n$ definitions from [[def-hermite-gaussian-coulomb-auxiliary-functions]], and finite pair expansions from [[thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence]].

[F1] [[thm-gaussian-product-theorem-and-polynomial-shift]]: $e^{-a\|x-A\|^2}e^{-b\|x-B\|^2}=e^{-ab\|A-B\|^2/(a+b)}e^{-(a+b)\|x-P\|^2}$ with $P=(aA+bB)/(a+b)$.

[F2] [[thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence]]: each Cartesian primitive pair has a finite Hermite-Gaussian expansion with the stated coefficients.

[F3] [[def-hermite-gaussian-coulomb-auxiliary-functions]]: $\Lambda_{tuv}=\partial_P^{tuv}e^{-p\|x-P\|^2}$ and $R^n_{tuv}=(-2p)^n\partial_P^{tuv}F_n(p\|P-C\|^2)$.

[F4] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F'_n(T)=-F_{n+1}(T)$ and $F_n(T)=\int_0^1t^{2n}e^{-Tt^2}dt$.

[F5] [[thm-gaussian-integral]] and [[lem-cartesian-gaussian-moments-and-parameter-derivatives]]: $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$ and $\int_{\mathbb R^3}e^{-p\|x\|^2}dx=(\pi/p)^{3/2}$.

[F6] [[thm-cartesian-gaussian-integrals-absolutely-convergent]]: the Coulomb integrals and all finite center derivatives are absolutely integrable with a common local parameter majorant.

[F7] [[thm-substitution-for-improper-integrals]]: a monotone differentiable surjection preserves convergent improper integrals when its derivative and the target integrand are locally Riemann integrable and the proper substitution hypotheses hold on every compact truncation, with singular ends treated separately.

[L8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permit interchange of nonnegative and absolutely integrable iterated integrals, respectively.

[L9] [[thm-derivative-of-exponential]] and [[lem-derivative-algebra-and-chain-rules]]: the exponential is smooth with derivative itself; finite sums, products and polynomial compositions obey the product, power and chain rules. Applying these rules one coordinate or parameter at a time justifies every displayed finite Gaussian derivative.

## Proof

1.1 For $r>0$, the Gaussian integral and substitution $u=sr$ give $r^{-1}=(2/\sqrt\pi)\int_0^\infty e^{-s^2r^2}ds$. Insert this representation into the one-center integral; Tonelli applies to the nonnegative integrand. Completing the square in $x$ using [F1] gives a three-dimensional Gaussian integral $(\pi/(p+s^2))^{3/2}$ times $e^{-ps^2\|P-C\|^2/(p+s^2)}$. The substitution $t=s/\sqrt{p+s^2}$ maps $[0,\infty)$ monotonically onto $[0,1)$ and simplifies the remaining factor to $2\pi/p\int_0^1e^{-p\|P-C\|^2t^2}dt$, which is the stated base formula. Both substitutions are smooth monotone surjections with continuous derivatives and integrands on their compact truncations; the transformed Boys integrand is bounded at $t=1$, so [F7] applies at the improper ends. [given, F1, F5, F7, L8, algebra]

1.2 From [F4] and the chain rule, $\partial_{P_1}F_n(p\|P-C\|^2)=-2p(P_1-C_1)F_{n+1}(p\|P-C\|^2)$. Applying $\partial_{P_1}^t\partial_{P_2}^u\partial_{P_3}^v$ and the product rule to $(P_1-C_1)F_{n+1}$ produces one term $(P_1-C_1)R^{n+1}_{tuv}$ and $t$ terms $R^{n+1}_{t-1,u,v}$. Multiplying by the normalization $(-2p)^n$ yields the displayed recurrence; the same argument applies to the other coordinates. [given, F3, F4, L9, algebra, induction]

2.1 For the two-center base, set $z=x-y$ and integrate first in $x$. Completing the square with [F1] gives $$\int_{\mathbb R^3}e^{-p\|x-P\|^2}e^{-q\|x-z-Q\|^2}dx=(\pi/(p+q))^{3/2}e^{-\eta\|z-(P-Q)\|^2}.$$ Absolute convergence [F6] justifies the change of variables and order of integration. Applying step 1.1 with exponent $\eta$ and center difference $P-Q$, then simplifying $(\pi/(p+q))^{3/2}(2\pi/\eta)$, gives $2\pi^{5/2}/(pq\sqrt{p+q})$ times the stated Boys value. [given, F1, F5, F6, L8, step 1.1, algebra]

3.1 By [F6], differentiating either base integral with respect to its Gaussian centers is valid for every finite derivative order. Since $\Lambda_{tuv}$ is exactly the corresponding center derivative by [F3], the one-center Hermite Coulomb integral is $(2\pi/p)\partial_P^{tuv}F_0=(2\pi/p)R^0_{tuv}$. In the two-center case, derivatives in $Q$ act on $P-Q$ with a minus sign for each coordinate derivative; hence the Hermite integral is the base constant times $(-1)^{\tau+\nu+\phi}\partial_{P-Q}^{t+\tau,u+\nu,v+\phi}F_0$. [given, F3, F6, step 1.1, step 2.1, algebra, L9]

4.1 Substitute the finite expansions from [F2] into the one- and two-center integrals. Linearity makes the sums finite. The one-center Hermite formula from step 3.1 gives the stated nuclear formula, and the two-center formula from step 3.1 gives the displayed signed double sum. Complex contractions use conjugate-linear coefficients in the first pair exactly as in the Coulomb form specified in Given; the primitive formulas are real. [given, F1, F2, step 3.1, algebra] ∎
