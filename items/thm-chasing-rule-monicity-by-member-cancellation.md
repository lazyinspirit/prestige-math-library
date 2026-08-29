---
id: thm-chasing-rule-monicity-by-member-cancellation
kind: theorem
title: "Monicity by member cancellation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chasing-rule-monicity-detected-by-members,
       prop-each-object-has-a-zero-member-and-each-member-has-a-negative]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(ii)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For a morphism $f:A \to B$ in an abelian category, the following are
equivalent:

1. $f$ is monic.
2. For all members $x$ and $y$ of $A$,
   $$f x \equiv f y \Longrightarrow x \equiv y.$$

## Facts & Assumptions

**Given:** A morphism $f:A \to B$.

[L1] Monicity is equivalent to the rule
$f z \equiv 0 \Rightarrow z \equiv 0$
([[thm-chasing-rule-monicity-detected-by-members]]).

[L2] Members have negatives, and equivalence to zero means literal zero after a
common epic comparison
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f$ is monic, and suppose $f x \equiv f y$. Choose a common witness $u:W \to X$, $v:W \to Y$ with $f x u = f y v$. Then $f(x u - y v) = 0$, so [L1] gives $x u - y v \equiv 0$. By [L2], this means $x u = y v$, hence $x \equiv y$. [L1, L2, assume-hyp, algebra]

1.2 Conversely, assume condition 2. Apply it with $y$ equal to the zero member on the same domain as $x$. Then $f x \equiv 0$ implies $x \equiv 0$, so [L1] makes $f$ monic. [L1, L2, assume-hyp]

2.1 Therefore conditions 1 and 2 are equivalent. [step 1.1, step 1.2] ∎
