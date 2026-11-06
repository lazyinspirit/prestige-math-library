---
id: lem-r2-conformal-warped-external-ricci-trace
kind: lemma
title: Conformal warped-product external Ricci trace
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Juan Maldacena and Carlos Nuñez, Supergravity description of field theories on curved manifolds and a no go theorem, arXiv:hep-th/0007018v2"
      url: "https://arxiv.org/pdf/hep-th/0007018v2"
      locator: "§6.1, equations (31)–(33), PDF pp. 22–23; the external Ricci block for the conformal product ansatz."
    - title: "Sergio Cecotti, A Geometric Introduction to F-Theory, SISSA lecture notes"
      url: "https://people.sissa.it/~cecotti/FNOTES10.pdf"
      locator: "Chapter 14, equations (14.4)–(14.6), PDF pp. 117–118; warped external Ricci components and their trace."
---

## Statement

Let $D>2$, $1\le d<D$, and $q=D-d$. Let $U\subset\mathbb R^d$ and $V\subset\mathbb R^q$ be coordinate domains. Let $h_{\mu\nu}(x)$ be a smooth nondegenerate Lorentzian metric on $U$ with $\operatorname{Ric}(h)_{\mu\nu}=\lambda h_{\mu\nu}$ for a constant $\lambda$, and let $\widehat g_{mn}(y)$ be a smooth positive-definite metric on $V$. Use the product metric $\bar g=h\oplus\widehat g$ on $U\times V$. For $\omega\in C^\infty(V,\mathbb R)$ put $\Omega=e^\omega$ and $g=\Omega^2\bar g$, where all Greek and lower-case Latin indices range over $U$ and $V$, respectively. Define $\widehat\Delta f=\widehat g^{mn}(\partial_m\partial_n f-\widehat\Gamma^p{}_{mn}\partial_p f)$ and $|d\omega|_{\widehat g}^2=\widehat g^{mn}\partial_m\omega\,\partial_n\omega$. In product coordinates use $\Gamma^P{}_{MN}=\tfrac12g^{PQ}(\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN})$ and $\operatorname{Ric}_{MN}=\partial_P\Gamma^P{}_{MN}-\partial_N\Gamma^P{}_{MP}+\Gamma^P{}_{PQ}\Gamma^Q{}_{MN}-\Gamma^P{}_{NQ}\Gamma^Q{}_{MP}$. Then

$$\operatorname{Ric}(g)_{\mu\nu}=\left(\lambda-\widehat\Delta\omega-(D-2)|d\omega|_{\widehat g}^2\right)h_{\mu\nu},$$

and consequently

$$\widehat\Delta\omega+(D-2)|d\omega|_{\widehat g}^2 =\frac{\widehat\Delta(\Omega^{D-2})}{(D-2)\Omega^{D-2}}.$$

These are local coordinate identities and use no field equation or physical premise.

## Statement references

[Maldacena and Nuñez, §6.1, equations (31)–(33)](https://arxiv.org/pdf/hep-th/0007018v2)

[Cecotti, Chapter 14, equations (14.4)–(14.6)](https://people.sissa.it/~cecotti/FNOTES10.pdf)

## Facts & Assumptions

**Given:** The product-coordinate metric data, the explicit Christoffel and Ricci conventions in the Statement, and the smooth real function $\omega$ depending only on $y$.

[A1] The external block $h_{\mu\nu}$ is independent of $y$, the internal block $\widehat g_{mn}$ is independent of $x$, and $\partial_\mu\omega=0$.

## Proof

1.1 Put $u_M=\partial_M\omega$ and $\bar\nabla$ for the product-metric connection. Direct substitution in the Christoffel formula gives $\Gamma^P{}_{MN}(g)-\bar\Gamma^P{}_{MN}=C^P{}_{MN}:=\delta^P_Mu_N+\delta^P_Nu_M-\bar g_{MN}\bar g^{PQ}u_Q$. This tensor is symmetric in $M,N$. Also, in $\nabla^g_M(e^{2\omega}\bar g_{NP})$, the derivative of $e^{2\omega}$ contributes $2e^{2\omega}u_M\bar g_{NP}$ and the two $C$ terms contribute its negative; the $\bar\nabla\bar g$ terms vanish. Thus these Christoffel symbols define the torsion-free metric-compatible connection of $g$. [given, A1, algebra]

2.1 Inserting $\Gamma=\bar\Gamma+C$ into the Ricci formula in the Statement gives $\operatorname{Ric}(g)_{MN}=\operatorname{Ric}(\bar g)_{MN}-(D-2)\bar\nabla_Mu_N-\bar g_{MN}\bar\nabla_Pu^P+(D-2)(u_Mu_N-\bar g_{MN}|u|_{\bar g}^2)$. The derivative contraction follows from $\bar\nabla_PC^P{}_{MN}=\bar\nabla_Mu_N+\bar\nabla_Nu_M-\bar g_{MN}\bar\nabla_Pu^P$ and $C^P{}_{MP}=D u_M$; symmetry of the Hessian of $\omega$ combines the first two terms. For the quadratic contraction, $C^P{}_{PQ}C^Q{}_{MN}=D(2u_Mu_N-\bar g_{MN}|u|_{\bar g}^2)$ and $C^P{}_{NQ}C^Q{}_{MP}=(D+2)u_Mu_N-2\bar g_{MN}|u|_{\bar g}^2$. The product Ricci block is $\operatorname{Ric}(\bar g)_{\mu\nu}=\lambda h_{\mu\nu}$, while [A1] makes the external Hessian and external $u$ components zero. Substitution yields the asserted external Ricci formula. [given, A1, step 1.1, algebra]

3.1 For $f=e^{(D-2)\omega}=\Omega^{D-2}$, the chain rule gives $\widehat\Delta f=(D-2)f\,\widehat\Delta\omega+(D-2)^2f|d\omega|_{\widehat g}^2$. Divide by $(D-2)f>0$ to obtain the second identity. [given, algebra] ∎
