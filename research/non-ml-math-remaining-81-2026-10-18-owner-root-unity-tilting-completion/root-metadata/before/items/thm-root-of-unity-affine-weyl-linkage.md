---
id: thm-root-of-unity-affine-weyl-linkage
kind: theorem
title: Affine Weyl linkage from central monodromy traces
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-weyl-and-dual-weyl-module-families, lem-root-of-unity-integral-weyl-specialization, lem-root-of-unity-weyl-flags-summands-and-orthogonality, thm-root-of-unity-lusztig-module-category-is-braided-rigid, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 2, Lemma 3, Proposition 2, Lemma 4, Theorem 1 and Corollary 2; Section 3, Corollary 6. The proof here uses natural monodromy endomorphisms and full weight coset projectors instead of claiming the unmodified algebra has the enlarged center.
---

## Statement

Use the full simply-laced weight lattice $P$, root lattice $Q$, parameter $\operatorname{ord}(\zeta^2)=\ell$ odd greater than $h$, and full type-1 category of [[def-root-of-unity-weyl-and-dual-weyl-module-families]]. If $L_\zeta(\mu)$ is a composition factor of $\Delta_\zeta(\lambda)$, then $\mu\le\lambda$ and $\mu\in(W\ltimes\ell Q)\mathbin{\cdot}\lambda$. More generally every Weyl section and every composition factor of an indecomposable tilting module of highest label $\lambda$ has label in this same affine orbit. These claims hold for both possible orders $\ell$ and $2\ell$ of $\zeta$, with no coprimality condition on the index $[P:Q]$. They use the inherited Axiom of Choice.

## Facts & Assumptions

**Given:** These root data and the actual finite dimensional module category.

[F1] Weyl modules have classical Weyl characters, one-dimensional highest spaces, cyclic highest vectors, unique simple heads and weights at most their highest labels ([[lem-root-of-unity-integral-weyl-specialization]]).

[F2] Every indecomposable tilting has a unique highest label and a one-dimensional highest space ([[lem-root-of-unity-weyl-flags-summands-and-orthogonality]]).

[F3] The actual category admits the integral triangular braiding $R=D^{-1}\overline\Theta$, where $D$ on labels $a,b$ is $\chi(a,b)=t^{d(a,b)}$, $t^d=\zeta$, and $d(P,P)\subset\mathbb Z$. Its positive-degree corrections raise the first label and lower the second. Pivotal partial traces are module maps, and the pivot on label $b$ is $\zeta^{-(2\rho,b)}$ ([[thm-root-of-unity-lusztig-module-category-is-braided-rigid]]).

## Proof

**Given:** These data. Put $l=\operatorname{ord}(\zeta)$, so $l=\ell$ or $2\ell$, and choose the minimal positive integer $d$ with $d(P,P)\subset\mathbb Z$.

1.1 Write $\zeta=\exp(2\pi i a/l)$ with $\gcd(a,l)=1$. There is $b\equiv a\pmod l$ with $\gcd(b,ld)=1$: for every prime dividing $d$ but not $l$ avoid the unique forbidden residue of the multiplier in $b=a+kl$, and apply the finite Chinese remainder theorem; primes dividing $l$ already do not divide $b$. Thus $t=\exp(2\pi i b/(ld))$ is a primitive $ld$-th root with $t^d=\zeta$. Use [F3] with this auxiliary root. Replacing a previously selected $d$-th root by this one does not change the underlying module category or pivot; the ratio of the two Cartan phases is trivial whenever one label belongs to $Q$, hence is a bicharacter of $P/Q$. We use this auxiliary braiding only to construct natural module endomorphisms, with no nondegeneracy claim for either braiding. [F3, construct, algebra]

2.1 For every Weyl module $V=\Delta_\zeta(\nu)$ define $z_V(M)$ as the pivotal partial trace over $V$ of the monodromy $R_{21}R$ on $M\otimes V$. This is an $H$-linear natural endomorphism of $M$ by [F3]. On a highest vector $v_\lambda$ of $\Delta_\zeta(\lambda)$ the first $R$ has only its Cartan term, since every positive first-factor correction kills $v_\lambda$. In the second $R_{21}$ each nonzero root-degree term raises the $V$ label; its pivotal trace is zero because the pivot preserves labels. The scalar on the highest line is therefore $c_\nu(\lambda)=\sum_{\eta\in P}\dim(V_\eta)\,\chi(-2(\lambda+\rho),\eta).$ Here the two Cartan terms contribute $\chi(\lambda,\eta)^{-2}$ and the pivot contributes $\zeta^{-(2\rho,\eta)}=\chi(-2\rho,\eta)$, since $2\rho\in Q$. Because the Weyl module is cyclic and $z_V$ is a module map, it is this scalar on the whole module. Its value on the simple head is the same. [F1, F3, step 1.1, algebra]

2.2 Put $K=\{x\in P:\chi(2x,\eta)=1\text{ for all }\eta\in P\}$. Since $t$ is primitive of order $ld$, the condition is $2d(x,\eta)\in ld\mathbb Z$ for all $\eta$, or $x\in(l/2)P^*$, where $P^*=Q$ for this simply-laced full weight lattice. Thus $K=P\cap(l/2)Q$. It has finite index in $P$ because it contains $lQ$. The pairing $\chi(2x,y)$ is a well-defined nondegenerate bicharacter on the finite abelian group $G=P/K$: its radical is exactly how $K$ was defined. The characters of $G$ obtained from the second argument therefore give all characters of $G$, because the induced injection from $G$ into its character group is between finite groups of equal order. Their independence follows directly by summing each character over $G$: a nontrivial character sum is zero by translation by a point where it is nontrivial, and the trivial character sum is $|G|$. [step 1.1, algebra]

3.1 Classical Weyl characters span the $W$-invariant group algebra $\mathbb C[P]^W$. Indeed $\chi_\nu$ has leading orbit sum at dominant weight $\nu$ with coefficient one and only strictly smaller dominant orbit labels below it; induction on the finite downward set eliminates these smaller terms and writes every orbit sum as a finite linear combination of Weyl characters. Evaluation on $G$ maps these orbit sums to the averages under $W$ of the character basis from step 2.2. Those averages span all $W$-invariant functions on $G$, since averaging commutes with Fourier expansion. In particular they distinguish different $W$-orbits of $G$ by the characteristic functions of those orbits. Thus equality $c_\nu(\lambda)=c_\nu(\mu)$ for every dominant $\nu$ forces $\mu+\rho=w(\lambda+\rho)+k$ for some $w\in W$ and $k\in K$. This finite Fourier argument requires neither an invertible modular $S$-matrix nor simplicity of root Weyl modules. [F1, step 2.1, step 2.2, algebra]

4.1 Every module decomposes into its weight cosets in $P/Q$, since all root divided powers shift labels by elements of $Q$. The projections onto these cosets are natural module endomorphisms. If a simple $L_\zeta(\mu)$ is a composition factor of $\Delta_\zeta(\lambda)$, these projections force $\mu-\lambda\in Q$, and every $z_V$ acts on that factor by the scalar on the original Weyl module. Steps 2.1 and 3.1 therefore give $k\in K\cap Q$. For $l=2\ell$ this intersection is $\ell Q$. For $l=\ell$ odd, writing $k=(\ell/2)\sum n_i\alpha_i\in Q$ forces every $n_i$ even by the simple-root basis and oddness of $\ell$, so again $K\cap Q=\ell Q$. Consequently $\mu$ and $\lambda$ lie in the same $W\ltimes\ell Q$ dot orbit. Their dominance inequality follows from the support of the Weyl module in [F1]. [F1, step 2.1, step 3.1, algebra]

5.1 All the endomorphisms $z_V(M)$ commute: naturality of $z_V$ with respect to the module endomorphism $z_{V'}(M)$ gives commutation. On a fixed finite dimensional $M$, their span in $\operatorname{End}(M)$ is finite dimensional, so finitely many suffice to determine all their joint generalized eigenspaces. These spaces are module submodules and give a direct-sum decomposition, by successively applying the generalized eigenspace decomposition for commuting operators. If $M$ is indecomposable tilting, it has only one such block and only one $P/Q$ coset. Every Weyl section therefore has the same scalar tuple as the section of its highest label $\lambda$, and step 4.1 places every section label in the same affine orbit. Applying step 4.1 again to the composition factors of these Weyl sections proves the last assertion. This establishes the claimed linkage for the actual module category, rather than treating a statement about an enlarged abstract center as a proof for the unmodified root algebra. [F1, F2, step 2.1, step 4.1, algebra] ∎
