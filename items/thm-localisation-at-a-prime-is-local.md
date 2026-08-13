---
id: thm-localisation-at-a-prime-is-local
kind: theorem
title: '$R_{\mathfrak p}$ is local with unique maximal ideal $\mathfrak pR_{\mathfrak p}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-at-a-prime-ideal, prop-localisation-zero-equality-and-kernel-criteria, prop-units-in-a-localisation, def-local-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Statement

Let $\mathfrak p$ be a prime ideal of a commutative ring $R$. Then $R_{\mathfrak p}$ is a nonzero local ring. Its unique maximal ideal is
$$ \mathfrak pR_{\mathfrak p}=\{r/s:r\in\mathfrak p,\ s\notin\mathfrak p\}, $$
and its units are exactly the fractions $r/s$ with $r\notin\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a prime ideal $\mathfrak p$.

[F1] The denominators of $R_{\mathfrak p}$ are the elements outside $\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

[F2] A fraction $r/s$ is a unit exactly when $ar$ belongs to the denominator set for some $a\in R$ ([[prop-units-in-a-localisation]]).

[F3] Fractions satisfy $r/s=r'/s'$ exactly when some denominator $u$ annihilates $rs'-r's$; in particular, a fraction vanishes exactly when some denominator annihilates its numerator ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F4] A local ring is a nonzero commutative ring with a unique maximal ideal ([[def-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 The ring is nonzero: if $1/1=0$, [F3] gives $u\notin\mathfrak p$ with $u=0$, impossible because $0\in\mathfrak p$. [F1, F3]

1.2 By [F2], if $r\notin\mathfrak p$, then $r/s$ is a unit by taking $a=1$. If $r\in\mathfrak p$ and $ar$ lay outside $\mathfrak p$, the ideal property would be contradicted; hence $r/s$ is not a unit. Thus the displayed set is exactly the set of nonunits. [F1, F2]

1.3 Membership in the displayed set is independent of the chosen fraction: if $r/s=r'/s'$ with $r\in\mathfrak p$, then [F3] gives $u\notin\mathfrak p$ with $u(rs'-r's)=0$. Hence $ur's=urs'\in\mathfrak p$; primality and $u,s\notin\mathfrak p$ force $r'\in\mathfrak p$. [F1, F3, algebra]

2.1 The displayed set is an ideal: common-denominator addition and multiplication by arbitrary fractions preserve numerator membership in $\mathfrak p$. It is proper because $1\notin\mathfrak p$, so $1/1$ is not in it. Every proper ideal contains only nonunits, so step 1.2 makes every proper ideal lie inside it. It is therefore the unique maximal ideal, and [F4] makes $R_{\mathfrak p}$ local. [F4, step 1.2, step 1.3, algebra] ∎
