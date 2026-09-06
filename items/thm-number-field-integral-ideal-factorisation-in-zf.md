---
id: thm-number-field-integral-ideal-factorisation-in-zf
kind: theorem
title: "Integral ideal factorisation in a number field, in ZF"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
deps: [lem-nonzero-number-field-ideal-has-finite-quotient, thm-chinese-remainder-theorem-for-comaximal-ideals]
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 3.7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Every nonzero integral ideal $\mathfrak a$ of $\mathcal O_K$ has a unique
finite factorisation $\mathfrak a=\prod_{i=1}^r\mathfrak p_i^{e_i}$ into
distinct nonzero prime ideals, with $e_i>0$.  The finite choices in this
construction are least-coded finite choices, so the assertion uses no Choice.

## Proof

**Given:** a nonzero integral ideal $\mathfrak a$.

1.1 The quotient $R=\mathcal O_K/\mathfrak a$ is finite, so its finite ideal lattice supplies the finite list of maximal ideals; their inverse images are exactly the primes $\mathfrak p$ containing $\mathfrak a$. The finite free integral lattice makes $\mathcal O_K$ noetherian, its definition as an integral closure makes it integrally closed, and every nonzero prime is maximal because its quotient is a finite domain. Thus $(\mathcal O_K)_{\mathfrak p}$ is a DVR. Consequently $\mathfrak a(\mathcal O_K)_{\mathfrak p}=\mathfrak p^{e_{\mathfrak p}}(\mathcal O_K)_{\mathfrak p}$ for a unique least $e_{\mathfrak p}>0$. [given, construct]

2.1 Put $\mathfrak b=\prod\mathfrak p^{e_{\mathfrak p}}$. At every maximal ideal in the finite list, step 1.1 gives $\mathfrak a_{\mathfrak p}=\mathfrak b_{\mathfrak p}$; at any other maximal ideal both localisations are the unit ideal. Hence $\mathfrak a=\mathfrak b$ (otherwise a maximal ideal containing the appropriate colon ideal gives a contradictory localisation). Distinct prime powers are comaximal, so the Chinese remainder theorem reassembles this finite product. Localising a second factorisation at the same finite primes forces the same exponents. The list is finite and each exponent is the least natural number with its property, so no Choice is used. [step 1.1, discharge-construct] ∎
