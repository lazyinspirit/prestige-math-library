---
id: lem-nrqmx-schwartz-joint-quadrature-graph-core
kind: lemma
domain: mathematics
title: Schwartz density in the joint quadrature graph norm
status: draft
origin: pipeline
dependency_level: 0
deps: [def-countable-choice, def-schwartz-space-and-its-seminorms, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-smooth-bump-between-concentric-euclidean-balls, lem-weak-leibniz-rule-with-a-smooth-factor, thm-dominated-convergence, thm-plancherel]
dependency_roles:
  thm-plancherel: mathematical-premise
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, §1.8, Theorem 1.21 and Remark 1.22"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 1 §1.8, Theorem 1.21 and Remark 1.22(1),(3),(4), printed pp. 19–21."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations, §3.4"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3 §3.4, Proposition 3.7 and Theorem 3.8, printed pp. 57–58."
---

## Statement

Assume Countable Choice, let $r\ge1$ and $\hbar>0$, and use the
Schrödinger quadratures $Q_jf=\sqrt\hbar x_jf$ on $D(Q_j)=\{f:x_jf\in L^2\}$ and
$P_j=\mathcal F_2^{-1}M_{2\pi\sqrt\hbar\,\xi_j}\mathcal F_2$, where $\mathcal F_2$ is the
unitary $2\pi$-frequency Fourier transform on $L^2(\mathbb R^r)$ and the multiplier has its maximal $L^2$ domain. Put
$$D=\{f\in L^2(\mathbb R^r):x_jf\in L^2(\mathbb R^r),\ \partial_jf\in L^2(\mathbb R^r)\text{ for every }j\}.$$
For
$$\|f\|_{\mathrm{quad}}:=\|f\|_2+\sum_{j=1}^r(\|x_jf\|_2+\|\partial_jf\|_2),$$
the Schwartz space $\mathcal S(\mathbb R^r)$ is dense in $D$. The weak
derivatives in this definition are taken in the distributional sense and
agree with the Fourier-defined momentum
domains of the quadratures just defined.

## Facts & Assumptions

**Given:** Countable Choice, finite $r\ge1$, $\hbar>0$, and $f\in D$.

[A1] Countable Choice is the hypothesis of the Fourier–Sobolev and
compactly-supported smooth density interfaces
([[def-countable-choice]]).

[F1] Under Countable Choice the Fourier transform $\mathcal F_2$ is unitary
([[thm-plancherel]]). Schwartz space consists of the smooth functions with
every seminorm $p_{\alpha,\beta}$ finite
([[def-schwartz-space-and-its-seminorms]]). The quadratures in the Statement
are defined directly here; no AC-dependent representation uniqueness is used.

[F2] The Fourier characterization of $W^{1,2}(\mathbb R^r)$ identifies its
weak-derivative norm with an equivalent norm requiring $f$ and every
$\xi_j\widehat f$ in $L^2$; hence $f\in D$ lies in $W^{1,2}$
([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F3] For $0<a<b$ a smooth bump exists that equals $1$ on $\overline B_a(0)$
and has support in $B_b(0)$
([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F4] Multiplication by a smooth function obeys the weak Leibniz rule, so
$\partial_j(\chi f)=\chi\partial_j f+(\partial_j\chi)f$
([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F5] Countable Choice implies that $C_c^\infty(\mathbb R^r)$ is dense in
$W^{1,2}(\mathbb R^r)$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F6] Dominated convergence applies to the integrable squared tails of $f$,
$x_jf$, and $\partial_jf$ ([[thm-dominated-convergence]]).

## Proof

1.1 Choose $\chi\in C_c^\infty(\mathbb R^r)$ with $0\le\chi\le1$,
$\chi=1$ on $\overline B_1(0)$, and support in $B_2(0)$ by [F3]. For
$R\ge1$ set $\chi_R(x)=\chi(x/R)$ and $f_R=\chi_Rf$. Then
$|\partial_j\chi_R|\le C/R$. By [F4], $f_R\in W^{1,2}$ and
$$\partial_j(f_R-f)=(\chi_R-1)\partial_jf+(\partial_j\chi_R)f.$$
The first terms in $f_R-f$, $x_j(f_R-f)$, and
$(\chi_R-1)\partial_jf$ tend to zero in $L^2$ by dominated convergence [F6],
since $\chi_R\to1$ pointwise and $|\chi_R-1|\le1$. The remaining derivative
term has norm at most $C\|f\|_2/R$. Thus $\|f_R-f\|_{\mathrm{quad}}\to0$.
[A1, F1, F2, F3, F4, F6, given, algebra]

2.1 Fix $R$ so the preceding error is below $\varepsilon/2$. The function
$f_R$ is supported in $\overline B_{2R}(0)$. By [F5], choose
$\phi\in C_c^\infty(\mathbb R^r)$ with $\|\phi-f_R\|_{W^{1,2}}$ as small
as needed. Choose $\theta\in C_c^\infty$ equal to $1$ on
$\overline B_{2R}(0)$ and supported in $B_{2R+2}(0)$ by [F3], and put
$g=\theta\phi$. Since $\theta f_R=f_R$, the weak product rule [F4] gives
$$g-f_R=\theta(\phi-f_R),\qquad \partial_j(g-f_R)=\theta\partial_j(\phi-f_R)+(\partial_j\theta)(\phi-f_R).$$
The bounded derivatives of $\theta$ make the $W^{1,2}$ norm of $g-f_R$ at
most a fixed constant times $\|\phi-f_R\|_{W^{1,2}}$. Both $g$ and $f_R$
are supported in $\overline B_{2R+2}(0)$, so
$$\|x_j(g-f_R)\|_2\le(2R+2)\|g-f_R\|_2.$$
Choose $\phi$ close enough that $\|g-f_R\|_{\mathrm{quad}}<\varepsilon/2$.
Then $g\in C_c^\infty\subset\mathcal S$ and
$\|g-f\|_{\mathrm{quad}}<\varepsilon$ by step 1.1. Since $f$ and
$\varepsilon>0$ were arbitrary, $\mathcal S(\mathbb R^r)$ is dense in $D$.
[A1, F3, F4, F5, step 1.1, given, algebra] ∎
