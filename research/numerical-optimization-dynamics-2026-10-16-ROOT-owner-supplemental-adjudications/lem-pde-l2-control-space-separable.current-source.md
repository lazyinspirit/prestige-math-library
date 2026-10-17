---
id: lem-pde-l2-control-space-separable
kind: lemma
title: L2 controls on a bounded spatial region form a separable Hilbert space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-pde-box-control-set
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§2, printed pp. 5–7: weak compactness and the separable/reflexive space setting used in existence arguments."
---

## Statement

Assume Countable Choice. Let $E\subset\mathbb R^d$ be bounded and Lebesgue measurable. Then $U=L^2(E;\mathbb R)$ with its integral inner product is a separable real Hilbert space.

## Facts & Assumptions
**Given:** Countable Choice; the bounded measurable domain $E$ and the real $L^2(E)$ convention.

[F1] Rational box-step functions form a countable dense subset of $L^2(\mathbb R^d)$ under Countable Choice ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F2] Extending a function on $E$ by zero preserves its $L^2$ norm; restriction from $\mathbb R^d$ to $E$ cannot increase the $L^2$ norm.

[F3] $L^2(E;\mathbb R)$ with its integral pairing is a real Hilbert space under Countable Choice ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-countable-choice]]).

## Proof

1.1 Define $Z:L^2(E)\to L^2(\mathbb R^d)$ by zero extension and $R:L^2(\mathbb R^d)\to L^2(E)$ by restriction. The maps are well-defined on almost-everywhere classes, $RZ$ is the identity on $L^2(E)$, and $\|R f\|_{L^2(E)}\le\|f\|_{L^2(\mathbb R^d)}$. [given, construct]

2.1 Let $\mathcal S$ be the countable dense rational box-step family from [F1]. The set $R(\mathcal S)$ is countable. For $q\in L^2(E)$, choose any $\varepsilon>0$ and extend it by $Zq$. By density there is $s\in\mathcal S$ with $\|Zq-s\|_{L^2(\mathbb R^d)}<\varepsilon$; then $\|q-Rs\|_{L^2(E)}=\|R(Zq-s)\|_2\le\|Zq-s\|_2<\varepsilon$. Thus $R(\mathcal S)$ is dense in $L^2(E)$, proving separability. [F1, step 1.1, given]

3.1 The integral pairing makes $L^2(E)$ a real Hilbert space by [F3], so it is both separable and Hilbert. Countable Choice is the only stated choice principle in [F1] and [F3]. [F1, F3, step 2.1] ∎
