---
id: thm-wirtinger-chain-rule-for-real-differentiable-maps
kind: theorem
title: "The Wirtinger chain rule for compositions of real-differentiable complex-valued maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wirtinger-derivatives, thm-chain-rule-for-total-derivatives,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.2.10"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f:U\to V$ and $g:V\to\mathbb C$, where $U,V\subseteq\mathbb C$ are open, and suppose $f$ is real totally differentiable at $a\in U$ and $g$ is real totally differentiable at $f(a)$. Writing the Wirtinger variables of $g$ as $w,\bar w$, one has

$$ (g\circ f)_z=(g_w\circ f)f_z+(g_{\bar w}\circ f)\overline{f_{\bar z}}, $$

$$ (g\circ f)_{\bar z}=(g_w\circ f)f_{\bar z}+(g_{\bar w}\circ f)\overline{f_z} $$

at $a$. If both maps are holomorphic, these formulas reduce to the complex chain rule.

## Facts & Assumptions

**Given:** The maps, domains, point, and real total-differentiability hypotheses in the Statement.

[F1] For a real-differentiable complex-valued map, $Df(h)=f_zh+f_{\bar z}\bar h$ ([[def-wirtinger-derivatives]]).

[L1] The total derivative of a composite is the composite of the total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[L2] Complex conjugation satisfies $\overline{z+w}=\bar z+\bar w$ and $\overline{zw}=\bar z\bar w$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=f_z(a)$, $B=f_{\bar z}(a)$, $C=g_w(f(a))$, and $D=g_{\bar w}(f(a))$. By [F1], $Df(a)h=Ah+B\bar h$ and $Dg(f(a))k=Ck+D\bar k$. [given, F1]

1.2 For the identity inner map, $(A,B)=(1,0)$ and the two asserted coefficients reduce to $(C,D)$. For conjugation, $(A,B)=(0,1)$ and they become $(D,C)$, as direct substitution $g(\bar z)$ requires. For a constant inner map, $A=B=0$ and both coefficients vanish. [F1, L2, algebra]

2.1 By [L1] and [L2], $$D(g\circ f)(a)h=(CA+D\bar B)h+(CB+D\bar A)\bar h.$$ [step 1.1, L1, L2, algebra]

3.1 Comparing step 2.1 with the unique Wirtinger expansion [F1] gives the two displayed formulas. For holomorphic $f,g$, the barred coefficients vanish, leaving $(g\circ f)_z=(g_w\circ f)f_z$. [step 2.1, F1, algebra] ∎
