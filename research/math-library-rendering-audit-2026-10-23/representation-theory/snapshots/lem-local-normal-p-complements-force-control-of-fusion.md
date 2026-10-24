---
id: lem-local-normal-p-complements-force-control-of-fusion
kind: lemma
title: "Local normal p complements force control of fusion"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-local-sylow-conjugacy-ascent-for-fusion, lem-fusion-control-and-centralizer-transitivity, def-control-of-fusion-in-a-sylow-p-subgroup, def-p-local-normalizer-for-normal-complement-theory, def-normal-p-complement-and-p-nilpotent-group, def-sylow-p-subgroup, def-normalizer-of-a-subgroup, def-subgroup, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, thm-lagrange, def-normal-subgroup, def-commutator-and-commutator-subgroup, thm-conjugation-is-an-automorphism, lem-group-inverse-laws, def-conjugacy-class-and-centralizer, lem-centralizers-and-normalizers-are-subgroups]
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
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$ a Sylow
$p$-subgroup ([[def-sylow-p-subgroup]]). Suppose that every nontrivial $p$-local
normalizer $N_G(Q)$, $1\ne Q\le P$, has a normal $p$-complement
([[def-p-local-normalizer-for-normal-complement-theory]],
[[def-normal-p-complement-and-p-nilpotent-group]]). Then $P$ controls fusion in
$P$ with respect to $G$ ([[def-control-of-fusion-in-a-sylow-p-subgroup]]):
whenever $x,y\in P$ and $y=x^{g}=gxg^{-1}$ for some $g\in G$, there is
$v\in P$ with $y=x^{v}$.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a Sylow $p$-subgroup $P\le G$, and the hypothesis that $N_G(Q)$ has a normal $p$-complement for every subgroup $Q$ with $1\ne Q\le P$.

[F1] Normal $p$-complement structure: if a finite group $H$ has a normal $p$-complement $K$, then $K\mathrel{\trianglelefteq}H$, $p\nmid|K|$, $[H:K]$ is a power of $p$, and for every Sylow $p$-subgroup $S$ of $H$ one has $[H:K]=|S|$, $S\cap K=\{1\}$ and $H=KS=SK$; thus every $h\in H$ can be written $h=sk$ with $s\in S$, $k\in K$ ([[def-normal-p-complement-and-p-nilpotent-group]], [[def-sylow-p-subgroup]], [[def-normal-subgroup]]).

[F2] Conjugation and commutators: $x^{g}=gxg^{-1}$, $(x^{a})^{b}=x^{ba}$, equivalently $x^{ab}=(x^{b})^{a}$; $[a,b]=aba^{-1}b^{-1}$; if $N\mathrel{\trianglelefteq}H$, $a\in N$ and $h\in H$, then $hah^{-1}\in N$, so $[h,a]=hah^{-1}a^{-1}\in N$ as well; and $[a,b]$, as a product of $a$ and $b$, lies in every subgroup containing both $a$ and $b$ ([[def-conjugacy-class-and-centralizer]], [[lem-group-inverse-laws]], [[def-commutator-and-commutator-subgroup]], [[def-normal-subgroup]], [[thm-conjugation-is-an-automorphism]], [[def-subgroup]]).

[F3] If $P\in\operatorname{Syl}_p(G)$ then $P\le N_G(P)$, $P\mathrel{\trianglelefteq}N_G(P)$ and $P\in\operatorname{Syl}_p(N_G(P))$ ([[def-normalizer-of-a-subgroup]], [[def-sylow-p-subgroup]], [[thm-lagrange]]).

[F4] $T\le N_H(T)$ for every subgroup $T\le H$: every element of $T$ normalizes $T$ ([[def-normalizer-of-a-subgroup]], [[lem-centralizers-and-normalizers-are-subgroups]]).

[F5] If a Sylow $p$-subgroup $T$ of a finite group $H$ controls fusion in $T$, then its normalizer also controls fusion there, and [[lem-fusion-control-and-centralizer-transitivity]] says this is equivalent to $C_H(x)$ acting transitively on Sylow $p$-subgroups of $H$ containing every $x\in T\setminus\{e\}$. Local Sylow conjugacy ascent ([[lem-local-sylow-conjugacy-ascent-for-fusion]]) needs this centralizer transitivity only for $x\in S\setminus\{e\}$, for each nontrivial $S\le P$ and $H=N_G(S)$.

[F6] Subgroup and order facts: a subgroup of a finite $p$-group is a finite $p$-group; subgroups of finite groups have order dividing the group order ([[lem-subgroups-of-finite-p-groups-are-p-groups]], [[def-finite-p-group]], [[thm-lagrange]]).



## Proof

**Proof technique:** direct.

1.1 (A $p$-nilpotent group is controlled by its Sylow subgroups.) Let $H$ be a finite group with a normal $p$-complement $K$, and let $S\in\operatorname{Syl}_p(H)$. Let $x,y\in S$ and $h\in H$ with $y=x^{h}$. By [F1], $H=KS$, so we may write $h=ks$ with $k\in K$, $s\in S$, and by [F2] $y=x^{ks}=(x^{s})^{k}$. Put $a:=x^{s}\in S$, so that $y=a^{k}=kak^{-1}$ and hence $[k,a]=kak^{-1}a^{-1}=ya^{-1}$: this element lies in $S$, because $y,a\in S$, and it also equals $k\,(ak^{-1}a^{-1})$, which lies in $K$ because $ak^{-1}a^{-1}\in K$ by normality of $K$ and $k\in K$. Therefore $[k,a]\in S\cap K=\{1\}$ by [F1], so $ya^{-1}=1$ and $y=a=x^{s}$ with $s\in S$. Thus every $H$-conjugacy between elements of $S$ is realized inside $S$: $S$ controls fusion in $S$ with respect to $H$. [F1, F2, given]

2.1 Let $S\le P$ be a nontrivial subgroup; since $P$ is a finite $p$-group, the subgroup $S$ is a finite $p$-group by [F6]. Let $T\in\operatorname{Syl}_p(N_G(S))$. The hypothesis gives that $N:=N_G(S)$ has a normal $p$-complement, so by step 1.1 applied to $H:=N$ and the Sylow $T$ of $N$, the group $T$ controls fusion in $T$ with respect to $N$; by [F4] we have $T\le N_N(T)$, so the normalizer $N_{N_G(S)}(T)$ controls fusion in $T$ with respect to $N_G(S)$ as well. [F4, F6, given, step 1.1]

2.2 If $P\ne\{1\}$, then $P$ is a nontrivial subgroup of $P$, so the hypothesis gives that $N_G(P)$ has a normal $p$-complement; by [F3] the subgroup $P$ is a Sylow $p$-subgroup of $N_G(P)$, and by step 1.1 applied to $H:=N_G(P)$ with the Sylow $P$, the group $P$ controls fusion in $P$ with respect to $N_G(P)$. [F3, given, step 1.1]

3.1 Let $S\le P$ be nontrivial and $x\in S\setminus\{e\}$. Since $S\le N_G(S)$, some Sylow $T$ of $N_G(S)$ contains $S$ and hence $x$. By step 2.1, $T$ controls fusion in $T$ with respect to $N_G(S)$, so [F5] gives centralizer transitivity for $x$. As $S$ and $x$ were arbitrary, the hypothesis of the local Sylow conjugacy ascent in [F5] is satisfied; therefore $N_G(P)$ controls fusion in $P$ with respect to $G$. [F5, step 2.1]

4.1 Let $x,y\in P$ and $g\in G$ with $y=x^{g}$. If $P\ne\{1\}$, step 3.1 provides $u\in N_G(P)$ with $y=x^{u}$, and then step 2.2 provides $v\in P$ with $y=x^{v}$. If $P=\{1\}$ then $x=y=e$ and $y=x^{e}$ with $e\in P$, so $P$ controls fusion in $P$ in this case too. ∎ [step 2.2, step 3.1]
