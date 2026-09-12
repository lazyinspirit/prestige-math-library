---
id: "lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains"
kind: "lemma"
title: "The de Rham map is an isomorphism on convex coordinate domains"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-naturality-of-the-de-rham-map","lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds","prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains","def-smooth-singular-chain-and-cochain-complexes","def-de-rham-integration-cochain-map","prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

On a nonempty convex open subset $V\subseteq\mathbb R^n$, or a nonempty convex relatively open subset $V\subseteq\mathbb H^n$, the de Rham integration map
$$I_V:H^k_{\mathrm{dR}}(V)\longrightarrow H_\infty^k(V;\mathbb R)$$
is an isomorphism in every degree. Both sides are $\mathbb R$ in degree zero, identified by the value on the one component, and zero in positive and negative degrees. The same holds on a manifold coordinate domain diffeomorphic to such a $V$. No choice assumption is needed.

## Facts & Assumptions

[F1] [[prop-naturality-of-the-de-rham-map]] gives naturality of integration on cochains and cohomology, also for boundary manifolds.

[F2] [[lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds]] gives $H_1^*-H_0^*=dL_H+L_Hd$, with a smooth primitive operator also at a spatial boundary.

[F3] [[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]] supplies a smooth homotopy prism after flattening time, with the unchanged identity $H_{1\#}-H_{0\#}=\partial P+P\partial$.

[F4] [[def-smooth-singular-chain-and-cochain-complexes]] retains every simplex, including the unique constant simplex in each degree on a point, with the signed face differential and its dual.

[F5] [[def-de-rham-integration-cochain-map]] evaluates a zero-form on each point simplex; in degree zero this is evaluation, not the zero map.

[F6] [[prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps]] supplies the chain, cochain and cohomology maps of the constant projection and inclusion of a point.

## Proof

**Given:** A nonempty convex domain $V$ of either kind in the statement. Fix one $c\in V$, and let $p:V\to\{c\}$ and $i:\{c\}\to V$ be projection and inclusion.

1.1 Set $H(x,t)=c+t(x-c)$. Convexity makes this target-valued for $0\le t\le1$; its polynomial coordinate expression gives all required local extensions. Its endpoint maps are $ip$ and the identity. For a closed form $\omega$ of positive degree, the constant-map pullback is zero because its derivative is zero. Thus [F2] gives $\omega=d(L_H\omega)$. For a closed zero-form $f$, the same identity has $L_Hf=0$ and $df=0$, so $f-f(c)=0$. Conversely constant functions are closed. Hence de Rham cohomology is zero in positive degrees and is $\mathbb R$ in degree zero, with evaluation at $c$ inverse to the constant-function map. [F2, given]

1.2 On the point $\{c\}$ there is exactly one simplex $s_j$ in every degree $j\ge0$. For $j\ge1$, its boundary is $(\sum_{a=0}^j(-1)^a)s_{j-1}$, equal to $s_{j-1}$ when $j$ is even and zero when $j$ is odd. Therefore the cochain group is $\mathbb R$ in each nonnegative degree, with $\delta^k=0$ for even $k$ and $\delta^k=\operatorname{id}$ for odd $k$. This unnormalized complex has $H^0=\mathbb R$ and $H^k=0$ for $k>0$: in positive odd degree the kernel is zero, and in positive even degree the entire kernel is the preceding image. [F4, given]

2.1 The unmodified radial homotopy need not extend into a boundary target beyond the time endpoints. Use the time-flattened prism guaranteed by [F3] instead. It has the same endpoint maps and gives a degree-one chain operator $P$ with $$\operatorname{id}_\#-(ip)_\#=\partial P+P\partial.$$ For a cochain $\varphi$ of degree $k\ge1$ set $D\varphi=\varphi P_{k-1}$, and set $D=0$ in degree zero. Direct evaluation gives $$\delta D\varphi+D\delta\varphi=\varphi-(ip)^*\varphi.$$ In degree zero the first term is zero and the second is $\varphi\partial P_0$, so this identity still holds. No dual exactness theorem or selected cochain extension is used. [F3, F4, F6, step 1.1]

3.1 Since $pi=\operatorname{id}_{\{c\}}$, [F6] gives $i^*p^*=\operatorname{id}$ on cochains of the point. Step 2.1 gives $p^*i^*=\operatorname{id}$ on cohomology of $V$, because the difference on any cocycle is the coboundary $\delta D\varphi$. Thus $i^*,p^*$ are inverse cohomology maps. More explicitly in positive degree, for a cocycle $\varphi$ let $\beta=i^*\varphi$. In odd degree $\beta=0$ by step 1.2, so take $\gamma=0$; in positive even degree take the preceding-degree point cochain with the same scalar value as $\beta$, so $\delta\gamma=\beta$. Then $$\varphi=\delta\bigl(D\varphi+p^*\gamma\bigr).$$ This proves positive-degree vanishing without a representative-selection principle. In degree zero, evaluation at $c$ and constant cochains give the inverse identifications with $\mathbb R$. [F4, F6, step 2.1, step 1.2]

4.1 By [F5], integration sends the constant function $a$ to the cochain with value $a$ on every point simplex. Thus the degree-zero map is the identity under the two identifications with $\mathbb R$ in steps 1.1 and 3.1. In every positive degree both groups vanish, so their unique linear map is an isomorphism; negative degrees are zero by the complex conventions. A coordinate diffeomorphism and its inverse give inverse pullback maps in both theories, and [F1] transports these conclusions to the coordinate domain. [F1, F4, F5, step 1.1, step 3.1]

5.1 Nonemptiness is used only to fix one contraction centre; the empty domain instead has zero groups on both sides and still a comparison isomorphism, but not the asserted degree-zero identification with $\mathbb R$. For $n=0$ the nonempty domain is a point, already calculated in step 1.2, and all positive-degree forms vanish. Degree one is covered by the zero odd-degree kernel at the point and the explicit primitive formulas. Constant and degenerate simplices are retained throughout. The endpoint flattening in step 2.1 preserves $c$ and $x$, and [F2] handles both endpoints for forms. A single centre and explicit operators suffice; no choices over families of domains or cohomology classes are made. [F2, F3, F4, step 1.1, step 1.2, step 3.1, step 4.1] ∎
