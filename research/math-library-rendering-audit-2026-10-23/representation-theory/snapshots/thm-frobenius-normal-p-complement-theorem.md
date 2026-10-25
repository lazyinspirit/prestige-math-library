---
id: thm-frobenius-normal-p-complement-theorem
kind: theorem
title: "Frobenius normal p complement theorem"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normal-p-complement-and-p-nilpotent-group, def-p-local-normalizer-for-normal-complement-theory, def-control-of-fusion-in-a-sylow-p-subgroup, def-sylow-p-subgroup, def-p-residual-of-a-finite-group, lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers, lem-local-normal-p-complements-force-control-of-fusion, lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual, lem-p-residual-is-generated-by-p-prime-elements-and-idempotent, def-normal-subgroup, def-subgroup, thm-lagrange, cor-order-of-a-quotient-group, thm-second-isomorphism-theorem-groups, lem-product-with-normal-subgroup, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, def-group-homomorphism, thm-first-isomorphism-theorem-groups]
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
$p$-subgroup ([[def-sylow-p-subgroup]]). The following are equivalent.

(a) $G$ has a normal $p$-complement
([[def-normal-p-complement-and-p-nilpotent-group]]);
(b) every nontrivial $p$-local normalizer $N_G(Q)$ with $1\ne Q\le P$ has a
normal $p$-complement ([[def-p-local-normalizer-for-normal-complement-theory]]);
(c) $P$ controls fusion in $P$ with respect to $G$
([[def-control-of-fusion-in-a-sylow-p-subgroup]]).

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$ and a Sylow $p$-subgroup $P\le G$.

[F1] (a) implies (b): if $G$ has a normal $p$-complement, then $N_G(Q)$ has a normal $p$-complement for every nontrivial $p$-subgroup $Q\le G$ ([[lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers]], [[def-p-local-normalizer-for-normal-complement-theory]]).

[F2] (b) implies (c): if every nontrivial $p$-local normalizer $N_G(Q)$, $1\ne Q\le P$, has a normal $p$-complement, then $P$ controls fusion in $P$ with respect to $G$ ([[lem-local-normal-p-complements-force-control-of-fusion]], [[def-control-of-fusion-in-a-sylow-p-subgroup]]).

[F3] (c) implies (a): if $P$ controls fusion in $P$ with respect to $G$, then $P\cap O^{p}(G)=\{1\}$ ([[lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual]], [[def-p-residual-of-a-finite-group]]).

[F4] $K:=O^{p}(G)$ is a normal subgroup of $G$, $G/K$ is a finite $p$-group, and $G=P\,K$ ([[def-p-residual-of-a-finite-group]], [[lem-p-residual-is-generated-by-p-prime-elements-and-idempotent]], [[def-sylow-p-subgroup]], [[def-finite-p-group]]).

[F5] If $K\mathrel{\trianglelefteq}G$ then $PK$ is a subgroup of $G$ with $[G:K]=[PK:K]\cdot[G:PK]$ in the sense that $|G|=|PK|\cdot[G:PK]$, and $PK/K\cong P/(P\cap K)$; in particular, if $PK=G$ and $P\cap K=\{1\}$, then $|G|=|P|\,|K|$ and $[G:K]=|P|$ ([[thm-second-isomorphism-theorem-groups]], [[thm-first-isomorphism-theorem-groups]], [[lem-product-with-normal-subgroup]], [[cor-order-of-a-quotient-group]], [[thm-lagrange]], [[def-normal-subgroup]], [[def-subgroup]]).

[F6] Order facts: $|P|$ is the exact power of $p$ dividing $|G|$, all Sylow $p$-subgroups of $G$ have this order, and $1=p^{0}$; if $S\le G$ then $|S|$ divides $|G|$ ([[def-sylow-p-subgroup]], [[thm-lagrange]], [[def-finite-p-group]]).



## Proof

**Proof technique:** direct.

1.1 (a) implies (b): this is [F1]. [F1]

1.2 (b) implies (c): this is [F2]. [F2]

1.3 (c) implies (a). Assume (c). If $P=\{1\}$, then $|P|=1=p^{0}$ is the exact power of $p$ dividing $|G|$ by [F6], so $p\nmid|G|$; then $K:=G$ is normal in $G$, $p\nmid|K|$ and $[G:K]=1=p^{0}$ is a power of $p$, so $G$ has a normal $p$-complement. [F6, given]

2.1 It remains to treat the case $P\ne\{1\}$ under assumption (c). By [F3] we have $P\cap K=\{1\}$ for $K:=O^{p}(G)$, and by [F4] $K\mathrel{\trianglelefteq}G$ and $G=PK$. [F3, F4, step 1.3]

3.1 By [F5] applied to the normal subgroup $K$ and the subgroup $P$, the equality $G=PK$ together with $P\cap K=\{1\}$ gives $|G|=|P|\,|K|$ and $[G:K]=|P|$. [F5, step 2.1]

4.1 Hence $|K|=|G|/|P|$ is prime to $p$, because $|P|$ is the exact power of $p$ dividing $|G|$ by [F6]; and $[G:K]=|P|$ is a power of $p$. Since $K\mathrel{\trianglelefteq}G$, the subgroup $K$ is a normal $p$-complement of $G$. [F4, F6, step 2.1, step 3.1]

5.1 We have proved (a)$\Rightarrow$(b) in step 1.1, (b)$\Rightarrow$(c) in step 1.2, and (c)$\Rightarrow$(a) in steps 1.3 and 4.1; hence the three conditions are equivalent. ∎ [step 1.1, step 1.2, step 1.3, step 4.1]
