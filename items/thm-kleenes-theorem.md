---
id: thm-kleenes-theorem
kind: theorem
title: "A language is regular if and only if some regular expression denotes it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-regular-expression-to-epsilon-nfa, thm-subset-construction-preserves-language, thm-dfa-to-regular-expression, def-regular-language-by-dfa-recognition]
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
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

Let $L\subseteq\Sigma^*$. Then $L$ is regular if and only if there exists a
regular expression $R$ over $\Sigma$ with
$$ \mathcal L(R)=L. $$

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$.

[L1] By [[def-regular-language-by-dfa-recognition]], a language is regular exactly when some DFA recognizes it.

[L2] By [[thm-regular-expression-to-epsilon-nfa]], every regular expression has an equivalent epsilon-NFA.

[L3] By [[thm-subset-construction-preserves-language]], the subset construction turns an epsilon-NFA into a DFA with the same recognized language.

[L4] By [[thm-dfa-to-regular-expression]], every DFA language is denoted by some regular expression.

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\mathcal L(R)=L$ for some regular expression $R$. By [L2], there is an epsilon-NFA recognizing $L$, and by [L3] there is then a DFA recognizing the same language. Therefore [L1] implies that $L$ is regular. [L1, L2, L3, given]

1.2 Conversely, suppose that $L$ is regular. By [L1], some DFA $D$ recognizes $L$. Then [L4] gives a regular expression $R$ with $\mathcal L(R)=L(D)=L$. [L1, L4, given]

2.1 Steps 1.1 and 1.2 prove the forward and reverse implications. [step 1.1, step 1.2] ∎
