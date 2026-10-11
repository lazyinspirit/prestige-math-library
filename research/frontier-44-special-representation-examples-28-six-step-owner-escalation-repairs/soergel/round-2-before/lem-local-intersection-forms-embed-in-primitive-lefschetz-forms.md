---
id: lem-local-intersection-forms-embed-in-primitive-lefschetz-forms
kind: lemma
title: "Embedding theorem: local intersection forms are isometric to primitive Lefschetz forms"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-local-intersection-form-for-a-soergel-summand, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-invariant-intersection-form-on-a-bott-samelson-bimodule, thm-the-type-a-soergel-hom-formula, lem-type-a-top-support-layers-are-controlled-by-reflection-localization, thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character, lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Theorem 4.1 and its proof, display (4.2), Corollary 4.3"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 and the proof in Section 2.6"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $x,s$ with $xs>x$ and the assumption $\mathrm{S}(y)$ and $\mathrm{HR}(y)$ for all $y<xs$; fixed reduced-word embeddings and the induced non-degenerate invariant forms on $B_y^R$ and $M:=B_x^RB_s^R$; a reduced expression $\underline x$ of $x$ and a generator $c_{\mathrm{bot}}$ of the one-dimensional space $\overline{B_y^R}^{-\ell(y)}$; the local intersection form on $E_y=\operatorname{Hom}^0(B_y^R,M)$ ([[def-local-intersection-form-for-a-soergel-summand]]).

[F1] The top support layer of $B_y^R$ is the single standard module $\Delta_y=R_y(-\ell(y))$, the quotient $Q=B_y^R/\Gamma_{\ge y}B_y^R$ has a $\Delta$-flag whose characters are those of the lower layers, and the graded multiplicities of the $\Delta$-flags are intrinsic; the graded rank of $\operatorname{Hom}(N,M)$ for a $\Delta$-filtered $N$ is $\langle h_\Delta(N),h_\nabla(M)\rangle$, additive in the $\Delta$-character ([[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]], [[thm-the-type-a-soergel-hom-formula]], [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F2] Under $\mathrm{S}(y)$ the character of $B_y^R$ is $\underline H_y$, so $h_\Delta(Q)=\underline H_y-H_y$ in the standard-basis expansion, a sum with nonnegative coefficients all divisible by $v$; the graded rank of $\operatorname{Hom}(Q,M)$ therefore has all its $v$-powers positive. The restriction map $\operatorname{Hom}(B_y^R,M)\to\operatorname{Hom}(\Delta_y,M)$ is the first map of the left-exact $\operatorname{Hom}$ sequence of $0\to\Delta_y\to B_y^R\to Q\to0$. [F1]

[F3] The generator of $\Delta_y=R_y(-\ell(y))$ has degree $+\ell(y)$, so $\operatorname{Hom}^0(\Delta_y,M)\cong(\Gamma_yM)^{\ell(y)}$. The proved right splitting of $\Gamma_yM\subseteq M$ makes its reduction inject into $\overline M$. Under the present $S(<xs)$, the Hom formula and the polynomial character $\operatorname{ch}(M)=\underline H_x\underline H_s$ imply that $\operatorname{Hom}^\bullet(B_y,M)$ has no negative degrees. Restriction as in step 1.1 then gives the same vanishing for $\operatorname{Hom}^\bullet(\Delta_y,M)$; hence $\Gamma_yM$ has no degree below $\ell(y)$, and its degree-$\ell(y)$ part injects into its reduction. The normalized $B_y$ has one-dimensional reduced extremal degrees $\pm\ell(y)$, and its top $\Delta_y$ generator reduces to a nonzero generator of degree $+\ell(y)$ ([[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]], [[lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F4] HR$(y)$ gives hL$(y)$ and the normalized bottom Lefschetz value $N:=\langle\rho^{\ell(y)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle_{B_y}>0$, and the adjoint of a degree-zero map with respect to the non-degenerate invariant forms exists and is a degree-zero bimodule map ([[def-local-intersection-form-for-a-soergel-summand]], [[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

[F5] The detection theorem: under $\mathrm{S}(<xs)$, non-degeneracy of all local intersection forms $(f,g)^{x,s}_y$, $y<xs$, implies $\mathrm{S}(xs)$ ([[thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character]]).

## Statement

Fix $x,s$ with $xs>x$ and assume $\mathrm{S}(y)$ and $\mathrm{HR}(y)$ for all $y<xs$; fix embeddings and the induced forms, a reduced expression $\underline x$ of $x$ and a generator $c_{\mathrm{bot}}$ of the one-dimensional space $\overline{B_y^R}^{-\ell(y)}$. Then:

1. the evaluation map $\mathrm{ev}:\operatorname{Hom}(B_y^R,B_x^RB_s^R)\to(B_x^RB_s^R)^{-\ell(y)}$, $f\mapsto f(c_{\mathrm{bot}})$, is injective with image contained in the primitive subspace $P^{-\ell(y)}_\rho=\ker(\rho^{\ell(y)+1})$;
2. $\mathrm{ev}$ is an isometry up to the positive factor $N=\langle\rho^{\ell(y)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle_{B_y}>0$: $N(f,g)^{x,s}_y=(\mathrm{ev}(f),\mathrm{ev}(g))^{-\ell(y)}_\rho$ for all $f,g$;
3. consequently $\mathrm{HR}(x,s)$ implies $\mathrm{S}(xs)$: a definite form restricted to a subspace stays non-degenerate, so the local forms are non-degenerate and the detection theorem applies.

## Proof

**Proof technique:** direct; the exact sequence of the top support layer, degreewise Hilbert-series comparison and adjointness.

1.1 **The exact sequence and the degree-zero isomorphism.** The top support layer gives a short exact sequence $0\to\Delta_y\to B_y^R\to Q\to0$ of $\Delta$-filtered modules, and $\operatorname{Hom}(-,M)$ is left exact, so $0\to\operatorname{Hom}(Q,M)\to\operatorname{Hom}(B_y^R,M)\to\operatorname{Hom}(\Delta_y,M)$ is exact. By [F1] the three graded Hom spaces are free over $S$ and their graded ranks are additive in the $\Delta$-characters: $\operatorname{rk}\operatorname{Hom}(B_y^R,M)=\operatorname{rk}\operatorname{Hom}(Q,M)+\operatorname{rk}\operatorname{Hom}(\Delta_y,M)$ as polynomials. By [F2] all $v$-powers of $\operatorname{rk}\operatorname{Hom}(Q,M)$ are positive, so the degree-$\le0$ part of the map $\operatorname{Hom}(B_y^R,M)\to\operatorname{Hom}(\Delta_y,M)$ is injective; comparing Hilbert series degree by degree, the two free modules have equal dimension in each degree $\le0$ after restriction, and the injective degreewise map is therefore an isomorphism $\operatorname{Hom}^{\le0}(B_y^R,M)\to\operatorname{Hom}^{\le0}(\Delta_y,M)$. In particular restriction of degree-zero Hom is an isomorphism, and no full graded isomorphism is asserted. [given, F1, F2]

2.1 **Evaluation at the top and then at the bottom.** Let $c\in B_y$ be the image of the homogeneous generator of $\Delta_y\subseteq B_y$. Its reduction spans $\overline{B_y}^{\ell(y)}$: the top-layer right splitting and image equality of [F3] make its reduction nonzero. By step 1.1 restriction is an isomorphism in degree zero, so evaluation at $c$ identifies the Hom space with $(\Gamma_yM)^{\ell(y)}$, which injects into $\overline M^{\ell(y)}$ by [F3]. Thus $f\mapsto\overline{f(c)}$ is injective. Hard Lefschetz on $B_y$, part of $HR(y)$, says that $\rho^{\ell(y)}c_{\mathrm{bot}}$ is a nonzero scalar multiple of $\overline c$ in that one-dimensional top degree. Therefore $\rho^{\ell(y)}f(c_{\mathrm{bot}})$ is the same nonzero scalar multiple of $\overline{f(c)}$. If bottom evaluation vanished then top evaluation would vanish, forcing $f=0$. Finally the degree bound $\overline{B_y}^{\ell(y)+2}=0$ gives $\rho^{\ell(y)+1}c_{\mathrm{bot}}=0$; bimodule linearity makes the image primitive. This proves (1), without asserting that the multiplicity space $(\Gamma_yM)^{\ell(y)}$ is one dimensional. [step 1.1, F1, F3, F4]

3.1 **The isometry.** For $f,g\in\operatorname{Hom}^0(B_y^R,M)$, the local form is $(f,g)^{x,s}_y=g^*\circ f$, a scalar endomorphism of $B_y^R$; by the normalization of [F4], $N(f,g)^{x,s}_y=\langle g^*(f(c_{\mathrm{bot}})),\rho^{\ell(y)}c_{\mathrm{bot}}\rangle_{B_y}$, and adjointness of $g^*$ gives $\langle f(c_{\mathrm{bot}}),\rho^{\ell(y)}g(c_{\mathrm{bot}})\rangle_M=(\mathrm{ev}(f),\mathrm{ev}(g))^{-\ell(y)}_\rho$, by definition of the Lefschetz form. The factor $N$ is positive by [F4]. This proves (2). [step 2.1, F4]

4.1 **From HR to the character (3).** Assume HR$(x,s)$. Since the operator $L_0$ on $\overline M$ has $P^{-\ell(y)}_\rho$ as a primitive subspace and HR makes the Lefschetz form on it definite, the restriction of this form to the image $\mathrm{ev}(E_y)$ is non-degenerate; by the isometry of step 3.1 with the positive factor $N$, the local intersection form on $E_y$ is non-degenerate. This holds for every $y<xs$, so the detection theorem [F5], whose hypothesis $\mathrm{S}(<xs)$ is available, gives $\mathrm{S}(xs)$. This proves (3) and completes the lemma. [step 3.1, F5] ∎

## Remarks

- The degree-zero restriction isomorphism in step 1.1 is genuine only in degrees $\le0$; the full graded map $\operatorname{Hom}(B_y^R,M)\to\operatorname{Hom}(\Delta_y,M)$ is not an isomorphism, which is why the proof uses graded Hilbert-series comparison rather than an ungraded rank equality.
- The positivity of $N$ is part of the normalization of HR$(y)$ and enters the isometry as a positive factor, so no sign is lost when transferring definiteness between the local forms and the primitive Lefschetz forms.
