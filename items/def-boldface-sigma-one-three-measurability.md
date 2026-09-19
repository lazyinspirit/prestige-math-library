---
id: def-boldface-sigma-one-three-measurability
kind: definition
title: Boldface Sigma-one-three measurability
status: draft
origin: pipeline
deps: [def-analytic-and-coanalytic-by-closed-projection, lem-cantor-and-baire-sequence-coding, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Chapter 3, Section 3.1, pp. 43-44"}
---

## Definition

Work in Cantor space $\mathcal C=2^{\mathbb N}$, with auxiliary real
quantifiers ranging over Baire space $\mathcal N=\mathbb N^{\mathbb N}$ as in
[[lem-cantor-and-baire-sequence-coding]]. Fix a real parameter $x$.

A set $A\subseteq\mathcal C$ is **$\Sigma^1_3(x)$** when membership in $A$ has
the form

$$a\in A\quad\Longleftrightarrow\quad\exists y\ \forall z\ \exists w\ \theta(a,y,z,w,x),$$

where $y,z,w$ range over Baire space and $\theta$ is arithmetic: all its
quantifiers are number quantifiers and its atomic statements are those of a
fixed recursive decoding of the sequences involved. Thus the leading real
quantifiers are one existential, one universal and one existential, the last
being the one that may be dummy. A set is **boldface $\Sigma^1_3$** when it is
$\Sigma^1_3(x)$ for some real $x$, and a statement is
**$\Sigma^1_3$-measurable** when every $\Sigma^1_3(x)$ subset of $\mathcal C$
is measurable for the completed coin measure, for every real $x$; the coin
measure and its precise Lebesgue coding are those of
[[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]] under the ambient
choice hypothesis used in an application.

**Elementary codings.** Coordinate pairing gives the homeomorphisms
$\mathcal C\cong\mathcal C^{\mathbb N}$ and
$\mathcal N\cong\mathcal N^{\mathbb N}$, so finite or countable tuples of the
respective real codes may be folded into one code. The published map from
$\mathcal N$ is a homeomorphism only onto the subspace
$D\subseteq\mathcal C$ of sequences with infinitely many $1$s; no
homeomorphism $\mathcal N\cong\mathcal C$ and no measure transport along that
subspace map is asserted here. Adding a dummy final existential real
quantifier shows that every $\Sigma^1_2(x)$ subset of $\mathcal C$ is
$\Sigma^1_3(x)$: prefix a redundant $\exists w$ and ignore $w$ in $\theta$.
This inclusion is the one used below when a
$\Sigma^1_3$-measurability hypothesis is applied to the $\Sigma^1_2(x)$
null-code order. The definition itself uses no choice, and the ambient versions
of $\Sigma^1_3$-measurability used later carry the hypotheses needed for the
completed coin measure.
