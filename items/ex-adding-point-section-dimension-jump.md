---
id: ex-adding-point-section-dimension-jump
kind: example
title: "The jump l(D+p) - l(D) ranges from zero to the residue degree"
status: draft
origin: pipeline
deps:
  - cor-picard-projective-line-integers
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-order-codimension-one-rational-function
  - def-principal-weil-divisor-and-class-group
  - def-residue-field-scheme-point
  - def-riemann-roch-space-of-divisor
  - def-twisting-sheaf-proj
  - lem-divisor-order-monotonicity-sections
  - lem-projective-line-divisors-classified-by-degree
  - lem-riemann-roch-space-finite-dimensional
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cartier-weil-divisors-curves-agree
  - thm-local-ring-smooth-curve-dvr
  - thm-polynomial-ring-over-a-field-is-a-ufd
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
generation:
  role: example
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice inherited from the current divisor, residue-field and projective-line suppliers.

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]), let $D$ be a divisor and let $p$
be a closed point. By [[lem-divisor-order-monotonicity-sections]] the
quotient $L(D+p)/L(D)$ embeds $k$-linearly into the residue field
$\kappa(p)$, so the jump is bounded:
$$0\le l(D+p)-l(D)\le[\kappa(p):k],$$
and both extremes occur. The intermediate values occur as well: the jump need
not be $0$ or $[\kappa(p):k]$, as case (iv) below shows in residue degree two.

On $\mathbb P^1_k$, with coordinate $t=x_1/x_0$ and point at infinity
$\infty=[0:1]=V(x_0)$
([[lem-projective-line-divisors-classified-by-degree]]):

1. for $D=-2[q]$ and $p=[a]$ with $q=[0]$ and $a\ne0$ rational, both $D$ and
   $D+p=-2[q]+[a]$ have negative degree, so $L(D)=L(D+p)=0$ and the jump is
   $0$;
2. for $D=-[q]$ and $p=[a]$ with $a\ne q$ rational, $L(D)=0$ while $L(D+p)$ is
   the one-dimensional space spanned by $(t-q)/(t-a)$, whose divisor is
   $[q]-[a]=-(D+p)$, so the jump is $1=[\kappa(p):k]$;
3. over $k=\mathbb R$, for $D=0$ and $p=V(t^2+1)$ of residue degree two,
   $L(0)$ is the constant field with $l(0)=1$, while $p$ is linearly
   equivalent to $2[\infty]$ because
   $\operatorname{div}(t^2+1)=[p]-2[\infty]$, so
   $\mathcal O(p)\cong\mathcal O(2)$ and
   $L(p)=\{A/(t^2+1):\deg A\le2\}$ is three-dimensional: the jump is
   $2=[\kappa(p):k]$;
4. over $k=\mathbb R$, for $D=-2[\infty]$ and $p=V(t^2+1)$, one has $L(D)=0$
   and $L(D+p)$ is the one-dimensional space spanned by $1/(t^2+1)$, so the
   jump is $1$ inside residue degree $2$.

The residue-degree case therefore really occurs, the bound is sharp in both
extremes, and the jump is in general an intermediate integer of the interval
$[0,[\kappa(p):k]]$.

*Scaffold repair, recorded for the owner.* The frozen scaffold statement
claimed that "the jump $l(D+p)-l(D)$ is either $0$ or $[\kappa(p):k]$". That
strengthening is false: case (iv) exhibits a jump of $1$ with residue degree
$2$. The statement above keeps every promised instance (i)-(iii) with their
computations, corrects the general claim to the true bound
$0\le l(D+p)-l(D)\le[\kappa(p):k]$ of
[[lem-divisor-order-monotonicity-sections]], and adds case (iv) as the
disproof of the false reading. The scaffold's parenthetical in (ii),
"a function with divisor $[a]-[q]$", is also corrected: the spanning function
$(t-q)/(t-a)$ has divisor $[q]-[a]=-(D+p)$.

The current [[lem-divisor-order-monotonicity-sections]] supplies the general
residue-field bound. The current Riemann-Roch-space, principal-divisor,
Cartier-sheaf, and Cartier-to-Weil interfaces used for the displayed
projective-line calculations are
[[def-riemann-roch-space-of-divisor]],
[[def-principal-weil-divisor-and-class-group]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]],
[[thm-cartier-divisors-mod-principal-to-picard]] and
[[cor-picard-projective-line-integers]].

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current divisor, residue-field and projective-line suppliers; a field $k$, a smooth proper geometrically integral curve $C$, a divisor $D$, a closed point $p$, and the computations on $\mathbb P^1_k$ listed in the statement.

[F1] On $\mathbb P^1_k$ with coordinate $t=x_1/x_0$: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$; for a monic irreducible $g\in k[t]$ of degree $d$ the closed point $p_g=V(g)\subseteq\operatorname{Spec}k[t]$ has $[\kappa(p_g):k]=d$ and $\operatorname{div}(g)=[p_g]-d[\infty]$; $\operatorname{div}(x_0)=[\infty]$ and $\mathcal O(1)\cong\mathcal O(\infty)$ with $\deg_k\mathcal O(1)=1$; every divisor on $\mathbb P^1_k$ is linearly equivalent to $\deg_k(D)[\infty]$ ([[lem-projective-line-divisors-classified-by-degree]], [[def-twisting-sheaf-proj]]).

[F2] Every nonzero $A\in k[t]$ factors as a unit times a product of monic irreducibles ([[thm-polynomial-ring-over-a-field-is-a-ufd]]); for a monic irreducible $g$ the point $p_g$ is a closed point of $U_0=\operatorname{Spec}k[t]$ with residue degree $d=\deg g$ and $\operatorname{ord}_{p_g}(g)=1$, $\operatorname{ord}_x(g)=0$ for every other closed point $x$ of $U_0$, and $\operatorname{ord}_\infty(g)=-d$ ([[lem-projective-line-divisors-classified-by-degree]], [[def-order-codimension-one-rational-function]]).

[F3] The order $\operatorname{ord}_x$ at a closed point is a group homomorphism $k(C)^\times\to\mathbb Z$ with $\operatorname{ord}_x(fg)=\operatorname{ord}_x(f)+\operatorname{ord}_x(g)$, $\operatorname{ord}_x(f^{-1})=-\operatorname{ord}_x(f)$; $\operatorname{ord}_x(f)\ge0$ exactly for $f\in\mathcal O_{C,x}$, and $\operatorname{ord}_x(f)=0$ exactly for units. The local ring $\mathcal O_{C,p}$ is a discrete valuation ring with uniformizer $t_p$ and residue field $\kappa(p)=\mathcal O_{C,p}/(t_p)$, and $[\kappa(p):k]=\dim_k\kappa(p)$ ([[def-order-codimension-one-rational-function]], [[thm-local-ring-smooth-curve-dvr]], [[def-residue-field-scheme-point]], [[def-degree-divisor-proper-curve]]).

[F4] The current [[def-riemann-roch-space-of-divisor]] gives the order description of $L(D)$ and its global-section identification; [[def-principal-weil-divisor-and-class-group]] gives the additive divisor convention. The current [[def-invertible-sheaf-of-cartier-divisor]], [[thm-cartier-weil-divisors-curves-agree]], [[thm-cartier-divisors-mod-principal-to-picard]] and [[cor-picard-projective-line-integers]] identify the attached sheaves, including $\mathcal O(p)\cong\mathcal O(2)$ in case (3).

[F5] The general bound is [[lem-divisor-order-monotonicity-sections]]: $L(D)\subseteq L(D+p)$, the quotient $L(D+p)/L(D)$ embeds $k$-linearly into $\kappa(p)$, whence $0\le l(D+p)-l(D)\le[\kappa(p):k]$, and the spaces are finite-dimensional with $l(D)=\dim_kL(D)=h^0(D)$ ([[def-little-l-divisor]], [[lem-riemann-roch-space-finite-dimensional]], [[def-dimension]]).

[F6] The Axiom of Choice enters only through the suppliers of [F1]-[F5], exactly those recorded there; the explicit computations below select only the normalized spanning functions exhibited ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct computation of the order conditions on $\mathbb P^1_k$ in each of the four cases, with the bound of the one-point lemma supplying the general inequality.

1.1 Set-up. By [F5] one has $L(D)\subseteq L(D+p)$ and $0\le l(D+p)-l(D)\le[\kappa(p):k]$ for every divisor $D$ and closed point $p$ on $C$; by [F4] a rational function $f\in k(C)^\times$ lies in $L(D)$ if and only if $\operatorname{ord}_x(f)+n_x\ge0$ for every closed point $x$, where $n_x$ is the coefficient of $D$. On $\mathbb P^1_k$ every nonzero rational function is a quotient $A/B$ of nonzero polynomials ([[lem-projective-line-divisors-classified-by-degree]], [[thm-polynomial-ring-over-a-field-is-a-ufd]]), and by [F2] and [F3] its orders are $\operatorname{ord}_x(A/B)=\operatorname{ord}_x(A)-\operatorname{ord}_x(B)$ at every closed point, with $\operatorname{ord}_\infty(A/B)=\deg B-\deg A$ for $A/B$ in lowest terms. [F2, F3, F4, F5]

1.2 Case (1): $D=-2[q]$, $p=[a]$, $q=[0]$, $a\ne0$. A rational function $f=A/B$ in lowest terms lies in $L(D)$ exactly when $\operatorname{ord}_q(f)\ge2$ and $\operatorname{ord}_x(f)\ge0$ for every $x\ne q$: the second condition says $f$ has no poles at all, so $B$ is constant and $f=A$ is a polynomial, while the first says the polynomial $A$ has a zero of order at least $2$ at $q$; the condition at infinity $\operatorname{ord}_\infty(A)=-\deg A\ge0$ forces $\deg A=0$, and then $\operatorname{ord}_q(A)=0<2$. Hence $L(D)=0$. The same argument with the single change $\operatorname{ord}_a(f)\ge-1$, applied to $L(D+p)=L(-2[q]+[a])$, says $f=A/B$ is in $L(D+p)$ only if $f=A/(t-a)$ with $\deg A\le1$ and $A$ divisible by $t^2$ at $q$, which is impossible for a nonzero polynomial of degree at most one; hence $L(D+p)=0$ and the jump is $0$. [F1, F2, F3, F4]

1.3 Case (2): $D=-[q]$, $p=[a]$, $a\ne q$. Here $f\in L(D)$ requires $\operatorname{ord}_q(f)\ge1$ and $\operatorname{ord}_x(f)\ge0$ for $x\ne q$: again $f=A$ is a polynomial with a zero at $q$, and $\operatorname{ord}_\infty(A)=-\deg A\ge0$ forces $\deg A=0$, contradicting the zero at $q$; so $L(D)=0$. For $D+p=[a]-[q]$ the conditions are $\operatorname{ord}_q(f)\ge1$, $\operatorname{ord}_a(f)\ge-1$ and $\operatorname{ord}_x(f)\ge0$ for all other $x$: writing $f=A/(t-a)$ with $A\in k[t]$, the condition at infinity is $\operatorname{ord}_\infty(f)=1-\deg A\ge0$, so $\deg A\le1$, and the condition at $q$ is $A(q)=0$; hence $A=c(t-q)$ and $L(D+p)$ is the one-dimensional span of $(t-q)/(t-a)$, a nonzero function with $\operatorname{ord}_q=1$, $\operatorname{ord}_a=-1$, all other orders zero, so $\operatorname{div}((t-q)/(t-a))=[q]-[a]=-(D+p)$. The jump is $1$, and for the rational point $p=[a]$ one has $[\kappa(p):k]=1$. [F1, F2, F3, F4]

1.4 Case (3): $k=\mathbb R$, $D=0$, $p=V(t^2+1)$. By [F1] the polynomial $t^2+1$ is monic irreducible of degree two with closed point $p$ of residue degree $[\kappa(p):k]=2$ and $\operatorname{div}(t^2+1)=[p]-2[\infty]$, so $[p]$ is linearly equivalent to $2[\infty]$. The space $L(0)$ consists of the rational functions with $\operatorname{ord}_x(f)\ge0$ at every closed point: these are the polynomials (since the denominator of a reduced fraction would give a pole) with $\operatorname{ord}_\infty(A)=-\deg A\ge0$, i.e. the constants, so $l(0)=1$. For $L(p)$: a reduced fraction $f=A/B$ with all orders at least $0$ except possibly $\operatorname{ord}_p(f)\ge-1$ has $B=1$ or $B=t^2+1$, so $f=A/(t^2+1)$ with $A\in\mathbb R[t]$, and the condition at infinity is $\operatorname{ord}_\infty(f)=2-\deg A\ge0$, i.e. $\deg A\le2$. Hence $L(p)=\{A/(t^2+1):\deg A\le2\}$, spanned by $1/(t^2+1)$, $t/(t^2+1)$, $t^2/(t^2+1)$: these three are linearly independent because clearing the denominator turns a relation into a polynomial identity of degree at most two. Therefore $l(p)=3$ and the jump is $2=[\kappa(p):k]$, realized over the non-algebraically-closed field $\mathbb R$. [F1, F2, F3, F4]

2.1 Case (4): $k=\mathbb R$, $D=-2[\infty]$, $p=V(t^2+1)$. Here $f\in L(D)$ requires $\operatorname{ord}_\infty(f)\ge2$ and $\operatorname{ord}_x(f)\ge0$ for every $x\ne\infty$: as in step 1.2 this forces $f=A$ to be a polynomial with $-\deg A\ge2$, impossible for a nonzero polynomial, so $L(D)=0$. In $L(D+p)$ the conditions are $\operatorname{ord}_\infty(f)\ge2$, $\operatorname{ord}_p(f)\ge-1$ and $\operatorname{ord}_x(f)\ge0$ for all other $x$: a reduced fraction with no pole outside $p$ is of the form $f=A/(t^2+1)$ with $A\in\mathbb R[t]$, and $2-\deg A=\operatorname{ord}_\infty(f)\ge2$ forces $\deg A=0$; hence $L(D+p)$ is the one-dimensional span of $1/(t^2+1)$, whose orders are $+2$ at $\infty$ and $-1$ at $p$, so the jump is $1$ while $[\kappa(p):k]=2$. This is the intermediate value: the jump is neither $0$ nor the full residue degree. [F2, F3, F4, step 1.1]

3.1 Assembly and choice accounting. Steps 1.2-2.1 exhibit jumps $0$, $1$ and $2$ on $\mathbb P^1_k$, and in particular the extreme value $[\kappa(p):k]$ occurs for $[\kappa(p):k]=1$ in case (2) and for $[\kappa(p):k]=2$ in case (3), while case (4) gives the intermediate value $1$ in residue degree $2$; the general inequality $0\le l(D+p)-l(D)\le[\kappa(p):k]$ is [F5]. The sheaf restatement of case (3), $\mathcal O(p)\cong\mathcal O(2)$, follows from the current Cartier/Picard route [F4]. The Axiom of Choice is inherited only through the suppliers of [F1]-[F5], as recorded in [F6]; no infinite selection is made above, since the spanning functions are exhibited by formulas. [F1, F4, F5, F6, step 1.2, step 1.3, step 1.4, step 2.1] ∎
