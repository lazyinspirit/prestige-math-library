---
id: lem-largest-summand-bound-for-symmetric-independent-variables
title: "Largest-summand bound for independent symmetric variables"
kind: lemma
status: published
origin: pipeline
deps: ["def-symmetric-real-random-variable", "def-partial-sums-and-sample-means", "thm-independent-random-elements-have-product-joint-law", "thm-arithmetic-and-lattice-operations-preserve-measurability"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Roch Note 4, Appendix A, Lemma 4.19 and proof, p. 10"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
proof_strategy: "Partition by the least index j with largest absolute summand. Its selection event depends only on magnitudes and is invariant under flipping coordinate j. Independence and symmetry make the joint law invariant under that flip. For R=sum_{k!=j}Y_k, at least one of |R+Y_j| and |R-Y_j| is >=|Y_j|. Integrate on the selection event, then sum over j. Handle strict thresholds directly; do not copy the source sign error or its atom-sensitive CDF shorthand."
---

## Statement

Let $Y_1,\ldots,Y_n$ be independent symmetric real random variables, $n\ge1$, and $S_n=\sum_{k=1}^nY_k$. For $t>0$,
$$\mathbb P(|S_n|\ge t)\ge\tfrac12\mathbb P(\max_{k\le n}|Y_k|\ge t).$$
The same bound holds when both inequalities inside the probabilities are strict. If the $Y_k$ are IID and $p=\mathbb P(|Y_1|>t)$, then
$$\mathbb P(|S_n|>t)\ge\tfrac12(1-(1-p)^n)\ge\tfrac12(1-e^{-np}).$$

## Facts & Assumptions

[F1] [[def-symmetric-real-random-variable]]: A real random variable $X$ is **symmetric** if its law as defined in def-law-or-distribution-of-a-random-element equals the law of $-X$. Equivalently, $\mathbb P(X\in B)=\mathbb P(X\in -B)$ for every Borel $B\subseteq\mathbb R$, where $-B=\{-b:b\in B\}$. No existence of an expectation is assumed in this definition. In particular atoms, including an atom at zero, are allowed.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: Let $n\ge1$, and let $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ for $i<n$ be independent random elements. Define $X=(X_0,\dots,X_{n-1}):\Omega\to\prod_{i<n}S_i.$ Then $X$ is a random element of $\left(\prod_{i<n}S_i,\bigotimes_{i<n}\Sigma_i\right)$, and its law is the finite product of the marginal laws: $\mathbb P_X=\bigotimes_{i<n}\mathbb P_{X_i}.$

[F3] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Let $(X,\mathcal{A})$ be a measurable space and let $f,g : X \to \overline{\mathbb{R}}$ be measurable. Then: 1. $cf$ is measurable for every real scalar $c$; 2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable; 3. if $f+g$ is pointwise defined, then $f+g$ is measurable; 4. with the convention of rem-zero-times-infinity-convention-for-pointwise-products, the pointwise product $fg$ is measurable.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 On $\mathbb R^n$ let $B_j$ be the Borel set where $j$ is the least index attaining the largest coordinate magnitude. The sets $B_j$ partition the space and are invariant under flipping the sign of coordinate $j$. The product joint law and symmetry of each marginal make that sign flip measure preserving. Ties and zero coordinates are included by the least-index rule. [F2, F1, F3, given]

2.1 Fix $j$, and write $R=\sum_{k\ne j}y_k$. Since $2|y_j|=|(R+y_j)-(R-y_j)|\le|R+y_j|+|R-y_j|$, at least one of $|R+y_j|,|R-y_j|$ is at least $|y_j|$. On $B_j\cap\{|y_j|\ge t\}$ the two indicators of a final magnitude at least $t$, before and after the sign flip, therefore sum to at least one. Integrate using flip invariance to obtain $2\mathbb P(B_j\cap\{|S_n|\ge t\})\ge\mathbb P(B_j\cap\{|Y_j|\ge t\})$. The identical argument on $|y_j|>t$ uses strict final events and proves their version directly. [step 1.1, algebra]

3.1 Summing over $j$ gives both bounds. Under IID, independence gives $\mathbb P(\max_k|Y_k|>t)=1-(1-p)^n$. Finally $1-p\le e^{-p}$ for $0\le p\le1$, so $(1-p)^n\le e^{-np}$. This includes $p=0$, $p=1$, and $n=1$. [F2, step 2.1, algebra] ∎
