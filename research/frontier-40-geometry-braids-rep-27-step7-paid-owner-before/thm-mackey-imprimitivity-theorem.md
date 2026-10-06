---
id: thm-mackey-imprimitivity-theorem
kind: theorem
title: Mackey's imprimitivity theorem
status: draft
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

[F2] The cocycle fields $W_g=V_g^{-1}WU_gW^{-1}$ are multiplication by jointly Borel, a.e. unitary fields with the a.e. cocycle law and the local-measure continuity used by Haar regularization ([[lem-borel-cocycle-fields-for-imprimitivity-systems]]).

[F3] Haar regularization of those fields produces Borel unitaries $B_x$ and a strongly continuous unitary representation $\sigma:H\to U(K)$ with the strict factorization $\varphi_g(x)=B_{gx}\sigma(h(g,x))B_x^{-1}$, and $\sigma$ is unique up to gauge ([[lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary]], [[lem-borel-cross-sections-for-closed-subgroups]]).

[F4] The reconstruction map $\Phi=M_B^{-1}W$ is a unitary onto the canonical induced space of $\sigma$ intertwining $U$ with $\operatorname{Ind}_H^G\sigma$ and $P$ with multiplication by indicators ([[lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining]], [[def-covariant-function-model-of-unitary-induction]], [[thm-unitary-induction-from-a-closed-subgroup]]).

[F5] Conversely, the induced representation $\operatorname{Ind}_H^G\sigma$ together with $P(E)=M_{\mathbf 1_E}$ is a transitive system of imprimitivity on $G/H$ with the same normalization, and for $H=G$ (one-point base) and $H=\{e\}$ (multiplication system) the boundary clauses hold ([[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]]).

[F6] Integrating a system of imprimitivity gives a nondegenerate representation of the transformation algebra, so the choice of PVM is not an extra datum once the system is fixed; the zero Hilbert space carries the zero system ([[lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra]], [[def-system-of-imprimitivity]]).

[F7] Unitary equivalence of systems and of representations is the relation of [[def-unitary-equivalence-of-systems-of-imprimitivity]], and AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[def-separable-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the transitive system $(U,P)$ on $G/H$ and a strongly continuous unitary $\sigma:H\to U(K)$ on separable $K$ in the converse direction.

1.1 Zero case: if $H_0=\{0\}$, take $K=\{0\}$, the zero representation of $H$ and the zero unitary; the induced space is $\{0\}$, the canonical system has $P(G/H)=I=0$, and the displayed identities hold; the same data give the zero system from the zero representation. Hence assume $H_0\ne\{0\}$. [F5, F6]

1.2 Forward direction: apply [F1] to obtain the normalization $W$ and the multiplicity model; [F2] then produces the cocycle fields of $WU_gW^{-1}$, and [F3] regularizes them to the pair $(B,\sigma)$; finally [F4] states that the reconstruction map $\Phi=M_B^{-1}W$ is a unitary from $H_0$ onto the canonical induced space of $\sigma$ with $\Phi U_g\Phi^{-1}=\operatorname{Ind}_H^G\sigma(g)$ and $\Phi P(E)\Phi^{-1}=M_{\mathbf 1_E}$ for every Borel $E$. This is the required $\sigma$, $K$ and $W=\Phi$. [F1, F2, F3, F4]

1.3 Reverse direction: given $\sigma:H\to U(K)$ on separable $K$, [F5] endows the induced representation on its covariant completion with the multiplication PVM $P(E)=M_{\mathbf 1_E}$, which is a projection-valued measure with $P(G/H)=I$ and the covariance identity, hence a transitive system of imprimitivity on $G/H$; this is the converse construction. [F5]

1.4 The two constructions are inverse up to unitary equivalence: start with the canonical system of $\sigma$ and run the forward construction. In the canonical model one may take $W=\mathrm{id}$, and a direct computation of its cocycle fields gives $\varphi_g(x)=\sigma(s(gx)^{-1}gs(x))$ at the source variable; the evaluation identities of the stabilizer lemma then give $\sigma'(h)=\varphi_h(eH)=\sigma(s(eH)^{-1}hs(eH))=\sigma(h)$ for the recovered representation $\sigma'$, because $s(eH)=e$. Hence the recovered $\sigma'$ is unitarily equivalent to (indeed strictly equal to, in this normalization) $\sigma$, and the recovered system is unitarily equivalent to the original one. Uniqueness of the class-level statement is recorded by the uniqueness theorem. [F3, F5]

2.1 Steps 1.2, 1.3 and 1.4 prove both directions and their inverse character up to unitary equivalence; the boundary cases $K=0$ and the zero Hilbert space are covered by [step 1.1]. [step 1.1, step 1.2, step 1.3, step 1.4, F7] ∎ 