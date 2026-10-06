---
id: cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision
kind: counterexample
title: "Ordinary Jucys-Murphy projection formulas do not survive content collision"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation, def-content-vector-of-a-standard-tableau, def-removable-and-addable-nodes-of-a-partition, def-polytabloid-specht-module-over-an-arbitrary-field, def-finite-field-and-its-order, thm-existence-of-finite-fields]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Seminormal Forms and Gram Determinants for Cellular Algebras, J. reine angew. Math. 619 (2008) 141-173; arXiv:math/0604108, sections 2.8-2.15 and 4 (residues and content collisions in the seminormal/Carter setting), printed pp. 4-8 and 14-21"
      url: "https://arxiv.org/pdf/math/0604108"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorems 3.4-3.5, printed pp. 22-24"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-19.md; immutable carrier: research/frontier-38-owner-30-step5-hash-19-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-19 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement refuted

For every field $F$ and every standard tableau $T$ of size $n$, the
characteristic-zero interpolation formula
$$P_T=P_{T\downarrow[n-1]}\prod_{\substack{c\in A(\mu)\\ c\ne c_T(n)}}\frac{X_n-c}{c_T(n)-c}$$
defines an element of $F[S_n]$ and yields the primitive tableau idempotents
of the group algebra over $F$, by the same recursion as over $\mathbb C$.

## Facts & Assumptions

**Given:** Let $F$ be the field with two elements and $n=3$, so that $F[S_3]$ is the group algebra over $F$ ([[thm-existence-of-finite-fields]], [[def-finite-field-and-its-order]]).

[F1] In $F$ one has $1+1=0$; in particular the integer $2$ is zero in $F$. [thm-existence-of-finite-fields, def-finite-field-and-its-order, algebra]

[F2] For $\lambda=(2,1)$ the two standard tableaux are $T=\begin{smallmatrix}1&2\\3\end{smallmatrix}$ and $T'=\begin{smallmatrix}1&3\\2\end{smallmatrix}$, with content vectors $(0,1,-1)$ and $(0,-1,1)$; these vectors are congruent modulo the relation $1=-1$ in $F$, i.e. they have the same entries in $\mathbb Z/2$ ([[def-content-vector-of-a-standard-tableau]]).

[F3] The common size-one prefix of $T$ and $T'$ has shape $(1)$, which has exactly two addable nodes $(1,2)$ and $(2,1)$, of contents $1$ and $-1$; the entry $2$ of $T$ sits in $(1,2)$ and the entry $2$ of $T'$ sits in $(2,1)$ ([[def-removable-and-addable-nodes-of-a-partition]], [[def-content-vector-of-a-standard-tableau]]).

[F4] Over $F$ the modular Specht module $S^{(2,1)}_F$ is the span of the $(2,1)$-polytabloids and is nonzero ([[def-polytabloid-specht-module-over-an-arbitrary-field]]).

## Proof

**Proof technique:** direct.

1.1 The interpolation recursion of the refuted statement, applied with $n=2$ to the tableau whose entry $2$ lies in the addable node of content $1$ of the shape $(1)$, is $$P_T=P_{[1]}\frac{X_2-c}{c_T(2)-c}\quad\text{with }c_T(2)=1,\ c=-1,$$ because $A((1))=\{1,-1\}$ by [F3]; thus the factor is $(X_2+1)/(1-(-1))=(X_2+1)/2$. [F3, given, algebra]

1.2 The failure is not caused by the absence of the module: over $F$ the Specht module $S^{(2,1)}_F$ and its endomorphism algebra continue to exist by [F4]. Writing $b_j$ for the tabloid with $j$ in its singleton row, the polytabloids span the two-dimensional subspace $\operatorname{span}_F\{b_3-b_1,b_2-b_1\}$, since these differences are independent and every polytabloid is a difference $b_j-b_k$. The two content vectors of [F2] even coincide after reduction to $\mathbb Z/2$; what fails is precisely the separation of the two addable contents $1$ and $-1$ that the interpolation denominators encode. [F2, F3, F4, algebra]

2.1 Evaluation of the displayed factor in $F[S_3]$ requires the inverse of the integer $2$ in $F$; but $2=0$ in $F$ by [F1], so the factor $(X_2+1)/2$ is not an element of $F[S_3]$ and the formula does not define $P_T$ over $F$. The same applies to the companion tableau $T'$, whose factor is $(1-X_2)/2$. [F1, step 1.1, algebra]

3.1 Hence the characteristic-zero interpolation formula for the primitive idempotents does not reduce to a formula of the same shape over a field of characteristic $2$: the collision prevents these factors from separating the two prefixes. No nonexistence assertion about other idempotents follows from this calculation. This refutes the displayed statement and completes the counterexample. [step 2.1, step 1.2, algebra] ∎

## Remarks

- **What is and is not claimed.** The item refutes only the transfer of the interpolation formula as written; it does not claim that the idempotents or the Specht module fail to exist over $F$, nor that no formula with different coefficients can exist. The smallest failure is the step $n=1\to2$, where the denominator $c_T(2)-c=2$ collides with the characteristic.

- **Residues.** Modular approaches can aggregate tableau projectors with the same residue vector, rather than separating coincident contents. The residue idempotents need not be central or primitive. Mathas, Lemma 4.2 and Definition 4.3 (printed pp. 15–16), distinguishes these from the central residue-linkage idempotents of Corollary 4.7 (printed p. 18).
