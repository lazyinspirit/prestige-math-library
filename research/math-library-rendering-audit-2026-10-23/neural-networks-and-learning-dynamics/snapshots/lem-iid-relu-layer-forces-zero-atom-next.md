---
id: lem-iid-relu-layer-forces-zero-atom-next
kind: lemma
title: "An IID ReLU layer forces a zero atom in the next preactivation"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-independent-random-elements
  - lem-symmetric-rectifier-moments
  - thm-independent-random-elements-have-product-joint-law
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
---

## Statement

Let $n\ge1$ and let $Z_1,\ldots,Z_n$ be independent and identically
distributed real random variables whose law is symmetric about zero and has no
atom at zero. Put $X_i=\operatorname{ReLU}(Z_i)$. For any real random
variables $W_1,\ldots,W_n$ on the same probability space, define the next
zero-bias preactivation $T=\sum_{i=1}^n W_iX_i$. Then
$$\mathbb P(T=0)\ge2^{-n}>0.$$
In particular, this next preactivation cannot be atomless at zero, regardless
of the distribution or dependence of the weights. The same conclusion holds
under the weaker assumption that the $X_i$ are mutually independent and each
$Z_i$ is symmetric with no atom at zero; independence of the $Z_i$ is not
required in that formulation.

## Facts & Assumptions

**Given:** The finite independent family $Z_1,\ldots,Z_n$, its common symmetric atomless law, and the definitions in the Statement.

[F1] For a symmetric atomless real random variable, each sign has probability $1/2$. ([[lem-symmetric-rectifier-moments]])

[F2] A finite family of independent random elements has product joint law. ([[thm-independent-random-elements-have-product-joint-law]])

[F3] Independence of random elements means independence of their generated sigma-algebras. ([[def-independent-random-elements]])

## Proof

1.1 By [F1], $\mathbb P(Z_i<0)=1/2$ for each $i$. On the event $E=\bigcap_{i=1}^n\{Z_i<0\}$, every $X_i=\operatorname{ReLU}(Z_i)$ is zero. [given, F1]

1.2 Since $\{X_i=0\}=\{Z_i\le0\}$ and $\mathbb P(Z_i=0)=0$, the event $A=\bigcap_i\{X_i=0\}$ agrees with $E$ up to a null set. Under the weaker hypothesis, independence of the $X_i$ and [F2] give $\mathbb P(A)=\prod_i\mathbb P(X_i=0)=2^{-n}$. Under the original hypothesis, each $\sigma(X_i)$ is a sub-sigma-algebra of $\sigma(Z_i)$ because ReLU is measurable, so [F3] implies independence of the $X_i$ and the same calculation applies. [given, F1, F2, F3]

2.1 On $E$, $T=\sum_iW_iX_i=0$ for every value of the real weights. Hence $\mathbb P(T=0)\ge\mathbb P(E)=2^{-n}>0$, which proves the claim. [step 1.1, step 1.2, algebra] ∎
