---
id: ex-adaboost-two-rounds-and-margin-bound
kind: example
title: "Two AdaBoost rounds with normalized weights"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
deps:
  - alg-adaboost-m1
  - thm-adaboost-exponential-training-error-bound
aliases: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references: []
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Take four observations with labels $(+1,+1,-1,-1)$, first classifier predictions $(+1,+1,+1,-1)$, and second classifier predictions $(-1,+1,-1,-1)$. The two weighted errors are $1/4$ and $1/6$; the normalized weights after the first and second rounds are $(1/6,1/6,1/2,1/6)$ and $(1/2,1/10,3/10,1/10)$. The final margins are $(\frac12\log(3/5),\frac12\log(15),\frac12\log(5/3),\frac12\log(15))$, so one of four examples has nonpositive margin. The normalizer product is $\sqrt{15}/6$, which bounds the empirical nonpositive-margin fraction.

## Facts & Assumptions

**Given:** The four labels and two classifier prediction vectors stated in the Example.

[F1] [[alg-adaboost-m1]]: For $0<e_m<1/2$, the algorithm uses $a_m=\frac12\log((1-e_m)/e_m)$, $Z_m=2\sqrt{e_m(1-e_m)}$, the normalized update $w_i^{(m+1)}=w_i^{(m)}e^{-a_my_ih_m(x_i)}/Z_m$, and $F_m=F_{m-1}+a_mh_m$.

[F2] [[thm-adaboost-exponential-training-error-bound]]: For completed weak rounds, the fraction with nonpositive margin is at most $\prod_m Z_m$.

## Verification

1.1 Initially each weight is $1/4$. The first classifier misclassifies only observation $3$, so $e_1=1/4$, $a_1=\frac12\log 3$, and $Z_1=\sqrt3/2$. [given, F1, algebra]

2.1 The first update gives weight $(1/4)e^{a_1}/Z_1=1/2$ to observation $3$ and weight $(1/4)e^{-a_1}/Z_1=1/6$ to each other observation, hence $w^{(2)}=(1/6,1/6,1/2,1/6)$. [F1, step 1.1, algebra]

3.1 Under $w^{(2)}$, the second classifier misclassifies only observation $1$, so $e_2=1/6$, $a_2=\frac12\log 5$, and $Z_2=\sqrt5/3$. [given, F1, step 2.1, algebra]

4.1 The second update gives weight $1/2$ to observation $1$, $1/10$ to observations $2$ and $4$, and $3/10$ to observation $3$, so $w^{(3)}=(1/2,1/10,3/10,1/10)$. [F1, step 3.1, algebra]

5.1 The margins $y_iF_2(x_i)$ are respectively $a_1-a_2=\frac12\log(3/5)<0$, $a_1+a_2=\frac12\log15>0$, $a_2-a_1=\frac12\log(5/3)>0$, and $a_1+a_2>0$. Thus the nonpositive-margin fraction is $1/4$, while $Z_1Z_2=\sqrt{15}/6$ and $1/4\le\sqrt{15}/6$. By [F2] this is within the theorem's empirical bound. [F1, F2, step 1.1, step 3.1, algebra] ∎
