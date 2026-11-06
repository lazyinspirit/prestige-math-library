---
id: thm-gts-bmt-and-stability-on-named-polarized-cy3-families
kind: theorem
title: Gamma-BMT and stability on named polarized CY3 families
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: mathematics
library: physics
category: string-theory
deps:
- def-gts-bridgeland-stability-condition-with-support-property
- def-gts-compact-calabiyau-manifold-conventions
- def-gts-gamma-bmt-and-brill-noether-data
- lem-gts-named-weighted-fano-and-cyclic-smooth-brill-noether-gaps
- lem-gts-smooth-curve-brill-noether-gap-gives-strict-threefold-bg
- lem-gts-full-gamma-bmt-propagation-from-vertical-boundary
- lem-gts-rational-gamma-bmt-gives-geometric-stability
- thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
- def-chern-character-and-todd-class
- def-axiom-of-choice
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-gamma-bmt-and-brill-noether-data: mathematical-premise
  lem-gts-named-weighted-fano-and-cyclic-smooth-brill-noether-gaps: mathematical-premise
  lem-gts-smooth-curve-brill-noether-gap-gives-strict-threefold-bg: mathematical-premise
  lem-gts-full-gamma-bmt-propagation-from-vertical-boundary: mathematical-premise
  lem-gts-rational-gamma-bmt-gives-geometric-stability: mathematical-premise
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: Soheyla Feyzbakhsh, Naoki Koseki, Zhiyu Liu, and Nick Rekuski, Stability
      conditions on Calabi-Yau threefolds via Brill-Noether theory of curves
    url: https://arxiv.org/pdf/2509.24990v2
    locator: Theorems 1.1, 1.3, and 1.4; §§2.4, 3, 4, and 5
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $(X,H)$ be a smooth projective threefold with $K_X\cong\mathcal O_X$, $H^1(X,\mathcal O_X)=0$, and ample Cartier divisor $H$, under the source $\Gamma$-BMT convention. The source theorem proves the $\Gamma$-BMT inequality for some real one-cycle $\Gamma$ with $\Gamma\cdot H\ge0$ in each of these cases: (i) $X$ is a quasi-smooth complete-intersection Calabi–Yau threefold in a weighted projective space, is not an intersection with a linear cone, and $H$ is the ample generator of $\operatorname{Pic}(X)$; quasi-smooth means the affine cone is smooth away from its vertex; (ii) $X$ is a general anticanonical divisor in a smooth Fano fourfold $M$ of index $r$, with $-K_M=rA$ for the ample index divisor $A$ and $H=A|_X$, where either $r\ge3$, or $r=2$ and Picard number $\rho(M)=1$; and (iii) $\pi:X\to Y$ is a degree-$d$ cyclic cover of a smooth Fano threefold $Y$ of index $r$, with $-K_Y=rA_Y$, $H=\pi^*A_Y$, a smooth branch divisor $D\in|-\frac{d}{d-1}K_Y|$, and $D$ general when $A_Y$ is not basepoint-free, where either $r\ge2$, or $r=1$ and $\rho(Y)=1$. Here $d\ge2$, $d-1$ divides $r$, and Picard number is the rank of the Néron–Severi group. The source uses the $\Gamma$-BMT inequality to construct geometric Bridgeland stability conditions; “geometric” means every skyscraper sheaf $\mathcal O_x$ is stable of the same phase. These are the source's named cases only; the statement is not an all-CY3 stability theorem.


## Facts & Assumptions

**Given:** Exactly the smooth threefold, polarization, source convention and one of the named family hypotheses in the Statement. The source-standard weighted convention is the thirteen-type well-formed amplitude-zero presentation explicitly used by the family-gap supplier; no arbitrary raw-stack normalization theorem is inferred.

[F1] [[def-gts-compact-calabiyau-manifold-conventions]], [[def-gts-bridgeland-stability-condition-with-support-property]] and [[def-gts-gamma-bmt-and-brill-noether-data]] give the CY, stability/support and corrected untwisted-slope/torsion-free-BN conventions.

[F2] [[lem-gts-named-weighted-fano-and-cyclic-smooth-brill-noether-gaps]] supplies the actual smooth surface/curve and strict rank-uniform BN gap for all named cases, including all thirteen weighted types and the exact Fano/cyclic primitive geometry.

[F3] [[lem-gts-smooth-curve-brill-noether-gap-gives-strict-threefold-bg]] gives strict ordinary BG3 at some positive slope epsilon, with the actual dimension-two restriction certificate and positive integer scaling. [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]] supplies ordinary scalar sheaf BG.

[F4] [[lem-gts-full-gamma-bmt-propagation-from-vertical-boundary]] supplies the full real source parameter range from that strict BG3 input; its exact dependency includes the closed vertical endpoint for every BN slope in [−1/2,1/2], including +1/2. [[lem-gts-rational-gamma-bmt-gives-geometric-stability]] constructs the actual second-heart stability condition with finite-rank support, local finiteness and stable skyscraper sheaves.

[F5] [[def-chern-character-and-todd-class]] gives the rational Todd/Chern classes used to choose Gamma, and [[def-axiom-of-choice]] is inherited from the coherent and HN suppliers.

## Proof

1.1 F2 gives a positive integer a, smooth integral S in |aH| and C in |aH|S| with $BN_{C}<\chi (O_{X}(aH))$. This retains every named weighted, Fano-fourfold and cyclic-cover case; in particular ramification is used as a fundamental divisor only when its actual class is H. [F1, F2, given, construct]

2.1 Apply F3 to that actual smooth curve gap. Its surface restriction certificate, tensor/GRR/Hodge contradiction and threefold HN sum supply $\epsilon >0$ such that every ordinary H-slope-stable torsion-free E with $0<\mu _{H}(E)\le \epsilon$ has Hch2(E)<−H²ch1(E)/2. The integer scaling back from aH has already been proved in F3, so this epsilon is for the original named polarization H. [F3, step 1.1, construct]

3.1 Put $v=H³>0$ and t=td2(X)H/v. Choose an integer $\gamma \ge 4/(v \epsilon )$+|t|, and set Gamma=gamma H²−td2(X) in CH1(X)_Q. Then g=Gamma $H/v=\gamma −t\ge 0$. This is a rational one-cycle with the required nonnegative H intersection; no sign assumption on td2(X)H or Miyaoka theorem is needed. [F5, step 2.1, construct]

4.1 The ordinary scalar BG hypothesis and strict BG3 input are now actual F3 suppliers, so F4 applies to this Gamma. Its universal evaluation argument uses one finite cone HN filtration and the integral gap in 2C2 to retain the positive BN endpoint +1/2; Serre-dual h2 and h0 rank bounds prove the entire closed vertical boundary. Its exact affine Gamma identities, null-denominator calculation, integer twist selection, zero-discriminant argument and positive-discriminant descent then give $Q^{\Gamma }_{\beta ,w}(E)\ge 0$ for every real parameter in the full source upper-grid region and every source-tilt-semistable object in its actual heart. This is exactly the Gamma-BMT inequality of F1, with its Gamma-rank terms and untwisted source slope. [F1, F3, F4, step 3.1, construct]

5.1 Choose rational beta (for example zero) and positive rational alpha²>max(3g,1/4). The rational Gamma of step 3.1 and the full inequality of step 4.1 meet every hypothesis of the second F4 supplier. Its explicitly constructed bounded second heart and charge give a locally finite Bridgeland stability condition, with finite-rank rational charge lattice and an explicit quadratic form negative definite on the charge kernel and nonnegative on semistables. Every skyscraper $O_{x}$ is stable of phase one. Thus the stability condition is geometric and satisfies the stated support property. [F1, F4, step 3.1, step 4.1, construct] ∎

## Remarks

Research-only full named-target proposal. The public named-family Statement is preserved verbatim; the companion source-convention repairs and actual prerequisite bodies must be admitted together. No all-CY3 theorem or use of the beyond-named open problem is asserted. Source references remain bibliographic attribution; the proof above uses the explicit reconstructed local suppliers. No production write, native gate or mathematical-acceptance result is claimed by this proposal.
