---
id: ex-rbm-visible-units-conditionally-independent-given-hidden
kind: example
title: "Visible RBM units are conditionally independent but dependent marginally"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-restricted-boltzmann-machine
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.4.4, printed pp. 643–644"
    - title: "Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines"
      url: "https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf"
      locator: "§2, printed pp. 3–4"
---

## Example

Assume AC. In a binary restricted Boltzmann machine with two visible units, one hidden unit, $a=(0,0)$, $b=0$ and $W_{11}=W_{21}=\log3$, the visible units are independent conditional on the hidden unit. Each conditional success probability is $1/2$ when $H=0$ and $3/4$ when $H=1$. Marginally, $P(V_1=1)=P(V_2=1)=7/10$ and $P(V_1=1,V_2=1)=1/2\ne49/100$, so $V_1$ and $V_2$ are dependent.

## Example references

[The Elements of Statistical Learning, §17.4.4](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Hinton, A Practical Guide to Training Restricted Boltzmann Machines, §2](https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf)

## Facts & Assumptions

**Given:** The RBM parameters and binary state spaces in the Example.

[F1] The binary RBM conditionals are products of Bernoulli laws with success probabilities $\sigma(b_j+(W^Tv)_j)$ and $\sigma(a_i+(Wh)_i)$. [[def-restricted-boltzmann-machine]].

[F2] Conditional independence given a sigma-algebra is the bounded-function conditional-expectation factorization. [[def-conditional-independence-given-a-sigma-algebra]].

[A1] AC is the explicit hypothesis of the conditional-independence convention, and here means every family of nonempty sets has a choice function. [[def-conditional-independence-given-a-sigma-algebra]] [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 With $a_i=0$, $b=0$ and $W_{i1}=\log3$, [F1] gives $P(V_i=1\mid H=h)=\sigma(h\log3)$, which is $1/2$ at $h=0$ and $3/4$ at $h=1$. The conditional visible mass factors as the product of these two Bernoulli masses, so [A1] and [F2] give conditional independence. [A1, F1, F2, algebra]

2.1 Summing the unnormalized joint mass over the two visible bits gives weight $(1+1)^2=4$ to $h=0$ and $(1+3)^2=16$ to $h=1$. Thus $Z=20$ and $P(H=0)=1/5$, $P(H=1)=4/5$. [given, step 1.1, algebra]

3.1 Averaging the conditional success probabilities from step 1.1 yields $P(V_i=1)=\tfrac15\cdot\tfrac12+\tfrac45\cdot\tfrac34=\tfrac7{10}$ for each i. Likewise, conditional independence gives $P(V_1=1,V_2=1)=\tfrac15\cdot\tfrac14+\tfrac45\cdot\tfrac9{16}=\tfrac12$, whereas the product of the marginals is $\tfrac{49}{100}$. Since these differ, the visible variables are marginally dependent. [step 1.1, step 2.1, algebra] ∎
