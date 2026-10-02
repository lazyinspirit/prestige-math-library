---
page: artin-presentation-completeness-and-braid-combing
title: "Artin Presentation Completeness and Braid Combing"
status: draft
requires: [pure-braids-fadell-neuwirth-and-asphericity,
           punctured-disks-mapping-classes-and-point-pushing,
           geometric-braids-and-artin-generators]
items: [def-zariski-braid-combing-words-alpha-and-x,
        lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors,
        lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel,
        lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter,
        lem-every-trivial-braid-word-combs-as-w-one-w-two,
        lem-the-combed-geometric-decomposition-is-unique,
        thm-the-artin-presentation-is-complete-for-geometric-braids,
        cor-all-four-classical-braid-models-realize-the-artin-presentation]
examples: []
---

This page proves that the Artin presentation is not merely a presentation
that *surjects onto* the geometric braid group: the surjection
$\varphi_n\colon B_n^{\mathrm{Artin}}\to B_n^{\mathrm{geom}}$ that sends each
abstract generator to the class of the elementary geometric half twist is an
isomorphism. The proof is the braid-combing argument. The page first fixes the
Zariski combing words $\alpha_i=\sigma_i\sigma_{i+1}\cdots\sigma_{n-1}$ and
$x_i=\alpha_{i+1}^{-1}\sigma_i^2\alpha_{i+1}$, then shows that any word tracing
the trivial braid can be rewritten, by free insertion of the cancelling blocks
$\alpha_j\alpha_j^{-1}$ alone, as a product of combing factors, one per letter,
each factor being the record of where the last strand enters and leaves that
letter. The six possible shapes of a combing factor then reduce, using only the
two Artin relations and free cancellation, to either a lower-rank letter
$\sigma_1,\dots,\sigma_{n-2}$ or one of the words $x_i^{\pm1}$, and the
conjugation table for the lower-rank letters moving past an $x$-letter collects
the whole word into the standard form $W\equiv W_1W_2$ with $W_1$ in the
$x$-letters and $W_2$ in the first $n-2$ generators.

The second half of the page identifies the geometric content of that normal
form. The words $x_i$ are conjugate, inside the free kernel of the forgetting
map $PB_n\to PB_{n-1}$, to the standard pure generators $A_{in}$, and a
left-inverse computation in the free group shows that the classes
$\varphi_n(x_1),\dots,\varphi_n(x_{n-1})$ form a free basis of that kernel;
consequently a combed trivial word has both factors trivial, the left one by
free cancellation of $x$-pairs and the right one by the induction hypothesis on
the number of strands. Induction on $n$ then proves completeness of the Artin
presentation. Because the free-kernel input is the Axiom-of-Choice-dependent
Fadell--Neuwirth sequence of the companion pure-braid page, the completeness
theorem carries the Axiom of Choice, declared explicitly where it is used. The
closing corollary composes the completeness theorem with the published
configuration-space isomorphism and the boundary-fixed mapping-class
isomorphism, tracking the generator through all four classical models of the
braid group.
