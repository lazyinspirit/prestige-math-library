---
id: lem-douglas-rachford-map-is-firmly-nonexpansive
kind: lemma
title: "The Douglas–Rachford fixed-point map is firmly nonexpansive"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - alg-douglas-rachford-splitting
  - thm-maximal-monotone-resolvent-is-firmly-nonexpansive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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

For maximal-monotone $A,B$ and $\rho>0$, let
$$T=I-J_{\rho B}+J_{\rho A}(2J_{\rho B}-I).$$
Then $T:E\to E$ is firmly nonexpansive:
$$\|T(w)-T(w')\|_2^2\le\langle T(w)-T(w'),w-w'\rangle.$$

## Facts & Assumptions

**Given:** Maximal-monotone $A,B$, $\rho>0$, and $w,w'\in E$.

[A1] Both relations are maximal monotone, $\rho>0$, and the inputs lie in $E$.


[F1] [[alg-douglas-rachford-splitting]]: the update map is $T(w)=w+J_{\rho A}(2J_{\rho B}w-w)-J_{\rho B}w$.

[F2] [[thm-maximal-monotone-resolvent-is-firmly-nonexpansive]]: each resolvent $J$ obeys $\|Jv-Jv'\|^2\le\langle Jv-Jv',v-v'\rangle$.

## Proof


1.1 For any firmly nonexpansive $J$, its reflector $R=2J-I$ is nonexpansive: with $d=v-v'$ and $e=Jv-Jv'$, [F2] gives $$\|2e-d\|_2^2=\|d\|_2^2+4\|e\|_2^2-4\langle e,d\rangle\le\|d\|_2^2.$$ Thus $R_A R_B$ is nonexpansive because it is a composition of two nonexpansive maps. [A1, F2, algebra]

2.1 Expanding the reflectors gives $T=(I+R_A R_B)/2$. For $d=w-w'$ and $s=R_AR_Bw-R_AR_Bw'$, nonexpansiveness gives $\|s\|_2\le\|d\|_2$, and $$\left\|\frac{d+s}{2}\right\|_2^2\le\left\langle\frac{d+s}{2},d\right\rangle$$ is equivalent after multiplying by $4$ and cancelling common terms to $\|s\|_2^2\le\|d\|_2^2$. This is the firm inequality for $T$. [A1, F1, step 1.1, algebra] ∎
