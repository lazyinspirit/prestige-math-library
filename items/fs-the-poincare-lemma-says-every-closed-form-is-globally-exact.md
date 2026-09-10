---
id: "fs-the-poincare-lemma-says-every-closed-form-is-globally-exact"
kind: "false-statement"
title: "The poincare lemma says every closed form is globally exact"
deps: ["thm-poincare-lemma-for-differential-forms-on-star-shaped-domains", "def-closed-and-exact-differential-forms", "thm-local-coordinate-formula-for-the-exterior-derivative", "thm-newton-leibniz-with-interior-derivative", "cor-a-nonzero-period-obstructs-exactness-and-bounding"]
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

False claim: the Poincaré lemma makes every closed positive-degree form globally exact on every smooth manifold.

## Facts & Assumptions

**Given:** $\alpha=(-y\,dx+x\,dy)/(x^2+y^2)$ on $\mathbb R^2\setminus\{0\}$.

[F1] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

[F2] [[def-closed-and-exact-differential-forms]]: For the complex def-de-rham-cochain-complex, put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$. If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by thm-the-exterior-derivative-squares-to-zero, so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F4] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Refutation

**Proof technique:** direct.

1.1 Put $r^2=x^2+y^2$. The coefficients are smooth since $r^2>0$, and $\partial_x(x/r^2)=(y^2-x^2)/r^4=\partial_y(-y/r^2)$. Thus $d\alpha=0$. [F2, F3, given]

2.1 For $\gamma(t)=(\cos t,\sin t)$, $0\le t\le2\pi$, substitution gives $\gamma^*\alpha=(\sin^2t+\cos^2t)dt=dt$. If $\alpha=df$, the chain rule and fundamental theorem would give $2\pi=\int_0^{2\pi}\gamma^*\alpha=f(\gamma(2\pi))-f(\gamma(0))=0$. This contradiction proves nonexactness. The Poincaré lemma has a star-shaped-domain hypothesis, which this global witness does not satisfy. [F1, F4, step 1.1] ∎

## Source locator

Lee, formula (17.1), p.441; direct coordinate differentiation and the fundamental theorem prove the obstruction without importing a later example.
