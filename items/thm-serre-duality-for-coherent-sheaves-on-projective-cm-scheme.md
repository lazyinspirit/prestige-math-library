---
id: thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme
kind: theorem
title: "Serre duality for coherent sheaves on a projective Cohen\u2013Macaulay scheme"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "def-dualizing-complex-on-projective-cm-scheme", "lem-projective-embedding-dualizing-complex-existence", "lem-projective-dualizing-complex-trace-and-embedding-independence", "lem-projective-pure-cm-dualizing-complex-concentration", "prop-yoneda-product-is-composition-in-the-derived-category", "lem-injective-modules-flasque-and-ext-of-structure-sheaf", "lem-projective-coherent-cohomology-finite-and-vanishing", "thm-cohomological-dimension-noetherian-scheme", "lem-finite-closed-immersion-derived-coinduction-adjunction", "lem-projective-space-derived-coherent-duality"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 48.27.5(3)\u2013(4): exact derived and coherent Ext assertions"
      url: https://stacks.math.columbia.edu/tag/0FVZ
    - title: "Stacks, Remark 48.27.2: trace pairing"
      url: https://stacks.math.columbia.edu/tag/0FVW
    - title: "Vakil 2025, Corollary 29.3.14: coherent Ext duality; Remark 29.3.15: trace outline completed here"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. Let $k$ be a field and let $X$ be a projective, pure $d$-dimensional Cohen–Macaulay $k$-scheme. Let $D_X=\omega_X[d]$ be its normalized dualizing complex, and let $t_X:H^d(X,\omega_X)\to k$ be its trace. For every coherent sheaf $F$ and every integer $i$, composition followed by trace gives a natural perfect pairing of finite-dimensional vector spaces
$$\operatorname{Ext}_X^{d-i}(F,\omega_X)\times H^i(X,F)\longrightarrow H^d(X,\omega_X)\xrightarrow{t_X}k.$$
Here Ext is global Ext; negative Ext and negative sheaf cohomology are zero. Equivalently,
$$\operatorname{Ext}_X^{d-i}(F,\omega_X)\cong H^i(X,F)^\vee.$$
For $K\in D^b_{\mathrm{Coh}}(X)$ the complex form — an isomorphism in $D(k)$ — is $R\operatorname{Hom}_X(K,D_X)\cong R\operatorname{Hom}_k(R\Gamma(X,K),k)$. Coherent derived biduality holds with respect to $D_X$, even when $F$ is not locally free or perfect on $X$.

## Facts & Assumptions

**Given:** $k,X,d,F,i$ and AC.

[F1] The normalized embedding duality, including its evaluation pairing, is [[lem-projective-dualizing-complex-trace-and-embedding-independence]]; its coherent biduality comes from the embedding construction [[lem-projective-embedding-dualizing-complex-existence]]. The underlying global derived comparison is the closed-immersion adjunction [[lem-finite-closed-immersion-derived-coinduction-adjunction]] composed with the projective-space evaluation/trace isomorphism [[lem-projective-space-derived-coherent-duality]].

[F2] CM concentration is [[lem-projective-pure-cm-dualizing-complex-concentration]].

[F3] Ext from the structure sheaf equals cohomology, and Yoneda product is derived composition ([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]], [[prop-yoneda-product-is-composition-in-the-derived-category]]).

[F4] Coherent cohomology on a closed subscheme of projective space is finite ([[lem-projective-coherent-cohomology-finite-and-vanishing]]); on a Noetherian scheme of dimension $d$, quasi-coherent cohomology vanishes above $d$ ([[thm-cohomological-dimension-noetherian-scheme]]).

## Proof

1.1 Apply [F1] to $F$ with $r=-i$. Since $D_X=\omega_X[d]$ by [F2], its left side becomes $\operatorname{Hom}_{D(X)}(F,\omega_X[d-i])=\operatorname{Ext}_X^{d-i}(F,\omega_X)$; its right side is $\operatorname{Hom}_k(H^i(X,F),k)$. For $\eta\in H^i(X,F)$, [F3] represents it by $\beta:\mathcal O_X\to F[i]$. A class $\alpha:F\to\omega_X[d-i]$ pairs with it by $t_X(\alpha[i]\circ\beta)$. This is the Yoneda composition of [F3] and is exactly the evaluation comparison proved in [F1]. Thus it is bilinear, natural in $F$, and compatible with shifts and connecting maps. [F1, F2, F3, construct]

2.1 Apply [F4] to the closed subscheme $X\hookrightarrow\mathbb P^N_k$ supplied by a projective embedding: its finite-dimensionality clause gives that each $H^i(X,F)$ is a finite-dimensional $k$-vector space. The isomorphism in step 1.1 proves that the adjoint map from Ext to the dual of cohomology is an isomorphism. For a finite-dimensional space, evaluation into its double dual is an isomorphism, so the other adjoint map is an isomorphism as well. Outside $0\le i\le d$, cohomology vanishes by [F4] and the negative-degree convention; step 1.1 then proves the corresponding Ext vanishing. For bounded coherent $K$, retain the actual global derived comparison used in [F1]: closed-immersion adjunction gives $R\operatorname{Hom}_X(K,D_X)\cong R\operatorname{Hom}_P(i_*K,\omega_P[N])$, and the projective-space evaluation/trace map identifies the latter with $R\operatorname{Hom}_k(R\Gamma(P,i_*K),k)=R\operatorname{Hom}_k(R\Gamma(X,K),k)$. This comparison is an isomorphism in $D(k)$ induced by the same counit and trace, so its naturality and signs are those of [F1]. The biduality $K\cong\mathcal R\!Hom_X(\mathcal R\!Hom_X(K,D_X),D_X)$ is the coherent biduality of the embedding construction [F1], valid after pushing into the ambient projective space, without imposing perfectness on $K$ over the singular scheme. AC enters through the cited resolution, derived-composition and cohomology suppliers. [F1, F4, step 1.1, algebra] ∎
