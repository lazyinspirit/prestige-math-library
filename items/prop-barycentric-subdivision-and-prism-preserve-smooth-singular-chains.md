---
id: "prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains"
kind: "proposition"
title: "Barycentric subdivision and prism preserve smooth singular chains"
deps: ["def-smooth-singular-chain-and-cochain-complexes", "def-barycentric-subdivision-chain-operator", "def-barycentric-subdivision-prism-homotopy", "thm-singular-chain-homotopy-formula", "def-the-standard-smooth-step-function", "prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 15; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Barycentric subdivision $S$ and its subdivision chain homotopy $T$ preserve $C_\bullet^\infty(M;\mathbb R)$, for manifolds $M$ possibly with boundary. More generally, a homotopy prism preserves smooth chains if the composition of the homotopy with each supplied smooth-simplex extension extends smoothly into the target on a neighbourhood of $\Delta^k\times[0,1]$ in $A^k\times\mathbb R$. A smooth homotopy on the closed time interval always gives such a prism after flattening time at both endpoints. Its chain-homotopy identity retains the same endpoint maps.

## Facts & Assumptions

**Given:** A smooth simplex $\sigma:\Delta^k\to M$ with extension $\bar\sigma:O\to M$.

[F1] Smooth chains retain the affine-neighbourhood extension convention ([[def-smooth-singular-chain-and-cochain-complexes]]).

[F2] Subdivision and its homotopy are finite compositions with affine domain simplices ([[def-barycentric-subdivision-chain-operator]], [[def-barycentric-subdivision-prism-homotopy]]).

[F3] The homotopy prism is a signed finite sum with chain identity $g_\#-f_\#=\partial P+P\partial$ ([[thm-singular-chain-homotopy-formula]]).

[F4] The standard step $s:\mathbb R\to[0,1]$ is smooth, zero for $t\le0$ and one for $t\ge1$ ([[def-the-standard-smooth-step-function]]).

## Proof

1.1 If $a:\Delta^j\to\Delta^k$ is affine, it extends to an affine map $\bar a:A^j\to A^k$. The open inverse image $\bar a^{-1}(O)$ contains $\Delta^j$, and $\bar\sigma\bar a$ extends $\sigma a$ smoothly into $M$. Each simplex in $S\sigma$ and $T\sigma$ has this form: coning affine simplices appends a fixed barycenter vertex and so remains affine, at every stage of the finite recursion [F2]. Therefore both operators preserve smooth chains. Their affine images stay in $\Delta^k$, so they also preserve any specified image-containing subset of $M$. [given, F1, F2]

2.1 Let $B$ be a smooth target-valued extension of $(x,t)\mapsto H(\sigma(x),t)$ to an open neighbourhood $W$ of $\Delta^k\times[0,1]$. Each prism simplex $\lambda_i:\Delta^{k+1}\to\Delta^k\times[0,1]$ is affine. Its affine extension has open inverse image of $W$ containing $\Delta^{k+1}$, and $B\lambda_i$ is the required extension into the target. Thus every term of the signed prism is smooth. The equality [F3] is an equality in this subcomplex because every term is now in it. [F1, F3, step 1.1]

3.1 For a smooth homotopy $H:M\times[0,1]\to N$, with smoothness interpreted by local coordinate extensions also at the time endpoints, replace it by $\widehat H(p,t)=H(p,s(t))$ for all real $t$. This is smooth: near an endpoint use a local coordinate extension of $H$ and compose with $(p,t)\mapsto(p,s(t))$; near an interior time ordinary smooth composition suffices. It is target-valued for every real $t$ because $s(t)\in[0,1]$. Then $(x,t)\mapsto\widehat H(\bar\sigma(x),t)$ is smooth on $O\times\mathbb R$ and satisfies step 2.1. Its endpoint maps are exactly those of $H$, so [F3] gives the same difference of induced chain maps. [F1, F3, F4, step 2.1]

4.1 The qualification in step 2.1 is necessary for an unmodified prism with a boundary target. Take $M$ a point and $H(t)=t$ into $N=[0,\infty)$. This is a smooth homotopy on the interval, but its prism is the path $t\mapsto t$, which has no smooth target-valued extension across $0$: any such nonnegative extension has a local minimum at $0$ and derivative zero, whereas its right derivative would be one. Time flattening avoids this obstruction. In degree zero $S=1$ and $T=0$; the flattened homotopy prism is still a smooth path. Empty chains and empty domains give zero operators, repeated affine vertices are allowed, and all formulas are finite and choice-free. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
