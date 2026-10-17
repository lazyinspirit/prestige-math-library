---
id: cex-omitting-rosenbrock-stage-correction-loses-order-two
title: "Omitting the second-stage correction destroys cubic local accuracy"
kind: counterexample
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-two-stage-rosenbrock-w-method
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-exponential-ivp-uniqueness
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
  - def-real-exponential-function-and-e
  - thm-continuous-implies-integrable
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Example 2.37 and Theorem 2.38, printed pp. 45–47: selected second-order stage correction"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: two-stage method structure"
---

## Statement

On $y'=y$ from $y=1$, with $J=1$, $\widetilde T=0$, and $\alpha=1-1/\sqrt2$, consider the incorrect variant that retains $k_1=(1-\alpha h)^{-1}y$ and the midpoint evaluation $F_1=f(y+hk_1/2)$ but replaces the corrected second stage by $(1-\alpha h)\ell_2=F_1$ and returns $y+h\ell_2$. Its one-step expansion is
$$y_+=y+hy+(\alpha+\tfrac12)h^2y+O(h^3),$$
whereas the exact flow is $\exp(h)=1+h+\tfrac12h^2+O(h^3)$. Since $\alpha>0$, the altered method has a nonzero $O(h^2)$ local defect and fails the cubic local-error condition for order two. The altered formula does not satisfy the proper method's stage equations.

## Facts & Assumptions

**Given:** $f(y)=y$, initial $y=1$, $J=1$, $h>0$ small, and $\alpha=1-1/\sqrt2$.

[F1] [[alg-two-stage-rosenbrock-w-method]]: the correct stages use the second right-hand side $F_1-k_1$ and then set $k_2=q_2+k_1$.

[F2] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a differentiable vector curve with integrable derivative has endpoint difference equal to the integral of its derivative.

[F3] [[thm-exponential-ivp-uniqueness]]: any differentiable solution on $\mathbb R$ of $Y'=Y$, $Y(0)=1$ equals $\exp$.

[F4] [[thm-derivative-of-exponential]]: every derivative of $\exp$ equals $\exp$.

[F5] [[thm-exponential-is-strictly-increasing]]: $\exp$ is increasing on $\mathbb R$.

[F6] [[def-real-exponential-function-and-e]]: $\exp(s)=\sum_{n=0}^{\infty}s^n/n!$, so $\exp(0)=1$.

[F7] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is integrable.

## Proof

**Given:** The data in the Statement.

1.1 Define the altered variant as stated. Since $W=1-\alpha h$, its first stage is $k_1=y/(1-\alpha h)$. The midpoint value is $F_1=y+(h/2)k_1$, and the altered second solve gives $\ell_2=F_1/(1-\alpha h)$. [given, algebra]

1.2 Define $Y(s)=\exp(s)$ for $s\in\mathbb R$. By [F4], $Y'=Y$, and [F6] gives $Y(0)=1$; thus this is an exact solution of the IVP (unique on $\mathbb R$ by [F3]). [given, F3, F4, F6]

2.1 Put $r=(1-\alpha h)^{-1}$. The exact identity $(1-x)^{-1}=1+x+x^2+x^3/(1-x)$ shows $r=1+\alpha h+\alpha^2h^2+O(h^3)$; for $0<h\le1/(2\alpha)$ the remainder is bounded by $2\alpha^3h^3$. Squaring this finite expansion gives $r^2=1+2\alpha h+3\alpha^2h^2+O(h^3)$, with a bounded remainder on the same interval. Since $F_1=y+(h/2)k_1=y(1+hr/2)$, the altered second stage is $\ell_2=F_1r=y(r+hr^2/2)=y(1+(\alpha+1/2)h+(\alpha^2+\alpha)h^2+O(h^3))$. Multiplying by $h$ and adding $y$ gives the displayed one-step expansion. [step 1.1, algebra]

2.2 By [F4], $Y'''(s)=\exp(s)$; since $0\le s\le h\le1$, [F5] gives $Y'''(s)\le\exp(1)$. [step 1.2, F4, F5]

3.1 The derivatives of $Y$ are continuous by [F4] and integrable on each compact subinterval by [F7]. Three applications of [F2] give $\exp(h)=1+h+h^2/2+R$, where $R=\int_0^h (h-s)^2Y'''(s)/2\,ds$ and $|R|\le\exp(1)h^3/6$. Subtracting this expansion from the altered update in step 2.1 leaves $\alpha h^2+O(h^3)$, which is not bounded by $C h^3$ for any fixed $C$ as $h\downarrow0$ because $\alpha>0$. Thus the altered scheme fails the cubic local-error condition for order two. [F2, F4, F7, step 2.1, step 2.2, algebra]

4.1 The proper method's second right-hand side and corrected output are exactly the two terms changed in this variant by [F1]. Step 3.1 proves the altered formula has no cubic local defect, and this item makes no global-rate claim for it. [F1, step 3.1] ∎

## Finite check

For $h=0.01$ and $y=1$, the leading local-defect coefficient is $\alpha h^2\approx2.9289\times10^{-5}$; the exact Taylor coefficient at $h^2$ is $1/2$, while the altered coefficient is $1/2+\alpha$.
