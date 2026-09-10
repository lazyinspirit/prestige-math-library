---
id: "lem-wedge-with-a-closed-form-preserves-exactness-classes"
kind: "lemma"
title: "Wedge with a closed form preserves exactness classes"
deps: ["def-closed-and-exact-differential-forms", "thm-the-exterior-derivative-is-a-graded-derivation"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$ are closed, then $d\eta\wedge\beta=d(\eta\wedge\beta)$ for $\eta\in\Omega^{p-1}(M)$ and $\alpha\wedge d\theta=(-1)^p d(\alpha\wedge\theta)$ for $\theta\in\Omega^{q-1}(M)$.

## Facts & Assumptions

**Given:** Closed forms $\alpha,\beta$ of degrees $p,q\ge0$, and forms $\eta,\theta$ of the indicated degrees.

[F1] [[def-closed-and-exact-differential-forms]]: For the complex def-de-rham-cochain-complex, put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$. If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by thm-the-exterior-derivative-squares-to-zero, so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

[F2] [[thm-the-exterior-derivative-is-a-graded-derivation]]: Let $M$ be a smooth manifold. The exterior derivative is an $\mathbb R$-linear map $d:\Omega^*(M)\to\Omega^*(M)$ of degree one. For homogeneous smooth forms $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$, $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.$$

## Proof

**Proof technique:** direct.

1.1 For $p\ge1$, the graded Leibniz rule gives $d(\eta\wedge\beta)=d\eta\wedge\beta+(-1)^{p-1}\eta\wedge d\beta=d\eta\wedge\beta$. For $p=0$, $\eta=0$ in degree $-1$ and the equality is $0=0$. [F1, F2, given]

2.1 For $q\ge1$, $d(\alpha\wedge\theta)=d\alpha\wedge\theta+(-1)^p\alpha\wedge d\theta=(-1)^p\alpha\wedge d\theta$. Multiplying by $(-1)^p$ proves the second equality; if $q=0$, $\theta=0$ proves it directly. Thus either exact change has an explicit primitive. [F1, F2, given] ∎

## Source locator

Lee, Chapter 17, p.441 (closed/exact); graded Leibniz rule in the declared exterior-calculus supplier. The two primitive formulas are derived explicitly.
