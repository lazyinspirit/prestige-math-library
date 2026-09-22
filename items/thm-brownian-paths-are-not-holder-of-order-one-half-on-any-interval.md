---
id: thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval
kind: theorem
title: "Brownian paths are nowhere locally one-half Hölder"
status: published
origin: pipeline
deps: [def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, lem-rat-embeds-dense, def-axiom-of-choice, lem-probability-measure-basic-identities]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Section 6.3 (subcritical Hölder) and Section 6.4, Proposition 6.4.1 (the proved alpha > 1/2 statement)"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.1, Theorem 7.1.6 and the remark following it"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely
there is no nondegenerate interval $I\subseteq[0,\infty)$ and no finite
constant $C$ such that
$$|B_t-B_s|\le C|t-s|^{1/2}\qquad\text{for every }s,t\in I .$$
The assertion concerns intervals only: no claim is made here about the
exceptional times at which a deterministic pointwise one-half Hölder bound
might hold, and no uniform modulus theorem is asserted.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion B on nonnegative times.

[F1] For every finite list $0=t_0<t_1<\cdots<t_n$ the increments $B_{t_j}-B_{t_{j-1}}$ are mutually independent with laws $N(0,t_j-t_{j-1})$. [[def-brownian-motion]]

[F2] $N(0,h)$ is by definition the law of $\sqrt h\,Z$ for $Z\sim N(0,1)$, and $Z$ has the strictly positive density $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$ of total mass one; hence $p_C:=P(|Z|\le C)<1$ for every finite real $C$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F3] The rationals are dense in $\mathbb R$: every nondegenerate interval contains a nondegenerate interval with rational endpoints. [[lem-rat-embeds-dense]]

[F4] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

[F5] Countable unions of measurable null events are null by countable subadditivity. [[lem-probability-measure-basic-identities]]

## Proof

**Proof technique:** direct.

1.1 Fix rationals $0\le a<b$ and an integer $C\ge1$, and put $$E_{a,b,C}:=\bigcap_{r,q\in\mathbb Q\cap[a,b]}\{|B_r-B_q|\le C|r-q|^{1/2}\}.$$ This is measurable because it is a countable intersection of coordinate events.  For every integer $n\ge1$, with $h=(b-a)/n$ and grid points $t_k=a+kh$ (all rational), the event $E_{a,b,C}$ is contained in $A_n:=\{\omega:\ |B_{t_k}(\omega)-B_{t_{k-1}}(\omega)|\le C\sqrt h$ for $k=1,\dots,n\}$, because consecutive grid points are rational pairs in $[a,b]$ at distance $h$. [given, F1]

2.1 Insert the endpoint 0 before a when a>0; [F1] then applies to the increasing grid starting at zero, and its subfamily of increments on [a,b] is independent. By [F1] and [F2] the increments $B_{t_k}-B_{t_{k-1}}$, $k=1,\dots,n$, are independent with the law of $\sqrt h\,Z$, so each satisfies $P(|B_{t_k}-B_{t_{k-1}}|\le C\sqrt h)=P(|Z|\le C)=p_C<1$, and independence gives $P(A_n)=p_C^{\,n}$; hence $P(E_{a,b,C})\le p_C^{\,n}$ for every $n\ge1$ and therefore $P(E_{a,b,C})=0$. For completeness, the standard normal probability of [C+1,C+2] is at least $e^{-(C+2)^2/2}/\sqrt{2\pi}>0$, proving p_C<1 for the positive integers C used here. [F1, F2, step 1.1]

3.1 The family of ordered pairs of rationals and of integers is countable, so [step 2.1], countable subadditivity [F5] and [F4] give $P(\bigcup_{0\le a<b,\ a,b\in\mathbb Q}\bigcup_{C\ge1}E_{a,b,C})=0$. [step 2.1, F4, F5]

4.1 On the complement of that null event there is no nondegenerate interval $I$ with a finite one-half Hölder constant: if $I$ were such an interval with any finite real constant $C$, then by [F3] we could choose rationals $0\le a<b$ with $[a,b]\subseteq I$, and with $C':=\lceil\max(C,1)\rceil\in\mathbb N$ the bound would in particular hold for all rational $s,t\in[a,b]$, that is, $E_{a,b,C'}$ would occur. [step 3.1, F3]

5.1 The intended cases are covered: the interval is required to be nondegenerate, so the empty and singleton interval cases are excluded; the value $n=1$ in [step 2.1] is the degenerate single-increment case of the estimate and already gives $P(A_1)=p_C<1$; the union over integers $C\ge1$ covers every finite real constant up to rounding up; the estimates in [step 2.1] hold for every positive integer n and imply nullness without requiring the mesh events to be nested; and AC is used only through [F4] via [F1] and [F2]. [step 2.1, step 3.1, step 4.1, F4, given] ∎

## Source notes

Durrett's remark after Theorem 7.1.6 records that one-half is the critical exponent for *uniform* interval bounds and that the exceptional set of times at which a pointwise one-half Hölder bound holds is not ruled out by this theorem. Yoshida proves the subcritical uniform statement in Section 6.3 and the nowhere alpha-Hölder statement for alpha > 1/2 in Section 6.4 of the same notes (Proposition 6.4.1 there); the argument above is instead the direct mesh computation: on a fixed rational interval a one-half Hölder bound forces all $n$ increments of the uniform $n$-mesh to be of size at most $C\sqrt h$, an event of probability $p_C^{\,n}$ whose intersection over $n$ is null.
