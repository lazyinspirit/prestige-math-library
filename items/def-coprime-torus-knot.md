---
id: def-coprime-torus-knot
kind: definition
title: "Coprime torus knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§5.1, printed pp. 26–27"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Example 1.2, printed p. 5"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice. Identify the standard oriented three-sphere with $S^3=\{(z_1,z_2)\in\mathbb C^2:|z_1|^2+|z_2|^2=1\}$ and choose $0<r<1$. The standard unknotted Heegaard torus is $T_r=\{|z_1|=r,\ |z_2|=\sqrt{1-r^2}\}$; its two sides are solid tori. In the angular coordinates $(u,v)\in(\mathbb R/\mathbb Z)^2$ given by $(u,v)\mapsto(r e^{2\pi i u},\sqrt{1-r^2}e^{2\pi i v})$, let $\alpha$ and $\beta$ be the first and second coordinate classes in $H_1(T_r;\mathbb Z)$. For coprime nonzero integers $p,q$, the **oriented torus knot** $T(p,q)$ is the image of $s\mapsto(r e^{2\pi i p s},\sqrt{1-r^2}e^{2\pi i q s})$, for $s\in\mathbb R/\mathbb Z$, oriented by increasing $s$; it represents the primitive slope $p\alpha+q\beta$. The mirror convention is the reflection $(z_1,z_2)\mapsto(z_1,\overline{z_2})$, which sends $T(p,q)$ to $T(p,-q)$ with image orientation, and reversing the knot orientation gives $T(-p,-q)$. For nonzero $p,q$ with $d=\gcd(|p|,|q|)>1$, the corresponding torus link is the union of $d$ disjoint parallel copies of the primitive slope $(p/d,q/d)$; it is not a single embedded curve of class $p\alpha+q\beta$. The exterior is $E_K=S^3\setminus\operatorname{int}N(K)$ for a chosen closed tubular neighborhood. Orient each normal disk so that a positive tangent vector to $K$ followed by a positive basis of the disk gives the orientation of $S^3$. A **positive meridian** is the boundary of such a disk with its induced boundary orientation. Let $\pi:\partial E_K\to K$ be the projection of the chosen normal-disk tube. A **preferred longitude** is an oriented simple closed curve $\lambda\subset\partial E_K$ for which $\pi|_\lambda$ has degree $+1$ and $i_*[\lambda]=0$ in $H_1(E_K;\mathbb Z)$, where $i:\partial E_K\hookrightarrow E_K$ is inclusion; this definition alone asserts neither existence nor uniqueness.

## Definition references

[[def-knot-exterior|The chosen compact exterior convention]]

[[def-knot-meridian-and-preferred-longitude|The positive normal-disk meridian and degree-one preferred-longitude convention]]

[Cattabriga and Francaviglia, §5.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Calegari, Example 1.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Diagram

The rectangle is a $2$-by-$3$ block of unit fundamental squares in the universal cover $\mathbb R^2$ of $T_r$. The segment from $(0,0)$ to $(2,3)$ projects to the slope $2\alpha+3\beta$; its endpoints differ by a lattice vector, so the projection closes on the torus. The picture records the slope only; the proof of embeddedness is the coprimality argument in the Definition.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw[step=1,gray!45,very thin] (0,0) grid (2,3);
  \draw[thick] (0,0) rectangle (2,3);
  \draw[red,very thick,->] (0,0)--(2,3);
  \fill[red] (0,0) circle (2pt);
  \fill[red] (2,3) circle (2pt);
  \node[below left] at (0,0) {$(0,0)$};
  \node[above right] at (2,3) {$(2,3)$};
  \node[below] at (1,-0.45) {two $\alpha$ turns};
  \node[rotate=90] at (-0.45,1.5) {three $\beta$ turns};
  \node at (1.45,0.25) {$T(2,3)$};
\end{tikzpicture}
```
