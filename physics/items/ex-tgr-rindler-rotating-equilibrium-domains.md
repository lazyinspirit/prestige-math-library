---
id: ex-tgr-rindler-rotating-equilibrium-domains
kind: example
title: Rindler and rigid rotating bath domains
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-tolman-ehrenfest
  - prop-tgr-rotating-mode-gibbs-obstruction
dependency_roles:
  pthm-tgr-tolman-ehrenfest: physical-result
  prop-tgr-rotating-mode-gibbs-obstruction: mathematical-premise
physical_scope: "Rindler right wedge and rigidly rotating Minkowski domain inside its light cylinder; arbitrary positive classical reference temperature; differential rotation and one-mode trace restrictions kept distinct."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 8.033 (Fall 2024), Introduction to Relativity and Spacetime Physics, full lecture notes, §§14.5–14.6"
      url: "https://ocw.mit.edu/courses/8-033-introduction-to-relativity-and-spacetime-physics-fall-2024/mit8_033_f24_lec_full.pdf"
      locator: "Full 197-page PDF; Rindler coordinates, metric, and constant-position observer acceleration, PDF pp. 116–120."
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§IV and VII.A"
      url: "https://arxiv.org/pdf/1807.02915"
      locator: "Full 7-page PDF; selected Killing flows, rigid rotation, and the timelike-domain restrictions on rotating generators, PDF pp. 3–6."
---

## Example

**Rindler right wedge.** Let $a_0>0$ be an acceleration in $\mathrm{m\,s^{-2}}$, use coordinates $(x^0,x,y,z)$ with $x^0=ct$, and take the open domain $x>0$ with metric

$ds^2=-\left(\frac{a_0x}{c^2}\right)^2(dx^0)^2+dx^2+dy^2+dz^2.$

The selected Killing field $\xi_R=\partial_{x^0}$ has lapse $N_R=a_0x/c^2$ and observer acceleration $a_x=1/x$, so the physical proper-acceleration magnitude is $c^2/x$. The selected stationary-bath model gives

$T_R(x)=\frac{T_Kc^2}{a_0x}.$

At the reference point $x_{\rm ref}=c^2/a_0$, $N_R=1$ and $T_R=T_K$. Any $T_K>0$ is allowed by this classical geometric model; the metric and temperature relation do not select the Unruh value.

**Rigid rotation in Minkowski spacetime.** In cylindrical coordinates let

$ds^2=-(dx^0)^2+dr^2+r^2d\phi^2+dz^2,\qquad \xi_\Omega=\partial_{x^0}+\frac{\Omega}{c}\partial_\phi,$

where $\Omega$ is a constant angular velocity in $\mathrm{s^{-1}}$. For $\Omega\ne0$, use the annular domain $0<r<c/|\Omega|$; for $\Omega=0$, $\xi_\Omega=\partial_{x^0}$ is timelike throughout Minkowski space. On the rotating domain,

$N_\Omega=\sqrt{1-\frac{\Omega^2r^2}{c^2}},\qquad T_\Omega(r)=\frac{T_K}{N_\Omega}.$

The radial acceleration component is $a_r=-\Omega^2r/[c^2(1-\Omega^2r^2/c^2)]$, directed inward, with physical magnitude $\gamma^2\Omega^2r$, where $\gamma=(1-\Omega^2r^2/c^2)^{-1/2}$. At the light cylinder $r=c/|\Omega|$, $\xi_\Omega$ becomes null and the normalized stationary observer does not exist. A differential-rotation field $\partial_{x^0}+[\Omega(r)/c]\partial_\phi$ is not Killing when $\Omega'(r)\ne0$: its metric Lie derivative has $(\mathcal L_\xi g)_{r\phi}=r^2\Omega'(r)/c$.

**One-mode trace check.** If an additional model specifies a single bosonic mode with lab Hamiltonian $H=\epsilon\mathcal N$ and angular momentum $J=\hbar j\mathcal N$, then its rotating generator is $H-\Omega J$. Its Gibbs trace is finite exactly when $\epsilon-\hbar j\Omega>0$. This is the separate one-mode spectral condition of [[prop-tgr-rotating-mode-gibbs-obstruction]]; it does not prove a continuum-field trace obstruction or describe every rotating equilibrium state.

## Domain sketches

The left panel uses dimensionless Minkowski coordinates $(X/\ell,X^0/\ell)$ for a fixed length $\ell>0$ and the exact Rindler embedding

$X=x\cosh(a_0x^0/c^2),\qquad X^0=x\sinh(a_0x^0/c^2).$

It maps $x>0$ onto the right wedge $X>|X^0|$; the red curve is the constant-Rindler-position orbit $x=\ell$, which obeys $X^2-(X^0)^2=\ell^2$. The right panel is a fixed-$z$ cross-section of the $\Omega\ne0$ rotating timelike domain. Its dashed circle is the excluded null boundary $r=c/|\Omega|$, and the shaded open disk is where $g(\xi_\Omega,\xi_\Omega)<0$. The sketches show domains only; every lapse, acceleration, and temperature claim is established by the coordinate calculations in Verification.

```tikz
\begin{tikzpicture}
\begin{scope}[x=0.7cm,y=0.48cm]
  \node[font=\small] at (2.2,4.15) {Rindler right wedge};
  \fill[blue!8] (0,0)--(3.3,3.3)--(4.5,3.3)--(4.5,-3.3)--(3.3,-3.3)--cycle;
  \draw[gray,dashed] (0,0)--(3.3,3.3);
  \draw[gray,dashed] (0,0)--(3.3,-3.3);
  \draw[->] (-0.2,0)--(4.6,0) node[right] {$X/\ell$};
  \draw[->] (0,-3.45)--(0,3.55) node[above] {$X^0/\ell$};
  \draw[thick,red] plot[domain=-1.3:1.3,samples=50] ({cosh(\x)},{sinh(\x)});
  \node[align=center] at (3.5,0) {right\ wedge};
  \node[red,anchor=west] at (1.1,1.2) {$x=\ell$};
  \node[above right] at (2.35,2.35) {$X=X^0$};
  \node[below right] at (2.35,-2.35) {$X=-X^0$};
\end{scope}
\begin{scope}[xshift=6.4cm,x=0.8cm,y=0.8cm]
  \node[font=\small] at (0,2.65) {Rigid rotation at fixed $z$};
  \fill[blue!8] (0,0) circle (1.8);
  \draw[->] (-2.1,0)--(2.15,0) node[right] {$X$};
  \draw[->] (0,-2.1)--(0,2.15) node[above] {$Y$};
  \draw[thick,dashed] (0,0) circle (1.8);
  \draw[->,thick] (0,0)--(1.8,0) node[midway,below] {$c/|\Omega|$};
  \node at (0,0.55) {timelike};
  \node[anchor=south west] at (0.95,1.15) {null boundary};
\end{scope}
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed Rindler and Minkowski metrics, the constant parameters $a_0>0$ and $\Omega$, and a selected stationary bath only where its stated Killing field is future timelike.

[F1] [[pthm-tgr-tolman-ehrenfest]]: on a selected connected stationary bath, $N_\xi T=T_K$ and $a=\nabla\log N_\xi$ for the chosen future timelike Killing field. Its physical conclusion is conditional on the postulated bath, not a universal thermometer law.

[F2] [[prop-tgr-rotating-mode-gibbs-obstruction]]: for a single bosonic occupation mode with $\epsilon>0$, integer mode number, $\Omega$ in $\mathrm{s^{-1}}$, and positive inverse temperature, the diagonal partition sum is finite exactly when $\epsilon-\hbar j\Omega>0$. The proposition explicitly constructs no continuum field state.

[A1] The Rindler metric and the rotating Minkowski metric are the exact model geometries used in this example; $\xi_R$ and $\xi_\Omega$ are the explicitly selected Killing generators on their respective timelike domains.

[A2] The Rindler and rotating temperature fields are conditional classical bath assumptions. No equilibrium state is constructed, and no Unruh or Hawking temperature is inferred.

[A3] The one-mode trace paragraph applies only when the additional Hamiltonian and angular-momentum assignments displayed in the Example are adopted.

## Verification
**Proof technique:** Compute the lapse and acceleration in each exact geometry, apply the conditional Tolman relation, and keep the single-mode trace premise separate.

1.1 The Rindler metric is independent of $x^0$, so $\xi_R$ is Killing. Its norm is $g(\xi_R,\xi_R)=-(a_0x/c^2)^2<0$ on $x>0$, hence $N_R=a_0x/c^2$. Differentiating $\log N_R$ gives $a_x=1/x$, whose metric norm is $1/x$. [given, A1, algebra]

1.2 In the rotating Minkowski metric, $\partial_{x^0}$ and $\partial_\phi$ are Killing fields and $\Omega$ is constant, so their displayed linear combination $\xi_\Omega$ is Killing. Its squared norm is $-1+\Omega^2r^2/c^2$, which is negative exactly for $r<c/|\Omega|$ when $\Omega\ne0$; therefore $N_\Omega=\sqrt{1-\Omega^2r^2/c^2}$. [given, A1, algebra]

1.3 For a nonconstant angular velocity, the coordinate formula for the Lie derivative gives $(\mathcal L_\xi g)_{r\phi}=g_{\phi\phi}\partial_r(\Omega/c)=r^2\Omega'(r)/c$. Thus if $\Omega'(r)\ne0$, this field is not Killing and the selected stationary theorem does not apply. [given, algebra]

2.1 By [F1] and [A2], the selected Rindler bath has $T_R=T_K/N_R=T_Kc^2/(a_0x)$ and physical proper acceleration $c^2|a|=c^2/x$. The point $x_{\rm ref}=c^2/a_0$ has $N_R=1$, so it provides the stated reference normalization. [F1, A2, step 1.1, algebra]

2.2 Applying [F1] on that selected timelike domain yields $T_\Omega=T_K/N_\Omega$. Differentiating $\log N_\Omega$ gives $a_r=-\Omega^2r/[c^2(1-\Omega^2r^2/c^2)]$. Since $g_{rr}=1$, its physical magnitude is $c^2|a_r|=\gamma^2\Omega^2r$. At the light cylinder the norm tends to zero and the timelike-field hypothesis of [F1] fails. [F1, step 1.2, algebra]

3.1 Under [A3], the mode generator has coefficient $a=\epsilon-\hbar j\Omega$ in the exact occupation model of [F2]. Applying [F2] gives a finite trace exactly for $a>0$. This condition is logically separate from the geometric timelike-domain condition in step 1.2 and supplies no continuum-field conclusion. [F2, A3, step 1.2] ∎
