---
id: ex-perfectoid-etale-site-is-tilt-invariant
kind: example
title: "The étale site of a perfectoid point is tilt invariant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-complete-nonarchimedean-field
  - def-perfectoid-field-and-its-tilt
  - thm-perfectoid-field-tilt-is-perfectoid
  - def-perfectoid-k-algebra
  - def-valuation-ring
  - def-perfectoid-affinoid-k-algebra
  - def-affinoid-adic-spectrum-and-rational-subsets
  - def-perfectoid-space
  - def-etale-site-of-a-perfectoid-space
  - thm-tilting-equivalence-of-perfectoid-etale-sites
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 7.12"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
---

## Example

Assume Dependent Choice. Let $K$ be a perfectoid field with tilt $K^\flat$, and take the perfectoid point $X=\operatorname{Spa}(K,K^\circ)$. Its tilt is $X^\flat=\operatorname{Spa}(K^\flat,K^{\flat\circ})$, and the tilting functor induces a functorial isomorphism of étale sites $X_{\acute et}\cong X^\flat_{\acute et}$; in particular, it identifies perfectoid spaces étale over the two points and their jointly surjective topological covering families.

## Example references

[Peter Scholze, *Perfectoid Spaces*, Theorem 7.12](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Facts & Assumptions

**Given:** Dependent Choice, a perfectoid field $K$, and its field tilt $K^\flat$.

[A1] [[def-dependent-choice]]: Dependent Choice supplies an infinite sequence of successive choices whenever each finite stage has a permitted successor.

[F1] [[def-complete-nonarchimedean-field]]: $K$ and $K^\flat$ carry complete nonarchimedean absolute values, and their valuation rings are the closed unit balls.

[F2] [[def-perfectoid-field-and-its-tilt]]: $K$ is complete, has residue characteristic $p>0$, and Frobenius on $K^\circ/pK^\circ$ is surjective.

[F3] [[thm-perfectoid-field-tilt-is-perfectoid]]: $K^\flat$ is a perfectoid field of characteristic $p$.

[F4] [[def-perfectoid-k-algebra]]: a Banach $K$-algebra is perfectoid when its power-bounded subring is open and bounded and Frobenius on its reduction modulo a topologically nilpotent scalar dividing $p$ is surjective.

[F5] [[def-perfectoid-affinoid-k-algebra]]: a perfectoid affinoid pair consists of a perfectoid $K$-algebra and an open integrally closed subring of its power-bounded elements.

[F6] [[def-affinoid-adic-spectrum-and-rational-subsets]]: $\operatorname{Spa}(R,R^+)$ is the adic spectrum of a complete Tate algebra paired with an open ring of integral elements.

[F7] [[def-perfectoid-space]]: a perfectoid space is an adic space covered by affinoid spectra attached to perfectoid affinoid pairs.

[F8] [[def-etale-site-of-a-perfectoid-space]]: the étale site has perfectoid spaces étale over its base as objects and jointly surjective topological covering families.

[F9] [[thm-tilting-equivalence-of-perfectoid-etale-sites]]: under Dependent Choice, tilting induces a functorial isomorphism of the étale sites of a perfectoid space and its tilt, preserving jointly surjective covering families.

[F10] [[def-valuation-ring]]: in a valuation ring $V$ of a field, for every nonzero $x$ either $x\in V$ or $x^{-1}\in V$.

## Proof

**Given:** Dependent Choice, the perfectoid field $K$, and its field tilt $K^\flat$.

1.1 Choose a topologically nilpotent scalar $\varpi\in K^\circ$ with $p\in\varpi K^\circ$; such a scalar exists because the value group of $K$ is nondiscrete. Regard $K$ as a Banach algebra over itself. Its power-bounded subring is $K^\circ$, which is open and bounded. Frobenius is surjective on $K^\circ/\varpi K^\circ$: lift any class modulo $p$ by [F2] and reduce modulo $\varpi$, since $pK^\circ\subseteq\varpi K^\circ$. Hence $K$ is a perfectoid $K$-algebra by [F4]. The same reasoning, using [F3], shows that $K^\flat$ is a perfectoid $K^\flat$-algebra. [A1, F1, F2, F3, F4, given, choose, algebra]

2.1 Each valuation ring is open in its field topology: at any $x$ with $|x|\le1$, the open ball $\{y:|y-x|<1\}$ is contained in the valuation ring by the ultrametric inequality. It is also integrally closed. If $x$ were integral over a valuation ring $V$ but not in $V$, [F10] gives $x^{-1}\in V$, and $x^{-1}$ is not a unit, so it lies in the maximal ideal. Dividing a monic relation for $x$ by its leading power gives $1$ plus terms in that maximal ideal equal to $0$, impossible after reduction modulo it. Hence $(K,K^\circ)$ and $(K^\flat,K^{\flat\circ})$ are perfectoid affinoid pairs by [F5]. Their adic spectra are the displayed spaces by [F6], and these affinoid spaces are perfectoid by [F7]. The field tilt in [F3] identifies the second point as the tilt of the first. [F1, F3, F5, F6, F7, F10, step 1.1, algebra]

3.1 Apply [F9] to the perfectoid space $X$. It gives a functorial isomorphism $X_{\acute et}\cong X^\flat_{\acute et}$ and preserves the jointly surjective covering families specified in [F8]. This is the claimed point case. [A1, F8, F9, step 2.1, algebra] ∎

## Remaining local proof obligations

The site-equivalence theorem is an escalated supplier: its source proof calls the equivalence immediate only after establishing the affinoid finite-étale comparison and the perfectoid étale-site axioms. This example proves the point case from the theorem's stated interface; it does not prove those local supplier results. Exact affected supplier: `thm-tilting-equivalence-of-perfectoid-etale-sites`.

