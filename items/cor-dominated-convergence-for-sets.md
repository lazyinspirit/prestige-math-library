---
id: cor-dominated-convergence-for-sets
kind: corollary
title: "Measures converge for a convergent sequence of sets contained in one finite-measure set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-measure-of-set-liminf, thm-measure-of-set-limsup, prop-set-limsup-and-liminf-membership, def-limsup-and-liminf-of-nonnegative-extended-sequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $(E_n)$ and $E$ be measurable sets. Suppose there is measurable $D$ with $\mu(D)<+\infty$ and $E_n\subseteq D$ for every $n$, and suppose membership converges pointwise to membership in $E$: for every $x$ there is $N$ such that, for all $n\ge N$, one has $x\in E_n$ if and only if $x\in E$. Then

$$\liminf_n\mu(E_n)=\limsup_n\mu(E_n)=\mu(E).$$

In particular the real sequence $\mu(E_n)$ converges to $\mu(E)$.

## Facts & Assumptions

**Given:** Measurable $E_n,E,D$ with $E_n\subseteq D$, $\mu(D)<+\infty$, and pointwise convergence of memberships to $E$.

[L1] For a sequence of sets, eventual membership characterizes the set liminf and repeated membership characterizes the set limsup ([[prop-set-limsup-and-liminf-membership]]).

[L2] One has $\mu(\liminf E_n)\le\liminf\mu(E_n)$ ([[thm-measure-of-set-liminf]]).

[L3] If the union has finite measure, then $\limsup\mu(E_n)\le\mu(\limsup E_n)$ ([[thm-measure-of-set-limsup]]).

[L4] The numerical liminf and limsup are the supremum of tail infima and the infimum of tail suprema, respectively ([[def-limsup-and-liminf-of-nonnegative-extended-sequences]]).

## Proof

**Proof technique:** direct.

1.1 The membership hypothesis and [L1] give $\liminf_nE_n=E=\limsup_nE_n$. [given, L1]

1.2 Since every $E_n\subseteq D$, their union is contained in $D$ and has finite measure. Moreover $E\subseteq D$: every $x\in E$ belongs to $E_n$ for all sufficiently large $n$, and hence belongs to $D$. [given]

2.1 Apply [L2] and [L3] using steps 1.1 and 1.2 to obtain $\mu(E)\le\liminf_n\mu(E_n)\le\limsup_n\mu(E_n)\le\mu(E)$. [step 1.1, step 1.2, L2, L3, L4]

3.1 All quantities in step 2.1 are therefore equal; they are finite because $E\subseteq D$, so the usual squeeze criterion gives real convergence to $\mu(E)$. [step 1.2, step 2.1] ∎
