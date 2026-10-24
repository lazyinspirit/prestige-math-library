---
id: thm-framed-knot-surgery-trace-boundary
kind: theorem
title: "Boundary of the integer-framed knot surgery trace"
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-oriented-slope-and-knot-dehn-filling
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
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
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.4, Theorem 2.4"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, Heegaard Floer homology, version 2025-12-15, Exercise 1.2.11"
      url: "https://web.math.princeton.edu/~petero/konyv9.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $K$ be a smooth oriented knot in the oriented $3$-sphere with a chosen exterior $E_K$ and peripheral basis $(\mu,\lambda)$, where $\lambda$ is preferred. For $n\in\mathbb Z$, attach one smooth $4$-dimensional $2$-handle $D^2\times D^2$ to the $4$-ball $B^4$ along $S^1\times D^2$ in $\partial B^4=S^3$ by the standard orientation-compatible handle attachment, using a product framing whose attaching parallel on $\partial E_K$ has slope $n[\mu]+[\lambda]$. Denote the resulting oriented trace by $X_n(K)$. After rounding corners, its oriented boundary is the filling $E_K(n/1)$. This theorem covers integer framings only: a rational $p/q$ filling has a trace only after specifying an integral continued-fraction handle chain or a separately defined rational-surgery cobordism; an arbitrary rational coefficient is not the framing of a single smooth $2$-handle.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and the ambient orientation]]

[[def-countable-choice|Countable-choice hypothesis for the chosen tubular data]]

[[def-oriented-slope-and-knot-dehn-filling|Slope and filling convention used in this statement]]

[[def-knot-exterior|Chosen knot exterior and boundary torus]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and degree-one preferred longitude]]

[Saveliev, Lecture 2 §2.4, Theorem 2.4 and its boundary decomposition proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Ozsváth–Stipsicz–Szabó, Exercise 1.2.11, 2-handle attachment and boundary surgery](https://web.math.princeton.edu/~petero/konyv9.pdf)

## Facts & Assumptions

**Given:** The oriented $4$-ball, a framed attaching knot $K\subset S^3$, the specified product identification of its tubular neighborhood, and the slope convention for $E_K(n/1)$.

[F1] [[def-oriented-slope-and-knot-dehn-filling]]: the filling replaces the knot neighborhood by $D^2\times S^1$ whose meridian maps to $n[\mu]+[\lambda]$, and its orientation agrees with the exterior orientation.

[A1] $\mathrm{AC}_\omega$ is included for the chosen exterior and peripheral-system interface [[def-countable-choice]]. The product framing is part of the handle-attachment data; after those data are supplied, the boundary decomposition makes no further choice.

## Proof

1.1 The attaching region of the $2$-handle is $S^1\times D^2\subset\partial(D^2\times D^2)$. It is glued to the tubular neighborhood $N(K)\subset S^3$, so the portion of $\partial B^4$ left in the boundary after attachment is exactly $E_K=S^3\setminus\operatorname{int}N(K)$. [given, A1, construct]

2.1 The free face of the handle boundary is $D^2\times S^1$, a solid torus. Its meridian disk $D^2\times\{z_0\}$ has boundary $\partial D^2\times\{z_0\}$; the specified product framing sends this curve to the attaching parallel of slope $n[\mu]+[\lambda]$ on $\partial E_K$. Thus the outgoing boundary is the union of $E_K$ and a solid torus with precisely the meridian image in [F1]. [step 1.1, A1, F1, construct]

3.1 The orientation-compatible handle attachment identifies the oriented attaching region with $N(K)$ by a boundary-orientation-reversing map. The free face $D^2\times S^1$ inherits its boundary orientation from the oriented handle, so its gluing to $E_K$ reverses the induced orientations on the common torus; this is exactly the oriented filling convention in [F1]. Rounding corners changes the boundary only inside a collar and preserves its orientation. Thus $\partial X_n(K)$ is the stated oriented filling. [given, A1, F1, step 2.1, construct] ∎

## Diagram

The left decomposition is the original boundary of the $4$-ball. The handle removes the neighborhood $N(K)$ from that boundary and contributes its free face $D^2\times S^1$; the meridian of this new solid torus is attached along $n\mu+\lambda$. The diagram records the boundary pieces, while the proof above establishes the identification without using the picture.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,minimum width=2.3cm,minimum height=0.85cm] (e0) at (0,0) {$E_K$};
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=0.85cm] (n) at (5.5,0) {$N(K)$};
  \node at (2.75,0.95) {$S^3=E_K\cup N(K)$};
  \draw[<->,thick] (e0.east) -- node[above] {$T_K$} (n.west);
  \node[draw,rounded corners,minimum width=2.3cm,minimum height=0.85cm] (e1) at (0,-3.6) {$E_K$};
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=0.85cm] (v) at (5.5,-3.6) {$D^2\times S^1$};
  \node at (2.75,-4.85) {$\partial X_n(K)$};
  \draw[<->,thick] (e1.east) -- node[below] {$\partial D^2\mapsto n\mu+\lambda$} (v.west);
  \draw[->,dashed] (n.south) -- (v.north)
    node[midway,right,align=left] {remove $N(K)$;\\insert free face};
\end{tikzpicture}
```
