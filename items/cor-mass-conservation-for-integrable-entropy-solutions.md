---
id: cor-mass-conservation-for-integrable-entropy-solutions
kind: corollary
title: Mass conservation for compactly supported entropy solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-existence-of-bounded-kruzhkov-entropy-solutions, def-kruzhkov-entropy-solution, cor-finite-propagation-for-scalar-conservation-laws, def-metric-ball, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-l-p-space-as-a-quotient-by-null-functions, def-distributional-weak-solution-of-a-scalar-conservation-law, def-countable-choice, def-dependent-choice]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2 and §4, pp. 220–239"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.2, Proposition 4.7, pp. 24–26 (piecewise-smooth mass balance); bounded entropy-solution proof supplied locally"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the heat-kernel, $L^1$ completeness and
vanishing-viscosity extraction interfaces used below. Let $n\ge1$, let
$f\colon\mathbb R\to\mathbb R^n$ be $C^1$ with $f(0)=0$, let
$u_0\in L^1(\mathbb R^n)\cap L^\infty(\mathbb R^n)$ be compactly supported, and
let $u$ be the entropy solution of
[[thm-existence-of-bounded-kruzhkov-entropy-solutions]]. Then
$\int_{\mathbb R^n}u(t,x)\,dx=\int_{\mathbb R^n}u_0(x)\,dx$ for almost every
$t\ge0$, and the function $t\mapsto\int u(t,x)\,dx$ is constant on
$[0,\infty)$ after choosing the continuous representative of the $L^1$ orbit
([[def-metric-ball]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, $n\ge1$, a $C^1$ flux $f$ with $f(0)=0$, a compactly supported datum $u_0\in L^1\cap L^\infty$ with $M=\|u_0\|_\infty$, the entropy solution $u$ of [[thm-existence-of-bounded-kruzhkov-entropy-solutions]] with its representative in $C^0([0,T];L^1_{\mathrm{loc}})$, and a centre $x_0\in\mathbb R^n$, $R>0$ with $u_0=0$ almost everywhere outside $B(x_0,R)$.

[F1] Existence and regularity: $u$ is a bounded Kruzhkov entropy solution with $|u|\le M$ almost everywhere, $\|u(t,\cdot)\|_\infty\le M$ for every $t$, strong local $L^1$ trace $u_0$, and an $L^1_{\mathrm{loc}}$-continuous representative ([[thm-existence-of-bounded-kruzhkov-entropy-solutions]], [[def-kruzhkov-entropy-solution]]).

[F2] Finite propagation: with $L=\sup_{|s|\le M}|f'(s)|$, the solution $u$ and the zero solution (which is a Kruzhkov entropy solution with datum $0$) agree outside the cone: $u(t,\cdot)=0$ almost everywhere outside $B(x_0,R+Lt)$ for almost every $t\ge0$; the conclusion is an almost-everywhere statement at the level of the $L^1$ classes ([[cor-finite-propagation-for-scalar-conservation-laws]], [[def-metric-ball]]).

[F3] Weak formulation: $\int_{\Pi_T}\bigl(u\varphi_t+f(u)\cdot\nabla\varphi\bigr)=0$ for every $\varphi\in C_c^\infty(\Pi_T)$ ([[def-distributional-weak-solution-of-a-scalar-conservation-law]], [[def-kruzhkov-entropy-solution]]).

[F4] There is a smooth compactly supported $\beta$ with $\beta=1$ on a neighbourhood of $\overline B(x_0,R+LT)$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]), and $L^1$ functions are equivalence classes, so pointwise statements on full-measure sets determine the class ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 **The cone support holds at every time for the chosen representative.** By [F2] there is a full-measure set $E\subseteq(0,\infty)$ with $u(t)=0$ almost everywhere outside $B(x_0,R+Lt)$ for $t\in E$. Fix $T>0$, $t_0\in[0,T]$ and a compact set $K\subseteq\{x:|x-x_0|>R+Lt_0\}$. The positive distance of $K$ from $\overline B(x_0,R+Lt_0)$ lets us choose $t_j\in E\cap(0,T)$ with $t_j\to t_0$ and $K\subseteq\{x:|x-x_0|>R+Lt_j\}$ for all $j$; then $u(t_j)=0$ in $L^1(K)$, and the $L^1_{\mathrm{loc}}$-continuity of the representative [F1] gives $u(t_0)=0$ in $L^1(K)$. A countable exhaustion of the strict exterior of $B(x_0,R+Lt_0)$ by compact sets gives $u(t_0)=0$ almost everywhere there; hence for every $t_0\in[0,T]$, $u(t_0)$ is supported in $\overline B(x_0,R+Lt_0)\subseteq\overline B(x_0,R+LT)$. [F1, F2]


2.1 **Truncated mass balance.** By step 1.1, for every $t\in[0,T]$ the function $u(t,\cdot)$ vanishes almost everywhere outside the fixed ball $B(x_0,R+LT)$; in particular $u\in L^1$ at every time with $\|u(t)\|_1\le M\,\mathrm{vol}(B(x_0,R+LT))$, and the $L^1_{\mathrm{loc}}$ continuity of [F1] is continuity in $L^1(\mathbb R^n)$. Choose $\beta$ as in [F4] and, for $\psi\in C_c^\infty((0,T))$, test [F3] with $\varphi(t,x)=\psi(t)\beta(x)$: since $u(t,\cdot)$ is supported where $\beta=1$ and $f(0)=0$ implies $f(u)=0$ wherever $u=0$, the flux term vanishes and only flat boundary terms contribute. The divergence theorem in the form of the weak identity then gives $\int_0^T\psi'(t)\,m(t)\,dt=0$ for the function $m(t)=\int_{\mathbb R^n}u(t,x)\,dx$, that is, $m'=0$ in the sense of distributions on $(0,T)$. [F3, F4, step 1.1]


3.1 **Conclusion.** Since $u$ is continuous in $L^1$ on $[0,T]$ and the support lies in the fixed ball, $m$ is continuous on $[0,T]$; its distributional derivative vanishes on $(0,T)$ by step 2.1 and $m(0)=\int u_0$ by the strong $L^1$ trace. To see constancy directly, convolve $m$ locally in time with a smooth unit-mass bump: its derivative is zero by $m'=0$ tested against translated kernels, so FTC makes each convolution constant on every interior compact interval. Uniform continuity of $m$ on such intervals makes the convolutions converge uniformly to $m$, hence $m$ is constant on $(0,T)$ and by continuity at its endpoints. Therefore $m(t)=\int u_0$ for every $t\in[0,T]$; in particular the equality holds for almost every $t$ and the chosen representative makes $t\mapsto\int u(t,x)\,dx$ constant on every $[0,T]$. As $T>0$ was arbitrary, the claims follow on $[0,\infty)$. [F1, F4, step 1.1, step 2.1] ∎
