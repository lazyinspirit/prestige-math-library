---
id: lem-different-is-transitive-in-towers-of-local-fields
kind: lemma
title: "The different is transitive in a tower of local fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-different-ideal-of-a-finite-local-extension
  - thm-local-trace-dual-is-a-fractional-ideal
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-field-norm-and-trace
  - thm-basic-laws-for-field-norm-and-trace
  - lem-trace-pairing-for-a-finite-separable-extension
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter III, Section 2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $K\subseteq M\subseteq L$ be a tower of finite
separable extensions of nonarchimedean local fields with finite residue fields.
Then the different ideals satisfy
$$\mathfrak D_{L/K}=\mathfrak D_{L/M}\,\mathfrak D_{M/K}\mathcal O_L.$$

## Statement references

[[def-different-ideal-of-a-finite-local-extension]]

[J. Neukirch, *Algebraic Number Theory*, Chapter III, Section 2](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Section 4](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a finite separable local-field tower $K\subseteq M\subseteq L$.

[A1] Countable Choice supplies the monogenic presentations used below. ([[def-countable-choice]])

[F1] [[def-different-ideal-of-a-finite-local-extension]]: The codifferent of $E/F$ is $\{x\in E:\operatorname{Tr}_{E/F}(x\mathcal O_E)\subseteq\mathcal O_F\}$, and the different is its inverse.

[F2] [[thm-local-trace-dual-is-a-fractional-ideal]]: For a finite separable local extension with a monogenic valuation ring, its codifferent and different are nonzero principal fractional ideals.

[F3] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: Under Countable Choice, each valuation ring in the tower is generated as a ring by one element over the lower valuation ring.

[F4] [[lem-trace-pairing-for-a-finite-separable-extension]]: The field trace pairing $(x,y)\mapsto\operatorname{Tr}(xy)$ is nondegenerate for a finite separable extension.

[F5] [[thm-basic-laws-for-field-norm-and-trace]]: Trace is linear and transitive in finite towers: $\operatorname{Tr}_{L/K}=\operatorname{Tr}_{M/K}\circ\operatorname{Tr}_{L/M}$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 By [F3], choose $\alpha\in\mathcal O_L$ and $\beta\in\mathcal O_M$ with $\mathcal O_L=\mathcal O_M[\alpha]$ and $\mathcal O_M=\mathcal O_K[\beta]$. The powers $u_i=\alpha^i$ for $0\le i<[L:M]$ form an $\mathcal O_M$-basis of $\mathcal O_L$, and the powers $v_j=\beta^j$ for $0\le j<[M:K]$ form an $\mathcal O_K$-basis of $\mathcal O_M$: monic division gives spanning and field-degree linear independence gives independence. Products $u_i v_j$ form an $\mathcal O_K$-basis of $\mathcal O_L$, since expanding coefficients in the $v_j$ gives spanning and regrouping a relation by $u_i$ and then $v_j$ gives independence. [A1, F3, given, choose, algebra]

2.1 By [F4], choose trace-dual bases $u_i^\vee\in L$ and $v_j^\vee\in M$ satisfying $\operatorname{Tr}_{L/M}(u_i u_r^\vee)=\delta_{ir}$ and $\operatorname{Tr}_{M/K}(v_j v_s^\vee)=\delta_{js}$. Trace transitivity [F5] gives $\operatorname{Tr}_{L/K}\bigl((u_i v_j)(u_r^\vee v_s^\vee)\bigr) =\operatorname{Tr}_{M/K}\bigl(v_j\operatorname{Tr}_{L/M}(u_i u_r^\vee)v_s^\vee\bigr) =\delta_{ir}\delta_{js}.$ Thus the products $u_i^\vee v_j^\vee$ are the trace-dual basis to $u_i v_j$. [F4, F5, step 1.1, choose, algebra]

3.1 Testing the defining trace-dual condition on the $\mathcal O_K$-basis $u_i v_j$ shows $\mathfrak D_{L/K}^{-1}=\sum_{i,j}\mathcal O_K u_i^\vee v_j^\vee.$ The same basis test gives $\mathfrak D_{L/M}^{-1}=\sum_i\mathcal O_Mu_i^\vee$ and $\mathfrak D_{M/K}^{-1}=\sum_j\mathcal O_Kv_j^\vee$. Since each codifferent is an ideal of its valuation ring, multiplication by $\mathcal O_L$ is absorbed by $\mathfrak D_{L/M}^{-1}$ and multiplication by $\mathcal O_M$ is absorbed by $\mathfrak D_{M/K}^{-1}$. Therefore $\mathfrak D_{L/K}^{-1}=\mathfrak D_{L/M}^{-1}\,\mathfrak D_{M/K}^{-1}\mathcal O_L.$ [F1, step 1.1, step 2.1, algebra]

4.1 By [F2] the codifferents are nonzero principal fractional ideals, so they are invertible. Taking inverses in step 3.1 reverses the product and yields $\mathfrak D_{L/K}=\mathfrak D_{L/M}\mathfrak D_{M/K}\mathcal O_L$. [F2, step 3.1, algebra] ∎
