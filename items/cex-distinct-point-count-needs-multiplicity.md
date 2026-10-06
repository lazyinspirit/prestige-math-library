---
id: cex-distinct-point-count-needs-multiplicity
kind: counterexample
title: "Counting distinct points is not enough: tangent contact"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, ex-tangent-line-conic-double-intersection, thm-bezout-plane-curves]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement refuted

False claim: for two plane projective curves of degrees $d,e$ over an algebraically closed field, the number of distinct intersection points equals $de$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], the conic $C=V(x_0^2-x_1x_2)$ and its tangent line $L=V(x_1)$ at $p=[0:0:1]$, both over an algebraically closed field of characteristic not two.

[F1] $L\cap C=\{p\}$ as a set, and $I_p(C,L)=2$: the restriction of the conic equation to $L$ is $x_0^2$, a double root at $p$ [[ex-tangent-line-conic-double-intersection]].

[F2] Bezout for $\deg C=2$, $\deg L=1$ gives $\sum_{q\in C\cap L}I_q(C,L)=2$ over an algebraically closed field [[thm-bezout-plane-curves]], and every local multiplicity at a point of the intersection is a positive integer [[def-local-intersection-multiplicity-plane-curves]].

## Counterexample

1.1 The distinct intersection points number one, while the degree product is $de=2\cdot1=2$. [F1, given]

1.2 The multiplicity-weighted sum is $I_p(C,L)=2$, the value required by Bezout, concentrated at the unique point. [F1, F2, given]

2.1 Therefore the distinct-point count $1$ differs from $de=2$; the deficiency is repaired exactly by counting the tangent contact with multiplicity two, so the number of distinct points alone does not equal the degree product. [step 1.1, step 1.2, F1, F2] ∎ 