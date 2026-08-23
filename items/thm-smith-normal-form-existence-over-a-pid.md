---
id: thm-smith-normal-form-existence-over-a-pid
kind: theorem
title: "Every matrix over a PID has a Smith normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-equivalence-and-smith-normal-form-over-a-pid, thm-simultaneous-basis-theorem-for-pid-submodules, thm-splitting-lemma-for-modules, cor-free-modules-are-projective-and-flat, thm-first-isomorphism-theorem-modules]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Theorem 2.1.2"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "K. Conrad, Modules over a PID, aligned-basis theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Every rectangular matrix over a PID is equivalent to a Smith diagonal matrix. Equivalently, for every $A\in M_{m\times n}(R)$ there are invertible $P,Q$ such that

$$PAQ=\operatorname{diag}(d_1,\ldots,d_r,0,\ldots,0),\qquad d_1\mid\cdots\mid d_r,$$

with every $d_i\ne0$. This is an existence theorem over a PID and does not assert a Euclidean row-reduction algorithm.

## Facts & Assumptions

**Given:** Matrix equivalence and Smith form as in [[def-matrix-equivalence-and-smith-normal-form-over-a-pid]]; a matrix as a homomorphism $\varphi:R^n\to R^m$; free modules are projective ([[cor-free-modules-are-projective-and-flat]]); and the first isomorphism theorem identifies $R^n/\ker\varphi$ with $\operatorname{im}\varphi$ ([[thm-first-isomorphism-theorem-modules]]).

[L1] A submodule of a finite free PID module admits aligned bases with a divisibility chain ([[thm-simultaneous-basis-theorem-for-pid-submodules]]).

[L2] Given a section of a short exact sequence, the middle module is the direct sum of the kernel and the section image ([[thm-splitting-lemma-for-modules]]).

## Proof

**Proof technique:** constructive.

1.1 Regard $A$ as $\varphi:R^n\to R^m$ and put $I=\operatorname{im}\varphi$. By [L1], both $I\le R^m$ and $\ker\varphi\le R^n$ are finite free; the sequence $0\to\ker\varphi\to R^n\to I\to0$ is exact. [given, L1]

2.1 Apply [L1] to align $I$ in the codomain: choose a basis $e_1,\ldots,e_m$ of $R^m$ such that $d_1e_1,\ldots,d_re_r$ is a basis of $I$ with $d_1\mid\cdots\mid d_r$. [step 1.1, L1]

2.2 Since $I$ is free and projective, the surjection $R^n\to I$ has a section. By [L2], $R^n=\ker\varphi\oplus s(I)$. Place the lifted basis $s(d_1e_1),\ldots,s(d_re_r)$ first and then a basis of the kernel to obtain a domain basis. [step 1.1, L2, given, choose]

3.1 In the bases from steps 2.1 and 2.2, $\varphi$ sends the lifted vector for $d_ie_i$ to $d_ie_i$ and kills the kernel basis, so its matrix is the displayed Smith diagonal. Empty matrices, the zero map, and all rank deficiencies give the appropriate empty or trailing-zero diagonal. [step 2.1, step 2.2, construct, discharge-construct] ∎
