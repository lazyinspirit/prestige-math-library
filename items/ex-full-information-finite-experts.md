---
id: ex-full-information-finite-experts
kind: example
title: "Full-information finite experts"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-online-decision-protocol, def-adversary-and-feedback-model, def-static-dynamic-and-strongly-adaptive-regret]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.2.1, PDF pp. 24–25: finite experts represented by the simplex and full loss vector."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.2 Algorithm 2, PDF p. 149: full-information feedback observes the whole round loss function."
verification:
  precheck: pass
---

## Example

For $T=2$ rounds and three experts, let the learner's decisions be probability vectors in $\Delta_3:=\{x\in[0,1]^3:x_1+x_2+x_3=1\}$, with $x_1=(1/2,1/3,1/6)$ and $x_2=(1/6,1/3,1/2)$. Let the expert-loss vectors be $\ell_1=(0,1,1)$ and $\ell_2=(1,0,1)$, let $f_t(x)=\ell_t\cdot x$, and reveal the entire vector $\ell_t$ after each round. The learner's total loss is $7/6$, the minimum total loss of one fixed vector in $\Delta_3$ is $1$, and the resulting static regret is $1/6$.

## Example references

[[def-online-decision-protocol]]: choices are made from the past before the current round loss is observed.

[[def-adversary-and-feedback-model]]: full-information feedback reveals the entire round loss function or expert-loss vector.

[[def-static-dynamic-and-strongly-adaptive-regret]]: static regret subtracts the minimum cumulative loss of one fixed comparator.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §1.2.1, PDF pp. 24–25.

[Tengyu Ma, *Lecture Notes for Machine Learning Theory*](https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf): §11.2, PDF p. 149.

## Facts & Assumptions

**Given:** The simplex $\Delta_3$, decisions $x_1=(1/2,1/3,1/6)$ and $x_2=(1/6,1/3,1/2)$, losses $f_1(x)=x_2+x_3$ and $f_2(x)=x_1+x_3$, and full-information feedback revealing each entire loss vector.

[F1] In an online protocol, the learner chooses from the past before incurring and receiving feedback about the current round loss ([[def-online-decision-protocol]]).

[F2] Full-information feedback reveals the entire function $f_t$ or, for $N$ experts, the full vector of their $N$ losses ([[def-adversary-and-feedback-model]]).

[F3] Static regret is learner cumulative loss minus the attained minimum cumulative loss over one fixed $u\in K$ ([[def-static-dynamic-and-strongly-adaptive-regret]]).

## Verification

1.1 The loss vectors are $\ell_1=(0,1,1)$ and $\ell_2=(1,0,1)$, and the full-information rule reveals both vectors after their respective choices, as required by the online timing and feedback model. [given, F1, F2]

1.2 For any $u\in\Delta_3$, $f_1(u)+f_2(u)=u_1+u_2+2u_3=1+u_3\ge1$, with equality whenever $u_3=0$; hence the attained minimum is $1$. [given, F3, algebra]

2.1 Direct evaluation gives $f_1(x_1)=1/3+1/6=1/2$ and $f_2(x_2)=1/6+1/2=2/3$, so the learner's cumulative loss is $1/2+2/3=7/6$. [given, step 1.1, algebra]

3.1 Subtracting this minimum from the learner's cumulative loss in step 2.1 gives $7/6-1=1/6$ by the static-regret definition. [given, F3, step 2.1, step 1.2, algebra] ∎
