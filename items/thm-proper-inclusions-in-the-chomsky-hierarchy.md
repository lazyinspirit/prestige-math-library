---
id: thm-proper-inclusions-in-the-chomsky-hierarchy
kind: theorem
title: "The inclusions in the language-class ladder are proper"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chomsky-hierarchy, thm-pumping-lemma-for-regular-languages, thm-pumping-lemma-for-context-free-languages, def-language-generated-by-a-cfg, cor-cfl-membership-is-decidable, thm-machine-acceptance-is-ce-complete, thm-machine-acceptance-is-undecidable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

For every fixed finite alphabet $\Sigma$ with at least two symbols, the
containments in [[def-chomsky-hierarchy]] are all strict:
$$ \text{regular}\subsetneq\text{context-free}\subsetneq\text{decidable}\subsetneq\text{computably enumerable}. $$

## Facts & Assumptions

**Given:** The classes from [[def-chomsky-hierarchy]] over a finite alphabet
$\Sigma$ containing distinct symbols $a,b$.

[L1] Every regular language satisfies the pumping property from [[thm-pumping-lemma-for-regular-languages]].

[L2] Membership in a context-free language is decidable, by [[cor-cfl-membership-is-decidable]].

[L3] Every context-free language satisfies the pumping property from [[thm-pumping-lemma-for-context-free-languages]].

[L5] $A_{TM}$ is computably enumerable, by [[thm-machine-acceptance-is-ce-complete]].

[L6] $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Proof

**Proof technique:** direct.

1.1 If a language is regular, choose a DFA $D$ recognizing it. Make one CFG whose variables are the states of $D$, whose start variable is the start state, whose productions are $q\to a\,\delta(q,a)$ for each transition, and whose accepting states also have productions $q\to\varepsilon$. Then the grammar generates exactly the words accepted by $D$. Hence every regular language is context-free. [given, construct]

1.2 Every decidable language is recognizable by running its decider and accepting exactly when the decider accepts. Thus $$ \text{decidable}\subseteq\text{computably enumerable}. $$ [given, construct]

2.1 The language $$ L_{ab}:=\{a^n b^n:n\ge 0\} $$ is context-free, for example via the grammar $S\to aSb\mid\varepsilon$. It is not regular: if it were regular, [L1] would give a pumping length $p$, but $a^pb^p$ cannot be pumped inside the first $p$ symbols without changing the number of $a$'s and leaving the number of $b$'s fixed. Therefore $$ \text{regular}\subsetneq\text{context-free}. $$ [L1, step 1.1]

2.2 Relabel the binary alphabet of $A_{TM}$ injectively by the two chosen symbols $a,b\in\Sigma$. This computable letter-by-letter bijection preserves recognizability and decidability. By [L5] and [L6], the relabeled language over $\Sigma$ is computably enumerable but not decidable. Therefore $$ \text{decidable}\subsetneq\text{computably enumerable}. $$ [L5, L6, step 1.2, construct]

3.1 Every context-free language is decidable by [L2], so $$ \text{context-free}\subseteq\text{decidable}. $$ [L2, step 2.1]

4.1 The language $$L_{aba}:=\{a^nb^na^n:n\ge0\}$$ is decidable by checking the three blocks and comparing their lengths. It is not context-free: if $p$ were a pumping length from [L3], then a pumping window of length at most $p$ in $a^pb^pa^p$ could meet at most two consecutive blocks and could not meet both $a$-blocks. Pumping a nonempty part therefore changes at least one of the three required counts without changing all three equally, or destroys the block order. This contradicts [L3]. Hence $$ \text{context-free}\subsetneq\text{decidable}. $$ [L3, step 3.1, algebra]

5.1 Steps 2.1, 4.1, and 2.2 prove that all three containments are strict over the fixed alphabet $\Sigma$. [step 2.1, step 4.1, step 2.2] ∎
