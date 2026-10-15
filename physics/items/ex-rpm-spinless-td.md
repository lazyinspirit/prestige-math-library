---
id: ex-rpm-spinless-td
kind: example
title: Spinless TD geodesic limit
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The zero-spin invariant branch of the adopted neutral TD pole-dipole truncation on its local admissible region. It recovers a timelike geodesic with constant rest mass and makes no global-existence or empirical claim."
empirical_premises: []
deps:
  - def-rpm-body-moments
  - lem-rpm-td-local-closure
  - post-rpm-mpd-truncation
  - pthm-rpm-td-invariants
dependency_roles:
  def-rpm-body-moments: formulation-prerequisite
  lem-rpm-td-local-closure: mathematical-premise
  post-rpm-mpd-truncation: physical-assumption
  pthm-rpm-td-invariants: physical-result
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 3, pole-dipole equations and TD condition; the local zero-spin branch and geodesic limit are derived from the adopted model here.
    - title: David Tong, General Relativity, Cambridge Part III lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 1.2.1, timelike geodesic equation and proper-time normalization; the MPD reduction is a separate conditional model calculation.
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

Assume the neutral pole-dipole equations of [[post-rpm-mpd-truncation]] and the TD admissible region of [[pthm-rpm-td-invariants]]: $p$ is future timelike, $K$ is invertible, $W=K^{-1}p$ is future timelike, and the initial spin tensor satisfies $S^{ab}=0$. Then throughout the local solution the spin remains zero, $p$ is parallel transported, and
$$U=\frac{c}{\mu}p,\qquad \mu=\sqrt{-g(p,p)}=\text{constant},\qquad D_\tau U=0.$$
Thus the representative curve is a timelike geodesic with constant rest mass $M=\mu/c$ in this restricted branch.

## Facts & Assumptions

**Given:** The adopted neutral pole-dipole equations, the TD algebraic closure on its admissible region, and an initial zero spin tensor.

[A2] The initial TD state has $S^{ab}=0$ and lies in the open region where $K$ is invertible and $W=K^{-1}p$ is future timelike.

[A1] The neutral pole-dipole evolution is adopted as a finite-dimensional test-body truncation. [[post-rpm-mpd-truncation]]

[F1] A solution satisfying TD throughout the local admissible domain has constant $\mu$ and spin-tensor norm. If its initial spin tensor is zero, it remains zero and gives $p=(\mu/c)U$, $D_\tau p=0$, and $D_\tau U=0$. [[pthm-rpm-td-invariants]]

[F2] The variables $p,S$ are moments under the stated local body convention; this example adds the TD representative condition. [[def-rpm-body-moments]]

[F3] On the open region where $p$ and $W=K^{-1}p$ are future timelike and $K$ is invertible, the normalized closure $U=cW/\sqrt{-g(W,W)}$ defines a smooth local ODE with the pole-dipole equations. A solution initialized with $S^{ab}p_b=0$ preserves that constraint. [[lem-rpm-td-local-closure]]

## Verification

**Proof technique:** direct.

1.1 The zero initial tensor in [A2] gives $S^{ab}p_b=0$ initially. The adopted equations [A1] and normalized TD closure are exactly the local ODE of [F3], so that supplier preserves the TD constraint throughout the local solution in the admissible region. The hypotheses of [F1] now hold: the zero initial tensor remains zero and $\mu>0$ is constant. The force in [A1] vanishes, hence $D_\tau p=0$ and $U=cp/\mu$. Covariant differentiation gives $D_\tau U=(c/\mu)D_\tau p=0$. [given, A1, A2, F1, F3, algebra]

2.1 The normalization $g(U,U)=-c^2$ and $p=(\mu/c)U$ imply $g(p,p)=-\mu^2$ and the positive rest-mass parameter is $M=\mu/c$. The conclusion holds only while the solution stays in the local TD admissible region [A2]; it makes no claim of global extension. [given, A2, F1, F2, step 1.1, algebra] ∎

## Remarks

The result is the zero-spin specialization of the adopted neutral TD model. It does not derive that model from the body-moment definition and does not assert completeness of the geodesic or the full spinning-body system.
