---
id: lem-kam-affine-taylor-fourier-truncation
kind: lemma
title: "Affine Taylor splitting in the actions and conservative Fourier truncation of a small perturbation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-directional-and-partial-derivatives, def-interval, def-metric-ball]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §3-§4 (the affine splitting $Q=P(0,\\vartheta)+P_I(0,\\vartheta)I$, the Taylor estimate $|P-Q|\\le C\\eta^2\\varepsilon$ and the truncation $R=T_KQ$), PDF pp. 14-22."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.1 (analytic estimates in the strip norm) and §3.6 (canonical perturbation theory: Taylor expansion in the actions and truncation), printed pp. 24-31 and 49-58."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $r>0$, $s>0$, $h>0$, let $\Omega\subseteq\mathbb R^n$, let
$K\ge0$, $0<\eta\le1/4$, $0<\sigma\le\min(1,s/4)$, and let $P$ be holomorphic
on $D_{r,s,h}(\Omega)$ with $|P|_{r,s,h}\le\varepsilon$
([[def-holomorphic-kam-domain-and-diophantine-labels]]). Define the **affine
action-Taylor polynomial**

$$Q(I,\vartheta,\nu):=P(0,\vartheta,\nu)+\sum_{j=1}^n \partial_{I_j}P(0,\vartheta,\nu)\,I_j ,$$

and the **truncated perturbation** $R:=T_KQ$ (Fourier cutoff in $\vartheta$).
Then:

1. **Taylor remainder.** $|P-Q|_{2\eta r,s,h}\le C\eta^2\varepsilon$ with a
   constant $C=C(n)$.
2. **Affine structure.** $Q$ and $R$ are holomorphic on $D_{r,s,h}(\Omega)$ and
   affine in $I$: $R(I,\vartheta,\nu)=R_0(\vartheta,\nu)+\sum_{j=1}^nR_j(\vartheta,\nu)I_j$
   with $R_0,R_j$ trigonometric polynomials in $\vartheta$ of degree at most
   $K$; $[R]=[Q]$ is affine in $I$, and $R-[R]$ is zero-mean.
3. **Size bounds.** $|Q|_{r,s,h}\le(n+1)\varepsilon$ and
$$|R|_{r,s-2\sigma,h}\le C_n\sigma^{-n}\varepsilon,\qquad \max_j|R_j|_{r,s-2\sigma,h}\le C_n\sigma^{-n}\varepsilon/r,\qquad |\partial_{\vartheta_i}R|_{r,s-2\sigma,h}\le C_n\sigma^{-n-1}\varepsilon .$$
4. **Truncation error.** $|Q-R|_{r,s-2\sigma,h}\le C_n\sigma^{-n}e^{-\sigma K/2}\varepsilon$.

## Facts & Assumptions

**Given:** The dimension $n$, the widths $r,s,h$, the set $\Omega$, the cutoff
$K$, the margins $\eta,\sigma$, and the holomorphic perturbation $P$ with
$|P|_{r,s,h}\le\varepsilon$.

[F1] Definitions of the domain, holomorphy, sup-norms, Fourier coefficients,
angular mean and cutoff $T_K$ ([[def-holomorphic-kam-domain-and-diophantine-labels]]).

[F2] Cauchy bounds and truncation on the Fourier side: from
[[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 2, for $0<\delta<r$ and
$0<\delta'<s$ one has $|\partial_{I_j}P|_{r-\delta,s,h}\le\varepsilon/\delta$,
$|\partial_{\vartheta_j}P|_{r,s-\delta',h}\le\varepsilon/\delta'$,
$|\partial_{I_i}\partial_{I_j}P|_{r-\delta,s,h}\le2\varepsilon/\delta^2$,
$|\partial_{I_i}\partial_{\vartheta_j}P|_{r-\delta,s-\delta',h}\le
2\varepsilon/(\delta\delta')$; and from clause 4, for $0<\tau\le\min(s/2,1)$,
$|Q-T_KQ|_{r,s-2\tau,h}\le C_n\tau^{-n}e^{-\tau K}|Q|_{r,s,h}$.

[F3] Segment fundamental theorem and chain rule: for fixed
$\vartheta,\nu$ the curve $u(t):=P(tI,\vartheta,\nu)$ is differentiable on
$[0,1]$ with $u'(t)=D_IP(tI,\vartheta,\nu)\cdot I$, and
$u(1)-u(0)=\int_0^1u'(t)\,dt$; the derivative bound
$|D_IP(tI)-D_IP(0)|\le\sup_{|J|_\infty\le2\eta r}|D_I^2P(J,\vartheta,\nu)|\cdot|tI|$
holds by the fundamental theorem applied to each component of $D_IP$ along the
segment ([[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]],
[[def-directional-and-partial-derivatives]], [[def-interval]],
[[def-metric-ball]]).

## Proof

**Proof technique:** direct; expand $P$ in the action variable along the segment
$tI$, bound the quadratic remainder by Cauchy estimates, and truncate the
Fourier series of $Q$ with the exponential tail bound.

1.1 *Structure of $Q$ and $R$.* $Q$ is defined from the holomorphic functions $P(0,\cdot,\cdot)$ and $\partial_{I_j}P(0,\cdot,\cdot)$, which are holomorphic on $B_r\times S_s\times O_h$; hence $Q$ is holomorphic there and affine in $I$. Its Fourier coefficients in $\vartheta$ are those of $P(0,\cdot)$ and $\partial_{I_j}P(0,\cdot)$; the cutoff $R=T_KQ$ is the corresponding finite trigonometric polynomial, again holomorphic and affine in $I$, with $R_0=T_K(P(0,\cdot))$ and $R_j$ the truncated coefficients, so $[R]=[Q]$ and $R-[R]$ is zero-mean. This is clause 2. [F1, given]

1.2 *Bounds for $Q$.* By [F2] with radii increasing to $r$, at the centre $I=0$ one has $|P(0,\vartheta,\nu)|\le\varepsilon$ and $|\partial_{I_j}P(0,\vartheta,\nu)|\le\varepsilon/r$; hence on $|I|_\infty<r$ $|Q(I,\vartheta,\nu)|\le\varepsilon+\sum_{j=1}^n\frac{\varepsilon}{r}\,|I_j| \le(n+1)\varepsilon .$ [F2, given, algebra]

2.1 *Taylor remainder.* Fix $(I,\vartheta,\nu)$ with $|I|_\infty<2\eta r$. By [F3], $P(I)-Q(I)=\int_0^1\bigl(D_IP(tI)-D_IP(0)\bigr)\cdot I\,dt$; for $|J|_\infty\le2\eta r\le r/2$ [F2] with $\delta=r/2$ gives $|D_I^2P(J)|\le2\varepsilon/(r/2)^2=8\varepsilon/r^2$ (maximum over the coordinate second derivatives), so for every $t\in[0,1]$, $|D_IP(tI)-D_IP(0)|\le n|tI|_\infty\sup_{|J|_\infty\le2\eta r}|D_I^2P(J)| \le2n\eta r\cdot\frac{8\varepsilon}{r^2}=\frac{16n\eta\varepsilon}{r}.$ Therefore $|P-Q|\le\sup_t|D_IP(tI)-D_IP(0)|_1\,|I|_\infty\le n\cdot16n\eta\varepsilon/r\cdot2\eta r =32n^2\,\eta^2\varepsilon$, which is clause 1 with $C=32n^2$. [step 1.2, F2, F3, algebra]

2.2 *Size bounds for $R$.* By step 1.2 and [F1], each coefficient $q_k$ of $Q$ satisfies $|q_k(I,\nu)|\le|Q|_{r,s,h}e^{-(s-\sigma)|k|_1}$ (the decay of [[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 1 with the margin $\sigma\le s$). Hence, on $B_r\times S_{s-2\sigma}\times O_h$, $|R|\le\sum_{|k|_1\le K}|q_k|e^{(s-2\sigma)|k|_1} \le|Q|_{r,s,h}\sum_{|k|_1\le K}e^{-\sigma|k|_1} \le(n+1)\varepsilon\,C_n\sigma^{-n},$ by clause 3 of [[lem-cauchy-fourier-and-lattice-shell-bounds]], which is the first bound of clause 3. For $R_j$: $R_j$ is the cutoff of $\partial_{I_j}P(0,\cdot,\cdot)$, whose coefficients are bounded by $(\varepsilon/r)e^{-(s-\sigma)|k|_1}$ by [F2] and the same decay; the identical summation gives $\max_j|R_j|_{r,s-2\sigma,h}\le C_n\sigma^{-n}\varepsilon/r$. For $\partial_{\vartheta_i}R$: by [F2] with $\delta'=\sigma$ and $\delta=r/2$, $|\partial_{\vartheta_i}P(0,\cdot,\cdot)|\le\varepsilon/\sigma$ and $|\partial_{\vartheta_i}\partial_{I_j}P(0,\cdot,\cdot)|\le4\varepsilon/(r\sigma)$; hence $|\partial_{\vartheta_i}Q|\le\varepsilon/\sigma+n\cdot4\varepsilon/(r\sigma)\cdot r \le(1+4n)\varepsilon/\sigma$ on $B_r\times S_{s-\sigma}\times O_h$, and the cutoff of this (holomorphic, affine-in-$I$) function on the smaller strip is bounded by $C_n\sigma^{-n}\cdot(1+4n)\varepsilon/\sigma$, which is the third bound of clause 3. [step 1.2, F1, F2, algebra]

3.1 *Truncation error.* Applying [F2]'s truncation estimate to $Q$ with $\tau=\sigma\le\min(s/2,1)$ and the bound $|Q|_{r,s,h}\le(n+1)\varepsilon$ of step 1.2 gives $|Q-R|_{r,s-2\sigma,h}\le C_n\sigma^{-n}e^{-\sigma K}(n+1)\varepsilon$, which is clause 4 after enlarging the constant; note $e^{-\sigma K}\le e^{-\sigma K/2}$, so the displayed form with $e^{-\sigma K/2}$ holds as well. [step 1.2, F2, algebra] ∎

## Remarks

- **Why affine in $I$.** The variable $Q$ omits all Taylor terms of order
  $\ge2$ in $I$; the remainder is quadratic in the scaled radius $2\eta r$,
  which is exactly what makes the KAM step quadratically convergent.
- **Why truncate.** $R$ has finitely many Fourier modes, so its homological
  equation is solved with uniformly bounded divisors on the complex parameter
  ball; the discarded tail is exponentially small in $K\sigma$ and is part of
  the new perturbation, not an error term.
