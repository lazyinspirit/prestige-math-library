---
id: prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals
kind: proposition
title: "Every intermediate field of $\\mathbb Q(\\mu_n)/\\mathbb Q$ is Galois over $\\mathbb Q$ with abelian Galois group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-galois-group-of-a-rational-cyclotomic-field, cor-cyclotomic-extensions-are-abelian, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-fundamental-theorem-of-finite-galois-theory, thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n, def-cyclotomic-extension, def-quotient-group, def-normal-subgroup, def-finite-galois-extension-and-galois-group, thm-rat-ordered-field, def-ring-characteristic, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5, cyclotomic extensions"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $F$ be an intermediate field of
$\mathbb Q(\mu_n)/\mathbb Q$ ([[def-cyclotomic-extension]]). Then $F/\mathbb Q$ is
a finite Galois extension ([[def-finite-galois-extension-and-galois-group]]) and
$\operatorname{Gal}(F/\mathbb Q)$ is abelian.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and an intermediate field $\mathbb Q\subseteq F\subseteq\mathbb Q(\mu_n)$; $\mathbb Q$ is an ordered field ([[thm-rat-ordered-field]]), so $\operatorname{char}\mathbb Q=0$ ([[def-ring-characteristic]]) and divides no positive integer ([[def-divides-in-z]]). Write $G:=\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)$.

[L1] $\mathbb Q(\mu_n)/\mathbb Q$ is finite Galois ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]) with $G\cong(\mathbb Z/n)^{\times}$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]), and $G$ is abelian ([[cor-cyclotomic-extensions-are-abelian]]).

[L2] For $K/F_0$ finite Galois with group $G$, the maps $H\mapsto K^{H}$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse bijections between subgroups of $G$ and intermediate fields ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L3] With $K/F_0$ finite Galois, $G=\operatorname{Gal}(K/F_0)$, $H\le G$ and $E=K^{H}$: the extension $E/F_0$ is Galois exactly when $H$ is normal in $G$ ([[def-normal-subgroup]]), and then restriction gives $\operatorname{Gal}(E/F_0)\cong G/H$ ([[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]], [[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the extension $\mathbb Q(\mu_n)/\mathbb Q$ is finite Galois and $G$ is abelian. [L1]

2.1 By [L2] there is a subgroup $H\le G$ with $F=\mathbb Q(\mu_n)^{H}$. [step 1.1, L2]

3.1 Since $G$ is abelian, $gHg^{-1}=H$ for every $g\in G$, so $H$ is normal in $G$; hence $F/\mathbb Q$ is Galois and $\operatorname{Gal}(F/\mathbb Q)\cong G/H$ by [L3]. [step 1.1, step 2.1, L3]

4.1 A quotient of an abelian group is abelian, since the images of two commuting elements commute and every element of $G/H$ is such an image; so $\operatorname{Gal}(F/\mathbb Q)$ is abelian. [step 1.1, step 3.1, L3] ∎

## Remarks

- **This is the proved half of the Kronecker–Weber picture on this page.** Every
  subfield of a rational cyclotomic field is abelian over $\mathbb Q$; the
  converse is recorded separately as [[rem-kronecker-weber]].
