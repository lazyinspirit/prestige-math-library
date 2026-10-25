---
id: thm-depth-zero-associated-prime-criterion
title: The local depth-zero associated-prime criterion
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-nakayama-lemma, cor-depth-zero-iff-ideal-contained-in-an-associated-prime]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-26
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
---
## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite
$R$-module. Then
$$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring and a nonzero finite module.

[F1] [[thm-nakayama-lemma]]: Under the assumed Choice, if $I$ lies in the Jacobson radical and $M$ is finitely generated, then $IM=M$ implies $M=0$.

[F2] [[cor-depth-zero-iff-ideal-contained-in-an-associated-prime]]: Under the assumed Choice, if $IM\ne M$ for a nonzero finite module over a Noetherian ring, then its depth with respect to $I$ is zero exactly when $I$ is contained in an associated prime.

## Proof

**Proof technique:** direct.

1.1 Since $M\ne0$, [F1] gives $\mathfrak mM\ne M$, so [F2] applies with $I=\mathfrak m$. Its published proof uses finiteness of associated primes through an AC-qualified prime filtration; the assumed Choice supplies that premise. It says depth is zero exactly when $\mathfrak m\subseteq\mathfrak p$ for some associated prime $\mathfrak p$. [given, F1, F2]

2.1 Every associated prime is proper and every proper ideal of a local ring is contained in $\mathfrak m$. Hence $\mathfrak m\subseteq\mathfrak p$ forces $\mathfrak p=\mathfrak m$, proving both directions. [step 1.1, algebra] ∎
