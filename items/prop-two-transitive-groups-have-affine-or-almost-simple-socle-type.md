---
id: prop-two-transitive-groups-have-affine-or-almost-simple-socle-type
kind: proposition
title: "Finite 2-transitive groups have affine or almost simple socle type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-almost-simple-finite-group, def-k-transitive-and-k-homogeneous-actions, prop-doubly-transitive-actions-are-primitive, thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive, cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups, lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular, lem-distinct-minimal-normal-subgroups-centralize-one-another, lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple, prop-unique-abelian-minimal-normal-subgroup-gives-affine-type, thm-cauchys-theorem-for-finite-groups, thm-sylow-first-theorem, thm-nontrivial-center-of-a-finite-p-group, cor-orbit-stabilizer-cardinality, thm-lagrange]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Local defect-focused proof repair and prerequisite review; no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Chris Godsil, Geometry, Sections 29.1–29.2, especially Lemma 29.1.3 and Theorem 29.5.1"
      url: "https://www.math.uwaterloo.ca/~cgodsil/pdfs/bigGeom.pdf"
    - title: "Peter J. Cameron, A note on Burnside's Theorem (elementary correction)"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/permgps/burnside.html"
---

## Statement

Every finite $2$-transitive permutation group of degree at least $2$ is of affine type or almost simple type. More precisely, it has a unique minimal normal subgroup $N$; either $N$ is elementary abelian and regular, with a faithful irreducible point-stabilizer action, or $N$ is nonabelian simple and $N\le G\le\operatorname{Aut}(N)$.

## Facts & Assumptions

**Given:** A finite $2$-transitive permutation group $G\le\operatorname{Sym}(\Omega)$, with $n=|\Omega|\ge2$.

[L1] A doubly transitive action is primitive, and a minimal normal subgroup in a faithful primitive action is transitive ([[prop-doubly-transitive-actions-are-primitive]], [[thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]]). The ordered-pair convention is [[def-k-transitive-and-k-homogeneous-actions]].

[L2] A finite primitive group has at most two minimal normal subgroups; distinct ones commute and are regular ([[cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups]], [[lem-distinct-minimal-normal-subgroups-centralize-one-another]], [[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]]).

[L3] A minimal normal subgroup of a finite group is characteristically simple ([[lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple]]).

[L4] Cauchy's theorem, Sylow existence, and the nontrivial center of a nontrivial finite $p$-group are available ([[thm-cauchys-theorem-for-finite-groups]], [[thm-sylow-first-theorem]], [[thm-nontrivial-center-of-a-finite-p-group]]).

[L5] Finite orbit sizes are stabilizer indices, and subgroup orders divide group orders ([[cor-orbit-stabilizer-cardinality]], [[thm-lagrange]]).

[L6] A unique abelian minimal normal subgroup gives the stated affine structure ([[prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]]); the other alternative is [[def-almost-simple-finite-group]].

## Proof

**Proof technique:** direct.

1.1 Choose a minimal normal subgroup $N\ne1$, possible by finiteness. It is transitive by [L1]. If $N$ is regular, identify $\Omega$ with $N$ by $u\mapsto u\alpha$. Conjugation by $G_\alpha$ is transitive on $N\setminus\{1\}$, so all nonidentity elements have the same order, necessarily a prime $p$ by taking powers. By Cauchy's theorem $N$ is a $p$-group; its nontrivial characteristic center equals $N$ by [L3]. Thus $N$ is elementary abelian. A permutation centralizing a regular group is determined by its value at $\alpha$; for abelian $N$ it is the corresponding translation. A second minimal normal subgroup would therefore lie in $N$ by [L2], which is impossible. The affine conclusion follows from [L6]. [given, L1, L2, L3, L4, L6, algebra]

2.1 Assume henceforth that $N$ is nonregular. Since $N_\alpha\trianglelefteq G_\alpha$, all its orbits on $\Omega\setminus\{\alpha\}$ have a common size $m$. Transitivity of $N$ gives the same size at every point. Here $m>1$, for otherwise $N_\alpha$ fixes every point and is trivial. [step 1.1, given, algebra]

3.1 We establish a finite permutation fact: a faithful transitive group $U$ whose nontrivial suborbits all have size $m>1$ is primitive or has trivial two-point stabilizers. Suppose $B$ is a block of size $1<k<n$, with $b\in B$ and $i\notin B$. Since $U_b$ preserves $B$, $m\mid(k-1)$, so $\gcd(k,m)=1$. The union of the translates of $B$ under $U_i$ is a union both of blocks of size $k$ and of suborbits of size $m$; its size is at most $km$, so equals $km$. Thus the setwise stabilizer $U_{i,B}$ has index $m$ in $U_i$. [step 2.1, L5, algebra]

4.1 For every $b\in B$, $U_{i,b}\le U_{i,B}$ and both have index $m$, so they agree. In particular this group fixes $B$ pointwise. If $b'\in B\setminus\{b\}$, then $$U_{i,b}\le U_{(B)}\le U_{b,b'},$$ where $U_{(B)}$ is the pointwise stabilizer. All two-point stabilizers have order $|U|/(nm)$, so both inclusions are equalities. Applying the same argument to the block $C$ containing $i$ gives $U_{(B)}=U_{(C)}$. This holds for every block, so their common pointwise stabilizer fixes all points and is trivial. Both within-block and between-block two-point stabilizers are therefore trivial. [step 3.1, L5, algebra]

5.1 If $N$ were imprimitive, steps 3.1–4.1 would give trivial two-point stabilizers. Put $h=|N_\alpha|>1$. Counting the elements fixing exactly one point shows that the set $D$ of fixed-point-free elements of $N$ has size $$|D|=nh-1-n(h-1)=n-1.$$ The set $D$ is conjugation invariant under $G$. The number $a$ of its elements carrying one point to a different specified point is independent of the ordered pair by $2$-transitivity. Counting these incidences gives $n(n-1)=a n(n-1)$, hence $a=1$. Conjugating the ordered pair $(\alpha,d\alpha)$ to $(\alpha,e\alpha)$ for $d,e\in D$ now shows that $d,e$ are conjugate in $G$. [step 2.1, step 4.1, given, algebra]

6.1 The action of $N_\alpha$ on the other points is free, so $h\mid(n-1)$. For each prime $p\mid n$, Cauchy's theorem gives an element of order $p$ in $N$, necessarily in $D$ since $p\nmid h$. All elements of $D$ have the same order, so $n$ is a power of a single prime $p$. A Sylow $p$-subgroup $P$ of $N$ has order $n$, because $p\nmid h$. All its nonidentity elements are fixed-point-free. Thus $P=D\cup\{1\}$ is a nontrivial proper $G$-normal subgroup of $N$, contradicting minimality. Hence $N$ is primitive. [step 5.1, L4, L5, algebra]

7.1 Suppose $N$ is not simple and choose a nontrivial proper minimal normal subgroup $M$ of $N$. It is not $G$-normal, so it has a distinct $G$-conjugate $M'$. By [L2] for primitive $N$, these are its only two minimal normal subgroups, and they commute and are regular. Thus $MM'$ is $G$-normal, whence $N=MM'$; also $M\cap M'=1$. The group $M$ is nonabelian: otherwise its permutation centralizer would be $M$, forcing the commuting regular subgroup $M'$ to equal $M$. [step 6.1, L1, L2, algebra]

8.1 Let $H=N_G(M)$. Its index in $G$ is two, it contains $N$, and it is transitive. Consequently $G=HG_\alpha$ and $[G_\alpha:H_\alpha]=2$. Its normal subgroup $H_\alpha\trianglelefteq G_\alpha$ has either one orbit or two equal-sized orbits on $\Omega\setminus\{\alpha\}$. Under the regular identification with $M$, these are automorphism orbits on $M\setminus\{1\}$. Thus there are at most two nonidentity element orders in $M$. [step 7.1, L5, algebra]

9.1 If $|M|$ has only one prime divisor, its nontrivial center makes it abelian by [L3] and [L4], contradicting step 7.1. Otherwise Cauchy's theorem shows that there are exactly two prime divisors $p,q$, and the two equal-sized orbits consist of elements of orders $p$ and $q$. No other nonidentity order is possible. [step 7.1, step 8.1, L3, L4, algebra]

10.1 For an element $x$ of order $p$, the centralizer $C_M(x)$ has order a power of $p$: if $q$ divided its order, Cauchy's theorem would give a commuting element $y$ of order $q$, and $xy$ would have order $pq$, an impossibility. By [L5], every $M$-conjugacy class of elements of order $p$ has size divisible by $q$. The total number of such elements, $(|M|-1)/2$, is therefore divisible by $q$, contrary to $q\mid |M|$. This contradiction proves that $N$ is simple. It is nonabelian, since a faithful transitive abelian group is regular. [step 9.1, L4, L5, algebra]

11.1 Since $N$ is nonregular, [L2] excludes a second minimal normal subgroup of $G$. If its normal centralizer $C_G(N)$ were nontrivial, it would contain a minimal normal subgroup of $G$ and thus contain $N$, contrary to nonabelian simplicity. So conjugation embeds $G$ in $\operatorname{Aut}(N)$. The subgroup $N$ maps to its inner automorphism group, isomorphic to $N$ because $Z(N)=1$. This is the almost simple alternative. Together with step 1.1 it proves the claim. [step 1.1, step 10.1, L2, L6, algebra] ∎
