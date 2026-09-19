---
id: ex-classical-root-systems-in-euclidean-coordinates
kind: example
title: Classical root systems in coordinates
status: draft
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
---

## Example

For $n\ge2$, in the standard coordinates $\varepsilon_1,\dots,\varepsilon_n$ of
$\mathbb R^{n}$ (and the sum-zero hyperplane for type $A$):
$$A_{n-1}=\{\varepsilon_i-\varepsilon_j:i\ne j\},\qquad B_n=\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},$$
$$C_n=\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},\qquad D_n=\{\pm\varepsilon_i\pm\varepsilon_j:i<j\}.$$
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
