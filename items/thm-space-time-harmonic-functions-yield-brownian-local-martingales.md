---
id: thm-space-time-harmonic-functions-yield-brownian-local-martingales
kind: theorem
title: "Space-time harmonic functions yield Brownian local martingales"
status: draft
origin: pipeline
deps: [thm-multidimensional-ito-formula-for-brownian-driven-processes, def-continuous-brownian-ito-process, def-d-dimensional-brownian-motion, def-brownian-motion, def-c-c-and-c-c-infinity-on-rn, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff, def-locally-square-integrable-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, lem-adapted-continuous-processes-are-progressively-measurable, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-maximal-bound-for-the-ito-integral, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-continuity-real, thm-heine-cantor-r, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $d\ge1$, let
$U\subseteq[0,\infty)\times\mathbb R^d$ be open, and let
$f\in C^{1,2}(U)$ satisfy the space-time harmonicity equation
$$\partial_tf+\tfrac12\Delta f=0\qquad\text{on }U,$$
where $\Delta=\sum_{k=1}^d\partial^2_{x_k}$ is the spatial Laplacian. Let $B$ be
a standard $d$-dimensional Brownian motion with $(0,0)\in U$, and for a compact
$K\subseteq U$ put $\tau_K:=\inf\{t\ge0:(t,B_t)\notin\operatorname{int}K\}$.

1. For every compact $K\subseteq U$ with $(0,0)\in\operatorname{int}K$, up to
   indistinguishability
   $$f(t\wedge\tau_K,B_{t\wedge\tau_K})=f(0,0)+\int_0^t1_{[0,\tau_K]}(s)\sum_{k=1}^d\partial_{x_k}f(s,B_s)\,dB^k_s,$$
   and the right-hand integral is a continuous square-integrable martingale;
   thus each stopped piece is a true martingale.
2. If $\tau_U:=\inf\{t\ge0:(t,B_t)\notin U\}$ and
   $E\int_0^t|\nabla f|^2(s,B_s)1_{[0,\tau_U)}(s)\,ds<\infty$ for a given
   $t\ge0$, then the process
   $$N_r:=\int_0^r1_{[0,\tau_U)}(s)\sum_{k=1}^d\partial_{x_k}f(s,B_s)\,dB^k_s,
   \qquad 0\le r\le t,$$
   is a square-integrable martingale, and for every $0\le r\le t$ one has
   $$f(r,B_r)-f(0,0)=N_r\qquad\text{on the event }\{r<\tau_U\}.$$
   No value of $f$ at the exit point $(\tau_U,B_{\tau_U})\notin U$ is asserted.
3. On the stochastic interval $[0,\tau_U)$ the process $t\mapsto f(t,B_t)$,
   read through continuous versions, is a continuous local martingale with
   localizing sequence $\tau_{K_n}$ for any compact exhaustion satisfying
   $K_n\subseteq\operatorname{int}K_{n+1}$ and $\bigcup_nK_n=U$.

## Facts & Assumptions

**Given:** AC, (H), an open $U\subseteq[0,\infty)\times\mathbb R^d$, a function $f\in C^{1,2}(U)$ with $\partial_tf+\tfrac12\Delta f=0$ on $U$, a standard $d$-dimensional Brownian motion $B$, and compact sets $K\subseteq U$.
 
[F1] **$B$ is a continuous Brownian Ito process** with drift $0$ and dispersion $\delta^{ik}$, that is, $B^i_t=\int_0^t1\,dB^i_s$ up to indistinguishability; the constant $1$ is an elementary integrand whose integral over $(0,t]$ is $B^i_t-B^i_0$ and whose localized integral is $B^i$. [[def-continuous-brownian-ito-process]] [[def-d-dimensional-brownian-motion]] [[def-brownian-motion]] [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-localized-ito-integral]]
 
[F2] **Multidimensional Ito formula.** For a $C^{1,2}$ function $g$ and a continuous Brownian Ito process $X$, $dg(t,X_t)=\bigl(\partial_tg+\sum_ib^i\partial_ig+\tfrac12\sum_{i,j}(\sigma\sigma^{\mathsf T})^{ij}\partial_i\partial_jg\bigr)(t,X_t)dt+\sum_{i,k}\partial_ig(t,X_t)\sigma^{ik}_t\,dB^k_t$ up to indistinguishability. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]
 
[F3] **Cutoffs on compact subsets of open sets, and local boundedness.** Every compact $K\subseteq U$ containing $(0,0)$ in its interior admits $\chi\in C_c^\infty(U)$ with $\chi=1$ on a neighbourhood of $K$; then $g:=\chi f$ extends to a $C^{1,2}$ function with compact support in $U$, and $g=f$, $\nabla g=\nabla f$, $\partial_tg=\partial_tf$ on that neighbourhood. Continuous functions on compact sets are bounded, so $C_K:=\sup_{K'}|\nabla f|<\infty$ for the neighbourhood $K'$ of $K$. [[def-c-c-and-c-c-infinity-on-rn]] [[lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]] [[thm-heine-cantor-r]] [[def-continuity-real]]
 
[F4] **Localized-integral interfaces.** For a bounded predictable integrand $H$ on $[0,T]$: the integral $\int H\,dB^k$ is a continuous square-integrable martingale with $E(\int_0^TH\,dB^k)^2=E\int_0^TH^2ds$, the stopping identity identifies stopped integrals with integrals of $H1_{[0,\tau]}$, and a bounded integrand has finite energy. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-progressively-measurable-and-predictable-process]]
 
[F5] **Stopping times and localization.** For an open set $V\subseteq[0,\infty)\times\mathbb R^d$ and a continuous adapted $\mathbb R^d$-valued process, the first exit time $\inf\{t:(t,X_t)\notin V\}$ is a stopping time when the exit event is computed through the continuous path and the usual filtration conventions. If $K_n\subseteq\operatorname{int}K_{n+1}\subseteq U$ are compact with $\bigcup_nK_n=U$, then $\tau_{K_n}\uparrow\tau_U$ almost surely: every compact path segment lying in $U$ is covered by the increasing open sets $\operatorname{int}K_n$ and hence lies in one of them. [[def-continuous-time-stopping-time]] [[def-continuous-time-adapted-process-and-martingale]] [[def-continuity-real]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation and completeness interfaces. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Local reduction to a global test function: fix a compact $K\subseteq U$ with $(0,0)\in\operatorname{int}K$ and a cutoff $\chi$ and global function $g=\chi f$ as in [F3]. Applying the multidimensional Ito formula [F2] to $g$ along the class process $X=B$ of [F1], whose drift is $0$ and whose dispersion is the identity, gives $g(t,B_t)=g(0,0)+\int_0^t\bigl(\partial_tg+\tfrac12\Delta g\bigr)(s,B_s)ds+\sum_k\int_0^t\partial_{x_k}g(s,B_s)\,dB^k_s$ up to indistinguishability. [F1, F2, F3]
 
2.1 Cancellation on the stopped region: on $[0,\tau_K]$ the point $(s,B_s)$ lies in $K$ (compactness of $K$ and the definition of $\tau_K$ through the interior), and on a neighbourhood of $K$ one has $g=f$, so $\partial_tg+\tfrac12\Delta g=\partial_tf+\tfrac12\Delta f=0$ there and $\partial_{x_k}g=\partial_{x_k}f$ there; hence, on the event $\{t\le\tau_K\}$, $g(t,B_t)=f(t\wedge\tau_K,B_{t\wedge\tau_K})$ and the drift integral vanishes on $[0,t\wedge\tau_K]$. [F3, step 1.1]
 
3.1 The stopped identity: by the stopping identity of [F4] applied to the bounded (on $[0,t\wedge\tau_K]$) integrand $\nabla g(\cdot,B)$, the stochastic integral in step 1.1 equals $\sum_k\int_0^t1_{[0,\tau_K]}(s)\partial_{x_k}g(s,B_s)dB^k_s$ up to indistinguishability; substituting step 2.1 gives clause 1 of the statement. The integrand $1_{[0,\tau_K]}\partial_{x_k}f(\cdot,B)$ is predictable and bounded by $C_K$ on the neighbourhood of $K$ by [F3], so its integral has finite energy and is a continuous square-integrable martingale by [F4]; the stopped process is therefore a true martingale. [F3, F4, step 2.1]
 
4.1 Clause 2: fix $t\ge0$ and assume $E\int_0^t|\nabla f|^2(s,B_s)1_{[0,\tau_U)}(s)ds<\infty$, and choose a compact exhaustion $(K_n)$ as in [F5]. The predictable finite-energy integrands $H^{(n)}:=1_{[0,\tau_{K_n}]}\nabla f(\cdot,B)$ converge in $L^2([0,t]\times\Omega)$ to a predictable class $H$ whose value is $1_{[0,\tau_U)}\nabla f(\cdot,B)$ away from the single exit time on each path; this follows from $\tau_{K_n}\uparrow\tau_U$ and the displayed energy assumption. By the Ito isometry their integrals converge in $L^2$, defining the square-integrable martingale $N=H\cdot B$ in clause 2. For a deterministic $0\le r\le t$, the events $\{r<\tau_{K_n}\}$ increase to $\{r<\tau_U\}$; on each of them clause 1 gives $f(r,B_r)-f(0,0)=N^{(n)}_r$, and the $L^2$ convergence of $N^{(n)}_r$ to $N_r$ yields the asserted equality on $\{r<\tau_U\}$. This proves clause 2 without evaluating $f$ at the exit point, which need not belong to $U$. [F4, F5, step 3.1]
 
5.1 Clause 3 and boundary cases: for an increasing exhaustion $K_n$ of $U$ by compact sets, clause 1 exhibits each stopped piece $f(\cdot\wedge\tau_{K_n},B_{\cdot\wedge\tau_{K_n}})$ as a martingale, and [F5] gives $\tau_{K_n}\uparrow\tau_U$ almost surely, so the pieces form a localizing sequence on $[0,\tau_U)$; this proves clause 3. If $K$ is a singleton neighbourhood of the starting point or $U$ is all of space-time, the same argument applies; if $f$ is constant the gradient vanishes and both sides reduce to the constant value; if $d=1$ the formula involves the single integral $\int\partial_xf(s,B_s)dB_s$; the harmonicity equation is used only through the cancellation in step 2.1, so the spatial growth of $f$ outside $U$ is irrelevant; and AC enters only through [F6]. [F5, F6, step 3.1, step 4.1] ∎

## Source notes

Lawler, Section 3.7, records that space-time harmonic functions of Brownian motion produce local martingales via the Ito formula, with bounded-domain stopping making the integrals square-integrable. The cutoff reduction of step 1.1 is included because the Ito formula is stated for globally defined $C^{1,2}$ functions, while the equation is only assumed on the open set $U$.
