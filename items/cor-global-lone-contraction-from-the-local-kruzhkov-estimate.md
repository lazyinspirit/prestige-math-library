---
id: cor-global-lone-contraction-from-the-local-kruzhkov-estimate
kind: corollary
title: Global $L^1$ contraction from the local estimate
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-kruzhkov-local-l1-contraction, def-kruzhkov-entropy-solution, thm-monotone-convergence-for-the-integral, def-metric-ball, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-ftc-second-part]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, Theorem 1, pp. 222–228"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§6.1, Theorem 4, pp. 49–50"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $n\ge1$, $T>0$, let $f\colon\mathbb R\to\mathbb R^n$ be $C^1$ and Lipschitz on the
common essential range of the solutions below with constant $L\ge0$, and let
$u,v$ be bounded Kruzhkov entropy solutions on $\Pi_T$ in the sense of
[[def-kruzhkov-entropy-solution]], with initial data
$u_0,v_0\in L^1(\mathbb R^n)\cap L^\infty(\mathbb R^n)$. Then for almost every
$t\in(0,T)$,
$$\|u(t,\cdot)-v(t,\cdot)\|_1\le\|u_0-v_0\|_1.$$
If $u,v$ have representatives continuous in $L^1_{\mathrm{loc}}$ on $[0,T]$,
the same inequality holds for every $t\in[0,T]$
([[def-metric-ball]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $f$ Lipschitz with constant $L\ge0$ on the common essential range of $u$ and $v$, bounded Kruzhkov entropy solutions $u,v$ on $\Pi_T$ with $|u|,|v|\le M$ almost everywhere, and initial data $u_0,v_0\in L^1(\mathbb R^n)\cap L^\infty(\mathbb R^n)$. Set $L_*:=\sup_{|z|\le M}|f\prime(z)|<\infty$; in the proof use $L_*$, irrespective of the given constant on the common essential range.

[F1] Since $f\in C^1$, $L_*<\infty$, and coordinatewise FTC gives $f(b)-f(a)=\int_a^b f\prime(z)\,dz$ and $|f(b)-f(a)|\le L_*|b-a|$ for $a,b\in[-M,M]$ ([[thm-ftc-second-part]]). Local $L^1$ contraction with this interval constant: for every centre $x_0$ and radius $R>0$, for almost every $t\in(0,T)$ with $L_*t<R$, $\int_{B(x_0,R-L_*t)}|u(t,x)-v(t,x)|\,dx\le\int_{B(x_0,R)}|u_0(x)-v_0(x)|\,dx$, with an exceptional null set depending on $x_0,R$ ([[thm-kruzhkov-local-l1-contraction]], [[def-kruzhkov-entropy-solution]]).

[F2] Monotone convergence for integrals of nonnegative functions over increasing sets: if $0\le g_m\uparrow g$ pointwise then $\int g_m\uparrow\int g$; in particular the integrals of a fixed nonnegative function over the balls $B(0,\rho)\uparrow\mathbb R^n$ increase to its integral over $\mathbb R^n$, finite or infinite ([[thm-monotone-convergence-for-the-integral]]).

[F3] Almost-everywhere assertions concern equivalence classes: a countable union of null sets in $(0,T)$ is null, and members of $L^1$ are defined up to modification on null sets ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 **Ball estimates along an exhausting sequence.** For $m\ge1$ put $R_m=L_*T+m$, so that $R_m>L_*t$ for every $t\in(0,T)$ and $R_m-L_*t=m+L_*(T-t)>0$. Applying [F1] with centre $0$ and radius $R_m$ gives, for every $m$, an exceptional null set $N_m\subseteq(0,T)$ such that for all $t\in(0,T)\setminus N_m$ $$\int_{B(0,R_m-L_*t)}|u(t,x)-v(t,x)|\,dx\le\int_{B(0,R_m)}|u_0(x)-v_0(x)|\,dx\le\|u_0-v_0\|_1.$$ [F1]


2.1 **Intersection and monotone limit.** The set $N=\bigcup_{m\ge1}N_m$ is null by [F3]. Fix $t\in(0,T)\setminus N$, so that the estimates of step 1.1 hold for every $m$. The balls $B(0,R_m-L_*t)$ increase to $\mathbb R^n$ as $m\uparrow\infty$, hence the integrals of the fixed nonnegative function $|u(t,\cdot)-v(t,\cdot)|$ over them increase to $\int_{\mathbb R^n}|u(t,x)-v(t,x)|\,dx$, while $\int_{B(0,R_m)}|u_0-v_0|\uparrow\|u_0-v_0\|_1$ by monotone convergence. Passing to the limit in step 1.1 gives $\|u(t,\cdot)-v(t,\cdot)\|_1\le\|u_0-v_0\|_1<\infty$ for every $t\in(0,T)\setminus N$, which is the almost-everywhere assertion and shows that the slice integrals are finite for almost every $t$. [F2, F3, step 1.1]


3.1 **The every-time assertion under $L^1_{\mathrm{loc}}$ continuity.** Assume now that $u$ and $v$ have representatives on $[0,T]$ such that $t_j\to t$ implies $u(t_j)\to u(t)$ and $v(t_j)\to v(t)$ in $L^1(K)$ for every compact $K\subseteq\mathbb R^n$ (with one-sided sequences at $t=0,T$). Fix $t\in[0,T]$ and choose $t_j\in(0,T)\setminus N$ with $t_j\to t$, possible because $N$ is null. For every fixed ball $B(0,\rho)$, step 2.1 gives $\int_{B(0,\rho)}|u(t_j)-v(t_j)|\le\|u(t_j)-v(t_j)\|_1\le\|u_0-v_0\|_1$, and $|u(t_j)-v(t_j)|\to|u(t)-v(t)|$ in $L^1(B(0,\rho))$ because $u(t_j)\to u(t)$ and $v(t_j)\to v(t)$ there; the inequality $\bigl|\|a\|_1-\|b\|_1\bigr|\le\|a-b\|_1$ gives convergence of these integrals directly. Hence $\int_{B(0,\rho)}|u(t)-v(t)|\le\liminf_j\int_{B(0,\rho)}|u(t_j)-v(t_j)|\le\|u_0-v_0\|_1$. Letting $\rho\uparrow\infty$ and using monotone convergence once more gives $\|u(t)-v(t)\|_1\le\|u_0-v_0\|_1$. [F2, step 2.1] ∎
