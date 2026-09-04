---
id: ex-a-numeric-run-of-the-lemma-three-three-exponent-choice
kind: example
title: "A numeric run of the Lemma 3.3 exponent choice"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph, lem-iterated-restricted-sparsification-reaches-the-target-scale, lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Claim 3.3.1 and Lemma 3.3"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Suppose the three-outcome constants for a generalized nice, leaf-reducible,
wonderful family satisfy

$$ c_3=c_4=4,\qquad c=\tfrac14,\qquad x=2^{-10}. $$

Then the exponent choices in the final restricted-sparsification step become

$$ b_1=\frac{c_4}{2}=2,\qquad b_2=\frac{4c_3}{c_4}=4,\qquad b_3=c_3=4, $$

so

$$ b_1b_2=8=b_2+b_3. $$

Let $G$ be a $c^2$-restricted $\overline{\mathcal F}$-free graph satisfying
the two global failure hypotheses of the helper lemma. If $cy\in[x,c^2]$,
then the helper asks for a $cy$-restricted induced subgraph $F$ of size at
least $(cy)^4|G|$ and returns a $(cy)^2$-restricted induced subgraph of size at
least $(cy)^4|F|$. The iterative lemma then yields an $x$-restricted induced
subgraph of size at least $x^8|G|$.

## Facts & Assumptions

**Given:** The numerical choices $c_3=c_4=4$, $c=\tfrac14$, and $x=2^{-10}$,
and a graph $G$ satisfying the conditional hypotheses in the Example.

[L1] The helper claim uses the substitutions
$b_1=c_4/2$, $b_2=4c_3/c_4$, and $b_3=c_3$
([[lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph]]).

[L2] The iterative restricted-sparsification lemma concludes with an
$x$-restricted induced subgraph of size at least $x^{b_1b_2}|G|$
([[lem-iterated-restricted-sparsification-reaches-the-target-scale]]).

[L3] The final generalized-niceness lemma is obtained by exactly this choice of
$b_1,b_2,b_3$
([[lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade]]).

## Verification

**Proof technique:** direct arithmetic.

1.1 Substituting the given values into [L1] gives $b_1=2$, $b_2=4$, and $b_3=4$. Therefore $b_1b_2=8=b_2+b_3$, so the numerical inequality required by the iterative lemma holds exactly. [L1, given, algebra]

2.1 The graph $G$ itself supplies the starting $c^2$-restricted subgraph required by [L2], because $|G|\ge(c^2)^{b_2}|G|$. For every $\lambda\in[x,c^2]$, write $\lambda=cy$. The helper [L1], under the two global failure hypotheses in the Given data, sends each $\lambda$-restricted $F$ with $|F|\ge\lambda^{b_2}|G|=\lambda^4|G|$ to a $\lambda^{b_1}$-restricted subgraph of size at least $\lambda^{b_3}|F|=\lambda^4|F|$. Thus both hypotheses of [L2] hold with starting constant $c^2$, and it gives an $x$-restricted induced subgraph of size at least $x^{b_1b_2}|G|=x^8|G|$. [step 1.1, L1, L2, given, algebra]

3.1 This is exactly the numerical exponent pattern used again in [L3]. [step 2.1, L3] ∎
