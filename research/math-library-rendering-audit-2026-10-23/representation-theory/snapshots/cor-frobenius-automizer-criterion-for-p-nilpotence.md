---
id: cor-frobenius-automizer-criterion-for-p-nilpotence
kind: corollary
title: "Frobenius automizer criterion for p nilpotence"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-p-automizer-condition-implies-fusion-control, thm-frobenius-normal-p-complement-theorem, def-normal-p-complement-and-p-nilpotent-group, def-p-local-normalizer-for-normal-complement-theory, def-control-of-fusion-in-a-sylow-p-subgroup, def-sylow-p-subgroup, def-normalizer-of-a-subgroup, def-centralizer-of-a-subgroup, def-subgroup, def-normal-subgroup, def-quotient-group, def-commutator-and-commutator-subgroup, lem-centralizer-of-a-normal-subgroup-is-normal, lem-centralizers-and-normalizers-are-subgroups, thm-second-isomorphism-theorem-groups, thm-third-isomorphism-theorem-groups, thm-first-isomorphism-theorem-groups, thm-image-subgroup-and-kernel-normal, thm-lagrange, cor-order-of-a-quotient-group, lem-subgroups-of-finite-p-groups-are-p-groups, def-finite-p-group, def-group-homomorphism, lem-group-homomorphism-basic-properties, thm-sylow-first-theorem, thm-sylow-second-theorem, def-subgroup-commutator-and-lower-central-series, lem-group-inverse-laws, def-generated-subgroup]
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
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$ a Sylow
$p$-subgroup ([[def-sylow-p-subgroup]]). Then the following are equivalent.

(i) $G$ has a normal $p$-complement
([[def-normal-p-complement-and-p-nilpotent-group]]).
(ii) For every subgroup $Q$ with $1\ne Q\le P$, the automizer $N_G(Q)/C_G(Q)$ is
a $p$-group ([[def-normalizer-of-a-subgroup]],
[[def-centralizer-of-a-subgroup]], [[def-quotient-group]],
[[def-finite-p-group]]).

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$ and a Sylow $p$-subgroup $P\le G$.

[F1] (ii) implies (i): if the automizer condition (ii) holds, then by [[lem-p-automizer-condition-implies-fusion-control]] the Sylow $P$ controls fusion in $P$ with respect to $G$, and then by [[thm-frobenius-normal-p-complement-theorem]] $G$ has a normal $p$-complement ([[def-control-of-fusion-in-a-sylow-p-subgroup]]).

[F2] (i) implies (ii): suppose $G$ has a normal $p$-complement $K$, let $Q$ be a subgroup with $1\ne Q\le P$, and put $N:=N_G(Q)$, $C:=C_G(Q)$ and $K_0:=K\cap N$. Then $K\mathrel{\trianglelefteq}G$ with $p\nmid|K|$ and $[G:K]$ a power of $p$, $K\cap P=\{1\}$, $K_0\mathrel{\trianglelefteq}N$, $Q\mathrel{\trianglelefteq}N$ and $Q\le N$ ([[def-normal-p-complement-and-p-nilpotent-group]], [[def-normalizer-of-a-subgroup]], [[def-normal-subgroup]], [[def-subgroup]], [[def-sylow-p-subgroup]]).

[F3] Commutator inclusions used in step 1.2: if $A\mathrel{\trianglelefteq}N$ and $B\le N$, then $[A,B]\le A$, since for $a\in A$, $b\in B$ one has $bab^{-1}\in A$ and hence $[a,b]=a(bab^{-1})^{-1}\in A$; and if $B\mathrel{\trianglelefteq}N$ then $[A,B]\le B$ likewise, since $aba^{-1}\in B$; here $[A,B]=\langle[a,b]:a\in A,b\in B\rangle$ with $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-subgroup-commutator-and-lower-central-series]], [[def-normal-subgroup]], [[lem-group-inverse-laws]], [[def-generated-subgroup]]).

[F4] Homomorphism and quotient facts: if $K\mathrel{\trianglelefteq}G$ then $g\mapsto gK$ is a homomorphism $G\to G/K$ with kernel $K$, so $N/K_0\cong NK/K$ is isomorphic to a subgroup of $G/K$; and for subgroups $K_0\le C\le N$ with both normal in $N$ the third isomorphism theorem gives $(N/K_0)/(C/K_0)\cong N/C$; subgroups and quotients of finite $p$-groups are finite $p$-groups ([[thm-first-isomorphism-theorem-groups]], [[thm-third-isomorphism-theorem-groups]], [[thm-image-subgroup-and-kernel-normal]], [[def-group-homomorphism]], [[def-quotient-group]], [[cor-order-of-a-quotient-group]], [[thm-lagrange]], [[lem-subgroups-of-finite-p-groups-are-p-groups]], [[def-finite-p-group]]).

[F5] If $P=\{1\}$ then $|P|=1=p^{0}$ is the exact power of $p$ dividing $|G|$, so $p\nmid|G|$ and $G$ itself is a normal $p$-complement of $G$; the condition (ii) is then vacuous ([[def-sylow-p-subgroup]], [[def-finite-p-group]], [[thm-lagrange]], [[def-normal-p-complement-and-p-nilpotent-group]]).



## Proof

**Proof technique:** direct.

1.1 (ii) implies (i): this is [F1]. [F1]

1.2 (i) implies (ii). Assume that $G$ has a normal $p$-complement $K$, retain the notation $N=N_G(Q)$, $C=C_G(Q)$, $K_0=K\cap N$ of [F2] for a subgroup $Q$ with $1\ne Q\le P$, and note $K_0\mathrel{\trianglelefteq}N$ with $K_0\le N$ and $Q\mathrel{\trianglelefteq}N$. By [F3] applied inside $N$ to the normal subgroup $K_0$ and the subgroup $Q$, we get $[K_0,Q]\le K_0$; applying it to the normal subgroup $Q$ and the subgroup $K_0$ gives $[K_0,Q]\le Q$. Hence $[K_0,Q]\le K_0\cap Q\le K\cap P=\{1\}$, so every generator of $[K_0,Q]$ is trivial and $[K_0,Q]=\{1\}$; that is, every element of $K_0$ commutes with every element of $Q$, so $K_0\le C=C_G(Q)$. [F2, F3]

2.1 Consequently $K_0\le C\le N$ with $K_0$ and $C$ normal in $N$: $C\mathrel{\trianglelefteq}N$ because $Q\mathrel{\trianglelefteq}N$ and by [[lem-centralizer-of-a-normal-subgroup-is-normal]]. By [F4] the quotient $N/C$ is isomorphic to $(N/K_0)/(C/K_0)$, a quotient of $N/K_0$, and $N/K_0$ is isomorphic to a subgroup of $G/K$. [F2, F4, step 1.2]

3.1 Now $G/K$ is a $p$-group by [F2], so its subgroup $N/K_0$ is a $p$-group, and the quotient $N/C$ of that $p$-group is a $p$-group by [F4]. As $Q$ with $1\ne Q\le P$ was arbitrary, (ii) holds. [F2, F4, step 2.1]

4.1 If $P=\{1\}$ then both conditions hold by [F5]. Otherwise step 1.1 gives (ii)$\Rightarrow$(i) and step 3.1 gives (i)$\Rightarrow$(ii), so the two conditions are equivalent. ∎ [F5, step 1.1, step 3.1]
