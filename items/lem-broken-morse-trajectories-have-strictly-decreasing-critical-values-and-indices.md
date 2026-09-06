---
id: lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices
kind: lemma
title: "Broken Morse trajectories have strictly decreasing critical values and indices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-parametrized-morse-trajectory-space, def-downward-gradient-like-vector-field, def-morse-smale-pair, cor-no-morse-smale-trajectories-for-nonpositive-index-drop]
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

For a finite string of nonconstant Morse--Smale trajectory components $p_0\to p_1\to\cdots\to p_r$, both $f(p_i)$ and $\lambda(p_i)$ strictly decrease with $i$.  Consequently $r\le\lambda(p_0)$.

## Facts & Assumptions

**Given:** A finite string of nonconstant connecting trajectories in a Morse--Smale pair.

[F1] Along each nonconstant component, $df(X)<0$ ([[def-downward-gradient-like-vector-field]]).

[F2] A nonpositive index drop admits no Morse--Smale trajectory ([[cor-no-morse-smale-trajectories-for-nonpositive-index-drop]]).

## Proof

**Proof technique:** direct.

1.1 Integrating the strict decrease in [F1] along each component gives $f(p_i)>f(p_{i+1})$. [F1, given]

1.2 Since each component exists, the contrapositive of [F2] gives $\lambda(p_i)>\lambda(p_{i+1})$. [F2, given]

2.1 Each strict index drop is at least one and indices are nonnegative, so there can be at most $\lambda(p_0)$ components. [step 1.2, algebra] ∎
