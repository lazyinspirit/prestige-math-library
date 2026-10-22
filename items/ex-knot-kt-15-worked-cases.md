---
id: ex-knot-kt-15-worked-cases
kind: example
title: "A meridian-preserving longitude twist extends over a solid torus"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.1.1"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21"
      url: "https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $V=D^2\times S^1$ have boundary meridian $\mu=\partial D^2\times\{1\}$ and longitude $\lambda=\{1\}\times S^1$. The boundary matrix
$$A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$$
sends $\mu\mapsto\mu$ and $\lambda\mapsto2\mu+\lambda$. Its induced torus homeomorphism extends over $V$ by $(z,w)\mapsto(w^2z,w)$ and preserves orientation.

The displayed rectangle is a two-unit-square window in the universal cover $\mathbb R^2$ of the torus $\mathbb R^2/\mathbb Z^2$, with horizontal coordinate $\mu$ and vertical coordinate $\lambda$. The identifications are $(x,y)\sim(x+m,y+n)$ for all integers $m,n$, so each unit square is a fundamental domain. The red lifted segment ends at $(2,1)$ and therefore represents the image $2\mu+\lambda$ of the longitude. The picture illustrates the slope convention only; the verification computes the map directly.

```tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  \draw[step=1,gray!35,very thin] (0,0) grid (2,1);
  \draw[thick] (0,0) rectangle (2,1);
  \draw[blue,->,thick] (0.08,0.06) -- (0.88,0.06) node[midway,below] {$\mu$};
  \draw[blue,->,thick] (0.08,0.08) -- (0.08,0.82) node[midway,left] {$\lambda$};
  \draw[red,->,very thick] (0,0) -- (2,1);
  \node[red,above] at (1.2,0.72) {$2\mu+\lambda$};
  \node at (1,-0.32) {universal-cover rectangle};
\end{tikzpicture}
```

## Example references

[[lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus|Meridian-preserving extension lemma]]

[Cattabriga and Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.1.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Motegi, *Dehn surgery on knots: survey*, pp. 19–21](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

## Facts & Assumptions

**Given:** The product solid torus $V=D^2\times S^1$ and its meridian-longitude basis $(\mu,\lambda)$.

[F1] A torus map carrying the meridian slope to itself extends over the solid torus. [[lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus]]

## Verification


1.1 The matrix $A$ is integral with determinant $1$, so its linear map on $\mathbb R^2/\mathbb Z^2$ is a torus homeomorphism. Its first column is $(1,0)$, hence it sends $\mu$ to $\mu$, and its second column is $(2,1)$, hence it sends $\lambda$ to $2\mu+\lambda$. [given, construct, algebra]

2.1 Define $F:V\to V$ by $F(z,w)=(w^2z,w)$. Since $|w|=1$, this maps $D^2\times S^1$ to itself, and its inverse is $(z',w')\mapsto((w')^{-2}z',w')$. Thus $F$ is a homeomorphism. On the meridian it has degree $1$; on the longitude it winds twice in the disk angle and once in the circle coordinate, giving the same matrix $A$. [given, step 1.1, construct]

3.1 The disk rotation $z\mapsto w^2z$ varies continuously with $w$ and contributes no orientation reversal; the circle coordinate is unchanged. Hence $F$ preserves the product orientation and is the required extension. This also instantiates [F1]. [F1, step 2.1, algebra] ∎
