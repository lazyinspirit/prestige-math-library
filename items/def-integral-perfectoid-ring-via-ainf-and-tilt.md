---
id: def-integral-perfectoid-ring-via-ainf-and-tilt
kind: definition
title: "Integral perfectoid ring via A_inf and its tilt"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Definition 3.5"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §§1.1–1.2"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a prime $p$. For a commutative ring $A$, write
$A^\flat=\varprojlim_{x\mapsto x^p}A/pA$, with the inverse-limit ring
operations; this is a perfect ring of characteristic $p$. For any ring $B$,
$W(B)$ is the ring of sequences in $B^{\mathbb N}$ with addition and
multiplication given by the universal integer polynomials uniquely determined
by the requirement that the ghost coordinates
$w_n(b_0,b_1,\ldots)=\sum_{i=0}^n p^i b_i^{p^{n-i}}$ preserve addition and
multiplication.
Write $[x]=(x,0,0,\ldots)$ for the Teichmüller representative of
$x\in B$, and set $A_{\inf}(A)=W(A^\flat)$. For
$x=(x_0,x_1,\ldots)\in A^\flat$, put
$x^\sharp=\lim_{n\to\infty}\widetilde{x_n}^{p^n}$, where
$\widetilde{x_n}\in A$ is any lift of $x_n\in A/pA$. When $A$ is complete
for a topology in which $p^nA\to0$, Fontaine's map is the ring homomorphism
$\theta_A:W(A^\flat)\to A$ determined by
$\theta_A(\sum_{n\ge0}p^n[x_n])=\sum_{n\ge0}p^n x_n^\sharp$.

The ring $A$ is **integral perfectoid** if there is $\pi\in A$ such that
$A$ is complete for the $\pi$-adic topology, $p\in\pi^pA$, Frobenius on
$A/pA$ is surjective, and $\ker(\theta_A)$ is a principal ideal.

## Definition references

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Definition 3.5](https://arxiv.org/pdf/1602.03148v3.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §§1.1–1.2](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)
