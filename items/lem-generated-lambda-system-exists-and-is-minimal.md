---
id: lem-generated-lambda-system-exists-and-is-minimal
kind: lemma
title: "The generated lambda-system exists and is minimal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-generated-lambda-system]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, proof of Theorem 1.1.38"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

For every set $X$ and every $\mathcal E\subseteq\mathcal P(X)$, the family
$\lambda_X(\mathcal E)$ is a lambda-system on $X$, contains $\mathcal E$, and is
contained in every lambda-system on $X$ that contains $\mathcal E$.

## Facts & Assumptions

**Given:** A set $X$, a family $\mathcal E\subseteq\mathcal P(X)$, and the intersection definition of $\lambda_X(\mathcal E)$ in [[def-generated-lambda-system]].

## Proof

**Proof technique:** direct.

1.1 A nonempty intersection of lambda-systems on $X$ contains $X$. If $A\subseteq B$ lie in every member, then $B\setminus A$ lies in every member; and if $(A_n)$ is increasing and lies in every member, then $\bigcup_nA_n$ lies in every member. Thus the intersection is a lambda-system. [given]

1.2 The power set $\mathcal P(X)$ is a lambda-system containing $\mathcal E$, so the family intersected in the definition of $\lambda_X(\mathcal E)$ is nonempty. [given, construct]

2.1 Steps 1.1 and 1.2 make $\lambda_X(\mathcal E)$ a lambda-system. Every generator lies in every lambda-system being intersected, while an intersection is contained in each of its factors, so $\mathcal E\subseteq\lambda_X(\mathcal E)$ and $\lambda_X(\mathcal E)$ is minimal. [step 1.1, step 1.2] ∎
