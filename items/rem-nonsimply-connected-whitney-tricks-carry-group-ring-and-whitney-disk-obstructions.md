---
id: rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions
kind: remark
title: Non-simply-connected Whitney tricks carry group-ring and Whitney-disk obstructions
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorem 7.27 and its proof, printed pp. 138-141 (the group-ring condition $I(x)=-I(y)$, the lift to
      the universal cover, and the framing correction)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and the Remark, printed pp. 71-72 (the loop condition and the fundamental-group extension
      of the cancellation theorems)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 4 §4.1, printed pp. 81-84 (the $\mathbb Z[\pi]$-valued intersection and self-intersection pairings
      and the quadratic refinement)
verification:
  precheck: n/a
dependency_level: 0
---

## Remark

**Recorded boundary remark, not used as a prerequisite by any result above.** With oriented sheets and ambient manifold (or compatible local orientation data for the selected pair), when $X$ is not simply connected the Whitney move needs strictly more than opposite signs: (i) the two double points must carry equal group labels $g(x)=g(y)\in\pi_1(X)$ computed with paths compatible with the chosen arcs, equivalently the Whitney circle determined by the arcs must be null-homotopic; this is the group-ring condition $I(x)=-I(y)$ in $\mathbb Z[\pi_1(X)]$ and it is not implied by the vanishing of the integer intersection number; (ii) the arc system must be chosen so that the circle misses the other double points; (iii) the framing of the Whitney circle must extend over the clean disk; and (iv) the clean disk itself must exist, which in the stable range is a general-position statement but in the codimension-two borderline is ensured by the complement fundamental-group injectivity hypothesis of the sufficient theorem. The group labels live in $\mathbb Z[\pi_1(X)]$ and cancellation is possible only when the cancelling pair has zero group-ring sum, rather than merely zero augmentation in $\mathbb Z$.

Each clause separates a distinct obstruction, and none of them is a technicality of the proof. Clause (i) is the label condition: the integer intersection number of two double points of opposite sign vanishes regardless of their labels, while the $\mathbb Z[\pi_1(X)]$-valued intersection records the group element attached to each point, and only equal labels make the pair algebraically cancelling in the group ring. Clause (ii) is the arc condition recorded by the arcs lemma of this page: the arcs of a Whitney circle must be chosen inside the connected sheets while avoiding every other double point, which is a separate existence statement in dimensions at least two. Clause (iii) is the framing condition: the two half-frames coming from the sheets glue along the circle exactly when the local signs are opposite, and the resulting class must extend across the disk. Clause (iv) is the clean-disk condition of the general-position lemma in the stable range, ensured in the codimension-two borderline by the sufficient assumption that the complement of the other sheet be fundamental-group injective. This global injectivity is not necessary for an individual clean disk: only the particular pushed-off boundary loop must contract in that complement. The B-page counterexamples of this pair exhibit the label obstruction and the sign obstruction respectively, and the label lemma of this page computes the group element controlling the first of them. This remark carries no proof obligation: it is a recorded boundary, it is used by no item of this page, and the locators above identify the source statements for its four clauses.
