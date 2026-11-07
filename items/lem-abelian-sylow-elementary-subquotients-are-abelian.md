---
id: lem-abelian-sylow-elementary-subquotients-are-abelian
kind: lemma
title: Abelian Sylow subgroups make elementary one-dimensional subquotients abelian
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-elementary-one-dimensional-p-adic-lie-groups
  - lem-finite-by-zp-profinite-group-splits
  - def-p-adic-integers-as-compatible-residue-classes
  - def-pro-p-group
  - def-profinite-group-by-inverse-limit
  - def-sylow-p-subgroup
  - thm-sylow-first-theorem
  - thm-sylow-second-theorem
  - lem-sylow-subgroups-of-a-normal-subgroup-are-intersections
  - cor-order-of-a-quotient-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: proof of Corollary 11.17, printed p. 34; elementary subquotients and abelian Sylow hypothesis.
verification: {}
---

## Statement

Let $p$ be a prime, let $G$ be a profinite group with a finite normal subgroup $H$ and quotient isomorphic to $\mathbb Z_p$, and let $P$ be an abelian Sylow pro-$p$ subgroup of $G$. Here a Sylow pro-$p$ subgroup means a maximal closed pro-$p$ subgroup whose image in each finite quotient is a finite Sylow $p$-subgroup. Choose an open central subgroup $\Gamma_0\cong\mathbb Z_p$, whose existence follows from the finite-by-$\mathbb Z_p$ splitting lemma. If $U\le G$ is open, $N\triangleleft U$ is finite, $\Gamma_0\le U$, and $(U/N)/(\Gamma_0N/N)$ is a finite $p$-elementary group, then $U/N$ is abelian.

## Statement references

[Johnston and Nickel, proof of Corollary 11.17](https://arxiv.org/pdf/2010.03186)

## Facts & Assumptions

**Given:** $p,G,P,\Gamma_0,U,N$ and the hypotheses in the Statement.

[F1] A finite $p$-elementary group is $C_m\times Q$ with $C_m$ cyclic of order prime to $p$ and $Q$ a finite $p$-group. [[def-elementary-one-dimensional-p-adic-lie-groups]]

[F2] A profinite group with finite normal kernel and quotient $\mathbb Z_p$ splits as a semidirect product and has a central open copy of $\mathbb Z_p$. [[lem-finite-by-zp-profinite-group-splits]]

[F3] Write $|X|_p$ for the largest power of $p$ dividing the order of a finite group $X$. Finite groups have Sylow $p$-subgroups; every $p$-subgroup lies in a Sylow subgroup; Sylow subgroups are conjugate; for a normal subgroup $K$ and Sylow subgroup $R$, $R\cap K$ is Sylow in $K$; and $|X/K|=|X|/|K|$ for finite $X$. [[def-sylow-p-subgroup]] [[thm-sylow-first-theorem]] [[thm-sylow-second-theorem]] [[lem-sylow-subgroups-of-a-normal-subgroup-are-intersections]] [[cor-order-of-a-quotient-group]]

[F4] The additive group $\mathbb Z_p$ is the inverse limit of $\mathbb Z/p^n\mathbb Z$ and is pro-$p$. [[def-p-adic-integers-as-compatible-residue-classes]] [[def-pro-p-group]]

[F5] A profinite group is an inverse limit of finite groups with the inverse-limit topology, so kernels of its finite quotient maps form a neighborhood basis. [[def-profinite-group-by-inverse-limit]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 By [F2], choose $\Gamma_0$ central and open. Since [F5] gives a neighborhood basis from finite quotient kernels, some open normal kernel $W\triangleleft G$ satisfies $W\le\Gamma_0$; hence $G/\Gamma_0$ is finite. For each open normal subgroup $V\triangleleft G$, the image of $\Gamma_0$ in $G/V$ is a central $p$-subgroup by [F4], while the image of $P$ is Sylow by the Statement's Sylow hypothesis. Their product is a $p$-subgroup because the first factor is central, so maximality of the finite Sylow subgroup forces the image of $\Gamma_0$ to lie in the image of $P$. Thus every $\gamma\in\Gamma_0$ belongs to $PV$ for every such $V$. By [F5], these cosets test the closure of $P$; since $P$ is closed by hypothesis, $\Gamma_0\le P$. Put $\bar\Gamma_0=\Gamma_0N/N$ and $E=U/N$. The quotient $Y=E/\bar\Gamma_0$ is finite, and $X=U/\Gamma_0$ is a subgroup of the finite group $G/\Gamma_0$ with a surjection $f:X\to Y$. [F2, F4, F5, given, algebra]

1.2 Let $R$ be a Sylow $p$-subgroup of $X$. By [F3], $R\cap\ker f$ is Sylow in $\ker f$, so
$$|f(R)|=\frac{|R|}{|R\cap\ker f|}=\frac{|X|_p}{|\ker f|_p}=|Y|_p,$$
where the last equality follows from $|Y|=|X|/|\ker f|$. Hence $f(R)$ is Sylow in $Y$. Given a Sylow subgroup $Q\le Y$, conjugate $R$ in $X$ so that $f(R)=Q$; this is possible because Sylow subgroups of $Y$ are conjugate and the conjugating element lifts through $f$. The resulting $R$ is still a $p$-subgroup of $G/\Gamma_0$, so [F3] places it in a conjugate of the image of $P$. That image is abelian, hence $Q$ is abelian. By [F1], $Y=C_m\times Q$ is abelian. [F1, F3, given, step 1.1, algebra]

1.3 Let $T$ be the preimage of the chosen $R$ in $U$, and let $S$ be the preimage of $Q$ in $E$. The subgroup $T$ lies in a conjugate of $P$, because $\Gamma_0\le P$ and $R$ lies in the corresponding conjugate of $P/\Gamma_0$; hence $T$ is abelian. Its image in $E$ is exactly $S$: for any $s\in S$, choose $u\in U$ representing it and $r\in R$ with $f(r)=f(u\Gamma_0)$. Then $u\Gamma_0r^{-1}\in\ker f=(N\cap U)\Gamma_0/\Gamma_0$, so $uN=r\gamma N$ for some $\gamma\in\Gamma_0$. Since $\gamma\in T$, $s$ is in the image of $T$. Thus $S$ is abelian. [F2, F3, step 1.1, step 1.2, given, construct]

2.1 Let $\bar c$ generate the factor $C_m$ of $E/\bar\Gamma_0$, and choose a lift $c\in E$. The group $\bar\Gamma_0$ is isomorphic to $\mathbb Z_p$, since $N$ is finite and $\Gamma_0$ is torsion-free. To verify the needed facts from [F4], multiplication by $m$ is bijective on each $\mathbb Z/p^n\mathbb Z$ because $p\nmid m$; the inverse maps commute with reductions, so multiplication by $m$ is an automorphism of $\mathbb Z_p$. Also, if $k x=0$ in $\mathbb Z_p$, write $k=p^a m'$ with $p\nmid m'$. The $m'$-map is invertible, and $p^a x=0$ implies that for every $n$, the coordinate $x_{n+a}$ is divisible by $p^n$ modulo $p^{n+a}$, hence its reduction $x_n$ is zero. Thus $\mathbb Z_p$ is torsion-free. Now multiply $c$ by the unique element of $\bar\Gamma_0$ whose $m$th power is $c^{-m}$; centrality of $\bar\Gamma_0$ gives a lift of order exactly $m$. Its cyclic subgroup $C$ maps isomorphically to the $C_m$ factor. Since $S$ maps onto the other factor $Q$, every element of $E$ lies in $CS$; if an element of $C\cap S$ is mapped to $Y$, it lies in $C_m\cap Q=1$, hence lies in $C\cap\bar\Gamma_0=1$ because $C$ has order prime to $p$ and $\bar\Gamma_0$ is torsion-free. Thus $E=CS$ and $C\cap S=1$. [F1, F4, step 1.2, step 1.3, given, construct, algebra]

2.2 The quotient $E/\bar\Gamma_0=C_m\times Q$ shows that $C$ centralizes $S$ modulo $\bar\Gamma_0$. For a generator $c$ of $C$, define $\delta:S\to\bar\Gamma_0$ by $\delta(s)=csc^{-1}s^{-1}$. This lies in $\bar\Gamma_0$; because $S$ is abelian and $\bar\Gamma_0$ is central, the identity $csc^{-1}=\delta(s)s$ gives $\delta(s_1s_2)=\delta(s_1)\delta(s_2)$. Iterating the same identity gives $c^m s c^{-m}=\delta(s)^m s$. Since $c^m=1$, $\delta(s)^m=1$; torsion-freeness proved in 2.1 implies $\delta(s)=1$. Thus $C$ centralizes $S$, and $E=CS$ is abelian. [F1, step 1.3, step 2.1, algebra] ∎
