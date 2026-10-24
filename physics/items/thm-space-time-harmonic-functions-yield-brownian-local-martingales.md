---
id: thm-space-time-harmonic-functions-yield-brownian-local-martingales
kind: theorem
title: "Space-time harmonic functions yield Brownian local martingales up to exit lifetime"
status: published
origin: pipeline
deps: [thm-heine-borel-rn, lem-distance-to-set-is-lipschitz, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-cantor-metric, thm-dominated-convergence, thm-multidimensional-ito-formula-for-brownian-driven-processes, def-continuous-brownian-ito-process, def-d-dimensional-brownian-motion, def-brownian-motion, def-c-c-and-c-c-infinity-on-rn, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff, def-locally-square-integrable-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, lem-adapted-continuous-processes-are-progressively-measurable, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-maximal-bound-for-the-ito-integral, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-continuity-real, thm-heine-cantor-r, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let
$U\subseteq[0,\infty)\times\mathbb R^d$ be open in the relative topology, and let
$f\in C^{1,2}(U)$ satisfy the space-time harmonicity equation
$$\partial_tf+\tfrac12\Delta f=0\qquad\text{on }U,$$
where $\Delta=\sum_{k=1}^d\partial^2_{x_k}$ is the spatial Laplacian. Let $B$ be
a standard $d$-dimensional Brownian motion adapted to a filtration satisfying
the usual conditions, and assume explicitly that $B_t-B_s$ is independent of
$\mathcal F_s$ for every $0\le s<t$, with $(0,0)\in U$. Use its
everywhere-continuous adapted representative obtained by setting $B$ to zero
off the measurable full event on which it is continuous and $B_0=0$; the usual
conditions put that event in $\mathcal F_0$. This preserves all vector Brownian
laws and the vector increment-independence hypothesis. All exit times and
integrands below use this representative. For a compact
$K\subseteq U$ put $\tau_K:=\inf\{t\ge0:(t,B_t)\notin\operatorname{int}K\}$,
where the interior is relative to $[0,\infty)\times\mathbb R^d$.

1. For every compact $K\subseteq U$ with $(0,0)\in\operatorname{int}K$, up to
   indistinguishability
   $$f(t\wedge\tau_K,B_{t\wedge\tau_K})=f(0,0)+\sum_{k=1}^d\int_0^t1_{[0,\tau_K]}(s)\partial_{x_k}f(s,B_s)\,dB^k_s,$$
   and the right-hand integral is a continuous square-integrable martingale;
   thus each stopped piece is a true martingale. In this display the stopped
   gradient is the predictable bounded extension supplied by [F3], equal to
   $\nabla f(s,B_s)$ through $\tau_K$ and zero afterwards; it does not evaluate
   $f$ outside $U$.
2. If $\tau_U:=\inf\{t\ge0:(t,B_t)\notin U\}$ and
   $E\int_0^t|\nabla f|^2(s,B_s)1_{[0,\tau_U)}(s)\,ds<\infty$ for a given
   $t\ge0$, then the process
   $$N_r:=\sum_{k=1}^d\int_0^r1_{[0,\tau_U)}(s)\partial_{x_k}f(s,B_s)\,dB^k_s, \qquad 0\le r\le t,$$
   is a square-integrable martingale, and for every $0\le r\le t$ one has
   $$f(r,B_r)-f(0,0)=N_r\qquad\text{on the event }\{r<\tau_U\}.$$
   No value of $f$ at the exit point $(\tau_U,B_{\tau_U})\notin U$ is asserted.
3. On the stochastic interval $[0,\tau_U)$ the process $t\mapsto f(t,B_t)$,
   read through continuous versions, is a continuous local martingale **up to
   lifetime $\tau_U$**: for any time-capped compact exhaustion satisfying
   $K_n\subseteq\operatorname{int}K_{n+1}$ and $\bigcup_nK_n=U$, after discarding finitely many initial sets so that $(0,0)\in\operatorname{int}K_1$, its stopped
   pieces at $\tau_{K_n}$ are true martingales and
   $\tau_{K_n}\uparrow\tau_U$ almost surely. This is not a claim that
   $f(t,B_t)$ is defined after the lifetime or that these times tend to infinity.

## Facts & Assumptions

**Given:** AC, an open $U\subseteq[0,\infty)\times\mathbb R^d$, a function $f\in C^{1,2}(U)$ with $\partial_tf+\tfrac12\Delta f=0$ on $U$, a standard $d$-dimensional Brownian motion $B$ adapted to a usual filtration with each vector increment independent of the past filtration, its $\mathcal F_0$-normalized everywhere-continuous representative, and compact sets $K\subseteq U$.
 
[F1] **$B$ is a continuous Brownian Ito process.** The vector filtration hypothesis implies the scalar standing hypothesis (H) for every coordinate. The normalized $B$ is therefore a continuous Brownian Ito process with drift $0$ and dispersion $\delta^{ik}$. The one-block elementary process $1_{(0,T]}$ represents the constant integrand class and has integral $B^i_t-B^i_0=B^i_t$; its localized integral is $B^i$ up to indistinguishability. [[def-continuous-brownian-ito-process]] [[def-d-dimensional-brownian-motion]] [[def-brownian-motion]] [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-localized-ito-integral]]
 
[F2] **Multidimensional Ito formula.** For a $C^{1,2}$ function $g$ and a continuous Brownian Ito process $X$, $dg(t,X_t)=\bigl(\partial_tg+\sum_ib^i\partial_ig+\tfrac12\sum_{i,j}(\sigma\sigma^{\mathsf T})^{ij}\partial_i\partial_jg\bigr)(t,X_t)dt+\sum_{i,k}\partial_ig(t,X_t)\sigma^{ik}_t\,dB^k_t$ up to indistinguishability. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]
 
[F3] **Cutoffs on compact subsets and local boundedness.** Because $U$ is relatively open, the formula $\widetilde f(t,x)=3f(-t,x)-2f(-2t,x)$ for small $t<0$ gives a $C^{1,2}$ extension across $t=0$ on a Euclidean-open neighbourhood of each compact $K\subseteq U$: value and time derivative match because $3-2=1$ and $-3+4=1$, and the spatial derivatives match by the same value identity. Choose compact neighbourhoods $K\subseteq\operatorname{int}K'$ there. The cutoff lemma gives a continuous compactly supported cutoff equal to $1$ on $K'$; convolving it with a sufficiently small compactly supported mollifier gives $\chi\in C_c^\infty$ equal to $1$ near $K$ and supported in the extension domain. Then $g:=\chi\widetilde f$, extended by zero, is a global $C^{1,2}$ function and agrees with $f$ and its displayed derivatives near $K$. In particular $\nabla f$ is bounded there. [[def-c-c-and-c-c-infinity-on-rn]] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]] [[thm-heine-cantor-metric]] [[thm-heine-borel-rn]] [[def-continuity-real]]
 
[F4] **Localized-integral interfaces.** For a bounded predictable integrand $H$ on $[0,T]$: the integral $\int H\,dB^k$ is a continuous square-integrable martingale with $E(\int_0^TH\,dB^k)^2=E\int_0^TH^2ds$, the stopping identity identifies stopped integrals with integrals of $H1_{[0,\tau]}$, and a bounded integrand has finite energy. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-progressively-measurable-and-predictable-process]]
 
[F5] **Stopping times and exhaustion.** Put $S=[0,\infty)\times\mathbb R^d$. For a relatively open $V\subseteq S$ with nonempty complement $C=S\setminus V$, the distance $q(y)=d(y,C)$ is continuous and zero exactly on $C$. The Lipschitz estimate is supplied by [[lem-distance-to-set-is-lipschitz]]; positivity outside $C$ follows from an open ball disjoint from this closed set. For $Y_s=(s,B_s)$, continuity and compactness of $Y([0,t])$ give
$$\{\tau_V\le t\}=\{\inf_{s\in([0,t]\cap\mathbb Q)\cup\{t\}}q(Y_s)=0\}.$$
Indeed the continuous distance attains its minimum on the compact path image, and a zero minimum is a hit by time $t$; approximation by rational times gives the same infimum, including $t=0$. The displayed event is $\mathcal F_t$-measurable. If $V=S$, its exit time is infinity directly. For exhaustion, set $a(y)=\min(1,d(y,S\setminus U))$ when the complement is nonempty, and $a=1$ when $U=S$. Let
$$L_n=\{(s,x)\in S:s\le n,\ |x|\le n,\ a(s,x)\ge1/n\}.$$
These sets are closed and bounded, hence compact, contained in $U$, satisfy $L_n\subseteq\operatorname{int}_S L_{n+1}$, and cover $U$. Discard finitely many initial sets so that the origin belongs to the first interior, and denote the tail by $K_n$. The time caps remain finite. For any such nested exhaustion, every compact path segment before $\tau_U$ is covered by finitely many interiors, hence lies in one. Thus $\tau_{K_n}\uparrow\tau_U$. Moreover $\tau_{K_n}<\tau_U$: the finite exit point from $\operatorname{int}K_n$ lies in $K_n\subseteq U$, and continuity gives a positive interval still in $U$ after this time. Consequently $[0,\tau_U)=\bigcup_n[0,\tau_{K_n}]$, so its indicator is predictable by the stopping-indicator generators. [[def-continuous-time-stopping-time]] [[def-progressively-measurable-and-predictable-process]] [[thm-heine-borel-rn]] [[thm-continuous-image-of-a-compact-space-is-compact]] [[thm-heine-cantor-metric]]


[F7] **Finite-energy approximation.** Dominated convergence applies on the product of Lebesgue measure on a finite interval and probability when the squared integrand error has the stated integrable majorant. [[thm-dominated-convergence]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation and completeness interfaces, and any countable selection of compact cutoffs. The distance exhaustion is explicit. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Local reduction to a global test function: fix a compact $K\subseteq U$ with $(0,0)\in\operatorname{int}K$ and a cutoff $\chi$ and global function $g=\chi\widetilde f$ as in [F3]. Applying the multidimensional Ito formula [F2] to $g$ along the class process $X=B$ of [F1], whose drift is $0$ and whose dispersion is the identity, gives $g(t,B_t)=g(0,0)+\int_0^t\bigl(\partial_tg+\tfrac12\Delta g\bigr)(s,B_s)ds+\sum_k\int_0^t\partial_{x_k}g(s,B_s)\,dB^k_s$ up to indistinguishability. [F1, F2, F3]
 
2.1 Cancellation on the stopped region: the compact set $K$ has bounded time projection, so $\tau_K<\infty$. Continuity of $s\mapsto(s,B_s)$ and the definition through the relative interior give $(s,B_s)\in K$ for $0\le s\le\tau_K$. On a neighbourhood of $K$ one has $g=f$, so $\partial_tg+\tfrac12\Delta g=0$ and $\partial_{x_k}g=\partial_{x_k}f$ there. Apply the stopping identity to the formula of step 1.1: its drift vanishes through $\tau_K$, and its left side becomes $f(t\wedge\tau_K,B_{t\wedge\tau_K})$. [F3, step 1.1]
 
3.1 The stopped identity: the stopping identity of [F4] changes the stochastic term of step 1.1 into $\sum_k\int_0^t1_{[0,\tau_K]}(s)\partial_{x_k}g(s,B_s)dB^k_s$. This predictable integrand is bounded, and through $\tau_K$ it equals $\partial_{x_k}f(s,B_s)$; after $\tau_K$ it is declared zero. Substituting step 2.1 gives clause 1. The finite-energy integral is a continuous square-integrable martingale, so the stopped process is a true martingale. [F3, F4, step 2.1]
 
4.1 Clause 2: fix $t\ge0$ and assume the displayed energy is finite. Define $H(s,\omega)=\nabla f(s,B_s(\omega))$ when $(s,B_s(\omega))\in U$ and $H=0$ otherwise. The zero extension of $\nabla f$ from the relatively open set $U$ is a Borel function on $S$. The map $(s,\omega)\mapsto(s,B_s(\omega))$ is predictable by the everywhere-continuous adapted representative and the predictable generators, so this composition $H$ is predictable. By [F5] the strict-lifetime indicator is predictable too, and $1_{[0,\tau_U)}H$ has finite energy by assumption. For an exhaustion from [F5], the bounded stopped extensions $H^{(n)}:=1_{[0,\tau_{K_n}]}\nabla g_n(\cdot,B)$ of clause 1 converge to $1_{[0,\tau_U)}H$ in $L^2([0,t]\times\Omega)$; indeed [F5] gives $H^{(n)}=1_{[0,\tau_{K_n}]}H$ and these indicators increase pointwise to $1_{[0,\tau_U)}$. The squared difference is bounded by $|H|^2 1_{[0,\tau_U)}$, integrable on $[0,t]\times\Omega$ by assumption, so dominated convergence applies. This uses the zero-extension convention also in the energy hypothesis. The isometry gives $N^{(n)}_r\to N_r$ in $L^2$ for every $r\le t$, and $N$ is a square-integrable martingale. Put $E_n=\{r<\tau_{K_n}\}$ and $E=\{r<\tau_U\}$. Then $E_n\uparrow E$, and on $E_n$ clause 1 gives $N^{(n)}_r=f(r,B_r)-f(0,0)$. Hence for every $\varepsilon>0$, $$P\bigl(E\cap\{|N_r-(f(r,B_r)-f(0,0))|>\varepsilon\}\bigr) \le P(E\setminus E_n)+P(|N_r-N^{(n)}_r|>\varepsilon),$$ which tends to zero. This proves the asserted equality without evaluating $f$ at the exit point. [F4, F5, F7, step 3.1]
 
5.1 Clause 3 and boundary cases: clause 1 exhibits each stopped piece for a time-capped exhaustion as a martingale, and [F5] gives $\tau_{K_n}\uparrow\tau_U$ almost surely; this is exactly the lifetime-local assertion of clause 3. If $U$ is all of relative space-time, one may choose the usual expanding time-space cylinders and the lifetime is infinity. If $f$ is constant the gradient vanishes; if $d=1$ there is one stochastic integral; and the growth of $f$ outside the localized compact sets is irrelevant. AC enters only through [F6]. [F5, F6, step 3.1, step 4.1] ∎

## Source notes

Lawler, Section 3.7, records that space-time harmonic functions of Brownian motion produce local martingales via the Ito formula, with bounded-domain stopping making the integrals square-integrable. The cutoff reduction of step 1.1 is included because the Ito formula is stated for globally defined $C^{1,2}$ functions, while the equation is only assumed on the open set $U$.
