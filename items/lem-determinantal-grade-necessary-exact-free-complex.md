---
id: lem-determinantal-grade-necessary-exact-free-complex
kind: lemma
title: Exact free complexes have the expected ranks and determinantal regular sequences
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-depth-zero-exact-free-complex-splits
  - lem-ring-detected-at-associated-prime-localizations
  - lem-regular-element-exists-by-prime-avoidance
  - lem-exact-free-complex-reduction-nonzerodivisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Proposition 10.102.9 (tag 00N1), necessity direction"
      url: https://stacks.math.columbia.edu/tag/00N1
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a
Noetherian local ring and let
$F_\bullet:0\to R^{n_e}\xrightarrow{d_e}\cdots
\xrightarrow{d_1}R^{n_0}$ be a finite free complex exact
in every positive degree. For $1\le i\le e$ put
$r_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e$, and let
$I_i$ be the ideal of $r_i$-minors of $d_i$, with
the $0$-minor ideal equal to $R$. Then all
$(r_i+1)$-minors of $d_i$ vanish, the rank of $d_i$
is exactly $r_i$, and either $I_i=R$ or $I_i$
contains an $R$-regular sequence of length $i$.

## Facts & Assumptions

**Given:** The local Noetherian ring and positively exact finite free complex.

[F1] An exact free complex over a depth-zero local ring splits into identity pairs, so its differential ranks are the alternating numbers $r_i$, its $r_i$-minor ideals are units, and its larger minors vanish ([[lem-depth-zero-exact-free-complex-splits]]).

[F2] Every associated-prime localization of a Noetherian commutative ring has depth zero, and an element vanishing in all such localizations vanishes in the ring ([[lem-ring-detected-at-associated-prime-localizations]]).

[F3] A proper ideal not contained in any associated prime contains a nonzerodivisor under AC ([[lem-regular-element-exists-by-prime-avoidance]]).

[F4] If a finite free complex is exact in positive degrees, then quotienting by a nonzerodivisor preserves exactness in degrees at least two ([[lem-exact-free-complex-reduction-nonzerodivisor]]).

## Proof

**Proof technique:** detect ranks at associated primes, then induct on complex length after a regular quotient.

1.1 If $e=0$, there are no differential conditions. Assume $e\ge1$. For every $\mathfrak q\in\operatorname{Ass}(R)$, localize the complex at $\mathfrak q$; exactness persists, and [F2] makes $R_{\mathfrak q}$ depth zero. By [F1] the localized complex has expected ranks $r_i$ and $(I_i)_{\mathfrak q}=R_{\mathfrak q}$, while every $(r_i+1)$-minor vanishes there. [F1, F2]

2.1 By the injectivity in [F2], each $(r_i+1)$-minor vanishes already in $R$. Since $(I_i)_{\mathfrak q}=R_{\mathfrak q}$ at every associated prime, $I_i$ is not contained in any such prime. An associated prime exists when $R\ne0$, so $I_i$ is nonzero and at least one $r_i$-minor is nonzero; hence the rank is exactly $r_i$. If every $I_i=R$, the regular-sequence alternative is immediate. [F1, F2, step 1.1]

3.1 Otherwise set $J=I_1\cdots I_e\subsetneq R$. Each $I_i$ avoids every associated prime by step 2.1; since those primes are prime, their product $J$ also avoids them. By [F3], choose a nonzerodivisor $x\in J\subseteq\mathfrak m$. In particular $x\in I_i$ for each $i$. Reduce the complex modulo $x$. By [F4] it is exact in degrees at least two. After omitting its degree-zero term and shifting indices down by one, the complex $0\to(R/x)^{n_e}\to\cdots\to(R/x)^{n_1}$ is positively exact and has length $e-1$. [F3, F4, step 2.1]

4.1 Apply the same assertion inductively to that shorter complex over the Noetherian local ring $R/x$. For its differential inherited from $d_i$ with $i\ge2$, the alternating expected rank is still $r_i$. Its ideal of $r_i$-minors is $I_i/(x)$ because $x\in I_i$. Therefore for each $i\ge2$ either $I_i/(x)=R/x$ or this ideal contains a regular sequence of length $i-1$. If it is the unit ideal, $I_i=R$ since $x\in I_i$. Otherwise lift the sequence to elements of $I_i$; prepending the nonzerodivisor $x\in I_i$ gives an $R$-regular sequence of length $i$. For $i=1$, either $I_1=R$ or the single element $x$ supplies the required regular sequence. [F3, F4, step 3.1]

5.1 The base case and length reduction prove the determinantal alternative for every $e$. The rank conclusion was established in step 2.1 independently of the induction. AC enters through associated-prime and regular-element existence in [F2]–[F3]. [F1, F2, F3, F4, step 1.1, step 2.1, step 4.1] ∎
