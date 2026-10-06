---
id: rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control
kind: remark
title: "Flow and compactness hypotheses for noncompact Morse homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continuation-datum-between-morse-smale-pairs, thm-continuation-trajectories-are-compact-up-to-breaking, def-canonical-morse-homology-of-a-closed-manifold, def-proper-smooth-function-and-compact-morse-slab, prop-proper-morse-slabs-give-complete-connecting-trajectories, rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package, rem-noncompact-flow-completeness-is-an-extra-hypothesis, def-morse-smale-pair]
justified_by: []
dependency_level: 14
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.4-2.5 (Morse--Smale dynamics and the Floer complex on compact manifolds) and Sec. 4.4 (compactness of tunnelings uses compactness of the ambient manifold), read at PDF pp. 53-74 and 193-202"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.5 (the boundary-directed theory on a compact cobordism) and Ch. 4 Sec. 4.1, 4.6, 4.9 (invariance and comparison for closed or compactly supported data), printed pp. 78-80, 83-85, 95-102, 115-126, PDF pp. 88-90, 93-95, 105-112, 125-136"
verification:
  precheck: n/a
---

## Remark

The closedness hypotheses in
[[def-regular-continuation-datum-between-morse-smale-pairs]],
[[thm-continuation-trajectories-are-compact-up-to-breaking]] and
[[def-canonical-morse-homology-of-a-closed-manifold]] are not formal. On a
noncompact manifold:

1. a continuation trajectory can escape to spatial infinity along a direction
   in which the interpolation is nonconstant, so that no limit or broken
   continuation trajectory need exist, and the compactness-up-to-breaking
   theorem has no analogue without a properness or compactness package
   controlling the ends
   ([[rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package]]);
2. a non-proper Morse function can have infinitely many critical points and
   unbounded trajectory moduli, so the chain groups need not be finitely
   generated and the coefficient sums defining the differentials and the
   continuation maps need not converge;
3. an incomplete metric or field lets trajectories reach infinity in finite
   time, and the two-end limits then fail; completeness of the flow is an
   extra hypothesis in the noncompact case
   ([[rem-noncompact-flow-completeness-is-an-extra-hypothesis]]);
4. the uniform energy bound of the continuation energy identity is useless
   without a compactness (Palais--Smale-type) condition on the relevant
   trajectory sets.

Consequently the Morse complex, the continuation maps and the
gluing/compactification results require additional structure, such as
properness or an exhaustion with compact Morse slabs
([[def-proper-smooth-function-and-compact-morse-slab]],
[[prop-proper-morse-slabs-give-complete-connecting-trajectories]]) and a
compactness package controlling the broken ends. The counterexample of the
companion page displays the escape mechanism concretely; the positive
noncompact theory is the Floer/Morse theory of proper or exhaustion-controlled
data and is not asserted here.

Properness is one way to obtain the required controls, not a necessary condition in every noncompact example. This item records the scope boundary of the closed theory: the individual failure mechanisms are those of the cited remarks and propositions, the companion counterexample exhibits the escape concretely, and no positive noncompact theorem is asserted here.
