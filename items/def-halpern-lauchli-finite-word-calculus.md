---
id: def-halpern-lauchli-finite-word-calculus
kind: definition
title: "The finite word calculus for the Halpern–Läuchli argument"
status: draft
origin: pipeline
deps: [def-halpern-lauchli-finitistic-trees-density-and-matrices]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), §2, pp. 362–363"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
    - title: "Monk, Set theory following Jech (2024), proof of Theorem 29.28, pp. 662–663"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Fix a positive integer $d$.  For each $1\le i\le d$ introduce four formal
quantifier symbols

$$\exists A_i,\qquad \forall x_i,\qquad \forall a_i,\qquad \exists x_i.$$

The language $L_d$ consists of the words of length $2d$ that, for every
coordinate $i$, contain exactly one of the following ordered pairs:

$$\exists A_i\ \cdots\ \forall x_i \qquad\text{or}\qquad \forall a_i\ \cdots\ \exists x_i.$$

The displayed order is part of the condition, while symbols belonging to
different coordinates may be interleaved.  Thus every word chooses one of two
coordinate types and uses precisely two symbols for that coordinate.

Write $U,V$ for possibly empty words.  A **one-step derivation** is an instance
of one of the following schemes, provided both displayed words belong to
$L_d$.

1. **Elementary commutation.** Two adjacent existential symbols may be
   interchanged, two adjacent universal symbols may be interchanged, and an
   existential symbol may be moved to the right past an adjacent universal
   symbol:

   $$U\exists\alpha\exists\beta V\longleftrightarrow U\exists\beta\exists\alpha V,$$
   $$U\forall\alpha\forall\beta V\longleftrightarrow U\forall\beta\forall\alpha V,$$
   $$U\exists\alpha\forall\beta V\longrightarrow U\forall\beta\exists\alpha V.$$

2. **Matched-pair replacement.** For one coordinate $i$,

   $$U\forall a_i\exists x_iV\longleftrightarrow U\exists A_i\forall x_iV.$$

3. **Finite block permutation.** If $\sigma$ is a permutation of
   $\{1,\ldots,d\}$ and $1\le r<d$, then

   $$U\,\forall a_{\sigma(1)}\cdots\forall a_{\sigma(r)} \exists A_{\sigma(r+1)}\cdots\exists A_{\sigma(d)}\,V$$
   $$\longrightarrow U\,\exists A_{\sigma(r+1)}\cdots\exists A_{\sigma(d)} \forall a_{\sigma(1)}\cdots\forall a_{\sigma(r)}\,V.$$

Here Rule 3 applies only when the two displayed blocks are adjacent.  It is not
ordinary pointwise quantifier logic; its later semantic use requires finite
density-preserving thinning.

For $W,W'\in L_d$, write $W\vdash_dW'$ if there is a finite, possibly empty,
sequence of one-step derivations from $W$ to $W'$.  This is the
reflexive-transitive closure of the three rule classes.  The definition is
purely syntactic and makes no semantic claim about trees or a set $Q$.
