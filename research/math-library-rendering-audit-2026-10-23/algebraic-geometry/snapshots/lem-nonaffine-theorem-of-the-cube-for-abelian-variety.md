---
id: lem-nonaffine-theorem-of-the-cube-for-abelian-variety
kind: lemma
title: "The theorem of the cube for an abelian variety"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, prop-abelian-variety-commutativity-from-rigidity, thm-abelian-variety-is-projective, thm-global-functions-proper-integral-variety, thm-cech-computes-qc-cohomology-separated-scheme-affine-cover, lem-proper-flat-cohomology-perfect-complex, thm-faithful-flatness-of-jacobson-adic-completion, thm-cohomology-and-base-change]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-nonaffine-theorem-of-the-cube-for-abelian-variety and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-24; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"fbcc034a1e307c619fe74344b22db9301a628cdb392cd4256d12629d3013bce5","evidence":["research/frontier-38-owner-30-reader-24.md","research/frontier-38-owner-30-reader-findings-24.json","research/frontier-38-owner-30-dispatch/reader-reader-24.result.json","research/frontier-38-owner-30-step5-hash-24-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-nonaffine-theorem-of-the-cube-for-abelian-variety.md","historical_raw_sha256":"a0e70a5abc1eec4c62fe0a0f999d1dcae54c8abcac8a0c722befccfe16fc7c59","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:35:18.339Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Theorem 37.33.8 and Lemmas 37.33.1, 37.33.4, 37.33.6–7"
      url: https://stacks.math.columbia.edu/tag/0BF4
    - title: "Stacks Project, Lemma 39.9.6"
      url: https://stacks.math.columbia.edu/tag/0BFE
---

## Statement

Assume AC and DC. Let $A$ be an abelian variety over any field $k$, with identity $e$. On $A^3$, write $m_I(x_1,x_2,x_3)=\sum_{i\in I}x_i$. For every invertible sheaf $L$ on $A$ there is an isomorphism
$$m_{123}^*L\otimes m_1^*L\otimes m_2^*L\otimes m_3^*L\cong m_{12}^*L\otimes m_{13}^*L\otimes m_{23}^*L.$$
More generally, an invertible sheaf $M$ on $A\times A\times A$ trivial on $e\times A\times A$ and $A\times e\times A$, and trivial on $A\times A\times\{z\}$ for one point $z$ of the third factor, is trivial. The triviality on the last fibre is over its residue field. The assertion includes arbitrary characteristic and imperfect fields.

## Facts & Assumptions

[F1] $A$ is proper, smooth, geometrically integral and rationally pointed; it is commutative and projective under AC. ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]], [[thm-abelian-variety-is-projective]])

[F2] A proper geometrically integral rationally pointed variety has only scalar global functions. Finite affine Čech covers compute quasi-coherent cohomology. ([[thm-global-functions-proper-integral-variety]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]])

[F3] A proper flat coherent family over a Noetherian affine base has a bounded finite projective cohomology complex in nonnegative degrees compatible with arbitrary base change, locally finite free. If the degree-zero fibre map is surjective, pushforward is locally free and commutes with base change near that point. These suppliers assume AC and DC. ([[lem-proper-flat-cohomology-perfect-complex]], [[thm-cohomology-and-base-change]])

[F4] The maximal-ideal completion of a Noetherian local ring is faithfully flat, under AC. ([[thm-faithful-flatness-of-jacobson-adic-completion]])

## Proof

**Given:** AC, DC, $A/k$ as above, and an invertible sheaf $M$ satisfying the three stated triviality conditions.

1.1 Put $X=A\times_kA$, $Z=A$, and $p:X\times Z\to Z$. Products and field extensions of smooth geometrically integral varieties are geometrically integral: geometric irreducibility of the product follows since the projection is open with irreducible fibres, and its reducedness follows from smoothness. They remain proper. Thus $H^0(X_K,\mathcal O)=K$ for every extension $K/k$ by [F2]. In fact $H^0(X\times\operatorname{Spec}B,\mathcal O)=B$ for every $k$-algebra $B$: the equalizer of sections on a finite affine cover and its intersections tensors with $B$ over the field $k$, preserving its kernel. The same holds for $A$. For any extension $K/k$, use the double Čech resolution for the covers by $U_i\times A_K$ and $A_K\times U_j$, where the $U_i$ are affine. Its term at the intersection $U_I\times U_J$ is $\Gamma(U_I,\mathcal O)\otimes_K\Gamma(U_J,\mathcal O)$, so its global-section total complex is the tensor total complex of the two affine Čech complexes. The augmented Čech resolution in each direction is exact on stalks (a cover member containing the point supplies its contraction), and all double intersections are affine; thus this total complex computes the cohomology of $X_K$. Splitting each complex of $K$-vector spaces into its cohomology and two-term contractible summands gives $H^1(X_K,\mathcal O)=H^1(A_K,\mathcal O)\oplus H^1(A_K,\mathcal O)$. Restriction to $A_K\times e$ and $e\times A_K$ is precisely projection onto these two summands, since $H^0(A_K,\mathcal O)=K$ and $H^1(\operatorname{Spec}K,\mathcal O)=0$. In particular the joint restriction is injective. [F1, F2, algebra]

2.1 The set $T=\{t\in Z:M_t\cong\mathcal O_{X_{\kappa(t)}}\}$ is closed. Indeed on a proper integral fibre, $M_t$ is trivial exactly when both $M_t$ and $M_t^{-1}$ have nonzero global sections: their product is a nonzero scalar, since neither section vanishes at the generic point, so they are mutually inverse up to that scalar. On each affine neighbourhood in $Z$, [F3] represents the two cohomologies by complexes $K$ and $K'$ in degrees at least zero, with finite free terms after shrinking. Consequently $h^0(M_t)=\dim\ker(d^0_K\otimes\kappa(t))$. The condition that this dimension is at least one is the closed determinantal condition $\operatorname{rank}(d^0_K\otimes\kappa(t))\le\operatorname{rank}K^0-1$; the analogous condition for $K'$ is also closed. Their intersection is $T$, so these local descriptions prove the claim globally. The given fibre shows $T\ne\varnothing$. [F2, F3, step 1.1, algebra]

3.1 Fix $t\in T$, let $(R,\mathfrak m)=\mathcal O_{Z,t}$ and $\kappa=R/\mathfrak m$, and put $R_r=R/\mathfrak m^r$. We prove $M$ trivial on $X_{R_r}$ for every $r\ge1$. The case $r=1$ is the definition of $T$. If a trivialization exists at $r$, choose affine local frames at $r+1$ lifting it. Their transitions lie in $1+\mathcal O_{X_\kappa}\otimes_\kappa I_r$, where $I_r=\mathfrak m^r/\mathfrak m^{r+1}$ and $I_r^2=0$. Multiplication of these units adds their coefficients; the obstruction to changing frames to agreeing frames is therefore their Čech class in $H^1(X_\kappa,\mathcal O)\otimes_\kappa I_r$. Its restrictions to both axes vanish, since $M$ is trivial there. The possible change of an axis trivialization is multiplication by a unit of $R_r$ by step 1.1, and every such unit lifts to $R_{r+1}$; thus it does not change this vanishing assertion. The injectivity established in step 1.1, tensored with the vector space $I_r$, makes the obstruction zero. Changing frames by a Čech coboundary gives a trivialization at $r+1$. Normalize every trivializing section to value $1$ at $(e,e)$ using a fixed frame of $M$ along this section of $p$; this frame exists because of the axis triviality. Global functions on $X_{R_r}$ are $R_r$ by step 1.1, so the normalized trivializing section is unique. The sections just constructed are consequently compatible as $r$ varies. [F2, step 1.1, step 2.1, construct, algebra]

4.1 Apply [F3] over $R$ and write $K$ for the finite projective complex for $M$. Its nonnegative degrees give $H^0(K\otimes R_r)=\ker(K^0\otimes R_r\to K^1\otimes R_r)$. Taking inverse limits, which commute with kernels, turns the compatible sections of step 3.1 into an element of $H^0(K\otimes\widehat R)$ whose residue is a generator of $H^0(M_t)$. Here finite projective modules commute with completion, since they are direct summands of finite free modules. Flatness in [F4] gives $H^0(K\otimes\widehat R)=H^0(K)\otimes_R\widehat R$, and $\widehat R/\mathfrak m\widehat R=\kappa$. Therefore the original map $H^0(K)\otimes_R\kappa\to H^0(M_t)$ is surjective. Localizing cohomology identifies it with the fibre map on an affine neighbourhood of $t$. By [F3] a section lifting this generator exists after shrinking that neighbourhood. The zero locus of this section in $X\times Z$ misses the entire fibre over $t$; its image is closed because $p$ is proper. Removing that image produces an open neighbourhood $U$ of $t$ on which the section nowhere vanishes, so $M|_{X\times U}$ is trivial. This proves $T$ open, with actual trivializations, including the infinitesimal parameter directions. [F3, F4, step 3.1, algebra]

5.1 Since $Z=A$ is connected, the nonempty open and closed subset $T$ is $Z$. The local trivializations in step 4.1 show $N=p_*M$ is invertible and the evaluation $p^*N\to M$ is an isomorphism: on each such $U$ both assertions reduce to $p_*\mathcal O=\mathcal O_U$ from step 1.1. Pulling back along $(e,e,\operatorname{id}_Z)$ identifies $N$ with the trivial sheaf, by the axis hypothesis. Thus $M$ is trivial. This proves the stated specialized see-saw and cube assertion without importing a Picard scheme or an unproved triviality-locus theorem. [F1, step 1.1, step 2.1, step 4.1]

6.1 For the displayed identity, take $M=m_{123}^*L\otimes m_1^*L\otimes m_2^*L\otimes m_3^*L\otimes m_{12}^*L^{-1}\otimes m_{13}^*L^{-1}\otimes m_{23}^*L^{-1}$. On each coordinate face with one coordinate equal to $e$, all nonconstant factors cancel. The remaining constant factor is $e^*L$, a one-dimensional $k$-vector space and hence a trivial invertible sheaf on that face. Thus step 5.1 applies with third-coordinate point $e$ and gives $M\cong\mathcal O_{A^3}$, equivalently the asserted identity. AC and DC enter through [F1]–[F4]; no characteristic restriction was used. [F1, step 5.1, algebra] ∎
