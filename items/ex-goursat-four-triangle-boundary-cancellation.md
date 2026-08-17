---
id: ex-goursat-four-triangle-boundary-cancellation
kind: example
title: "The four midpoint subtriangles of the $0,1,i$ triangle display all three cancelling interior edges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, lem-goursat-four-triangle-boundary-cancellation]
justified_by: []
aliases: []
landmark: false
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

## Example

For $a=0$, $b=1$, and $c=i$, the side midpoints are

$$p=\frac12,\qquad q=\frac{1+i}{2},\qquad r=\frac i2.$$

The midpoint subdivision, with the orientation of [[def-oriented-complex-triangle-and-boundary]], consists of $\Delta[0,p,r]$, $\Delta[p,1,q]$, $\Delta[r,q,i]$, and $\Delta[p,q,r]$.

```tikz
\begin{tikzpicture}[scale=3,>=stealth]
  \coordinate (a) at (0,0);
  \coordinate (b) at (1,0);
  \coordinate (c) at (0,1);
  \coordinate (p) at (.5,0);
  \coordinate (q) at (.5,.5);
  \coordinate (r) at (0,.5);
  \draw[->,very thick] (a)--(b);
  \draw[->,very thick] (b)--(c);
  \draw[->,very thick] (c)--(a);
  \draw[dashed] (p)--(q)--(r)--cycle;
  \fill (a) circle (.018) node[below left] {$0$};
  \fill (b) circle (.018) node[below right] {$1$};
  \fill (c) circle (.018) node[above left] {$i$};
  \fill (p) circle (.014) node[below] {$p$};
  \fill (q) circle (.014) node[right] {$q$};
  \fill (r) circle (.014) node[left] {$r$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed vertices and midpoints, with every triangle carrying the orientation fixed by its ordered vertices.

[L1] If $p,q,r$ are the side midpoints of $\Delta[a,b,c]$ and $f$ is continuous on that filled triangle, then $I_f[a,b,c]=I_f[a,p,r]+I_f[p,b,q]+I_f[r,q,c]+I_f[p,q,r]$ ([[lem-goursat-four-triangle-boundary-cancellation]]).

## Verification

**Proof technique:** direct.

1.1 The directed edge lists are $(0\to p,p\to r,r\to0)$, $(p\to1,1\to q,q\to p)$, $(r\to q,q\to i,i\to r)$, and $(p\to q,q\to r,r\to p)$. [given]

2.1 The interior segment pairs are $p\to r,r\to p$, $q\to p,p\to q$, and $r\to q,q\to r$; each pair consists of one directed edge and its reversal, so the formal oriented edges cancel. [step 1.1, algebra]

3.1 The surviving half-edges concatenate as $0\to p\to1$, $1\to q\to i$, and $i\to r\to0$, which is the positive outer boundary $0\to1\to i\to0$; for every continuous integrand, this is exactly the integral identity in [L1]. [step 1.1, step 2.1, L1] ∎
