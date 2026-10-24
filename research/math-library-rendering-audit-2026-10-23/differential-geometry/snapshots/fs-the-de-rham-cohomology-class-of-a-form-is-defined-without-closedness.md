---
id: "fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness"
kind: "false-statement"
title: "The de rham cohomology class of a form is defined without closedness"
deps: ["def-closed-and-exact-differential-forms", "def-de-rham-cohomology", "thm-local-coordinate-formula-for-the-exterior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

False claim: every smooth differential form represents a de Rham cohomology class.

## Facts & Assumptions

**Given:** The smooth one-form $\alpha=x\,dy$ on $\mathbb R^2$.

[F1] [[def-closed-and-exact-differential-forms]]: For the complex def-de-rham-cochain-complex, put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$. If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by thm-the-exterior-derivative-squares-to-zero, so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

[F2] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

## Refutation

**Proof technique:** direct.

1.1 The coordinate formula gives $d\alpha=dx\wedge dy$, whose value on $(\partial_x,\partial_y)$ is $1$. Thus $d\alpha\ne0$. [F3, given]

2.1 A class in $H^1$ must be represented by an element of $Z^1=\ker d$. The displayed smooth form is outside that numerator, so $[\alpha]$ is not a de Rham class. [F1, F2, step 1.1] ∎

## Source locator

Lee, p.441, definition of the cycle quotient; the witness is calculated locally.
