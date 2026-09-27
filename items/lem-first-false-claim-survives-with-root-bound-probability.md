---
id: lem-first-false-claim-survives-with-root-bound-probability
kind: lemma
title: "A false field claim becomes true in one round with bounded probability"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-shamir-protocol-for-tqbf, lem-multilinearization-preserves-boolean-values, lem-efficient-prime-field-for-a-polynomial-soundness-budget, def-qbf-arithmetization-operators, def-multilinearization-operator, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $\Phi$ be a closed prenex quantified Boolean formula, with $n$ variables and the parameters $D$ and $p$ of its Shamir protocol, and let an arbitrary prover run against the verifier of [[def-shamir-protocol-for-tqbf]]. Fix a round $t\in\{1,\dots,T\}$ and condition on a reached prefix of positive probability whose current point $\sigma_t$ assigns a value to every variable of the stage polynomial $G_t$ and whose current claim satisfies $c_t\ne G_t(\sigma_t)$. Suppose the round-$t$ message $s$ is a legal list of degree at most $D$ that passes the round's check. Then the probability, over the fresh challenge $r_t$ that the verifier draws after the message is fixed, that the updated claim equals the true predecessor value is at most $2D/p$; here the true predecessor value at the challenge $r$ is $q^*(r)$, where $q^*$ is the restriction of $G_{t-1}$ to $\sigma_t$ in the active variable of the round.

## Facts & Assumptions

**Given:** A closed prenex quantified Boolean formula $\Phi$, its Shamir protocol, an arbitrary prover, a round index $t$, a reached prefix with $c_t\ne G_t(\sigma_t)$, and a legal message $s$ passing the round's check.

[A1] In the round with node $M=N_t$ and active variable $x_i$ the verifier tests $c=s(0)s(1)$ for a universal node, $c=s(0)+s(1)-s(0)s(1)$ for an existential node, and $c=(1-a)s(0)+a\,s(1)$ with $a=\sigma_t(i)$ for a reduction; then it reads a fresh challenge block, sets $\sigma_{t-1}(i)=r_t$, $\sigma_{t-1}(k)=\sigma_t(k)$ for $k\ne i$ and $c_{t-1}=s(r_t)$, and the challenge is drawn only after the message is fixed. The honest (true) round polynomial is the restriction of $G_{t-1}$ to the current point in the active variable ([[def-shamir-protocol-for-tqbf]]).

[A2] Every node polynomial of the operator list, after substituting arbitrary field elements for all variables other than its active variable, has degree at most $D=\max\{L,2\}$ in that active variable; in particular $q^*$ has degree at most $D$ ([[lem-multilinearization-preserves-boolean-values]]).

[A3] The verifier's challenge is the integer value of a block of $2\lceil\log_2p\rceil$ uniform bits reduced modulo $p$, and this sampler gives every residue of $F$ probability at most $2/p$ ([[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]).

[A4] The operators of the arithmetization are $A_{X_i}P=(P|_{X_i=0})(P|_{X_i=1})$, $E_{X_i}P=1-(1-P|_{X_i=0})(1-P|_{X_i=1})$ ([[def-qbf-arithmetization-operators]]) and $R_{X_i}P=(1-X_i)(P|_{X_i=0})+X_i(P|_{X_i=1})$ ([[def-multilinearization-operator]]).

[A5] At a reached round in block $j$, the reverse schedule has already sampled every variable in the input polynomial's block prefix except the active variable: before $O_j$ these are $x_1,\dots,x_{j-1}$, and before a reduction $R_{X_i}$ the preceding quantifier and reduction rounds have assigned the other variables among $x_1,\dots,x_j$ ([[def-multilinearization-operator]], [[def-shamir-protocol-for-tqbf]]).

[L1] A nonzero polynomial of degree at most $D$ over a field has at most $D$ distinct roots in that field ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** direct calculation.

1.1 By [A5], the restriction $q^*$ of $G_{t-1}$ to the current point in the active variable is well defined. Let $M=N_t$ be the round's node. By [A4] the true value of the current stage at $\sigma_t$ is $q^*(0)q^*(1)$ when $M$ is a universal node and $1-(1-q^*(0))(1-q^*(1))$, equivalently $q^*(0)+q^*(1)-q^*(0)q^*(1)$, when $M$ is an existential node. If $M$ is the reduction $R_{X_i}$, put $a=\sigma_t(i)$; this value is defined in that case because the protocol rejects a reduction round with undefined $\sigma_t(i)$, and the stage value is $(1-a)q^*(0)+a\,q^*(1)$. In each case the round's check is the same expression evaluated at $s(0),s(1)$, using $a$ only in the reduction case. [A1, A4, A5, given, algebra]

1.2 The polynomial $q^*$ has degree at most $D$ by [A2], and the received message $s$ has degree at most $D$ by hypothesis; both are univariate polynomials over $F$. [A2, given]

2.1 If $s=q^*$ as polynomials, then the value the check computed, namely $c_t$, would equal the expression of step 1.1 with $q^*$ in place of $s$, which is $G_t(\sigma_t)$; this contradicts the hypothesis $c_t\ne G_t(\sigma_t)$. Hence $s\ne q^*$. [step 1.1, given]

2.2 By step 1.2 the difference $s-q^*$ is a nonzero polynomial of degree at most $D$; by [L1] it has at most $D$ distinct roots in $F$. [step 1.2, L1]

2.3 The updated claim is $s(r_t)$ and the true value of the updated stage is $q^*(r_t)$, because $G_{t-1}$ agrees with $q^*$ in the active variable and $\sigma_{t-1}$ differs from $\sigma_t$ only there. So the updated claim equals the true value exactly when $r_t$ is a root of $s-q^*$. [A1, step 1.1, algebra]

3.1 The challenge $r_t$ is drawn after the message is fixed and puts probability at most $2/p$ on each residue by [A3], so the probability that it lies in the root set of $s-q^*$, a set of at most $D$ residues, is at most $2D/p$. Averaging over any randomization of the prover's message preserves the bound, since the verifier's fresh bits are independent of the message; when $2D/p\ge1$ the bound is trivially true. [step 2.2, step 2.3, A3, algebra] ∎
