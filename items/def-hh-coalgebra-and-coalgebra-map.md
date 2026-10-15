---
id: def-hh-coalgebra-and-coalgebra-map
kind: definition
title: "Coalgebra and coalgebra map over a field"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, §1.3, coalgebra definition; §1.7, Theorem 1.28 and its proof, printed pp. 4–5 and 19–20."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Definition 3.1, printed pp. 12–13."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Fix a field $k$ and use algebraic tensor products over $k$ as in [[def-hh-scalar-and-tensor-conventions]]. A **coalgebra** is a $k$-vector space $C$ with $k$-linear maps
$$
\Delta:C\longrightarrow C\otimes C,\qquad \varepsilon:C\longrightarrow k
$$
such that
$$\alpha_{C,C,C}\circ(\Delta\otimes\mathrm{id}_C)\circ\Delta=(\mathrm{id}_C\otimes\Delta)\circ\Delta$$
and
$$\lambda_C\circ(\varepsilon\otimes\mathrm{id}_C)\circ\Delta=\mathrm{id}_C=\rho_C\circ(\mathrm{id}_C\otimes\varepsilon)\circ\Delta.$$
Here $\alpha$ is the tensor associator and $\lambda_C,\rho_C$ are the tensor unit isomorphisms. They are the maps supplied by [[lem-hh-tensor-coherence-on-elementary-tensors]] and [[def-hh-scalar-and-tensor-conventions]]. Thus the coassociativity equation has common target $C\otimes(C\otimes C)$; no unmentioned equality of differently parenthesized tensor spaces is assumed. The tensor products are algebraic, so each tensor is a finite sum of elementary tensors.

If $C,D$ are coalgebras, a **coalgebra map** $f:C\to D$ is a $k$-linear map satisfying
$$
\Delta_D\circ f=(f\otimes f)\circ\Delta_C,\qquad \varepsilon_D\circ f=\varepsilon_C.
$$
The equations say exactly that $f$ preserves comultiplication and counit.

The defining equations are properties; they do not assert existence for every vector space.
