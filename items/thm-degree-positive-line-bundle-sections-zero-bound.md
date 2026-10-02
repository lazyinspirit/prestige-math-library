---
id: thm-degree-positive-line-bundle-sections-zero-bound
kind: theorem
title: "Negative-degree line bundles have no nonzero sections"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-degree-descends-picard-curve
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-degree-effective-divisor-nonnegative
  - lem-effective-divisors-sections-mod-scalars
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-line-bundle-rational-section-cartier-divisor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice. It supplies Dependent Choice by
[[thm-choice-implies-dependent-implies-countable-choice]] for the curve
Cartier-to-Weil interface. Let $C$ be a smooth proper geometrically integral
curve over a field $k$ and let $\mathcal L$ be an invertible sheaf on $C$ whose degree
$\deg(\mathcal L)$ is represented by $\deg_k(D)$ for any divisor $D$ with
$\mathcal L\cong\mathcal O_C(D)$. If $\deg(\mathcal L)<0$ then
$H^0(C,\mathcal L)=0$. Consequently a line bundle with a nonzero global
section has nonnegative degree.

**Current supplier interfaces.** Under AC,
[[cor-degree-descends-picard-curve]] defines the degree of an invertible
sheaf through its Picard class. The current
[[thm-line-bundle-rational-section-cartier-divisor]] body associates to a
nonzero rational section $s$ the Cartier divisor $D_s=\operatorname{div}_C(s)$
and an isomorphism $\mathcal O_C(D_s)\cong\mathcal L$ carrying its canonical
section to $s$; [[def-effective-cartier-divisor]] characterizes when this
section divisor is effective, and
[[def-invertible-sheaf-of-cartier-divisor]] gives the associated invertible
sheaf. The actual passage to the finite closed-point divisor and its
coefficientwise effectivity uses
[[thm-cartier-weil-divisors-curves-agree]], whose AC premise supplies its
Dependent Choice premise. These current interfaces support the proof below.

## Facts & Assumptions

**Given:** A smooth proper geometrically integral curve $C$ over a field $k$, an invertible sheaf $\mathcal L$ on $C$ with degree $\deg(\mathcal L)$ defined as $\deg_k(D)$ for any divisor $D$ with $\mathcal L\cong\mathcal O_C(D)$, and the Axiom of Choice.

[F1] A divisor on $C$ is a finite formal $\mathbb Z$-linear combination $D=\sum_xn_x[x]$ of closed points; its degree is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, the residue field of a closed point being a finite extension of $k$; and $\deg_k$ is additive. ([[def-divisor-smooth-proper-curve]], [[def-algebraic-curve-over-field]])

[F2] For an effective divisor $D$ on the proper geometrically integral curve $C$ the degree $\deg_k(D)=\sum_xn_x[\kappa(x):k]$ is nonnegative, and it vanishes only for $D=0$; equivalently, sufficiently, the degree of an effective divisor is at least $0$. ([[lem-degree-effective-divisor-nonnegative]])

[F3] Under the Axiom of Choice, the current supplier [[cor-degree-descends-picard-curve]] defines $\deg(\mathcal L)$ through the Picard class of an invertible sheaf. For a nonzero rational section $s$ of $\mathcal L$, [[thm-line-bundle-rational-section-cartier-divisor]] supplies the Cartier divisor $D_s=\operatorname{div}_C(s)$ and an isomorphism $\mathcal O_C(D_s)\cong\mathcal L$; a global section has effective $D_s$ by [[def-effective-cartier-divisor]]. The associated sheaf $\mathcal O_C(D_s)$ is given by [[def-invertible-sheaf-of-cartier-divisor]]. ([[cor-degree-descends-picard-curve]], [[def-invertible-sheaf-of-cartier-divisor]], [[def-effective-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]])

[F4] In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]]. Under AC and this DC premise, the current [[thm-cartier-weil-divisors-curves-agree]] body identifies Cartier divisors with finite closed-point Weil divisors and preserves principal divisors. In particular an effective Cartier divisor is an effective divisor in the sense of [F1] and conversely. ([[thm-cartier-weil-divisors-curves-agree]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-divisor-smooth-proper-curve]])

## Proof

**Proof technique:** direct; a nonzero global section would exhibit the bundle as the sheaf of an effective divisor, whose degree is nonnegative, contradicting the negative degree hypothesis.

1.1 A nonzero section gives an effective divisor. Assume that $\deg(\mathcal L)<0$ and that $H^0(C,\mathcal L)\neq0$, and choose a nonzero global section $s\in H^0(C,\mathcal L)$; it is a nonzero rational section. By [F3], the section $s$ determines the effective Cartier divisor $D_s=\operatorname{div}_C(s)$ with $\mathcal O_C(D_s)\cong\mathcal L$, and by [F4] this Cartier divisor is the effective Weil divisor $D_s=\sum_xn_x[x]$ with $n_x\ge0$ on $C$. [F3, F4]

2.1 Degree contradiction. By the definition of the degree in the hypothesis of the Statement and the isomorphism $\mathcal O_C(D_s)\cong\mathcal L$ of step 1.1, $\deg(\mathcal L)=\deg_k(D_s)$; by [F2] applied to the effective divisor $D_s$ of step 1.1 this degree is nonnegative, in contradiction with $\deg(\mathcal L)<0$. Hence no nonzero global section exists and $H^0(C,\mathcal L)=0$. [F1, F2, step 1.1]

3.1 The consequence. Conversely, if $\mathcal L$ has a nonzero global section, the argument of steps 1.1 and 2.1 — which derives a contradiction from $\deg(\mathcal L)<0$ — shows that $\deg(\mathcal L)\ge0$; this is the second assertion. AC is used through the degree homomorphism [F3] and through the Cartier-to-Weil route [F4], with AC supplying DC as stated there. The section-divisor interface used at step 1.1 is the current supplier in [F3]. [F2, F3, F4, step 1.1, step 2.1] ∎
