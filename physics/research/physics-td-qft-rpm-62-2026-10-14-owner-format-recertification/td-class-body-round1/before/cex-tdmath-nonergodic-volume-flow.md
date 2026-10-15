---
id: cex-tdmath-nonergodic-volume-flow
kind: counterexample
title: "A finite-volume Hamiltonian map that is not ergodic"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-ergodic-measure-preserving-system","def-hamiltonian-vector-field-and-hamiltonian-function","def-symplectic-form-and-symplectic-manifold","thm-tdmath-hamiltonian-measure-and-recurrence"]
justified_by: []
dependency_roles: {"def-ergodic-measure-preserving-system":"mathematical-premise","def-hamiltonian-vector-field-and-hamiltonian-function":"mathematical-premise","def-symplectic-form-and-symplectic-manifold":"mathematical-premise","thm-tdmath-hamiltonian-measure-and-recurrence":"mathematical-premise"}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
      locator: "Complete 39-page lecture-note part retrieved and read; §2.1, pp.14–16, Liouville phase-space volume; §§2.2–2.3, pp.20–35, Boltzmann equation and H-theorem."
    - title: "Paul Eastman, Introduction to Statistical Mechanics, Chapter 8"
      url: https://web.stanford.edu/~peastman/statmech/phasespace.html
      locator: "Complete author-hosted HTML chapter read; §§8.1–8.3, Hamiltonian phase-space flow, Liouville theorem, and equilibration qualifications."
---

## Statement

On the symplectic torus $\mathbb T^2=(\mathbb R/2\pi\mathbb Z)^2$ with $\omega=dq\wedge dp$, let $H(q,p)=\cos q$. The Hamiltonian flow is complete and preserves finite area, but every nonzero-time map is nonergodic: the invariant set $A=\{(q,p):\cos q>0\}$ has exactly half the total area. This gives a concrete reason volume preservation alone cannot identify time averages with whole-space ensemble averages.

## Facts & Assumptions

**Given:** The symplectic torus, canonical Hamiltonian convention, and area measure.

[A1] $q,p$ are angular coordinates modulo $2\pi$, $\omega=dq\wedge dp$, and $H(q,p)=\cos q$.

[F1] [[def-symplectic-form-and-symplectic-manifold]] and [[def-hamiltonian-vector-field-and-hamiltonian-function]]: a Hamiltonian vector field satisfies $\iota_{X_H}\omega=dH$.

[F2] [[thm-tdmath-hamiltonian-measure-and-recurrence]]: a complete invariant Hamiltonian flow map preserves symplectic area.

[F3] [[def-ergodic-measure-preserving-system]]: ergodicity requires every invariant measurable set to have measure zero or full measure.

## Proof



**Given:** [A1] and the canonical convention [F1].

1.1 Write $X_H=a\partial_q+b\partial_p$. Then $\iota_{X_H}(dq\wedge dp)=a\,dp-b\,dq$, while $dH=-\sin q\,dq$. Equating coefficients gives $a=0$ and $b=\sin q$. The explicit solution is $$\phi_t(q,p)=(q,p+t\sin q\pmod{2\pi}),$$ which is defined for every real $t$ and is a diffeomorphism with inverse $\phi_{-t}$. [A1, F1, algebra]

2.1 Since $H\circ\phi_t=H$, the set $A$ is invariant under every $\phi_t$. The torus has total area $(2\pi)^2=4\pi^2$. The allowed $q$ values in $A$ have total length $\pi$, while $p$ ranges over length $2\pi$, so $m(A)=2\pi^2$, strictly between zero and total area. The map preserves area by [F2], and the invariant set violates the criterion [F3]; hence it is not ergodic for any nonzero sampling time. [A1, F2, F3, step 1.1, algebra] ∎
