---
id: ex-qft-constant-conformal-normalization
kind: example
title: Constant conformal factor verifies field and volume normalization
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - thm-qft-conformal-external-scalar
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-qft-conformal-external-scalar: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Christopher J. Fewster, Lectures on quantum field theory in curved spacetime, Lecture Note 39/2008, §3.1
      url: https://inspirehep.net/files/a02ec079ff7063d1254ba3df86641d86
    - title: John Preskill, Physics 236c Quantum Field Theory in Curved Spacetime, 1990 lecture notes, §§5.10.3–5.10.4
      url: https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf
pipeline_run: physics-td-qft-rpm-62-2026-10-14
---

## Example

Take the theorem's external metric with a constant conformal factor $\Omega=b>0$, so $g=b^2\eta$. The scalar field is smeared by $\Phi_g(f)=\Phi_0(b^3f)$ relative to $d\mathrm{vol}_g=b^4d^4x$. In particular, $R_g=0$ and $P_g=b^{-2}\Box_\eta$. Relative to $d\mathrm{vol}_g(x)d\mathrm{vol}_g(y)$, the two-point kernel is $W_g(x,y)=b^{-2}W_0(x,y)$, so its double smearing is $b^6$ times the flat covariance. This example checks the constant-factor normalization only; it asserts no preferred state for a general curved metric.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a positive constant $b$, and the selected massless field construction of [[thm-qft-conformal-external-scalar]].

[A1] $\mathrm{AC}_\omega$ is the countable-choice assumption of [[def-countable-choice]]; it is inherited from the conditional QFT and EMG supplier chains.

[F1] [[thm-qft-conformal-external-scalar]]: for every smooth positive $\Omega$, the field smearing is $\Phi_g(f)=\Phi_0(\Omega^3f)$, $R_g=-6\Omega^{-3}\Box_\eta\Omega$, and the two-point kernel relative to $d\mathrm{vol}_g(x)d\mathrm{vol}_g(y)$ is $\Omega(x)^{-1}\Omega(y)^{-1}W_0(x,y)$.

## Verification

**Proof technique:** direct.

1.1 Since $\partial_a b=0$, $\Box_\eta b=0$ and the theorem gives $R_g=0$. Also $g^{ab}=b^{-2}\eta^{ab}$ and $d\mathrm{vol}_g=b^4d^4x$, so the density definition gives $\Box_g=b^{-2}\Box_\eta$ and hence $P_g=b^{-2}\Box_\eta$. [given, A1, F1, algebra]

1.2 Substituting $\Omega=b$ into the theorem's smearing rule gives $\Phi_g(f)=\Phi_0(b^3f)$, and its relative kernel is $W_g=b^{-2}W_0$. In the double smearing the two volume factors contribute $b^4b^4$, so the total coefficient is $b^{-2}b^8=b^6$, exactly the coefficient from the two test multipliers $b^3b^3$. [given, F1, step 1.1, algebra]

1.3 At $b=1$ these formulas reduce to the flat metric, field, and covariance. For every $b>0$, the constant multiplier preserves all supports; the example therefore checks the stated normalization and inherited locality without asserting uniqueness of a vacuum on a nonconstant curved metric. [given, A1, F1, step 1.2] ∎
