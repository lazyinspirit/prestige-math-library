---
id: thm-extension-of-a-bounded-map-from-a-dense-subspace
kind: theorem
title: "A bounded linear map from a dense normed subspace into a Banach space extends uniquely with the same norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-banach-space, def-countable-choice, def-normed-subspace,
       lem-metric-limits-unique, lem-vector-operations-are-continuous-in-a-normed-space,
       thm-bounded-linear-operator-equivalences, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $X$ be a normed space, let $D \subseteq X$ be a dense normed subspace, let
$Y$ be a Banach space, and let $T:D\to Y$ be a bounded linear operator. Then
there is a unique bounded linear operator $\widetilde T:X\to Y$ such that

$$\widetilde T|_D = T,$$

and $\|\widetilde T\| = \|T\|$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a normed space $X$, a dense normed subspace $D \subseteq X$, a Banach space $Y$, and a bounded linear operator $T:D\to Y$.

[L0] Countable Choice is assumed ([[def-countable-choice]]).

[L1] A bounded linear operator has a constant $C \ge 0$ with $\|Tu\| \le C\|u\|$ for all $u$, and it is continuous ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]]).

[L2] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L3] A normed subspace carries the restricted norm, and density means every ball in $X$ meets $D$ ([[def-normed-subspace]], [[def-metric-interior-closure-boundary]]).

[L4] Limits in a metric space are unique, and addition and scalar multiplication are continuous in normed spaces ([[lem-metric-limits-unique]], [[lem-vector-operations-are-continuous-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x \in X$. By [L0] and density in [L3], for each $n \ge 1$ choose $d_n(x) \in D$ with $\|d_n(x)-x\| < 1/n$. This is the selected $\mathsf{AC}_\omega$ step: one approximating sequence for each fixed point $x$. [L0, L3, choose]

2.1 Let $C$ be a bound for $T$ from [L1]. Then $\|Td_n(x)-Td_m(x)\| \le C\|d_n(x)-d_m(x)\| \le C(\|d_n(x)-x\|+\|d_m(x)-x\|)$, so $(Td_n(x))$ is Cauchy in $Y$. By [L2] it converges. Define $\widetilde T(x) := \lim_n Td_n(x)$. [step 1.1, L1, L2, choose]

3.1 The value in step 2.1 is independent of the chosen approximating sequence. If $e_n(x) \in D$ also satisfies $e_n(x)\to x$, then $\|Td_n(x)-Te_n(x)\| \le C\|d_n(x)-e_n(x)\| \le C(\|d_n(x)-x\|+\|e_n(x)-x\|) \to 0$, so the two image sequences have the same limit by [L4]. [step 2.1, L1, L4, algebra]

3.2 Uniqueness: if $S:X\to Y$ is another bounded linear extension of $T$, then $S$ is continuous by [L1]. For every $x \in X$, the sequence $d_n(x)$ of step 1.1 lies in $D$, so $Sd_n(x)=Td_n(x)\to \widetilde T(x)$ by step 2.1 and also $Sd_n(x)\to Sx$ by continuity of $S$. By [L4], $Sx=\widetilde T(x)$. Thus $S=\widetilde T$. [step 1.1, step 2.1, L1, L4]

4.1 If $x \in D$, choose the constant approximating sequence $d_n(x)=x$. Then step 2.1 gives $\widetilde T(x)=Tx$, so $\widetilde T$ extends $T$. [step 2.1, step 3.1]

4.2 To prove linearity, let $x,y \in X$ and choose the approximating sequences of step 1.1 for them. Then $d_n(x)+d_n(y)\to x+y$ and $\lambda d_n(x)\to \lambda x$ by [L4]. Using step 3.1 to replace the chosen sequence at $x+y$ by $d_n(x)+d_n(y)$, and similarly at $\lambda x$, we get $\widetilde T(x+y)=\lim_n T(d_n(x)+d_n(y))=\lim_n(Td_n(x)+Td_n(y))$ and $\widetilde T(\lambda x)=\lim_n \lambda Td_n(x)$. Continuity of addition and scalar multiplication from [L4] lets the limit pass through, so $\widetilde T(x+y)=\widetilde T(x)+\widetilde T(y)$ and $\widetilde T(\lambda x)=\lambda\widetilde T(x)$. [step 1.1, step 3.1, L4, construct]

5.1 The same bound $C$ works for $\widetilde T$. Indeed, with the sequence of step 1.1, $\|Td_n(x)\| \le C\|d_n(x)\| \le C(\|x\|+\|d_n(x)-x\|) < C(\|x\|+1/n)$. Given $\varepsilon > 0$, choose $n$ large enough that $\|\widetilde T(x)-Td_n(x)\| < \varepsilon$ and $1/n < \varepsilon/C$ when $C>0$; then $\|\widetilde T(x)\| \le C\|x\|+2\varepsilon$. Hence $\|\widetilde T(x)\| \le C\|x\|$ for all $x$, so $\widetilde T$ is bounded and $\|\widetilde T\| \le \|T\|$. Since $\widetilde T$ agrees with $T$ on $D$, also $\|T\| \le \|\widetilde T\|$. Therefore $\|\widetilde T\|=\|T\|$. [step 2.1, step 4.1, L1, algebra]

6.1 Steps 4.1, 4.2, 5.1, and 4.1 prove that $\widetilde T$ is the unique bounded linear extension of $T$ and that it has the same norm. [step 4.1, step 4.2, step 5.1, step 3.2] ∎
