---
id: "thm-internal-power-set-in-the-constructible-universe"
kind: "theorem"
title: "Internal Power Set in L"
deps: ["thm-separation-in-the-constructible-universe", "prop-constructible-levels-transitivity-ordinals-and-rank"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.7 p15; Marks Lemma 20.5 p87
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for every $a\in L$, the ambient set $\mathcal P(a)\cap L$ belongs to $L$. It is the power set of $a$ computed internally in $L$.

## Facts & Assumptions

**Given:** ZF; a in L. Ambient Power Set and Replacement bound all constructible subsets; already proved internal Separation then produces the internal power set without circularity.

[F1] [[thm-separation-in-the-constructible-universe]]: Separation inside L is proved for each fixed formula.

[F2] [[prop-constructible-levels-transitivity-ordinals-and-rank]]: Constructible rank bounds give level membership; every level itself belongs to L and L is transitive.

## Proof

1.1 In the ambient universe use Separation on $\mathcal P(a)$ to form $Y=\{b\subseteq a:b\in L\}$. The predicate of belonging to L is uniformly definable. Ambient Replacement collects $R=\{\rho_L(b):b\in Y\}$; put $\beta=\sup(R\cup\{\rho_L(a)\})+1$. Then $a\in L_\beta$ and $Y\subseteq L_\beta$. This bounds all constructible subsets simultaneously without using Power Set or Replacement in L. [F2, given]

2.1 The set $L_\beta$ is itself an element of L. Apply F1 inside L to this set with the predicate $b\subseteq a$. For $a,b\in L$, this predicate is absolute directly: every member of $b$ lies in L by transitivity, and membership in $a$ is actual membership. The separated set is therefore $\{b\in L_\beta:b\subseteq a\}=Y$ by step 1.1. It belongs to L and contains exactly the internal subsets of a, proving internal Power Set. [F1, F2, step 1.1] ∎
