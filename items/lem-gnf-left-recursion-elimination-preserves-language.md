---
id: lem-gnf-left-recursion-elimination-preserves-language
kind: lemma
title: "Eliminating immediate left recursion preserves the language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-leftmost-and-rightmost-derivation, def-language-generated-by-a-cfg]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "CSC444 CFLs and PDAs"
      url: "https://condor.depaul.edu/glancast/444class/docs/lecOct23.html"
---

## Statement

Suppose the productions of a variable $A$ in a context-free grammar are exactly
$$ A\to Au_1,\ldots,A\to Au_r,\qquad A\to v_1,\ldots,A\to v_s, $$
where none of the words $v_j$ begins with $A$. Introduce a fresh variable $R$
and replace those productions by
$$ A\to v_1,\ldots,A\to v_s,\qquad A\to v_1R,\ldots,A\to v_sR, $$
$$ R\to u_1,\ldots,R\to u_r,\qquad R\to u_1R,\ldots,R\to u_rR, $$
leaving every other production unchanged.

Then the resulting grammar generates the same language as the original grammar.

## Facts & Assumptions

**Given:** The original grammar and the rewritten grammar related by the
displayed immediate-left-recursion elimination step.

[L1] Leftmost derivations always rewrite the leftmost remaining variable, by
[[def-leftmost-and-rightmost-derivation]].

[L2] The language of a grammar is determined by the terminal words derivable
from its start symbol, by [[def-language-generated-by-a-cfg]].

## Proof

**Proof technique:** direct.

1.1 Consider a leftmost derivation segment in the original grammar beginning with $A$. Because every left-recursive rule has the form $A\to Au_i$, any maximal initial block of left-recursive steps must look like $$ A\Rightarrow Au_{i_1}\Rightarrow Au_{i_2}u_{i_1}\Rightarrow\cdots\Rightarrow Au_{i_k}\cdots u_{i_1}\Rightarrow v_j u_{i_k}\cdots u_{i_1}. $$ So the contribution of this segment is always one non-left-recursive word $v_j$ followed by a finite concatenation of the $u_i$. [L1, given]

2.1 The new variable $R$ generates exactly the nonempty finite concatenations of the $u_i$: use $R\to u_i$ for a one-term concatenation and $R\to u_iR$ to prepend further $u_i$'s. Therefore the segment in step 1.1 is reproduced in the rewritten grammar either by $A\to v_j$ when $k=0$ or by $A\to v_jR$ followed by a derivation of the same tail from $R$ when $k\ge 1$. [construct, step 1.1]

3.1 Conversely, any derivation segment in the rewritten grammar beginning with $A$ either uses $A\to v_j$ directly or uses $A\to v_jR$ followed by a derivation of a finite concatenation of the $u_i$ from $R$. Reversing the regrouping in step 1.1 turns that segment back into a block of left-recursive uses of $A\to Au_i$ ending with $A\to v_j$ in the original grammar. [step 2.1]

4.1 Since all other productions are unchanged, steps 2.1 and 3.1 convert derivations of terminal words back and forth without changing the yield. Hence [L2] gives equality of the generated languages. [L2, step 2.1, step 3.1] ∎
