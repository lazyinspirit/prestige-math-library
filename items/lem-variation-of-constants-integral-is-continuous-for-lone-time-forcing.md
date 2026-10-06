---
id: lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing
kind: lemma
title: "The variation-of-constants integral is continuous for integrable forcing"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - thm-exponential-bound-for-a-c-zero-semigroup
  - lem-linearity-of-the-bochner-integral
  - thm-absolute-continuity-of-the-integral
  - lem-bochner-integral-norm-inequality
  - def-bochner-integrable-function
  - def-strongly-measurable-banach-valued-function
  - thm-bochner-integrability-criterion
  - def-strongly-continuous-semigroup
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 6, Propositions 6.2-6.4, printed pp. 145-147"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 3.1, formula (15) and its derivation, printed pp. 19-20"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for Lebesgue time integration. Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with constants $M\ge1$, $\omega\in\mathbb R$ and $\|T(t)\| \le Me^{\omega t}$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]). Let $T_0>0$ and let $f:(0,T_0)\to X$ be Bochner integrable with $\int_0^{T_0}\|f(s)\|\,ds<\infty$ ([[def-bochner-integrable-function]]). Then $$u_f(t):=\int_0^tT(t-s)f(s)\,ds\qquad(0\le t\le T_0)$$ is a well-defined element of $X$, the map $t\mapsto u_f(t)$ is continuous on $[0,T_0]$, and $\|u_f(t)\| \le M_{T_0}e^{\omega t}\int_0^t\|f(s)\|\,ds$ for a constant $M_{T_0}$ depending only on $M,\omega,T_0$ and the local bound of $\|T\|$ on $[0,T_0]$.

## Facts & Assumptions

**Given:** Countable Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with $\|T(t)\|\le Me^{\omega t}$ for some $M\ge1$, $\omega\in\mathbb R$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]); $T_0>0$; a Bochner integrable $f:(0,T_0)\to X$ with $\int_0^{T_0}\|f(s)\|\,ds<\infty$; and $u_f(t):=\int_0^tT(t-s)f(s)\,ds$.

[F1] The exponential bound makes $K:=\sup_{0\le r\le T_0}\|T(r)\|$ finite, since $\|T(r)\|\le Me^{\omega r}\le Me^{\max(\omega,0)T_0}$. [thm-exponential-bound-for-a-c-zero-semigroup]

[F2] Bochner integrability of $f$ supplies integrable simple functions $g$ with $\int(0,T_0)\|f-g\|$ arbitrarily small and a strong-measurability approximation ([[def-bochner-integrable-function]], [[def-strongly-measurable-banach-valued-function]]); a strongly measurable $h$ with $\int\|h\|<\infty$ is Bochner integrable ([[thm-bochner-integrability-criterion]]).

[F3] Linearity of the Bochner integral and the norm inequality $\|\int_Eh\|\le\int_E\|h\|$ ([[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]], [[def-bochner-integrable-function]]).

[F4] Absolute continuity of the scalar integral: for every $\varepsilon>0$ there is $\delta>0$ with $\int_E\|f\|<\varepsilon$ whenever $\lambda(E)<\delta$ ([[thm-absolute-continuity-of-the-integral]]).

[F5] The orbit map of every vector is continuous on $[0,\infty)$ and $T(h)\to I$ strongly: $T(h)x\to x$ for every $x$ ([[def-strongly-continuous-semigroup]]).



## Proof

**Proof technique:** direct: well-definedness from the Bochner criterion, then a uniform estimate $\int\|(T(h)-I)f\|\to0$ obtained from a single simple approximation, and a splitting of the increment.

1.1 Fix $t\in[0,T_0]$. For each measurable simple approximation $g_n=\sum_j x_{nj}\mathbf1_{E_{nj}}$ to $f$, the map $s\mapsto T(t-s)g_n(s)$ is strongly measurable: for each of its finitely many values $x_{nj}$, approximate the continuous curve $s\mapsto T(t-s)x_{nj}$ uniformly by step functions on equal partitions of $[0,t]$, then multiply by $\mathbf1_{E_{nj}}$. Choose a partition size by its least integer giving error below $1/n$ on all finitely many curves. The resulting measurable simple function approximates $T(t-s)g_n(s)$ uniformly within $1/n$. As $g_n(s)\to f(s)$ off a null set and $\|T(t-s)\|\le K$, these approximants converge pointwise there to $T(t-s)f(s)$. Its norm is bounded by $K\|f(s)\|$, so [F2] gives Bochner integrability and [F3] gives $\|u_f(t)\|\le Me^{\max(-\omega,0)T_0}e^{\omega t}\int_0^t\|f(s)\|\,ds$. [F1, F2, F3, F5]

1.2 Claim: $\rho(h):=\int_0^{T_0}\|(T(h)-I)f(s)\|\,ds\to0$ as $h\downarrow0$. Given $\varepsilon>0$, choose an integrable simple function $g=\sum_{j=1}^m x_j\mathbf 1_{E_j}$ with $\int_0^{T_0}\|f-g\|<\varepsilon/(2(K+1))$ by [F2]; then $\rho(h)\le(K+1)\int\|f-g\|+\sum_j\lambda(E_j)\|(T(h)-I)x_j\|$, and the finite sum tends to $0$ as $h\downarrow0$ because $T(h)x_j\to x_j$ for each $j$ by [F5]. Hence $\limsup_h\rho(h)\le\varepsilon/2<\varepsilon$, and $\varepsilon$ was arbitrary. [F1, F2, F5]

2.1 Increment splitting: for $0\le t<t+h\le T_0$, linearity [F3] and the semigroup law give $u_f(t+h)-u_f(t)=\int_0^{t+h}T(t+h-s)f(s)\,ds-\int_0^tT(t-s)f(s)\,ds=\int_t^{t+h}T(t+h-s)f(s)\,ds+\int_0^tT(t-s)(T(h)-I)f(s)\,ds$, where in the last term $T(t-s+h)=T(t-s)T(h)$. [F3, step 1.1]

3.1 Taking norms in [step 2.1] and using $K$ from [F1] and the norm inequality [F3]: $\|u_f(t+h)-u_f(t)\|\le K\int_t^{t+h}\|f(s)\|\,ds+K\rho(h)\to0$ as $h\downarrow0$, the first term by absolute continuity [F4] and the second by [step 1.2]. The backward increment is bounded by $K\int_{t-h}^t\|f\|+K\rho(h)$ by the same splitting with $t-h$ in place of $t$, hence also tends to $0$. [F1, F3, F4, step 1.2, step 2.1]

4.1 Continuity at the endpoints: $\|u_f(h)-u_f(0)\|\le K\int_0^h\|f\|\to0$ by [F3], [F4], and at $t=T_0$ the backward bound of [step 3.1] applies; hence $t\mapsto u_f(t)$ is continuous on the closed interval $[0,T_0]$, and the estimate of [step 1.1] is the stated bound with $M_{T_0}:=Me^{\max(-\omega,0)T_0}$. [F1, F3, F4, step 3.1]

5.1 The claims of the statement follow: $u_f$ is well defined, continuous on $[0,T_0]$, and bounded by $M_{T_0}e^{\omega t}\int_0^t\|f\|$; no compactness of the range of $f$ and no choice beyond the declared Bochner framework was used. [step 1.1, step 1.2, step 3.1, step 4.1] ∎
