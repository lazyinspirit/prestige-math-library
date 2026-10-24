---
id: ex-hopf-line-bundle-over-the-two-sphere-by-clutching
kind: example
title: The Hopf line bundle over S² by clutching
status: published
origin: pipeline
deps: [def-clutching-construction-for-bundles-over-a-suspension, ex-tautological-real-and-complex-lines-over-projective-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Example 1.10"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Affine-frame clutching calculation, printed pp.22–23"
---

## Example

Identify $S^2$ with $\mathbb CP^1$. With the upper-to-lower coefficient
convention fixed on the A page, the map

$$g:S^1\to\operatorname{GL}_1(\mathbb C),\qquad g(z)=z,$$

clutches the tautological Hopf line $\gamma$. Interchanging the two disk
charts changes the transition to $z^{-1}$ and gives the dual line
$\gamma^*$.

## Facts & Assumptions

**Given:** $\mathbb CP^1$, split into the two affine closed disks along $|z|=1$.

[F1] The clutching relation sends a plus-chart coefficient $v$ to the minus-chart coefficient $g(z)v$; swapping charts inverts $g$ ([[def-clutching-construction-for-bundles-over-a-suspension]]).

[F2] The tautological line has fiber the represented line in $\mathbb C^2$ ([[ex-tautological-real-and-complex-lines-over-projective-space]]).

## Verification

**Proof technique:** direct.

1.1 On the plus disk use points $[z:1]$, $|z|\leq1$, and the tautological frame $s_+(z)=(z,1)$. On the minus disk use $[1:w]$, $|w|\leq1$, with $w=z^{-1}$ on the equator, and frame $s_-(w)=(1,w)$. These vectors span the represented lines by [F2]. [F2, construct]

2.1 For $|z|=1$, one has $s_+(z)=(z,1)=z(1,z^{-1})=z\,s_-(z^{-1})$. Thus a physical vector with plus coefficient $v$ has minus coefficient $zv$. By [F1], the clutching function is exactly $g(z)=z$, not its inverse. [F1, step 1.1, algebra]

3.1 Interchanging the plus and minus charts reverses the coordinate change, so [F1] gives $g^{-1}(z)=z^{-1}$. Dualizing a line bundle inverts its scalar transition functions, hence this second clutching is $\gamma^*$. This completes the sign calculation without a choice principle. [F1, step 2.1, algebra] ∎
