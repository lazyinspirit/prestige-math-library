---
id: ex-gr-fx05-1
kind: example
title: "A compact Bondi-news pulse with prescribed shear memory"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: "Formal Bondi-boundary data with a constructed smooth Bondi-Sachs end and an imposed vacuum-form mass-aspect constraint; no Ricci-flatness, global vacuum solution, or observed waveform is asserted."
deps:
  - def-gr-fx-bondi-expansion
  - lem-gr-fx-bondi-mass-coefficient
  - prop-gr-fx-memory-integral
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  lem-gr-fx-bondi-mass-coefficient: formulation-prerequisite
  prop-gr-fx-memory-integral: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (58), (60)-(61)"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §§5.2.1 and 6"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pending
---

## Example

Let $\tau>0$ be a pulse length and let $a\ne0$ be a length. On the unit sphere $S^2\subset\mathbb R^3$, let $q_{AB}$ be the unit round metric, $D_A$ its Levi-Civita derivative, and $d\Omega$ its area form. Put $Y(x)=\tfrac12(3x_3^2-1)$ and $T_{AB}=D_AD_BY-\tfrac12q_{AB}D^CD_CY$. Define the dimensionless bump $b(z)=e^{-1/(1-z^2)}$ for $|z|<1$ and $b(z)=0$ otherwise, let $Z=\int_{-1}^1b(z)\,dz$, and set $g_\tau(u)=b(u/\tau)/(\tau Z)$ and $\Phi_\tau(u)=\int_{-\infty}^u g_\tau(v)\,dv$. Then $g_\tau$ has units $\mathrm{length}^{-1}$, support $[-\tau,\tau]$, and integral one. Set $C_{AB}=a\Phi_\tau T_{AB}$ and $N_{AB}=\partial_uC_{AB}=ag_\tau T_{AB}$. Impose the local coefficient constraint $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ on these formal boundary data, with $m(-\tau,x)=0$, and define $m_B(u)=\tfrac1{4\pi}\int_{S^2}m(u,x)\,d\Omega$. It gives $\Delta C_{AB}=aT_{AB}$ and

$$m_B(\tau)-m_B(-\tau)=-\frac{a^2}{32\pi}\left(\int_{-\tau}^{\tau}g_\tau(u)^2\,du\right)\left(\int_{S^2}T_{AB}T^{AB}\,d\Omega\right)<0.$$

Let $r_0>0$ be a fixed inner radial cutoff with units of length. For the formal first-order detector response at a fixed sufficiently large area radius $r>r_0$, take a smooth screen-TT remainder $\rho_{AB}$ with $\sup_{[-\tau,\tau]}|\partial_u^j\rho_{AB}|\le K_jr^{-2}$ for $j=0,1,2$, where $K_j$ has dimensions $\mathrm{length}^{2-j}$, and put $H_{AB}=C_{AB}/r+\rho_{AB}$. In a fixed $q$-orthonormal screen basis, let $s_0^A$ be the initial separation and define $\delta s^A$ on $[-\tau,\tau]$ by $\partial_u^2\delta s^A=\tfrac12\partial_u^2H^A{}_B s_0^B$ with $\delta s(-\tau)=\partial_u\delta s(-\tau)=0$, raising indices with $q^{AB}$. Then $\delta s^A(\tau)=\tfrac{a}{2r}T^A{}_Bs_0^B+O(r^{-2}|s_0|)$; the formal clause alone makes no finite-amplitude error claim.

For any smooth normalized local metric family satisfying the quantitative clause of [[prop-gr-fx-memory-integral]] with this same $H$, use its initially covariantly comoving exact Jacobi field and parallel screen components $s_\lambda$. Then
$$s_\lambda(\tau)-s_0=\frac{\lambda a}{2r}T s_0+O(|\lambda|r^{-2}|s_0|)+O(\lambda^2|s_0|),\qquad s_\lambda'(\tau)=O(|\lambda|r^{-2}|s_0|)+O(\lambda^2|s_0|).$$
The amplitude-squared constants are for the fixed local family, tube and interval $[-\tau,\tau]$; $\lambda$ is its controlled dimensionless parameter. This does not assert Ricci-flatness of the constructed Bondi-Sachs end or identify that end with the local detector family.

## Example references

[[def-gr-fx-bondi-expansion]]

[[lem-gr-fx-bondi-mass-coefficient]]

[[prop-gr-fx-memory-integral]]

## Pulse schematic

The blue curve shows the dimensionless profile $\tau g_\tau$ and the green curve shows its primitive $\Phi_\tau$. The curves are schematic; all identities are verified from the explicit definitions in the Example and Verification.

```tikz
\begin{tikzpicture}[>=stealth,x=1.1cm,y=1.0cm]
  \draw[->] (-2.1,0) -- (2.2,0) node[right] {$u/\tau$};
  \draw[->] (-2,0) -- (-2,1.25) node[above] {$\tau g_\tau(u)$};
  \draw[blue,thick] plot[smooth] coordinates {(-2,0) (-1,0) (-0.9,0.12) (-0.6,0.62) (-0.3,0.95) (0,1.08) (0.3,0.95) (0.6,0.62) (0.9,0.12) (1,0) (2,0)};
  \draw[green!60!black,thick] plot[smooth] coordinates {(-2,0) (-1,0) (-0.9,0.03) (-0.6,0.14) (-0.3,0.32) (0,0.5) (0.3,0.68) (0.6,0.86) (0.9,0.97) (1,1) (2,1)};
  \node[blue] at (1.6,0.55) {$\tau g_\tau$};
  \node[green!60!black] at (1.7,1.08) {$\Phi_\tau(u)=\int_{-\infty}^u g_\tau$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The smooth Bondi-Sachs end constructed in [L1], the imposed formal mass-aspect coefficient constraint in [F2], and the first-order detector result in [[prop-gr-fx-memory-integral]]. The retarded-time domain is $\mathbb R$, and the pulse is supported on $[-\tau,\tau]$.

[F1] $q_{AB}$ is positive definite, $D$ is its Levi-Civita derivative, and $d\Omega$ is the finite area measure on the unit sphere; a Bondi shear is a symmetric trace-free smooth sphere tensor and $N_{AB}=\partial_uC_{AB}$ ([[def-gr-fx-bondi-expansion]]).

[F2] For these formal boundary data, the local coefficient equation $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$ is imposed as a condition; the same equation is the vacuum coefficient established under the stronger metric hypotheses in [[lem-gr-fx-bondi-mass-coefficient]]. No integrated mass-loss theorem is assumed for this example.

[F3] The quantitative clause of [[prop-gr-fx-memory-integral]] also gives the stated actual Jacobi amplitude estimate for each supplied smooth normalized local family. If the news vanishes at both endpoints, the formal first-order screen response defined in [[prop-gr-fx-memory-integral]] satisfies $\delta s^A=\tfrac1{2r}\Delta C^A{}_Bs_0^B+O(r^{-2}|s_0|)$ under its explicit screen and remainder hypotheses.

[A1] Countable Choice $\mathrm{AC}_\omega$ is inherited for the smooth Lorentzian and sphere-bundle conventions; no full Axiom of Choice is used ([[def-countable-choice]]).

[A2] $a\ne0$ and $\tau>0$ are lengths. The local coefficient equation is imposed on the formal data, not deduced from a vacuum metric. The first detector clause is formal; its additional quantitative clause is conditional on the specified smooth normalized local metric family and is not an observation.

[L1] Fix any positive length $r_0$. For the formal fields $C,m$ above, define a metric on $\mathbb R\times(r_0,\infty)\times S^2$ by $S^A{}_B:=q^{AC}C_{CB}$, $\gamma_{AB}:=q_{AC}(\exp(S/r))^C{}_B$, $\beta=0$, $U^A=0$, and $V=r-2m$, so
$$g=-(V/r)du^2-2du\,dr+r^2\gamma_{AB}dx^A dx^B.$$
The endomorphism $S/r$ is dimensionless, $q$-self-adjoint and trace-free, so $\exp(S/r)$ is positive, $q$-self-adjoint and has determinant one. Hence $\det\gamma=\det q$, and the $u,r$ block has determinant $-1$ while the angular block is positive; $g$ is Lorentzian with signature $(-,+,+,+)$. The expansion is $\gamma_{AB}=q_{AB}+C_{AB}/r+\tfrac12 C_A{}^CC_{CB}/r^2+O(r^{-3})$. The exponential series and its first two $u$, angular and radial derivatives give the differentiated uniform remainder bounds on compact slabs. Thus [L1] constructs a smooth Bondi-Sachs end satisfying the non-vacuum smooth-expansion hypothesis used by the memory proposition; no vacuum Ricci equations are asserted for this metric.

## Verification

**Given:** [F1]–[F3], [A1]–[A2], and the local construction [L1].

1.1 The scalar $Y$ is smooth because it is the restriction of a polynomial on $\mathbb R^3$. By contraction, $q^{AB}T_{AB}=D^2Y-\tfrac12(2)D^2Y=0$. In spherical coordinates at the equator $\theta=\pi/2$, $D_\theta D_\theta Y=3$, $D_\phi D_\phi Y=0$, and $D^2Y=3$, so $T_{\theta\theta}=3/2\ne0$. Thus $T$ is a nonzero smooth trace-free tensor. [A1, F1, given, algebra]

1.2 For dimensionless $z$, define $b(z)=e^{-1/(1-z^2)}$ for $|z|<1$ and $b(z)=0$ for $|z|\ge1$. Every derivative of the interior formula is a polynomial in $(1-z^2)^{-1}$ and $z$ times $e^{-1/(1-z^2)}$, which tends to zero at both endpoints; hence the zero extension is smooth. With $Z=\int_{-1}^{1}b(z)\,dz>0$, the change of variable $z=u/\tau$ shows that $g_\tau(u)=b(u/\tau)/(\tau Z)$ is smooth, nonnegative, supported on $[-\tau,\tau]$, has units $\mathrm{length}^{-1}$, and has integral one. Its primitive $\Phi_\tau(u)=\int_{-\infty}^u g_\tau(v)\,dv$ is smooth, equals $0$ for $u\le-\tau$, equals $1$ for $u\ge\tau$, and has derivative $g_\tau$. [given, construct, algebra]

2.1 The fields $C_{AB}=a\Phi_\tau T_{AB}$ and $N_{AB}=ag_\tau T_{AB}$ are smooth and trace-free, and $N=\partial_uC$. Therefore $\Delta C_{AB}=aT_{AB}$ by the normalization $\int g_\tau=1$. Define
$$m(u,x):=\frac14D_AD_B\bigl(C^{AB}(u,x)-C^{AB}(-\tau,x)\bigr)-\frac18\int_{-\tau}^{u}N_{AB}(v,x)N^{AB}(v,x)\,dv.$$
This is smooth, has $m(-\tau,x)=0$, and direct differentiation verifies the imposed local coefficient equation [F2]. The metric construction [L1] gives a smooth Bondi-Sachs end with these coefficients, but does not impose the vacuum Ricci equations. [F1, F2, A2, L1, step 1.1, step 1.2, construct, algebra]

3.1 Let $X^A:=D_BT^{AB}$. In spherical coordinates, $D_AX^A\,d\Omega=\{\partial_\theta(\sin\theta X^\theta)+\partial_\phi(\sin\theta X^\phi)\}\,d\theta\,d\phi$. The $\phi$ boundary terms cancel by periodicity, and smoothness of $X$ makes its meridional component $X^\theta$ bounded near either pole, so $\sin\theta X^\theta\to0$ there. Hence $\int_{S^2}D_AD_BT^{AB}\,d\Omega=0$. Integrating the explicit $m$ from step 2.1 over the sphere therefore yields
$$m_B(\tau)-m_B(-\tau)=-\frac{a^2}{32\pi}\left(\int_{-\tau}^{\tau}g_\tau(u)^2\,du\right)\left(\int_{S^2}T_{AB}T^{AB}\,d\Omega\right).$$
The time integral is positive because $g_\tau$ is continuous and has unit integral. The sphere integral is positive because $q$ is positive definite and $T$ is continuous and nonzero by step 1.1. Since $a\ne0$, the mass change is strictly negative. This derivation uses only the imposed coefficient equation, not the smooth-vacuum mass-loss proposition. [A2, F1, F2, step 1.1, step 1.2, step 2.1, algebra]

3.2 The pulse has $N(-\tau)=N(\tau)=0$, so [F3] applies. Its integrated shear change is $\Delta C=aT$, hence the formal first-order detector response is $\delta s^A(\tau)=\tfrac{a}{2r}T^A{}_Bs_0^B+O(r^{-2}|s_0|)$. The finite-radius qualification is the stated one; the formal calculation uses no nonlinear amplitude remainder. [F3, step 2.1, A2, algebra]

3.3 If the normalized local family in the Example is supplied, apply the quantitative clause of [F3] with $u_1=-\tau$, $u_2=\tau$ and $\Delta C=aT$. The news vanishes at both endpoints because the smooth bump and all its derivatives vanish there. The result is the displayed actual Jacobi displacement and velocity estimate, with exactly that theorem's fixed-family amplitude constants. This uses the imposed formal boundary coefficients and detector-family hypotheses, not an inference of a vacuum metric or a measurement. [F3, step 2.1, A2, algebra] ∎
