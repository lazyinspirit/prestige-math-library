---
id: ex-intervals-on-the-real-line-have-vc-dimension-two
kind: example
title: "Intervals on the real line have VC dimension two"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-shattered-set-and-vc-dimension
  - def-growth-function
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Example 3.11"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Example

Equip $\mathbb R$ with its Borel sigma-algebra. Let $H_{\rm int}$ be the class of indicator functions of closed bounded intervals $[a,b]\subset\mathbb R$, where $a\le b$. Then $\operatorname{VCdim}(H_{\rm int})=2$. On any $m$ distinct ordered sample points, its growth function has value $\Pi_{H_{\rm int}}(m)=1+m(m+1)/2$: the traces are the empty trace and all contiguous nonempty blocks of sample indices.

The sketch shows why the endpoint labeling $(1,0,1)$ cannot be produced: an interval containing $x_1$ and $x_3$ also contains $x_2$. The verification proves this for every ordered triple and counts all traces.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \draw[->] (0,0) -- (5,0);
  \draw (1,0.1) -- (1,-0.1) node[below=3pt] {$x_1$};
  \draw (2.5,0.1) -- (2.5,-0.1) node[below=3pt] {$x_2$};
  \draw (4,0.1) -- (4,-0.1) node[below=3pt] {$x_3$};
  \draw[very thick] (1,0.6) -- (4,0.6);
  \fill (1,0.6) circle (1.5pt);
  \fill (4,0.6) circle (1.5pt);
  \node[above] at (2.5,0.65) {middle point is included};
\end{tikzpicture}
```

## Example references

[Mohri et al., Example 3.11](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): two points are shattered by intervals, while three ordered points cannot realize the pattern $(+,-,+)$.

## Facts & Assumptions

**Given:** The class $H_{\rm int}$ of closed bounded intervals described in the Example.

[F1] Shattering means that every binary labeling of an indexed tuple occurs in the trace. [[def-shattered-set-and-vc-dimension]]

[F2] The growth function is the supremum of trace cardinalities over indexed tuples. [[def-growth-function]]

## Verification

1.1 Fix $x_1<x_2$ and put $r=x_2-x_1>0$. The patterns $(0,0),(1,0),(0,1),(1,1)$ are realized respectively by $[x_1-2r,x_1-r]$ (strictly left of both points), $[x_1,x_1]$, $[x_2,x_2]$, and $[x_1,x_2]$. Thus the pair is shattered and the VC dimension is at least two. [F1, given, construct]

2.1 For any three distinct ordered points, the labeling $(1,0,1)$ is impossible for an interval because containing $x_1$ and $x_3$ forces it to contain every point between them, including $x_2$. A repeated coordinate also prevents a tuple of length at least three from being shattered, since repeated instances receive the same label under every classifier. Hence no three-point indexed tuple is shattered and the VC dimension is exactly two. [F1, step 1.1]

3.1 On $m$ distinct ordered points, a nonempty interval has as its trace one contiguous block, and every such block is realized by the interval with those two sample endpoints. There are $\sum_{r=1}^m(m-r+1)=m(m+1)/2$ such blocks; an interval outside the finite sample realizes the empty trace. For a tuple with $r\le m$ distinct points there are at most $1+r(r+1)/2\le1+m(m+1)/2$ traces, while a distinct tuple attains that number. At $m=0$ the formula gives the single empty trace. Thus $\Pi_{H_{\rm int}}(m)=1+m(m+1)/2$. [F2, step 2.1, algebra] ∎
