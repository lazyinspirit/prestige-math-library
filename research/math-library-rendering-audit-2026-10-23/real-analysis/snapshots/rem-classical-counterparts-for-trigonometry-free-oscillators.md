---
id: rem-classical-counterparts-for-trigonometry-free-oscillators
kind: remark
title: "Classical counterparts for the trigonometry-free oscillators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-sine-and-cosine-are-one-lipschitz,
       thm-classical-weierstrass-function-nowhere-differentiable,
       thm-takagi-function-is-continuous-and-nowhere-differentiable]
justified_by: []
aliases: []
forward_refs: [ex-x-squared-sine-of-one-over-x-squared]
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis, Examples 6.10, 8.9 to 8.10, and 9.24"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

The Takagi series of [[thm-takagi-function-is-continuous-and-nowhere-differentiable]] and the classical Weierstrass function of [[thm-classical-weierstrass-function-nowhere-differentiable]] have the same regularity verdict, but their mechanisms differ: the Takagi proof uses dyadic affine slopes, while the Weierstrass proof uses trigonometric probes and a one-signed frequency tail.

The distance-to-the-integers oscillator is a trigonometry-free Lipschitz model; the classical estimates that replace it are the sine and cosine inequalities in [[cor-sine-and-cosine-are-one-lipschitz]]. For reciprocal oscillation, [[cex-sine-of-one-over-x-has-no-limit-at-zero]], [[ex-x-sine-of-one-over-x-tends-to-zero]], [[ex-x-squared-sine-of-one-over-x-is-differentiable]], and [[ex-x-squared-sine-of-one-over-x-squared]] record the undamped, once-damped, and twice-damped classical forms. The damping controls the value at zero, but differentiating can restore an oscillatory or unbounded term.
