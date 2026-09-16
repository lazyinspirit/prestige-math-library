---
id: lem-the-frechet-derivative-is-unique
kind: lemma
title: The Fréchet derivative is unique
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-frechet-derivative-between-banach-spaces, def-norm-and-normed-space, def-metric-topology]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §2.1 (Exercise 6)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Let $U \subseteq X$ be open in a real Banach space $X$, let $f : U \to Y$ map to
a real Banach space $Y$, and let $x \in U$. If $A, B \in \mathcal B(X,Y)$ both
satisfy the Fréchet remainder condition for $f$ at $x$, that is


$$\lim_{\substack{h \to 0 \\ h \ne 0}} \frac{\|f(x+h)-f(x)-Ah\|}{\|h\|} = 0 \qquad \text{and} \qquad \lim_{\substack{h \to 0 \\ h \ne 0}} \frac{\|f(x+h)-f(x)-Bh\|}{\|h\|} = 0 ,$$


then $A = B$.

## Facts & Assumptions

**Given:** An open $U$ in a real Banach space $X$, a map $f : U \to Y$, a point $x \in U$, and $A, B \in \mathcal B(X,Y)$ satisfying the two remainder conditions. Write $r_A(h) := f(x+h)-f(x)-Ah$ and $r_B(h) := f(x+h)-f(x)-Bh$.

[L1] The remainder condition means: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $\|r_A(h)\| \le \varepsilon\|h\|$ and $\|r_B(h)\| \le \varepsilon\|h\|$ whenever $\|h\| < \delta$ and $x + h \in U$ ([[def-frechet-derivative-between-banach-spaces]]).

[L2] The norm satisfies the triangle inequality $\|u+v\| \le \|u\|+\|v\|$, absolute homogeneity $\|\lambda u\| = |\lambda|\|u\|$ for real $\lambda$, and separation $\|u\| = 0 \Rightarrow u = 0$ ([[def-norm-and-normed-space]]).

[L3] Since $U$ is open and $x \in U$, there is a real $\rho > 0$ such that $x + h \in U$ whenever $\|h\| < \rho$ ([[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Fix $v \in X$ with $v \ne 0$; by [L3] there is $\rho > 0$ such that $x + h \in U$ whenever $\|h\| < \rho$, so $x + tv \in U$ for every real $t$ with $|t|\,\|v\| < \rho$, that is for every $t$ with $|t| < \rho/\|v\|$. [L3, algebra]

2.1 For every real $t \ne 0$ with $|t| < \rho/\|v\|$ the two remainders at $h = tv$ satisfy $r_A(tv) - r_B(tv) = -(tAv - tBv)$, hence $$t\,(A-B)v = r_B(tv) - r_A(tv), \qquad \|(A-B)v\| \le \frac{\|r_A(tv)\| + \|r_B(tv)\|}{|t|} .$$ [step 1.1, L2, algebra]

3.1 For real $t$ with $0 < |t| < \rho/\|v\|$ one has $\|tv\| = |t|\,\|v\|$, so the right-hand side of [step 2.1] equals $\|v\|\bigl(\|r_A(tv)\|/\|tv\| + \|r_B(tv)\|/\|tv\|\bigr)$, and the two quotients tend to $0$ as $t \to 0$ by [L1] applied with $h = tv$, since $\|tv\| \to 0$. [L1, step 2.1, algebra]

3.2 Given a real $\varepsilon > 0$, [L1] supplies $\delta > 0$ with $\|r_A(h)\| \le \varepsilon\|h\|$ and $\|r_B(h)\| \le \varepsilon\|h\|$ for $\|h\| < \delta$; applying [step 2.1] to $h = tv$ with $0 < |t| < \min\{\rho/\|v\|, \delta/\|v\|\}$ gives $\|(A-B)v\| \le 2\|v\|\varepsilon$. As $\varepsilon > 0$ was arbitrary, $\|(A-B)v\| = 0$, and [L2] gives $(A-B)v = 0$. [L1, step 2.1, L2, choose]

4.1 The vector $v \ne 0$ was arbitrary, so $(A-B)v = 0$ for every nonzero $v$; for $v = 0$ linearity of $A-B$ gives $(A-B)0 = 0$ as well. Hence $A - B = 0$, that is $A = B$. [step 3.2, algebra] ∎
