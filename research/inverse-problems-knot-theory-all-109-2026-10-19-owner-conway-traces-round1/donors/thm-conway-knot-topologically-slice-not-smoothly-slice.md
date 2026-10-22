---
id: thm-conway-knot-topologically-slice-not-smoothly-slice
kind: theorem
title: "The Conway knot is topologically slice but not smoothly slice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-piccirillo-conway-pair
  - lem-conway-knot-alexander-polynomial-one
  - thm-alexander-polynomial-one-implies-topologically-slice
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-knot-slice-iff-zero-trace-embeds-in-s-four
  - lem-conway-has-an-explicit-zero-trace-partner-with-s-two
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
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Theorem 1.1 and the full proof in §§2–3, printed pp. 582–587 (PDF pp. 1–6)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§§2–3, trace strategy and Freedman context"
    - title: "Freedman and Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf"
      locator: "Theorem 11.11 and complete proof, reformatted PDF pp. 286–288"
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

[L1] AC supplies countable choice through
[[thm-choice-implies-dependent-implies-countable-choice]], which is used by
the handle and Lee branches.

[F1] [[lem-conway-knot-alexander-polynomial-one]] gives the actual normalized equality $\Delta_C(t)=1$.

[F2] [[thm-alexander-polynomial-one-implies-topologically-slice]]: under full AC, every smooth oriented Alexander-one knot bounds a locally flat proper disk in standard $B^4$. This is its smooth-input application; no broader TOP-generic disk-embedding assertion is used.

[F3] [[def-locally-flat-proper-surface-and-concordance-collars]] fixes the proper local-flatness and boundary-collar conclusion.

[F4] [[thm-knot-slice-iff-zero-trace-embeds-in-s-four]]: a smooth knot is smoothly slice if and only if its zero-trace smoothly embeds in standard $S^4$.

[F5] [[lem-conway-has-an-explicit-zero-trace-partner-with-s-two]] supplies its explicitly specified alternate knot $Q$, the actual framed diffeomorphism $X_0(C)\cong X_0(Q)$, and $s(Q)=2$.

[F6] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]]: under countable choice, $|s(K)|\le2g_4^{\mathrm{sm}}(K)$, with its collared properly embedded cobordism hypotheses satisfied by an actual smooth slice disk.

## Proof

1.1 By [A1] and [F1], the smooth oriented Conway knot has Alexander polynomial one. Apply [F2] to this actual knot, and use [F3] for the boundary convention. This gives a locally flat proper disk in the standard $B^4$. [A1, F1, F2, F3, construct]

1.2 Suppose $C$ bounded a smooth proper disk. By [L1] and [F4], its zero-trace would smoothly embed in standard $S^4$. Compose this embedding with the actual trace diffeomorphism in [F5] to embed $X_0(Q)$, and apply [F4] to obtain a smooth proper slice disk for $Q$. [A1, L1, F4, F5, given, contradiction, construct]

2.1 That disk gives $g_4^{\mathrm{sm}}(Q)=0$. But [F5] gives $s(Q)=2$, whereas [F6] gives $2=|s(Q)|\le2g_4^{\mathrm{sm}}(Q)=0$, a contradiction. Hence $C$ bounds no smooth proper disk in standard $B^4$. [A1, L1, F5, F6, step 1.2, algebra, contradiction]

3.1 Steps 1.1 and 2.1 establish the two conclusions of the unchanged Statement. The nonsmooth branch uses the explicitly constructed alternate $Q$; it does not require an isotopy from $Q$ to the separately specified Figure 2 partner. [step 1.1, step 2.1, construct] ∎
