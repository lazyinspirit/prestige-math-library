---
id: thm-chasing-rule-monicity-detected-by-members
kind: theorem
title: "Monicity is detected by members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
       def-monomorphism-and-epimorphism]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(i)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For a morphism $f:A \to B$ in an abelian category, the following are
equivalent:

1. $f$ is monic.
2. For every member $x:X \to A$, the implication
   $$f x \equiv 0 \Longrightarrow x \equiv 0$$
   holds.

## Facts & Assumptions

**Given:** A morphism $f:A \to B$.

[L1] Monomorphisms are left-cancellable
([[def-monomorphism-and-epimorphism]]).

[L2] A member equivalent to zero is literally the zero morphism, and every
member has a zero comparison member
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

[L3] Postcomposition preserves member equivalence
([[prop-a-morphism-carries-members-to-members-and-preserves-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f$ is monic, and let $x:X \to A$ satisfy $f x \equiv 0$. Choose an epic $u:W \to X$ witnessing this, so $f x u = 0$. Since $f$ is monic, $x u = 0$, and the same epic $u$ witnesses $x \equiv 0$. [L1, L2, assume-hyp, algebra]

1.2 Assume condition 2. If $u,v:U \to A$ satisfy $f u = f v$, then for the member $x := u - v$ one has $f x = f u - f v = 0$, hence $f x \equiv 0$ by [L2] and [L3]. Condition 2 gives $x \equiv 0$, so [L2] makes $x = 0$, namely $u = v$. Thus $f$ is monic by [L1]. [L1, L2, L3, assume-hyp, algebra]

2.1 Therefore the two conditions are equivalent. [step 1.1, step 1.2] ∎
