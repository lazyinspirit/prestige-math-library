---
id: def-g-linearization-of-an-invertible-sheaf
kind: definition
title: G-linearizations of invertible sheaves on a complex G-variety
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps: [def-rational-action-on-affine-variety, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-invertible-sheaf, def-morphism-locally-ringed-spaces]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, Definitions 1.28, 1.30, 1.33, Lemma 1.34, Propositions 1.29, 1.31 and 1.35, Examples 1.32, printed pp. 10-13 (PDF pp. 11-14)"
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 1 Sections 1.3-1.4, Lecture 3 Sections 3.2-3.5 (linearisation of a line bundle, Theorem 3.4), Example 3.3 and Example 4.1"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Sections 5.1-5.5 (linearisations, remarks on twisting by characters), Remark 5.20"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapters 7.1 (G-linearization of a line bundle, printed pp. 103-105) and 8.1 (printed p. 115)"
---

## Definition

Let $G$ be a complex affine algebraic group acting algebraically on a classical complex variety $X$ ([[def-rational-action-on-affine-variety]], [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]), and let $L$ be an invertible sheaf on $X$ with total space $p:L\to X$ ([[def-invertible-sheaf]]), the total space being obtained by gluing $U\times\mathbb A^1$ over local frames of $L$ using their invertible regular transition functions, and the projection being a morphism of locally ringed spaces ([[def-morphism-locally-ringed-spaces]]). Write $\sigma:G\times X\to X$ for the action.

A **$G$-linearization** of $L$ is an algebraic $G$-action $m:G\times L\to L$ on the total space such that

- $p(m(g,\ell))=g\,p(\ell)$ for all $g\in G$, $\ell\in L$, and
- for every $g\in G$ and $x\in X$ the fibre map $L_x\to L_{gx}$, $\ell\mapsto g\ell$, is $\mathbb C$-linear.

A **$G$-linearized invertible sheaf** is an invertible sheaf together with a linearization; the pair is written $(L,m)$. Equivalently, a linearization is an isomorphism $\varphi:\sigma^*L\to \mathrm{pr}_2^*L$ of sheaves on $G\times X$ satisfying the cocycle identity

$$\mathrm{pr}_{23}^*\varphi\circ(\mathrm{id}_G\times\sigma)^*\varphi=(m_G\times\mathrm{id}_X)^*\varphi,$$

where $m_G:G\times G\to G$ is the multiplication; at $(g,h,x)$ both sides map the fibre $L_{ghx}$ to $L_x$. The isomorphism $\varphi$ sends a vector over $gx$ to its translate by $g^{-1}$ over $x$, so its inverse recovers the action on total spaces.

For any algebraic character $\chi:G\to\mathbf G_m=\mathbb C^\times$ the **twist** $(L,m)_\chi$ multiplies the fibre action by $\chi(g)$ and is again a linearization of the same invertible sheaf. In particular linearizations are not unique, the trivial action admits the trivial linearization of $\mathcal O_X$ and its twists, and for a finite-dimensional rational $G$-module $V$ the induced action on the tautological line bundle linearizes $\mathcal O_{\mathbf P(V)}(-1)$, and its dual linearizes $\mathcal O_{\mathbf P(V)}(1)$.

The two main theorems of this page always assume that a linearization is given; no general existence of linearizations is claimed here.
