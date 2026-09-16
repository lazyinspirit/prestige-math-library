---
id: ex-classical-root-systems-in-euclidean-coordinates
kind: example
title: Classical root systems in coordinates
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-existence-of-each-classified-root-system, prop-root-systems-of-the-classical-complex-lie-algebras]
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

In the standard coordinates $\varepsilon_1,\dots,\varepsilon_n$ of
$\mathbb R^{n}$ (and the sum-zero hyperplane for type $A$):
$$A_{n-1}=\{\varepsilon_i-\varepsilon_j:i\ne j\},\qquad B_n=\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},$$
$$C_n=\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_i\pm\varepsilon_j:i<j\},\qquad D_n=\{\pm\varepsilon_i\pm\varepsilon_j:i<j\}.$$
Each is a reduced crystallographic Euclidean root system with the standard
simple roots and Dynkin diagram, and each is the root system computed from the
corresponding classical matrix Lie algebra.

## Facts & Assumptions

**Given:** The standard orthonormal basis $\varepsilon_1,\dots,\varepsilon_n$ of $\mathbb R^{n}$ and the four displayed sets.

[L1] The displayed sets are reduced crystallographic root systems of types $A_{n-1},B_n,C_n,D_n$, constructed and verified in [[thm-existence-of-each-classified-root-system]]. [L1]

[L2] The root systems of the classical matrix Lie algebras with diagonal Cartan subalgebras are these same sets, with one-dimensional root spaces ([[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L3] The standard simple roots are $\varepsilon_i-\varepsilon_{i+1}$ for $A_{n-1}$; $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-1}-\varepsilon_n,\varepsilon_n$ for $B_n$; $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-1}-\varepsilon_n,2\varepsilon_n$ for $C_n$; and $\varepsilon_1-\varepsilon_2,\dots,\varepsilon_{n-2}-\varepsilon_{n-1},\varepsilon_{n-1}-\varepsilon_n,\varepsilon_{n-1}+\varepsilon_n$ for $D_n$ ([[thm-existence-of-each-classified-root-system]]).

## Verification

**Proof technique:** direct.

1.1 Each set is finite, spans its Euclidean space, omits $0$, and is reduced: the roots $\varepsilon_i-\varepsilon_j$ and $\varepsilon_i\pm\varepsilon_j$ generate lines containing only their two signs, and the same holds for $\pm2\varepsilon_i$ and $\pm\varepsilon_i$. [L1, algebra]

1.2 Reflection closure: $s_{\varepsilon_i}$ and $s_{2\varepsilon_i}$ negate the $i$-th coordinate, $s_{\varepsilon_i-\varepsilon_j}$ swaps coordinates $i,j$, and $s_{\varepsilon_i+\varepsilon_j}$ swaps and negates them; each operation permutes the four displayed sets. [L1, algebra]

1.3 Integrality: with squared lengths $2$ (for $\varepsilon_i-\varepsilon_j,\varepsilon_i\pm\varepsilon_j$), $1$ (for $\pm\varepsilon_i$) and $4$ (for $\pm2\varepsilon_i$), the inner products of roots are $0,\pm1,\pm2$, so the Cartan integers $2(\beta,\alpha)/(\alpha,\alpha)$ lie in $\{0,\pm1,\pm2\}$ for every pair. [L1, algebra]

2.1 The listed simple roots of [L3] have the standard Cartan matrices of $A_{n-1},B_n,C_n,D_n$, giving the Dynkin diagrams of the classification; and by [L2] these are the root systems of $\mathfrak{sl}_n,\mathfrak{so}_{2n+1},\mathfrak{sp}_{2n},\mathfrak{so}_{2n}$ respectively. [L2, L3, algebra] ∎
