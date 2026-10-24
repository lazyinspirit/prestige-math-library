---
id: cor-minimal-prime-over-a-nonzerodivisor-has-height-one
kind: corollary
title: "A minimal prime over a principal nonzerodivisor has height one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, cor-noetherian-local-domain-dimension-zero-iff-field, thm-krull-principal-ideal-theorem, lem-principal-ideal-theorem-reduction-to-local-domain, cor-radical-ideal-has-finitely-many-minimal-primes-noetherian, thm-nilradical-of-a-noetherian-ring-is-nilpotent, thm-noetherian-ring-quotients-and-localisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a Noetherian commutative ring, let $x\in R$ be a nonzerodivisor, and let $\mathfrak p$ be a prime ideal minimal over $(x)$. Then $\operatorname{ht}(\mathfrak p)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a nonzerodivisor $x\in R$, and a prime ideal $\mathfrak p$ minimal over $(x)$.

[L1] Every prime minimal over a principal ideal has height at most $1$ ([[thm-krull-principal-ideal-theorem]]).

[L2] The principal-ideal reduction passes to a Noetherian local domain whose maximal ideal is minimal over the image of $x$ ([[lem-principal-ideal-theorem-reduction-to-local-domain]]).

[L3] A Noetherian local domain has dimension zero exactly when it is a field ([[cor-noetherian-local-domain-dimension-zero-iff-field]]).

[L4] Under AC, the nilradical of a Noetherian ring is the finite intersection of its minimal primes, and the nilradical of a Noetherian localization is nilpotent ([[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]], [[thm-nilradical-of-a-noetherian-ring-is-nilpotent]], [[thm-noetherian-ring-quotients-and-localisations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{ht}(\mathfrak p)\le1$. [L1, given]

1.2 By [L4], the nilradical is a finite intersection of minimal primes. Since $\mathfrak p$ contains that intersection, it contains one of those primes; choose $\mathfrak q\subseteq\mathfrak p$. The localization $R_{\mathfrak q}$ is a nonzero Noetherian local ring with only one prime, $\mathfrak qR_{\mathfrak q}$. Its nilradical is therefore that maximal ideal and is nilpotent by [L4]. If $x\in\mathfrak q$, the image $x/1$ would be nilpotent in $R_{\mathfrak q}$, contradicting that multiplication by the nonzerodivisor $x$ remains injective after localization. Thus $x\notin\mathfrak q$ and $\mathfrak q\ne\mathfrak p$. [L4, given, choose]

2.1 Apply [L2] to this $\mathfrak q$. In the resulting Noetherian local domain $A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q}$, the image of $x$ is nonzero and lies in the maximal ideal. If that maximal ideal had height $0$, then [L3] would make $A$ a field, forcing $x/1$ to be a unit, contradiction. Hence the maximal ideal of $A$ has height at least $1$, so $\mathfrak p$ has height at least $1$. [L2, L3, step 1.2]

3.1 Steps 1.1 and 2.1 give $\operatorname{ht}(\mathfrak p)=1$. [step 1.1, step 2.1] ∎
