---
id: thm-first-fundamental-theorem-of-calculus-for-l-one
kind: theorem
title: "The indefinite integral of an $L^1$ function is differentiable almost everywhere"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-l-one-of-a-measure, thm-differentiation-along-families-shrinking-nicely]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorems 1.6.11-1.6.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Theorem 7.11"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $a<b$ and let $f\in L^1([a,b])$. Define
$$F(x):=\int_a^x f(t)\,dt\qquad(a\le x\le b).$$
Then $F$ is differentiable for almost every $x\in(a,b)$ and
$$F'(x)=f(x)$$
at every such point.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, and a function $f\in L^1([a,b])$.

[L1] The $L^1$ norm is the integral of the absolute value. ([[def-l-one-of-a-measure]])

[L2] Differentiation along families shrinking nicely recovers the point value at almost every point. ([[thm-differentiation-along-families-shrinking-nicely]])

## Proof

**Proof technique:** direct.

1.1 Extend $f$ by $0$ outside $[a,b]$, obtaining a function $g$ on [L1, given, construct, algebra] $\mathbb{R}$. Because $g$ is bounded by $|f|$ on $[a,b]$ and vanishes elsewhere, $$\int_{\mathbb{R}}|g(t)|\,dt=\int_a^b|f(t)|\,dt<\infty,$$ so $g\in L^1_{\mathrm{loc}}(\mathbb{R})$. For $x\in(a,b)$ and every $r>0$, define $$E_r^+(x):=[x,x+r),\qquad E_r^-(x):=(x-r,x].$$ Each family shrinks nicely to $x$ with constant $\alpha=\tfrac12$, because $E_r^\pm(x)\subseteq B(x,r)$ and $\lambda(E_r^\pm(x))=r=\tfrac12\lambda(B(x,r))$. [L1, given, construct, algebra]

2.1 Apply [L2] to the set $A:=(a,b)$ and the family $E_r^+(x)$ from step [L2, step 1.1, algebra] 1.1. This gives a full-measure subset $A_+\subseteq(a,b)$ such that $$\lim_{r\to0^+}\frac1r\int_x^{x+r}g(t)\,dt=g(x)\qquad(x\in A_+).$$ Applying [L2] again to the family $E_r^-(x)$ gives another full-measure subset $A_-\subseteq(a,b)$ such that $$\lim_{r\to0^+}\frac1r\int_{x-r}^{x}g(t)\,dt=g(x)\qquad(x\in A_-).$$ Hence both one-sided limits hold for every $x\in A_+\cap A_-$, which still has full measure in $(a,b)$. At such an $x$, if $h>0$ is small then $$\frac{F(x+h)-F(x)}{h} =\frac1h\int_x^{x+h}f(t)\,dt =\frac1h\int_x^{x+h}g(t)\,dt,$$ while for $h<0$, $$\frac{F(x+h)-F(x)}{h} =\frac1{|h|}\int_{x+h}^{x}g(t)\,dt.$$ Both one-sided limits therefore equal $g(x)=f(x)$. [L2, step 1.1, algebra]

3.1 Hence $F'(x)=f(x)$ for almost every $x\in(a,b)$. [step 2.1] ∎
