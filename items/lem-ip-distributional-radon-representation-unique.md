---
id: lem-ip-distributional-radon-representation-unique
kind: lemma
title: Uniqueness of a Radon measure representing a distribution
status: draft
origin: pipeline
deps:
  - def-regular-complex-borel-measure-on-an-lch-space
  - def-radon-measure-on-an-lch-space
  - lem-rat-embeds-dense
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-product-of-countable
  - thm-heine-borel-rn
  - thm-rationals-countable
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $\Omega\subseteq\mathbb R^n$ be open. If two finite signed Radon measures on $\Omega$ have the same integrals against every function in $C_c^\infty(\Omega)$, then the measures are equal.

## Statement references

[[def-radon-measure-on-an-lch-space|Finite Radon measures are regular on the open set Omega.]]

[[def-regular-complex-borel-measure-on-an-lch-space|The total variation of a finite signed Radon measure is a finite regular measure.]]

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$ and finite signed Radon measures $\mu,\nu$ whose integrals agree on every compactly supported smooth test function.

[F1] Under the repository convention, each finite signed Radon measure has finite total variation on $\Omega$, and that total-variation measure is regular on all Borel sets. This all-Borel approximation follows already from the finite Radon convention: for a finite positive Radon measure $\rho$, a Borel $A$, and $\epsilon>0$, choose compact $C\subset\Omega$ with $\rho(\Omega\setminus C)<\epsilon/2$, and open $G\supset\Omega\setminus A$ with $\rho(G\cap A)<\epsilon/2$. Then $K=C\setminus G$ is compact in $A$ and $\rho(A\setminus K)<\epsilon$. For $\lambda=\mu-\nu$, the partition definition gives $|\lambda|\le|\mu|+|\nu|$, so $|\lambda|$ is finite and regular as well: compact inner and open outer approximations for the finite regular sum $|\mu|+|\nu|$ also approximate $|\lambda|$. ([[def-regular-complex-borel-measure-on-an-lch-space]], [[def-radon-measure-on-an-lch-space]])

[F2] Rational balls give a countable base, and compact sets have finite subcovers. ([[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-heine-borel-rn]])

[F3] A smooth bump can equal one on an inner ball and vanish outside a larger ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F4] Dominated convergence applies to bounded pointwise-convergent cutoffs against the finite measure $|\lambda|$. ([[thm-dominated-convergence]])

## Proof

**Given:** The open set $\Omega$ and finite signed Radon measures $\mu,\nu$ with equal integrals on smooth compactly supported tests.

1.1 If $\Omega=\varnothing$, equality is immediate. If $n=0$ and $\Omega\ne\varnothing$, its singleton indicator is a smooth compactly supported test and determines every measure. Assume henceforth $n\ge1$. Set $\lambda:=\mu-\nu$. If $K\subset\Omega$ is compact and nonempty, then for every sufficiently large $m$, rational inner balls with doubled closures in $\Omega\cap\{x:\operatorname{dist}(x,K)<1/m\}$ cover $K$; [F2] gives a finite subcover, and ordering finite rational lists by natural-number codes gives a least such cover. Put the fixed bump [F3] on each selected ball and combine them as $\eta_m=1-\prod_j(1-\psi_{m,j})$. Then $0\le\eta_m\le1$, it equals one on $K$, is supported in the $1/m$-neighborhood of $K$, and $\eta_m(x)\to\mathbf1_K(x)$. Since each $\eta_m$ is a smooth compactly supported test function, $\int\eta_m\,d\lambda=0$; dominated convergence [F4] with respect to the finite regular total-variation measure [F1] gives $\lambda(K)=0$. The empty compact set has measure zero directly. [F1, F2, F3, F4, given, choose, construct]

2.1 For any Borel $A\subseteq\Omega$ and $\varepsilon>0$, inner regularity of $|\lambda|$ [F1] gives a compact $K\subseteq A$ with $|\lambda|(A\setminus K)<\varepsilon$. Since step 1.1 gives $\lambda(K)=0$, we have $|\lambda(A)|\le |\lambda|(A\setminus K)<\varepsilon$. Thus $\lambda(A)=0$ for every Borel $A$, so $\mu=\nu$. [F1, step 1.1, given] ∎
