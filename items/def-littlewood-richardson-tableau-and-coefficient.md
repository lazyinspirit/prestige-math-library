---
id: def-littlewood-richardson-tableau-and-coefficient
kind: definition
title: Littlewood--Richardson tableaux and coefficients
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
deps:
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Complete note, printed pp. 1--4: semistandard tableau and weight conventions and Bender--Knuth involutions p. 2; the bi-alternant theorem pp. 2--3; the Zelevinsky corollary and the remark that this 'bi-alternant' formulation counts the same tableaux as the lattice-permutation formulation, p. 3."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§§27--30, printed pp. 145--164: §27.1 tensor products of fundamental representations p. 145; §27.2--27.3 representations of $SL_n$ and $GL_n$, polynomial representations pp. 145--147; §29.1--29.2 Schur polynomials pp. 155--157; §30.1--30.4 minuscule weights and tensor products with a minuscule representation pp. 158--164."
---

## Definition

Let $\lambda,\nu$ be partitions with $[\lambda]\subseteq[\nu]$, and let $\mu$ be a partition with $|\nu|=|\lambda|+|\mu|$. Use the conventions of [[def-skew-diagram-and-semistandard-skew-tableau]] for the skew diagram $\nu/\lambda$ and for semistandard skew tableaux of shape $\nu/\lambda$, and those of [[def-semistandard-tableau-and-kostka-number]] for the content of a tableau; recall that entries of a semistandard skew tableau weakly increase along rows and strictly increase down columns ([[def-partition-young-diagram-and-conjugate-partition]] fixes the English row and column coordinates).

The **reading word** $w(T)$ of a semistandard skew tableau $T$ of shape $\nu/\lambda$ is the word obtained by reading the rows of $T$ from right to left, beginning with the top row and proceeding to the bottom row. The word $w(T)=a_1a_2\cdots a_N$ is a **lattice word** (a lattice permutation) if in every prefix $a_1\cdots a_p$ and for every $i\ge1$ the number of letters $i$ in the prefix is at least the number of letters $i+1$; the empty word is a lattice word vacuously.

A **Littlewood--Richardson tableau** (LR tableau) of shape $\nu/\lambda$ and content $\mu$ is a semistandard skew tableau of shape $\nu/\lambda$ and content $\mu$ whose reading word is a lattice word. The **Littlewood--Richardson coefficient** $c^\nu_{\lambda\mu}\in\mathbb Z_{\ge0}$ is the number of LR tableaux of shape $\nu/\lambda$ and content $\mu$; it is $0$ when $[\lambda]\not\subseteq[\nu]$, when $|\nu|\ne|\lambda|+|\mu|$, or when no such tableau exists. For $\mu=\varnothing$ and $\nu=\lambda$ the empty skew tableau is the unique tableau of content $\varnothing$, its reading word is empty, and hence $c^\lambda_{\lambda\varnothing}=1$; more generally $c^\lambda_{\lambda\mu}=0$ unless $\mu=\varnothing$, and $c^\nu_{\lambda\mu}=0$ unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+|\mu|$.
