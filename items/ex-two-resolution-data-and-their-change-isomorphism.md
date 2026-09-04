---
id: ex-two-resolution-data-and-their-change-isomorphism
kind: example
title: "Two resolution data and their change isomorphism"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Example

Assume the Axiom of Dependent Choice. Let $P,Q$ be two supplied projective
resolution data and $I,J$ two supplied injective resolution data on the same
class $\mathcal D$ in an abelian category $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be an additive functor to an abelian category.
For every object $A\in\mathcal D$ and every degree $n$, the page's
change-of-data theorems produce isomorphisms
$$L_n^PF(A)\xrightarrow{\sim}L_n^QF(A)\qquad\text{and}\qquad R_I^nF(A)\xrightarrow{\sim}R_J^nF(A),$$
natural in $A$.
## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, the supplied data $P,Q,I,J$, the
additive functor $F$, an object $A\in\mathcal D$, and an integer $n$.

[L1] Two supplied projective resolution data define naturally isomorphic left derived functors ([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]]).

[L2] Two supplied injective resolution data define naturally isomorphic right derived functors ([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] at the object $A$. This gives the projective-side change isomorphism $L_n^PF(A)\xrightarrow{\sim}L_n^QF(A)$, natural in $A$. [L1, given]

2.1 Apply [L2] at the same object $A$. This gives the injective-side change isomorphism $R_I^nF(A)\xrightarrow{\sim}R_J^nF(A)$, also natural in $A$. [L2, step 1.1] ∎
