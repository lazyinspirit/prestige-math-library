---
id: def-idele-class-group-of-a-global-field
kind: definition
title: "Topological idele class group of a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-idele-group-of-a-global-field
  - def-global-field
  - def-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - lem-trace-pairing-for-a-finite-separable-extension
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-ostrowskis-theorem-for-the-rationals
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
  - lem-uniqueness-of-an-extended-complete-field-absolute-value
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - thm-finite-products-of-compact-spaces
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-quotient-group
  - def-quotient-topology
  - lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca
dependency_level: 6
proof_strategy: direct
axiom_use: >-
  No Choice principle is used. A finite presentation of the individual global
  field supplies a fixed enumeration; finite residue alphabets and least-index
  representatives give explicit digit maps. Compactness is proved by least-bad-
  cylinder recursion, not Tychonoff or an arbitrary sequential-choice theorem.
  Finite integral closures give the place indexing and diagonal isolation without
  a chosen curve model or a choice-dependent ideal-factorization theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §4, idelic class group and quotient topology, printed pp.170–171."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, discussion following Proposition 25.9, pp.5–6."
verification:
  precheck: pass

---

## Definition

Let $F$ be a global field, let $\mathbb A_F^\times$ be its idele group with the restricted-product topology, and embed $F^\times$ diagonally. The **topological idele class group** is the quotient group
$$C_F=\mathbb A_F^\times/F^\times$$
with the quotient topology. The diagonal subgroup is closed, so this quotient is Hausdorff; since the idele group is locally compact and Hausdorff, the quotient is also a locally compact Hausdorff abelian group.

## Definition references

[[def-idele-group-of-a-global-field|Idele group]]

[[def-dedekind-domain|Finite integral-closure calculation used below]]

[[lem-dedekind-localisation-at-nonzero-prime-is-dvr|Local valuation rings]]

[[def-quotient-group|Quotient group]]

[[def-quotient-topology|Quotient topology]]

[[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca|Locally compact quotient theorem]]

[Milne, Class Field Theory, Chapter V §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[MIT 18.785 Lecture 25, Proposition 25.9](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** A global field $F$, its idele group with the specified local-completion data and restricted-product topology, and its diagonal multiplicative subgroup, exactly as in the Definition. The proof constructs the required compactness and closedness without adding a Choice hypothesis.

[F1] A global field is a finite extension of $\mathbb Q$ or a one-variable function field over its exact finite constant field. Fixing finitely many field generators gives an enumeration of the field by rational expressions in them; the least index in this enumeration orders any finite subset. [[def-global-field]]

[F2] The trace pairing of a finite separable field extension is nondegenerate. A finitely generated torsion-free module over a PID is finite free; the finite-generation calculation for submodules used below is included in the proof. [[lem-trace-pairing-for-a-finite-separable-extension]] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F3] A one-dimensional Noetherian integrally closed domain is a Dedekind domain, and its localization at a nonzero prime is a DVR. [[def-dedekind-domain]] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]

[F4] Ostrowski classifies the nontrivial absolute values of $\mathbb Q$. Finite-dimensional norms over a complete valued field are equivalent; consequently a finite extension of such a field has at most one extending absolute value. Together with the fundamental theorem of algebra this identifies the archimedean completions of a number field as $\mathbb R$ or $\mathbb C$, indexed by its finitely many real embeddings and conjugate pairs of complex embeddings. [[thm-ostrowskis-theorem-for-the-rationals]] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]] [[lem-uniqueness-of-an-extended-complete-field-absolute-value]] [[thm-fundamental-theorem-of-algebra-liouville-proof]]

[F5] Closed bounded Euclidean balls are compact, and finite products of compact spaces are compact. [[cor-euclidean-closed-balls-and-spheres-are-compact]] [[thm-finite-products-of-compact-spaces]]

[F6] Ideles have coordinatewise multiplication and inversion, and their basic open sets have factor $\mathcal O_v^\times$ outside finitely many finite places. The local fields are complete, contain the dense image of $F$, and their valuation rings and unit groups are defined by their valuations. [[def-idele-group-of-a-global-field]]

[F7] The quotient of a locally compact Hausdorff abelian group by a closed subgroup, with the quotient topology, is locally compact Hausdorff abelian without Choice. [[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]] [[def-quotient-group]] [[def-quotient-topology]]

## Proof

**Proof technique:** use finite integral closures to code the places, prove compactness by explicit finite-alphabet recursion, isolate the diagonal, and apply the choice-free quotient theorem. All auxiliary selections are from a single finite collection or are least-index selections from the fixed field enumeration.

**Given:** The data in the Definition and [F1]–[F7].

1.1 In the number-field case put $B=\mathbb Q$ and $R=\mathbb Z$. In the function-field case write its exact constant field as $k$ and choose a separating element $t$, so $F/k(t)$ is finite separable, and put $B=k(t)$ and $R=k[t]$. This finite selection adds no Choice principle: in characteristic $p$, for any transcendental $u$ with $d=[F:k(u)]<\infty$, Frobenius gives $[F^p:k(u^p)]=d$, hence $[F:F^p]=p$. Select one $t\notin F^p$. It is transcendental because $k$ is perfect and algebraically closed in $F$, and $F^p(t)=F$; the finite-extension separability criterion $F=F^p k(t)$ then says that $F/k(t)$ is separable. This criterion follows by the minimal-polynomial derivative test, or equivalently by successively removing the purely inseparable part of a finite extension. In either case [F1] now fixes one enumeration of $F$. [F1, given, construct, algebra]

2.1 Let $A$ be the integral closure of $R$ in $F$. Choose a $B$-basis $b_1,\ldots,b_n$ and multiply its elements by nonzero elements of $R$ so that each is integral over $R$: clearing the finitely many denominators in a monic equation achieves this. For $x\in A$, every $\operatorname{Tr}_{F/B}(xb_i)$ is integral over $R$ and belongs to $B$, hence lies in the integrally closed PID $R$. Nondegeneracy in [F2] therefore places $A$ inside the trace-dual of $\sum Rb_i$, a finite free $R$-module; it contains $\sum Rb_i$. A submodule of $R^m$ is finitely generated by induction on $m$: its first-coordinate image is a principal ideal, lift one generator when nonzero, and apply induction to the kernel in $R^{m-1}$. This uses finitely many lifts. Therefore [F2] makes $A$ finite free of rank $n$. It is integrally closed by transitivity of integral dependence and Noetherian because every ideal is an $R$-submodule of that finite module. A nonzero prime $P$ contains a nonzero element $a$; the nonzero constant coefficient of its minimal polynomial over $B$, whose coefficients lie in $R$, belongs to $(a)\cap R$. Consequently $P\cap R$ is nonzero. The quotient $A/P$ is then a finite domain over the finite field $R/(P\cap R)$ and is a field. For a nonunit prime element $r$ of $R$, the finite ring $A/rA$ is nonzero (otherwise $1/r$ would be integral over $R$) and has a maximal proper ideal, so $A$ has a nonzero prime. Hence every nonzero prime is maximal, $A$ is one-dimensional, and [F3] makes each $A_P$ a DVR with finite residue field. In the function-field case the same construction for $R_\infty=k[t^{-1}]$ gives $A_\infty$. [F2, F3, step 1.1, construct, algebra]

3.1 These DVRs describe all the finite places without invoking a curve model. A nontrivial absolute value on a finite algebraic extension cannot be trivial on its base: for an ultrametric value, a monic equation excludes $|x|>1$ when all base elements have value one, and applying this to $x^{-1}$ excludes $|x|<1$. For an arbitrary absolute value trivial on the base, reduction of $x^m$ to a fixed finite basis gives a bound independent of $m$ and the same conclusion by taking $m$th roots. In the number-field case [F4] therefore reduces a finite place to a rational prime. In the function-field case finite characteristic forces the ultrametric inequality; if $|t|>1$ the largest-degree term computes the value of every polynomial, giving infinity, and if $|t|\le1$ the polynomials of value less than one form a nonzero prime of $k[t]$ (otherwise the value would be trivial). An integral element of $A$ has value at most one, so such a place centers at a nonzero prime $P$ of $A$, and elements of $A\setminus P$ have value one. The DVR $A_P$ then forces the given place to be exactly its discrete valuation place. Conversely every $A_P$ defines that place; the chart $A_\infty$ includes the places over infinity. Every ideal of these finite $R$-modules has a finite generating tuple. The fixed field enumeration codes such tuples by natural numbers, and the least code of each prime gives an injection of the finite-place set into $\mathbb N$. This is an explicit indexing, not a choice from countably many finite fibres. The archimedean places form a finite set by [F4]. [F1, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 At a finite place $v$, choose as $\pi_v$ the first element of the field enumeration with valuation one. Give the finite residue set $D_v=\mathcal O_v/\pi_v\mathcal O_v$ the representatives that occur first in the same enumeration, including zero as the representative of zero. Density of $F$ in $F_v$ guarantees that every residue class occurs. For each sequence $(d_j)_{j\ge0}$ of these representatives, completeness gives the limit $\sum_{j\ge0}d_j\pi_v^j\in\mathcal O_v$. Conversely, repeatedly taking the unique residue representative and dividing the remainder by $\pi_v$ assigns to every element of $\mathcal O_v$ its unique digit sequence. Both maps are continuous because agreement through digit $m-1$ is exactly congruence modulo $\pi_v^m$. Units are precisely those sequences with nonzero first digit. Thus each $\mathcal O_v^\times$ has an explicitly ordered finite-alphabet digit model, with no selection of infinitely many arbitrary lifts or approximants. [F6, step 3.1, construct]

4.2 An element of $F$ that belongs to every localization $A_P$ belongs to $A$. To see this without a maximal-ideal existence axiom, write the element as $y$ and take a nonzero $a\in R$ with $ay\in A$. Its denominator ideal $I=\{b\in A:by\in A\}$ contains $aA$. If $I$ were proper, the finite ring $A/aA$ would have a maximal proper ideal containing its image, yielding a prime $P$ with $I\subseteq P$; but $y\in A_P$ would supply $b\notin P$ with $by\in A$, a contradiction. The finiteness of $A/aA$ follows from finite freeness in step 2.1 and the finiteness of $R/aR$; if $a$ is a unit there is no issue. Consequently an element integral at every finite place is in $A$, and in the function-field case it is also in $A_\infty$. For that case the coefficients of its minimal polynomial over $k(t)$ are then integral over both $k[t]$ and $k[t^{-1}]$, so belong to their intersection $k$. The element is algebraic over $k$ and therefore in the exact constant field. [F1, step 2.1, step 3.1, construct, algebra]

5.1 A product of explicitly ordered nonempty finite alphabets indexed by a subset of $\mathbb N$ is compact in ZF. Indeed, if an open cover has no finite subcover, call a finite initial cylinder bad when it has no finite subcover. The whole product is bad, and a bad cylinder has a bad child since it has only finitely many children. Recursively take the least bad child. The union of the finite prefixes is a single point of the product. Some member of the cover contains that point and therefore contains an initial cylinder about it, contradicting that prefix being bad. This recursion uses a uniquely specified successor and ordinary recursion on $\mathbb N$, not DC. Apply it to the countably indexed digit positions $(v,j)$ from steps 3.1–2.1, ordering each finite alphabet by its representative's first field index. Reindexing by a subset of $\mathbb N$, or inserting singleton alphabets at unused positions, changes nothing. The explicit digit maps identify this compact product with $\prod_{v\text{ finite}}\mathcal O_v^\times$ in its product topology: the inverse extracts every digit by its unique rule, so no product-of-surjections choice assertion is used. [step 3.1, step 4.1, construct]

5.2 In a number field of degree $n$, a diagonal element lying in every finite $\mathcal O_v^\times$ lies in $A$ by step 4.2. Restrict its finitely many archimedean coordinates to distance less than $1$ from $1$. All conjugates then have absolute value less than $2$. Its monic minimal polynomial over $\mathbb Q$ has integer coefficients, and its coefficients are bounded by the finitely many elementary-symmetric bounds $\binom{n}{j}2^j$. Only finitely many such integer polynomials of degree at most $n$ exist, and each has finitely many roots in $F$. Shrink the finitely many archimedean neighborhoods to exclude all those roots other than $1$. This gives an open idelic identity neighborhood meeting the diagonal only at $1$. In a function field, require units at every place and membership in $1+\mathfrak m_{v_0}$ at one place $v_0$. Step 4.2 puts every diagonal element of this neighborhood in $k^\times$, and reduction at $v_0$ excludes every constant except $1$. Thus the diagonal is discrete in both cases. [F1, F4, F6, step 4.2, construct]

6.1 The group $\prod_{v\text{ finite}}\mathcal O_v^\times$, multiplied by compact neighborhoods of $1$ inside the finitely many archimedean $F_v^\times$, is a compact neighborhood of $1$ in the restricted-product topology, by step 5.1 and [F5]. The induced topology on this product is exactly the product topology because only finitely many factors of a restricted-product basic set differ from the reference unit groups. Coordinatewise operations are continuous: a prescribed basic neighborhood constrains only finitely many local operations, and at every other finite place the unit group is closed under multiplication and inversion. Local fields are Hausdorff, so distinct ideles are separated at a differing coordinate. Translation carries the compact identity neighborhood to one at each point. Therefore the idele group is a locally compact Hausdorff abelian topological group without Choice. [F5, F6, step 5.1, construct]

7.1 A subgroup $H$ isolated at $1$ in a Hausdorff topological group is closed without Choice. Take an identity neighborhood $U$ with $U\cap H=\{1\}$ and a symmetric open $W$ with $W^{-1}W\subseteq U$. If $z\in\overline H$, the open set $zW$ meets $H$ in exactly one element $h$, since two such elements would have quotient in $U\cap H$. Every neighborhood of $z$ intersected with $zW$ also meets $H$, hence contains that same $h$. Hausdorffness implies $z=h\in H$. Apply this to the diagonal subgroup using steps 6.1 and 5.2. [step 6.1, step 5.2, construct]

8.1 The quotient group and quotient topology in the unchanged Definition are well-defined because the idele group is abelian. By steps 6.1 and 7.1 its diagonal subgroup is closed in a locally compact Hausdorff abelian group. Applying the choice-free quotient theorem [F7] proves that $C_F$ is locally compact Hausdorff abelian, exactly as asserted. No choice-dependent local-compactness, curve-model or general ideal-factorization theorem has been used. [F6, F7, step 6.1, step 7.1] ∎
