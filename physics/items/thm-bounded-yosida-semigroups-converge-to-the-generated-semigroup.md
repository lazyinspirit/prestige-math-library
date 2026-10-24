---
id: thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup
kind: theorem
title: "Bounded Yosida semigroups converge to the generated semigroup"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps:
  - def-dependent-choice
  - lem-exponential-series-of-a-bounded-operator
  - lem-yosida-approximants-are-bounded-and-converge-on-the-domain
  - def-yosida-approximants
  - thm-generators-are-closed-and-densely-defined
  - def-resolvent-of-a-closed-operator
  - def-strongly-continuous-semigroup
  - lem-strong-continuity-at-zero-implies-orbit-continuity
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-operator-norm
  - lem-composition-operator-norm-inequality
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - lem-average-convergence-of-a-continuous-banach-valued-function
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
      locator: "Chapter II Section 3, Generation Theorem 3.8 and its proof, pp. 77-78"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Theorem 11.16 and its proof, printed pp. 264-265"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.2, Theorem 1.26 and its proof, printed pp. 16-20"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $A:D(A)\subseteq X\to X$ be closed and densely defined on a Banach space $X$ and let $M\ge1$, $\omega\in\mathbb R$ satisfy $(\omega,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\| \le M(\lambda-\omega)^{-n}$ for all real $\lambda>\omega$, $n\ge1$. Let $A_\lambda=\lambda AR(\lambda,A)$ be the Yosida approximants ([[def-yosida-approximants]]) and let $E_\lambda(t):=e^{tA_\lambda}$ be the bounded-operator exponentials of [[lem-exponential-series-of-a-bounded-operator]]. Then for every $x\in X$ the limit $T(t)x:=\lim_{\lambda\to\infty}E_\lambda(t)x$ exists, uniformly for $t$ in compact subsets of $[0,\infty)$, and $T$ is a strongly continuous semigroup on $X$ with $\|T(t)\| \le Me^{\omega t}$ and generator $A$.

## Facts & Assumptions

**Given:** Dependent Choice; A closed densely defined operator $A$ on a Banach space $X$ with $(\omega,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\|\le M(\lambda-\omega)^{-n}$ for all real $\lambda>\omega$ and $n\ge1$; the Yosida approximants $A_\lambda=\lambda AR(\lambda,A)$ and the exponentials $E_\lambda(t)=e^{tA_\lambda}$ of [[lem-exponential-series-of-a-bounded-operator]] ([[def-yosida-approximants]], [[def-resolvent-of-a-closed-operator]]).

[F1] Exponential series: $E_\lambda(t)=\sum_{j\ge0}\frac{t^j}{j!}A_\lambda^j$ converges in operator norm, $\|E_\lambda(t)\|\le e^{|t|\,\|A_\lambda\|}$, $E_\lambda(0)=I$, $E_\lambda(t+s)=E_\lambda(t)E_\lambda(s)$, $E_\lambda$ is $C^1$ with $E_\lambda'(t)=A_\lambda E_\lambda(t)$, so $E_\lambda(t)x-x=\int_0^tE_\lambda(s)A_\lambda x\,ds$ for every $x$ by the fundamental theorem of calculus ([[lem-exponential-series-of-a-bounded-operator]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F2] The approximants satisfy the norm bound of [[lem-yosida-approximants-are-bounded-and-converge-on-the-domain]] and $A_\lambda x\to Ax$ for every $x\in D(A)$; distinct approximants commute and so do the exponentials ([[def-yosida-approximants]], [[lem-composition-operator-norm-inequality]]).

[F3] $A$ is closed and $D(A)$ is dense by hypothesis; since $A_\lambda=\lambda^2R(\lambda,A)-\lambda I$ and $R(\lambda,A)$ commutes with $I$, the binomial Cauchy-product argument in the exponential-series proof, applied to the commuting bounded operators $-\lambda I$ and $\lambda^2R(\lambda,A)$, gives $E_\lambda(t)=e^{-\lambda t}e^{t\lambda^2R(\lambda,A)}$, so the resolvent power estimates yield $\|E_\lambda(t)\|\le e^{-\lambda t}\sum_{j\ge0}\frac{(t\lambda^2)^j}{j!}\frac{M}{(\lambda-\omega)^j}=Me^{\omega t\lambda/(\lambda-\omega)}$ for $t\ge0$. [F1, F2]

[F4] Average convergence and strong continuity: a continuous curve is Bochner integrable and its forward averages converge to its value ([[lem-average-convergence-of-a-continuous-banach-valued-function]]); continuity at $0$ plus the semigroup law gives continuity of every orbit ([[lem-strong-continuity-at-zero-implies-orbit-continuity]], [[def-strongly-continuous-semigroup]]).

[F5] Laplace formula: a strongly continuous semigroup with $\|T(t)\|\le Me^{\omega t}$ has $(\omega,\infty)\subseteq\rho(\text{its generator})$ ([[thm-laplace-transform-formula-for-the-semigroup-resolvent]]).



## Proof

**Proof technique:** direct: uniform bounds and a Cauchy estimate on the dense domain, then passage to the limit, and identification of the generator by uniqueness of the resolvent.

1.1 **Uniform bound.** For $\lambda>\max\{\omega,0\}$ and $t\ge0$, [F3] gives $\|E_\lambda(t)\|\le Me^{\omega t\lambda/(\lambda-\omega)}$. For every $T_0<\infty$, $\omega t\lambda/(\lambda-\omega)\to\omega t$ uniformly on $0\le t\le T_0$. Thus the displayed majorants converge uniformly to $Me^{\omega t}$ there; they are uniformly bounded for large $\lambda$, and $\limsup_{\lambda\to\infty}\|E_\lambda(t)\|\le Me^{\omega t}$ for each fixed $t$, regardless of the sign of $\omega$. [F3]

2.1 **Cauchy estimate on $D(A)$.** For $x\in D(A)$ and $\lambda,\mu>\omega$, the exponentials commute and the FTC gives $E_\lambda(t)x-E_\mu(t)x=-\int_0^t\frac{d}{ds}\bigl[E_\lambda(t-s)E_\mu(s)x\bigr]ds=\int_0^tE_\lambda(t-s)E_\mu(s)(A_\lambda x-A_\mu x)\,ds$; hence $\|E_\lambda(t)x-E_\mu(t)x\|\le t\,C(t)^2\|A_\lambda x-A_\mu x\|$ with $C(t):=\sup_{\lambda\ \text{large},0\le s\le t}\|E_\lambda(s)\|$ finite by [step 1.1]. Since $A_\lambda x\to Ax$ by [F2], the family $(E_\lambda(t)x)_\lambda$ is Cauchy, uniformly for $t$ in compact intervals. [F1, F2, step 1.1]

3.1 **The limit and its bound.** For $x\in X$ and $y\in D(A)$ close to $x$, $\|E_\lambda(t)x-E_\mu(t)x\|\le\|E_\lambda(t)(x-y)\|+\|E_\mu(t)(x-y)\|+\|E_\lambda(t)y-E_\mu(t)y\|$, and the first two terms are small uniformly in $\lambda,\mu$ and $t$ in compacts by [step 1.1] while the last is small by [step 2.1]; density [F3] gives convergence uniformly on compact $t$-intervals for every $x$. The limit orbit is continuous on each compact interval: for any point, bound its increment by the two uniform approximation errors and the increment of one continuous approximating orbit. Define $T(t)x:=\lim_\lambda E_\lambda(t)x$; then $T(t)$ is linear and bounded with $\|T(t)x\|=\lim_\lambda\|E_\lambda(t)x\|\le Me^{\omega t}\|x\|$ by [step 1.1]. [F2, F3, step 1.1, step 2.1]

4.1 **Semigroup law.** For $t,s\ge0$ and $x\in X$, $E_\lambda(t+s)x=E_\lambda(t)E_\lambda(s)x\to T(t)T(s)x$ by [step 3.1] and the uniform bound on compacts, while $E_\lambda(t+s)x\to T(t+s)x$; hence $T(t+s)=T(t)T(s)$, and $T(0)=I$. [F1, step 3.1]

4.2 **Strong continuity.** For $x\in D(A)$ and $t$ in a compact interval, $E_\lambda(t)x-x=\int_0^tE_\lambda(s)A_\lambda x\,ds=\int_0^tE_\lambda(s)Ax\,ds+\int_0^tE_\lambda(s)(A_\lambda x-Ax)\,ds$, and the two integrals tend to $\int_0^tT(s)Ax\,ds$ and $0$ uniformly, because $E_\lambda(s)\to T(s)$ strongly uniformly on the interval by [step 3.1] and $A_\lambda x\to Ax$; hence $T(t)x-x=\int_0^tT(s)Ax\,ds\to0$ as $t\downarrow0$ by average convergence [F4]. With the local bound of [step 3.1] this extends from the dense domain to all $x$, so $T(t)x\to x$ as $t\downarrow0$; by the semigroup law and [F4] every orbit is continuous, so $T$ is a strongly continuous semigroup with bound $\|T(t)\|\le Me^{\omega t}$. [F1, F4, step 3.1]

5.1 **The generator contains $A$.** The identity of [step 4.2] shows $T(t)x-x=\int_0^tT(s)Ax\,ds$ for $x\in D(A)$; dividing by $t$ and using average convergence for the continuous curve $s\mapsto T(s)Ax$ gives $\frac{T(t)x-x}{t}\to Ax$. Hence $D(A)\subseteq D(B)$ and $Bx=Ax$ for $x\in D(A)$, where $B$ is the generator of $T$. [F4, step 4.2]

6.1 **$A=B$.** By [F5] applied to $T$ and its bound, every real $\lambda>\omega$ lies in $\rho(B)$; it also lies in $\rho(A)$ by hypothesis, and $\lambda I-A=\lambda I-B$ on $D(A)$. Thus $\lambda I-A:D(A)\to X$ and $\lambda I-B:D(B)\to X$ are both bijections agreeing on $D(A)$: given $x\in D(B)$, $(\lambda I-B)x=(\lambda I-A)y$ for some $y\in D(A)$, and since $(\lambda I-B)y=(\lambda I-A)y=(\lambda I-B)x$ while $\lambda I-B$ is injective, $x=y\in D(A)$; hence $D(A)=D(B)$ and $A=B$. [F2, F5, step 5.1] ∎
