---
id: lem-twisted-fox-jacobian-is-cellular-boundary
kind: lemma
title: "The evaluated Fox Jacobian is the twisted cellular boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - def-group-presentation
  - def-free-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.4 and 3.1"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; Fox derivatives, the twisted chain complex, and Proposition 3.5."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §4, printed pp. 646–648; Fox matrices for the cellular chain complex."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, pp. 3–5"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; cellular chains of the universal cover as based free group-ring modules."
---

## Statement

Let $X$ be the based presentation $2$-complex with one vertex, oriented $1$-cells $x_1,\ldots,x_n$, and oriented $2$-cells attached along words $r_1,\ldots,r_m$ in the free group $F_n$. Let $G=\langle x_1,\ldots,x_n\mid r_1,\ldots,r_m\rangle$ be its presented fundamental group, let $\rho:G\to\mathrm{GL}_d(\mathbb F)$ be a representation, and let $\psi:G\to H$ be the declared free-abelian deck map. For $\Phi:\mathbb F[F_n]\to M_d(Q)$ induced by $x_j\mapsto\rho(x_j)\psi(x_j)$, the twisted differential $\partial_1$ has blocks $\rho(x_j)\psi(x_j)-I_d$, and the $i$th block row of $\partial_2$ is

$$\left(\Phi\left(\frac{\partial r_i}{\partial x_1}\right),\ldots,\Phi\left(\frac{\partial r_i}{\partial x_n}\right)\right),$$

where coefficient vectors are written as rows and differentials act on the right: the matrix of $\partial_1$ is the stacked column of blocks $\rho(x_j)\psi(x_j)-I_d$, while the matrix of $\partial_2$ is the $md$-by-$nd$ block matrix whose $i$th row is the displayed Fox row. The Fox derivatives use the product and inverse recursions in the Wada definition. Thus the evaluated Fox-Jacobian blocks are exactly the cellular boundary blocks of the based twisted complex of this presentation $2$-complex.

## Statement references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted chain convention]]

[[def-knot-wada-quotient-for-deficiency-one-presentation|Fox derivative and Wada matrix conventions]]

[Conway, §§2.4 and 3.1](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, pp. 3–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** The finite based presentation $2$-complex, its presentation generators and relators, $\rho$, $\psi$, and the twisted coefficient map $\Phi$.

[A1] AC is inherited from the twisted-chain convention; the finite word calculation uses no choice principle. [[def-axiom-of-choice]]

[F1] A presentation $2$-complex has one vertex, one oriented $1$-cell for each generator, and one oriented $2$-cell attached by each relator word. [[def-group-presentation]]; [[def-free-group]]

[F2] Fox derivatives satisfy $\partial x_k/\partial x_j=\delta_{kj}$, $\partial(uv)/\partial x_j=\partial u/\partial x_j+u\partial v/\partial x_j$, and $\partial x_k^{-1}/\partial x_j=-x_k^{-1}\delta_{kj}$. [[def-knot-wada-quotient-for-deficiency-one-presentation]]

[F3] The group ring has basis indexed by group elements and multiplication $[g][h]=[gh]$; the coefficient map $\Phi$ is the ring homomorphism prescribed in the Wada definition. [[def-group-ring]]; [[thm-group-ring-is-a-unital-algebra-with-basis-g]]; [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

## Proof



1.1 For every word $w\in F_n$ and each generator index $j$, the recursive Fox derivative satisfies $\sum_{j=1}^n\frac{\partial w}{\partial x_j}(x_j-1)=w-1$. For $w=x_k$ this is $x_k-1$, and for $w=x_k^{-1}$ it is $-x_k^{-1}(x_k-1)=x_k^{-1}-1$. If it holds for $u$ and $v$, then the product recursion in [F2] makes the sum for $uv$ equal $(u-1)+u(v-1)=uv-1$. Induction on the length of a reduced word proves the identity. [F2, F3, given, induction]

1.2 Under the coefficient convention [A1], lift the vertex of $X$ to $\widetilde v$. The lift of the oriented edge $x_j$ from $\widetilde v$ ends at $x_j\widetilde v$, so its cellular boundary is $(x_j-1)\widetilde v$. Tensoring with the right coefficient module of the twisted-chain definition sends this block to $\rho(x_j)\psi(x_j)-I_d$. Thus the $j$th block of $\partial_1$ is the stated matrix in the stacked-block convention. [A1, F1, F3, given, construct]

2.1 Write a relator $r_i$ as a finite word in letters $x_j^{\pm1}$. Along its lifted attaching path, a positive occurrence of $x_j$ after prefix $u$ traverses the translate $u\widetilde e_j$ and contributes $u$ to the $x_j$ coefficient; a negative occurrence $x_j^{-1}$ after prefix $u$ traverses the reverse of $ux_j^{-1}\widetilde e_j$ and contributes $-ux_j^{-1}$. The product/inverse recursions [F2] give exactly these same contributions to $\partial r_i/\partial x_j$ term by term. Summing the finitely many occurrences shows $\partial_2(\widetilde e_{r_i})=\sum_j(\partial r_i/\partial x_j)\widetilde e_{x_j}$. [F1, F2, F3, step 1.1, construct]

3.1 Tensor the displayed cellular boundary with the coefficient module and extend scalars to $Q$. Since tensoring sends each group-ring coefficient to its image under the ring homomorphism $\Phi$, the resulting $i$th block row is exactly $\bigl(\Phi(\partial r_i/\partial x_1),\ldots,\Phi(\partial r_i/\partial x_n)\bigr)$. This is the asserted twisted cellular boundary matrix. [F1, F3, step 1.2, step 2.1, algebra] ∎

