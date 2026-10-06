---
id: cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers
kind: corollary
title: "Strong convergence of subcritical powers"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, thm-fatou-lemma, thm-lyapunov-interpolation-inequality-for-l-p-norms, thm-holder-inequality-for-integrals, cor-mean-value-theorem, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, Section 3.6: the compactness and interpolation mechanism of Theorem 3.44 and Remark 3.45, printed pp. 85-90; the nonlinear power map is derived locally from the mean value theorem, as stated in the strategy."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10: the interpolation Lemma 1.11 and the compactness argument of Theorem 3.45, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategy."
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ have finite Lebesgue
measure, let $1\le q<r<\infty$ and $m\ge1$, and let
$(u_j)$ be a sequence in $L^q(\Omega;\mathbb R)$ with $u_j\to u$ in
$L^q(\Omega;\mathbb R)$ and $\sup_j\|u_j\|_{L^r(\Omega)}<\infty$. Then
$u\in L^r(\Omega)$, and for every $1\le s<r/m$ the nonlinear maps converge:
$$|u_j|^{m-1}u_j\longrightarrow|u|^{m-1}u\qquad\text{in }L^s(\Omega).$$
The range is nonempty only when $m<r$; the endpoint $s=r/m$ is not asserted.

## Facts & Assumptions

**Given:** Countable Choice, a finite-measure set $\Omega\subseteq\mathbb R^n$,
exponents $1\le q<r<\infty$, a real number $m\ge1$, and real-valued measurable
classes $u_j,u$ on $\Omega$ with $u_j\to u$ in $L^q(\Omega)$ and
$M:=\sup_j\|u_j\|_{L^r(\Omega)}<\infty$.

[F1] *Hölder inclusion on a finite-measure space.* If $1\le a<b<\infty$ and
$g$ is measurable on the finite-measure space $\Omega$, then $g\in L^a$
whenever $g\in L^b$, with $\|g\|_{L^a}\le|\Omega|^{1/a-1/b}\|g\|_{L^b}$;
this is Hölder applied to $|g|^a$ and the constant function $1$.
([[thm-holder-inequality-for-integrals]],
[[def-l-p-space-as-a-quotient-by-null-functions]])

[F2] *Lyapunov interpolation.* If $1\le p_0<p<p_1<\infty$, $\theta\in(0,1)$
and $1/p=\theta/p_0+(1-\theta)/p_1$, then every $f\in L^{p_0}\cap L^{p_1}$
lies in $L^p$ with $\|f\|_{L^p}\le\|f\|_{L^{p_0}}^{\theta}
\|f\|_{L^{p_1}}^{1-\theta}$. ([[thm-lyapunov-interpolation-inequality-for-l-p-norms]])

[F3] *Almost-everywhere subsequences.* Every sequence converging in $L^q$,
$1\le q\le\infty$, has a subsequence whose representatives converge almost
everywhere to a representative of the limit.
([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]])

[F4] *Fatou's lemma.* For nonnegative measurable functions $f_k$,
$\int\liminf_k f_k\le\liminf_k\int f_k$. ([[thm-fatou-lemma]])

[F5] *Mean value theorem.* If $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$
and differentiable on $(a,b)$, then $f(b)-f(a)=f'(c)(b-a)$ for some
$c\in(a,b)$. ([[cor-mean-value-theorem]])

[F6] *Hölder's inequality for products.* For conjugate exponents
$1\le p,q\le\infty$ and measurable $f,g$,
$\int|fg|\le\|f\|_{L^p}\|g\|_{L^q}$.
([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** Extract an almost-everywhere subsequence to obtain the
$L^r$-bound of the limit, transfer convergence to the exponent $ms<r$ by
interpolation, and apply the pointwise mean value bound followed by Hölder.

1.1 By [F3] fix a subsequence $(u_{j_k})$ convergent almost everywhere to $u$. Then $\liminf_k|u_{j_k}|^r=|u|^r$ pointwise almost everywhere, so [F4] gives $\|u\|_{L^r}^r\le\liminf_k\|u_{j_k}\|_{L^r}^r\le M^r<\infty$, hence $u\in L^r(\Omega)$ with $\|u\|_{L^r}\le M$. Consequently $\|u_j-u\|_{L^r}\le\|u_j\|_{L^r}+\|u\|_{L^r}\le2M$ for every $j$. [F3, F4, given]

2.1 Fix $1\le s<r/m$ and put $b:=ms<r$. If $b=q$ then $\|u_j-u\|_{L^b}=\|u_j-u\|_{L^q}\to0$; if $b<q$, then [F1] gives $\|u_j-u\|_{L^b}\le|\Omega|^{1/b-1/q}\|u_j-u\|_{L^q}\to0$. If $q<b<r$, choose $\theta\in(0,1)$ with $1/b=\theta/q+(1-\theta)/r$; [F2] applied to the classes $u_j-u\in L^q\cap L^r$ gives $\|u_j-u\|_{L^b}\le\|u_j-u\|_{L^q}^{\theta}\|u_j-u\|_{L^r}^{1-\theta}\le\|u_j-u\|_{L^q}^{\theta}(2M)^{1-\theta}\to0$ by step 1.1. In both cases $\|u_j-u\|_{L^{ms}}\to0$, and $\sup_j\|u_j\|_{L^{ms}}\le|\Omega|^{1/(ms)-1/r}\sup_j\|u_j\|_{L^r}<\infty$ by [F1], while $\|u\|_{L^{ms}}\le|\Omega|^{1/(ms)-1/r}M$ by step 1.1. [F1, F2, step 1.1]

3.1 If $m=1$ then $|u_j|^{m-1}u_j=u_j$ and $|u|^{m-1}u=u$, so the claim is step 2.1 itself with $b=s<r$. If $m>1$, consider $N(t):=|t|^{m-1}t$ on $\mathbb R$; $N$ is differentiable with $N'(t)=m|t|^{m-1}$, and for real $a\ne b$ every point $t$ of the closed interval between them satisfies $|t|^{m-1}\le|a|^{m-1}+|b|^{m-1}$. By [F5] applied to $N$ on that interval, $$|N(a)-N(b)|\le m\bigl(|a|^{m-1}+|b|^{m-1}\bigr)|a-b|.$$ Writing $a=u_j(x)$, $b=u(x)$ and applying [F6] with exponents $m/(m-1)$ and $m$ to the product $\bigl(|u_j|^{m-1}+|u|^{m-1}\bigr)|u_j-u|$ gives $$\|N(u_j)-N(u)\|_{L^s}\le m\bigl(\|u_j\|_{L^{ms}}^{m-1}+\|u\|_{L^{ms}}^{m-1}\bigr)\|u_j-u\|_{L^{ms}},$$ and the right-hand side tends to $0$ by the bounds and convergence of step 2.1. Hence $|u_j|^{m-1}u_j\to|u|^{m-1}u$ in $L^s(\Omega)$. [F5, F6, step 2.1, given] ∎ 