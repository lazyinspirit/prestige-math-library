---
id: lem-l-class-of-complex-projective-space
kind: lemma
title: "The total L-class of complex projective space is a power of $x/\\tanh x$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 4
deps:
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - def-total-l-class-of-a-smooth-manifold
  - lem-l-polynomials-form-a-well-defined-multiplicative-sequence
  - def-hirzebruch-l-polynomials
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - def-complex-projective-bundle-and-tautological-complex-line
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 225-226: $p(\\mathbb{CP}^{2k})=(1+a^2)^{2k+1}$ and $L(p)=(a/\\tanh a)^{2k+1}$"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 36: $p(\\tau\\mathbb{CP}^{2n})=(1+x^2)^{2n+1}$ and $L(1+x^2)=x/\\tanh x$"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Propositions 8.2 and 8.8, printed pp. 67-68: the stable splitting of the tangent bundle and the resulting power of $y/\\tanh y$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $\gamma\to\mathbb{CP}^n$ be the tautological complex line and
$y=c_1(\gamma^*)\in H^2(\mathbb{CP}^n;\mathbb Z)$ the standard generator with
$H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[y]/(y^{n+1})$ and
$\langle y^n,[\mathbb{CP}^n]\rangle=1$
([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]), and give
$\mathbb{CP}^n$ its complex orientation. Then in $H^{4*}(\mathbb{CP}^n;\mathbb Q)$,
$$L(T\mathbb{CP}^n)=Q(y)^{n+1}=\Bigl(\frac{y}{\tanh y}\Bigr)^{n+1}.$$
Its degree-$4j$ component is $c_jy^{2j}$ with
$c_j=\sum_{i_1+\cdots+i_{n+1}=j}q_{2i_1}\cdots q_{2i_{n+1}}
=[y^{2j}](y/\tanh y)^{n+1}$, the multinomial coefficient sum; for $j=1$
this is $(n+1)q_2$.

## Facts & Assumptions

**Given:** AC, the tautological line $\gamma\to\mathbb{CP}^n$, the generator $y=c_1(\gamma^*)$, and the complex orientation.

[F1] The total L-class of a smooth manifold is $L(M)=L(TM)\in\widehat H^{4*}(M;\mathbb Q)$, with degree-$4j$ component $L_j(TM)$, and $L$ of a bundle is a polynomial in its Pontryagin classes ([[def-total-l-class-of-a-smooth-manifold]], [[def-hirzebruch-l-polynomials]]).

[F2] $L$ is stable, multiplicative and natural, and for a complex line bundle $\ell$ with $c_1(\ell)=t$ the underlying real L-class is $L(\ell_{\mathbb R})=Q(t)=t/\tanh t$ ([[lem-l-polynomials-form-a-well-defined-multiplicative-sequence]]).

[F3] The in-run supplier establishes the complex bundle isomorphism $\underline{\mathbb C}\oplus T\mathbb{CP}^n\cong(\gamma^*)^{\oplus(n+1)}$ and $p(T\mathbb{CP}^n)=(1+y^2)^{n+1}$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[F4] The projective tangent-bundle supplier gives $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[y]/(y^{n+1})$ for $y=c_1(\gamma^*)$ and $\langle y^n,[\mathbb{CP}^n]\rangle=1$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]). Rational coefficient change gives the same truncated ring over $\mathbb Q$: the integral groups are finite free, and the universal coefficient sequence identifies both coefficient groups with duals of the integral homology free quotients. Thus $H^{4j}(\mathbb{CP}^n;\mathbb Q)=\mathbb Q y^{2j}$ for $2j\le n$ and is zero otherwise ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[F5] For a complex line bundle, the Euler class of the underlying oriented real bundle is the first Chern class ([[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F6] $Q(u)=\sum_{j\ge0}q_{2j}u^{2j}$ with $q_0=1$ ([[def-hirzebruch-l-polynomials]]).

## Proof

**Proof technique:** direct; split the stable tangent bundle and apply the rank-two evaluation.

1.1 Step [F3] gives a complex bundle isomorphism $\underline{\mathbb C}\oplus T\mathbb{CP}^n\cong(\gamma^*)^{\oplus(n+1)}$. Since $L$ is computed from Pontryagin classes and is therefore unchanged under bundle isomorphism, and since $L$ is stable, $L(T\mathbb{CP}^n)=L(T\mathbb{CP}^n\oplus\underline{\mathbb C})=L\bigl((\gamma^*)^{\oplus(n+1)}\bigr)$ in the completed ring of $\mathbb{CP}^n$. [given, F1, F2, F3]

1.2 The dual tautological bundle $\gamma^*$ is a complex line bundle with $c_1(\gamma^*)=y$ by [F4], so by [F5] its underlying oriented real bundle has Euler class $y$ and the complex-line clause of [F2] gives $L(\gamma^*_{\mathbb R})=Q(y)=y/\tanh y$. [given, F2, F4, F5]

2.1 By multiplicativity in [F2], applied $(n+1)$ times to the Whitney sum of copies of $\gamma^*_{\mathbb R}$, $L\bigl((\gamma^*)^{\oplus(n+1)}\bigr)=L(\gamma^*)^{\,n+1}=Q(y)^{n+1}=(y/\tanh y)^{n+1}$. [step 1.1, step 1.2, F2]

3.1 Degree components: writing $Q(y)^{n+1}=\bigl(\sum_{i\ge0}q_{2i}y^{2i}\bigr)^{n+1}$ and extracting coefficients first in the formal indeterminate $y$ and then reducing modulo $y^{n+1}$ by [F4], the degree-$4j$ component is the multinomial sum $c_jy^{2j}$ with $c_j=\sum_{i_1+\cdots+i_{n+1}=j}q_{2i_1}\cdots q_{2i_{n+1}}=[y^{2j}]Q(y)^{n+1}$, because a product of $n+1$ factors of weights $4i_a$ has weight $4j$ exactly when $i_1+\cdots+i_{n+1}=j$; the case $j=1$ gives $c_1=(n+1)q_2$, and components with $2j>n$ vanish by [F4] and the convention on Pontryagin classes. Hence $L(T\mathbb{CP}^n)=Q(y)^{n+1}$ with the displayed components. [step 2.1, F4, F6, algebra] ∎
