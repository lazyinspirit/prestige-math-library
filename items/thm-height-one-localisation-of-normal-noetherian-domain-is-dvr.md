---
id: thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
kind: theorem
title: "Height-one localizations of normal Noetherian domains are DVRs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-height-of-a-prime-ideal, def-localisation-at-a-prime-ideal, thm-localisation-at-a-prime-is-local, thm-prime-spectrum-of-a-localisation-bijection, def-integral-closure-and-integrally-closed-domain, def-noetherian-ring, thm-equivalent-characterisations-of-a-dvr, thm-noetherian-ring-quotients-and-localisations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (23.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 20.5 and Corollary 20.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a
prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a
discrete valuation ring.

## Facts & Assumptions

**Given:** A Noetherian integrally closed domain $R$ and a height-one prime ideal $\mathfrak p$.

[F1] The height of $\mathfrak p$ is
$\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p})$
([[def-height-of-a-prime-ideal]]).

[F2] Localisation at a prime means inverting $R\setminus\mathfrak p$
([[def-localisation-at-a-prime-ideal]]).

[L1] The ring $R_{\mathfrak p}$ is local with maximal ideal
$\mathfrak pR_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]).

[F3] A domain is integrally closed when every element of its fraction field
integral over it already lies in the domain
([[def-integral-closure-and-integrally-closed-domain]]).

[L3] Localisations of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[L4] A nonfield domain is a DVR exactly when it is a one-dimensional Noetherian
local integrally closed domain
([[thm-equivalent-characterisations-of-a-dvr]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3], the ring $R_{\mathfrak p}$ is a Noetherian local domain. By [F1], its Krull dimension is $\dim(R_{\mathfrak p})=\operatorname{ht}(\mathfrak p)=1$. [F1, L1, L3, given]

1.2 The localisation remains integrally closed. Let $x$ lie in the fraction field of $R_{\mathfrak p}$ and be integral over $R_{\mathfrak p}$. Write a monic equation $x^n+\frac{a_{n-1}}{s_{n-1}}x^{n-1}+\cdots+\frac{a_0}{s_0}=0$ with each $s_i\notin\mathfrak p$. Put $s=s_0\cdots s_{n-1}$. Then $sx$ is integral over $R$, so [F3] gives $sx\in R$. Since $s\notin\mathfrak p$, we conclude $x=(sx)/s\in R_{\mathfrak p}$. Thus $R_{\mathfrak p}$ is integrally closed. [F2, F3, given, algebra]

1.3 The maximal ideal of $R_{\mathfrak p}$ is nonzero. Choose $0\ne a\in\mathfrak p$. If $a/1=0$ in $R_{\mathfrak p}$, then some $s\notin\mathfrak p$ satisfies $sa=0$, impossible in the domain $R$. Hence $a/1\in\mathfrak pR_{\mathfrak p}$ is nonzero, so $R_{\mathfrak p}$ is not a field. [L1, given, algebra]

2.1 Steps 1.1, 1.2, and 1.3 verify condition 3 of [L4] for the ring $R_{\mathfrak p}$. Therefore $R_{\mathfrak p}$ is a discrete valuation ring. [L4, step 1.1, step 1.2, step 1.3] ∎
