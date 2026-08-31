---
id: thm-cfls-are-not-closed-under-intersection
kind: theorem
title: "Context-free languages are not closed under intersection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-generated-by-a-cfg, thm-cfl-closure-under-union-concatenation-star-and-homomorphism, thm-pumping-lemma-for-context-free-languages]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 11"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html"
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Statement

Context-free languages are not closed under intersection.

## Facts & Assumptions

**Given:** The languages
$$ L_1=\{a^n b^n c^m:n,m\ge 0\},\qquad L_2=\{a^m b^n c^n:m,n\ge 0\}. $$

[L1] By [[def-language-generated-by-a-cfg]], a language is context-free exactly when some context-free grammar generates it.

[L2] By [[thm-pumping-lemma-for-context-free-languages]], every context-free language satisfies the CFL pumping property.

## Proof

**Proof technique:** direct.

1.1 The grammar $S_1\to AB$, $A\to aAb\mid\varepsilon$, $B\to cB\mid\varepsilon$ generates $L_1$, and the grammar $S_2\to CD$, $C\to aC\mid\varepsilon$, $D\to bDc\mid\varepsilon$ generates $L_2$. Therefore both languages are context-free by [L1]. [L1, given, construct]

2.1 A word belongs to $L_1\cap L_2$ exactly when its number of $a$'s equals its number of $b$'s and its number of $b$'s equals its number of $c$'s. Hence $L_1\cap L_2=\{a^n b^n c^n:n\ge 0\}$. [step 1.1]

3.1 Suppose $L_1\cap L_2$ were context-free. Let $p$ be the pumping length from [L2], and consider the word $a^p b^p c^p$. Any factor $vwx$ with $|vwx|\le p$ lies within one block or crosses only one of the two block boundaries. Pumping $v$ and $x$ therefore changes at most two of the three symbol counts, so for $i=0$ or $i=2$ the word $uv^i wx^i y$ cannot still have equal numbers of $a$'s, $b$'s, and $c$'s. This contradicts [L2]. [L2, step 2.1]

4.1 Thus $L_1\cap L_2$ is not context-free even though each of $L_1$ and $L_2$ is. So context-free languages are not closed under intersection. [step 1.1, step 3.1] ∎
