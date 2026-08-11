---
id: cex-quadratics-can-have-four-roots-over-composite-residue-rings
kind: counterexample
title: 'Quadratics can have four roots over Z/6 and Z/8'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-root-bound-for-polynomials-over-a-domain, cor-factor-theorem-over-a-commutative-ring, prop-integers-modulo-n-as-a-quotient-ring]
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
    - title: 'Neil Donaldson, Math 120B Notes, Section 23, root-bound counterexample'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement refuted

Every nonzero quadratic over a commutative ring has at most two distinct roots.

## Facts & Assumptions

**Given:** The polynomials $f=x^2-x$ in $(\mathbb Z/6)[x]$ and $g=x^2-1$ in $(\mathbb Z/8)[x]$.

[L1] The degree root bound holds for nonzero polynomials over integral domains ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L2] Over any commutative ring, $a$ is a root exactly when $x-a$ divides the polynomial ([[cor-factor-theorem-over-a-commutative-ring]]).

[L3] The rings $\mathbb Z/6$ and $\mathbb Z/8$ are the corresponding quotient rings, so computations are modulo $6$ and $8$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 Modulo $6$, the four distinct residues $0,1,3,4$ satisfy $a(a-1)=0$, so they are roots of the nonzero quadratic $f$. [given, L2, L3, algebra]

2.1 Modulo $8$, the four distinct odd residues $1,3,5,7$ have square congruent to $1$, so they are roots of the nonzero quadratic $g$; these rings have zero divisors, so the domain hypothesis in [L1] fails and the statement is refuted. [given, L1, L2, L3, algebra] ∎
