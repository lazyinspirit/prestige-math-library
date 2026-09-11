---
id: lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients
kind: lemma
title: Fourier uniqueness for continuous functions on the Euclidean torus
deps: ["thm-complex-stone-weierstrass-self-adjoint", "thm-complex-exponential-addition-and-real-extension", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-heine-borel-rn", "thm-sine-and-cosine-parametrize-the-unit-circle", "thm-sine-and-cosine-subtraction-formulas", "thm-sine-cosine-zero-sets-and-fundamental-period", "thm-borel-sets-are-lebesgue-measurable", "thm-nonnegative-integral-zero-iff-zero-almost-everywhere", "def-countable-choice", "thm-continuous-image-of-a-compact-space-is-compact"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices
      url: https://people.math.harvard.edu/~elkies/aws09.pdf
      locator: Proof of Theorem 2, pp.10–11; uniqueness step expanded locally
---

## Statement

Assume countable choice and let $n\ge1$. If $f:\mathbb R^n\to\mathbb C$ is continuous and $\mathbb Z^n$-periodic, and
$$\int_{[0,1]^n}f(x)e^{-2\pi ik\cdot x}\,dx=0\qquad(k\in\mathbb Z^n),$$
then $f=0$ everywhere.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and the stated integer $n\ge1$. Continuous functions on the cube are bounded and Borel measurable; Borel sets are Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]), and complex product integration is available ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F1] A unital point-separating self-adjoint complex algebra on a compact Hausdorff space is uniformly dense ([[thm-complex-stone-weierstrass-self-adjoint]]).

[F2] Closed bounded Euclidean sets are compact and compact ones are closed ([[thm-heine-borel-rn]]).

[F3] The circle parametrization is onto on a half-open period ([[thm-sine-and-cosine-parametrize-the-unit-circle]]). The subtraction formulas and the sine zero set determine its fibres, and its period is $2\pi$ ([[thm-sine-and-cosine-subtraction-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F4] Euler and addition identities identify these parametrizations with unit-modulus complex exponentials and their products ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]]).

[F5] A continuous image of a compact metric space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F6] Zero integral of a nonnegative function implies it is zero a.e. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Realize $T$ as the subset of $\mathbb R^{2n}$ whose $n$ coordinate pairs have squared norm one. It is closed and bounded, hence compact by [F2], and its Euclidean metric is Hausdorff. The continuous map $q:[0,1]^n\to T$, $q(x)=(e^{2\pi ix_j})_j$, is onto by [F3], [F4]. To determine its fibres without using the affected injectivity assertion, suppose one coordinate has equal sine-cosine pairs at $s=2\pi x_j$ and $t=2\pi y_j$. The subtraction formulas give $\sin(s-t)=0$ and $\cos(s-t)=1$. Hence $s-t=m\pi$ for an integer $m$; the integer-shift formula in [F3] gives $1=(-1)^m$, so $m$ is even and $s-t\in2\pi\mathbb Z$. The converse is periodicity. Thus $q(x)=q(y)$ exactly when every $x_j-y_j$ is an integer, which on the cube means equality or the endpoint identification $0\sim1$ in each coordinate. Periodicity therefore defines a unique function $\widetilde f$ on $T$ with $f=\widetilde f\circ q$ on the cube. For any closed $C\subseteq\mathbb C$, the set $K=f^{-1}(C)\cap[0,1]^n$ is closed bounded and compact by [F2]. Then $\widetilde f^{-1}(C)=q(K)$ is compact by [F5] and closed in the Euclidean ambient space by [F2], hence closed in $T$. This proves continuity of $\widetilde f$. [F2, F3, F4, F5, given, algebra]

2.1 The finite linear combinations of characters $z\mapsto\prod_j z_j^{k_j}$, $k\in\mathbb Z^n$, form a complex algebra on $T$: character products add indices, the zero index gives one, and conjugation negates indices by [F4]. Coordinate characters separate distinct points of $T$. Therefore [F1] applies. For any $\varepsilon>0$, it gives a character polynomial $p$ with $\|p-\overline{\widetilde f}\|_\infty<\varepsilon$. Pullback by $q$ is a finite sum of $e^{2\pi ik\cdot x}$; every integral of $f$ times such a term is zero by the hypothesis with index $-k$. For the integral manipulations, augment any finite disjoint nonnegative-simple display by its complement with coefficient $0$. Intersections of two augmented displays partition the cube and carry equal coefficients on nonempty cells, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants and increasing simple approximation give nonnegative additivity and hence finite complex $L^1$ linearity. Consequently $0\le\int_{[0,1]^n}|f|^2=\int f(\overline f-p\circ q)\le\varepsilon\int|f|$, where the last bound means the modulus of the integral. Letting $\varepsilon\downarrow0$ gives zero square integral. Directly, $(1/r)\mathbf1_{\{|f|^2\ge1/r\}}\le|f|^2$ shows that each displayed level set is null; their countable union is $\{|f|>0\}$. Thus $f=0$ a.e. on the cube, proving the needed branch of [F6] locally. [step 1.1, F1, F4, F6, given, construct]

3.1 If $f$ were nonzero at a cube point, continuity would give a neighbourhood on which $|f|$ is bounded below by a positive constant. Its intersection with the cube contains a nondegenerate box, even when the point lies on a face or corner, so it has positive measure, contradicting step 2.1. Thus $f=0$ throughout the cube. Every point of $\mathbb R^n$ differs from a cube point by an integer vector, so periodicity gives the global conclusion. Only the stated Euclidean integral interfaces need countable choice; the compact-space approximation uses one approximant at a time. [step 2.1, given] ∎
