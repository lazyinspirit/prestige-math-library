---
id: cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule
kind: counterexample
title: "A product class without unique factorisation does not have generating function $A(x)B(x)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-symbolic-sum-and-product-rules, def-disjoint-union-and-cartesian-product-of-combinatorial-classes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $A=\{a\}$ with $|a|=1$, let $B=\{b_0,b_1\}$ with $|b_0|=|b_1|=1$, and let
$C=\{c\}$ with $|c|=2$. Suppose a would-be product construction sends both pairs
$(a,b_0)$ and $(a,b_1)$ to the same object $c$. Then

$$\operatorname{OGF}(A)=x,\qquad \operatorname{OGF}(B)=2x,\qquad \operatorname{OGF}(C)=x^2 \ne 2x^2.$$

## Facts & Assumptions

**Given:** The symbolic product rule applies to the Cartesian product, where the ordered pair itself records both components ([[thm-symbolic-sum-and-product-rules]], [[def-disjoint-union-and-cartesian-product-of-combinatorial-classes]]).

## Verification

**Proof technique:** direct.

1.1 The class $A \times B$ has two size-$2$ objects, namely $(a,b_0)$ and $(a,b_1)$, so its generating function is $2x^2$. [given]

2.1 The collapsed construction $C$ has only one size-$2$ object, so its generating function is $x^2$. The missing factor of $2$ is exactly the loss of unique factorisation. [step 1.1, given] ∎
