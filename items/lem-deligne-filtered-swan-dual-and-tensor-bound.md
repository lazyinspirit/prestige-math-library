---
dependency_level: 8
id: lem-deligne-filtered-swan-dual-and-tensor-bound
kind: lemma
title: "Dual and tensor Swan bounds for specified finite ramification filtrations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-deligne-finite-invariants-duals-and-tensor-codimension
  - def-swan-conductor-of-an-l-adic-inertia-representation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Section3.6 Lemma3.6.3; a sharper invariant-codimension proof"
---

## Statement

Let $E$ have characteristic zero, and let $V,W$ be representations of a group $I$ of dimensions $m,n$. Suppose a decreasing family $I^v$, $v>0$, has finite image on $V\oplus W$, and that the functions of codimensions of invariants are bounded step functions vanishing for sufficiently large $v$. Define
$$s(V)=\int_0^\infty\operatorname{codim}V^{I^v}\,dv.$$
Then
$$s(V^\vee)=s(V),\qquad s(V\otimes W)\le n s(V)+m s(W).$$
For a common finite singularity set, suppose ranks are positive, $s_i$ are the sums of these Swan integrals, and $a_i$ the numbers of singular points of two factors. If the tensor is unramified wherever both factors are, its rank-plus-singularities-plus-Swan complexity is at most $(m+a_1+s_1)(n+a_2+s_2)$. This statement works with a specified filtration; it does not prove the existence or quotient independence of the absolute upper ramification filtration.

## Facts & Assumptions

**Given:** The representations and finite-image step-filtration data in the Statement.

[F1] Finite-group invariants have equal dual dimension, and tensor invariant codimensions satisfy the rank-weighted inequality. [[lem-deligne-finite-invariants-duals-and-tensor-codimension]]

[F2] The Swan convention integrates codimensions of positive upper-group invariants. [[def-swan-conductor-of-an-l-adic-inertia-representation]]

## Proof

1.1 For each $v$, use the finite image of $I^v$ in the action on $V\oplus W$. Its induced dual and tensor actions factor through that same finite group. Applying [F1] gives equality of the two dual codimensions and the tensor inequality pointwise in $v$. Each integral is a finite sum of interval lengths times constant nonnegative codimensions, by the given step-function hypotheses, so integration preserves those equalities and inequalities. This proves both formulas and identifies them with the Swan convention [F2] when the specified filtration is the positive upper filtration. [given, F1, F2, algebra]

2.1 Let $c_1=m+a_1+s_1$ and $c_2=n+a_2+s_2$. Tensor rank is $mn$, its singular set is contained in the union, and step 1.1 summed over that union bounds its total Swan by $n s_1+m s_2$. Its complexity is therefore at most $mn+a_1+a_2+n s_1+m s_2$. Since $m,n\ge1$, expansion of $c_1c_2$ shows that it is at least this quantity: the linear singular terms are $n a_1+m a_2\ge a_1+a_2$, and all additional terms are nonnegative. The same formulas include zero Swan conductors or an empty singular set; the positive-rank hypothesis is retained for this last comparison. [given, step 1.1, algebra] ∎
