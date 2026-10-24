---
id: thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses
kind: theorem
title: Cohomological Kunneth isomorphism under finite free hypotheses
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-additive-singular-cohomology-cross-product, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, def-axiom-of-choice, lem-additive-singular-cohomology-cross-product-is-well-defined, lem-singular-product-chain-equivalence-by-simplex-models, thm-free-modules-are-projective-with-choice-boundary, def-singular-cochain-complex-with-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, Theorem 3.15, printed pages 215–218; different CW hypothesis, local proof establishes the stated finite-free homology version
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $X,Y$ spaces such that every $H_q(Y;R)$ is a finite free $R$-module. For every $n\ge0$ the additive singular cohomology cross product gives an isomorphism
$$\bigoplus_{p+q=n}H^p(X;R)\otimes_RH^q(Y;R)\xrightarrow{\ \sim\ }H^n(X\times Y;R).$$
All indices are nonnegative. The symmetric assertion holds when every $H_p(X;R)$ is finite free instead. No bound on the number of nonzero homology degrees and no finite-rank hypothesis on the singular chain groups is required.

## Facts & Assumptions

[F1] [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]] supplies free cycles/boundaries and sections $s_j:B_{j-1}\to C_j$ under [[def-axiom-of-choice]]. [[thm-free-modules-are-projective-with-choice-boundary]] supplies sections of surjections onto free homology modules.

[F2] [[def-additive-singular-cohomology-cross-product]] and [[lem-additive-singular-cohomology-cross-product-is-well-defined]] specify the natural product by tensor evaluation $J$ followed by a shuffle inverse, with positive coboundary.

[F3] [[lem-singular-product-chain-equivalence-by-simplex-models]] gives that shuffle equivalence and its homotopies over $R$.

[F4] [[def-singular-cochain-complex-with-coefficients]] identifies singular cochains with $R$-linear Hom on free coefficient chains and gives the positive differential.

## Proof

**Given:** Write $C=C(X;R)$, $D=C(Y;R)$ and $V_j=H_j(D)$. For the first assertion all $V_j$ are finite free. Let $V$ denote this graded module with zero differential. Assume AC.

1.1 Choose the sections $s_j:B_{j-1}D\to D_j$ from [F1] and put $\pi_j=1-s_jd_j:D_j\to Z_jD$. Since $V_j$ is free, choose a section $\ell_j:V_j\to Z_jD$ of the homology quotient $q_j:Z_jD\to V_j$, using [F1]. AC permits these choices in every degree. Set $\eta_j=q_j\pi_j$ and $b_j=\pi_j-\ell_j\eta_j:D_j\to B_jD$, where the last corestriction is valid because $q_jb_j=0$. We have $\eta\ell=1$, $d\ell=0$ and $\eta d=0$: a boundary is fixed by $\pi$ and killed by $q$. Thus $\ell:V\to D$ and $\eta:D\to V$ are chain maps. [F1, F4, given]

1.2 Fix $q$ and choose a finite basis $e_1,\ldots,e_m$ of $V_q$ with coordinate duals $e_i^*$. For every $R$-module $U$, the map $\operatorname{Hom}(U,R)\otimes V_q^*\to\operatorname{Hom}(U\otimes V_q,R)$ sends $\varphi\otimes\lambda$ to $(u\otimes v\mapsto\varphi(u)\lambda(v))$. An explicit inverse sends $w$ to $\sum_{i=1}^m\varphi_i\otimes e_i^*$, where $\varphi_i(u)=w(u\otimes e_i)$. Substitution using $v=\sum_i e_i^*(v)e_i$ proves one composite is identity. For the other, write $\lambda=\sum_i\lambda(e_i)e_i^*$ and use tensor bilinearity. Thus this is an isomorphism for arbitrary $U$, including infinitely generated $U$. It is its formula, not the chosen basis, that specifies the map. Finite rank is used in this finite inverse sum. [F4, given]

2.1 Define $h_j=s_{j+1}b_j:D_j\to D_{j+1}$. Then $d h_j=b_j$, while $b_{j-1}d_j=d_j$ because $d_j$ lands in boundaries. Hence $h_{j-1}d_j=s_jd_j$ and $dh+hd=b+s d=1-\ell\eta$. Also $\eta\ell=1$ by step 1.1. This is an explicit chain deformation retraction of $D$ onto $V$, not merely an isomorphism of its homology groups. The same calculation works at $j=0$ with negative terms zero. [F1, step 1.1]

2.2 In degree $n$, $\operatorname{Hom}((C\otimes V)_n,R)$ is the finite direct sum of $\operatorname{Hom}(C_{n-q}\otimes V_q,R)$ for $0\le q\le n$. Since $d_V=0$, the differential preserves $q$ and is the positive $C$ coboundary. Step 1.2 identifies each fixed-$q$ complex with $m$ copies of the $C$ cochain complex shifted in degree by $q$. Kernels and images of maps on finitely many coordinates are taken coordinatewise, so its cohomology is $H^{n-q}(X;R)\otimes V_q^*$. Taking the finite degree diagonal gives an isomorphism from $\bigoplus_{p+q=n}H^p(X;R)\otimes V_q^*$ to $H^n(\operatorname{Hom}(C\otimes V,R))$, represented by the evaluation functionals. The absence of a degree-$(-1)$ coordinate at $q=n$ agrees with the zero incoming coboundaries in $C^0$. [F4, step 1.2]

3.1 Tensor with $C$: on a homogeneous tensor define $H(c\otimes y)=(-1)^{|c|}c\otimes h y$. In $dH+Hd$, the two terms involving $dc$ cancel, while the other two give $c\otimes(dh+hd)y$. Thus $1\otimes\eta$ and $1\otimes\ell$ are chain homotopy inverses between $C\otimes D$ and $C\otimes V$. Precomposition with these maps gives cochain homotopy inverses on Hom into $R$: if $u-v=dH+Hd$, the operator $K(\phi)=\phi H$ in degree minus one obeys $\delta K+K\delta=(u-v)^*$. In particular no tensor exactness or Hom exactness is needed to preserve this specified homotopy equivalence. Combining with [F3], $A=(1\otimes\eta)T:D(X\times Y)\to C\otimes V$ is a chain homotopy equivalence, so $A^*$ is a cohomology isomorphism. [F3, F4, step 1.1, step 2.1]

3.2 On $\operatorname{Hom}(D,R)$, $K\phi=\phi h$ gives $\delta K+K\delta=1-(\ell\eta)^*$ by step 2.1, while $(\eta\ell)^*=1$. These identities identify $H^q(Y;R)$ with $V_q^*=\operatorname{Hom}_R(V_q,R)$: a functional $\lambda$ corresponds to the cohomology class $[\lambda\eta_q]$, with inverse induced by $\ell$. Since $V$ has zero differential, its Hom cohomology is exactly its Hom graded module. [F4, step 1.1, step 2.1]

4.1 Combine step 2.2 with $A^*$ of step 3.1 and replace $V_q^*$ by $H^q(Y;R)$ using step 3.2. A representative $\varphi\otimes\lambda$ is carried to the class of the functional $J(\varphi,\lambda)(1\otimes\eta)T=J(\varphi,\lambda\eta)T$. By [F2] this is precisely $[\varphi]\times[\lambda\eta]$. Consequently the resulting isomorphism is the cross product in the statement, independent of every auxiliary basis and section used to prove it is bijective. [F2, step 3.1, step 3.2, step 2.2]

5.1 For the symmetric case, carry out steps 1.1 and 2.1 on $C$ instead, obtaining a deformation retraction onto $U_p=H_p(C)$. Tensoring its homotopy with $1_D$ has $d(h\otimes1)+(h\otimes1)d=(1-\ell\eta)\otimes1$, with mixed terms cancelling. Thus reduce to $\operatorname{Hom}(U\otimes D,R)$. On the fixed-$p$ summand its differential is $(-1)^p$ times the $D$ coboundary. Multiplication by this unit changes neither kernels nor images. A finite basis of $U_p$ gives the analogue of step 1.2 with the finite free factor first, hence cohomology $U_p^*\otimes H^q(Y;R)$. Its evaluation functional is $J(\lambda\eta,\psi)T$, exactly the same ordered cross product by [F2]. This proves the symmetric assertion without assuming a symmetry theorem for that product. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 1.2, step 2.2, step 4.1]

6.1 Empty $X$ or $Y$ gives zero complexes. A zero-rank $V_q$ contributes an empty basis and a zero summand in steps 1.2 and 2.2; rank one gives the evident identification with a single copy of $C^*$. At $n=0$, the only diagonal is $(0,0)$ and all constructions retain the usual product of values at vertices. Although there may be infinitely many nonzero $V_q$, each total degree uses only finitely many, so no exchange of an infinite product with tensor is asserted. AC is used for the arbitrary-rank PID cycle/boundary sections and for simultaneous homology sections and finite bases across degrees; all dual and tensor calculations are explicit after those choices. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 3.2, step 1.2, step 2.2, step 4.1, step 5.1] ∎
