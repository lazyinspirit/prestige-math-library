---
id: "lem-definable-subsets-of-constructible-levels-are-small"
kind: "lemma"
title: "Definable subsets of a constructible level are small"
deps: ["def-definable-subsets-of-a-membership-structure", "lem-cardinality-of-infinite-constructible-levels", "lem-cardinality-of-a-well-orderable-set", "thm-hessenberg", "prop-constructible-levels-transitivity-ordinals-and-rank"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
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

In ZF, for every infinite ordinal $\alpha$, $\operatorname{Def}(L_\alpha)$ is well-orderable and has cardinality $|\alpha|$.

## Facts & Assumptions

**Given:** ZF and an infinite ordinal alpha.

[F1] [[def-definable-subsets-of-a-membership-structure]] describes Def by formula codes and finite parameter tuples, including the empty tuple.

[F2] [[lem-cardinality-of-infinite-constructible-levels]] proves $|L_\alpha|=|\alpha|$ with no AC.

[F3] [[lem-cardinality-of-a-well-orderable-set]] clauses (a)–(e) give cardinality for a well-orderable set in ZF.

[F4] [[thm-hessenberg]] gives a pairing bijection for each infinite cardinal.

[F5] [[prop-constructible-levels-transitivity-ordinals-and-rank]] proves transitivity of $L_\alpha$.

## Proof

1.1 Put $\kappa=|\alpha|$ and fix a bijection from $L_\alpha$ to $\kappa$ using F2. Iterate one pairing bijection from F4 and encode lengths to inject all formula/finite-tuple pairs into $\kappa$. Each definable subset has a code by F1. Its least code exists; assigning that code gives an injection $\operatorname{Def}(L_\alpha)\to\kappa$, hence a well-order and an upper bound by F3. Empty parameter tuples are among these codes. [F1, F2, F3, F4]

1.2 For every $a\in L_\alpha$, transitivity from F5 gives $a\subseteq L_\alpha$; the formula $x\in a$ with the single parameter a defines exactly a over $L_\alpha$. Thus $L_\alpha\subseteq\operatorname{Def}(L_\alpha)$, providing a lower bound of $\kappa$ by F2. [F1, F2, F5]

2.1 Both sets are well-orderable by step 1.1 and F2. The upper and lower bounds therefore give $|\operatorname{Def}(L_\alpha)|=\kappa=|\alpha|$. The only selections in the proof were one bijection for the already well-orderable level and one cardinal pairing; least codes supply all subset representatives without AC. [F2, F3, step 1.1, step 1.2] ∎
