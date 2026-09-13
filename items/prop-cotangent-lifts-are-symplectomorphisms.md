---
id: prop-cotangent-lifts-are-symplectomorphisms
kind: proposition
title: Cotangent lifts are symplectomorphisms
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-the-canonical-cotangent-two-form-is-symplectic", "thm-the-exterior-derivative-commutes-with-pullback"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, Proposition 1.3, pp. 12--13
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $f:Q\to Q'$ is a diffeomorphism, its
cotangent lift

$$\widehat f:T^*Q\to T^*Q',\qquad \widehat f(q,p)=\bigl(f(q),(df_q^{-1})^*p\bigr),$$

is a symplectomorphism: $\widehat f^*\lambda_{Q'}=\lambda_Q$ and
$\widehat f^*\omega_{Q'}=\omega_Q$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a diffeomorphism $f:Q\to Q'$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] The canonical cotangent form is $-d\lambda$ and is symplectic.
[[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F2] Exterior differentiation commutes with pullback.
[[thm-the-exterior-derivative-commutes-with-pullback]].

## Proof

**Proof technique:** direct.

1.1 The formula for $\widehat f$ is smooth with inverse $\widehat{f^{-1}}$, and the projections satisfy $\pi_{Q'}\circ\widehat f=f\circ\pi_Q$. For $\xi\in T_{(q,p)}T^*Q$, the tautological definition gives $(\widehat f^*\lambda_{Q'})(\xi)=((df_q^{-1})^*p)(d\pi_{Q'}d\widehat f\,\xi)=p(d\pi_Q\xi)=\lambda_Q(\xi)$. [F1, algebra]

2.1 By [F1], [F2], and step 1.1, $\widehat f^*\omega_{Q'}=-\widehat f^*d\lambda_{Q'}=-d(\widehat f^*\lambda_{Q'})=-d\lambda_Q=\omega_Q$. Hence the diffeomorphism $\widehat f$ is symplectic. The case $\dim Q=0$ is included. [A1, F1, F2, step 1.1] ∎
