---
id: def-nrqmx-resonance-matrix-element-poles
kind: definition
domain: mathematics
library: mathematics
title: Continued resolvent matrix elements and resonance poles
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-complex-differentiability-holomorphic-and-entire
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - thm-self-adjoint-resolvent-estimate
dependency_roles:
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "M. Gadella and G. Pronko, The Friedrichs Model and its Use in Resonance Phenomena, §1.1 and §2"
      url: "https://arxiv.org/pdf/1106.5782"
      locator: "PDF pp.2–4: resonance through analytic continuation of resolvent matrix elements and the reduced resolvent in the Friedrichs model."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $T$ be self-adjoint on a complex Hilbert space $\mathcal H$ whose inner product is linear in the first variable, use the resolvent convention $R_T(z)=(T-zI)^{-1}$, and let $X\subseteq\mathcal H$ be a specified vector subspace. For $f,h\in X$, the scalar resolvent matrix element is

$$r_{f,h}(z):=\langle R_T(z)f,h\rangle,\qquad \operatorname{Im}z>0.$$

Given an open real interval $I$, a point $E_0\in I$, and a disk $D$ centered at $E_0$, a local analytic continuation of these matrix elements through $E_0$ is a specified family of holomorphic functions $\widetilde r_{f,h}:D\to\mathbb C$ agreeing with $r_{f,h}$ on $D\cap\{\operatorname{Im}z>0\}$, for the stated $f,h\in X$. A **meromorphic continuation** on $D$ is instead a specified family $\widetilde r_{f,h}$ agreeing with $r_{f,h}$ on $D\cap\{\operatorname{Im}z>0\}$, holomorphic on $D$ except for isolated poles. At every crossing point where no pole occurs it is a regular analytic continuation on a smaller neighborhood. For such a meromorphic continuation, if $z_0\in D$ is nonreal and for some $f,h\in X$ the continued function satisfies

$$\widetilde r_{f,h}(z)=(z-z_0)^{-k}q(z)$$

on a punctured neighborhood of $z_0$, for an integer $k\ge1$ and a holomorphic $q$ with $q(z_0)\ne0$, then $z_0$ is a pole of order $k$ of that continued matrix element. Such a pole is called a resonance matrix-element pole for the specified pair $(T,X)$ and continuation. This definition asserts neither that a continuation exists nor that a pole is an eigenvalue of $T$; the continuation and the chosen test vectors are part of the data.

## Definition references

[[def-complex-differentiability-holomorphic-and-entire]]

[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[thm-self-adjoint-resolvent-estimate]]
