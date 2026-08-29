---
id: prop-each-object-has-a-zero-member-and-each-member-has-a-negative
kind: proposition
title: "Each object has a zero member and each member has a negative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       def-abelian-category,
       prop-zero-object-induces-zero-morphisms]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For every object $A$ of an abelian category:

1. there is a zero member of $A$;
2. every member $x:X \to A$ has a negative member $-x:X \to A$;
3. for every member $x$, one has $x \equiv 0$ if and only if $x = 0$ as a
   morphism.

## Facts & Assumptions

**Given:** An abelian category and a member $x:X \to A$.

[L1] A zero object supplies zero morphisms between any two objects
([[prop-zero-object-induces-zero-morphisms]]).

[L2] An abelian category is additive, so every hom-set has negatives
([[def-abelian-category]]).

[L3] Member equivalence is defined by comparison after epimorphisms
([[def-equivalence-of-members]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a zero morphism $0_{X,A}:X \to A$, so $A$ has a zero member. By [L2], the additive inverse $-x:X \to A$ exists, so every member has a negative. [L1, L2]

1.2 Conversely, if $x \equiv 0$, choose epimorphisms $u:W \to X$ and $v:W \to Y$ witnessing that equivalence. Then $x u = 0$, and epicity of $u$ forces $x = 0$. [L3, assume-hyp, algebra]

2.1 If $x = 0$, then $x \equiv 0$ is witnessed by the identity epic $1_X:X \to X$, since $x 1_X = 0 1_X$. [L3, step 1.1]

3.1 Step 1.1 proves claims 1 and 2, while steps 2.1 and 1.2 prove claim 3. [step 1.1, step 2.1, step 1.2] ∎
