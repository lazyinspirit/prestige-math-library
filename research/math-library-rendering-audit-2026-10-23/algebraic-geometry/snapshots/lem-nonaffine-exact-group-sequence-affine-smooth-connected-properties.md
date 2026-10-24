---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"d7b189b8d8787450ff0b79d6d8733975b9af6a2e920f562577933298535917e7","evidence":["research/frontier-38-owner-30-reader-24.md","research/frontier-38-owner-30-reader-findings-24.json","research/frontier-38-owner-30-dispatch/reader-reader-24.result.json","research/frontier-38-owner-30-alpha-batch-24-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u24.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u24.result.json"],"historical_binding":{"preguard_raw_sha256":"17c90efbc99055ecf08901683c369f7321f7e13cb9de56b2ef15a605ff575f23","preguard_content_sha256":"3449f903aef3f58e7e3fbcec4ec4dbccef16e3fbd499aa1c416507775a653ca7","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u24.log","line":11661},"postguard_content_sha256":"fee861acfe40b773ff5f9817d57e5d315d493e7b044bcdc4ab7e70a57f5c194a","final_carrier":"git d90f26208:items/lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:35:18.339Z","local_repair_completed_at":"2026-10-03T16:02:03.951Z","local_repair_reason":"The cited algebra theorem only composes locally standard smooth maps; F3 supplied no bridge from the fibre definition. Replaced it by the published scheme theorem using that definition. Specified fibres over algebraic closures of residue fields and geometric-regularity descent, with explicit closure and rational-point suppliers. The torsor kernel pair proves affine transfer, faithful pullback proves geometric reducedness of Q, and open connected fibres prove connected transfer. Statement unchanged.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
id: lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
kind: lemma
title: "Affine smooth and connected properties in exact sequences of algebraic groups"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-connected-group-geometrically-connected, lem-nonaffine-affine-and-finite-morphism-fppf-descent, thm-flat-finite-presentation-is-open, def-smooth-morphism-schemes, thm-smooth-morphisms-stable-base-change-composition, thm-nonaffine-affine-normal-group-quotient-affine, lem-ag-geometric-regularity-field-tests, thm-existence-of-algebraic-closures, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.1 and references 1.62, 2.70, 5.29, 5.59, p.149"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Proposition 3.1.2"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Let $1\to N\to G\xrightarrow{q}Q\to1$ be an exact sequence of separated finite-type $k$-group schemes, meaning $q$ is faithfully flat of finite presentation and $N$ is its scheme-theoretic kernel. Then:

- if $N,Q$ are affine, smooth, or connected, respectively, so is $G$;
- if $G$ is affine, smooth, or connected, respectively, so is $Q$;
- if $N$ is affine, then $q$ is affine; if $N$ is smooth, then $q$ is smooth.

## Facts & Assumptions

[F1] Affineness descends under fppf base change; affine groups have affine normal quotients. ([[lem-nonaffine-affine-and-finite-morphism-fppf-descent]], [[thm-nonaffine-affine-normal-group-quotient-affine]])

[F2] Connected groups are geometrically connected; geometrically reduced finite-type groups are smooth. ([[lem-nonaffine-connected-group-geometrically-connected]])

[F3] Flat finite-presentation morphisms are open. Smoothness is flatness, local finite presentation, and geometrically regular fibres; smooth morphisms remain smooth under base change and composition, and geometric regularity descends under field extension. ([[thm-flat-finite-presentation-is-open]], [[def-smooth-morphism-schemes]], [[thm-smooth-morphisms-stable-base-change-composition]], [[lem-ag-geometric-regularity-field-tests]])

[F4] Algebraic closures exist under AC, and nonempty finite-type schemes over an algebraically closed field have rational closed points, by the maximal-ideal description in the weak Nullstellensatz. ([[thm-existence-of-algebraic-closures]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC and the exact sequence in the statement.

1.1 The morphism $(g,n)\mapsto(g,gn)$ is an isomorphism $G\times N\cong G\times_QG$; its inverse sends $(g,h)$ to $(g,g^{-1}h)$, which factors through the kernel by the group law. Thus base change of $q$ by itself is projection from $G\times N$. If $N$ is affine this projection is affine, and [F1] gives that $q$ is affine. If $Q$ also is affine, its inverse image $G$ is affine. Conversely if $G$ is affine, [F1] supplies affine $Q$; its exact quotient agrees with the represented normal quotient by the fppf lifting and kernel-pair identity just proved. [F1, given, algebra, construct]

2.1 For each $z\in Q$, choose an algebraic closure $\Omega$ of $\kappa(z)$ by [F4]. The nonempty finite-type fibre $G_z\times_{\kappa(z)}\Omega$ has an $\Omega$-point by [F4], and translation by it identifies that fibre with $N_\Omega$ using step 1.1. If $N$ is smooth, $N_\Omega$ is smooth by [F3]; hence its affine chart rings are geometrically regular. Field descent in [F3] makes $G_z$ geometrically regular over $\kappa(z)$. The given flatness and finite presentation of $q$ now make $q$ smooth by [F3]. If $Q$ is smooth too, composition in [F3] makes $G$ smooth. Conversely if $G$ is smooth, it is geometrically reduced. Faithful flat pullback injects the local coordinate sections of $Q$ into those of $G$, so every nilpotent section of the geometric $Q$ is zero. Thus $Q$ is geometrically reduced, and [F2] makes it smooth. [F2, F3, F4, step 1.1, algebra]

3.1 Surjectivity makes a quotient of connected $G$ connected. If both $N$ and $Q$ are connected, [F2] and the fibre identification in step 2.1 make every fibre of $q$ connected. For a decomposition of $G$ into two disjoint open-and-closed subsets, each connected fibre lies entirely in one; their images are disjoint opens in $Q$ by [F3] and cover $Q$. Connectedness of $Q$ forces one image empty and hence one original subset empty. Thus $G$ is connected. AC is inherited from [F1]–[F3]. [F1, F2, F3, step 2.1, algebra] ∎
