# Step 3a scope review — bounded bimodule complexes and derived tensor

- Run: `frontier-36-complete`
- Pair: A `bounded-bimodule-complexes-and-derived-tensor`; B `bounded-bimodule-complexes-and-derived-tensor-examples`
- Decision for A: **sufficient**

## Scope evidence

The six A-manifest items match all six rows of HA-20: graded bimodule complexes and signed totalization; differential, action, map, and homotopy compatibility; associativity, units, and cone comparison; the two-sided-projective bounded tensor functors on homotopy and derived categories; invariance under supplied bimodule homotopy equivalence; and inverse equivalences from supplied inverse complexes. The three B items match the design examples: a two-term sign calculation, the distinction between one-sided projectivity and enveloping-algebra projectivity, and a contractible bimodule complex inducing the zero functor. The current plan preserves the same A/B IDs, order, and prerequisites as the prose design; its item lists are intentionally empty pending the scaffold.

This is an adequate scope for the planned bounded, ordinary graded-bimodule tensor machinery. The pair adds the homotopy-level tensor behavior and the projectivity hypotheses needed to pass to bounded derived categories, while relying on the published prerequisites for ordinary complexes, cones, derived categories, graded bimodules, and module tensor functors. It does not claim general unbounded K-flat theory or compute the particular braid complexes. Those boundaries match the design.

## Library role and source coverage

The published prerequisites are `graded-bimodules-and-tensor-functors` and `derived-categories`. HA-20 identifies the pair as machinery for categorical braid actions; planned consumers also include perfect complexes, Hochschild hyperhomology, Rouquier complexes, and triply graded link homology. The promised interfaces cover those uses at the intended level.

The coverage manifest accounts for 23 harvested source results: 2 included, 15 used inline, and 6 explicitly out of scope. Its low-yield warning counts only newly included results; the other dispositions are identified, including the already-published Tor result and broader base-change, K-flat, and DG results. This warning does not identify a scope omission. Source checks included Weibel §10.6 on total derived tensor and bimodule refinement; Stacks §15.60 on quasi-isomorphism preservation by bounded-above flat complexes; Stacks §22.33 as broader DG context; and Khovanov–Seidel §§2c–2d. In particular, Khovanov–Seidel's inverse-equivalence proof is specific to its quiver algebra, so it is contextual support for the generic supplied-homotopy-equivalence result, not a generic theorem source. The coverage record makes that distinction.

Sources: [Weibel, *An Introduction to Homological Algebra*, §10.6](https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf); [Stacks Project, §15.60](https://stacks.math.columbia.edu/tag/06XY) and [§22.33](https://stacks.math.columbia.edu/tag/09LP); [Khovanov–Seidel, *Quivers, Floer Cohomology, and Braid Group Actions*, §§2c–2d](https://arxiv.org/pdf/math/0006056).

## Uncertainty

No unresolved scope uncertainty. This is a scope assessment; it does not decide proof correctness.
