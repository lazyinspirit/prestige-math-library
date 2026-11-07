---
id: thm-s-unit-valuation-exact-sequence
kind: theorem
title: The S-unit valuation sequence presents units and the ideal class group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-s-integers-and-s-units-of-a-number-field
  - def-ideal-class-group-of-a-domain
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-small-prime-ideal-class-generators-correct
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §5"
      url: "https://arxiv.org/pdf/math/9204234"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field and let $T$ be a finite set of nonzero prime ideals of $\mathcal O_K$ whose ideal classes generate $\operatorname{Cl}(\mathcal O_K)$. With $U_T=\mathcal O_{K,T}^{\times}$ and $\mathbb Z^T$ the additive group of integer-valued functions on $T$, the sequence
$$1\longrightarrow\mathcal O_K^\times\longrightarrow U_T\xrightarrow{\nu}\mathbb Z^T\xrightarrow{\kappa}\operatorname{Cl}(\mathcal O_K)\longrightarrow1$$
is exact, where $\nu(x)=(\operatorname{ord}_{\mathfrak p}(x))_{\mathfrak p\in T}$ and $\kappa((m_{\mathfrak p})_{\mathfrak p\in T})=[\prod_{\mathfrak p\in T}\mathfrak p^{m_{\mathfrak p}}]$.

## Statement references

[Lenstra, §5, pp. 23–24](https://arxiv.org/pdf/math/9204234)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, and a finite set $T$ of finite prime ideals whose classes generate the ideal class group.

[A1] The Axiom of Choice is the stated hypothesis of the bounded-prime class-generator theorem used to supply such a set $T$ ([[def-axiom-of-choice]], [[thm-small-prime-ideal-class-generators-correct]]).

[F1] A $T$-unit has valuation zero at every finite prime outside $T$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F2] Every nonzero principal fractional ideal has its prime-ideal valuation vector, with all but finitely many entries zero ([[thm-number-field-integral-ideal-factorisation-in-zf]]).

[F3] The ideal class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

## Proof



1.1 The inclusion $\mathcal O_K^\times\to U_T$ is a homomorphism. For $x\in U_T$, the valuation vector is finitely supported by [F2] and vanishes outside $T$ by [F1], so $\nu:U_T\to\mathbb Z^T$ is defined and is a homomorphism. The map $\kappa$ is a homomorphism because ideal multiplication adds exponents. For each $x\in U_T$, the principal ideal $(x)$ has class $1$, so $\kappa(\nu(x))=1$. [F1, F2, F3, given, algebra]

2.1 The kernel of $\nu$ consists exactly of elements with valuation zero at every finite prime, since the valuations outside $T$ already vanish by [F1]. Such an element generates the unit ideal by unique ideal factorization and hence is a unit; every unit has all valuations zero. Thus the sequence is exact at $\mathcal O_K^\times$ and $U_T$. [F1, F2, step 1.1, algebra]

2.2 If $m=(m_{\mathfrak p})\in\ker\kappa$, then $\prod_{\mathfrak p\in T}\mathfrak p^{m_{\mathfrak p}}=(x)$ for some $x\in K^\times$. This principal fractional ideal has no prime support outside $T$, so [F1] gives $x\in U_T$, and its valuation vector is $m$. Conversely every valuation vector $\nu(x)$ maps to the trivial class by step 1.1. Hence $\ker\kappa=\operatorname{im}\nu$. [F1, F2, F3, step 1.1, algebra]

3.1 By the hypothesis on $T$, the classes $[\mathfrak p]$ for $\mathfrak p\in T$ generate $\operatorname{Cl}(\mathcal O_K)$; these are exactly the images under $\kappa$ of the standard basis vectors of $\mathbb Z^T$. Thus $\kappa$ is surjective and the sequence is exact. The use of Choice is only the upstream class-generator hypothesis [A1]; the exactness argument itself is choice-free. [A1, F3, step 2.2, given] ∎

