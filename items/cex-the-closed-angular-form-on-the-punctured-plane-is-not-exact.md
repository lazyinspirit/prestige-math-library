---
id: "cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact"
kind: "counterexample"
title: "The closed angular form on the punctured plane is not exact"
deps: ["def-closed-and-exact-differential-forms", "thm-local-coordinate-formula-for-the-exterior-derivative", "cor-a-nonzero-period-obstructs-exactness-and-bounding", "thm-newton-leibniz-with-interior-derivative"]
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

## Statement refuted

Every closed smooth one-form on the punctured plane is exact.

## Facts & Assumptions

**Given:** The witness $\alpha=(-y\,dx+x\,dy)/(x^2+y^2)$ on $\mathbb R^2\setminus\{0\}$.

[F1] [[def-closed-and-exact-differential-forms]]: For the complex def-de-rham-cochain-complex, put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$. If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by thm-the-exterior-derivative-squares-to-zero, so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F4] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Counterexample

**Proof technique:** direct.

1.1 The denominator is positive. Writing its coefficients as $a=-y/(x^2+y^2)$ and $b=x/(x^2+y^2)$ gives $\partial_xb=\partial_ya=(y^2-x^2)/(x^2+y^2)^2$. Hence $d\alpha=(\partial_xb-\partial_ya)dx\wedge dy=0$. [F1, F2, given]

2.1 On $\gamma(t)=(\cos t,\sin t)$, $\gamma^*\alpha=dt$ and its integral is $2\pi$. If $\alpha=df$, then the chain rule and the fundamental theorem would make this integral $f(\gamma(2\pi))-f(\gamma(0))=0$. Thus the closed witness is not exact. [F4, step 1.1] ∎

## Source locator

Lee, angular form (17.1), p.441; the zero derivative and nonzero loop period are calculated above by Newton–Leibniz.
