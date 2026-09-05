---
id: def-connecting-map-for-left-derived-functors
kind: definition
title: "The connecting map for left derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-derived-object-relative-to-projective-resolution-data, lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor, def-connecting-morphism-in-homology, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Definition

Assume the Axiom of Dependent Choice.

Let $P$ be supplied projective resolution data on a class $\mathcal D$ in an
abelian category $\mathcal A$, and let $F:\mathcal A\to\mathcal B$ be an
additive right exact functor. Fix a short exact sequence
$$0\to A'\to A\to A''\to0$$
of objects of $\mathcal D$.

Choose a horseshoe projective resolution $H_\bullet$ of $A$ whose end terms are
the supplied resolutions $P_\bullet(A')$ and $P_\bullet(A'')$. By
[[lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor]]
and [[def-connecting-morphism-in-homology]], this yields connecting morphisms
$$\partial_n^H:H_n(F(P_\bullet(A'')_{\mathrm{del}}))\to H_{n-1}(F(P_\bullet(A')_{\mathrm{del}})),\qquad n>0.$$

Replace the supplied datum $P$ only at the object $A$ by the chosen horseshoe
resolution $H_\bullet$. The resulting datum computes naturally isomorphic left
derived functors by
[[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]],
so each $\partial_n^H$ may be read as a map
$$\partial_n^H:L_n^PF(A'')\to L_{n-1}^PF(A').$$

This map is the **connecting map for the left derived functors attached to the
chosen horseshoe resolution**. The next item proves that it is independent of
the horseshoe choice and of the comparison isomorphisms used to read it in the
fixed datum $P$.
