---
id: ex-diagonal-cartan-subalgebra-and-roots-of-sl-n
kind: example
title: Diagonal Cartan subalgebra and roots of sl_n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Example 19.14"
landmark: false
proof_strategy: direct
---

## Example

For $n\ge2$ let $\mathfrak{sl}_n(\mathbb C)=\{X\in M_n(\mathbb C):\operatorname{tr}X=0\}$
be the Lie algebra of traceless complex $n\times n$ matrices under the
commutator, so that $n=2$ recovers
[[def-special-linear-lie-algebra-sl-two]]. Let
$\mathfrak h=\{\operatorname{diag}(x_1,\dots,x_n):\textstyle\sum_ix_i=0\}$ be
the diagonal traceless subalgebra, and let
$\varepsilon_i\in\mathfrak h^*$ be the restriction of the coordinate
functional $H\mapsto x_i$. Then $\mathfrak h$ is a Cartan subalgebra of
$\mathfrak{sl}_n(\mathbb C)$, the roots are the functionals
$\varepsilon_i-\varepsilon_j$ with $i\ne j$, and the corresponding root spaces
are the lines
$$\mathfrak g_{\varepsilon_i-\varepsilon_j}=\mathbb CE_{ij},$$
so $\Phi=\{\varepsilon_i-\varepsilon_j:i\ne j\}$ has $n(n-1)$ elements.

## Facts & Assumptions

**Given:** The integers $n\ge2$, the Lie algebra $\mathfrak{sl}_n(\mathbb C)$ of traceless matrices under the commutator, its diagonal traceless subalgebra $\mathfrak h$, the matrix units $E_{ij}$, and the root spaces of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]; nilpotence and normalizers are those of [[def-cartan-subalgebra-of-a-lie-algebra]] and [[def-normalizer-of-a-lie-subalgebra]], and the maximal-toral description of Cartan subalgebras is [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]].

## Verification

**Proof technique:** direct.

1.1 $\mathfrak h$ is a Cartan subalgebra: it is abelian, hence nilpotent, and its normalizer is itself. Indeed if $X=\sum_{ab}x_{ab}E_{ab}$ satisfies $[X,H]\in\mathfrak h$ for every diagonal traceless $H$, take $H=\operatorname{diag}(1,2,\dots,n)-\frac{n+1}{2}I$, whose diagonal entries are pairwise distinct; then $[X,H]=\sum_{ab}(h_b-h_a)x_{ab}E_{ab}$ has no off-diagonal component, so $(h_b-h_a)x_{ab}=0$ and hence $x_{ab}=0$ whenever $a\ne b$. Thus $X$ is diagonal, and being in $\mathfrak{sl}_n$ it lies in $\mathfrak h$. [given, algebra]

1.2 For $H=\operatorname{diag}(x_1,\dots,x_n)\in\mathfrak h$ and a matrix unit $E_{ij}$ one computes $[H,E_{ij}]=(x_i-x_j)E_{ij}$; note $x_i-x_j$ depends only on $H$, so the functional $\varepsilon_i-\varepsilon_j$ on $\mathfrak h$ is well defined and $E_{ij}$ is a nonzero eigenvector for the eigenvalue $(\varepsilon_i-\varepsilon_j)(H)$. [given, algebra]

2.1 By [1.1] and [[def-cartan-subalgebra-of-a-lie-algebra]] the subalgebra $\mathfrak h$ is Cartan, and the root-space decomposition of [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]] applies. step 1.2 exhibits, for every pair $i\ne j$, the nonzero vector $E_{ij}\in\mathfrak g_{\varepsilon_i-\varepsilon_j}$; conversely every $H$-eigenvector in a fixed eigenspace is a linear combination of those $E_{ij}$ whose indices give that functional, and the functionals $\varepsilon_i-\varepsilon_j$ for distinct ordered pairs are distinct while the pairs with $i=j$ give $0$. Hence the roots are exactly the $n(n-1)$ functionals $\varepsilon_i-\varepsilon_j$, $i\ne j$, with one-dimensional root spaces $\mathbb CE_{ij}$. [given, step 1.1, step 1.2, algebra] ∎
