---
id: thm-positive-coulomb-bilinear-cauchy-schwarz-screening
kind: theorem
title: Positive Coulomb bilinear form, Cauchy–Schwarz, and screening bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-cartesian-gaussian-primitives-and-contractions, def-finite-gaussian-basis-variational-energy-and-gradient, thm-cartesian-gaussian-integrals-absolutely-convergent, thm-gaussian-integral, thm-substitution-for-improper-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two]
proof_strategy: direct
axiom_use: None. The Laplace representation and positive-kernel expansion use countable sums and Tonelli/Fubini, not a choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Gaussian electrostatics and Cauchy–Schwarz prescreening on pp. 21–22 and 35. Positivity is proved locally here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §V, pp. 19–21, integral screening discussion. The positive-form proof is supplied here."
---

## Statement

For pair densities $f,g$ arising as finite products of Gaussian contractions in [[def-cartesian-gaussian-primitives-and-contractions]], let
$$\mathcal C(f,g)=\int_{\mathbb R^3}\int_{\mathbb R^3}\frac{\overline{f(x)}g(y)}{\|x-y\|_2}\,dy\,dx.$$
Then $\mathcal C$ is a well-defined Hermitian positive-semidefinite sesquilinear form on their finite linear span, and
$$|\mathcal C(f,g)|^2\le\mathcal C(f,f)\mathcal C(g,g).$$
For orbitals $\phi_a,\phi_b,\phi_c,\phi_d$ and pair densities $f_{ab}=\overline{\phi_a}\phi_b$, the integral convention in [[def-cartesian-gaussian-primitives-and-contractions]] gives
$$|G(\phi_a,\phi_b;\phi_c,\phi_d)|\le\sqrt{G(\phi_a,\phi_b;\phi_a,\phi_b)G(\phi_c,\phi_d;\phi_c,\phi_d)},$$
where each diagonal quantity is nonnegative. For the real finite energy functional in [[def-finite-gaussian-basis-variational-energy-and-gradient]], let $C\in\mathbb R^{n\times r}$, $D\in\mathbb R^{r\times r}$, and define the primitive-space density coefficients $W_{ab}=\sum_{p,q=1}^r C_{ap}D_{pq}C_{bq}$. Reindexing the finite two-body energy gives $E_2=\tfrac12\sum_{a,b,c,d}W_{ab}W_{cd}G_{ab,cd}$. Thus for any finite set $S$ of primitive quartets omitted from that contraction,
$$B_S=\frac12\sum_{(a,b,c,d)\in S}|W_{ab}W_{cd}|\sqrt{G_{ab,ab}G_{cd,cd}}$$
is an accumulated upper bound for the absolute omitted energy contribution. This does not assert that a screened integral is zero.

## Facts & Assumptions

**Given:** Gaussian contractions and pair densities from [[def-cartesian-gaussian-primitives-and-contractions]], with all Coulomb integrals interpreted as in that definition.

[F1] [[def-cartesian-gaussian-primitives-and-contractions]]: $G(\phi,\psi;\rho,\sigma)=\mathcal C(\overline\phi\psi,\overline\rho\sigma)$, where $\mathcal C(f,g)=\iint\overline{f(x)}g(y)/\|x-y\|\,dy\,dx$.

[F2] [[thm-cartesian-gaussian-integrals-absolutely-convergent]]: all pair densities are in $L^1\cap L^\infty$, and $\iint |f(x)g(y)|/\|x-y\|\,dy\,dx<\infty$.

[F3] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$.

[F4] [[thm-substitution-for-improper-integrals]]: a positive scaling substitution preserves a convergent improper integral.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: nonnegative and absolutely integrable product integrals may be interchanged with their section integrals.

[F6] [[cor-cauchy-schwarz-inequality-for-l-two]]: finite Euclidean inner products satisfy Cauchy–Schwarz.

[F7] [[def-finite-gaussian-basis-variational-energy-and-gradient]]: the real two-body energy is the finite contraction $\tfrac12\sum_{pqrs}D_{pq}D_{rs}G'_{pqrs}$ with four factors of $C$ in $G'$.

## Proof

1.1 For $r>0$, substitute $u=sr$ in the Gaussian integral [F3] and use symmetry to get $$\frac1r=\frac2{\sqrt\pi}\int_0^\infty e^{-s^2r^2}\,ds.$$ The diagonal $x=y$ has product measure zero, and [F2] makes the integral of the absolute Coulomb integrand finite. Tonelli [F5] applied to its absolute value therefore permits the Laplace representation to be inserted into $\mathcal C(f,f)$. [given, F2, F3, F4, F5, algebra]

1.2 For fixed $s\ge0$, factor $$e^{-s^2\|x-y\|^2}=e^{-s^2\|x\|^2}e^{-s^2\|y\|^2}\prod_{j=1}^3e^{2s^2x_jy_j}.$$ Expanding the three exponentials gives a sum over $\alpha\in\mathbb N_0^3$ with terms $(2s^2)^{|\alpha|}x^\alpha y^\alpha/\alpha!$. Its absolute sum after multiplying the Gaussian factors is at most one, because $\sum_j|x_jy_j|\le\|x\|\|y\|$ by [F6] and $\|x\|^2+\|y\|^2-2\|x\|\|y\|=(\|x\|-\|y\|)^2\ge0$. Since $f\in L^1$, Fubini [F5] interchanges this absolutely summable expansion with both integrals, yielding $$\int\int\overline{f(x)}f(y)e^{-s^2\|x-y\|^2}\,dy\,dx=\sum_{\alpha\in\mathbb N_0^3}\frac{(2s^2)^{|\alpha|}}{\alpha!}\left|\int f(x)x^\alpha e^{-s^2\|x\|^2}\,dx\right|^2\ge0.$$ [given, F2, F5, F6, algebra]

2.1 Integrating the nonnegative quantity in step 1.2 over $s$ with the factor $2/\sqrt\pi$ from step 1.1 gives $\mathcal C(f,f)\ge0$. Absolute convergence [F2] also makes $\mathcal C$ Hermitian and sesquilinear. [step 1.1, step 1.2, F2, algebra]

3.1 For $\mathcal C(g,g)>0$, expand $0\le\mathcal C(f+zg,f+zg)$ for arbitrary $z\in\mathbb C$ and choose $z=-\mathcal C(g,f)/\mathcal C(g,g)$; the resulting quadratic inequality is $|\mathcal C(f,g)|^2\le\mathcal C(f,f)\mathcal C(g,g)$. If $\mathcal C(g,g)=0$, the same nonnegative quadratic for all arbitrarily small $z$ forces its linear term to vanish, so $\mathcal C(f,g)=0$ and the inequality still holds. [step 2.1, algebra]

4.1 By [F1], each two-electron entry is $\mathcal C(f_{ab},f_{cd})$. Applying step 3.1 gives its diagonal Cauchy–Schwarz bound and nonnegative diagonals. Substitute the four $C$ factors from [F7] into the finite two-body energy and reorder its finite sums; the coefficient of $G_{ab,cd}$ is $W_{ab}W_{cd}$. The absolute omitted contribution is at most the sum of the absolute values of its weighted terms, giving $B_S$. The sum is retained in the report, so no omitted entry is called exactly zero. [given, F1, F7, step 3.1, algebra] ∎
