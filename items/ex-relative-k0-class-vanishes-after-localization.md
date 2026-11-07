---
id: ex-relative-k0-class-vanishes-after-localization
kind: example
title: A Relative K0 Relation Is Detected by Prime Localizations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
provenance:
  statement: ai-generated
  proof: ai-generated
deps:
- def-relative-algebraic-k0-group
- thm-height-one-localization-detects-commutative-relative-k0-class
- def-axiom-of-choice
- def-number-field
- def-ring-of-integers-of-a-number-field
- cor-rational-algebraic-integers-are-integers
- cor-ring-of-integers-is-a-dedekind-domain
- thm-relative-k0-of-a-dedekind-domain-is-the-divisor-group
- def-algebraic-k0-and-k1-of-a-ring
proof_strategy: direct
verification:
  precheck: pass
sources:
  references: []
generation:
  role: example
---

## Example

Assume the Axiom of Choice. Let $R=\mathbb Z$ and $K=\mathbb Q$, and put
$$x=[R,\times6,R]-[R,\times2,R]-[R,\times3,R]\in K_0(R,K),$$
where each displayed map is multiplication by that integer on the one-dimensional $K$-vector space $K$. Every prime localization of $x$ is zero by the composition relation, so the height-one detection theorem gives $x=0$.


The class $y=[R,\times2,R]$ maps to zero in $K_0(R)$ but is nonzero in $K_0(R,K)$: its divisor coefficient at $(2)$ is one. Thus the vanishing of the composition relation does not force its individual summands to vanish relatively.

## Example references

[[thm-height-one-localization-detects-commutative-relative-k0-class|Height-one localization detects the relative class]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the number field $K=\mathbb Q$, its ring of integers $R=\mathbb Z$, and the three relative triples whose generic isomorphisms are multiplication by $2$, $3$, and $6$.

[A1] [[def-axiom-of-choice]]: arbitrary choice is available for the cited ring-of-integers Dedekind supplier.

[F1] [[def-relative-algebraic-k0-group]]: a relative triple is $(P,\alpha,Q)$ with a generic isomorphism $\alpha$, and composable triples satisfy $[P,\alpha,Q]+[Q,\beta,T]=[P,\beta\alpha,T]$.

[F2] [[thm-height-one-localization-detects-commutative-relative-k0-class]]: localizing a triple at each nonzero prime gives a class in $K_0(R_{\mathfrak p},K)$, and if all these classes vanish over a Dedekind domain then the global class is zero.

[F3] [[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[cor-rational-algebraic-integers-are-integers]], and [[cor-ring-of-integers-is-a-dedekind-domain]]: $\mathbb Q$ is a number field, its ring of integers is $\mathbb Z$, and under [A1] this ring is a Dedekind domain.

[F4] [[thm-relative-k0-of-a-dedekind-domain-is-the-divisor-group]] identifies the local determinant valuation with the divisor coefficient.

[F5] [[def-algebraic-k0-and-k1-of-a-ring]] gives the absolute K0 class.

## Verification

1.1 Multiplication by each of $2$, $3$, and $6$ is an isomorphism of the one-dimensional $\mathbb Q$-vector space $K$, so all three displayed objects are relative triples. For every nonzero prime $\mathfrak p$, localization gives the corresponding triples over $R_{\mathfrak p}$; [F1] and $3\cdot2=6$ make their combination $[R_{\mathfrak p},\times6,R_{\mathfrak p}]-[R_{\mathfrak p},\times2,R_{\mathfrak p}]-[R_{\mathfrak p},\times3,R_{\mathfrak p}]=0$. Thus every local class vanishes. [F1, F2, given, algebra]

2.1 By [A1] and [F3], $R=\mathbb Z$ is a Dedekind domain. Every local class vanishes by step 1.1, so [F2] gives $x=0$ in $K_0(R,K)$. [A1, F2, F3, step 1.1, given, algebra]



3.1 The absolute image of $y$ is $[R]-[R]=0$. Its generic map has one-by-one determinant $2$; in the DVR $\mathbb Z_{(2)}$, the element $2$ generates the maximal ideal and hence has valuation one. Therefore [F4] sends $y$ to a divisor with nonzero $(2)$-coefficient, so $y\ne0$. [A1, F3, F4, F5, algebra] ∎
