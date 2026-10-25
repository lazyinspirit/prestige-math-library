---
id: lem-multiplicative-type-affineness-by-field-descent
kind: lemma
title: "Affineness of a field form of a diagonalizable group"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-25.md"
      - "research/frontier-38-owner-30-alpha-batch-25-5a.md"
      - "research/frontier-38-owner-30-step5-hash-25-post-5a.json"
    content_sha256: "0b7e6180b649f0f37060a72fff00e9d34bd72ca58ad02143cafa968ebd7c77e6"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-group-scheme-over-a-field", "def-diagonalizable-group-and-character-module", "lem-fpqc-cover-submersive", "def-axiom-of-choice", "thm-affine-fibre-product-tensor-ring", "thm-global-sections-affine-scheme", "thm-morphisms-into-affine-scheme-global-sections"]
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a finite-type group scheme over a field $k$. If $G_K$ is affine for some field extension $K/k$, then $G$ is affine. In particular, a finite-type group scheme fpqc locally diagonalizable over $k$ is affine, and becomes diagonalizable over a field extension. Thus allowing arbitrary finite-type group schemes in the definition of multiplicative type gives the same class as the affine formulation.

## Facts & Assumptions

[F1] Fpqc covers are universally submersive, assuming AC: [[lem-fpqc-cover-submersive]].

[F2] Affine fibre products have tensor-product coordinate rings and affine global sections recover the ring: [[thm-affine-fibre-product-tensor-ring]], [[thm-global-sections-affine-scheme]].

[F3] Maps into an affine scheme are maps from its ring to global sections: [[thm-morphisms-into-affine-scheme-global-sections]].

[F4] Group schemes follow [[def-group-scheme-over-a-field]]; diagonalizable groups on any base have the convention of [[def-diagonalizable-group-and-character-module]].

[A1] Assume [[def-axiom-of-choice]]. It is used through F1, in extending $1\in K$ to a vector-space basis to obtain a $k$-linear retraction $K\to k$, and in obtaining points in the nonempty tensor products of residue fields used in open descent.

## Proof

**Given:** A finite-type $k$-group scheme $G$ and an extension $K$ such that $G_K$ is affine.

1.1 The identity is a closed point of $G$: a $k$-rational point in a finite-type $k$-scheme is closed. To check the latter assertion affine-locally, its residue map has maximal kernel since its image is $k$; if another point were a specialization, every affine neighborhood of that specialization would contain the rational point and contradict maximality. The diagonal of $G$ is the inverse image of the identity under $(g,h)\mapsto g^{-1}h$, so it is closed, and $G$ is separated. More generally, for any quasi-compact separated $k$-scheme $X$, choose a finite affine cover $U_i$. Each intersection $U_i\cap U_j$ is affine, as a closed subscheme of $U_i\times_k U_j$ pulled back from the diagonal. Its global sections are the kernel of the difference-of-restrictions map from the finite product of the rings of the $U_i$ to the finite product of the rings of their intersections. Tensoring with a $k$-algebra preserves this kernel: exactness of vector-space tensor products is checked on the finitely many independent coefficients of a given tensor. F2 identifies the tensored rings with those of the base-changed cover. Consequently $\Gamma(X,\mathcal O_X)\otimes_k R=\Gamma(X_R,\mathcal O_{X_R})$ for every $k$-algebra $R$. [F2, F4, algebra]

2.1 Set $A=\Gamma(G,\mathcal O_G)$. By step 1.1, $A\otimes K=\Gamma(G_K,\mathcal O)$, a finite-type $K$-algebra. Choose its finite algebra generators and write them as finite sums of coefficients times elements of $A$. Let $A'$ be generated over $k$ by those finitely many elements. Then $A'\otimes K\to A\otimes K$ is onto, so $(A/A')\otimes K=0$. A nonzero vector remains nonzero after extension, hence $A'=A$ and $A$ is finite type. F3 gives the canonical map $f:G\to H=\operatorname{Spec}A$. By step 1.1 and F2, $f_K$ is the canonical affine global-sections isomorphism. Its inverse $g_K:H_K\to G_K$ has equal pullbacks to $K\otimes_k K$, since both are the inverse of the same pulled-back $f$. [F2, F3, step 1.1, algebra]

3.1 Take a finite affine open cover $V_i$ of $G$. The opens $W_i=g_K^{-1}((V_i)_K)$ in $H_K$ have equal pullbacks under the two projections of $H_{K\otimes K}$. They are saturated for $H_K\to H$: any two points above the same point of $H$ can be compared using a point in the fibre product, since the tensor product of their residue fields over the residue field of that point is a nonzero ring and has a prime ideal by A1. Thus $W_i$ is the inverse image of a subset $U_i\subset H$, and F1 makes $U_i$ open. These opens cover $H$, and they are quasi-compact and separated because $H$ is a Noetherian affine scheme. For any vector space $R$, the equalizer of $R\otimes K\rightrightarrows R\otimes K\otimes K$ is $R$, where the arrows insert $1$ in the first or second field factor. Indeed a $k$-linear retraction $\lambda:K\to k$ with $\lambda(1)=1$, applied to one field factor of an equality, shows a fixed tensor equals $r\otimes1$. The ring map of $g_K|_{(U_i)_K}$ from $\Gamma(V_i,\mathcal O)$ into $\Gamma(U_i,\mathcal O)\otimes K$ has equal pullbacks by step 2.1 and the base-change formula in step 1.1. It therefore lands in $\Gamma(U_i,\mathcal O)$ by this equalizer computation, and F3 descends it to $g_i:U_i\to V_i$. On overlaps these maps agree: their pullbacks agree, the underlying point maps are equal by surjectivity of the field projection, and on preimages of affine target opens the ring maps are equal by the injectivity of extension of scalars. They glue to $g:H\to G$. The same uniqueness argument applied to $fg$ and $gf$ proves they are identities since they become identities over $K$. Hence $f$ is an isomorphism and $G$ is affine. [F1, F3, A1, step 1.1, step 2.1, algebra]

4.1 If $G$ is fpqc locally diagonalizable over $\operatorname{Spec}k$, there is a nonempty covering scheme $S'$ over which it is diagonalizable. Choose a point of $S'$ and take its residue field $K$; the diagonalizable isomorphism pulls back to $G_K\cong D_K(M)$. The preceding steps prove affineness. Conversely a field extension giving a diagonalizable group is an fpqc cover of $\operatorname{Spec}k$. Therefore the two multiplicative-type formulations give exactly the same full class. The same argument with $D(M)=\mathbf G_m^r$ applies to fpqc forms of tori. [F1, step 3.1, algebra] ∎
