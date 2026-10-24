---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-symmetric-torus-height-flow-is-not-morse-smale.json
  precheck: pass
id: cex-symmetric-torus-height-flow-is-not-morse-smale
kind: counterexample
title: "The symmetric torus height flow is not Morse--Smale"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-smale-pair, def-stable-and-unstable-sets-of-a-critical-point]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, Examples 2.2.4"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement refuted

For every embedded Riemannian manifold, a Morse height function together with
its induced-metric negative-gradient flow is Morse--Smale.

## Witness

For $R>r>0$, embed the torus with angular coordinates $u,v$ modulo $2\pi$ by
$$ E(u,v)=((R+r\cos v)\cos u,r\sin v,(R+r\cos v)\sin u). $$
Take vertical height $f=(R+r\cos v)\sin u$ and the induced metric $g$. The inner equator contains saddle-to-saddle trajectories of $X=-\operatorname{grad}_g f$.

## Facts & Assumptions

**Given:** The embedded torus $E$, constants $R>r>0$, height $f$, induced metric $g$, and negative-gradient field $X$ specified above.

[F1] In the metric version of [[def-morse-smale-pair]], stable and unstable manifolds are forward- and backward-limit manifolds of the complete negative-gradient flow; Morse--Smale requires all their intersections to be transverse. The normalized local form for a downward gradient-like field is not an additional condition on this metric version.

## Counterexample

**Proof technique:** direct.

1.1 Put $A=R+r\cos v>0$. Differentiating the embedding gives $g=A^2du^2+r^2dv^2$, and hence $\dot u=-\cos u/A$, $\dot v=\sin v\sin u/r$. This smooth field is complete because the torus is compact. [given, algebra]

1.2 The critical equations are $\cos u=0$ and $\sin v=0$, giving exactly four points. At each, the Hessian in $(u,v)$ is diagonal with entries $-A\sin u$ and $-r\cos v\sin u$. Both entries are nonzero. Thus $(\pi/2,0)$ is a maximum, $(3\pi/2,0)$ a minimum, and $a=(\pi/2,\pi)$ and $b=(3\pi/2,\pi)$ are saddles; in particular $f$ is Morse everywhere. [given, algebra]

2.1 The circle $v=\pi$ is invariant. On its interval $\pi/2<u<3\pi/2$, $\dot u=-\cos u/(R-r)>0$, so every point has backward limit $a$ and forward limit $b$. Locally at $a$, writing $w=v-\pi$ gives $\dot w=-\sin w\sin u/r$; for $w\ne0$ small this forces $|w|$ to increase backwards while $u$ stays near $\pi/2$. Thus a backward-converging trajectory must have $w=0$. At $b$ the same equation forces nonzero $|w|$ to increase forwards, so a forward-converging trajectory must also have $w=0$. Uniqueness and flow transport show that the indicated unstable and stable branches are precisely arcs of this circle. [step 1.1, step 1.2, algebra]

3.1 Consequently, at every point of this open interval, $T W^u(a)=T W^s(b)=\mathbb R\partial_u$. Their tangent sum has dimension one, whereas the torus has dimension two. The metric pair $(f,g)$ therefore fails the Morse--Smale condition. [F1, step 2.1, algebra] ∎


## Remarks

The coordinate-strip schematic below shows only the inner-equator branch
$\gamma=\{(u,\pi):\pi/2<u<3\pi/2\}$, not the whole torus. Its critical
endpoints are excluded from $\gamma$. By steps 2.1 and 3.1, this same open arc
lies in both $W^u(a)$ and $W^s(b)$; at any indicated point $p\in\gamma$,
both tangent lines are $\mathbb R\partial_u$, while $\partial_v$ supplies
the other coordinate direction of the surface. The arrows on the arc show
forward time. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[dashed,gray] (0,0) rectangle (7,3);
\node at (3.5,3.4) {Coordinate strip near the inner equator};
\draw[very thick,blue] (1,1.4) -- (6,1.4);
\draw[->,very thick,blue] (1.8,1.4) -- (2.7,1.4);
\draw[->,very thick,blue] (4.2,1.4) -- (5.1,1.4);
\fill (1,1.4) circle (2pt);
\fill (6,1.4) circle (2pt);
\node[above] at (1,1.7) {$a=(\pi/2,\pi)$};
\node[above] at (6,1.7) {$b=(3\pi/2,\pi)$};
\node[below] at (1,1.2) {saddle};
\node[below] at (6,1.2) {saddle};
\fill[blue] (3.5,1.4) circle (2pt);
\node[below] at (3.5,1.3) {$p\in\gamma$};
\draw[->] (3.5,1.4) -- (3.5,2.6) node[right] {$\partial_v$};
\node[blue] at (3.5,0.35) {$\gamma\subset W^u(a)\cap W^s(b),\quad v=\pi$};
\end{tikzpicture}
```
