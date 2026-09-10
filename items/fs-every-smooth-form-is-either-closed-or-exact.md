---
id: "fs-every-smooth-form-is-either-closed-or-exact"
kind: "false-statement"
title: "Every smooth form is either closed or exact"
deps: ["def-closed-and-exact-differential-forms", "thm-local-coordinate-formula-for-the-exterior-derivative", "thm-the-exterior-derivative-squares-to-zero"]
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

False claim: every smooth form is either closed or exact.

## Facts & Assumptions

**Given:** The smooth form $\alpha=x\,dy$ on $\mathbb R^2$.

[F1] [[def-closed-and-exact-differential-forms]]: For the complex def-de-rham-cochain-complex, put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$. If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by thm-the-exterior-derivative-squares-to-zero, so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F3] [[thm-the-exterior-derivative-squares-to-zero]]: For every differential form $\omega$, $d(d\omega)=0$.

## Refutation

**Proof technique:** direct.

1.1 Its derivative is $d\alpha=dx\wedge dy\ne0$, since evaluation on the coordinate basis gives $1$. Hence $\alpha$ is not closed. [F1, F2, given]

2.1 If $\alpha=d\eta$ were exact, then $d\alpha=d^2\eta=0$, contradicting step 1.1. Thus this form is neither closed nor exact, refuting the disjunction. [F1, F3, step 1.1] ∎

## Source locator

Lee, p.441, exact forms are closed; the nonclosed witness is computed directly.
