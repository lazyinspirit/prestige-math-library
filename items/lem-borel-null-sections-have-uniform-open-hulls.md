---
id: lem-borel-null-sections-have-uniform-open-hulls
kind: lemma
title: Uniform open hulls for Borel sections of small measure
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-product-topology, def-borel-sigma-algebra, lem-cantor-coin-measure-from-binary-expansion, thm-continuity-from-above-for-measures, thm-finite-and-countable-subadditivity-of-measures, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemma 3.8, printed pp.6–7"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $H\subseteq 2^\omega\times2^\omega$ be Borel, and let $\epsilon>0$ be
rational. There is a Borel map $x\mapsto c(x)$ into codes for open subsets
$O_x\subseteq2^\omega$ such that $H_x\subseteq O_x$ and
$\mu(O_x\setminus H_x)<\epsilon$ for every $x$. Equivalently, the set
$\{(x,y):y\in O_x\}$ is Borel and its sections have the specified open codes.
If every $H_x$ is null, then $\mu(O_x)<\epsilon$ for every $x$.

## Facts & Assumptions

**Given:** A Borel $H$ and positive rational $\epsilon$; $\mu$ is the
fair-coin Borel probability measure on Cantor space.

[F1] Finite binary cylinders form a countable clopen base of Cantor space and
rectangles made from such cylinders generate the product Borel algebra.
([[def-product-topology]], [[def-borel-sigma-algebra]])

[F2] $\mu$ is a finite Borel probability measure with the specified cylinder
values; it is countably subadditive and continuous from above on decreasing
sequences of measurable sets. ([[lem-cantor-coin-measure-from-binary-expansion]],
[[thm-finite-and-countable-subadditivity-of-measures]],
[[thm-continuity-from-above-for-measures]])

## Proof

**Proof technique:** section-measure monotone class followed by Borel-rank induction.

1.1 For every Borel $B\subseteq2^\omega\times2^\omega$, the function $x\mapsto\mu(B_x)$ is Borel. Let $\mathscr D$ be the class of Borel sets with this property. It contains every cylinder rectangle, since its section measure is a constant times a cylinder indicator. It contains the whole product, is closed under complements by $\mu((B^c)_x)=1-\mu(B_x)$, and under countable disjoint unions by countable additivity and pointwise limits of partial sums. The cylinder rectangles form a $\pi$-system generating the product Borel algebra, so the elementary $\pi$-$\lambda$ (monotone-class) argument gives every Borel $B$. Explicitly, for a fixed rectangle the class of sets whose intersections with it lie in $\mathscr D$ is a Dynkin class; applying the same closure twice extends the assertion from rectangles to their generated sigma algebra. [F1, F2]

1.2 Use the fixed length-lexicographic cylinder enumeration to code an open set by the set of cylinders listed in its union. Countable unions of open codes are Borel operations on codes: a cylinder belongs to the output list exactly when it appears in one of the input lists. Selecting one code from a countable list by a Borel integer-valued map is Borel as well. [F1]

2.1 We prove the stronger hull assertion simultaneously at all countable Borel ranks. If $H$ is open in the product, write it as the union of all basic product rectangles contained in it. This is a fixed countable enumeration; for each $x$, retain exactly the second-factor cylinders of rectangles whose first factor contains $x$. These are Borel coordinate tests and code the open section $H_x$ itself, with zero excess. [F1, step 1.2, base]

2.2 If $H=\bigcup_iH_i$ and hull-code operators have been constructed for the $H_i$ at smaller rank, apply them with errors $\epsilon 2^{-i-2}$ and union their open sections. This union covers $H_x$; the points added outside $H_x$ lie in the union of the individual excess sets, whose total measure is at most $\sum_i\epsilon2^{-i-2}<\epsilon$. The output code depends Borelly on $x$. [F2, step 1.2, IH]

2.3 It remains to handle the complement stage of the Borel hierarchy. In its standard additive/multiplicative normal form, write the set under consideration as $A=\bigcap_i A_i$ where $A_i$ decrease and belong to an additive class already handled at this stage of the Borel hierarchy. For $\Pi^0_1$ these are decreasing open neighborhoods; at higher multiplicative ranks the usual normal form is a countable intersection of lower-rank additive sets. Finite intersections make the sequence decreasing. Use the induction hypothesis to obtain open $O_i(x)\supseteq(A_i)_x$ with $\mu(O_i(x)\setminus(A_i)_x)<\epsilon/2$. Put $$K_i=\{x:\mu(((A_i\setminus A)_x))<\epsilon/2\}.$$ Each $K_i$ is Borel by step 1.1. Since $(A_i)_x$ decreases to $A_x$ and $\mu$ is finite, continuity from above makes the $K_i$ increasing with union all parameters. The least $i=i(x)$ with $x\in K_i$ is therefore a Borel integer-valued function. Set $O_x=O_{i(x)}(x)$. Then $$\mu(O_x\setminus A_x)\le \mu(O_{i(x)}(x)\setminus(A_{i(x)})_x) +\mu(((A_{i(x)}\setminus A)_x))<\epsilon.$$ The selected open code is Borel by step 1.2. [step 1.1, step 1.2, F2, IH]

3.1 Every Borel set has a well-founded countable construction code from open sets using complement and countable union. The two-part transfinite Borel-rank induction—additive classes first by countable unions of earlier multiplicative classes, then multiplicative classes by step 2.3—using steps 2.1, 2.2 and 2.3 gives the asserted code operator for the particular $H$; no pointwise arbitrary choice of hulls is made. If $\mu(H_x)=0$, the disjoint decomposition $O_x=H_x\cup(O_x\setminus H_x)$ gives $\mu(O_x)<\epsilon$. ∎ [step 2.1, step 2.2, step 2.3, F2, discharge-induction]
