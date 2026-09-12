---
id: "lem-cardinality-of-infinite-constructible-levels"
kind: "lemma"
title: "Cardinality of infinite constructible levels"
deps: ["def-constructible-hierarchy-and-constructible-rank", "thm-canonical-definable-global-well-order-of-l", "lem-cardinality-of-a-well-orderable-set", "thm-hessenberg", "prop-constructible-levels-transitivity-ordinals-and-rank"]
justified_by: []
forward_refs: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Lietz, Set Theory, section 7.2, Lemma 7.11 and Theorem 7.13 (hulls), Proposition 7.14 (counting), printed pp.57–59; local choice-free coding argument"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

ZF proves that $L_\alpha$ is well-orderable and $|L_\alpha|=|\alpha|$ for every infinite ordinal $\alpha$.

## Facts & Assumptions

**Given:** ZF and an infinite ordinal alpha. All coding is external to the level; the level need not model ZF.

[F1] [[def-constructible-hierarchy-and-constructible-rank]] makes the first stage containing x a successor $\rho_L(x)+1$, with x definable over $L_{\rho_L(x)}$ from finitely many parameters there.

[F2] [[thm-canonical-definable-global-well-order-of-l]] well-orders each level and supplies a fixed formula coding.

[F3] [[lem-cardinality-of-a-well-orderable-set]] gives cardinalities and transport along bijections in ZF, in clauses (a)–(e).

[F4] [[thm-hessenberg]] gives a bijection between $\kappa\times\kappa$ and $\kappa$ for every infinite cardinal $\kappa$ without AC.

[F5] [[prop-constructible-levels-transitivity-ordinals-and-rank]] gives $\operatorname{Ord}\cap L_\alpha=\alpha$ and nesting of levels.

## Proof

1.1 The order from F2 restricts to a well-order of $L_\alpha$. F5 gives the injection $\alpha\hookrightarrow L_\alpha$ by inclusion. Thus both cardinals exist and $|\alpha|\le |L_\alpha|$. [F2, F3, F5]

1.2 Encode descriptions by finite rooted ordered trees. A node carries a label $(\gamma,i)$ with $\gamma<\alpha$ and i the code of a formula defining a subset of $L_\gamma$; its ordered children describe the finite tuple of parameters. A valid tree evaluates its children first and then takes the subset defined by that formula over the indicated level. Empty-level descriptions use the prescribed $\operatorname{Def}(\varnothing)=\{\varnothing\}$. Each valid tree has at most one value, by uniqueness of satisfaction and of its recursively evaluated parameters. [F1, construct]

2.1 Every $x\in L_\alpha$ has a valid finite description. Induct on $\rho_L(x)$. Choose one definition of x over $L_\gamma$, where $\gamma=\rho_L(x)<\alpha$. Each parameter has smaller constructible rank by F1 and nesting. By the induction hypothesis it has a finite description; finitely many existential choices of descriptions are provable in ZF by induction on the tuple length. Joining those finitely many finite trees under the root $(\gamma,i)$ gives a finite description of x. The zero-parameter case is a single node, covering the first stage. This induction proves existence, without choosing definitions simultaneously for all x. [F1, F5, step 1.2]

3.1 Put $\kappa=|\alpha|$. Fix one bijection $\alpha\to\kappa$ from F3 and one pairing bijection on $\kappa$ from F4. Encode node labels and finitely many punctuation symbols in $\kappa$. Iterating this fixed pairing and including the string length injects all finite strings, hence all the described finite trees, into $\kappa$. For a nonempty fibre of the tree-evaluation map take its least ordinal code. Step 1.2 ensures different values have disjoint fibres; step 2.1 ensures every x has a nonempty fibre. Least codes therefore give an injection $L_\alpha\to\kappa$. [F3, F4, step 1.2, step 2.1]

4.1 The upper bound in step 3.1 and the lower bound in step 1.1 imply $|L_\alpha|=|\alpha|$. In particular at $\alpha=\omega$ the finite-tree codes are natural-number codes and the lower bound consists of the finite ordinals. The same code alphabet works at successor and limit ordinals alike; no family of levelwise bijections, and no AC, was used. [F3, step 1.1, step 3.1] ∎
