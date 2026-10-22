---
id: lem-ip-bv-extension-and-translation
kind: lemma
title: BV extension and translation bounds
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - def-translation-of-a-function-on-rn
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - lem-ip-bv-lipschitz-trace-and-zero-extension
  - lem-ip-bv-strict-approximation
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by Lipschitz graph neighborhoods with $\Omega$ on one side of each graph. The zero-extension map is bounded from $BV(\Omega)$ to $BV(\mathbb R^n)$, with support in $\overline\Omega$, and there is a finite $C_\Omega$ such that $$\|\widetilde u\|_{L^1(\mathbb R^n)}+TV(\widetilde u;\mathbb R^n)\le C_\Omega\bigl(\|u\|_{L^1(\Omega)}+TV(u;\Omega)\bigr)$$ for every $u\in BV(\Omega)$. For every $v\in BV(\mathbb R^n)$ and $h\in\mathbb R^n$, $$\|v(\cdot+h)-v\|_{L^1(\mathbb R^n)}\le |h|TV(v;\mathbb R^n).$$

## Statement references

[[lem-ip-bv-lipschitz-trace-and-zero-extension|The bounded trace and zero-extension formula on Lipschitz domains.]]

[[def-ip-spatial-bv-and-distributional-tv|The full-space BV and total-variation conventions.]]

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain $\Omega$, $u\in BV(\Omega)$, $v\in BV(\mathbb R^n)$, and $h\in\mathbb R^n$.

[F1] The trace result gives a zero extension in $BV(\mathbb R^n)$ with variation bounded by $C_\Omega(\|u\|_1+TV(u;\Omega))$. Its proof remains escalated in this batch. ([[lem-ip-bv-lipschitz-trace-and-zero-extension]])

[F2] Under Countable Choice, full-space BV functions admit compactly supported smooth strict approximations. ([[lem-ip-bv-strict-approximation]])

[F3] Translations preserve Lebesgue measure and the $L^1$ norm. ([[def-translation-of-a-function-on-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F4] A differentiable function with continuous derivative satisfies the one-dimensional fundamental theorem of calculus along compact intervals. ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]])

[F5] Nonnegative integrands may be integrated by iterated integration. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[A1] Countable Choice is assumed for full-space strict approximation. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice, $u\in BV(\Omega)$, $v\in BV(\mathbb R^n)$, and $h\in\mathbb R^n$.

1.1 The zero extension is in $BV(\mathbb R^n)$ by [F1]. Its $L^1$ norm equals $\|u\|_{L^1(\Omega)}$, and [F1] bounds its full-space variation by $C_\Omega(\|u\|_1+TV(u;\Omega))$; its support is contained in $\overline\Omega$ by definition. [F1, given]

1.2 Let first $v\in C_c^\infty(\mathbb R^n)$. The fundamental theorem [F4] along the segment from $x$ to $x+h$ gives $v(x+h)-v(x)=\int_0^1h\cdot\nabla v(x+th)\,dt$. Integrate the absolute value in $x$, apply Tonelli [F5], and use translation invariance [F3] to obtain $$\|v(\cdot+h)-v\|_1\le\int_0^1|h|\int_{\mathbb R^n}|\nabla v(x+th)|\,dx\,dt=|h|\int_{\mathbb R^n}|\nabla v|\,dx.$$ [F3, F4, F5, given, algebra]

2.1 For general $v\in BV(\mathbb R^n)$, choose $v_k\in C_c^\infty$ with $v_k\to v$ in $L^1$ and $\int|\nabla v_k|\to TV(v)$ by [F2] under [A1]. Translation is an $L^1$ isometry [F3], so $v_k(\cdot+h)-v_k\to v(\cdot+h)-v$ in $L^1$. Passing to the limit in step 1.2 proves the translation inequality. [A1, F2, F3, step 1.2, choose] ∎

## Escalation

The translation inequality has a complete local proof above. The zero-extension conclusion depends on [F1], whose Lipschitz trace and boundary gluing proof is unresolved in `lem-ip-bv-lipschitz-trace-and-zero-extension`. This item is escalated until that supplier is proved and its exact body is reconciled; no proof contract or readiness decision is supplied.
