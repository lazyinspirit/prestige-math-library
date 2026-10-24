---
id: thm-formal-exponential-logarithm-identities
kind: theorem
title: "Formal $\\exp$ and $\\log$ are inverse homomorphisms and formal binomial powers obey the expected addition laws"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-exponential-logarithm-and-powers, prop-formal-derivative-algebra, thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

In a commutative $\mathbb Q$-algebra $R$, for $u,v\in xR\llbracket x\rrbracket$ and $c,d\in R$,

$$\exp(u+v)=\exp(u)\exp(v),$$

$$\log((1+u)(1+v))=\log(1+u)+\log(1+v),$$

and $\exp:xR\llbracket x\rrbracket\to1+xR\llbracket x\rrbracket$ and $\log:1+xR\llbracket x\rrbracket\to xR\llbracket x\rrbracket$ are inverse group homomorphisms. Consequently,

$$(1+u)^{c+d}=(1+u)^c(1+u)^d,\qquad ((1+u)^c)^d=(1+u)^{cd},$$

and

$$(1+u)^c=\sum_{n\ge0}\frac{c(c-1)\cdots(c-n+1)}{n!}u^n,$$

where the numerator is the empty product $1$ at $n=0$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Formal exponential and logarithm are $\exp(u)=\sum_{n\ge0}u^n/n!$ and $\log(1+u)=\sum_{n\ge1}(-1)^{n-1}u^n/n$ ([[def-formal-exponential-logarithm-and-powers]]).

[F2] Formal binomial powers are defined by $(1+u)^c=\exp(c\log(1+u))$ ([[def-formal-exponential-logarithm-and-powers]]).

[F3] The formal derivative is additive, obeys the product rule, and satisfies $D(f^m)=mf^{m-1}Df$ for $m\ge1$ while $D(1)=0$ ([[prop-formal-derivative-algebra]]).

[F4] A summable family may be bijectively reindexed or partitioned and regrouped without changing its sum ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** finite coefficient convolution and formal differentiation.

1.1 Expanding the product and regrouping in each degree gives $\exp(u)\exp(v)=\sum_{n\ge0}(u+v)^n/n!$ by the finite binomial identity, so the exponential addition law holds. [given, F1, F4]

1.2 Termwise differentiation gives $D\exp(u)=(\exp u)Du$ and $D\log(1+u)=(1+u)^{-1}Du$. Hence $D(\log(\exp u)-u)=0$, and its constant coefficient is $0$, so $\log(\exp u)=u$. For $z=1+u$ and $y=\exp(\log z)$, the same formulas give $D(yz^{-1})=0$ and $(yz^{-1})(0)=1$, so $y=z$. Here a zero derivative forces every positive-degree coefficient to vanish because every positive integer is invertible in a $\mathbb Q$-algebra. [given, F1, F3]

1.3 In an independent indeterminate $z$, let $B_c(z)$ denote the displayed generalized-binomial series. Direct coefficient algebra gives $B_c(0)=1$ and $(1+z)D_zB_c(z)=cB_c(z)$. The formally defined $(1+z)^c$ has the same constant coefficient and differential equation. Recursively comparing coefficients, where $n$ is invertible for $n\ge1$, makes the two series equal; admissible substitution $z=u$ gives the asserted formula. [given, F2, F3]

2.1 Step 1.2 and the exponential addition law give $\exp(\log(1+u)+\log(1+v))=(1+u)(1+v)$; applying $\log$ gives the logarithm addition law. The two power laws follow by substituting their definition and applying the exponential and logarithm laws. [step 1.1, step 1.2, given, F2]

3.1 Steps 1.1-2.1 prove the inverse homomorphisms, both power laws, and the coefficient formula, including $u=0$, $c=0$, and $n=0$. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
