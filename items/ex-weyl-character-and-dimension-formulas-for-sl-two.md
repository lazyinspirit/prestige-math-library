---
id: ex-weyl-character-and-dimension-formulas-for-sl-two
kind: example
title: Weyl character and dimension formulas for sl2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-all-finite-dimensional-irreducible-sl-two-modules, def-special-linear-lie-algebra-sl-two, def-weight-and-weight-space-of-a-lie-algebra-representation, thm-finite-dimensional-representations-of-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.3"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7 and Chapter V §1"
proof_strategy: direct
---

## Example

For the finite-dimensional irreducible $\mathfrak{sl}_2$-module $V(n)$ with
basis $v_0,\dots,v_n$ of
[[ex-all-finite-dimensional-irreducible-sl-two-modules]], put
$$\chi_n(z)=\sum_{k=0}^nz^{n-2k}=z^n+z^{n-2}+\dots+z^{-n}\qquad(z\in\mathbb C^\times).$$
Then for $z\ne\pm1$
$$\chi_n(z)=\frac{z^{n+1}-z^{-(n+1)}}{z-z^{-1}},$$
and
$$\dim V(n)=n+1 .$$

## Facts & Assumptions

**Given:** The module $V(n)$ with its basis and $h$-eigenvalues $n-2k$ ([[ex-all-finite-dimensional-irreducible-sl-two-modules]]), the standard diagonal subalgebra $\mathbb Ch$ from [[def-special-linear-lie-algebra-sl-two]], and the variable $z\in\mathbb C^\times$. In this example we define the rank-one formal character by assigning the monomial $z^m$ to the $h$-eigenspace of eigenvalue $m$ and summing with eigenspace multiplicities; this convention is not attributed to the weight-space definition.

[L1] The $h$-eigenvalues on $V(n)$ are $n,n-2,\dots,-n$, each with multiplicity one, and $\dim V(n)=n+1$ ([[ex-all-finite-dimensional-irreducible-sl-two-modules]], [[thm-finite-dimensional-representations-of-sl-two]], [[def-special-linear-lie-algebra-sl-two]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] the sum $\chi_n(z)=\sum_{k=0}^nz^{n-2k}$ is the sum of $z^m$ over the $h$-eigenvalues $m$ of $V(n)$, each counted with its multiplicity, so it is the rank-one formal character under the convention fixed in the given data. [L1, given]

1.2 The telescoping identity $(z-z^{-1})\chi_n(z)=\sum_{k=0}^n(z^{n-2k+1}-z^{n-2k-1})=z^{n+1}-z^{-(n+1)}$ holds as an identity of Laurent polynomials. [given]

2.1 For $z\ne0$ with $z-z^{-1}\ne0$, that is for $z\ne\pm1$, division gives $\chi_n(z)=\frac{z^{n+1}-z^{-(n+1)}}{z-z^{-1}}$, which is the displayed formula on the regular set. [step 1.2]

2.2 The identity of step 1.2 is the algebraic cancellation $z^{n+1}-z^{-(n+1)}=(z-z^{-1})\chi_n(z)$ in the Laurent polynomial ring; it exhibits $\chi_n$ as the quotient after cancelling the common factor $z-z^{-1}$, and evaluating that Laurent polynomial at $z=1$ gives $\chi_n(1)=n+1$, matching $\dim V(n)=n+1$ by [L1]. [L1, step 1.2]

3.1 Hence the character identity on the regular set and the dimension formula both hold, as asserted. [step 2.1, step 2.2] ∎
