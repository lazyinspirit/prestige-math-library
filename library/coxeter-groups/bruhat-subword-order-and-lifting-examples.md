---
page: bruhat-subword-order-and-lifting-examples
title: "Bruhat Subword Order and Lifting — Examples"
status: published
items: []
examples: [ex-cg-s4-bruhat-versus-weak-comparability, ex-cg-s4-subword-descriptions-agree, ex-cg-s4-lifting-squares, ex-cg-s4-subwords-and-covers]
---

This companion is a dependency leaf: its examples use only the theory of [[bruhat-subword-order-and-lifting]] and that page's prerequisite closure, and no other page or item depends on them. All four computations are exhaustive and choice-free evaluations in the symmetric group $S_4$, with $\ell$ the inversion number.

[[ex-cg-s4-subwords-and-covers]] multiplies out the $64$ subwords of the standard reduced word $s_1s_2s_3s_1s_2s_1$ of the longest element $w_0=4321$, showing that they realize exactly the $24$ elements of $S_4=[1,w_0]$ and that a single element may arise from several position sets, and it computes all six single-letter deletions, of which exactly three are covers of $w_0$. [[ex-cg-s4-lifting-squares]] exhibits one instance of each of the four descent/ascent cases of the lifting property, certifying the positive comparisons by subword witnesses and showing by equal-length incomparability that the companion comparisons in two of the cases genuinely fail. [[ex-cg-s4-bruhat-versus-weak-comparability]] separates Bruhat from weak comparability: the right- and left-weak relations defined by length-increasing simple multiplications are contained in Bruhat order, but $2143\le2341$ in Bruhat order with neither weak comparison holding, already in rank three. [[ex-cg-s4-subword-descriptions-agree]] checks expression independence on the element $2431$, whose two reduced expressions $s_1s_2s_3s_2$ and $s_1s_3s_2s_3$ have $16$ subwords each, both realizing the same $12$-element interval below $2431$, with the element $s_2$ described at different positions in the two expressions.

The results tested here are proved on the theory page: the subword criterion of [[thm-cg-bruhat-subword-characterization]], the interval and grading statements of [[lem-cg-bruhat-chain-refinement-and-gradedness]], and the lifting, cover and reflection-deletion statements of [[thm-cg-bruhat-lifting-and-cover-criterion]]. The examples are evidence within their computed scope and do not replace those proofs.
