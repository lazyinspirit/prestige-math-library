---
id: lem-cft-root-system-of-simple-lie-algebra-is-irreducible
kind: lemma
title: The root system of a simple Lie algebra is irreducible
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - lem-finite-semisimple-cartan-root-and-string-structure
  - lem-finite-weyl-positive-roots-and-simple-reflections
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  def-finite-weyl-root-system-lattice-and-chamber-conventions: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  lem-finite-weyl-positive-roots-and-simple-reflections: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Pavel Etingof, Lie Groups and Lie Algebras II
      url: https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf
      locator: Root decomposition of a simple Lie algebra and irreducibility of its root system.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathfrak g$ be finite-dimensional complex simple, let $\mathfrak h$ be a Cartan subalgebra, and let $\Phi$ be its root system in the Euclidean realization of lem-finite-semisimple-cartan-root-and-string-structure. Then $\Phi$ is irreducible: its graph with vertices the roots and an edge between distinct roots $\alpha,\beta$ when $(\alpha,\beta)\ne0$ is connected. Equivalently, $\Phi$ has no partition into two nonempty mutually orthogonal root subsets.

## Statement references

[[lem-finite-semisimple-cartan-root-and-string-structure]]

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra, a Cartan subalgebra, its root decomposition, and the induced positive-definite root inner product.

[F1] [[def-cft-finite-dimensional-simple-lie-algebra]]: $\mathfrak g$ has no nonzero proper ideals.

[F2] [[lem-finite-semisimple-cartan-root-and-string-structure]]: $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ when $\alpha+\beta$ is a root, opposite-root brackets lie in the coroot line, and the coroots span $\mathfrak h$.

[F3] [[def-finite-weyl-root-system-lattice-and-chamber-conventions]] and [[lem-finite-weyl-positive-roots-and-simple-reflections]]: $\Phi$ is finite and reduced; simple roots and simple coroots are bases, simple reflections generate the Weyl group, and every root is a Weyl translate of a simple root.

## Proof


1.1 Form the graph whose vertices are roots and whose edges join nonorthogonal roots. Suppose it has at least two connected components, and let $\Phi_i$ be the roots in one component. If $\alpha\in\Phi_i$, $\beta\notin\Phi_i$, then $(\alpha,\beta)=0$. Moreover $\alpha+\beta$ cannot be a root: if it were, $(\alpha+\beta,\alpha)=(\alpha,\alpha)\ne0$ and $(\alpha+\beta,\beta)=(\beta,\beta)\ne0$, joining both components to the vertex $\alpha+\beta$. Likewise $\beta=-\alpha$ is impossible across components because then $(\alpha,\beta)=-(\alpha,\alpha)\ne0$. [F3, algebra]

2.1 Let $\mathfrak h_i$ be the span of the coroots of roots in $\Phi_i$ and put $\mathfrak g_i=\mathfrak h_i\oplus\bigoplus_{\alpha\in\Phi_i}\mathfrak g_\alpha$. Partition the simple roots by graph component. A simple reflection from another component fixes a root orthogonal to its simple root; a reflection from the same component either fixes the root or sends it to a root still nonorthogonal to that simple root. Since every root is a Weyl translate of a simple root [F3], the coroots of each component lie in the span of that component's simple coroots. Their basis property gives $\mathfrak h=\bigoplus_i\mathfrak h_i$. For $\alpha\in\Phi_i$ and $\beta\in\Phi_j$, $i\ne j$, orthogonality gives $\beta(h_\alpha)=0$; step 1.1 and [F2] give $[\mathfrak g_\alpha,\mathfrak g_\beta]=0$. Thus every $\mathfrak g_i$ is stable under brackets with $\mathfrak h$ and all root spaces, so is an ideal of $\mathfrak g$. [F2, F3, step 1.1, algebra]

3.1 Each $\mathfrak g_i$ is nonzero because it contains a root space. With at least two components it is proper because the root and coroot bases in [F3] split among them. This contradicts simplicity [F1]. Therefore the graph is connected, proving irreducibility. [F1, F2, F3, step 2.1] ∎

