---
id: cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled
kind: counterexample
title: The isolated differential 2 on the integers cannot be cancelled
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-invertible-differential-block-and-schur-complement-reduction, def-complex-homotopy-and-contractibility-in-an-additive-category, def-cycle-and-boundary-subobjects-of-a-complex, lem-the-boundary-subobject-factors-through-the-cycle-subobject, def-homology-object-of-a-chain-complex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5 (PDF p. 5)"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
generation:
  role: counterexample
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement refuted

In the two-term complex $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$, the nonzero
differential entry $2$ can serve as a Gaussian pivot: the two terms can be
cancelled and replaced by the zero complex, which is homotopy equivalent to the
original complex.

## Facts & Assumptions

**Given:** The two-term cochain complex $X^\bullet$ in the category of abelian groups with $X^n=\mathbb Z$, $X^{n+1}=\mathbb Z$, differential $d^n=\cdot2$, and $X^j=0$ for $j\notin\{n,n+1\}$; and the claim that the two terms of $X^\bullet$ can be cancelled, so that $X^\bullet$ is homotopy equivalent to the zero complex.

[L1] A pivot is required to be an isomorphism, with a two-sided inverse $\varphi^{-1}$; the Schur complement $a-b\varphi^{-1}c$ is defined through that inverse ([[def-invertible-differential-block-and-schur-complement-reduction]]).

[L2] The splitting theorem produces a homotopy equivalence between a complex and its reduction only when the pivot block of the decomposition is invertible; its contractible summand has differential the pivot itself ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

[L3] A complex is contractible when there is a family $h$ with $1_{C^n}=d^{n-1}h^n+h^{n+1}d^n$ for all $n$; a complex is homotopy equivalent to the zero complex exactly when it is contractible ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

[L4] The homology object of a chain complex is the cokernel of the boundary-to-cycle map $B_m\to Z_m$ supplied by the factorization of the boundary inclusion through the cycle inclusion ([[def-cycle-and-boundary-subobjects-of-a-complex]], [[lem-the-boundary-subobject-factors-through-the-cycle-subobject]], [[def-homology-object-of-a-chain-complex]]).

## Counterexample

1.1 The entry $2$ has no inverse in the category of abelian groups. If $u:\mathbb Z\to\mathbb Z$ satisfied $2u=1$ or $u\cdot2=1$, then evaluating at $1$ gives $2u(1)=1$ with $u(1)\in\mathbb Z$, which is impossible because $1$ is odd; equivalently $\mathbb Z$ has no element $m$ with $2m=1$. Since $2$ is not invertible, it is not a pivot in the sense of [L1], and the Schur complement $a-b\varphi^{-1}c$ of the block $(\varphi)=(2)$ is not defined on its own. [L1, algebra]

1.2 The complex nonetheless has nonzero homology. Reindexing by $C_m:=X^{-m}$ gives the chain complex $\mathbb Z\xrightarrow{2}\mathbb Z$ concentrated in degrees $-n$ and $-n-1$. There $Z_{-n-1}=\ker(d_{-n-1}=0)=\mathbb Z$ and $B_{-n-1}=\operatorname{im}(d_{-n})=\operatorname{im}(2)=2\mathbb Z$, so the boundary-to-cycle map is the inclusion $2\mathbb Z\hookrightarrow\mathbb Z$ and, by [L4], $H_{-n-1}\cong\mathbb Z/2\mathbb Z\ne0$; this is the homology in cochain degree $n+1$ of $X^\bullet$. [L4, algebra]

2.1 The complex is not contractible. If it were, [L3] would give a homomorphism $h^{n+1}:\mathbb Z\to\mathbb Z$ with $1_{X^n}=d^{n-1}h^n+h^{n+1}d^n=0+h^{n+1}\cdot2$ in degree $n$, because $d^{n-1}=0$ and $d^n=\cdot2$; evaluating at $1$ would produce an integer $h^{n+1}(1)$ with $2h^{n+1}(1)=1$, which is impossible by step 1.1. Hence $X^\bullet$ is not homotopy equivalent to the zero complex, and deleting both terms would not be a homotopy equivalence. [L3, step 1.1, algebra]

3.1 Consequently the pivot hypothesis of [L1] and [L2] is genuinely needed: the deleted terms carry the nonzero homology object $H_{-n-1}\cong\mathbb Z/2\mathbb Z$ of step 1.2, which the zero complex does not have, and no two-sided inverse of $2$ exists in $\mathbb Z$. The claim refuted is therefore false; the theorem's conclusion is not available here because its hypothesis fails. ∎ [L2, step 1.2, step 2.1, algebra]
