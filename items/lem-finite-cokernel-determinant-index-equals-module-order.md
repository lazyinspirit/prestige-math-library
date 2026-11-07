---
id: lem-finite-cokernel-determinant-index-equals-module-order
kind: lemma
title: "The determinant index of an injection of projective lattices equals its cokernel order"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-axiom-of-choice
  - def-jacobson-radical-of-a-ring
  - def-number-field
  - def-projective-module
  - def-ring-of-integers-of-a-number-field
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-nakayama-lemma
justified_by: []
proof_strategy: direct
axiom_use: "AC is required by the ring-of-integers Dedekind supplier and the invoked Nakayama lemma; the determinant and DVR matrix arguments use no further choice."
provenance:
  statement: locally-derived
  proof: ai-generated
sources:
  references:
    - title: "J.S. Milne, *Algebraic Number Theory*, version 3.08 (2020)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Chapter 3, Proposition 3.6 and Theorem 3.29, printed pp. 49 and 57–58, and Chapter 4, Proposition 4.1, printed p. 68: local DVRs, Dedekind rings of integers, and finiteness of nonzero ideal quotients. The determinant-index identity is proved locally in this item."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $K$ be a number field, $R=\mathcal O_K$, and let $P,Q$ be finitely generated projective $R$-modules with common rank $r=\dim_K(P\otimes_RK)=\dim_K(Q\otimes_RK)$. Let $f:P\to Q$ be injective with finite cokernel $C$. Define $\det_R(P)=\bigwedge_R^rP$ and $\det_R(Q)=\bigwedge_R^rQ$, where $\bigwedge_R^rP$ is the quotient of $P^{\otimes_Rr}$ by the alternating relations and $\bigwedge_R^0R=R$; let $\det_R(f)$ be the induced map. For every nonzero $u\in\det_R(P)$, both quotients below are finite, $\det_R(f)$ is injective, and
$$\#\bigl(\det_R(Q)/R\det_R(f)(u)\bigr)=\#C\,\#\bigl(\det_R(P)/Ru\bigr).$$

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-projective-module]]

[[cor-ring-of-integers-is-a-dedekind-domain]]

[[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]

[[def-jacobson-radical-of-a-ring]]

[[thm-nakayama-lemma]]

[[lem-nonzero-number-field-ideal-has-finite-quotient]]

[Milne, *Algebraic Number Theory*, Chapter 3, Proposition 3.6 and Theorem 3.29, and Chapter 4, Proposition 4.1](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$, its ring of integers $R$, finitely generated projective $R$-modules $P,Q$ of common rank $r$, an injective map $f:P\to Q$ with finite cokernel $C$, and nonzero $u\in\det_R(P)$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice holds; it is required by [F2] and [F6].

[F1] [[def-number-field]] and [[def-ring-of-integers-of-a-number-field]]: $K$ is a finite extension of $\mathbb Q$ and $R=\mathcal O_K$ is a domain of characteristic zero.

[F2] [[cor-ring-of-integers-is-a-dedekind-domain]]: under AC, $R$ is a Dedekind domain and hence is Noetherian and not a field.

[F3] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]: for each nonzero prime $\mathfrak p$ of $R$, $R_{\mathfrak p}$ is a discrete valuation ring.

[F4] [[def-projective-module]]: a projective module has the lifting property for surjections; in particular, a surjection onto $P$ or $Q$ splits.

[F5] [[thm-nakayama-lemma]]: under AC, if $I$ lies in the Jacobson radical of a commutative ring and $IM=M$ for a finitely generated module, then $M=0$.

[F6] [[def-jacobson-radical-of-a-ring]]: the Jacobson radical is the intersection of the maximal ideals; in a local ring it is its unique maximal ideal.

[F7] [[lem-nonzero-number-field-ideal-has-finite-quotient]]: every nonzero integral ideal of $R$ has finite additive quotient.

## Proof

**Proof technique:** localize at each nonzero prime, reduce the matrix over the resulting discrete valuation ring, and compare local lengths before taking global orders.

**Given:** [A1], [F1]–[F7], and the data in the Statement.

1.1 Because $P,Q$ are finitely generated projective, choose a surjection from a finite free module onto each and split it by [F4]; hence both are direct summands of finite free modules and are torsion-free. Fix a nonzero prime $\mathfrak p\subset R$ and put $S=R_{\mathfrak p}$ with maximal ideal $\mathfrak m$. By [F3], $S$ is a discrete valuation ring. Choose a basis of $P_{\mathfrak p}/\mathfrak mP_{\mathfrak p}$ and lift it to $d$ elements of $P_{\mathfrak p}$. These elements generate by [F5]–[F6], so they give a surjection $S^d\to P_{\mathfrak p}$; it splits by [F4]. Its kernel $N$ is finitely generated because $S$ is Noetherian. Reducing the splitting modulo $\mathfrak m$ shows $N/\mathfrak mN=0$, so [F5]–[F6] give $N=0$. Thus $P_{\mathfrak p}$ is free of rank $d$, and tensoring with $K$ shows $d=r$. The same proof makes $Q_{\mathfrak p}$ free of rank $r$. [A1, F3, F4, F5, F6, given, algebra]

1.2 If $r=0$, torsion-freeness from step 1.1 and $P\otimes_RK=Q\otimes_RK=0$ give $P=Q=0$, $C=0$, and $\det_R(f)=\operatorname{id}_R$; the asserted formula follows. Suppose $r>0$. The finite abelian group $C$ is annihilated by some positive integer $n$, which is nonzero in $R$ and invertible in $K$ by [F1]. Therefore $f\otimes_RK$ is an isomorphism. In bases from step 1.1, its localization at $\mathfrak p$ is an $r\times r$ matrix of nonzero determinant over $S$. Over a discrete valuation ring, choose a nonzero entry of least valuation; it divides every entry. Row and column swaps put it first, multiplication by a unit makes it a power of a uniformizer, and invertible row and column operations clear its row and column. Repeating on the remaining block diagonalizes the matrix. The cokernel is then a sum of modules $S/(\pi^{a_j})$, so its length is $\sum_j a_j$, which is the valuation of the determinant. Localization commutes with the tensor quotient defining exterior powers, so the localized determinant map is multiplication by that determinant and its cokernel has the same length. Thus $C_{\mathfrak p}$ and $\operatorname{coker}(\det_R(f))_{\mathfrak p}$ have equal lengths for every nonzero prime $\mathfrak p$. [F1, F3, step 1.1, given, algebra]

2.1 The exterior-power decomposition of a direct sum makes $\det_R(P)$ and $\det_R(Q)$ direct summands of finite free exterior powers; they are therefore finitely generated torsion-free modules. Their ranks are one because $\dim_K(\bigwedge_K^r(P\otimes_RK))=\dim_K(\bigwedge_K^r(Q\otimes_RK))=1$. The map $\det_R(f)$ is an isomorphism over $K$, so its cokernel is finitely generated torsion. A product of nonzero annihilators of a finite generating set annihilates this cokernel, making it a quotient of finitely many copies of $R/aR$ for some $0\ne a\in R$; it is finite by [F7]. Each finite $R$-module has a composition series because its underlying set is finite: choose a maximal proper submodule and repeat on the smaller submodule. Each simple factor is $R/\mathfrak p$ for a maximal ideal $\mathfrak p$, and [F7] makes these residue fields finite. Localization of the composition series at $\mathfrak p$ kills every factor $R/\mathfrak q$ with $\mathfrak q\ne\mathfrak p$ and leaves $R/\mathfrak p$ as the residue field, so the local length counts exactly that factor's multiplicity. Therefore the order of a finite module is the product of its residue-field orders raised to the local lengths. Step 1.2 gives $\#\operatorname{coker}(\det_R(f))=\#C$. [F1, F2, F7, step 1.2, algebra]

3.1 The map $\det_R(f)$ is injective: any element in its kernel becomes zero over $K$ by step 1.2, hence is torsion, and $\det_R(P)$ is torsion-free by step 2.1. The quotients $\det_R(P)/Ru$ and $\det_R(Q)/R\det_R(f)(u)$ are finitely generated torsion modules, so they are finite by the annihilator argument and [F7]. The natural quotient maps give an exact sequence
$$0\longrightarrow\det_R(P)/Ru\xrightarrow{\det_R(f)}\det_R(Q)/R\det_R(f)(u)\longrightarrow\operatorname{coker}(\det_R(f))\longrightarrow0.$$
Taking cardinalities and applying step 2.1 gives the asserted identity. [F7, given, step 2.1, algebra] ∎
