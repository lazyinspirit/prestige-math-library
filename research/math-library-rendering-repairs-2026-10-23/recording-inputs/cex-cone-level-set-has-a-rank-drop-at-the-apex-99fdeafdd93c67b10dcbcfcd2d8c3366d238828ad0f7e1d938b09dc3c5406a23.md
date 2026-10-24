---
id: cex-cone-level-set-has-a-rank-drop-at-the-apex
kind: counterexample
title: 'The cone $x^2+y^2=z^2$ has a rank drop at its apex'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-regular-critical-points-values-and-level-sets, cor-regular-level-set-local-graph-theorem, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement refuted

A level set of a smooth map need not have constant derivative rank. For $F(x,y,z)=x^2+y^2-z^2$, the zero level is regular away from its apex and has derivative rank $0$ at the apex.

## Facts & Assumptions

**Given:** The smooth map $F:\mathbb R^3\to\mathbb R$, $F(x,y,z)=x^2+y^2-z^2$.

[L1] The power rule and derivative algebra give the continuous Jacobian row $(2x,2y,-2z)$, which is the total derivative by the continuous-partials theorem, and polynomial coordinate expressions are smooth ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L2] A point is regular exactly when its derivative is surjective, and the regular-level graph theorem requires that hypothesis ([[def-regular-critical-points-values-and-level-sets]], [[cor-regular-level-set-local-graph-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 The equation $F=0$ is $x^2+y^2=z^2$, the double cone, and [L1] gives $DF(0,0,0)=0$. Thus the derivative rank at the apex is $0$. [given, L1]

1.2 If $(x,y,z)\ne0$ lies on the cone, then the row $(2x,2y,-2z)$ is nonzero, so the derivative has rank $1$ and is surjective. [given, L1]

2.1 The rank therefore drops at the apex. Moreover the cone contains the rays with directions $(1,0,1)$, $(1,0,-1)$, and $(0,1,1)$, which span $\mathbb R^3$; no single two-dimensional tangent plane at the apex contains all their velocities, so [L2] cannot supply a regular graph there. [step 1.1, step 1.2, L2, algebra]

3.1 This explicit smooth map refutes constant rank on its level and isolates the failure at the critical apex. [step 2.1] ∎

## Remarks

The wireframe below shows a portion of the double cone, with its two circular sections at $z=2$ and $z=-2$. It uses the linear drawing projection $(x,y,z)\mapsto(x+0.6y,z+0.25y)$; intersections in the drawing need not be intersections in space. The three arrows represent the rays $t(1,0,1)$, $t(1,0,-1)$ and $t(0,1,1)$ for $t\ge0$, drawn only up to $t=2$. Their direction labels are spatial vectors, not coordinates in the drawing. These are the three independent directions in step 2.1; the proof above does not depend on the illustration.

```tikz
\begin{tikzpicture}[scale=1.05, >=stealth]
\draw[gray, thin] plot[domain=0:360,samples=81] ({2*cos(\x)+1.2*sin(\x)},{2+0.5*sin(\x)});
\draw[gray, thin] plot[domain=0:360,samples=81] ({2*cos(\x)+1.2*sin(\x)},{-2+0.5*sin(\x)});
\draw[gray, thin] (0,0) -- (-2,2);
\draw[gray, thin] (0,0) -- (-1.2,1.5);
\draw[gray, thin] (0,0) -- (-2,-2);
\draw[gray, thin] (0,0) -- (-1.2,-2.5);
\draw[->,blue,thick] (0,0) -- (2,2) node[right] {$(1,0,1)$};
\draw[->,blue,thick] (0,0) -- (2,-2) node[right] {$(1,0,-1)$};
\draw[->,orange,thick] (0,0) -- (1.2,2.5) node[above] {$(0,1,1)$};
\fill (0,0) circle (2pt);
\node[left] at (-0.2,0) {$0:\ \mathrm{rank}\,DF=0$};
\node at (-0.9,3.1) {$x^2+y^2=z^2$};
\node at (-0.5,-3.1) {$\mathrm{rank}\,DF=1\ \mathrm{away\ from}\ 0$};
\end{tikzpicture}
```
