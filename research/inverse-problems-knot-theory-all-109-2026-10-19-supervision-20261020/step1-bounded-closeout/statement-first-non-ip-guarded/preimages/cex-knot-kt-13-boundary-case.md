---
id: cex-knot-kt-13-boundary-case
kind: counterexample
title: "Trefoil surgery with trivial first homology and nontrivial fundamental group"
status: draft
origin: pipeline
dependency_level: 8
deps:
  - lem-knot-surgery-first-homology-mayer-vietoris
  - lem-trefoil-plus-one-surgery-group-presentation
  - def-oriented-slope-and-knot-dehn-filling
  - def-knot-exterior
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hugh M. Hilden, María Teresa Lozano, and José María Montesinos-Amilibia, On the affine representations of the trefoil knot group, arXiv:1003.3554v1, p. 24"
      url: "https://arxiv.org/pdf/1003.3554"
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
---

## Statement refuted

Every connected closed oriented $3$-manifold $M$ with $H_1(M;\mathbb Z)=0$ is simply connected, meaning that $\pi_1(M)$ is trivial.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the connected exterior $E_T$ of the trefoil $T$, a peripheral basis $([\mu],[\lambda])$ of $H_1(\partial E_T;\mathbb Z)$ with $[\mu]$ generating $H_1(E_T;\mathbb Z)$ and $[\lambda]=0$, the $+1$ filling of $T$, and the two displayed supplier statements.

[A1] $\mathrm{AC}_\omega$ is the stated axiom for the chosen exterior and peripheral data. [[def-countable-choice]]

[F1] [[lem-knot-surgery-first-homology-mayer-vietoris]]: a $p/q$ filling has first homology $\mathbb Z/|p|\mathbb Z$ when $p\ne0$.

[F2] [[lem-trefoil-plus-one-surgery-group-presentation]]: $\pi_1(M)$ has presentation $\langle a,b\mid aba=bab,\;bab^{-1}aba^{-2}=1\rangle$.

[F3] [[def-oriented-slope-and-knot-dehn-filling]]: filling glues an oriented solid torus to the knot exterior along the specified meridian slope.

## Counterexample

Assume $\mathrm{AC}_\omega$. Let $T$ be the trefoil given by the closure of the positive two-strand braid $\sigma_1^3$, using the positive half-twist convention for $\sigma_1$. Choose its connected exterior and peripheral basis $([\mu],[\lambda])$ of $H_1(\partial E_T;\mathbb Z)$ with $[\mu]$ generating $H_1(E_T;\mathbb Z)$ and $[\lambda]=0$, and let $M=E_T(1/1)$, where $+1$ means filling along $[\mu]+[\lambda]$. Then $H_1(M;\mathbb Z)=0$ but $\pi_1(M)$ is nontrivial.

1.1 By [F3], $M$ is the connected closed oriented manifold obtained by filling the connected knot exterior along its boundary torus. Apply [F1] with $p=q=1$. Then $H_1(M;\mathbb Z)\cong\mathbb Z/1\mathbb Z=0$. [given, A1, F1, F3, construct, algebra]

1.2 Let $A_5$ denote the subgroup of even permutations of $\{1,2,3,4,5\}$; every $5$-cycle is even because it is a product of four transpositions. Set $a=(1\ 2\ 3\ 4\ 5)$ and $b=(1\ 3\ 5\ 4\ 2)$, composing right to left. Applying the factors of $aba$ and $bab$ from right to left gives the same image tuple $(2,1,3,5,4)$ on inputs $(1,2,3,4,5)$, so both words equal $(1\ 2)(4\ 5)$. Thus the braid relator in [F2] is satisfied. [F2, construct, algebra]

1.3 Applying the factors of $bab^{-1}aba^{-2}$ from right to left, the six successive images for inputs $1,2,3,4,5$ are respectively $(4,2,3,1,2,1)$, $(5,4,5,3,4,2)$, $(1,3,4,5,1,3)$, $(2,1,2,4,5,4)$, and $(3,5,1,2,3,5)$. Their final entries are $(1,2,3,4,5)$, so the filling relator is the identity. The assignments therefore satisfy both relators in [F2] and induce a homomorphism $\pi_1(M)\to A_5$. [F2, construct, algebra]

2.1 The image of $a$ is a nonidentity $5$-cycle, so this homomorphism has nontrivial image and $\pi_1(M)\ne1$. Together with step 1.1, this refutes the statement. [step 1.1, step 1.2, step 1.3, algebra] ∎

## Counterexample references

[[def-countable-choice|Countable-choice hypothesis for the chosen exterior and peripheral data]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented trefoil in the standard three-sphere]]

[[def-geometric-braid-with-setwise-endpoints|Geometric braid and transported strand labels]]

[[def-elementary-geometric-half-twist|Positive geometric half twist]]

[[def-closure-of-a-geometric-braid|Braid closure convention]]

[[def-knot-exterior|Chosen knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[def-oriented-slope-and-knot-dehn-filling|Filling along the specified meridian slope]]

[[lem-knot-surgery-first-homology-mayer-vietoris|First homology of the filling]]

[[lem-trefoil-plus-one-surgery-group-presentation|Trefoil $+1$ filling group presentation]]

[Hilden–Lozano–Montesinos-Amilibia, p. 24, canonical longitude and zero-surgery group](https://arxiv.org/pdf/1003.3554)

[Saveliev, Lecture 2 §2.2, knot surgery along a specified peripheral slope](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)
