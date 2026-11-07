---
dependency_level: 0
id: lem-unitary-central-norm-character-normalization
kind: lemma
title: Unique normalization of a unitary positive-center character
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-continuous-characters-of-the-real-line-are-exponentials
- thm-natural-logarithm-laws
- def-real-elementary-functions-and-domains
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf
    locator: Appendix2 Proposition3 and Ki1 Section2 p839 positive-center normalization
---

## Statement

Let $G$ have a specified central copy of $\mathbb R_{>0}$, written $a\mapsto aI$, and a continuous homomorphism $\nu:G\to\mathbb R_{>0}$ satisfying $\nu(aI)=a^n$, $n\ge1$. Let a representation $\pi$ have a continuous unitary central character $\omega$ on that copy. There is a unique $\tau\in\mathbb R$ for which $\pi\otimes\nu^{i\tau}$ has trivial central character there. Equivalently, $\pi=\pi_0\otimes\nu^{it}$ with a unique real $t$ and positive-center-normalized $\pi_0$. This normalization changes neither moduli of finite norm-twisted parameters nor real parts of archimedean parameters when the parameter norm-shift conventions are supplied.

## Facts & Assumptions

**Given:** The group, central copy, norm homomorphism and unitary character of the Statement.

[F1] Continuous characters of the additive real line are exponentials with a unique real frequency. [[lem-continuous-characters-of-the-real-line-are-exponentials]]

[F2] Exponential and logarithm identify addition with positive multiplication and obey their usual laws. [[thm-natural-logarithm-laws]] [[def-real-elementary-functions-and-domains]]

## Proof

1.1 Compose $\omega$ with $u\mapsto e^u I$. It is a continuous character from the additive real line to the unit circle. By [F1] it has the form $e^{icu}$ for a unique $c\in\mathbb R$ (absorbing the factor $2\pi$ into the frequency). Thus $\omega(aI)=e^{ic\log a}$. [given, F1, F2, algebra]

2.1 The twist has central value $e^{ic\log a}e^{in\tau\log a}=e^{i(c+n\tau)\log a}$. It is identically one exactly when $c+n\tau=0$, by uniqueness in [F1], so $\tau=-c/n$ is the unique choice. Define $\pi_0=\pi\otimes\nu^{i\tau}$ and $t=-\tau$ to obtain the equivalent expression. This constructs a character twist of the given representation; it does not establish any global automorphic realization theorem. [given, F1, F2, step 1.1, algebra]

3.1 Under the supplied norm-shift conventions, finite parameters are multiplied by $q^{-it}$ of modulus one, and archimedean exponents are translated by $-it$. These preserve finite absolute values and real parts, respectively. In particular, a numerical weak Ramanujan bound is not weakened by this imaginary normalization, although poles of a completed $L$-function are translated. [given, F2, step 2.1, algebra] ∎
