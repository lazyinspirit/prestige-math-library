---
id: lem-smooth-proper-complete-dvr-geometric-generic-connectedness
kind: lemma
title: "A connected special étale cover stays connected on the geometric generic fibre"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-connected-space
  - thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - cor-complete-separated-adic-pair-henselian
  - cor-idempotents-lift-uniquely-in-a-henselian-pair
  - thm-structure-theorem-for-artinian-rings
  - thm-completion-as-extension-of-scalars
  - thm-regular-local-rings-are-normal
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-30.md"
      - "research/frontier-38-owner-30-alpha-batch-30-5a.md"
      - "research/frontier-38-owner-30-step5-hash-30-post.json"
    reviewed_raw_sha256: "5f4edb8b2fb590dd2b042e8b3979d5906581285138460e4e54a5480eeba81d9c"
    content_sha256: "60503f3b4361d25699519ffa29b503281a96e1786e294f01ebffd4dcbd51f7cb"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X §§2–3, Theorem 3.8 and Corollary 3.9"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes §§16 and 30, Lemma 16.4 and Theorem 30.3"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC. Let $R$ be a complete Noetherian DVR with algebraically closed residue field $k$, fraction field $K$ and algebraic closure $\bar K$. Let $X/R$ be smooth proper with geometrically connected nonempty fibres. If $Y\to X$ is finite étale and $Y_k$ is connected, then $Y_{\bar K}$ is connected. Consequently the map from the geometric generic fibre fundamental group to $\pi_1^{\mathrm{et}}(X)$ is surjective; via the closed-fibre cover equivalence and chosen basepoint paths, this is a surjective specialization map to $\pi_1^{\mathrm{et}}(X_k)$.

## Facts & Assumptions

**Given:** AC, $R$, $X$, $Y$ and the fields in the Statement.

[F1] Smooth proper total spaces over a DVR and their closed fibres are regular, as proved in the regularity argument of [[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]]. Finite étale covers are likewise smooth proper over the trait, and closed-fibre restriction is an equivalence there.

[F2] Separable normalization of a normal Noetherian domain is finite; a one-dimensional normal Noetherian local domain is a DVR ([[thm-finite-integral-closure-in-a-finite-separable-extension]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]). A complete adic pair is henselian and its idempotents lift uniquely ([[cor-complete-separated-adic-pair-henselian]], [[cor-idempotents-lift-uniquely-in-a-henselian-pair]]). Artinian rings decompose into local factors, and finite modules over a complete Noetherian local ring are complete ([[thm-structure-theorem-for-artinian-rings]], [[thm-completion-as-extension-of-scalars]]).

[F3] The empty space is connected under [[def-connected-space]]. Finite étale covers have the explicit profinite-set classification of [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]. Regular schemes are normal with disjoint integral components ([[thm-regular-local-rings-are-normal]]). AC is inherited through [F1]–[F3], including the compactness step in [F3] ([[def-axiom-of-choice]]).

## Proof

1.1 If $Y_k$ is empty, properness forces $Y$ to be empty: a nonempty closed image in the local trait would contain its closed point. Its geometric generic fibre is then empty and hence connected under the library convention. Assume now that $Y_k$ is nonempty. For any finite separable extension $L/K$, its integral closure $R'$ over $R$ is finite by [F2]. It is complete and semilocal, with $R'/tR'$ Artinian. If it had two local factors, their nontrivial idempotent would lift by henselianity in [F2], contradicting the fact that $R'$ is a domain. Thus it is local, normal and one-dimensional, hence a complete DVR by [F2]. Its residue field is a finite extension of algebraically closed $k$, so is $k$. The special fibre of $Y_{R'}$ is therefore $Y_k$ and is connected. Any open and closed decomposition of proper $Y_{R'}$ would give two nonempty closed images in the local trait, each meeting its closed point, contradicting that connected special fibre. Hence the total space is connected. It is regular by [F1], thus integral by [F3], and its generic fibre $Y_L$ is connected. [F1, F2, F3, construct]

2.1 If $Y_{\bar K}$ were disconnected, its open and closed decomposition would be witnessed by a nontrivial idempotent in its global function sheaf. This finite datum descends to a finite field extension: take a finite affine cover of $Y_K$ and finite affine covers of its intersections, write the idempotent as local ring elements with their equalities, and put the finitely many coefficients occurring in those elements and relations in a finite extension $L/K$. The equations $e^2=e$, agreement on overlaps and nontriviality then hold after a sufficiently large finite extension; nontriviality is detected by faithful field base change. The algebraic closure is the union of its finite extensions. Purely inseparable finite extensions preserve the underlying topology: their affine tensor spectra have unique radicial points over each residue-field point, and the extension is integral and surjective. Thus disconnectedness already occurs after the separable part of a finite extension, contradicting step 1.1. Therefore $Y_{\bar K}$ is connected. [step 1.1, construct]

3.1 By [F1], every connected finite étale cover of $X$ has connected closed fibre, since a disconnected closed cover would lift its open and closed components to a decomposition upstairs. Step 2.1 therefore preserves every connected cover on the geometric generic fibre. By [F3] this makes the induced homomorphism of profinite groups surjective: otherwise its compact image $H$ is a proper closed subgroup, and some finite quotient $G/N$ has $HN\ne G$. The corresponding connected cover with regular transitive fibre $G/N$ becomes disconnected when restricted to $H$, contradicting the just-proved connectedness. Finally [F1]'s cover equivalence identifies $\pi_1(X)$ with $\pi_1(X_k)$ after selecting a path between the two fibre functors. Such a path exists by taking compatible points of the second fibre functor on the pointed Galois system in [F3]; its transition maps are surjective and its finite inverse limit is nonempty by the compactness step there. Different basepoint paths conjugate the target identification. This yields the asserted specialization surjection. [F1, F3, step 2.1, construct] ∎
