---
id: "cor-singular-cohomology-is-homotopy-invariant"
kind: "corollary"
title: "Singular cohomology is homotopy invariant"
deps: ["prop-singular-chains-are-covariantly-functorial", "def-real-singular-cohomology", "thm-singular-chain-homotopy-formula"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 6; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Homotopic continuous maps $f,g:X\to Y$ induce the same pullback on $H^k_{\mathrm{sing}}(-;\mathbb R)$ in every integer degree. Consequently a homotopy equivalence induces an isomorphism of real singular cohomology.

## Facts & Assumptions

**Given:** A supplied continuous homotopy $H:X\times[0,1]\to Y$ from $f$ to $g$.

[F1] Postcomposition is a real-linear chain map and respects composition and identities ([[prop-singular-chains-are-covariantly-functorial]]).

[F2] Real cohomology is the quotient of cocycles by coboundaries ([[def-real-singular-cohomology]]).

[F3] The supplied signed prism has $g_\#-f_\#=\partial P+P\partial$, with the zero-degree formula $g_{\#,0}-f_{\#,0}=\partial P_0$ ([[thm-singular-chain-homotopy-formula]]).

## Proof

1.1 Set $f^*\varphi=\varphi f_\#$. The chain equation [F1] gives $\delta f^*=f^*\delta$, hence $f^*$ preserves cocycles and coboundaries and induces a real-linear map on the quotient [F2]. The generator identity and composition laws in [F1] become $\operatorname{id}^*=\operatorname{id}$ and $(gf)^*=f^*g^*$. [F1, F2, algebra]

1.2 Put $K^k\varphi=\varphi P_{k-1}$ for $k\ge1$ and $K^k=0$ for $k\le0$. For a degree-$k$ cochain and $c\in C_k(X;\mathbb R)$, [F3] gives $(g^*-f^*)\varphi(c)=\varphi(\partial P_kc+P_{k-1}\partial c)=(K^{k+1}\delta\varphi+\delta K^k\varphi)(c)$. In degree zero the second summand is zero, exactly as in [F3]; negative degrees are zero. [F2, F3, algebra]

2.1 If $\varphi$ is a cocycle, step 1.2 says $g^*\varphi-f^*\varphi=\delta K^k\varphi$, so their classes coincide. If $f:X\to Y$ has a supplied homotopy inverse $h:Y\to X$, apply this equality to $hf\simeq\operatorname{id}_X$ and $fh\simeq\operatorname{id}_Y$; step 1.1 yields $f^*h^*=\operatorname{id}$ and $h^*f^*=\operatorname{id}$. Thus $f^*$ is an isomorphism. [F2, step 1.1, step 1.2, algebra]

3.1 Empty spaces and negative groups have only zero maps, and on a point the identity acts identically on $H^0=\mathbb R$. Constant homotopies and degenerate simplices need no normalization: [F3] applies to their full signed prisms as well. Only the given homotopy and its explicit finite prism are used, so no AC is needed. [F2, F3, step 1.2, step 2.1] ∎
