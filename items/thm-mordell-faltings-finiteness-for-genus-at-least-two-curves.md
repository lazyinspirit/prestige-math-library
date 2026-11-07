---
id: thm-mordell-faltings-finiteness-for-genus-at-least-two-curves
kind: theorem
title: "Mordell–Faltings finiteness for rational points on curves of genus at least two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-number-field
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-separated-morphism-schemes
  - def-closed-immersion-schemes
  - def-faithfully-flat-morphism-schemes
  - lem-smooth-proper-curve-has-good-reduction-away-from-finite-set
  - thm-shafarevich-finiteness-for-curves-of-fixed-genus
  - lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point
  - lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - def-ramification-and-branch-points
  - lem-curve-different-local-support-and-index-bound
justified_by: []
proof_strategy: direct
axiom_use: "The theorem is stated under AC. AC implies DC and Countable Choice, which the current Shafarevich and Parshin proof routes declare; no claim that these axioms are necessary is made."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.5, Theorem 4.10 and proof, printed pp. 196–197"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Deduction of finiteness of rational points from curve Shafarevich finiteness, the Kodaira–Parshin construction, and De Franchis finiteness."
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorems 5.1–5.2 and proofs, printed pp. 146–149"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "The fixed-field bounded-genus covering construction and the Shafarevich-to-Mordell deduction."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, and let $C/K$ be a smooth proper geometrically connected curve of genus $g\ge2$. Then the set $C(K)$ of $K$-rational points of $C$ is finite.

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-algebraic-curve-over-field]]

[[def-genus-euler-characteristic-curve]]

[[thm-shafarevich-finiteness-for-curves-of-fixed-genus]]

[Faltings–Wüstholz et al., Theorem 4.10 and proof](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Milne, Theorems 5.1–5.2 and their proofs, Chapter IV §5](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$; and a smooth proper geometrically connected curve $C/K$ with genus $g\ge2$.

[A1] AC is the stated axiom. [[def-axiom-of-choice]]

[A2] In ZF, AC implies Dependent Choice and Countable Choice. [[thm-choice-implies-dependent-implies-countable-choice]]

[L1] Under AC and DC, [[lem-smooth-proper-curve-has-good-reduction-away-from-finite-set]] supplies a smooth proper model with geometrically connected curve fibres outside a finite set of primes. Enlarge that set to $S$ containing the primes above $2$ and restrict the model; it remains smooth and proper over $\operatorname{Spec}\mathcal O_{K,S}$. The given AC supplies DC by [A2].

[L2] [[thm-shafarevich-finiteness-for-curves-of-fixed-genus]] states finiteness of $L$-isomorphism classes for each fixed genus at least two and fixed finite good-reduction set. Its current body explicitly marks the proof conditional and escalated: the abelian-variety finiteness, relative Jacobian, finite polarization classes, and rational Torelli inputs are not proof-closed.

[L3] [[lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point]] states that for a curve with a $K$-rational base point and good reduction outside a finite $S$ containing primes above $2$, there is one finite extension $L/K$ and a uniform genus bound such that each $P\in C(K)$ is the unique branch point of a bounded-degree map $Y_P\to C_L$, with $Y_P$ of good reduction outside primes over $S$. Its current proof status is escalated at the Dedekind-base relative Picard, extended Abel–Jacobi, and generic line-bundle extension interface.

[F1] Under the given AC, which supplies DC by [A2], the current conditional proof of [[lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve]] shows that from a fixed smooth proper curve to a fixed target of genus at least two there are only finitely many nonconstant maps. Its original unqualified choice scope remains held; that stronger scope is not used here.

[F2] Over a number field every nonconstant morphism of smooth proper geometrically integral curves is finite and surjective, and its function-field extension is separable. For such a map the support of the relative-differential sheaf is finite; since the base field is perfect, this is the ramification locus, whose finite image is the branch locus. [[def-number-field]] [[thm-nonconstant-morphism-proper-curves-finite-surjective]] [[lem-curve-different-local-support-and-index-bound]] [[def-ramification-and-branch-points]]

[F3] For a separated curve $C/K$, the natural map $C(K)\to C_L(L)$ is injective for any field extension $L/K$. If two points become equal after this extension, their pair factors through the diagonal after base change; the diagonal is a closed immersion, and faithful flatness forces its equalizer ideal over $K$ to be zero, so the points were already equal. [[def-separated-morphism-schemes]] [[def-closed-immersion-schemes]] [[def-faithfully-flat-morphism-schemes]]

## Proof
1.1 By [A2], the assumed AC supplies both DC and Countable Choice. If $C(K)=\varnothing$, the conclusion is immediate. Otherwise choose $P_0\in C(K)$, and choose a finite good-reduction set $S$ as in [L1], enlarged to contain all primes above $2$. [A1, A2, L1, given, choose]

2.1 Apply [L3] to $(K,C,P_0,S)$. It gives a fixed number field $L/K$, a uniform bound $G$, and, for each $P\in C(K)$, a curve $Y_P/L$ of genus $h_P$ with $2\le h_P\le G$, good reduction outside $S_L$, and a nonconstant map $\phi_P:Y_P\to C_L$ whose branch locus is exactly $\{P_L\}$, where $P_L$ is the image of $P$ in $C_L(L)$. [L3, step 1.1]

3.1 For every integer $h$ with $2\le h\le G$, [L2] asserts that only finitely many $L$-isomorphism classes of genus-$h$ curves have good reduction outside $S_L$. The union over the finitely many integers $h$ is therefore a finite collection of source-curve isomorphism classes that can occur among the $Y_P$. [L2, step 2.1, algebra]

4.1 Choose one representative $Y$ from each of these finitely many classes. For each representative, [F1] gives only finitely many nonconstant $L$-maps $Y\to C_L$. Thus there is a finite set of maps from representatives of all possible source classes to $C_L$. For each $P$, [L3] supplies at least one map in this finite set whose branch locus is $\{P\}$. [A1, F1, L3, step 3.1, choose]

5.1 By [F3], the base-change map $C(K)\to C_L(L)$ is injective. For every $P\in C(K)$, step 4.1 supplies a map in the finite set whose branch locus contains its image $P_L$ (indeed the locus is exactly $\{P_L\}$). Thus $C(K)$ maps into the union of the branch loci of that finite set. By [F2], each such locus is finite, so this finite union is finite. Therefore $C(K)$ is finite, conditional on [L1], [L2], and the proof-closed form of [L3]. [F2, F3, L1, L2, L3, step 4.1, algebra] ∎

## Proof status

Escalated at the Shafarevich supplier's unresolved inputs [L2] and the Dedekind-base Picard/Abel–Jacobi/line-bundle extension interface of the Parshin construction [L3]. The finite good-reduction-set supplier [L1] now has a local proof body under AC and DC, supplied here by [A2]. This does not complete the theorem or grant proof acceptance.
