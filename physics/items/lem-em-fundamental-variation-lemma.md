---
id: lem-em-fundamental-variation-lemma
kind: lemma
title: "The fundamental lemma of the calculus of variations for continuous coefficients"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-test-function-space-d-of-an-open-set, def-euclidean-inner-product, def-metric-continuity, def-metric-ball, lem-test-function-cutoffs-and-euclidean-localization, lem-em-continuous-localization, thm-componentwise-limits-and-continuity, def-integral-over-a-measurable-set, cor-continuous-functions-are-borel-measurable, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-extreme-value-metric, thm-compact-subset-is-closed-and-bounded, thm-lebesgue-measure-of-a-box-of-every-kind, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-countable-choice]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-em-continuous-localization: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "J. Figueroa-O'Farrill, Brief Notes on the Calculus of Variations (University of Edinburgh), §4 Theorem 1, printed pp. 4–5; §12 Theorem 4, printed p. 19; §14 compact-support reformulation, printed p. 23"
      url: "https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/CoV.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let $n,m\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $g:U\to\mathbb R^m$ be continuous. If $\int_U\langle g,h\rangle\,d\lambda=0$ for every $h\in C_c^\infty(U;\mathbb R^m)$, then $g=0$ on $U$. Here $\langle\cdot,\cdot\rangle$ is the Euclidean inner product and $\int_U\langle g,h\rangle\,d\lambda$ is the finite sum $\sum_{i<m}\int_U g_ih_i\,d\lambda$ of integrals of continuous compactly supported functions ([[def-integral-over-a-measurable-set]]). The scalar case is $m=1$: a continuous $g$ with $\int_Ugh\,d\lambda=0$ for every $h\in C_c^\infty(U;\mathbb R)$ vanishes on $U$. The vector case is deduced from the scalar case componentwise, each component tested separately. The conclusion is pointwise on $U$, and the hypothesis is the full family of compactly supported smooth test functions. The Axiom of Countable Choice is declared because the localization lemma [[lem-em-continuous-localization]] and the measurability fact [[cor-continuous-functions-are-borel-measurable]] used in the recorded proof assume it; no other choice principle enters.

**Conventions.** $C_c^\infty(U;\mathbb R^m)$ is the space of smooth $\mathbb R^m$-valued functions with compact support in $U$, defined componentwise in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]] and [[def-test-function-space-d-of-an-open-set]]. Each product $g_ih_i$ is continuous on $U$ and vanishes outside a compact subset of $U$, and $\int_U g_ih_i\,d\lambda$ denotes the Lebesgue integral of its zero extension to $\mathbb R^n$, where $\lambda=\lambda_n$ is $n$-dimensional Lebesgue measure ([[def-integrable-real-and-complex-functions-and-their-integrals]]); [F5] and [F6] below record that this is a finite real number and that for a nonnegative integrand it agrees with the nonnegative integral over the measurable set $U$ of [[def-integral-over-a-measurable-set]].

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; naturals $n,m\ge1$; an open set $U\subseteq\mathbb R^n$; a continuous $g:U\to\mathbb R^m$ with $\int_U\langle g,h\rangle\,d\lambda=0$ for every $h\in C_c^\infty(U;\mathbb R^m)$; and, inside the contradiction argument below, a point $p\in U$ with $g(p)\ne0$.

[F1] Cutoff lemma, in ZF: for a compact set $K\subseteq\Omega$ with $\Omega\subseteq\mathbb R^n$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F2] Localization, under $\mathrm{AC}_\omega$: if $G:U\to\mathbb R^m$ is continuous on an open set $U$ and $\int_VG\,d\lambda_n=0$ for every ball $V$ compactly contained in $U$, then $G=0$ on $U$ ([[lem-em-continuous-localization]], where $\int_VG$ is the componentwise integral over the measurable set $V$). Below we use only its contrapositive form: if $G(q)\ne0$ for some $q\in U$, then some ball $V$ compactly contained in $U$ has $\int_VG\,d\lambda_n\ne0$.

[F3] Order and scalar rules for the nonnegative integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]): for nonnegative measurable $f\le h$ one has $\int f\,d\lambda\le\int h\,d\lambda$, and for $c>0$ one has $\int cf\,d\lambda=c\int f\,d\lambda$, while the zero function has integral $0$; the nonnegative integral over a measurable set of [[def-integral-over-a-measurable-set]] is an instance of this integral.

[F4] Continuity of pairings: if $f,w:U\to\mathbb R^m$ are continuous then $x\mapsto\langle f(x),w(x)\rangle$ is continuous ([[thm-componentwise-limits-and-continuity]], clause 3); for $m=1$ this is the ordinary product of two continuous real functions under [[def-euclidean-inner-product]]. In particular the components $g_i$ of $g$ are continuous, and for $\psi\in C_c^\infty(U;\mathbb R)$ the function $\psi e_i$ lies in $C_c^\infty(U;\mathbb R^m)$ and has $\langle g,\psi e_i\rangle=g_i\psi$.

[F5] Signed integral ([[def-integrable-real-and-complex-functions-and-their-integrals]]): for measurable real $F$ with at most one of $\int F^+\,d\lambda$, $\int F^-\,d\lambda$ equal to $+\infty$, one sets $\int F\,d\lambda:=\int F^+\,d\lambda-\int F^-\,d\lambda$; $F$ is integrable when both parts are finite. If $F\ge0$ then $F^-=0$ and the signed integral of $F$ equals its nonnegative integral, which over a measurable set $E$ is the integral of $F\chi_E$ ([[def-integral-over-a-measurable-set]]); and $\int(-F)\,d\lambda=-\int F\,d\lambda$ is definitional from $(-F)^+=F^-$ and $(-F)^-=F^+$.

[F6] Compactly supported continuous functions have finite integrals: let $F:\mathbb R^n\to\mathbb R$ be continuous with compact support $K$. If $K=\varnothing$ then $F=0$ and $\int F\,d\lambda=0$; otherwise $K$ is a nonempty compact metric space, so $M:=\max_K|F|$ is finite ([[thm-extreme-value-metric]]), $K$ is bounded ([[thm-compact-subset-is-closed-and-bounded]]) hence contained in a closed box $Q$ with $\lambda(Q)<+\infty$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), $F$ is Borel measurable ([[cor-continuous-functions-are-borel-measurable]], under $\mathrm{AC}_\omega$), and $|F|\le M\chi_Q$, so $\int|F|\,d\lambda\le\int M\chi_Q\,d\lambda=M\lambda(Q)<+\infty$ by [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and [[def-integral-of-a-nonnegative-simple-function]]; thus $F$ is integrable by [F5]. In particular each integrand $g_ih_i$ of the hypothesis has a continuous compactly supported zero extension by [F4], and each pairing in the hypothesis is a finite real number.

[F7] Continuity in balls ([[def-metric-continuity]], [[def-metric-ball]]): $u$ is continuous at $p$ when for every real $\varepsilon>0$ there is $\delta>0$ with $u[B(p,\delta)]\subseteq B(u(p),\varepsilon)$; and $B(p,\delta)=\{x:d(p,x)<\delta\}$ for $\delta>0$.

## Proof

**Proof technique:** contradiction; assume a point where $g\ne0$, reduce to a scalar continuous function with a vanishing test pairing, and construct a nonnegative compactly supported product of that coefficient with an admissible smooth test function, whose integral is both $0$ and positive.

1.1 Suppose the conclusion fails: $g(p)\ne0$ for some $p\in U$. If $m=1$, put $u:=g$; then $u$ is continuous and the hypothesis reads $\int_Uu\psi\,d\lambda=0$ for every $\psi\in C_c^\infty(U;\mathbb R)$. If $m\ge2$, choose $i<m$ with $g_i(p)\ne0$ and put $u:=g_i$; for every $\psi\in C_c^\infty(U;\mathbb R)$ the function $\psi e_i$ lies in $C_c^\infty(U;\mathbb R^m)$ with $\langle g,\psi e_i\rangle=g_i\psi$ by [F4], so the hypothesis gives $\int_Uu\psi\,d\lambda=0$. In both cases $u:U\to\mathbb R$ is continuous with $u(p)\ne0$, and replacing $u$ by $-u$ preserves the vanishing pairing because $\int_U(-u)\psi\,d\lambda=-\int_Uu\psi\,d\lambda$ by [F5]; hence we may assume $u(p)>0$. [given, F4, F5, assume-contra]

2.1 Continuity of $u$ at $p$ with $u(p)>0$ yields $\delta>0$ with $B(p,\delta)\subseteq U$ and $u(x)\ge u(p)/2$ for every $x\in B(p,\delta)$: taking $\varepsilon:=u(p)/2>0$ in [F7] gives $\delta_0>0$ with $|u(x)-u(p)|<u(p)/2$ for $d(p,x)<\delta_0$, and since $U$ is open one may shrink $\delta_0$ to a $\delta>0$ with $B(p,\delta)\subseteq U$, the bound remaining valid on the smaller ball. [step 1.1, F7, algebra]

3.1 Apply [F1] with $\Omega:=B(p,\delta)$ and $K:=\{p\}$: there is $\chi\in C_c^\infty(B(p,\delta))$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $p$. Extended by zero, $\chi$ lies in $C_c^\infty(U;\mathbb R)$ and satisfies $\operatorname{supp}\chi\subseteq B(p,\delta)$. [step 2.1, F1]

4.1 Put $\varphi:=u\chi$, extended by zero to $\mathbb R^n$. Then $\varphi$ is continuous and compactly supported in $U$ by [F4] and [F1], satisfies $\varphi\ge0$ on $U$ because $\varphi=0$ where $\chi=0$ and $\varphi(x)=u(x)\chi(x)\ge(u(p)/2)\chi(x)\ge0$ for $x\in B(p,\delta)$ by step 2.1, and has $\varphi(p)=u(p)>0$; hence $\varphi$ is not the zero function. [step 2.1, step 3.1, F1, F4, algebra]

5.1 The hypothesis at the admissible test function $\chi$ gives $\int_Uu\chi\,d\lambda=0$, that is $\int_U\varphi\,d\lambda=0$: since $\varphi\ge0$, the signed integral equals the nonnegative integral of $\varphi$ over the measurable set $U$ by [F5], and that integral is a finite real number by [F6]. [step 3.1, step 4.1, given, F5, F6]

5.2 By the contrapositive localization [F2] applied to the continuous function $\varphi$ with $\varphi(p)\ne0$, there is a ball $V$ compactly contained in $U$ with $\int_V\varphi\,d\lambda\ne0$; as $\varphi\ge0$, monotonicity in [F3] applied to the zero function below $\varphi\chi_V$ gives $\int_V\varphi\,d\lambda\ge0$, so this integral is strictly positive. [step 4.1, F2, F3]

6.1 Since $V\subseteq U$, the nonnegative measurable functions $\varphi\chi_V$ and $\varphi\chi_U$ satisfy $\varphi\chi_V\le\varphi\chi_U$ pointwise, so monotonicity in [F3] gives $\int_V\varphi\,d\lambda\le\int_U\varphi\,d\lambda=0$, contradicting step 5.2; therefore no point $p\in U$ with $g(p)\ne0$ exists and $g=0$ on $U$. [step 5.1, step 5.2, F3, discharge-contradiction] ∎
