---
id: thm-holomorphic-germs-at-a-point-form-a-local-ring
kind: theorem
title: "Holomorphic germs at a point form a local ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-holomorphic-germ, thm-algebra-of-complex-derivatives, def-local-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.2"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Statement

Fix $a \in \mathbb C$, and let $\mathcal O_a$ be the set of holomorphic germs at
$a$. Define

$$[f]_a + [g]_a := [f+g]_a,\qquad [f]_a[g]_a := [fg]_a.$$

Then $\mathcal O_a$ is a commutative ring with identity $[1]_a$. A germ
$[f]_a \in \mathcal O_a$ is a unit if and only if $f(a) \ne 0$. Consequently

$$\mathfrak m_a := \{[f]_a \in \mathcal O_a : f(a)=0\}$$

is the unique maximal ideal, so $\mathcal O_a$ is a local ring.

## Facts & Assumptions

**Given:** A point $a \in \mathbb C$ and holomorphic germs $[f]_a,[g]_a,[h]_a$.

[L1] Two holomorphic functions define the same germ at $a$ exactly when they
agree on some neighbourhood of $a$, and then they have the same value at $a$
([[def-holomorphic-germ]]).

[L2] Sums and products of holomorphic functions are holomorphic; if a
holomorphic function is nonzero at a point, then it is nonzero on some
neighbourhood of that point and its reciprocal is holomorphic there
([[thm-algebra-of-complex-derivatives]]).

[L3] A local ring is a nonzero commutative ring with a unique maximal ideal
([[def-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $[f]_a=[f_1]_a$ and $[g]_a=[g_1]_a$, then [L1] gives a neighbourhood of $a$ on which $f=f_1$ and a neighbourhood on which $g=g_1$; on their intersection one has $f+g=f_1+g_1$ and $fg=f_1g_1$. Thus the displayed sum and product are well defined on germs. [L1, algebra]

1.2 If $f(a)\ne0$, [L2] gives a neighbourhood $U$ of $a$ on which $f$ never vanishes. For each $z\in U$, the reciprocal rule in [L2] applies to $f$ at $z$, so $1/f$ is holomorphic on $U$ and $[f]_a[1/f]_a=[1]_a$. Hence $[f]_a$ is a unit. [given, L2]

1.3 If $f(a)=0$ and $[f]_a[g]_a=[1]_a$, then [L1] lets us evaluate at $a$ and obtain $0=f(a)g(a)=1$, impossible. So a germ vanishing at $a$ is not a unit. [L1, algebra]

2.1 Pointwise addition and multiplication on representatives give associative and commutative operations on $\mathcal O_a$, the constant germs $[0]_a$ and $[1]_a$ are additive and multiplicative identities, and $[-f]_a$ is an additive inverse of $[f]_a$. So step 1.1 makes $\mathcal O_a$ a commutative ring with identity $[1]_a$. [step 1.1, L2, algebra]

2.2 Steps 1.2 and 1.3 show that the nonunits are exactly the germs in $\mathfrak m_a$. This set is an ideal because sums of germs vanishing at $a$ still vanish at $a$, additive inverses still vanish at $a$, and $h(a)f(a)=0$ for every $[h]_a \in \mathcal O_a$ and $[f]_a \in \mathfrak m_a$. Also $[1]_a \notin \mathfrak m_a$, so $\mathfrak m_a$ is proper. [step 1.2, step 1.3, L1, algebra]

3.1 Every proper ideal consists entirely of nonunits, hence step 2.2 places it inside $\mathfrak m_a$. Therefore $\mathfrak m_a$ is the unique maximal ideal, and [L3] makes $\mathcal O_a$ a local ring. [step 2.2, L3] ∎
