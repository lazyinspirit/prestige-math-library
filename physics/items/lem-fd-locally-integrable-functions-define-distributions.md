---
id: lem-fd-locally-integrable-functions-define-distributions
kind: lemma
title: Locally integrable functions define distributions
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-test-function-lf-topology-universal-property
dependency_roles:
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  lem-test-function-lf-topology-universal-property: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis, lecture notes, Chapter 7, Section 7.3"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
proof_strategy: direct
---

## Statement

Let $\Omega\subseteq\mathbb R^n$ be open and let $f\in L^1_{\mathrm{loc}}(\Omega;\mathbb C)$. The regular functional $T_f$ defined by
$$\langle T_f,\varphi\rangle=\int_\Omega f(x)\varphi(x)\,dx\qquad(\varphi\in\mathcal D(\Omega))$$
is a distribution on $\Omega$ with the LF test-function topology.

## Statement references

[[def-regular-distribution-from-a-locally-integrable-function|regular functional from a locally integrable function]]

[[lem-test-function-lf-topology-universal-property|LF test-function topology universal property]]

## Facts & Assumptions

**Given:** the open set $\Omega$, the locally integrable function $f$, and the regular functional from the Statement.

[F1] [[def-regular-distribution-from-a-locally-integrable-function]] defines $\langle T_f,\varphi\rangle=\int_\Omega f(x)\varphi(x)\,dx$. If $K=\operatorname{supp}\varphi$, it gives $|\langle T_f,\varphi\rangle|\leq\sup_K|\varphi|\int_K|f|$ and states that the functional is complex-linear and well-defined.

[F2] [[lem-test-function-lf-topology-universal-property]] states that a linear map from $\mathcal D(\Omega)$ to a locally convex space is continuous if and only if its restriction to every fixed-support space $\mathcal D_K$ is continuous. This holds in ZF.

## Proof

1.1 The functional $T_f$ is linear by [F1]. For each compact $K\subseteq\Omega$, [F1] gives $|\langle T_f,\varphi\rangle|\leq\bigl(\int_K|f|\bigr)p_{0,K}(\varphi)$ for every $\varphi\in\mathcal D_K$, where $p_{0,K}(\varphi)=\sup_{x\in K}|\varphi(x)|$ and the value is $0$ when $K=\varnothing$. Since $f$ is locally integrable, the coefficient is finite, so the restriction $T_f|_{\mathcal D_K}$ is continuous. [given, F1, algebra]

2.1 Apply [F2] to the linear map $T_f$: every fixed-support restriction is continuous by step 1.1, so $T_f$ is continuous on $\mathcal D(\Omega)$ with its LF topology. A continuous complex-linear functional on this space is a distribution, as claimed. The proof uses no choice axiom and asserts no injectivity result. [given, F1, F2, step 1.1] ∎
