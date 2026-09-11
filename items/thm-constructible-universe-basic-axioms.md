---
id: "thm-constructible-universe-basic-axioms"
kind: "theorem"
title: "Elementary ZF axioms inside L"
deps: ["def-constructible-hierarchy-and-constructible-rank", "prop-constructible-levels-transitivity-ordinals-and-rank"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.7 p15; Marks Lemma 20.5 p87
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ambient ZF, the class $L$ satisfies Extensionality, Foundation, Empty Set, Pairing, Union and Infinity, each interpreted by relativization to $L$.

## Facts & Assumptions

**Given:** ZF. Actual Foundation witnesses lie in L by transitivity; pairs and unions are explicitly defined over one level; actual omega supplies Infinity without internal Replacement or Power Set.

[F1] [[prop-constructible-levels-transitivity-ordinals-and-rank]]: The levels and L are transitive, levels nest, and every ordinal belongs to L.

[F2] [[def-constructible-hierarchy-and-constructible-rank]]: $L_{gamma+1}=\operatorname{Def}(L_\gamma)$, where Def consists of the subsets definable over the membership structure using finitely many parameters.

## Proof

1.1 If $a,b\in L$ have the same members in L, transitivity puts all their actual members in L, so ambient Extensionality gives $a=b$. If $a\in L$ is nonempty, ambient Foundation gives $u\in a$ with $u\cap a=\varnothing$; transitivity puts $u$ in L, so it is also an internal Foundation witness. Empty Set holds because $\varnothing\in L_1$. [F1]

2.1 For $a,b\in L$, put both parameters in one nonempty level $L_\gamma$. The formula $x=a\lor x=b$ defines $\{a,b\}$ as a subset of this level, hence puts it in $L_{\gamma+1}$. For $a\in L_\gamma$, transitivity twice ensures that every member of $\bigcup a$ is in $L_\gamma$; the formula $\exists y\in a\ (x\in y)$ over that level therefore defines exactly $\bigcup a$. Its successor contains this union, including the empty union. These actual sets satisfy the relativized Pairing and Union axioms. [F1, F2, step 1.1]

3.1 The actual ordinal $\omega$ belongs to L. It contains empty and, with each $n\in\omega$, the actual successor $n\cup\{n\}$. These finite ordinals belong to L; the pairs and unions used in the successor description are the actual operations by step 2.1. Thus $\omega$ is an internal inductive set, proving Infinity and completing the six asserted axioms. [F1, step 2.1] ∎
