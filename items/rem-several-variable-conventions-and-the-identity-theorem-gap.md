---
id: rem-several-variable-conventions-and-the-identity-theorem-gap
kind: remark
title: "Conventions on this page, and what the several-variable identity theorem does not say"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-identity-theorem-in-several-complex-variables, def-holomorphic-function-in-several-complex-variables, def-separately-holomorphic-function, def-balls-and-polydiscs-in-complex-euclidean-space, thm-osgood-lemma-in-several-complex-variables, thm-locally-bounded-separate-holomorphy, def-multivariable-power-series, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
forward_refs: [ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc, fs-several-variable-identity-theorem-from-an-accumulation-point]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §§1.1-1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Remark

Coordinates and multi-indices on this page are indexed from $0$, exactly as on
the library's Euclidean pages. Thus a point of $\mathbb{C}^m$ is
$z=(z_0,\dots,z_{m-1})$, a multi-index is
$\alpha=(\alpha_0,\dots,\alpha_{m-1})$ ([[def-ck-and-multi-index-notation-in-several-variables]]),
and the polydisc notation is coordinatewise
([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

**Holomorphic means complex differentiable, and nothing more.**
[[def-holomorphic-function-in-several-complex-variables]] does not build in
continuity, local boundedness or power-series representability. That is why
[[thm-osgood-lemma-in-several-complex-variables]] and
[[thm-locally-bounded-separate-holomorphy]] are theorems rather than
tautologies, and why [[def-multivariable-power-series]] is a separate object
rather than the definition of holomorphy.

**The distinguished boundary is the one that carries the Cauchy theory here.**
The polydisc Cauchy formula is an iterated sequence of one-variable contour
integrals over the coordinate circles whose product is the distinguished
boundary; it does not define an integral over that boundary as a set. The
power-series coefficients and Cauchy estimates use those same circles, rather
than the whole topological boundary of a closed polydisc. The companion example
[[ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc]] shows exactly
why: the topological boundary contains points where the modulus of a holomorphic
function can be far from maximal.

**The several-variable identity theorem is weaker than the one-variable one.**
[[thm-identity-theorem-in-several-complex-variables]] assumes a nonempty **open**
set of zeros. It does not say that an accumulation point of the zero set is
enough, and that stronger statement is false in several variables: the companion
false statement [[fs-several-variable-identity-theorem-from-an-accumulation-point]]
records the witness. The gap is structural, not cosmetic. In one variable, a
nonzero holomorphic function has isolated zeros; in several variables a zero set
may contain whole positive-dimensional complex pieces.
