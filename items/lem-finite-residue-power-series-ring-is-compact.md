---
id: lem-finite-residue-power-series-ring-is-compact
kind: lemma
title: "A power-series ring over a complete Noetherian local ring with finite residue field is compact"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-noetherian-ring
  - def-noetherian-module
  - lem-binary-sequence-space-is-compact-without-tychonoff
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC chooses enumerations of the countable family of finite quotients used to
  embed their product in binary-sequence space. The binary compactness supplier
  is proved in ZF; no Tychonoff theorem or DC is used.
provenance:
  statement: reconstructed
  proof: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let \(\mathcal O\) be a commutative Noetherian local
ring, complete for powers of its maximal ideal \(\mathfrak m_{\mathcal O}\),
with finite residue field \(k=\mathcal O/\mathfrak m_{\mathcal O}\). Let
\(r\in\mathbb N\), put
\[
S=\mathcal O[[T_1,\ldots,T_r]],\qquad
\mathfrak n=\mathfrak m_{\mathcal O}S+(T_1,\ldots,T_r),
\]
and give \(S\) the topology with neighborhood basis
\(\{\mathfrak n^q:q\ge1\}\) at zero. Then \(S\) is compact, meaning every open
cover of \(S\) has a finite subcover.

## Statement references

[[def-axiom-of-choice]]

[[def-noetherian-ring]]

[[def-noetherian-module]]

[[lem-binary-sequence-space-is-compact-without-tychonoff]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative Noetherian local ring complete in its maximal-ideal topology with finite residue field, and \(r\in\mathbb N\).

[F1] AC says every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F2] The binary-sequence space \(\{0,1\}^{\mathbb N}\), with the prefix-cylinder topology, is compact in ZF. [[lem-binary-sequence-space-is-compact-without-tychonoff]]

[F3] A commutative ring is Noetherian when its regular module is Noetherian; a module is Noetherian when all its submodules are finitely generated. Hence every ideal of \(\mathcal O\), in particular every power of \(\mathfrak m_{\mathcal O}\), is finitely generated. [[def-noetherian-ring]] [[def-noetherian-module]]

## Proof

**Given:** The Statement.

1.1 Each quotient \(\mathfrak m_{\mathcal O}^j/\mathfrak m_{\mathcal O}^{j+1}\) is a finitely generated \(\mathcal O\)-module by [F3] and is annihilated by \(\mathfrak m_{\mathcal O}\), so it is a finite-dimensional vector space over the finite field \(k\), hence a finite set. Starting from \(\mathcal O/\mathfrak m_{\mathcal O}=k\), the exact quotient maps show by induction on \(q\) that \(\mathcal O/\mathfrak m_{\mathcal O}^q\) is finite for every \(q\ge1\). [F3, algebra, induction]

1.2 Modulo \(\mathfrak n^q\), only the finitely many monomials \(T_1^{a_1}\cdots T_r^{a_r}\) of total degree \(d=a_1+\cdots+a_r<q\) can occur, and the coefficient of a degree-\(d\) monomial is taken modulo \(\mathfrak m_{\mathcal O}^{q-d}\). By step 1.1 every such coefficient ring is finite, so \(S/\mathfrak n^q\) is finite. Completeness of \(\mathcal O\) shows that the natural map
\[
S\longrightarrow\varprojlim_{q\ge1}S/\mathfrak n^q
\]
is bijective: a compatible family determines, for each monomial \(T^a\), compatible coefficient classes modulo \(\mathfrak m_{\mathcal O}^j\) for all \(j\), hence a unique coefficient in \(\mathcal O\), and these coefficients form the unique power series representing the family. The map is a homeomorphism for the stated neighborhood topology and the inverse-limit topology. [given, step 1.1, algebra]

2.1 Write \(X_q=S/\mathfrak n^q\) with the discrete topology and \(X=\prod_{q\ge1}X_q\) with the product topology, whose basic open sets restrict finitely many coordinates. By [F1], choose a finite enumeration of each \(X_q\) and an enumeration of their countable disjoint union \(I=\coprod_{q\ge1}X_q\). Map \(x=(x_q)_q\in X\) to the binary function on \(I\) that equals \(1\) exactly at the selected coordinate \((q,x_q)\) in each block \(\{q\}\times X_q\). Each output coordinate depends on one \(x_q\), and the inverse reads the unique \(1\) in each finite block, so this is a homeomorphism onto the subset \(E\subseteq\{0,1\}^I\) in which every block has exactly one \(1\). For each block, the one-\(1\) condition depends on finitely many coordinates and is closed; hence \(E\), their intersection, is closed. The set \(I\) is countably infinite, so \(\{0,1\}^I\) is homeomorphic to the binary-sequence space in [F2] and is compact. A closed subset of a compact space is compact: an open cover of the subset, together with the open complement, covers the whole space and therefore has a finite subcover. Thus \(X\) is compact. [F1, F2, construct, algebra]

3.1 Under the identification in step 1.2, \(S\) is the subset of \(X\) consisting of compatible residues, namely those satisfying \(x_{q+1}\bmod\mathfrak n^q=x_q\) for every \(q\). Each compatibility condition is closed because it is imposed on two finite discrete coordinates, so their intersection is closed in \(X\). Since \(X\) is compact by step 2.1, this closed subset \(S\) is compact. [step 1.2, step 2.1, algebra] ∎

## Remarks

The proof uses compactness only for a countable inverse system of finite quotients. It does not invoke Tychonoff’s theorem; the finite quotient product is encoded as a closed subset of the binary-sequence space.
