---
id: thm-douglas-rachford-shadow-converges-to-zero-of-sum
kind: theorem
title: "Douglas–Rachford shadows converge to a zero of the operator sum"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
axiom_base: "No additional axiom; one stated zero witness, finite-dimensional Picard convergence, and exact resolvent algebra."
deps:
  - alg-douglas-rachford-splitting
  - lem-douglas-rachford-map-is-firmly-nonexpansive
  - lem-firmly-nonexpansive-picard-iteration-converges
  - thm-maximal-monotone-resolvent-is-firmly-nonexpansive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.4"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $A,B$ be maximal monotone on $E=\mathbb R^n$, let $\rho>0$, and assume
there is $p\in E$ with $0\in(A+B)(p)$, meaning that $a\in A(p)$ and
$b\in B(p)$ can be chosen with $a+b=0$. The Douglas–Rachford recurrence of
[[alg-douglas-rachford-splitting]] has a state sequence converging to a fixed
point of its map $T$, and its shadow $J_{\rho B}(w_k)$ converges to a zero of
$A+B$.

## Facts & Assumptions

**Given:** $A,B,\rho,p$ as in the Statement.

[A1] Both relations are maximal monotone, $\rho>0$, and $0\in(A+B)(p)$ for some $p$.


[F1] [[alg-douglas-rachford-splitting]]: $T(w)=w+q-p_B$, where $p_B=J_{\rho B}w$ and $q=J_{\rho A}(2p_B-w)$.

[F2] [[lem-douglas-rachford-map-is-firmly-nonexpansive]]: $T$ is firmly nonexpansive.

[F3] [[lem-firmly-nonexpansive-picard-iteration-converges]]: if $T$ is firmly nonexpansive and has a fixed point, its Picard iterates converge to a fixed point.

[F4] [[thm-maximal-monotone-resolvent-is-firmly-nonexpansive]]: each resolvent is everywhere-defined and 1-Lipschitz.

## Proof


1.1 Choose $b\in B(p)$ and $a\in A(p)$ with $a+b=0$. The resolvent identities give $J_{\rho B}(p+\rho b)=p$ and $J_{\rho A}(p-\rho b)=p$. At $w_*=p+\rho b$, the second input is $2p-w_*=p-\rho b$, so the update has $p_B=q=p$ and $T(w_*)=w_*$. Thus $T$ has a fixed point. [A1, given, F1, F4, choose]

2.1 Apply [F3] using firm nonexpansiveness [F2]. It follows that the states $w_k=T^k(w_0)$ converge to some $w_*'$ with $T(w_*')=w_*'$. [A1, F2, F3, step 1.1]

3.1 Put $p'=J_{\rho B}(w_*')$ and $q'=J_{\rho A}(2p'-w_*')$. Fixedness says $q'=p'$. The resolvent inclusions yield $w_*'-p'\in\rho B(p')$ and $p'-w_*'\in\rho A(p')$; adding them gives $0\in(A+B)(p')$. [A1, F1, F4, step 2.1, algebra]

4.1 The shadow $p_k=J_{\rho B}(w_k)$ converges to $p'$ because the resolvent is 1-Lipschitz by [F4] and $w_k\to w_*'$. Thus the shadow converges to a zero of the sum. [A1, F1, F4, step 2.1, algebra] ∎
