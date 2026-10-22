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

[F1] [[lem-conway-knot-alexander-polynomial-one]] states $\Delta_C(t)=1$;
its matrix realization remains escalated.

[A2] **Planned Freedman interface only:** the direct dependency
`thm-alexander-polynomial-one-implies-topologically-slice` is intended to state
that an oriented knot with normalized Alexander polynomial one bounds a
locally flat proper disk in standard $B^4$. Its item carrier and proof are
currently absent; no supplier statement or proof is quoted here.

[F2] [[def-locally-flat-proper-surface-and-concordance-collars]]: a locally
flat proper disk is a locally flat embedded disk whose boundary is the knot
and whose boundary collar is standard.

[F3] [[thm-knot-slice-iff-zero-trace-embeds-in-s-four]]: smooth sliceness is
equivalent to smooth embeddability of the zero-trace in standard $S^4$.

[F4] [[thm-piccirillo-conway-trace-partner-has-s-two]]: the intended partner
has the same zero-trace as $C$ and $s(K_P)=2$; its diagram and Lee computation
are escalated.

[F5] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]]: under countable choice,
$|s(K)|\le 2g_4^{\mathrm{sm}}(K)$ for every smooth oriented knot $K$. Its
current proof inherits an unresolved Lee-cobordism gap.

## Proof

**Proof technique:** direct, conditional on the explicitly identified
unresolved suppliers.

1.1 By [F1] and the planned interface [A2], the normalized Alexander
polynomial of $C$ is one and therefore $C$ bounds a locally flat proper disk in
standard $B^4$. This proves the topological-sliceness half conditional on the
missing Freedman supplier. [A1, F1, A2, F2, algebra]

2.1 Suppose, for contradiction, that $C$ bounds a smooth proper disk. By [F3],
$X_0(C)$ then smoothly embeds in $S^4$. [F3, given, contradiction]

2.2 The trace diffeomorphism in [F4] carries this embedding to a smooth
embedding of $X_0(K_P)$. Applying [F3] to $K_P$ shows that $K_P$ is smoothly
slice. [F3, F4, step 2.1, construct]

3.1 Smooth sliceness gives $g_4^{\mathrm{sm}}(K_P)=0$. By [F4],
$s(K_P)=2$, while [F5] gives $|s(K_P)|\le 2g_4^{\mathrm{sm}}(K_P)=0$.
This contradicts $|2|=2$. Therefore $C$ is not smoothly slice. [A1, L1, F4,
F5, step 2.2, algebra, contradiction]

4.1 Step 1.1 gives a locally flat disk and step 3.1 rules out every smooth
proper disk, proving the two conclusions together, conditional on the supplier
checks recorded above. [step 1.1, step 3.1, construct] ∎

## Escalated proof obligation

The topological supplier `thm-alexander-polynomial-one-implies-topologically-slice`
has no current item carrier (batch 78). The local Alexander calculation,
Piccirillo diagram bridge, Lee computation, and Rasmussen genus-bound supplier
are also not readiness-closed. This item preserves the full claim and proof
route but is not marked ready.
