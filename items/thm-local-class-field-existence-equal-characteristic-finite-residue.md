---
id: thm-local-class-field-existence-equal-characteristic-finite-residue
kind: theorem
title: Local class field existence in equal characteristic with finite residue field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-hensel-factor-lifting-over-a-complete-valued-field
- lem-finite-artin-schreier-unit-pole-perfect-pairing-and-index-p-norms
- lem-local-prime-to-p-power-subgroup-is-a-norm-group
- thm-local-artin-reciprocity-and-norm-index
- def-field-norm-and-trace
- thm-field-norm-and-trace-by-embeddings
- thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
- thm-fundamental-theorem-of-finite-galois-theory
- thm-choice-implies-dependent-implies-countable-choice
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from local class formation; DC is used in finite local reciprocity
  and extension conventions. AC also yields Countable Choice for the unramified-extension and
  finite-dimensional-topology interfaces. The additive filtration argument is finite at each
  open subgroup and uses completeness for its unit expansions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §6, Theorem 6.2
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (5.4)–(5.7) printed146–151 and (6.2) printed155, full actual proofs
      read; finite perfect pairing, subgroup-order induction and norm continuity/transitivity
      are supplied locally.
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a complete discretely valued field of
characteristic $p>0$ with finite residue field. Every open finite-index
subgroup $N\le F^\times$ is the norm subgroup of a unique finite abelian
extension $L/F$. The correspondence reverses inclusions, intersections
correspond to composita, and products correspond to intersections of
extensions.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-artin-schreier-differential-residue-formula]]

[[lem-local-prime-to-p-power-subgroup-is-a-norm-group]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[def-field-norm-and-trace]]

[[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[[def-countable-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter IV §6, Theorem 6.2, printed pp. 153–156](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** Original AC and DC, and the complete equal-characteristic local
field with finite residue field. All local inputs below have their literal
AC/DC or supplied finite-field/valuation hypotheses; no Witt theorem is used.

[F1] Over $k((t))$, the finite unit/pole AS pairing is perfect for every
$r\ge0$, and every open index-$p$ subgroup is the norm group of a cyclic
AS extension of degree $p$.
[[lem-finite-artin-schreier-unit-pole-perfect-pairing-and-index-p-norms]]

[F2] The canonical Artin theorem gives onto finite abelian quotients with
norm kernels, compatibility on same-base finite extensions and uniqueness/
reversed inclusion of abelian norm fields. An open finite-index subgroup
containing a finite SEPARABLE norm is itself an abelian norm group.
[[thm-local-artin-reciprocity-and-norm-index]]

[F3] For $n$ prime to $p$, $F^{\times n}$ is a finite abelian norm group.
[[lem-local-prime-to-p-power-subgroup-is-a-norm-group]]

[F4] The field is complete with discrete valuation, finite residue field
and $F^\times=\pi^{\mathbb Z}\mathcal O_F^\times$.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F5] Unique simple-root Hensel lifting applies over this complete field.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F6] Norm is the determinant of multiplication; for finite separable
extensions it is the product over embeddings.
[[def-field-norm-and-trace]] [[thm-field-norm-and-trace-by-embeddings]]

[F7] A finite extension is complete for the extending valuation, has
finite residue degree and discrete value group under Countable Choice;
its valuation topology equals its finite-dimensional coordinate topology.
[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]
[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]
[[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

[F8] Finite abelian groups have primary decompositions; finite Galois
correspondence identifies fixing groups and intermediate fields.
[[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]
[[thm-fundamental-theorem-of-finite-galois-theory]]

[A1] AC and DC are original. AC gives Countable Choice for [F7].
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** construct the actual coefficient field, use finite AS
duality for index $p$, induct by algebraic norms, and prove lattice clauses
inside one finite canonical quotient.

**Given:** The data above.

1.1 Write $q=|k|$ and consider $X^q-X$ in $\mathcal O_F[X]$. Its derivative is $-1$ because $\operatorname{char}F=p$ and $q$ is a power of $p$. Every $c\in k$ is a simple root of its reduction, so [F5] gives a unique lift $\widetilde c\in\mathcal O_F$ with $\widetilde c^{\,q}=\widetilde c$ and residue $c$. Only the finite set $k$ is involved; initial representatives can be chosen finitely, and the unique lifted root is independent of those representatives. Since $(x+y)^q=x^q+y^q$ and $(xy)^q=x^qy^q$ in characteristic $p$, these $q$ roots are closed under addition, multiplication and additive inverses. A nonzero root has nonzero residue (uniqueness of the lift of $0$), is a unit, and its inverse is another root. Thus they form a subfield $k_0\subset F$ mapped isomorphically onto $k$. This proves compatibility of the selected residue lifts with field operations, rather than merely choosing an arbitrary residue section. For any $x\in\mathcal O_F$, subtract the unique lift of its residue, divide by $\pi$, and repeat. Completeness gives $x=\sum_{j\ge0}c_j\pi^j$ with $c_j\in k_0$; the coefficients are uniquely determined by this deterministic recursion. For $x\in F$ multiply by a power of $\pi$ first, obtaining the unique Laurent expansion. Conversely every such Laurent series converges in $F$; uniqueness proves that coefficientwise series addition and the finite coefficient convolution agree with operations in $F$. Hence $F\cong k_0((\pi))$, and the Artin–Schreier formula [F1] applies to this actual coefficient field. The same construction works over each finite extension used later; no general coefficient-field theorem or infinite choice of residue representatives is assumed. [A1, F4, F5, given, construct, algebra]

2.1 Apply [F1] to this actual Laurent-series identification. It proves the index-$p$ assertion for $F$. The same coefficient-field argument applies over every finite extension of $F$, because [F7] gives completeness, discreteness and finite residue and characteristic stays $p$. Thus the index-$p$ assertion is available over each finite base in the following induction. The trivial subgroup-index-one case is the identity extension and identity norm. [A1, F1, F7, step 1.1, algebra]

3.1 Induct on $m\ge0$ for an open subgroup $N$ of index $p^m$. The cases $m=0,1$ are step 2.1. For $m>1$ the nontrivial finite abelian $p$-group $F^\times/N$ contains a subgroup of ORDER $p$: a nonidentity element of order $p^s$ has a power of order $p$. Let $N_1$ be its preimage. Then $[F^\times:N_1]=p^{m-1}$ and $[N_1:N]=p$. By induction $N_1=N_{E/F}E^\times$ for finite abelian $E/F$. The inverse image $V=N_{E/F}^{-1}(N)$ has index $p$ in $E^\times$, since the norm maps onto its image $N_1$. It is open: in a fixed $F$-basis of $E$, multiplication entries are linear in the coordinates of an element, so the determinant [F6] is a continuous polynomial; [F7] identifies those coordinates with the actual valuation topology. By step 2.1 over $E$, $V=N_{L/E}L^\times$ for cyclic degree-$p$ $L/E$. The tower $L/E/F$ is finite separable. Grouping its embeddings by their restrictions in [F6] proves $N_{L/F}=N_{E/F}\circ N_{L/E}$, hence $N_{L/F}L^\times\subset N$. The conditional SEPARABLE-norm clause of [F2] now gives an abelian extension of $F$ with norm exactly $N$. No cross-base Artin norm identity or assertion that $L/F$ is Galois is needed. [A1, F2, F6, F7, F8, step 2.1, construct, algebra]

4.1 For a general index $p^m n$, $p\nmid n$, the finite abelian primary decomposition [F8] gives $N=N_p\cap N_{p'}$ with indices $p^m$ and $n$. Step 3.1 makes $N_p$ an abelian norm group. Since $F^\times/N_{p'}$ is killed by $n$, it contains $F^{\times n}$; [F3] and [F2] make $N_{p'}$ an abelian norm group too. Choose their two finite abelian fields and their finite abelian compositum $E/F$. By same-base compatibility in [F2], their norm groups are the inverse images of their fixing groups under the SAME onto quotient $\operatorname{rec}_{E/F}:F^\times\to\operatorname{Gal}(E/F)$. Their intersection is the inverse image of the intersection of those fixing groups, which is trivial because the two fields generate $E$. Its kernel is $N_{E/F}E^\times$, so $N$ is exactly that norm group. This proves existence for every original open finite-index subgroup. The cases $n=1$ or $m=0$ use identity fields for the absent factor. [A1, F2, F3, F8, step 3.1, construct, algebra]

5.1 For completeness prove every lattice clause directly. For any two finite abelian fields $E_1,E_2$, use their compositum $E$ and its onto canonical quotient $\rho:F^\times\to G$. Put $H_i=\operatorname{Gal}(E/E_i)$. The two norm groups are $\rho^{-1}H_i$. Their intersection equals $\rho^{-1}(H_1\cap H_2)$, the norm group of $E_1E_2$. Their product equals $\rho^{-1}(H_1H_2)$: for a point mapping to $h_1h_2$, lift the two factors using surjectivity, and absorb the remaining element of $\ker\rho$ into either factor. By [F8], $H_1H_2$ fixes $E_1\cap E_2$, so this is its norm group. The group product is a subgroup since $G$ is abelian. The same description turns inclusion of norm groups into inclusion of fixing groups and hence reversed field inclusion; equality gives equality of fields. Thus uniqueness, order reversal, intersections/composita and products/intersections all follow from this actual same-base canonical map. None is inferred merely from existence or an abstract norm-index isomorphism. This proves the entire original Statement with AC and DC, without an LT or higher Witt premise. [A1, F2, F8, step 4.1, algebra] ∎

