---
id: thm-general-kl-variational-and-partition-formulas
kind: theorem
title: "Variational and finite-partition formulas for measurable-space KL"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-kullback-leibler-divergence
  - thm-kullback-leibler-is-nonnegative
  - lem-it-finite-kl-agrees-with-measurable-kl
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the Radon–Nikodym definition of general KL and its nonnegativity theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.2, Theorem 5.2.1"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 3 §3.4, Theorem 3.7"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/486b7d83cc428acf75b74323ecafcc11_MIT6_441S16_chapter_3.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 5 §5.1, Theorem 5.1.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $P,Q$ be probability measures on one measurable space. For bounded measurable real $f$, put
$$\Phi_{P,Q}(f):=\int f\,dP-\ln\int e^f\,dQ.$$
Then
$$D(P\|Q)=\sup_{f\ {\rm bounded\ measurable}}\Phi_{P,Q}(f).$$
Equivalently, for every finite measurable partition $\mathcal P=(A_1,\ldots,A_m)$ of the whole space,
$$D(P\|Q)=\sup_{\mathcal P}\sum_{i=1}^m P(A_i)\ln\frac{P(A_i)}{Q(A_i)},$$
where $0\ln(0/q)=0$ and a term with $P(A_i)>0=Q(A_i)$ is $+\infty$. The result includes singular and infinite-divergence cases.

## Facts & Assumptions

**Given:** AC and probability measures $P,Q$ on a common measurable space.

[A1] AC is the hypothesis used by the Radon–Nikodym definition of measurable-space KL. [[def-axiom-of-choice]]

[F1] If $P\not\ll Q$, then $D(P\|Q)=+\infty$; if $P\ll Q$ with density $r$, then $D(P\|Q)=\int\log r\,dP$, whose negative part is finite. [[def-kullback-leibler-divergence]]

[F2] KL divergence between probability measures is nonnegative. [[thm-kullback-leibler-is-nonnegative]]

[F3] On a finite alphabet, measurable-space KL equals the finite sum with the same support conventions. [[lem-it-finite-kl-agrees-with-measurable-kl]]

[F4] Dominated convergence and monotone convergence apply to the stated finite or nonnegative integrals. [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]]

## Proof

**Given:** AC and probability measures $P,Q$.

1.1 First suppose $P\ll Q$ and $D(P\|Q)<\infty$. For bounded measurable $f$, let $Z_f=\int e^f\,dQ$ and define $Q_f$ by $dQ_f=e^f Z_f^{-1}dQ$. Then $Q_f$ is a probability equivalent to $Q$, and $dP/dQ_f=(dP/dQ)Z_fe^{-f}$. Taking logarithms and integrating under $P$ gives $D(P\|Q_f)=D(P\|Q)-\Phi_{P,Q}(f)$. By [F2], $\Phi_{P,Q}(f)\le D(P\|Q)$. If $D(P\|Q)=+\infty$ or $P\not\ll Q$, this upper bound is automatic. [A1, F1, F2, given, algebra]

1.2 If $P\not\ll Q$, choose a measurable $A$ with $Q(A)=0<P(A)$. For $f_t=t\mathbf1_A$, $\int e^{f_t}dQ=1$ and $\Phi_{P,Q}(f_t)=tP(A)\to+\infty$. Thus the bounded-function supremum is $+\infty=D(P\|Q)$ in the singular case. [F1, given, choose]

2.1 Suppose $P\ll Q$, let $r=dP/dQ$, and set $\ell=\log r$ on $\{r>0\}$, with $\ell=-\infty$ on $\{r=0\}$; the latter set is P-null. Define $f_n=\max(-n,\min(n,\ell))$, taking $f_n=-n$ on $\{r=0\}$. The negative part of $\ell$ is integrable by [F1]; its clipped negative parts converge by [F4], while the clipped positive parts increase to $\ell^+$ and converge in integral by [F4]. Hence $\int f_n\,dP\to D(P\|Q)$, including value $+\infty$. Pointwise, $e^{f_n}\to r$ Q-a.e. and $0\le e^{f_n}\le r+1$, so [F4] gives $\int e^{f_n}dQ\to\int r\,dQ=1$. Therefore $\Phi_{P,Q}(f_n)\to D(P\|Q)$ and the bounded-function supremum is at least the divergence. [F1, F4, step 1.1]

2.2 Fix a finite measurable partition $(A_i)_{i=1}^m$ and put $p_i=P(A_i)$, $q_i=Q(A_i)$. For constants $c_i$, the simple function $f=\sum_i c_i\mathbf1_{A_i}$ has $\Phi(f)=\sum_i p_ic_i-\ln\sum_iq_ie^{c_i}$. If some $p_i>0=q_i$, this expression is unbounded above by taking $c_i\to+\infty$. Otherwise its supremum over the $c_i$ is $\sum_{i:p_i>0}p_i\ln(p_i/q_i)$: the upper bound follows by applying [F2] to the finite probability vector with masses proportional to $q_ie^{c_i}$, and the lower bound follows by taking $c_i=\ln(p_i/q_i)$ when $p_i>0$ and $c_i\to-\infty$ on cells with $p_i=0<q_i$. The cases $p_i=q_i=0$ do not affect either sum. [F2, F3, step 1.1, algebra]

3.1 Every bounded measurable $f$ is uniformly approximated by finite-valued measurable simple functions. If $\|f-g\|_\infty\le\varepsilon$, then $|\int f\,dP-\int g\,dP|\le\varepsilon$ and $e^{-\varepsilon}\int e^g dQ\le\int e^f dQ\le e^\varepsilon\int e^g dQ$, so $|\Phi(f)-\Phi(g)|\le2\varepsilon$. Thus the supremum over bounded functions equals the supremum over simple functions. Step 2.2 identifies the latter with the supremum over finite partitions; step 2.1 identifies it with $D(P\|Q)$. No step subtracts infinite quantities. [F3, step 2.1, step 2.2, algebra] ∎
