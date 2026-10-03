---
id: def-normalization-affine-variety
kind: definition
title: The normalization of an irreducible affine variety
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
justified_by:
  - cor-normalization-unique-up-to-unique-isomorphism
aliases: []
deps: [def-integral-closure-and-integrally-closed-domain, thm-integral-closure-finite-finite-type-domain-over-field, thm-integral-closure-is-integrally-closed, thm-affine-algebraic-sets-coordinate-duality, def-affine-variety-classical, thm-affine-morphisms-coordinate-ring-anti-equivalence, def-morphism-classical-varieties, def-function-field-variety, def-normal-point-and-normal-variety, def-axiom-of-choice, def-finite-morphism-classical-affine-local]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: Definitions 8.1, 8.5 and Proposition 8.3, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "The Stacks Project, Section 29.55 Normalization: Definition 29.55.1 and Lemmas 29.55.2-29.55.3"
      url: "https://stacks.math.columbia.edu/tag/035E"
---

## Definition

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $X$
be an irreducible affine variety over $k$ with coordinate ring $A=k[X]$ and
function field $k(X)=\operatorname{Frac}(A)$
([[def-affine-variety-classical]], [[def-function-field-variety]]).

Let $B\subseteq k(X)$ be the integral closure of $A$ in $k(X)$
([[def-integral-closure-and-integrally-closed-domain]]). Then $B$ is a finite
$A$-module by [[thm-integral-closure-finite-finite-type-domain-over-field]] and
is an integrally closed domain by [[thm-integral-closure-is-integrally-closed]].

Concretely, $B$ is a reduced affine $k$-algebra: it is a domain, it is finitely
generated as a $k$-algebra because it is a finite module over the finitely
generated $k$-algebra $A$, and it is reduced because it is a domain. By the
object-level duality of [[thm-affine-algebraic-sets-coordinate-duality]] there
is an affine algebraic set $X^{\nu}\subseteq\mathbf A^m_k$ with
$k[X^{\nu}]\cong B$; since $B$ is a domain, $X^{\nu}$ is irreducible, hence a
classical affine variety ([[def-affine-variety-classical]]).

The **normalization of $X$** is the pair $(X^{\nu},\nu)$, where
$\nu\colon X^{\nu}\to X$ is the morphism corresponding under the
coordinate-ring anti-equivalence
([[thm-affine-morphisms-coordinate-ring-anti-equivalence]],
[[def-morphism-classical-varieties]]) to the inclusion of $k$-algebras
$A\hookrightarrow B$; the inclusion presents $B$ as a finite $A$-module, so
$\nu$ is a finite morphism ([[def-finite-morphism-classical-affine-local]]). All
points of $X^{\nu}$ are normal: for $y\in X^{\nu}$ the local ring
$\mathcal O_{X^{\nu},y}$ is a localisation of $B$ at a maximal ideal, and $B$ is
an integrally closed domain, so every such localisation is an integrally closed
domain as well; hence $X^{\nu}$ is a normal variety
([[def-normal-point-and-normal-variety]]).

**Recorded property.** The universal property of the normalization, and with it
the fact that the pair $(X^{\nu},\nu)$ is unique up to a unique isomorphism
over $X$, is proved later on this page. The construction above is the
affine case of the normalization of a variety in a finite extension of its
function field; finiteness and birationality of $\nu$ are properties of this
construction, not additional data.
