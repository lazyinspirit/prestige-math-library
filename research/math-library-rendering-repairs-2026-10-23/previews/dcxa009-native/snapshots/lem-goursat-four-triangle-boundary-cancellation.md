---
id: lem-goursat-four-triangle-boundary-cancellation
kind: lemma
title: "Midpoint subdivision of a triangle cancels every interior edge and preserves its outer boundary integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, prop-reversal-and-concatenation-of-complex-line-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $f$ be continuous on the filled triangle $\Delta[a,b,c]$ of [[def-oriented-complex-triangle-and-boundary]], and put

$$p=\frac{a+b}{2},\qquad q=\frac{b+c}{2},\qquad r=\frac{c+a}{2}.$$

Then

$$I_f[a,b,c]=I_f[a,p,r]+I_f[p,b,q]+I_f[r,q,c]+I_f[p,q,r].$$

The identity remains valid when vertices coincide or are collinear.

## Facts & Assumptions

**Given:** The ordered vertices $a,b,c$, their side midpoints $p,q,r$, and a function $f$ continuous on the filled triangle.

[L1] Reversing a rectifiable contour negates its complex line integral, while concatenating compatible contours adds their integrals ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 In the order fixed by the triangle definition, the four boundary edge lists are $(a\to p,p\to r,r\to a)$, $(p\to b,b\to q,q\to p)$, $(r\to q,q\to c,c\to r)$, and $(p\to q,q\to r,r\to p)$. [given]

2.1 In their sum, the interior pairs $p\to r,r\to p$, $q\to p,p\to q$, and $r\to q,q\to r$ cancel by reversal, while concatenation joins the surviving pairs $a\to p\to b$, $b\to q\to c$, and $c\to r\to a$ into the three outer edges. [step 1.1, L1]

3.1 Additivity under concatenation now gives exactly the displayed integral identity; reversal and concatenation also hold for constant and collinear segments, so no nondegeneracy was used. [step 2.1, L1] ∎


## Remarks

The nondegenerate schematic below shows the four ordered subtriangles. Here $T_1=[a,p,r]$, $T_2=[p,b,q]$, $T_3=[r,q,c]$, and $T_4=[p,q,r]$. Each double-headed interior edge represents its two opposite traversals in the sum of boundaries; the single arrows show the surviving outer boundary $a\to b\to c\to a$.

```tikz
\begin{tikzpicture}[scale=1,>=stealth]
\coordinate (a) at (0,0);
\coordinate (b) at (6,0);
\coordinate (c) at (3,4.8);
\coordinate (p) at (3,0);
\coordinate (q) at (4.5,2.4);
\coordinate (r) at (1.5,2.4);
\fill[blue!7] (a)--(p)--(r)--(a);
\fill[blue!7] (p)--(b)--(q)--(p);
\fill[blue!7] (r)--(q)--(c)--(r);
\fill[orange!15] (p)--(q)--(r)--(p);
\draw[->] (a)--(p);
\draw[->] (p)--(b);
\draw[->] (b)--(q);
\draw[->] (q)--(c);
\draw[->] (c)--(r);
\draw[->] (r)--(a);
\draw[<->,thick] (p)--(r);
\draw[<->,thick] (q)--(p);
\draw[<->,thick] (r)--(q);
\node[below left] at (a) {$a$};
\node[below right] at (b) {$b$};
\node[above] at (c) {$c$};
\node[below] at (p) {$p$};
\node[right] at (q) {$q$};
\node[left] at (r) {$r$};
\node at (1.5,0.8) {$T_1$};
\node at (4.5,0.8) {$T_2$};
\node at (3,3.2) {$T_3$};
\node at (3,1.6) {$T_4$};
\end{tikzpicture}
```

The cancellation is established algebraically in the proof, independently of this picture, and also holds for repeated or collinear vertices.
