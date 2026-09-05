---
id: thm-hahn-banach-norm-preserving-extension
kind: theorem
title: "A bounded real linear functional on a subspace of a real normed space extends with the same norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hahn-banach-dominated-extension, def-bounded-linear-operator,
       def-operator-norm, def-normed-subspace,
       rem-real-and-complex-normed-space-convention]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Corollary 4.15"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
---

## Statement

Let $X$ be a real normed space, let $M \subseteq X$ be a linear subspace, and
let $f_0:M \to \mathbb{R}$ be a bounded linear functional. Then there exists a
bounded linear functional $F:X \to \mathbb{R}$ such that $F|_M=f_0$ and
$\|F\|=\|f_0\|$.

## Facts & Assumptions

**Given:** A real normed space $X$, a linear subspace $M \subseteq X$, and a
bounded real linear functional $f_0:M \to \mathbb{R}$.

[L1] A dominated real linear functional extends to the whole real vector space
([[thm-hahn-banach-dominated-extension]]).

[L2] A bounded linear operator has some constant $C \ge 0$ with
$\|Tx\| \le C\|x\|$ for every $x$ ([[def-bounded-linear-operator]]).

[L3] The operator norm is the least such bound:
$$\|T\|=\inf\{C \ge 0:\|Tx\| \le C\|x\| \text{ for all } x\}$$
([[def-operator-norm]]).

[L4] A normed subspace carries the restricted norm from the ambient space
([[def-normed-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Define $p:X \to \mathbb{R}$ by $$p(x):=\|f_0\|\,\|x\|.$$ The triangle inequality and real homogeneity of the norm make $p$ sublinear. For $m \in M$, [L3] and [L4] give $$f_0(m) \le |f_0(m)| \le \|f_0\|\,\|m\|=p(m),$$ so $f_0 \le p$ on $M$. [L3, L4, given, construct, algebra]

2.1 By [L1], there exists a linear functional $F:X \to \mathbb{R}$ extending $f_0$ and satisfying $F(x) \le p(x)$ for every $x \in X$. [L1, step 1.1]

3.1 Apply step 2.1 to $x$ and to $-x$. Since $p(-x)=p(x)$, one gets $$-\,\|f_0\|\,\|x\| \le F(x) \le \|f_0\|\,\|x\|,$$ hence $$|F(x)| \le \|f_0\|\,\|x\| \qquad (x \in X).$$ So $F$ is bounded in the sense of [L2], and [L3] gives $\|F\| \le \|f_0\|$. [step 2.1, L2, L3, algebra]

3.2 Since $F|_M=f_0$, for every $m \in M$ with $\|m\| \le 1$ one has $|f_0(m)|=|F(m)| \le \|F\|$. Taking the supremum over the unit ball of the normed subspace $M$ and using [L3] and [L4] yields $\|f_0\| \le \|F\|$. [step 2.1, L3, L4]

4.1 Steps 3.1 and 3.2 give $\|F\|=\|f_0\|$, so $F$ is the required norm-preserving extension. [step 3.1, step 3.2] ∎
