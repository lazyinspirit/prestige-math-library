---
id: thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified
kind: theorem
title: Existence and highest weight classification of root-of-unity tiltings
status: published
dependency_level: 9
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-weyl-and-dual-weyl-module-families, lem-root-of-unity-finite-highest-weight-truncations, lem-root-of-unity-weyl-flags-summands-and-orthogonality, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 3, Lemmas 5–6 and Proposition 4; existence is constructed here by finite universal extensions and a proved filtration criterion.
    - title: Volodymyr Mazorchuk, Lectures on Algebraic Categorification
      url: https://arxiv.org/pdf/1011.0144
      locator: Section 4.5, Proposition 4.7 and Theorem 4.8; abstract filtration criteria and tilting construction, applied only after the actual finite highest weight hypotheses are proved locally.
---

## Statement

Assume the inherited Axiom of Choice. For each dominant weight $\lambda$ there exists a unique indecomposable tilting module $T_\zeta(\lambda)$ with highest label $\lambda$. It has a normalized inclusion $\Delta_\zeta(\lambda)\hookrightarrow T_\zeta(\lambda)$ with Weyl-filtered cokernel of strictly smaller labels and highest multiplicity one. Every tilting module is a finite direct sum of these. In every finite saturated truncation $\mathcal C_\Gamma$ one has
$$
M\text{ is dual-Weyl-filtered}\quad\Longleftrightarrow\quad\operatorname{Ext}^1(\Delta_\zeta(\mu),M)=0\text{ for all }\mu\in\Gamma,
$$
and the dual Weyl-filtration criterion with the variables interchanged. No semisimplicity or alcove dimension assertion is included here.

## Facts & Assumptions

**Given:** The full root Weyl category and the preceding exact finite highest weight truncations.

[F1] Finite saturated truncations have a finite-dimensional algebra model, projective covers with greater-label Weyl kernels, injective envelopes with greater-label dual Weyl cokernels, and reciprocity ([[lem-root-of-unity-finite-highest-weight-truncations]]).

[F2] Weyl and dual Weyl flags are extension- and summand-closed; standard-costandard Hom is diagonal one-dimensional, all standard-costandard degree-one extensions split, and indecomposable tiltings have unique highest labels of multiplicity one and are unique at a prescribed such label ([[lem-root-of-unity-weyl-flags-summands-and-orthogonality]]).

[F3] The Axiom of Choice inherited from [[def-axiom-of-choice]] is available for the countable projective resolutions used in the finite-dimensional algebra argument. All extensions and multiplicity bases in the construction itself are finite.

## Proof

**Given:** A finite saturated $\Gamma$ and its split basic algebra $A$, with simple labels $\Gamma$.

1.1 The standard-costandard degree-one vanishing in [F2] extends to all positive degrees. For $j\ge2$, the projective sequence for $\Delta_\eta$ in [F1] identifies $\operatorname{Ext}^j(\Delta_\eta,\nabla_\mu)$ with $\operatorname{Ext}^{j-1}(K_\eta,\nabla_\mu)$; a Weyl flag of $K_\eta$ and induction on $j$ make the latter zero. Filtering either variable proves all positive Ext groups vanish between any Weyl-filtered and dual-Weyl-filtered pair. Likewise, if $N$ satisfies $\operatorname{Ext}^1(N,\nabla_\mu)=0$ for every label, then the injective sequences in [F1] give all positive groups zero: filter their dual-Weyl cokernels and dimension shift successively in the second variable. In particular Ext from $N$ in every positive degree vanishes against any dual-Weyl-filtered module. [F1, F2, F3, induction]

1.2 Let $\eta$ be maximal in $\Gamma$ and $e$ its primitive idempotent. Then $Ae=P_\eta=\Delta_\eta$ and $eAe=\mathbb C$. Apply the canonical maximal-Weyl-trace argument of [F2] to each projective column and sum the columns: multiplication gives an injection $Ae\otimes_\mathbb C eA\to A$ with image $J=AeA$. Thus $J$ is projective on both sides. The quotient $A'=A/J$ models the Serre subcategory on $\Gamma\setminus\{\eta\}$. Its projective columns are obtained by removing the maximal trace from the old projectives, so they retain the other Weyl sections; equivalently this is exactly the smaller root truncation in [F1]. Its injectives are dual-Weyl-filtered, with unchanged smaller-label families. [F1, F2, algebra]

2.1 Suppose $N$ has the Ext vanishing of step 1.1. Choose a projective resolution $P_\bullet\to N$ with finite dimensional projective terms, and tensor it with $A'$. Each resulting term is projective over $A'$. For any injective $A'$-module $I'$, adjunction identifies $\operatorname{Hom}_{A'}(A'\otimes_A P_\bullet,I')$ with $\operatorname{Hom}_A(P_\bullet,I')$, whose positive cohomology is zero by step 1.1 and the dual Weyl filtration of $I'$. Exactness of Hom into an injective identifies that cohomology with Hom from the corresponding homology module. Injectives detect nonzero homology: a nonzero finite homology module has a simple submodule $L$; embed $L$ into its injective envelope $I_L$ and extend that map to the homology module by injectivity. The extension is nonzero on $L$, so Hom into $I_L$ is nonzero. No assertion that one copy of each injective envelope embeds every finite module is needed. Hence $\operatorname{Tor}^A_j(A',N)=0$ for all $j>0$. Tensoring $0\to J\to A\to A'\to0$ therefore gives the actual exact sequence $0\to Ae\otimes_\mathbb C eN\to N\to N'\to0$, $N'=A'\otimes_A N$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 The exact tensor resolution from step 2.1 and adjunction give $\operatorname{Ext}^j_{A'}(N',\nabla_\mu)=\operatorname{Ext}^j_A(N,\nabla_\mu)=0$ for every smaller label and every $j>0$. Induct on $|\Gamma|$ to conclude $N'$ is Weyl-filtered; the base empty category contains only zero. The kernel in step 2.1 is a direct sum of $\Delta_\eta$, so $N$ is Weyl-filtered. The converse is step 1.1. Exact ordinary duality in the relabelled finite truncation $\Gamma^*=-w_0\Gamma$ proves the asserted dual-Weyl criterion. This proves the needed Ext criteria rather than importing them from category $\mathcal O$. [F1, F2, step 1.1, step 2.1, induction]

4.1 Fix $\lambda$ and take the finite saturated ideal $\Gamma=\{\mu\in P^+:\mu\le\lambda\}$. Start with $X=\Delta_\zeta(\lambda)$ and process the other labels in a linear order descending in dominance. At the step for $\mu$, let $m=\dim\operatorname{Ext}^1(\Delta_\mu,X)$ and choose the universal extension $0\to X\to X'\to\Delta_\mu^{\oplus m}\to0$ whose components are a basis of that Ext space. The connecting map from $\operatorname{Hom}(\Delta_\mu,\Delta_\mu^{\oplus m})$ onto this Ext space is an isomorphism because $\operatorname{End}(\Delta_\mu)=\mathbb C$. Also $\operatorname{Ext}^1(\Delta_\mu,\Delta_\mu)=0$ by the highest-vector splitting lemma, so the exact sequence of Ext makes $\operatorname{Ext}^1(\Delta_\mu,X')=0$. Already processed labels $\nu$ stay killed: they are not strictly below $\mu$, and the same splitting lemma gives $\operatorname{Ext}^1(\Delta_\nu,\Delta_\mu)=0$. The original top label is killed from the start. Every step preserves a Weyl flag, top multiplicity one and support at most $\lambda$. Finite dimensionality of the algebra in [F1] makes each Ext space finite dimensional and the process finite. [F1, F2, step 3.1, construct, algebra]

5.1 The final $X$ has all the degree-one vanishings in the costandard criterion of step 3.1, so it is dual-Weyl-filtered as well as Weyl-filtered, hence tilting. Decompose it into indecomposable tiltings using [F2]. Exactly one summand contains its one-dimensional $\lambda$ space. That summand has highest label $\lambda$, multiplicity one, and normalized bottom inclusion by the maximal trace lemma; all remaining Weyl labels are strictly smaller. Call it $T_\zeta(\lambda)$. Its uniqueness and the decomposition of every tilting into the objects so obtained follow from [F2]. All constructions occur in an actual finite root truncation, so these are genuine module filtrations and objects in the full category. [F1, F2, F3, step 3.1, step 4.1, algebra] ∎
