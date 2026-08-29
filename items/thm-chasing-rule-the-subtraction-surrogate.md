---
id: thm-chasing-rule-the-subtraction-surrogate
kind: theorem
title: "The subtraction surrogate"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
       thm-member-equivalence-is-transitive,
       def-abelian-category,
       def-equivalence-of-members]
justified_by: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(vi)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

Let $g:B \to C$ be a morphism and let $x:X \to B$, $y:Y \to B$ be members with
$$g x \equiv g y.$$
Then there exists a member $z:Z \to B$ such that
$$g z \equiv 0.$$

Moreover:

1. if $f:B \to D$ and $f x \equiv 0$, then $f y \equiv f z$;
2. if $h:B \to A$ and $h y \equiv 0$, then $h x \equiv - h z$.

## Facts & Assumptions

**Given:** Morphisms $g:B \to C$, $f:B \to D$, and $h:B \to A$, and members
$x:X \to B$, $y:Y \to B$ with $g x \equiv g y$.

[L1] The relation $g x \equiv g y$ is witnessed by one common pair of
epimorphisms
([[def-equivalence-of-members]]).

[L2] Every hom-set in an abelian category is an abelian group, so members with
one common domain may be added and subtracted
([[def-abelian-category]]).

[L3] Zero members and negatives behave literally under equivalence
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

## Proof

**Proof technique:** constructive.

1.1 Choose epimorphisms $u:W \to X$ and $v:W \to Y$ with $g x u = g y v$, using [L1], and define $z := y v - x u : W \to B$. Then $g z = g y v - g x u = 0$ by [L2], so $g z \equiv 0$ by [L3]. [L1, L2, L3, choose, construct, algebra]

2.1 Suppose $f x \equiv 0$. After replacing $W$ by a common epic refinement of the witnesses for $g x \equiv g y$ and $f x \equiv 0$, we may assume $f x u = 0$. Then $f y v = f(y v - x u) = f z$, so the epic $v$ witnesses $f y \equiv f z$. [L1, L2, L3, step 1.1, construct, algebra]

2.2 Suppose $h y \equiv 0$. After the same common-refinement step, we may assume $h y v = 0$. Then $h x u = -h(y v - x u) = -h z$, so the epic $u$ witnesses $h x \equiv -h z$. [L1, L2, L3, step 1.1, construct, algebra]

3.1 Step 1.1 gives the required member $z$, while steps 2.1 and 2.2 prove the two moreover clauses. [step 1.1, step 2.1, step 2.2, discharge-construct] ∎
