---
id: lem-countable-product-cylinder-premeasure-is-countably-additive
kind: lemma
title: "The countable-product cylinder premeasure is countably additive"
status: published
origin: pipeline
deps: [lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-product-measure-on-sigma-finite-spaces, prop-sigma-finite-section-measure-functions-are-measurable, thm-continuity-from-above-for-measures, def-countable-choice, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized finite-tail and dependent-choice proof completion; local checks only, no judge"
    delegated_by: owner
sources:
  references:
    - title: "Kajino, Probability Theory, proof of Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

Assume countable choice and dependent choice. For a countable sequence of
probability spaces and its finite-product cylinder law $\mu_0$, $\mu_0$ is a
premeasure on the cylinder algebra.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, a countable sequence of probability spaces, its cylinder algebra, and the finitely additive law $\mu_0$.

[F1] The finite-coordinate product law is a probability measure and has the rectangle formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F2] For product-measurable $A$ in two sigma-finite factors, each section is
measurable, its section-measure function is measurable, and the product mass is
the integral of that function. ([[prop-sigma-finite-section-measure-functions-are-measurable]],
[[def-product-measure-on-sigma-finite-spaces]])

[F3] A decreasing sequence of measurable sets with finite first measure has
measure converging to that of its intersection.
([[thm-continuity-from-above-for-measures]])

[F4] Countable choice supplies a point of the product of the nonempty coordinate
spaces. ([[def-countable-choice]])

[F5] On a nonempty product, consistent finite-dimensional laws define a
well-defined finitely additive cylinder law.
([[lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined]])

[F6] Dependent choice licenses a recursively constructed sequence when the
admissible next coordinate depends on the prefix already chosen.
([[def-dependent-choice]])

## Proof

1.1 Index the given coordinates by $0,1,\ldots$. Each coordinate space is nonempty since its measure has total mass one. Countable choice in [F4] supplies a point of their product, and [F5] gives the finitely additive cylinder law. Finite product laws are consistent: projecting away a factor preserves the rectangle values because that factor has mass one, and uniqueness in [F1] gives equality on the finite product sigma-algebra. This also justifies regrouping any finite block into two factors. [F1, F4, F5, given]

2.1 For a cylinder $C$ and a prefix $p=(x_0,\ldots,x_{m-1})$, define $h_C(p)$ using only finite products: represent $C$ on coordinates $0,\ldots,k-1$ with $k\ge m$, fix the prefix in its measurable base, and measure the remaining section with $\bigotimes_{m\le j<k}\mu_j$. For $k=m$ this is the indicator of membership in the base. Enlarging $k$ leaves the value unchanged by the mass-one rectangle formula; two representations agree after enlargement, using the product point of step 1.1. Thus $h_C(p)$ is well-defined and lies in $[0,1]$. By choosing $k\ge m+1$, [F2] gives a measurable function $z\mapsto h_C(p,z)$ and $$h_C(p)=\int_{E_m}h_C(p,z)\,d\mu_m(z).$$ Inclusion of cylinders gives pointwise inequality of these functions by finite-product monotonicity. No measure on an infinite tail is used. [F1, F2, F5, step 1.1, construct]

3.1 Let $C_n\downarrow\varnothing$ and suppose their masses do not tend to zero. Finite additivity makes the masses decreasing in $[0,1]$, so there is $\eta>0$ with $\mu_0(C_n)\ge\eta$ for all $n$. Call a prefix $p$ of length $m$ admissible if $h_{C_n}(p)\ge\eta/2^m$ for every $n$; the empty prefix is admissible. Given one, put $t=\eta/2^{m+1}$ and $$D_n=\{z\in E_m:h_{C_n}(p,z)\ge t\}.$$ These sets are measurable and decrease. Step 2.1 and the bound $0\le h_{C_n}\le1$ yield $$2t\le h_{C_n}(p)\le\mu_m(D_n)+t\mu_m(E_m\setminus D_n)\le\mu_m(D_n)+t.$$ Hence $\mu_m(D_n)\ge t$, and [F3] implies $\mu_m(\bigcap_nD_n)\ge t>0$. Any point in this intersection extends $p$ to an admissible prefix. [F2, F3, step 1.1, step 2.1, construct]

4.1 The admissible finite prefixes form a nonempty set. Relate a prefix to its admissible one-coordinate extensions; step 3.1 proves this relation is entire. Dependent choice in [F6], starting at the empty prefix, gives a compatible chain, whose union is a point $x$ of the original coordinate product. For each $n$, choose a finite initial block determining $C_n$. Once that block is fixed, $h_{C_n}$ is its membership indicator; admissibility makes it positive, so $x\in C_n$. This contradicts the empty intersection. Thus $\mu_0(C_n)\to0$. Using all original coordinates also handles cylinders with empty or finitely many active coordinates; there is no terminal-prefix exception. [F6, step 2.1, step 3.1]

5.1 If disjoint cylinders $A_j$ have union a cylinder $A$, then $R_N=A\setminus\bigcup_{j<N}A_j$ decreases to the empty set and remains in the cylinder algebra. Finite additivity gives $$\mu_0(A)=\sum_{j<N}\mu_0(A_j)+\mu_0(R_N).$$ Step 4.1 sends the remainder to zero, proving countable additivity for every such union. Hence $\mu_0$ is a premeasure. [F5, step 1.1, step 4.1, algebra] ∎
