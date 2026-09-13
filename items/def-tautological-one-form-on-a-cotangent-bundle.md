---
id: def-tautological-one-form-on-a-cotangent-bundle
kind: definition
title: Tautological one-form on a cotangent bundle
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "thm-existence-and-uniqueness-of-the-exterior-derivative"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.4, Definition 3.10, pp. 34--35
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. For a smooth $n$-manifold $Q$,
[[thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]
supplies the smooth cotangent manifold $T^*Q$ and its induced cotangent
charts. Let $\pi:T^*Q\to Q$ be the set-theoretic bundle projection. In every
induced chart it is the coordinate projection, so it is smooth. The
**tautological one-form**
$\lambda\in\Omega^1(T^*Q)$ is

$$\lambda_{(q,p)}(\xi)=p(d\pi_{(q,p)}\xi),\qquad p\in T_q^*Q.$$

Indeed, in an induced cotangent chart write
$p=\sum_i p_i\,dq^i$ and
$\xi=\sum_i a^i\partial_{q^i}+\sum_i b_i\partial_{p_i}$.  Then

$$\lambda_{(q,p)}(\xi)=\sum_i p_i a^i,\qquad\text{so}\qquad \lambda=\sum_i p_i\,dq^i,$$

which proves that the definition is smooth and independent of any local
choice because its pointwise formula uses only $p$ and $d\pi$.

The library's **canonical cotangent two-form** is, by convention,

$$\omega_{\mathrm{can}}=-d\lambda,$$

where $d$ is the exterior derivative supplied by
[[thm-existence-and-uniqueness-of-the-exterior-derivative]].

The countable-choice assumption is used exactly to obtain the smooth manifold
structure on $T^*Q$ from the cited supplier; the evaluation and coordinate
formulas themselves make no further choice. For $n=0$ the unique one-form and
two-form are both zero; the same formulas cover the empty manifold and there
is no endpoint, denominator, or biconditional issue. Here
$\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]].
