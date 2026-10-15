---
id: lem-qft-photon-no-global-polarization-frame
kind: lemma
title: No global continuous real polarization frame
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-photon-transverse-space
  - thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Theorem 2.28, p.135
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
      locator: Complete author-hosted chapter 2; Theorem 2.28 proves that even-dimensional spheres have no nowhere-zero tangent vector field.
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; photon polarization vectors and transverse modes.
---

## Statement

Assume Countable Choice. For $n\in S^2\subset\mathbb R^3$, let $E_n=n^\perp=\operatorname{Ran}(I-nn^T)$ be the real transverse plane. There do not exist continuous maps $e_1,e_2:S^2\to\mathbb R^3$ such that, for every $n$, $(e_1(n),e_2(n))$ is an orthonormal basis of $E_n$. A continuous real orthonormal polarization frame would in particular give a continuous nowhere-zero tangent vector field on $S^2$.

## Facts & Assumptions

**Given:** Countable Choice; the transverse fiber is $E_n=n^\perp$; and the published even-sphere tangent-field theorem.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The real range of $P_T(n)=I-nn^T$ is exactly $n^\perp$. [[def-qft-photon-transverse-space]]

[F2] For every positive even $d$, there is no continuous nowhere-zero tangent vector field on $S^d$. [[thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere]]

## Proof

**Given:** [A1], [F1], and [F2].

1.1 If such a frame existed, then $e_1(n)\in n^\perp$ for every $n$ by [F1], and $|e_1(n)|=1$ by orthonormality. Therefore $e_1$ is a continuous nowhere-zero tangent vector field on $S^2$. [given, F1, algebra]

2.1 Since $2$ is a positive even integer, [F2] forbids the vector field produced in step 1.1. This contradiction proves the nonexistence of the global frame. [A1, F2, step 1.1] ∎
