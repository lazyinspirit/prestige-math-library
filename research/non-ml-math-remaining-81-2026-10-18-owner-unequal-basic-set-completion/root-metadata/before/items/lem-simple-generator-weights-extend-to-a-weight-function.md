---
id: lem-simple-generator-weights-extend-to-a-weight-function
kind: lemma
title: Simple-generator weights extend uniquely to a weight function
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order, def-unequal-parameter-weight-function-and-coefficient-order, thm-arbitrary-rank-finite-parabolics-and-bruhat-subword, thm-hh-matsumoto-reduced-word-theorem, thm-hh-parabolic-minimal-representatives-and-length-additivity, lem-hh-dihedral-root-recurrence-and-root-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; all words and braid sequences are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§3.1, PDF p. 22: the exact odd-edge condition and definition of a weight function."
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, GTM 231 (2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "§1.4, printed pp. 16–18: Matsumoto braid connectivity for reduced expressions."
---

## Statement

Let $S$ be any set with Coxeter matrix $m$, let $(W,S)$ be the presented system of [[def-arbitrary-rank-coxeter-system-and-bruhat-order]], and let $\Gamma$ be the ordered abelian group of [[def-unequal-parameter-weight-function-and-coefficient-order]]. Every weight function $L:W\to\Gamma$ has $L(s)=L(t)$ whenever $s\ne t$, $m(s,t)<\infty$, and $m(s,t)$ is odd. Conversely, every label map $\lambda:S\to\Gamma$ satisfying these odd-edge equalities extends uniquely to a weight function with $L(s)=\lambda(s)$.

## Facts & Assumptions

**Given:** The arbitrary-rank Coxeter presentation, its length, an ordered abelian group $\Gamma$, and simple-generator labels.

[F1] [[def-arbitrary-rank-coxeter-system-and-bruhat-order]]: reduced expressions are finite words in $S$, and word length is the minimum length representing the element.

[F2] [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]: every finite set of simple generators gives an embedded standard parabolic, with the same intrinsic and ambient lengths.

[F3] [[thm-hh-matsumoto-reduced-word-theorem]]: for a finite Coxeter matrix, any two reduced expressions of one element are connected by finitely many braid moves; a move exchanges two alternating words of the same finite braid length.

[F4] [[def-unequal-parameter-weight-function-and-coefficient-order]]: a weight function is a map $L$ additive on products whose lengths add.

[F5] [[lem-hh-dihedral-root-recurrence-and-root-sign]]: for distinct generators with finite label $m=m(s,t)$, every alternating word of length $q\le m$ is reduced in the ambient Coxeter group.

## Proof

**Given:** The data in the Statement.

1.1 For $w\in W$, take a reduced expression $w=s_1\cdots s_k$ and set $L(w)=\sum_{i=1}^k\lambda(s_i)$. This does not depend on the reduced expression: two reduced expressions have finite combined support $J\subseteq S$, and by [F2] are reduced expressions in the finite Coxeter system on $J$. By [F3] they are connected by braid moves. An even braid length uses each of its two letters equally often; an odd braid length uses one letter once more on one side and the other letter once more on the other, and those labels are equal by hypothesis. Thus each move preserves the sum, so $L(w)$ is well defined. [F1, F2, F3, construct]

2.1 If $\ell(xy)=\ell(x)+\ell(y)$, concatenating reduced expressions for $x$ and $y$ gives a reduced expression for $xy$. The sum defining $L$ therefore gives $L(xy)=L(x)+L(y)$. Any weight function with the prescribed simple labels must assign this same sum to every reduced expression (each prefix is reduced), proving both the weight-function property and uniqueness of the extension. [F1, F4, step 1.1, algebra]

3.1 Let $s\ne t$ have finite odd label $m(s,t)=2k+1$. The two alternating words $(st)^ks$ and $t(st)^k$ have length $m(s,t)$ and are reduced by [F5]; they represent the same element by the braid relation. For any weight function $L$, additivity along the prefixes of each reduced word gives $(k+1)L(s)+kL(t)=kL(s)+(k+1)L(t)$. Cancelling the common terms yields $L(s)=L(t)$. This proves the necessary odd-edge condition. [F1, F2, F4, F5, algebra] ∎
