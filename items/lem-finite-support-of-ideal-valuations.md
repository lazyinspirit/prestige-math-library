---
id: lem-finite-support-of-ideal-valuations
kind: lemma
title: "Prime-ideal valuations of a fractional ideal have finite support and add under products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-ideal-valuations-on-fractional-ideals, lem-fractional-ideal-operations-well-defined, def-dedekind-domain, thm-prime-spectrum-of-a-quotient-bijection, thm-noetherian-ring-quotients-and-localisations, thm-artinian-ring-characterisation-by-primes, thm-artinian-ring-has-finitely-many-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $I,J$ be nonzero fractional ideals. Then $v_{\mathfrak p}(I)=0$ for all but finitely many nonzero prime ideals $\mathfrak p$, and $v_{\mathfrak p}(IJ)=v_{\mathfrak p}(I)+v_{\mathfrak p}(J)$ for every nonzero prime ideal $\mathfrak p$.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and nonzero fractional ideals $I,J$.

[F1] The valuation $v_{\mathfrak p}(I)$ is defined by the equality $I_{\mathfrak p}=\mathfrak p^{v_{\mathfrak p}(I)}R_{\mathfrak p}$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

[L1] Fractional-ideal products are well defined inside the common fraction field ([[lem-fractional-ideal-operations-well-defined]]).

[F2] A Dedekind domain is a Noetherian integrally closed domain of dimension $1$ ([[def-dedekind-domain]]).

[L2] Prime ideals of a quotient ring correspond exactly to prime ideals containing the quotient ideal ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L3] Quotients of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L4] Assuming Choice, a Noetherian ring is Artinian exactly when every prime ideal is maximal ([[thm-artinian-ring-characterisation-by-primes]]).

[L5] An Artinian ring has only finitely many maximal ideals ([[thm-artinian-ring-has-finitely-many-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Choose $0\neq x\in I$ and $0\neq d\in R$ with $dI\subseteq R$, and put $a:=dx\in R$. If a nonzero prime ideal $\mathfrak p$ contains neither $a$ nor $d$, then both $a/1$ and $d/1$ are units in $R_{\mathfrak p}$, so $x=(a/1)(d/1)^{-1}$ is a unit of $R_{\mathfrak p}$. Hence $R_{\mathfrak p}=xR_{\mathfrak p}\subseteq I_{\mathfrak p}\subseteq d^{-1}R_{\mathfrak p}=R_{\mathfrak p}$, so $I_{\mathfrak p}=R_{\mathfrak p}$ and therefore $v_{\mathfrak p}(I)=0$. [F1, L1, given, choose]

2.1 Put $b:=ad$. If $b$ is a unit, then no nonzero prime ideal contains $b$. Otherwise every prime ideal containing $(b)$ is nonzero, hence maximal because [F2] gives $\dim R=1$. By [L2], every prime ideal of $R/(b)$ is therefore maximal. The quotient $R/(b)$ is Noetherian by [L3], so [L4] makes it Artinian, and then [L5] gives only finitely many maximal ideals. Translating back through [L2], only finitely many nonzero prime ideals of $R$ contain $b$. [F2, L2, L3, L4, L5, step 1.1, algebra]

3.1 Combining steps 1.1 and 2.1, only finitely many nonzero prime ideals can satisfy $v_{\mathfrak p}(I)\neq0$. [step 1.1, step 2.1]

4.1 Fix a nonzero prime ideal $\mathfrak p$. By [F1], write $I_{\mathfrak p}=\mathfrak p^mR_{\mathfrak p}$ and $J_{\mathfrak p}=\mathfrak p^nR_{\mathfrak p}$. Localizing the defining finite sums for a product gives $(IJ)_{\mathfrak p}=I_{\mathfrak p}J_{\mathfrak p}=\mathfrak p^{m+n}R_{\mathfrak p}$, so $v_{\mathfrak p}(IJ)=m+n=v_{\mathfrak p}(I)+v_{\mathfrak p}(J)$. [F1, L1, algebra] ∎
