---
id: def-malle-counting-function-and-exponents
kind: definition
title: "Malle counting function and weak and strong predicted exponents"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-number-field
  - def-galois-closure-of-a-finite-separable-extension
  - def-finite-galois-extension-and-galois-group
  - def-permutation-index-of-a-transitive-group-element
  - def-finite-cyclotomic-action-on-conjugacy-classes
  - def-relative-discriminant-ideal-of-a-number-field-extension
  - thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
  - lem-bounded-relative-discriminant-gives-finitely-many-extensions
  - def-axiom-of-choice
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Akhtari, Park, Pieropan, and Sankar, On Rational Points on Classifying Stacks and Malle's Conjecture, §4.1"
      url: "https://arxiv.org/pdf/2402.10355v2"
      locator: "Conjectures 4.1–4.2, printed pp. 16–17; definitions of the index and cyclotomic orbit exponent immediately preceding them."
    - title: "Alberts, Lemke Oliver, Wang, and Wood, Inductive Methods for Counting Number Fields, §1"
      url: "https://arxiv.org/pdf/2501.18574"
      locator: "Conjecture 1 and the weak/strong distinction, PDF pp. 2–3; §1.1 for the scope of proved families and strong-form counterexamples."
    - title: "J. Klüners, A Counter Example to Malle's Conjecture on the Asymptotics of Discriminants, §1"
      url: "https://arxiv.org/pdf/math/0411486v1"
      locator: "Definitions 1.1–1.2 and Conjecture 1.3, PDF pp. 1–2."
    - title: "Akhtari, Park, Pieropan, and Sankar, On Rational Points on Classifying Stacks and Malle's Conjecture, 2026 publication, §4.1"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-032-11183-8_1.pdf?pdf=inline+link"
      locator: "PDF pp. 23–26, definitions of the index, cyclotomic action, orbit exponent, and weak/strong formulations."
verification: {}
---

## Definition

Let $K$ be a number field, let $n\ge2$, and let $G\le S_n$ be a nontrivial transitive permutation group, considered up to conjugacy in $S_n$. For $X\ge1$, define $N_{K,G}(X)$ to be the number of degree-$n$ extensions $L/K$ up to field isomorphisms fixing $K$ pointwise, whose Galois closure $\widetilde L$ (the smallest Galois extension of $K$ containing $L$ in a fixed algebraic closure $\overline K$) has Galois group acting on the $n$ embeddings $L\hookrightarrow\overline K$ as a permutation group isomorphic to $G$, and whose relative discriminant ideal has norm at most $X$. A degree-$n$ extension of number fields is finite separable, since its characteristic is zero. For a finite separable extension $L/K$, the relative discriminant ideal $\mathfrak d_{L/K}$ is generated in $\mathcal O_K$ by the determinants $\det(\operatorname{Tr}_{L/K}(x_i x_j))$ over all ordered $K$-bases $x_1,\ldots,x_{[L:K]}$ of $L$ consisting of algebraic integers; its absolute ideal norm is $|\mathcal O_K/\mathfrak d_{L/K}|$.

For $g\in G$, let $\operatorname{ind}(g)=n-\#\{\text{cycles of }g\text{ on }\{1,\ldots,n\}\}$, including one-cycles, and let $\operatorname{ind}(G)=\min_{1\ne g\in G}\operatorname{ind}(g)$ and $a(G)=1/\operatorname{ind}(G)$. Put $m=|G|$ and $\mu_m=\{\zeta\in\overline K:\zeta^m=1\}$. Let $\Gamma_K(G)$ be the image of $\operatorname{Gal}(K(\mu_m)/K)$ acting on conjugacy classes $[g]=\{hgh^{-1}:h\in G\}$ by $[g]\mapsto[g^r]$, where $\sigma(\zeta_m)=\zeta_m^r$ for a primitive $m$th root. Define $b(K,G)$ to be the number of $\Gamma_K(G)$-orbits on the conjugacy classes of index $\operatorname{ind}(G)$.

The **weak exponent prediction** is
$$\forall\epsilon>0\quad X^{a(G)-\epsilon}\ll_{K,G,\epsilon}N_{K,G}(X)\ll_{K,G,\epsilon}X^{a(G)+\epsilon}\qquad(X\to\infty),$$
equivalently $N_{K,G}(X)=X^{a(G)+o(1)}$. The **classical weak Malle bounds** use the stronger lower bound $X^{a(G)}\ll_{K,G}N_{K,G}(X)$ together with the same upper bounds. The **strong Malle prediction** is
$$N_{K,G}(X)\sim c(K,G)X^{a(G)}(\log X)^{b(K,G)-1}$$
for a constant $c(K,G)>0$. Here $F\ll_{K,G,\epsilon}H$ means $F(X)\le C H(X)$ for all sufficiently large $X$ and a constant $C$ depending only on the indicated parameters; $o(1)$ tends to zero and $F\sim H$ means $F/H\to1$.

## Definition references

[Akhtari, Park, Pieropan, and Sankar, *On Rational Points on Classifying Stacks and Malle's Conjecture*, §4.1, Conjectures 4.1–4.2](https://arxiv.org/pdf/2402.10355v2)

[Alberts, Lemke Oliver, Wang, and Wood, *Inductive Methods for Counting Number Fields*, §1](https://arxiv.org/pdf/2501.18574)

[Klüners, *A Counter Example to Malle's Conjecture on the Asymptotics of Discriminants*, §1](https://arxiv.org/pdf/math/0411486v1)

[Akhtari, Park, Pieropan, and Sankar, *On Rational Points on Classifying Stacks and Malle's Conjecture*, 2026 publication, §4.1](https://link.springer.com/content/pdf/10.1007/978-3-032-11183-8_1.pdf?pdf=inline+link)

## Convention note

The weak exponent prediction is implied by the classical weak Malle bounds, but is not equivalent to them: for $a>0$, the function $X^a/\log X$ satisfies $X^a/\log X=X^{a+o(1)}$ and is not bounded below by a positive constant times $X^a$.

## Facts & Assumptions


**Given:** The Axiom of Choice, a number field $K$, and a nontrivial transitive permutation group $G\le S_n$ with $n\ge2$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] A number field is a finite extension of $\mathbb Q$ ([[def-number-field]]).

[F2] For finite separable $L/K$, the relative discriminant ideal is generated by relative trace Gram determinants of integral $K$-bases ([[def-relative-discriminant-ideal-of-a-number-field-extension]]); it is nonzero and integral by [[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]].

[F3] The Galois closure of a finite separable field extension is its smallest Galois extension containing it, and its automorphism group acts on the embeddings of the original extension ([[def-galois-closure-of-a-finite-separable-extension]], [[def-finite-galois-extension-and-galois-group]]).

[F4] The permutation index is $n$ minus the number of cycles, is constant on conjugacy classes, and has positive minimum on a nontrivial transitive group ([[def-permutation-index-of-a-transitive-group-element]]).

[F5] The finite cyclotomic action on conjugacy classes is the power action induced by $\operatorname{Gal}(K(\mu_{|G|})/K)$ ([[def-finite-cyclotomic-action-on-conjugacy-classes]]).

[F6] For fixed number field $K$, degree $n$, and relative-discriminant norm bound, only finitely many $K$-isomorphism classes occur ([[lem-bounded-relative-discriminant-gives-finitely-many-extensions]]).

[F7] Number fields have characteristic zero, hence are perfect; every algebraic extension of a perfect field is separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

## Verification

1.1 The discriminant ideal in the Definition is a nonzero integral ideal by [F2], its quotient norm is finite, and [F6] makes the set counted by $N_{K,G}(X)$ finite, since the extensions with the specified Galois group form a subset of all degree-$n$ extensions with that norm bound. Separability in the construction is supplied by [F7]. [A1, F2, F6, F7, given, algebra]

1.2 The set $G\setminus\{1\}$ is finite and nonempty. Every nonidentity permutation moves a point, so its cycle count is at most $n-1$ and its index is at least $1$. By [F4], the minimum defining $\operatorname{ind}(G)$ exists and $a(G)>0$. [F4, given, algebra]

2.1 By [F5], cyclotomic exponents are units modulo $m$. Every element of $G$ has order dividing $m$, so the power action is independent of the chosen exponent representative; conjugation commutes with taking powers, and inverse exponents give inverse permutations. For each $g$, its order divides $m$ and its exponent $r$ is coprime to $m$, so $\langle g^r\rangle=\langle g\rangle$; the two permutations have the same orbits and hence the same index by [F4]. Therefore the minimal-index conjugacy classes form a finite invariant set and $b(K,G)$ is a well-defined positive integer. [F4, F5, given, algebra] ∎
