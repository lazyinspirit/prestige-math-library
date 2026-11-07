---
id: thm-global-brauer-hasse-noether-exact-sequence-number-field
kind: theorem
title: Brauer–Hasse–Noether exact sequence for a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-number-field
- def-completion-of-a-global-field-at-a-place
- def-local-invariant-map-of-the-brauer-group
- thm-number-field-brauer-classes-have-finite-local-support
- lem-number-field-brauer-localization-is-injective
- lem-number-field-brauer-local-invariants-sum-to-zero
- lem-cyclic-number-field-idele-norm-quotient-and-local-degrees
- lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility
- thm-local-brauer-invariant-for-finite-residue-local-field
- thm-archimedean-brauer-groups-and-invariant-maps
- lem-local-invariant-restriction-scaling
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- lem-cyclic-group-cohomology-norm-and-inflation
- thm-decomposition-group-and-completion
- lem-number-field-completion-tensor-and-norm-in-zf
- thm-ring-of-integers-free-of-rank-degree
- thm-number-field-places-classification
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapters IV and VII, §§7–8
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: Werner Hürlimann, A short proof of the Albert–Brauer–Hasse–Noether theorem,
      Astérisque 209 (1992), pp. 215–220
    url: https://www.numdam.org/item/AST_1992__209__215_0.pdf
  - title: Bonn Algebra II lecture notes, Chapter 8, Theorems 8.23 and 8.25
    url: https://www.math.uni-bonn.de/people/assing/lectures/algebra2.pdf
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $v$ range over
all its places, including its real and complex places, and let $K_v$ be the
completion at $v$. With the local invariant maps normalized as in the
Definition and the archimedean maps of the Theorem, the sequence
$$0\longrightarrow\operatorname{Br}(K) \xrightarrow{\mathrm{loc}}\bigoplus_v\operatorname{Br}(K_v) \xrightarrow{\sum_v\operatorname{inv}_v}\mathbb Q/\mathbb Z \longrightarrow0$$
is exact. In particular, every global Brauer class is nontrivial at only
finitely many places, the localization map is injective, and every
finite-support tuple of local classes whose invariants sum to zero is the
localization of a unique global class.

## Statement references

[[def-number-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-local-invariant-map-of-the-brauer-group]]

[[thm-local-brauer-invariant-for-finite-residue-local-field]]

[[thm-archimedean-brauer-groups-and-invariant-maps]]

[J. S. Milne, *Class Field Theory*, Chapters IV and VII, §§7–8](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Werner Hürlimann, “A short proof of the Albert–Brauer–Hasse–Noether theorem,” Astérisque 209 (1992), pp. 215–220](https://www.numdam.org/item/AST_1992__209__215_0.pdf)

[Bonn Algebra II lecture notes, Chapter 8, Theorems 8.23 and 8.25](https://www.math.uni-bonn.de/people/assing/lectures/algebra2.pdf)

## Facts & Assumptions

**Given:** AC, the number field, its completions, and the exact normalized invariant convention in the Statement. Brauer groups are algebraic similarity groups; all comparisons used below are actual finite-level comparisons.

[F1] Every global algebraic Brauer class is split at all but finitely many places, including all archimedean places in a finite exceptional set. [[thm-number-field-brauer-classes-have-finite-local-support]]

[F2] Localization of algebraic Brauer classes is injective over any number field under AC. [[lem-number-field-brauer-localization-is-injective]]

[F3] Under AC, the normalized local invariants of every number-field central simple algebra are finitely supported and sum to zero. This is the independently constructed earlier invariant-sum theorem, not a global Artin or BHN premise. [[lem-number-field-brauer-local-invariants-sum-to-zero]]

[F4] For cyclic $L/K$ of degree $n$ and $Q_v=K_v^\times/N_{L_w/K_v}L_w^\times$, the quotient of $B=\bigoplus_vQ_v$ by the diagonal image $P$ of $K^\times$ is $C_K/N C_L$ of order $n$, and $\operatorname{lcm}_v[L_w:K_v]=n$. [[lem-cyclic-number-field-idele-norm-quotient-and-local-degrees]]

[F5] A finite-residue local field has normalized Brauer invariant isomorphism to $\mathbb Q/\mathbb Z$. The complex group is zero and the real group is $\frac12\mathbb Z/\mathbb Z$ with its specified nonzero normalization. [[thm-local-brauer-invariant-for-finite-residue-local-field]] [[thm-archimedean-brauer-groups-and-invariant-maps]]

[F6] Under AC and DC, restriction along a finite separable local extension scales the normalized invariant by its degree. The finite comparison commutes with scalar extension and sends a crossed product with multiplication factor $c$ to $[c]$; cyclic degree-two cohomology is the multiplicative norm quotient. [[lem-local-invariant-restriction-scaling]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F7] Given finitely many finite places and an integer $m\ge1$, there is a totally complex cyclic $L/K$ inside a cyclotomic extension with every prescribed finite local degree divisible by $m$. [[lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility]]

[F8] Finite Galois completion groups identify with decomposition subgroups; completion tensor factors also describe real and complex places. [[thm-decomposition-group-and-completion]] [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F9] The ring of integers of a number field has a free integral basis of rank $[K:\mathbb Q]$. A nonzero prime ideal determines a finite place. [[thm-ring-of-integers-free-of-rank-degree]] [[thm-number-field-places-classification]]

[A1] AC implies the CC and DC required by the actual local restriction/comparison interfaces and permits the choices explicitly made below. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** identify the relative local norm row by the earlier norm index, then realize arbitrary zero-sum tuples with one cyclic splitting extension.

**Given:** The original AC and number-field data.

1.1 By [F1], localization takes values in the stated direct sum. It is injective by [F2], and [F3] says its image lies in the kernel of the invariant sum. All maps are group homomorphisms by scalar extension, the finite comparison and the local invariant constructions. Thus the first exactness assertion and one inclusion at the middle term are already proved without using the realization argument below. [A1, F1, F2, F3, given, algebra]

1.2 Fix a cyclic $L/K$ of degree $n$, with generator $\sigma$, and choose one $w\mid v$ at each place. Put $d_v=[L_w:K_v]$ and $Q_v=K_v^\times/N L_w^\times$. Its local Galois group is the subgroup generated by $\tau_v=\sigma^{n/d_v}$, by [F8]. The finite comparison and cyclic norm quotient [F6] give an isomorphism $\psi_v$ from $Q_v$ onto $\ker(\operatorname{Br}(K_v)\to\operatorname{Br}(L_w))$, sending a parameter $a_v$ to its cyclic carry algebra for $\tau_v$. For a finite place, [F5,F6,A1] make the invariant image of this kernel exactly $(\frac1{d_v}\mathbb Z)/\mathbb Z$. For a real place this is also true: $d_v=1$ for a split real factor and $d_v=2$ for $\mathbb C/\mathbb R$, using [F5]; a complex place has $d_v=1$ and zero group. Hence $\lambda_v=\operatorname{inv}_v\circ\psi_v$ is an isomorphism from $Q_v$ onto $(\frac1{d_v}\mathbb Z)/\mathbb Z$. [A1, F5, F6, F8, given, choose, construct, algebra]

1.3 The sum map is onto $\mathbb Q/\mathbb Z$. To see explicitly that a finite place exists, [F9] makes $\mathcal O_K/2\mathcal O_K$ a nonzero finite ring with $2^{[K:\mathbb Q]}$ elements. A maximal proper ideal exists by taking one of greatest cardinality among its finite set of proper ideals; its preimage is a nonzero prime of $\mathcal O_K$, hence a finite place $v_0$ by [F9]. By [F5], any element of $\mathbb Q/\mathbb Z$ is the invariant of a class at $v_0$. Put that class at $v_0$ and zero at every other place. This finite-support tuple has exactly the desired invariant sum. [F5, F9, construct, algebra]

2.1 For a principal parameter $a\in K^\times$, the cyclic algebra $A(L/K,\sigma,a)$ has carry cocycle $c(\sigma^i,\sigma^j)=a$ if $i+j\ge n$ and $1$ otherwise. On the subgroup generated by $\sigma^{n/d_v}$ it restricts to exactly the degree-$d_v$ carry with parameter $a$, since $(i+j)n/d_v\ge n$ is equivalent to $i+j\ge d_v$. The finite comparison's restriction/coefficient formula [F6] therefore identifies its localization with $\psi_v([a])$. The norm-quotient coordinate is indeed $a$: the degree-two periodic-to-bar generator is $\sum_{i=0}^{d_v-1}[\tau_v^i\mid\tau_v]$, whose carry factors multiply to $a$. By [F3], $\sum_v\lambda_v([a])=0$. Thus the principal image $P$ is contained in the kernel of the sum map $\lambda:\bigoplus_vQ_v\to\mathbb Q/\mathbb Z$. [F3, F6, F8, step 1.2, construct, algebra]

3.1 By [F4], every $d_v$ divides $n$ and their least common multiple is $n$. Consequently the image of $\lambda$ is exactly $(\frac1n\mathbb Z)/\mathbb Z$: its image is generated by the subgroups $(\frac1{d_v}\mathbb Z)/\mathbb Z$, whose denominators have least common multiple $n$. Only finitely many distinct divisors occur; one can also choose finitely many places achieving the required maximal prime-power divisibilities. The induced map $(\bigoplus_vQ_v)/P\to(\frac1n\mathbb Z)/\mathbb Z$ is onto by this observation and step 2.1. Its source has order $n$ by [F4] and its target has order $n$, so it is an isomorphism. Hence $\ker\lambda=P$. This proves the relative zero-sum realization statement without requiring a single place of full degree or a Frobenius-density theorem. [F4, step 1.2, step 2.1, algebra]

4.1 Now let $(\beta_v)$ be any finite-support tuple of local Brauer classes with $\sum_v\operatorname{inv}_v(\beta_v)=0$. Let $S$ be the finite places in its support, and choose a positive integer $m$ annihilating the finitely many invariants there, taking $m=1$ for empty $S$. By [F7] choose a totally complex cyclic $L/K$ whose local degrees at $S$ are divisible by $m$. At those finite places [F5,F6,A1] imply that restriction of $\beta_v$ to $L_w$ is zero; it is already zero at every other finite place. Real places become complex and their classes restrict to zero by [F5], while complex places are zero from the start. Thus each $\beta_v$ belongs to the relative kernel in step 1.2. Its inverse image $q_v=\psi_v^{-1}(\beta_v)$ gives a finite-support tuple $q$, with $\lambda(q)=0$. By step 3.1 it is the image of some $a\in K^\times$. Step 2.1 shows that $A(L/K,\sigma,a)$ localizes to exactly the original tuple at every place. The global class is unique by step 1.1. [A1, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1, choose, construct, algebra]

5.1 Step 1.1 proves finite support, left injectivity and containment of the global image in the zero-sum kernel. Step 4.1 proves the reverse containment and uniqueness, and step 1.3 proves surjectivity at the right. These are all exactness clauses of the original sequence, with the specified finite, real and complex normalizations. Degree-one cyclic extensions, zero classes and empty finite support were included throughout. The original sole public choice hypothesis is AC; [A1] accounts explicitly for every inherited CC/DC use. [A1, step 1.1, step 4.1, step 1.3, algebra] ∎
