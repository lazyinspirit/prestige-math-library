---
id: thm-local-characterisation-of-dedekind-domains
kind: theorem
title: "Equivalent local characterizations of Dedekind domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-domain, lem-dedekind-localisation-at-nonzero-prime-is-dvr, lem-local-dvr-condition-implies-global-normality, lem-local-dvr-condition-implies-dimension-one, thm-ideals-in-a-dvr, thm-equivalent-characterisations-of-a-dvr, thm-noetherian-ring-quotients-and-localisations, thm-localisation-at-a-prime-is-local]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Noetherian domain that is not a field. The following are equivalent:

1. $R$ is a Dedekind domain.
2. For every nonzero prime ideal $\mathfrak p$ of $R$, the localisation $R_{\mathfrak p}$ is a discrete valuation ring.
3. Every nonzero proper ideal of $R$ becomes principal after localising at each maximal ideal.

Under these equivalent conditions, every nonzero prime ideal of $R$ is maximal.

## Facts & Assumptions

**Given:** A Noetherian domain $R$ that is not a field.

[F1] A Dedekind domain is a Noetherian integrally closed domain of Krull dimension $1$ ([[def-dedekind-domain]]).

[L1] If $R$ is Dedekind, then $R_{\mathfrak p}$ is a DVR for every nonzero prime ideal $\mathfrak p$ ([[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[L2] If each nonzero-prime localisation is a DVR, then $R$ is integrally closed ([[lem-local-dvr-condition-implies-global-normality]]).

[L3] If each nonzero-prime localisation is a DVR, then every nonzero prime of $R$ is maximal and $\dim R=1$ ([[lem-local-dvr-condition-implies-dimension-one]]).

[L4] Every nonzero ideal of a DVR is principal ([[thm-ideals-in-a-dvr]]).

[L5] A nonfield domain is a DVR exactly when it is a local PID with nonzero maximal ideal ([[thm-equivalent-characterisations-of-a-dvr]]).

[L6] Localisations of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L7] Localising at a prime ideal produces a local ring ([[thm-localisation-at-a-prime-is-local]]).

## Proof

**Proof technique:** direct.

1.1 If $R$ is Dedekind, then [L1] gives that each localisation at a nonzero prime is a DVR. This proves $(1)\Rightarrow(2)$. [L1, given]

1.2 Assume (2). Then [L2] makes $R$ integrally closed, and [L3] gives $\dim R=1$ together with maximality of the nonzero primes. Because $R$ was assumed Noetherian and nonfield, [F1] now says that $R$ is Dedekind. This proves $(2)\Rightarrow(1)$. [F1, L2, L3, given]

1.3 Still assuming (2), let $I$ be a nonzero proper ideal and let $\mathfrak m$ be a maximal ideal. If $I\nsubseteq\mathfrak m$, then $I_{\mathfrak m}=R_{\mathfrak m}$ because some element of $I$ becomes a unit. If $I\subseteq\mathfrak m$, then $\mathfrak m$ is nonzero and [L4] applies in the DVR $R_{\mathfrak m}$ from (2), so $I_{\mathfrak m}$ is principal. Therefore (3) holds. [L3, L4, given, algebra]

1.4 Assume (3), and let $\mathfrak m$ be a maximal ideal. By [L6] and [L7], the ring $R_{\mathfrak m}$ is a Noetherian local domain. Let $J\subset R_{\mathfrak m}$ be a nonzero proper ideal, and let $I:=\{r\in R:r/1\in J\}$. Then $J=IR_{\mathfrak m}$, and $I$ is a nonzero proper ideal contained in $\mathfrak m$. Applying (3) at the maximal ideal $\mathfrak m$ shows that $J=I_{\mathfrak m}$ is principal. Hence every nonzero proper ideal of the local domain $R_{\mathfrak m}$ is principal, and because $R$ is not a field its maximal ideal $\mathfrak mR_{\mathfrak m}$ is nonzero. Therefore [L5] makes $R_{\mathfrak m}$ a DVR. Now let $\mathfrak p$ be a nonzero prime ideal and choose a maximal ideal $\mathfrak m\supseteq\mathfrak p$. In the DVR $R_{\mathfrak m}$, the extended ideal $\mathfrak pR_{\mathfrak m}$ is a nonzero prime ideal, so it equals the maximal ideal $\mathfrak mR_{\mathfrak m}$. Contracting to $R$ gives $\mathfrak p=\mathfrak m$, so every nonzero prime is maximal and therefore $R_{\mathfrak p}$ is a DVR by the first part applied with $\mathfrak m=\mathfrak p$. This proves $(3)\Rightarrow(2)$. [L5, L6, L7, given, algebra]

2.1 By [L3], any of the equivalent conditions forces every nonzero prime ideal of $R$ to be maximal. [L3, step 1.1, step 1.2, step 1.4] ∎
