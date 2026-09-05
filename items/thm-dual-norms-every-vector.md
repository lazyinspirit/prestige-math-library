---
id: thm-dual-norms-every-vector
kind: theorem
title: "Every nonzero vector has a norming functional"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dual-space-of-a-normed-space,
       thm-hahn-banach-norm-preserving-extension,
       thm-complex-hahn-banach-norm-preserving-extension]
justified_by: []
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
    - title: "Daniel Daners, Introduction to Functional Analysis, Corollary 26.5"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Section 4.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, and let
$x \in X$ be nonzero. Then there exists $f \in X^*$ such that

$$\|f\|=1 \qquad \text{and} \qquad f(x)=\|x\|.$$

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb{R}$ or $\mathbb{C}$ and a vector
$x \in X$ with $x \ne 0$.

[L1] The dual space $X^*$ is the space of bounded linear functionals on $X$
([[def-dual-space-of-a-normed-space]]).

[L2] In the real case, a bounded linear functional extends with the same norm
([[thm-hahn-banach-norm-preserving-extension]]).

[L3] In the complex case, a bounded linear functional extends with the same norm
([[thm-complex-hahn-banach-norm-preserving-extension]]).

## Proof

**Proof technique:** direct.

1.1 Let $M:=\operatorname{span}\{x\}$. Define $f_0:M \to \mathbb{R}$ or $f_0:M \to \mathbb{C}$ by $$f_0(\lambda x):=\lambda \|x\|.$$ Because $x \ne 0$, each vector of $M$ has a unique representation $\lambda x$. Moreover, $$|f_0(\lambda x)|=|\lambda|\,\|x\|=\|\lambda x\|,$$ so $f_0$ is bounded and $\|f_0\|=1$. [given, construct, algebra]

2.1 If the scalar field is $\mathbb{R}$, [L2] extends $f_0$ to a bounded real linear functional $f$ on $X$ with $\|f\|=\|f_0\|=1$. Since $x=1 \cdot x$, $f(x)=f_0(x)=\|x\|$. [L2, step 1.1]

2.2 If the scalar field is $\mathbb{C}$, [L3] extends $f_0$ to a bounded complex linear functional $f$ on $X$ with $\|f\|=\|f_0\|=1$. Again $f(x)=f_0(x)=\|x\|$. [L3, step 1.1]

3.1 In either scalar case, the extension produced in step 2.1 or step 2.2 is a bounded linear functional on $X$, hence an element of $X^*$ by [L1], with norm $1$ and value $\|x\|$ at $x$. [L1, step 2.1, step 2.2] ∎
