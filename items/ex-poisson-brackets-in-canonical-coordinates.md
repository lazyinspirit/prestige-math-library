---
id: ex-poisson-brackets-in-canonical-coordinates
kind: example
title: Poisson brackets in canonical coordinates
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-coordinate-formula-for-the-poisson-bracket"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §§18.2--18.3, pp. 107--109
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. In canonical cotangent coordinates,

$$\{q^i,q^j\}=0,\qquad \{p_i,p_j\}=0,\qquad \{q^i,p_j\}=\delta^i_j.$$

Consequently $\{p_j,q^i\}=-\delta^i_j$.

## Facts & Assumptions

**Given:** The library convention $\{F,G\}=\sum_k(F_{q^k}G_{p_k}-F_{p_k}G_{q^k})$.

[F1] That coordinate formula follows from $\omega_{\mathrm{can}}=\sum_kdq^k\wedge dp_k$ and $\iota_{X_H}\omega=dH$. [[prop-coordinate-formula-for-the-poisson-bracket]].

## Verification

**Proof technique:** direct.

1.1 The only nonzero derivatives are $\partial q^i/\partial q^k=\delta^i_k$ and $\partial p_j/\partial p_k=\delta_{jk}$. Substitution in [F1] gives zero for the $q$--$q$ and $p$--$p$ brackets and $\sum_k\delta^i_k\delta_{jk}=\delta^i_j$ for $\{q^i,p_j\}$. [F1, algebra]

2.1 Skew-symmetry, also visible by reversing the two terms in the coordinate formula, gives $\{p_j,q^i\}=-\delta^i_j$. [F1, step 1.1] ∎
