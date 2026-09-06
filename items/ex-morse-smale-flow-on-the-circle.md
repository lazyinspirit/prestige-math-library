---
id: ex-morse-smale-flow-on-the-circle
kind: example
title: "A Morse--Smale flow on the circle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-smale-pair, thm-unparametrized-trajectory-space-is-a-smooth-manifold, prop-index-one-trajectory-spaces-are-zero-dimensional]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology, Lecture 9"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
---

## Example

On $S^1=\mathbb R/2\pi\mathbb Z$, take $f(\theta)=\cos\theta$ with its standard metric.  Its maximum $p=0$ has index $1$ and its minimum $q=\pi$ has index $0$.  There are two unparametrized trajectories from $p$ to $q$, one through each open semicircle.

## Facts & Assumptions

**Given:** The negative-gradient equation $\dot\theta=\sin\theta$.

[F1] For a Morse--Smale pair, an index-drop-one unparametrized space is discrete ([[prop-index-one-trajectory-spaces-are-zero-dimensional]]).

## Verification

**Proof technique:** direct.

1.1 The complement of $\{0,\pi\}$ has two connected arcs.  On each, $\sin\theta$ has fixed sign and every orbit has backward limit $0$ and forward limit $\pi$, so each arc is one time-translation orbit. [given]

2.1 Here $W^u(p)=S^1\setminus\{q\}$ and $W^s(q)=S^1\setminus\{p\}$.  Along their two open-arc intersection both tangent spaces equal $TS^1$, so their sum is $TS^1$.  The reversed distinct pair has empty intersection, and at each equal critical-point pair one of the stable or unstable tangent spaces is $TS^1$.  Thus all stable--unstable intersections are transverse and the specified standard-metric pair is Morse--Smale by [[def-morse-smale-pair]]. [step 1.1, given]

3.1 Hence $\mathcal M(p,q)$ has exactly two points.  This agrees with [F1] and directly displays the quotient by translation. [F1, step 1.1, step 2.1] ∎
