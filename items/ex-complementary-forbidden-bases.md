---
id: ex-complementary-forbidden-bases
kind: example
title: "Complementary hereditary classes have complementary forbidden bases"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-complementation-preserves-hereditary-classes-and-bases, ex-complete-graphs-as-a-hereditary-class, ex-edgeless-graphs-as-a-hereditary-class]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
    - title: "ISGCI, Self-complementary classes"
      url: "https://www.graphclasses.org/classes/self_complementary.html"
pipeline_run: null
---

## Statement

The class of edgeless graphs is complementary to the class of complete graphs, and their minimal forbidden bases $\{K_2\}$ and $\{\overline K_2\}$ are complementary.

## Facts & Assumptions

**Given:** The classes $\mathcal K$ of complete graphs and $\mathcal E$ of edgeless graphs.

[L1] $\mathcal B(\mathcal K)=\{\overline K_2\}$ ([[ex-complete-graphs-as-a-hereditary-class]]).

[L2] $\mathcal B(\mathcal E)=\{K_2\}$ ([[ex-edgeless-graphs-as-a-hereditary-class]]).

[L3] Complementation complements the minimal basis of a hereditary class ([[thm-complementation-preserves-hereditary-classes-and-bases]]).

[F1] A graph belongs to the complement class of $\mathcal K$ exactly when its complement belongs to $\mathcal K$.

## Verification

**Proof technique:** direct.

1.1 Complementing a complete graph gives an edgeless graph and vice versa, so $\mathcal E=\overline{\mathcal K}$. [F1]

1.2 The two basis graphs satisfy $\overline{\overline K_2}=K_2$. [L1, L2]

2.1 Thus the displayed bases are complementary, exactly as the general theorem predicts. [step 1.1, step 1.2, L3] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
\node[vertex] (a1) at (0,0) {};
\node[vertex] (a2) at (1.5,0) {};
\node[caption] at (.75,-.7) {$\overline K_2\in\mathcal B(\mathcal K)$};

\draw[<->,line width=.9pt] (2.05,0)--node[above,font=\scriptsize] {complement} (3.55,0);

\node[vertex] (b1) at (4.1,0) {};
\node[vertex] (b2) at (5.6,0) {};
\draw[edge] (b1)--(b2);
\node[caption] at (4.85,-.7) {$K_2\in\mathcal B(\mathcal E)$};
\end{tikzpicture}
```
