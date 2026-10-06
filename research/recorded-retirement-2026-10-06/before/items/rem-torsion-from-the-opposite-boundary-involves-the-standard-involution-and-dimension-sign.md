---
id: rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign
kind: remark
title: "The opposite-boundary torsion is not naively the same class"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps: ["def-whitehead-torsion-of-an-h-cobordism", "def-h-cobordism", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group"]
provenance:
  statement: literature-derived
  proof: not-supplied
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
  exact_statement: "For a connected oriented h-cobordism, after transporting both ends to Wh(pi_1(M_0)), the opposite-boundary torsion equals (-1)^dim(M_0) times the adjoint involution of the incoming torsion (Lück Lemma 2.16(2))."
  local_proof_attempt: "The two-term handle adjoint calculation is supplied in the homotopy-equivalence criterion. The arbitrary multidegree torsion-duality formula is not reconstructed here; the complete cited proof uses based Poincare duality."
  necessity: "The remark explains why the two ends cannot be equated without the involution, dimension sign and coefficient transport."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.2, Lemma 2.16(2), printed pp. 32–33; Chapter 3 §3.1, printed pp. 50–51"
---

## Remark

For a **connected oriented** h-cobordism $(W;M_0,M_1)$ with presentation $H$ and dual presentation $H^*$, the opposite-boundary class is obtained by the involution on matrices $A\mapsto(\overline{a_{ji}})$ with $\bar g=g^{-1}$, together with the sign $(-1)^{\dim M_0}$. Both classes must first be transported to the same Whitehead group along the boundary inclusions. The precise oriented identity is Lück, Lemma 2.16(2), printed pp. 32–33; the handle adjoint-complex calculation is Ranicki, Proposition 8.17(iii), printed pp. 177–178. This source result is recorded here, without a new proof of the full torsion-duality formula.

For a nonorientable cobordism the corresponding dual-complex involution is orientation-twisted: $\bar g=w(g)g^{-1}$ for the orientation character $w:\pi_1(W)\to\{\pm1\}$, as in Lück §3.1, printed pp. 50–51. The untwisted oriented formula must not be applied without this qualification. The presentation and coefficient conventions are those of [[def-whitehead-torsion-of-an-h-cobordism]], [[def-h-cobordism]] and [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]].
