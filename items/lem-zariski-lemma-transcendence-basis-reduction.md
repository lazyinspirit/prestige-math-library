---
id: lem-zariski-lemma-transcendence-basis-reduction
kind: lemma
title: "A finite-type field reduces to a localization over a transcendence basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-field-extension, lem-maximal-algebraically-independent-subset-is-a-transcendence-basis, def-integral-element-and-algebraic-integer, cor-integral-elements-form-a-subring, thm-universal-property-of-localisation, prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized F-FINAL-8 integrality and localization repair; local checks only, no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 13.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k\subseteq K$ be a field extension, and assume that $K$ is finitely
generated as a $k$-algebra. Let $t_1,\ldots,t_r\in K$ be a transcendence basis
of $K$ over $k$. Then there exists a nonzero polynomial
$s\in k[t_1,\ldots,t_r]$ such that $K$ is integral over the localization
$$ k[t_1,\ldots,t_r]\left[\frac1s\right]. $$

## Facts & Assumptions

**Given:** A field extension $k\subseteq K$, a finite $k$-algebra generating set for $K$, and a transcendence basis $t_1,\ldots,t_r$ of $K$ over $k$.

[L1] The notation $k(t_1,\ldots,t_r)$ denotes the generated subfield ([[def-finitely-generated-field-extension]]).

[L2] A transcendence basis makes the ambient field algebraic over the generated field ([[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

[L3] Integral means satisfying a monic polynomial over the base, and integral elements over a nonzero subring form a subring ([[def-integral-element-and-algebraic-integer]], [[cor-integral-elements-form-a-subring]]).

[L4] A homomorphism inverting the denominators extends to the localization. For a domain localized at nonzero elements the canonical map is injective ([[thm-universal-property-of-localisation]], [[prop-localisation-zero-equality-and-kernel-criteria]]).

## Proof

**Proof technique:** direct.

1.1 Choose generators $a_1,\ldots,a_m\in K$ of $K$ as a $k$-algebra. Since $t_1,\ldots,t_r$ is a transcendence basis, [L2] shows that each $a_i$ is algebraic over $F:=k(t_1,\ldots,t_r)$. [L1, L2, given, choose]

2.1 Put $R=k[t_1,\ldots,t_r]\subseteq K$. The ratios $b/c$ with $b,c\in R$ and $c\ne0$ form a subfield of $K$ containing $R$; conversely every such ratio lies in $F$, so this subfield equals $F$. For each of the finitely many $a_i$, clear the finitely many denominators in an algebraic equation over $F$. This gives a nonzero polynomial $c_{i,d_i}X^{d_i}+\cdots+c_{i,0}\in R[X]$ vanishing at $a_i$, with $d_i\ge1$ and $c_{i,d_i}\ne0$. Put $s=\prod_i c_{i,d_i}$, taking $s=1$ for an empty generating list. Since $R$ is a subring of the field $K$, $s\ne0$. [L1, step 1.1, choose, algebra]

3.1 By [L4], $A=R[1/s]$ embeds in $K$ as the fractions $b/s^j$: the extension map sends $b/s^j$ to the same quotient in $K$, and a zero image forces $b=0$. Each leading coefficient has inverse $(\prod_{h\ne i}c_{h,d_h})/s$ in $A$. Dividing its equation by that coefficient makes it monic, so every $a_i$ is integral over the nonzero ring $A$ by [L3]. [L3, L4, step 2.1, algebra]

4.1 Every $a\in A$ is integral over $A$ by the polynomial $X-a$. Thus the integral subring of $K$ from [L3] contains $A$ and all the $a_i$, hence contains $A[a_1,\ldots,a_m]$. Since $k\subseteq A\subseteq K$ and $k[a_1,\ldots,a_m]=K$, this generated algebra equals $K$. Therefore every element of $K$ is integral over $A$. [L3, step 1.1, step 3.1, algebra]

5.1 Thus $K$ is integral over $k[t_1,\ldots,t_r][1/s]$. [step 4.1] ∎
