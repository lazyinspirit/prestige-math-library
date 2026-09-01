---
id: ex-c-mod-constants-and-oscillation-norm
kind: example
title: "For real continuous functions modulo constants, the quotient norm is half the oscillation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-seminorm, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed,
       thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Example

Let $K$ be a nonempty compact metric space, let $C(K,\mathbb R)$ carry the
supremum norm, and let $M$ be the subspace of constant functions. For
$f \in C(K,\mathbb R)$ write

$$\operatorname{osc}(f):=\max_K f-\min_K f.$$

Then in the quotient $C(K,\mathbb R)/M$,

$$\|f+M\|=\frac{1}{2}\operatorname{osc}(f).$$

## Facts & Assumptions

**Given:** A nonempty compact metric space $K$, a real-valued continuous
function $f$ on $K$, and the constant-function subspace $M$.

[L1] The quotient seminorm is
$\|f+M\|=\inf_{c \in \mathbb R}\|f-c\|_\infty$
([[def-quotient-seminorm]]).

[L2] A continuous real-valued function on a nonempty compact metric space
attains its maximum and minimum ([[thm-extreme-value-metric]]).

[L3] The quotient seminorm is a norm when the subspace is closed
([[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], let $m:=\min_K f$ and $M_0:=\max_K f$, and put $c_0 := (M_0+m)/2$. Then for every $x \in K$, $m \le f(x) \le M_0$, so $|f(x)-c_0| \le (M_0-m)/2$. Hence $\|f-c_0\|_\infty \le (M_0-m)/2$. [L2, algebra]

2.1 For any real constant $c$, both $|M_0-c|$ and $|m-c|$ are bounded above by $\|f-c\|_\infty$. Since the distance between $M_0$ and $m$ is $M_0-m$, at least one of those two numbers is at least $(M_0-m)/2$. Therefore $\|f-c\|_\infty \ge (M_0-m)/2$ for every $c$. [step 1.1, L2, algebra]

3.1 Steps 1.1 and 2.1 give $\inf_{c \in \mathbb R}\|f-c\|_\infty = (M_0-m)/2$, so [L1] yields $\|f+M\|=\operatorname{osc}(f)/2$. The constant subspace is closed because a uniform limit of constant functions is constant, so [L3] confirms that this is an honest norm on the quotient. [step 1.1, step 2.1, L1, L3] ∎
