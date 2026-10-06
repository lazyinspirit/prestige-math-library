---
id: def-crossed-homomorphism-and-hochschild-extension
kind: definition
title: Crossed homomorphisms, principal crossed homomorphisms and Hochschild extensions
dependency_level: 2
deps:
  - def-affine-scheme
  - def-algebraic-group-action-and-scheme-theoretic-stabilizer
  - def-fibre-product-schemes-universal-property
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Section 15(a) crossed homomorphisms and Section 15(c) Hochschild extensions, printed pp. 303-309
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Sections 16(a)-(c), printed pp. 269-274; Proposition 16.10, printed p. 274
---
## Definition

Let $k$ be a field, let $G$ be an affine algebraic group over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]) and let $M$ be a commutative affine algebraic group over $k$ on which $G$ acts by group automorphisms, $\cdot:G\times_kM\to M$ ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). Form the semidirect product $M\rtimes G$, the $k$-group scheme whose $R$-points are the pairs $(m,g)\in M(R)\times G(R)$ with multiplication
$$(m,g)(m',g')=(m+g\cdot m',\,gg');$$
the product is a group law because the action is by group automorphisms, and $M\rtimes G$ is constructed from the given morphisms using fibre products ([[def-fibre-product-schemes-universal-property]]).

A **crossed homomorphism** is a morphism of $k$-schemes $f:G\to M$ such that
$$f(xy)=f(x)+x\cdot f(y)$$
for all $x,y\in G(R)$ and all $k$-algebras $R$. It is **principal** if there is an element $m\in M(k)$ with
$$f(x)=x\cdot m-m\qquad\text{for all }x\in G(R),\ R.$$

The assignments $x\mapsto(f(x),x)$ and $(m,x)\mapsto x$ identify sections $G\to M\rtimes G$ of the projection $M\rtimes G\to G$ with crossed homomorphisms: indeed $(f(x),x)(f(y),y)=(f(x)+x\cdot f(y),xy)$, so multiplicativity of the section is exactly the displayed identity. Conjugating a section by $m\in M(k)$ changes the corresponding crossed homomorphism by the principal crossed homomorphism $x\mapsto x\cdot m-m$; hence two sections are conjugate by an element of $M(k)$ if and only if their crossed homomorphisms differ by a principal one.

An **extension** of group functors $0\to M\to E\to G\to1$ is a sequence of group functors on $k$-algebras that is exact, with $E\to G$ the given projection. Such an extension is a **Hochschild extension** if the projection $E\to G$ admits a section as a map of set-valued functors. For a Hochschild extension the conjugation action of $G$ on $M$ induced by any such section is independent of the choice of section, and the equivalence classes of Hochschild extensions inducing a given action are classified by the second Hochschild cohomology group of [[def-hochschild-cohomology-of-algebraic-groups]].
