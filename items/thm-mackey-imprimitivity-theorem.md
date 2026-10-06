---
id: thm-mackey-imprimitivity-theorem
kind: theorem
title: Mackey's imprimitivity theorem
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: direct
deps:
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
  - lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra
  - lem-spectral-measure-multiplicity-model-for-a-transitive-system
  - lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary
  - lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining
  - lem-borel-cross-sections-for-closed-subgroups
  - thm-unitary-induction-from-a-closed-subgroup
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
  - lem-borel-cocycle-fields-for-imprimitivity-systems
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-covariant-function-model-of-unitary-induction
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-hilbert-space
  - def-separable-space
  - "lem-haar-lifts-and-borel-descent-on-a-homogeneous-space"
  - "lem-haar-regularization-of-transitive-unitary-cocycles"
  - "thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality"
  - "lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC. Let $G$ be a second-countable locally compact Hausdorff topological
group, $H\le G$ a closed subgroup, and $(U,P)$ a transitive system of
imprimitivity on $G/H$ acting on a separable Hilbert space $H_0$. Then there
exist a strongly continuous unitary representation $\sigma:H\to U(K)$ on a
separable Hilbert space $K$ and a unitary
$$W:H_0\longrightarrow L^2(G/H,\mu;K)$$
onto the induced space of $\sigma$ such that
$$WU_gW^{-1}=\operatorname{Ind}_H^G\sigma(g)\quad(g\in G),\qquad WP(E)W^{-1}=M_{\mathbf 1_E}\quad(E\subseteq G/H\ \text{Borel}),$$
where $M_{\mathbf 1_E}$ is multiplication by the indicator of $E$ on the
covariant model. Conversely, for every strongly continuous unitary
$\sigma:H\to U(K)$ on a separable Hilbert space $K$, the induced representation together with multiplication by
indicators on $G/H$ is a transitive system of imprimitivity, and the two
constructions are inverse up to unitary equivalence. The uniqueness theorem
records the corresponding bijection of equivalence classes.

## Facts & Assumptions

**Given:** AC, the transitive system $(U,P)$ on $G/H$ with separable $H_0$, and the induced-system construction of [[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]].

[F1] The multiplicity model of a transitive system provides a finite quasi-invariant measure $\mu$ in the normalized class, a separable nonzero $K$, a Borel multiplicity $m$ constant a.e., and a unitary $W:H_0\to L^2(G/H,\mu;K)$ with $WP(E)W^{-1}=M_{\mathbf 1_E}$ ([[lem-spectral-measure-multiplicity-model-for-a-transitive-system]], [[def-transitive-system-of-imprimitivity]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F2] For $T_g=WU_gW^{-1}$ and the canonical scalar translation $V_g$, the operators $W_g=V_g^{-1}T_g$ are multiplication by jointly Borel, a.e. unitary fields $\varphi_g$, with $\varphi_{g_1g_2}(x)=\varphi_{g_1}(g_2x)\varphi_{g_2}(x)$ for each pair and almost every $x$ ([[lem-borel-cocycle-fields-for-imprimitivity-systems]]).

[F3] If the fields of [F2] are continuous in local measure in the strong topology, Haar regularization gives a Borel unitary field $B$ and a strongly continuous unitary $\sigma:H\to U(K)$ with $\varphi_g(x)=B(gx)\sigma(s(gx)^{-1}gs(x))B(x)^{-1}$ for every $g$ and almost every $x$. The formula defines a strict Borel cocycle, and $\sigma$ is unique up to unitary equivalence ([[lem-haar-regularization-of-transitive-unitary-cocycles]], [[lem-borel-cross-sections-for-closed-subgroups]]).

[F4] The reconstruction map $\Phi=M_B^{-1}W$ is a unitary onto the canonical induced space of $\sigma$ intertwining $U$ with $\operatorname{Ind}_H^G\sigma$ and $P$ with multiplication by indicators ([[lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining]], [[def-covariant-function-model-of-unitary-induction]], [[thm-unitary-induction-from-a-closed-subgroup]]).

[F5] Conversely, the induced representation $\operatorname{Ind}_H^G\sigma$ together with $P(E)=M_{\mathbf 1_E}$ is a transitive system of imprimitivity on $G/H$ with the same normalization, and for $H=G$ (one-point base) and $H=\{e\}$ (multiplication system) the boundary clauses hold ([[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]]).

[F6] Integrating a system of imprimitivity gives a nondegenerate representation of the transformation algebra, so the choice of PVM is not an extra datum once the system is fixed; the zero Hilbert space carries the zero system ([[lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra]], [[def-system-of-imprimitivity]]).

[F7] Unitary equivalence of systems and of representations is the relation of [[def-unitary-equivalence-of-systems-of-imprimitivity]], and AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[def-separable-space]]).

[F8] The finite quasi-invariant $\mu$ is equivalent to a rho-derived Radon measure $\nu$; a positive finite Borel version of $a=d\mu/d\nu$ exists, and scalar unitary induction is strongly continuous. Borel homomorphisms $H\to U(K)$ are strongly continuous when $K$ is separable ([[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[thm-unitary-induction-from-a-closed-subgroup]], [[lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the transitive system $(U,P)$ on $G/H$ and a strongly continuous unitary $\sigma:H\to U(K)$ on separable $K$ in the converse direction.


1.1 Zero case: if $H_0=\{0\}$, take $K=\{0\}$, the zero representation of $H$ and the zero unitary; the induced space is $\{0\}$, the canonical system has $P(G/H)=I=0$, and the displayed identities hold; the same data give the zero system from the zero representation. Hence assume $H_0\ne\{0\}$. [F5, F6]

1.2 Apply [F1] to obtain $W,\mu,K$ and put $T_g=WU_gW^{-1}$; [F2] gives the Borel source-variable cocycle fields. Choose $\nu$ and $a=d\mu/d\nu$ from [F8] and set $Jf=\sqrt a\,f$. Then $J:L^2(\mu;K)\to L^2(\nu;K)$ is unitary. Pushing the equality $d\mu=a\,d\nu$ through the base translation gives $D_g^\mu(x)=a(g^{-1}x)a(x)^{-1}D_g^\nu(x)$ almost everywhere, so $JV_g^\mu J^{-1}=V_g^\nu$. The scalar $V_g^\nu$ is induction of the trivial representation of $H$ and is strongly continuous by [F8]; this extends to $K$-valued sections first on finite sums $f(x)\xi$ and then by their density and unitarity. Hence $V_g^\mu$ is strongly continuous. Since $T_g$ is strongly continuous, so is $W_g=(V_g^\mu)^{-1}T_g$, by the triangle inequality and unitary norm bounds. [F1, F2, F8, given]

1.3 Reverse direction: given $\sigma:H\to U(K)$ on separable $K$, [F5] endows the induced representation on its covariant completion with the multiplication PVM $P(E)=M_{\mathbf 1_E}$, which is a projection-valued measure with $P(G/H)=I$ and the covariance identity, hence a transitive system of imprimitivity on $G/H$; this is the converse construction. [F5]

2.1 Fix $g_0\in G$, a Borel $E\subseteq G/H$ with $\mu(E)<\infty$, and $\xi\in K$. Since $\mathbf1_E\xi\in L^2(\mu;K)$ and $W_g=M_{\varphi_g}$, step 1.2 gives $\int_E\|(\varphi_g(x)-\varphi_{g_0}(x))\xi\|^2\,d\mu(x)=\|(W_g-W_{g_0})(\mathbf1_E\xi)\|_2^2\to0$. Therefore $\mu\{x\in E:\|(\varphi_g(x)-\varphi_{g_0}(x))\xi\|>\varepsilon\}\le\varepsilon^{-2}\|(W_g-W_{g_0})(\mathbf1_E\xi)\|_2^2\to0$. On the unitary group, the strong topology is determined by a countable dense set of vectors in separable $K$: finite-vector tests pass to every vector using $\|(u-v)(\xi-\eta)\|\le2\|\xi-\eta\|$. Finite unions of the displayed exceptional sets thus prove local convergence in measure in the strong topology. This is the continuity hypothesis required in [F3]. [F2, F7, step 1.2, algebra]

3.1 Now [F3] applies with its continuity hypothesis verified by step 2.1 and supplies $B,\sigma$. In the Haar proof the lifted coboundary $b$ has $b(th)=b(t)\sigma(h)$ for each $h$ and almost every $t$. Thus $\sigma(hk)=\sigma(h)\sigma(k)$; integrating the Borel matrix coefficients of $b(t)^{-1}b(th)$ against a fixed Haar probability density makes every coefficient of $\sigma$ Borel. Since $K$ is separable, [F8] applies to this Borel homomorphism and gives strong continuity. Invariant Borel descent of $b(s(x)h)\sigma(h)^{-1}$ gives $B(x)$, and the resulting section-cocycle formula is strict on all pairs after replacing the fields by their equal a.e. representatives. [F3, F8, step 2.1]

4.1 Multiplication by the Borel unitaries $B(x)$ is unitary and commutes with indicator multiplications. Put $\Phi=M_B^{-1}W$. Substituting the factorization from step 3.1 at the source point $g^{-1}x$ gives $(\Phi U_g\Phi^{-1}f)(x)=D_g^\mu(x)^{1/2}\sigma(s(x)^{-1}gs(g^{-1}x))f(g^{-1}x)$ and $\Phi P(E)\Phi^{-1}=M_{\mathbf1_E}$. This is the section-coordinate form of the canonical induced action, as in [F4], so $\Phi$ is the required unitary and may be denoted $W$ in the statement. [F1, F2, F4, step 3.1]

5.1 Start with the canonical system of $\sigma$. Its source-variable cocycle is $\varphi_g(x)=\sigma(s(gx)^{-1}gs(x))$, so $(B,\sigma)=(I,\sigma)$ is already a factorization. Any recovered representation $\sigma'$ is unitarily equivalent to $\sigma$ by the uniqueness clause of [F3]. Conversely step 4.1 reconstructs a system unitarily equivalent to the starting $(U,P)$. Thus the constructions are inverse up to unitary equivalence. [F3, F5, step 4.1]

6.1 Steps 1.2, 2.1, 3.1 and 4.1 prove the forward direction, including the local-measure continuity and strongly continuous stabilizer action; steps 1.3 and 5.1 give the converse and inverse character up to unitary equivalence. The zero case is covered by step 1.1. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 1.3, step 5.1, F7] ∎
