---
id: thm-holowinsky-soundararajan-mass-equidistribution
kind: theorem
title: "Mass Equidistribution for Full-Level Holomorphic Hecke Eigenforms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - def-holomorphic-eigenform-hyperbolic-mass-measure
  - def-petersson-inner-product-on-congruence-forms
  - def-weight-zero-maass-form-on-gamma0n
  - def-eisenstein-series-for-congruence-subgroups
  - thm-spectral-decomposition-l2-congruence-surface
  - thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - thm-holowinsky-shifted-convolution-sieve-estimate
  - thm-soundararajan-weak-subconvexity-symmetric-square
  - lem-holowinsky-prime-product-bound
  - lem-holowinsky-rankin-tail-bound
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "Introduction, Theorem 1 and complete §3 proof, printed pp. 3–11; the fixed Maass and incomplete-Eisenstein rates and the two-threshold argument."
    - title: "Roman Holowinsky, Sieving for Mass Equidistribution"
      url: "https://arxiv.org/pdf/0809.1640v1"
      locator: "§§1–4, Theorems 1–2 and complete §4 sieve proof."
    - title: "K. Soundararajan, Weak Subconvexity for Central Values of L-Functions"
      url: "https://arxiv.org/pdf/0809.1635v1"
      locator: "§1, equation (1.1), Example 1 and complete derivation of the fixed Maass/Eisenstein consequences used in Holowinsky–Soundararajan §2."
    - title: "J. S. Milne, Modular Functions and Modular Forms, version 1.31"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, printed pp. 68–77: Hecke eigenform normalization, Hecke recurrences and Petersson measure conventions."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $(k_j)_{j\ge1}$ be any sequence of even integers with $k_j\ge4$ and $k_j\to\infty$, and for each $j$ let $f_j(z)=\sum_{n\ge1}a_{f_j}(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form of weight $k_j$ with $a_{f_j}(1)=1$ and $T_nf_j=a_{f_j}(n)f_j$ for every $n\ge1$. Let $X=\mathrm{PSL}_2(\mathbb Z)\backslash\mathbb H$, let $dA=dx\,dy/y^2$, and let $\mu_{f_j}$ be the Petersson-normalized hyperbolic mass probability measure defined for $f_j$. For every fixed smooth bounded complex-valued function $h$ on $X$,
$$\lim_{j\to\infty}\int_X h\,d\mu_{f_j}=\frac{3}{\pi}\int_Xh\,dA.$$
For each fixed unit-norm level-one weight-zero Hecke–Maass cusp eigenfunction $\phi$, and every $\epsilon>0$, the quantitative estimate
$$\left|\int_X\phi\,d\mu_{f_j}\right|\ll_{\phi,\epsilon}(\log k_j)^{-1/30+\epsilon}$$
holds. For each fixed $\psi\in C_c^\infty((0,\infty))$, define the incomplete Eisenstein series $E_\psi(z)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\psi(\operatorname{Im}(\gamma z))$, where $\Gamma=\mathrm{PSL}_2(\mathbb Z)$ and $\Gamma_\infty=\{z\mapsto z+n:n\in\mathbb Z\}$. For every $\epsilon>0$,
$$\left|\int_XE_\psi\,d\mu_{f_j}-\frac{3}{\pi}\int_XE_\psi\,dA\right|\ll_{\psi,\epsilon}(\log k_j)^{-2/15+\epsilon}.$$
The implied constants in the two quantitative estimates are independent of the sequence and its forms, but may depend on the indicated fixed test and on $\epsilon$; no uniform rate in $h$ is asserted.

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[def-holomorphic-eigenform-hyperbolic-mass-measure]]

[[def-petersson-inner-product-on-congruence-forms]]

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[thm-spectral-decomposition-l2-congruence-surface]]

[[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[thm-holowinsky-shifted-convolution-sieve-estimate]]

[[thm-soundararajan-weak-subconvexity-symmetric-square]]

[[lem-holowinsky-prime-product-bound]]

[[lem-holowinsky-rankin-tail-bound]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Theorem 1 and §3](https://arxiv.org/pdf/0809.1636v1)

[Holowinsky, *Sieving for Mass Equidistribution*, §§1–4](https://arxiv.org/pdf/0809.1640v1)

[Soundararajan, *Weak Subconvexity for Central Values of L-Functions*, §1 and Example 1](https://arxiv.org/pdf/0809.1635v1)

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

## Facts & Assumptions

**Given:** The forms, sequence, measures and fixed tests of the Statement. In the calculations below write $q=\log k$, $L=L(1,\operatorname{sym}^2 f)$, and use $M=M_k(f)$ and $R=R_k(f)$ with the formulas in the shifted-convolution supplier. These are conditional uses of the following unresolved analytic inputs.

[F1] [[def-holomorphic-eigenform-hyperbolic-mass-measure]]: $\mu_f$ is the probability measure $|F_{f,k}|^2dA$ with $F_{f,k}=y^{k/2}f/\langle f,f\rangle_{1,k}^{1/2}$.

[F2] [[lem-holowinsky-prime-product-bound]]: $M\ll q^{1/6}(\log q)^{9/2}L^{1/2}$.

[F3] [[lem-holowinsky-rankin-tail-bound]]: For every $\delta>0$, $R\ll_\delta q^\delta$.

[L1] [[thm-holowinsky-shifted-convolution-sieve-estimate]]: For every $\delta>0$, the Maass pairing is $O_{\phi,\delta}(q^\delta M^{1/2})$, and the incomplete-Eisenstein discrepancy is $O_{\psi,\delta}(q^\delta M^{1/2}(1+R))$.

[L2] [[thm-soundararajan-weak-subconvexity-symmetric-square]]: The Maass pairing is $O_{\phi,\delta}(q^{-1/2+\delta}/L)$ for every $\delta>0$.

[L3] [[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]: $L\ge c_1/\log k>0$.

## Proof

This is a partial argument. Steps 1.1–2.2 establish the Maass rate and the small-$L$ incomplete-Eisenstein case conditional on [F2]–[L3]. Step 3.1 proves the extension from compact smooth tests to bounded smooth tests conditional on compact-test convergence. It does not establish that missing convergence or the other analytic inputs. All choice hypotheses in the Statement remain inherited from the declared suppliers.

1.1 Fix $\epsilon>0$ and put $\delta=\epsilon/4$. If $L\ge q^{-7/15}$, [L2] gives a bound $O_{\phi,\epsilon}(q^{-1/2+7/15+\delta})=O_{\phi,\epsilon}(q^{-1/30+\delta})$. [F1, L2, L3, given, algebra]

2.1 If $0<L<q^{-7/15}$, [F2] gives $M^{1/2}\ll q^{1/12-7/60}(\log q)^{9/4}=q^{-1/30}(\log q)^{9/4}$. Using $(\log q)^{9/4}\ll_\delta q^\delta$ in [L1] gives $O_{\phi,\epsilon}(q^{-1/30+2\delta})$. Together with step 1.1 this proves the stated Maass rate. [F1, F2, L1, L3, step 1.1, algebra]

2.2 If $0<L\le q^{-13/15}$, [F2] gives $M^{1/2}\ll q^{-2/15}(\log q)^{9/4}$. By [F3], $1+R\ll_\delta q^\delta$. Thus [L1] bounds the incomplete-Eisenstein discrepancy by $O_{\psi,\epsilon}(q^{-2/15+3\delta})$. This proves its claimed rate only in this range. [F1, F2, F3, L1, L3, step 1.1, algebra]

3.1 Suppose, for this step only, that $\mu_{f_j}(g)\to\nu(g)$ for every $g\in C_c^\infty(X)$, where $\nu=(3/\pi)dA$. The standard fundamental domain gives $\int_XdA=\int_{-1/2}^{1/2}(1-x^2)^{-1/2}dx=\pi/3$, so $\nu(X)=1$. Choose smooth cutoffs $0\le\chi_Y\le1$ that equal one on the compact part and on cusp heights at most $Y$, and vanish at cusp heights at least $2Y$, for $Y>2$. Such a cutoff is obtained from a fixed smooth function $\rho(y/Y)$ in the embedded cusp $y>2$, with $\rho=1$ below $1$ and $\rho=0$ above $2$, extended by one to the rest of $X$. The cusp above $Y$ has area $1/Y$, so $\nu(1-\chi_Y)\le3/(\pi Y)$. For bounded smooth $h$, the assumed convergence applies to $h\chi_Y$ and to $\chi_Y$. Since both measures have mass one by [F1] and the definition of $\nu$, $$\limsup_{j\to\infty}|\mu_{f_j}(h)-\nu(h)|\le2\|h\|_\infty\nu(1-\chi_Y)\le\frac{6\|h\|_\infty}{\pi Y}.$$ Letting $Y\to\infty$ proves the bounded-test conclusion under the compact-test premise. This completes only the conditional reduction of this step. [F1, given, algebra] ∎

## Proof status

The full Statement is retained and its proof is incomplete. The calculations above do not complete the proofs of the analytic suppliers. The range $L>q^{-13/15}$ still requires the Mellin contour-shift and pairing identity for $E_\psi$ in Holowinsky–Soundararajan §3, equations (3.1)–(3.3), including the residue and the convergence/interchange justifications; the critical-line pairing bound alone is insufficient. Compact-test convergence also remains unresolved. A uniform approximation or controlled spectral-tail argument must precede step 3.1; $L^2$ density alone gives no bound on integration against the varying mass measures. The current [[thm-spectral-decomposition-l2-congruence-surface]] supplies a local reduction to its finite-cusp Eisenstein-transform completeness supplier; this records its interface, not an independent review or proof acceptance. Holowinsky’s Remark 3 leaves test-dependence constants untracked, so no general-test rate is asserted. The Deligne, symmetric-square, shifted-convolution and weak-subconvexity proof obligations and the inherited choice hypotheses remain open here.
