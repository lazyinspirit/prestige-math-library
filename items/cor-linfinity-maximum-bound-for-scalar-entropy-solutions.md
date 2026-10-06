---
id: cor-linfinity-maximum-bound-for-scalar-entropy-solutions
kind: corollary
title: The $L^\infty$ maximum bound for entropy solutions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
deps: [cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, def-kruzhkov-entropy-solution, def-essential-supremum-with-respect-to-a-measure, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, Theorem 3 and its proof, pp. 229–230"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, Definition 5.11, pp. 45–46 (entropy formulation); the comparison bound is derived locally"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$, $T>0$, let $f$ be locally Lipschitz and $C^1$, and let $u$ be a
bounded Kruzhkov entropy solution with initial datum $u_0\in L^\infty$. Then,
with essential extrema taken with respect to Lebesgue measure,
$$\operatorname*{ess\,inf}_{\mathbb R^n}u_0\ \le\ u(t,x)\ \le\ \operatorname*{ess\,sup}_{\mathbb R^n}u_0\qquad\text{for a.e. }(t,x)\in\Pi_T;$$
in particular $\|u(t,\cdot)\|_\infty\le\|u_0\|_\infty$ for almost every $t$.
For a representative continuous in local $L^1$, the same bound holds at every
$t$: local $L^1$ convergence from times in the full-measure set preserves the
range bound ([[def-essential-supremum-with-respect-to-a-measure]],
[[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, a locally Lipschitz $C^1$ flux $f$, a bounded Kruzhkov entropy solution $u$ on $\Pi_T$ with datum $u_0\in L^\infty(\mathbb R^n)$, and the essential bounds $m_0=\operatorname*{ess\,inf}u_0$, $M_0=\operatorname*{ess\,sup}u_0$, both finite.

[F1] Constant functions on $\Pi_T$ are Kruzhkov entropy solutions with their own constant value as initial datum, for every flux: for $u\equiv c$ the weak equation is the equality $\partial_tc+\operatorname{div}_xf(c)=0$, and for every $k$ the functions $\eta_k(c)=|c-k|$ and $q_k(c)=\operatorname{sgn}(c-k)(f(c)-f(k))$ are constant in $(t,x)$, so $\partial_t\eta_k(c)+\operatorname{div}_xq_k(c)=0\le0$ in distributions; the strong local $L^1$ trace of the constant $c$ is the constant $c$, with $\int_K|c-c|\,dx=0$ for every compact $K$ ([[def-kruzhkov-entropy-solution]]).

[F2] Order preservation: if two bounded Kruzhkov entropy solutions $v,w$ on $\Pi_T$ have $|v|,|w|\le M$ and $v_0\le w_0$ almost everywhere, then $v\le w$ almost everywhere on $\Pi_T$ ([[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]).

[F3] The cited essential-supremum definition defines $\|u_0\|_\infty$ using bounds on $|u_0|$ ([[def-essential-supremum-with-respect-to-a-measure]]). Here define the signed extrema explicitly by $M_0=\inf\{b\in\mathbb R:u_0\le b\text{ a.e.}\}$ and $m_0=\sup\{a\in\mathbb R:a\le u_0\text{ a.e.}\}$. Since $u_0$ is essentially bounded on the nonnull space $\mathbb R^n$, these are finite. For each integer $j\ge1$, the infimum property gives an essential upper bound below $M_0+1/j$, so $u_0\le M_0+1/j$ a.e.; the supremum property similarly gives $m_0-1/j\le u_0$ a.e. Discarding the countable union of exceptional null sets and letting $j\to\infty$ yields $m_0\le u_0\le M_0$ a.e. Thus $\|u_0\|_\infty\le\max\{|m_0|,|M_0|\}$. Conversely every essential absolute bound $B$ gives $m_0\ge-B$ and $M_0\le B$, so $\max\{|m_0|,|M_0|\}\le B$; taking its infimum proves equality. Inequalities between $L^\infty$ classes are a.e. ([[def-l-p-space-as-a-quotient-by-null-functions]]). Fubini transfers null sets to spatial slices for a.e. time ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 **Comparison with the constant ceilings and floors.** By [F1] the constants $c=M_0$ and $c'=m_0$ are bounded Kruzhkov entropy solutions. Since $u_0\le M_0$ almost everywhere and $m_0\le u_0$ almost everywhere by [F3], choose a finite common bound for $u$, $m_0$, and $M_0$. Then [F2] applied to the pairs $(u,M_0)$ and $(m_0,u)$ gives $u\le M_0$ almost everywhere and $m_0\le u$ almost everywhere on $\Pi_T$, that is, $m_0\le u(t,x)\le M_0$ for almost every $(t,x)$. [F1, F2, F3]


2.1 **The almost-everywhere $L^\infty$ bound.** Integrating the pointwise almost-everywhere bound of step 1.1 over spatial slices and using Fubini, for almost every $t\in(0,T)$ one has $m_0\le u(t,x)\le M_0$ for almost every $x$, hence $\|u(t,\cdot)\|_\infty\le\max\{|m_0|,|M_0|\}=\|u_0\|_\infty$ for almost every $t$. [F3, step 1.1]


3.1 **Every time for a continuous representative.** Suppose $u$ has a representative on $[0,T]$ continuous into $L^1_{\mathrm{loc}}(\mathbb R^n)$: for $t_j\to t$ and every compact $K$, $u(t_j)\to u(t)$ in $L^1(K)$. Fix $t\in[0,T]$ and choose $t_j\to t$ with $t_j$ in the full-measure set of step 2.1. For each ball $B_R$, the bound $\|(u(t)-M_0)_+\|_{L^1(B_R)}+\|(m_0-u(t))_+\|_{L^1(B_R)}\le2\|u(t)-u(t_j)\|_{L^1(B_R)}\to0$ preserves the range directly; exhausting $\mathbb R^n$ by countably many balls, the bound holds for almost every $x\in\mathbb R^n$ at this time $t$. [F3, step 2.1] ∎
