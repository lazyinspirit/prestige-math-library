---
id: thm-bounded-operator-space-is-banach
kind: theorem
title: "If \\(Y\\) is Banach then \\(\\mathcal B(X,Y)\\) is Banach"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-space-of-bounded-linear-operators,
       def-operator-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field. If $Y$ is Banach,
then $\mathcal B(X,Y)$ is Banach for the operator norm.

## Facts & Assumptions

**Given:** A Banach space $Y$ and an operator-norm Cauchy sequence
$(T_n)$ in $\mathcal B(X,Y)$.

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] For a bounded operator, the operator norm is the unit-ball supremum and
satisfies $\|Tx\| \le \|T\|\,\|x\|$ for every $x$
([[def-operator-norm]]).

[L3] $\mathcal B(X,Y)$ is the vector space of bounded linear operators
([[def-space-of-bounded-linear-operators]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x \in X$. Since $(T_n)$ is Cauchy in operator norm, [L2] gives $\|T_nx-T_mx\| \le \|T_n-T_m\|\,\|x\|$, so $(T_nx)$ is a Cauchy sequence in $Y$. Because $Y$ is Banach, there is $Tx \in Y$ with $T_nx \to Tx$. [L1, L2, choose]

2.1 Step 1.1 defines a map $T:X\to Y$. If $x,y \in X$, then $T_n(x+y)=T_nx+T_ny$ for every $n$, so passing to the limit gives $T(x+y)=Tx+Ty$. The same argument with $\lambda x$ gives $T(\lambda x)=\lambda Tx$. Thus $T$ is linear. [step 1.1, L3, algebra]

2.2 Choose $N$ such that $\|T_n-T_m\| \le 1$ for all $m,n \ge N$. Fix $n \ge N$ and $x \in X$. For every $m \ge N$, $\|T_mx\| \le \|T_Nx\| + \|(T_m-T_N)x\| \le (\|T_N\|+1)\|x\|$ by [L2]. Letting $m \to \infty$ in step 1.1 gives $\|Tx\| \le (\|T_N\|+1)\|x\|$, so $T$ is bounded and hence $T \in \mathcal B(X,Y)$. [step 1.1, L2, L3]

2.3 Let $\varepsilon > 0$. Since $(T_n)$ is operator-norm Cauchy, choose $N$ so that $\|T_n-T_m\| < \varepsilon$ for all $m,n \ge N$. Fix $n \ge N$ and $x$ with $\|x\| \le 1$. Step 1.1 gives $T_mx \to Tx$, so $\|(T_n-T)x\| = \lim_m \|(T_n-T_m)x\| \le \varepsilon$ by [L2]. Taking the supremum over the unit ball yields $\|T_n-T\| \le \varepsilon$. [step 1.1, L2]

3.1 Step 2.3 shows $T_n \to T$ in operator norm, with $T \in \mathcal B(X,Y)$ by step 2.2. Therefore every operator-norm Cauchy sequence converges in $\mathcal B(X,Y)$, so $\mathcal B(X,Y)$ is Banach by [L1]. [step 2.2, step 2.3, L1] ∎
