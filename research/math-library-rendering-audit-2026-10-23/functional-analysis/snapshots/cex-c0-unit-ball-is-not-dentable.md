---
id: cex-c0-unit-ball-is-not-dentable
kind: counterexample
title: "The closed unit ball of c-zero is not dentable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-dentable-bounded-set-and-slice, def-c-zero-and-ell-infinity, lem-real-and-complex-c-zero-are-banach, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-dual-of-c0-is-ell-one]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://www.math.tamu.edu/~geoffrey.schiebinger/Pisier_Martingales.pdf"
      locator: "Chapter 2, Section 2.1, dentability criterion and the remark that c-zero fails RNP, printed pp. 34 and 42"
pipeline_run: phase-2-next-18
---

## Statement refuted

Over either $\mathbb R$ or $\mathbb C$, every slice of the closed unit ball
$B_{c_0}$ has norm diameter exactly two. Consequently $B_{c_0}$ is not
dentable.

## Facts & Assumptions

[L1] The real and complex sequence spaces $c_0$ carry the supremum norm and are Banach spaces ([[def-c-zero-and-ell-infinity]], [[lem-real-and-complex-c-zero-are-banach]]).

[L2] Every functional on $c_0$ has a unique bilinear representation $\phi(x)=\sum_{n\geq0}a_nx_n$ with $a\in\ell^1$, and finite truncations of $a$ converge in $\ell^1$ ([[thm-dual-of-c0-is-ell-one]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L3] Slices in a complex space use real parts, and dentability asks for slices of arbitrarily small norm diameter ([[def-dentable-bounded-set-and-slice]]).

## Counterexample

**Proof technique:** counterexample.

**Given:** one scalar field and the closed unit ball $B=B_{c_0}$.

1.1 Fix an arbitrary slice with a strict margin. Let $S=S(B,\phi,\alpha)$ be a slice. By [L2], write $\phi(x)=\sum_na_nx_n$. One has $\sup_{x\in B}\operatorname{Re}\phi(x)=\lVert\phi\rVert$: the upper bound is the dual-norm inequality, while multiplying any almost norming vector by a scalar of modulus one makes its value real and nonnegative. Choose $x\in S$ and set [given, L2, L3]

$$\delta=\operatorname{Re}\phi(x)-(\lVert\phi\rVert-\alpha)>0.$$

2.1 Construct two points in the slice at distance two. The $\ell^1$ truncation convergence in [L2] implies $a_k\to0$, so take $k$ with $2|a_k|<\delta$. Retain all coordinates of $x$ except put $y_k=1$ and $z_k=-1$. A one-coordinate change preserves convergence to zero, and $\lVert y\rVert_\infty,\lVert z\rVert_\infty\leq1$, so $y,z\in B$. Moreover, [L1, L2, step 1.1, construct]

$$\operatorname{Re}\phi(y)\geq\operatorname{Re}\phi(x)-|a_k|\,|1-x_k|>\lVert\phi\rVert-\alpha,$$

and the identical estimate using $|-1-x_k|\leq2$ puts $z$ in $S$. Their $k$th coordinates differ by two, hence $\lVert y-z\rVert_\infty=2$.

3.1 Compute the diameter and deduce nondentability. The triangle inequality bounds the diameter of $B$, and thus of $S$, above by two. Step 2.1 attains two, so every slice has diameter exactly two. In particular no slice has diameter below one, and [L3] says that $B$ is not dentable. The set $B$ is nonempty, bounded, closed, and convex in the Banach space from [L1]. [L1, L3, step 2.1]

4.1 Audit zero, strict-boundary, and complex cases. [L2, L3, step 1.1, step 2.1, step 3.1] If $\phi=0$, then the slice is all of $B$ and $e_k,-e_k$ are direct witnesses. For nonzero $\phi$, the positive $\delta$ and strict inequality $2|a_k|<\delta$ keep both witnesses inside the slice rather than only on its boundary; a zero remote coefficient is harmless. In the complex case [L2] uses the bilinear pairing and [L3] uses $\operatorname{Re}\phi$, so no conjugation is inserted. A singleton zero ball is not involved: $c_0$ contains every $e_k$. [given, L1, L2, L3, step 1.1, step 2.1, step 3.1] ∎