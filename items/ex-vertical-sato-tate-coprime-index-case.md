---
id: ex-vertical-sato-tate-coprime-index-case
kind: example
title: "The Sato–Tate Limit When the Fixed Index Is Coprime to the Prime"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-vertical-sato-tate-for-maass-forms-in-level-aspect
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "Theorem 10.2 and Remark 1, printed pp. 133–134: the correction measure is Sato–Tate when p does not divide m."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§9, classical prime Hecke coefficient setting and the Sato–Tate test-function context; printed pp. 46–48."
---

## Example

Assume the Axiom of Choice and Countable Choice for the spectral branch. Fix a
prime $p$ and a positive integer $m$ with $p\nmid m$. For each $j\ge1$,
let $N_j\to\infty$ with $p\nmid N_j$, let $\chi_j$ be an even unitary
Dirichlet character modulo $N_j$, and let $\mathcal F_j$ be an orthogonal
basis of simultaneous weight-zero Maass Hecke eigenforms of level $N_j$ and
character $\chi_j$. Let $h$ be even and holomorphic in
$|\operatorname{Im}t|<A$ for some $A>13$, with
$|h(t)|\le C_h(1+|t|)^{-B}$ there for some $B>14$, and suppose
$h(t_u)\ge0$ for every spectral parameter and
$$J=\frac1{\pi^2}\int_{-\infty}^{\infty} h(t)\tanh(\pi t)\,t\,dt\ne0.$$
Choose $\xi_j^2=\overline{\chi_j(p)}$, define
$\nu_p(u)=\xi_j\lambda_p(u)$, and assign the weight
$$w_u=\frac{|a_m(u)|^2}{\|u\|^2}\frac{h(t_u)}{\cosh(\pi t_u)},\qquad \|u\|^2=\frac1{\psi(N_j)}\int_{\Gamma_0(N_j)\backslash\mathbb H} |u(z)|^2\frac{dx\,dy}{y^2},\quad \psi(N_j)=N_j\prod_{q\mid N_j}(1+1/q).$$
Here $a_m(u)$ is the $m$th Fourier–Whittaker coefficient and
$\Delta u=(1/4+t_u^2)u$. The limiting measure is
$\mu_m=\mu_{\rm ST}$, where
$$d\mu_{\rm ST}(x)=\frac1{2\pi}\sqrt{4-x^2}\,dx\quad(-2\le x\le2).$$
For all sufficiently large $j$ the denominator is positive; thus every
continuous $f:\mathbb R\to\mathbb C$ has the following limiting average:
$$\lim_{j\to\infty} \frac{\sum_{u\in\mathcal F_j}f(\nu_p(u))w_u} {\sum_{u\in\mathcal F_j}w_u} =\frac1{2\pi}\int_{-2}^{2}f(x)\sqrt{4-x^2}\,dx.$$

## Example references

[[thm-vertical-sato-tate-for-maass-forms-in-level-aspect]]

## Facts & Assumptions

**Given:** $p$ is prime, $m\ge1$, and $p\nmid m$, together with the
vertical Sato–Tate theorem's level, character, basis, and test-function
hypotheses.

[F1] The limiting measure is
$\mu_m=\sum_{r=0}^{v_p(m)}X_{2r}\mu_{\rm ST}$, with $\mu_{\rm ST}$ the
Sato–Tate probability measure on $[-2,2]$.
([[thm-vertical-sato-tate-for-maass-forms-in-level-aspect]])

## Verification

1.1 Since $p\nmid m$, $v_p(m)=0$, so the sum in [F1] has only $r=0$. The defining sine quotient gives $X_0(2\cos\theta)=1$ and its continuous endpoint values are one; hence $X_0$ is the constant polynomial one. [F1, given, algebra]

2.1 Therefore $\mu_m=X_0\mu_{\rm ST}=\mu_{\rm ST}$. Substituting its displayed density in the conditional limit supplied by F1 gives the stated integral. This uses the held vertical theorem rather than supplying its trace/Weil proof. [F1, step 1.1, algebra] ∎

## Verification status

The specialization is complete conditional on the vertical theorem. This
item is escalated because that theorem's trace, truncation, Kloosterman-bound and
continuous-normalization obligations remain held. The prime Hecke reality and uniform bound are now proved locally.

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
