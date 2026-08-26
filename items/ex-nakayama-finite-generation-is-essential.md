---
id: ex-nakayama-finite-generation-is-essential
kind: example
title: "The p-primary quotient Q/Z_(p) over Z_(p) shows finite generation is essential in Nakayama"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-localisation-at-a-prime-ideal, thm-localisation-at-a-prime-is-local, cor-residue-field-of-a-localisation-at-a-prime, thm-field-of-fractions-is-a-field-and-the-domain-embeds]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 3.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.19: Nakayama's Lemma"
      url: "https://stacks.math.columbia.edu/tag/0AMD"
pipeline_run: null
---

## Example

Fix a prime number $p$ and let $R=\mathbb Z_{(p)}$. The $R$-module
$$
M=\mathbb Q/\mathbb Z_{(p)}
$$
satisfies $pM=M$ but $M\neq0$, so Nakayama's lemma fails without finite generation.

## Facts & Assumptions

**Given:** A prime number $p$, the local ring $R=\mathbb Z_{(p)}$, and the $R$-module $M=\mathbb Q/\mathbb Z_{(p)}$.

[L1] The localisation $\mathbb Z_{(p)}$ is a local ring at the prime $(p)$, and $\mathbb Q$ is the field of fractions of $\mathbb Z$ into which $\mathbb Z_{(p)}$ embeds ([[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]], [[cor-residue-field-of-a-localisation-at-a-prime]], [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Verification

**Proof technique:** direct.

1.1 The class of $1/p$ is nonzero in $\mathbb Q/\mathbb Z_{(p)}$, because $1/p \notin \mathbb Z_{(p)}$. Hence $M\neq0$. [L1]

1.2 Every element of $M$ has the form $q+\mathbb Z_{(p)}$ with $q \in \mathbb Q$. Then $p(q/p+\mathbb Z_{(p)})=q+\mathbb Z_{(p)}$, so multiplication by $p$ is surjective and therefore $pM=M$. [L1, algebra]

1.3 The module $M$ is not finitely generated. If classes $q_1+\mathbb Z_{(p)},\dots,q_r+\mathbb Z_{(p)}$ generated $M$, choose $N$ so that every $q_i$ has denominator dividing $p^N$ modulo $\mathbb Z_{(p)}$. Then every generated class would also have denominator dividing $p^N$, but $1/p^{N+1}+\mathbb Z_{(p)}$ would not lie in that span. [L1, algebra]

2.1 So $pM=M$ and $M\neq0$ hold for a module that is not finitely generated, exactly showing why the finite-generation hypothesis is essential. [step 1.1, step 1.2, step 1.3] ∎
