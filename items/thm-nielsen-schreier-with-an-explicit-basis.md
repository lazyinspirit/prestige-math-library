---
id: thm-nielsen-schreier-with-an-explicit-basis
kind: theorem
title: "Under the stated choice boundary, every subgroup of a free group is free with its nontrivial Schreier generators as a basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-countable-choice, def-free-basis, lem-tree-schreier-generators-are-freely-independent, thm-schreier-generating-lemma]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "J. S. Milne, Group Theory, Version 4.01"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
---

## Statement

Let $F(X)$ be a free group and let $H\le F(X)$.

1. If $X$ is finite, or countable with a fixed enumeration, then the shortlex
   least reduced representative in each right coset of $H$ forms a Schreier
   system.
2. Assuming the Axiom of Choice, the same conclusion holds for arbitrary $X$
   after well-ordering the basis.

For any Schreier system obtained in either way, the nontrivial Schreier
generators form a free basis of $H$.

## Facts & Assumptions

**Given:** A free group $F(X)$ and a subgroup $H\le F(X)$.

[L1] The Axiom of Choice says every family of nonempty sets has a choice
function ([[def-axiom-of-choice]]).

[L2] Countable Choice is the corresponding statement for countable families of
nonempty sets ([[def-countable-choice]]).

[L3] The nontrivial Schreier generators attached to a tree Schreier system are
freely independent ([[lem-tree-schreier-generators-are-freely-independent]]).

[L4] The nontrivial Schreier generators generate the subgroup
([[thm-schreier-generating-lemma]]).

[L5] A subset is a free basis exactly when it freely generates the group in the
sense of [[def-free-basis]].

## Proof

**Proof technique:** direct.

1.1 Suppose first that $X$ is finite, or that $X$ is countable with a chosen enumeration. Then reduced words on $X\sqcup X^{-1}$ are ordered first by length and then lexicographically, so every nonempty set of reduced words has a shortlex least element. Choose in each right coset of $H$ its least reduced representative. If $u$ is an initial segment of the chosen representative $w$ for the coset $Hw$, and if the coset $Hu$ had a smaller reduced representative $u'$, then replacing the prefix $u$ of $w$ by $u'$ would produce a smaller representative of $Hw$, impossible. Hence the chosen representatives form a Schreier system. [given]

2.1 For arbitrary $X$, [L1] lets us well-order the basis. The same shortlex construction as in step 1.1 then produces a Schreier system. In the countable case, the only choice principle visible in the statement is the weaker bookkeeping of [L2], because step 1.1 already gives the representatives canonically once the enumeration is fixed. [L1, L2, given]

3.1 Let $\mathcal T$ be a Schreier system obtained from step 1.1 or step 2.1. By [L4], its nontrivial Schreier generators generate $H$, and by [L3] they are freely independent. Therefore [L5] makes them a free basis of $H$. [L3, L4, L5] ∎
