---
id: cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one
kind: counterexample
title: "The Hardy-Littlewood maximal operator is not strong type $(1,1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, def-l-one-of-a-measure, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-under-dilations-and-reflections]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Exercise 22 after Theorem 3.22"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "G. H. Hardy and J. E. Littlewood, A maximal theorem with function-theoretic applications, Section I and Theorem 14"
      url: "https://web.archive.org/web/20240816135714if_/https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

The centered Hardy-Littlewood maximal operator maps $L^1(\mathbb{R}^n)$ to
$L^1(\mathbb{R}^n)$.

More strongly, if $f\in L^1(\mathbb{R}^n)$ satisfies $\|f\|_1>0$, then $Mf\notin
L^1(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a function $f\in L^1(\mathbb{R}^n)$ with $\|f\|_1>0$.

[L1] The centered maximal function is $$Mf(x)=\sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)|\,d\lambda(y).$$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[L2] The $L^1$ norm is $$\|f\|_1=\int_{\mathbb{R}^n}|f|\,d\lambda.$$ ([[def-l-one-of-a-measure]])

[L3] Lebesgue measure is sigma-finite, and every bounded measurable set has finite measure. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L4] Lebesgue measure on balls scales like $r^n$ under dilation. ([[thm-lebesgue-measure-under-dilations-and-reflections]])

## Counterexample

**Proof technique:** direct.

1.1 Since $\|f\|_1>0$, the integral in [L2] is positive. Hence there is [L2, L3, given, choose, algebra] $\varepsilon>0$ such that the measurable set $$E:=\{y\in\mathbb{R}^n:|f(y)|>\varepsilon\}$$ has positive measure. Because $\mathbb{R}^n=\bigcup_{m\ge1}B(0,m)$ and measure is countably subadditive, some $R\ge1$ satisfies $$0<\lambda(F)<\infty,\qquad F:=E\cap B(0,R),$$ the finiteness coming from [L3]. [L2, L3, given, choose, algebra]

2.1 Let $x\in\mathbb{R}^n$ with $\|x\|_2\ge2R$. If $y\in F$, then [step 1.1, L1, L4, algebra] $$\|y-x\|_2\le\|y\|_2+\|x\|_2\le R+\|x\|_2\le \tfrac32\|x\|_2,$$ so $F\subseteq B(x,\tfrac32\|x\|_2)$. Since $|f|\ge\varepsilon$ on $F$, [L1] gives $$Mf(x)\ge \frac{1}{\lambda(B(x,\tfrac32\|x\|_2))} \int_F|f(y)|\,d\lambda(y) \ge\frac{\varepsilon\,\lambda(F)} {\lambda(B(0,1))(\tfrac32\|x\|_2)^n} =\frac{C}{\|x\|_2^n}$$ for a positive constant $C$. [step 1.1, L1, L4, algebra]

3.1 For each integer $k\ge1$, set [step 2.1, L4, algebra] $$A_k:=B(0,2^{k+1}R)\setminus B(0,2^kR).$$ On $A_k$ one has $\|x\|_2\le2^{k+1}R$, so step 2.1 yields $$Mf(x)\ge \frac{C}{(2^{k+1}R)^n}\qquad(x\in A_k).$$ Therefore $$\int_{A_k}Mf\,d\lambda\ge \frac{C}{(2^{k+1}R)^n}\lambda(A_k).$$ Using [L4] again, $$\lambda(A_k)=\lambda(B(0,1))\big((2^{k+1}R)^n-(2^kR)^n\big),$$ so the right-hand side is a positive constant independent of $k$. Since the annuli $A_k$ are pairwise disjoint, the integral of $Mf$ over $\bigcup_{k\ge1}A_k$ diverges. [step 2.1, L4, algebra]

4.1 Thus $Mf\notin L^1(\mathbb{R}^n)$ whenever $\|f\|_1>0$, so the [step 3.1] strong type $(1,1)$ claim is false. [step 3.1] ∎
