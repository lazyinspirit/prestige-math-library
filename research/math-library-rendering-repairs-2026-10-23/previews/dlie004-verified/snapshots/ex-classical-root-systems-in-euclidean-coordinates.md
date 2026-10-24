---
id: ex-classical-root-systems-in-euclidean-coordinates
kind: example
title: Classical root systems in coordinates
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system, prop-root-systems-of-the-classical-complex-lie-algebras]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50), printed pp. 150 and 155"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Example 21.18"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

For $n\ge2$, in the standard coordinates $\varepsilon_1,\dots,\varepsilon_n$ of
$\mathbb R^{n}$ (and the sum-zero hyperplane for type $A$):

$$
A_{n-1}=\{\varepsilon_i-\varepsilon_j:i\ne j\},\qquad B_n=\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},
$$

$$
C_n=\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},\qquad D_n=\{\pm\varepsilon_i\pm\varepsilon_j:i<j\}.
$$

Each is a reduced crystallographic Euclidean root system with the standard
simple roots and Dynkin diagram, and each is the root system computed from the
corresponding classical matrix Lie algebra.

## Facts & Assumptions

**Given:** An integer $n\ge2$, the standard orthonormal basis $\varepsilon_1,\dots,\varepsilon_n$ of $\mathbb R^{n}$, and the four displayed sets.

[L1] A reduced crystallographic root system is a finite spanning set of nonzero vectors that is closed under its root reflections, has integral Cartan integers, and meets each root line in exactly the two signs ([[def-reduced-crystallographic-euclidean-root-system]]).

[L2] The root systems of the classical matrix Lie algebras with diagonal Cartan subalgebras are these same sets, with one-dimensional root spaces ([[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L3] In the cited coordinate models, the standard simple roots are $\varepsilon_i-\varepsilon_{i+1}$ for $A_{n-1}$; $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-1}-\varepsilon_n,\varepsilon_n$ for $B_n$; $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-1}-\varepsilon_n,2\varepsilon_n$ for $C_n$; and, for $D_n$ with $n\ge3$, $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-2}-\varepsilon_{n-1},\varepsilon_{n-1}-\varepsilon_n,\varepsilon_{n-1}+\varepsilon_n$. For $D_2$ the two simple roots are $\varepsilon_1-\varepsilon_2$ and $\varepsilon_1+\varepsilon_2$.

## Verification

**Proof technique:** direct.

1.1 Each set is finite, omits $0$, and is reduced. The differences $\varepsilon_i-\varepsilon_n$ span the sum-zero hyperplane for $A_{n-1}$; $B_n$ and $C_n$ contain a nonzero multiple of every coordinate vector; and in $D_n$, $(\varepsilon_i+\varepsilon_j)+(\varepsilon_i-\varepsilon_j)=2\varepsilon_i$ for any $j\ne i$, which exists because $n\ge2$. Thus each set spans its stated Euclidean space. [L1, algebra]

1.2 Reflection closure: $s_{\varepsilon_i}$ and $s_{2\varepsilon_i}$ negate the $i$th coordinate and preserve $B_n,C_n,D_n$; $s_{\varepsilon_i-\varepsilon_j}$ swaps coordinates $i,j$ and preserves all four sets; and $s_{\varepsilon_i+\varepsilon_j}$ swaps and negates those two coordinates and preserves $B_n,C_n,D_n$. These are precisely the root reflections that occur in the displayed sets. [L1, algebra]

2.1 Integrality: proportional pairs give Cartan integer $\pm2$. For nonproportional pairs, roots of squared length $2$ pair by $0$ or $\pm1$; a short root of squared length $1$ in $B_n$ pairs by $0$ or $\pm1$; and a long root $2\varepsilon_i$ of squared length $4$ in $C_n$ pairs with a mixed root by $0$ or $\pm2$. Hence every Cartan integer is in $\{0,\pm1,\pm2\}$. Together with steps 1.1 and 1.2, [L1] proves that all four displayed sets are reduced crystallographic root systems. [L1, step 1.1, step 1.2, algebra]

3.1 The listed simple roots of [L3] have the standard Cartan matrices of $A_{n-1},B_n,C_n,D_n$ (with $D_2=A_1\sqcup A_1$), giving the stated Dynkin diagrams; and [L2] identifies these coordinate sets as the root systems of $\mathfrak{sl}_n,\mathfrak{so}_{2n+1},\mathfrak{sp}_{2n},\mathfrak{so}_{2n}$ respectively. [L2, L3, step 2.1, algebra] ∎

## Remarks

The following Dynkin schematics use the simple roots of [L3], numbered in their
listed order. For $A_{n-1}$, $\alpha_i=\varepsilon_i-\varepsilon_{i+1}$.
For $B_n$ and $C_n$ the same formula holds for $i<n$, with
$\alpha_n=\varepsilon_n$ and $\alpha_n=2\varepsilon_n$, respectively.
For $D_n$, $\alpha_i=\varepsilon_i-\varepsilon_{i+1}$ for $i<n$ and
$\alpha_n=\varepsilon_{n-1}+\varepsilon_n$.
The schematics are drawn for $n\ge5$; dots abbreviate intermediate chain
vertices. An arrow on a double edge points toward the shorter simple root.

```tikz
\begin{tikzpicture}[scale=1.05]
\node at (-1,0) {$A_{n-1}$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_1$] (a1) at (0,0) {};
\node at (1.3,0) {$\cdots$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_{n-2}$] (a2) at (2.6,0) {};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_{n-1}$] (a3) at (3.9,0) {};
\draw (a1) -- (.9,0); \draw (1.7,0) -- (a2) -- (a3);
\node at (-1,-1.3) {$B_n$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_1$] (b1) at (0,-1.3) {};
\node at (1.3,-1.3) {$\cdots$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_{n-1}$] (b2) at (2.6,-1.3) {};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_n$] (b3) at (3.9,-1.3) {};
\draw (b1) -- (.9,-1.3); \draw (1.7,-1.3) -- (b2);
\draw (2.68,-1.24) -- (3.82,-1.24);
\draw (2.68,-1.36) -- (3.82,-1.36);
\draw (3.12,-1.10) -- (3.36,-1.30) -- (3.12,-1.50);
\node at (-1,-2.6) {$C_n$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_1$] (c1) at (0,-2.6) {};
\node at (1.3,-2.6) {$\cdots$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_{n-1}$] (c2) at (2.6,-2.6) {};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_n$] (c3) at (3.9,-2.6) {};
\draw (c1) -- (.9,-2.6); \draw (1.7,-2.6) -- (c2);
\draw (2.68,-2.54) -- (3.82,-2.54);
\draw (2.68,-2.66) -- (3.82,-2.66);
\draw (3.38,-2.40) -- (3.14,-2.60) -- (3.38,-2.80);
\node at (-1,-4) {$D_n$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_1$] (d1) at (0,-4) {};
\node at (1.3,-4) {$\cdots$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_{n-2}$] (d2) at (2.6,-4) {};
\node[circle,draw,inner sep=2pt,label=right:$\alpha_{n-1}$] (d3) at (3.9,-3.5) {};
\node[circle,draw,inner sep=2pt,label=right:$\alpha_n$] (d4) at (3.9,-4.5) {};
\draw (d1) -- (.9,-4); \draw (1.7,-4) -- (d2) -- (d3); \draw (d2) -- (d4);
\end{tikzpicture}
```

The smaller ranks are obtained by shortening the chains, with $A_1$ a single
vertex. In $D_3$ the chain is $\alpha_2-\alpha_1-\alpha_3$; in $D_4$ the
fork vertex is $\alpha_2$. In $D_2$, the roots
$\alpha_1=\varepsilon_1-\varepsilon_2$ and
$\alpha_2=\varepsilon_1+\varepsilon_2$ are orthogonal, so its two vertices
are disconnected:

```tikz
\begin{tikzpicture}
\node at (-1,0) {$D_2$};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_1$] at (0,0) {};
\node[circle,draw,inner sep=2pt,label=below:$\alpha_2$] at (1.5,0) {};
\end{tikzpicture}
```

Indeed, the adjacent difference roots have squared length $2$ and inner product
$-1$. The last $B_n$ pair has squared lengths $2,1$ and inner product $-1$;
the last $C_n$ pair has squared lengths $2,4$ and inner product $-2$.
For $D_n$, both fork edges have inner product $-1$, while the two terminal
roots are orthogonal. Thus the double edges point in opposite directions in
$B_n$ and $C_n$, and the $D_n$ fork has only single edges, as in step 3.1.
The verification above is independent of these illustrations.
