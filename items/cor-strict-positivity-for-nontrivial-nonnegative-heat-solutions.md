---
id: cor-strict-positivity-for-nontrivial-nonnegative-heat-solutions
kind: corollary
title: Strict positivity propagates to later interior times
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-countable-choice
  - thm-strong-parabolic-maximum-principle
  - def-parabolic-cylinder-and-parabolic-boundary
  - def-connected-space
  - def-connected-component-and-quasicomponent
  - def-metric-continuity
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
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 158, Theorem 6.15 (strict positivity of nonnegative solutions at later times)"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§5.3, printed pp. 89–90, Theorem 5.12(2)"
---

## Statement

Assume Countable Choice. Let $\Omega$ be bounded and connected and
$u\in C^{2,1}(\overline\Omega\times[0,T])$ be a nonnegative homogeneous heat
solution. If $u(x_*,s_*)>0$ at an interior point with $0<s_*<T$, then
$u(x,t)>0$ for every $x\in\Omega$ and $s_*<t\le T$. The same conclusion for
every $0<t\le T$ holds if the continuous initial trace is positive at some interior
point. Nontriviality only at a later time does not assert positivity before
that time.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected open $\Omega\subseteq\mathbb R^n$, $T>0$, and a nonnegative $u\in C^{2,1}(\overline Q)$ on $Q=\Omega\times(0,T]$ with $u_t-\Delta u=0$ in $Q$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Strong parabolic maximum principle: on a bounded parabolic cylinder, a subsolution attaining its maximum $M$ at an interior point $(x_0,t_0)$ with $x_0\in\Omega$ and $0<t_0\le T$ is equal to $M$ on $\Omega_0\times(0,t_0]$, where $\Omega_0$ is the connected component of $\Omega$ containing $x_0$ ([[thm-strong-parabolic-maximum-principle]]).

[F2] The cylinder $Q=\Omega\times(0,T]$ and the class $C^{2,1}(\overline Q)$ are those of [[def-parabolic-cylinder-and-parabolic-boundary]]; in particular $u$ is continuous on $\overline Q$ and $u_t-\Delta u=0$ on the open cylinder.

[F3] Connectedness and components: $C(x)$ is the largest connected subset of $X$ containing $x$ ([[def-connected-component-and-quasicomponent]]), so a connected space $X$ has $C(x)=X$ for every $x\in X$ since $X$ itself is then a connected subset containing $x$ ([[def-connected-space]]); in particular the component $\Omega_0$ of [F1] equals $\Omega$ for every $x_0\in\Omega$.

[F4] Continuity at a point: for real $\varepsilon>0$ there is $\delta>0$ with $|u(x,s)-u(x_0,0)|<\varepsilon$ whenever $(x,s)\in\overline Q$ is within $\delta$ of $(x_0,0)$ ([[def-metric-continuity]]).

## Proof

**Given:** Countable Choice, a bounded connected $\Omega$, and a nonnegative solution $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u=0$ in $Q$.

1.1 Let $t_1\in(s_*,T]$ and $x_1\in\Omega$ with $u(x_1,t_1)=0$. On the truncated cylinder $Q_1:=\Omega\times(0,t_1]$ put $v:=-u$; then $v\in C^{2,1}(\overline{Q_1})$, $v_t-\Delta v=0$ in $Q_1$, and $v\le0$ on $\overline{Q_1}$ because $u\ge0$, so the maximum $M=0$ of $v$ over $\overline{Q_1}$ is attained at $(x_1,t_1)$ with $x_1\in\Omega$ and $0<t_1\le t_1$; since $\Omega$ is connected, [F3] makes the relevant component all of $\Omega$, and [F1] gives $v=0$ on $\Omega\times(0,t_1]$, that is $u=0$ there. But $s_*<t_1$ and $x_*\in\Omega$, so $u(x_*,s_*)=0$, contradicting the hypothesis $u(x_*,s_*)>0$. Hence $u(x,t)>0$ for every $x\in\Omega$ and $s_*<t\le T$. [A1, F1, F2, F3, given]

2.1 Suppose now that the continuous initial trace satisfies $u(x_0,0)>0$ at some interior point $x_0\in\Omega$, and let $t\in(0,T]$ be given. Choose $s_*\in(0,\min(t,T))$; by [F4] applied with $\varepsilon=u(x_0,0)/2>0$ there is $\delta>0$ with $u(x,s)>u(x_0,0)/2>0$ for every $(x,s)\in\overline Q$ with $|(x,s)-(x_0,0)|<\delta$, and the point $(x_0,s_*)$ qualifies for $s_*$ small enough, so it is admissible in step 1.1; since $s_*<t$, step 1.1 gives $u(x,t)>0$ for every $x\in\Omega$. As $t\in(0,T]$ was arbitrary, a positive interior point of the initial trace forces strict positivity at all later interior space-time points. [step 1.1, F2, F4, given]

3.1 Steps 1.1 and 2.1 establish both positivity clauses of the statement, together with the recorded caveat: positivity of $u$ at one interior time $s_*$ propagates only to later times $t>s_*$, and no claim is made about times before $s_*$; no global lower bound, boundary positivity or uniqueness statement is asserted. The argument uses no choice beyond the Countable Choice declared in [A1]. [step 1.1, step 2.1, given] ∎
