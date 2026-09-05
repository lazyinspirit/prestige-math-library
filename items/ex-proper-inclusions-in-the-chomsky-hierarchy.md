---
id: ex-proper-inclusions-in-the-chomsky-hierarchy
kind: example
title: "Witness languages for the proper inclusions in the Chomsky hierarchy"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-proper-inclusions-in-the-chomsky-hierarchy, thm-pumping-lemma-for-regular-languages, thm-pumping-lemma-for-context-free-languages, thm-machine-acceptance-is-ce-complete, thm-machine-acceptance-is-undecidable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Example

A standard witness list for the strict containments is:

- regular versus context-free:
  $$ L_{ab}=\{a^n b^n:n\ge 0\}; $$
- context-free versus decidable:
  $$ L_{abc}=\{a^n b^n c^n:n\ge 0\}; $$
- decidable versus computably enumerable:
  $$ A_{TM}. $$

## Facts & Assumptions

**Given:** The three witness languages listed in the example.

[L1] The three containments regular $\subsetneq$ context-free $\subsetneq$ decidable $\subsetneq$ computably enumerable are all strict, by [[thm-proper-inclusions-in-the-chomsky-hierarchy]].

[L2] Every regular language satisfies the regular pumping property, by [[thm-pumping-lemma-for-regular-languages]].

[L3] Every context-free language satisfies the context-free pumping property, by [[thm-pumping-lemma-for-context-free-languages]].

[L4] The acceptance problem $A_{TM}$ is computably enumerable, by [[thm-machine-acceptance-is-ce-complete]].

[L5] The acceptance problem $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Verification

**Proof technique:** direct.

1.1 The language $L_{ab}$ is context-free via the grammar $S\to aSb\mid\varepsilon$. If it were regular, [L2] would give a pumping length $p$, but pumping the word $a^pb^p$ inside its first $p$ symbols changes only the number of $a$'s. So $L_{ab}$ witnesses $$ \text{regular}\subsetneq\text{context-free}. $$ [L2, given]

1.2 The language $L_{abc}$ is decidable by a machine that first checks the form $a^*b^*c^*$ and then counts the three block lengths and compares them. If it were context-free, [L3] would give a pumping length $p$ for the word $a^pb^pc^p$, but any factor $vwx$ with $|vwx|\le p$ lies in at most two consecutive blocks, so pumping $v$ and $x$ changes at most two symbol counts and destroys equality of all three counts. Thus $L_{abc}$ witnesses $$ \text{context-free}\subsetneq\text{decidable}. $$ [L3, given]

1.3 By [L4] and [L5], $A_{TM}$ is computably enumerable but not decidable. So it witnesses $$ \text{decidable}\subsetneq\text{computably enumerable}. $$ [L4, L5]

2.1 These are exactly the three strict containments proved in [L1]. The point of the example is that one should keep the witnesses separate rather than expecting one language to witness every gap at once. [L1, step 1.1, step 1.2, step 1.3] ∎
