---
id: lem-pe05-source-quadrature-consistency
kind: lemma
title: Hydrostatic pressure corrections converge to the smooth-bed source
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe05-shallow-water-balance-law, def-pe05-hydrostatic-hll-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; equations (2.5)–(2.7), proof of Theorem 2.1(iii), §2.1, printed pp. 2052–2055."
    - title: "F. Bouchut, III. Shallow water problem – Hydrostatic reconstruction scheme"
      url: "https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf"
      locator: "Complete 20-page lecture; smooth-consistency criterion (16), PDF pp. 6–7, and hydrostatic reconstruction (23)–(24), PDF pp. 10–11."
---

## Statement

Let $b\in C^2(\mathbb R)$, let the uniform cell width be $d>0$, let $x_i$ be the center of cell $i$, and let $0\le h_i^n\le H$ on a fixed compact space-time cylinder. Set $b_i=b(x_i)$, $\delta_{i,+}=(b(x_i+d)-b(x_i))_+$, and $\delta_{i,-}=(b(x_i-d)-b(x_i))_+$. For the source term $S_i^n$ in [[def-pe05-hydrostatic-hll-scheme]],
$$S_i^n=\left(0,\frac{g}{2d}\left((h_i^n-\delta_{i,+})_+^2-(h_i^n-\delta_{i,-})_+^2\right)\right),$$
there is a constant $C$ depending only on the compact interval, $b$, $g$, and $H$ such that
$$\left|S_i^{(2)}+g h_i b'(x_i)\right|\le C d.$$
For time slabs $J_n=[n\tau,(n+1)\tau)$, define the piecewise-constant source reconstruction $\mathcal S_d(x,t)=S_i^n$ on $[x_i-d/2,x_i+d/2)\times J_n$. Consequently, as $d\to0$, if the corresponding piecewise-constant depth reconstructions $h_d$ converge strongly in $L^1_{\rm loc}(\mathbb R\times(0,T))$ to $h$ and are locally uniformly bounded, then $\mathcal S_d\to(0,-ghb')$ strongly in $L^1_{\rm loc}$.

## Facts & Assumptions

**Given:** $g>0$, $b\in C^2$, the hydrostatic source formula, a uniform mesh of width $d$, and bounded cell depths. Derive a uniform first-order source consistency estimate.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: the source momentum is $g((h_{i,+}^*)^2-(h_{i,-}^*)^2)/(2d)$, and hydrostatic reconstructed depths are positive parts after subtracting the increase to the maximum neighboring bed.

[F2] [[def-pe05-shallow-water-balance-law]]: for a smooth bed the momentum source in the balance law is $-ghb'$.

## Proof

1.1 Fix a compact spatial interval $I$ containing the cell centers under consideration and let $I^+$ be its closed unit enlargement. For $0<d\le1$, Taylor's formula at $x_i\in I$ gives $b(x_i+d)-b(x_i)=a+r_+$ and $b(x_i-d)-b(x_i)=-a+r_-$, where $a=b'(x_i)d$ and $|r_\pm|\le \tfrac12\sup_{I^+}|b''|d^2$. Since $s\mapsto s_+$ is $1$-Lipschitz and $a_+-(-a)_+=a$, this yields $|\delta_{i,+}-\delta_{i,-}-b'(x_i)d|\le C_0d^2$. The same local derivative bounds give $0\le\delta_{i,\pm}\le C_1d$, with constants depending only on $I$ and $b$. [given, construct, algebra]


2.1 For $h\ge0$ and $\delta\ge0$, write $(h-\delta)_+^2=h^2-2h\delta+R(h,\delta)$. If $\delta\le h$, then $R=\delta^2$; if $\delta>h$, then $R=2h\delta-h^2$, which lies between $0$ and $\delta^2$ because $\delta^2-(2h\delta-h^2)=(\delta-h)^2$. For $0<d\le1$, steps 1.1 and [F1] therefore give $$\left|(S_i^n)_2+g h_i^n b'(x_i)\right|\le gH C_0d+\frac{g}{2d}(\delta_{i,+}^2+\delta_{i,-}^2)\le C_2d.$$ For $d\ge1$, both squared positive parts in [F1] lie in $[0,H^2]$, so $|(S_i^n)_2|\le gH^2/(2d)$. Since $|b'(x_i)|\le\sup_I|b'|$, it follows that $$\left|(S_i^n)_2+g h_i^n b'(x_i)\right|\le \frac{gH^2}{2d}+gH\sup_I|b'|\le C_3d.$$ Taking $C=\max(C_2,C_3)$ proves the stated estimate for every $d>0$. [F1, step 1.1, algebra]


3.1 Now let $d\to0$ and fix a compact space-time rectangle. For all sufficiently small $d$, the centers of cells meeting this rectangle lie in a fixed compact interval, so the estimate in step 2.1 and $|b'(x)-b'(x_i)|\le \tfrac12d\sup|b''|$ on a fixed enlargement show that $\mathcal S_d-(0,-g h_d b'(x))\to0$ uniformly there. Since $b'$ is bounded on compact intervals and $h_d\to h$ strongly in local $L^1$, $(0,-g h_d b'(x))\to(0,-ghb'(x))$ strongly in local $L^1$, proving the asserted source convergence. [F2, step 2.1, algebra] ∎

