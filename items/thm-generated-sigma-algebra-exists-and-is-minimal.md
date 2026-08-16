---
id: thm-generated-sigma-algebra-exists-and-is-minimal
kind: theorem
title: "Nonempty intersections of sigma-algebras are sigma-algebras, so the generated sigma-algebra exists and is minimal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generated-sigma-algebra]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Lemma 2.7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "T. Tao, An Introduction to Measure Theory, Exercises 1.4.13-1.4.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set.

1. The intersection of every nonempty family of sigma-algebras on $X$ is a
   sigma-algebra on $X$.
2. For every $\mathcal E\subseteq\mathcal P(X)$, the family
   $\Sigma_X(\mathcal E)$ of [[def-generated-sigma-algebra]] is nonempty, and
   $\sigma_X(\mathcal E)$ is the unique smallest sigma-algebra on $X$ containing
   $\mathcal E$.

## Facts & Assumptions

**Given:** A set $X$, a nonempty family $\mathfrak S$ of sigma-algebras on $X$, and a family $\mathcal E\subseteq\mathcal P(X)$, with $\Sigma_X(\mathcal E)$ and $\sigma_X(\mathcal E)$ as in [[def-generated-sigma-algebra]].

## Proof

**Proof technique:** direct.

1.1 Every member of $\mathfrak S$ contains $\varnothing$; if $A$ belongs to every member, then so does $X\setminus A$; and if every $A_n$ belongs to every member, then so does $\bigcup_nA_n$. Hence $\bigcap\mathfrak S$ is a sigma-algebra on $X$. [given]

1.2 The power set $\mathcal P(X)$ is a sigma-algebra on $X$ containing $\mathcal E$, so $\mathcal P(X)\in\Sigma_X(\mathcal E)$ and the defining intersection for $\sigma_X(\mathcal E)$ is taken over a nonempty family. [given, construct]

2.1 By step 1.1, $\sigma_X(\mathcal E)$ is a sigma-algebra. Every set in $\mathcal E$ belongs to every member of $\Sigma_X(\mathcal E)$, so $\mathcal E\subseteq\sigma_X(\mathcal E)$; and the defining intersection is contained in every sigma-algebra containing $\mathcal E$. Thus it is the unique smallest such sigma-algebra. [step 1.1, step 1.2] ∎
