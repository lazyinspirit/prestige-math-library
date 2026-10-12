---
id: lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions
kind: lemma
title: Bounded fibrewise-soft resolutions from an all-sheaf dimension bound
status: draft
origin: pipeline
deps:
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology
- lem-ringed-space-module-sheaves-enough-injectives
- lem-extension-by-zero-short-exact-sequence
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC. Let $f:X\to Y$ be continuous between locally compact Hausdorff spaces. Suppose one integer $d$ bounds $H^q_c(V,F)=0$ for all $q>d$, every open $V$ in every fibre and every $k$-sheaf $F$ on $V$. Every $k$-sheaf on $X$, and every bounded complex, has a bounded resolution whose terms restrict to c-soft sheaves on every fibre. In particular $k_X$ has a length-$d$ such resolution. Finite triangulations of fibre compactifications of dimension at most $d$ imply the hypothesis by the preceding all-sheaf dimension theorem.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-c-soft-field-sheaves-are-compact-support-acyclic]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology]] is used with its stated hypotheses.

[F3] The exact supplier [[lem-ringed-space-module-sheaves-enough-injectives]] is used with its stated hypotheses.

[F4] The exact supplier [[lem-extension-by-zero-short-exact-sequence]] is used with its stated hypotheses.

[F5] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

## Proof

1.1 **Given:** f:X→Y, with each fibre locally compact Hausdorff, and a uniform integer d bounding H^q_c(V,F)=0 for q>d for every open V in every fibre and every k-sheaf F on V. The topology supplier must establish this using actual finite triangulations/covering dimension; constructible cochain finiteness alone does not meet this hypothesis. [given, construct, algebra]

2.1 Resolve any k-sheaf A on X by global injectives. Their restrictions to each closed fibre are c-soft by the c-soft lemma. For the cokernel Q after d steps, dimension shifting on every fibre-open V gives H^q_c(V,Q|V)=H^{q+d}_c(V,A|V)=0 for q>0. A sheaf E on a locally compact Hausdorff space with H^1_c(V,E)=0 for every open V is c-soft: take compact K⊂V with compact closure, use the sheaf-exact sequence j!E|V\K→E|V→i*E|K→0. The compact-support long exact sequence and H^1_c(V\K,E)=0 lift every section on K to a compactly supported section on V. The exact sequence is stalkwise exact. Thus Q restricted to each fibre is c-soft. Truncating the resolution at Q gives a length-d resolution by fibrewise-c-soft sheaves. The same applies to k_X and gives the finite K used below. On a bounded complex, totalize such resolutions; the bounded number of resolution columns ensures there is no infinite-diagonal convergence issue. [given, construct, algebra] ∎

