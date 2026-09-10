---
id: "def-weyl-orbit-sum-in-a-group-algebra"
kind: "definition"
title: "Weyl orbit sum in a group algebra"
deps: ["def-finite-weyl-root-system-lattice-and-chamber-conventions", "lem-finite-weyl-positive-roots-and-simple-reflections"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a721\u201322; local sign-change proofs fill the chamber argument"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
---

## Definition

Use the finite reduced crystallographic root system and weight lattice $P$ of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]], with the proved finite $W$ action and lattice preservation of [[lem-finite-weyl-positive-roots-and-simple-reflections]]. The complex group algebra $\mathbb C[P]$ consists of finitely supported sums $\sum_{\mu\in P}c_\mu e^\mu$, with formal basis indexed by $P$ and multiplication $e^\mu e^\nu=e^{\mu+\nu}$ extended distributively. Finite supports make each product finite, and the abelian group law of $P$ proves associativity and commutativity; $e^0$ is the unit. The action $w(e^\mu)=e^{w\mu}$ extends to algebra automorphisms because $w$ is additive and permutes $P$.

For $\lambda\in P$ define the **orbit sum** $m_\lambda=\sum_{\mu\in W\lambda}e^\mu$, summing each distinct orbit element once. The orbit is finite and nonempty, and $W$ permutes it, so $m_\lambda\in\mathbb C[P]^W$. Stabilizers do not multiply coefficients. In particular $m_0=e^0=1$. For rank zero, $P=\{0\}$ and this is the one-dimensional algebra $\mathbb C$. No choice of representatives for a family of orbits is part of the definition.
