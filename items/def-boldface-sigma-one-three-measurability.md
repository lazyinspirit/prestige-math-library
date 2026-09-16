---
id: def-boldface-sigma-one-three-measurability
kind: definition
title: Boldface Sigma-one-three measurability
status: draft
origin: pipeline
deps: [def-analytic-and-coanalytic-by-closed-projection, lem-cantor-and-baire-sequence-coding, def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Chapter 3, Section 3.1, pp. 43-44"}
---

## Definition

Work in one of the sequence spaces of [[lem-cantor-and-baire-sequence-coding]]:
Cantor space $\mathcal C=2^{\mathbb N}$ or Baire space $\mathcal N=\mathbb N^{\mathbb N}$,
with reals of the other space identified by the standard homeomorphisms and
codings. Fix a real parameter $x$.

A set $A\subseteq\mathcal C$ (or $A\subseteq\mathcal N$) is **$\Sigma^1_3(x)$**
when membership in $A$ has the form

$$a\in A\quad\Longleftrightarrow\quad\exists y\ \forall z\ \exists w\ \theta(a,y,z,w,x),$$

where $y,z,w$ range over Baire space and $\theta$ is arithmetic: all its
quantifiers are number quantifiers and its atomic statements are those of a
fixed recursive decoding of the sequences involved. Thus the leading real
quantifiers are one existential, one universal and one existential, the last
being the one that may be dummy. A set is **boldface $\Sigma^1_3$** when it is
$\Sigma^1_3(x)$ for some real $x$, and a statement is
**$\Sigma^1_3$-measurable** when every $\Sigma^1_3(x)$ set is Lebesgue
measurable for every real $x$.

**Elementary codings.** A real is canonically a member of any of the spaces
above, and the homeomorphisms of [[lem-cantor-and-baire-sequence-coding]] are
arithmetic in both directions, so changing between Cantor and Baire space
preserves the pointclass $\Sigma^1_3(x)$; measurability transfers because the
completed coin measure of the space transports to Lebesgue measure along those
codings. Adding a dummy final existential real quantifier shows that every
$\Sigma^1_2(x)$ set is $\Sigma^1_3(x)$: prefix a redundant $\exists w$ and
ignore $w$ in $\theta$. This inclusion is the one used below when a
$\Sigma^1_3$-measurability hypothesis is applied to the $\Sigma^1_2(x)$
null-code order. The definition itself uses no choice, and the ambient versions
of $\Sigma^1_3$-measurability used later run over ZF plus the stated countable
choice hypotheses.
