---
id: ex-orientation-reversal-negates-pontryagin-numbers
kind: example
title: "Orientation reversal negates Pontryagin numbers"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-pontryagin-number-of-a-closed-oriented-manifold, lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes, def-fundamental-class-of-a-compact-oriented-manifold, def-oriented-smooth-manifold-and-oriented-chart, def-kronecker-evaluation-pairing, prop-oriented-boundaries-have-zero-pontryagin-numbers, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-classes-by-complexification, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Example 11.23 and (11.3), printed pp. 92 and 95: orientation reversal on the projective-plane signature test; the Pontryagin-number sign is derived locally from the fundamental class"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 16, the sign convention for Pontryagin numbers under orientation reversal, printed pp. 185-187"
dependency_level: 1
---

## Example

Assume AC ([[def-axiom-of-choice]]), inherited from the characteristic-number,
Pontryagin-class and boundary-vanishing suppliers. Let $-\mathbb{CP}^2$ denote
$\mathbb{CP}^2$ with the opposite of its complex
orientation. The tangent Pontryagin class is unchanged by reversing the
orientation, while the fundamental class changes sign, so the only Pontryagin
number changes sign:
$$p_1[-\mathbb{CP}^2]=-p_1[\mathbb{CP}^2]=-3.$$
More generally, for a closed oriented $4k$-manifold $M$ and its orientation
reverse $-M$, $p_J[-M]=-p_J[M]$ for every partition $J$ of $k$, while the
Stiefel-Whitney numbers of the underlying unoriented manifold are unchanged.
This verifies the sign convention of the Pontryagin-number definition on this
four-dimensional test manifold, and it shows that $p_1$ distinguishes the two
orientations of $\mathbb{CP}^2$.

## Facts & Assumptions

**Given:** A closed oriented smooth $4k$-manifold $(M,o)$ and the same smooth manifold with the opposite orientation, written $-M$; in the numerical case $M=\mathbb{CP}^2$ with its complex orientation.

[F1] [[def-oriented-smooth-manifold-and-oriented-chart]]: an orientation of a smooth manifold is a smooth choice of a ray in $\det T_pM$; reversing the orientation changes only this datum and leaves the underlying smooth manifold and its tangent bundle unchanged.

[F2] [[def-pontryagin-classes-by-complexification]] defines the Pontryagin classes of a real vector bundle by $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ and requires no orientation of $E$; hence $p_i(T(-M))=p_i(TM)$ as cohomology classes, since $T(-M)$ is the same bundle $TM$ [F1].

[F3] [[def-fundamental-class-of-a-compact-oriented-manifold]] characterizes the fundamental class by its restrictions to the local orientation generators; replacing the orientation by its negative negates every local generator, and by uniqueness the fundamental class is negated: $[-M]=-[M]$. [[def-pontryagin-number-of-a-closed-oriented-manifold]] records this sign rule and defines $p_J[M]=\langle p_{J}(TM),[M]\rangle$, with the componentwise and wrong-degree conventions.

[F4] [[def-kronecker-evaluation-pairing]] defines the pairing on classes and makes it biadditive, so it is linear in its second variable.

[F5] [[prop-oriented-boundaries-have-zero-pontryagin-numbers]]: a closed oriented manifold with a nonzero Pontryagin number is not an oriented boundary. [[def-stiefel-whitney-number-of-a-closed-manifold]] defines the Stiefel-Whitney numbers through the canonical mod-two fundamental class, which is canonical and therefore independent of the integral orientation. [[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]] gives $\langle x^2,[\mathbb{CP}^2]\rangle=1$ and $p_1[\mathbb{CP}^2]=3$ for the complex orientation.

## Verification

1.1 For each partition $J$ of $k$, [F2] gives $p_J(T(-M))=p_J(TM)$ as cohomology classes: reversing the orientation changes only the ray datum of [F1] and leaves the underlying smooth manifold and its tangent bundle unchanged. Consequently, using the definition of the Pontryagin number and the sign rule of [F3],
$$p_J[-M]=\langle p_J(T(-M)),[-M]\rangle=\langle p_J(TM),-[M]\rangle=-\langle p_J(TM),[M]\rangle=-p_J[M],$$
where the middle equality is the linearity of the Kronecker pairing in its second variable [F4]. [F1, F2, F3, F4]

1.2 The Stiefel-Whitney numbers are unchanged: the canonical mod-two fundamental class used in [[def-stiefel-whitney-number-of-a-closed-manifold]] depends only on the smooth structure, and the tangent Stiefel-Whitney classes are computed from $TM$ alone, so replacing $o$ by $-o$ alters neither the classes nor the fundamental class [F2, F5]; equivalently, over $\mathbb F_2$ the orientation sign $-1$ equals $1$. [F5]

2.1 Specialize to $M=\mathbb{CP}^2$ with its complex orientation. By the A-page tangent-bundle lemma [F5], $p_1[\mathbb{CP}^2]=3$ and it is the only Pontryagin number in degree four, the partition being $(1)$; step 1.1 gives $p_1[-\mathbb{CP}^2]=-3$. Both values are nonzero, so neither orientation is an oriented boundary by [F5], and the two orientations are distinguished by $p_1$ even though the underlying unoriented manifold and all its Stiefel-Whitney numbers are the same. [F5, step 1.1, step 1.2]

3.1 Boundary cases. For $k=0$ the manifold is a finite set of signed points, the only Pontryagin number is $p_{\varnothing}=\langle1,[M]\rangle$, the signed count, and step 1.1 gives the sign reversal of that count; the empty manifold has value $0$. Higher Pontryagin classes of $\mathbb{CP}^2$ vanish because $p(T\mathbb{CP}^2)=1+3x^2$ with $x^3=0$ in the truncated ring, so there is no second number to test; for a general $M$ all partitions $J$ of $k$ are covered by step 1.1. No choice beyond the cited suppliers is used. [F3, F5, step 1.1] ∎
