---
id: prop-emg-fx-rn-photon-trapping
kind: proposition
title: RN circular null radius and exterior instability
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-xs-rn-data
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - prop-emg-xs-rn-horizon-data
  - def-geodesic-of-an-affine-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-emg-explicit-power-regimes
  - def-countable-choice
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  prop-emg-xs-rn-horizon-data: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III Mathematical Tripos, Michaelmas 2019, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "PDF pp. 50–51: the Schwarzschild null effective potential, its photon-sphere maximum at 3GM/c^2 and radial instability. Section 6.2.5, printed pp. 266–268 (PDF pp. 273–275), treats the distinct extremal RN throat limit. Tong's charge normalization is not imported."
    - title: "Max Weissenbacher, Decay and non-decay for the massless Vlasov equation on subextremal and extremal Reissner–Nordström black holes, Arch. Rational Mech. Anal. 248, 118 (2024)"
      url: https://arxiv.org/pdf/2303.15338
      locator: "arXiv:2303.15338v2, Section 2.1, equations (35), (46)–(48), and Sections 2.3.1–2.3.5: subextremal surface gravity, the exact RN photon-sphere radius, conserved geodesic quantities, and null trapping. The paper's geodesic-flow estimates are not used as the proof here."
physical_scope: null
verification:
  precheck: pass
---

## Statement

Let $m>0$ and $q_e,q_m\in\mathbb R$ be length parameters, put $Q^2=q_e^2+q_m^2$, and assume $0\le Q^2<m^2$. Use the asymptotically flat dyonic Reissner–Nordström metric with $M=m$ and $f(r)=1-2m/r+Q^2/r^2$ on the exterior $r>r_+:=m+\sqrt{m^2-Q^2}$. Here $r_-$ denotes the other algebraic horizon root $m-\sqrt{m^2-Q^2}$; when $Q^2>0$, $r_\pm$ are the local null Killing horizons of the selected RN model, and when $Q^2=0$, $r_+=2m$ is the larger root. An equatorial circular null geodesic means a smooth nonconstant affinely parametrized geodesic $\gamma(s)=(x^0(s),r_c,\pi/2,\phi(s))$ with $g(\dot\gamma,\dot\gamma)=0$ and nonzero angular momentum $\ell=r_c^2\dot\phi$. Its effective radial function is $h(r)=f(r)/r^2$. The outer circular null radius is

$$r_{\mathrm{ph}+}=\frac{3m+\sqrt{9m^2-8Q^2}}{2}.$$

It lies strictly above $r_+$ and is a strict local maximum of $h$. The corresponding circular geodesic is linearly unstable under radial perturbations at fixed energy and angular momentum. The other algebraic stationary radius is $r_{\mathrm{ph}-}=(3m-\sqrt{9m^2-8Q^2})/2$; this proposition assigns it no exterior-orbit interpretation. Coordinates $x^0,r,m,q_e,q_m$ have length units, angular coordinates are dimensionless, and the affine parameter has arbitrary normalization. This is a null-ray calculation for the exact RN metric; it proves no wave-decay or Morawetz estimate.

## Statement references

[[def-emg-xs-rn-data]]

[[prop-emg-xs-rn-horizon-data]]

[[def-geodesic-of-an-affine-connection]]

## Facts & Assumptions

**Given:** The dyonic RN metric with $m>0$, $0\le Q^2<m^2$, and a smooth equatorial affinely parametrized null geodesic in the static exterior with nonzero angular momentum.

[F1] [[def-emg-xs-rn-data]]: for $Q^2=q_e^2+q_m^2$ and $f(r)=1-2m/r+Q^2/r^2$, the static metric is $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ on each open set where $f\ne0$.

[F2] [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]: in spherical coordinates the unit round metric is $\gamma_{S^2}=d\theta^2+\sin^2\theta\,d\phi^2$.

[F3] [[prop-emg-xs-rn-horizon-data]]: when $Q^2>0$ and $m^2\ge Q^2$, the positive roots are $r_\pm=m\pm\sqrt{m^2-Q^2}$ and are local null constant-radius Killing horizons. Its theorem's $Q^2>0$ hypothesis is used only for this horizon interpretation; the $Q^2=0$ root is handled directly below.

[F4] [[def-geodesic-of-an-affine-connection]]: an affinely parametrized geodesic satisfies $D_s\dot\gamma=0$ on its interval.

[F5] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: assuming $\mathrm{AC}_\omega$, the metric-selected connection of a smooth nondegenerate metric has coordinate coefficients $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F6] [[def-emg-explicit-power-regimes]]: for $a>0$, $\sqrt a$ is the unique positive real $s$ with $s^2=a$.

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every sequence of nonempty sets has a choice function. This is the assumption explicitly used by [F5].

[A1] $m>0$, $q_e,q_m\in\mathbb R$, and $0\le Q^2=q_e^2+q_m^2<m^2$.

[A2] Adopt $\mathrm{AC}_\omega$ as required by [F5]. No further choice principle is used.

## Proof

1.1 Let $x=\sqrt{m^2-Q^2}$. By [F6] and [A1], $0<x\le m$, so $r_-=m-x\ge0$ and $r_+=m+x>0$. Factoring gives $f(r)=(r-r_+)(r-r_-)/r^2>0$ on $r>r_+$. From [F1]–[F2] the equatorial metric components are $g_{00}=-f$, $g_{rr}=f^{-1}$, $g_{\theta\theta}=r^2$, and $g_{\phi\phi}=r^2\sin^2\theta$. Substitution in [F5] gives $\Gamma^0{}_{0r}=f'/(2f)$, $\Gamma^\phi{}_{r\phi}=1/r$, $\Gamma^r{}_{00}=ff'/2$, $\Gamma^r{}_{rr}=-f'/(2f)$, $\Gamma^r{}_{\phi\phi}=-fr\sin^2\theta$, $\Gamma^\theta{}_{r\theta}=1/r$, and $\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$. The $x^0$ and $\phi$ geodesic equations of [F4] are therefore $\ddot x^0+(f'/f)\dot r\dot x^0=0$ and $\ddot\phi+2(\dot r/r)\dot\phi=0$. The $\theta$ equation is $\ddot\theta+2(\dot r/r)\dot\theta-\sin\theta\cos\theta\dot\phi^2=0$, so $\theta=\pi/2$, $\dot\theta=0$ is invariant. Differentiating the $x^0$ and $\phi$ equations shows that $E:=f\dot x^0$ and $\ell:=r^2\dot\phi$ are constant along the geodesic. [given, F1, F2, F4, F5, F6, F7, A1, A2, algebra]

2.1 The null condition is $-f(\dot x^0)^2+f^{-1}\dot r^2+r^2\dot\phi^2=0$. Multiplying by $f>0$ and using the constants from 1.1 gives $\dot r^2+\ell^2h(r)=E^2$, where $h=f/r^2$. [given, F1, A1, step 1.1, algebra]

2.2 For a circular orbit $r=r_c$, the radial geodesic equation from 1.1 has $\dot r=\ddot r=0$ and reads $\tfrac12ff'(\dot x^0)^2-fr_c(\dot\phi)^2=0$. The null equation and $\ell\ne0$ imply $r_cf'(r_c)-2f(r_c)=0$, equivalently $h'(r_c)=0$. Direct differentiation gives $h'(r)=-2(r^2-3mr+2Q^2)/r^5$, so its algebraic roots are $r_{\mathrm{ph}\pm}=(3m\pm\sqrt{9m^2-8Q^2})/2$. They are real because $9m^2-8Q^2=m^2+8(m^2-Q^2)>0$. [given, F1, F4, F5, A1, step 1.1, algebra]

3.1 Put $x=\sqrt{m^2-Q^2}$, so $0<x\le m$. Then $\sqrt{9m^2-8Q^2}=\sqrt{m^2+8x^2}>x$, and
$$r_{\mathrm{ph}+}-r_+=\frac{m+\sqrt{m^2+8x^2}-2x}{2}=\frac{(m-x)+(\sqrt{m^2+8x^2}-x)}2>0.$$
For $Q^2>0$, [F3] identifies $r_+$ as the outer local horizon. For $Q^2=0$, [F1] gives $f=1-2m/r$, whose larger root is $r_+=2m$; the same inequality applies. Thus $f(r_{\mathrm{ph}+})>0$ and the outer root lies in the static exterior. [given, F1, F3, F6, A1, step 2.2, algebra]

3.2 At the outer root, $r^2-3mr+2Q^2=0$ and $2r_{\mathrm{ph}+}-3m=\sqrt{9m^2-8Q^2}$, so $h''(r_{\mathrm{ph}+})=-2\sqrt{9m^2-8Q^2}/r_{\mathrm{ph}+}^5<0$. Hence $h$ has a strict local maximum there. [given, A1, step 2.2, algebra]

4.1 Since $f(r_{\mathrm{ph}+})>0$, [F6] defines $\sqrt{h(r_{\mathrm{ph}+})}$. Choose $\ell>0$ and $E=\ell\sqrt{h(r_{\mathrm{ph}+})}$. The explicit curve $x^0(s)=Es/f(r_{\mathrm{ph}+})$, $r(s)=r_{\mathrm{ph}+}$, $\theta(s)=\pi/2$, and $\phi(s)=\ell s/r_{\mathrm{ph}+}^2$ is null and satisfies the $x^0,\phi,\theta$ geodesic equations from 1.1. Its radial geodesic equation is exactly the circular condition in 2.2, so it is an affinely parametrized circular null geodesic. For a general equatorial null geodesic, its radial geodesic equation from 1.1, the constants in 1.1, and the null identity 2.1 give
$$\ddot r=-\frac{f'(r)}{2f(r)}\dot r^{,2}-\frac{\ell^2}{2}h'(r).$$
Indeed, substituting $E=f\dot x^0$ and $\ell=r^2\dot\phi$ into the radial geodesic equation gives $\ddot r=-E^2f'/(2f)+f\ell^2/r^3$; replacing $E^2$ by $\dot r^{,2}+\ell^2 f/r^2$ yields the displayed equation. Now set $r=r_{\mathrm{ph}+}+\epsilon\eta(s)$ and keep the circular values of $E$ and $\ell$ fixed. The term containing $\dot r^{,2}$ is second order in $\epsilon$, while $h'(r_{\mathrm{ph}+})=0$; hence the first-order radial equation is $\delta\ddot r+\tfrac12\ell^2h''(r_{\mathrm{ph}+})\delta r=0$, or $\delta\ddot r-\nu^2\delta r=0$, where $\nu^2=-\tfrac12\ell^2h''(r_{\mathrm{ph}+})>0$ by 3.2. Its solutions include an exponentially growing mode, proving radial linear instability at fixed energy and angular momentum. [given, F1, F4, F5, F6, A1, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, algebra, construct] ∎

## Remarks

The smaller algebraic stationary radius is not used to infer an additional exterior trapping orbit. Radial null geodesics have $\ell=0$ and are a separate class. The argument establishes only the exact metric's circular-ray trapping and instability; no wave estimate follows from it.

The diagram is a schematic ordering of areal radii, not a distance scale. Panel (a) depicts $0<Q^2<m^2$; the proven exterior is $r>r_+$, and the proof above—not the drawing—establishes $r_{\mathrm{ph}+}>r_+$. Panel (b) is the excluded extremal endpoint: the algebraic horizon roots coalesce at $m$, while the continuous limit of the outer stationary-radius formula is $2m$.

~~~tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw[->] (0,0) -- (8,0) node[right] {$r$};
  \draw[densely dashed] (1.35,-0.18) -- (1.35,0.18);
  \draw[densely dashed] (3.15,-0.18) -- (3.15,0.18);
  \draw[very thick] (3.15,0) -- (8,0);
  \draw[fill=black] (5.55,0) circle (1.6pt);
  \node[below] at (1.35,-0.2) {$r_-$};
  \node[below] at (3.15,-0.2) {$r_+$};
  \node[above] at (5.55,0.12) {$r_{\mathrm{ph}+}$};
  \node[above] at (5.3,0.65) {subextremal exterior};
  \node[below] at (0,-0.48) {0};
  \node[below] at (3.15,-0.72) {$r>r_+$};
  \draw[->] (0,-1.55) -- (8,-1.55) node[right] {$r$};
  \draw[densely dashed] (3.15,-1.73) -- (3.15,-1.37);
  \draw[fill=black] (5.55,-1.55) circle (1.6pt);
  \node[below] at (3.15,-1.77) {$r_-=r_+=m$};
  \node[above] at (5.55,-1.42) {$r_{\mathrm{ph}+}=2m$};
  \node[above] at (5.2,-0.95) {extremal endpoint};
\end{tikzpicture}
~~~
