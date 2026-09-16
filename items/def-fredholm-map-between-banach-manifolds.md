---
id: def-fredholm-map-between-banach-manifolds
kind: definition
title: Fredholm map between Banach manifolds
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-banach-manifold-differentials-are-chart-independent, def-fredholm-operator-cokernel-and-index, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, def-c-k-map-between-banach-spaces, thm-fredholm-index-is-additive, def-axiom-of-choice, def-bounded-linear-operator]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11 (Fredholm maps)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Definition

Let $M$ and $N$ be $C^1$ Banach manifolds
([[def-countable-base-banach-manifold-and-smooth-map]]) and let $f : M \to N$
be a $C^1$ map, so that $Df(p) : T_pM \to T_{f(p)}N$ is a bounded linear
operator for every $p \in M$ ([[def-tangent-space-and-differential-on-a-banach-manifold]],
[[def-bounded-linear-operator]]). Then:

* $f$ is **Fredholm at $p$** when $Df(p)$ is a Fredholm operator, that is when
  $\ker Df(p)$ is finite dimensional, $\operatorname{ran}Df(p)$ is closed in
  $T_{f(p)}N$, and the cokernel
  $\operatorname{coker}Df(p) = T_{f(p)}N/\operatorname{ran}Df(p)$ is finite
  dimensional ([[def-fredholm-operator-cokernel-and-index]]);
* $f$ is a **Fredholm map** when it is Fredholm at every point of $M$;
* the **index** of a Fredholm map at $p$ is the integer
  $\operatorname{ind}Df(p) = \dim\ker Df(p) - \dim\operatorname{coker}Df(p)$,
  and $f$ **has index $n$** when $\operatorname{ind}Df(p) = n$ for every
  $p \in M$.

The pointwise index is defined whenever $f$ is Fredholm at $p$; the phrase "has
index $n$" is a separate, global condition, and the local constancy of
$p \mapsto \operatorname{ind}Df(p)$ is a theorem below, not part of this
definition.

## Remarks

- **Well-definedness: chart changes conjugate the derivative.** If
  $(\varphi,\psi)$ and $(\varphi',\psi')$ are two chart pairs around $p$ and
  $f(p)$, then the corresponding representatives of $f$ satisfy
  $\psi' \circ f \circ \varphi'^{-1} =
  (\psi' \circ \psi^{-1}) \circ (\psi \circ f \circ \varphi^{-1}) \circ
  (\varphi \circ \varphi'^{-1})$, so their derivatives at the point in question
  are related by
  $D\hat f'(x') = D(\psi' \circ \psi^{-1})(\psi(f(p)))\,D\hat f(x)\,
  D(\varphi \circ \varphi'^{-1})(x')$, a conjugation by bounded linear
  isomorphisms ([[lem-banach-manifold-differentials-are-chart-independent]]).
  Conjugation by isomorphisms preserves Fredholmness and the index: for
  bounded isomorphisms $U, V$ the composite $U\,T\,V$ is Fredholm exactly when
  $T$ is, and $\operatorname{ind}(UTV) = \operatorname{ind}T$, because
  $\operatorname{ind}(UT) = \operatorname{ind}U + \operatorname{ind}T$,
  isomorphisms have index $0$, and the same applies on the other side
  ([[thm-fredholm-index-is-additive]], [[def-fredholm-operator-cokernel-and-index]]);
  that additivity theorem is proved under AC, which is therefore inherited by
  every use of the index made through charts.

- **Index and the Fredholm condition are local in the base.** Both are
  properties of the single operator $Df(p)$ in the appropriate tangent spaces;
  neither involves any choice of charts, by the previous remark. In particular
  the index at $p$ may be read in any chart pair around $p$ and $f(p)$.

- **Nonconstant index is possible a priori.** The definition allows the
  pointwise index to jump, and the local-constancy proposition below is what
  rules that out for $C^1$ Fredholm maps. It is not built into the definition,
  because the proof needs the openness of the set of Fredholm operators in
  operator norm, a theorem about operators rather than about manifolds.

- **Finite-dimensional fibres.** When the index is $\dim M - \dim N$ in the
  finite-dimensional model case one recovers the classical notion; the
  definition here is the infinite-dimensional one, in which neither tangent
  space need be finite dimensional and only the kernel and cokernel are
  required to be.
