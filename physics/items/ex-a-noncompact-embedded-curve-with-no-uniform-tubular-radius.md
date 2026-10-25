---
id: ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius
kind: example
title: "A noncompact embedded curve with no uniform tubular radius"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-normal-addition-map-for-a-euclidean-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

The graph $\gamma(t)=(t,\sin(t^2))$, $t\in\mathbb R$, is a noncompact smooth
embedded curve. For no constant $r>0$ is the Euclidean normal addition map a
diffeomorphism on all normal vectors of length less than $r$.

## Facts & Assumptions

**Given:** The graph $\gamma(t)=(t,f(t))$ with $f(t)=\sin(t^2)$, and its unit
normal $\nu(t)=(-f'(t),1)/\sqrt{1+f'(t)^2}$.

## Verification
**Proof technique:** direct.

1.1 The first coordinate of $\gamma$ is $t$, so $\gamma$ is injective with a continuous inverse on its image; also $\gamma'(t)=(1,f'(t))\ne0$. Thus it is a smooth embedding, and its image is noncompact because its first-coordinate projection is all of $\mathbb R$. [given, algebra]

1.2 For $k\ge0$ put $t_k=\sqrt{\pi/2+2\pi k}$. Direct differentiation gives $f'(t_k)=0$ and $f''(t_k)=-4t_k^2$, so $|f''(t_k)|\to\infty$. [given, algebra]

2.1 In the normal-bundle coordinates $(t,v)$, normal addition is $E(t,v)=\gamma(t)+v\nu(t)$. At $t_k$, $\nu(t_k)=(0,1)$ and $\nu'(t_k)=(-f''(t_k),0)$, so $\partial_tE(t_k,v)=(1-vf''(t_k),0)$ and $\partial_vE(t_k,v)=(0,1)$. At $v_k=1/f''(t_k)$ the differential of $E$ is singular. [step 1.2, algebra]

3.1 Given $r>0$, choose $k$ with $|v_k|=1/(4t_k^2)<r$. Then $(t_k,v_k)$ lies inside the constant-radius normal tube, but its normal addition map is not a local diffeomorphism there. Hence that tube cannot be a tubular diffeomorphism for any fixed $r>0$. [step 2.1, algebra] ∎
