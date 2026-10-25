---
id: lem-regular-point-lies-on-one-component
kind: lemma
title: "A regular point lies on one irreducible component"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-affine-open-subscheme
  - def-irreducible-component-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-localisation-at-a-prime-ideal
  - def-prime-spectrum-and-vanishing-sets
  - def-regular-local-ring-geometric-point
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - thm-irreducible-components-and-minimal-primes
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-stalk-structure-sheaf-prime-localization
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4i, proof of Corollary 4.45, printed p. 97"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular point of a
reduced Noetherian scheme lies on exactly one irreducible component.

## Facts & Assumptions

**Given:** A reduced Noetherian scheme $X$ and a point $x\in X$ whose local ring is regular.

[F1] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] A Noetherian scheme has a finite affine open cover by spectra of Noetherian rings ([[def-locally-noetherian-and-noetherian-scheme]]).

[F3] An open subscheme has the restricted structure sheaf, and an affine open subscheme is affine with that structure sheaf ([[def-affine-open-subscheme]]).

[F4] For $U=\operatorname{Spec}A$ and $x\leftrightarrow\mathfrak p\in \operatorname{Spec}A$, the stalk is $\mathcal O_{U,x}\cong A_{\mathfrak p}$ ([[thm-stalk-structure-sheaf-prime-localization]]).

[F5] A point is regular when its local ring is regular local ([[def-regular-local-ring-geometric-point]]).

[F6] Under AC, every regular local ring is a domain ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F7] An irreducible component of a scheme is a maximal irreducible closed subset of its underlying space ([[def-irreducible-component-scheme]]).

[F8] In an irreducible space, every nonempty open subset is dense ([[lem-irreducibility-criteria-and-open-subspaces]]).

[F9] Under AC, the closure of an irreducible subset is irreducible ([[lem-irreducible-components-of-a-topological-space]]).

[F10] Under AC, the irreducible components of $\operatorname{Spec}A$ are exactly $V(\mathfrak q)$ for minimal prime ideals $\mathfrak q$ of $A$ ([[thm-irreducible-components-and-minimal-primes]]).

[F11] For a multiplicative set $S\subseteq A$, primes of $S^{-1}A$ correspond bijectively and in an inclusion-preserving way to primes of $A$ disjoint from $S$; the inverse is extension ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[F12] $V(\mathfrak q)$ consists of the primes containing $\mathfrak q$ ([[def-prime-spectrum-and-vanishing-sets]]).

[F13] A nonempty open subset of an irreducible space is irreducible ([[lem-irreducibility-criteria-and-open-subspaces]]).

[F14] Under AC, every point lies in an irreducible component ([[lem-irreducible-components-of-a-topological-space]]).

[F15] $A_{\mathfrak p}$ means $(A\setminus\mathfrak p)^{-1}A$ ([[def-localisation-at-a-prime-ideal]]).

## Proof

1.1 Fix $x$. By the AC assumption [F1] and [F2], choose an affine open neighbourhood $U=\operatorname{Spec}A$ of $x$ with $A$ Noetherian. Write $x$ as the prime $\mathfrak p\subset A$. The open-scheme structure in [F3] and the affine stalk calculation [F4] identify $\mathcal O_{X,x}$ with $A_{\mathfrak p}$. Since $x$ is regular, this is a regular local ring by [F5], and therefore a domain by [F6]. Put $S=A\setminus\mathfrak p$; by [F15], $A_{\mathfrak p}=S^{-1}A$. These are pointwise choices of one chart and its corresponding prime; no family of charts is chosen. [F1, F2, F3, F4, F5, F6, F15, given]

1.2 Let $C$ be any irreducible component of $X$ containing $x$. By [F7], $C$ is closed and irreducible. The subset $C\cap U$ is a nonempty open subset of $C$, so [F8] makes it dense in $C$ and [F13] makes it irreducible. It is closed in $U$ because $C$ is closed in $X$. To see it is maximal irreducible in $U$, let $Z$ be an irreducible closed subset of $U$ containing $C\cap U$. Its closure $\overline Z$ in $X$ is irreducible by [F9]. Since $C\cap U\subseteq Z\subseteq\overline Z$ and $C\cap U$ is dense in $C$, we have $C\subseteq\overline Z$. The maximality of $C$ then gives $C=\overline Z$. As $Z$ is closed in $U$, $\overline Z\cap U=Z$, so $C\cap U=Z$. Thus $C\cap U$ is an irreducible component of $U$. By [F10], there is a unique minimal prime $\mathfrak q_C$ of $A$ with $C\cap U=V(\mathfrak q_C)$. Since $x$ corresponds to $\mathfrak p$ and lies in this vanishing set, [F12] gives $\mathfrak q_C\subseteq\mathfrak p$. [F7, F8, F9, F10, F12, F13, given]

2.1 The prime correspondence [F11] identifies the primes of $A_{\mathfrak p}$ with primes of $A$ contained in $\mathfrak p$. Since $\mathfrak q_C$ is minimal in $A$, its extension $\mathfrak q_CA_{\mathfrak p}$ is minimal in $A_{\mathfrak p}$: a prime properly below it would contract to a prime properly below $\mathfrak q_C$. But $A_{\mathfrak p}$ is a domain by step 1.1, so its only minimal prime is $(0)$. Hence $\mathfrak q_CA_{\mathfrak p}=(0)$. The localization correspondence is one-to-one, so all components $C$ through $x$ have the same prime $\mathfrak q_C$. Their intersections with $U$ are therefore the same; each such intersection is dense in its component by [F8], so taking its closure in $X$ recovers that component. Thus there is at most one component through $x$. [F8, F11, F15, step 1.1, step 1.2]

3.1 Under the assumed AC [F1], [F14] gives at least one irreducible component through $x$. Together with step 2.1 this proves there is exactly one. If $X$ is empty, there is no point $x$ and the assertion is vacuous. If the local dimension is zero, $A_{\mathfrak p}$ is a zero-dimensional local domain and hence a field; the same minimal-prime argument still gives one component. No dimension restriction was used in steps 1.1–2.1. AC is also used through [F6] and [F10] for the local-domain theorem and the affine minimal-prime correspondence. For the fixed point $x$, the proof chooses one chart and makes no simultaneous choices. The statement is a uniqueness-and-existence claim, not an iff criterion; no endpoint parameter is present. [F1, F6, F10, F14, step 1.1, step 2.1, given] ∎
