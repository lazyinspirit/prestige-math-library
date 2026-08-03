---
id: lem-tangent-principal-branch-is-bijective
kind: lemma
title: "Tangent is a continuous strictly increasing bijection from $(-\\pi/2,\\pi/2)$ onto $\\mathbb R$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tangent-cotangent-secant-cosecant, thm-tangent-cotangent-secant-cosecant-derivatives-and-periods, cor-differentiable-implies-continuous, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, thm-of-square-roots, lem-of-square-positive, thm-monotonicity-from-the-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23 Inverse Trigonometric Functions"
      url: "https://dlmf.nist.gov/4.23"
pipeline_run: null
---

## Statement

The restriction

$$\tan:(-\pi/2,\pi/2)\longrightarrow\mathbb R$$

is continuous, strictly increasing, and bijective.

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] Tangent is defined where cosine is nonzero and is differentiable on its
natural domain with $(\tan x)'=\sec^2x$; differentiability there implies
continuity ([[def-tangent-cotangent-secant-cosecant]],
[[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]],
[[cor-differentiable-implies-continuous]]).

[L2] On the natural domain of tangent, $\sec^2x=1+\tan^2x$; moreover
$\sec x=1/\cos x\ne0$, so $\sec^2x>0$
([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]],
[[def-tangent-cotangent-secant-cosecant]], [[lem-of-square-positive]]).

[L3] The map $t\mapsto(\cos t,\sin t)$ maps $[0,2\pi)$ bijectively onto the unit circle ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[L4] Cosine decreases on $[0,\pi]$, increases on $[\pi,2\pi]$, has zeros at
$\pi/2$ and $3\pi/2$ in $[0,2\pi)$, and sine and cosine have period $2\pi$
([[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L5] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[L6] A continuous function on an interval whose derivative is positive at every
interior point is strictly increasing
([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], cosine is positive on $(-\pi/2,\pi/2)$, so tangent is defined and continuous there.  By [L1], [L2], and [L6], its derivative is positive and the restriction is strictly increasing, hence injective.  [L1, L2, L4, L6]

1.2 Fix $y\in\mathbb R$ and put $$c:=\frac1{\sqrt{1+y^2}},\qquad s:=\frac y{\sqrt{1+y^2}}.$$ The radicand is positive, $c>0$, and $c^2+s^2=1$.  Thus [L3] supplies a unique $t\in[0,2\pi)$ with $(\cos t,\sin t)=(c,s)$.  [L3, L5, algebra]

2.1 Since $\cos t=c>0$, [L4] places $t$ in $[0,\pi/2)\cup(3\pi/2,2\pi)$.  Set $u:=t$ in the first case and $u:=t-2\pi$ in the second.  Then $u\in(-\pi/2,\pi/2)$ and periodicity of sine and cosine gives $\tan u=s/c=y$.  Hence the restriction is surjective. [step 1.2, L1, L4]

3.1 Step 1.1 gives continuity and injectivity, while step 2.1 gives surjectivity.  [step 1.1, step 2.1] ∎
