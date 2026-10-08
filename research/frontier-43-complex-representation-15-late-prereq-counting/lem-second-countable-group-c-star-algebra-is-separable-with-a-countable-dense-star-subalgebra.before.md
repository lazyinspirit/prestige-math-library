---
id: lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra
kind: lemma
title: "The full group C star algebra of a second-countable group is separable"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-l-one-of-a-second-countable-group-is-separable
  - def-full-group-c-star-algebra
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
  - def-c-star-algebra
  - def-axiom-of-choice
  - lem-countable-iff-surjection-from-n
  - def-natural-number-coding-of-finite-sequences
  - thm-rationals-countable
  - thm-product-of-countable
  - def-rationals
  - thm-rat-field
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - lem-rat-embeds-dense
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
dependency_level: 1
axiom_use: >-
  Assume AC, inherited from the L1 separability, full group C*-algebra, and
  normalized approximate-identity suppliers. The finite-expression coding uses
  canonical least preimages from the explicit countability criterion, so the
  local construction makes no family-wide choices.
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Definition 8.B.1, Remark 8.B.2, and Proposition 8.B.3, printed pp. 242–243, for the maximal group C*-algebra and its nondegenerate representation correspondence. The explicit separability proof is local."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part II, §II.10.2.9, printed p. 212 (PDF p. 220): states that C*(G) is separable iff G is second countable, without proof. This item proves the forward direction locally and constructs the countable dense star-subalgebra."
---

## Statement

Assume AC. Let $G$ be a second-countable locally compact Hausdorff group, let
$q:L^1(G)\to C^*(G)$ be the canonical map, and let
$\mathbb Q(i)=\{a+ib:a,b\in\mathbb Q\}$. Then $C^*(G)$ is separable. More
precisely, there are a countable dense set $S\subseteq L^1(G)$ and a countable
set $D\subseteq C^*(G)$ such that $q(S)\subseteq D$, $D$ is closed under
addition, multiplication, adjunction, and multiplication by elements of
$\mathbb Q(i)$, and the $\mathbb Q(i)$-linear span of $D$ is norm-dense in
$C^*(G)$.

## Facts & Assumptions

**Given:** AC; a second-countable locally compact Hausdorff group $G$; the
space $L^1(G)$ and its fixed Haar measure; the full group C*-algebra $C^*(G)$;
and its canonical map $q$.

[F1] There is a countable dense subset $S$ of $L^1(G)$ contained in the image
of $C_c(G)$
([[lem-l-one-of-a-second-countable-group-is-separable]]).

[F2] The canonical map $q:L^1(G)\to C^*(G)$ is a star-homomorphism with dense
image ([[def-full-group-c-star-algebra]]).

[F3] The full-group norm satisfies $\|q(f)\|_{C^*}\le\|f\|_1$
([[lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient]]).

[F4] In a complex C*-algebra, multiplication is associative and bilinear, and
the involution is conjugate-linear, involutive, and reverses products
([[def-c-star-algebra]]).

[F5] Every finite sequence of natural numbers has a natural-number code, and
the coding is injective
([[def-natural-number-coding-of-finite-sequences]]).

[F6] A nonempty set is at most countable iff there is a surjection from
$\mathbb N$ onto it; from any surjection, the least preimage of each element
gives a canonical injection into $\mathbb N$
([[lem-countable-iff-surjection-from-n]]).

[F7] $\mathbb Q$ is countably infinite
([[thm-rationals-countable]]).

[F8] The product of two at most countable sets is at most countable
([[thm-product-of-countable]]).

[F9] With its usual operations, $\mathbb Q$ is a field
([[thm-rat-field]]).

[F10] $\mathbb Q$ is the quotient set of integer pairs with nonzero
denominator, with the class notation $[(a,b)]$ ([[def-rationals]]).

[F11] The canonical embedding $\iota:\mathbb Q\hookrightarrow\mathbb C$ is the
composition of the rational-to-real field embedding and the constant-class
real-to-complex field embedding. The complex coordinate formulas are
$(a+ib)+(c+id)=(a+c)+i(b+d)$ and
$(a+ib)(c+id)=(ac-bd)+i(ad+bc)$. Thus the statement's set $\mathbb Q(i)$ is
$\{\iota(a)+i\iota(b):a,b\in\mathbb Q\}$
([[lem-rat-embeds-dense]], [[def-complex-numbers-and-arithmetic]],
[[thm-complex-numbers-form-a-field]]).

[F12] For $z=a+bi$, complex conjugation is $\overline z=a-bi$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F13] The zero function is measurable and has $L^1$ norm $0$, so its class
belongs to $L^1(G)$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F14] AC says every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose a countable dense subset $S\subseteq L^1(G)$ from [F1]. The zero class belongs to $L^1(G)$ by [F13], so $S$ is nonempty and [F6] gives a surjection $s:\mathbb N\to S$. Set $K=\{\iota(a)+i\iota(b):a,b\in\mathbb Q\}$ using the rational quotient and embeddings [F10, F11]; by [F11], this is the statement's set $\mathbb Q(i)$. By [F7] and [F8], $\mathbb Q\times\mathbb Q$ is at most countable and nonempty; [F6] gives a surjection $r_0:\mathbb N\to\mathbb Q\times\mathbb Q$. The map $(a,b)\mapsto\iota(a)+i\iota(b)$ is onto $K$, so composing it with $r_0$ gives a surjection onto $K$; [F6] then gives a surjection $r:\mathbb N\to K$. Define $j_S(u)=\min s^{-1}(\{u\})$ for $u\in S$ and $j_K(\alpha)=\min r^{-1}(\{\alpha\})$ for $\alpha\in K$; [F6] proves these are injections, and the uniquely determined minima require no choice. The formulas in [F11] and the field laws in [F9] show that $K$ is closed under addition and multiplication; [F12] gives closure under conjugation, and $1=\iota(1)+i\iota(0)\in K$. AC is assumed as required by [F1]–[F3]; the local enumerations use [F6] and require no additional choices. [F1, F2, F3, F6, F7, F8, F9, F10, F11, F12, F13, F14]

2.1 Define $D$ to consist of all finite sums $\sum_{\ell=1}^m\alpha_\ell w_\ell$, including the empty sum $0$, where $\alpha_\ell\in K$ and each $w_\ell$ is a nonempty finite product of factors $q(s)$ or $q(s)^*$ with $s\in S$. Use the canonical least-preimage injections $j_K:K\to\mathbb N$ and $j_S:S\to\mathbb N$ from step 1.1. Encode each summand by $j_K(\alpha_\ell)$, its word length, and, for each factor, $j_S(s)$ and an adjoint flag; encode a whole sum by its summand count followed by these finite records. The lengths make parsing unique, and [F5] gives each record an injective natural-number code. Every element of $D$ has such a record, with no choice of indices. [F1, F2, F5, F6, step 1.1]

3.1 Use the code in [F5] for the finite sequence records of step 2.1. Define $\Phi:\mathbb N\to D$ to evaluate a valid code and send any number that is not a valid record to $0$. The code is injective, so the evaluation is unambiguous; every element of $D$ has a record, so $\Phi$ is surjective. Since $0\in D$, [F6] now shows that $D$ is at most countable. [F5, F6, step 2.1]

4.1 The set $D$ is closed under addition because finite summand lists concatenate; it is closed under multiplication because distributivity gives a finite sum of concatenated words, with coefficients still in $K$ by step 1.1. For $\beta\in K$, multiplying a finite sum by $\beta$ replaces each coefficient $\alpha_\ell$ by $\beta\alpha_\ell\in K$, so $D$ is closed under $K$-scalar multiplication. Finally, $(\sum_\ell\alpha_\ell w_\ell)^*=\sum_\ell\overline{\alpha_\ell}\,w_\ell^*$; [F4] reverses each word and takes the adjoint of each factor, and [F12] and step 1.1 keep every coefficient in $K$. Hence $D$ is closed under adjunction. Since $1\in K$, each $q(s)$ is in $D$ by a one-letter word, so $q(S)\subseteq D$. By [F3], $\|q(f)-q(s)\|_{C^*}\le\|f-s\|_1$; therefore $q(S)$ is dense in $q(L^1(G))$, and this image is dense in $C^*(G)$ by [F2]. Thus $D$ is dense. Since it is already closed under addition and $K$-scalar multiplication, its $K$-linear span equals $D$ and is norm-dense. [F1, F2, F3, F4, F12, step 1.1, step 3.1] ∎

## Remarks

- Blackadar, Part II §II.10.2.9, states the equivalence between second
  countability of $G$ and separability of $C^*(G)$ but supplies no proof there.
  The proof above establishes the forward direction and the stronger explicit
  countable dense star-subalgebra statement locally.
