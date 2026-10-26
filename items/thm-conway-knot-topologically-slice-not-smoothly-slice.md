---
id: thm-conway-knot-topologically-slice-not-smoothly-slice
kind: theorem
title: "The Conway knot is topologically slice but not smoothly slice"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-piccirillo-conway-pair
  - lem-conway-knot-alexander-polynomial-one
  - thm-alexander-polynomial-one-implies-topologically-slice
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-knot-slice-iff-zero-trace-embeds-in-s-four
  - thm-piccirillo-conway-trace-partner-has-s-two
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Theorem 1.1 (arXiv v1 PDF p. 2); trace construction in §3 and proof of nonsliceness in §4 (PDF pp. 4–6)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§§2–3, trace strategy and Freedman context"
    - title: "Freedman and Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf"
      locator: "§11.9, Theorem 11.11 and proof, reformatted PDF pp. 238–239 (printed pp. 224–225); the Z-slice criterion in a contractible 4-manifold"
---

## Statement

Assume the Axiom of Choice. The Conway knot $C$ bounds a locally flat proper
disk in the standard $B^4$, but it bounds no smooth proper disk there.

## Statement references

[Piccirillo, Theorem 1.1](https://arxiv.org/pdf/1808.02923)

[Hom, §§2–3](https://arxiv.org/pdf/2107.09171)

[Freedman–Quinn, Theorem 11.11](https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf)

## Facts & Assumptions

**Given:** Full AC and the Conway knot $C$ fixed above.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[L1] AC supplies countable choice through [[thm-choice-implies-dependent-implies-countable-choice]], which is used by the handle and Lee branches.

[F1] [[lem-conway-knot-alexander-polynomial-one]] gives the actual normalized equality $\Delta_C(t)=1$.

[F2] [[thm-alexander-polynomial-one-implies-topologically-slice]]: under full AC, every smooth oriented Alexander-one knot bounds a locally flat proper disk in standard $B^4$. This is its smooth-input application; no broader TOP-generic disk-embedding assertion is used.

[F3] [[def-locally-flat-proper-surface-and-concordance-collars]] fixes the proper local-flatness and boundary-collar conclusion.

[F4] [[thm-knot-slice-iff-zero-trace-embeds-in-s-four]]: a smooth knot is smoothly slice if and only if its zero-trace smoothly embeds in standard $S^4$.

[F5] [[thm-piccirillo-conway-trace-partner-has-s-two]]: under full AC, the [Figure 2](https://arxiv.org/pdf/1808.02923#page=3) partner $K_P$ has $X_0(C)\cong X_0(K_P)$ and $s(K_P)=2$.

[F6] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]]: under countable choice, $|s(K)|\le2g_4^{\mathrm{sm}}(K)$, with its collared properly embedded cobordism hypotheses satisfied by an actual smooth slice disk.

## Proof

1.1 By [A1] and [F1], the smooth oriented Conway knot has Alexander polynomial one. Apply [F2] to this actual knot, and use [F3] for the boundary convention. This gives a locally flat proper disk in the standard $B^4$. [A1, F1, F2, F3, construct]

1.2 Suppose $C$ bounded a smooth proper disk. By [L1] and [F4], its zero-trace would smoothly embed in standard $S^4$. Compose this embedding with the actual trace diffeomorphism in [F5] to embed $X_0(K_P)$, and apply [F4] to obtain a smooth proper slice disk for $K_P$. [A1, L1, F4, F5, given, contradiction, construct]

2.1 That disk gives $g_4^{\mathrm{sm}}(K_P)=0$. But [F5] gives $s(K_P)=2$, whereas [F6] gives $2=|s(K_P)|\le2g_4^{\mathrm{sm}}(K_P)=0$, a contradiction. Hence $C$ bounds no smooth proper disk in standard $B^4$. [A1, L1, F5, F6, step 1.2, algebra, contradiction]

3.1 Steps 1.1 and 2.1 establish the two conclusions of the unchanged Statement using the [Figure 2](https://arxiv.org/pdf/1808.02923#page=3) partner fixed in the assigned Definition. [step 1.1, step 2.1, construct] ∎
