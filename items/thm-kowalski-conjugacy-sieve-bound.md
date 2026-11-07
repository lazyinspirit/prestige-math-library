---
dependency_level: 2
id: thm-kowalski-conjugacy-sieve-bound
kind: theorem
title: "Large-sieve bound for finite-group conjugacy sieves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - lem-finite-large-sieve-sifted-density-bound
  - def-group
  - def-group-homomorphism
  - def-finite-cardinality
  - def-conjugacy-class-and-centralizer
  - def-irreducible-complex-character
  - def-character-of-a-complex-representation
  - def-class-function-and-the-space-of-complex-class-functions
  - def-standard-inner-product-on-complex-class-functions
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 3, §§3.1 and 3.5, Proposition 3.5, printed pp. 32–34, 42–43"
verification:
  precheck: pass
---

## Statement

Let $\Gamma$ be a group and $\Lambda$ an index set. For each
$\ell\in\Lambda$, let $\rho_\ell:\Gamma\to G_\ell$ be a surjective
homomorphism to a finite group. Let $X$ be finite with weights
$\mu(x)\ge0$, $\mu(X)>0$, let $F:X\to\Gamma$, and let
$L^*\subseteq\Lambda$ be finite. Let $\mathcal L$ be a nonempty finite family
of subsets of $L^*$. For each $\ell\in L^*$, choose one representative from
every equivalence class of irreducible complex representations of $G_\ell$.
For each $\ell\in L^*$, let $C_\ell\subseteq G_\ell$ be
a nonempty proper union of conjugacy classes, and put
$$S:=\{x\in X:\rho_\ell(F(x))\notin C_\ell\text{ for all }\ell\in L^*\}, \qquad H:=\sum_{m\in\mathcal L}\prod_{\ell\in m} \frac{|C_\ell|}{|G_\ell|-|C_\ell|}.$$
For $m\in\mathcal L$, take tuples of nontrivial irreducible complex
representations $(\pi_\ell)_{\ell\in m}$ of $G_\ell$; for the empty set use
the empty tuple. Define
$$\phi_{m,(\pi_\ell)}(x):= \prod_{\ell\in m}\chi_{\pi_\ell}(\rho_\ell(F(x))),$$
where $\chi_{\pi_\ell}$ is the trace character of $\pi_\ell$. Let
$\Delta_{\rm conj}$ be the optimal large-sieve constant of this indexed family
on $(X,\mu)$. Then
$$\mu(S)\le\frac{\Delta_{\rm conj}}{H}.$$

## Statement references

[[def-group]]

[[def-finite-cardinality]]

[[def-group-homomorphism]]

[[def-conjugacy-class-and-centralizer]]

[[def-irreducible-complex-character]]

[[def-character-of-a-complex-representation]]

[[def-class-function-and-the-space-of-complex-class-functions]]

[[def-standard-inner-product-on-complex-class-functions]]

[[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]

[[def-abstract-large-sieve-setting]]

[Kowalski, Chapter 3, Proposition 3.5, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The finite weighted set, group quotients, support, forbidden
conjugacy-invariant sets, and character family in the Statement.

[F1] The optimal large-sieve constant is the least bound for the indexed
second moment on $(X,\mu)$ ([[def-abstract-large-sieve-setting]]).

[F2] For a finite group $G_\ell$, its irreducible complex characters form an
orthonormal basis of the class functions under
$|G_\ell|^{-1}\sum_{g\in G_\ell}f(g)\overline{h(g)}$
([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F3] A finite sieve with local orthonormal bases and forbidden masses
$0<\nu_\ell(C_\ell)<1$ has sifted measure at most its large-sieve constant
divided by $\sum_{m\in\mathcal L}\prod_{\ell\in m}
\nu_\ell(C_\ell)/(1-\nu_\ell(C_\ell))$
([[lem-finite-large-sieve-sifted-density-bound]]).

[F4] The finite group cardinality counts its elements, and its conjugacy
classes partition the underlying set ([[def-finite-cardinality]]).

## Proof

1.1 For each $\ell$, take $Y_\ell$ to be the finite set of conjugacy classes of $G_\ell$ and assign the class $D$ mass $\nu_\ell(D):=|D|/|G_\ell|$. The classes partition $G_\ell$, so these positive masses sum to $1$. Conjugacy-invariant subsets $C_\ell$ correspond to subsets of $Y_\ell$ with mass $|C_\ell|/|G_\ell|$. [given, F4, algebra]

1.2 The class-function basis in [F2] becomes an orthonormal basis on $Y_\ell$; its constant vector is the trivial character, so deleting it leaves exactly the nontrivial irreducible characters used in the family of the Statement. Products over $\ell\in m$ give the indexed family in [F1]. [F1, F2, given]

2.1 Apply [F3] to these local spaces and bases. Their forbidden masses are $|C_\ell|/|G_\ell|$, so each local ratio is $\frac{|C_\ell|/|G_\ell|}{1-|C_\ell|/|G_\ell|} =\frac{|C_\ell|}{|G_\ell|-|C_\ell|}.$ Thus the generic denominator is exactly $H$, and the conclusion is $\mu(S)\le\Delta_{\rm conj}/H$. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎