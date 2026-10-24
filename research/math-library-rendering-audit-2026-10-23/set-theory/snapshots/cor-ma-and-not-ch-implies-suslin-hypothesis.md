---
id: cor-ma-and-not-ch-implies-suslin-hypothesis
kind: corollary
title: "MA plus not CH implies SH"
status: published
origin: pipeline
deps: [def-martins-axiom, rem-continuum-hypothesis, def-aleph-and-beth-hierarchies, lem-cardinality-of-a-well-orderable-set, lem-cardinal-arithmetic-basic-laws, thm-cardinal-power-set-and-cantor, thm-ma-aleph-one-eliminates-suslin-trees, thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Section 7, Definition 7.1 and Proposition 7.4, printed pp. 34-35"
      url: https://karagila.org/files/Forcing-2023.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, Martin's Axiom together with the failure of the continuum hypothesis
implies the Suslin Hypothesis:

$$\mathrm{MA}+\neg\mathrm{CH}\quad\Longrightarrow\quad\mathrm{SH}.$$

## Facts & Assumptions

**Given:** ZFC, MA, and $\neg\mathrm{CH}$.

[F1] MA is the scheme $\mathrm{MA}(\kappa)$ for every infinite cardinal $\kappa<2^{\aleph_0}$. [[def-martins-axiom]]

[F2] CH says that there is no set $A$ with $\mathbb N\prec A\prec\mathcal P(\mathbb N)$. [[rem-continuum-hypothesis]]

[F3] Every well-orderable set has a cardinality equinumerous with it, and equinumerous well-orderable sets have equal cardinalities. [[lem-cardinality-of-a-well-orderable-set]]

[F4] For well-orderable sets $X,Y$, an injection $X\to Y$ implies $|X|\le |Y|$; for cardinals, $\kappa\le\lambda$ is equivalent to an injection $\kappa\to\lambda$. [[lem-cardinal-arithmetic-basic-laws]]

[F5] Under AC, $|\mathcal P(\mathbb N)|=2^{\aleph_0}$ and $\aleph_0<2^{\aleph_0}$. [[thm-cardinal-power-set-and-cantor]]

[F6] $\aleph_1=\aleph_0^+$ is the least cardinal strictly above $\aleph_0$. [[def-aleph-and-beth-hierarchies]]

[F7] $\mathrm{MA}(\aleph_1)$ implies that no Suslin tree exists. [[thm-ma-aleph-one-eliminates-suslin-trees]]

[F8] In ZFC, SH is equivalent to the nonexistence of a Suslin tree. [[thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras]]

[A1] AC well-orders the CH witness and its power-set bound, so their strict injection comparisons can be converted into cardinal inequalities. [[def-axiom-of-choice]]

## Proof

1.1 Since CH fails, negating F2 gives a set $A$ with $\mathbb N\prec A\prec\mathcal P(\mathbb N)$. By A1 all three sets are well-orderable. F3 and F4 turn the two injections into $\aleph_0\le |A|\le|\mathcal P(\mathbb N)|$. Both inequalities are strict: equality on the left would give $A\approx\mathbb N$ by F3, and equality on the right would give $A\approx\mathcal P(\mathbb N)$, contradicting the two strict comparisons that define the witness. With F5 this is $\aleph_0<|A|<2^{\aleph_0}$. [F2, F3, F4, F5, A1]

2.1 The middle term $|A|$ is a cardinal by F3. Since F6 makes $\aleph_1$ the least cardinal strictly above $\aleph_0$, step 1.1 gives $\aleph_1\le |A|<2^{\aleph_0}$, and hence $\aleph_1<2^{\aleph_0}$. [F3, F6, step 1.1]

3.1 The cardinal $\aleph_1$ is infinite, so F1 and step 2.1 instantiate the MA scheme at $\aleph_1$. Thus $\mathrm{MA}(\aleph_1)$ holds, and F7 implies that no Suslin tree exists. [F1, F7, step 2.1]

4.1 Apply the direction “no Suslin tree implies SH” of F8. This yields SH, as required. AC was used in step 1.1 to cardinalize the witness and is also propagated through F7 and F8; no choice-free conclusion is asserted. [F7, F8, A1, step 1.1, step 3.1] ∎
