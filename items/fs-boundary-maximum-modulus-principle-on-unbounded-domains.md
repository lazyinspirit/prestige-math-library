---
id: fs-boundary-maximum-modulus-principle-on-unbounded-domains
kind: false-statement
title: "FALSE: boundary control alone gives the maximum principle on an unbounded domain"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-boundary-maximum-modulus-principle, thm-maximum-modulus-principle-with-boundary-and-infinity-control, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. A. Tropp, Matrix Analysis, Lecture 7, §7.2.2"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

If a function is continuous on the closure of an unbounded complex domain, holomorphic inside, and has boundary modulus at most $1$, then its modulus is at most $1$ throughout the domain.

## Facts & Assumptions

**Given:** The upper half-plane $\mathbb H=\{z:\operatorname{Im}z>0\}$ and $f(z)=\exp(-iz)$. The exponential is entire and holomorphic compositions obey the complex chain rule ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]]). The bounded-domain theorem is [[thm-boundary-maximum-modulus-principle]].

[L1] Boundary control together with control at infinity bounds the modulus throughout an unbounded complex domain ([[thm-maximum-modulus-principle-with-boundary-and-infinity-control]]).

[L2] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Refutation

**Proof technique:** direct.

1.1 The function $f(z)=\exp(-iz)$ is entire and hence is holomorphic on $\mathbb H$ and continuous on its closed half-plane. [L2, given]

2.1 For $z=x+iy$, one has $-iz=y-ix$, so [L2] gives $|f(x+iy)|=e^y$. Thus $|f(x)|=1$ on the real boundary $y=0$, while $|f(iy)|=e^y$ is unbounded as $y\to+\infty$. [step 1.1, L2, algebra]

3.1 Step 2.1 violates the proposed conclusion. The valid unbounded-domain result [L1] requires control at infinity as well as finite-boundary control, and this example fails exactly that additional hypothesis. [step 2.1, L1] ∎
