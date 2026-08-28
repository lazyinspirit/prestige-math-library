---
id: ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane
kind: example
title: "The family z^n is normal on the unit disc and not normal on the complex plane"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-montel-theorem-for-holomorphic-functions, thm-normal-holomorphic-families-are-locally-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Example

The sequence $z^n$ is a normal family on the unit disc $\mathbb D$, but not on
all of $\mathbb C$.

## Facts & Assumptions

**Given:** The sequence $f_n(z)=z^n$.

[L1] Locally bounded holomorphic families are normal, and normal holomorphic families are locally bounded ([[thm-montel-theorem-for-holomorphic-functions]], [[thm-normal-holomorphic-families-are-locally-bounded]]).

## Verification

**Proof technique:** direct.

1.1 On every compact subset of $\mathbb D$, all points satisfy $|z|\le r<1$, so $|z^n|\le1$ there for every $n$. Hence the family is locally bounded on $\mathbb D$, and [L1] makes it normal. [L1, given]

2.1 On the plane, the closed disc $\overline D(2,1/2)$ lies in $\mathbb C$ and every point of it has modulus at least $3/2$, so $|z^n|\ge(3/2)^n$ there. Thus the family is not locally bounded near $2$, and [L1] shows it is not normal on $\mathbb C$. [L1, given, algebra] ∎
