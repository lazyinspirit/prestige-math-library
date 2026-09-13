---
id: def-p-section-of-a-p-element
kind: definition
title: The p-section of a p-element
status: draft
origin: pipeline
deps: [lem-commuting-p-and-p-prime-parts-of-a-finite-group-element]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Definition 6.7.5 and Lemma 6.7.6, pp. 167–168"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
    - title: "Craven, The Brauer Correspondence, Chapter 1 section 1.5, pp. 13–14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Definition

Let $G$ be a finite group, let $p$ be prime, and let $u\in G$ be a
$p$-element. The **$p$-section of $u$** is

$$S_G(u):=\{g\in G:g_p\text{ is }G\text{-conjugate to }u\},$$

where $g_p$ is the $p$-part from
[[lem-commuting-p-and-p-prime-parts-of-a-finite-group-element]]. Equivalently,
$S_G(u)$ is the union of the $G$-conjugacy classes that meet

$$\{uv:v\in C_G(u)\text{ is }p\text{-regular}\}.$$

Indeed, if $h g_p h^{-1}=u$, uniqueness and conjugation equivariance of the
commuting parts give
$hgh^{-1}=u(hg_{p'}h^{-1})$, where the second factor is $p$-regular and
centralizes $u$. Conversely, the unique $p$-part of $uv$ is $u$ whenever
$v$ is $p$-regular and centralizes $u$.

The section depends only on the conjugacy class of $u$. In particular,
$S_G(1)$ is exactly the set of $p$-regular elements of $G$.
