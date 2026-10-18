---
id: thm-temperley-lieb-rank-one-pivotal-ribbon-conversion
kind: theorem
title: "The rank-one tilting quotient matches the Temperley-Lieb ribbon convention"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization
  - thm-basic-properties-of-the-categorical-trace
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
  - thm-in-a-spherical-category-the-left-and-right-traces-agree
  - thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - def-ribbon-evaluation-of-an-x-colored-closed-braid
  - def-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Assume AC_omega only for the cited framed-tangle evaluator; no global choice principle is used in the local parameter and channel calculations."
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§1–4, printed pp. 2–22; Theorem 5, printed pp. 25–26: weight-lattice ribbon convention and semisimple quotient."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§4.4, PDF pp. 41–46: diagram and tilting category comparison."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.9–8.10, printed pp. 214–218: Drinfeld morphism, ribbon trace, and framed-tangle convention."
verification:
  precheck: escalated
---

## Statement

Assume AC$_\omega$ only for the cited free framed-tangle evaluation supplier; no other choice principle is added. Use the parameter dictionary $q=e^{\pi i/\ell}$, $s=e^{\pi i/(2\ell)}$, $s^2=q$, and the full weight-lattice ribbon extension fixed in [[def-temperley-lieb-rank-one-lusztig-tilting-category]]. Let $V=\Delta(1)$ with ordered weight basis $(v_+,v_-)$. Write $T(a)$ for the indecomposable tilting module of highest weight $a$ from [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]]. The proposed fundamental decomposition is $V\otimes V\cong T(2)\oplus T(0)$; $P_{0,i,i+1}$ denotes the equivariant idempotent projector onto the $T(0)$ summand in positions $i,i+1$, tensored with identities on other positions. The target centralizer is $\operatorname{End}_{\mathcal T_\ell/\mathcal N_\ell}(V^{\otimes n})$, where the quotient and negligible ideal are those of [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]]. The rank-one centralizer map

$$\rho_n:\mathrm{TL}_n(\mathbb C,\delta)\longrightarrow\operatorname{End}_{U^L_q(\mathfrak{sl}_2)}(V^{\otimes n}),\qquad U_i\longmapsto\delta P_{0,i,i+1}$$

descends to the negligible quotient and is an isomorphism onto the centralizer of the retained tilting summands. Under the pivotal structure the fundamental object's dimension is $\delta=q+q^{-1}$, so a contractible planar circle evaluates to $+\delta$. The Frobenius–Schur sign here is the symmetry sign of the invariant self-duality pairing on $V$; its conversion to the planar cup/cap convention is part of the claim. The two braid channels are the retained highest-weight-$2$ and trivial summands, with the Hecke crossing eigenvalues $q^2$ and $-1$ in the convention $T_i=qU_i-1$. The ribbon twist, pivotal trace, and framed closure evaluation agree on both channels, so the comparison is ribbon-compatible. The parameter and Hecke eigenvalue conversions are checked below. The explicit duality cup/cap matrices with their zig-zag and positive-loop sign, the Frobenius–Schur sign, the twist eigenvalues on both channels, and the all-rank centralizer kernel/image proof have not been derived from the actual chosen $R$-matrix. These are unresolved obligations, so the full equivalence is escalated.

## Facts & Assumptions

**Given:** The rank-one divided-power ribbon category, the Jones–Wenzl decomposition convention, and the stated Hecke-to-diagram map.

[A1] AC$_\omega$ means countable choice for a sequence of nonempty sets, the exact axiom branch retained by the free framed-tangle supplier ([[def-countable-choice]]).

[F1] The Hopf action, full weight-lattice extension, square-root convention, and ribbon pivotal structure are those of [[def-temperley-lieb-rank-one-lusztig-tilting-category]].

[F2] The two-strand Jones–Wenzl recursion gives the diagram-side idempotent $p_2=1_2-\delta^{-1}U_1$ when $\delta\ne0$, but it does not identify that idempotent with a representation-theoretic channel ([[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]).

[F3] The Hecke/Temperley–Lieb normalization uses $T_i=qU_i-1$ at $v=q^2$ ([[thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization]]).

[F4] The indecomposable label $T(a)$ is the highest-weight-$a$ tilting module, and the negligible quotient, when semisimple, has retained labels $0,\ldots,\ell-2$ with the stated truncated fusion rule ([[lem-temperley-lieb-rank-one-tilting-character-and-dimension]], [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]], [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]]); the character, quotient, and path-block proofs remain escalated.

[F5] The categorical trace, Drinfeld morphism, spherical trace comparison, framed-tangle functor, ribbon closure, and colored-braid evaluation are supplied with their actual hypotheses by [[thm-basic-properties-of-the-categorical-trace]], [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]], [[thm-in-a-spherical-category-the-left-and-right-traces-agree]], [[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]], [[lem-ribbon-trace-equals-the-framed-closure-evaluation]], and [[def-ribbon-evaluation-of-an-x-colored-closed-braid]].

## Proof

**Proof technique:** compare the fundamental two-channel generator first, then check the ribbon data on those channels and all retained path blocks.

1.1 Conditionally, if the centralizer map identifies $p_2$ from [F2] with the highest-weight-$2$ channel projector, then $U_1$ acts by $0$ on that channel and by $\delta$ on its complement, since $U_1=\delta(1-p_2)$. Under this still-to-be-verified identification, $T_i=qU_i-1$ has eigenvalues $-1$ and $q\delta-1=q(q+q^{-1})-1=q^2$, the two roots of $(T_i-v)(T_i+1)$ for $v=q^2$. This computes the normalization but does not prove the channel identification. [F2, F3, given, algebra]

1.2 The source parameter dictionary is $q_{\mathrm{target}}=s_{\mathrm{source}}^2$, with source type $A_1$ root degree $l=2\ell$, $l'=\ell$, and $D=1$; thus the target $q^2$ has order $\ell$ and the weight lattice is the full extension rather than its root-lattice restriction. This checks the parameter and braid-eigenvalue normalization only. [F1, F3, algebra]

2.1 A ribbon equivalence still requires a direct proof of $V\otimes V\cong T(2)\oplus T(0)$, explicit fundamental cup and cap matrices, verification of both zig-zag identities and the $+\delta$ loop, both twist eigenvalues from the chosen $R$-matrix/ribbon element, and proof that path matrix units give the full centralizer with precisely the negligible kernel. The current suppliers [F4] state retained quotient labels but do not prove these channel computations; the tangle suppliers [F5] only evaluate a ribbon object after that input is verified under AC$_\omega$ [A1]. This theorem is escalated with the listed missing checks. [A1, F1, F4, F5, step 1.1, step 1.2]
