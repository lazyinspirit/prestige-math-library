---
id: cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i
kind: counterexample
title: "Irreducible multiplicity data is not canonical outside type I"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two
  - def-commensurator-unitary-character-and-monomial-induced-representation
  - lem-monomial-induced-representations-transversal-model-properties
  - lem-monomial-irreducibility-criterion
  - lem-monomial-inequivalence-criterion
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-direct-integral-of-unitary-representations
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - lem-trigonometric-characters-are-orthonormal
  - thm-trigonometric-system-is-complete-in-l-two-of-the-torus
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-uniqueness-of-the-cyclic-gns-representation
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - ex-the-left-regular-factor-of-an-icc-discrete-group
  - def-type-i-factor-representation-and-type-i-group
dependency_level: 4
axiom_use: "Assume AC, including the stated choice assumptions of the suppliers. It permits representatives, transversals and orthonormal bases; AC implies Countable Choice for Hilbert and Fourier/L2 suppliers. Countability arguments are proved locally rather than assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Example 1.G.11(1), printed pp.63\u201364; Theorem 1.G.10 is context only, not a proof dependency."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement refuted

False claim: for every second-countable locally compact group, the irreducible direct-integral data of a representation - the measure class on the unitary dual and the multiplicity function - is canonically determined. Counterexample: let $F=\langle a,b\rangle$ be the free group on two generators, $A=\langle a\rangle$, $B=\langle b\rangle$, and let $\lambda_F$ be the left regular representation on $\ell^2(F)$. Then there are two direct integral decompositions into irreducible representations $$\lambda_F\cong\int_{\widehat A}^\oplus\operatorname{Ind}_A^F\chi\,d\mu(\chi)\cong\int_{\widehat B}^\oplus\operatorname{Ind}_B^F\psi\,d\nu(\psi),$$ where $\mu,\nu$ are Haar measures on the compact duals $\widehat A,\widehat B\cong\mathbb T$, every fibre $\operatorname{Ind}_A^F\chi$ and $\operatorname{Ind}_B^F\psi$ is irreducible, and $\operatorname{Ind}_A^F\chi\not\cong\operatorname{Ind}_B^F\psi$ for all $(\chi,\psi)\in\widehat A\times\widehat B$. Moreover $F$ is not type I, because $L(F)$ is an infinite-dimensional non-type-I factor ([[ex-the-left-regular-factor-of-an-icc-discrete-group]]). Hence the two decompositions have disjoint supports in the dual and there is no uniqueness of irreducible multiplicity data: only the central factor decomposition is canonical.

## Facts & Assumptions

[F1] Assume AC. For $F=F_2=\langle a,b\rangle$, the infinite cyclic subgroups $A=\langle a\rangle$ and $B=\langle b\rangle$ are self-commensurating and $g^{-1}Bg\cap A=\{e\}$ for all $g\in F$ ([[def-axiom-of-choice]], [[lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two]]).

[F2] For a subgroup $D$ of a discrete group and a unitary character $\chi$, choose a right transversal $T$ of the left cosets $D\backslash F$, containing $e$. Write $tg=\alpha(t,g)(t\cdot g)$ with $\alpha(t,g)\in D$. The monomial representation on $\ell^2(T)$ is $(\pi_\chi(g)u)(t)=\chi(\alpha(t,g))u(t\cdot g)$. It satisfies $\pi_\chi(t^{-1})\delta_e=\delta_t$, $\pi_\chi(d)\delta_e=\chi(d)\delta_e$, and its $\delta_e$ coefficient is $\chi(g)$ if $g\in D$ and zero otherwise ([[def-commensurator-unitary-character-and-monomial-induced-representation]], [[lem-monomial-induced-representations-transversal-model-properties]]).

[F3] Inducing a character from a self-commensurating open subgroup gives an irreducible representation. The inequivalence criterion applies vacuously when all cross intersections have infinite index in the first subgroup ([[lem-monomial-irreducibility-criterion]], [[lem-monomial-inequivalence-criterion]]).

[F4] A constant separable Hilbert field with a countable orthonormal fundamental family is measurable; a field of unitary representations with measurable matrix coefficients integrates by fibrewise action ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[def-direct-integral-of-unitary-representations]]).

[F5] On the probability torus, the characters $z\mapsto z^n$, $n\in\mathbb Z$, have integral zero except for $n=0$, and their span is dense in complex $L^2$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[lem-trigonometric-characters-are-orthonormal]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]). AC supplies their Countable Choice premise ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] Two strongly continuous cyclic unitary representations with the same pointed diagonal coefficient are unitarily equivalent ([[thm-uniqueness-of-the-cyclic-gns-representation]]). The regular representation has cyclic vector $\delta_e$ and coefficient $\mathbf1_{g=e}$ ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]).

[F7] The regular representation of $F_2$ is a non-type-I factor representation ([[ex-the-left-regular-factor-of-an-icc-discrete-group]]); a type I group has no such separable factor representation ([[def-type-i-factor-representation-and-type-i-group]]).

## Counterexample

**Given:** AC, the discrete second-countable locally compact group $F=F_2$, and its infinite cyclic free factors $A,B$.

1.1 A character of $A$ is uniquely determined by $z=\chi(a)\in\{z\in\mathbb C:|z|=1\}$, with $\chi(a^n)=z^n$. This identifies $\widehat A$ with the torus: compact subsets of the discrete cyclic group are finite, so its compact-open character topology is exactly the topology of this evaluation. Transport normalized torus Haar measure to $\widehat A$; do the same for $B$ and $\psi(b)$. These are standard-Borel probability parameter spaces. A transversal $T$ of $A\backslash F$ is countable. Realize all $\pi_z=\operatorname{Ind}_A^F\chi_z$ on the fixed space $\ell^2(T)$ as in [F2]. For fixed $g$ every basis matrix coefficient is zero or a monomial $z^n$, hence continuous in $z$. Thus [F4] defines $\Pi_A=\int_{\widehat A}^{\oplus}\pi_z\,d\mu(z)$ on $L^2(\widehat A;\ell^2(T))$. The pointwise group law is exact for every parameter; since $F$ is discrete, the integrated unitary representation is automatically strongly continuous. [F1, F2, F4, F5, construct]

2.1 The constant section $\xi(z)=\delta_e$ is a unit vector. Its diagonal coefficient at $g$ is the integral of the coefficient in [F2]: it is zero if $g\notin A$, and if $g=a^n$ it is $\int z^n\,d\mu(z)=\mathbf1_{n=0}$. Hence it equals $\mathbf1_{g=e}$. Crucially, $\xi$ is cyclic for the entire integral. Indeed, for every $t\in T$ and $n\in\mathbb Z$, the group law and [F2] give $\Pi_A(t^{-1}a^n)\xi(z)=z^n\delta_t$. The span of these orbit vectors contains every finite sum of Fourier polynomials times coset basis vectors. Such sums are dense: the squared norm is the sum of the scalar-coordinate squared $L^2$ norms, so truncating the countable coset coordinates makes the tail arbitrarily small, and [F5] approximates each of the finitely many remaining coordinates by Fourier polynomials. This proves global cyclicity, without inferring it from fibrewise cyclicity. [F2, F4, F5, step 1.1]

3.1 The regular representation and $(\Pi_A,\xi)$ now have the same diagonal coefficient and cyclic unit vectors, so [F6] gives $\lambda_F\cong\Pi_A$. Repeating steps 1.1 and 2.1 with $B$ gives $\lambda_F\cong\int_{\widehat A}^{\oplus}\operatorname{Ind}_A^F\chi\,d\mu(\chi)\cong\int_{\widehat B}^{\oplus}\operatorname{Ind}_B^F\psi\,d\nu(\psi)$. Both measures are normalized Haar probabilities. [F6, step 1.1, step 2.1]

4.1 By self-commensuration in [F1], [F3] makes every fibre in both integrals irreducible. Every intersection $g^{-1}Bg\cap A$ is trivial, hence has infinite index in the infinite group $A$. The cross-family inequivalence hypothesis is therefore vacuous, and [F3] gives $\operatorname{Ind}_A^F\chi\not\cong\operatorname{Ind}_B^F\psi$ for every pair of parameters. Within one family, distinct characters also give inequivalent fibres: if the intersection $g^{-1}Ag\cap A$ has finite index in both groups, self-commensuration forces $g\in A$; conjugation then fixes every character of the abelian $A$, and different characters differ on $A$. The same inequivalence criterion applies, and similarly for $B$. Thus each model has multiplicity one on its own irreducible classes, and the two sets of classes are disjoint. [F1, F3, step 3.1]

5.1 No removal of null parameter sets, change of measure within its class, or parameter identification can match the irreducible fibres of these two probability models: every cross pair is inequivalent by step 4.1. This refutes canonical irreducible measure-class/multiplicity data. No standard-Borel structure on the full dual $\widehat F$ is being assumed; the two models already use standard-Borel circles and disjoint images among irreducible classes. Moreover [F7] proves that $F$ is not type I. In this example the central factor datum remains the one-point non-irreducible regular factor of [F7]; the two irreducible disintegrations are not central diagonalizations. Hence the uniqueness appropriate to central factor decompositions cannot be transferred to irreducible multiplicity data outside type I. [F7, step 3.1, step 4.1] ∎
