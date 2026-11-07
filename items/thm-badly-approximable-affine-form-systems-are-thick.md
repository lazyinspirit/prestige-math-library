---
id: thm-badly-approximable-affine-form-systems-are-thick
kind: theorem
title: "Badly approximable affine-form systems are thick"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-inhomogeneous-dani-correspondence-for-affine-forms
  - thm-expanding-horospherical-avoidance-sets-are-thick
  - def-rational-affine-form-system
  - def-badly-approximable-affine-form-system
  - def-hausdorff-dimension
  - thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices
  - lem-affine-lattice-sl-fixed-ltwo-vectors-are-constant
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani criterion, mixing and thickness"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: diagonal-flow conventions"
---

## Statement

Assume the Axiom of Countable Choice.

Kleinbock's thickness theorem for affine systems states the following.

For every $m,n\ge1$, the set of badly approximable affine systems $(A,b)\in M_{m,n}(\mathbb R)\times\mathbb R^m$ has full Hausdorff dimension $mn+m$ in every nonempty open ball. Rational and irrational systems are included in this thickness conclusion.



The ambient parameter space has dimension $mn+m$; full dimension in every open ball is the meaning of thickness used here.

## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal-flow conventions.


## Declared proof scope

Countable Choice is public in the Statement, matching the actual mixing, Lie and measure interfaces. The full parameter-space thickness conclusion is retained, without a rationality restriction. This is the inherited scope correction for the changed mixing supplier.

## Facts & Assumptions

**Given:** Countable Choice, $m,n\ge1$ and a nonempty open parameter ball in $M_{m,n}(\mathbb R)\times\mathbb R^m$.

[F1] For irrational affine systems, bad approximability is equivalent to a uniform positive lower bound for every affine-lattice vector along the diagonal flow. [[thm-inhomogeneous-dani-correspondence-for-affine-forms]]

[F2] Under Countable Choice and mixing, every closed forward-invariant null set has a thick bounded-orbit avoidance parameter set in every nontrivial semisimple expanding horosphere, for every base point. [[thm-expanding-horospherical-avoidance-sets-are-thick]]

[F3] The standard affine diagonal flow is mixing under Countable Choice by the independent fibre-Fourier and SLd argument. [[thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices]]

[F4] Its full affine quotient has smooth invariant probability and its origin-containing subset $\Omega_0$ is closed null and invariant under the linear subgroup. [[lem-affine-lattice-sl-fixed-ltwo-vectors-are-constant]]

[F5] Rational affine systems have an exact solution $Aq+b+p=0$; bad approximability is positivity of the affine liminf. [[def-rational-affine-form-system]], [[def-badly-approximable-affine-form-system]]

[A1] The PUBLIC Countable Choice hypothesis supplies the exact Lie, integration, measure and Hilbert interfaces invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** apply full horospherical avoidance and verify the irrational Dani hypothesis directly.

1.1 In the affine Lie algebra, conjugation by $g_t$ expands the upper-right $m\times n$ matrix block with weight $1/m+1/n$ and the first $m$ translation coordinates with weight $1/m$. The lower-left block and last $n$ translation coordinates have negative weights; the diagonal matrix blocks have weight0. Thus the entire positive horospherical group is exactly $h_{A,b}=(L_A,(b,0))$, of dimension $mn+m$, and the generator is semisimple. Its parameters add under group multiplication, so they are smooth global Euclidean coordinates. By F3–F4 the flow and closed null set $Z=\Omega_0$ satisfy F2. Apply F2 at the base affine lattice $\mathbb Z^{m+n}$. It gives in every open parameter ball a full-dimensional set whose orbit closures are compact and disjoint from $\Omega_0$. [given, F2, F3, F4, algebra, A1]

2.1 The distance of an affine lattice from the origin, $\eta(g\mathbb Z^{m+n}+v)=\min_{z\in\mathbb Z^{m+n}}\|gz+v\|_\infty$, is continuous locally. In a small quotient chart, $g,g^{-1},v$ are bounded, and a fixed integer candidate bounds the minimum above by a constant. Any candidate with norm below that constant has bounded integer coordinates, so only finitely many candidates can minimize throughout a smaller chart. Thus $\eta$ is a finite minimum of continuous functions there. It is positive precisely off $\Omega_0$. On a compact orbit closure disjoint from $\Omega_0$ it therefore has a uniform positive minimum. Every associated affine-lattice vector along that orbit has at least this norm. [F4, step 1.1, algebra]

3.1 Such a parameter is irrational. An exact relation $Aq+b+p=0$ would give along the orbit the vector $(0,e^{-t/n}q)$, tending to zero; for $q=0$ it is already zero. This contradicts step 2.1. F1 now applies with its verified irrationality premise and yields bad approximability. Hence each parameter ball contains a subset of the badly approximable set of dimension $mn+m$. The opposite upper bound is the ambient Euclidean dimension, so the full set is thick as claimed. No removal-of-rational-locus dimension argument is needed, and no assertion that every rational system is badly approximable is being made. [F1, F5, step 1.1, step 2.1, algebra] ∎

## Remarks

The argument under the declared Countable Choice hypothesis covers the full native parameter space and includes the base point in the closed null set, as allowed by the general avoidance theorem. Its Countable Choice premise comes from the actual mixing, Lie and measure suppliers. The public hypothesis matches those actual interfaces. No unqualified theorem or optimality of Countable Choice is claimed; the general avoidance theorem remains at its separately recorded scope.
