---
id: def-null-cobordant-closed-manifold
kind: definition
title: Null-cobordant closed manifolds
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - thm-smooth-cobordism-is-an-equivalence-relation
  - def-smooth-collar-of-a-manifold-boundary
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Null bordism discussion and Lemma 1.30, printed pp.10-11"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Definition 6.22 and the exponent-two remark, electronic pp.117-118"
---

## Definition

A closed smooth $n$-manifold $M$ is **null-cobordant** if it is cobordant to
the empty $n$-manifold, that is, if there is a bordism $(W,\theta_0,\theta_1)$
from $M$ to $\varnothing$
([[def-unoriented-smooth-cobordism-of-closed-manifolds]]).

Unwinding the bordism data, this is equivalent to the following statement:
there is a compact smooth $(n+1)$-manifold $W$ whose boundary is carried by a
collar $\theta_0:[0,1)\times M\to W$ onto all of $\partial W$, so that
$\theta_0(\{0\}\times M)=\partial W$ and $\theta_0$ restricts to a
diffeomorphism $\{0\}\times M\to\partial W$
([[def-smooth-collar-of-a-manifold-boundary]],
[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Indeed, for a
bordism to the empty manifold the outgoing boundary part $(\partial W)_1$ is
empty, hence $\partial W=(\partial W)_0=\theta_0(\{0\}\times M)$; conversely
such a collar gives a bordism from $M$ to $\varnothing$ by taking
$(\partial W)_0=\partial W$, $(\partial W)_1=\varnothing$ and
$\theta_1:(-1,0]\times\varnothing\to W$ the empty map. Thus, informally, $M$ is
null-cobordant exactly when $M$ is (diffeomorphic to) the whole boundary of a
compact smooth $(n+1)$-manifold.

In the oriented theory, a closed oriented $n$-manifold $(M,o)$ is
**null-cobordant** if it is oriented cobordant to the empty oriented manifold
([[def-oriented-smooth-cobordism]]). Because the incoming face contributes the
negative orientation, a null-cobordism $W$ satisfies: the induced boundary
orientation of the whole boundary $\partial W=(\partial W)_0$ is $-o$. Thus
$(M,o)$ is null-cobordant exactly when $M$ occurs as the orientation opposite
to the induced boundary orientation of some compact oriented $(n+1)$-manifold;
reversing the orientation of $W$ presents $(M,o)$ as the induced boundary
$\partial(-W)$ with its outward-normal-first orientation. The empty manifold
carries its unique orientation and is null-cobordant in both theories, being
cobordant to itself by the cylinder.

Null-cobordism depends only on the cobordism class: if $M'$ is cobordant to $M$
and $M$ is null-cobordant, then $M'$ is cobordant to $M$ and $M$ to
$\varnothing$, and transitivity of the cobordism relation
([[thm-smooth-cobordism-is-an-equivalence-relation]]) gives that $M'$ is
null-cobordant; the same holds in the oriented theory. The definition uses no
choice principle.
