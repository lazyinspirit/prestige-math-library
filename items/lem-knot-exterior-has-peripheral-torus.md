---
id: lem-knot-exterior-has-peripheral-torus
kind: lemma
title: "The knot exterior has a peripheral torus basis"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - lem-knot-tubular-exterior-and-boundary
  - thm-cellular-homology-computes-singular-homology
  - def-cellular-homology
  - def-cellular-boundary-from-three-consecutive-skeleta
  - def-countable-choice
  - thm-cellular-boundary-is-the-incidence-degree-matrix
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Section 4.4, peripheral basis discussion"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Section 2.2, Example 2.36, cellular homology of closed orientable surfaces"
---

## Statement

Assume countable choice. For a smooth oriented knot with a chosen product tubular neighbourhood $N(K)\cong S^1\times D^2$, let $\mu$ be the positive fibre meridian and let $\sigma$ be the product section $s\mapsto(s,1)$ of $T_K=\partial N(K)\cong S^1\times S^1$. Then $T_K=\partial E_K$ is a torus and $[\mu],[\sigma]$ form a basis of $H_1(T_K;\mathbb Z)$. The curve $\sigma$ is a product section; this statement does not assert that it is the preferred zero-homology longitude.

## Statement references

[Cattabriga and Francaviglia, §4.4](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Hatcher, Example 2.36](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

## Facts & Assumptions

**Given:** Countable choice, a smooth oriented knot $K$, its chosen tubular exterior, and the product trivialization of the normal disk bundle.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-knot-exterior]] retains $T_K=\partial E_K=\partial N(K)$ and the tube coordinates as part of the exterior data.

[F2] [[def-knot-meridian-and-preferred-longitude]] orients the fibre meridian as the boundary of its oriented normal disk.

[F3] [[lem-knot-tubular-exterior-and-boundary]] supplies $N(K)\cong S^1\times D^2$ and $T_K\cong S^1\times S^1$ under [A1].

[F4] [[thm-cellular-homology-computes-singular-homology]] identifies cellular and singular homology for the finite CW structure on the torus.

[F5] [[def-cellular-homology]] defines cellular homology as $\ker d_n/\operatorname{im}d_{n+1}$.

[F6] [[def-cellular-boundary-from-three-consecutive-skeleta]] defines the cellular differential by the connecting map of successive skeleta followed by the quotient map.

[F7] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] computes each cellular boundary coefficient as the degree of the corresponding attaching map after collapsing the other cells.

## Proof

**Proof technique:** direct.

1.1 In product coordinates on $T_K=S^1\times S^1$, the meridian $\mu$ is the second factor loop and the section $\sigma$ is the first factor loop. Give the torus its standard product CW structure: take the quotient of a square by identifying opposite edges, with one vertex, the two oriented factor loops as its $1$-cells, and the open square as its $2$-cell attached by the commutator $\mu\sigma\mu^{-1}\sigma^{-1}$. [A1, F1, F2, F3, construct]

2.1 The cellular chain groups in dimensions $2,1,0$ are $\mathbb Z,\mathbb Z^2,\mathbb Z$. The differential $d_1$ is zero because each $1$-cell starts and ends at the only vertex. By [F7], each coefficient of $d_2$ is the degree of the attaching map after collapsing the other $1$-cell. The commutator traverses each factor once in each orientation, so both degrees are zero. Thus by [F5] and [F6], $H_1^{\mathrm{cell}}(T_K;\mathbb Z)=\mathbb Z^2$ with the factor loops as basis. [F5, F6, F7, step 1.1, algebra]

3.1 By [F4], the same two classes form a basis of singular $H_1(T_K;\mathbb Z)$. [F4, step 2.1] ∎

## Peripheral torus diagram

Use coordinates $(u,v)\in\mathbb R^2/\mathbb Z^2$ on the product torus, with $u$ in the oriented knot direction and $v$ in the oriented meridian direction. The square's opposite edges are identified in the same direction. The horizontal and vertical loops are the product section $\sigma$ and meridian $\mu$; the diagonal is a representative of $[\sigma]+[\mu]$. The diagram records the basis convention and is not used in the proof.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) rectangle (3,3);
  \draw[->,thick,blue] (0,0.08) -- (3,0.08) node[midway,below] {$\sigma$};
  \draw[->,thick,blue] (0,2.92) -- (3,2.92) node[midway,above] {$\sigma$};
  \draw[->,thick,red] (0.08,0) -- (0.08,3) node[midway,left] {$\mu$};
  \draw[->,thick,red] (2.92,0) -- (2.92,3) node[midway,right] {$\mu$};
  \draw[->,thick,dashed] (0,0) -- (3,3) node[midway,above left] {$\sigma+\mu$};
\end{tikzpicture}
```
