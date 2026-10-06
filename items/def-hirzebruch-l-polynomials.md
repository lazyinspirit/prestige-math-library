---
id: def-hirzebruch-l-polynomials
kind: definition
title: "The Hirzebruch L-polynomials and the total L-class of a real vector bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-completed-fourfold-graded-cohomology-ring
  - def-elementary-symmetric-polynomials
  - def-formal-hyperbolic-tangent-series
  - def-formal-power-series-and-coefficient-extraction
  - def-pontryagin-classes-by-complexification
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-symmetric-polynomial
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-fundamental-theorem-of-symmetric-polynomials
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
justified_by:
  - lem-l-polynomials-form-a-well-defined-multiplicative-sequence
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 219-225: multiplicative sequences, Lemma 19.1 (existence and uniqueness belonging to a power series) and the displayed L-polynomials"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 35: the polynomials L_n as sums over partitions, with the first four listed"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "sections 7.6 and 8.1, printed pp. 65-68: the L-polynomial x/tanh x and its first expansion"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Work over $\mathbb Q$ with the series
$Q(x)=x/\tanh x=\sum_{j\ge0}q_{2j}x^{2j}$ of
[[def-formal-hyperbolic-tangent-series]], so that $q_0=1$ and, as recorded and
justified in that definition, $q_2=1/3$ and $q_4=-1/45$. Give the $i$-th
polynomial variable weight $4i$.

**The L-polynomials.** For each $k\ge0$ let
$$L_k\in\mathbb Q[p_1,p_2,p_3,\dots]$$
denote the polynomial, homogeneous of weight $4k$, characterized by the following condition: for every $N\ge1$ and all indeterminates
$x_1,\dots,x_N$, with $e_j$ the elementary symmetric polynomials
([[def-elementary-symmetric-polynomials]], [[def-symmetric-polynomial]]),
$$L_k\bigl(e_1(x_1^2,\dots,x_N^2),\dots,e_k(x_1^2,\dots,x_N^2)\bigr)=[\text{weight }4k]\prod_{i=1}^NQ(x_i).$$
Here $[\text{weight }4k]$ selects the homogeneous component of weight $4k$.

*Existence and uniqueness.* Give each $x_i$ weight $2$ and put $u_i=x_i^2$, of weight $4$. For $N\ge\max(1,k)$, the weight-$4k$ component of $\prod_iQ(x_i)$ is a symmetric polynomial of ordinary degree $k$ in the $u_i$. The fundamental theorem of symmetric polynomials ([[thm-fundamental-theorem-of-symmetric-polynomials]]) expresses it uniquely in $e_1(u),\dots,e_N(u)$. Since $e_j$ has ordinary degree $j$, uniqueness of homogeneous components makes this expression homogeneous of weighted degree $k$ and excludes every $e_j$ with $j>k$. Define $L_k$ using $N=\max(1,k)$. Setting additional roots to zero leaves the product unchanged because $Q(0)=1$; injectivity of substitution in at least $k$ variables shows that the same polynomial works for every larger $N$. Setting roots to zero then gives the identity for $N<k$ too, where $e_j=0$ for $j>N$; injectivity is asserted only when $N\ge k$. In particular $L_0=1$. For two variables the
weight-$4$ part of $Q(x_1)Q(x_2)$ is $q_2(x_1^2+x_2^2)=q_2e_1$, and its
weight-$8$ part is $q_4(x_1^4+x_2^4)+q_2^2x_1^2x_2^2$, which the identities
$x_1^4+x_2^4=e_1^2-2e_2$ and $x_1^2x_2^2=e_2$ rewrite as
$q_4(e_1^2-2e_2)+q_2^2e_2$; substituting $q_2=1/3$, $q_4=-1/45$ and the
corresponding powers of $p_1,p_2$ gives
$$L_1=\frac{p_1}{3},\qquad L_2=\frac{7p_2-p_1^2}{45}.$$

**The total L-class.** Assume AC ([[def-axiom-of-choice]]), inherited from
 the Pontryagin and Chern constructions, including their bundle and Thom
 suppliers; no claim is made that DC alone supplies those constructions.
 For a real vector bundle $E\to B$
of finite rank over a CW-type base with Pontryagin classes
$p_i(E)\in H^{4i}(B;\mathbb Z)$ of [[def-pontryagin-classes-by-complexification]],
regarded in rational cohomology, the **total L-class** is the element
$$L(E):=\bigl(L_k(p_1(E),\dots,p_k(E))\bigr)_{k\ge0}\in\widehat H^{4*}(B;\mathbb Q)$$
of the completed ring of [[def-completed-fourfold-graded-cohomology-ring]]; its
degree-$4k$ component is written $L_k(E):=L_k(p_1(E),\dots,p_k(E))$. The
sequence is well defined because each $L_k(p_1(E),\dots,p_k(E))$ is a class in
$H^{4k}(B;\mathbb Q)$ computed from the given Pontryagin classes, and
$p_i(E)=0$ whenever $2i>\operatorname{rank}E$
([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]), and if $B$ has a finite-dimensional CW model, its cohomology vanishes above that dimension, so only finitely many components are nonzero. The
coefficients $q_{2j}$ belong to $\mathbb Q$, so no integrality of $L(E)$ is
asserted; see [[def-formal-power-series-and-coefficient-extraction]] for the
coefficient notation. Naturality, stability and multiplicativity of $L$ are
*not* part of this definition; they are proved in the lemma named in
`justified_by`.
