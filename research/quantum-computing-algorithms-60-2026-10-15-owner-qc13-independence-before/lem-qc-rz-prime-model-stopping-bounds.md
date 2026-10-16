---
id: lem-qc-rz-prime-model-stopping-bounds
kind: lemma
title: Conditional stopping bounds for prime-tested Rz candidates
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-rz-scaled-grid-growth
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Hypothesis 8.3 and Proposition 8.8
      url: https://arxiv.org/pdf/1403.2975
---

## Statement

For the candidate sequence and exponents of
[[lem-qc-rz-scaled-grid-growth]], suppose that independent success events
$E_j$ have probabilities $p_j\ge c/(k_j+1)$, for a constant $0<c\le1$
independent of the input. Let $J=\min\{j\ge1:E_j\}$.
Then $J<\infty$ almost surely and, for every fixed positive integer $r$,
$$\mathbb E[J^r]=O((k_2+1)^r)=O((1+\log(1/\varepsilon))^r).$$
In particular $\mathbb E[J]=O(\log(1/\varepsilon))$ and
$\mathbb E[\log_2J]=O(1+\log\log(1/\varepsilon))$.
The implied constants can depend on $c$ and $r$, but not on $\theta$ or
$\varepsilon$. For every fixed nonnegative integer $d$,
$\mathbb E[J(1+k_2+\log J)^d]$ is polynomially bounded in $1+k_2$.

This is the explicit quantitative probabilistic assumption needed when
Ross–Selinger Hypothesis 8.3 is used for a complexity claim. It is a conditional
model, not an assertion of independence for a deterministic input sequence.

## Facts & Assumptions

**Given:** The independent events, the constant $c$, and the random index $J$
in the statement.

[F1] [[lem-qc-rz-scaled-grid-growth]] gives
$k_j\le k_2+2\lceil\log_2j\rceil$ and
$k_2=O(1+\log(1/\varepsilon))$.

## Proof

1.1 By [F1], choose constants $a\ge1$ and $b>0$, with $a=O(k_2+1)$,
so that $p_j\ge1/(a+b\ln j)$ for all $j\ge1$.
Independence and $1-x\le e^{-x}$ imply
$\Pr(J>j)=\prod_{h=1}^j(1-p_h)\le\exp(-j/(a+b\ln j))$.
This upper bound tends to zero, which proves almost sure finiteness.
[F1, given, algebra]

1.2 For $j\ge a$, put $x=j/a\ge1$. Since $\ln a\le a$ and
$\ln x\le2\sqrt x$, one has
$a+b\ln j\le(1+3b)a\sqrt x$. Hence
$\Pr(J>j)\le\exp(-\sqrt{j/a}/(1+3b))$ for $j\ge a$.
For an integer-valued positive random variable, summing the identity
$J^r=\sum_{j=0}^{J-1}((j+1)^r-j^r)$ and using nonnegative sums gives
$\mathbb E[J^r]=\sum_{j\ge0}((j+1)^r-j^r)\Pr(J>j)$.
The part $j<a$ is $O(a^r)$. The remaining part is bounded by a constant
times $\sum_{j\ge a}(j+1)^{r-1}e^{-\sqrt{j/a}/(1+3b)}=O(a^r)$:
comparison with the integral and substitution $y=\sqrt{t/a}$ reduce it to
$a^r\int_1^\infty y^{2r-1}e^{-y/(1+3b)}\,dy$, which is finite by repeated
integration by parts. This proves all the moment bounds. [step 1.1, algebra]

1.3 The elementary tangent bound
$\ln x\le\ln\mu+(x-\mu)/\mu$ for $x,\mu>0$, with
$\mu=\mathbb E[J]$, gives
$\mathbb E[\log_2J]\le\log_2\mathbb E[J]=O(1+\log(k_2+1))$.
Finally $\log J\le J$, and expansion of
$J(1+k_2+J)^d$ reduces its expectation to the finitely many moments in
step 1.2; these are polynomial in $k_2+1$.
The stated bounds in $\varepsilon$ follow from [F1].
[F1, step 1.2, algebra] ∎
