---
id: thm-ad-implies-perfect-set-property-for-sequence-spaces
kind: theorem
title: "AD gives the perfect-set property in sequence spaces and the real line"
status: draft
origin: pipeline
deps: ["def-axiom-of-determinacy-for-natural-number-games", "lem-perfect-set-game-strategy-dichotomy", "lem-cantor-and-baire-sequence-coding", "lem-dyadic-coding-coin-measure-and-lebesgue-transfer", "thm-ad-implies-countable-choice-for-baire-space", "thm-of-archimedean"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "Theorem 10.10(i) and Claims 10.11–10.12, printed pp100–101"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
---
## Statement

In ZF+AD every subset of $\mathcal C$, $\mathcal N$ or $\mathbb R$ is at most countable (admits an injection into $\mathbb N$) or contains a compact subspace homeomorphic to $\mathcal C$. In particular every uncountable such set has a nonempty perfect closed subset. No DC is assumed.

## Facts & Assumptions

[A1] Assume [[def-axiom-of-determinacy-for-natural-number-games]].

[F1] [[lem-perfect-set-game-strategy-dichotomy]] gives a Cantor copy from an I winning block-game strategy and an injection into $\mathbb N$ from a II winning one.

[F2] [[lem-cantor-and-baire-sequence-coding]] gives the homeomorphism $h:\mathcal N\to D\subseteq\mathcal C$ and sequence coding.

[F3] Only the ZF clauses of [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]] are used: the injection b and the compact-copy transfer using continuous $\pi$ with $\pi(b(x))=x$.

[F4] [[thm-ad-implies-countable-choice-for-baire-space]] supplies countable selection from sets of Baire codes under AD.

[F5] [[thm-of-archimedean]] puts every real in an integer unit interval.

## Proof

**Given:** ZF+AD and a subset of one of the stated spaces.

1.1 For $A\subseteq\mathcal C$, F1's explicit finite-block codes and illegal-bit payoff make its game a natural-number game, determined by A1. If I wins, F1 gives a compact Cantor copy in A; if II wins, F1 gives an injection $A\to\mathbb N$. These cover every case, including empty A. [A1, F1]

2.1 For $A\subseteq\mathcal N$, apply step 1.1 to h[A]. If it injects into $\mathbb N$, compose that injection with h restricted to A. If it contains a compact Cantor copy K, F2's continuous inverse on D restricts to K, giving a homeomorphic copy in A that is compact by the open-cover definition. In a metric space compact sets are closed: for an exterior x finitely many balls $B(y,d(x,y)/3)$ cover the compact set, leaving a sufficiently small ball about x disjoint. Homeomorphism with Cantor space gives no isolated point by F2. Thus this is also a nonempty perfect closed subset of Baire space. [F2, step 1.1]

3.1 For $A\subseteq\mathbb R$, enumerate integers as $m_i=0,1,-1,2,-2,\ldots$ and set $A_i=(A\cap[m_i,m_i+1))-m_i$. By F5 these pieces cover A after translation. Apply step 1.1 to each b[A_i]. If one contains a compact Cantor copy, F3's ZF clause transfers it into A_i, and translation, with its continuous inverse, transfers it into A. It is compact and therefore closed by the separation argument in step 2.1, and has no isolated point. [F3, F5, step 1.1, step 2.1]

4.1 Otherwise each b[A_i] injects into $\mathbb N$. Each nonempty such set has a surjective enumeration: invert an injection on its range and fill unused indices with the value at the least occupied index. A sequence of binary reals is coded as one Baire real by F2's pairing. For each nonempty b[A_i] let C_i be the nonempty set of all codes of its enumerations; for an empty piece use the singleton all-zero code and retain that it was empty. F4 with A1 selects c_i for every i. Decode them, apply F3's $\pi$, translate back by m_i and interleave the two indices. If A is nonempty, fill slots from empty pieces with one fixed element a of A. This gives a surjection $\mathbb N\to A$ because every point belongs to a piece and appears in that piece's enumeration. Assign each point its least enumeration index to inject A into $\mathbb N$. For empty A use the empty injection. No unrestricted countable choice has been used. QED. [A1, F2, F3, F4, step 3.1]
