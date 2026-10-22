---
id: lem-upsilon-finite-series-complex-homogeneous-splitting
kind: lemma
title: "Finite homogeneous complexes over the real-series ring have finite cyclic splittings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-upsilon-real-series-valuation-domain
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The reduction selects pivots in finite matrices and terminates after finitely many basis changes; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Concordance homomorphisms from knot Floer homology"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Section4; the finite homogeneous matrix proof is supplied locally"
---

## Statement

Let $\mathcal R$ be the nonnegative real-exponent series ring over $\mathbb F_2$, with $\operatorname{gr}(v^\alpha)=-\alpha$. Let $C$ be a finite free $\mathcal R$-module with a fixed finite real-graded basis and an $\mathcal R$-linear differential of degree $-1$. Then graded changes of basis decompose $C$ into finitely many zero-differential rank-one summands and finitely many two-term summands
$$\mathcal R x\xrightarrow{\partial}\mathcal R y,\qquad\partial x=v^\alpha y,\quad\partial y=0,\quad\alpha\ge0.$$
Consequently homology is a finite direct sum of graded copies of $\mathcal R$ and of cyclic torsion modules $\mathcal R/(v^\alpha)$; a summand with $\alpha=0$ contributes zero homology. If there is a non-torsion homology class, the maximal grading of a homogeneous non-torsion class exists and equals the greatest grading of the finitely many free homology generators.

## Statement references

[[lem-upsilon-real-series-valuation-domain]]

## Facts & Assumptions

**Given:** Exactly the finite free graded complex in the Statement.

[F1] The coefficient ring is an integral domain and every nonzero homogeneous coefficient is $v^\alpha$ for one $\alpha\ge0$; its units and valuation are proved in [[lem-upsilon-real-series-valuation-domain]].

## Proof

1.1 Each nonzero matrix entry of $\partial$ is a monomial by homogeneity. If $\partial\ne0$, choose an entry of least exponent $\alpha$ in its finite matrix. A least-exponent entry can be chosen off the diagonal. Indeed, if every entry attaining the least exponent were diagonal, the corresponding diagonal entry of $\partial^2$ would have leading term $v^{2\alpha}$ from the square of that diagonal coefficient, while every off-diagonal returning product would have exponent strictly greater than $2\alpha$. This contradicts $\partial^2=0$. Choose such an off-diagonal least entry, from $x$ to a different basis element $y$. [F1, given, construct, algebra]

2.1 Every entry is divisible by $v^\alpha$ in $\mathcal R$. Replace the basis element $y$ by $z=v^{-\alpha}\partial x$. Its coefficient on the old $y$ is one and it involves no other negative-exponent coefficient, so this is an invertible elementary basis change leaving $x$ fixed. It is graded because $z$ and the old $y$ have the same degree. Now $\partial x=v^\alpha z$ and $\partial z=0$: multiplying the latter equation by $v^\alpha$ gives $\partial^2x=0$, and [F1] permits cancellation on the free module. In the new basis all differential coefficients still have exponent at least $\alpha$, since both the basis change and its inverse have entries in $\mathcal R$. [F1, step 1.1, given, construct, algebra]

3.1 For each remaining basis vector $w$, let $b_w$ be the coefficient of $z$ in $\partial w$. Replace $w$ by $w+(b_w/v^\alpha)x$, eliminating this coefficient. The quotient lies in $\mathcal R$ by step 2.1, and homogeneity makes this basis change graded. These changes do not alter the $z$ coefficient of any other such image: they change the other basis vectors only by multiples of $x$, which has no $z$ component. After all eliminations, no remaining image contains $z$. Applying $\partial^2=0$ to each remaining vector now forces its image's $x$ coefficient to be zero, because the only image with a $z$ component is $\partial x=v^\alpha z$. Hence the pair $x,z$ is a direct summand of complexes. Repeating on the finite complementary basis terminates and gives the asserted decomposition. [F1, step 2.1, given, construct, algebra]

4.1 In a two-term summand, multiplication by $v^\alpha$ is injective by [F1], so its only homology is the target copy modulo $v^\alpha$, a torsion module. A zero-differential rank-one summand contributes one free homology generator. This proves the finite homology decomposition. A homogeneous non-torsion class has nonzero projection to at least one free summand; its corresponding coefficient is a monomial $v^\beta$ with $\beta\ge0$, so its degree is at most that free generator's degree. Conversely each free generator is itself a homogeneous non-torsion class. Taking the greatest of the finitely many free generator degrees proves the maximum assertion. [F1, step 3.1, given, algebra] ∎
