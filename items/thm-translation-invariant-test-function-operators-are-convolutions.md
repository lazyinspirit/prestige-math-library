---
id: "thm-translation-invariant-test-function-operators-are-convolutions"
kind: "theorem"
title: "Translation invariant test function operators are convolutions"
deps: ["thm-convolution-with-a-test-function-is-smooth", "lem-test-function-lf-topology-universal-property", "lem-distribution-pairing-with-smooth-parameter-families", "thm-local-finite-order-characterization-of-distributions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A continuous complex-linear map $L:\mathcal D(\mathbb R^n)\to C(\mathbb R^n)$, with the compact-open topology in the target, commutes with all translations if and only if it has the form $L\varphi=u*\varphi$ for a unique distribution $u$. Its values are smooth, and it is continuous into $C^\infty(\mathbb R^n)$ with uniform convergence of all derivatives on compact sets. Here $T_hf(x)=f(x-h)$. These assertions hold in ZF.

## Facts & Assumptions

[F1] Convolution with a test is smooth, with derivatives on the test factor ([[thm-convolution-with-a-test-function-is-smooth]]).

[F2] Stagewise continuity of a linear map from $\mathcal D$ into a locally convex space gives LF continuity ([[lem-test-function-lf-topology-universal-property]]).

[F3] Smooth parameter test families pair smoothly with distributions ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F4] Distributions satisfy a finite-order estimate on each fixed compact support ([[thm-local-finite-order-characterization-of-distributions]]).

## Proof

**Given:** a continuous linear $L$ as in the statement.

1.1 Suppose $L$ commutes with translations and put $\check\psi(y)=\psi(-y)$. Reflection maps $\mathcal D_K$ to $\mathcal D_{-K}$ with unchanged derivative seminorms, so F2 makes it continuous on $\mathcal D$. Evaluation at zero is continuous on $C(\mathbb R^n)$ for the compact-open topology. Consequently $u(\psi)=(L\check\psi)(0)$ is a continuous linear test functional, hence a distribution. [given, F2]

2.1 For fixed $x$, reflection of the test $y\mapsto\varphi(x-y)$ is $z\mapsto\varphi(x+z)=T_{-x}\varphi(z)$. Thus $u(\varphi(x-\cdot))=(LT_{-x}\varphi)(0)=(T_{-x}L\varphi)(0)=L\varphi(x)$. F1 (or F3 for this parameter family) shows this is smooth. If another distribution gives the same operator, evaluating its convolution with $\check\psi$ at zero recovers its value on every $\psi$, so it equals $u$. [step 1.1, given, F1, F3]

3.1 Conversely fix a distribution $u$, a source support $K$, a target compact $H$, and target derivative order $r$. All tests $(\partial^\alpha\varphi)(x-\cdot)$ with $x\in H$, $|\alpha|\le r$, and $\varphi\in\mathcal D_K$ are supported in the single compact $H-K$. F4 there gives $C,m$, and F1 gives $\max_{|\alpha|\le r}\sup_H|\partial^\alpha(u*\varphi)|\le Cp_{m+r}(\varphi)$. This proves continuity from each stage into the smooth-function topology, hence continuity on $\mathcal D$ by F2. Direct substitution gives $u*(T_h\varphi)(x)=u(\varphi(x-h-\cdot))=(T_h(u*\varphi))(x)$, proving translation commutation. Empty source or target compact sets give zero seminorms; the zero distribution gives the zero operator. No closed-graph theorem or choice is used. $\square$ [step 2.1, F1, F2, F4]
