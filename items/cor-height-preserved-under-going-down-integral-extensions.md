---
id: cor-height-preserved-under-going-down-integral-extensions
kind: corollary
title: "Under going down and incomparability, lying-over primes have the same finite height"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-height-of-a-prime-ideal, def-krull-dimension-of-a-ring, thm-going-down-over-normal-domains, thm-incomparability-for-integral-extensions, thm-prime-spectrum-of-a-localisation-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.9)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $A\subseteq B$ be an integral extension of domains with $A$ integrally closed. If $\mathfrak q\in\operatorname{Spec}(B)$ lies over $\mathfrak p:=\mathfrak q\cap A$ and one of the heights $\operatorname{ht}(\mathfrak p)$ or $\operatorname{ht}(\mathfrak q)$ is finite, then both are finite and
$$
\operatorname{ht}(\mathfrak q)=\operatorname{ht}(\mathfrak p).
$$

## Facts & Assumptions

**Given:** An integral extension of domains $A\subseteq B$ with $A$ integrally closed, a prime $\mathfrak q$ of $B$, and its contraction $\mathfrak p:=\mathfrak q\cap A$.

[L1] The height of a prime ideal is the Krull dimension of the corresponding prime localisation ([[def-height-of-a-prime-ideal]]).

[L2] The Krull dimension of a nonzero commutative ring is the supremum of the lengths of its strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

[L3] Assuming the Axiom of Choice, going down holds for $A\subseteq B$ ([[thm-going-down-over-normal-domains]]).

[L4] Comparable primes with the same contraction are equal under an integral map ([[thm-incomparability-for-integral-extensions]]).

[L5] Prime ideals of a localisation correspond exactly to the prime ideals of the original ring disjoint from the denominator set, with strict inclusions preserved ([[thm-prime-spectrum-of-a-localisation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], strict prime chains below $\mathfrak p$ in $A$ correspond to strict prime chains in $A_{\mathfrak p}$, and strict prime chains below $\mathfrak q$ in $B$ correspond to strict prime chains in $B_{\mathfrak q}$. Since [L1] defines height as the dimension of these local rings and [L2] defines dimension as the supremum of the lengths of strict prime chains, it is enough to compare finite strict chains below $\mathfrak p$ and $\mathfrak q$ in the original rings. [L1, L2, L5]

2.1 Let $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n=\mathfrak p$ be any finite strict prime chain in $A$. Repeatedly applying [L3] from the top prime $\mathfrak q$ downward produces primes $\mathfrak q_0\subseteq\cdots\subseteq\mathfrak q_n=\mathfrak q$ with $\mathfrak q_i\cap A=\mathfrak p_i$. These inclusions are strict, because $\mathfrak q_i=\mathfrak q_{i+1}$ would force $\mathfrak p_i=\mathfrak p_{i+1}$. Therefore step 1.1 gives $\operatorname{ht}(\mathfrak q)\ge\operatorname{ht}(\mathfrak p)$. [L3, step 1.1, given, algebra]

2.2 Conversely, let $\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_m=\mathfrak q$ be any finite strict prime chain in $B$. The contractions form a chain ending at $\mathfrak p$, and [L4] makes each adjacent contraction strict. Hence step 1.1 gives $\operatorname{ht}(\mathfrak p)\ge\operatorname{ht}(\mathfrak q)$. [L4, step 1.1, given]

3.1 If one of the two heights is finite, the inequalities from steps 2.1 and 2.2 force the other to be finite and equal to it. Therefore $\operatorname{ht}(\mathfrak q)=\operatorname{ht}(\mathfrak p)$ whenever one of them is finite. [step 2.1, step 2.2] ∎
