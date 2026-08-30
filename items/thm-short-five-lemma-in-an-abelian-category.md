---
id: thm-short-five-lemma-in-an-abelian-category
kind: theorem
title: "Short five lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       def-abelian-category,
       def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-exactness-detected-by-members,
       thm-the-opposite-of-an-abelian-category-is-abelian,
       thm-an-abelian-category-is-balanced]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

Consider a morphism of short exact sequences in an abelian category

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "f"'] & B \arrow[r, "p"] \arrow[d, "g"'] & C \arrow[r] \arrow[d, "h"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0.
```

Then:

1. if $f$ and $h$ are monic, then $g$ is monic;
2. if $f$ and $h$ are epic, then $g$ is epic;
3. if $f$ and $h$ are isomorphisms, then $g$ is an isomorphism.

## Facts & Assumptions

**Given:** The commutative diagram in the statement, with both rows short exact.

[L1] Monicity is equivalent to cancellation on members
([[thm-chasing-rule-monicity-by-member-cancellation]]).

[L3] Exactness at a node is equivalent to the member-lifting condition
([[thm-chasing-rule-exactness-detected-by-members]]).

[L4] Equivalent members admit representatives on a common epic domain. The
pullback refinement used for transitivity puts any finite family of such
witnesses on one common epic domain, where hom-sets are abelian groups
([[def-equivalence-of-members]], [[thm-member-equivalence-is-transitive]],
[[def-abelian-category]]).

[L5] The opposite of an abelian category is abelian, and an abelian category is
balanced
([[thm-the-opposite-of-an-abelian-category-is-abelian]],
[[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 Assume that $f$ and $h$ are monic. Let $y:Y\to B$ and $y':Y'\to B$ be members with $g y \equiv g y'$. By [L4], choose epimorphisms $u:T\to Y$ and $v:T\to Y'$ such that $g y u=g y'v$, and define the member $z:=yu-y'v:T\to B$. Then $gz=0$. Since $h p z=p'g z=0$ and $h$ is monic, [L1] gives $p z\equiv0$. Exactness of the top row at $B$ now gives a member $x$ of $A$ with $i x\equiv z$ by [L3]. [L1, L3, L4, assume-hyp, choose, construct, algebra]

2.1 Since the bottom row is short exact, $i'$ is monic. From $$i'f x=gi x\equiv gz=0$$ and the monicity of $i'$ and $f$, [L1] gives $x\equiv0$, hence $z\equiv ix\equiv0$. By [L4], after an epic refinement of $T$ the equality $z=yu-y'v=0$ is literal, so the resulting common epic representatives witness $y\equiv y'$. Thus [L1] makes $g$ monic. [L1, L3, L4, step 1.1, algebra]

3.1 If $f$ and $h$ are epic in the original diagram, then $f^{\mathrm{op}}$ and $h^{\mathrm{op}}$ are monic in the opposite abelian category. Applying steps 1.1 and 2.1 to the opposite morphism of short exact sequences makes $g^{\mathrm{op}}$ monic, so $g$ is epic. [L5, step 1.1, step 2.1]

4.1 If $f$ and $h$ are isomorphisms, they are in particular monic and epic. Steps 2.1 and 3.1 make $g$ both monic and epic, so [L5] makes $g$ an isomorphism. [L5, step 2.1, step 3.1] ∎
