---
id: thm-two-sided-exit-probability-for-brownian-motion
kind: theorem
title: "Two-sided Brownian exit probability"
status: draft
origin: pipeline
deps: [def-brownian-motion-started-at-x, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times, thm-strong-markov-property-of-brownian-motion, def-continuous-time-stopping-time, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, cor-law-of-the-brownian-maximum, def-standard-normal-and-normal-laws, lem-brownian-transition-semigroup-property, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-ftc-second-part, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-wiener-measure-on-continuous-path-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.5.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.7"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion
[[def-brownian-motion]], let $a<x<b$ be reals, and let $P_x$ be the law of the
shifted process $t\mapsto x+B_t$
[[def-brownian-motion-started-at-x]]. For $c\in\mathbb R$ let
$T_c:=\inf\{t\ge0:Z_t=c\}$ be the hitting time of the level $c$ for the
coordinate process $Z$ of the shifted law. Then
$$P_x(T_b<T_a)=\frac{x-a}{b-a}.$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, reals $a<x<b$, and the shifted law $P_x$.

[F1] For the shifted law $P_x$, hitting times satisfy $P_x(T_c<\infty)=P(T_{c-x}<\infty)$ and $P_x(T_b<T_a)=P(T_{b-x}<T_{a-x})$, because the shifted process is $x+B$. [[def-brownian-motion-started-at-x]]

[F2] One-dimensional Brownian motion hits every level almost surely: $P(T_c<\infty)=1$ for every $c$. [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]]

[F3] The hitting time $T_C$ of a closed set $C$ is a stopping time for the raw natural filtration and for the usual augmentation, and $M_t=\sup_{[0,t]}B$ satisfies $P(M_t\le y)=2\Phi(y/\sqrt t)-1$ for $y\ge0$, so $\int_0^\infty P(M_N\ge y)\,dy=2\sqrt N\int_0^\infty(1-\Phi(u))du<+\infty$ with $\int_0^\infty(1-\Phi(u))du=\int_0^\infty u\varphi(u)du=\varphi(0)$. [[lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times]] [[cor-law-of-the-brownian-maximum]] [[def-standard-normal-and-normal-laws]] [[thm-ftc-second-part]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Strong Markov: for an a.s. finite stopping time $\tau$ of the usual augmentation, the increment process $(B_{\tau+t}-B_\tau)_{t\ge0}$ is a Brownian motion independent of $\mathcal F_\tau$. [[thm-strong-markov-property-of-brownian-motion]] [[def-continuous-time-stopping-time]] [[def-natural-and-usual-augmented-brownian-filtrations]]

[F5] The law of $B_M$ is $N(0,M)$, which is centered and has no atoms; the tower identity gives $\mathbb E[\mathbb E[X|\mathcal G]]=\mathbb EX$. [[lem-brownian-transition-semigroup-property]] [[def-standard-normal-and-normal-laws]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]]

[F6] Dominated convergence and monotone convergence pass limits through integrals. [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]]

[F7] AC supplies the conditional-expectation and strong-Markov interfaces. [[def-axiom-of-choice]] [[def-wiener-measure-on-continuous-path-space]]

## Proof

**Proof technique:** direct.

1.1 By [F1] it suffices to prove the case $a<0<x$ with the unshifted law: $P_x(T_b<T_a)=P(T_{b-x}<T_{a-x})$ and $(x-a)/(b-a)=\bigl(0-(a-x)\bigr)/\bigl((b-x)-(a-x)\bigr)$, since $(b-x)-(a-x)=b-a$ and $a-x<0<b-x$. So assume $a=A<0<B=b$ and put $T:=T_A\wedge T_B$. Then $T\le T_A<\infty$ almost surely by [F2], and $T$ is a stopping time of the usual augmentation because $\{A,B\}$ is closed, by [F3]. For every $u<T$ the path satisfies $B_u\in(A,B)$, since leaving $(A,B)$ would require hitting $A$ or $B$ by continuity. [F1, F2, F3, given]

1.2 By [F4] applied at the a.s. finite stopping time $T$, the process $W:=(B_{T+t}-B_T)_{t\ge0}$ is a Brownian motion independent of $\mathcal F_T$. Consequently, for every $\mathcal F_T$-measurable random variable $R$ with values in $[0,N]$ one has $\mathbb E[W_R\,|\,\mathcal F_T]=0$ almost surely. Indeed, if $R$ is countably valued with values $r_j\in[0,N]$, then $W_R=\sum_jW_{r_j}1_{\{R=r_j\}}$ and for $G\in\mathcal F_T$ one has $\int_GW_R\,dP=\sum_jP(G\cap\{R=r_j\})\,\mathbb EW_{r_j}=0$, because $G\cap\{R=r_j\}\in\mathcal F_T$ is independent of $W_{r_j}$ and $\mathbb EW_{r_j}=0$; for general $R$ the dyadic ceilings $R_k:=\min(2^{-k}\lceil2^kR\rceil,N)$ decrease to $R$, so $W_{R_k}\to W_R$ almost surely and $|W_{R_k}|\le S:=\sup_{[0,N]}|W|$, whose expectation is finite by [F3]; dominated convergence [F6] gives $\int_GW_R\,dP=\lim_k\int_GW_{R_k}\,dP=0$ for every $G\in\mathcal F_T$, and [F5]'s uniqueness identifies $\mathbb E[W_R|\mathcal F_T]=0$. [F3, F4, F5, F6]

2.1 Fix $M>\max\{|A|,|B|\}$ and let $R:=(M-T)1_{\{T\le M\}}$, an $\mathcal F_T$-measurable random variable with values in $[0,M]$. On $\{T\le M\}$ one has $B_M-B_T=W_{M-T}=W_R$, and on $\{T>M\}$ both $B_M-B_{T\wedge M}$ and $W_R=W_0$ vanish; hence $B_M-B_{T\wedge M}=W_R$. Taking expectations and using step 1.2 with [F5]'s tower identity, $\mathbb E[B_M-B_{T\wedge M}]=0$, so $\mathbb E[B_{T\wedge M}]=\mathbb E[B_M]=0$, the last equality because the law of $B_M$ is the centered $N(0,M)$. [F5, step 1.2]

3.1 Let $M\to\infty$. The random variables $B_{T\wedge M}$ converge almost surely to $B_T$ because $T<\infty$ almost surely and the paths are continuous, and they are bounded by $\max\{|A|,|B|\}$: for $t<T$ the value $B_t$ lies in $(A,B)$ by step 1.1, and $B_T\in\{A,B\}$. Dominated convergence [F6] therefore gives $\mathbb E[B_T]=0$. [F6, step 1.1, step 2.1]

4.1 The events $\{T_B<T_A\}$ and $\{T_A<T_B\}$ are disjoint and their union is almost surely the whole space, because $T<\infty$ almost surely and $T_A\ne T_B$ almost surely (the path cannot be at two distinct levels at one time). On the first event $B_T=B$ and on the second $B_T=A$, so $0=\mathbb E[B_T]=B\,P(T_B<T_A)+A\,(1-P(T_B<T_A))$; solving gives $P(T_B<T_A)=-A/(B-A)$. [step 3.1]

5.1 Undoing the shift with step 1.1, $P_x(T_b<T_a)=P(T_{b-x}<T_{a-x})=\frac{-(a-x)}{(b-x)-(a-x)}=\frac{x-a}{b-a}$, which is the assertion. [step 1.1, step 4.1]

6.1 The endpoint cases are covered: the strict inequalities $a<x<b$ keep $T_a$ and $T_b$ distinct from the starting level; the truncation parameter $M$ is chosen larger than both endpoints and then sent to infinity in step 3.1; the case $A=B$ is excluded because $a<b$; and $T_A=T_B$ is the null event excluded in step 4.1. AC is used only through [F7] in the conditional-expectation and strong-Markov interfaces. [F4, F7, given, step 4.1] ∎

## Source notes

Durrett, Theorem 7.5.3, proves the formula by bounded harmonicity of the exit probability; Sousi, Section 6.7, uses the same value. The proof above instead verifies the centered martingale identity $\mathbb E[B_T]=0$ through the strong Markov restart at $T$, which keeps every step within the stopping-time and maximum machinery already established on this page.
