---
id: lem-twisted-torsion-cell-basis-change-ambiguity
kind: lemma
title: "Based twisted torsion changes only by determinant and deck units"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, basis-change discussion and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes, printed p. 7; alternating determinant change under basis changes."
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; acyclic based-chain torsion, cell lifts, determinant-image indeterminacy, and simple-homotopy invariance."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §3"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §3; based torsion formula and simple CW-chain basis conventions."
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $X$ be a finite based CW model of a link exterior, let $G=\pi_1(X)$, let $\alpha(g)=\rho(g)\psi(g)\in\mathrm{GL}_d(Q)$ be its declared twisted coefficient representation, and suppose the based fraction-field complex is acyclic. Let $\mathcal U=\{\pm\det(\alpha(g)):g\in G\}$. Changing the lift or orientation of any cell multiplies the based Reidemeister torsion by an element of $\mathcal U$, so its class in $Q^\times/\mathcal U$ is unchanged. An elementary simple expansion or collapse, meaning addition or deletion of a pair of adjacent-dimensional cells whose lifted incidence block is $\pm g$ for some $g\in G$, has the same property.

## Statement references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Based chain and torsion convention]]

[Ranicki, basis changes and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

[Conway, §§2.3–2.4](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §3](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

## Facts & Assumptions

**Given:** The finite based cellular model, its acyclic twisted complex, the fixed coefficient representation $\alpha$, and the torsion convention of the preceding definition.

[A1] AC is inherited from the maximal-abelian-cover convention; the finite basis-change argument uses only finite-dimensional linear algebra. [[def-axiom-of-choice]]

[F1] For an acyclic based complex with bases $\mathbf c_i$, torsion is the alternating product of determinants $[\mathbf b_i,\widetilde{\mathbf b}_{i-1}/\mathbf c_i]^{(-1)^{i+1}}$; the bases are the chosen cellular lifts tensored with the fixed coefficient basis. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F2] A lifted oriented cell is a basis vector in a free $Q[G]$-module; translating its lift by $g$ applies $\alpha(g)$ to its coefficient block, and reversing its orientation multiplies that block by $-I_d$. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F3] The determinant map $g\mapsto\det(\alpha(g))$ is a group homomorphism to $Q^\times$, and $\mathcal U$ is its image together with the sign unit. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

## Proof

1.1 If a chosen lift of one $q$-cell is translated by $g$, [F2] changes exactly its $d$-vector block in $\mathbf c_q$ by $\alpha(g)$. The only torsion bracket whose denominator basis changes is the degree-$q$ bracket in [F1], so the torsion is multiplied by $\det(\alpha(g))^{(-1)^q}$ (or its inverse under the opposite bracket-order convention). This factor belongs to $\mathcal U$ by [F3]. Reversing the cell orientation gives the factor $(-1)^{d(-1)^q}$, also in $\mathcal U$. Applying finitely many such changes multiplies by a product of elements of the subgroup $\mathcal U$. [A1, F1, F2, F3, algebra]

2.1 In an elementary expansion, order the new cell bases last and clear the old-cell entries of the new boundary column by adding multiples of old basis columns; these are triangular basis changes with determinant $1$. Because the new $q$-cell is a free face, the lifted boundary matrices have the old blocks together with a single invertible diagonal block $\pm\alpha(g)$ between the new $(q+1)$- and $q$-cell blocks; clearing the other entries in that new column by the described triangular basis changes splits off the two-term complex $0\to Q^d\xrightarrow{\pm\alpha(g)}Q^d\to0$. The torsion formula [F1] for this two-term summand is $\det(\alpha(g))$ or its inverse according to the degree parity, hence lies in $\mathcal U$ by [F3]. The direct-sum torsion formula multiplies the old torsion by that factor, so the class is unchanged. A collapse is the inverse operation. Iterating proves invariance under every finite sequence of these elementary simple moves. [F1, F2, F3, step 1.1, algebra] ∎
