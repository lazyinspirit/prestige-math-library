---
id: "ex-torus-from-one-handle-of-each-index"
kind: "example"
title: "Torus from one 0-handle, two 1-handles and one 2-handle"
deps: ["thm-one-critical-point-handle-attachment"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: published
origin: "pipeline"
proof_strategy: "coordinate Hessian calculation"
generation:
  role: "example"
---

## Example

Assume $\mathrm{AC}_\omega$. On $T^2=S^1\times S^1$, let $f(\theta,\phi)=-\cos\theta-2\cos\phi$. It yields one $0$-handle, two $1$-handles and one $2$-handle, with critical values $-3,-1,1,3$.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

## Verification

**Given:** The objects and hypotheses in the example.

1.1 The critical equations are $\sin\theta=0$ and $2\sin\phi=0$. Modulo $2\pi$ there are four solutions: $(0,0),(\pi,0),(0,\pi),(\pi,\pi)$. The Hessian is $\operatorname{diag}(\cos\theta,2\cos\phi)$, giving respectively indices $0,1,1,2$ and values $-3,-1,1,3$. [given, algebra]

2.1 The torus is compact. Choose successive regular levels, for example $-4,-2,0,2,4$. Each intervening closed band contains exactly one of these nondegenerate points. Applying the handle theorem to each band gives the stated counts from the empty sublevel to the full torus. [F1, step 1.1] ∎
