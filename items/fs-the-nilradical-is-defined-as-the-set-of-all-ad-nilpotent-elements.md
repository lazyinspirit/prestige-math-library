---
id: fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements
kind: false-statement
title: The nilradical is the set of all ad-nilpotent elements
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilradical-of-a-finite-dimensional-lie-algebra, thm-engels-theorem]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, nilpotent elements and the nilradical"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§2.13 and Corollary 2.24, printed pp. 14–15"
---

## Statement

For every finite-dimensional characteristic-zero Lie algebra, the nilradical
is the set of all elements whose adjoint endomorphisms are nilpotent.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and
$\mathfrak g=\mathfrak{sl}_2(k)$ with basis $e,f,h$ and relations
$[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$.

[L1] The nilradical is a nilpotent ideal and therefore a linear subspace
([[def-nilradical-of-a-finite-dimensional-lie-algebra]]).

[L2] Engel's theorem concerns nilpotence of every adjoint operator in a Lie
algebra, not an assertion that the ad-nilpotent elements of an arbitrary Lie
algebra form a subspace ([[thm-engels-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 Directly, $\operatorname{ad}_e(e)=0$, $\operatorname{ad}_e(f)=h$, and $\operatorname{ad}_e(h)=-2e$, so $\operatorname{ad}_e^3=0$. Likewise $\operatorname{ad}_f(e)=-h$, $\operatorname{ad}_f(f)=0$, and $\operatorname{ad}_f(h)=2f$, so $\operatorname{ad}_f^3=0$. Thus both $e$ and $f$ are ad-nilpotent. [given, algebra]

2.1 Put $a=e+f$. Then $[a,h]=-2(e-f)$ and $[a,e-f]=-2h$, so $(\operatorname{ad}_a)^2(h)=4h$. Since $h\neq0$ and the field has characteristic zero, no power of $\operatorname{ad}_a$ is zero: its even powers send $h$ to $4^r h$. Hence $e+f$ is not ad-nilpotent. [given, step 1.1, algebra]

3.1 The set of ad-nilpotent elements of $\mathfrak{sl}_2(k)$ contains $e$ and $f$ but not their sum, so it is not a linear subspace. By [L1] the nilradical is always a linear subspace, and therefore it cannot equal this set in the displayed example. This does not conflict with [L2], whose hypothesis quantifies over every element. The witness is finite and uses no choice. [L1, L2, step 1.1, step 2.1] ∎
