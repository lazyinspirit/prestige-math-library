---
id: ex-ip-finite-sample-outside-uniform-bv-bound
kind: example
title: Finite samples outside a uniform BV bound
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "§5, finite random conductivity samples and the stated limitation of the uniform BV class, printed pp. 37–38."
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.1, Definition 7.12, Proposition 7.16, Lemma 7.17 and Theorem 7.18 with complete proof, printed pp. 233–238: Gauss–Green and perimeter measure for Lipschitz domains."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $\Omega=B((1/2,1/2),1/4)\subset(0,1)^2$, let $\Omega'=B((1/2,1/2),1/8)$, and fix $m=1/2$, $M=3/2$, and contrast $a=1/4$. For every integer $N\ge1$, put $q=\lceil\sqrt N\rceil$, choose $N$ distinct cell centers from the $q\times q$ grid in $[7/16,9/16]^2$, set $r_N=1/(32q)$, and define $\gamma_N=1+a\mathbf1_{E_N}$, where $E_N$ is the union of the radius-$r_N$ disks about those centers. Then every $\gamma_N$ is a real, uniformly elliptic, individually finite-BV conductivity equal to $1$ outside $\Omega'$, but $TV(\gamma_N;\Omega)\ge(\pi a/32)\sqrt N$. Hence the family has no common finite BV bound $R$ and is not contained in any one class $X_2(R)$ as $N$ varies. This is a non-applicability example for a fixed uniform BV theorem, not a counterexample to its conclusion for members of that class.

## Example references

[[def-ip-calderon-admissible-conductivity-class|The exact ellipticity, collar and BV-ball conventions.]]

[[def-ip-spatial-bv-and-distributional-tv|The distributional total-variation norm.]]

[[lem-ip-bv-test-field-characterization-and-lsc|The test-field formula for total variation of BV functions.]]

[de Hoop et al., §5, random finite conductivity samples and BV-class qualification](https://arxiv.org/pdf/2511.20361)

[Terra, §7.1, Definition 7.12 and Theorem 7.18: perimeter measure and Gauss–Green for Lipschitz domains](https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf)

## Facts & Assumptions

**Given:** the disk domain and parameters in the Example.

[F1] A conductivity in $X_2(R)$ must be uniformly elliptic, equal to the fixed background outside $\Omega'$, and satisfy the displayed BV norm bound. ([[def-ip-calderon-admissible-conductivity-class]])

[F2] For $u\in BV(\Omega)$, $TV(u;\Omega)=\sup\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\varphi\in C_c^\infty(\Omega;\mathbb R^2),\ |\varphi(x)|\le1\}$; symmetry under $\varphi\mapsto-\varphi$ makes this the supremum of absolute pairings. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F3] A function is in $BV(\Omega)$ when its distributional derivative is a finite vector Radon measure, and its total variation is the mass of that measure; the distributional derivative is linear and annihilates constants. ([[def-ip-spatial-bv-and-distributional-tv]])

## Proof

**Given:** $N\ge1$ and the grid in the Example.

1.1 The square $[7/16,9/16]^2$ has side $1/8$ and lies in $\Omega'$ because its corner radius from $(1/2,1/2)$ is $\sqrt2/16<1/8$. The grid spacing is $s_N=1/(8q)$ and $r_N=s_N/4$. Distinct cell centers are separated by at least $s_N>2r_N$, and each disk lies inside its cell; hence the disks are disjoint and contained in $\Omega'$. Thus $1\le\gamma_N\le1+a=5/4<3/2$ and $\gamma_N=1$ on $\Omega\setminus\Omega'$. [F1, given, algebra]

1.2 For a disk $B(c,r)$ and a smooth compactly supported vector field $\varphi$, polar coordinates give $\int_{B(c,r)}\operatorname{div}\varphi\,dx=r\int_0^{2\pi}\varphi(c+r(\cos\theta,\sin\theta))\cdot(\cos\theta,\sin\theta)\,d\theta$. Indeed, in polar variables $\operatorname{div}\varphi=\rho^{-1}\partial_\rho(\rho\varphi_r)+\rho^{-1}\partial_\theta\varphi_\theta$; integrating against $\rho\,d\rho\,d\theta$ makes the angular derivative integrate to zero and the inner radial term vanish. The distributional definition therefore gives $D\mathbf1_{B(c,r)}=-\nu\,\mathcal H^1|_{\partial B(c,r)}$, whose variation has mass $2\pi r$. Summing these measures over the disjoint disks shows $D\mathbf1_{E_N}$ is finite with variation mass $2\pi r_NN$, so [F3] gives $\mathbf1_{E_N}\in BV(\Omega)$ and [F2] gives the stated upper bound. [F2, F3, given, algebra]

2.1 The annuli of radii $(r_N/2,3r_N/2)$ about the chosen centers are pairwise disjoint: their outer radii sum to $3r_N=3s_N/4<s_N$, while distinct centers are at least $s_N$ apart. They lie in $\Omega$, since each center is within $\sqrt2/16$ of $(1/2,1/2)$ and $\sqrt2/16+3r_N/2\le\sqrt2/16+3/64<1/4$. On each annulus choose a smooth radial cutoff equal to one at radius $r_N$, vanishing outside the annulus and between zero and one. The sum of the corresponding radial unit-vector fields is smooth, compactly supported in $\Omega$, has norm at most one, and equals the outward normal on every circle. Its flux is $2\pi r_NN$, so [F2] gives the matching lower bound. Since $D\gamma_N=aD\mathbf1_{E_N}$ by [F3] and $a>0$, step 1.2 gives $TV(\mathbf1_{E_N};\Omega)=2\pi r_NN$ and $TV(\gamma_N;\Omega)=2\pi a r_NN=\pi aN/(16q)$. [F2, F3, step 1.1, step 1.2, construct]

3.1 Since $q=\lceil\sqrt N\rceil\le2\sqrt N$, step 2.1 gives $TV(\gamma_N;\Omega)\ge(\pi a/32)\sqrt N$. The value and collar bounds were checked in step 1.1, and every finite union of disks has the finite perimeter computed in step 2.1. Thus each conductivity is individually finite-BV while the total variations diverge, so no fixed $R$ contains the whole family in $X_2(R)$. [F1, step 1.1, step 2.1, algebra] ∎
