---
id: lem-nagata-strongly-transcendental-finite-algebra-is-nowhere-quasi-finite
kind: lemma
title: Strongly transcendental finite algebras are nowhere quasi-finite without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-nagata-strong-transcendence-radical-contraction
  - lem-nagata-strong-transcendence-survives-integral-scalars
  - lem-nagata-integral-radical-contraction-by-determinants
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - thm-transitivity-of-integrality
  - thm-integrality-and-finite-module-equivalences
  - prop-localisation-zero-equality-and-kernel-criteria
proof_strategy: direct
axiom_use: No choice principle is assumed. The supplied prime is localized directly; finite monic equations and radical contraction replace selection of additional primes.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alonso M. E., Coquand T., Lombardi H., Revisiting Zariski Main Theorem from a constructive point of view
      url: https://arxiv.org/abs/1602.00597
      locator: January2016 corrected version, Proposition2.17, pp.8–9, read in full; the application below replaces minimal-prime and going-down arguments in the nowhere-quasi-finiteness step.
---

## Statement

Let $R\subseteq S$ be an inclusion of reduced commutative rings. Let $x\in S$ be strongly transcendental over $R$, and suppose $S$ is module-finite over $R[x]$. Then $R\to S$ is of finite type and is quasi-finite at no prime of $S$: for every supplied prime $\mathfrak q\subseteq S$, with $\mathfrak p=\mathfrak q\cap R$, the local fiber $S_{\mathfrak q}/\mathfrak p S_{\mathfrak q}$ is not finite-dimensional over $\kappa(\mathfrak p)$. No choice or Noetherian hypothesis is required. The zero ring is included, when the assertion about primes is vacuous.

## Statement references

[Alonso–Coquand–Lombardi, Proposition2.17, pp.8–9](https://arxiv.org/abs/1602.00597)

## Facts & Assumptions

**Given:** The reduced inclusion, strong transcendence and finite module algebra, and a supplied prime when testing quasi-finiteness.

[F1] In a reduced $C[z,t]$, if $z$ is strongly transcendental over $C$ and $t$ is integral over $C[z]$, then $tz\in\sqrt{I C[z,t]}$ implies $t\in\sqrt{I C[z,t]}$. Strong transcendence persists under localization. [[lem-nagata-strong-transcendence-radical-contraction]] [[lem-nagata-strong-transcendence-survives-integral-scalars]]

[F2] Radical membership contracts along an integral inclusion. Module-finite extensions are integral, and integral ring maps compose. [[lem-nagata-integral-radical-contraction-by-determinants]] [[thm-integrality-and-finite-module-equivalences]] [[thm-transitivity-of-integrality]]

[F3] Quasi-finiteness at the supplied prime means that the displayed local fiber is finite-dimensional over its base residue field. Localization equations can be cleared by a denominator outside the prime. [[def-quasi-finite-at-a-prime-for-finite-type-algebras]] [[prop-localisation-zero-equality-and-kernel-criteria]]

## Proof

1.1 Finite module generators for $S$ over $R[x]$, together with $x$, form a finite algebra generating family over $R$, so the map is finite type. Suppose it is quasi-finite at a supplied $\mathfrak q$. Localize first by $R\setminus\mathfrak p$, writing $C=R_{\mathfrak p}$, $B=(R\setminus\mathfrak p)^{-1}S$, and $\mathfrak n$ for the prime induced by $\mathfrak q$. The inclusion $C\subseteq B$ stays injective by the localization zero criterion. The ring $B$ is reduced, finite over $C[x]$, and $x$ stays strongly transcendental over $C$ by [F1]. Put $I=\mathfrak pC$. Its residue field is $k=C/I$, and quasi-finiteness says $B_{\mathfrak n}/IB_{\mathfrak n}$ is finite-dimensional over $k$. [F1, F3, given, construct, algebra]

2.1 Multiplication by the image of $x$ on that finite-dimensional algebra has an annihilating monic characteristic polynomial. Lift its finitely many coefficients from $k$ to $C$ to obtain a monic $P(T)\in C[T]$ of positive degree with $P(x)\in IB_{\mathfrak n}$. Clear the finite denominators in this ideal membership, using [F3], to obtain $s\in B\setminus\mathfrak n$ with $sP(x)\in IB$. Put $z=P(x)$. The element $z$ is strongly transcendental over $C$ in $B$. Indeed, a relation $v\sum a_i z^i=0$ is a polynomial relation in $x$; by strong transcendence every coefficient of $v\sum a_iP(T)^i$ vanishes. Since $P$ is monic of positive degree, the highest block has coefficient $va_r$; deleting it and descending finitely proves $va_i=0$ for every $i$. [F1, F3, step 1.1, construct, algebra]

3.1 The element $x$ is integral over $C[z]$, by the monic equation $P(T)-z=0$. Hence $B$ is integral over $C[z]$ by [F2], and the subring $D=C[z,s]\subseteq B$ is reduced with $s$ integral over $C[z]$. Moreover $B$ is integral over $D$, since its monic equations over $C[z]$ remain monic equations over $D$. The membership $sz\in IB$ from step 2.1 contracts by [F2] to $sz\in\sqrt{ID}$. Apply [F1] in $D$ with variable $z$ and integral generator $s$: it gives $s\in\sqrt{ID}$. Consequently a positive power of $s$ belongs to $ID\subseteq IB\subseteq\mathfrak n$. Primality forces $s\in\mathfrak n$, contradicting the denominator chosen in step 2.1. [F1, F2, step 2.1, construct, algebra]

4.1 Thus no supplied prime can be a point of quasi-finiteness, proving the Statement. No additional prime, minimal component, normal closure or field extension was selected. If $S$ is zero it has no primes and injectivity makes $R$ zero. In all other cases the supplied prime ensures the local fiber in step 1.1 is nonzero, since its proper maximal ideal contains $I$; the positive-degree characteristic equation used in step 2.1 therefore exists. All selections in the argument were finite coefficient or denominator witnesses. [F3, step 1.1, step 2.1, step 3.1, algebra] ∎
