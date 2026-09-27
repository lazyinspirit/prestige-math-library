---
id: lem-honest-prover-maintains-the-claim-invariant
kind: lemma
title: "Honest prover maintains the field-value claim"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-shamir-protocol-for-tqbf, lem-multilinearization-preserves-boolean-values, def-multilinearization-operator, def-qbf-arithmetization-operators, lem-ordered-arithmetization-evaluates-to-the-truth-value, lem-quantifier-polynomials-agree-on-booleans]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let $\Phi$ be a true closed prenex quantified Boolean formula on $n$ variables, let $F$, $D$, $T$, the operator list $N_1,\dots,N_T$, the stage polynomials $G_0,\dots,G_T$ and the Shamir protocol with its honest prover $P_h$ be as in [[def-shamir-protocol-for-tqbf]]. Run the protocol on $\Phi$ against $P_h$ with an arbitrary fixed random tape, and for $t=T,T-1,\dots,1$ let $\sigma_t$ be the verifier's point at the start of round $t$, so that $\sigma_T$ is the empty assignment, and let $c_t$ be the claim at the start of round $t$, so that $c_T=1$. Then:

1. In every round the message of $P_h$ is a legal coefficient list, of degree at most $D$.
2. For every $t=T,T-1,\dots,1$, the point $\sigma_t$ assigns a field element to every variable that occurs in $G_t$, and $c_t=G_t(\sigma_t)$.
3. Every verifier test in the run passes and the terminal test accepts.

## Facts & Assumptions

**Given:** A true closed prenex quantified Boolean formula $\Phi$, its Shamir protocol, its honest prover $P_h$, and an arbitrary fixed random tape of that protocol.

[A1] The rounds run for $t=T,T-1,\dots,1$ and process the nodes $N_T,N_{T-1},\dots,N_1$; in the round with node $M=N_t$ and active variable $x_i$ the prover sends a coefficient list of degree at most $D$, the verifier tests $c=s(0)s(1)$ for a universal node, $c=s(0)+s(1)-s(0)s(1)$ for an existential node, and $c=(1-a)s(0)+a\,s(1)$ with $a=\sigma(i)$ for a reduction $R_{X_i}$, then draws its next challenge $r_t$, sets $\sigma(i):=r_t$ and $c:=s(r_t)$, and finally accepts exactly when $c=b(\sigma)$ ([[def-shamir-protocol-for-tqbf]]).

[A2] The honest message of the round with node $M=N_t$ is the coefficient list of $q_t(X):=G_{t-1}$ restricted to the current point in the active variable $X$, and $q_t$ has degree at most $D$ ([[def-shamir-protocol-for-tqbf]], [[lem-multilinearization-preserves-boolean-values]]).

[A3] Every node $N_t$ is either a quantifier node $O_j$ of a block $j$, whose input $G_{t-1}$ is $M_j$, or a reduction $R_{X_i}$ of a block $j$; $M_j$ and every intermediate polynomial in block $j$ involve only $x_1,\dots,x_j$, and the reverse protocol schedule assigns every variable in this set except the active one before the round, then assigns the active variable at the challenge update ([[def-multilinearization-operator]], [[def-shamir-protocol-for-tqbf]]).

[A4] The operators are $A_{X_i}P=(P|_{X_i=0})(P|_{X_i=1})$, $E_{X_i}P=1-(1-P|_{X_i=0})(1-P|_{X_i=1})$ and $R_{X_i}P=(1-X_i)(P|_{X_i=0})+X_i(P|_{X_i=1})$ ([[def-qbf-arithmetization-operators]], [[def-multilinearization-operator]]).

[L1] The constant $G_T=P^{(0)}$ is the truth value of $\Phi$, so $G_T=1$ because $\Phi$ is true, and the values of the stage polynomials at Boolean points follow the quantified semantics ([[lem-ordered-arithmetization-evaluates-to-the-truth-value]], [[lem-quantifier-polynomials-agree-on-booleans]]).

## Proof

**Proof technique:** induction.

1.1 Base case $t=T$: if $n\ge1$ then $N_T=O_1$, so by [A3] the constant $G_T=O_1(G_{T-1})$ has no variables at all and the empty point $\sigma_T$ assigns all of its variables vacuously; by [L1] and the hypothesis that $\Phi$ is true, $c_T=1=G_T(\sigma_T)$. If $n=0$ there are no rounds, $T=0$, $\sigma$ is empty and the terminal test reads $1=b$, which holds by [L1] because $b=G_0=G_T=1$. [A1, A3, L1, given, base]

1.2 Induction hypothesis: for some $t$ with $1\le t\le T$, the point $\sigma_t$ assigns a value to every variable occurring in $G_t$ and $c_t=G_t(\sigma_t)$; let $M=N_t$ be the round-$t$ node with active variable $x_i$. [ih]

1.3 Write $q(X)$ for the restriction of $G_{t-1}$ to the current point in the active variable $X$, so that $q$ is the honest message of round $t$ by [A2]. By [A3], $G_{t-1}$ involves only the variables in its block prefix, and the reverse protocol schedule has assigned every one except the active variable, whether or not some of them disappeared from $G_t$ through polynomial cancellation. Thus the restriction is a well-defined univariate polynomial with field values at $0,1$. By [A2] its degree is at most $D$, so the message is legal. [A2, A3, given]

2.1 If $M=O_j$, then $G_{t-1}=M_j$, and [A4] gives $G_t(\sigma_t)=(G_{t-1}|_{x_j=0})(\sigma_t)\cdot(G_{t-1}|_{x_j=1})(\sigma_t)$ when $Q_j=\forall$ and $G_t(\sigma_t)=1-(1-(G_{t-1}|_{x_j=0})(\sigma_t))(1-(G_{t-1}|_{x_j=1})(\sigma_t))$ when $Q_j=\exists$, which are exactly $q(0)q(1)$ and $q(0)+q(1)-q(0)q(1)$. If $M=R_{X_i}$, then [A4] gives $G_t(\sigma_t)=(1-a)(G_{t-1}|_{x_i=0})(\sigma_t)+a\,(G_{t-1}|_{x_i=1})(\sigma_t)$ with $a=\sigma_t(i)$, that is $G_t(\sigma_t)=(1-a)q(0)+a\,q(1)$. In both cases the value the verifier computes from the message equals $G_t(\sigma_t)=c_t$ by step 1.2, so the round-$t$ test passes. [step 1.2, A1, A4, algebra]

3.1 Let $r=r_t$ be the challenge of round $t$ and let $\sigma_{t-1}$ and $c_{t-1}$ be the point and claim after the round. By [A1] the verifier sets the active variable to $r$, leaving every other value of $\sigma_t$ unchanged, and $c_{t-1}=q(r)$; by the definition of $q$, this is $G_{t-1}$ evaluated at $\sigma_{t-1}$. The schedule in [A3] ensures that after this update every variable of $G_{t-1}$ is assigned, including when variables were absent from $G_t$ because they cancelled in a preceding operator. Therefore the induction hypothesis holds at $t-1$, which completes the induction step and ensures the next honest message is legal by step 1.3. [step 1.3, step 2.1, A1, A3, ih]

4.1 Descending induction from the base case of step 1.1 gives $c_t=G_t(\sigma_t)$ for every $t=T,\dots,1$. At the end of round $1$ the point $\sigma_0$ assigns every variable occurring in $G_0=b$ by the statement of claim 2, so the terminal comparison is $c_0=b(\sigma_0)$ and it passes; all earlier tests passed by step 2.1. This proves claims 1, 2 and 3, including the case $n=0$ handled in step 1.1. [step 1.1, step 2.1, step 3.1, A1, discharge-induction] ∎
