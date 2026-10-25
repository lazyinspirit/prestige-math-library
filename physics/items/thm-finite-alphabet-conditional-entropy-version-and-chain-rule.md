---
id: thm-finite-alphabet-conditional-entropy-version-and-chain-rule
kind: theorem
title: "Finite-alphabet conditional entropy is version-invariant and obeys its chain rule"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-alphabet-conditional-entropy-given-observation
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-it-finite-conditional-entropy
  - def-conditional-law-given-a-random-element
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is used for standard-Borel regular conditional law existence and simultaneous almost-everywhere uniqueness."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 2 §2.5 and Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC. Let $X,U$ take values in finite nonempty sets and $Z$ in a standard-Borel space. Conditional entropy as defined in [[def-finite-alphabet-conditional-entropy-given-observation]] is unchanged when any supplied regular conditional law is replaced by another version. Moreover,
$$H(X,U\mid Z)=H(X\mid Z)+H(U\mid X,Z).$$
All three quantities are finite; the identity is an additive finite-sum identity.

## Facts & Assumptions

**Given:** The random elements and hypotheses in the Statement.

[A1] AC is required for the stated regular conditional law existence and simultaneous uniqueness interfaces. [[def-axiom-of-choice]]

[F1] $H(X\mid Z)$ is the integral of the finite Shannon entropy of a conditional probability vector; the value of $-t\ln t$ at zero is zero. [[def-finite-alphabet-conditional-entropy-given-observation]] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]

[F2] Two regular conditional distributions of a standard-Borel-valued variable agree as probability measures outside one measurable null set. [[lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions]]

[F3] A joint law on standard-Borel factors disintegrates through a supplied regular conditional law, and the integral identity extends from rectangles to nonnegative product-measurable functions. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F4] A finite product of standard-Borel spaces is standard Borel. [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

## Proof

**Given:** AC and the stated finite-valued random elements and standard-Borel conditioning variable.

1.1 If two versions of the conditional law of $X$ given $Z$ are supplied, [F2] gives one $P_Z$-null set outside which their probability measures agree. Every atom probability, and hence the finite entropy sum in [F1], then agrees pointwise outside that set. Integrating gives the same $H(X\mid Z)$. The same argument applies to $(X,U)\mid Z$ and to $U\mid(X,Z)$. [A1, F1, F2, given]

1.2 Choose regular conditional laws of $(X,U)$ given $Z$ and of $U$ given $(X,Z)$; they exist by [A1, F3], since $(X,U)$ and $(X,Z)$ are standard Borel by [F4]. Write $p_{ij}(z)=P(X=i,U=j\mid Z=z)$, $p_i(z)=\sum_jp_{ij}(z)$, and $m_{ij}(z)=P(U=j\mid X=i,Z=z)$ for the chosen versions. The function $p_i$ is itself a conditional law of $X$ given $Z$, so [F2] makes it agree almost everywhere with the version used in $H(X\mid Z)$. For each $i,j$ and measurable $C$ in the value space of $Z$, the two disintegrations [F3] give $$\int_C p_i(z)m_{ij}(z)\,P_Z(dz)=P(X=i,U=j,Z\in C)=\int_Cp_{ij}(z)\,P_Z(dz).$$ Both integrands are bounded and measurable. Testing the sets where one exceeds the other by at least $1/n$, for each $n\ge1$, shows $p_i(z)m_{ij}(z)=p_{ij}(z)$ almost everywhere; because the alphabets are finite, one null set works for every $i,j$. [A1, F2, F3, F4, given, construct]

2.1 Outside that null set, if $p_i(z)=0$ then every $p_{ij}(z)=0$, so the row contributes zero to the conditional entropy. If $p_i(z)>0$, then $m_{ij}(z)=p_{ij}(z)/p_i(z)$ for every $j$. On positive entries, $\ln p_{ij}=\ln p_i+\ln m_{ij}$; multiplying by $-p_{ij}$ and summing over the finite alphabets gives $$H(X,U\mid Z=z)=H(X\mid Z=z)+\sum_i p_i(z)H(U\mid X=i,Z=z).$$ [F1, step 1.2, algebra]

3.1 Integrate the finite conditional identity from step 2.1 with respect to $P_Z$. The disintegration identity [F3] identifies the last integral with $H(U\mid X,Z)$ and the other terms with their definitions. By the bound $-t\ln t\le1/e$ in [F1], each conditional entropy is bounded by its finite alphabet size divided by $e$, so all integrals are finite and no subtraction of infinite quantities occurs. Step 1.1 proves the accompanying version-independence assertion. [F1, F3, step 1.1, step 2.1, algebra] ∎
