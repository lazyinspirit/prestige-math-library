---
id: thm-primary-decomposition-and-elementary-divisor-form-over-a-pid
kind: theorem
title: "Primary decomposition and elementary-divisor form for finitely generated PID modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invariant-factor-decomposition-over-a-pid, thm-principal-ideal-domains-are-unique-factorisation-domains, lem-coprime-cyclic-pid-quotients-split, def-invariant-factors-and-elementary-divisors-of-a-pid-module, prop-torsion-and-primary-components-are-submodules-over-a-domain]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 3.5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

Let $M$ be finitely generated over a PID $R$. For each irreducible $p$, the $p$-primary component is a finite direct sum of modules $R/(p^e)$. A finitely generated torsion PID module is the direct sum of its prime-power cyclic elementary-divisor summands. In general,

$$M\cong R^r\oplus\bigoplus_p\bigoplus_jR/(p^{e_{p,j}}),$$

with only finitely many nonzero summands. Conversely, aligning the prime powers into divisibility columns reconstructs an invariant-factor decomposition.

## Facts & Assumptions

**Given:** The elementary-divisor convention of [[def-invariant-factors-and-elementary-divisors-of-a-pid-module]], the UFD property of a PID ([[thm-principal-ideal-domains-are-unique-factorisation-domains]]), and the fact that primary elements form submodules ([[prop-torsion-and-primary-components-are-submodules-over-a-domain]]).

[L1] Every finitely generated PID module is a finite free module direct-summed with cyclic torsion quotients ([[thm-invariant-factor-decomposition-over-a-pid]]).

[L2] Coprime cyclic quotients split by the Chinese remainder map ([[lem-coprime-cyclic-pid-quotients-split]]).

## Proof

**Proof technique:** constructive.

1.1 Take the invariant-factor decomposition from [L1]. Factor each nonunit $a_i$ uniquely up to associates as a finite product of powers of pairwise nonassociate irreducibles. The free part is kept separate, and no factorization is assigned to zero or to a unit. [L1, given]

2.1 The prime-power factors of one $a_i$ are pairwise coprime, so [L2] splits $R/(a_i)$ into the corresponding quotients $R/(p^e)$. Applying this to every invariant factor gives a finite elementary-divisor direct sum. [step 1.1, L2]

3.1 Grouping the summands by the associate class of $p$ gives exactly $M[p^\infty]$, because an element is killed by a power of $p$ precisely in those summands. Thus the torsion submodule is the direct sum of its primary components, each having the asserted form. [step 2.1, algebra]

4.1 Conversely, order the powers for each prime by exponent, align the largest powers in the last column, pad missing entries by units, and multiply down columns. Each column divides the next, and repeated use of [L2] recovers the original elementary-divisor sum. This constructs the invariant factors, including empty torsion data. [step 3.1, L2, construct, discharge-construct] ∎
