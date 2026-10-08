---
id: ex-the-left-regular-factor-of-an-icc-discrete-group
kind: example
title: "The left regular factor of an ICC discrete group is a non-type-I factor"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-von-neumann-algebra-and-commutant
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - def-factor-representation-and-primary-representation
  - lem-separable-type-i-factors-are-multiples-of-irreducible-representations
  - lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two
  - def-axiom-of-choice
dependency_level: 3
axiom_use: "Assume AC, including the stated choice assumptions of the suppliers. It permits representatives, transversals and orthonormal bases; AC implies Countable Choice for Hilbert and Fourier/L2 suppliers. Countability arguments are proved locally rather than assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Proposition 7.A.1, printed pp.213–214; Proposition 7.A.3, printed p.215; Proposition 6.B.14, printed pp.186\u2013187."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice. Let $\Gamma$ be a countably infinite group in which every nonidentity conjugacy class is infinite (ICC), for instance the free group on two generators or the group of finitely supported permutations of $\mathbb N$. Let $\lambda_\Gamma$ be the left regular representation on $\ell^2(\Gamma)$ and $L(\Gamma):=W^*(\lambda_\Gamma(\Gamma))\subseteq\mathcal B(\ell^2(\Gamma))$. Then: (1) $\tau(T):=\langle T\delta_e,\delta_e\rangle$ is a faithful normal tracial state on $L(\Gamma)$ with $\tau(I)=1$, and $L(\Gamma)$ is infinite dimensional; (2) $L(\Gamma)$ is a factor, i.e. $Z(L(\Gamma))=\mathbb CI$; (3) $L(\Gamma)$ is not a type I factor, hence $\lambda_\Gamma$ is a factor representation that is not a multiple of an irreducible representation. Thus the canonical central decomposition of $\lambda_\Gamma$ has a single non-irreducible factor fibre, exhibiting that factor representations need not be irreducible and that the type I hypothesis in the irreducible disintegration theorem is essential.

## Facts & Assumptions

[F1] The left and right regular representations are strongly continuous and unitary; in the discrete case $\lambda(g)\delta_h=\delta_{gh}$, $\rho(g)\delta_h=\delta_{hg^{-1}}$, and the two actions commute ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]).

[F2] The group von Neumann algebra is the WOT closure of the unital star algebra spanned by $\lambda(g)$; commutants are WOT-closed, and multiplication by a fixed bounded operator is WOT-continuous. The bicommutant theorem identifies this algebra with $\lambda(\Gamma)''$ ([[def-von-neumann-algebra-and-commutant]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F3] A faithful normal tracial state is positive, unital and tracial, faithful on $T^*T$, and normal; vector functionals are WOT-continuous ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]]).

[F4] A factor representation has scalar centre. A separable type I factor has spatial form $\mathcal B(E)\otimes I_L$ for nonzero separable $E,L$, and is equivalent to a multiple of an irreducible representation, with the converse also valid ([[def-factor-representation-and-primary-representation]], [[lem-separable-type-i-factors-are-multiples-of-irreducible-representations]]).

[F5] In $F_2=\langle a\rangle*\langle b\rangle$, the infinite cyclic factors $A=\langle a\rangle$ and $B=\langle b\rangle$ are self-commensurating and have trivial intersections with conjugates of the other factor ([[lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two]]).

[F6] AC permits orthonormal bases and the spatial type I splitting used here ([[def-axiom-of-choice]]).

## Verification

**Given:** AC and a countably infinite discrete ICC group $\Gamma$.

1.1 The vector functional $\tau$ is positive and unital, since $\tau(T^*T)=\|T\delta_e\|^2$ and $\|\delta_e\|=1$, and is WOT-continuous, hence normal. On generators, $\tau(\lambda(g)\lambda(h))=\mathbf1_{gh=e}=\mathbf1_{hg=e}=\tau(\lambda(h)\lambda(g))$. Bilinearity proves the trace identity on their linear span. For fixed $A$ in that span, approximate $B\in M$ in WOT and use separate multiplication continuity to obtain $\tau(AB)=\tau(BA)$; then fix this $B$ and approximate arbitrary $A\in M$, proving traciality on $M$. Every $T\in M$ commutes with $\rho(\Gamma)$ by [F1,F2]. If $\tau(T^*T)=0$, then $T\delta_e=0$ and $T\delta_g=T\rho(g^{-1})\delta_e=\rho(g^{-1})T\delta_e=0$ for all $g$, so $T=0$ on a dense basis. Thus $\tau$ is faithful. The operators $\lambda(g)$ are linearly independent: applying a finite linear relation to $\delta_e$ gives the corresponding relation among the distinct basis vectors $\delta_g$. Hence $M$ is infinite dimensional. [F1, F2, F3]

2.1 Let $T\in Z(M)$ and write $T\delta_e=\sum_gc_g\delta_g$. For $s\in\Gamma$ the unitary $C_s=\lambda(s)\rho(s)$ fixes $\delta_e$ and sends $\delta_g$ to $\delta_{sgs^{-1}}$. Centrality and [F1,F2] imply that $T$ commutes with both factors of $C_s$, so $C_sT\delta_e=T\delta_e$. Thus $c_g$ is constant on each conjugacy class. An $\ell^2$ sequence cannot have a nonzero constant value on an infinite set, so ICC gives $T\delta_e=c_e\delta_e$. Commutation with $\rho$ then gives $T\delta_g=c_e\delta_g$ for every $g$. Therefore $T=c_eI$, proving the factor assertion. [F1, F2, F4, step 1.1]

3.1 If $M$ were type I, [F4] would give the spatial algebra $\mathcal B(E)\otimes I_L$. Finite-dimensional $E$ would make $M$ finite dimensional. If $E$ is infinite dimensional and separable, choose a countable orthonormal basis and the isometries $V_1,V_2$ onto its even and odd basis subspaces. Their range projections $p,q$ are orthogonal. Transferring $V_i\otimes I_L$ to $M$, traciality gives $\tau(p)=\tau(V_1^*V_1)=1$ and $\tau(q)=1$, while positivity and $p+q\le I$ give $2=\tau(p+q)\le1$, a contradiction. Thus $M$ is not type I and [F4] excludes an irreducible multiple. In particular $\lambda$ is not irreducible. Its one-point integral is a central factor decomposition, since diagonal operators on that point are $\mathbb CI=Z(M)$; any central diagonal model must have a one-atom measure algebra on its effective support, because its diagonal algebra is scalar. The fibre therefore remains this non-irreducible factor, rather than an irreducible. [F3, F4, F6, step 1.1, step 2.1, choose]

4.1 For completeness, $F_2$ is countable by its finite reduced words and infinite by the powers of $a$. If $w\notin A$, all conjugates $a^nwa^{-n}$ are distinct: equality at two different integers would make $w$ commute with a nonzero power $a^k$. Then $A\cap w^{-1}Aw$ contains $\langle a^k\rangle$, of finite index in both infinite cyclic groups, contradicting $\operatorname{Comm}_{F_2}(A)=A$ from [F5]. If $w\in A\setminus\{e\}$, then $w\notin B$ by [F5], and the same argument with $b$ gives infinitely many conjugates. Thus $F_2$ is ICC. The finite-support permutation group is a countable union of finite permutation groups and is infinite. For a nonidentity permutation with finite moved support $S$, move $S$ to infinitely many pairwise disjoint blocks of the same size by finite permutations. Its conjugates then have distinct moved supports and are distinct, proving ICC. Both examples therefore satisfy all conclusions above. [F5, step 1.1, step 2.1, step 3.1, construct] ∎
