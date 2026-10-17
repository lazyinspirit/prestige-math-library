---
id: lem-csm-gibbs-response-covariance
kind: lemma
title: "Finite Gibbs response and covariance identities"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["lem-csm-finite-gibbs-variational-identity", "thm-derivative-of-exponential", "thm-logarithm-derivative-and-integral", "thm-algebra-of-derivatives", "thm-chain-rule"]
justified_by: []
dependency_roles: {"lem-csm-finite-gibbs-variational-identity": "mathematical-premise", "thm-derivative-of-exponential": "mathematical-premise", "thm-logarithm-derivative-and-integral": "mathematical-premise", "thm-algebra-of-derivatives": "mathematical-premise", "thm-chain-rule": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Let $S$ be finite nonempty, let $H_0,M:S\to\mathbb R$, fix $\beta>0$, and set $H_t=H_0-tM$ and $Z(t)=\sum_{s\in S}e^{-\beta H_t(s)}$ for $t\in\mathbb R$. For the normalized finite Gibbs law $\gamma_t(s)=Z(t)^{-1}e^{-\beta H_t(s)}$,
$$\frac{d}{dt}\log Z(t)=\beta\,\gamma_t(M),\qquad \frac{d^2}{dt^2}\log Z(t)=\beta^2\operatorname{Var}_{\gamma_t}(M)\geq0,$$ where $\operatorname{Var}_{\gamma}(M):=\gamma(M^2)-\gamma(M)^2$.
For fixed $H:S\to\mathbb R$, the corresponding inverse-temperature identities are
$$\frac{d}{d\beta}\log Z(\beta)=-\gamma_\beta(H),\qquad \frac{d^2}{d\beta^2}\log Z(\beta)=\operatorname{Var}_{\gamma_\beta}(H)\geq0.$$
These are finite-state identities; they do not justify differentiating an infinite-volume limit.

## Facts & Assumptions

**Given:** A finite nonempty state set, real-valued observables and energies, and a positive finite parameter $\beta$.

[A1] For finite energies and $\beta>0$, the finite Gibbs weights normalize to a strictly positive probability law ([[lem-csm-finite-gibbs-variational-identity]]).

[F1] The real exponential is differentiable with derivative $\exp$ ([[thm-derivative-of-exponential]]).

[F2] The natural logarithm is differentiable on $(0,\infty)$ with derivative $1/x$ ([[thm-logarithm-derivative-and-integral]]).

[F3] Finite sums, products, quotients with nonzero denominator, and compositions of differentiable real functions obey the sum, product, quotient, and chain rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

## Proof
1.1 Since $S$ is finite, repeated use of the sum rule and chain rule [F1, F3] differentiates each summand and gives $Z'(t)=\beta\sum_sM(s)e^{-\beta H_t(s)}$. Positivity of $Z(t)$ follows from [A1]; the logarithm chain rule and [F2, F3] give $(\log Z)'=Z'/Z=\beta\gamma_t(M)$. [given, A1, F1, F2, F3]

2.1 Differentiate the finite-sum numerator $\sum_sM(s)e^{-\beta H_t(s)}$ and denominator $Z(t)$ by [F1, F3], then apply the quotient rule from [F3]. This gives $\frac{d}{dt}\gamma_t(M)=\beta(\gamma_t(M^2)-\gamma_t(M)^2)$. Multiplying by the factor $\beta$ in step 1.1 gives the stated second derivative, which is nonnegative because it equals $\beta^2\gamma_t((M-\gamma_t(M))^2)$. [A1, F1, F3, step 1.1]

3.1 For the inverse-temperature family, finite-sum differentiation using [F1, F3] gives $Z'(\beta)=-\sum_sH(s)e^{-\beta H(s)}$ and $Z''(\beta)=\sum_sH(s)^2e^{-\beta H(s)}$. Applying the logarithm chain rule and quotient rule from [F2, F3] yields the stated mean and variance identities. [given, A1, F1, F2, F3] ∎
