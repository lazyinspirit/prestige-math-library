---
id: "thm-zero-th-de-rham-cohomology-is-locally-constant-functions"
kind: "theorem"
title: "Zero th de rham cohomology is locally constant functions"
deps: ["def-de-rham-cohomology", "thm-local-coordinate-formula-for-the-exterior-derivative", "thm-newton-leibniz-with-interior-derivative"]
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

$H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

## Facts & Assumptions

**Given:** A smooth real function $f$ on $M$; $B^0=0$.

[F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F3] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Proof

**Proof technique:** direct.

1.1 In a coordinate ball, $df=\sum_i\partial_i f\,dx^i$. If $df=0$, for points $x,y$ in that ball set $h(t)=f(x+t(y-x))$. The chain rule gives $h\prime(t)=\sum_i(y_i-x_i)\partial_i f=0$; the fundamental theorem gives $f(y)-f(x)=\int_0^1 0\,dt=0$. In dimension zero each coordinate ball is a singleton, so the same constancy conclusion holds. [F2, F3, given]

2.1 Conversely, a locally constant function is smooth and has zero coordinate derivatives, hence $df=0$. Since $B^0=0$, the quotient in degree zero identifies each such function with itself, preserving addition and multiplication. [F1, F2, step 1.1]

3.1 If $M$ is nonempty and connected, fix $p\in M$. The level set $f^{-1}(f(p))$ and its complement are open by local constancy; connectedness forces the complement empty. Thus $f$ is the constant $f(p)$, and $a\mapsto(p\mapsto a)$ is the asserted algebra isomorphism. On the empty manifold the function space is zero. [step 1.1, step 2.1, given] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
