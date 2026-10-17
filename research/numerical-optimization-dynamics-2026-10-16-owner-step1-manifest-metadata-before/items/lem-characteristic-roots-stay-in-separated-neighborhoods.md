---
id: lem-characteristic-roots-stay-in-separated-neighborhoods
kind: lemma
title: Characteristic roots preserve separated cluster counts under matrix perturbation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-characteristic-polynomial-of-a-matrix
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-bolzano-weierstrass
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 151–159, spectral decomposition at a bifurcation
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Section 2A, printed pp. 50–53, finite-dimensional spectral decomposition
verification:
  precheck: pass
---

## Statement

Let $A_n,A\in\mathbb C^{d\times d}$ with $A_n\to A$ entrywise. Let $U_1,\ldots,U_s$ be pairwise disjoint open disks whose boundaries contain no eigenvalue of $A$ and which together contain every eigenvalue of $A$. Then, for all sufficiently large $n$, each $U_j$ contains exactly the same number of eigenvalues of $A_n$, counted with algebraic multiplicity, as of $A$.

## Facts & Assumptions

**Given:** Matrices $A_n,A$, the open disks $U_j$, and the hypotheses in the Statement.

[F1] [[def-characteristic-polynomial-of-a-matrix]]: $\chi_A(z)=\det(zI-A)$ is monic of degree $d$ for $d\ge1$; its coefficients are polynomial expressions in the entries of $A$.

[F2] [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]: a degree-$d$ complex polynomial factors into exactly $d$ linear roots counted with multiplicity, and the multiset is unique.

[F3] [[thm-bolzano-weierstrass]]: every bounded real sequence has a convergent subsequence.

## Proof

**Given:** $A_n,A,U_1,\ldots,U_s$ as in the Statement.

1.1 The coefficients of $\chi_{A_n}$ converge to those of $\chi_A$ because determinants are finite sums of products of matrix entries. They are therefore uniformly bounded. For a monic polynomial $z^d+\sum_{k<d}a_kz^k$, every root satisfies $|z|\le1+\max_{k<d}|a_k|$: outside that disk, $\sum_{k<d}|a_k||z|^k<|z|^d$ by the finite geometric-sum bound, so the polynomial cannot vanish. Hence all roots of all sufficiently large $\chi_{A_n}$ lie in one fixed bounded disk. [F1, given, algebra]

2.1 For each $n$, list the $d$ roots of $\chi_{A_n}$ with multiplicity in the canonical lexicographic order by real part and then imaginary part; [F2] supplies the finite multiset, and this ordering requires no choice. The resulting sequence of root lists is bounded in $\mathbb R^{2d}$. Applying [F3] successively to its $2d$ real coordinates gives a subsequence on which every root in the list converges. [F2, F3, step 1.1, construct]

3.1 Along that subsequence, the factorization $\chi_{A_n}(z)=\prod_{k=1}^{d}(z-\lambda_{n,k})$ converges coefficientwise to $\prod_{k=1}^{d}(z-\lambda_k)$. By step 1.1 the same coefficient limit is $\chi_A$, so uniqueness in [F2] shows that the limiting list is exactly the root multiset of $\chi_A$, including multiplicities. [F1, F2, step 1.1, step 2.1, algebra]

4.1 If the asserted disk counts failed for infinitely many $n$, restrict to those indices and repeat step 2.1. Since no root of $\chi_A$ lies on any disk boundary, each convergent root sequence from step 3.1 is eventually in the same disk as its limit, or outside all the disks if its limit is outside them; hence the disk counts eventually equal the multiplicities of the limiting roots. This contradicts the chosen indices. Therefore the counts agree for all sufficiently large $n$. [step 2.1, step 3.1, given, contradiction] ∎
