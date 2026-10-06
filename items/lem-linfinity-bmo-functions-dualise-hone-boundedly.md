---
id: lem-linfinity-bmo-functions-dualise-hone-boundedly
kind: lemma
title: "Bounded BMO functions dualise H1 boundedly"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [lem-bmo-functions-pair-uniformly-with-hone-atoms, thm-atomic-characterisation-of-real-hp, lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions, def-hp-atom-with-moment-order, def-l-p-space-as-a-quotient-by-null-functions, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-holder-inequality-for-integrals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(7.69) and the sentence following it (write $L_bf$ using the atomic decomposition, use Cauchy-Schwarz and the properties of atoms), printed p. 47"
---

## Statement

Assume Countable Choice, fix the $H^1$ kernel $\varphi$ and admissible atomic
order $\widetilde N$ used in [[thm-atomic-characterisation-of-real-hp]]. There
is $C_{n,\widetilde N,\varphi}<\infty$ such that for every
$b\in L^\infty(\mathbb R^n)\cap\mathrm{BMO}(\mathbb R^n)$ and every
$f\in H^1(\mathbb R^n)$ the integral $\int fb$ converges absolutely and
$\bigl|\int fb\bigr|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\|f\|_{H^1}$.

## Facts & Assumptions

**Given:** Countable Choice, the fixed $\varphi,\widetilde N$, $b\in L^\infty(\mathbb R^n)\cap\mathrm{BMO}(\mathbb R^n)$ and $f\in H^1(\mathbb R^n)$.

[F1] The atomic characterisation gives $(\lambda_j)\in\ell^1$ and $(1,\infty,0)$-atoms $a_j$ with $f=\sum_j\lambda_ja_j$ in $\mathcal S'$ and with the partial sums $S_N=\sum_{j\le N}\lambda_ja_j$ converging to $f$ in the $H^1$ norm; the coefficients satisfy $\sum_j|\lambda_j|\le C_{n,\widetilde N,\varphi}\|f\|_{H^1}$ ([[thm-atomic-characterisation-of-real-hp]], [[lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions]]).

[F2] Each atom is bounded, compactly supported and has $\|a_j\|_{L^1}\le1$; the pairing with $b$ satisfies $\bigl|\int a_jb\bigr|\le\|b\|_{\mathrm{BMO}}$ ([[def-hp-atom-with-moment-order]], [[lem-bmo-functions-pair-uniformly-with-hone-atoms]]).

[F3] Complex $L^1$ is complete, and on any measure space the pairing of an $L^1$ function with an $L^\infty$ function obeys $\int|gh|\le\|g\|_{L^1}\|h\|_{L^\infty}$ ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] fix a representation $f=\sum_j\lambda_ja_j$ with $\sum_j|\lambda_j|\le C_{n,\widetilde N,\varphi}\|f\|_{H^1}$. The partial sums are $L^1$ functions with $\|S_N\|_{L^1}\le\sum_{j\le N}|\lambda_j|\|a_j\|_{L^1}\le\sum_{j\le N}|\lambda_j|$ by [F2]; they therefore form a Cauchy sequence in $L^1$, and by completeness [F3] converge in $L^1$ to some $g\in L^1$ with $\|g\|_{L^1}\le\sum_j|\lambda_j|$. For every test function $\psi$ one has $\langle f,\psi\rangle=\lim_N\langle S_N,\psi\rangle=\lim_N\int S_N\psi=\int g\psi$ by [F3] and the $\mathcal S'$-convergence of the partial sums; hence $f$ is represented by the $L^1$ function $g$, and $\int fb=\int gb$ converges absolutely with $\int|gb|\le\|g\|_{L^1}\|b\|_{L^\infty}<\infty$. [F1, F2, F3]

2.1 Since $S_N\to g$ in $L^1$ and $b\in L^\infty$, [F3] gives $\int S_Nb\to\int gb$; and $\bigl|\int S_Nb\bigr|=\bigl|\sum_{j\le N}\lambda_j\int a_jb\bigr|\le\sum_{j\le N}|\lambda_j|\,\|b\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\|f\|_{H^1}$ by [F2]. Passing to the limit gives $\bigl|\int fb\bigr|=\bigl|\int gb\bigr|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\|f\|_{H^1}$. [step 1.1, F2, F3]

3.1 Step 2.1 is the asserted bound with constant $C_{n,\widetilde N,\varphi}$, and step 1.1 is the asserted absolute convergence. Countable Choice is inherited from the suppliers. [step 1.1, step 2.1] ∎
