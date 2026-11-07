---
id: lem-torus-unipotent-filtration-gives-special-tate-weights
kind: lemma
title: "Tate-module weights from a torus–unipotent filtration"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: locally-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-finite-field-affine-group-has-torus-quotient-with-prime-to-p-divisible-kernel
  - thm-barsotti-chevalley-perfect-field-group-variety
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, SGA 7 I, Exposé I, §6"
      url: "https://grothendiecksga.com/read/sga7/fr/1-6.html"
      locator: "§6.4: the special-fibre invariant module has toric and abelian weights."
    - title: "Brian Conrad, BSD seminar notes, Lecture 3"
      url: "https://virtualmath1.stanford.edu/~conrad/BSDseminar/Notes/L3.pdf"
      locator: "Printed pp. 7–8: prime-to-characteristic torsion in a smooth connected group."
---

## Statement

Assume AC and DC. Let $k=\mathbb F_q$, let $\ell\ne\operatorname{char}k$ be prime, and fix an embedding $\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $G$ be a smooth connected commutative finite-type $k$-group, let $N$ be its maximal smooth connected affine normal subgroup, and let $B=G/N$ be its abelian-variety quotient. Suppose that every geometric-Frobenius eigenvalue on $V_\ell(B)$ has complex absolute value $q^{-1/2}$. Then geometric Frobenius on $T_\ell(G(\bar k))\otimes\mathbb Q_\ell$ has eigenvalue absolute values only $q^{-1/2}$ and $q^{-1}$.

## Facts & Assumptions

**Given:** AC, DC, $k,q,\ell,G,N,B$, and the stated weight of $V_\ell(B)$.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[A2] The abelian Frobenius weight is an explicit hypothesis; this lemma does not prove or import that input.

[F1] After a finite extension of the finite base field, $N$ has a split torus quotient whose kernel is uniquely divisible by every integer prime to the characteristic on geometric points. [[lem-finite-field-affine-group-has-torus-quotient-with-prime-to-p-divisible-kernel]]

[F2] A smooth connected group over a perfect field has a unique maximal smooth connected affine normal subgroup and an abelian-variety quotient, in an exact sequence. [[thm-barsotti-chevalley-perfect-field-group-variety]]

[F3] Multiplication by $\ell$ on an abelian variety over an algebraically closed field is surjective on points. [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]

## Proof

**Proof technique:** compare finite torsion in the two group extensions, then take inverse limits.

1.1 By F2 the displayed $N$ and $B$ exist in an exact sequence $0\to N\to G\to B\to0$. By F1 choose a finite extension $k'/k$ and an exact sequence $0\to U\to N_{k'}\to T\to0$ with $T$ split and multiplication by $\ell^m$ bijective on $U(\bar k)$. Work on $\bar k$-points. The two exact quotient maps are surjective on points because each fibre is a nonempty finite-type scheme over the algebraically closed field $\bar k$. For $n=\ell^m$, multiplication by $n$ is surjective on $T(\bar k)$ and bijective on $U(\bar k)$ by F1. It is therefore surjective on $N(\bar k)$: first solve the equation in $T$, lift, and correct its $U$-error. The kernel $U[n](\bar k)$ is zero, and every point of $T[n](\bar k)$ lifts to $N[n](\bar k)$ by the same correction. Hence $N[n](\bar k)\cong T[n](\bar k)$. [A1, F1, F2, given, algebra]

2.1 For any $b\in B[n](\bar k)$, lift $b$ to $g\in G(\bar k)$. Then $ng\in N(\bar k)$; by step 1.1 choose $a\in N(\bar k)$ with $na=ng$. The point $g-a$ lies in $G[n](\bar k)$ and maps to $b$. The kernel is $N[n](\bar k)$, so for each $m$ there is an exact, geometric-Frobenius-equivariant sequence $0\to T[\ell^m](\bar k)\to G[\ell^m](\bar k)\to B[\ell^m](\bar k)\to0$, where the first term is identified through the inverse of the isomorphism in step 1.1. [step 1.1, given, algebra]

3.1 The transition maps on the finite torus and abelian torsion groups are surjective: roots of unity lift over $\bar k$, and F3 lifts an $\ell^m$-torsion point to an $\ell^{m+1}$-torsion point. Given a compatible point in $T_\ell(B)$, choose a lift at the first level and then lift each next level; any discrepancy with the previous lift lies in torus torsion and can be corrected using its surjective transition. DC makes the resulting countable recursive choice. Thus inverse limits of the sequences in step 2.1 give an exact Frobenius-equivariant sequence $0\to T_\ell(T)\to T_\ell(G(\bar k))\to T_\ell(B)\to0$. Tensoring with $\mathbb Q_\ell$ preserves exactness. [A1, F3, step 2.1, given, construct]

4.1 Write $f=[k':k]$ and $q'=q^f$. Over $k'$ the torus is split. Its character lattice is finite free with finite-order arithmetic-Frobenius action, and $T_\ell(T)\cong\operatorname{Hom}(X^*(T),\mathbb Z_\ell(1))$. Geometric Frobenius acts on $\mathbb Q_\ell(1)$ by $(q')^{-1}$ for $k'$ and on the character lattice through a finite-order operator. Thus all its eigenvalues on $V_\ell(T)$ have complex absolute value $(q')^{-1}$ for geometric Frobenius over $k'$. This Frobenius is the $f$-th power of that over $k$, so its eigenvalues on $V_\ell(B)$ have absolute value $(q')^{-1/2}$ by A2. A linear map preserving a subspace has characteristic polynomial equal to the product of those on the subspace and quotient, so step 3.1 gives these two possible absolute values on $V_\ell(G)$ for the $f$-th power. Every eigenvalue $\lambda$ of geometric Frobenius over $k$ has $\lambda^f$ among those eigenvalues, hence $|\lambda|$ is $q^{-1}$ or $q^{-1/2}$. [A2, step 3.1, given, algebra] ∎
