---
id: "cor-smoothly-homotopic-maps-induce-the-same-de-rham-map"
kind: "corollary"
title: "Smoothly homotopic maps induce the same de rham map"
deps: ["thm-de-rham-homotopy-formula-for-a-smooth-homotopy", "thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology", "thm-chain-homotopic-maps-induce-the-same-map-on-homology"]
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

Smoothly homotopic smooth maps induce equal maps on de Rham cohomology in every degree.

## Facts & Assumptions

**Given:** Smooth maps $f_0,f_1:M\to N$ joined by a smooth homotopy $F$.

[F1] [[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]]: If $F:M\times[0,1]\to N$ is smooth up to the endpoints and $F_t(x)=F(x,t)$, then $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.

[F2] [[thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology]]: For a smooth $F:M\to N$, the formula $F^*[\omega]=[F^*\omega]$ defines a linear map $H^k_{\mathrm{dR}}(N)\to H^k_{\mathrm{dR}}(M)$ for every integer $k$.

[F3] [[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]: If $f,g:C_\bullet\to D_\bullet$ are chain-homotopic chain maps, then for every $n\in\mathbb Z$, $$H_n(f)=H_n(g):H_n(C)\to H_n(D).$$

## Proof

**Proof technique:** direct.

1.1 For every closed $k$-form $\omega$, the homotopy formula gives $f_1^*\omega-f_0^*\omega=d(KF^*\omega)$, since $d\omega=0$. For $k=0$ the primitive term is zero, so the functions themselves agree. [F1, given]

2.1 The two pullbacks therefore give the same quotient class. Equivalently, under $C_n=\Omega^{-n}$ the operator $KF^*$ has degree $+1$ and the formula in [F1] is the chain-homotopy identity; the chain-homotopy theorem gives equality on $H_{-k}=H^k$. The well-defined maps on those classes are exactly the induced de Rham maps. [F1, F2, F3, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.
