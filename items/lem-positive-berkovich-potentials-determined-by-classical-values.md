---
dependency_level: 8
id: lem-positive-berkovich-potentials-determined-by-classical-values
kind: lemma
title: "Positive Berkovich potentials are determined by their classical values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-berkovich-rooted-tree-finite-retractions-and-laplacian
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - thm-monotone-convergence-for-the-integral
  - lem-berkovich-projective-line-compactness-and-classical-density
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§3.2–3.3, §4 potential regularity, and §7.7 energy minimization; rooted-tree reconstruction"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed, nontrivially nonarchimedean and have a countable dense subfield. On its compact metrizable Berkovich line $X$ put $J=-\log\delta$. For a regular Borel probability $\nu$, let $u_\nu(x)=\int J(x,y)\,d\nu(y)$, allowing $+\infty$. This potential is lower semicontinuous and finite at every nonclassical point. Given a nonclassical $p$, an open neighborhood $U$ of $p$ and $\epsilon>0$, there is a classical $a\in U$ with
$$u_\nu(a)\le u_\nu(p)+\epsilon.$$
Consequently, if $u_\nu$ agrees on classical points with a continuous real function $f$ on $X$, then $u_\nu=f$ on all of $X$.

## Statement references

[[def-axiom-of-choice]]

[[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]]

## Facts & Assumptions

**Given:** The field, probability, point, neighborhood and tolerance of the statement.

[F1] The kernel is common root-path length; nonclassical points have finite depth. Type-II points are dense on ancestor intervals, have infinitely many outgoing residue branches, and any neighborhood contains all but finitely many outgoing branches at such a point. Increasing finite rooted retractions exhaust the kernel, and classical points are dense. ([[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]], [[lem-berkovich-projective-line-compactness-and-classical-density]])

[F2] Kernel slices at nonclassical points are bounded continuous. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[F3] Increasing nonnegative integrands may be integrated by monotone convergence. ([[thm-monotone-convergence-for-the-integral]])

[A1] Full Choice supplies the successive small-mass branch selections below; countably many such selections are made. ([[def-axiom-of-choice]])

## Proof

1.1 Let $r_n$ be the finite rooted retractions of [F1]. The kernels $J(r_nx,r_ny)$ are bounded continuous on the compact metrizable product and increase to $J(x,y)$. Integrating in $y$ gives continuous functions of $x$: uniform continuity of each bounded kernel permits the integral to pass through an $x$ limit. Their supremum equals $u_\nu$ by [F3], so the potential is lower semicontinuous. At a nonclassical point $p$, $0\le J(p,y)\le J(p,p)<\infty$, proving finiteness. Moreover for nonclassical $p,q$, common path lengths give $|J(p,y)-J(q,y)|\le\rho(p,q)$ for every $y$, hence $|u_\nu(p)-u_\nu(q)|\le\rho(p,q)$. [F1, F2, F3, algebra]

1.2 By [F1], choose a type-II point $q\in U$ on or sufficiently close along the ancestor path of $p$, with $\rho(p,q)<\epsilon/3$; if $p$ is already type II, take $q=p$. At $q$, all but finitely many outgoing branches lie inside $U$. Among infinitely many disjoint such branches there is one, $B_0$, with $\nu(B_0)\le\epsilon/6$, since a finite probability cannot assign a fixed positive lower mass to infinitely many disjoint measurable sets. In that branch choose a type-II point $q_1$ with distance from $q$ between $1/2$ and1. This is possible by the dense logarithmic value group and the classical endpoints of every residue branch. [F1, A1, step 1.1, algebra]

1.3 Inductively at $q_n$, choose an outgoing branch away from the root with mass at most $\epsilon 2^{-n-2}$ and a type-II point $q_{n+1}$ in it at distance between $1/2$ and1; remain within $B_0\subset U$. There are infinitely many outgoing branches at each stage, so the mass selection is possible as in step1.2. The nested discs along this path have radii tending to zero, because the successive logarithmic lengths are at least $1/2$. Completeness gives a classical endpoint $a\in B_0\subset U$. The common-path formula bounds each potential increment by the length of that segment times the mass of its chosen branch: only points in that branch can gain common root-path length, and the gain is between zero and the segment length. Thus the increment from $q$ to $q_1$ is at most $\epsilon/6$, and all subsequent increments sum to at most $\sum_{n\ge1}\epsilon2^{-n-2}=\epsilon/4$. By [F3], the increasing common-path kernels along $q_n$ converge to the kernel at $a$, so
$$u_\nu(a)\le u_\nu(q)+\epsilon/6+\epsilon/4<u_\nu(p)+\epsilon.$$
Here step1.1 bounds the first difference by $\epsilon/3$. [F1, F3, A1, step 1.1, step 1.2, algebra]

2.1 Suppose the continuous real $f$ agrees with $u_\nu$ at classical points. Lower semicontinuity and density give $u_\nu(p)\le f(p)$ at every nonclassical $p$, by taking a sequence of classical points tending to $p$ in the compact metric topology. Conversely choose $U$ small enough that $|f(a)-f(p)|<\epsilon$ on $U$, and apply step1.3 to find a classical $a\in U$ with $u_\nu(a)\le u_\nu(p)+\epsilon$. Then $f(p)-\epsilon<f(a)=u_\nu(a)\le u_\nu(p)+\epsilon$, so $f(p)\le u_\nu(p)$ on letting $\epsilon$ decrease to zero. Equality at classical points was assumed, proving the final assertion. [F1, step 1.1, step 1.3, given, algebra] ∎
