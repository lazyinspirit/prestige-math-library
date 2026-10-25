---
id: ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval
kind: example
title: "The polynomial algebra is dense but not closed on a nondegenerate compact interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-stone-weierstrass-general, cor-weierstrass-approximation-on-a-closed-interval, thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, thm-heine-borel-r, lem-compactness-of-a-subspace-is-ambient, lem-real-line-is-a-metric-space, thm-metric-hausdorff-separation, lem-t0-t1-and-hausdorff-are-hereditary, def-hereditary-property, def-subspace-topology-top, lem-algebra-of-continuous-real-maps-on-a-space, def-continuous-map-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Example 21.2.1 and Corollary 21.2.7"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Example

Let $a<b$ be real numbers, and let $P[a,b]$ be the real algebra of restrictions to $[a,b]$ of real polynomials. Then $P[a,b]$ is uniformly dense in $C([a,b],\mathbb R)$ but is not uniformly closed.

## Facts & Assumptions

**Given:** Reals $a<b$ and the algebra $P[a,b]$ of restricted real polynomials.

[L1] Every unital point-separating real function algebra on a compact Hausdorff space is uniformly dense in the full real continuous-function space ([[thm-real-stone-weierstrass-general]]).

[L2] For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[L3] A nonzero real polynomial of degree $n$ has at most $n$ distinct real roots ([[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]).

[L4] For $a\le b$, every family of open subsets of $\mathbb R$ whose union contains $[a,b]$ has a finite subfamily whose union already contains $[a,b]$ ([[thm-heine-borel-r]]).

[L5] The function $d_{\mathbb R}(s,t)=|s-t|$ is a metric on $\mathbb R$, and its metric topology is the usual topology ([[lem-real-line-is-a-metric-space]]).

[L6] Every metric space is Hausdorff: distinct points are separated by disjoint open balls ([[thm-metric-hausdorff-separation]]).

[L7] A subset $A$ of a topological space $X$ is a compact subset — that is, the subspace $(A,\mathcal T_A)$ is a compact space — if and only if every family of open subsets of $X$ whose union contains $A$ has a finite subfamily whose union contains $A$, or else $A=\varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], clause 1).

[L8] Hausdorffness is hereditary: every subspace of a Hausdorff space is Hausdorff ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[def-hereditary-property]]).

[L9] The inclusion of a subspace into its ambient space is continuous ([[def-subspace-topology-top]]).

[L10] For continuous $f,g:X\to\mathbb R$ on a topological space, $f+g$, $fg$ and $|f|$ are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L11] A map is continuous when the preimage of every open set containing an image point contains an open set around that point ([[def-continuous-map-top]]).

## Verification

**Proof technique:** direct.

1.1 By [L4] and the equivalence in [L7], the subspace $[a,b]$ of $\mathbb R$ is a compact topological space; by [L5] and [L6] the line $\mathbb R$ is Hausdorff, so [L8] makes the subspace $[a,b]$ Hausdorff. [L4, L5, L6, L7, L8]

1.2 Put $c:=(a+b)/2$, so $a<c<b$, let $\iota:[a,b]\to\mathbb R$ be the inclusion, and put $h:=|\iota-c|$, so that $h(x)=|x-c|$. A constant map is continuous because the preimage of every open set is $\varnothing$ or all of $[a,b]$, which is the condition in [L11]; $\iota$ is continuous by [L9]; so [L10] makes $\iota-c$ and then $h$ continuous. [L9, L10, L11, given, algebra]

2.1 The restricted polynomials form a unital real function algebra, and the coordinate polynomial $x\mapsto x$ separates distinct points; hence [L1] makes $P[a,b]$ uniformly dense in $C([a,b],\mathbb R)$. In particular, [L2] also places the continuous function $h$ from step 1.2 in its uniform closure. [step 1.1, step 1.2, L1, L2, algebra]

2.2 Suppose a real polynomial $p$ agreed with $h$ on $[a,b]$. Then $q(x):=p(x)-(x-c)$ vanishes at every $x\in[c,b]$; if $q$ were nonzero, that nondegenerate interval would contain more distinct roots than the finite bound in [L3], so $q$ is the zero polynomial and $p(x)=x-c$ identically. [step 1.2, L3, algebra]

3.1 Evaluating the identity from step 2.2 at $a$ gives $p(a)=a-c<0$, whereas $h(a)=|a-c|=c-a>0$, a contradiction. Therefore $h\notin P[a,b]$. [step 1.2, step 2.2, algebra]

4.1 Step 2.1 puts $h$ in the uniform closure and step 3.1 keeps it outside $P[a,b]$, so $P[a,b]$ is not closed; together with the density in step 2.1 this proves the example. [step 2.1, step 3.1] ∎
