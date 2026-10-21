---
id: def-oriented-slope-and-knot-dehn-filling
kind: definition
title: "Oriented slopes and knot Dehn filling"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-knot-exterior, def-knot-meridian-and-preferred-longitude,
       def-oriented-link-in-s-three-and-ambient-isotopy, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, Heegaard Floer homology, version 2025-12-15, §1.2.3"
      url: "https://web.math.princeton.edu/~petero/konyv9.pdf"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6, §§4–7"
      url: "https://arxiv.org/pdf/1910.10257v6"
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $K$ be a smooth oriented knot in the oriented $3$-sphere, let $N(K)$ be a chosen closed tubular solid-torus neighborhood, let $E_K=\overline{S^3\setminus\operatorname{int}N(K)}$, and let $T_K=\partial E_K=\partial N(K)$. Let $\mu$ be the positive oriented meridian, meaning the boundary of a positive normal disk in $N(K)$, and let $\lambda$ be a preferred longitude, meaning a degree-one parallel of the core $K$ in $N(K)$ that is null-homologous in $E_K$. Assume that $[\mu],[\lambda]$ are an ordered basis of $H_1(T_K;\mathbb Z)$, with the boundary-orientation convention $\mu\cdot\lambda=-1$. A slope is the unoriented isotopy class of an essential simple closed curve on $T_K$ whose homology class is $p[\mu]+q[\lambda]$ for coprime integers $p,q$ not both zero; $(p,q)$ and $(-p,-q)$ represent the same slope. For a slope represented by $p[\mu]+q[\lambda]$, the Dehn filling $E_K(p/q)$ is obtained by gluing an oriented solid torus $D^2\times S^1$ to $E_K$ by an orientation-reversing boundary homeomorphism that sends $[\partial D^2\times\{1\}]$ to that slope; the filled orientation agrees with the fixed orientation on $E_K$. If $q\ne0$, the coefficient is written $p/q$; the meridional slope is $1/0$, and integer $n$-framed filling means slope $n[\mu]+[\lambda]$. The oriented homeomorphism type is independent of the gluing map once its meridian image is fixed.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and the ambient orientation]]

[[def-countable-choice|Countable-choice hypothesis for the chosen tubular data]]

[[def-knot-exterior|Chosen knot exterior and boundary orientation]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and degree-one preferred longitude]]

[Saveliev, Lecture 2 §2.2, surgery on links in $S^3$](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Ozsváth–Stipsicz–Szabó, §1.2.3, Dehn filling and surgery coefficients](https://web.math.princeton.edu/~petero/konyv9.pdf)

[Elhamdadi–Hajij–Istvan, §§4–7, meridians, preferred longitudes, and integer surgery](https://arxiv.org/pdf/1910.10257v6)

## Facts & Assumptions

**Given:** A marked oriented knot exterior $(E_K,T_K,\mu,\lambda)$ satisfying the hypotheses in Definition, and two orientation-reversing gluing maps with the same unoriented meridian slope.

[A1] $\mathrm{AC}_\omega$ is the stated axiom [[def-countable-choice]]. The marked data include the chosen exterior [[def-knot-exterior]], its boundary torus, and the meridian–preferred-longitude basis [[def-knot-meridian-and-preferred-longitude]]. The batch-57 definitions specify this interface; the basis is an explicit hypothesis here, not an assertion that those definitions prove its existence.

## Proof

1.1 Since $\gcd(p,q)=1$, Bézout's identity gives integers $r,s$ with $ps-qr=1$. The integer matrix with columns $(p,q)$ and $(r,s)$ is unimodular, so its linear map on $\mathbb R^2$ descends to a torus homeomorphism. The image of a coordinate circle is embedded and has class $p[\mu]+q[\lambda]$; reversing its parameter changes both coefficients' signs and leaves the unoriented curve unchanged. Thus every primitive pair defines a slope. [given, A1, construct, algebra]

2.1 Let $C_0,C_1$ be essential simple closed curves whose primitive classes agree up to sign. Reverse one parameter if needed, so the classes agree. Their algebraic intersection is zero. Put them in transverse position; if they intersect, their lifts to $\mathbb R^2$ are proper lines with the same primitive deck translation. An innermost pair of intersections of such lifts bounds a disk with interior disjoint from the lifts; projecting that disk gives a bigon. Isotoping one arc across the bigon removes two intersections and preserves the isotopy class. Repeating this finite reduction makes $C_0,C_1$ disjoint. Cutting the torus along $C_0$ gives an annulus, and $C_1$ is an essential curve in that annulus, hence is parallel to its core and cobounds a subannulus with $C_0$. An isotopy across that subannulus carries $C_0$ to $C_1$. Thus the unoriented slope depends only on the primitive class modulo simultaneous sign. [given, step 1.1, construct]

3.1 Let $V=D^2\times S^1$ and suppose $\phi_0,\phi_1:\partial V\to T_K$ are orientation-reversing and send a meridian of $V$ to the same slope. By step 2.1 and isotopy extension across a collar of $T_K$, modify one gluing map by an isotopy so their meridian curves agree. The resulting transition map $g=\phi_0^{-1}\phi_1$ preserves the meridian curve. Cut $\partial V$ along that curve; the result is an annulus. After composing with the boundary map induced by $(z,w)\mapsto(\overline z,\overline w)$ if necessary, $g$ preserves both annulus boundary circles. A lift of the annulus to $\mathbb R\times[0,1]$ shows that its isotopy class rel boundary is determined by the integer displacement of one boundary lift relative to the other, hence is a power of a Dehn twist about the meridian. [given, step 2.1, construct]

4.1 In coordinates $V=D^2\times S^1$, a meridional Dehn twist of exponent $k$ is the boundary restriction of $(z,w)\mapsto(w^kz,w)$; the simultaneous reversal $(z,w)\mapsto(\overline z,\overline w)$ also extends and preserves the orientation of $V$. Thus the transition map extends over $V$ by an orientation-preserving homeomorphism. Changing one gluing map by this extension gives an oriented homeomorphism of the filled manifolds that is the identity on $E_K$. Therefore the filling type depends only on the meridian slope. [step 3.1, construct] ∎

## Diagram

The red segment below is one period of a lift of the primitive slope $2\mu+\lambda$ in the universal cover of a torus. Its endpoints differ by the exact deck translation $(2,1)$: two meridian periods and one longitude period. The grid is the integer lattice of the cover, and points differing by an integer lattice vector project to the same torus point. The picture illustrates the convention only; the proof above establishes the slope and gluing claims.

```tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  \draw[step=1,gray!35,very thin] (-0.2,-0.2) grid (2.2,1.2);
  \draw[thick] (0,0) rectangle (2,1);
  \draw[blue,->,thick] (0.12,0.06) -- (0.92,0.06) node[midway,below] {$\mu$};
  \draw[blue,->,thick] (0.08,0.10) -- (0.08,0.88) node[midway,left] {$\lambda$};
  \draw[red,->,very thick] (0,0) -- (2,1);
  \node[red,above] at (1.20,0.68) {$2\mu+\lambda$};
  \node at (1,-0.30) {universal-cover rectangle};
\end{tikzpicture}
```
