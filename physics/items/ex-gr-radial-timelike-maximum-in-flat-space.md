---
id: ex-gr-radial-timelike-maximum-in-flat-space
kind: example
title: "The radial proper-time maximum checked on an explicit family of wiggly curves in flat space"
status: published
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-lorentz-gauss-lemma-and-normal-maximum, thm-gr-local-geodesics-and-exponential-map, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, def-gr-smooth-lorentzian-objects, ex-gr-flat-space-geodesics-and-proper-time, thm-monotonicity-of-the-integral, def-darboux-integral, def-interval, def-continuity-real]
dependency_roles:
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  ex-gr-flat-space-geodesics-and-proper-time: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the proper-time variational argument and the maximum property of timelike geodesics, printed pp. 69-73 (PDF pp. 76-80)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), the twin-paradox discussion of the maximal proper time of inertial worldlines, printed pp. 30-33 (PDF pp. 37-40)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Keep the flat model of [[ex-gr-flat-space-geodesics-and-proper-time]]:
$M=\mathbb R^4$ with the identity chart, $g=\operatorname{diag}(-1,1,1,1)$,
the metric-selected connection with $\Gamma=0$, and $c>0$. Fix
$0\le a<c/\pi$ and consider the piecewise smooth curve

$$\alpha_a:[0,1]\longrightarrow\mathbb R^4,\qquad \alpha_a(t):=\bigl(ct,\ a\sin(\pi t),\ 0,\ 0\bigr).$$

Its endpoints are $p=(0,0,0,0)$ and $q=(c,0,0,0)$, it has nonzero future
timelike tangents for every $t$, and it stays in the exponential domain
$\mathbb R^4$ of $p$, so [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]
applies with $v_q=\exp_p^{-1}(q)=(c,0,0,0)$. Then:

1. Its length is $L_g(\alpha_a)=\int_0^1\sqrt{c^2-a^2\pi^2\cos^2(\pi t)}\,dt$,
   and $L_g(\alpha_a)<c=\sqrt{-g(v_q,v_q)}$ for every $a\neq0$, while
   $L_g(\alpha_0)=c$.
2. Hence the curve is strictly below the radial maximum unless $a=0$, in which
   case $\alpha_0(t)=(ct,0,0,0)$ is the radial geodesic itself (a straight
   line through $p$); this exhibits the equality case of the theorem on an
   explicit family.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, a real $a$ with $0\le a<c/\pi$, and the curve $\alpha_a(t)=(ct,\,a\sin(\pi t),\,0,\,0)$.

[L1] In this model $\exp_p(v)=p+v$ on all of $T_pM$, the geodesics are the affine lines, and $p=(0,0,0,0)$, $q=\alpha_a(1)=(c,0,0,0)$ give $v_q=(c,0,0,0)$ ([[ex-gr-flat-space-geodesics-and-proper-time]], [[thm-gr-local-geodesics-and-exponential-map]]).

[L2] The tangent of $\alpha_a$ is $(c,\,a\pi\cos(\pi t),\,0,\,0)$, with $g(\alpha_a',\alpha_a')=-c^2+a^2\pi^2\cos^2(\pi t)<0$ and $g(\alpha_a',\partial_0)=-c<0$ when $a<c/\pi$; hence the curve is a future timelike worldline and its length over $[0,1]$ is as displayed ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L3] The radial maximum theorem applies to piecewise smooth future timelike curves with image in the exponential domain of $p$ and gives $L_g(\alpha)\le\sqrt{-g_p(v_q,v_q)}$, with equality exactly for monotone reparametrizations of the radial geodesic from $p$ to $q$ ([[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]).

[L4] If two continuous functions on $[0,1]$ satisfy $f\le c$ everywhere and $f<c$ on a nondegenerate subinterval, then $\int_0^1f<\int_0^1c=c$; this is monotonicity of the Darboux integral together with strict positivity of $\int(c-f)$ over a subinterval where $c-f>0$ ([[thm-monotonicity-of-the-integral]], [[def-darboux-integral]], [[def-continuity-real]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $\alpha_a$ is a piecewise smooth (indeed smooth) future timelike worldline with image in the exponential domain $\mathbb R^4$ of $p$, and its length is $L_g(\alpha_a)=\int_0^1\sqrt{c^2-a^2\pi^2\cos^2(\pi t)}\,dt$. [given, L2, algebra]

2.1 For $a=0$ the integrand is the constant $c$, so $L_g(\alpha_0)=c$; and $\alpha_0(t)=(ct,0,0,0)$ is the straight affine line through $p$ with direction $(c,0,0,0)=v_q$, which by [L1] is the radial geodesic from $p$ to $q$. Thus equality holds in the sense of [L3]. [step 1.1, L1, algebra]

2.2 For $a\neq0$ the integrand $f(t)=\sqrt{c^2-a^2\pi^2\cos^2(\pi t)}$ is continuous and satisfies $f(t)\le c$, with strict inequality $f(t)<c$ at every $t$ with $\cos(\pi t)\neq0$; such points form a nondegenerate subinterval of $[0,1]$, for instance around $t=0$. By [L4], $\int_0^1f\,dt<c$, so $L_g(\alpha_a)<\sqrt{-g(v_q,v_q)}=c$; moreover $\alpha_a$ is not a reparametrization of the straight segment because its second coordinate $a\sin(\pi t)$ is not identically zero. [step 1.1, L1, L3, L4, algebra]

3.1 Steps 2.1 and 2.2 verify both the inequality and the equality case of [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]] on the family $\{\alpha_a\}_{0\le a<c/\pi}$: the length is maximized exactly by the radial geodesic, and every nonradial member of the family is strictly shorter, in agreement with the theorem's proper-time statement after division by $c$. [step 2.1, step 2.2, L3, algebra] ∎
