---
id: lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers
kind: lemma
title: "Normal p complements pass to subgroups and p local normalizers"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normal-p-complement-and-p-nilpotent-group, prop-equivalent-forms-of-having-a-normal-p-complement, def-p-local-normalizer-for-normal-complement-theory, thm-second-isomorphism-theorem-groups, thm-third-isomorphism-theorem-groups, thm-first-isomorphism-theorem-groups, lem-product-with-normal-subgroup, thm-lagrange, cor-order-of-a-quotient-group, thm-image-subgroup-and-kernel-normal, def-normal-subgroup, def-quotient-group, def-subgroup, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, def-normalizer-of-a-subgroup]
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
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, $p$ a prime, and suppose $G$ has a normal
$p$-complement $K$ ([[def-normal-p-complement-and-p-nilpotent-group]]). Then:

1. every subgroup $H\le G$ has a normal $p$-complement, namely $K\cap H$;
2. every quotient $G/L$ by a normal subgroup $L\mathrel{\trianglelefteq}G$ has a
   normal $p$-complement, namely $KL/L$;
3. in particular $N_G(Q)$ has a normal $p$-complement for every nontrivial
   $p$-subgroup $Q\le G$
   ([[def-p-local-normalizer-for-normal-complement-theory]]).

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a normal $p$-complement $K\mathrel{\trianglelefteq}G$, a subgroup $H\le G$, and a normal subgroup $L\mathrel{\trianglelefteq}G$.

[F1] $K\mathrel{\trianglelefteq}G$, $p\nmid|K|$, and $[G:K]$ is a power of $p$; equivalently $G$ has a normal $p'$-subgroup of $p$-power index, and a finite group has a normal $p$-complement exactly when it has such a subgroup ([[def-normal-p-complement-and-p-nilpotent-group]], [[prop-equivalent-forms-of-having-a-normal-p-complement]]).

[F2] If $K\mathrel{\trianglelefteq}G$ and $H\le G$, then $H\cap K\mathrel{\trianglelefteq}H$, $HK\le G$ and $H/(H\cap K)\cong HK/K$, so $[H:H\cap K]=|HK/K|$ ([[thm-second-isomorphism-theorem-groups]], [[lem-product-with-normal-subgroup]], [[def-normal-subgroup]]).

[F3] Orders divide: if $X\le Y$ then $|X|$ divides $|Y|$, and $|Y|=|X|\,[Y:X]$; a group whose order divides a power of $p$ is a finite $p$-group ([[thm-lagrange]], [[def-finite-p-group]], [[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[F4] If $L\mathrel{\trianglelefteq}G$ with $L\le KL$, then $KL\mathrel{\trianglelefteq}G$ and $(G/L)/(KL/L)\cong G/KL$; the quotient $KL/L$ is the image of $K$ under the natural map $G\to G/L$, and $|KL/L|=|K|/|K\cap L|$ ([[thm-third-isomorphism-theorem-groups]], [[def-quotient-group]], [[cor-order-of-a-quotient-group]], [[thm-second-isomorphism-theorem-groups]]).

[F5] The natural map $G/K\to G/KL$ is an epimorphism with kernel $KL/K$; hence $G/KL\cong (G/K)/(KL/K)$ and $|G/KL|$ divides $|G/K|$ ([[thm-first-isomorphism-theorem-groups]], [[thm-image-subgroup-and-kernel-normal]], [[cor-order-of-a-quotient-group]], [[def-normal-subgroup]]).

[F6] A normalizer $N_G(Q)$ of a nontrivial $p$-subgroup $Q$ is a subgroup of $G$ ([[def-normalizer-of-a-subgroup]], [[def-subgroup]]).



## Proof

**Proof technique:** direct.

1.1 $K\cap H\mathrel{\trianglelefteq}H$ by [F2], and $|K\cap H|$ divides $|K|$ by [F3], so $p\nmid|K\cap H|$. [F2, F3]

1.2 Moreover $[H:H\cap K]=|HK/K|$ by [F2], and $HK/K\le G/K$, so $[H:H\cap K]$ divides $[G:K]$ by [F3] and is a power of $p$. Hence $K\cap H$ is a normal $p'$-subgroup of $H$ of $p$-power index, i.e. a normal $p$-complement of $H$ by [F1]. [F1, F2, F3]

1.3 $KL\mathrel{\trianglelefteq}G$ and $KL/L\mathrel{\trianglelefteq}G/L$ by [F4]; and $|KL/L|=|K|/|K\cap L|$ divides $|K|$, so $p\nmid|KL/L|$. [F3, F4]

1.4 By [F4] and [F5], $|(G/L):(KL/L)|=|G/KL|$ divides $|G/K|$, a power of $p$; hence $(G/L):(KL/L)$ is a power of $p$ and $KL/L$ is a normal $p$-complement of $G/L$ by [F1]. [F1, F4, F5]

2.1 For a nontrivial $p$-subgroup $Q\le G$ the normalizer $H:=N_G(Q)$ is a subgroup of $G$ by [F6], so step 1.2 gives that $K\cap N_G(Q)$ is a normal $p$-complement of $N_G(Q)$; with steps 1.1 and 1.4 this establishes all three assertions. ∎ [F6, step 1.1, step 1.2, step 1.4]
