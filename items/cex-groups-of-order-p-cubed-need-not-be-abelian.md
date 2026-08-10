---
id: cex-groups-of-order-p-cubed-need-not-be-abelian
kind: counterexample
title: "The square-symmetry group has order $2^3$ and is nonabelian, so the order-$p^2$ theorem does not extend to order $p^3$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-groups-of-order-p-squared-are-abelian, ex-class-equation-of-the-dihedral-group-of-order-eight]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement refuted

**False claim.** Every group of order $p^3$, for prime $p$, is abelian.

## Facts & Assumptions

**Given:** The square-symmetry group $D$ constructed in the preceding example.

[L1] Every group of order $p^2$ is abelian ([[cor-groups-of-order-p-squared-are-abelian]]).

[L2] The square-symmetry group has eight displayed elements and contains $r,s$ with $sr\ne rs$ ([[ex-class-equation-of-the-dihedral-group-of-order-eight]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2], $D$ is nonabelian and has order $8=2^3$. [L2, algebra]

2.1 Since $2$ is prime, $D$ refutes the false claim and shows that the exponent $2$ in [L1] cannot be replaced by $3$. [step 1.1, L1] ∎
