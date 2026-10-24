---
id: lem-the-tautological-one-form-is-intrinsic-and-smooth
kind: lemma
title: The tautological one-form is intrinsic and smooth
status: published
origin: pipeline
deps: ["def-countable-choice", "def-tautological-one-form-on-a-cotangent-bundle"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.4, Definition 3.10 and Proposition 3.14, pp. 34--36
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. The tautological formula is coordinate
independent and defines a smooth one-form. In cotangent coordinates
$(q^1,\ldots,q^n,p_1,\ldots,p_n)$,

$$\lambda=\sum_{i=1}^n p_i\,dq^i.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth $n$-manifold $Q$, and its canonical smooth cotangent bundle.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] The tautological formula uses only the bundle projection and the natural covector--vector evaluation. [[def-tautological-one-form-on-a-cotangent-bundle]].

## Proof

**Proof technique:** direct.

1.1 The expression $p(d\pi\xi)$ in [F1] involves intrinsic maps and their natural pairing, so changing coordinates cannot change its value. It is linear in $\xi$, hence defines a covector at every $(q,p)$. [F1]

2.1 Write $p=\sum_i p_i\,dq^i|_q$ and $\xi=\sum_i a^i\partial_{q^i}+\sum_i b_i\partial_{p_i}$. Since $d\pi(\xi)=\sum_i a^i\partial_{q^i}$, [F1] gives $\lambda(\xi)=\sum_i p_i a^i=(\sum_i p_i\,dq^i)(\xi)$. The displayed coefficients are smooth, so $\lambda$ is smooth. [A1, F1, step 1.1] ∎
