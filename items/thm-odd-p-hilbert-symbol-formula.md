---
id: thm-odd-p-hilbert-symbol-formula
kind: theorem
title: "The odd-prime Hilbert symbol formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-equivalent-definitions-of-the-hilbert-symbol, lem-hilbert-symbol-depends-only-on-square-classes, def-legendre-symbol, thm-eulers-criterion-for-legendre-symbol, thm-square-criterion-in-qp-for-odd-p, cor-p-adic-simple-root-lifting]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Theorem 10.7"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.3"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $p$ be odd, and write $a=p^\alpha u$, $b=p^\beta v$ with
$\alpha,\beta\in\mathbb Z$ and $u,v\in\mathbb Z_p^\times$. Then

for a $p$-adic unit $w$, write $\left(\frac wp\right)$ for the Legendre
symbol of any integer representative of its nonzero residue class modulo $p$.
With this convention,

$$ (a,b)_p=(-1)^{\alpha\beta (p-1)/2}\left(\frac{u}{p}\right)^\beta\left(\frac{v}{p}\right)^\alpha. $$

## Facts & Assumptions

**Given:** An odd prime $p$, elements $a=p^\alpha u$ and $b=p^\beta v$ in $\mathbb Q_p^\times$, and unit parts $u,v\in\mathbb Z_p^\times$.

[L1] The Hilbert symbol is equivalent to solvability of $z^2-ax^2-by^2=0$ and to the norm condition from $Q_p(\sqrt a)$ ([[lem-equivalent-definitions-of-the-hilbert-symbol]]).

[L2] The Hilbert symbol depends only on square classes ([[lem-hilbert-symbol-depends-only-on-square-classes]]).

[L3] The Legendre symbol of an integer detects whether its nonzero residue class is a square modulo $p$ ([[def-legendre-symbol]], [[thm-eulers-criterion-for-legendre-symbol]]); hence the notation $\left(\frac wp\right)$ above is well defined for $w\in\mathbb Z_p^\times$.

[L4] The square criterion in $\mathbb Q_p$ for odd $p$ is parity of valuation plus a square residue unit ([[thm-square-criterion-in-qp-for-odd-p]]).

[L5] A simple root modulo $p$ lifts to a $p$-adic root ([[cor-p-adic-simple-root-lifting]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], only the parities of $\alpha,\beta$ and the unit square classes of $u,v$ matter, so it is enough to treat $\alpha,\beta\in\{0,1\}$. We also use three consequences of [L1]. First, the defining equation is symmetric in $a$ and $b$, so $(a,b)_p=(b,a)_p$. Second, if $c$ is a square then $(a,c)_p=1$. Third, if $(a,c)_p=1$ then the norm subgroup from $Q_p(\sqrt a)$ is multiplicative, so $(a,bc)_p=(a,b)_p$; by symmetry the same cancellation rule holds in the first argument. [L1, L2, given, algebra]

2.1 If $\alpha=\beta=0$, both arguments are units. Consider the sets $$ U:=\{ux^2\bmod p:x\in\mathbb F_p\},\qquad V:=\{1-vy^2\bmod p:y\in\mathbb F_p\}. $$ Each has $(p+1)/2$ elements, so they intersect. Hence there exist $x_0,y_0\in\mathbb F_p$ with $ux_0^2+vy_0^2\equiv1\pmod p$. At least one of $x_0,y_0$ is nonzero, so one partial derivative of $ux^2+vy^2-1$ is nonzero at $(x_0,y_0)$ modulo $p$; [L5] lifts this solution to $\mathbb Z_p$. Therefore $(u,v)_p=1$, agreeing with the displayed formula when $\alpha=\beta=0$. [L3, L5, step 1.1, algebra]

3.1 Suppose $\alpha=1$ and $\beta=0$. Step 2.1 gives $(u,v)_p=1$, so the cancellation rule from step 1.1 yields $(pu,v)_p=(p,v)_p$. If $v$ is a square unit, then [L4] and step 1.1 give $(p,v)_p=1$. If $v$ is a nonsquare unit and $(p,v)_p=1$, then [L1] gives a primitive solution of $z^2-px^2-vy^2=0$ over $\mathbb Z_p$. The congruence $z^2\equiv vy^2\pmod p$ forces $y$ to be divisible by $p$, for otherwise [L4] would make $v$ a square in $\mathbb Q_p$. Then $z^2=px^2+p^2(\cdots)$, so primitivity forces $x$ to be a unit and therefore $v_p(z^2)=1$, impossible. Hence $(p,v)_p=-1$ in the nonsquare case. By [L3] and [L4], this is exactly $(v/p)$, so $$ (pu,v)_p=\left(\frac vp\right). $$ [L1, L3, L4, step 1.1, step 2.1, algebra]

4.1 By symmetry, the case $\alpha=0,\beta=1$ gives $$ (u,pv)_p=\left(\frac up\right). $$ [step 1.1, step 3.1, algebra]

4.2 When $\alpha=\beta=1$, step 1.1 gives $(-pv,pv)_p=1$, so $$ (pu,pv)_p=(pu,pv)_p(-pv,pv)_p=(-p^2uv,pv)_p=(-uv,pv)_p=(pv,-uv)_p. $$ Now apply step 3.1 with $-uv$ in place of $v$: $$ (pv,-uv)_p=\left(\frac{-uv}p\right) =\left(\frac{-1}p\right)\left(\frac up\right)\left(\frac vp\right) =(-1)^{(p-1)/2}\left(\frac up\right)\left(\frac vp\right), $$ where the last identity is Euler's criterion from [L3]. This matches the displayed formula for $\alpha=\beta=1$. [L3, step 1.1, step 3.1, algebra]

5.1 Steps 2.1 through 4.2 settle all four parity cases, so the claimed formula holds for all $a=p^\alpha u$ and $b=p^\beta v$. [step 2.1, step 3.1, step 4.1, step 4.2] ∎
