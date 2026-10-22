---
id: lem-seifert-stabilization-preserves-levine-tristram-signature
kind: lemma
title: "Seifert stabilization preserves the Levine–Tristram signature"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-seifert-matrix-s-equivalence
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - def-levine-tristram-hermitian-form-and-signature
  - lem-levine-tristram-one-sided-averages-exist
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
      locator: "Chapter 8, Theorem 8.4, printed pp. 81–82: the rank-two elementary Seifert enlargements; the block-signature calculation is proved in this item."
    - title: "Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477)"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1, printed pp. 3–4: Hermitian form convention; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected."
---
## Statement

Assume full AC. For every $\omega\in S^1\setminus\{1\}$, changing an ordered basis by an integral unimodular congruence or changing a knot Seifert matrix by either elementary enlargement or reduction preserves the signature of $H_\omega$. Consequently, the nonroot Levine–Tristram signature and its one-sided-average value at every Alexander root are independent of the spanning surface and basis.

## Statement references

[[def-levine-tristram-hermitian-form-and-signature|The Hermitian matrix and signature convention]]

[[def-seifert-matrix-s-equivalence|The two elementary enlargement matrices]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot Seifert matrix $V$, its two enlargement matrices, and $\omega\in S^1\setminus\{1\}$.

[A1] Full AC supplies the Seifert pairing and surface hypotheses. [[def-axiom-of-choice]]

[F1] A basis change is $V\mapsto P^TVP$ for $P\in GL_{2g}(\mathbb Z)$; knot surfaces are related by isotopies and the two enlargements. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-matrices-of-a-knot-are-s-equivalent]], [[def-seifert-matrix-s-equivalence]]

[F2] Signature is the positive eigenvalue count minus negative eigenvalue count of a finite Hermitian matrix. [[def-levine-tristram-hermitian-form-and-signature]]

[F3] The one-sided signature limits at every Alexander root exist, so their arithmetic averages are defined. [[lem-levine-tristram-one-sided-averages-exist]]

## Proof

1.1 Since $P$ is real, $H_\omega(P^TVP)=P^TH_\omega(V)P$. An invertible congruence is a change of coordinates in the associated Hermitian form, so its positive and negative indices are unchanged: a maximal positive subspace maps bijectively by $P$, and likewise for negative subspaces. Hence the signature is invariant under basis change. [F1, F2, given, algebra]

2.1 Put $c=1-\omega\ne0$. For either enlargement, the enlarged Hermitian matrix has block form
$$\widetilde H=\begin{pmatrix}H&b&0\\b^*&z(c+\bar c)&\lambda\\0&\bar\lambda&0\end{pmatrix},\qquad |\lambda|=|c|>0,$$
where $H=H_\omega(V)$, $b$ is the column determined by the enlargement vectors, and $z\in\mathbb Z$. The lower $2\times2$ block $D$ has determinant $-|c|^2<0$, hence one positive and one negative eigenvalue. Its inverse has $(D^{-1})_{11}=0$. The block congruence eliminating $b$ therefore has Schur complement $H-b(D^{-1})_{11}b^*=H$, so $\widetilde H$ is congruent to $H\oplus D$. The block $D$ contributes signature $0$, proving enlargement invariance for every $\omega\ne1$, including singular parameters. [F1, step 1.1, algebra]

3.1 By [F1], any two knot matrices are connected by the operations of steps 1.1 and 2.1, so their signatures agree at every nonroot parameter. The one-sided signatures are equal as functions on each punctured neighboring arc; by [F3] their arithmetic averages are defined and agree at a root as well. Reductions reverse the same equalities. [A1, F1, F3, step 1.1, step 2.1, algebra] ∎
