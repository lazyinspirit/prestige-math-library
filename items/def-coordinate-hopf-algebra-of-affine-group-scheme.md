---
id: def-coordinate-hopf-algebra-of-affine-group-scheme
kind: definition
title: The coordinate Hopf algebra of an affine group scheme
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 1
deps:
  - def-affine-scheme
  - def-commutative-hopf-algebra-over-a-field
  - def-group-scheme-over-a-field
  - def-morphism-affine-schemes-from-ring-map
  - def-morphism-and-closed-subgroup-scheme
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-global-sections-affine-scheme
justified_by:
  - lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 3 §3(a)-(b), Proposition 3.1, Notation 3.2 and display (16), printed pp. 64-66 (PDF 75-77)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "September 29th and October 1st lectures, Remark 28 and Remark 30, printed pp. 8-10."
---

## Definition

Let $k$ be a field and let $G$ be a group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]) whose underlying scheme is affine ([[def-affine-scheme]]), say $G\cong\operatorname{Spec}A$ with $A=\mathcal O(G)=\Gamma(G,\mathcal O_G)$ ([[thm-global-sections-affine-scheme]]); write $m\colon G\times_kG\to G$, $e\colon\operatorname{Spec}k\to G$ and $i\colon G\to G$ for its multiplication, identity and inverse. Under the anti-equivalence between affine $k$-schemes and commutative $k$-algebras ([[thm-affine-scheme-ring-anti-equivalence]]) and the identification $\mathcal O(G\times_kG)\cong A\otimes_kA$ ([[thm-affine-fibre-product-tensor-ring]]), these morphisms correspond to $k$-algebra homomorphisms
$$\Delta=\mathcal O(m)\colon A\to A\otimes_kA,\qquad\varepsilon=\mathcal O(e)\colon A\to k,\qquad S=\mathcal O(i)\colon A\to A,$$
called the **comultiplication**, the **counit** and the **antipode** of $G$ ([[def-morphism-affine-schemes-from-ring-map]]). The three maps make $A$ a commutative Hopf algebra over $k$ in the sense of [[def-commutative-hopf-algebra-over-a-field]]; the verification is [[lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra]], and this definition fixes the construction and the notation.

For a commutative unital $k$-algebra $R$, points $g,g_1,g_2\in G(R)$ and $f\in A$ one has, under the evaluation pairing $G(R)\times A\to R$,
$$(\Delta f)(g_1,g_2)=f(g_1g_2),\qquad\varepsilon f=f(e),\qquad(Sf)(g)=f(g^{-1}).$$

A morphism $f\colon G\to H$ of affine group schemes ([[def-morphism-and-closed-subgroup-scheme]]) induces the $k$-algebra homomorphism $\mathcal O(f)\colon\mathcal O(H)\to\mathcal O(G)$ given by pullback of functions; it is a morphism of commutative Hopf algebras.
