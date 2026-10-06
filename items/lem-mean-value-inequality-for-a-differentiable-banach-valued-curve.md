---
id: lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
kind: lemma
title: "Mean value inequality for a differentiable Banach-valued curve"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-frechet-derivative-between-banach-spaces
  - def-banach-space
  - lem-vector-operations-are-continuous-in-a-normed-space
  - lem-reverse-triangle-inequality-in-a-normed-space
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.1, Theorem 11.1 and Corollary 11.2, printed pp. 247-248"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 7, difference-quotient estimates in the proofs of Theorems 7.4 and 7.5, printed pp. 186-192"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $X$ be a Banach space, $a<b$, and let $\varphi:[a,b]\to X$ be continuous on $[a,b]$ and differentiable on $(a,b)$ in the sense of [[def-frechet-derivative-between-banach-spaces]]. If there is $C\ge0$ with $\|\varphi'(s)\| \le C$ for all $s\in(a,b)$, then $\|\varphi(b)-\varphi(a)\| \le C(b-a)$. In particular, if $\varphi$ is continuous, differentiable on $(a,b)$ and $\varphi'=0$ there, then $\varphi$ is constant.

## Facts & Assumptions

**Given:** A real or complex Banach space $X$ ([[def-banach-space]]), read as a real vector space for differentiation so that the real-variable Fréchet derivative of [[def-frechet-derivative-between-banach-spaces]] applies (the complex case uses the underlying real structure, and complex differentiability is a special case); real numbers $a<b$, a curve $\varphi:[a,b]\to X$ continuous on $[a,b]$ and differentiable on $(a,b)$, and a constant $C\ge0$ with $\|\varphi'(s)\|\le C$ for all $s\in(a,b)$.

[F1] At each $s\in(a,b)$ the Fréchet derivative $\varphi'(s):\mathbb R\to X$ is bounded linear and there is a remainder with $\bigl\|\varphi(s+h)-\varphi(s)-\varphi'(s)h\bigr\|/|h|\to0$ as $h\to0$ ([[def-frechet-derivative-between-banach-spaces]]).

[F2] The norm function is continuous on $X$ and satisfies the reverse triangle inequality $\bigl|\|x\|-\|y\|\bigr|\le\|x-y\|$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[F3] Vector addition and scalar multiplication on $X$ are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]), so limits of sums and scalar multiples may be taken termwise.



## Proof

**Proof technique:** direct, by a maximal-interval argument on the auxiliary function $d(\tau)=\|\varphi(\tau)-\varphi(r)\|-\widetilde C(\tau-r)$.

1.1 Fix $\widetilde C>C$ and $r\in(a,b)$, and put $d(\tau):=\|\varphi(\tau)-\varphi(r)\|-\widetilde C(\tau-r)$ for $\tau\in[r,b]$. By [F2] and [F3] the function $d$ is continuous, so $S:=\{\tau\in[r,b]:d(\tau)\le0\}$ is a nonempty closed subset of $[r,b]$, since $r\in S$; being nonempty and bounded above it has a supremum $\tau_0\in S$, which is therefore its maximum. [F2, F3]

2.1 If $\tau_0<b$ then $\tau_0>r$: if $\tau_0=r$, then [F1] at $r$ (legitimate because $r>a$) gives $\varphi(r+h)=\varphi(r)+\varphi'(r)h+o(h)$ with $\|\varphi'(r)\|\le C$, so by [F2] $d(r+h)\le(C-\widetilde C)h+o(h)<0$ for all sufficiently small $h>0$, contradicting the maximality of $r=\tau_0$; hence $\tau_0\in(r,b)\subseteq(a,b)$, where $\varphi$ is differentiable. [F1, F2, step 1.1]

3.1 If $\tau_0<b$, then differentiability at $\tau_0$ gives $\varphi(\tau_0+h)=\varphi(\tau_0)+\varphi'(\tau_0)h+o(h)$ with $\|\varphi'(\tau_0)\|\le C$, so for small $h>0$ [F2] gives $d(\tau_0+h)\le d(\tau_0)+(C-\widetilde C)h+o(h)\le(C-\widetilde C)h+o(h)<0$, since $d(\tau_0)\le0$; then $\tau_0+h\in S$, contradicting the maximality of $\tau_0$. Hence $\tau_0=b$. [F1, F2, step 2.1]

4.1 At $\tau_0=b$ the defining inequality of $S$ reads $d(b)\le0$, that is $\|\varphi(b)-\varphi(r)\|\le\widetilde C(b-r)$. [step 3.1]

5.1 Letting $r\downarrow a$ along a sequence: $\varphi(r)\to\varphi(a)$ by continuity and [F3], so [F2] gives $\|\varphi(b)-\varphi(r)\|\to\|\varphi(b)-\varphi(a)\|$, and $b-r\to b-a$; hence $\|\varphi(b)-\varphi(a)\|\le\widetilde C(b-a)$. [F2, F3, step 4.1]

6.1 Since $\widetilde C>C$ was arbitrary, $\|\varphi(b)-\varphi(a)\|\le C(b-a)$. [step 5.1, algebra]

7.1 If in addition $\varphi'=0$ on $(a,b)$, take $C=0$ in [step 6.1]; then for every $t\in(a,b]$ the same argument applied to the restriction of $\varphi$ to $[a,t]$ gives $\varphi(t)=\varphi(a)$, and $\varphi(a)=\varphi(a)$, so $\varphi$ is constant on $[a,b]$. [step 6.1, algebra] ∎ 