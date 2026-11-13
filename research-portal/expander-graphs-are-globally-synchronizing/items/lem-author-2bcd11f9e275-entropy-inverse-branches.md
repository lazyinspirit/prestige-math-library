---
id: lem-author-2bcd11f9e275-entropy-inverse-branches
kind: lemma
title: Differentiable entropy inverse branches and shifted contracts
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-2bcd11f9e275-entropy-branch-geometry
  - math:thm-logarithm-derivative-and-integral
  - math:lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - math:def-ck-euclidean-maps-and-diffeomorphisms
  - math:lem-derivative-of-a-power
  - math:thm-algebra-of-derivatives
  - math:cor-differentiable-implies-continuous
  - math:thm-induction-principle
  - math:thm-natural-logarithm-laws
dependency_roles:
  lem-author-2bcd11f9e275-entropy-branch-geometry: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  math:def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  math:lem-derivative-of-a-power: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:cor-differentiable-implies-continuous: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

For $a>0$, let $I(a)=a\log a-a+1$. Write $a_-(t)\in(0,1)$ for the inverse of $I$ at $0<t<1$, and $a_+(t)\in(1,\infty)$ for the inverse at $t>0$. These functions are smooth, with $a_\pm\prime(t)=1/\log a_\pm(t)$. Thus $a_-$ decreases and $a_+$ increases. For real $s,t$, consider $I(1+c+s)=t$ in real $c$, with logarithmic admissibility $1+c+s>0$. If $t<0$ there is no solution; if $t=0$ the unique solution is $c=-s$; if $t>0$ the solutions are exactly $c=a_\pm(t)-1-s$ on the branches for which $a_\pm(t)$ is defined. Thus there are two solutions when $0<t<1$ and only the upper-branch solution when $t\ge1$.

## Facts & Assumptions

[F1] [[lem-author-2bcd11f9e275-entropy-branch-geometry]] defines $I$, gives $I(1)=0$, and supplies strict decrease on $(0,1)$, strict increase on $(1,\infty)$, their respective ranges $(0,1)$ and $(0,\infty)$, uniqueness, and $I\prime(a)=\log a\ne0$ off $a=1$.

[F2] [[math:thm-logarithm-derivative-and-integral]] gives $(\log a)\prime=1/a$ on $(0,\infty)$.

[F3] [[math:lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] gives a smooth local inverse wherever the derivative of a smooth Euclidean map is invertible.

[F4] [[math:def-ck-euclidean-maps-and-diffeomorphisms]] defines a smooth map on an open Euclidean set as a map of class $C^k$ for every $k\in\mathbb N$.

[F5] [[math:lem-derivative-of-a-power]] gives $(a^{-k})\prime=-k a^{-k-1}$ for every integer $k\ge1$ and $a>0$, since this domain excludes zero.

[F6] [[math:thm-algebra-of-derivatives]] gives $(\alpha f)\prime=\alpha f\prime$ for a real constant $\alpha$ and a differentiable real function at a limit point of its domain.

[F7] [[math:cor-differentiable-implies-continuous]] gives continuity at each domain limit point where a real function is differentiable.

[F8] [[math:thm-induction-principle]] gives the property form of induction: $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every $n\in\mathbb N$ imply $P(n)$ for every $n\in\mathbb N$.

[F9] [[math:thm-natural-logarithm-laws]] gives strict increase of $\log$ on $(0,\infty)$ and $\log 1=0$.

## Proof

**Given:** The variables and hypotheses of the Statement.

**Goal:** Establish the full Statement.

1.1 Every point of $(0,\infty)$ is a limit point of this domain, and every $a$ in it is nonzero. Apply F8 to the assertion $P(n)$ that the derivative formula below holds at order $k=n+1$. Its base case $n=0$, namely $(\log)\prime(a)=a^{-1}$, is F2. Induction using F5 and the scalar-multiple rule in F6 then gives $(\log)^{(k)}(a)=(-1)^{k-1}(k-1)!a^{-k}$ for every integer $k\ge1$: differentiating the formula at order $k$ multiplies its coefficient by $-k$ and replaces $a^{-k}$ by $a^{-k-1}$, yielding the formula at order $k+1$. Each displayed derivative is itself differentiable by F5 and F6, hence continuous by F7; the logarithm itself is continuous by F2 and F7. Since $I\prime=\log$ by F1, $I$ is continuous by F7 and every positive-order derivative of $I$ exists and is continuous. In dimension one the word derivatives in F4 are precisely ordinary iterated derivatives, so $I$ is smooth in that definition. [F1, F2, F4, F5, F6, F7, F8, induction, algebra]

1.2 Let $t_1<t_2$ lie in the range of the same branch. On the lower branch, if $a_-(t_1)\le a_-(t_2)$, then strict decrease of $I$ in F1 would give $t_1=I(a_-(t_1))\ge I(a_-(t_2))=t_2$, a contradiction. Hence $a_-(t_1)>a_-(t_2)$. On the upper branch, if $a_+(t_1)\ge a_+(t_2)$, strict increase of $I$ would similarly give $t_1\ge t_2$. Thus $a_+(t_1)<a_+(t_2)$, proving both asserted monotonicities directly from branch order. [F1]

2.1 On either open branch, $I\prime(a)=\log a\ne0$ by F1, so its one-dimensional derivative is invertible, with inverse multiplication by $1/\log a$. Step 1.1 and F3 therefore supply a smooth inverse locally at every point of the branch range. Branch uniqueness in F1 identifies every such local inverse with $a_\pm$ on its neighbourhood. Thus $a_\pm$ is smooth on each stated open range, with $a_\pm\prime(t)=1/\log a_\pm(t)$. Since F9 gives $\log a<\log 1=0$ for $0<a<1$ and $\log a>0$ for $a>1$, this derivative is negative on the lower branch and positive on the upper branch. [F1, F3, F4, F9, step 1.1, algebra]

3.1 For each real $s$, substitution of $a=1+c+s$ is a bijection between admissible real $c$ and positive $a$. F1 gives $I(1)=0$ and positive values on both open branches, so $I(a)\ge0$, with equality exactly at $a=1$. Hence there is no solution for $t<0$, and for $t=0$ the unique solution is $c=-s$, which is admissible because $1+c+s=1$. For $t>0$, a solution cannot have $a=1$, so F1 gives exactly $c=a_\pm(t)-1-s$ for each defined inverse value: two solutions for $0<t<1$, and just the upper-branch solution for $t\ge1$. In particular, shifted-root comparisons require both the chosen branch and the right-hand side; monotonicity of an unspecified root is insufficient. [F1, step 1.1, algebra] ∎
