---
id: thm-number-field-integral-ideal-factorisation-in-zf
kind: theorem
title: "Integral ideal factorisation in a number field, in ZF"
status: published
origin: pipeline
deps: [lem-nonzero-number-field-ideal-has-finite-quotient, thm-ring-of-integers-free-of-rank-degree, cor-submodules-of-finite-free-pid-modules-are-free, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

1.1 By [[lem-nonzero-number-field-ideal-has-finite-quotient]], $R=\mathcal O_K/\mathfrak a$ is finite. Its finite ideal lattice gives the finite list of maximal ideals, whose inverse images are exactly the primes $\mathfrak p$ containing $\mathfrak a$. By [[thm-ring-of-integers-free-of-rank-degree]] and [[cor-submodules-of-finite-free-pid-modules-are-free]], every ideal of $\mathcal O_K$ is a finite-rank free $\mathbb Z$-module, so $\mathcal O_K$ is Noetherian. Its definition as the integral closure of $\mathbb Z$ in $K$ makes it integrally closed. Every nonzero prime is maximal: its quotient is finite by the same finite-quotient lemma and is a domain, hence a field. Such a prime has height one, so [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]] makes $(\mathcal O_K)_{\mathfrak p}$ a DVR. Consequently $\mathfrak a(\mathcal O_K)_{\mathfrak p}=\mathfrak p^{e_{\mathfrak p}}(\mathcal O_K)_{\mathfrak p}$ for a unique exponent $e_{\mathfrak p}>0$. [given, construct]

2.1 Put $\mathfrak b=\prod\mathfrak p^{e_{\mathfrak p}}$. At every maximal ideal in the finite list, step 1.1 gives $\mathfrak a_{\mathfrak p}=\mathfrak b_{\mathfrak p}$; at any other maximal ideal both localisations are the unit ideal. These equalities imply $\mathfrak a=\mathfrak b$ without a maximal-ideal theorem: if $x\in\mathfrak b\setminus\mathfrak a$, its nonzero class in the finite ring $\mathcal O_K/\mathfrak a$ has a proper annihilator. Choose a maximal ideal of this finite ring containing that annihilator and let $\mathfrak p$ be its inverse image. Then $x\in\mathfrak a_{\mathfrak p}$ would give $sx\in\mathfrak a$ for some $s\notin\mathfrak p$, contradicting the choice of $\mathfrak p$. Thus $\mathfrak b\subseteq\mathfrak a$; interchange $\mathfrak a$ and the nonzero ideal $\mathfrak b$ for the reverse inclusion. Localising any second finite prime factorisation forces the same primes and exponents by uniqueness in each DVR. The prime list comes from a finite quotient, and each exponent is uniquely determined, so no Choice is used. [step 1.1, discharge-construct] ∎
