---
id: lem-automizer-condition-gives-centralizer-transitivity
kind: lemma
title: "The local automizer condition gives centralizer conjugacy of Sylow subgroups"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-sylow-second-theorem, def-sylow-p-subgroup, def-centralizer-of-a-subgroup, def-normalizer-of-a-subgroup, lem-centralizer-of-a-normal-subgroup-is-normal, lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power, def-normal-subgroup, def-finite-p-group, thm-conjugation-is-an-automorphism]
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

Let $H$ be a finite group, $p$ a prime, and $S\le H$ a nontrivial
$p$-subgroup. Put $N=N_H(S)$ and $C=C_H(S)$
([[def-normalizer-of-a-subgroup]], [[def-centralizer-of-a-subgroup]]).
If $N/C$ is a $p$-group, then any two Sylow $p$-subgroups of $N$ are
conjugate by an element of $C$. In particular, for every $x\in S$ the
centralizer $C_N(x)$ acts transitively on the Sylow $p$-subgroups of $N$
containing $x$.

## Facts & Assumptions

**Given:** A finite group $H$, a prime $p$, a nontrivial $p$-subgroup $S\le H$, and the hypothesis that $N_H(S)/C_H(S)$ is a $p$-group.

[F1] $C=C_H(S)$ is normal in $N=N_H(S)$, so $N/C$ is a quotient group ([[lem-centralizer-of-a-normal-subgroup-is-normal]], [[def-centralizer-of-a-subgroup]], [[def-normalizer-of-a-subgroup]], [[def-normal-subgroup]]).

[F2] If $C\mathrel{\trianglelefteq}N$ and $N/C$ is a $p$-group, then $N=TC=CT$ for every $T\in\operatorname{Syl}_p(N)$ ([[lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power]]).

[F3] Any two Sylow $p$-subgroups of $N$ are conjugate in $N$, and conjugation by a member of a subgroup fixes that subgroup ([[thm-sylow-second-theorem]], [[def-sylow-p-subgroup]], [[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $T_1,T_2\in\operatorname{Syl}_p(N)$. By [F3] there is $n\in N$ with $T_2=nT_1n^{-1}$. Since $C\mathrel{\trianglelefteq}N$ by [F1] and $N/C$ is a $p$-group by hypothesis, [F2] gives $N=CT_1$; write $n=ct$ with $c\in C$ and $t\in T_1$. [F1, F2, F3, given]

2.1 Then $T_2=(ct)T_1(ct)^{-1}=c(tT_1t^{-1})c^{-1}=cT_1c^{-1}$, since $t\in T_1$. Thus $C$ acts transitively on $\operatorname{Syl}_p(N)$. [F3, step 1.1]

3.1 Every element of $C=C_H(S)$ centralizes every $x\in S$, and $C\le N$; hence $C\le C_N(x)$ for each $x\in S$. The transitivity in step 2.1 therefore implies the claimed transitivity by $C_N(x)$ on the subcollection of Sylow $p$-subgroups containing $x$. ∎ [F1, step 2.1]
