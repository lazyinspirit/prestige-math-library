---
id: "lem-geodesic-segments-have-isometric-ultralimits"
kind: "lemma"
title: "Limits of geodesic segments, rays and lines"
status: "draft"
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "lem-rescaled-ultradistance-is-a-quotient-metric", "lem-bounded-real-ultralimits-and-free-tail-extension", "def-geodesic-and-geodesic-metric-space", "def-geodesic-rays-and-lines", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §10.4 Lemmas 10.48 and 10.51, PDF pp.366–367"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. A rescaled ultralimit of pointed geodesic spaces is geodesic. Suppose oriented finite segments $S_n$ meet a uniformly bounded rescaled neighbourhood of the basepoints on a large set. Their represented limit means the classes with a representative belonging to $S_n$ on a large set. Replace segments outside that large set by the constant segment at $e_n$ when forming the following parameters. Choose origins $o_n\in S_n$ in that neighbourhood, so $\lambda_nd_n(o_n,e_n)\le R$ for one finite $R$ on the large set, and take $o_n=e_n$ elsewhere. Write their original-distance parameterizations as $\gamma_n:[-\alpha_n,\beta_n]\to S_n$, with $\gamma_n(0)=o_n$ and $\alpha_n,\beta_n\ge0$. If $a=\lim_\omega\lambda_n\alpha_n$ and $b=\lim_\omega\lambda_n\beta_n$, allowing $+\infty$, their represented limit is isometric to $[-a,b]\cap\mathbb R$. Every admissible sequence of points on $S_n$ lies on this limit. The possibilities are a closed interval (including a point), a ray, or a line.

## Facts & Assumptions

**Given:** Positive scales $\lambda_n$, a supplied ultrafilter, pointed geodesic spaces and segments meeting the rescaled R-ball about e_n; assume AC.

[F1] The quotient metric exists; changes off a large set preserve a class. ([[lem-rescaled-ultradistance-is-a-quotient-metric]]).

[F2] Bounded real limits preserve absolute values and order. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

[F3] A geodesic preserves differences of distance parameters. ([[def-geodesic-and-geodesic-metric-space]]).

[F4] Ray and line domains are respectively a half-line and the real line. ([[def-geodesic-rays-and-lines]]).

[F5] AC selects from each member of a family of nonempty sets. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If the bounded-neighbourhood hypothesis holds only on a large set $A$, replace $S_n$ by $\{e_n\}$ for $n\notin A$. The represented limit is unchanged: intersect a representative's membership set with $A$ and replace its other coordinates by $e_n$; F1 identifies the old and new classes. The new family meets the same rescaled ball for every $n$. By AC choose $o_n\in S_n$ with $\lambda_nd_n(o_n,e_n)\le R$, and orient the given distance parameter around $o_n$. Put $a_n=\lambda_n\alpha_n$, $b_n=\lambda_n\beta_n$. The bounded sequence $a_n/(1+a_n)$ has limit $q\in[0,1]$. If $q<1$, define $a=q/(1-q)$; continuity of this rational function near $q$ gives the finite extended ultralimit. If $q=1$, then for each finite $H$, $a_n>H$ on a large set, since $a_n\le H$ implies $a_n/(1+a_n)\le H/(1+H)<1$. Define $a=+\infty$ in this case, and define $b$ identically. [F1, F2, F3, F5]

2.1 For $t\in J=[-a,b]\cap\mathbb R$, set $c_n(t)=\max(-a_n,\min(t,b_n))$ and $x_n(t)=\gamma_n(c_n(t)/\lambda_n)$. Clamping is in rescaled units; the argument of $\gamma_n$ is in original units. Since $0\in[-a_n,b_n]$, $|c_n(t)|\le|t|$ and $\lambda_nd_n(x_n(t),e_n)\le|t|+R$, so $x(t)$ is admissible. The finite endpoint limits, or the eventual bound at any fixed finite $t$ for an infinite endpoint, show $c_n(t)\to_\omega t$, including $t=-a$ or $t=b$ when finite. [step 1.1, F3, algebra]

3.1 The exact identity $\lambda_nd_n(x_n(s),x_n(t))=|c_n(s)-c_n(t)|$ and real limit calculus give $d_\omega([x(s)],[x(t)])=|s-t|$. Thus $t\mapsto[x(t)]$ is an isometric embedding of $J$. [step 2.1, F1, F2, F3]

3.2 Conversely let $z_n=\gamma_n(u_n)$ be admissible points on $S_n$ and set $t_n=\lambda_nu_n$. Then $|t_n|=\lambda_nd_n(z_n,o_n)\le\lambda_nd_n(z_n,e_n)+R$ is bounded, so $t=\lim_\omega t_n$ exists. From $-a_n\le t_n\le b_n$ follows $t\in J$, including the finite endpoint inequalities. Projection onto an interval satisfies $|t_n-c_n(t)|\le|t_n-t|$ when $t_n$ lies in that interval (check $t$ below, in, or above it). Hence $\lambda_nd_n(z_n,x_n(t))\to_\omega0$ and $[z]=[x(t)]$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 If $a,b$ are finite, translate $J$ to $[0,a+b]$; if only one is infinite, translate and possibly reverse it to $[0,\infty)$; if both are infinite, $J=\mathbb R$. These are exactly the asserted interval, ray and line possibilities. When $a=b=0$, the image is one point. [step 3.1, step 3.2, F4]

5.1 For any two ultralimit classes choose representative sequences $v_n,w_n$. AC chooses a segment joining each pair. Take $o_n=v_n$, so $a_n=0$ and $b_n=\lambda_nd_n(v_n,w_n)$ is uniformly bounded and has limit $d_\omega([v],[w])$. step 3.1 and step 3.2 give a segment with exactly these endpoints, also if that distance is zero. Thus the ultralimit is geodesic. [step 3.1, step 3.2, F1, F3, F5] ∎
