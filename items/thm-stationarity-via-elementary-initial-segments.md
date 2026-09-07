---
id: thm-stationarity-via-elementary-initial-segments
kind: theorem
title: "Stationarity characterized by elementary initial segments"
status: draft
origin: pipeline
deps: ["thm-elementary-initial-segments-form-a-club", "def-club-filter-and-nonstationary-ideal"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Kamensky, Theorem 1.4.7 and Exercise 1.4.8, pp.7–8, expanded club coding"
      url: https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf
---

## Statement

In ZFC, for regular uncountable $\kappa$ and $S\subseteq\kappa$, the following are equivalent: (i) $S$ is stationary; (ii) every structure on universe $\kappa$ in a finitary language of size less than $\kappa$ has a nonzero $\alpha\in S$ whose restriction is elementary; (iii) the same assertion restricted to countable languages.

## Facts & Assumptions

[F1] [[thm-elementary-initial-segments-form-a-club]]: Elementary nonzero initial segments form a club for each small-language structure.

[F2] [[def-club-filter-and-nonstationary-ideal]]: A stationary set meets every club.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If S is stationary, intersect it with the club of elementary initial segments of any specified small-language structure. This proves (i) implies (ii), which immediately implies (iii), since countable languages have size below uncountable kappa. [F1, F2]

1.2 Assume (iii) and let C be any club. Form the finite-language structure on kappa with ordinal order, constant zero, successor function $s(\beta)=\beta+1$, and next-club-point function $n_C(\beta)=\min(C\setminus(\beta+1))$. A nonzero elementary restriction at $\alpha\in S$ is in particular a substructure. Successor closure makes alpha a limit, and next-point closure gives a point of $C\cap\alpha$ strictly above every beta below alpha. Closedness of C forces $\alpha\in C$, so S meets C. This proves (iii) implies (i). [F2]

2.1 The related filter-base conclusion follows by combining fewer than kappa languages, renaming their nonlogical symbols to avoid collisions, and combining the corresponding structures on kappa. Regularity bounds the union language below kappa. Its elementary club is contained in the intersection of the original elementary clubs, because each original structure is a reduct and its formulas retain their interpretations. The empty collection has the whole cardinal as an upper containing set. [F1, step 1.1] ∎
