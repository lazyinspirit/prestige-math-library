---
id: ex-emg-xs-topological-charge
kind: example
title: Nonbounding sphere carries source-free charge flux
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - prop-emg-xs-rn-local-gauges
  - prop-emg-xs-kn-dyonic-flux
  - thm-emg-xs-kn-verification
  - lem-emg-xs-duality
  - thm-poincare-lemma-for-differential-forms-on-star-shaped-domains
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  prop-emg-xs-rn-local-gauges: mathematical-premise
  prop-emg-xs-kn-dyonic-flux: mathematical-premise
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-xs-duality: mathematical-premise
  thm-poincare-lemma-for-differential-forms-on-star-shaped-domains: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113): global dyonic RN field, flux and exterior domain."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1: RN/KN charged-field context; finite-chain Stokes deductions are given here."
---

## Example

On a sphere-containing dyonic RN domain with $q_m\ne0$, the global closed
field has nonzero flux through each sphere $S_r$. Each such sphere is a
nonbounding finite smooth singular cycle in the field domain; local
north/south potentials exist but no global real one-form potential does.
On a finite full-sphere KN exterior annulus, the same conclusion holds
conditionally for a constant dual rotation with $q\sin\beta\ne0$, under
the exact current batch-21 draft interface. Neither statement gives a
magnetic source, charge quantization, or an empirical observation.

## Facts & Assumptions

**Given:** The RN sphere product and its nonzero magnetic parameter; for the KN comparison, the current batch-21 dyonic-flux interface on a specified finite exterior annulus.

[F1] [[prop-emg-xs-rn-local-gauges]]: the current A-page item proves $\int_{S_r}\mathcal F=4\pi q_m$ and gives smooth local north/south potentials. Its proof is directly supplied using RN data, Hodge calculus and finite-chain Stokes.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: for finite smooth singular chains $c$ and smooth $\eta$, $\int_c d\eta=\int_{\partial c}\eta$.

[L1] [[prop-emg-xs-kn-dyonic-flux]] is a batch-21 draft, not an accepted proof. Its exact current Statement gives, on a full-sphere exterior annulus with $R_0>4|M|$ and $\Delta>0$, the flux parameters $q_e=q\cos\beta$, $q_m=q\sin\beta$ for the constant dual rotation $\mathcal F_\beta=\cos\beta\,\mathcal F+\sin\beta\,\star_g\mathcal F$, and conservation between finite homologous exterior spheres. Its Proof constructs finite sphere and shell cycles. Closedness is supplied separately by [L2], not asserted to be part of this Statement. The flux use remains conditional on the exact draft interface and its proof status.

[L2] [[thm-emg-xs-kn-verification]], Statement, asserts $d\mathcal F=d(\star_g\mathcal F)=0$ on the full-sphere exterior $r>R_0>4|M|$. [[lem-emg-xs-duality]], Statement, gives $d\mathcal F_\beta=0$ for a constant dual rotation of a smooth source-free geometric electrovac datum. Restriction to the specified annulus preserves these equations. Both are current mathematical drafts; this use retains their unaccepted proof status.

[L3] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: every smooth closed $k$-form on a star-shaped open Euclidean domain is exact for $k\ge1$.

[A1] The RN domain avoids $r=0$. Its sphere cycle is constructed in the proof of [F1]. In the KN case use the stated finite exterior annulus and the finite sphere and shell cycles constructed in the exact current proof interface [L1]; choose a constant $\beta$ with $q\sin\beta\ne0$.

## Verification

1.1 In RN, [F1] gives
$\int_{S_r}\mathcal F=4\pi q_m\ne0$. If $S_r=\partial c$ for a finite
smooth singular 3-chain in the field domain, then $d\mathcal F=0$ by the
local potential identities in [F1] and $d^2=0$. Applying [F2] would give
$$4\pi q_m=\int_{S_r}\mathcal F=\int_c d\mathcal F=0,$$
a contradiction. Thus $S_r$ is nonbounding. [F1, F2, A1, algebra]

1.2 The conditional flux interface [L1] gives $\int_{S_r}\mathcal F_\beta=4\pi q\sin\beta\ne0$. By [L2], the unrotated field is a smooth source-free geometric electrovac datum on the full-sphere exterior, and its constant dual rotation is closed on the annulus. If $S_r=\partial c$ for a finite smooth singular 3-chain there, [F2] gives $\int_{S_r}\mathcal F_\beta=\int_c d\mathcal F_\beta=0$, a contradiction. A global smooth real one-form potential would likewise give zero flux by Stokes and $\partial S_r=0$. The north and south stereographic sphere charts, each omitting one pole, give product coordinate domains $\mathbb R\times(R_0,R_1)\times\mathbb R^2$, which are convex and hence star-shaped about any of their points. Pull back $\mathcal F_\beta$ to either domain, apply [L3] with $k=2$, and transport the resulting primitive back. This supplies smooth real patch potentials covering the annulus. Thus the KN sphere is nonbounding and its field is locally but not globally exact, conditionally on [L1-L2]. [L1, L2, L3, F2, A1, algebra]

2.1 If a global smooth potential $\mathcal A$ existed, then [F2] and
$\partial S_r=0$ would give
$$4\pi q_m=\int_{S_r}d\mathcal A=\int_{\partial S_r}\mathcal A=0,$$
contradicting step 1.1's nonzero flux. The smooth patch potentials in [F1]
show that the obstruction is global exactness, not local existence.
[F1, F2, step 1.1, A1, algebra]

3.1 The RN conclusion follows from the current RN local-gauge proof and finite-chain Stokes. The KN conclusion remains conditional on the exact batch-21 flux, full-sphere verification and duality interfaces and their draft proofs. Neither yields a regular magnetic source or a quantization condition. [F1, F2, L1, L2, step 1.1, step 1.2, step 2.1] ∎
## Remarks

The field is a globally defined closed two-form even when it is not globally exact. The excluded center is not filled in by this argument.
