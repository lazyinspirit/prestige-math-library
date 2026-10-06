---
id: rem-finite-propagation-is-not-huygens-principle
kind: remark
title: "Finite propagation is not the Huygens principle"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-countable-choice, cor-compact-support-expands-at-speed-at-most-c, thm-strong-huygens-principle-in-odd-spatial-dimensions, thm-wave-tails-in-one-and-even-spatial-dimensions, def-strong-huygens-principle]
forward_refs: [cex-finite-speed-does-not-imply-strong-huygens]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 171-172 and §7.3, printed pp. 176-178: the cone support bound in all dimensions versus the odd-dimensional sharp support"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "Remark 1.0.1: finite speed in all dimensions; sharp Huygens in odd $n\\ge3$; failure for $n=1$ and even $n$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Remark

Assume the Axiom of Countable Choice. For homogeneous waves with compactly
supported initial data, the strong Huygens principle implies finite
propagation, but the converse is false. The interior tails in dimension $1$
and every even dimension give witnesses to this failure of the converse.

Finite propagation ([[cor-compact-support-expands-at-speed-at-most-c]]) holds
in every spatial dimension $n\ge1$: data supported in a compact $K$ (with a
source supported in the corresponding cone) have
$\operatorname{supp}u(\cdot,t)\subseteq K+\overline B_{ct}(0)$ at time $t$,
the full solid $ct$-neighbourhood of the data support. It bounds the outer
front and nothing more.

The strong Huygens principle ([[def-strong-huygens-principle]]) is the stronger
shell statement: the value at $(x_0,t_0)$ is carried by the sphere
$S(x_0,t_0)=\partial B_{ct_0}(x_0)$, so data supported strictly inside the base
ball have no effect and, for compactly supported data, the disturbance is
carried by the shell rather than by the solid cone. It holds for odd
$n\ge3$ ([[thm-strong-huygens-principle-in-odd-spatial-dimensions]]) and fails
for $n=1$ and every even $n$ ([[thm-wave-tails-in-one-and-even-spatial-dimensions]]),
where a lasting interior tail remains after the front has passed; the failure
witnesses are compactly supported and obey the finite-speed bound.

Two consequences deserve care. First, an interior tail is not a violation of
finite speed: the tail stays inside the cone $|x-x_0|\le ct$ — it is the
interior of that cone, not its exterior, that remains affected. Second, the
informal shorthand "the value depends only on the values of the initial data on
$\partial B_t(x)$" is not a correct reading of strong Huygens: the functional
is a finite linear combination of sphere integrals of radial derivatives, as
[[thm-strong-huygens-principle-in-odd-spatial-dimensions]] proves; neighbourhood agreement preserves those derivatives, whereas bare restriction agreement need not. This is consistent with the germ form (iii) of
[[def-strong-huygens-principle]]. The positive theorem above is the sharp
statement, and this remark records the exact distinction fixed by the drift
review of this page.

## Remarks

Explicit compactly supported failure witnesses are recorded in
[[cex-finite-speed-does-not-imply-strong-huygens]].
