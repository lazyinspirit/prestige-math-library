---
id: cor-distinguishable-prefix-nonregularity-criterion
kind: corollary
title: "Infinitely many pairwise distinguishable prefixes force nonregularity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-myhill-nerode-characterization, def-distinguishing-word]
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
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Statement

Let $L\subseteq\Sigma^*$. If there are infinitely many words in $\Sigma^*$ that
are pairwise distinguished by suffixes, then $L$ is not regular.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$ with infinitely many pairwise distinguishable words.

[L1] By [[def-distinguishing-word]], a suffix distinguishes two words exactly when those two words are not Nerode-equivalent.

[L2] By [[thm-myhill-nerode-characterization]], a regular language has only finitely many Nerode classes.

## Proof

**Proof technique:** direct.

1.1 If two words are pairwise distinguished by suffixes, then [L1] shows that they lie in distinct Nerode classes. [L1, given]

2.1 Therefore the infinitely many given words occupy infinitely many Nerode classes. By [L2], $L$ cannot be regular. [L2, step 1.1] ∎
