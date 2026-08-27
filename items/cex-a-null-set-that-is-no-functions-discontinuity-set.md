---
id: cex-a-null-set-that-is-no-functions-discontinuity-set
kind: counterexample
title: "A null set can fail to be the discontinuity set of any function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-rationals-countable, thm-finite-and-countable-subadditivity-of-measures, thm-borel-sets-are-lebesgue-measurable, def-g-delta-and-f-sigma-in-a-topological-space, thm-discontinuity-set-is-f-sigma, thm-baire-category-r, def-nowhere-dense-meager, thm-lebesgue-measure-of-a-box-of-every-kind, prop-measure-monotonicity, thm-geometric-series]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Baire category and null $G_\\delta$ constructions"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Every Lebesgue null subset of $\mathbb R$ is the discontinuity set of some
function $\mathbb R\to\mathbb R$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] The rationals are countably infinite. ([[thm-rationals-countable]])

[L2] Countable subadditivity bounds the measure of a countable union by the sum of the individual measures. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L3] Every Borel subset of $\mathbb R$ is Lebesgue measurable. ([[thm-borel-sets-are-lebesgue-measurable]])

[L4] A $G_\delta$ set is a countable intersection of open sets and an $F_\sigma$ set is a countable union of closed sets. ([[def-g-delta-and-f-sigma-in-a-topological-space]])

[L5] The discontinuity set of a real-valued function on $\mathbb R$ is an $F_\sigma$ subset of $\mathbb R$. ([[thm-discontinuity-set-is-f-sigma]])

[L6] A countable intersection of dense open subsets of $\mathbb R$ is dense, so $\mathbb R$ is not meager in itself. ([[thm-baire-category-r]])

[L7] A closed set with empty interior is nowhere dense, and a countable union of nowhere dense sets is meager. ([[def-nowhere-dense-meager]])

[L8] Every nondegenerate interval has positive Lebesgue measure. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L9] Measures are monotone. ([[prop-measure-monotonicity]])

[L10] The geometric series satisfies $$\sum_{j=0}^{\infty}2^{-j}=2.$$ ([[thm-geometric-series]])

## Counterexample

**Proof technique:** contradiction.

1.1 By [L1], fix an enumeration $(q_j)_{j\ge0}$ of $\mathbb Q$. For each natural number $k\ge1$, put $$U_k:=\bigcup_{j\ge0}\bigl(q_j-2^{-j-k-2},\,q_j+2^{-j-k-2}\bigr).$$ Every $U_k$ is open and dense, because it contains every rational. Each interval in the union has length $2^{-j-k-1}$, so [L2], [L3], and [L10] give $$\lambda_1(U_k)\le\sum_{j=0}^{\infty}2^{-j-k-1} =2^{-k-1}\sum_{j=0}^{\infty}2^{-j}=2^{-k}.$$ Let $$G:=\bigcap_{k\ge1}U_k.$$ Then [L4] makes $G$ a $G_\delta$ set, and [L6] makes it dense. Since $G\subseteq U_k$ for every $k$, [L9] gives $\lambda_1(G)\le2^{-k}$ for all $k$, so $\lambda_1(G)=0.$ [L1, L2, L3, L4, L6, L9, L10, construct]

2.1 Suppose, for contradiction, that $G$ is the discontinuity set of some function $f:\mathbb R\to\mathbb R$. Then [L5] makes $G$ an $F_\sigma$ set, so by [L4] write $G=\bigcup_{n\ge0}F_n$ with each $F_n$ closed. Because $F_n\subseteq G$ and $\lambda_1(G)=0$, monotonicity [L9] gives $\lambda_1(F_n)=0$ for every $n$. A closed null set cannot contain a nondegenerate interval, by [L8], so each $F_n$ has empty interior and is nowhere dense by [L7]. Therefore $G$ is meager. [step 1.1, L4, L5, L7, L8, L9, assume-contra]

3.1 Step 1.1 writes $G$ as a dense $G_\delta$ set, so $\mathbb R\setminus G$ is meager by [L7]. If $G$ were also meager, then $$\mathbb R = G\cup(\mathbb R\setminus G)$$ would be a union of two meager sets and therefore meager, contradicting [L6]. So $G$ is a Lebesgue null set that is not the discontinuity set of any real-valued function, and the statement is false. [step 1.1, step 2.1, L6, L7, discharge-contradiction] ∎
