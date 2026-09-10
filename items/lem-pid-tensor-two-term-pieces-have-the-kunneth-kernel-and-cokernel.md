---
id: lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel
kind: lemma
title: "The cycle-boundary tensor sequence has the Kunneth kernel and cokernel"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, def-balanced-tor-bifunctor, def-tensor-product-total-complex-of-chain-complexes, lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero, lem-the-kunneth-tor-map, thm-long-exact-sequence-in-homology, thm-right-exactness-of-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-free-modules-are-projective-with-choice-boundary, thm-recursion, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "tom Dieck, Algebraic Topology, Theorem 11.10.1, kernel/cokernel proof, printed pp.298–299"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
    - title: "Friedman, Singular Intersection Homology, §6.4.5, (6.11)–(6.13), printed pp.315–317"
      url: https://faculty.tcu.edu/gfriedman/ihbook.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $C,D$ nonnegative complexes of free $R$-modules of arbitrary rank. Tensor complexes use direct-sum totalization and
$$d(c\otimes y)=d_Cc\otimes y+(-1)^p c\otimes d_Dy\quad(c\in C_p).$$
Put $Z(C)_p=Z_pC$ and $A(C)_p=B_{p-1}C$ with zero differentials, where $B_{-1}C=0$. Set $X=Z(C)\otimes_RD$, $T=C\otimes_RD$, $Y=A(C)\otimes_RD$. The canonical sequence $0\to X\to T\xrightarrow{\rho\otimes1}Y\to0$ is exact.

Under the canonical identifications
$$H_nX\cong\bigoplus_{p+q=n}Z_pC\otimes_RH_qD,\qquad H_nY\cong\bigoplus_{p+q=n}B_{p-1}C\otimes_RH_qD,$$
the connecting map $\partial_n:H_nY\to H_{n-1}X$ is the sum of inclusion-induced maps $B_{p-1}C\otimes H_qD\to Z_{p-1}C\otimes H_qD$, with positive sign. Consequently
$$\ker\partial_n\cong\bigoplus_{r+q=n-1}\operatorname{Tor}_1^R(H_rC,H_qD),\qquad \operatorname{coker}\partial_{n+1}\cong\bigoplus_{p+q=n}H_pC\otimes_RH_qD.$$
The corestricted map $H_n(\rho\otimes1)$ followed by this kernel identification is the established Tor quotient. The induced map from the displayed cokernel sends $[z]\otimes[w]$ to $[z\otimes w]$. All indices in sums are nonnegative; empty sums are zero.

## Facts & Assumptions

**Given:** The ring, complexes, AC, and tensor convention in the statement.

[F1] The canonical cycle sequence is degreewise split, and cycles and boundaries give free presentations of homology: [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]].

[F2] Tensor totalization uses the displayed Koszul differential, which is well defined and squares to zero: [[def-tensor-product-total-complex-of-chain-complexes]], [[lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]].

[F3] Tensor products commute with arbitrary direct sums over a commutative ring: [[thm-tensor-products-commute-with-arbitrary-direct-sums]].

[F4] Short exact sequences of complexes give exact homology sequences: [[thm-long-exact-sequence-in-homology]].

[F5] With DC and supplied projective resolutions, balanced Tor is computed by resolving either variable: [[def-balanced-tor-bifunctor]].

[F6] Tensoring over a commutative ring is right exact: [[thm-right-exactness-of-tensor-products]].

[F7] The earlier Tor quotient uses the canonical cycle-boundary presentations: [[lem-the-kunneth-tor-map]].

[F8] AC supplies simultaneous choices: [[def-axiom-of-choice]].

[F9] A self-map of a set can be iterated from any given initial element: [[thm-recursion]].

[F10] DC requests such a sequence along any entire relation from a prescribed point: [[def-dependent-choice]].

[F11] Under AC, free modules are projective: [[thm-free-modules-are-projective-with-choice-boundary]].

## Proof

1.1 AC implies the particular DC principle needed in [F5]. For an entire relation $E$ on a nonempty set $S$, each successor set $E_x=\{y:xEy\}$ is nonempty. Choose $f(x)\in E_x$ simultaneously. Recursion from any prescribed $a\in S$ gives $x_0=a$, $x_{m+1}=f(x_m)$, hence $x_mEx_{m+1}$ for every $m$. This is [F10]. For each $H_rC$ and $H_qD$, [F1] supplies a length-one free resolution, and [F11] makes it projective. Thus [F5] applies to these actual supplied resolutions. [F8, F9, F10, F1, F11, F5]

1.2 Choose the degreewise sections from [F1]. In bidegree $(p,q)$, tensoring $C_p\cong Z_pC\oplus B_{p-1}C$ with $D_q$ identifies the two maps with inclusion and projection of a direct sum. Their kernel and image therefore agree and projection is onto. Summing over the finite diagonal proves exactness of $0\to X\to T\to Y\to0$. Inclusion and $\rho\otimes1$ are chain maps: $d_C$ kills cycles and $\rho d_C=0$, while the terms $(-1)^p d_D$ agree on both sides. [F1, F2, F3]

1.3 For a free module $U=\bigoplus_{i\in I}Re_i$ placed in degree $p$, [F3] identifies $U\otimes D_q$ with $\bigoplus_iD_q$ by $e_i\otimes y\mapsto y$ in coordinate $i$ (the maps $R\otimes D_q\to D_q$, $r\otimes y\mapsto ry$, and $y\mapsto1\otimes y$ are inverse). Its differential is coordinatewise $(-1)^p d_D$. A finite tuple is a cycle exactly when every coordinate is a cycle. Its image consists exactly of finite tuples of boundaries: for the reverse containment choose a preimage for each of the finitely many nonzero coordinates and multiply it by $(-1)^p$. Quotienting therefore gives $U\otimes H_qD\cong H_{p+q}(U\otimes D)$ by $u\otimes[y]\mapsto[u\otimes y]$. Although a basis proves bijectivity, this formula is independent of that basis. [F2, F3, F8]

2.1 Apply this calculation to the free modules $U=Z_pC$ and $U=B_{p-1}C$ and sum in $p$. There is no differential between distinct $p$ summands, so cycles, boundaries, and homology decompose over this finite diagonal. This gives both displayed homology identifications. The summand with $p=0$ in $H_nY$ is zero because $B_{-1}C=0$. [F1, step 1.3]

2.2 Fix $r,q\geq0$. The resolution $P_1=B_rC\hookrightarrow P_0=Z_rC\twoheadrightarrow H_rC$, with $P_i=0$ for $i\geq2$, is projective by step 1.1. Tensoring it with $H_qD$ computes first homology as the kernel of $j_r\otimes1:B_rC\otimes H_qD\to Z_rC\otimes H_qD$, because the degree-two boundary is zero. By [F5] this kernel is $\operatorname{Tor}_1^R(H_rC,H_qD)$. Right exactness gives the cokernel as $H_rC\otimes H_qD$, using the augmentation $z\mapsto[z]$. No injectivity of $j_r\otimes1$ is assumed. [step 1.1, F5, F6]

3.1 A class in a $(p,q)$ summand of $H_nY$ is a finite sum of $b\otimes[y]$ with $d_Dy=0$. Lift its representing cycle to the corresponding sum $s_p(b)\otimes y$ in $T_n$. Its differential is $b\otimes y+(-1)^ps_p(b)\otimes d_Dy=b\otimes y$, now in $X_{n-1}$. The lift-and-boundary construction of the connecting map in [F4] therefore gives $\partial_n(b\otimes[y])=b\otimes[y]$ with $b$ included into $Z_{p-1}C$. The formula holds for sums, not just decomposable classes. [F1, F2, F4, step 1.2, step 2.1]

4.1 In step 3.1 put $r=p-1$ and discard the zero $p=0$ summand. A sum maps to zero exactly when each of its components does; its cokernel is the sum of the component cokernels, since each relation lies in its own summand. Step 2.2 thus gives the asserted kernel in degree $n-1$ and cokernel in degree $n$. At $n=0$ the kernel is zero; at $n=1$ it is precisely $\operatorname{Tor}_1(H_0C,H_0D)$. If $H_qD=0$, both tensor modules are zero. If $H_rC=0$, its presentation has $B_rC=Z_rC$ and inclusion the identity, so tensoring gives an isomorphism with zero kernel and cokernel. [step 2.1, step 3.1, step 2.2]

5.1 The homology LES makes the image of $H_n(\rho\otimes1)$ exactly $\ker\partial_n$. Corestrict it and use the identification of step 2.2. This is the same canonical sequence, map $\rho$, positive connecting map, and free presentation used to construct the quotient in [F7], so it is that quotient, rather than merely some surjection onto an isomorphic module. On the other side, the cokernel class of $z\otimes[w]\in Z_pC\otimes H_qD$ is $[z]\otimes[w]$; its image under $H_n(X\to T)$ is $[z\otimes w]$ by step 1.3. This identifies the asserted injection formula at the level of the actual maps. [F4, F7, step 1.2, step 1.3, step 2.2, step 4.1] ∎
