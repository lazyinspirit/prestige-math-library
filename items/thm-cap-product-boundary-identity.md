---
id: "thm-cap-product-boundary-identity"
kind: "theorem"
title: "Cap product boundary identity"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cap-product-with-cohomology-first","def-singular-cochain-complex-with-coefficients","def-singular-boundary-operator"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher cap boundary formula p.239; Miller Lecture 34
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For $\varphi\in C^p(X;R)$, $c\in C_n(X;R)$, $p,n\ge0$, over a commutative unital ring,
$$\partial(\varphi\cap c)=(-1)^p\bigl(\varphi\cap\partial c-\delta\varphi\cap c\bigr).$$
Consequently cap induces an $R$-bilinear map
$$H^p(X;R)\otimes_R H_n(X;R)\longrightarrow H_{n-p}(X;R).$$
Negative chain groups are zero, and no AC is assumed.

## Facts & Assumptions

[F1] [[def-cap-product-with-cohomology-first]] evaluates on the front face, retains the back face, and is zero for $p>n$.

[F2] [[def-singular-cochain-complex-with-coefficients]] gives $\delta\varphi=\varphi\partial$ with positive sign.

[F3] [[def-singular-boundary-operator]] gives the alternating face boundary and zero degree-zero boundary.

## Proof

**Given:** $X,R,p,n,\varphi,c$ as stated. By bilinearity it suffices first to check the identity on a simplex $\sigma$.

1.1 Assume $n>p$. In $\varphi\cap\partial\sigma$, deleting vertex $i\le p$ yields $(-1)^i\varphi(\sigma[0,\ldots,\widehat i,\ldots,p+1])\sigma[p+1,\ldots,n]$; deleting $i>p$ yields $(-1)^i\varphi(\sigma[0,\ldots,p])\sigma[p,\ldots,\widehat i,\ldots,n]$. In $\delta\varphi\cap\sigma$, all terms are of the first form, now indexed by $0\le i\le p+1$. Subtracting cancels the terms with $i\le p$ and leaves $$\varphi(\sigma[0,\ldots,p])\left((-1)^p\sigma[p+1,\ldots,n]+\sum_{i=p+1}^n(-1)^i\sigma[p,\ldots,\widehat i,\ldots,n]\right).$$ Multiplying by $(-1)^p$ gives the alternating boundary of the retained back face, with its first face having sign $+1$ and subsequent signs $(-1)^{i-p}$. This is $\partial(\varphi\cap\sigma)$. [F1, F2, F3, given]

2.1 If $n=p$, cap is a zero-chain with zero boundary; both terms on the right are zero by the degree convention. If $n<p$, all terms are zero for the same reason. Step 1.1 also covers $p=0<n$: its deleted-initial-vertex term cancels against the first term of $\delta\varphi$, and the surviving term is the ordinary back-face boundary. The case $p=n=0$ was covered by $n=p$. Linearity extends these calculations to all chains. [F1, F2, F3, given]

3.1 For a cocycle $\varphi$ and cycle $c$ the boundary identity gives $\partial(\varphi\cap c)=0$. If the cycle changes by $\partial b$, then $\varphi\cap\partial b=(-1)^p\partial(\varphi\cap b)$ is a boundary. If the cocycle changes by $\delta u$, $|u|=p-1$, then applying the identity to $u,c$ gives $\delta u\cap c=(-1)^p\partial(u\cap c)$, again a boundary. For $p=0$ there is no $u$, since negative cochains are zero. Applying these two calculations successively covers changes in both variables; cycles and cocycles stay closed under these changes. Bilinearity descends and then factors through the tensor product. [F1, F2, step 1.1, step 2.1]

4.1 Empty spaces, zero chains/cochains and the zero ring give zero maps. Degenerate simplex restrictions satisfy the same face identities and cancellations. Point spaces retain higher unnormalized chains, to which step 1.1 applies unchanged. The endpoint cases and zero output degrees were treated in step 2.1. Every primitive in step 3.1 is an explicit cap of the supplied $u$ or $b$; no arbitrary selection or AC occurs. [F1, step 1.1, step 2.1, step 3.1] ∎
