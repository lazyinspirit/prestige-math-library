---
id: thm-gagliardo-nirenberg-sobolev-inequality
kind: theorem
title: "The Gagliardo-Nirenberg-Sobolev inequality for $1<p<n$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-sobolev-conjugate-exponent, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, thm-holder-inequality-for-integrals, thm-riesz-fischer-completeness-of-l-p, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-chain-rule-for-total-derivatives, thm-dominated-convergence, def-test-function-space-d-of-an-open-set, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-classical-derivatives-are-weak-derivatives, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, proof of Theorem 3.3, parts (1)-(2), printed pp. 63-65."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Theorem 3.28, Theorem 3.31 and their proofs, printed pp. 65-67."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.17, printed pp. 65-66."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 9 §9.3, Theorem 9.22 and proof, printed pp. 211-214."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, $1<p<n$ and $p^{*}=\frac{np}{n-p}$. There is a constant $C(n,p)$ such that
$$\|u\|_{L^{p^{*}}(\mathbb R^n)}\le C(n,p)\,\|Du\|_{L^p(\mathbb R^n)}$$
for every $u\in W^{1,p}(\mathbb R^n;\mathbb K)$; here $|Du|$ is the Euclidean norm of the weak gradient.

## Facts & Assumptions

**Given:** The Axiom of Choice, whose Countable-Choice consequence is used for the density and completeness interfaces; integers $n\ge2$ and an exponent $1<p<n$; the conjugate $p^{*}=np/(n-p)$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] The Sobolev conjugate satisfies $p^{*}>p$ and $\frac1{p^{*}}=\frac1p-\frac1n$, so $\gamma:=\frac{p(n-1)}{n-p}>1$ and $(\gamma-1)\frac p{p-1}=p^{*}$, $\gamma\frac n{n-1}=p^{*}$ ([[def-sobolev-conjugate-exponent]]).

[F2] The endpoint inequality: there is $C_1(n)$ with $\|v\|_{L^{n/(n-1)}(\mathbb R^n)}\le C_1(n)\|Dv\|_{L^1(\mathbb R^n)}$ for every $v\in C_c^\infty(\mathbb R^n;\mathbb K)$ ([[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]]).

[F3] Holder's inequality in the form $\int|fg|\le\|f\|_r\|g\|_s$ for conjugate exponents $r,s$ ([[thm-holder-inequality-for-integrals]]).

[F4] $C_c^\infty(\mathbb R^n;\mathbb K)$ is dense in $W^{1,p}(\mathbb R^n;\mathbb K)$ for $1\le p<\infty$, whose elements are $L^p$ classes with weak gradients in $L^p$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F5] $L^{p^{*}}$ is complete and every norm-convergent sequence has an almost-everywhere convergent subsequence ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F6] The classical chain rule computes the gradient of a smooth composition, and for smooth functions the classical derivatives are the weak derivatives ([[thm-chain-rule-for-total-derivatives]], [[lem-classical-derivatives-are-weak-derivatives]]).

[F7] Dominated convergence: pointwise almost-everywhere convergence under one integrable majorant implies convergence in $L^1$ ([[thm-dominated-convergence]]).

[F8] A compact subset of an open set admits a smooth cutoff equal to $1$ on it ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]). Apply this to a compact neighbourhood of $\operatorname{supp}u$ inside a bounded open ball. The resulting support is closed and bounded, hence compact, and the cutoff equals $1$ near $\operatorname{supp}u$.

## Proof

1.1 The smooth real case. Let $u\in C_c^\infty(\mathbb R^n;\mathbb R)$ and choose $\chi\in C_c^\infty(\mathbb R^n)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $\operatorname{supp}u$. Put $s:=|u|$, $q:=n/(n-1)$, and $v_\delta:=\chi(u^2+\delta^2)^{\gamma/2}$ for $0<\delta\le1$. Then $v_\delta\in C_c^\infty$. By [F6], on $\operatorname{supp}u$ its gradient has modulus $M_\delta:=\gamma s(s^2+\delta^2)^{(\gamma-2)/2}|Du|$, while off that support the only derivative term is $\delta^\gamma D\chi$. Thus [F2] gives $\|v_\delta\|_{L^q}\le C_1(n)(\int M_\delta+\delta^\gamma\int|D\chi|)$. [F1, F2, F6, F8, choose, algebra]

1.2 Let $\delta_j\downarrow0$. Since $v_{\delta_j}\to |u|^\gamma$ pointwise and is dominated by the bounded compactly supported function $\chi(s^2+1)^{\gamma/2}$, [F7] gives $\|v_{\delta_j}\|_{L^q}\to\|u\|_{L^{p^{*}}}^\gamma$. Also $M_{\delta_j}\to\gamma s^{\gamma-1}|Du|$ almost everywhere. If $1<\gamma\le2$, then $M_\delta\le\gamma s^{\gamma-1}|Du|$; if $\gamma>2$, then for $0<\delta\le1$, $M_\delta\le C_\gamma(s^{\gamma-1}+s)|Du|$. These majorants are integrable because $u$ is smooth and compactly supported, so [F7] gives $\int M_{\delta_j}\to\gamma\int s^{\gamma-1}|Du|$, while $\delta_j^\gamma\int|D\chi|\to0$. Taking limits in the endpoint estimate yields $\|u\|_{L^{p^{*}}}^\gamma\le C_1(n)\gamma\int s^{\gamma-1}|Du|$. [F1, F2, F6, F7, algebra]

2.1 Holder [F3] and $(\gamma-1)p/(p-1)=p^{*}$ [F1] give $\int s^{\gamma-1}|Du|\le\|u\|_{L^{p^{*}}}^{\gamma-1}\|Du\|_{L^p}$. If $u\ne0$ in $L^{p^{*}}$, divide by $\|u\|_{L^{p^{*}}}^{\gamma-1}$; if $u=0$ almost everywhere, the estimate is immediate. Thus the real smooth case holds with constant $C_1(n)\gamma$. [step 1.2, F1, F3, algebra]

3.1 The smooth complex case. Let $u\in C_c^\infty(\mathbb R^n;\mathbb C)$ with real and imaginary parts $a$ and $b$. Applying step 2.1 to both parts and using $|u|\le|a|+|b|$ gives $\|u\|_{L^{p^{*}}}\le C_1(n)\gamma(\|Da\|_{L^p}+\|Db\|_{L^p})\le2C_1(n)\gamma\|Du\|_{L^p}$. [step 2.1, algebra]

4.1 Passage to $W^{1,p}$ by density. Let $u\in W^{1,p}(\mathbb R^n;\mathbb K)$. By [F4] choose $u_k\in C_c^\infty(\mathbb R^n;\mathbb K)$ with $u_k\to u$ in $W^{1,p}(\mathbb R^n)$. Applying step 2.1 (real case) or step 3.1 (complex case) to the differences gives $\|u_k-u_j\|_{L^{p^{*}}}\le C'(n,p)\|D(u_k-u_j)\|_{L^p}$, so $(u_k)$ is Cauchy in $L^{p^{*}}$. By [F5] it converges in $L^{p^{*}}$ to a class $w$, and a subsequence converges to $w$ almost everywhere. Since $u_k\to u$ in $L^p$, a further subsequence converges to $u$ almost everywhere, so $w=u$ almost everywhere. Passing to the limit in the smooth inequality gives $\|u\|_{L^{p^{*}}}\le C'(n,p)\|Du\|_{L^p}$, and renaming this constant proves the claim. [F4, F5, step 2.1, step 3.1, algebra] ∎

## Source notes

This is Kinnunen's Theorem 3.3 for $1<p<n$, printed pp. 63-65: the device is to apply the endpoint ($p=1$) inequality to $v=|u|^{\gamma}$ with $\gamma=p(n-1)/(n-p)$ and to use the Holder pairing $(\gamma-1)p/(p-1)=p^{*}$. The smooth compact cutoff $\chi(u^2+\delta^2)^{\gamma/2}$ makes the endpoint application legitimate; dominated convergence removes the regularisation, including the cutoff-gradient term, before the density passage. Hunter's Theorems 3.28 and 3.31 and Teschl's Theorem 9.22 record the same proof; Laugesen's Theorem 3.17 is the endpoint form used here as the p=1 input.
