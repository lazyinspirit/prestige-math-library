---
id: thm-two-adic-hilbert-symbol-formula
kind: theorem
title: "The two-adic Hilbert symbol formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-equivalent-definitions-of-the-hilbert-symbol, lem-hilbert-symbol-depends-only-on-square-classes, thm-square-criterion-in-q2]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Theorem 10.9"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, Proposition 3.16.3"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
---

## Statement

Write $a=2^\alpha u$ and $b=2^\beta v$ with $\alpha,\beta\in\mathbb Z$ and odd
units $u,v\in\mathbb Z_2^\times$. Put

$$
\epsilon(w):=\frac{w-1}{2}\bmod 2,\qquad \omega(w):=\frac{w^2-1}{8}\bmod 2
$$

for odd $w$. Then

$$
(a,b)_2=(-1)^{\epsilon(u)\epsilon(v)+\alpha\omega(v)+\beta\omega(u)}.
$$

## Facts & Assumptions

**Given:** Elements $a=2^\alpha u$ and $b=2^\beta v$ in $\mathbb Q_2^\times$ with odd units $u,v$.

[L1] The Hilbert symbol is equivalent to solvability of $z^2-ax^2-by^2=0$ and to the norm condition from $Q_2(\sqrt a)$ ([[lem-equivalent-definitions-of-the-hilbert-symbol]]).

[L2] The Hilbert symbol depends only on square classes ([[lem-hilbert-symbol-depends-only-on-square-classes]]).

[L3] An element of $\mathbb Q_2^\times$ is a square exactly when its valuation is even and its odd unit part is $1$ modulo $8$ ([[thm-square-criterion-in-q2]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], only the parities of $\alpha,\beta$ and the odd unit classes modulo $8$ matter, so it is enough to treat $\alpha,\beta\in\{0,1\}$ and $u,v\in\{\pm1,\pm5\}$. As in the odd-prime proof, [L1] gives three useful identities: the symbol is symmetric; $(-c,c)_2=1$ for every $c$; and, if $(d,c)_2=1$, then $(b,c)_2=(bd,c)_2$. In particular, $$ (2u,2v)_2=(2u,2v)_2(-2v,2v)_2=(-4uv,2v)_2=(-uv,2v)_2=(2v,-uv)_2, $$ so the case $\alpha=\beta=1$ reduces to the case $\alpha=1,\beta=0$. [L1, L2, given, algebra]

2.1 First suppose $\alpha=\beta=0$, so both arguments are odd units. If one of $u,v$ is $1$, then the symbol is $1$. The remaining positive cases are $(5,-1)_2$, $(5,5)_2$, and $(5,-5)_2$ up to symmetry: they are witnessed respectively by $$ 5\cdot1^2-2^2=1,\qquad 5\cdot1^2+5\cdot2^2=5^2,\qquad (-5,5)_2=1. $$ For the negative cases $u,v\in\{-1,-5\}$, any primitive solution of $z^2=ux^2+vy^2$ would have at least one of $x,y$ odd. If exactly one of $x,y$ were odd, then the right-hand side would be congruent to $3$ or $7$ modulo $8$; if both were odd, it would be congruent to $2$ or $6$ modulo $8$. None of these is a $2$-adic square by [L3], so these pairs have symbol $-1$. Thus $$ (u,v)_2=(-1)^{\epsilon(u)\epsilon(v)}. $$ [L1, L3, step 1.1, algebra]

3.1 Next suppose $\alpha=1$ and $\beta=0$. If $v=1$, then $(2u,1)_2=1$. If $v=-1$, the formula predicts $(-1)^{\epsilon(u)}$: for $u=1$ and $u=5$ the identities $$ 2\cdot1^2-1^2=1,\qquad 10\cdot1^2-3^2=1 $$ show that the symbol is $1$, while for $u=-1$ and $u=-5$ every primitive value of $-2x^2-y^2$ or $-10x^2-y^2$ is congruent to $2$, $5$, $6$, or $7$ modulo $8$, so the symbol is $-1$ by [L3]. If $v=5$, then for any primitive solution of $z^2=2ux^2+5y^2$ the right-hand side is congruent modulo $8$ to one of $5$, $2u$, or $2u+5$, namely to $5$, $2$, $6$, $7$, or $3$; none is a square, so $(2u,5)_2=-1$. If $v=-5$, the formula predicts $(-1)^{\epsilon(u)+1}$: for $u=-1$ and $u=-5$ the choice $x=y=1$ gives right-hand sides $-7$ and $-15$, both congruent to $1$ modulo $8$ and therefore square by [L3], so the symbol is $1$; for $u=1$ and $u=5$, the same parity check as above shows that $2ux^2-5y^2$ is never a square modulo $8$, so the symbol is $-1$. Therefore $$ (2u,v)_2=(-1)^{\epsilon(u)\epsilon(v)+\omega(v)} $$ for every odd-unit representative $v$. [L3, step 1.1, step 2.1, algebra]

4.1 Step 3.1 and symmetry give the case $\alpha=0,\beta=1$. For odd units modulo $8$, direct calculation gives $$\epsilon(xy)=\epsilon(x)+\epsilon(y),\qquad \omega(xy)=\omega(x)+\omega(y),\qquad \epsilon(-1)=1,\qquad\omega(-1)=0$$ in $\mathbb Z/2\mathbb Z$. In the remaining case $\alpha=\beta=1$, step 1.1 and step 3.1 therefore give the exponent $$\epsilon(v)\epsilon(-uv)+\omega(-uv)=\epsilon(u)\epsilon(v)+\omega(u)+\omega(v),$$ which is exactly the displayed formula. Hence the formula holds for all $a=2^\alpha u$ and $b=2^\beta v$ in $\mathbb Q_2^\times$. [step 1.1, step 2.1, step 3.1, algebra] ∎
