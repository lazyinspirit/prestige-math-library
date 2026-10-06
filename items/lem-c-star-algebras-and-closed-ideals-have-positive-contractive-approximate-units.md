---
id: lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
kind: lemma
title: Positive contractive approximate units for C star algebras and ideals
deps:
  - lem-c-star-positive-calculus-and-order-estimates
  - def-c-star-algebra
  - thm-minimal-c-star-unitization
  - def-c-star-algebra-generated-by-a-normal-operator
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the positivity/order calculus and the unitization supplier; the net construction is choice-free."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras (complete 179-page text retrieved)"
      url: "https://arxiv.org/pdf/1211.3404"
      locator: "§4.2, Theorem 4.2.7 (positive contractive approximate units); §4.3, Propositions 4.3.1–4.3.2 (approximate units of closed ideals and automatic self-adjointness). Complete arguments read."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: approximate units of C*-algebras as used for nondegenerate representations"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Every C\*-algebra $A$ has a two-sided approximate
unit consisting of positive contractions: a net $(u_\lambda)$ with
$0\le u_\lambda\le1$, $\|u_\lambda\|\le1$ and $u_\lambda a\to a$,
$au_\lambda\to a$ in norm for every $a\in A$. Every closed two-sided ideal
$J$ of a C\*-algebra is self-adjoint and has such an approximate unit contained
in $J$.

## Facts & Assumptions

**Given:** AC; a complex C\*-algebra $A$ with ambient unital C\*-algebra $B$
($B=A$ if $A$ is unital, $B=A^+$ otherwise); a closed two-sided ideal
$J\subseteq A$.

[F1] Positivity and order toolkit of
[[lem-c-star-positive-calculus-and-order-estimates]]: $a^*a\ge0$; the positive
elements form a closed convex cone; $a\le b$ means $b-a\ge0$; if
$0\le x\le y$ then $\|x\|\le\|y\|$; conjugation preserves order; for a
self-adjoint $b\in B$ and continuous $f$ on $\sigma(b)\subseteq\mathbb R$ the
calculus element $f(b)\in C^*(1,b)\subseteq B$ satisfies
$\|f(b)\|=\sup_{\sigma(b)}|f|$, and if $f(0)=0$ and $b\in A$ with $A$
nonunital, then $f(b)\in A$. The unitization $A^+$ is a unital C\*-algebra
containing $A$ as a closed two-sided ideal of codimension one
([[thm-minimal-c-star-unitization]]).

[F2] A norm-closed $\ast$-subalgebra of a C\*-algebra is a C\*-algebra with
the inherited operations ([[def-c-star-algebra]],
[[def-c-star-algebra-generated-by-a-normal-operator]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a complex C\*-algebra $A$, its ambient unital C\*-algebra $B$, a finite set $E\subseteq A$ and a parameter $\delta>0$.

1.1 Put $b:=\sum_{a\in E}(a^*a+aa^*)\in A$. Then $b\ge0$ by [F1], and the continuous function $f_\delta(t):=t(t+\delta)^{-1}$ on $[0,\infty)$ satisfies $f_\delta(0)=0$ and $0\le f_\delta\le1$. Set $u:=f_\delta(b)\in A$ (the vanishing-at-$0$ clause of [F1]); then $0\le u\le1$, $\|u\|\le1$, and with $r:=1-u=f_\delta'(b)$ for $f_\delta'(t):=\delta(t+\delta)^{-1}$ one has $\|r\|\le1$ and, since $rbr$ has calculus transform $\delta^2t(t+\delta)^{-2}$ on $\sigma(b)$, $\|rbr\|=\sup_{t\in\sigma(b)}\delta^2t(t+\delta)^{-2}\le\sup_{t\ge0}\delta^2t(t+\delta)^{-2}=\delta/4$ (the supremum being attained at $t=\delta$). [F1, algebra]

2.1 For every $a\in E$: $aa^*\le b$ and $a^*a\le b$, because $b$ is their sum together with the positive summands attached to the remaining elements of $E$; hence $r(a^*a)r\le rbr$ and $r(aa^*)r\le rbr$ by conjugation positivity [F1]. Using the C\*-identity, $\|ar\|^2=\|r(a^*a)r\|\le\|rbr\|\le\delta/4$, and $\|ra\|=\|a^*r\|$ has square $\|r(aa^*)r\|\le\|rbr\|\le\delta/4$; in particular $\|a-au\|=\|ar\|\le\sqrt{\delta}/2$ and $\|a-ua\|=\|ra\|\le\sqrt{\delta}/2$. [F1, step 1.1]

3.1 Index the pairs $(E,n)$, $E\subseteq A$ finite, $n\ge1$, by $(E,n)\le(E',n')$ iff $E\subseteq E'$ and $n\le n'$, a directed set, and put $u_{E,n}:=f_{1/n^2}(b_E)$ with $b_E:=\sum_{a\in E}(a^*a+aa^*)$. By step 1.1 each $u_{E,n}$ is a positive contraction in $A$. For fixed $a\in A$, once $a\in E$ step 2.1 gives $\|a-au_{E,n}\|\le1/(2n)$ and $\|a-u_{E,n}a\|\le1/(2n)$, so both tend to $0$ along the directed set; hence $(u_{E,n})$ is a two-sided approximate unit of positive contractions. If $A=\{0\}$ the constant zero net serves. [step 1.1, step 2.1]

4.1 Let $J$ be a closed two-sided ideal of $A$. Then $J^*:=\{a^*:a\in J\}$ is a closed two-sided ideal as well, and $D:=J\cap J^*$ is a closed $\ast$-subalgebra, hence a C\*-algebra by [F2]; let $(u_\lambda)$ be a two-sided approximate unit of $D$ of positive contractions, by step 3.1 applied to $D$. For $a\in J$ one has $a^*a\in J$ and $a^*a=(a^*a)^*\in J^*$, so $a^*a\in D$, and $\|a(1-u_\lambda)\|^2=\|(1-u_\lambda)a^*a(1-u_\lambda)\|\le\|a^*a(1-u_\lambda)\|\to0$ by the approximate-unit property and $\|1-u_\lambda\|\le1$; taking adjoints gives $\|(1-u_\lambda)a^*\|=\|a(1-u_\lambda)\|\to0$, so $a^*=\lim_\lambda u_\lambda a^*$. Every $u_\lambda a^*$ lies in $J$, because $u_\lambda\in J$ and $J$ is a right ideal; since $J$ is closed, $a^*\in J$. Thus $J$ is self-adjoint, and applying step 3.1 to the C\*-algebra $J$ produces its two-sided approximate unit of positive contractions inside $J$. [F2, step 3.1]

5.1 The Axiom of Choice is inherited from the positivity/order calculus and unitization suppliers of [F1]; the construction of the nets uses no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 