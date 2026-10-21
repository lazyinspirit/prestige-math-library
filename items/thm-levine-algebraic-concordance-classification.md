---
id: thm-levine-algebraic-concordance-classification
kind: theorem
title: "Classification of rational and integral algebraic concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-integral-witt-and-seifert-isometric-structures
  - def-axiom-of-choice
  - thm-integral-seifert-witt-group-injects-into-rational-isometric-group
  - thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition
  - thm-rational-primary-isometric-classes-are-hermitian-witt-classes
  - thm-hermitian-number-field-signature-kernel-is-killed-by-four
  - thm-rational-symmetric-signature-kernel-is-killed-by-four
  - lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families
  - lem-countable-signature-groups-with-exponent-four-kernel-split
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3, printed pp. 325–326: rational/integral distinction and classification attribution"
    - title: "Neal W. Stoltzfus, Unraveling the Integral Knot Concordance Group"
      url: "https://doi.org/10.1090/memo/0192"
      locator: "Memoirs of the American Mathematical Society 12(192), 1977; full classification and localization sequence"
    - title: "Charles Livingston, The concordance genus of a knot, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, printed pp. 169–171: integral group, rationalization, and injection"
---

## Statement

Assume the full Axiom of Choice for knot Seifert pairings. Let $G_{\mathbb Q}$ be the rational Witt group of finite-dimensional even-dimensional nonsingular symmetric rational forms equipped with an invertible isometry $T$ for which $I-T$ is invertible, modulo metabolic $T$-invariant subspaces, and let $G_{\mathbb Z}$ be the integral algebraic concordance group of Seifert lattices. The rational algebraic concordance classification due to Levine and the integral classification completed by Stoltzfus identify each of these abelian groups, as an abstract group, with
$$
\mathbb Z^{(\mathbb N)}\oplus(\mathbb Z/2\mathbb Z)^{(\mathbb N)}\oplus(\mathbb Z/4\mathbb Z)^{(\mathbb N)}.
$$
Here $A^{(\mathbb N)}$ denotes the direct sum of countably infinitely many copies of the abelian group $A$; the statement does not identify Levine's rational classification with the distinct integral group or claim that their defining objects are the same.

## Statement references

[[def-integral-witt-and-seifert-isometric-structures|The definitions of the integral and rational Witt groups]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The integral metabolic relation]]

## Facts & Assumptions

**Given:** Full AC and the two groups in the Statement, with their original defining objects and metabolic relations.

[A1] Full AC is assumed as stated. [[def-axiom-of-choice]]

[F1] The integral group uses finite integral Seifert lattices with unimodular skew part, and the rational group uses the even-dimensional rational isometric structures in the Statement. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]], [[def-integral-witt-and-seifert-isometric-structures]]

[F2] Integral Seifert classes admit invertible representatives, and the associated rational structure defines an injective homomorphism $\iota:G_{\mathbb Z}\hookrightarrow G_{\mathbb Q}$. This includes singular-matrix reduction and saturation of rational metabolizers. [[thm-integral-seifert-witt-group-injects-into-rational-isometric-group]]

[F3] Rational isometric classes split as the direct sum of their self-reciprocal primary groups. For each irreducible $p\ne t+1$ the primary group is the hermitian Witt group of the number field $E=\mathbb Q[t]/(p)$ with involution $t\mapsto t^{-1}$, and the $t+1$ group is the even-dimensional symmetric Witt group over $\mathbb Q$. [[thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition]], [[thm-rational-primary-isometric-classes-are-hermitian-witt-classes]]

[F4] The kernel of all hermitian signatures over each quadratic number-field extension is killed by four. The rational symmetric signature kernel is also killed by four, including on its even-dimensional subgroup. [[thm-hermitian-number-field-signature-kernel-is-killed-by-four]], [[thm-rational-symmetric-signature-kernel-is-killed-by-four]]

[F5] The explicit integral matrices $F_b=\begin{pmatrix}1&1\\0&b\end{pmatrix}$, $P_n=\begin{pmatrix}1&1\\0&-n^2\end{pmatrix}$, and $Q_q=\begin{pmatrix}1&1\\0&-(3q-1)/4\end{pmatrix}$, for $b,n\ge1$ and primes $q\equiv3\pmod4$, $q\ne3$, lie in distinct quadratic primary components. The first family is independent of infinite order, the second has exact order two, and the third exact order four. The $P_n$ have independent images in $G_{\mathbb Z}/2G_{\mathbb Z}$. [[lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families]]

[F6] A countable abelian group mapping to a countable direct sum of copies of $\mathbb Z$ with exponent-four kernel splits into countably many free, order-two, and order-four summands. The three multiplicities are infinite under the precise independent-family tests in that lemma. [[lem-countable-signature-groups-with-exponent-four-kernel-split]]

## Proof

1.1 Both groups in [F1] are countable. A rational structure is specified, after one finite basis choice, by its dimension and two finite rational matrices; the isometry and nonsingularity conditions select a subset of this countable set. An integral Seifert lattice is likewise specified by a finite integer matrix. The corresponding presented groups are quotients of the countable sets of finite signed lists of these matrices: finite lists of rationals or integers have explicit natural-number codes, so a countable union over their lengths is countable. Quotients are countable by the surjection from these codes. This argument does not identify the two types of object. Use the injection [F2] to regard $G_{\mathbb Z}$ as a subgroup of $G_{\mathbb Q}$ for the rest of the proof. [A1, F1, F2, given, construct, algebra]

2.1 For each primary group of [F3] other than $t+1$, the involution on $E$ is nontrivial. Indeed if its distinguished generator equalled its inverse, its irreducible polynomial would divide $t^2-1$; $t-1$ is excluded by invertibility of $I-T$ and $t+1$ was separated. If $F=E^{\sigma}$, choose $0\ne\delta$ with $\sigma\delta=-\delta$. Every $z\in E$ has the unique decomposition $(z+\sigma z)/2+\delta(z-\sigma z)/(2\delta)$ with coefficients in $F$, so $E/F$ is quadratic. Take all hermitian signatures at real places of $F$ where $E$ becomes complex, and take the ordinary rational signature on the $t+1$ component. These form a homomorphism $s:G_{\mathbb Q}\to\bigoplus_{j\in J}\mathbb Z$. The index set $J$ is at most countable: there are countably many rational irreducible polynomials and finitely many real places for each number field. Each individual class has only finitely many primary components, so its total signature has finite support. With [A1] fix an enumeration of this index set, adding zero coordinates if needed, to put the target inside $\bigoplus_{n\ge1}\mathbb Z$. [A1, F3, step 1.1, construct, algebra]

3.1 If $s(x)=0$, each of the finitely many nonzero primary components of $x$ has all its signatures zero. By [F4] four times each such component is zero; the primary direct-sum isomorphism [F3] gives $4x=0$. Thus $4\ker s=0$. The same holds for the kernel of $s\iota$ on $G_{\mathbb Z}$, since $\iota$ is injective. Applying [F6] separately to these two countable groups gives decompositions of each with at most countable free, order-two and order-four multiplicities. In particular every torsion class has order dividing four; the proof has used signatures to identify all torsion, rather than merely exhibiting some finite-order classes. [F2, F3, F4, F6, step 1.1, step 2.1, algebra]

4.1 In either group, the elements $F_b,P_n,Q_q$ of [F5] meet the three infinitude tests of [F6]. A finite nonzero integer combination of the $F_b$ cannot be torsion: if some nonzero multiple vanished, projection to each distinct primary factor would contradict the infinite order of its $F_b$. The $2Q_q$ are independent order-two elements, by distinct primary factors and exact order four. For the rational quotient by doubles, project to the quadratic primary factor of $P_n$, identified with a hermitian Witt group by [F3], and then take hermitian rank modulo two. This is a homomorphism because metabolic hermitian forms have even rank. The two-dimensional rational structure of $P_n$ has rank one over its quadratic field, so the homomorphism takes value one there; it vanishes on the other $P_m$ by their distinct primary factors, and on every double by its target $\mathbb Z/2$. Hence the $P_n$ are independent modulo doubles in $G_{\mathbb Q}$ as well as in $G_{\mathbb Z}$, the latter also following directly from [F5]. Thus the $P_n$ are independent in the quotient by doubles in each group. This last condition forces independent order-two summands after splitting; independent order-two elements alone would not suffice, since doubles of order-four elements also have order two. There are infinitely many indicated primes $q$ by the finite Euclidean argument in [F5]. [F2, F3, F5, F6, step 3.1, algebra]

5.1 By [F6] and step 4.1, all three multiplicities in both decompositions from step 3.1 are infinite, and their countable upper bounds make them precisely $\aleph_0$. This is the displayed abstract group isomorphism for each of $G_{\mathbb Q}$ and $G_{\mathbb Z}$. The integral result here follows from its proved injection, the shared exponent bound, the splitting argument and the actual integral families. No assertion that primary summands split integrally, no identification of the rational group with its integral subgroup, and no unspecified integral localization or coupling theorem is needed for this abstract isomorphism. In particular the allowed $t+1$ component of the original rational Definition has been retained throughout. [F1, F2, F6, step 3.1, step 4.1, algebra] ∎
