---
id: lem-sylow-subgroups-of-a-normal-subgroup-are-intersections
kind: lemma
title: "Sylow subgroups of a normal subgroup are intersections with Sylow subgroups"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-sylow-p-subgroup, thm-sylow-first-theorem, thm-sylow-second-theorem, thm-lagrange, lem-subgroups-of-finite-p-groups-are-p-groups, def-normal-subgroup, lem-product-with-normal-subgroup, def-p-adic-valuation, thm-conjugation-is-an-automorphism, def-finite-p-group, cor-order-of-a-quotient-group]
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

Let $G$ be a finite group, $p$ a prime, $K\mathrel{\trianglelefteq}G$ a normal
subgroup and $P\in\operatorname{Syl}_p(G)$ a Sylow $p$-subgroup
([[def-sylow-p-subgroup]]). Then $K\cap P$ is a Sylow $p$-subgroup of $K$. If in
addition $[G:K]$ is a power of $p$, then $KP=G$.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a normal subgroup $K\mathrel{\trianglelefteq}G$, and a Sylow $p$-subgroup $P\le G$.

[F1] Write $|G|=p^{a}m$ and $|K|=p^{c}m_{K}$ with $p\nmid m$, $p\nmid m_{K}$; the $p$-adic valuations give $c\le a$, and $P$ has order $p^{a}$ while a Sylow $p$-subgroup of $K$ has order $p^{c}$ ([[def-sylow-p-subgroup]], [[def-p-adic-valuation]], [[thm-lagrange]]).

[F2] If $S\le G$ is a $p$-subgroup, then $S\le Q$ for some Sylow $p$-subgroup $Q$ of $G$; any two Sylow $p$-subgroups of $G$ are conjugate, $Q=gPg^{-1}$ for some $g\in G$; and $G$ has a Sylow $p$-subgroup ([[thm-sylow-first-theorem]], [[thm-sylow-second-theorem]]).

[F3] $K$ is normal: $gKg^{-1}=K$ for every $g\in G$, and conjugation $x\mapsto gxg^{-1}$ is an automorphism, so $|gSg^{-1}|=|S|$ for every subgroup $S$ ([[def-normal-subgroup]], [[thm-conjugation-is-an-automorphism]]).

[F4] A subgroup of a finite $p$-group is a finite $p$-group, so its order is a power of $p$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]], [[def-finite-p-group]]).

[F5] If $H\le G$ then $|H|$ divides $|G|$, and $KP$ is a subgroup with $|KP|=|K|\,|P|/|K\cap P|$ ([[thm-lagrange]], [[lem-product-with-normal-subgroup]]).



## Proof

**Proof technique:** direct.

1.1 By [F2] applied inside the finite group $K$, there is a Sylow $p$-subgroup $S$ of $K$, of order $p^{c}$ by [F1]; $S$ is a $p$-subgroup of $G$, so by [F2] there is a Sylow $Q$ of $G$ with $S\le Q$, and $Q=gPg^{-1}$ for some $g\in G$. [F1, F2]

1.2 On the other hand $K\cap P\le P$, so $K\cap P$ is a finite $p$-group by [F4]; its order divides $|K|$ by [F5], hence is a power of $p$ dividing $p^{c}m_{K}$ with $p\nmid m_{K}$ by [F1], and therefore $|K\cap P|$ divides $p^{c}$. [F1, F4, F5]

2.1 Then $S^{g^{-1}}=g^{-1}Sg$ is a subgroup of $K$, because $S\le K$ and $K\mathrel{\trianglelefteq}G$, and it has order $|S|=p^{c}$ by [F3]; also $S^{g^{-1}}\le g^{-1}Qg=P$. Hence $S^{g^{-1}}\le K\cap P$, and $|K\cap P|\ge p^{c}$. [F3, step 1.1]

3.1 Combining steps 2.1 and 1.2, $|K\cap P|=p^{c}$, the order of a Sylow $p$-subgroup of $K$; hence $K\cap P\in\operatorname{Syl}_p(K)$, the first assertion. [F1, step 2.1, step 1.2]

4.1 Suppose now that $[G:K]=p^{r}$ for some $r\ge0$. Then $|K|=|G|/p^{r}=p^{a-r}m$ by [F1] and [F5], so the $p$-part of $|K|$ is $p^{a-r}$; by step 3.1, $|K\cap P|=p^{a-r}$. [F1, F5, step 3.1, algebra]

5.1 Since $KP$ is a subgroup of $G$ by [F5], its order $|K|\,|P|/|K\cap P|=p^{a-r}m\cdot p^{a}/p^{a-r}=p^{a}m=|G|$ by [F5] and step 4.1; a subgroup of $G$ with as many elements as $G$ is $G$ itself, so $KP=G$. ∎ [F5, step 4.1, algebra]
