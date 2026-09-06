---
id: lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition
kind: lemma
title: "Chain rule for an indefinite integral after an absolutely continuous composition"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, def-indefinite-lebesgue-integral-on-a-compact-interval, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-absolutely-continuous-functions-have-luzin-property-n, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Christopher Heil, Introduction to Real Analysis, Theorem 6.5.2"
      url: "https://doi.org/10.1007/978-3-030-26903-6"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $a\le b$ and $c\le d$, let $f:[c,d]\to\mathbb R$ be a real-valued representative of an element of $L^1[c,d]$, let $F=I_f$, and let $g:[a,b]\to[c,d]$ be AC. If
$F\circ g$ is AC, then $(F\circ g)'=f(g)g'$ almost everywhere and
$f(g)g'\in L^1[a,b]$.

Derivatives are taken at interior points; set $g'=0$ at the endpoints and wherever it does not exist. The conclusion holds for every such real-valued representative $f$.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, the real-valued functions $f,F,g$ above, and the explicit hypothesis that $F\circ g$ is AC.

## Proof

**Proof technique:** direct.

1.1 If $a=b$, both conclusions are vacuous almost-everywhere assertions on a null interval. If $c=d$, then $g$ and $F\circ g$ are constant and the product is zero almost everywhere. Hence suppose $a<b$ and $c<d$. [given]

2.1 By [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], $F$ is AC, and [[thm-first-fundamental-theorem-of-calculus-for-l-one]] gives $F'=f$ almost everywhere. Since $F$ is real-valued, [[thm-absolutely-continuous-functions-have-luzin-property-n]] gives its image-null property $(N)$. The real-valued functions $g$ and $H:=F\circ g$ are AC, so [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] makes both differentiable almost everywhere. [given, step 1.1]

3.1 Heil's cited chain-rule theorem applies: $g$, $F$, and $H$ are differentiable almost everywhere, and $F$ maps null sets to null sets. Its conclusion holds for every function $h=F'$ almost everywhere. Taking $h=f$ yields $H'=(f\circ g)g'$ almost everywhere, including on the pullback of the exceptional set for $F'$. No assertion that this pullback is null is needed. [step 2.1]

4.1 Since the real-valued function $H$ is AC, its derivative is integrable by [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]. The product is finite-valued under our convention and equals this measurable derivative outside a null set by step 3.1. Completeness of Lebesgue measure therefore makes the product measurable, and almost-everywhere equality gives $f(g)g'\in L^1[a,b]$. [step 3.1] ∎
