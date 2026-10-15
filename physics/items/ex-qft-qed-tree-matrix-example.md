---
id: ex-qft-qed-tree-matrix-example
kind: example
title: Exact rational Dirac Ward matrix example
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - lem-qft-qed-tree-ward
  - def-qft-dirac-projections
dependency_roles:
  lem-qft-qed-tree-ward: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§6.4–6.5
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; finite rational QED propagator and tree-current rule context.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted draft; QED tree and Ward identities, printed pp. 400–404.
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

For any $\mu>0$, use $h=\operatorname{diag}(1,-1,-1,-1)$, $p=(0,0,0,0)$, and $k=(2\mu,0,0,0)$. Both $p$ and $p+k$ are off shell. The exact rational matrices are
$$ S_0(p)=-\frac{1}{\mu}I_4,\qquad S_0(p+k)=\frac{2\beta+I_4}{3\mu},\qquad \Gamma(k)=2\mu\beta . $$

## Facts & Assumptions

**Given:** $\mu>0$, $p=0$, $k=(2\mu,0,0,0)$, and the Dirac matrices in [[lem-qft-qed-tree-ward]].

[F1] [[lem-qft-qed-tree-ward]]: when both $h(p,p)-\mu^2$ and $h(p+k,p+k)-\mu^2$ are nonzero, $S_0(p)=(\Gamma(p)+\mu I_4)/(h(p,p)-\mu^2)$ and $S_0(p+k)\Gamma(k)S_0(p)=S_0(p)-S_0(p+k)$.

[F2] [[def-qft-dirac-projections]]: $\beta=\operatorname{diag}(I_2,-I_2)$, so $\beta^2=I_4$; the item fixes $\Gamma(p)$ with the effective matrix $h=-\eta$.

[A1] $\mu>0$ has inverse-length units; the momenta $p=0$ and $k=(2\mu,0,0,0)$ use the same inverse-length coordinate convention as [[lem-qft-qed-tree-ward]].

## Verification

**Given:** [F1], [F2], and the numerical momenta and positive parameter in the Example.

1.1 Here $h(p,p)-\mu^2=-\mu^2$ and $h(p+k,p+k)-\mu^2=3\mu^2$, so both rational inverses are defined. Since $\Gamma(p)=0$ and $\Gamma(k)=2\mu\beta$, the inverse formula in [F1] gives the displayed $S_0(p)$ and $S_0(p+k)$. [A1, F1, algebra]

2.1 Using $\beta^2=I_4$ from [F2],
$$ S_0(p+k)\Gamma(k)S_0(p) =-\frac{(2\beta+I_4)2\beta}{3\mu} =-\frac{4I_4+2\beta}{3\mu} =S_0(p)-S_0(p+k). $$
Thus this off-shell rational instance satisfies the exact matrix Ward identity. [F1, F2, step 1.1, algebra] ∎
