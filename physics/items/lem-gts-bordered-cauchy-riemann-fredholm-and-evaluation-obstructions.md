---
id: lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions
kind: lemma
title: Bordered CR Fredholm index, boundary regularity and evaluation obstructions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
- thm-fredholm-index-is-stable-under-compact-perturbations
- thm-plancherel
- thm-bounded-inverse-theorem
- lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation
- def-sobolev-space-wkp-and-its-norm
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint: mathematical-premise
  thm-fredholm-index-is-stable-under-compact-perturbations: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
  lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Section 9.1–9.3 and Appendix B; the exact local constructions and reading limits are specified below.
dependency_level: 3
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $S$ be a compact smooth oriented surface with boundary, equipped with complex charts smooth up to the boundary; this is the meaning of bordered Riemann surface here. Let $E\to S$ be a smooth complex vector bundle of rank $n$, and let $F\subset E|_{\partial S}$ be a smooth real rank-$n$ subbundle with $E_x=F_x\oplus iF_x$ at every boundary point. A real Cauchy–Riemann operator is a smooth real-linear first-order differential operator $P$ whose principal symbol is that of $\bar\partial$. For integer $k\ge1$, define $H^k(S,E)$ by finite-chart weak derivatives through order $k$ in $L^2$, and let $H^k(S,E;F)$ be the subspace whose Sobolev boundary trace lies in $F$; give the target $H^{k-1}(S,\Lambda^{0,1}\otimes E)$ the corresponding finite-chart norm. Then $P:H^k(S,E;F)\to H^{k-1}(S,\Lambda^{0,1}\otimes E)$ is real Fredholm for every $k\ge1$, with index $n\chi(S)+\mu(E,F)$. Here $\mu$ is the first Chern number of the conjugate double of $(E,F)$ constructed below. Kernels are smooth up to the boundary; the higher ranges and finite cokernels agree with the $H^1\to L^2$ realization, whose weak adjoint annihilators are also smooth up to the boundary.

For $k\ge3$, matching finitely many normalization nodes subtracts $n$ per boundary node and $2n$ per interior node from the summed normalization index. Smooth forcings supported away from any prescribed finite node/mark set span this nodal cokernel. Finitely many such forcings also make the JOINT derivative with evaluation at selected boundary markings in $F$ and interior markings in $E$ onto, while their support still avoids those markings. No relative-spin orientation or nonlinear virtual atlas is assumed or concluded.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]] supplies the actual arbitrary-complex-bundle closed index and weak Fourier regularity; the real boundary/double and its adjoint regularity are proved below.

[F2] [[thm-fredholm-index-is-stable-under-compact-perturbations]], [[thm-plancherel]] and [[thm-bounded-inverse-theorem]] apply to the explicitly compact finite-chart errors and Hilbert complements.

[F3] [[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]] supplies its actual local Cauchy-transform right inverse and differentiated Lp bounds. The reflected local evaluation solutions and finite-point support argument are proved here. [[def-sobolev-space-wkp-and-its-norm]] fixes the weak derivative convention.

[A1] Full AC is used through the closed-surface Fredholm supplier [F1], which has that explicit premise. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 The totally real splitting gives E|∂S≅F⊗_R C. Give F a real bundle metric and take its complexification metric; extend it over a boundary collar and then the interior. Choose a complex connection preserving F in tangential boundary directions, product in the normal direction on a smaller collar. In a local real frame of F its tangential matrix is real and its normal matrix is zero. Double S by the antiholomorphic boundary reflection, and double E by conjugation in F. On overlaps the real boundary transition matrices are constant in the collar-normal coordinate, so this is an actual smooth complex bundle $E^{d}$, with its antilinear reflection involution τ. The connection and its complex-linear CR operator double smoothly and commute with τ on sections and normalized form coefficients. [F1, F2, F3, given, construct, algebra]

2.1 The actual closed-surface arbitrary-complex-bundle CR theorem applies to this smooth double. Its complex index is $nχ(S)+deg(det E^{d})$, since $χ(S^{d})=2χ(S)$. A complex vector space with an antilinear involution is the complexification of its fixed real vector space: write v=(v+τv)/2+i(v−τv)/(2i). Apply this to the kernel and cokernel. Restriction of a τ-fixed H1 section to one half is exactly an H1 section with trace in F; reflection gives the inverse. A τ-fixed target L2 form is an arbitrary half-target L2 form, since it has no trace constraint. Averaging a full preimage with its reflection proves equality of the real half-range and the fixed full-range. Thus the reference half-operator is Fredholm with REAL index equal to the complex double index. Define $μ(E,F)=deg(det E^{d})$. This fixes the convention without importing an unproved bordered index theorem. [F1, F2, F3, given, construct, algebra, step 1.1]

3.1 Every P in the interface differs from that reference by a smooth real-linear multiplication operator. It factors through the compact inclusion H1(S,E)→L2(S,E), hence is compact. This compactness follows in boundary charts by the bounded reflection extension and finite-chart Fourier truncation, exactly as for the compact closed inclusion. Fredholm stability therefore proves the same index for the actual P. Orientation, if later needed, is a separate determinant-line question and has not been assumed in this step. [F1, F2, F3, given, construct, algebra, step 2.1]

4.1 In a complex bundle frame sending F to $R^{n}$, and a conformal half-disk coordinate s+it, multiply the target by the smooth invertible principal normalization to write P=∂s+i∂t+A(s,t), where A is a smooth real-linear matrix. For compactly supported w with real flat-edge values, integration by parts gives $\|(\partial s+i\partial t)w\|^2_2=\|w_s\|^2_2+\|w_t\|^2_2.$ The only flat-boundary cross term is the imaginary pairing of $w_{s}$ and w, both real. A real cutoff supported away from the curved edge therefore gives the local H1 estimate in terms of ||Pw||_2+||w||_2. No boundary condition is imposed on Pw. [F1, F2, F3, given, construct, algebra, step 3.1]

5.1 Tangential difference quotients preserve the real boundary condition. Apply the estimate to them and commute them through the smooth coefficients. If Pw is H1 and w is H1, this first gives $w_{s}∈H1$. Recover the other second derivatives from $w_{t}=i w_{s}−i$ Pw+iAw. Iterate with tangential derivatives and then induct on the number of normal derivatives in this same identity. This proves H^(q+1) up to the boundary whenever $Pw∈H^{q}$, with the usual lower-order L2 term. Interior regularity is the existing actual Fourier-parametrix argument. A finite cover gives the global higher estimate. [F1, F2, F3, given, construct, algebra, step 4.1]

6.1 An L2 annihilator of the range is not assumed to have a boundary trace. Reflect its coefficient by conjugation to the other half. Test the reflected distribution against an arbitrary full-chart test; folding this test to the upper half produces a test section whose boundary value is real. The annihilation identity is therefore exactly the weak reflected adjoint equation, with bounded piecewise-smooth zeroth-order coefficient. There is no boundary delta: the folded tests account for it before any trace is invoked. The constant-principal Fourier inverse maps this L2 right-hand side to H1 locally, so the annihilator is H1 on the full chart. It now has the correct real trace. Tangential difference quotients and the adjoint version of 5.1 then make it smooth on the original closed half-disk. Thus all cokernel representatives have actual smooth one-sided boundary regularity. [F1, F2, F3, given, construct, algebra, step 5.1]

7.1 The compact weak estimates imply that the higher range is $H^{q}$ intersected with the L2 range: any H1 preimage of an $H^{q}$ forcing is promoted by 5.1. Smooth targets are dense in L2 and hence span its finite-dimensional cokernel, giving the identical higher quotient. Kernel smoothness and the bounded right inverse for a surjective augmentation follow as in the adopted closed CR theorem. This does not claim that the reflected coefficients are smooth across the edge; only the original one-sided smoothness is used. [F1, F2, F3, given, construct, algebra, step 6.1]

8.1 On a normalization take the direct sum $B_{k}$ of the component $H^{k}$ section spaces with their real boundary traces, k≥3. Node-difference evaluation Δ is bounded and onto its finite real target: F at a boundary node, E at an interior node. Disjoint smooth local sections give a right lift R; a boundary lift uses a frame with real trace and a real cutoff. In $B_{k}=kerΔ⊕imR$, the finite-rank modification P−PRΔ is the constrained matched operator plus a finite-dimensional zero operator. Its index is therefore the sum of component indices minus dim imΔ, exactly the stated n/2n losses. Self-nodes have distinct normalization points and satisfy the same calculation. [F1, F2, F3, given, construct, algebra, step 7.1]

9.1 For $k=3$ suppose the images of smooth target forcings supported away from a finite special set failed to span the quotient. A nonzero H^(−2) functional annihilating them and the matched range would be supported on that finite set. At a boundary point, compose this functional with restriction from a full H2 chart. Restriction is onto by the explicit H2 reflection extension (the finite linear combination matching value and first normal derivative). Thus it is a full-chart H^(−2) distribution supported at that point. The same Fourier calculation as in the adopted nodal-obstruction lemma shows it is only a Dirac evaluation: any derivative of a Dirac mass has divergent weighted Fourier norm in dimension two. The identical conclusion holds at an interior point. [F1, F2, F3, given, construct, algebra, step 8.1]

10.1 Every Dirac coefficient is zero. Use a smooth section vanishing at all special points, so all node matches hold. At an interior point prescribe its first jet to make Pξ arbitrary there. At a boundary point take ξ=t v times a real cutoff in a real boundary frame: its boundary value is zero and hence belongs to F, while v is ANY vector of E, so Pξ=i v at that point is arbitrary. All other special-point images are zero. Annihilation of the matched range forces each coefficient to vanish. This contradiction proves the forcing-span assertion, including the freedom to avoid every selected auxiliary/evaluation point. Higher realization independence follows from 5.1 and 7.1, without a false density claim in H2. [F1, F2, F3, given, construct, algebra, step 9.1]

11.1 Near one boundary evaluation marking, use the same real boundary frame. There are local homogeneous solutions of Pξ=0 with any prescribed boundary value in F. To construct them, extend the coefficient A across the boundary by conjugate reflection and multiply it by a symmetric cutoff supported in a disk of radius r. The whole-plane Cauchy right inverse T of ∂s+i∂t commutes with this reflection; its kernel gives ||Tf||_∞≤C r||f||_∞ on this support. For a real constant v solve ξ=v−T(Aξ) by contraction when C r||A||<1/2. Reflection makes the boundary value real. The evaluation map v↦ξ(0) is real-linear and uniformly close to identity, hence invertible after shrinking r. The actual Cauchy-transform Lp bound gives W1p for $p>2$, and 5.1 then gives smooth one-sided regularity. Thus adjust v to obtain any desired value at the marking. At an interior marking the same construction uses arbitrary complex v and no reflection. [F1, F2, F3, given, construct, algebra, step 10.1]

12.1 Multiply these homogeneous sections by cutoffs equal to one in smaller marking neighborhoods and with disjoint supports. Their P-images are supported on the surrounding annuli, away from all nodes and markings, while their marking evaluations are the prescribed basis vectors and all other evaluations are zero. Add these finitely many P-images to a forcing space already spanning the CR cokernel from 10.1. The pairs (cutoff section, its P-image with the appropriate opposite augmentation sign) lie in the augmented kernel and realize every evaluation vector. Consequently the joint derivative (CR equation, all selected evaluations) is onto, with bounded right inverse on its Hilbert complement. Extension over a given domain family and target neighborhood and finite-group induction are the same smooth core constructions as the adopted nodal obstruction lemma. [F1, F2, F3, given, construct, algebra, step 11.1]

13.1 This is the linear input for weakly submersive evaluation maps on a future disk atlas. It explains why arbitrary continuous singular input simplices can eventually be pulled back at regular thickenings: in actual projection coordinates, pullback of a submersion along a continuous map is its graph times the remaining coordinates. It does NOT yet assert that the nonlinear disk atlas, its boundary collars, or its chain-valued virtual pushforward has been built. Those remain the exact next attached obligations.  [F1, F2, F3, given, construct, algebra, step 12.1] ∎

## Remarks

The proof separates actual weak boundary regularity from determinant orientation. It is a purely mathematical supplier for the regular polygon branch and the later disk atlas construction.
