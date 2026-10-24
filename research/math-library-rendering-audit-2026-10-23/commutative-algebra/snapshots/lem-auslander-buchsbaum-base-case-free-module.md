---
id: "lem-auslander-buchsbaum-base-case-free-module"
kind: "lemma"
title: "auslander buchsbaum base case free module"
deps: ["def-axiom-of-choice", "def-projective-dimension-of-an-object", "def-depth-with-respect-to-an-ideal", "def-regular-sequence-on-a-module", "thm-local-ring-unit-characterisations"]
sources:
  references:
    - title: "Theorem 1.53, pd=0 case, p.24"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If a nonzero finite module $M$ over a nonzero Noetherian local ring $R$ has projective dimension zero, then it is finite free of positive rank and $\operatorname{depth}_RM=\operatorname{depth}R$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the objects and hypotheses in the statement.

[F1] [[def-projective-dimension-of-an-object]]: Assume projective resolutions are supplied or exist in the relevant class. The **projective dimension** of $M$ is $$\operatorname{pd}(M)=\inf\{d\geq0:M\text{ has a projective resolution of length }d\},$$ with value $\infty$ if this set is empty. A length-zero projective resolution exists exactly when $M$ is projective.

[F2] [[def-depth-with-respect-to-an-ideal]], [[def-regular-sequence-on-a-module]]: Depth is the supremum of lengths of regular sequences in the maximal ideal. A sequence is regular when each multiplication map on its successive nonzero quotient is injective and the final quotient is nonzero.

[F3] [[thm-local-ring-unit-characterisations]]: Under the assumed Axiom of Choice, every element outside the unique maximal ideal of a local ring is a unit; in particular every element of $1+\mathfrak m$ is a unit.

## Proof

1.1 Projective dimension zero means that $M$ is projective. The finite-dimensional residue space $M/\mathfrak mM$ has a basis of, say, $r$ elements; lift them to $x_1,\ldots,x_r\in M$. Their span $N$ equals $M$: the finite module $Q=M/N$ satisfies $Q=\mathfrak mQ$, and if $q_1,\ldots,q_s$ generate $Q$, write $q_i=\sum_j a_{ij}q_j$ with $a_{ij}\in\mathfrak m$. The adjugate identity gives $\det(I-A)q_i=0$ for all $i$, while $\det(I-A)\in1+\mathfrak m$ is a unit by [F3]. Hence $Q=0$. [F1, F3, given, algebra]

2.1 The resulting surjection $R^r\twoheadrightarrow M$ splits because $M$ is projective. Its kernel $K$ is finite, being the image of the complementary idempotent on $R^r$. Reducing the split sum $R^r\cong M\oplus K$ modulo $\mathfrak m$, the chosen residue basis makes $k^r\to M/\mathfrak mM$ an isomorphism, so $K/\mathfrak mK=0$. Applying the finite determinant argument of step 1.1 to $K$ gives $K=0$. Thus $M\cong R^r$, and $M\ne0$ forces $r\ge1$. [step 1.1, algebra]

3.1 For any finite sequence $\mathbf x$ in $\mathfrak m$ and each prefix $\mathbf x_{<i}$, the quotient $R^r/(\mathbf x_{<i})R^r$ is $(R/(\mathbf x_{<i}))^r$. Since $r\ge1$, this quotient is nonzero exactly when $R/(\mathbf x_{<i})$ is nonzero, and multiplication by $x_i$ on it is injective exactly when multiplication by $x_i$ on the ring quotient is injective. The final quotients are likewise nonzero together. Thus precisely the same finite sequences in $\mathfrak m$ are regular on $M\cong R^r$ and on $R$. Their possible lengths, hence their depths, are equal, including depth zero. [F2, step 2.1, algebra] ∎
