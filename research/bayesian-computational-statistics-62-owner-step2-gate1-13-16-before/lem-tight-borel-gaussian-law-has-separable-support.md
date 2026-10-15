---
id: lem-tight-borel-gaussian-law-has-separable-support
kind: lemma
title: "A tight Gaussian law is carried by a separable closed subspace"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-hahn-banach-extension-principle-relative
proof_strategy: direct
axiom_use: "AC selects a compact set at each reciprocal-integer error level. The separate Hahn–Banach principle extends each continuous linear functional on the resulting closed subspace; it is not inferred from the Gaussian-process definition."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §2"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, §§11–12"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

Let $B$ be a real Banach space and let $W$ be a Borel measurable $B$-valued random element with tight law $\mu$. Tight means that for every $\eta>0$ some compact $K\subset B$ satisfies $\mu(K)>1-\eta$. Assume $W$ is centered Gaussian, meaning that every continuous real linear functional $\ell:B\to\mathbb R$ makes $\ell(W)$ a centered scalar normal random variable. Then there is a separable closed linear subspace $E\subset B$ with $\mu(E)=1$. The law of $W$ viewed as an $E$-valued random element is tight and centered Gaussian, and its support in $E$ is exactly the support of $\mu$ in $B$, viewed as a subset of $B$. In particular, every ambient support point belongs to $E$.

## Facts & Assumptions

**Given:** A real Banach space $B$, a tight Borel probability law $\mu$ on $B$, and a centered Gaussian random element $W$ with law $\mu$.

[A1] [[def-axiom-of-choice]]: AC permits the countable selection of compact sets and finite nets used below.

[A2] [[def-hahn-banach-extension-principle-relative]]: the real dominated-extension principle extends a linear functional dominated by a sublinear functional to the ambient vector space, preserving domination.

## Proof




1.1 For each integer $m\ge1$, tightness and [A1] give a compact set $K_m\subset B$ with $\mu(K_m)>1-2^{-m}$. Each compact metric space $K_m$ has a countable dense subset: for each integer $r\ge1$, compactness gives a finite $1/r$-net, and the union of these finite nets is countable and dense. The union over $m$ of these dense subsets is countable; let $S$ be its closure. Then $S$ is separable, contains every $K_m$, and $\mu(S)\ge\mu(K_m)>1-2^{-m}$ for every $m$, hence $\mu(S)=1$. [given, A1, construct]

2.1 Let $E$ be the closed real linear span of $S$. Rational linear combinations of a countable dense subset of $S$ form a countable dense subset of its real linear span, so $E$ is separable; it is closed by construction and therefore Banach, and $\mu(E)=1$. The same map $W$ is Borel as an $E$-valued map because the Borel sets of $E$ are intersections of $E$ with Borel sets of $B$. For any $\ell\in E^*$, let $p(x)=\|\ell\|_{E^*}\|x\|_B$ on $B$; $\ell$ is dominated by $p$ on $E$. By [A2] it extends to a linear $\widetilde\ell$ on $B$ dominated by $p$, and applying domination to $x$ and $-x$ gives $|\widetilde\ell(x)|\le\|\ell\|_{E^*}\|x\|_B$. Since $W\in E$ almost surely, $\ell(W)=\widetilde\ell(W)$ almost surely, so $\ell(W)$ is centered normal. Thus the restricted law is Gaussian. [A2, step 1.1, given, construct]

3.1 For tightness in $E$, replace each compact $K_m$ by $K_m\cap E$, which is compact and has the same $\mu$-mass because $\mu(E)=1$. If $x\notin E$, closedness gives a $B$-open neighborhood disjoint from $E$, of $\mu$-mass zero, so $x$ is outside the ambient support. If $x\in E$, every ambient open ball about $x$ intersects $E$ in an $E$-open neighborhood and has the same measure as that intersection; hence all such neighborhoods have positive measure exactly when all relative neighborhoods do. The two supports therefore agree. [step 1.1, step 2.1, given, algebra] ∎

## Source notes

The cited sources use tight Borel Gaussian random elements and their support/RKHS framework. The separable closed carrier and the transfer of Gaussianity to it are proved here; neither source excerpt is treated as a substitute proof.
