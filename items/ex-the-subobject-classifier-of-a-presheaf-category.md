---
id: ex-the-subobject-classifier-of-a-presheaf-category
kind: example
title: "The subobject classifier in a presheaf category on the walking arrow"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-subobject-classifier, thm-the-two-element-set-is-a-subobject-classifier-for-sets, def-yoneda-embedding]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.27"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.9"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
generation:
  role: example
---

## Example

Let $\mathbf I$ be the walking-arrow category $0\xrightarrow{u}1$, and work in the presheaf category $\mathbf{Set}^{\mathbf I^{\mathrm{op}}}$. The subobject classifier $\Omega$ sends an object to its set of sieves:

- $\Omega(0)=\{\varnothing,\{1_0\}\}$,
- $\Omega(1)=\{\varnothing,\{u\},\{u,1_1\}\}$.

The truth morphism $\operatorname{true}:1\to\Omega$ selects the maximal sieve at each object. For any presheaf $P$ and subpresheaf $S\subseteq P$, its characteristic morphism is
$$\chi_{S,c}(x)=\{f:d\to c:P(f)(x)\in S(d)\}.$$

## Facts & Assumptions

**Given:** The walking-arrow category $\mathbf I$, the sieve presheaf $\Omega$, and the subpresheaf $S\subset y(1)$ defined below.

[L1] A subobject classifier classifies subobjects by pullback of truth ([[def-subobject-classifier]]).

## Verification

**Proof technique:** direct.

1.1 On the walking arrow, the arrows into $0$ are only $1_0$, so its sieves are $\varnothing$ and $\{1_0\}$. The arrows into $1$ are $u$ and $1_1$, and downward closure forces any sieve containing $1_1$ also to contain $u$, giving exactly the three displayed sieves on $1$. Pullback of sieves makes $\Omega$ a presheaf, and the maximal sieves define the natural truth morphism above. [given, construct, algebra]

2.1 Consider the representable presheaf $y(1)$ ([[def-yoneda-embedding]]) and the subpresheaf $S\subset y(1)$ defined by $S(1)=\varnothing$ and $S(0)=\{u\}$. Its characteristic map $\chi:y(1)\to\Omega$ sends the unique element $u\in y(1)(0)$ to the maximal sieve $\{1_0\}$, and sends $1_1\in y(1)(1)$ to the sieve $\{u\}$. [step 1.1, given, construct]

2.2 For a general subpresheaf $T\subseteq P$, the displayed formula defines a sieve and is natural under restriction. Moreover $\chi_{T,c}(x)$ is maximal exactly when $x\in T(c)$: the forward implication tests $1_c$, and the reverse follows from closure of the subpresheaf under restriction. Thus pulling back $\operatorname{true}$ along $\chi_T$ recovers $T$, and this condition uniquely determines $\chi_T$. By [L1], $\Omega$ is a subobject classifier. [step 1.1, L1, construct, algebra]

3.1 For the concrete $S\subset y(1)$ of step 2.1, that pullback includes $u$ at object $0$ because $\chi_0(u)=\{1_0\}$ is maximal, and excludes $1_1$ at object $1$ because $\chi_1(1_1)=\{u\}$ is not maximal. Hence the general classifier calculation gives exactly the displayed example. [step 2.1, step 2.2, algebra] ∎
