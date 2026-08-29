---
id: lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable
kind: lemma
title: "The trivial words of a recursively presented group form a recursively enumerable language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-recursive-and-finite-group-presentations, prop-equality-of-words-in-a-presentation, prop-normal-closure-is-products-of-conjugates]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

Let $\langle X\mid R\rangle$ be a recursive presentation. Then the language of
words on $X\sqcup X^{-1}$ that represent the identity in the presented group is
recursively enumerable.

## Facts & Assumptions

**Given:** A recursive presentation $\langle X\mid R\rangle$ and a word $w$ on $X\sqcup X^{-1}$.

[L1] In a presentation $\langle X\mid R\rangle$, a word represents the identity exactly when it lies in the normal closure of $R$ inside the free group on $X$. ([[prop-equality-of-words-in-a-presentation]])

[L2] The normal closure of $R$ is the set of finite products of conjugates of elements of $R$ and their inverses. ([[prop-normal-closure-is-products-of-conjugates]])

## Proof

**Proof technique:** direct.

1.1 Because the relator language of the recursive presentation is recursively enumerable, there is a procedure that lists all relator words in $R$ and hence also all pairs $(r,\varepsilon)$ with $r\in R$ and $\varepsilon\in\{1,-1\}$. By dovetailing over lengths, one can therefore enumerate all finite lists of conjugators and signed relators. [given, L2]

2.1 First freely reduce the input word $w$ to a reduced word $\overline w$. For each finite list from step 1.1, form the corresponding product of conjugates from [L2] and freely reduce it in the ambient free group. Whenever the result is $\overline w$, accept. If $w$ is trivial in the presented group, then [L1] and [L2] supply a relator expression representing the same free-group element as $w$, so its free reduction is $\overline w$ and the search eventually halts; if $w$ is nontrivial, the search may run forever. [L1, L2, step 1.1]

3.1 Hence the trivial words are exactly the words on which this procedure halts, so they form a recursively enumerable language. [step 2.1, algebra] ∎
