---
id: cor-integral-cohomology-detects-adjacent-homology-torsion
kind: corollary
title: Integral cohomology detects adjacent homology torsion
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally, def-axiom-of-choice, cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, lem-singular-uct-extension-from-cycle-projections, def-ext-via-a-projective-resolution-of-the-first-variable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, section 27, Example 27.4 and Theorem 27.1, printed pages 73–74
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Assume AC. Let $n\ge0$ and suppose $H_n(X;\mathbb Z)$ and $H_{n-1}(X;\mathbb Z)$ are finitely generated, with $H_{-1}=0$. The torsion subgroup of $H^n(X;\mathbb Z)$ is abstractly isomorphic to the torsion subgroup of $H_{n-1}(X;\mathbb Z)$, and its free rank equals the rank of $H_n(X;\mathbb Z)$. No canonical identification of the two finite torsion groups is asserted.

## Facts & Assumptions

[F1] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] and [[prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]] identify cohomology abstractly with the direct sum of its Hom and Ext terms under [[def-axiom-of-choice]].

[F2] [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]] supplies a finite direct sum of copies of $\mathbb Z$ and cyclic groups $\mathbb Z/m$, with $m>1$.

[F3] [[def-ext-via-a-projective-resolution-of-the-first-variable]] computes Ext as Hom cohomology. [[lem-singular-uct-extension-from-cycle-projections]] proves canonical comparison with any length-one projective resolution, so the explicit resolutions below compute the Ext in [F1].

## Proof

**Given:** $X,n$ and finite generation as stated; write $H_n\cong\mathbb Z^r\oplus T$ and $H_{n-1}\cong\mathbb Z^s\oplus\bigoplus_{j=1}^t\mathbb Z/m_j$ as in [F2]. Assume AC.

1.1 A homomorphism $\mathbb Z\to\mathbb Z$ is uniquely determined by the arbitrary integer image of $1$, so its Hom group is $\mathbb Z$. A homomorphism $\mathbb Z/m\to\mathbb Z$ sends $1$ to an integer $a$ with $ma=0$, which implies $a=0$ when $m>0$; its Hom group is zero. Hom from a finite direct sum is the direct sum of the Hom groups: restriction to each summand and summing their values are inverse homomorphisms. Therefore $\operatorname{Hom}(H_n,\mathbb Z)\cong\mathbb Z^r$. [F2, given]

1.2 For $\mathbb Z$, use the resolution $0\to0\to\mathbb Z\xrightarrow{1}\mathbb Z\to0$; its degree-one Hom group is zero, hence its Ext is zero. For $\mathbb Z/m$ with $m>0$, use $0\to\mathbb Z\xrightarrow{m}\mathbb Z\to\mathbb Z/m\to0$. Multiplication by $m$ is injective and its image is precisely the quotient kernel. Applying Hom into $\mathbb Z$ yields $\mathbb Z\xrightarrow{m}\mathbb Z$ in degrees zero and one, because evaluation at $1$ takes precomposition to multiplication by $m$. Thus Ext in degree one is $\mathbb Z/m$. Taking the finite direct sum of these resolutions gives an exact free resolution of $H_{n-1}$: each kernel and image is computed coordinatewise. Hom and then cohomology also split coordinatewise for this finite sum, giving $\operatorname{Ext}^1(H_{n-1},\mathbb Z)\cong\bigoplus_{j=1}^t\mathbb Z/m_j$. The comparison in [F3] identifies this calculation with the UCT term. [F2, F3, given]

2.1 Apply the splitting in [F1] and substitute steps 1.1 and 1.2 to obtain $H^n(X;\mathbb Z)\cong\mathbb Z^r\oplus\bigoplus_{j=1}^t\mathbb Z/m_j$. In this direct sum a finite-order element has zero free coordinate, since a nonzero integer vector has infinite order. Conversely every element with zero free coordinate is killed by the product of the finitely many $m_j$ (or by $1$ if there are none). The torsion subgroup is therefore exactly the displayed finite summand, abstractly the torsion subgroup of $H_{n-1}$, and the free rank is $r$. [F1, step 1.1, step 1.2]

3.1 At $n=0$, $H_{-1}=0$ gives $s=t=0$, so $H^0$ is free of rank $r$ under the stated finite-generation hypothesis. Empty $X$ gives $r=s=t=0$. Empty torsion data in either input is allowed; a single cyclic summand contributes exactly one $\mathbb Z/m$ in the next cohomology degree. The same resolution computation for $m=1$ gives a zero cyclic group and zero Ext, so omitted trivial summands do not change the formula; $m=0$ is not treated as torsion and belongs to the separate free case. The isomorphism of torsion groups uses chosen decompositions and the UCT splitting; no canonical duality for finite groups is claimed. AC is inherited from [F1] and the comparison in [F3]; the finite cyclic calculations add no choice requirement. [F1, F2, F3, step 1.1, step 1.2, step 2.1] ∎
