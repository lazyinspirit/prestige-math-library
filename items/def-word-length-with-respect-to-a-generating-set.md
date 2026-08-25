---
id: def-word-length-with-respect-to-a-generating-set
kind: definition
title: "Word length of a group element with respect to a generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finitely-generated-group, def-generated-subgroup, thm-well-ordering-principle, def-group-power, def-alphabet-words-and-reduction]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a group and let $S \subseteq G$ be a generating set. For
$g \in G$, consider the set

$$L_S(g) := \{\, n \in \mathbb{N} : g = s_1 \cdots s_n \text{ for some } s_1,\dots,s_n \in S \cup S^{-1} \,\}.$$

This set is nonempty because $S$ generates $G$. Indeed, the set of all finite
products of elements of $S\cup S^{-1}$ contains the identity, is closed under
products and inverses, and contains $S$, so it is a subgroup containing $S$;
conversely every subgroup containing $S$ contains all such products. It is
therefore exactly $\langle S\rangle=G$ by [[def-generated-subgroup]]. By
[[thm-well-ordering-principle]], it has a least element. The **word length** of
$g$ with respect to $S$ is that least element and is written

$$|g|_S := \min L_S(g).$$

Thus $|g|_S=0$ exactly when $g$ is the empty product, that is, the identity of
$G$. When $S$ is finite, such expressions are obtained by evaluating words in
the formal alphabet $S \sqcup S^{-1}$ of
[[def-alphabet-words-and-reduction]]; distinct formal words can evaluate to the
same product when two letters represent the same group element of $G$.
