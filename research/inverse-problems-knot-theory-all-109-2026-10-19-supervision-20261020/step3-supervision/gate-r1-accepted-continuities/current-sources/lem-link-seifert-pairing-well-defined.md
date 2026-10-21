---
id: lem-link-seifert-pairing-well-defined
kind: lemma
title: The positive-push Seifert pairing is well-defined for a link surface
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-linking-number-equals-signed-intersection
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - thm-transversality-homotopy-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: "§8.A, printed pp. 200–203: Seifert-pairing and linking conventions; the link-surface homology argument is proved here."
---
## Statement

Assume full AC. Let $L$ be a nonempty smooth oriented link in the oriented $3$-sphere, and let $F$ be a connected compact smooth oriented embedded surface with oriented boundary $L$. For disjoint oriented embedded circles $C,D\subset S^3$, define $\operatorname{lk}(C,D)$ as the coefficient of the positive meridian of $D$ in $H_1(S^3\setminus D;\mathbb Z)$, and extend it bilinearly to finite integral sums of oriented circles. This linking number is symmetric on disjoint circle cycles. Every class of $H_1(F;\mathbb Z)$ has a representative that is a finite integral sum of pairwise disjoint smooth oriented embedded circles in $F$. The positive push-off $x^+$ of such a representative is a sufficiently small copy in the positive normal direction determined by the ambient and surface orientations. For representatives $x$ and $y$, the sum of the pairwise linking numbers between $x^+$ and $y$ depends only on $[x]$ and $[y]$, is independent of the sufficiently small positive push-off level, and is bilinear. Hence it defines the positive-push Seifert pairing on $H_1(F;\mathbb Z)$.

## Statement references

[[def-link-seifert-pairing-and-matrix|The link Seifert pairing and positive-push matrix convention]]

[[thm-linking-number-equals-signed-intersection|Meridian linking, signed intersection, and the mixed-crossing formula]]

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link $L$, and a connected compact oriented spanning surface $F$ with boundary $L$.

[A1] Full AC implies dependent choice and countable choice, supplying the compact-surface normal form and Alexander-duality conventions. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-one-variable-alexander-module-of-an-oriented-link]]

[F1] The compact surface has a finite cellulation, and its first homology is finitely generated and represented by integral cellular cycles. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] Linking of disjoint oriented circles is the meridian coefficient; when a regular diagram and spanning surface are supplied it agrees with the signed intersection and mixed-crossing half-sum. [[def-one-variable-alexander-module-of-an-oriented-link]], [[thm-linking-number-equals-signed-intersection]]

[F3] After moving a finite oriented link off infinity, it has a regular projection, a finite decorated immersion with finitely many mixed crossings. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F4] Every smooth oriented circle has a supplied connected compact oriented spanning surface, so the link-intersection theorem applies to it. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F5] A transverse perturbation can be chosen arbitrarily $C^1$-close to an embedded circle: the transversality family has good parameters dense in every parameter ball, and its slices converge in $C^1$ to the original map as the parameter tends to zero. To see that sufficiently close maps remain embeddings, cover the circle by finitely many coordinate arcs where a coordinate derivative is bounded away from zero; $C^1$-close maps remain injective on smaller arcs, while compact pairs outside those arcs have a positive separation preserved by sufficiently $C^0$-close maps. A sufficiently $C^0$-close map also remains disjoint from a fixed disjoint compact circle. Thus the other circle can be homotoped in its complement to remain embedded and meet a supplied spanning surface transversely. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]

## Proof

**Given:** Full AC, $L$, and $F$ as in the Statement.

1.1 Fix a finite cellulation of $F$ from [F1]. An integral cellular $1$-cycle represents each class of $H_1(F;\mathbb Z)$. Replace each edge with coefficient $n$ by $|n|$ parallel oriented copies, reversing orientation when $n<0$. At each vertex the cycle condition says that incoming and outgoing copies occur in equal number. Around the boundary of a small vertex disk there is therefore an adjacent incoming/outgoing pair; join that pair by a small arc and delete its endpoints, repeating finitely until all endpoints are paired. The resulting arcs can be chosen disjoint in the disk and oriented consistently with the copies. Each smoothing changes the chain only by the boundary of a $2$-chain in that disk. The result is a finite disjoint union of oriented embedded circles representing the original homology class. [A1, F1, given, construct]

1.2 For representatives $X,X'$ of the same class in $H_1(F;\mathbb Z)$, there is an integral singular $2$-chain $A$ in $F$ with $\partial A=X-X'$. Push the chain through a small positive normal level of $F$; its boundary is $X^+-X'^+$ and it is disjoint from any representative $Y\subset F$. Thus $X^+$ and $X'^+$ represent the same class in $H_1(S^3\setminus Y;\mathbb Z)$, so their meridian-coordinate linking sums with $Y$ agree. Varying the small positive level traces an annulus in the positive bicollar, also disjoint from $Y$, and gives the same class. [F2, given, algebra]

1.3 If $Y,Y'$ represent the same class, choose an integral $2$-chain $B$ in $F$ with $\partial B=Y-Y'$. For each circle component of $X^+$ and each circle component of $Y-Y'$, [F4] supplies a spanning surface and [F5] permits a homotopy of the other circle in its complement to make it transverse to that surface while remaining an embedded circle. By [F3] choose a regular diagram of the pair. By [F2], linking is the half-sum of mixed crossing signs; exchanging the two components leaves the same mixed crossings with the same signs, so linking is symmetric. Bilinearity then gives $\operatorname{lk}(X^+,Y-Y')=\operatorname{lk}(Y-Y',X^+)$. The cycle $Y-Y'$ bounds $B$ in $S^3\setminus X^+$, so its total meridian coefficient there is zero. Hence the two linking sums agree in the second variable as well. Additivity of meridian coefficients gives bilinearity in both variables. [F2, F3, F4, F5, given, algebra]

2.1 The value in the Statement is therefore independent of the chosen cycle representatives and push-off level and is bilinear on homology. In any ordered integral basis its matrix entries are $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, as required. [step 1.1, step 1.2, step 1.3, algebra] ∎

