---
id: thm-every-nonarchimedean-local-number-is-a-sum-of-four-squares
kind: theorem
title: Every nonarchimedean local number is a sum of four squares
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-quadratic-local-norm-group-has-index-two]
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, Chapter III, section 2, and Chapter VIII, section 3, Proposition 3.9
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

If $K$ is any finite extension of $\mathbb Q_p$, every element of $K$ is a sum of four squares of elements of $K$.

## Statement references

[[thm-quadratic-local-norm-group-has-index-two]]

## Facts & Assumptions

**Given:** The field $K$ in the statement. Let $D\subseteq K^\times$ be the nonzero values of $x_1^2+x_2^2+x_3^2+x_4^2$.

[F1] For a quadratic extension of finite extensions of $\mathbb Q_p$, the norm subgroup has index $2$. [[thm-quadratic-local-norm-group-has-index-two]]

## Proof

1.1 The set $D$ is a multiplicative subgroup of $K^\times$. For closure under multiplication, let $R(x)$ be the matrix with columns $(x_1,x_2,x_3,x_4)^t$, $(-x_2,x_1,x_4,-x_3)^t$, $(-x_3,-x_4,x_1,x_2)^t$, and $(-x_4,x_3,-x_2,x_1)^t$. Direct column multiplication gives $R(x)^tR(x)=(\sum x_i^2)I_4$, so $\sum(R(x)y)_i^2=(\sum x_i^2)(\sum y_i^2)$. If $a=\sum x_i^2\ne0$, then $a^{-1}=\sum(x_i/a)^2$, giving inverse closure as well; $1\in D$. [given, construct, algebra]

1.2 The field $K$ is not formally real, as one can see explicitly in its subfield $\mathbb Q_p$. Put $m=p^4-1$, a positive integer. The binomial series $s=\sum_{j\ge0}\binom{1/2}{j}(-p^4)^j$ converges and has square $1-p^4=-m$. Indeed the valuation of the $j$th summand is at least $4j-jv_p(2)-v_p(j!)$, which tends to infinity, and the formal square identity is valid for the convergent series. In particular $s\ne0$ and $$-1=\underbrace{(1/s)^2+\cdots+(1/s)^2}_{m\text{ summands}}.$$ This finite identity is used only to rule out an ordering-type additive cone; no bound on $m$ is needed. [given, construct, algebra]

2.1 If $i=\sqrt{-1}\in K$, every $a\in K$ satisfies $$a=((a+1)/2)^2+(i(a-1)/2)^2,$$ which proves the assertion. Otherwise $L=K(i)$ is quadratic, and its norm subgroup $N$ consists exactly of the nonzero sums of two squares in $K$. Thus $N\subseteq D$, and [F1] gives $[K^\times:N]=2$. If $D=N$, then $N\cup\{0\}$ is closed under addition: adding two two-square values gives a four-square value or zero. It contains every square, so repeated addition and step 1.2 imply $-1\in N$. For every $a\in K$, the identity $$a=((a+1)/2)^2-((a-1)/2)^2$$ would then put $a$ in $N\cup\{0\}$, contradicting the proper index $2$ of $N$. Therefore $D\ne N$; since it is a subgroup containing the index-two subgroup $N$, step 1.1 implies $D=K^\times$. Zero is the sum of four zero squares, completing the proof. [F1, step 1.1, step 1.2, construct, algebra] ∎

## Remarks

This supplies the finite-place part of the number-field four-square theorem. Passing from representations in every completion to a representation in the number field remains a separate global arithmetic obligation.
