---
id: fs-torsion-free-modules-over-pids-are-free-without-finite-generation
kind: false-statement
title: "FALSE: every torsion-free module over a PID is free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilator-and-torsion-of-a-module, def-generated-cyclic-finitely-generated-and-free-modules, thm-rat-field, cor-finitely-generated-torsion-free-modules-over-a-pid-are-free, thm-int-comm-ring, lem-int-cancellation, lem-subgroups-of-z-are-cyclic, def-principal-ideal-domain]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, warning after Corollary 2.6"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every torsion-free module over a principal ideal domain is free, without a finite-generation hypothesis.

## Facts & Assumptions

**Given:** The rational field $\mathbb Q$ ([[thm-rat-field]]), bases and free modules ([[def-generated-cyclic-finitely-generated-and-free-modules]]), the integer ring and cancellation law ([[thm-int-comm-ring]], [[lem-int-cancellation]]), the fact that every additive subgroup of $\mathbb Z$ is cyclic ([[lem-subgroups-of-z-are-cyclic]]), the PID definition ([[def-principal-ideal-domain]]), and the valid finitely generated theorem [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]. These integer facts show that $\mathbb Z$ is a PID.

[F1] A module is torsion-free when its torsion subset is $\{0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

## Refutation

**Proof technique:** contradiction.

1.1 Under the usual integer action, $\mathbb Q$ is a $\mathbb Z$-module. If $nq=0$ with $n\ne0$, field cancellation gives $q=0$, so it is torsion-free by [F1]. [F1, algebra]

2.1 Suppose, for contradiction, that $\mathbb Q$ has a $\mathbb Z$-basis $B$. It cannot be empty because $\mathbb Q\ne0$, so choose $b\in B$. Express $b/2$ as a finite integer linear combination of basis elements and multiply by $2$. Uniqueness of basis coordinates would make the coefficient of $b$ simultaneously $1$ and an even integer, which is impossible. [step 1.1, assume-contra, choose, algebra]

3.1 Step 2.1 rules out every nonempty basis, and the empty basis cannot span the nonzero module. Thus $\mathbb Q$ is torsion-free over the PID $\mathbb Z$ but is not free; finite generation is essential. [step 2.1, discharge-contradiction] ∎
