---
id: ex-complex-k-ahss-for-real-projective-space
kind: example
title: Complex K-AHSS for real projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, thm-multiplicative-ahss-for-a-multiplicative-generalized-theory, lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions, prop-ahss-collapse-determines-only-the-associated-graded-object, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.3, printed pp. 10–11"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.2.3, RP^n computation, printed pp. 10–11"
---

## Example

Assume AC. For $m\geq0$,
$$\widetilde K^0(\mathbb{RP}^{2m})\cong\mathbb Z/2^m,\qquad K^1(\mathbb{RP}^{2m})=0,$$
and
$$\widetilde K^0(\mathbb{RP}^{2m+1})\cong\mathbb Z/2^m,\qquad K^1(\mathbb{RP}^{2m+1})\cong\mathbb Z.$$
The repeated $\mathbb Z/2$ graded pieces of the collapsed page form nonsplit
extensions.

## Facts & Assumptions

[A1] Assume AC. The $K$-AHSS of $\mathbb{RP}^r$ has $E_2^{p,q}=H^p(\mathbb{RP}^r;\mathbb Z)$ for even $q$ and zero for odd $q$, with all differentials zero (every target lies in an odd degree below $r$ or in the top degree with a torsion source, and the $0$-column survives by the rank of its edge); the integral cohomology is $\mathbb Z$ in degree $0$, $\mathbb Z/2$ in the even positive degrees below $r$, zero in the odd degrees below $r$, and $\mathbb Z$ in degree $r$ for odd $r$, $\mathbb Z/2$ for even $r$ ([[cor-complex-k-theory-ahss]], the standard universal-coefficient computation).

[A2] Assume AC. The complexified tautological line $\xi$ has $\alpha=[\xi]-1$ with $\alpha^2=-2\alpha$, exact order $2^m$, and $\widetilde K^0(\mathbb{RP}^r)=\mathbb Z\alpha$; the odd groups are $K^1(\mathbb{RP}^{2m})=0$ and $K^1(\mathbb{RP}^{2m+1})\cong\mathbb Z$ ([[lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions]]).

[A3] Collapse alone determines only the associated graded; the cyclic structure is genuine extension data ([[prop-ahss-collapse-determines-only-the-associated-graded-object]], [[thm-multiplicative-ahss-for-a-multiplicative-generalized-theory]]).

## Verification

**Proof technique:** direct.

**Given:** Assume AC, $m\geq0$, and the $K$-AHSS of $\mathbb{RP}^r$ for $r=2m$ or $r=2m+1$.

1.1 By [A1] the stable page has one $\mathbb Z/2$ in each even cohomological degree $2,4,\ldots$ up to the dimension and, for odd $r$, an extra $\mathbb Z$ in the top degree; all differentials vanish, so these are the graded pieces of $K^*(\mathbb{RP}^r)$. [A1]

2.1 The graded pieces in total degree zero are $m$ copies of $\mathbb Z/2$ together with the $\mathbb Z$ from degree zero; the associated graded of $\widetilde K^0$ is therefore $(\mathbb Z/2)^m$ of order $2^m$. [A1, step 1.1]

3.1 By [A2] the class $\alpha$ has exact order $2^m$ and generates $\widetilde K^0(\mathbb{RP}^r)$, so the $m$ copies of $\mathbb Z/2$ assemble into the single cyclic group $\mathbb Z/2^m$; this is a nonsplit extension, since the associated graded is not cyclic. The odd-degree statement is the corresponding clause of [A2]. [A2, A3, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 verify the displayed groups and the nonsplit nature of the extensions. [step 1.1, step 3.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.2.3, printed pp. 10–11, for the vanishing of the differentials and the warning that the spectral sequence alone does not determine the torsion group.
