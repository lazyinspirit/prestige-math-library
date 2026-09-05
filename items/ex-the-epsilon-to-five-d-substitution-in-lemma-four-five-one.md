---
id: ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one
kind: example
title: "The epsilon^(5d) substitution in Claim 4.5.1 and Lemma 4.5"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade, thm-property-star-and-leaf-reducibility-imply-generalized-niceness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 4.5.1 and Lemma 4.5"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Take
$$
\epsilon:=\tfrac14,\qquad c_4':=4,\qquad d:=232=58c_4',\qquad x:=\epsilon^{5d}.
$$
Then the four exponent comparisons in the final property-(*) reduction become
explicit.

## Facts & Assumptions

**Given:** The displayed values of $\epsilon$, $d$, $c_4'$, and $x$.

[A1] Since $\epsilon=\tfrac14<\tfrac12$, the powers of $\epsilon$ decrease as
their exponents increase.

## Verification

**Proof technique:** direct arithmetic.


1.1 The defining substitution gives $$ x=\epsilon^{5d}=2^{-10d}<2^{-d}. $$ Together with $d=58c_4'$, this verifies the two parameter inequalities required before applying the Rödl-initialized theorem; its separate graph-order hypothesis must also be checked in any application. [A1, algebra]


1.2 For the restricted-set branch, $$ x^{23c_4'}\epsilon^d = \epsilon^{115c_4'd+d} \ge \epsilon^{116c_4'd}, $$ because $115c_4'+1\le 116c_4'$ when $c_4'=4$. [A1, algebra]


1.3 For the clique-or-stable-set branch, $$ x^{31c_4'}\epsilon^d = \epsilon^{155c_4'd+d} \ge \epsilon^{156c_4'd}, $$ because $155c_4'+1\le 156c_4'$. [A1, algebra]


2.1 If $k\ge x^{-1}$, then $$ \epsilon^d=x^{1/5}\ge k^{-1/5}, $$ so $$ \frac{\epsilon^d}{k^d}\ge \frac{1}{k^{2d}}. $$ This is exactly the comparison used to turn the complete-or-anticomplete blockade branch into the generalized-nice blockade outcome. [step 1.1, A1, algebra]


3.1 These computations are the concrete numerical version of the four exponent transfers behind the local blockade claim and the final proof of generalized niceness. [step 1.2, step 1.3, step 2.1] ∎
