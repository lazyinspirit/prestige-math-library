---
id: prop-every-finite-language-is-regular
kind: proposition
title: "Every finite language is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-language-by-dfa-recognition, def-finite-cardinality, def-language-over-an-alphabet]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Every finite language over an alphabet $\Sigma$ is regular.

## Facts & Assumptions

**Given:** A finite language $L\subseteq\Sigma^*$.

[L1] A language over $\Sigma$ is regular exactly when it is recognized by some
DFA over $\Sigma$, by [[def-regular-language-by-dfa-recognition]].

[F1] Let $P$ be the set consisting of $\varepsilon$ together with every prefix
of every word in $L$. Because $L$ is finite and each word has only finitely many
prefixes, the set $P$ is finite.

## Proof

**Proof technique:** direct.

1.1 Define a machine $D$ with state set $P\cup\{\bot\}$, start state $\varepsilon$, accepting set $F=L$, and transition rule $$ \delta(p,a)=\begin{cases}pa,&\text{if }pa\in P,\\ \bot,&\text{if }pa\notin P,\end{cases}\qquad \delta(\bot,a)=\bot. $$ By [F1] the state set is finite, and the transition rule is total on $(P\cup\{\bot\})\times\Sigma$. [given, F1, construct]

1.2 We claim that, for every word $w$, the run from $\varepsilon$ ends at the state $w$ when $w\in P$, and ends at $\bot$ when $w\notin P$. This follows by induction on the length of $w$: appending a letter keeps the machine at the longer prefix exactly when that longer word still lies in $P$, and otherwise sends the run to $\bot$, where it remains. [construct, induction]

2.1 A word $w$ is accepted by $D$ exactly when the final state lies in $F=L$. By step 1.2 this happens exactly when $w\in L$, because every word in $L$ is one of its own prefixes and therefore belongs to $P$. [step 1.2, given]

3.1 Thus $L=L(D)$ for the DFA from step 1.1, so [L1] shows that $L$ is regular. [L1, step 1.1, step 2.1] ∎
