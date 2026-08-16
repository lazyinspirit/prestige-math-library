---
id: thm-endomorphism-ring-of-the-left-regular-module-is-opposite
kind: theorem
title: "$\\operatorname{End}_R({}_R R)\\cong R^{\\mathrm{op}}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-opposite-ring, prop-endomorphisms-form-a-ring, def-left-and-right-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

For every unital ring $R$, evaluation at $1$ identifies endomorphisms of the left regular module with right multiplications and gives a ring isomorphism $$\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}.$$ See [[def-opposite-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a unital ring $R$, the opposite ring $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring. ([[def-opposite-ring]]).

[L2] For every left $R$-module $M$, pointwise addition and composition make $\operatorname{End}_R(M)$ a unital ring with identity $\operatorname{id}_M$. ([[prop-endomorphisms-form-a-ring]]).

[L3] Let $R$ be a ring. A left $R$-module is an abelian group $(M,+,0_M)$ with a scalar action $R\times M\to M$, $(r,m)\mapsto rm$, satisfying $$r(m+n)=rm+rn,\quad (r+s)m=rm+sm,\quad (rs)m=r(sm),\quad 1_Rm=m.$$ A right $R$-module has an action $M\times R\to M$, $(m,r)\mapsto mr$, with the analogous right-handed axioms. Unless “right” is stated, module means a unital left module. ([[def-left-and-right-modules]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate an endomorphism at $1$. [L1, L2, L3, given, algebra]

2.1 Left linearity gives $f(r)=rf(1)$, so endomorphisms are right multiplications; composition reverses the order of their defining elements. [step 1.1, given, algebra]

3.1 The map $a\mapsto\rho_a$ with $\rho_a(x)=xa$ is inverse to $f\mapsto f(1)$: it is a left $R$-module homomorphism because $\rho_a(rx)=rxa=r\rho_a(x)$, it satisfies $\rho_{f(1)}=f$ by step 2.1, and $\rho_a(1)=a$. It is additive, and $\rho_a\circ\rho_b(x)=xba=\rho_{ba}(x)=\rho_{a\star b}(x)$ with $\star$ the multiplication of [L1], so it is a ring isomorphism onto $\operatorname{End}_R({}_RR)$. For the zero ring $1=0$, both $\operatorname{End}_R({}_RR)$ and $R^{\mathrm{op}}$ are the one-element ring and the correspondence is the unique map between them. This proves the stated claim. [step 2.1, L1, L2, given, algebra] ∎
