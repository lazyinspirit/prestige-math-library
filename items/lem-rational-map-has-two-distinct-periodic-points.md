---
dependency_level: 1
id: lem-rational-map-has-two-distinct-periodic-points
kind: lemma
title: "Every degree-at-least-two rational map has two distinct periodic points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-rational-map-on-projective-line-degree
  - def-algebraically-closed-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Lemma3.19 and proof of Theorem3.14"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Let $L$ be an algebraically closed field and let $\phi$ be a rational map of $\mathbb P^1_L$ of degree $d\ge2$. There are two distinct periodic points. More precisely, for any fixed point $P$, either another fixed point exists or there is a point distinct from $P$ fixed by $\phi^{\circ n}$ with $n=2$ when $\operatorname{char}L\ne2$ and $n=3$ when $\operatorname{char}L=2$. Inseparable maps are included.

## Statement references

[[def-rational-map-on-projective-line-degree]]

[[def-algebraically-closed-field]]

## Facts & Assumptions

**Given:** The algebraically closed field, map and degree in the statement.

[F1] A rational degree-$d$ map has a nondegenerate degree-$d$ homogeneous lift. A positive-degree binary form splits into linear factors over the algebraically closed field. ([[def-rational-map-on-projective-line-degree]], [[def-algebraically-closed-field]])

## Proof

1.1 Composing a nondegenerate homogeneous lift with itself $n$ times gives forms of degree $d^n$ with no common projective zero: a hypothetical common zero would map through the preceding iterate to a common zero of the original lift. Thus the iterate has degree $d^n$. Its fixed-point form is $YF^{\circ n}_1-XF^{\circ n}_2$, a nonzero degree-$(d^n+1)$ form; if it vanished identically, coprimality would make the iterate the identity, contradicting its degree. By [F1] the fixed-point form has a root, so $\phi$ has a fixed point. If two distinct fixed points exist, the assertion already follows. [F1, algebra]

1.2 Suppose the only fixed point is $P$, and move it to affine coordinate $t=0$. The degree-$(d+1)$ fixed-point form then vanishes only at $0$, with multiplicity $r=d+1$. The local denominator is a unit at $0$, so modulo $t^{r+1}$ the rational map has the form $\phi(t)=t+a t^r+O(t^{r+1})$, with $a\ne0$. Finite truncation of the geometric series inverts the denominator, so no convergence assertion is used. Induction by substitution gives $\phi^{\circ n}(t)=t+na t^r+O(t^{r+1})$: since $r\ge2$, replacing $t$ by $t+O(t^r)$ in $t^r$ changes it only in order at least $r+1$. Choose $n$ as in the Statement, so $na\ne0$. The multiplicity of $0$ as a fixed point of this iterate is therefore exactly $r$, whereas its fixed-point form has degree $d^n+1>r$ by step1.1. Factoring that form yields another fixed point of the iterate, distinct from $P$, which is periodic for $\phi$. [F1, step 1.1, algebra] ∎
