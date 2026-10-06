---
id: lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves
kind: lemma
title: Taylor expansion with integral remainder for Banach-valued curves
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-linearity-of-the-bochner-integral, thm-bochner-integrability-criterion, def-bochner-integrable-function, def-frechet-derivative-between-banach-spaces, lem-bochner-integral-norm-inequality, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Taylor formula (4.14) in the proof of Theorem 4.6, printed p. 104'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.1, Theorems 11.1-11.3 (mean value theorem and fundamental theorem of calculus for Banach-valued curves), printed pp. 247-250'
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the cited integral and semigroup suppliers.

Let $Y$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$I\subseteq\mathbb R$ be an interval, let $n\ge0$ be an integer, and let
$u:I\to Y$. For a nondegenerate interval, $u\in C^{n+1}(I;Y)$ means that
$u$ is continuous on $I$, its restriction to $\operatorname{int}I$ has
norm-continuous derivatives through order $n+1$, and each derivative extends
continuously to $I$. Derivatives on the interior are taken with respect to
the real parameter, using the underlying real Banach space when $Y$ is complex
([[def-frechet-derivative-between-banach-spaces]]), and $u^{(k)}$ denotes the
continuous extension at any included endpoint; set $u^{(0)}=u$.
Assume this regularity. Then for all $t\in I$ and $h\in\mathbb R$ with
$[\min\{t,t+h\},\max\{t,t+h\}]\subseteq I$,
$$u(t+h)=\sum_{k=0}^nu^{(k)}(t)\frac{h^k}{k!}+\frac{1}{n!}\int_t^{t+h}(t+h-s)^n\,u^{(n+1)}(s)\,ds,$$
the integral being a Bochner integral
([[def-bochner-integrable-function]]); for $h<0$ the symbol
$\int_t^{t+h}$ denotes the oriented Bochner interval integral
$-\int_{t+h}^{t}$. For $n=0$ the formula is the fundamental theorem of
calculus. For $h=0$ the formula is understood as $u(t)=u(t)$; this also
covers singleton intervals without assigning higher derivatives there.
No choice principle beyond Countable Choice is used.

## Facts & Assumptions

**Given:** Countable Choice; a Banach space $Y$ over $\mathbb K$, an interval $I\subseteq\mathbb R$, an integer $n\ge0$, a curve $u:I\to Y$ continuous on $I$ whose real-parameter derivatives through order $n+1$ on $\operatorname{int}I$ extend continuously to $I$ when $I$ is nondegenerate, and points $t\in I$, $h\in\mathbb R$ with $[\min\{t,t+h\},\max\{t,t+h\}]\subseteq I$. Write $u^{(k)}$ for these extensions and $u^{(0)}=u$; for $h<0$ use $\int_t^{t+h}f:=-\int_{t+h}^tf$, and for $h=0$ read the formula as $u(t)=u(t)$, including singleton $I$.

[L1] A continuous $f:[a,b]\to Y$ is Bochner integrable; its primitive $G(t)=\int_a^tf$ is differentiable with $G'=f$, and for a continuous curve $\varphi$ of class $C^1$ on $(a,b)$ whose derivative extends continuously to $[a,b]$ one has $\int_a^b\varphi'=\varphi(b)-\varphi(a)$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[L2] The Bochner integral is linear in its integrand, so $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$ on a fixed interval, and $\|\int_Ef\|\le\int_E\|f\|$ ([[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]]). Scalar and vector operations are continuous: $\|\lambda v-\lambda_0v_0\|\le|\lambda-\lambda_0|\,\|v\|+|\lambda_0|\,\|v-v_0\|$.

## Proof

**Proof technique:** direct.

1.1 If $h=0$, the formula is $u(t)=u(t)$ for every $n$, including singleton $I$. Henceforth let $h\ne0$, so $I$ is nondegenerate; its interior is dense in $I$, making each continuous derivative extension unique. Base case $n=0$: for $h>0$, the continuous curve $u$ is differentiable inside $[t,t+h]$ with derivative extending continuously there as $u'$, so [L1] gives $\int_t^{t+h}u'(s)\,ds=u(t+h)-u(t)$; for $h<0$, [L1] on $[t+h,t]$ and the oriented convention give $\int_t^{t+h}u'=-\int_{t+h}^tu'=-(u(t)-u(t+h))=u(t+h)-u(t)$. [L1, given, algebra]

1.2 Integration by parts identity. For $1\le k\le n$ put $\varphi(s):=\frac{(t+h-s)^k}{k!}u^{(k)}(s)$; on the interior of the ordered segment the scalar-times-vector product rule gives $\varphi'(s)=-\frac{(t+h-s)^{k-1}}{(k-1)!}u^{(k)}(s)+\frac{(t+h-s)^k}{k!}u^{(k+1)}(s)$, because $\varphi(s+\Delta)-\varphi(s)=(\alpha(s+\Delta)-\alpha(s))v(s+\Delta)+\alpha(s)(v(s+\Delta)-v(s))$ for the scalar $\alpha(s)=(t+h-s)^k/k!$ and the vector $v=u^{(k)}$, and scalar multiplication is continuous by [L2]. For $h>0$, $\varphi$ is continuous on $[t,t+h]$ with $\varphi'$ extending continuously there (the derivatives of $u$ up to order $k+1$ have continuous extensions), so [L1] gives $\int_t^{t+h}\varphi'=\varphi(t+h)-\varphi(t)=-\frac{h^k}{k!}u^{(k)}(t)$; rearranging with the linearity [L2] yields $\frac{1}{(k-1)!}\int_t^{t+h}(t+h-s)^{k-1}u^{(k)}(s)\,ds=\frac{h^k}{k!}u^{(k)}(t)+\frac1{k!}\int_t^{t+h}(t+h-s)^ku^{(k+1)}(s)\,ds$. For $h<0$ the same computation is applied on the interval $[t+h,t]$ with the oriented sign, and the displayed identity is unchanged because both integrals acquire one sign reversal. [L1, L2, given, algebra]

2.1 Induction step. Assume the formula holds with $n-1\ge0$ in place of $n$ for every curve of class $C^n$; applying it to the $C^{n+1}$ curve $u$ gives $u(t+h)=\sum_{k=0}^{n-1}u^{(k)}(t)\frac{h^k}{k!}+\frac{1}{(n-1)!}\int_t^{t+h}(t+h-s)^{n-1}u^{(n)}(s)\,ds$, and [step 1.2] with $k=n$ rewrites the last term as $\frac{h^n}{n!}u^{(n)}(t)+\frac{1}{n!}\int_t^{t+h}(t+h-s)^nu^{(n+1)}(s)\,ds$; substituting gives the formula with $n$, all integrands being continuous hence Bochner integrable on the compact interval by [L1]. [step 1.2, L1, given, algebra]

3.1 Conclusion. [step 1.1] is the case $n=0$ for both signs of $h$ and [step 2.1] carries the induction from $n-1$ to $n$ for every $n\ge1$, so the formula holds for all $n\ge0$; the proof used only the one-dimensional fundamental theorem, the product rule for a scalar and a vector curve, and linearity of the Bochner integral, hence no choice principle beyond Countable Choice was used. [step 1.1, step 2.1, given] ∎ 
