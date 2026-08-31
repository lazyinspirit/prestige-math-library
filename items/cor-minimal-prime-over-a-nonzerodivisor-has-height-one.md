---
id: cor-minimal-prime-over-a-nonzerodivisor-has-height-one
kind: corollary
title: "A minimal prime over a principal nonzerodivisor has height one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-noetherian-local-domain-dimension-zero-iff-field, thm-krull-principal-ideal-theorem, lem-principal-ideal-theorem-reduction-to-local-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be a Noetherian commutative ring, let $x\in R$ be a nonzerodivisor, and let $\mathfrak p$ be a prime ideal minimal over $(x)$. Then $\operatorname{ht}(\mathfrak p)=1$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a nonzerodivisor $x\in R$, and a prime ideal $\mathfrak p$ minimal over $(x)$.

[L1] Every prime minimal over a principal ideal has height at most $1$ ([[thm-krull-principal-ideal-theorem]]).

[L2] The principal-ideal reduction passes to a Noetherian local domain whose maximal ideal is minimal over the image of $x$ ([[lem-principal-ideal-theorem-reduction-to-local-domain]]).

[L3] A Noetherian local domain has dimension zero exactly when it is a field ([[cor-noetherian-local-domain-dimension-zero-iff-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{ht}(\mathfrak p)\le1$. [L1, given]

2.1 Apply [L2] to a minimal prime $\mathfrak q\subseteq\mathfrak p$ of $R$. Because $x$ is a nonzerodivisor, $x\notin\mathfrak q$, so $\mathfrak q\ne\mathfrak p$. In the reduced local domain $A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q}$, the image of $x$ lies in the maximal ideal. If that maximal ideal had height $0$, then [L3] would make $A$ a field, forcing $x/1$ to be a unit, contradiction. Hence the maximal ideal of $A$ has height $1$, so $\mathfrak p$ has height at least $1$. [L2, L3, step 1.1, given]

3.1 Steps 1.1 and 2.1 give $\operatorname{ht}(\mathfrak p)=1$. [step 1.1, step 2.1] ∎
