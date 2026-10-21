---
id: ex-threshold-class-has-vc-dimension-one
kind: example
title: "Thresholds on the real line have VC dimension one"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
proof_strategy: direct
deps:
  - def-shattered-set-and-vc-dimension
  - def-growth-function
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references: []
---

## Example

Equip $\mathbb R$ with its Borel sigma-algebra. Let $H_{\rm th}:=\{h_t:t\in\mathbb R\}$, where $h_t(x)=1$ exactly when $x\le t$. On the ordered sample $x_1<x_2<x_3$, the threshold $t=x_2$ labels the first two points by $1$ and the third by $0$. The sketch is illustrative; the verification proves the dimension and growth count for every finite tuple.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \draw[->] (0,0) -- (5,0);
  \draw (1,0.1) -- (1,-0.1) node[below=3pt] {$x_1$};
  \draw (2,0.1) -- (2,-0.1) node[below=3pt] {$x_2=t$};
  \draw (4,0.1) -- (4,-0.1) node[below=3pt] {$x_3$};
  \draw[very thick,->] (2,0.6) -- (0.3,0.6);
  \draw[dashed] (2,0.2) -- (2,0.8);
  \node[above] at (1,0.65) {$1$};
  \node[above] at (2,0.65) {$1$};
  \node[above] at (4,0.65) {$0$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The threshold class $H_{\rm th}$ described in the Example.

[F1] Shattering is defined on indexed tuples; a one-point tuple is shattered when both labels occur, and $\operatorname{VCdim}$ is the largest shattered length. [[def-shattered-set-and-vc-dimension]]

[F2] $\Pi_H(m)$ counts distinct trace vectors on indexed $m$-tuples. [[def-growth-function]]

## Verification

1.1 If $s<t$, the midpoint $x=(s+t)/2$ satisfies $h_s(x)=0$ and $h_t(x)=1$, so the functions $h_t$ are all distinct as $t$ varies over $\mathbb R$ and the class is infinite. For any single $x$, $t<x$ realizes label $0$ and $t=x$ realizes label $1$, so every one-point tuple is shattered. [F1, given, construct]

2.1 For two distinct points $x<y$, the possible trace vectors are only $(0,0)$, $(1,0)$, and $(1,1)$ as the threshold passes from left to right; $(0,1)$ never occurs. If the two indexed points repeat, their labels always agree. Hence no two-point tuple is shattered, and $\operatorname{VCdim}(H_{\rm th})=1$. [F1, step 1.1]

3.1 For $m$ distinct points ordered $x_1<\cdots<x_m$, a threshold realizes exactly the $m+1$ vectors consisting of $k$ initial ones followed by $m-k$ zeros, for $0\le k\le m$. A tuple with only $r$ distinct points has at most $r+1\le m+1$ traces, while a distinct $m$-tuple attains $m+1$; for $m=0$ the unique empty trace is counted once. Thus $\Pi_{H_{\rm th}}(m)=m+1$. [F2, step 2.1, algebra] ∎
