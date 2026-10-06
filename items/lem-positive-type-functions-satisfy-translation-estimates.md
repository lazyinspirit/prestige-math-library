---
id: lem-positive-type-functions-satisfy-translation-estimates
kind: lemma
title: Translation estimates for continuous positive type functions
deps:
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-hilbert-space
  - cor-inner-product-induces-a-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.4: Proposition C.4.2(iii) (translation estimate); Appendix F, §F.1 (uses of the estimates)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.B: the GNS identity for normalized positive type functions"
status: draft
origin: pipeline
---
## Statement

Let $G$ be a topological group and let $\varphi$ be a continuous function of
positive type on $G$ with $\varphi(e)\le1$
([[def-continuous-function-of-positive-type]]). Let $(\pi_\varphi,H_\varphi,\xi)$
be a GNS triple for $\varphi$, so that $\pi_\varphi$ is a strongly continuous
unitary representation on the complex Hilbert space $H_\varphi$
([[def-hilbert-space]]) and
$$\varphi(g)=\langle\pi_\varphi(g)\xi,\xi\rangle,\qquad\|\xi\|^2=\varphi(e)$$
([[def-matrix-coefficient-of-a-unitary-representation]]). Then for all
$x,y\in G$:

1. $|\varphi(y^{-1}x)-\varphi(x)|\le\|\xi\|\,\|\pi_\varphi(y)\xi-\xi\|\le\bigl(2\varphi(e)(1-\operatorname{Re}\varphi(y))\bigr)^{1/2}$;
2. $|\varphi(x)-\varphi(y)|^2\le2\varphi(e)\bigl(\varphi(e)-\operatorname{Re}\varphi(y^{-1}x)\bigr)$;
3. $2\bigl(\varphi(e)-\operatorname{Re}\varphi(y^{-1}x)\bigr)=\|\pi_\varphi(y^{-1}x)\xi-\xi\|^2$;
4. if $\varphi(e)=1$, then
   $1-\operatorname{Re}\varphi(xy)\le2(1-\operatorname{Re}\varphi(x))+2(1-\operatorname{Re}\varphi(y))$.

## Facts & Assumptions

**Given:** a topological group $G$; a continuous positive-type function
$\varphi$ with $\varphi(e)\le1$; a GNS triple $(\pi_\varphi,H_\varphi,\xi)$
with $\varphi(g)=\langle\pi_\varphi(g)\xi,\xi\rangle$ and
$\|\xi\|^2=\varphi(e)$.

[A1] The pairing is linear in the first argument, conjugate-linear in the
second, $\|v\|^2=\langle v,v\rangle$, and $\langle v,w\rangle=\overline{\langle w,v\rangle}$
([[cor-inner-product-induces-a-norm]], [[def-hilbert-space]]).

[A2] Cauchy–Schwarz gives $|\langle v,w\rangle|\le\|v\|\,\|w\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] Each $\pi_\varphi(g)$ is unitary, so $\pi_\varphi(g)^*=\pi_\varphi(g)^{-1}=\pi_\varphi(g^{-1})$,
and $\pi_\varphi$ is a homomorphism
([[def-matrix-coefficient-of-a-unitary-representation]]).

## Proof

**Proof technique:** direct.

**Given:** a topological group $G$, a positive-type function $\varphi$ with GNS triple $(\pi_\varphi,H_\varphi,\xi)$ as in the statement, and $x,y\in G$.

1.1 For every $g\in G$ one has $\|\pi_\varphi(g)\xi-\xi\|^2=\|\xi\|^2-2\operatorname{Re}\langle\pi_\varphi(g)\xi,\xi\rangle+\|\xi\|^2=2\varphi(e)-2\operatorname{Re}\varphi(g)$: expanding the squared norm with [A1], unitarity gives $\|\pi_\varphi(g)\xi\|^2=\|\xi\|^2$, and $\langle\pi_\varphi(g)\xi,\xi\rangle=\varphi(g)$. This is claim 3 with $g=y^{-1}x$. [A1, A3]

2.1 For claim 1, unitarity gives $\varphi(y^{-1}x)=\langle\pi_\varphi(y^{-1}x)\xi,\xi\rangle=\langle\pi_\varphi(y)^*\pi_\varphi(x)\xi,\xi\rangle=\langle\pi_\varphi(x)\xi,\pi_\varphi(y)\xi\rangle$, so $\varphi(y^{-1}x)-\varphi(x)=\langle\pi_\varphi(x)\xi,\pi_\varphi(y)\xi-\xi\rangle$; Cauchy–Schwarz and $\|\pi_\varphi(x)\xi\|=\|\xi\|$ give $|\varphi(y^{-1}x)-\varphi(x)|\le\|\xi\|\,\|\pi_\varphi(y)\xi-\xi\|$, and step 1.1 with $g=y$ turns $\|\pi_\varphi(y)\xi-\xi\|$ into $\bigl(2(\varphi(e)-\operatorname{Re}\varphi(y))\bigr)^{1/2}$, hence the second bound with $\varphi(e)$ in place of $\|\xi\|$. [A1, A2, A3, step 1.1]

2.2 For claim 2, $\varphi(x)-\varphi(y)=\langle(\pi_\varphi(x)-\pi_\varphi(y))\xi,\xi\rangle=\langle\pi_\varphi(y)\bigl(\pi_\varphi(y^{-1}x)-I\bigr)\xi,\xi\rangle=\langle(\pi_\varphi(y^{-1}x)-I)\xi,\pi_\varphi(y)^*\xi\rangle$, so Cauchy–Schwarz gives $|\varphi(x)-\varphi(y)|\le\|\pi_\varphi(y^{-1}x)\xi-\xi\|\,\|\xi\|$; squaring and using step 1.1 with $g=y^{-1}x$ and $\|\xi\|^2=\varphi(e)$ gives $|\varphi(x)-\varphi(y)|^2\le2\varphi(e)(\varphi(e)-\operatorname{Re}\varphi(y^{-1}x))$. [A1, A2, A3, step 1.1]

3.1 For claim 4 assume $\varphi(e)=1$. Since $\pi_\varphi(xy)\xi-\xi=\pi_\varphi(x)\bigl(\pi_\varphi(y)\xi-\xi\bigr)+\bigl(\pi_\varphi(x)\xi-\xi\bigr)$, the triangle inequality and $\|a+b\|^2\le2\|a\|^2+2\|b\|^2$ give $\|\pi_\varphi(xy)\xi-\xi\|^2\le2\|\pi_\varphi(y)\xi-\xi\|^2+2\|\pi_\varphi(x)\xi-\xi\|^2$; substituting $\frac12\|\pi_\varphi(g)\xi-\xi\|^2=1-\operatorname{Re}\varphi(g)$ from step 1.1 and $\varphi(e)=1$ yields $1-\operatorname{Re}\varphi(xy)\le2(1-\operatorname{Re}\varphi(y))+2(1-\operatorname{Re}\varphi(x))$, which is claim 4. [A1, A3, step 1.1] ∎ 