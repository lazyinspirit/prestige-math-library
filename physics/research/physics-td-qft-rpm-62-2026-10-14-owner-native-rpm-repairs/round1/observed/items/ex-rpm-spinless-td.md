---
id: ex-rpm-spinless-td
kind: example
title: Spinless TD geodesic limit
status: draft
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
  - post-rpm-mpd-truncation
  - pthm-rpm-td-invariants
dependency_roles:
  def-rpm-body-moments: formulation-prerequisite
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
verification: {}
---

## Example

Assume the neutral pole-dipole equations of [[post-rpm-mpd-truncation]] and the TD admissible region of [[pthm-rpm-td-invariants]]: $p$ is future timelike, $K$ is invertible, $W=K^{-1}p$ is future timelike, and the initial spin tensor satisfies $S^{ab}=0$. Then throughout the local solution the spin remains zero, $p$ is parallel transported, and
$$U=\frac{c}{\mu}p,\qquad \mu=\sqrt{-g(p,p)}=\text{constant},\qquad D_\tau U=0.$$
Thus the representative curve is a timelike geodesic with constant rest mass $M=\mu/c$ in this restricted branch.

## Facts & Assumptions

**Given:** The adopted neutral pole-dipole equations, the TD algebraic closure on its admissible region, and an initial zero spin tensor.

[A2] The initial TD state has $S^{ab}=0$ and lies in the open region where $K$ is invertible and $W=K^{-1}p$ is future timelike.

[A1] The neutral pole-dipole evolution is adopted as a finite-dimensional test-body truncation. [[post-rpm-mpd-truncation]]

[F1] The TD closure preserves the constraint and invariants on its local admissible domain; at $S=0$ it gives $p=(\mu/c)U$, $D_\tau p=0$, and $D_\tau U=0$. [[pthm-rpm-td-invariants]]

[F2] The variables $p,S$ are moments under the stated local body convention; this example adds the TD representative condition. [[def-rpm-body-moments]]

## Verification

**Proof technique:** direct.

1.1 By [A2], [F1] and the zero initial tensor, the spinless branch of the TD closure has $S=0$ throughout the local solution. Then the pole-dipole force is zero by [A1], and [F1] gives $D_\tau p=0$ and $U=cp/\mu$. Since $\mu$ is constant, covariant differentiation gives $D_\tau U=(c/\mu)D_\tau p=0$. [given, A1, A2, F1, algebra]

2.1 The normalization $g(U,U)=-c^2$ and $p=(\mu/c)U$ imply $g(p,p)=-\mu^2$ and the positive rest-mass parameter is $M=\mu/c$. The conclusion holds only while the solution stays in the local TD admissible region [A2]; it makes no claim of global extension. [given, A2, F1, F2, step 1.1, algebra] ∎

## Remarks

The result is the zero-spin specialization of the adopted neutral TD model. It does not derive that model from the body-moment definition and does not assert completeness of the geodesic or the full spinning-body system.
