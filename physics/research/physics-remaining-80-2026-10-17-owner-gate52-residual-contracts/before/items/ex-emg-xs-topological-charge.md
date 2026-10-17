---
id: ex-emg-xs-topological-charge
kind: example
title: Nonbounding sphere carries source-free charge flux
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - prop-emg-xs-rn-local-gauges
  - prop-emg-xs-kn-dyonic-flux
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  prop-emg-xs-rn-local-gauges: mathematical-premise
  prop-emg-xs-kn-dyonic-flux: mathematical-premise
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

**Given:** The RN sphere product and its nonzero magnetic parameter; for the
KN comparison, the current batch-21 dyonic-flux interface on a specified
finite exterior annulus.

[F1] [[prop-emg-xs-rn-local-gauges]]: the current A-page item proves
$\int_{S_r}\mathcal F=4\pi q_m$ and gives smooth local north/south
potentials. Its proof is directly supplied using RN data, Hodge calculus
and finite-chain Stokes.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: for finite smooth
singular chains $c$ and smooth $\eta$,
$\int_c d\eta=\int_{\partial c}\eta$.

[L1] [[prop-emg-xs-kn-dyonic-flux]] is a batch-21 draft, not an accepted
proof. Its exact current statement uses a full-sphere exterior annulus
$R_0<r_1<r_2$ with $R_0>4|M|$ and $\Delta>0$; for
$\mathcal F_\beta=\cos\beta\,\mathcal F+\sin\beta\,\star\mathcal F$ it
states $q_e=q\cos\beta$, $q_m=q\sin\beta$, closedness, and equality of
finite homologous sphere fluxes. Its proof relies on current batch-3
Maxwell-current and finite-chain Gauss drafts, so the KN use remains
conditional on that exact interface and its proof status.

[A1] Each $S_r$ is oriented outward and represents a finite smooth singular
2-cycle with $\partial S_r=0$. The RN domain avoids $r=0$. In the KN case
use the stated finite exterior annulus and choose a constant $\beta$ with
$q\sin\beta\ne0$.

## Verification

1.1 In RN, [F1] gives
$\int_{S_r}\mathcal F=4\pi q_m\ne0$. If $S_r=\partial c$ for a finite
smooth singular 3-chain in the field domain, then $d\mathcal F=0$ by the
local potential identities in [F1] and $d^2=0$. Applying [F2] would give
$$4\pi q_m=\int_{S_r}\mathcal F=\int_c d\mathcal F=0,$$
a contradiction. Thus $S_r$ is nonbounding. [F1, F2, A1, algebra]

1.2 Under the exact conditional interface [L1], the chosen $\beta$ gives
$\int_{S_r}\mathcal F_\beta=4\pi q\sin\beta\ne0$ and
$d\mathcal F_\beta=0$ on the annulus. If a sphere there bounded a finite
smooth singular 3-chain, [F2] would force its flux to be zero; if it had a
global potential, the closed-cycle Stokes identity would likewise force
zero flux. Both contradict [L1]. Hence the KN sphere is nonbounding and has
no global potential, conditional on that draft interface.
[L1, F2, A1, algebra]

2.1 If a global smooth potential $\mathcal A$ existed, then [F2] and
$\partial S_r=0$ would give
$$4\pi q_m=\int_{S_r}d\mathcal A=\int_{\partial S_r}\mathcal A=0,$$
contradicting step 1.1's nonzero flux. The smooth patch potentials in [F1]
show that the obstruction is global exactness, not local existence.
[F1, F2, step 1.1, A1, algebra]

3.1 The RN conclusion follows from the current RN local-gauge proof and
finite-chain Stokes. The KN conclusion remains conditional on the exact
batch-21 dyonic-flux interface and upstream draft proofs. Neither yields a
regular magnetic source or a quantization condition. [F1, F2, L1, step 1.1, step 2.1] ∎
## Remarks

The field is a globally defined closed two-form even when it is not globally
exact. The excluded center is not filled in by this argument.
