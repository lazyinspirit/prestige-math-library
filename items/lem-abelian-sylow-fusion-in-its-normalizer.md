---
id: lem-abelian-sylow-fusion-in-its-normalizer
kind: lemma
title: "Abelian sylow fusion in its normalizer"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-sylow-p-subgroup, thm-sylow-second-theorem, thm-lagrange, def-centralizer-of-a-subgroup, def-conjugacy-class-and-centralizer, thm-conjugation-is-an-automorphism, def-normalizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, def-finite-p-group]
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
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$ an
**abelian** Sylow $p$-subgroup. If $x,y\in P$ are conjugate in $G$, then $x$ and
$y$ are conjugate in $N_G(P)$: there is $u\in N_G(P)$ with $y=uxu^{-1}$.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, an abelian $P\in\operatorname{Syl}_p(G)$, elements $x,y\in P$ and $g\in G$ with $y=gxg^{-1}$.

[F1] Write $|G|=p^{a}m$ with $p\nmid m$; then $|P|=p^{a}$, and a subgroup $H\le G$ is a Sylow $p$-subgroup of $G$ exactly when $|H|=p^{a}$; a $p$-subgroup of $G$ of order $p^{a}$ is a Sylow $p$-subgroup ([[def-sylow-p-subgroup]], [[thm-lagrange]]).

[F2] Every $p$-subgroup of $G$ is contained in a Sylow $p$-subgroup of $G$, and any two Sylow $p$-subgroups of $G$ are conjugate: for every Sylow $Q$ there is $u\in G$ with $Q=uPu^{-1}$ ([[thm-sylow-second-theorem]]).

[F3] As $P$ is abelian, every element of $P$ commutes with $x$ and with $y$; that is, $P\le C_G(y)$ and $P\le C_G(x)$, where $C_G(y)=\{u\in G:uy=yu\}$ ([[def-centralizer-of-a-subgroup]], [[def-conjugacy-class-and-centralizer]]).

[F4] For every $u\in G$ the map $c_u(z)=uzu^{-1}$ is an automorphism of $G$, so $c_u(zw)=c_u(z)c_u(w)$, $c_u(z)^{-1}=c_u(z^{-1})$ and $c_u$ is injective; also $u\in N_G(P)$ exactly when $uPu^{-1}=P$ ([[thm-conjugation-is-an-automorphism]], [[def-normalizer-of-a-subgroup]]).

[F5] $C_G(y)$ and $N_G(P)$ are subgroups of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).



## Proof

**Proof technique:** direct.

1.1 $P^{g}=gPg^{-1}$ is contained in $C_G(y)$: for $w\in P$ one has $z:=gwg^{-1}\in P^{g}$ and $y=gxg^{-1}$, so $zy=gwg^{-1}gxg^{-1}=g(wx)g^{-1}=g(xw)g^{-1}=yz$ by [F4] and the commutativity of $P$ in [F3]. Also $P\le C_G(y)$ by [F3]. [F3, F4, given]

2.1 Both $P$ and $P^{g}$ are Sylow $p$-subgroups of $C_G(y)$: each has order $p^{a}$ by [F1] and [F4], and each is contained in $C_G(y)$ by step 1.1; since $|C_G(y)|$ divides $|G|=p^{a}m$ by [F1], the exact power of $p$ dividing $|C_G(y)|$ is $p^{a}$, so a subgroup of $C_G(y)$ of order $p^{a}$ is a Sylow $p$-subgroup of $C_G(y)$ by [F1] applied to $C_G(y)$. [F1, F2, F5, step 1.1]

3.1 By step 2.1 and Sylow conjugacy inside the finite group $C_G(y)$ [F2], there is $c\in C_G(y)$ with $(P^{g})^{c}=P$; since $(P^{g})^{c}=c(gPg^{-1})c^{-1}=(cg)P(cg)^{-1}$, [F4] gives $cg\in N_G(P)$. [F2, F4, step 2.1]

4.1 For this $c$ one has $(x^{g})^{c}=y^{c}=y$, the first equality by [F4] applied twice and the second because $c\in C_G(y)$. [F4, step 3.1]

5.1 Since $(x^{g})^{c}=x^{cg}=y$ by step 4.1, $x$ and $y$ are conjugate by the element $cg\in N_G(P)$, as claimed. ∎ [step 3.1, step 4.1]
