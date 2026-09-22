---
id: def-boldface-sigma-one-three-measurability
kind: definition
title: Boldface Sigma-one-three measurability
status: published
origin: pipeline
deps: [def-analytic-and-coanalytic-by-closed-projection, lem-cantor-and-baire-sequence-coding, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-completion-of-a-measure-space, thm-completion-of-a-measure-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Definition 1.17 and Facts 1.17-1.18, pp. 10-11; Chapter 3, Section 3.1, pp. 43-44"}
    - {title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.4.26, p. 94", url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"}
verification:
  audited: 2026-09-22
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
$\Sigma^1_3(x)$ for some real $x$, and the regularity assertion **boldface $\Sigma^1_3$-measurability** means that every such set belongs to the completed coin-measure domain specified below.

**The measured domain.** In applications assume Countable Choice
([[def-countable-choice]]). The proof of
[[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]] uses DC only in its
step 1.2 to derive Countable Choice; after that step, its cylinder-pullback
construction of the Borel coin probability $\nu$ uses only the resulting
Countable Choice hypotheses. Thus the same construction is available directly
under the present assumption. Write $\mathcal B$ for its Borel sigma-algebra. Define
$$\overline{\mathcal B}:=\{E\subseteq\mathcal C:E=B\cup N,\ B,Z\in\mathcal B,\ N\subseteq Z,\ \nu(Z)=0\}.$$
For such a representation put $\overline\nu(E):=\nu(B)$. This is exactly the
completion construction of [[def-completion-of-a-measure-space]], so
[[thm-completion-of-a-measure-space]] proves that this value is independent of
the representation and is a complete measure on the displayed sigma-algebra.
Thus the regularity assertion is precisely
$$\forall x\in\mathcal N\ \forall A\subseteq\mathcal C\quad (A\in\Sigma^1_3(x)\ \Longrightarrow\ A\in\overline{\mathcal B}).$$
The dyadic lemma supplies the Borel measure; the completion theorem supplies its completed domain and measure. No completion or measure transport is inferred from a homeomorphism between sequence spaces.

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
null-code order. The quantifier-prefix definition uses no choice. The measured
interpretation above is used under Countable Choice, which licenses both the
Borel coin-measure construction and its completion.
