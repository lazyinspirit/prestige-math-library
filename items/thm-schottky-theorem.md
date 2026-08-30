---
id: thm-schottky-theorem
kind: theorem
title: "Schottky's theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-holomorphic-logarithms-for-two-omitted-values, thm-bloch-theorem, cor-holomorphic-roots-homologically-simply-connected-domains, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-holomorphic-logarithms-homologically-simply-connected-domains]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, Theorem 11"
      url: "https://arxiv.org/pdf/1506.07019"
    - title: "K. Stoll, Introductory Complex Analysis, Lemma 16.6 and Theorem 16.10"
      url: "https://mathe2.uni-bayreuth.de/stoll/lecture-notes/IntroductoryComplexAnalysis.pdf"
---

## Statement

For every $R>0$ and every $0<r<1$ there exists a constant $C(R,r)>0$ such that
every holomorphic map $f:\mathbb D\to\mathbb C\setminus\{0,1\}$ with
$|f(0)|\le R$ satisfies

$$|f(z)|\le C(R,r)\qquad(|z|\le r).$$

## Facts & Assumptions

**Given:** Real numbers $R>0$ and $0<r<1$, and a holomorphic map
$f:\mathbb D\to\mathbb C\setminus\{0,1\}$ with $|f(0)|\le R$.

[L1] The functions $f$ and $1-f$ admit holomorphic logarithms on $\mathbb D$
([[lem-holomorphic-logarithms-for-two-omitted-values]]).

[L2] The unit disc is homologically simply connected, so holomorphic roots and
logs exist there for nowhere-zero functions
([[prop-star-shaped-plane-domains-are-homologically-simply-connected]],
[[cor-holomorphic-roots-homologically-simply-connected-domains]],
[[thm-holomorphic-logarithms-homologically-simply-connected-domains]]).

[L3] Bloch's theorem gives an absolute lower bound $b:=1/48$ for normalized
Bloch discs ([[thm-bloch-theorem]]).

[L4] The complex exponential satisfies $e^{u+v}=e^u e^v$
([[thm-complex-exponential-addition-and-real-extension]]) and is entire
([[thm-complex-exponential-is-entire-with-derivative-itself]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $h$ with $e^{2\pi i h}=f$. Since $f$ omits $1$, the function $h$ omits every integer. In particular $h$ and $h-1$ are nowhere zero, so [L2] gives holomorphic $u,v$ on $\mathbb D$ with $u^2=h$ and $v^2=h-1$. Then $(u-v)(u+v)=1$, so $u-v$ is nowhere zero, and [L2] gives a holomorphic $g$ with $e^g=u-v$. [L1, L2, given, construct]

2.1 Using [L4] and $(u-v)(u+v)=1$, one gets $u+v=e^{-g}$ and hence $2u=e^g+e^{-g}=2\cosh g$. Therefore $u=\cosh g$, $h=u^2=\cosh^2 g=(1+\cosh(2g))/2$, and $f=e^{2\pi i h}=-e^{\pi i\cosh(2g)}$. [L4, step 1.1, algebra]

2.2 Put $R_0:=\max\{2,R\}$. First suppose $R_0^{-1}\le |f(0)|\le R_0$. In step 1.1 choose the logarithm $h$ so that $|\operatorname{Re}h(0)|\le1/2$, which is possible because $h$ is determined up to an integer. Since $|f(0)|=e^{-2\pi\operatorname{Im}h(0)}$, this also gives $|\operatorname{Im}h(0)|\le(\log R_0)/(2\pi)$ and hence $|h(0)|\le H(R_0)$ for a fixed bound $H(R_0)$. Now $|u(0)|=\sqrt{|h(0)|}$ and $|v(0)|=\sqrt{|h(0)-1|}$, so for $P(R_0):=\sqrt{H(R_0)}+\sqrt{H(R_0)+1}$ one has $|u(0)-v(0)|\le P(R_0)$. Because $(u-v)(u+v)=1$ and $|u(0)+v(0)|\le P(R_0)$, one also has $|u(0)-v(0)|\ge P(R_0)^{-1}$. Finally choose the logarithm $g$ of $u-v$ so that $|\operatorname{Im}g(0)|\le\pi$; then $|\operatorname{Re}g(0)|\le\log P(R_0)$ and therefore $|g(0)|\le A(R_0):=\log P(R_0)+\pi$. [step 1.1, choose, algebra]

3.1 Let $\alpha_n:=\tfrac12\operatorname{arcosh}(2n+1)$ for $n\ge0$, and set $E:=\{\,\pm\alpha_n+m\pi i:n\ge0,\ m\in\mathbb Z\,\}\cup\{\,\pm\alpha_n+(m+\tfrac12)\pi i:n\ge0,\ m\in\mathbb Z\,\}$. If $g(z)=\zeta\in E$, then $\cosh(2\zeta)$ is an odd integer, so step 2.1 gives $f(z)=1$, impossible. Hence $g(\mathbb D)\cap E=\varnothing$. The horizontal gaps between consecutive $\alpha_n$ are less than $1$, and the two vertical translates reduce the vertical gap to $\pi/2$, so every open Euclidean disc of radius $2$ in $\mathbb C$ meets $E$. [step 2.1, algebra]

4.1 Fix $w\in\mathbb D$ and rescale $g$ from the disc $D(w,1-|w|)$ to the unit disc. If $|g'(w)|>2/(b(1-|w|))$, then [L3] would produce a schlicht disc of radius greater than $2$ inside $g(\mathbb D)$, contradicting step 3.1. Therefore $|g'(w)|\le2/(b(1-|w|))$ for every $w\in\mathbb D$. [L3, step 3.1, assume-contra, discharge-contradiction]

5.1 If $|f(0)|\ge R_0^{-1}$, integrate step 4.1 radially and use step 2.2 to get $|g(z)|\le A(R_0)+(2/b)\log\!\bigl(1/(1-r)\bigr)$ for $|z|\le r$. The formula in step 2.1 then bounds $|f(z)|$ by a constant depending only on $R$ and $r$. If $|f(0)|<R_0^{-1}\le1/2$, apply the same construction to $1-f$: its center value lies between $1/2$ and $3/2$, so the preceding case with center parameter $2$ uniformly bounds $|1-f(z)|$ and hence $|f(z)|\le1+|1-f(z)|$. Taking the larger of the two bounds gives the required $C(R,r)$. [step 2.1, step 4.1, step 2.2, cases, algebra] ∎
