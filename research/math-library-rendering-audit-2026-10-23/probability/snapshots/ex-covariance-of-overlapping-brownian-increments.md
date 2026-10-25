---
id: ex-covariance-of-overlapping-brownian-increments
kind: example
title: "Covariance of overlapping Brownian increments"
status: published
origin: pipeline
deps: [def-brownian-motion, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, def-moments-variance-and-covariance, thm-covariance-bilinearity-and-symmetry, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice. If $B$ is a standard Brownian motion,
$0\le s\le t$, and $0\le u\le v$, then

$$\operatorname{Cov}(B_t-B_s,B_v-B_u)=\max\!\bigl(0,\min(t,v)-\max(s,u)\bigr).$$

Thus the covariance is the length of the overlap of the time intervals
$[s,t]$ and $[u,v]$; an intersection consisting of one endpoint has length
zero.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and $0\le s\le t$, $0\le u\le v$.

[F1] Brownian motion is centered with $\operatorname{Cov}(B_a,B_b)=\min(a,b)$; its values are square-integrable normal random variables. [[def-brownian-motion]], [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]].

[F2] Covariance of square-integrable real random variables is defined by centered products and is symmetric and bilinear in finite linear combinations. [[def-moments-variance-and-covariance]], [[thm-covariance-bilinearity-and-symmetry]].

[F3] AC is inherited through the Brownian and normal-law interfaces. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 Bilinearity and the Brownian covariance kernel give $$\operatorname{Cov}(B_t-B_s,B_v-B_u)=\min(t,v)-\min(t,u)-\min(s,v)+\min(s,u).$$ Every term is finite because the Brownian values are square-integrable. [F1, F2]

2.1 Both sides of the claimed formula are unchanged when the ordered pairs $(s,t)$ and $(u,v)$ are exchanged, the left side by symmetry of covariance. It therefore suffices to assume $s\le u$. If $t\le u$, the four minima in step 1.1 are respectively $t,t,s,s$, so the covariance is zero; also $\min(t,v)\le u=\max(s,u)$, so the stated overlap length is zero. This includes $t=u$ and all zero-length first intervals. [step 1.1, F2, algebra]

3.1 Still assuming $s\le u$, suppose $u<t\le v$. The four minima in step 1.1 are $t,u,s,s$, so the covariance is $t-u$. Here $\min(t,v)=t$ and $\max(s,u)=u$, giving the same positive overlap length. This case includes $s=u$ and $t=v$, but excludes $t=u$, already handled in step 2.1. [step 1.1, algebra]

4.1 Finally, if $s\le u\le v<t$, the four minima in step 1.1 are $v,u,s,s$, so the covariance is $v-u$. Here $\min(t,v)=v$ and $\max(s,u)=u$. The value is zero exactly when $u=v$, so zero-length second intervals are included. These three cases exhaust $s\le u$; pair symmetry handles $u<s$. [step 1.1, step 2.1, step 3.1, F2, algebra]

5.1 Steps 2.1, 3.1, and 4.1 prove the formula for every allowed endpoint order, including coincident endpoints, $s=t$, $u=v$, and $s=u=t=v=0$. There is no empty family or biconditional. AC is used only through [F1]; expanding four covariances and comparing endpoints uses no further choice. [step 2.1, step 3.1, step 4.1, F1, F3] ∎

## Source notes

Durrett, Section 7.1, printed p. 355, derives $\mathbb E[B_sB_t]=s\wedge t$ for $s<t$ from independent increments. The four-term overlap calculation and its complete endpoint case split are given above.
