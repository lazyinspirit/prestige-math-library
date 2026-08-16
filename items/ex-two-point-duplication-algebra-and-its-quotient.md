---
id: ex-two-point-duplication-algebra-and-its-quotient
kind: example
title: "Endpoint-duplicating functions on $[0,1]$ become all continuous functions on the endpoint quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-closed-real-function-algebras-are-function-spaces-on-their-quotients, def-function-algebra-indistinguishability-quotient, thm-heine-borel-r, lem-compactness-of-a-subspace-is-ambient, lem-real-line-is-a-metric-space, thm-metric-hausdorff-separation, lem-t0-t1-and-hausdorff-are-hereditary, def-hereditary-property, def-subspace-topology-top, lem-algebra-of-continuous-real-maps-on-a-space, def-continuous-map-top]
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
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.15"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Example

Let
$$A:=\{f\in C([0,1],\mathbb R):f(0)=f(1)\}.$$
Then $A$ is a uniformly closed unital real function algebra. Its indistinguishability relation identifies exactly the two endpoints $0$ and $1$, and the descent map identifies $A$ isometrically with all continuous real-valued functions on the endpoint quotient $[0,1]/\{0,1\}$.

## Facts & Assumptions

**Given:** The closed interval $[0,1]$, the endpoint-equality algebra $A$, and its indistinguishability quotient.

[L1] For a uniformly closed unital real function algebra on a compact Hausdorff space, descent is a unital algebra isomorphism onto the full continuous real function algebra of its indistinguishability quotient, and it is isometric when the space is nonempty ([[thm-closed-real-function-algebras-are-function-spaces-on-their-quotients]]).

[L2] The indistinguishability relation is $x\sim_Ay$ exactly when $f(x)=f(y)$ for every $f\in A$ ([[def-function-algebra-indistinguishability-quotient]]).

[L3] For $a\le b$, every family of open subsets of $\mathbb R$ whose union contains $[a,b]$ has a finite subfamily whose union already contains $[a,b]$ ([[thm-heine-borel-r]]).

[L4] A subset $A$ of a topological space $X$ is a compact subset — that is, the subspace $(A,\mathcal T_A)$ is a compact space — if and only if every family of open subsets of $X$ whose union contains $A$ has a finite subfamily whose union contains $A$, or else $A=\varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], clause 1).

[L5] The function $d_{\mathbb R}(s,t)=|s-t|$ is a metric on $\mathbb R$, and its metric topology is the usual topology ([[lem-real-line-is-a-metric-space]]).

[L6] Every metric space is Hausdorff: distinct points are separated by disjoint open balls ([[thm-metric-hausdorff-separation]]).

[L7] Hausdorffness is hereditary: every subspace of a Hausdorff space is Hausdorff ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[def-hereditary-property]]).

[L8] The inclusion of a subspace into its ambient space is continuous ([[def-subspace-topology-top]]).

[L9] For continuous $f,g:X\to\mathbb R$ on a topological space, $f+g$, $fg$, $|f|$, $\max(f,g)$ and $\min(f,g)$ are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L10] A map is continuous when the preimage of every open set containing an image point contains an open set around that point ([[def-continuous-map-top]]).

## Verification

**Proof technique:** direct.

1.1 By [L3] and the equivalence in [L4], the subspace $[0,1]$ of $\mathbb R$ is a compact topological space. By [L5] and [L6] the line $\mathbb R$ is Hausdorff, so [L7] makes the subspace $[0,1]$ Hausdorff. [L3, L4, L5, L6, L7]

1.2 Endpoint equality is preserved by pointwise sums, real scalar multiples, and products, and every constant has equal endpoint values, so $A$ is a unital real function algebra. [given, algebra]

1.3 If $g$ is uniformly approximable by members of $A$, then for every $\varepsilon>0$ some $f\in A$ satisfies $|g(0)-f(0)|<\varepsilon/2$ and $|g(1)-f(1)|<\varepsilon/2$; since $f(0)=f(1)$, this forces $g(0)=g(1)$. Hence $A$ is uniformly closed. [given, algebra]

1.4 For $c\in(0,1)$ let $\iota:[0,1]\to\mathbb R$ be the inclusion and put $t_c:=\min\{c^{-1}\iota,\ (1-c)^{-1}(1-\iota)\}$. A constant map is continuous because the preimage of every open set is $\varnothing$ or all of $[0,1]$, which is the condition in [L10]; $\iota$ is continuous by [L8]; so [L9] makes the two affine maps and their pointwise minimum continuous. For $0\le x\le c$ one has $x/c\le1\le(1-x)/(1-c)$, and for $c\le x\le1$ the two inequalities reverse, so $t_c(x)=x/c$ on $[0,c]$ and $t_c(x)=(1-x)/(1-c)$ on $[c,1]$. Hence $t_c(0)=t_c(1)=0$, so $t_c\in A$; also $t_c(c)=1$, and $t_c(x)>0$ for $0<x<1$, so $t_c$ vanishes only at the two endpoints. [L8, L9, L10, construct, algebra]

2.1 Every member of $A$ identifies $0$ and $1$. Conversely, if $x\ne y$ and $\{x,y\}\ne\{0,1\}$, at least one of the two points is interior; choosing that point as $c$ in step 1.4 gives a tent function taking value $1$ there and a value strictly below $1$ at the other point. Thus [L2] says that the only nonsingleton equivalence class is $\{0,1\}$. [step 1.4, L2]

3.1 Steps 1.1, 1.2, and 1.3 meet the hypotheses of [L1], and step 2.1 identifies its quotient; since $[0,1]$ is nonempty, [L1] gives the isometric conclusion, so descent is an isometric unital algebra isomorphism $A\cong C([0,1]/\{0,1\},\mathbb R)$. [step 1.1, step 1.2, step 1.3, step 2.1, L1] ∎
