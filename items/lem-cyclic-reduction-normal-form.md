---
id: lem-cyclic-reduction-normal-form
kind: lemma
title: 'Every nonempty reduced word has the form $tct^{-1}$ with $c$ nonempty and cyclically reduced'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclically-reduced-word, def-alphabet-words-and-reduction, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wilhelm Magnus, Abraham Karrass, and Donald Solitar, Combinatorial Group Theory"
      url: "https://books.google.co.uk/books?id=QoiBAAAAIAAJ"
    - title: "Alexei Myasnikov and Vladimir Shpilrain, Combinatorics over Free Groups, §2.2.1"
      url: "https://web.stevens.edu/algebraic/alexeim/Teaching/Group%20Theory%20627/Sections/book/ALLBOOK.pdf"
pipeline_run: null
---

## Statement

Every nonempty reduced word $w$ has a literal factorisation

$$w=tct^{-1}$$

in which $c$ is nonempty and cyclically reduced. The displayed concatenation
is the original reduced word, with no hidden cancellation. In particular, $w$
is conjugate to $c$ in the reduced-word free group.

## Facts & Assumptions

**Given:** A nonempty reduced word $w$ on $X\sqcup X^{-1}$.

[F1] A reduced word is cyclically reduced when it is empty or its first letter is not the formal inverse of its last letter ([[def-cyclically-reduced-word]]).

[L1] If a property $P$ satisfies $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every natural number $n$, then $P(n)$ holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 A reduced word of length one is nonempty and cyclically reduced, so the assertion holds with $t=\varepsilon$ and $c=w$. [base, F1]

1.2 Assume the assertion for all nonempty reduced words shorter than $w$. If $w$ is cyclically reduced, take $t=\varepsilon$ and $c=w$. [ih, F1]

1.3 If $w$ is not cyclically reduced, [F1] says that its first and last letters are inverse, so $w=aua^{-1}$ literally; reducedness of $w$ makes $u$ nonempty and reduced, and $|u|=|w|-2$. [F1, given]

2.1 Apply [L1] to the property that the assertion holds at every length at most $n$. The induction hypothesis then applies to the shorter word $u$, so write $u=t'c(t')^{-1}$ with $c$ nonempty and cyclically reduced; then $w=(at')c(at')^{-1}$ literally. [step 1.2, step 1.3, L1]

3.1 The alternatives in steps 1.2 and 2.1 cover every nonempty reduced word and give the required factorisation, including the one-letter boundary. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
