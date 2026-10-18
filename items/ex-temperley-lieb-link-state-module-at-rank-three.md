---
id: ex-temperley-lieb-link-state-module-at-rank-three
kind: example
title: "The rank-three one-defect link-state module"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, thm-temperley-lieb-link-state-dimension-formula, lem-temperley-lieb-link-state-gram-form-is-invariant, def-temperley-lieb-diagram-category, thm-temperley-lieb-link-state-diagram-basis-is-cellular, cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references: []
---

## Example

Let $k$ be any field, $\delta\in k$, and consider $W_{3,1}(k,\delta)$. Its basis consists of the state $a$ with an arc between sites $1$ and $2$ and a defect at site $3$, and the state $b$ with a defect at site $1$ and an arc between sites $2$ and $3$. For the elementary diagrams $d_1,d_2$ and the Gram form $\phi_{3,1}$,

$$a\cdot d_1=\delta a,\qquad a\cdot d_2=b,\qquad b\cdot d_1=a,\qquad b\cdot d_2=\delta b,$$

and

$$[\phi_{3,1}]_{(a,b)}=\begin{pmatrix}\delta&1\\1&\delta\end{pmatrix}.$$

At $\delta=0$ the form is nondegenerate, so $W_{3,1}(k,0)$ is simple by [[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]].

## Facts & Assumptions

**Given:** A field $k$, a parameter $\delta\in k$, and $W_{3,1}(k,\delta)$.

[F1] The basis of $W_{n,t}$ consists of link states with $n$ sites and $t$ defects; its action is stacking on the right ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] $d_i$ has a cap at top sites $i,i+1$, a cup at bottom sites $i,i+1$, and vertical strands elsewhere; stacking removes each closed loop with coefficient $\delta$ ([[def-temperley-lieb-diagram-category]]).

[F3] The Gram form is computed by reflecting and gluing link states, and is the cellular form ([[lem-temperley-lieb-link-state-gram-form-is-invariant]], [[thm-temperley-lieb-link-state-diagram-basis-is-cellular]]).

[F4] A nonzero link-state cell form gives a simple head, and its quotient is simple; if the form is nondegenerate then that quotient is the whole module ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

## Verification

**Proof technique:** direct.

1.1 For $n=3$ and $t=1$ there is one arc. The only noncrossing placements are $a$, with arc $(1,2)$ and defect $3$, and $b$, with defect $1$ and arc $(2,3)$. The dimension formula of [[thm-temperley-lieb-link-state-dimension-formula]] gives $\binom{3}{1}-\binom{3}{0}=2$, so these two distinct states are the full basis. [F1, given, construct]

2.1 For $a\cdot d_1$, the cap of $d_1$ joins the two endpoints of $a$'s arc, making one closed loop; the bottom cup of $d_1$ leaves the same arc, so $a\cdot d_1=\delta a$. For $a\cdot d_2$, tracing from the defect at site $3$ through the top cap of $d_2$, then through the arc of $a$ and the vertical strand at site $1$, leaves a defect at site $1$ and a cup at sites $2,3$, so $a\cdot d_2=b$. For $b\cdot d_1$, tracing from the defect at site $1$ through $d_1$'s cap, then through $b$'s arc and the vertical strand at site $3$, leaves the arc at sites $1,2$ and a defect at site $3$, so $b\cdot d_1=a$. For $b\cdot d_2$, the cap closes $b$'s arc into one loop and the bottom cup leaves $b$, so $b\cdot d_2=\delta b$. [F1, F2, step 1.1]

2.2 Gluing $a$ with its reflection creates one loop, as does gluing $b$ with its reflection, so $\phi(a,a)=\delta=\phi(b,b)$. Gluing $a$ to the reflection of $b$ creates one through path and no loop, so $\phi(a,b)=1$; by symmetry $\phi(b,a)=1$. These four values give the displayed Gram matrix. [F2, F3, step 1.1]

3.1 At $\delta=0$, if $xa+yb$ lies in the radical then pairing with $a$ gives $y=0$ and pairing with $b$ gives $x=0$. Thus the radical is zero and the cell-form quotient is $W_{3,1}$ itself. The form is nonzero, so [F4] makes this module simple. [F3, F4, step 2.2, algebra] ∎

## Remarks

The two basis half-diagrams use the same boundary convention as the A-page definition; defects are the strands meeting the top boundary.

```tikz
\begin{tikzpicture}[scale=0.85]
  \foreach \x in {0,1,2} { \fill (\x,0) circle (1.5pt); }
  \fill (2,1) circle (1.5pt);
  \node[below] at (0,-0.04) {$1$};
  \node[below] at (1,-0.04) {$2$};
  \node[below] at (2,-0.04) {$3$};
  \node[above] at (2,1.04) {defect};
  \draw (2,0) -- (2,1);
  \draw (0,0) .. controls (0,0.55) and (1,0.55) .. (1,0);
\begin{scope}[xshift=5cm]
  \foreach \x in {0,1,2} { \fill (\x,0) circle (1.5pt); }
  \fill (0,1) circle (1.5pt);
  \node[below] at (0,-0.04) {$1$};
  \node[below] at (1,-0.04) {$2$};
  \node[below] at (2,-0.04) {$3$};
  \node[above] at (0,1.04) {defect};
  \draw (0,0) -- (0,1);
  \draw (1,0) .. controls (1,0.55) and (2,0.55) .. (2,0);
\end{scope}
\end{tikzpicture}
```
