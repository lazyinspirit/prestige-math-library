---
id: def-frobenius-complement-and-frobenius-group
kind: definition
title: "Frobenius complement and frobenius group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-subgroup, def-normalizer-of-a-subgroup]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

**Conjugation of subsets.** Let $G$ be a group and let $S\subseteq G$ be a subset.
For $g\in G$ write
$$gSg^{-1}:=\{gsg^{-1}:s\in S\},$$
the image of $S$ under the inner automorphism $c_g$ of $G$. This is the
convention of [[thm-conjugation-is-an-automorphism]] and
[[def-normal-subgroup]]: conjugation is written on the left, so that
$gxg^{-1}$ is the conjugate of $x$ by $g$.

**Frobenius complement.** Let $G$ be a finite group. A subgroup $H\le G$
([[def-subgroup]]) with $\{1\}<H<G$ is a **Frobenius complement** of $G$ when

$$H\cap gHg^{-1}=\{1\}\qquad\text{for every }g\in G\setminus H .$$

A group that possesses a Frobenius complement is a **Frobenius group**, and one
then says that $G$ is a Frobenius group **with complement** $H$. Both subgroups
$\{1\}$ and $G$ are excluded by the hypothesis $\{1\}<H<G$, so a Frobenius
complement is a nontrivial proper subgroup.

## Remarks

- **The condition is symmetric in $H$ and its conjugates.** Since the condition
  is required only for $g\notin H$ and is automatic for $g\in H$ (there
  $gHg^{-1}=H$, and $H\cap H=H\ne\{1\}$ is not required to be trivial), one may equivalently require both $N_G(H)=H$ and
  $H\cap gHg^{-1}=\{1\}$ for *all* $g\in G$ with
  $gHg^{-1}\ne H$. Replacing $g$ by $g^{-1}$ shows that
  $H\cap gHg^{-1}=\{1\}$ holds for all $g\notin H$ if and only if
  $H^{g}\cap H=\{1\}$ holds for all $g\notin H$, so the definition is not
  sensitive to using left rather than right conjugates.

- **$H$ is its own normalizer.** If $g\in N_G(H)$
  ([[def-normalizer-of-a-subgroup]]) then $gHg^{-1}=H$, hence
  $H\cap gHg^{-1}=H$; since $H\ne\{1\}$ this forces $g\in H$. Thus for a
  Frobenius complement the normalizer is as small as possible,
  $N_G(H)=H$; this is used to count conjugates in
  [[lem-frobenius-kernel-cardinality]].

- **Terminology.** The condition is a strong form of malnormality of $H$; the
  complement is *not* assumed to be normal, and the existence of the normal
  complement of [[thm-frobenius-kernel-theorem]] is the content of Frobenius'
  theorem, not part of this definition.
