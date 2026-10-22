---
id: cex-knot-kt-18-boundary-case
kind: counterexample
title: "The trefoil exterior is Seifert-fibered"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-exterior
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-thurston-hyperbolization-for-atoroidal-knot-exteriors
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Choice-free: the circle action, orbit space, and centrality homotopy square are explicit."
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
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§8.2, Definition 8.19 and Example 8.21, printed pp.155–156"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, torus-boundary and peripheral conventions"
---

## Statement refuted

Every compact exterior of a smooth knot in $S^3$ is non-Seifert-fibered.

## Statement references

[[thm-thurston-hyperbolization-for-atoroidal-knot-exteriors|The exact hyperbolization contract]]

## Counterexample description

Let $S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$ with the weighted circle action $g_\theta(z,w)=(e^{3i\theta}z,e^{2i\theta}w)$, and let $K(t)=2^{-1/2}(e^{3it},e^{2it})$ for $t\in\mathbb R/(2\pi\mathbb Z)$. The Clifford torus $|z|=|w|=2^{-1/2}$ separates $S^3$ into two solid tori; $K$ winds twice around the core of $|z|\le|w|$ and three times around the core of $|w|\le|z|$, so it is the standard $(3,2)$ torus knot, the trefoil. Let $q:S^3\to S^3/S^1$ be the orbit map and choose a small closed disk $D$ about $q(K)$ disjoint from the axis orbits. Then $N(K)=q^{-1}(D)$ is an invariant solid torus neighborhood and $E_K=S^3\setminus\operatorname{int}N(K)$ is Seifert-fibered over a disk with cone points of orders $2$ and $3$; a regular fiber is central in $\pi_1(E_K)$.

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §8.2](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

## Diagram

The disk marks the regular orbit removed to form the exterior. The two filled points mark the axis orbits, with their stabilizer orders. The proof uses the explicit circle action and does not depend on the drawing.

\begin{center}
\begin{tikzpicture}[scale=1.15]
  \draw[thick] (0,0) circle (1.6);
  \fill[gray!15] (0.45,0.15) circle (0.33);
  \draw[thick] (0.45,0.15) circle (0.33);
  \fill (0,1.6) circle (2pt);
  \fill (0,-1.6) circle (2pt);
  \node at (0.45,0.15) {$q(K)$};
  \node[right] at (0,1.6) {order $3$};
  \node[right] at (0,-1.6) {order $2$};
  \node at (0,-2.0) {quotient sphere; remove the shaded disk};
\end{tikzpicture}
\end{center}

## Facts & Assumptions

**Given:** $S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$, the weighted circle action $g_\theta(z,w)=(e^{3i\theta}z,e^{2i\theta}w)$, its orbit $K(t)=2^{-1/2}(e^{3it},e^{2it})$, the orbit map $q:S^3\to S^3/S^1$, a small closed disk $D$ around $q(K)$ disjoint from the two axis orbits, and the invariant tube $N(K)=q^{-1}(D)$ with exterior $E_K=S^3\setminus\operatorname{int}N(K)$.

[F1] [[def-knot-exterior]] defines the compact exterior by removing the interior of the chosen closed tube.

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines a Seifert fibration by local fibered-solid-torus models; multiplicity $1$ fibers are regular, while multiplicity $q>1$ fibers are exceptional of order $q$.

[F3] [[thm-thurston-hyperbolization-for-atoroidal-knot-exteriors]] explicitly requires that the exterior not be Seifert-fibered.

## Counterexample

1.1 The action preserves $|z|^2+|w|^2$, so it acts smoothly on $S^3$. The orbit of $(2^{-1/2},2^{-1/2})$ is exactly $K$. A group element stabilizes this point only if $3\theta$ and $2\theta$ are both multiples of $2\pi$; coprimality of $2$ and $3$ makes the stabilizer trivial. The regions $|z|\le|w|$ and $|w|\le|z|$ are solid tori, parametrized respectively by $(z,w)=(z,\sqrt{1-|z|^2}\eta)$ and $(z,w)=(\sqrt{1-|w|^2}\eta,w)$ with the disk coordinate bounded by $2^{-1/2}$ and $\eta\in S^1$. The $w$ coordinate is the core direction of the first solid torus and winds twice along $K$; the $z$ coordinate is the core direction of the second and winds three times. This proves the claimed $(3,2)$ torus-knot type. On the axis $z=0$ the stabilizer has order $2$, and on the axis $w=0$ it has order $3$. [given, algebra, construct]

2.1 On $zw\ne0$, write $\alpha=\arg z$ and $\beta=\arg w$ modulo $2\pi$. The integer coordinate change $\theta=\alpha-\beta$, $\phi=2\alpha-3\beta$ has determinant $-1$ and is invertible on the phase torus. The circle action changes $\theta$ by its parameter and fixes $\phi$, while $r=|z|\in(0,1)$ is fixed; thus the quotient of this open set is the cylinder with coordinates $(r,\phi)$, and the inverse image of any disk $D$ around $q(K)$ in it is explicitly $S^1_\theta\times D$. At $r=0$ and $r=1$ the phase circle collapses to one point at each end, so the full orbit space is a sphere; the two axis orbits have stabilizer orders $2$ and $3$. The complement of $D$ is a disk with those two cone points. Its orbits give the fibers of $E_K$, and [F2] identifies the axis fibers as exceptional of orders $2$ and $3$. [given, F1, F2, step 1.1, construct]

3.1 Choose a basepoint $x$ on a regular fiber, let $h$ be that fiber loop, and let $\gamma$ be any loop in $E_K$ based at $x$. The map $F:[0,1]^2\to E_K$ defined by $F(s,t)=g_{2\pi s}(\gamma(t))$ is well-defined because the tube is invariant. Its boundary represents $h\gamma h^{-1}\gamma^{-1}$: the two vertical sides are $\gamma$ and $\gamma^{-1}$ since $g_0=g_{2\pi}=\operatorname{id}$, and the horizontal sides are the fiber loop and its reverse. The square contracts its boundary, so $h$ commutes with $[\gamma]$. Since $\gamma$ was arbitrary, the regular fiber class is central in $\pi_1(E_K)$. [given, step 2.1, construct]

4.1 By [F3], a Seifert-fibered exterior does not satisfy the required non-Seifert-fibered hypothesis. Step 2.1 establishes that $E_K$ is Seifert-fibered, so this example refutes the statement that every knot exterior is non-Seifert-fibered and also fails that hypothesis of the hyperbolization contract. [F2, F3, step 2.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §8.2 and Example 8.21](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Example 8.21](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
