---
id: lem-indented-arc-residue-limit
kind: lemma
title: "An indented arc around a simple singularity contributes the expected residue fraction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       def-simple-pole,
       def-residue-isolated-singularity,
       cor-residue-contour-integral-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.5"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Let $f$ have a simple pole at $a$, let $0<\varepsilon<R$, and for arbitrary
real angles $\alpha,\beta$ let
$$\gamma_\varepsilon(t)=a+\varepsilon e^{i((1-t)\alpha+t\beta)}\qquad(0\le t\le1)$$
be the circular arc oriented from angle $\alpha$ to angle $\beta$ inside
$0<|z-a|<R$. Then

$\lim_{\varepsilon\downarrow0}\int_{\gamma_\varepsilon}f(z)\,dz =i(\beta-\alpha)\operatorname{Res}(f,a).$

In particular, an upper indentation from left to right contributes
$-i\pi\,\operatorname{Res}(f,a)$ and a lower indentation contributes
$+i\pi\,\operatorname{Res}(f,a)$.

## Facts & Assumptions

**Given:** A simple pole of $f$ at $a$ and the oriented arc
$\gamma_\varepsilon(t)=a+\varepsilon e^{i((1-t)\alpha+t\beta)}$.

[L1] At a simple pole, the Laurent principal part is
$c_{-1}/(z-a)$, where $c_{-1}=\operatorname{Res}(f,a)$; hence
$f(z)=c_{-1}/(z-a)+h(z)$ with $h$ holomorphic near $a$
([[def-simple-pole]], [[def-residue-isolated-singularity]]).

## Proof

**Proof technique:** direct.

1.1 Write $f(z)=c_{-1}(z-a)^{-1}+h(z)$ as in [L1]. Along the arc, put $\theta(t)=(1-t)\alpha+t\beta$. Then $z-a=\varepsilon e^{i\theta(t)}$ and $dz=i(\beta-\alpha)\varepsilon e^{i\theta(t)}dt$, so $$\int_{\gamma_\varepsilon}\frac{c_{-1}}{z-a}\,dz=i(\beta-\alpha)c_{-1}=i(\beta-\alpha)\operatorname{Res}(f,a).$$ [L1, algebra]

2.1 The holomorphic function $h$ is bounded on a small closed disc around $a$, say by $M$. Hence $\left|\int_{\gamma_\varepsilon}h(z)\,dz\right| \le M\varepsilon|\beta-\alpha|,$ which tends to $0$ with $\varepsilon$. [step 1.1]

3.1 Adding the two parts from steps 1.1 and 2.1 proves the limit formula. The two indentation special cases are the choices $(\alpha,\beta)=(\pi,0)$ and $(\alpha,\beta)=(\pi,2\pi)$. [step 1.1, step 2.1] ∎
