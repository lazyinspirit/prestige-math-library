---
id: cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability
kind: counterexample
title: "Fixed-time assertions do not yield a pathwise nowhere statement"
status: draft
origin: pipeline
deps: [thm-takagi-function-is-continuous-and-nowhere-differentiable]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.1.6 and the surrounding discussion of fixed-time versus pathwise statements"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "The Takagi function: a survey (the nowhere-differentiable input to the profile)"
      url: "https://arxiv.org/abs/1110.1691"
---

## Statement refuted

The inference "if for each fixed time $t$ the path is almost surely not
differentiable at $t$, then almost surely the path is nowhere differentiable"
is invalid. There is a continuous random process $X$ on $[0,1]$ such that for
every fixed deterministic $t\in(0,1)$ the path is almost surely not
differentiable at $t$, while almost surely the path is differentiable
somewhere: the almost-sure assertions attached to the individual times of an
uncountable family do not combine into the pathwise assertion.

## Counterexample

**Given:** no special hypotheses beyond the standard Borel measure space $([0,1],\mathcal B([0,1]),\lambda)$, the Takagi function $T$ of [[thm-takagi-function-is-continuous-and-nowhere-differentiable]], the profile $G(s):=s^2T(s)$ on $[0,1]$, and the process $X_t(\omega):=G(|t-\omega|)$ for $t,\omega\in[0,1]$.

**Proof technique:** direct.

1.1 The profile is continuous and differentiable at the origin: $G(s)=s^2T(s)$ is a product of continuous functions, and with $M:=\sup_{[0,1]}|T|<\infty$, finite because the continuous $T$ is bounded on the compact interval, one has $|G(s)|\le Ms^2$ for every $s\in[0,1]$, so $G(s)/s\to0$ and $G'(0)=0$. [given]

2.1 The profile is nowhere else differentiable: if $G$ were differentiable at some $s\in(0,1]$, then $T=G/s^2$ would be differentiable at $s$ as a quotient with nonvanishing denominator, contradicting the nowhere differentiability of the Takagi function on $[0,1]$. [given, step 1.1]

2.2 Every sample path $t\mapsto X_t(\omega)=G(|t-\omega|)$ is continuous, being a composition of the continuous maps $t\mapsto|t-\omega|$ and $G$; for the same reason the map $(t,\omega)\mapsto X_t(\omega)$ is jointly measurable. [step 1.1]

2.3 At $t=\omega$ the path is differentiable with derivative $0$: for $h\ne0$ the difference quotient is $\bigl(G(|h|)-G(0)\bigr)/h=\pm G(|h|)/|h|$, whose limit as $h\to0$ is $\pm G'(0)=0$ by [step 1.1]. [step 1.1]

3.1 At every $t\in(0,1)$ with $t\ne\omega$ the path is not differentiable at $t$: on a neighbourhood of such a $t$ that lies inside $(0,1)$ the path is the composition of the affine map $u\mapsto\pm(u-\omega)$ of nonzero slope with the restriction of $G$, so differentiability of the path at $t$ would make $G=X\circ A^{-1}$ differentiable at $|t-\omega|$, which lies in $(0,1)$ because $t\in(0,1)$ and $\omega\in[0,1]$, and [step 2.1] excludes exactly that. [step 2.1]

4.1 For a fixed deterministic $t\in(0,1)$ the path is differentiable at $t$ exactly when $\omega=t$, by [step 2.3] and [step 3.1]; since the singleton $\{t\}$ is Lebesgue-null, the path is almost surely not differentiable at $t$, and this holds for every $t$ of the uncountable family $(0,1)$. [step 2.3, step 3.1]

5.1 Yet almost surely the path is differentiable somewhere, namely at $t=\omega\in(0,1)$, by [step 2.3]; hence the pathwise event "the path is nowhere differentiable on $(0,1)$" has probability $0$. The fixed-time assertions of [step 4.1] therefore do not upgrade to the pathwise statement: the quantifier over the uncountable family of times cannot be moved inside the almost-sure statement, which is the defect being exhibited. [step 2.3, step 4.1]

6.1 The boundary and degenerate cases are covered: the fixed-time family is the open interval $(0,1)$, so that at each of its times the two-sided notion of differentiability applies and the endpoint behaviour of the profile is never needed; the case $t=\omega$ is the differentiability point of the path and contributes the null singleton to the fixed-time computation of [step 4.1]; the outcomes $\omega\in\{0,1\}$ form a null edge case and are not needed, since [step 5.1] only requires the event of positive probability on which the path is differentiable at an interior time; the profile is not constant, so the degenerate case in which every time were a differentiability point does not arise; and the construction selects nothing, the measure space and the profile being explicit. [step 2.3, step 3.1, step 4.1, step 5.1, given] ∎

## Source notes

Durrett's discussion around Theorem 7.1.6 contrasts fixed-time statements with
the pathwise nowhere-differentiability theorem for Brownian motion, and shows
that the per-time almost-sure statement is not by itself a pathwise theorem.
The witness above makes that quantifier failure explicit: the profile
$G(s)=s^2T(s)$ built from the Takagi function of
[[thm-takagi-function-is-continuous-and-nowhere-differentiable]] has exactly one
differentiability point, the origin, and shifting it by the uniform random
variable $\omega$ produces a process that is almost surely non-differentiable
at each fixed deterministic time interior to $(0,1)$, while every one of its
sample paths is differentiable at its own shift. The Takagi input is used only
through the statement of that item.
