---
id: thm-generated-trace-commutes
kind: theorem
title: "Generating a sigma-algebra commutes with taking traces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-generated-sigma-algebra-exists-and-is-minimal, def-trace-sigma-algebra, thm-trace-is-a-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal E\subseteq\mathcal P(X)$ and $Y\subseteq X$, and put
$\mathcal E|_Y:=\{E\cap Y:E\in\mathcal E\}$. Then

$$\sigma_X(\mathcal E)|_Y=\sigma_Y(\mathcal E|_Y).$$

## Facts & Assumptions

**Given:** A family $\mathcal E\subseteq\mathcal P(X)$ and a subset $Y\subseteq X$.

[L1] A trace of a sigma-algebra is a sigma-algebra on the traced subset ([[thm-trace-is-a-sigma-algebra]]).

[L2] A generated sigma-algebra is the smallest sigma-algebra containing its generators ([[thm-generated-sigma-algebra-exists-and-is-minimal]]).

[L3] The trace is $\mathcal A|_Y=\{A\cap Y:A\in\mathcal A\}$ ([[def-trace-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\sigma_X(\mathcal E)|_Y$ is a sigma-algebra on $Y$, and it contains $\mathcal E|_Y$. Hence [L2] gives $\sigma_Y(\mathcal E|_Y)\subseteq\sigma_X(\mathcal E)|_Y$. [L1, L2, L3]

1.2 Let $\mathcal G:=\{A\subseteq X:A\cap Y\in\sigma_Y(\mathcal E|_Y)\}$. The identities $(X\setminus A)\cap Y=Y\setminus(A\cap Y)$ and $(\bigcup_nA_n)\cap Y=\bigcup_n(A_n\cap Y)$ show that $\mathcal G$ is a sigma-algebra on $X$; it contains $\mathcal E$. [L3, algebra]

2.1 By [L2], $\sigma_X(\mathcal E)\subseteq\mathcal G$, so tracing gives $\sigma_X(\mathcal E)|_Y\subseteq\sigma_Y(\mathcal E|_Y)$. Together with step 1.1 this proves equality. [step 1.1, step 1.2, L2, L3] ∎
