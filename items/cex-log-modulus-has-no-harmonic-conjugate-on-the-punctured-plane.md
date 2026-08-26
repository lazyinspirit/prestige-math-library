---
id: cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane
kind: counterexample
title: "log|z| has no global harmonic conjugate on C\\{0}"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-log-modulus-is-harmonic-on-the-punctured-plane, thm-no-continuous-logarithm-on-the-punctured-complex-plane, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, thm-open-mapping-theorem-holomorphic-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every harmonic function on a domain has a global harmonic
conjugate.

The witness is $u(z)=\log|z|$ on $\mathbb C\setminus\{0\}$. It is harmonic there,
but it has no global harmonic conjugate.

## Facts & Assumptions

**Given:** The harmonic function $u(z)=\log|z|$ on $\mathbb C\setminus\{0\}$.

[L1] The function $\log|z|$ is harmonic on the punctured plane ([[ex-log-modulus-is-harmonic-on-the-punctured-plane]]).

[L2] There is no continuous logarithm on all of $\mathbb C\setminus\{0\}$ ([[thm-no-continuous-logarithm-on-the-punctured-complex-plane]]).

[L3] The complex exponential is entire, satisfies $\exp(\alpha-\beta)=\exp(\alpha)/\exp(\beta)$, and compositions and quotients of holomorphic functions are holomorphic wherever the denominator is nonzero ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[L4] A nonconstant holomorphic function on a complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 Suppose $v$ were a harmonic conjugate of $\log|z|$ on $\mathbb C\setminus\{0\}$. Then $$F(z):=\log|z|+iv(z)$$ would be holomorphic there, and its exponential would satisfy $$\exp(F(z))=|z|(\cos v(z)+i\sin v(z)).$$ [assume-contra]

2.1 The function $G(z):=\exp(F(z))/z$ is holomorphic on $\mathbb C\setminus\{0\}$ by [L3], and $|G(z)|=|\exp(F(z))|/|z|=e^{\operatorname{Re}F(z)}/|z|=1$ by step 1.1. If $G$ were nonconstant, [L4] would make its image open in $\mathbb C$, impossible because $G(\mathbb C\setminus\{0\})\subseteq\{\,|w|=1\,\}$. Hence $G$ is constant on $\mathbb C\setminus\{0\}$. [step 1.1, L3, L4, algebra]

3.1 Since $G$ is constant, for every $z\ne0$ one has $$\exp(F(z)-F(1))=\frac{\exp(F(z))}{\exp(F(1))}=\frac{z\,G(z)}{G(1)}=z.$$ Thus $L(z):=F(z)-F(1)$ is a continuous logarithm on $\mathbb C\setminus\{0\}$, contradicting [L2]. [step 2.1, L2, L3]

4.1 Therefore $\log|z|$ has no global harmonic conjugate on $\mathbb C\setminus\{0\}$. [step 3.1, L1, discharge-contradiction] ∎
