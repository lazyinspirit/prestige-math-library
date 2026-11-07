---
id: thm-holowinsky-shifted-convolution-sieve-estimate
kind: theorem
title: "Holowinsky Shifted-Convolution Sieve Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - def-holomorphic-eigenform-hyperbolic-mass-measure
  - def-weight-zero-maass-form-on-gamma0n
  - def-eisenstein-series-for-congruence-subgroups
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation
  - thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - thm-soundararajan-weak-subconvexity-symmetric-square
  - def-holowinsky-soundararajan-sieve-parameters
  - thm-additive-large-sieve-inequality
  - lem-finite-large-sieve-sifted-density-bound
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Roman Holowinsky, Sieving for Mass Equidistribution"
      url: "https://arxiv.org/pdf/0809.1640v1"
      locator: "Theorem 2 and Corollary 3, §§1–4, especially the complete sieve argument in §4."
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§1, Theorem 2, printed pp. 4–5: the Maass and incomplete-Eisenstein pairing bounds."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Write $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$ and $F_{f,k}(z)=y^{k/2}f(z)/\langle f,f\rangle_{1,k}^{1/2}$, where $\langle f,f\rangle_{1,k}$ is its positive Petersson norm. Let $\mathbb H=\{x+iy:y>0\}$, $\Gamma=\mathrm{PSL}_2(\mathbb Z)$ acting by fractional linear transformations, $X=\Gamma\backslash\mathbb H$, $dA=dx\,dy/y^2$, and $\langle u,v\rangle_X=\int_Xu(z)\overline{v(z)}\,dA(z)$. A level-one weight-zero Hecke–Maass cusp form here means a smooth, square-integrable $\Gamma$-invariant Laplace eigenfunction with zero constant Fourier coefficient at the cusp and which is also an eigenfunction of every level-one Hecke operator. For a fixed such form $\phi$ with $\langle\phi,\phi\rangle_X=1$, define
$$M_k(f)=\frac{1}{(\log k)^2L(1,\operatorname{sym}^2 f)}\prod_{p\le k}\left(1+\frac{2|\lambda_f(p)|}{p}\right).$$
For a fixed $\psi\in C_c^\infty((0,\infty))$, the space of smooth complex-valued functions with compact support in the positive reals, put $E_\psi(z)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\psi(\operatorname{Im}(\gamma z))$, where $\Gamma_\infty=\{z\mapsto z+n:n\in\mathbb Z\}$ is the stabilizer of infinity; compact support makes this incomplete Eisenstein series bounded on $X$. Define
$$R_k(f)=\frac{1}{k^{1/2}L(1,\operatorname{sym}^2 f)}\int_{-\infty}^{\infty}\frac{|L(\tfrac12+it,\operatorname{sym}^2 f)|}{(1+|t|)^{10}}\,dt.$$
The weak-subconvexity bound for the symmetric-square $L$-function gives absolute convergence of this integral, and its value at one is positive.
Then for every $\epsilon>0$,
$$|\langle \phi F_{f,k},F_{f,k}\rangle_X|\ll_{\phi,\epsilon}(\log k)^\epsilon M_k(f)^{1/2},$$
and
$$\left|\langle E_\psi F_{f,k},F_{f,k}\rangle_X-\frac{3}{\pi}\langle E_\psi,1\rangle_X\right|\ll_{\psi,\epsilon}(\log k)^\epsilon M_k(f)^{1/2}(1+R_k(f)).$$

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[def-holomorphic-eigenform-hyperbolic-mass-measure]]

[[def-petersson-inner-product-on-congruence-forms]]

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[thm-fourier-whittaker-expansion-maass-cusp-forms]]

[[thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation]]

[[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[thm-soundararajan-weak-subconvexity-symmetric-square]]

[[def-holowinsky-soundararajan-sieve-parameters]]

[[thm-additive-large-sieve-inequality]]

[[lem-finite-large-sieve-sifted-density-bound]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[Holowinsky, *Sieving for Mass Equidistribution*, Theorem 2 and Corollary 3](https://arxiv.org/pdf/0809.1640v1)

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Theorem 2](https://arxiv.org/pdf/0809.1636v1)

## Proof status

No local proof is supplied. Holowinsky’s §4 uses the large sieve with a product residue system, divisor moments and a smooth-number tail; the current large-sieve suppliers do not yet prove this exact application. The unfolding also requires the Maass Fourier expansion, the incomplete-Eisenstein definition and the equal-weight Rankin–Selberg normalization. The integral defining $R_k(f)$ is absolutely convergent by the declared Soundararajan weak-subconvexity interface, whose proof is separately unresolved. The full theorem and its dependencies are retained for reconciliation.
