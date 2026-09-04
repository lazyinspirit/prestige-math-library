---
id: cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points
kind: corollary
title: "A Morse function on a compact manifold has finitely many critical points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-function-and-excellent-morse-function, lem-nondegenerate-critical-points-are-isolated, def-compact-space, thm-coordinate-formula-for-the-differential-of-a-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: compactness cover
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

If $M$ is a compact smooth manifold and $f:M\to\mathbb R$ is a Morse function,
then $f$ has only finitely many critical points.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$ and a Morse function $f:M\to\mathbb R$.

[F1] Every critical point of a Morse function is nondegenerate
([[def-morse-function-and-excellent-morse-function]]).

[L1] Every nondegenerate critical point is isolated
([[lem-nondegenerate-critical-points-are-isolated]]).

[L2] Compactness means that every open cover has a finite subcover
([[def-compact-space]]).

[L3] The vanishing of $df$ in a chart is equivalent to the vanishing of all
coordinate partial derivatives
([[thm-coordinate-formula-for-the-differential-of-a-function]]).

## Proof

**Proof technique:** compactness cover.

1.1 For each critical point $p$, [F1] and [L1] give an open neighbourhood $U_p$ containing no critical point other than $p$. [F1, L1, given, construct]

1.2 If $q$ is not critical, choose a chart $x:U\to\mathbb R^n$ around $q$ and write $g:=f\circ x^{-1}$. By [L3], some partial derivative $\partial g/\partial x^i$ is nonzero at $x(q)$; continuity keeps it nonzero on a smaller open neighbourhood $V_q\subseteq U$, so $V_q$ contains no critical point. [L3, given, construct]

2.1 The family of all $U_p$ together with all $V_q$ covers $M$. By [L2], it has a finite subcover. Only finitely many sets of the form $U_p$ occur in that subcover, and each such set contains exactly one critical point by step 1.1. Therefore $f$ has finitely many critical points. [L2, step 1.1, step 1.2]

3.1 Hence every Morse function on a compact manifold has finitely many critical points. [step 2.1] ∎
