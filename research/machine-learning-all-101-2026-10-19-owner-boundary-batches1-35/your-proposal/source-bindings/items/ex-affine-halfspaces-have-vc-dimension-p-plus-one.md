---
id: ex-affine-halfspaces-have-vc-dimension-p-plus-one
kind: example
title: "Affine halfspaces in real p-space have VC dimension p plus one"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-shattered-set-and-vc-dimension
  - def-growth-function
  - def-linear-independence
  - lem-standard-basis-of-f-n
  - lem-independent-list-is-injective
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Example 3.12 and Theorem 3.13"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Example

Equip $\mathbb R^p$ with its Euclidean Borel sigma-algebra. For an integer $p\ge1$, let $H_p$ consist of the classifiers on $\mathbb R^p$ of the form $h_{w,b}(x)=1$ if and only if $w\cdot x+b\ge0$, with $w\in\mathbb R^p$ and $b\in\mathbb R$, where $w\cdot x:=\sum_{j=1}^p w_jx_j$. The sketch illustrates one labeling for $p=2$: the affine score $f(x_1,x_2)=1-2x_1-2x_2$ labels $0$ by $1$ and $e_1,e_2$ by $0$. The proof below handles arbitrary $p$ and all labelings algebraically; it does not rely on the sketch.

```tikz
\begin{tikzpicture}[baseline=-0.4ex,scale=1.1]
  \draw[->] (-0.2,0) -- (3,0) node[right] {$x_1$};
  \draw[->] (0,-0.2) -- (0,3) node[above] {$x_2$};
  \draw[thick] (1,0) -- (0,1) node[left] {$f=0$};
  \fill (0,0) circle (1.7pt) node[below left] {$0:1$};
  \fill (2,0) circle (1.7pt) node[below] {$e_1:0$};
  \fill (0,2) circle (1.7pt) node[left] {$e_2:0$};
  \node at (0.45,0.45) {$f\ge0$};
  \node at (1.8,1.8) {$f<0$};
\end{tikzpicture}
```

## Example references

[Mohri et al., Example 3.12 and Theorem 3.13](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): affine hyperplanes in $\mathbb R^p$ have VC dimension $p+1$.

## Facts & Assumptions

**Given:** The class $H_p$ of affine halfspace classifiers described in the Example.

[F1] A finite indexed tuple is shattered exactly when every binary labeling occurs. [[def-shattered-set-and-vc-dimension]]

[F2] For $k=p$ and $k=p+1$, the standard coordinate vectors $e_1,\ldots,e_k$ form a basis of $\mathbb R^k$ and every vector is its coordinate linear combination. [[lem-standard-basis-of-f-n]]

[F3] Every linearly independent subset of $\mathbb R^{p+1}$ has at most $p+1$ elements, because the $p+1$ standard coordinate vectors span that space. [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]

[F4] A finite list is linearly independent exactly when it is injective and its image is a linearly independent subset. [[lem-independent-list-is-injective]]

[F5] A finite list is linearly dependent exactly when it has a scalar relation equal to zero with at least one nonzero coefficient. [[def-linear-independence]]

## Verification

1.1 The $p+1$ points $0,e_1,\ldots,e_p$ are shattered. Given arbitrary labels $y_0,\ldots,y_p\in\{0,1\}$, set $s_i=2y_i-1$, $b=s_0$, and $w_i=s_i-s_0$. The affine score $f(x)=w\cdot x+b$ then satisfies $f(0)=s_0$ and $f(e_i)=s_i$; since these values are $+1$ or $-1$, the rule $h(x)=\mathbf1\{f(x)\ge0\}$ realizes exactly the chosen labels. Thus the VC dimension is at least $p+1$. [F1, F2, given, construct]

1.2 Take any $p+2$ indexed points $x_1,\ldots,x_{p+2}\in\mathbb R^p$. The augmented vectors $(x_i,1)\in\mathbb R^{p+1}$ form a list of $p+2$ vectors. If the list were linearly independent, [F4] would make its image a linearly independent set of $p+2$ distinct vectors, contradicting [F3]. [F3, F4] Hence the list is dependent, and [F5] gives real coefficients $a_i$, not all zero, with $\sum_i a_i(x_i,1)=0$, equivalently $\sum_i a_ix_i=0$ and $\sum_i a_i=0$. Both positive and negative coefficients occur. Label $x_i$ by $1$ when $a_i>0$ and by $0$ when $a_i<0$ (choose either label when $a_i=0$). If an affine score $f(x)=w\cdot x+b$ realized this labeling, then $a_if(x_i)\ge0$ for every positive coefficient and $a_if(x_i)>0$ for every negative coefficient, because label $0$ means $f(x_i)<0$. Therefore $\sum_i a_if(x_i)>0$, contradicting $\sum_i a_if(x_i)=w\cdot\sum_i a_ix_i+b\sum_i a_i=0$. No $p+2$-tuple is shattered, so the VC dimension is at most $p+1$. [F1, F3, F4, F5, given, choose, construct, algebra]

2.1 Steps 1.1 and 1.2 give matching lower and upper bounds, proving $\operatorname{VCdim}(H_p)=p+1$. [step 1.1, step 1.2] ∎
