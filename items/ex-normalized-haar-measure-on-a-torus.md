---
id: ex-normalized-haar-measure-on-a-torus
kind: example
title: Normalized Haar measure on a torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-probability-on-a-compact-group, def-left-haar-integral-and-left-haar-measure, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, cor-normalized-haar-measure-on-a-compact-lie-group, def-axiom-of-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-radon-measure-on-rn]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1 and Chapter VIII §1 (Haar measure on the torus)"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice and let $r\ge0$ be an integer. Put $T^r=(\mathbb R/\mathbb Z)^r$ and let $q:\mathbb R^r\to T^r$ be the quotient map. For nonnegative Borel $f$, or Haar-integrable complex Borel $f$, normalized Haar integration is
$$\int_{T^r}f(t)\,dt=\int_{[0,1)^r}f(q(x))\,dx.$$
For $r=0$ the cube and torus are singletons, and the right side uses mass one on the singleton (the empty product convention).

## Facts & Assumptions

**Given:** A nonnegative integer $r$, $T^r$, $q$, and $Q=[0,1)^r$.

[A1] AC is assumed ([[def-axiom-of-choice]]); it covers the countable-choice measure suppliers and Haar existence and uniqueness.

[L1] A compact Hausdorff group has a unique left Haar probability measure, which is also right and inversion invariant ([[cor-normalized-haar-probability-on-a-compact-group]]). This is the normalized measure on a compact Lie group ([[cor-normalized-haar-measure-on-a-compact-lie-group]]). A left Haar measure is a nonzero left-invariant Borel measure, compact finite, outer regular on Borel sets and inner regular on open sets ([[def-left-haar-integral-and-left-haar-measure]]).

[L2] For $r\ge1$, Lebesgue measure is translation invariant, and its value on the half-open cube $Q$ is its volume $1$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[L3] For $r\ge1$, Lebesgue measure is Radon and compact-inner regular on every Borel set ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]]).

## Verification

**Proof technique:** direct.

1.1 If $r=0$, both spaces are singletons, their probability measure is Dirac, all translations and inversion are identity, and the asserted integral is evaluation at the point. Now suppose $r\ge1$. Every coset modulo $\mathbb Z^r$ has a unique representative in $Q$, by subtracting the coordinatewise integer floors. Define $\nu(B)=\lambda_r(q^{-1}(B)\cap Q)$ for Borel $B\subseteq T^r$. The preimage is Borel and countable disjoint unions pull back to disjoint unions, so this is a Borel measure; [L2] gives $\nu(T^r)=\lambda_r(Q)=1$. [A1, L2, L3, algebra]

2.1 Let $a\in\mathbb R^r$ and $E=q^{-1}(B)\cap Q$. Partition $E$ into the Borel sets $E_m=\{x\in E:x+a-m\in Q\}$, $m\in\mathbb Z^r$. Only finitely many are nonempty, since $x\in Q$ and $a$ is fixed. Unique representatives imply that the translates $E_m+a-m$ are pairwise disjoint and their union is exactly $q^{-1}(q(a)+B)\cap Q$: surjectivity follows by subtracting $q(a)$, and injectivity follows because two points of $Q$ differing by an integer vector coincide. Translation invariance and finite additivity give $\nu(q(a)+B)=\sum_m\lambda_r(E_m+a-m)=\sum_m\lambda_r(E_m)=\nu(B)$. Half-open faces cause no overlap or omitted boundary points. [L2, step 1.1, algebra]

2.2 To prove regularity, let $B$ be Borel and $E=q^{-1}(B)\cap Q$. By [L3], for each $\varepsilon>0$ there is compact $C\subseteq E$ with $\lambda_r(E\setminus C)<\varepsilon$. Then $q(C)$ is compact in $B$, and $\nu(B\setminus q(C))\le\lambda_r(E\setminus C)<\varepsilon$. Applying this to $B^c$ gives a compact $D\subseteq B^c$ with $\nu(B^c\setminus D)<\varepsilon$; the open set $T^r\setminus D$ contains $B$ and its excess over $B$ has measure less than $\varepsilon$. Thus $\nu$ is both inner and outer regular. [L3, step 1.1, algebra]

3.1 The probability measure $\nu$ is compact finite and nonzero by step 1.1, left invariant by step 2.1, and regular by step 2.2. It is therefore a left Haar probability in the exact sense of [L1]. Apply the unique-left-Haar-probability clause of [L1]; it equals normalized Haar measure and in particular is also inversion invariant. We do not invoke uniqueness restricted to measures already known to be inversion invariant. [A1, L1, step 1.1, step 2.1, step 2.2]

4.1 The integral formula holds for indicators of Borel sets by the definition of $\nu$ in step 1.1 and its identification in step 3.1. Finite linearity gives it for nonnegative simple functions. Increasing simple approximations, or equivalently the defining supremum for the nonnegative integral, give it for nonnegative Borel $f$. Applying this to the positive and negative parts of the real and imaginary parts proves the formula for integrable complex $f$; applying it first to $|f|$ verifies integrability on the cube. The singleton case was established separately in step 1.1. [step 1.1, step 3.1, algebra] ∎
