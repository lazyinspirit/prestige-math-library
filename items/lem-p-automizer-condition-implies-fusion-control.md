---
id: lem-p-automizer-condition-implies-fusion-control
kind: lemma
title: "P automizer condition implies fusion control"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-control-of-fusion-in-a-sylow-p-subgroup, def-sylow-p-subgroup, def-normalizer-of-a-subgroup, def-centralizer-of-a-subgroup, lem-centralizer-of-a-normal-subgroup-is-normal, lem-centralizers-and-normalizers-are-subgroups, lem-fusion-control-and-centralizer-transitivity, lem-local-sylow-conjugacy-ascent-for-fusion, lem-automizer-condition-gives-centralizer-transitivity, lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power, thm-first-isomorphism-theorem-groups, thm-image-subgroup-and-kernel-normal, thm-sylow-first-theorem, thm-sylow-second-theorem, thm-lagrange, cor-order-of-a-quotient-group, def-quotient-group, def-normal-subgroup, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, def-subgroup, def-generated-subgroup, thm-conjugation-is-an-automorphism, lem-group-inverse-laws, def-conjugacy-class-and-centralizer, def-group-homomorphism, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Craven, Finite Group Theory, Lecture 3"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/Lecture%203_0.pdf"
      locator: "Lecture 3, Theorem 3.8 and sheet 3 solutions, pp. 38, 83–84"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2.1–2.5, 3.1–3.8, 4.1–4.3, 5.5–5.10, PDF pp. 1–15"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$ a Sylow
$p$-subgroup ([[def-sylow-p-subgroup]]). Suppose that for every subgroup $Q$
with $1\ne Q\le P$ the quotient

$$N_G(Q)/C_G(Q)$$

of the normalizer by the centralizer of $Q$
([[def-normalizer-of-a-subgroup]], [[def-centralizer-of-a-subgroup]],
[[def-quotient-group]]) is a $p$-group ([[def-finite-p-group]]), where
$C_G(Q)\mathrel{\trianglelefteq}N_G(Q)$ by
[[lem-centralizer-of-a-normal-subgroup-is-normal]]. Then $P$ controls fusion in
$P$ with respect to $G$ ([[def-control-of-fusion-in-a-sylow-p-subgroup]]):
whenever $x,y\in P$ and $y=x^{g}=gxg^{-1}$ for some $g\in G$, there is
$v\in P$ with $y=x^{v}$.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a Sylow $p$-subgroup $P\le G$, and the hypothesis that $N_G(Q)/C_G(Q)$ is a $p$-group for every subgroup $Q$ with $1\ne Q\le P$.

[F1] The hypothesis is conjugation invariant: for a subgroup $R\le G$ and $g\in G$ one has $N_G(R^{g})=N_G(R)^{g}$ and $C_G(R^{g})=C_G(R)^{g}$, and conjugation by $g$ induces an isomorphism $N_G(R)/C_G(R)\to N_G(R^{g})/C_G(R^{g})$. Since every nontrivial $p$-subgroup of $G$ is conjugate into $P$ ([[thm-sylow-second-theorem]]), the hypothesis therefore holds for every nontrivial $p$-subgroup $R\le G$ ([[thm-conjugation-is-an-automorphism]], [[thm-first-isomorphism-theorem-groups]], [[def-group-isomorphism-and-automorphism]], [[def-normalizer-of-a-subgroup]], [[def-centralizer-of-a-subgroup]]).

[F2] If $R\le G$ is a subgroup then $C_G(R)\mathrel{\trianglelefteq}N_G(R)$, so $N_G(R)/C_G(R)$ is a quotient group of $N_G(R)$ ([[lem-centralizer-of-a-normal-subgroup-is-normal]], [[def-normal-subgroup]], [[def-quotient-group]]).

[F3] If $S$ is a nontrivial $p$-subgroup of a finite group $H$ and $N_H(S)/C_H(S)$ is a $p$-group, then $C_H(S)$ acts transitively on the Sylow $p$-subgroups of $N_H(S)$; in particular, for each $x\in S$, $C_{N_H(S)}(x)$ is transitive on those Sylow subgroups containing $x$ ([[lem-automizer-condition-gives-centralizer-transitivity]]).


[F4] Local Sylow conjugacy ascent: if for every nontrivial $p$-subgroup $S\le P$ and every $x\in S\setminus\{e\}$ the centralizer $C_{N_G(S)}(x)$ acts transitively on the Sylow $p$-subgroups of $N_G(S)$ containing $x$, then $N_G(P)$ controls fusion in $P$ with respect to $G$ ([[lem-local-sylow-conjugacy-ascent-for-fusion]], [[def-control-of-fusion-in-a-sylow-p-subgroup]]).

[F5] If $C\mathrel{\trianglelefteq}N$ and $N/C$ is a $p$-group and $T\in\operatorname{Syl}_p(N)$, then $N=TC$ ([[lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power]], [[def-sylow-p-subgroup]]).

[F6] If $H$ is a $p$-group then every subgroup of $H$ is a $p$-group and $|H|$ is a power of $p$; the image of a $p$-group under a homomorphism is a $p$-group, and every subgroup of a $p$-group is a $p$-group ([[def-finite-p-group]], [[lem-subgroups-of-finite-p-groups-are-p-groups]], [[thm-image-subgroup-and-kernel-normal]], [[cor-order-of-a-quotient-group]], [[thm-lagrange]]).

[F7] If $P\in\operatorname{Syl}_p(G)$ then $P\le N_G(P)$, $P\mathrel{\trianglelefteq}N_G(P)$ and $P\in\operatorname{Syl}_p(N_G(P))$ ([[def-normalizer-of-a-subgroup]], [[def-sylow-p-subgroup]], [[thm-lagrange]]).

[F8] Conjugation laws and subgroups: $x^{g}=gxg^{-1}$, $(x^{a})^{b}=x^{ba}$, equivalently $x^{ab}=(x^{b})^{a}$; $C_G(x)$, $C_G(R)$ and all normalizers are subgroups, and $c\in C_G(R)$ centralizes every element of $R$ ([[thm-conjugation-is-an-automorphism]], [[lem-group-inverse-laws]], [[def-conjugacy-class-and-centralizer]], [[lem-centralizers-and-normalizers-are-subgroups]], [[def-subgroup]]).




## Proof

**Proof technique:** direct.

1.1 The hypothesis holds for every nontrivial $p$-subgroup of $G$: if $R\le G$ is a nontrivial $p$-subgroup, [F1] provides $g\in G$ with $R^{g}\le P$, so $N_G(R^{g})/C_G(R^{g})$ is a $p$-group and, by [F1], $N_G(R)/C_G(R)$ is isomorphic to it, hence is a $p$-group. [F1, F6]

1.2 If $P=\{1\}$ then the only element of $P$ is $e=e^{e}$, so $P$ controls fusion in $P$ trivially. Assume now $P\ne\{1\}$; then the hypothesis applies to the nontrivial subgroup $Q:=P\le P$, so $N_G(P)/C_G(P)$ is a $p$-group, while $C_G(P)\mathrel{\trianglelefteq}N_G(P)$ by [F2] and $P\in\operatorname{Syl}_p(N_G(P))$ by [F7]; hence [F5] applies with $N=N_G(P)$, $C=C_G(P)$ and the Sylow $p$-subgroup $P$, giving $N_G(P)=P\,C_G(P)$. [F2, F5, F7, given]

1.3 Let $S\le P$ be a nontrivial $p$-subgroup, put $N:=N_G(S)$ and $C:=C_G(S)$, and let $x\in S\setminus\{e\}$. The hypothesis directly gives that $N/C$ is a $p$-group, so [F3] applies to the subgroup $S\le G$ and gives that $C_N(x)$ acts transitively on the Sylow $p$-subgroups of $N$ containing $x$. [F2, F3, given]

2.1 Since $S\le P$ and $x\in S\setminus\{e\}$ were arbitrary, step 1.3 verifies the local centralizer-transitivity hypothesis of [F4]. Thus $N_G(P)$ controls fusion in $P$ with respect to $G$. [F4, step 1.3]

3.1 Equivalently, for every pair $a,b\in P$ with $b=a^g$ for some $g\in G$, step 2.1 supplies an element $u\in N_G(P)$ such that $b=a^u$. [F4, step 2.1]

4.1 Finally let $x,y\in P$ and $g\in G$ with $y=x^{g}$. By step 3.1 there is $u\in N_G(P)$ with $y=x^{u}$; by step 1.2 write $u=vc$ with $v\in P$ and $c\in C_G(P)$. Then, by the conjugation law of [F8], $y=x^{vc}=(x^{c})^{v}=x^{v}$, because $c$ centralizes $x$ by [F8] and $v\in P$. Hence $P$ controls fusion in $P$ with respect to $G$. In this last step the hypothesis at $Q=P$, not only at the smaller subgroups, is what makes the conjugation action of $N_G(P)$ on $P$ inner through the decomposition $N_G(P)=P\,C_G(P)$ of step 1.2; for $P=\{1\}$ the statement is vacuous ([[def-control-of-fusion-in-a-sylow-p-subgroup]]). ∎ [F8, step 3.1, step 1.2]
