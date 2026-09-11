---
id: ex-integral-cohomology-of-real-projective-space-from-uct
kind: example
title: Integral cohomology of real projective space from UCT
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, cor-integral-cohomology-detects-adjacent-homology-torsion, lem-real-projective-space-cellular-homology-and-pinch-map, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Miller, section17 and section27, printed pages43 and73–74
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Example

Assume AC. For $m\ge0$, integral cohomology of $\mathbb{RP}^m$ is $H^0=\mathbb Z$, $H^j=\mathbb Z/2$ for even $0<j\le m$, and $H^m=\mathbb Z$ when $m$ is odd. All other positive groups are zero, as are all negative groups. For $m=0$ the space is a point and only $H^0$ occurs.

## Facts & Assumptions

[F1] [[lem-real-projective-space-cellular-homology-and-pinch-map]] constructs the actual projective CW filtration and computes its integral homology from alternating boundaries $2,0$.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the evaluation sequence. [[cor-integral-cohomology-detects-adjacent-homology-torsion]] computes its finitely generated Hom and Ext terms, with $\operatorname{Hom}(\mathbb Z,\mathbb Z)=\mathbb Z$, $\operatorname{Hom}(\mathbb Z/2,\mathbb Z)=0$, $\operatorname{Ext}^1(\mathbb Z,\mathbb Z)=0$ and $\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)=\mathbb Z/2$. Assume [[def-axiom-of-choice]].

## Proof

**Given:** A finite integer $m\ge0$ and integral coefficients, under AC.

1.1 By [F1], $H_0=\mathbb Z$; for $0<r<m$, $H_r$ is $\mathbb Z/2$ when $r$ is odd and zero when $r$ is even. The top group is $\mathbb Z$ for odd $m>0$ and zero for even $m>0$. All groups above $m$ vanish. In particular all homology groups are finitely generated, as required in [F2]. [F1, F2, given]

2.1 For $j=0$, $H_{-1}=0$, so UCT gives $H^0\cong\operatorname{Hom}(H_0,\mathbb Z)=\mathbb Z$. For even $0<j\le m$, the integer $j-1$ is odd and strictly below $m$, so $H_{j-1}=\mathbb Z/2$ and $H_j=0$. The UCT sequence is $0\to\mathbb Z/2\to H^j\to0$, giving $H^j=\mathbb Z/2$. For odd $0<j<m$, the adjacent lower group is zero unless $j=1$, when it is $\mathbb Z$; either way its Ext is zero. Since $H_j=\mathbb Z/2$ has zero Hom into $\mathbb Z$, this gives $H^j=0$. [F2, step 1.1]

2.2 If $j=m$ is odd, $H_m=\mathbb Z$ and $H_{m-1}$ is zero, except at $m=1$ where it is $\mathbb Z$; its Ext is zero in both cases. Thus UCT gives $H^m=\mathbb Z$. At $j=m+1$, the Hom term is zero and the Ext term is zero because $H_m$ is either zero or free (including $m=0$). For $j>m+1$ both homology inputs vanish. Therefore every cohomology group above $m$ is zero; negative groups vanish by the cochain convention. [F2, step 1.1]

3.1 For $m=0$ this is precisely the point calculation. For $m=1$ it gives $\mathbb Z$ in degrees zero and one; for $m=2$ it gives $H^0=\mathbb Z$, $H^1=0$, $H^2=\mathbb Z/2$; for $m=3$ it gives $\mathbb Z,0,\mathbb Z/2,\mathbb Z$ in degrees zero through three. These checks exhibit the shift from odd homological torsion to even cohomological torsion. No orientation-dependent generator is needed for these abstract group identifications. AC is inherited only where [F2] uses the UCT; the integral cell calculation in [F1] is choice-free. [F1, F2, step 1.1, step 2.1, step 2.2] ∎
