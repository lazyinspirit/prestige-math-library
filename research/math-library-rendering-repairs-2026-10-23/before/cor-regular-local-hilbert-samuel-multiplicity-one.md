---
id: "cor-regular-local-hilbert-samuel-multiplicity-one"
kind: "corollary"
title: "regular local hilbert samuel multiplicity one"
deps: ["thm-associated-graded-ring-of-a-regular-local-ring", "def-hilbert-samuel-multiplicity", "def-axiom-of-choice"]
sources:
  references:
    - title: "10.106.1, monomial-count consequence"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ and every integer $n\ge0$, $\ell_R(R/\mathfrak m^{n+1})=\binom{n+d}{d}$. Consequently $e_{\mathfrak m}(R)=1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-associated-graded-ring-of-a-regular-local-ring]]: Assume the Axiom of Choice. If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

[F2] [[def-hilbert-samuel-multiplicity]]: Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be finite, and let $I\subseteq\mathfrak m$ be an ideal of definition for $M$. Define $e_I(0)=0$. For $M\neq0$, when the Hilbert-Samuel function agrees eventually with a polynomial $P_{I,M}$, this polynomial is unique and nonzero; with $d=\deg P_{I,M}$, multiplicity is $e_I(M)=d!\cdot(\text{leading coefficient of }P_{I,M})$.

## Proof

1.1 The filtration of $R/\mathfrak m^{n+1}$ has factors $\mathfrak m^j/\mathfrak m^{j+1}$ for $0\le j\le n$. The graded polynomial description identifies their total dimension with the number of monomials in $d$ variables of degree at most $n$. Introducing a slack exponent identifies these with $(d+1)$-tuples of nonnegative integers summing to $n$, counted by $\binom{n+d}{d}$. [F1, algebra]

2.1 The leading coefficient is $1/d!$, so multiplying it by $d!$ gives multiplicity one. If $d=0$, the only monomial is $1$, and the constant polynomial has leading coefficient one and $0!=1$. The formula also gives length one at $n=0$. [F2, step 1.1, algebra] ∎
