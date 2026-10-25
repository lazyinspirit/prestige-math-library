---
id: ex-qftx-scft-index-two-state-pair
kind: example
title: A Finite Boson–Fermion Pair in a Superconformal-Index Trace
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier-examples
deps:
  - def-qftx-scft-protected-data
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
physical_scope: "Finite two-state graded Hilbert-space example of the index trace's boson–fermion cancellation. It is not a representation of the full four-dimensional N=4 superconformal algebra and asserts no continuum SCFT or empirical result."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§3, equations (3.1)–(3.3), printed pp. 12–13, for the positive-supercharge index trace and cancellation of paired states."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§§2.2–2.3 and 6.4.2, printed pp. 23–35 and 193–194, for the unitary supercharge representation and index context."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $\mathcal H=\mathbb C|b\rangle\oplus\mathbb C|f\rangle$ be a two-dimensional Hilbert space with orthonormal even state $|b\rangle$ and odd state $|f\rangle$. For a fixed $\lambda>0$, define an odd operator by $Q|b\rangle=\sqrt{\lambda/2}\,|f\rangle$ and $Q|f\rangle=0$, let $S=Q^\dagger$, and set $U=I$. With $\delta=2(SQ+QS)$, both states have eigenvalue $\lambda$, so $\ker\delta=\{0\}$. The graded trace from the SCFT-index definition is

$$\mathcal I(\beta)=\operatorname{Tr}_{\mathcal H}\left((-1)^F e^{-\beta\delta}\right)=e^{-\beta\lambda}-e^{-\beta\lambda}=0$$

for every $\beta>0$, equal to the trace on $\ker\delta$. This is a finite model of one supercharge pair only; it is not claimed to realize the full superconformal algebra or a four-dimensional gauge theory.

## Example references

[Kinney, Maldacena, Minwalla, and Raju, §3, equations (3.1)–(3.3), printed pp. 12–13](https://arxiv.org/pdf/hep-th/0510251v1)

[David Tong, *Supersymmetric Field Theory*, §§2.2–2.3 and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

## Facts & Assumptions

**Given:** The finite graded Hilbert space, operator $Q$, its adjoint $S$, and $\lambda>0$ specified in the example.

[F1] [[def-qftx-scft-protected-data]]: the index trace is $\operatorname{Tr}((-1)^F e^{-\beta\delta}U)$ with $\delta=2(SQ+QS)$ and $U$ commuting with both supercharges.

[A1] The states $|b\rangle,|f\rangle$ are an orthonormal basis, $U=I$, and $\lambda$ is a fixed positive real number.

## Verification

1.1 From $Q|b\rangle=\sqrt{\lambda/2}|f\rangle$, $Q|f\rangle=0$, and $S=Q^\dagger$, we have $SQ|b\rangle=(\lambda/2)|b\rangle$, $QS|b\rangle=0$, $SQ|f\rangle=0$, and $QS|f\rangle=(\lambda/2)|f\rangle$. Hence $\delta|b\rangle=\lambda|b\rangle$ and $\delta|f\rangle=\lambda|f\rangle$, so the kernel is zero. [given, F1, A1, algebra]

2.1 The even state contributes $e^{-\beta\lambda}$ to the graded trace and the odd state contributes $-e^{-\beta\lambda}$. Their sum is zero for every $\beta>0$, and it equals the zero trace on the zero-dimensional kernel. [given, F1, A1, step 1.1, algebra] ∎
