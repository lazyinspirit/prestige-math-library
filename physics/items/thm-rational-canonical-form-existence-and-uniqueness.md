---
id: thm-rational-canonical-form-existence-and-uniqueness
kind: theorem
title: "Existence and uniqueness of rational canonical form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-factors-and-elementary-divisors-of-an-endomorphism, prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator, thm-invariant-factor-decomposition-over-a-pid, thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid, def-companion-matrix-of-a-monic-polynomial, thm-cyclic-subspace-power-basis-and-companion-matrix, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
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
    - title: "M. Brussel, Finitely Generated Modules over a PID, Theorem 7.2.1"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

Every square matrix over a field is similar to the unique rational canonical form determined by its invariant factors. If the monic invariant factors are $f_1\mid\cdots\mid f_r$, then

$$\operatorname{RCF}(T)=\operatorname{diag}(C(f_1),\ldots,C(f_r)).$$

In rational canonical form, the blocks are the companion matrices of the invariant factors. The zero-dimensional form and invariant-factor list are empty.

## Facts & Assumptions

**Given:** The invariant factors of an endomorphism from [[def-invariant-factors-and-elementary-divisors-of-an-endomorphism]], the torsion statement of [[prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator]], the companion convention of [[def-companion-matrix-of-a-monic-polynomial]], and similarity as change of basis ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

[L1] A finitely generated PID module is classified by its free rank together with its invariant factors, the latter unique up to associates in their divisibility order ([[thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid]]).

[L2] On the power basis of a cyclic subspace, multiplication by $x$ has the companion matrix with ones on the subdiagonal and the negative coefficients in the last column ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

[L3] Every finitely generated module over a PID $R$ is isomorphic to $R^s\oplus R/(a_1)\oplus\cdots\oplus R/(a_t)$ with each $a_i$ a nonzero nonunit and $a_1\mid\cdots\mid a_t$ ([[thm-invariant-factor-decomposition-over-a-pid]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L3] to the finitely generated torsion $F[x]$-module $V_T$. A free summand $F[x]^s$ with $s\ge1$ contains a nonzero element with zero annihilator, so torsion forces $s=0$, and $V_T\cong\bigoplus_{i=1}^rF[x]/(f_i)$ for monic nonconstant $f_1\mid\cdots\mid f_r$ after normalizing each generator to be monic. [L3, given]

2.1 In the power basis of each cyclic quotient, multiplication by $x$, hence the action of $T$, has companion matrix $C(f_i)$ by [L2]. Concatenating these bases gives the displayed block diagonal matrix and therefore a similarity from the original matrix to rational canonical form. [step 1.1, L2, construct]

3.1 By [L1], the monic invariant factors are unique; unit factors give zero modules and are omitted. Thus the ordered companion-block form is unique and determines the similarity class. Dimension zero has no summands and gives the empty matrix. [step 1.1, step 2.1, L1, discharge-construct] ∎
