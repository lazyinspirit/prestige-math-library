---
id: ex-qftx-susy-u1-pair-classical-vacuum-moduli
kind: example
title: One-flavor U(1) classical F/D-flat vacuum quotient
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities-examples
deps:
  - def-qftx-susy-vacuum-moduli-data
dependency_roles:
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
proof_strategy: direct
physical_scope: Exact classical tree-level calculation for a canonical rigid four-dimensional N=1 U(1) gauge-model example with one oppositely charged chiral pair, zero superpotential, and zero Fayet–Iliopoulos parameter; it says nothing about quantum corrections.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Supersymmetric Field Theory
      url: https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf
      locator: "§4.3.1, printed pp. 112–116: zero-FI one-flavor U(1) SQED D-term condition, gauge quotient, and gauge-invariant meson coordinate."
verification:
  precheck: pass
---

## Example

Use natural units $c=\hbar=1$. Take the finite-dimensional scalar field
space $V=\mathbb C^2$ with coordinates $(q,\widetilde q)$, standard
Hermitian norm, compact gauge group $U(1)$ acting by
$(q,\widetilde q)\mapsto(e^{i\alpha}q,e^{-i\alpha}\widetilde q)$, gauge
coupling $g>0$, zero superpotential $W=0$, canonical scalar kinetic terms,
and zero Fayet--Iliopoulos parameter. In this classical model the auxiliary
maps are $F_q=F_{\widetilde q}=0$ and
$D=-g(|q|^2-|\widetilde q|^2)$. The classical supersymmetric vacuum set is
therefore
$\{(q,\widetilde q):|q|=|\widetilde q|\}/U(1)$. The gauge-invariant
coordinate $m=q\widetilde q$ gives a bijection of this orbit set with
$\mathbb C$. This is a classical tree-level result and is not a claim about
the quantum vacuum space.

## Example references

[Tong, §4.3.1, printed pp. 112–116](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

Classical F/D-flat quotient and quantum-moduli boundary: [[def-qftx-susy-vacuum-moduli-data]].

## Facts & Assumptions

**Given:** The U(1) action, canonical field data, $W=0$, and zero Fayet--Iliopoulos parameter in the Example.

[A1] Adopt the finite-dimensional canonical rigid N=1 U(1) classical model stated in the Example; $q$ and $\widetilde q$ have mass dimension one and $g$ is dimensionless.

[F1] [[def-qftx-susy-vacuum-moduli-data]]: classical vacua are the simultaneous zeros of the F and D maps, modulo the compact gauge group.

## Verification

**Given:** [A1] and the classical vacuum-moduli definition [F1].

1.1 Since $W=0$, both holomorphic derivatives vanish identically, so every $(q,\widetilde q)$ is F-flat. The D equation is $-g(|q|^2-|\widetilde q|^2)=0$; because $g>0$, it is equivalent to $|q|=|\widetilde q|$. By [F1], the classical vacuum set is exactly that D-flat set modulo the displayed U(1) action. [A1, F1, given, algebra]

2.1 The product $m=q\widetilde q$ is invariant under the action, since $(e^{i\alpha}q)(e^{-i\alpha}\widetilde q)=q\widetilde q$. It therefore defines a map from the D-flat orbit set to $\mathbb C$. [A1, step 1.1, algebra]

2.2 For any $m_0\in\mathbb C$ with $m_0\ne0$, choose $q=\sqrt{|m_0|}>0$ and $\widetilde q=m_0/q$. Then $q\widetilde q=m_0$ and $|q|=|\widetilde q|=\sqrt{|m_0|}$; for $m_0=0$, choose $(q,\widetilde q)=(0,0)$. Thus every $m_0$ is attained by a D-flat pair. [step 1.1, construct, algebra]

3.1 If two D-flat pairs have the same product $m_0=0$, their equal-modulus condition forces both pairs to be $(0,0)$. If $m_0\ne0$, both $q$-entries are nonzero and have modulus $\sqrt{|m_0|}$; hence their ratio is a phase $e^{i\alpha}$, and equality of products forces the corresponding $\widetilde q$-entries to differ by $e^{-i\alpha}$. The two pairs are therefore U(1)-gauge-equivalent. The map in step 2.1 is injective as well as surjective, proving the stated bijection. [step 2.1, step 2.2, algebra] ∎
