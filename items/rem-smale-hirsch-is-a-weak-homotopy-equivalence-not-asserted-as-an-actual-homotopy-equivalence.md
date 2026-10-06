---
id: rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence
kind: remark
title: "Smale–Hirsch is a weak homotopy equivalence, not asserted as an actual homotopy equivalence"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources, thm-smale-hirsch-immersion-theorem, thm-smale-hirsch-for-open-source-manifolds, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-weak-homotopy-equivalence]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 12
---

## Statement

The Smale–Hirsch theorem asserts that $D$ is a weak homotopy equivalence, not that it is a homotopy equivalence; the statement is not strengthened here to the existence of a homotopy inverse, since the mapping spaces are not known to be CW complexes or ANRs in this development. The conclusions on $\pi_0$ and based homotopy groups follow from weak homotopy equivalence. Relative family conclusions use the separately stated relative parametric theorem and its hypotheses; they are not consequences of weak homotopy equivalence alone for arbitrary parameter pairs. The topology is part of the statement: the theorem is proved for the weak (compact-open) $C^\infty$ topology on $\operatorname{Imm}$ and $\operatorname{FImm}$, and no other topology on the mapping spaces is used. For compact sources the immersion condition is open in that topology ([[lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources]]), which is what the smoothing argument uses; the strong Whitney topology is deliberately not invoked, so no comparison with it is needed. No properness, completeness or boundedness of the immersion data is required.

## Comments

The remark is a boundary-of-claim record, not a mathematical strengthening. Three points deserve emphasis. First, weak homotopy equivalence is a statement about the induced maps on homotopy groups and the induced bijection on path components, and it is exactly what the handle induction and the microextension prove; upgrading it to an actual homotopy equivalence would require a homotopy-theoretic property of the mapping spaces (CW or ANR type) that is not established on this page, so it is not claimed. Second, the topology enters the statement: the disk and handle lemmas are proved for smooth families over compact parameter pairs, and the passage from continuous to smooth families uses precisely the openness of the immersion condition and the smoothing lemmas for the weak compact-open $C^\infty$ topology; a different topology on the mapping spaces would change the domain of the theorem. Third, the countable-choice assumption of the main theorems is inherited from the exhaustion, Sard and smoothing suppliers and is not removed by the remark.
