---
id: thm-member-equivalence-is-transitive
kind: theorem
title: "Member equivalence is transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-equivalence-of-members,
       def-pullbacks-and-pushouts,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Proposition 2 and Theorem 3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For members of one object in an abelian category, the relation $\equiv$ is
transitive.

## Facts & Assumptions

**Given:** An abelian category and members $x:X \to A$, $y:Y \to A$, and
$z:Z \to A$ with $x \equiv y$ and $y \equiv z$.

[L1] The relation $x \equiv y$ is witnessed by epimorphisms from one common
domain as in [[def-equivalence-of-members]].

[L2] Pullbacks exist in an abelian category
([[def-pullbacks-and-pushouts]]).

[L3] The pullback of an epimorphism is an epimorphism
([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

## Proof

**Proof technique:** direct.

1.1 Choose epimorphisms $u:W_1 \to X$, $v:W_1 \to Y$, $w:W_2 \to Y$, and $r:W_2 \to Z$ with $x u = y v$ and $y w = z r$, using [L1]. [L1, choose]

1.2 Form the pullback of $v$ and $w$, with projections $v':P \to W_1$ and $w':P \to W_2$. By [L3], both $v'$ and $w'$ are epic. [L2, L3, construct]

2.1 The pullback equation gives $v v' = w w'$, so $x u v' = y v v' = y w w' = z r w'$. Hence the epimorphisms $u v':P \to X$ and $r w':P \to Z$ witness $x \equiv z$. [L1, step 1.1, step 1.2, algebra]

3.1 Therefore member equivalence is transitive. [step 2.1] ∎
