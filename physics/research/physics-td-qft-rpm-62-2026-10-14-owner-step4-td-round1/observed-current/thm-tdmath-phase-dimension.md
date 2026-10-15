---
id: thm-tdmath-phase-dimension
kind: theorem
title: "Regular rank form of the finite-component phase dimension count"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-c-one-map-and-local-inverse
  - thm-algebra-of-total-derivatives
  - thm-tdmath-local-implicit-rank
dependency_roles:
  def-c-one-map-and-local-inverse: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faye Jackson, MATH 395 notes, Implicit Function Theorem, pp. 99–106 and 127–132"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "K. C. Border, Notes on the Implicit Function Theorem, Theorems 3–5"
      url: "https://kcborder.caltech.edu/Courses/Notes/IFT.pdf"
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
verification:
  precheck: n/a
---

## Statement

Let $C\ge1$ be the number of components and $P\ge1$ the number of phases. Use common positive real coordinates $T,p$, expressed in fixed units if they are given a physical interpretation, and, for each phase $\alpha$, an interior composition vector

$$x^\alpha\in\Omega_C:=\{x\in\mathbb R^{C-1}:x_i>0,\ \sum_{i=1}^{C-1}x_i<1\},$$

with the convention $\mathbb R^0=\{0\}$ and $\Omega_1=\{0\}$. The final component fraction is $1-\sum_{i<C}x_i>0$. The ambient coordinate domain $U=(0,\infty)^2\times\Omega_C^P$ is open in $\mathbb R^n$, where $n=2+P(C-1)$. For each phase $\alpha$ and component $i$, let $\mu_i^\alpha(T,p,x^\alpha)$ be a real-valued $C^1$ coordinate function; these are mathematical maps and no thermodynamic potential or physical realization is assumed.

For $P\ge2$, define the $q=C(P-1)$ coexistence equations

$$F_{i,\alpha}(T,p,x^1,\ldots,x^P)=\mu_i^\alpha(T,p,x^\alpha)-\mu_i^1(T,p,x^1)=0\quad(1\le i\le C,\ 2\le\alpha\le P).$$

At a solution $z_*\in U$, assume some $q\times q$ derivative minor of $F:U\to\mathbb R^q$ is invertible. Then the local solution set is a graph of dimension

$$n-q=2+P(C-1)-C(P-1)=C-P+2.$$

For $P=1$ there are no coexistence equations and the coordinate domain itself has dimension $n=C+1=C-P+2$. In a specified reactive variant with $R\ge1$, let $\nu^1,\ldots,\nu^R\in\mathbb R^C$ be linearly independent dimensionless stoichiometric vectors and add the $R$ affinity equations $A_r=\sum_{i=1}^C\nu_i^r\mu_i^1=0$. If the combined equation map has an invertible $(q+R)\times(q+R)$ derivative minor at a solution and $q+R\le n$, its local zero set has dimension

$$n-q-R=C-P+2-R.$$

These are conditional local dimensions under the displayed nonsingular-minor assumptions. No dimension formula follows at singular solutions, on composition boundaries, or from equation counting alone; no empirical or general physical phase rule is asserted.

## Facts & Assumptions

**Given:** The finite integers, open coordinate domain, $C^1$ chemical-potential coordinate functions, coexistence equations, and nonsingular-minor assumptions in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability with continuous derivative-matrix entries.

[L1] [[thm-tdmath-local-implicit-rank]]: a $C^1$ map whose derivative has a specified invertible square minor has a local zero set that is a graph over the remaining coordinates, of dimension ambient dimension minus equation count.

[L2] [[thm-algebra-of-total-derivatives]]: finite sums and differences of $C^1$ real-valued maps are $C^1$.

## Proof

**Proof technique:** direct.

1.1 For $P\ge2$, $F$ has one scalar component for each pair $(i,\alpha)$ with $1\le i\le C$ and $2\le\alpha\le P$, so it has $q=C(P-1)$ components. Each is a difference of $C^1$ maps and therefore $F$ is $C^1$ on the open set $U$ by [F1, L2]. The assumed minor lets [L1] apply, giving local graph dimension $n-q$. Expanding $n=2+P(C-1)$ gives $n-q=2+PC-P-CP+C=C-P+2$. [F1, L1, L2, given, algebra]

1.2 If $P=1$, no phase-equality equations are indexed because there is no $\alpha\ge2$. The local solution set is all of the open domain $U$, which has $n=2+(C-1)=C+1=C-P+2$ coordinates. [given, algebra]

2.1 In the reactive variant, each added affinity is a finite linear combination of $C^1$ coordinate functions and is therefore $C^1$ by [F1, L2]; the combined map has $q+R$ scalar equations. Its stated minor satisfies [L1], so the graph dimension is $n-q-R=2+P(C-1)-C(P-1)-R=C-P+2-R$. Linear independence of the $\nu^r$ identifies $R$ distinct reaction directions, while the full-rank minor remains a separate necessary assumption on the equation derivatives. [F1, L1, L2, given, algebra] ∎
