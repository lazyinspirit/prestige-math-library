---
id: cor-no-morse-smale-trajectories-for-nonpositive-index-drop
kind: corollary
title: "No Morse--Smale trajectories for nonpositive index drop"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-unparametrized-trajectory-space-is-a-smooth-manifold]
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

## Statement

If $(f,X)$ is Morse--Smale, $p\ne q$, and $\lambda(p)\le\lambda(q)$, then $\mathcal M(p,q)=\varnothing$.

## Facts & Assumptions

**Given:** Distinct critical points $p,q$ in a Morse--Smale pair with $\lambda(p)\le\lambda(q)$.

[F1] The unparametrized trajectory space, when nonempty, is a smooth manifold of dimension $\lambda(p)-\lambda(q)-1$ ([[thm-unparametrized-trajectory-space-is-a-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal M(p,q)$ were nonempty, [F1] would give it dimension $\lambda(p)-\lambda(q)-1\le-1$. [F1, given, assume-contra, algebra]

2.1 A nonempty smooth manifold has a nonnegative integer dimension, contradicting step 1.1.  Thus the moduli space is empty. [step 1.1, discharge-contradiction] ∎
