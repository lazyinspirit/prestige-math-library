---
id: lem-equivalent-definitions-of-the-hilbert-symbol
kind: lemma
title: "Equivalent formulations of the Hilbert symbol"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hilbert-symbol-over-a-rational-completion, def-field-norm-and-trace]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Lemma 10.2"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.2"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $a,b\in Q_v^\times$. The following are equivalent:

1. $(a,b)_v=1$.
2. The ternary form $z^2-ax^2-by^2$ is isotropic over $Q_v$.
3. $b$ is a norm from the quadratic algebra $Q_v(\sqrt a)$, equivalently
   $b=u^2-av^2$ for some $u,v\in Q_v$.

## Facts & Assumptions

**Given:** A place $v$ of $\mathbb Q$ and nonzero elements $a,b\in Q_v^\times$.

[L1] By definition, $(a,b)_v=1$ exactly when $ax^2+by^2=1$ has a solution over $Q_v$ ([[def-hilbert-symbol-over-a-rational-completion]]).

[L2] Put $A_a:=Q_v[T]/(T^2-a)$. Relative to the basis $(1,T)$, multiplication by $u+vT$ has matrix $\left(\begin{smallmatrix}u&av\\v&u\end{smallmatrix}\right)$ and determinant $u^2-av^2$. When $a$ is nonsquare this is the field norm of [[def-field-norm-and-trace]]; the same determinant defines the norm in the split quadratic algebra when $a$ is square.

## Proof

**Proof technique:** direct.

1.1 By [L1], condition 1 means that $ax^2+by^2=1$ has a solution, and then $(x,y,1)$ is a nontrivial zero of $z^2-ax^2-by^2$. Conversely, let $(x,y,z)$ be a nontrivial zero of $z^2-ax^2-by^2$. If $z\ne0$, dividing by $z^2$ gives a solution of $a(x/z)^2+b(y/z)^2=1$. If $z=0$, then $y\ne0$ and $r:=x/y$ satisfies $b=-ar^2$. The explicit choice $$ X:=\frac{1+a}{2a},\qquad Y:=\frac{1-a}{2ar} $$ then gives $aX^2+bY^2=1$. Thus conditions 1 and 2 are equivalent. [L1, given, algebra]

2.1 If condition 2 holds and $y\ne0$, then dividing the identity $z^2-ax^2-by^2=0$ by $y^2$ gives $b=(z/y)^2-a(x/y)^2$. If instead $y=0$, then $a=(z/x)^2$ is a square, say $a=r^2$, and $$ b=\left(\frac{b+1}{2}\right)^2-a\left(\frac{b-1}{2r}\right)^2. $$ So condition 2 implies that $b$ has the form $u^2-av^2$, which is exactly the norm condition in [L2]. Conversely, if $b=u^2-av^2$, then $(v,1,u)$ is a nontrivial zero of $z^2-ax^2-by^2$, so condition 2 holds and step 1.1 returns condition 1. Hence conditions 1 and 3 are equivalent. [L2, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 prove the three formulations equivalent. [step 1.1, step 2.1] ∎
