---
id: ex-infinite-solution-affine-parametrisation
kind: example
title: "A consistent underdetermined system has an affine two-parameter solution set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rref-consistency-and-free-variable-parametrisation, thm-solution-set-is-an-affine-nullspace, thm-reals-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §2.4"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Example

Over $\mathbb R$, the system
$$x+2y-z=3,\qquad 2x+4y-2z=6$$
has the affine two-parameter solution set
$$ (x,y,z)=(3,0,0)+s(-2,1,0)+t(1,0,1),\qquad s,t\in\mathbb R. $$

## Facts & Assumptions

**Given:** The displayed real system.

[L1] RREF parametrises solutions by the nonpivot variables ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] A nonempty solution set is a particular solution plus the nullspace ([[thm-solution-set-is-an-affine-nullspace]]).

[L3] The real numbers form a field ([[thm-reals-field]]).

## Verification

**Proof technique:** direct.

1.1 Subtracting twice the first row from the second leaves one nonzero row $x+2y-z=3$. Put $y=s$ and $z=t$; then the pivot variable is $x=3-2s+t$. [L1, L3, algebra]

2.1 This is the displayed affine form. The base point maps to $3$, while each direction maps to $0$, so direct multiplication verifies that $(3,0,0)$ is particular and the two direction vectors lie in the nullspace, as [L2] requires. [step 1.1, L2, algebra] ∎
