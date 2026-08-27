---
id: lem-equivalent-folner-boundary-formulations
kind: lemma
title: "Equivalent boundary formulations of the Folner condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-folner-set-and-folner-condition, lem-left-and-right-amenability-agree-by-inversion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Let $G$ be a group, $S\subseteq G$ finite, and $F\subseteq G$ finite nonempty.
Then:

1. $|sF\triangle F|<\varepsilon|F|$ for every $s\in S$ if and only if
   $|sF\setminus F|<(\varepsilon/2)|F|$ for every $s\in S$.
2. Replacing the left translates $sF$ by right translates $Fs$ gives an
   equivalent condition after inversion.

## Facts & Assumptions

**Given:** A group $G$, a finite subset $S\subseteq G$, a finite nonempty set
$F\subseteq G$, and a real $\varepsilon>0$.

[L1] An $(S,\varepsilon)$-Folner set is defined by the symmetric-difference
inequality ([[def-folner-set-and-folner-condition]]).

## Proof

**Proof technique:** direct.

1.1 For each $s\in S$, left translation by $s$ is a bijection of $G$, so $|sF|=|F|$ and therefore $|sF\triangle F|=|sF\setminus F|+|F\setminus sF|=2|sF\setminus F|$. Hence the symmetric-difference and one-sided boundary formulations differ only by the factor $2$. [L1, given, algebra]

2.1 Inversion is a bijection $F\mapsto F^{-1}$ with $|(sF)\triangle F|=|(F^{-1}s^{-1})\triangle F^{-1}|$. Thus the left-translate and right-translate versions are equivalent after replacing $S$ by $S^{-1}$. [step 1.1, given, algebra] ∎
