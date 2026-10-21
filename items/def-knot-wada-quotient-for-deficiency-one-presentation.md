---
id: def-knot-wada-quotient-for-deficiency-one-presentation
kind: definition
title: "The admissible Wada quotient of a deficiency-one exterior spine"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-maximal-abelian-cover-alexander-module
  - def-group-presentation
  - def-free-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-field-of-fractions
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §4, especially the deficiency-one form of Wada's Fox matrix quotient."
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.4 and 3.3"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; twisted coefficient representation, Fox matrix, and admissible deleted-column denominator."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definition 6 and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes, printed pp. 4 and 7; based chain torsion and change-of-basis convention."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice convention of the twisted-chain definition. Let $L$ be a nonempty oriented link, let $E_L$ be its chosen compact exterior, and let $X$ be a finite based two-dimensional CW complex with one $0$-cell, $n\ge2$ oriented $1$-cells $x_1,\ldots,x_n$, and $n-1$ oriented $2$-cells attached by based words $r_1,\ldots,r_{n-1}$. The supplied data include a based cellular spine certificate: a finite sequence of elementary cellular expansions and collapses identifying the simple-homotopy type of $X$ with the selected finite CW structure on $E_L$. Thus an abstract group isomorphism $\pi_1(X)\cong\pi_1(E_L)$ alone is not a spine certificate. Let $G=\pi_1(E_L)$, let $\rho:G\to\mathrm{GL}_d(\mathbb F)$ and $\psi:G\twoheadrightarrow H$ be the representation and declared free-abelian deck map, and put $Q=\operatorname{Frac}(\mathbb F[H])$. The associated deficiency-one presentation is $\langle x_1,\ldots,x_n\mid r_1,\ldots,r_{n-1}\rangle$ through the certified spine map. For $w\in F_n$, define Fox derivatives recursively by $\partial x_k/\partial x_j=\delta_{kj}$, $\partial(uv)/\partial x_j=\partial u/\partial x_j+u\,\partial v/\partial x_j$, and $\partial x_k^{-1}/\partial x_j=-x_k^{-1}\delta_{kj}$. Extend them linearly to the group ring and let $\Phi:\mathbb F[F_n]\to M_d(Q)$ be the ring homomorphism induced by $x_k\mapsto\rho(x_k)\psi(x_k)$. Form the block Fox matrix $J=(\Phi(\partial r_i/\partial x_k))_{i,k}$, of size $(n-1)d$ by $nd$. For a chosen column index $j$, let $J_{\widehat j}$ be obtained by deleting its entire $d$-column block and let $D_j=\det(\rho(x_j)\psi(x_j)-I_d)$. The Wada quotient for this column is defined only when $D_j\ne0$, and then is $W_j=\det(J_{\widehat j})/D_j\in Q$; a zero denominator makes that column inadmissible even when another column is valid. No abstract deficiency-one presentation is assigned exterior torsion unless its presentation complex is the stated based spine.

## Definition references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted coefficient complex and torsion convention]]

[Kirk and Livingston, §4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Conway, §§2.4 and 3.3](https://arxiv.org/pdf/1510.06678)

[Ranicki, Definition 6 and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)
