---
id: lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power
kind: lemma
title: "Sylow times normal subgroup covers when the index is a p-power"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normal-subgroup, def-sylow-p-subgroup, def-quotient-group, cor-order-of-a-quotient-group, thm-lagrange, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, lem-product-with-normal-subgroup, thm-second-isomorphism-theorem-groups, def-p-adic-valuation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2.1–2.5, 3.1–3.8, 4.1–4.3, 5.5–5.10, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $N$ be a finite group, $p$ a prime, $C\mathrel{\trianglelefteq}N$ a normal
subgroup such that $N/C$ is a $p$-group
([[def-normal-subgroup]], [[def-quotient-group]], [[def-finite-p-group]]), and
let $T\in\operatorname{Syl}_p(N)$ be a Sylow $p$-subgroup of $N$. Then
$N=TC$.

## Facts & Assumptions

**Given:** A finite group $N$, a prime $p$, a normal subgroup $C\mathrel{\trianglelefteq}N$ with $N/C$ a $p$-group, and a Sylow $p$-subgroup $T\le N$.

[F1] $|N/C|=[N:C]=p^{k}$ for some $k\ge0$; write $|N|=p^{a}m$ with $p\nmid m$, so that $|T|=p^{a}$ and $|C|=|N|/[N:C]=p^{a-k}m$ ([[cor-order-of-a-quotient-group]], [[def-sylow-p-subgroup]], [[thm-lagrange]], [[def-p-adic-valuation]]).

[F2] $T\cap C\le T$, so $T\cap C$ is a finite $p$-group and $|T\cap C|$ divides $|C|$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]], [[thm-lagrange]], [[def-finite-p-group]]).

[F3] $TC$ is a subgroup of $N$ with $|TC|=|T|\,|C|/|T\cap C|$ and $TC/C\le N/C$; in particular $|TC/C|=|T|/|T\cap C|$ ([[lem-product-with-normal-subgroup]], [[thm-second-isomorphism-theorem-groups]], [[cor-order-of-a-quotient-group]]).



## Proof

**Proof technique:** direct.

1.1 By [F2] the order $|T\cap C|$ is a $p$-power dividing $|C|=p^{a-k}m$; since $m$ is prime to $p$, $|T\cap C|$ divides $p^{a-k}$, so $|T\cap C|\le p^{a-k}$. [F1, F2, algebra]

2.1 Hence $|TC/C|=|T|/|T\cap C|\ge p^{a}/p^{a-k}=p^{k}=|N/C|$ by [F1] and [F3]. [F1, F3, step 1.1]

3.1 Since $TC/C\le N/C$ by [F3], the inequality of step 2.1 forces $TC/C=N/C$, and then $|TC|=|N|$ because $|TC|=|TC/C|\cdot|C|$ by [F1] and [F3]; a subgroup of $N$ with as many elements as $N$ equals $N$, so $N=TC$. ∎ [F1, F3, step 2.1]
