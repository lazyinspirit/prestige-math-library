---
id: ex-regular-and-singular-diagonal-elements-of-sl-n
kind: example
title: Regular and singular diagonal elements of sl_n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, prop-centralizer-dimension-from-vanishing-roots, def-regular-root-hyperplanes, cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra, def-regular-element-and-rank-of-a-complex-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Example 20.3"
landmark: false
proof_strategy: direct
---

## Example

In $\mathfrak{sl}_n(\mathbb C)$ with the diagonal Cartan subalgebra
$\mathfrak h$ of [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], an
element $H=\operatorname{diag}(x_1,\dots,x_n)\in\mathfrak h$ is a regular
element of $\mathfrak h$ in the sense of [[def-regular-root-hyperplanes]]
exactly when $x_i\ne x_j$ for all $i\ne j$, that is, when the eigenvalues are
pairwise distinct; otherwise $H$ is singular. The centralizer dimension is
$$\dim\mathfrak{sl}_n(\mathbb C)^H=(n-1)+\#\{(i,j):i\ne j,\ x_i=x_j\},$$
which equals the Cartan dimension $n-1$ exactly in the regular case.

## Facts & Assumptions

**Given:** The algebra $\mathfrak{sl}_n(\mathbb C)$ with diagonal Cartan subalgebra and roots $\varepsilon_i-\varepsilon_j$ as in [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], and the centralizer formula $\mathfrak g^H=\mathfrak h\oplus\bigoplus_{\alpha(H)=0}\mathfrak g_\alpha$ of [[prop-centralizer-dimension-from-vanishing-roots]] with the regular set of [[def-regular-root-hyperplanes]] and [[cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra]].

## Verification

**Proof technique:** direct.

1.1 The roots are $\varepsilon_i-\varepsilon_j$ with $i\ne j$, so $(\varepsilon_i-\varepsilon_j)(H)=x_i-x_j$; hence a root vanishes at $H$ exactly when $x_i=x_j$ for the corresponding pair. [given, algebra]

2.1 By [[prop-centralizer-dimension-from-vanishing-roots]] the centralizer of $H$ is $\mathfrak h\oplus\bigoplus_{\alpha(H)=0}\mathfrak g_\alpha$, and each root space is one-dimensional, so $\dim\mathfrak{sl}_n(\mathbb C)^H=(n-1)+\#\{i\ne j:x_i=x_j\}$. [given, step 1.1, algebra]

3.1 Therefore $H$ is regular in $\mathfrak h$, equivalently $\mathfrak{sl}_n(\mathbb C)^H=\mathfrak h$, exactly when no root vanishes at $H$, that is, when all the $x_i$ are distinct; this matches the general description of [[cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra]], whose regular set is the complement of the hyperplanes $x_i=x_j$. [given, step 2.1, algebra]

4.1 The eigenvalue condition is intrinsic to the diagonal matrix: $\operatorname{diag}(x_1,\dots,x_n)$ has the $x_i$ as eigenvalues with multiplicity, so pairwise distinct coordinates are exactly pairwise distinct eigenvalues. The stated dimension formula and the identification of the regular case with centralizer dimension $n-1$ follow. [given, step 1.1, step 2.1, algebra] ∎
