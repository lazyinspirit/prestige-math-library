---
id: lem-arith-connected-smooth-quasiprojective-model-proper-special-fibre
kind: lemma
title: "Connected smooth quasiprojective model with proper special fibre is proper"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-dvr-is-a-pid
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-schematic-closure-and-dense-agreement
  - thm-flatness-of-noetherian-completion
  - thm-global-functions-proper-integral-variety
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - thm-properness-descent-fpqc
  - lem-arith-group-model-with-abelian-generic-fibre-quasiprojective
  - thm-completion-as-extension-of-scalars
  - thm-faithfully-flat-ring-map-characterisations
  - lem-proper-source-to-separated-target-proper
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 6.5 and EGA IV3 15.7.10 (properness from the special fibre); local proof in owner-arithmetic-models/neron-source/closure-supplement.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $R$ be a discrete valuation ring and let $G$ be a smooth separated finite-type quasi-projective $R$-scheme whose generic fibre is an abelian variety. If the special fibre $G_k$ is proper and geometrically connected, then $G$ is proper over $R$. Applied to the connected identity model of a smooth group scheme with abelian generic fibre, $G$ becomes an abelian scheme.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with residue field $k$, uniformizer $t$, and a smooth separated finite-type quasi-projective $R$-scheme $G$ with abelian generic fibre and proper geometrically connected special fibre.

[F1] The quasi-projective identity model with abelian generic fibre is [[lem-arith-group-model-with-abelian-generic-fibre-quasiprojective]]; schematic closures are contracted from the generic fibre, and a smooth scheme is flat hence schematically dense ([[lem-schematic-closure-and-dense-agreement]], [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]], [[cor-dvr-is-a-pid]]).

[F2] The perfect-complex machinery for a proper flat finitely presented morphism: the cohomology of $\mathcal O$ is computed by a bounded finite projective complex concentrated in degrees $\ge0$, with naturality in base algebras ([[lem-proper-flat-fp-cohomology-perfect-complex]]); Noetherian completion is flat and faithfully flat, and properness descends along faithfully flat maps ([[thm-flatness-of-noetherian-completion]], [[thm-completion-as-extension-of-scalars]], [[thm-faithfully-flat-ring-map-characterisations]], [[thm-properness-descent-fpqc]]); a morphism from a proper source to a separated target is proper ([[lem-proper-source-to-separated-target-proper]]), and proper integral fibres have constant functions ([[thm-global-functions-proper-integral-variety]], [[lem-projective-coherent-cohomology-finite-and-vanishing]]).

## Proof

**Proof technique:** direct: prove properness over the completion by a connectedness/idempotent argument on the projective closure, then descend to $R$.

1.1 Properness descends along the faithfully flat completion $R\to\hat R$ by [F2], so it suffices to treat a complete DVR. In that case view $G$ as an open subscheme of its projective schematic closure $X$ in $\mathbf P^m_R$ by [F1]; the closure is $t$-torsion-free on coordinate charts because its ideal is contracted from the generic fibre, so $X$ is flat over $R$, and $X_K=G_K$ because the generic fibre $G_K$ is proper, hence closed in projective space. The finite $R$-module $H^0(X,\mathcal O_X)$ injects into $H^0(X_K,\mathcal O)=K$ by flatness, and every element is integral over the integrally closed ring $R$, so $H^0(X,\mathcal O_X)=R$. [F1, F2, given, algebra]

2.1 If $X_k$ were disconnected, a nontrivial clopen partition would define compatible idempotents $e_n\in H^0(X_n,\mathcal O)$ on the nilpotent thickenings $X_n=X\times_RR/t^{n+1}$, which share the same underlying space. Applying the finite projective complex of [F2] to the proper flat $X$ and $\mathcal O_X$ gives $H^0(X_n,\mathcal O)=\ker(C_0/t^{n+1}\to C_1/t^{n+1})$; finite projective modules over complete $R$ are complete and inverse limits preserve kernels, so $\varprojlim H^0(X_n,\mathcal O)=\ker(C_0\to C_1)=H^0(X,\mathcal O)=R$. The compatible idempotents would therefore produce a nontrivial idempotent in $R$, impossible; hence $X_k$ is connected. [F2, step 1.1, algebra]

3.1 The open immersion $G_k\to X_k$ has proper source and separated target, hence is proper by [F2], so its image is closed and open and nonempty in the connected $X_k$; it is therefore all of $X_k$, and $G_k\to X_k$ is an isomorphism. Since the generic fibres already coincide, the closed complement $X\setminus G$ has empty fibres over both points of $\operatorname{Spec}R$, hence is empty and $G=X$ is proper over $R$. [F2, step 2.1, algebra]

4.1 Applied to the identity component $G=H^0$ of a smooth separated finite-type $R$-group scheme $H$ with abelian generic fibre: $H^0$ is quasi-projective ([[lem-arith-group-model-with-abelian-generic-fibre-quasiprojective]]), smooth separated finite type with geometrically connected fibres, so if its special fibre is proper then $G$ is proper by steps 1.1 and 2.1 and is an abelian scheme over $R$. This lemma does not claim that arbitrary smooth connected group models are quasi-projective, and the argument retains the AC and DC assumptions of the perfect-complex supplier. [F1, F2, step 3.1, algebra] ∎ 