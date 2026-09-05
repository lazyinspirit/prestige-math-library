---
id: lem-idempotent-gives-clopen-spectrum-partition
kind: lemma
title: "An idempotent partitions the spectrum into complementary clopen subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-distinguished-subset-of-spectrum, lem-distinguished-subset-identities, def-prime-and-maximal-ideals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 14.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.22: Connected components of spectra"
      url: "https://stacks.math.columbia.edu/tag/04PP"
verification:
  precheck: pass
---

## Statement

Let $R$ be a commutative ring and let $e\in R$ satisfy $e^2=e$. Then $$ \operatorname{Spec}(R)=D(e)\sqcup D(1-e)=V(1-e)\sqcup V(e), $$ and both $D(e)$ and $D(1-e)$ are clopen.

## Facts & Assumptions

**Given:** A commutative ring $R$ and an idempotent $e\in R$.

[L1] $D(f)$ is the set of prime ideals that do not contain $f$, and $D(fg)=D(f)\cap D(g)$ ([[def-principal-distinguished-subset-of-spectrum]], [[lem-distinguished-subset-identities]]).

[L2] A prime ideal is proper and has the factor property $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$ ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Since $e(1-e)=0$, every prime ideal $\mathfrak p$ contains $e$ or $1-e$ by [L2]. It cannot contain both, because then $1=e+(1-e)$ would lie in $\mathfrak p$, contradicting properness. Therefore each prime lies in exactly one of $D(e)$ and $D(1-e)$, so $\operatorname{Spec}(R)=D(e)\sqcup D(1-e)$. [L1, L2, given]

2.1 A prime ideal lies in $D(e)$ exactly when it does not contain $e$, which by step 1.1 is equivalent to containing $1-e$. Hence $D(e)=V(1-e)$. Similarly $D(1-e)=V(e)$. Since vanishing sets are closed and distinguished opens are open, both subsets are clopen. [L1, step 1.1, algebra]

3.1 Thus an idempotent partitions the spectrum into complementary clopen subsets. [step 1.1, step 2.1] ∎
