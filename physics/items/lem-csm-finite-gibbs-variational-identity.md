---
id: lem-csm-finite-gibbs-variational-identity
kind: lemma
title: "Finite Gibbs relative entropy and free-energy minimum"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: ["thm-logarithm-derivative-and-integral"]
justified_by: []
dependency_roles: {"thm-logarithm-derivative-and-integral": "mathematical-premise"}
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

Let $S$ be a finite nonempty set, $H:S\to\mathbb R$, and $\beta>0$. Define $Z=\sum_{s\in S}e^{-\beta H(s)}$ and $\gamma(s)=Z^{-1}e^{-\beta H(s)}$. For every probability vector $p$ on $S$, with $0\log0=0$, its Shannon entropy $H_{\rm Sh}(p)=-\sum_s p(s)\log p(s)$ and relative entropy $D(p\Vert\gamma)=\sum_{p(s)>0}p(s)\log(p(s)/\gamma(s))$ satisfy
$$D(p\Vert\gamma)=-H_{\rm Sh}(p)+\beta\sum_s p(s)H(s)+\log Z\geq0.$$
Equality holds exactly when $p=\gamma$. Equivalently, $\gamma$ is the unique minimizer of $\sum_s p(s)H(s)-\beta^{-1}H_{\rm Sh}(p)$, and the minimum is $-\beta^{-1}\log Z$.

## Facts & Assumptions

**Given:** A finite nonempty state set $S$, a real-valued energy $H$, an inverse-temperature parameter $\beta>0$, and a probability vector $p$.

[A1] Every term $e^{-\beta H(s)}$ is a positive finite real number; hence $0<Z<\infty$ and $\gamma$ is a strictly positive probability vector.

[F1] For $r>0$, $\log r=\int_1^r dt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof
1.1 For every $r>0$, [F1] gives $-\log r=\int_r^1dt/t\geq1-r$ when $r<1$, and $-\log r=-\int_1^r dt/t\geq1-r$ when $r>1$; both comparisons are strict unless $r=1$. For $p(s)>0$, put $r_s=\gamma(s)/p(s)>0$. Then $p(s)\log(p(s)/\gamma(s))\geq p(s)-\gamma(s)$. Summing over the support of $p$ yields $D(p\Vert\gamma)\geq1-\sum_{p(s)>0}\gamma(s)\geq0$. [A1, F1, algebra]

2.1 If $D(p\Vert\gamma)=0$, the two nonnegative gaps in step 1.1 both vanish: every scalar inequality on the support is equality and the omitted $\gamma$-mass is zero. The strictness just proved gives $\gamma(s)/p(s)=1$ for every $p(s)>0$, while positivity of $\gamma$ makes zero omitted mass imply $p(s)>0$ for every $s$. Thus $p=\gamma$. Conversely $p=\gamma$ makes every summand zero. [A1, step 1.1, algebra]

3.1 Expanding $\log\gamma(s)=-\beta H(s)-\log Z$ in the finite sum defining $D$ gives the displayed identity. Rearranging the nonnegativity and equality statement from steps 1.1–2.1 proves the unique-minimum formulation. [step 1.1, step 2.1, algebra] ∎ 
