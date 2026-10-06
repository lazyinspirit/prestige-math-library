---
id: rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary
kind: remark
title: "The outward boundary hypothesis cannot be replaced by nonzero on the boundary"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-poincare-hopf-with-outward-pointing-boundary, lem-index-sum-of-an-outward-field-is-the-gauss-degree, def-isolated-zero-and-local-index-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-inward-outward-and-boundary-tangent-vectors, def-euler-characteristic-of-a-compact-manifold, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-axiom-of-choice]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Step 3 and the preceding discussion of the boundary hypothesis, printed pp. 40-41"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Theorem 2.3.1 and its hypotheses, printed p. 33"
dependency_level: 9
---

## Remarks

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the applications of the general index theorems below.

The hypothesis in [[thm-poincare-hopf-with-outward-pointing-boundary]] is
strictly stronger than "$X\ne0$ on $\partial M$": a field that is nonzero on
the boundary but not outward contributes a boundary correction term. On the
closed unit ball $D^n\subseteq\mathbb R^n$, $n\ge3$ odd, the inward radial
field $X(u)=-u$ is nonzero on $\partial D^n$ and has the single zero $0$, which
is nondegenerate with linearization $-I_n$
([[def-inward-outward-and-boundary-tangent-vectors]],
[[def-isolated-zero-and-local-index-of-a-vector-field]]); by
[[thm-index-of-a-nondegenerate-vector-field-zero]] its index is
$\operatorname{sign}\det(-I_n)=(-1)^n=-1$. On the other hand
$\chi(D^n)=1$, because $D^n$ is contractible with the rational homology of a
point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-axiom-of-choice]],
[[def-euler-characteristic-of-a-compact-manifold]]). Hence
$\sum_p\operatorname{ind}_pX=-1\ne1=\chi(D^n)$: nonzero on the boundary does
not suffice, and the outwardness in the boundary form is a genuine hypothesis
rather than a convenience.

In even dimensions the inward radial field on $D^n$ has index $+1$
and happens to agree with $\chi(D^n)=1$, despite not being outward. Thus
equality of the index sum with $\chi$ does not imply outwardness.
For a compact full-dimensional Euclidean domain $N\subset\mathbb R^n$,
the boundary lemma identifies the index sum of any field nonzero on
$\partial N$ with the degree of its normalized boundary map. Outwardness
is sufficient to identify that degree with the Gauss degree, which equals
$\chi(N)$ by the outward-boundary theorem. This sphere-map description
uses the Euclidean tangent trivialization and is not asserted for an
arbitrary manifold with a possibly nontrivial tangent bundle.
