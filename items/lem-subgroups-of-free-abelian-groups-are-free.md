---
id: lem-subgroups-of-free-abelian-groups-are-free
kind: lemma
title: "Subgroups of free abelian groups are free"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-module-on-a-set-and-standard-basis, lem-subgroups-of-z-are-cyclic, def-axiom-of-choice, thm-well-ordering-theorem, thm-transfinite-induction]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-coordinate-and-choice-contract-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Choice. Every subgroup of a free abelian group is free
abelian.

## Facts & Assumptions

**Given:** A free abelian group $F$ with basis $(e_b)_{b\in B}$, a subgroup $H\leq F$, and the Axiom of Choice.

[L1] Every element of $F$ has a unique finite integer-coordinate expansion in this basis ([[def-free-module-on-a-set-and-standard-basis]]).

[L2] Every subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique integer $d\geq0$ ([[lem-subgroups-of-z-are-cyclic]]).

[L3] AC chooses an element from each member of a set-indexed family of nonempty sets ([[def-axiom-of-choice]]), and implies that $B$ admits a well-order ([[thm-well-ordering-theorem]]).

[L4] Induction over any supplied well-order is valid in ZF ([[thm-transfinite-induction]]).

## Proof

**Proof technique:** direct.

1.1 Well-order $B$. For $b\in B$, let $F_{\leq b}$ be the span of the $e_c$ with $c\leq b$, and put $H_{\leq b}=H\cap F_{\leq b}$. The $b$-coordinate homomorphism $\pi_b:F_{\leq b}\to\mathbb Z$ has image $\pi_b(H_{\leq b})=d_b\mathbb Z$ for a uniquely determined $d_b\geq0$. Put $D=\{b\in B:d_b>0\}$. [given, L1, L2, L3, construct]

2.1 For each $b\in D$ the set $X_b=\{x\in H_{\leq b}:\pi_b(x)=d_b\}$ is nonempty. Apply AC to this set-indexed family and fix $x_b\in X_b$ simultaneously for all $b\in D$. These are the only choices of lifts in the argument; they do not depend recursively on previously chosen bases. [step 1.1, L3, choose]

3.1 We prove by well-ordered induction on $b$ that $H_{\leq b}$ is spanned by $x_c$ with $c\in D$ and $c\leq b$. Suppose this is proved below $b$, and take $h\in H_{\leq b}$. If $d_b>0$, write $\pi_b(h)=q d_b$ and set $h'=h-qx_b$; if $d_b=0$, set $h'=h$. In both cases $h'\in H$ has finite support strictly below $b$. If that support is empty, $h'=0$. Otherwise it has a greatest element $c<b$, and $h'\in H_{\leq c}$ is in the required span by the induction hypothesis. Thus so is $h$. Conversely all the indicated $x_c$ belong to $H_{\leq b}$. This verifies the inductive implication, including the least-element and limit cases, and [L4] proves the assertion for every $b$. [step 1.1, step 2.1, L1, L4, induction]

4.1 The family $(x_b)_{b\in D}$ is linearly independent. Indeed, in a nonzero finite relation choose the greatest index $b$ with nonzero coefficient $n_b$. Its $b$-coordinate is $n_b d_b$, since all smaller-indexed vectors have zero $b$-coordinate. This is nonzero in $\mathbb Z$, contradicting the relation. Every nonzero $h\in H$ has a greatest basis-support index $b$ and belongs to $H_{\leq b}$, so step 3.1 also proves spanning of all $H$. Hence $(x_b)_{b\in D}$ is a basis. If $B$ or $D$ is empty the same reasoning says $H=0$ with empty basis. [step 2.1, step 3.1, L1, algebra] ∎

## Remarks

AC is used to well-order the supplied basis and to select the family of coordinate lifts. Given a well-ordered basis and that family of lifts, the remaining proof is choice-free. No arbitrary-rank PID theorem, projective splitting, or transfinite recursion is being imported implicitly.
