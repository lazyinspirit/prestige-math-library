---
id: thm-brittons-lemma
kind: theorem
title: "Britton's lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hnn-word-pin-and-britton-reduced-word, thm-hnn-normal-form-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let

$$w=a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n$$

be a Britton-reduced HNN word. If $w$ represents the identity, then $n=0$ and
$a_0=e_A$. Equivalently, every Britton-reduced HNN word containing a stable
letter is nontrivial.

## Facts & Assumptions

**Given:** The Britton-reduced word in the statement.

[L1] A Britton-reduced word has no pin, so a change of sign can occur only across a coefficient outside the subgroup that would create a pin. ([[def-hnn-word-pin-and-britton-reduced-word]])

[L2] Relative to chosen transversals, every element has a unique transversal normal form, and the identity has the unique normal form of stable-letter length zero with trivial base coefficient. ([[thm-hnn-normal-form-theorem]])

## Proof

**Proof technique:** direct.

1.1 Choose transversals containing the identity in both associated subgroups. Normalize $w$ by the procedure of [L2]. Because $w$ is Britton-reduced by [L1], no elementary pin reduction is available, so the normalization only replaces each interior coefficient by the corresponding transversal representative in the same coset and leaves the stable-letter length $n$ unchanged. [L1, L2, given, algebra]

2.1 If $w=1$, the resulting normal form is the identity's normal form from [L2]. Step 1.1 shows that this is possible only when $n=0$, and then uniqueness in [L2] forces the remaining coefficient to be $a_0=e_A$. The contrapositive is exactly the nontriviality clause for Britton-reduced words containing a stable letter. [L2, step 1.1, algebra] ∎
