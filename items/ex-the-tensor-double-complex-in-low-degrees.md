---
id: ex-the-tensor-double-complex-in-low-degrees
title: "The tensor double complex in low degrees"
kind: example
status: draft
origin: pipeline
deps: ["def-tensor-double-complex-of-two-projective-resolutions"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Example

Let $m,n\geq1$ be integers. Label the resolutions $Q$ and $P$, respectively, in the order $0\to\mathbb Z\xrightarrow m\mathbb Z\to\mathbb Z/m\to0$ and $0\to\mathbb Z\xrightarrow n\mathbb Z\to\mathbb Z/n\to0$. Their tensor double complex has $K_{0,0}=K_{1,0}=K_{0,1}=K_{1,1}=\mathbb Z$ and all other terms zero.

## Verification

**Given:** the two displayed two-term resolutions.

1.1 In bidegrees $(p,q)$ with $p,q\in\{0,1\}$, the tensor of the two free rank-one groups is $\mathbb Z$. [given]

2.1 The horizontal differential is multiplication by $m$. Under the supplied double-complex convention the vertical differential already includes the factor $(-1)^p$, so it is $(-1)^p$ times multiplication by $n$. The total differential is therefore $d_h+d_v$, with no second sign inserted. [step 1.1, algebra]

3.1 Hence $\operatorname{Tot}_0=\mathbb Z$, $\operatorname{Tot}_1=\mathbb Z\oplus\mathbb Z$, and $\operatorname{Tot}_2=\mathbb Z$, where the degree-one summands are ordered $K_{1,0},K_{0,1}$. The total complex is $$0\longrightarrow\mathbb Z\xrightarrow{c\mapsto(-nc,mc)}\mathbb Z^2\xrightarrow{(a,b)\mapsto ma+nb}\mathbb Z\longrightarrow0.$$ The composite is $-mnc+nmc=0$, checking the sign and both axis labels. This also covers $m=1$ or $n=1$. [step 2.1, algebra] ∎
