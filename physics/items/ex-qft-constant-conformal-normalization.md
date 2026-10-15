---
id: ex-qft-constant-conformal-normalization
kind: example
title: Constant conformal factor verifies field and volume normalization
status: published
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
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
pipeline_run: physics-td-qft-rpm-62-2026-10-14
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Take the theorem's external metric with a constant conformal factor $\Omega=b>0$, so $g=b^2\eta$. The scalar field is smeared by $\Phi_g(f)=\Phi_0(b^3f)$ relative to $d\mathrm{vol}_g=b^4d^4x$. In particular, $R_g=0$ and $P_g=b^{-2}\Box_\eta$. Relative to $d\mathrm{vol}_g(x)d\mathrm{vol}_g(y)$, the two-point kernel is $W_g(x,y)=b^{-2}W_0(x,y)$, so its double smearing is $b^6$ times the flat covariance. This example checks the constant-factor normalization only; it asserts no preferred state for a general curved metric.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a positive constant $b$, and the selected massless field construction of [[thm-qft-conformal-external-scalar]].

[A1] $\mathrm{AC}_\omega$ is the countable-choice assumption of [[def-countable-choice]]; it is inherited from the conditional QFT and EMG supplier chains.

[F1] [[thm-qft-conformal-external-scalar]]: $R_g=-6\Omega^{-3}\Box_\eta\Omega$ and $P_g(\Omega^{-1}u)=\Omega^{-3}\Box_\eta u$ for smooth $u$.

[F2] [[thm-qft-conformal-external-scalar]]: for every compact test $f$, $\Phi_g(f)=\Phi_0(\Omega^3f)$.

[F3] [[thm-qft-conformal-external-scalar]]: relative to $d\mathrm{vol}_g(x)d\mathrm{vol}_g(y)$, $W_g(x,y)=\Omega(x)^{-1}\Omega(y)^{-1}W_0(x,y)$.

## Verification

**Proof technique:** direct.

1.1 Since $\partial_a b=0$, $\Box_\eta b=0$ and [F1] gives $R_g=0$. Also $g^{ab}=b^{-2}\eta^{ab}$ and $d\mathrm{vol}_g=b^4d^4x$, so the density definition gives $\Box_g=b^{-2}\Box_\eta$ and hence $P_g=b^{-2}\Box_\eta$. [given, A1, F1, algebra]

2.1 Substituting $\Omega=b$ into [F2] gives $\Phi_g(f)=\Phi_0(b^3f)$; [F3] gives the relative kernel $W_g=b^{-2}W_0$. In the double smearing the two volume factors contribute $b^4b^4$, so the total coefficient is $b^{-2}b^8=b^6$, exactly the coefficient from the two test multipliers $b^3b^3$. [given, A1, F2, F3, step 1.1, algebra]

3.1 At $b=1$ these formulas reduce to the flat metric, field, and covariance. Locality is inherited from the theorem and is not checked here; this example checks only the stated normalization and does not assert uniqueness of a vacuum on a nonconstant curved metric. [given, F2, F3, step 2.1] ∎
