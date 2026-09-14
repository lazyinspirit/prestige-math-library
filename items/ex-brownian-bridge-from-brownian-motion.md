---
id: ex-brownian-bridge-from-brownian-motion
kind: example
title: "Brownian bridge from Brownian motion"
status: published
origin: pipeline
deps: [def-gaussian-process, def-brownian-motion, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-covariance-bilinearity-and-symmetry, lem-algebra-of-continuous-real-maps-on-a-space, lem-probability-measure-basic-identities, def-axiom-of-choice]
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
    - title: "Nobuaki Yoshida, Probability Theory, Exercise 6.1.10"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 8.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion and, for
$0\le t\le1$, define

$$\beta_t=B_t-tB_1.$$

Then $\beta$ is a centered Gaussian process with one almost-surely continuous
path event,

$$\operatorname{Cov}(\beta_s,\beta_t)=\min(s,t)-st\qquad(0\le s,t\le1),$$

and $\beta_0=0$ almost surely while $\beta_1=0$ identically. This is the
standard Brownian bridge from $0$ to $0$ over $[0,1]$.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Brownian motion is a centered Gaussian process with covariance $\operatorname{Cov}(B_s,B_t)=\min(s,t)$ and has one probability-one continuity event. [[def-brownian-motion]], [[def-gaussian-process]].

[F2] Covariance is symmetric and bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F3] The Lebesgue integral, hence expectation on an arbitrary probability space, is linear on finite linear combinations of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Finite sums, products, and scalar multiples of continuous real maps are continuous. [[lem-algebra-of-continuous-real-maps-on-a-space]].

[F5] A finite intersection of probability-one events has probability one. [[lem-probability-measure-basic-identities]].

[F6] AC is inherited through the Brownian and Gaussian-law interfaces. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 Fix $n\ge1$, times $t_1,\ldots,t_n\in[0,1]$, and coefficients $a_1,\ldots,a_n$. Then $$\sum_{j=1}^na_j\beta_{t_j}=\sum_{j=1}^na_jB_{t_j}-\left(\sum_{j=1}^na_jt_j\right)B_1.$$ This is a finite linear combination of Brownian values, with time $1$ appended if necessary, so [F1] makes it normal; repeated occurrences of time $1$, repeated $t_j$, and zero coefficients are allowed. Its mean is zero by finite linearity because all Brownian values are centered. Hence $\beta$ is a centered Gaussian process. [F1, F3, algebra]

1.2 For $s,t\in[0,1]$, covariance bilinearity gives $$\operatorname{Cov}(\beta_s,\beta_t)=\min(s,t)-t\min(s,1)-s\min(1,t)+st\operatorname{Var}(B_1).$$ Since $s,t\le1$ and $\operatorname{Var}(B_1)=1$, this is $\min(s,t)-ts-st+st=\min(s,t)-st$. [F1, F2, algebra]

1.3 Let $A$ be the probability-one event on which $t\mapsto B_t(\omega)$ is continuous on $[0,\infty)$, and let $A_0=\{B_0=0\}$. Their intersection has probability one by [F5]. For $\omega\in A\cap A_0$, the map $t\mapsto tB_1(\omega)$ is continuous and [F4] makes $t\mapsto\beta_t(\omega)$ continuous on $[0,1]$. On this event $\beta_0=B_0=0$, while for every $\omega$ one has $\beta_1=B_1-B_1=0$. [F1, F4, F5, algebra]

2.1 Steps 1.1--1.3 establish Gaussianity, centering, the covariance, path continuity, and both endpoints. The cases $s=0$, $t=0$, $s=t$, and $s=t=1$ follow directly from the same covariance formula, including its zero endpoint variances. The empty finite-dimensional list, if admitted, has the unique empty-tuple law. AC is used only through [F1]; the deterministic linear transformation and continuity argument make no new choice. [step 1.1, step 1.2, step 1.3, F1, F6] ∎

## Source notes

Yoshida, Exercise 6.1.10, printed p. 180, defines a Brownian bridge from
$a$ to $b$ over duration $s$ as
$B_t-(t/s)B_s+(1-t/s)a+(t/s)b$. Durrett, Section 8.4, printed pp. 412--413,
specializes this to $B_t-tB_1$ and computes the covariance $s(1-t)$ for
$s<t$. The proof above supplies all finite-dimensional and endpoint details.
