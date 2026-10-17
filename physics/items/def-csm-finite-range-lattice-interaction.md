---
id: def-csm-finite-range-lattice-interaction
kind: definition
title: "Finite-range lattice interaction and conditional energy"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Definition

Fix an integer dimension $d\geq1$ and a finite nonempty alphabet $A$. A configuration is a function $\sigma:\mathbb Z^d\to A$. An interaction list consists of a finite index set $\mathcal R$ and, for each $r\in\mathcal R$, a finite nonempty shape $S_r\subset\mathbb Z^d$ containing $0$ and a function $\Phi_r:A^{S_r}\to\mathbb R$. The index $r$ is part of the data: two equal shapes with different indices represent two terms and are both counted. Every translate $x+S_r$ contributes once, with value $\Phi_r((\sigma_{x+y})_{y\in S_r})$.

The range is $R=\max_{r\in\mathcal R}\operatorname{diam}_\infty(S_r)$, with $R=0$ when $\mathcal R$ is empty. For finite $\Lambda\subset\mathbb Z^d$, define the free-volume energy and the energy conditioned on an exterior configuration $\eta\in A^{\Lambda^c}$ by
$$H^{\mathrm{free}}_\Lambda(\sigma)=\sum_{r\in\mathcal R}\ \sum_{x:x+S_r\subseteq\Lambda}\Phi_r(\sigma_{x+S_r}),\qquad E_\Lambda(\tau_\Lambda\mid\eta)=\sum_{r\in\mathcal R}\ \sum_{x:(x+S_r)\cap\Lambda\ne\varnothing}\Phi_r((\tau_\Lambda\eta)_{x+S_r}).$$
Here $\tau_\Lambda\in A^\Lambda$, and $\tau_\Lambda\eta\in A^{\mathbb Z^d}$ is the concatenated configuration equal to $\tau_\Lambda$ on $\Lambda$ and to $\eta$ on $\Lambda^c$.
These are finite sums: for each finite shape $S_r$, only finitely many anchors $x$ make $x+S_r$ meet $\Lambda$. Terms meeting $\Lambda$ but not contained in it appear in the conditional energy and not in the free-volume energy. The definitions are mathematical and assign no physical units; a physical model must state its units separately.
