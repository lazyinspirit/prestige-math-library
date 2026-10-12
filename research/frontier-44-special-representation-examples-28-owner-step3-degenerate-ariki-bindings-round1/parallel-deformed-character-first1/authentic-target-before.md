---
id: def-deformed-tensor-space-for-the-type-a-finite-w-algebra
kind: definition
title: "The deformed tensor space for the type-A finite W-algebra"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       def-degenerate-cyclotomic-hecke-algebra,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       def-classical-complex-matrix-lie-algebras, def-universal-enveloping-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 3.2-3.4, formulas (3.2)-(3.16) and Lemma 3.3, printed pp. 11-14: the filtered bimodule V_c^tensor d with the twisted p-action, the explicit x-action, the cyclotomic right action, and the comparison with the Vust tensor space."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3, Section 3.3, Lemma 3.1 and Lemma 3.3, printed pp. 26-31: the explicit x_1-action on the tensor space and the filtered bimodule structure used in the cyclotomic action."
verification:
  precheck: pass
---

## Definition

Fix the pyramid $\lambda=(0\le p_1\le\cdots\le p_n)$ with columns
$q_1\ge\cdots\ge q_l$, an origin $c=(c_1,\dots,c_l)\in\mathbb C^l$, and
$d\ge0$. Let $\eta_c$ be the algebra automorphism of $U(\mathfrak p)$ with
$\eta_c(e_{i,j})=e_{i,j}+\delta_{i,j}c_{\mathrm{col}(i)}$ (compare the
$\eta$-dictionary of [[def-the-type-a-finite-w-algebra-and-whittaker-category]]),
and let $\Lambda=\sum_j\Lambda_{c_j+q_j-n}$ be the sum of formal fundamental
weights on the integer-coset chains of [[def-degenerate-cyclotomic-hecke-algebra]].

The **truncated (deformed) tensor space** $V_c^{\otimes d}$ is the vector space
$V^{\otimes d}$ equipped with:

- the **left action of $U(\mathfrak p)$ twisted by $\eta_c$**, i.e. the
  ordinary tensor action composed with $\eta_c$;
- the **right action of the cyclotomic quotient $H_d(\Lambda)$** determined on
  the generators by $s_i\mapsto$ the place permutation of the $i$-th and
  $(i+1)$-st tensor factors and
  $$x_1\mapsto\Bigl(e+\sum_{j=1}^N(c_{\mathrm{col}(j)}+q_{\mathrm{col}(j)}-n)e_{j,j}\Bigr)\otimes1^{\otimes(d-1)} -\sum_{k=2}^d\sum_{\mathrm{col}(i)<\mathrm{col}(j)}e_{i,j}\otimes1^{\otimes(k-2)}\otimes e_{j,i}\otimes1^{\otimes(d-k)},$$
  together with $x_{j+1}\mapsto s_jx_js_j+s_j$.

The verification below records that this is well defined and gives the
structure used on this page: the left action restricts from $U(\mathfrak p)$
to $W(\lambda)$ and makes $V_c^{\otimes d}$ a filtered
$(W(\lambda),H_d(\Lambda))$-bimodule; the associated graded of the bimodule is
the Vust tensor space, i.e. $V^{\otimes d}$ with the left $U(\mathfrak g^e)$-action
and the right truncated polynomial/permutation action of
[[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]], with
$\operatorname{gr}x_1=e\otimes1^{\otimes(d-1)}$ and $\operatorname{gr}s_i$ the
place permutation; and the canonical isomorphism
$\mu_d\colon\mathbb C_c\circledast V^{\circledast d}\to V_c^{\otimes d}$ of
Skryabin's equivalence is an isomorphism of $(W(\lambda),H_d)$-bimodules. The
two actions are mutual centralizers of the filtered tensor space; that
statement is proved in the next item.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, the origins $c$, the automorphism $\eta_c$, the weights $\Lambda$, and the displayed operators $x_j,s_i$ on $V^{\otimes d}$.

[F1] The ordinary $\mathfrak p$-tensor action on $V^{\otimes d}$ is well defined and filtered by the column grading; the Casimir/place operators $x_j$ of [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] commute with the $\mathfrak p$-action and satisfy the Hecke relations, and the leading part of $x_1$ in the column grading is the individual $e$-operator on the first factor ([[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]], [[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F2] The minimal polynomial of $x_1$ on $V_c^{\otimes d}$ is $\prod_j(x-a_j)$ with $a_j=c_j+q_j-n$, so the right action of $H_d$ factors through the cyclotomic quotient $H_d(\Lambda)$; the recursion $x_{j+1}=s_jx_js_j+s_j$ determines all higher generators ([[lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient]]).

[F3] Skryabin's equivalence identifies $V_c^{\otimes d}$ with the transported tensor functor $\mathbb C_c\circledast V^{\circledast d}$, and the transport is an isomorphism of $H_d$-modules respecting the generators $x_j,s_i$ ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]]).

[F4] The finite W-algebra $W(\lambda)$ is a filtered quotient of the shifted Yangian with loop associated graded $U(\mathfrak g^e)$, and restricting the left $\mathfrak p$-action to $W(\lambda)$ preserves the filtration ([[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-the-type-a-finite-w-algebra-and-whittaker-category]]).

[F5] The Vust tensor space has the right truncated polynomial/permutation action and the left $U(\mathfrak g^e)$-action as mutual centralizers with the stated leading symbols ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).



## Proof

**Proof technique:** direct.

**Given:** The structures of [F1]-[F5].

1.1 The twisted left action. Composing the ordinary tensor action of $U(\mathfrak p)$ on $V^{\otimes d}$ with the algebra automorphism $\eta_c$ gives a well-defined left action: $\eta_c$ is an algebra automorphism by the same computation as for $\eta$ (it adds a scalar attached to the column to each diagonal matrix unit), and the ordinary action is well defined. Restricting to the subalgebra $W(\lambda)\subseteq U(\mathfrak p)$ gives the left $W(\lambda)$-action. Since $\eta_c$ adds degree-zero column scalars and the tensor action is filtered by the column grading, the restricted action is a filtered action with the same leading part as the untwisted action. [F1, F4, algebra]

1.2 The right action. The displayed formula defines $x_1$ as an operator on $V^{\otimes d}$: the first summand is the individual (shifted) $e$-operator on the first factor and the second summand corrects the cross-column terms; by [F2] its minimal polynomial is $\prod_j(x-a_j)$, so the algebra homomorphism $H_d\to\operatorname{End}(V^{\otimes d})$ with $x_1\mapsto$ this operator and $s_i\mapsto$ place permutations kills the cyclotomic polynomial and descends to $H_d(\Lambda)$; the recursion defines $x_{j+1}$ from $x_j$. This gives the right $H_d(\Lambda)$-action. [F2, construct]

2.1 Compatibility of the two actions. The operators $x_j$ commute with the left $\mathfrak p$-action because they are built from the Casimir and place permutations [F1]; hence the right $H_d(\Lambda)$-action commutes with the left $U(\mathfrak p)$-action, and restricting to $W(\lambda)$ makes $V_c^{\otimes d}$ a $(W(\lambda),H_d(\Lambda))$-bimodule. The filtration is preserved by both actions (left: step 1.1; right: the column grading gives $x_1$ loop-degree-0 leading term and the places are degree-preserving), so the bimodule is filtered. [F1, step 1.1, step 1.2, algebra]

3.1 The associated graded. In the column/loop grading the diagonal and cross-column corrections of $x_1$ have strictly lower degree than the leading $e\otimes1^{\otimes(d-1)}$; the left action of $W(\lambda)$ has leading symbols in $U(\mathfrak g^e)$ by [F4]; and the place permutations $s_i$ have their usual symbols. Therefore the associated graded bimodule is $V^{\otimes d}$ with the left $U(\mathfrak g^e)$-action and the right truncated polynomial/permutation action, i.e. the Vust tensor space of [F5]. [F4, F5, step 2.1, algebra]

4.1 The Skryabin identification. By [F3] the transported tensor space $\mathbb C_c\circledast V^{\circledast d}$ is canonically identified with $V_c^{\otimes d}$ compatibly with the $H_d$-generators; the identification preserves the left action because it is induced by the functor transport, and it preserves the right action by the uniqueness in the Taylor degree recursion. Hence $\mu_d$ is an isomorphism of $(W(\lambda),H_d)$-bimodules. [F3, step 2.1, step 3.1, algebra]

5.1 The mutual centralizer statement. The two actions on the associated graded are mutual centralizers by [F5]; lifting along the separated filtration (the loop filtration of $W(\lambda)$ is separated by [F4] and the cyclotomic monomials of $H_d(\Lambda)$ are bounded) gives the filtered mutual centralizer statement, which is proved in the next item. [F4, F5, step 3.1, algebra] ∎

## Remarks

- The prefix-order sum $\sum_{k=2}^d$ in the definition of $x_1$ records the correction that turns the individual $e$-operator into the full Casimir action; the index $k$ runs over the tensor factors $2,\dots,d$, and the column inequality keeps only the cross-column terms, exactly as in the source's Taylor matrices.

- The leading symbol of $x_1$ is $e\otimes1^{\otimes(d-1)}$ and not the full individual product; this is what makes the associated graded the Vust tensor space rather than a twisted version.
