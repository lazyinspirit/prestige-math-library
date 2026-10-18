---
id: lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values
kind: lemma
title: 'A $C^1$ map from $\mathbb R^2$ to $\mathbb R$ with an interval of critical values'
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces,
       def-null-subset-of-a-smooth-manifold,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold,
       thm-whitney-extension-for-finite-order-euclidean-jets,
       thm-nested-interval-property,
       lem-geometric-sequence-null,
       def-cantor-set,
       thm-cantor-set-ternary-description,
       def-series,
       lem-series-linearity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes, §3.2"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Theorem 2.1"
      url: "https://arxiv.org/pdf/1511.05822"
---

## Statement

There is a map $F\in C^1(\mathbb R^2,\mathbb R)$ whose $C^1$ critical-value
set contains the interval $[0,2]$. In particular, that critical-value set is
not Euclidean null.

## Finite-stage picture

The rows show the retained intervals in the first two stages of $K$ and $C$;
the source and target branches carry the same binary labels. The diagram only
illustrates those finite stages. The proof uses the exact interval lengths and
coding estimates in step 1.1, not the drawing.

```tikz
\begin{tikzpicture}[x=5cm,y=0.65cm]
\node[left] at (0,4) {$K_0$};
\draw[very thick] (0,4)--(1,4);
\node[left] at (0,3) {$K_1$};
\draw[very thick] (0,3)--(0.4,3) (0.6,3)--(1,3);
\node[left] at (0,2) {$K_2$};
\draw[very thick] (0,2)--(0.16,2) (0.24,2)--(0.4,2)
  (0.6,2)--(0.76,2) (0.84,2)--(1,2);
\node[left] at (0,0) {$C_0$};
\draw[very thick] (0,0)--(1,0);
\node[left] at (0,-1) {$C_1$};
\draw[very thick] (0,-1)--(0.333333,-1) (0.666667,-1)--(1,-1);
\node[left] at (0,-2) {$C_2$};
\draw[very thick] (0,-2)--(0.111111,-2) (0.222222,-2)--(0.333333,-2)
  (0.666667,-2)--(0.777778,-2) (0.888889,-2)--(1,-2);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The Euclidean $C^1$ critical-value convention in [F1] and the
single-chart nullity convention in [F3].

[F1] For a $C^1$ map, critical points are exactly those where its total
derivative does not map onto the target, and the critical-value set is their image
([[def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces]]).

[F2] Compatible finite-order polynomial jets on a closed Euclidean set have a
$C^1$ extension with the prescribed Taylor polynomials
([[thm-whitney-extension-for-finite-order-euclidean-jets]]).

[F3] For the single-chart atlas $\{(\mathbb R,\operatorname{id})\}$,
manifold-nullity is exactly Euclidean nullity
([[def-null-subset-of-a-smooth-manifold]]).

[F4] Nested nonempty closed bounded intervals whose lengths tend to zero have
a unique common point ([[thm-nested-interval-property]]).

[F5] If $|q|<1$, then $q^n\to0$ ([[lem-geometric-sequence-null]]).

[F6] The standard middle-thirds set $C$ is contained in $[0,1]$, each
length-$k$ digit cylinder lies in a closed interval of length $3^{-k}$, and
binary sequences $\epsilon_j\in\{0,1\}$ correspond bijectively to its points
by $c=\sum_{j=1}^{\infty}2\epsilon_j/3^j$
([[def-cantor-set]], [[thm-cantor-set-ternary-description]]).

[F7] A convergent series is the limit of its partial sums, and convergent
series add and scale termwise ([[def-series]], [[lem-series-linearity]]).

[L1] A null subset of $\mathbb R$ for a fixed smooth atlas has dense complement
([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Proof

1.1 Put $p=2/5$, start with $K_0=[0,1]$, and replace each level-$n$ closed interval $[a,b]$ by its left and right closed subintervals of relative length $p$; let $K$ be the intersection of the resulting finite unions. Each stage is closed, so $K$ is closed. Every binary word $\epsilon_1\ldots\epsilon_n$ determines a closed interval of length $p^n$. For each infinite binary sequence these intervals are nested and their lengths tend to zero by [F5], so [F4] gives a unique point in their intersection. Conversely the two children of every interval are separated by a positive gap, so each point of $K$ determines a unique branch at every level. The code map is therefore a bijection from binary sequences to $K$; the level-$n$ interval for a code has left endpoint $\sum_{j=1}^n(1-p)\epsilon_jp^{j-1}$ and length $p^n$, so the point differs from that partial sum by at most $p^n\to0$ and hence is $x=\sum_{j=1}^{\infty}(1-p)\epsilon_jp^{j-1}$. By [F6], matching these digits defines a bijection $h:K\to C$ by $h(x)=\sum_{j=1}^{\infty}2\epsilon_j/3^j$. If distinct $x,y\in K$ first differ after a common prefix of length $k$, their source intervals are separated by at least $(1-2p)p^k=\tfrac15(\tfrac25)^k$, while their images lie in one target interval of length $3^{-k}$. Hence $|h(x)-h(y)|/|x-y|\le5(5/6)^k$. For every $N$, if $k\le N$ the source gap is at least $(1-2p)p^N$, so $|x-y|<(1-2p)p^N$ forces $k>N$; thus the ratio tends to zero uniformly on $K$. [F4, F5, F6, given, construct, algebra]

2.1 For each $a\in K$ prescribe the constant polynomial $P_a(t)=h(a)$. For order $r=1$, the Whitney compatibility condition for $|\alpha|=0$ is exactly the estimate from step 1.1; for $|\alpha|=1$ both derivatives of these polynomials are zero, which is the required $o(1)$ condition. Therefore [F2] supplies a map $g\in C^1(\mathbb R,\mathbb R)$ with $g(a)=h(a)$ and $g'(a)=0$ for every $a\in K$. [F2, step 1.1, construct]

3.1 Define $F(x,y)=g(x)+g(y)$. For increments $(u,v)$, subtracting the candidate linear map $L_{(x,y)}(u,v):=g'(x)u+g'(y)v$ leaves the sum of the one-variable remainders $g(x+u)-g(x)-g'(x)u=o(|u|)$ and $g(y+v)-g(y)-g'(y)v=o(|v|)$. Since $|u|+|v|\le\sqrt2\sqrt{u^2+v^2}$, the total remainder is $o(\sqrt{u^2+v^2})$; hence $DF_{(x,y)}=L_{(x,y)}$, and this derivative is continuous because $g'$ is continuous. Thus $F\in C^1(\mathbb R^2,\mathbb R)$. On $K\times K$ its derivative is the zero linear map $\mathbb R^2\to\mathbb R$, which is not onto, so [F1] makes every point there critical. Since $h[K]=C$ by step 1.1, $F(K\times K)=C+C$. [F1, step 1.1, step 2.1, given, algebra]

4.1 Fix $u\in[0,1]$, set $r_0=u$, and recursively define digits $d_j\in\{0,1,2\}$ and remainders $r_j\in[0,1]$: if $0\le r_{j-1}\le1/3$, take $(d_j,r_j)=(0,3r_{j-1})$; if $1/3<r_{j-1}\le2/3$, take $(1,3r_{j-1}-1)$; if $2/3<r_{j-1}\le1$, take $(2,3r_{j-1}-2)$. These exhaustive cases keep $r_j$ in $[0,1]$ and give $r_{j-1}=(d_j+r_j)/3$. At $n=0$, $u=r_0$; substituting this recurrence proves by induction that $u=\sum_{j=1}^n d_j/3^j+r_n/3^n$ for every $n$. Since $0\le r_n\le1$ and $(1/3)^n\to0$ by [F5], the partial sums converge to $u$, hence represent it by [F7]. Apply this to $u=t/2$ for any $t\in[0,2]$, and choose $(\epsilon_j,\delta_j)=(0,0),(1,0),(1,1)$ when $d_j=0,1,2$, respectively. By [F6], $a=\sum_{j=1}^{\infty}2\epsilon_j/3^j$ and $b=\sum_{j=1}^{\infty}2\delta_j/3^j$ lie in $C$, and [F7] gives $a+b=\sum_{j=1}^{\infty}2d_j/3^j=2u=t$. Thus $[0,2]\subseteq C+C$; the reverse inclusion follows from $C\subseteq[0,1]$ in [F6]. Step 3.1 now shows $[0,2]\subseteq\operatorname{CV}_{C^1}(F)$. [F5, F6, F7, step 3.1, given, construct, algebra]

5.1 If the critical-value set were Euclidean null, [F3] would make it null for the single-chart atlas of $\mathbb R$, and [L1] would make its complement dense. Step 4.1 shows that its complement misses the nonempty open interval $(0,2)$, a contradiction. Thus the critical-value set is not null. [F3, L1, step 4.1, contradiction] ∎
