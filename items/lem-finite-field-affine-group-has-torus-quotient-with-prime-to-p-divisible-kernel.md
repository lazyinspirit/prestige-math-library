---
id: lem-finite-field-affine-group-has-torus-quotient-with-prime-to-p-divisible-kernel
kind: lemma
title: "A finite-field affine group has a torus quotient and prime-to-p divisible kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: locally-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-nonaffine-affine-group-faithful-representation
  - lem-nonaffine-group-image-exact-quotient-properties
  - lem-nonaffine-connected-group-geometrically-connected
  - cor-strong-nullstellensatz-two-inclusions
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, BSD seminar notes, Lecture 3"
      url: "https://virtualmath1.stanford.edu/~conrad/BSDseminar/Notes/L3.pdf"
      locator: "Printed pp. 7–8: toric and unipotent parts of a commutative group over a perfect field."
---

## Statement

Assume AC and DC. Let $k=\mathbb F_q$ have characteristic $p$, and let $N$ be a smooth connected commutative affine finite-type $k$-group. There is a finite extension $k'/k$ and an exact sequence of $k'$-group schemes
$$0\longrightarrow U\longrightarrow N_{k'}\longrightarrow T\longrightarrow0$$
with $T$ a split torus, such that for every integer $n$ prime to $p$, multiplication by $n$ is bijective on $U(\bar k)$.

## Facts & Assumptions

**Given:** AC, DC, $k,p,N$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] An affine finite-type group scheme over a field has a finite-dimensional faithful representation as a closed subgroup of a general linear group. [[lem-nonaffine-affine-group-faithful-representation]]

[F2] The image of a finite-type group homomorphism is a closed group, the source-to-image map is faithfully flat of finite presentation with the stated kernel, and smoothness and connectedness pass to the image. [[lem-nonaffine-group-image-exact-quotient-properties]]

[F3] A smooth connected group over an algebraically closed field is integral. [[lem-nonaffine-connected-group-geometrically-connected]]

[F4] Over an algebraically closed field, the strong Nullstellensatz identifies the vanishing ideal of a zero set with the radical of its defining ideal. [[cor-strong-nullstellensatz-two-inclusions]]

## Proof

**Proof technique:** triangularize a faithful representation, take its diagonal image, and bound the exponent of the unitriangular kernel.

1.1 F1 embeds $N$ in $\operatorname{GL}_m$ over $k$. The matrices of $N(\bar k)$ commute. The algebra they span has a common eigenvector: a minimal nonzero invariant subspace is one-dimensional, since an eigenspace of any commuting operator is invariant. Induction on dimension gives a common invariant flag and a triangularizing basis over $\bar k$. Its finitely many entries lie in some finite extension $k'/k$. [A1, F1, given, construct]

2.1 In that basis every $N(\bar k)$-matrix is upper triangular. F3 makes $\bar k[N]$ a domain, and F4 then forces each coordinate below the diagonal to vanish as a function, so the representation factors scheme-theoretically through the upper-triangular group over $k'$. The diagonal projection is a homomorphism $N_{k'}\to\mathbf G_m^m$. By F2 its image $T$ is a smooth connected closed subgroup, and the map onto $T$ is faithfully flat with kernel $U$. [F2, F3, F4, step 1.1, algebra]

3.1 The coordinate ring of $T$ is a quotient of $k'[\mathbb Z^m]$. The images of its Laurent monomials are group-like; distinct group-like elements are linearly independent, by the shortest-relation coproduct argument. Thus the quotient is the group algebra $k'[M]$ of a finitely generated quotient $M$ of $\mathbb Z^m$. Since $T_{\bar k}$ is smooth and connected, its coordinate ring is a domain by F3. If $M$ had a nonzero element of finite order $d$, the nonzero elements $e_m-1$ and $1+e_m+\cdots+e_m^{d-1}$ would have zero product. Hence $M$ is torsion-free, so $M\cong\mathbb Z^t$ and $T\cong\mathbf G_m^t$ over $k'$. [F3, step 2.1, algebra]

4.1 A point of $U(\bar k)$ is represented by a unitriangular matrix $1+J$ with $J^m=0$. Choose $e$ with $p^e\ge m$. In characteristic $p$, $(1+J)^{p^e}=1+J^{p^e}=1$, uniformly for all such points. For $n$ prime to $p$, choose an integer $a$ with $an\equiv1\pmod{p^e}$. The maps $u\mapsto u^n$ and $u\mapsto u^a$ are inverse on $U(\bar k)$; they are group homomorphisms because $U$ is commutative. This proves the required divisibility and the exact sequence. [F2, step 2.1, step 3.1, given, algebra] ∎
