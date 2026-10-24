---
id: thm-greibach-normal-form
kind: theorem
title: "Every context-free language has an equivalent grammar in Greibach normal form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-chomsky-normal-form, def-greibach-normal-form, lem-gnf-substitution-step-preserves-language, lem-gnf-left-recursion-elimination-preserves-language]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "CSC444 CFLs and PDAs"
      url: "https://condor.depaul.edu/glancast/444class/docs/lecOct23.html"
---

## Statement

Every context-free grammar has an equivalent context-free grammar in Greibach
normal form.

## Facts & Assumptions

**Given:** A context-free grammar $G$.

[L1] By [[thm-chomsky-normal-form]], we may first replace $G$ by an equivalent grammar in Chomsky normal form.

[L2] If a production $A\to uBv$ is replaced by the family $A\to uw_1v,\ldots,A\to uw_mv$ formed from all productions of $B$, then the generated language is preserved, by [[lem-gnf-substitution-step-preserves-language]].

[L3] Eliminating immediate left recursion preserves the generated language, by [[lem-gnf-left-recursion-elimination-preserves-language]].

[L4] Greibach normal form means that every nonexceptional production has the form $A\to a\alpha$ with leading terminal $a$, by [[def-greibach-normal-form]].

## Proof

**Proof technique:** direct.

1.1 Replace $G$ by an equivalent CNF grammar $G_1$ as in [L1], and order its original variables as $A_1,\ldots,A_n$. In a forward pass through this list, fix $A_i$ and repeatedly use [L2] to remove every production of the form $A_i\to A_j\alpha$ with $j<i$. When that is done, use [L3] to eliminate the remaining immediate left-recursive productions $A_i\to A_i\beta$, introducing an auxiliary variable $B_i$ if needed. After stage $i$, every production of $A_i$ begins either with a terminal or with an original variable $A_k$ satisfying $k>i$, and every new production of $B_i$ begins either with a terminal or with an original variable. [L1, L2, L3, construct]

2.1 In particular, after the forward pass the productions of $A_n$ already begin with terminals, because there is no index $k>n$. Now argue downward on $i=n-1,n-2,\ldots,1$. Assume the productions of $A_{i+1},\ldots,A_n$ already begin with terminals. Every production of $A_i$ begins either with a terminal or with some $A_k$ having $k>i$ by step 1.1, so repeated use of [L2] substitutes the full terminal-leading production family of each such $A_k$ into the leading occurrence. Thus every production of $A_i$ can also be made terminal-leading without changing the language. [L2, step 1.1, induction]

3.1 The same downward substitutions clean every auxiliary variable introduced during the left-recursion eliminations. By step 1.1, each production of such a $B_i$ already begins either with a terminal or with an original variable $A_k$. Once the productions of each $A_k$ are terminal-leading by step 2.1, repeated use of [L2] removes that leading variable from the productions of $B_i$ as well. Therefore, after finitely many substitutions, every production in the whole grammar begins with a terminal, except possibly the start-symbol rule $S\to\varepsilon$. [L2, step 1.1, step 2.1]

4.1 Because the construction started from CNF, the symbols after the first terminal in any rewritten production are variables, and the optional start-symbol rule $S\to\varepsilon$ is preserved only in the exceptional case allowed by [L4]. Hence the final grammar is in Greibach normal form, and [L2] and [L3] preserved equivalence throughout. [L4, step 1.1, step 2.1, step 3.1] ∎
