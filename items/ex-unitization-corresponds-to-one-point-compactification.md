---
id: ex-unitization-corresponds-to-one-point-compactification
kind: example
title: Unitization corresponds to one point compactification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-c-zero-and-ell-infinity", "thm-minimal-c-star-unitization", "thm-one-point-compactification-properties", "def-compact-support-c-c-and-c-zero-on-an-lch-space", "def-one-point-compactification", "def-axiom-of-choice", "thm-urysohn-lemma", "thm-a-compact-hausdorff-space-is-regular-and-normal", "thm-uniform-cauchy-criterion-complex-functions", "thm-compactness-under-continuous-maps", "thm-closed-subspace-of-a-compact-space-is-compact"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 3.1.16 and §3.1, printed pp. 60–61"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $c_0(\mathbb N)$ be the C\*-algebra of null sequences with the supremum norm
([[def-c-zero-and-ell-infinity]]), which is complete because a Cauchy sequence of
null sequences has coordinatewise limits, the limit is null, and the convergence
is uniform. Then its minimal
unitization is the C\*-algebra of convergent sequences,
$c_0(\mathbb N)^+ \cong C(\mathbb N^+)$, where $\mathbb N^+ = \mathbb N \cup
\{\infty\}$ is the one-point compactification of discrete $\mathbb N$
([[thm-minimal-c-star-unitization]],
[[thm-one-point-compactification-properties]]); under this isomorphism the
quotient character $\chi_\infty$ is evaluation at $\infty$, that is, the map
sending a convergent sequence to its limit. More generally, for a noncompact
locally compact Hausdorff space $X$ one has the canonical isometric
$\ast$-isomorphism

$$C_0(X)^+ \;\cong\; C(X^+), \qquad (f,\lambda) \mapsto f + \lambda\mathbf 1,$$

with $\chi_\infty$ corresponding to evaluation at the added point.

## Facts & Assumptions

**Given:** AC, a noncompact locally compact Hausdorff space $X$, its one-point compactification $K=X^+$, and complex-valued $C_0(X)$.

[F1] A continuous function belongs to $C_0(X)$ exactly when every positive superlevel set of its modulus is compact ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]). The neighborhoods of infinity in $K$ are complements of closed compact subsets of $X$ ([[def-one-point-compactification]]).

[F2] $K$ is compact Hausdorff and $X$ is open and dense in $K$ ([[thm-one-point-compactification-properties]]). Closed subsets of compact spaces are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F3] Compact Hausdorff spaces are normal and $T_1$; under DC, disjoint closed sets in a normal space admit a continuous $[0,1]$-valued separating function ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[thm-urysohn-lemma]]).

[F4] Uniformly Cauchy complex-valued functions converge uniformly; a continuous real function on a nonempty compact space has finite extreme values ([[thm-uniform-cauchy-criterion-complex-functions]], [[thm-compactness-under-continuous-maps]]).

[F5] Under AC, a nonzero genuinely nonunital C*-algebra has the minimal unitization norm, unique among complete C*-norms on its algebraic unitization extending its norm ([[thm-minimal-c-star-unitization]]).

[F6] $c_0(\mathbb N)$ consists of scalar null sequences with the supremum norm, indexed starting at zero ([[def-c-zero-and-ell-infinity]]).

[A1] AC is assumed ([[def-axiom-of-choice]]). It supplies the DC needed for Urysohn separation and the hypothesis of the unitization theorem.

## Verification

**Proof technique:** direct.

1.1 $C(K)$ with pointwise operations, conjugation and the supremum norm is a unital commutative C*-algebra. The norm is finite by [F4] applied to the modulus, and the norm axioms, submultiplicativity and $\|\overline g g\|_\infty=\|g\|_\infty^2$ follow pointwise. A norm-Cauchy sequence is uniformly Cauchy, hence has a uniform limit by [F4]; this limit is continuous, since at a point one approximates it uniformly within $\epsilon/3$ by one continuous function and uses that function's continuity. This proves completeness. The constant one is a unit of norm one, since $K$ contains infinity. [F2, F4, algebra]

1.2 If $f\in C_0(X)$, extend it by $\widetilde f(\infty)=0$. For $\epsilon>0$, the set $\{|f|\ge\epsilon\}$ is compact by [F1] and closed in $X$ by continuity. Its complement in $K$ is an infinity neighborhood on which $|\widetilde f|<\epsilon$, proving continuity there; continuity on the open subspace $X$ is given. Conversely, if $g\in C(K)$ and $g(\infty)=0$, then $\{|g|\ge\epsilon\}$ is a closed subset of compact $K$ contained in $X$, hence compact also in the subspace $X$. Thus restriction gives an inverse to zero-extension. [F1, F2, algebra]

2.1 Noncompact $X$ is nonempty. For each $x\in X$, the closed singletons $\{x\}$ and $\{\infty\}$ in normal $K$ can be separated by [F3], using AC through [A1]. There is $h\in C(K;[0,1])$ with $h(x)=1$ and $h(\infty)=0$. By step 1.2 its restriction belongs to $C_0(X)$. Thus this algebra is nonzero and has an element nonvanishing at every specified point. If it had an identity $e$, the equation $eh=h$ at each such $x$ would force $e(x)=1$ everywhere. But the constant one is not in $C_0(X)$ because its superlevel set at $\epsilon=1/2$ is the noncompact space $X$. Hence $C_0(X)$ is genuinely nonunital. [step 1.2, F1, F2, F3, A1, algebra]

2.2 Evaluation $g\mapsto g(\infty)$ on $C(K)$ is a continuous surjective star-homomorphism to $\mathbb C$: it is bounded by the supremum norm and constants give surjectivity. Its kernel is a closed two-sided star-ideal of codimension one. Step 1.2 identifies that kernel isometrically with $C_0(X)$, since adding a zero value to the modulus supremum changes nothing on nonempty $X$. It follows that $C_0(X)$ is complete and satisfies the C*-identity by restriction from step 1.1. Every $g\in C(K)$ has the unique decomposition $g=\widetilde f+\lambda\mathbf 1$, where $\lambda=g(\infty)$ and $f=(g-\lambda\mathbf 1)|_X$. [step 1.1, step 1.2, algebra]

3.1 The map $\Phi(f,\lambda)=\widetilde f+\lambda\mathbf 1$ is a complex-linear bijection by step 2.2. Pointwise multiplication gives $\Phi(f,\lambda)\Phi(h,\mu)=\Phi(fh+\lambda h+\mu f,\lambda\mu)$, and conjugation gives $\overline{\Phi(f,\lambda)}=\Phi(\overline f,\overline\lambda)$, precisely the algebraic unitization operations in [F5]. Pulling back the complete C*-norm of $C(K)$ therefore gives a complete C*-norm extending that of $C_0(X)$. The hypotheses for [F5] hold by steps 2.1 and 2.2, so uniqueness proves that $\Phi$ is isometric for the minimal unitization norm. Moreover $\Phi(f,\lambda)(\infty)=\lambda$, which identifies the quotient character with evaluation at infinity. [step 1.1, step 2.1, step 2.2, F5, A1, algebra]

4.1 For discrete $\mathbb N$, compact subsets are exactly finite subsets: the singleton open cover proves the forward direction and a finite set has a finite subcover of every cover. Thus the infinity neighborhoods in $\mathbb N^+$ are cofinite, and continuity at infinity is precisely convergence of the sequence of values to its value there. Likewise the positive superlevel sets of a sequence are all finite exactly when the sequence tends to zero: a finite set of indices is bounded, and an initial segment is finite. A null sequence is bounded by its finite initial segment and a bounded tail. Hence $C_0(\mathbb N)=c_0(\mathbb N)$ with the same norm, and $C(\mathbb N^+)$ consists exactly of convergent sequences with their limit as the infinity value. The limit modulus is at most the supremum over finite indices, so its supremum norm is the sequence supremum norm. Step 3.1 now gives the stated isomorphism and limit character. [step 3.1, F1, F6, algebra] ∎

## Remarks

The added point corresponds to the character $\chi_\infty$; its kernel is the ideal of functions vanishing there. The general claim is restricted to noncompact $X$, as required to apply the genuinely nonunital theorem. For compact $X$, the Alexandroff construction instead adds an isolated point; that case does not use the nonunital norm construction proved here.
