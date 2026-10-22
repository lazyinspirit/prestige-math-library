---
id: def-knot-twisted-chain-complex-and-reidemeister-torsion
kind: definition
title: "Twisted chain complex and based Reidemeister torsion for link exteriors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-maximal-abelian-cover-alexander-module
  - lem-maximal-abelian-cover-link-exterior-retraction
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-field-of-fractions
  - def-axiom-of-choice
justified_by:
  - lem-twisted-torsion-cell-basis-change-ambiguity
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.2–2.4 and 3.3"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; twisted coefficient complex, based torsion, and link torsion conventions."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§2.1–3"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete 27-page paper; infinite-cyclic twisted chains, homology torsion, and Reidemeister torsion."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definitions 4 and 6"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete 10-page lecture notes, printed pp. 3–5; torsion of based acyclic complexes and finite CW complexes."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume the Axiom of Choice as in the maximal-abelian-cover convention. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty oriented smooth link, with $r\ge1$, compact exterior $E_L$ formed by deleting the interiors of pairwise-disjoint chosen closed normal-disk tubes, and basepoint $b\in E_L$. For a knot, $r=1$ and $E_L=E_K$. The full meridian abelianization group is $H_L=H_1(E_L;\mathbb Z)\cong\mathbb Z^r$, with the positive normal-disk meridians as its ordered basis. Choose a finite-rank free abelian group $H$ of positive rank and an epimorphism $\chi:H_L\to H$; write $\psi=\chi\circ\mathrm{ab}:G\to H$ for the induced map from $G=\pi_1(E_L,b)$. The identity choice $H=H_L$ is the full multivariable deck map; a coloring may identify its variables only through the explicitly stated map $\chi$. Let $\mathbb F$ be a field, let $d\ge1$, and let $\rho:G\to\mathrm{GL}_d(\mathbb F)$ be a representation. Put $\Lambda=\mathbb F[H]$, the commutative Laurent-polynomial ring with monomial basis $H$, and $Q=\operatorname{Frac}(\Lambda)$. On row vectors define the right $\mathbb F[G]$ action by $v\cdot g=v\rho(g)\psi(g)$, where $\psi(g)$ is central multiplication by its monomial in $\Lambda$. For a chosen finite based CW structure $X$ on $E_L$, orient and order its cells and choose one lift of each cell to the universal cover $\widetilde X$. The twisted cellular complex is

$$C_*^{\rho,\psi}(X;\Lambda^d)=\Lambda^d\otimes_{\mathbb F[G]}C_*(\widetilde X;\mathbb F),$$

and its fraction-field complex is $C_*^{\rho,\psi}(X;Q^d)=Q\otimes_{\Lambda}C_*^{\rho,\psi}(X;\Lambda^d)$. The lifted cell bases and the standard coordinate basis of $\mathbb F^d$ give the based $Q$-vector-space bases. If this fraction-field complex is not acyclic, define its twisted torsion to be $0$. If it is acyclic, choose in each degree a basis $\mathbf b_i$ of $B_i=\operatorname{im}\partial_{i+1}$ and lifts $\widetilde{\mathbf b}_{i-1}$ of $\mathbf b_{i-1}$ under $\partial_i$; with $\mathbf c_i$ the based cellular basis, set

$$\tau(C_*,\mathbf c)=\prod_i[\mathbf b_i,\widetilde{\mathbf b}_{i-1}/\mathbf c_i]^{(-1)^{i+1}}\in Q^\times,$$

where brackets denote the determinant of the change-of-basis matrix. The twisted Reidemeister torsion is this value modulo the subgroup $\mathcal U_{\rho,\psi}=\{\pm\det(\rho(g))\psi(g)^d:g\in G\}\subset Q^\times$. This exact determinant image is contained in the commonly used coarser unit subgroup $\{\pm a h:a\in\det(\rho(G)),\ h\in H\}$. The choice-free statement uses the full abelianization chain model first and specializes it only by the declared coefficient map $\chi$.

## Definition references

[[def-maximal-abelian-cover-alexander-module|Full abelian cover and positive-meridian variables]]

[Conway, §§2.2–2.4 and 3.3](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §§2.1–3](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Definitions 4 and 6](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)
