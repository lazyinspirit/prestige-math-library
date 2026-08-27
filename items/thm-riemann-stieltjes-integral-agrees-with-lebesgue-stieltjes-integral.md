---
id: thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral
kind: theorem
title: "For a continuous integrand, the Riemann-Stieltjes and Lebesgue-Stieltjes integrals agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-riemann-stieltjes-sum-and-integral, thm-riemann-stieltjes-existence-continuous-bv, thm-riemann-stieltjes-darboux-criterion, thm-riemann-stieltjes-linearity-and-additivity, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, cor-continuous-functions-are-borel-measurable, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis, Theorem (11.11)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$, let $g:[a,b]\to\mathbb R$ be
continuous, let $F:\mathbb R\to\mathbb R$ be nondecreasing and right-continuous,
and let $\mu_F$ be the Lebesgue-Stieltjes measure attached to $F$. Then
$g$ is $\mu_F$-integrable on $(a,b]$ and
$$\int_a^b g\,dF=\int_{(a,b]} g\,d\mu_F.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, a continuous function $g:[a,b]\to\mathbb R$, a nondecreasing right-continuous function $F:\mathbb R\to\mathbb R$, its Lebesgue-Stieltjes measure $\mu_F$, the Riemann-Stieltjes integral $I:=\int_a^b g\,dF$, and a real $B>0$ with $|g(x)|\le B$ on $[a,b]$.

[L1] A continuous integrand is Riemann-Stieltjes integrable against every bounded-variation integrator; since a nondecreasing function has bounded variation, $I$ exists. ([[thm-riemann-stieltjes-existence-continuous-bv]])

[L2] For a nondecreasing integrator, Riemann-Stieltjes integrability is equivalent to the Darboux criterion; because $g$ is continuous, for every $\varepsilon>0$ there is a partition $P$ with $U_F(g,P)-L_F(g,P)<\varepsilon$. ([[thm-riemann-stieltjes-darboux-criterion]])

[L3] For every $u<v$, $$\mu_F((u,v])=F(v)-F(u).$$ ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

[L4] The nonnegative integral agrees with the simple integral on simple functions, and the simple integral of $\sum_j c_j\chi_{E_j}$ is $\sum_j c_j\mu(E_j)$. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]])

[L5] Continuous functions on $\mathbb R$ are Borel measurable. ([[cor-continuous-functions-are-borel-measurable]])

[L6] A measurable real function is integrable exactly when the integral of its absolute value is finite, and the Lebesgue integral is linear on $L^1$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[L7] The nonnegative integral is monotone. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L8] Riemann-Stieltjes sums are $$S(g,F;P,\xi)=\sum_{i=1}^m g(\xi_i)\bigl(F(t_i)-F(t_{i-1})\bigr),$$ and $\int_a^b g\,dF=J$ means that every tagged partition of sufficiently small mesh has sum within any prescribed $\varepsilon>0$ of $J$. ([[def-riemann-stieltjes-sum-and-integral]])

[L9] The Riemann-Stieltjes integral is linear in the integrand. ([[thm-riemann-stieltjes-linearity-and-additivity]])

## Proof

**Proof technique:** direct.

1.1 Extend $g$ to a continuous function $\widetilde g:\mathbb R\to\mathbb R$ by setting $\widetilde g(x)=g(a)$ for $x<a$, $\widetilde g(x)=g(x)$ for $x\in[a,b]$, and $\widetilde g(x)=g(b)$ for $x>b$. Then [L5] makes $\widetilde g$ Borel measurable. Put $$h:=(B+\widetilde g)\chi_{(a,b]}.$$ This is a nonnegative measurable function. Since $0\le h\le 2B\,\chi_{(a,b]}$, [L3], [L4], [L6], and [L7] show that $h$ is $\mu_F$-integrable. Let $$J:=\int_a^b (B+g)\,dF.$$ By [L1], the integral $J$ exists. The constant integrand $B$ has the same Riemann-Stieltjes sum $B(F(b)-F(a))$ for every tagged partition, so [L8] gives $$\int_a^b B\,dF=B\bigl(F(b)-F(a)\bigr).$$ Therefore [L9] yields $$J=I+B\bigl(F(b)-F(a)\bigr).$$ [L1, L3, L4, L5, L6, L8, L9, construct]

1.2 Let $\varepsilon>0$. By [L2], choose a partition $P_0=\{a=t_0<\cdots<t_m=b\}$ with $U_F(g,P_0)-L_F(g,P_0)<\varepsilon$. By [L8], choose $\delta>0$ such that every tagged partition of mesh below $\delta$ has Riemann-Stieltjes sum for $B+g$ within $\varepsilon$ of $J$. Let $P=\{a=s_0<\cdots<s_n=b\}$ be a refinement of $P_0$ with mesh below $\delta$. For each $i$ put $$m_i:=\inf_{[s_{i-1},s_i]}g,\qquad M_i:=\sup_{[s_{i-1},s_i]}g,$$ and define nonnegative simple functions on $\mathbb R$ by $$\ell_P:=\sum_{i=1}^n (B+m_i)\chi_{(s_{i-1},s_i]},\qquad u_P:=\sum_{i=1}^n (B+M_i)\chi_{(s_{i-1},s_i]}.$$ Then $\ell_P\le h\le u_P$. Because each refined infimum is at least the corresponding coarse infimum and each refined supremum is at most the corresponding coarse supremum, the Stieltjes lower sum increases and the upper sum decreases under this refinement, so $$U_F(g,P)-L_F(g,P)\le U_F(g,P_0)-L_F(g,P_0)<\varepsilon.$$ Also [L3] and [L4] give $$\int \ell_P\,d\mu_F = B\bigl(F(b)-F(a)\bigr)+L_F(g,P),\qquad \int u_P\,d\mu_F = B\bigl(F(b)-F(a)\bigr)+U_F(g,P).$$ [L2, L3, L4, L8, choose, construct]

2.1 Fix any tagging $\xi$ of $P$. Then $$\int \ell_P\,d\mu_F\le\int h\,d\mu_F\le\int u_P\,d\mu_F,$$ and because $m_i\le g(\xi_i)\le M_i$ on every subinterval, $$\int \ell_P\,d\mu_F\le S(B+g,F;P,\xi)\le\int u_P\,d\mu_F.$$ Hence both $\int h\,d\mu_F$ and $S(B+g,F;P,\xi)$ lie in an interval of length $U_F(g,P)-L_F(g,P)<\varepsilon$, so $$\left|\int h\,d\mu_F-S(B+g,F;P,\xi)\right|<\varepsilon.$$ [step 1.2, L7, L8, algebra]

3.1 Because $\|P\|<\delta$, [L8] gives $$\left|S(B+g,F;P,\xi)-J\right|<\varepsilon.$$ Combining this with step 2.1, $$\left|\int h\,d\mu_F-J\right|<2\varepsilon.$$ Since $\varepsilon>0$ was arbitrary, $$\int h\,d\mu_F=J=I+B\bigl(F(b)-F(a)\bigr).$$ [step 1.1, step 1.2, step 2.1, L8]

4.1 Step 1.1 gives $h=\widetilde g\,\chi_{(a,b]}+B\chi_{(a,b]}$, and both summands are integrable by step 1.1. Therefore [L3] and [L6] yield $$\int_{(a,b]} g\,d\mu_F =\int h\,d\mu_F-B\mu_F((a,b]) =\bigl(I+B(F(b)-F(a))\bigr)-B(F(b)-F(a)) =I.$$ This is exactly $$\int_{(a,b]} g\,d\mu_F=\int_a^b g\,dF,$$ so the two integrals agree. [step 1.1, step 3.1, L3, L6] ∎
