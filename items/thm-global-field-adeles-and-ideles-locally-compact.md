---
id: thm-global-field-adeles-and-ideles-locally-compact
kind: theorem
title: "The adele and idele groups of a global field are locally compact"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-adele-ring-of-a-global-field
  - def-idele-group-of-a-global-field
  - thm-local-valuation-ring-compact-open
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-completion-of-a-global-field-at-a-place
  - thm-complete-and-totally-bounded-implies-compact
  - lem-finite-choice
  - def-countable-choice
  - cor-rn-is-locally-compact-and-sigma-compact
  - thm-tychonoff
  - def-axiom-of-choice
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - def-compact-space
  - def-product-topology
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-metric-hausdorff-separation
dependency_level: 6
proof_strategy: direct
axiom_use: >-
  Full AC is used through Tychonoff compactness of infinite products of compact
  local factors. AC_omega is used by the local valuation-ring compactness
  supplier. These are distinct proof inputs; the result is not asserted in a
  weaker axiom branch.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Chapter VII, Proposition 7.46 and Corollary 7.47, printed p.126."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Propositions 25.5, 25.6, and 25.9, pp.3–5."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. For every number field and every function field with exact finite constant field, the additive adele group $\mathbb A_F$ and the idele group $\mathbb A_F^\times$, each with its restricted-product topology, are locally compact Hausdorff topological groups under their respective coordinatewise operations.

## Statement references

[[def-adele-ring-of-a-global-field|Adele ring and restricted-product topology]]

[[def-idele-group-of-a-global-field|Idele group and its separate restricted-product topology]]

[[thm-local-valuation-ring-compact-open|Compact-open finite-place valuation neighborhoods]]

[[cor-rn-is-locally-compact-and-sigma-compact|Archimedean local compactness]]

[[thm-tychonoff|Compactness of products under full AC]]

[Milne, Propositions 7.46 and Corollary 7.47](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[MIT 18.785 Lecture 25, Propositions 25.6 and 25.9](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a number field or a function field with exact finite constant field; its local completions; and the adele and idele restricted products.

[A1] AC makes every product of nonempty sets nonempty. ([[def-axiom-of-choice]])

[A2] AC_omega supplies a choice function for every countable family of nonempty sets. ([[def-countable-choice]])

[F1] The adele topology has a basis of restricted products using $\mathcal O_v$ at almost every finite place; addition and multiplication are coordinatewise. ([[def-adele-ring-of-a-global-field]])

[F2] The idele topology has a basis of restricted products using $\mathcal O_v^\times$ at almost every finite place; multiplication and inversion are coordinatewise. ([[def-idele-group-of-a-global-field]])

[F3] For a complete nonarchimedean local field with finite residue field, its valuation ring and unit group are compact open. The proof uses AC_omega for compactness. ([[def-local-field-valuation-ring-uniformizer-and-residue-field]], [[thm-local-valuation-ring-compact-open]])

[F4] $\mathbb R^n$ is locally compact for every $n\ge1$, and closed Euclidean balls are compact; hence $\mathbb R$ and $\mathbb C\cong\mathbb R^2$ have compact neighborhoods inside any prescribed open neighborhood. Their nonzero multiplicative groups are open subspaces. ([[cor-rn-is-locally-compact-and-sigma-compact]], [[cor-euclidean-closed-balls-and-spheres-are-compact]])

[F5] An arbitrary product of compact spaces is compact under full AC. ([[thm-tychonoff]], [[def-axiom-of-choice]])

[F6] A product topology has a basis of products of open sets with all but finitely many coordinates equal to the whole coordinate space. ([[def-product-topology]])

[F7] A topological group is a group with continuous multiplication and inversion; locally compact means each point has a compact neighborhood; Hausdorff means distinct points have disjoint open neighborhoods. ([[def-topological-group]], [[def-locally-compact-space]], [[def-hausdorff-space]], [[def-compact-space]])

[F8] Every local completion is a metric, hence Hausdorff, space. The restricted-product topology is finer than the topology induced from the unrestricted product because its basic sets use the open reference subrings at almost every finite place. ([[def-completion-of-a-global-field-at-a-place]], [[thm-metric-hausdorff-separation]], [[def-adele-ring-of-a-global-field]], [[def-idele-group-of-a-global-field]])

## Proof


**Given:** The data and hypotheses above.

1.1 At every finite place, [F3] gives compact open neighborhoods $\mathcal O_v$ for addition and $\mathcal O_v^\times$ for multiplication. At each archimedean place, [F4] gives compact neighborhoods in the additive field and in its open multiplicative group. Thus every local factor has compact neighborhoods of each point. [F3, F4, given]

1.2 Fix an adele and a basic open neighborhood of it. Enlarge the finite exceptional set so it contains every nonintegral coordinate and every coordinate where the basic neighborhood differs from $\mathcal O_v$. At an exceptional finite place, a sufficiently small valuation ball $x_v+\pi_v^n\mathcal O_v$ lies in the prescribed open set; it is compact and open because $\mathcal O_v$ is compact open and multiplication by $\pi_v^n$ and translation are homeomorphisms. At an archimedean place choose a closed Euclidean ball inside the prescribed open set. Outside the finite exceptional set use $\mathcal O_v$. The product of these compact factors is compact by [F5] and contains an open neighborhood in the restricted-product topology, using the interiors of the finitely many chosen archimedean balls. For an idele, use at each exceptional finite place a compact open multiplicative neighborhood $x_v(1+\pi_v^n\mathcal O_v)$ contained in the given open set, use compact balls contained in the archimedean multiplicative open sets, and use $\mathcal O_v^\times$ elsewhere. Hence both spaces are locally compact. [A1, F1, F2, F3, F4, F5, given, choose]

1.3 Coordinatewise addition and multiplication on adeles are continuous: at an arbitrary pair, only finitely many coordinates need local neighborhoods chosen so their sums or products lie in a prescribed open set; outside those coordinates $\mathcal O_v+\mathcal O_v\subseteq\mathcal O_v$ and $\mathcal O_v\mathcal O_v\subseteq\mathcal O_v$. Coordinatewise multiplication and inversion on ideles are continuous by the same finite-coordinate argument, using that $\mathcal O_v^\times$ is a group outside the exceptional set. Therefore the adeles form a topological ring and their additive group, as well as the idele group, are topological groups. [F1, F2, F3, F6, construct]

2.1 By [F8], each unrestricted product of local additive fields, and each product of local multiplicative groups, is Hausdorff. The restricted-product topology is finer than the corresponding subspace topology, so it is also Hausdorff. With step 1.2 and step 1.3, the groups satisfy all clauses in [F7]. [F1, F2, F7, F8, step 1.2, step 1.3] ∎

