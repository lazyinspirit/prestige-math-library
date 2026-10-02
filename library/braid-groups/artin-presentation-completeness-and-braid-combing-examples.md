---
page: artin-presentation-completeness-and-braid-combing-examples
title: "Artin Presentation Completeness and Braid Combing — Examples"
status: published
requires: [artin-presentation-completeness-and-braid-combing]
items: []
examples: [ex-combing-a-four-strand-braid-word,
           ex-the-free-kernel-words-for-three-strand-braid-combing,
           cex-visible-artin-relations-alone-do-not-prove-presentation-completeness]
---

These three entries make the combing algorithm concrete. The first example runs
the full procedure on a twelve-letter word in $B_4$ that traces the trivial
braid: the position sequence of the last strand is tracked letter by letter,
the prefix-insertion lemma produces the twelve combing factors, the six-case
reduction rewrites each of them to an $x$-letter or a lower-rank letter, and
the conjugation table collects the result into $W\equiv W_1W_2$ with $W_1$ a
freely trivial word in the $x$-letters and $W_2$ a word in $\sigma_1,\sigma_2$
that is trivial in $B_3$. The second example computes the three-strand combing
words explicitly, $x_2=\sigma_2^2=A_{23}$ and
$x_1=\sigma_2^{-1}\sigma_1^2\sigma_2=A_{23}^{-1}A_{13}A_{23}$, identifying the
free kernel of $PB_3\to PB_2$ in the combing coordinates with its two based
meridians, under the Axiom of Choice declared for that identification. The
third entry isolates the logical gap that the completeness theorem fills: it
exhibits a presented group $P=\langle x\mid x^4=1\rangle$ mapping onto
$G=\langle g\mid g^2=1\rangle$ by a surjection that is not injective, so
verifying that the Artin relators hold among the geometric half twists and that
these generate the geometric braid group produces only a surjection; the
triviality of the kernel requires the combing argument.
