---
id: ex-infinite-singleton-class-has-finite-vc-dimension
kind: example
title: "An infinite singleton class has VC dimension one"
status: draft
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

Let $\mathcal X=\mathbb N$ with its discrete sigma-algebra, and let $H=\{0\}\cup\{h_a:a\in\mathbb N\}$, where $h_a(n)=1$ exactly when $n=a$. The sketch shows the singleton indicator $h_2$ on four elements of $\mathbb N$ (the ambient number line continues indefinitely). The verification proves the exact trace count for every finite tuple.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \draw[->] (-0.2,0) -- (4.2,0);
  \foreach \x in {0,1,2,3} {\draw (\x,0.1) -- (\x,-0.1) node[below=3pt] {\x};}
  \fill (2,0) circle (1.8pt);
  \node[above] at (2,0.1) {$h_2=1$};
  \node[above] at (0,0.1) {$0$};
  \node[above] at (1,0.1) {$0$};
  \node[above] at (3,0.1) {$0$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The class $H$ of the zero function and all singleton-indicator functions on $\mathbb N$.

[F1] A tuple is shattered when every binary label vector occurs; repeated coordinates stay indexed. [[def-shattered-set-and-vc-dimension]]

[F2] $\Pi_H(m)$ counts the distinct traces on indexed $m$-tuples. [[def-growth-function]]

## Verification

1.1 For distinct $a,b\in\mathbb N$, $h_a(a)=1$ and $h_b(a)=0$, so the classifiers $h_a$ are pairwise distinct and $H$ is infinite. For any single $a$, the zero function realizes label $0$ and $h_a$ realizes label $1$, so each one-point tuple is shattered. [F1, given, construct]

2.1 For any two distinct points, no member of $H$ labels both points by $1$, so their $(1,1)$ pattern is absent; a repeated two-point tuple also cannot be shattered because both coordinates always agree. Thus no two-point tuple is shattered and $\operatorname{VCdim}(H)=1$. [F1, step 1.1]

3.1 On $m$ distinct natural numbers, the traces are the empty vector and the $m$ vectors with exactly one positive coordinate, so there are $m+1$. If a tuple repeats values, its trace is determined by its $r\le m$ distinct values and has at most $r+1\le m+1$ patterns. The empty tuple has one trace. Therefore $\Pi_H(m)=m+1$ for every $m\ge0$. [F2, step 2.1, algebra] ∎
