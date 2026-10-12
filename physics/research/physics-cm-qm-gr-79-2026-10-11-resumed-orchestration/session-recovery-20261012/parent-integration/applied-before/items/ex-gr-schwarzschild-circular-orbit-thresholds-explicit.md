---
id: ex-gr-schwarzschild-circular-orbit-thresholds-explicit
kind: example
title: "Explicit circular-orbit data of the Schwarzschild exterior at the ISCO radius 3s and the photon-sphere radius 3s/2"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-timelike-geodesic-reduction, lem-gr-schwarzschild-circular-orbits-and-photon-sphere, def-derivative, thm-algebra-of-derivatives, def-rational-power, def-interval]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the effective potential for Schwarzschild orbits, the innermost stable circular orbit at r = 6GM and the photon sphere at r = 3GM, printed pp. 179-184 (PDF pp. 186-191)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.3: circular orbits, the ISCO and the photon sphere of the Schwarzschild solution, printed pp. 252-258 (PDF pp. 259-265)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius
$s>0$, $f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), with the
circular-orbit data of
[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] and the radial
potential $W_\ell(r)=f(r)(c^{2}+\ell^{2}/r^{2})$ of
[[lem-gr-schwarzschild-timelike-geodesic-reduction]] clause (c). Then the
following exact evaluations hold.

1. **The innermost stable circular orbit at $r_0=3s$.** With
   $\ell^{2}=\dfrac{c^{2}sr_0^{2}}{2r_0-3s}$ one has
   $\ell^{2}=3c^{2}s^{2}$, $e^{2}=\frac{8}{9}c^{2}$ and $e=\frac{2\sqrt2}{3}c$,
   and the second derivative of $V_\ell=\frac12W_\ell$ vanishes:
   $V_\ell''(3s)=\dfrac{c^{2}s(3s-3s)}{(3s)^{3}(6s-3s)}=0$. The circular
   angular velocity at this radius satisfies
   $\bigl(\frac{d\varphi}{dt}\bigr)^{2}=\dfrac{G_Nm_*}{(3s)^{3}}=\dfrac{c^{2}}{54s^{2}}$.
2. **The photon sphere at $r_0=\frac{3s}{2}$.** With
   $e_0=\dfrac{|\ell|\sqrt{f(r_0)}}{r_0}=\dfrac{2|\ell|}{3\sqrt3\,s}$ one has
   $f\bigl(\frac{3s}{2}\bigr)=\frac13$ and
   $\bigl(\frac{d\varphi}{dt}\bigr)^{2}=\dfrac{c^{2}f(r_0)}{r_0^{2}} =\dfrac{4c^{2}}{27s^{2}}$;
   the null potential $W^{\mathrm n}_\ell(r)=f(r)\ell^{2}/r^{2}$ has
   $(W^{\mathrm n}_\ell)'\bigl(\frac{3s}{2}\bigr)=0$ and
   $(W^{\mathrm n}_\ell)''\bigl(\frac{3s}{2}\bigr)=-\frac{64\ell^{2}}{81s^{4}}<0$.
3. **A stable comparison radius.** At $r_0=4s$ one has
   $\ell^{2}=\dfrac{c^{2}s\cdot16s^{2}}{8s-3s}=\dfrac{16}{5}c^{2}s^{2}$ and
   $V_\ell''(4s)=\dfrac{c^{2}s(4s-3s)}{(4s)^{3}(8s-3s)}=\dfrac{c^{2}}{320s^{2}}>0$,
   a strict local minimum: the two threshold values $3s/2$ (existence) and
   $3s$ (stability) separate the unstable circular orbits
   $\frac{3s}{2}<r_0<3s$ from the stable ones $r_0>3s$.
4. **Blow-up at the existence threshold.** As $r_0\downarrow\frac{3s}{2}$
   the required angular momentum diverges,
   $\ell^{2}=\dfrac{c^{2}sr_0^{2}}{2r_0-3s}\to+\infty$, so there is no finite
   angular momentum at the limiting radius; for $r_0\le\frac{3s}{2}$ no
   circular timelike geodesic exists
   ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (b)).

## Facts & Assumptions

**Given:** The exterior datum with $s>0$, and the function $f=1-s/r$, the potential $W_\ell(r)=f(r)(c^{2}+\ell^{2}/r^{2})$, its half $V_\ell$, and the null potential $W^{\mathrm n}_\ell(r)=f(r)\ell^{2}/r^{2}$.

[L1] For $r_0>\frac{3s}{2}$ the circular timelike geodesic of radius $r_0$ has $\ell^{2}=\frac{c^{2}sr_0^{2}}{2r_0-3s}$, $e=\frac{c(r_0-s)\sqrt2}{\sqrt{r_0(2r_0-3s)}}$, and its angular velocity satisfies $\bigl(\frac{d\varphi}{dt}\bigr)^{2}=\frac{G_Nm_*}{r_0^{3}}$; conversely every equatorial timelike geodesic with $r\equiv r_0$ constant on an interval of positive length has $r_0>\frac{3s}{2}$ and this $\ell^{2}$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clauses (a)-(b), [[def-gr-schwarzschild-exterior-model]]).

[L2] The stability function of the reduced radial motion is $V_\ell''(r)=\frac{c^{2}s(r-3s)}{r^{3}(2r-3s)}$ for $r>\frac{3s}{2}$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (c), [[lem-gr-schwarzschild-timelike-geodesic-reduction]] clause (c)).

[L3] The null circular orbit at $r_0=\frac{3s}{2}$ has $e_0=\frac{|\ell|\sqrt{f(r_0)}}{r_0}$, angular velocity $\bigl(\frac{d\varphi}{dx^{0}}\bigr)^{2}=\frac{f(r_0)}{r_0^{2}}$, and the null potential satisfies $(W^{\mathrm n}_\ell)'(\frac{3s}{2})=0$, $(W^{\mathrm n}_\ell)''(\frac{3s}{2})=-\frac{64\ell^{2}}{81s^{4}}$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (d)).

[L4] For $s>0$ the identities $f(3s)=\frac23$, $f(\frac{3s}{2})=\frac13$, $(3s)^{3}=27s^{3}$, $(\frac{3s}{2})^{2}=\frac{9s^{2}}{4}$, $G_Nm_*=\frac{sc^{2}}{2}$ hold, and $6s-3s=3s$, $8s-3s=5s$; all divisions below have nonzero denominators ([[def-gr-schwarzschild-exterior-model]] clause (a), [[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[def-interval]]).

## Proof

**Proof technique:** direct; substitute the two threshold radii into the conserved-quantity and potential formulas of the cited lemma, and evaluate with the exact identities $f(3s)=2/3$, $f(3s/2)=1/3$.

1.1 (ISCO data at $3s$.) By [L4] and [L1], at $r_0=3s$ the denominator is $2r_0-3s=3s$, so $\ell^{2}=\frac{c^{2}s\cdot9s^{2}}{3s}=3c^{2}s^{2}$. Then $c^{2}+\ell^{2}/r_0^{2}=c^{2}+\frac{3c^{2}s^{2}}{9s^{2}}=c^{2}+\frac{c^{2}}{3}=\frac{4}{3}c^{2}$, so $e^{2}=f(3s)\cdot\frac43 c^{2}=\frac23\cdot\frac43 c^{2}=\frac89c^{2}$ and $e=\frac{2\sqrt2}{3}c>0$. The angular velocity is $\bigl(\frac{d\varphi}{dt}\bigr)^{2}=\frac{G_Nm_*}{(3s)^{3}} =\frac{sc^{2}/2}{27s^{3}}=\frac{c^{2}}{54s^{2}}$. By [L2], $V_\ell''(3s)=\frac{c^{2}s\cdot0}{(3s)^{3}\cdot3s}=0$. This is clause 1. [L1, L4, algebra]

1.2 (Photon-sphere data at $3s/2$.) By [L4], $f(\frac{3s}{2})=\frac13$, so $e_0=\frac{|\ell|\sqrt{1/3}}{3s/2}=\frac{2|\ell|}{3\sqrt3\,s}$; the angular velocity satisfies $\bigl(\frac{d\varphi}{dx^{0}}\bigr)^{2}=\frac{f(3s/2)}{(3s/2)^{2}} =\frac{1/3}{9s^{2}/4}=\frac{4}{27s^{2}}$, hence $\bigl(\frac{d\varphi}{dt}\bigr)^{2}=\frac{c^{2}\cdot4}{27s^{2}}$. The two potential identities are those of [L3] evaluated at the stated radius. This is clause 2. [L3, L4, algebra]

1.3 (Stable comparison radius $4s$.) At $r_0=4s$ the denominator is $2r_0-3s=5s$, so $\ell^{2}=\frac{c^{2}s\cdot16s^{2}}{5s}=\frac{16}{5}c^{2}s^{2}$; by [L2], $V_\ell''(4s)=\frac{c^{2}s(4s-3s)}{(4s)^{3}\cdot5s} =\frac{c^{2}s^{2}}{64s^{3}\cdot5s}=\frac{c^{2}}{320s^{2}}>0$, a strict local minimum of $V_\ell$ at the circular-orbit radius. Combined with clause 1, the sign of $V_\ell''$ changes at $r=3s$, separating the strict local maxima on $\frac{3s}{2}<r_0<3s$ from the strict local minima on $r_0>3s$; this is clause 3. [L1, L2, L4, algebra]

2.1 (Threshold divergence.) For $r_0>\frac{3s}{2}$ the denominator $2r_0-3s$ is positive with $2r_0-3s\to0^{+}$ as $r_0\downarrow\frac{3s}{2}$, while the numerator $c^{2}sr_0^{2}\to c^{2}s\cdot\frac{9s^{2}}{4}>0$; hence $\ell^{2}\to+\infty$. By the converse clause of [L1], no equatorial timelike geodesic has $r\equiv r_0$ constant on an interval of positive length for $s<r_0\le\frac{3s}{2}$, since that would force $r_0>\frac{3s}{2}$. This is clause 4. [L1, L4, algebra] ∎

## Remarks

- **What the example computes.** The numbers $3c^{2}s^{2}$, $2\sqrt2c/3$, $c^{2}/(54s^{2})$, $4c^{2}/(27s^{2})$ and $c^{2}/(320s^{2})$ are exact rational multiples of $s$, $c$, $c^{2}$ evaluated from the cited formulas at the threshold radii; the example reports no orbit of any observed body and no measurement, and the word "stable" refers only to the sign of the second derivative of the stated effective potential of the restricted model.
