---
id: def-hecke-l-zero-counting-function
kind: definition
title: Multiplicity-counting function for nontrivial Hecke L-zeros
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-finite-order-hecke-l-euler-product
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
proof_strategy: direct
sources:
  references:
    - title: A. R. Weiss, The least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Section 1, printed pp. 58–59, completed Hecke L-functions and nontrivial zeros counted with multiplicity.
    - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
      url: https://arxiv.org/pdf/1803.02823v3
      locator: Section 3, equation (3.3), zeros with sigma < Re rho < 1 and absolute ordinate at most T.
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $K$ be a number field and let $\chi$ be a primitive finite-order ray-class Hecke character of $K$. Write $L(s,\chi)$ for the meromorphic continuation of its Euler series. A **nontrivial zero** of $L(s,\chi)$ is a zero $\rho=\beta+i\gamma$ with $0<\beta<1$; its multiplicity is the order of vanishing of the analytic function $L(s,\chi)$ at $\rho$. For $0<\sigma<1$ and $T\ge1$, define
$$N_K(\sigma,T,\chi):=\sum_{\substack{L(\rho,\chi)=0\\ \sigma<\operatorname{Re}\rho<1\\ |\operatorname{Im}\rho|\le T}}m_\chi(\rho).$$

## Definition references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

## Facts & Assumptions

**Given:** The stated field and primitive character, AC, CC, $0<\sigma<1$, and $T\ge1$.

[A1] AC and CC are hypotheses of the Hecke-character definition and primitive-continuation suppliers used here; the local verification below makes no additional choice. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-finite-order-ray-class-hecke-character-and-l-function]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F1] The primitive Hecke continuation theorem gives the completed function $\Lambda(s,\chi)$, entire for nontrivial $\chi$ and with possible simple poles at $0,1$ for trivial primitive $\chi$. Dividing by its conductor power and gamma product continues $L$: reciprocal gamma is entire, so it introduces no poles. In the trivial case at $0$, the gamma product has a pole of order $r_1+r_2\ge1$ and therefore cancels the possible completed simple pole. Thus the only possible pole of $L$ is at $1$; in particular it is holomorphic at every zero in the defining strip. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F2] For $\operatorname{Re}(s)>1$, the Hecke series converges absolutely and equals its Euler product over primes not dividing the modulus. [[thm-finite-order-hecke-l-euler-product]]

[F3] A finite-order ray-class character takes values in a finite subgroup of $\mathbb C^\times$, so every nonzero value has absolute value $1$. [[def-finite-order-ray-class-hecke-character-and-l-function]]

## Verification

**Given:** The data and hypotheses above.

1.1 At $s=2$, write $z_{\mathfrak p}=\chi(\mathfrak p)(N\mathfrak p)^{-2}$ for primes not dividing the modulus. By [F3], $|z_{\mathfrak p}|\le1/4$. Absolute convergence in [F2] implies $\sum_{\mathfrak p\nmid\mathfrak m_0}|z_{\mathfrak p}|<\infty$, since these prime ideals are a subset of the ideals in the absolute Dirichlet series. The power series for $-\log(1-z)$ gives $|\log(1-z_{\mathfrak p})|\le |z_{\mathfrak p}|/(1-|z_{\mathfrak p}|)\le(4/3)|z_{\mathfrak p}|$. Thus the logarithms sum absolutely, and the Euler product in [F2] is the exponential of a convergent sum; hence $L(2,\chi)\ne0$. [A1, F2, F3, given, algebra]

2.1 By [F1] and step 1.1, $L(s,\chi)$ is a nonzero meromorphic function on a neighborhood of the compact rectangle $\sigma\le\operatorname{Re}s\le1$, $|\operatorname{Im}s|\le T$. Its zeros are isolated; if $s=1$ is a pole, its Laurent expansion shows that zeros do not accumulate there. Therefore only finitely many zeros occur in the region defining $N_K$. At each such zero the least positive order of a nonzero Taylor coefficient exists, so $m_\chi(\rho)$ and the finite multiplicity sum are well-defined. [A1, F1, step 1.1, algebra] ∎

## Proof status

The batch-109 Hecke definition, Euler-product theorem, and primitive continuation theorem are present and their statements were inspected. The continuation carrier now has a locally authored full unit-domain Mellin reconstruction awaiting independent review. The verification above uses that precise analytic interface; it supplies no zero-counting estimate or zero-free-region theorem and asserts no independent acceptance of the new reconstruction.
