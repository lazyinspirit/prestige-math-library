---
id: lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus
kind: lemma
title: "A meridian-preserving torus homeomorphism extends over a solid torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21"
      url: "https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.1.1"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
---

## Statement

Let $V=D^2\times S^1$ and $V'=D^2\times S^1$ be solid tori, with meridian curves $\mu=\partial D^2\times\{1\}$ and $\mu'=\partial D^2\times\{1\}$. Suppose $h:\partial V\to\partial V'$ is a homeomorphism and there is an isotopy $H_t:\partial V'\to\partial V'$ through homeomorphisms, with $H_0=\mathrm{id}$, such that $H_1(h(\mu))=\mu'$. Then $h$ extends to a homeomorphism $\overline h:V\to V'$. The extension may be chosen to carry the product core $\{0\}\times S^1$ onto the product core of $V'$, and has the same orientation sign as $h$ with respect to the boundary orientations.

## Statement references

[Motegi, *Dehn surgery on knots: survey*, pp. 19–21](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

[Cattabriga and Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.1.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[[lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick|Radial extension of a sphere homeomorphism over a ball]]

## Facts & Assumptions

**Given:** Two product solid tori $V,V'$, a boundary homeomorphism $h$, and the boundary isotopy in the Statement.

[F1] For $d\ge1$, a homeomorphism $f:S^{d-1}\to S^{d-1}$ extends radially to a homeomorphism of the closed unit disk $D^d$. [[lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick]]

## Proof

1.1 Let $c((e^{i\theta},w),s)=((1-s/8)e^{i\theta},w)$ for $(e^{i\theta},w)\in\partial V'$ and $s\in[0,2]$; this is a collar because its radial coordinate ranges from $1$ to $3/4$. Set $\rho(s)=1-s$ for $0\le s\le1$ and $\rho(s)=0$ for $1\le s\le2$. The map $J(c(x,s))=c(H_{\rho(s)}(x),s)$ on the collar, extended by the identity outside it, is a homeomorphism: its inverse replaces $H_{\rho(s)}$ with $H_{\rho(s)}^{-1}$. It restricts to $H_1$ at the boundary and is isotopic to the identity through the same formula with $H_{u\rho(s)}$ for $u\in[0,1]$. Thus $h_0=J|_{\partial V'}\circ h$ sends $\mu$ exactly to $\mu'$, and extending $h_0$ suffices because postcomposition with $J^{-1}$ recovers an extension of $h$ without changing its orientation sign. [given, construct]

2.1 Cut $V$ and $V'$ along the product meridian disks $D=D^2\times\{1\}$ and $D'=D^2\times\{1\}$. Each cut-open solid torus is $D^2\times[0,1]$. After centering the interval at $0$, this convex cylinder is homeomorphic to the unit ball by radial rescaling: in direction $u=(u_1,u_2,u_3)\in S^2$ its boundary radius is $R(u)=\min\{(u_1^2+u_2^2)^{-1/2},(2|u_3|)^{-1}\}$, with a zero denominator interpreted as $+\infty$, and $(r,u)\mapsto rR(u)u$ gives the homeomorphism. The boundary of each cut-open torus consists of the annulus obtained by cutting the boundary torus along the meridian and two disk faces. The restriction of $h_0$ maps the annular portions to one another. Its common restriction to $\mu$ extends over each disk face by [F1], using the same disk map on both copies. The radial disk maps send the center of each disk face to the center of its target face. These maps assemble to a homeomorphism $\psi:\partial B\to\partial B'$ between the sphere boundaries of the cut-open balls, carrying the pair of disk-face centers to that pair in the target. [step 1.1, F1, construct]

3.1 Identify each cut-open ball with the unit ball in $\mathbb R^3$. Apply [F1] with $d=3$ to extend $\psi$ radially over the ball. The cylinder-to-ball radial rescaling of step 2.1 carries the central product arc $\{0\}\times[0,1]$ to the diameter joining the two disk-face center points. Since $\psi$ carries those endpoints to the target pair, its radial extension carries this entire diameter to the corresponding target diameter. Thus the ball extension preserves the product core arc. The extension has orientation sign equal to the degree sign of $\psi$. On the open annulus away from the disk faces, $\psi$ is exactly $h_0$; cutting does not change the local boundary orientation there, so this degree sign is the orientation sign of $h_0$. [step 2.1, F1, construct]

4.1 The two copies of each meridian disk receive the same disk map from [F1], so the ball extension agrees on their identified faces. It therefore descends after regluing to a homeomorphism $V\to V'$ extending $h_0$ and carrying the product core circle to the target core circle. Composing with $J^{-1}$ extends the original $h$; this collar-supported map fixes the core and keeps the same orientation sign because $J$ is isotopic to the identity. [step 1.1, step 3.1, F1, construct] ∎

## Diagram

Cutting along a meridian disk turns a solid torus into a ball with two disk faces. The boundary map on the annulus and the matching extensions on those faces form the sphere map extended radially in step 3.1. The diagram records this cut-and-glue operation; the proof supplies the extension independently.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=1.2cm] (v) at (0,0) {$V=D^2\times S^1$};
  \node[draw,rounded corners,minimum width=2.4cm,minimum height=1.2cm] (b) at (5,0) {$B^3$};
  \draw[thick] (-0.35,-0.38) ellipse (0.18 and 0.4);
  \node[below] at (-0.35,-0.65) {$D$};
  \node[above] at (4.45,0.58) {$D_+$};
  \node[below] at (5.55,-0.58) {$D_-$};
  \draw[->,thick] (1.35,0) -- node[above] {cut along $D$} (3.65,0);
  \draw[dashed] (4.25,-0.42) -- (5.75,0.42);
  \node at (5,-0.86) {glue $D_+$ to $D_-$};
\end{tikzpicture}
```
