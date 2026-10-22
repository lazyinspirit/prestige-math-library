---
id: lem-right-trefoil-has-genus-one
kind: lemma
title: "The right trefoil has genus one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-oriented-seifert-surface-and-knot-genus
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - alg-seifert-surface-from-diagram
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - thm-seifert-algorithm-boundary-euler-and-genus
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-collar-neighborhood-theorem
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§§3.1–3.2, printed pp.21–26; trefoil genus discussion"
    - title: "Local trefoil nonsliceness proof in the published library"
      url: "https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf"
      locator: "Fox–Milnor, Theorem 2, source motivation for the separately proved local adapter"
---

## Statement

Assume the full Axiom of Choice. For the standard right-handed trefoil in $S^3$, the minimum genus among its connected compact smooth oriented spanning surfaces is exactly $1$.

## Statement references

[[def-oriented-seifert-surface-and-knot-genus|Definition of knot genus]]

[[thm-seifert-algorithm-boundary-euler-and-genus|The disk-and-band genus formula]]

[[lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball|The full-AC nonsliceness result for the trefoil]]

## Facts & Assumptions

**Given:** Full AC and the standard right-handed trefoil $T$.

[F1] Oriented smoothing replaces a crossing by its orientation-compatible noncrossing pairing; the Seifert algorithm records one disk per resulting circle and one band per crossing. Under AC$_\omega$, the bands realize a connected compact smooth oriented embedded surface with the original knot as boundary, and its genus is $(1-s+c)/2$ for $s$ circles and $c$ crossings. ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]], [[alg-seifert-surface-from-diagram]], [[lem-seifert-bands-embedded-orientable-boundary-correct]], [[thm-seifert-algorithm-boundary-euler-and-genus]])

[F2] Under full AC, $T$ does not bound a smooth properly embedded disk in $B^4$. ([[lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball]])

[F3] A genus-zero connected compact orientable surface with one boundary component is topologically a disk. For smooth input the disk-and-band normal-form construction gives a smooth disk parametrization: steps 7.1–12.1 use smooth circle extensions and smooth disk/band collar moves. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]])

[F4] A smooth disk in the boundary $S^3$ can be pushed through a collar into $B^4$, fixing its boundary, to give a smooth proper disk. ([[thm-collar-neighborhood-theorem]])

[F5] Knot genus is the minimum nonnegative integer among the genera of spanning surfaces. ([[def-oriented-seifert-surface-and-knot-genus]])

[A1] Full AC is the choice-function axiom. ([[def-axiom-of-choice]])

[A2] Full AC implies AC$_\omega$. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

**Given:** Full AC and the standard right-handed trefoil $T$.

1.1 Use the standard right-trefoil diagram, the closure of the positive two-strand braid $\sigma_1^3$, with both braid strands directed downward and the closing arcs directed back to the top. It has exactly three crossings. At each crossing the oriented smoothing pairs each upper endpoint with the lower endpoint in the same vertical position, rather than the diagonal pairing. Smoothing all three crossings therefore leaves two vertical strands; each joins its own closing arc to form one circle. Thus $s=2$ and $c=3$. The unsmoothed braid has the transposition permutation (three interchanges), so its closure has one knot component. The algorithm attaches three half-twisted bands between the two disk records, with twist directions restoring these three positive crossings. By [F1] and [A2] the result is a connected compact smooth oriented embedded spanning surface for $T$, and its genus is $(1-2+3)/2=1$ (equivalently $\chi=2-3=-1$). Hence the nonnegative minimum in [F5] satisfies $g(T)\le1$. [given, F1, F5, A1, A2, construct, algebra]

2.1 If $g(T)=0$, a minimizing surface exists by [F5], and [F3] makes it a smooth disk $D\subset S^3$. Let $c:S^3\times[0,\epsilon)\to B^4$ be a collar from [F4]. A boundary collar of $D$ gives a smooth function $h:D\to[0,\epsilon)$ that equals the inward collar coordinate near $\partial D$, is positive on $\operatorname{Int}D$, and vanishes exactly on $\partial D$. The map $x\mapsto c(x,h(x))$ is injective because the collar projection is $x$, and its differential is injective because its first coordinate is the inclusion of $D$; at $\partial D$, the positive derivative of $h$ in the inward conormal makes the disk proper and transverse to $\partial B^4$. Thus it is a smooth proper disk in $B^4$ with boundary $T$, contradicting [F2]. Hence $g(T)\ne0$. [given, F2, F3, F4, F5, A1, A2, step 1.1, construct]

3.1 A nonnegative integer at most $1$ and not equal to $0$ is $1$. Hence $g(T)=1$. [step 1.1, step 2.1, algebra] ∎

## Proof references

[[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]]

[[lem-seifert-bands-embedded-orientable-boundary-correct]]

[[thm-seifert-algorithm-boundary-euler-and-genus]]

[[lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball]]

[[thm-collar-neighborhood-theorem]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[[def-countable-choice]]

[[def-axiom-of-choice]]
