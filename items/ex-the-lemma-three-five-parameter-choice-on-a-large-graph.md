---
id: ex-the-lemma-three-five-parameter-choice-on-a-large-graph
kind: example
title: "The Lemma 3.5 parameter choice at the next power of two above the source threshold"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 3.5"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Consider the special case in which the constant supplied by the source lemma
happens to be $c_1=1$. Then $q=42$ and the threshold is $m=2^{42}$.
Let $|G|:=2^{43}$, and define
$$
x:=|G|^{-1/3}=2^{-43/3},\qquad \epsilon:=x^{1/7}=2^{-43/21}.
$$
Then the size thresholds in the source Erdős-Hajnal reduction are
$$
|F|_{\min}:=\epsilon^2|G|,\qquad |S|_{\min}:=\epsilon^3|G|.
$$

## Facts & Assumptions

**Given:** The numerical choices displayed in the Example.

[A1] Conditionally on the displayed value $c_1=1$, one has
$|G|=2^{43}>2^{42}=m$, and $2^{43}$ is the first power of two strictly above
the corresponding source threshold. The example does not assert that the
existential constant $c_1$ can be freely chosen.

## Verification

**Proof technique:** direct arithmetic.


1.1 Since $x=2^{-43/3}$, one has $$ \epsilon=x^{1/7}=2^{-43/21}>2^{-43/3}=x. $$ Also $$ \epsilon=2^{-43/21}<2^{-2}=\tfrac14, $$ because $43/21>2$. Thus $x<\epsilon\le \tfrac14$. [A1, algebra]


2.1 The first threshold is $$ |F|_{\min}=\epsilon^2|G|=2^{-86/21}\cdot 2^{43}=2^{817/21}, $$ while $$ \epsilon^{-1}=2^{43/21}. $$ Since $817/21>43/21$, one gets $|F|_{\min}>\epsilon^{-1}$. [step 1.1, algebra]


2.2 The second threshold is $$ |S|_{\min}=\epsilon^3|G|=2^{-129/21}\cdot 2^{43}=2^{774/21}. $$ Again $774/21>43/21$, so $|S|_{\min}>\epsilon^{-1}$. [step 1.1, algebra]


3.1 Therefore, in the special case $c_1=1$, this concrete instance satisfies all of the numerical inequalities used in the source Erdős-Hajnal reduction at the next power-of-two graph order above the threshold. [step 2.1, step 2.2] ∎
