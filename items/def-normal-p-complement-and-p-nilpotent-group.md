---
id: def-normal-p-complement-and-p-nilpotent-group
kind: definition
title: "Normal p complement and p nilpotent group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-p-prime-core-of-a-finite-group, def-normal-subgroup, def-sylow-p-subgroup, thm-sylow-first-theorem, thm-lagrange, def-internal-semidirect-product, def-order-in-a-group]
justified_by: []
forward_refs: [ex-frobenius-normal-two-complement-for-s3]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $G$ be a finite group and let $p$ be a prime.

**$p$-prime terminology.** The $p$-element and $p'$-element language, for
elements and for subgroups, is fixed once and for all in
[[def-p-prime-core-of-a-finite-group]] and is used without further comment
throughout the normal-complement material of this page.

**Normal $p$-complement.** A **normal $p$-complement** of $G$ is a normal
subgroup $K\mathrel{\trianglelefteq}G$ ([[def-normal-subgroup]]) such that

$$p\nmid |K|\qquad\text{and}\qquad [G:K]\text{ is a power of }p .$$

Thus $K$ is a normal $p'$-subgroup whose index is a $p$-power. A group
possessing a normal $p$-complement is called **$p$-nilpotent**.

**Semidirect form.** Let $P\in\operatorname{Syl}_p(G)$
([[def-sylow-p-subgroup]]). If $K$ is a normal $p$-complement then
$[G:K]=|P|$ by [[thm-lagrange]] and [[def-sylow-p-subgroup]], so
$K\cap P=\{1\}$ and $KP=G$ with $K\mathrel{\trianglelefteq}G$; that is,
$G=K\rtimes P$ ([[def-internal-semidirect-product]]). Conversely, if
$G=K\rtimes P$ for some $P\in\operatorname{Syl}_p(G)$, then $K$ is a normal
$p'$-subgroup and $[G:K]=|P|$ is a $p$-power, so $K$ is a normal
$p$-complement. In particular the definition is equivalent to the existence of
a semidirect decomposition of $G$ with normal factor a $p'$-subgroup.

## Remarks

- **Boundary cases.** Both extremes are included. If $p\nmid|G|$ then $P=\{1\}$
  and $K=G$ is a normal $p$-complement, so such a group is $p$-nilpotent
  vacuously; if $G$ is a $p$-group then $P=G$ and $K=\{1\}$ is a normal
  $p$-complement. In neither case is the complement required to be proper or
  nontrivial, in contrast to the Frobenius complement of
  [[def-frobenius-complement-and-frobenius-group]].

- **Uniqueness.** A normal $p$-complement, when it exists, is unique: if $K_1$
  and $K_2$ are both of $p'$-order with $p$-power index, then
  $K_1K_2/K_2\cong K_1/(K_1\cap K_2)$ is both a subgroup of the $p$-group
  $G/K_2$ and a quotient of the $p'$-group $K_1$. It is therefore trivial;
  hence $K_1\subseteq K_2$
  and equality follows from $|K_1|=|K_2|=|G|/|P|$. The identified complement is
  the $p'$-core $O_{p'}(G)$ of [[def-p-prime-core-of-a-finite-group]], and the
  characterisations of [[prop-equivalent-forms-of-having-a-normal-p-complement]]
  record further equivalent forms.

- **Relation to the Frobenius condition.** A finite Frobenius group with kernel
  $N$ and complement $H$ has $N$ as a normal $p$-complement whenever
  $p\nmid|N|$ and $|H|$ is a power of $p$: then $[G:N]=|H|$ is a $p$-power.
  In particular, Frobenius groups with a $p'$-kernel and a $p$-group complement
  are $p$-nilpotent in this sense; the link is drawn in
  [[ex-frobenius-normal-two-complement-for-s3]].
