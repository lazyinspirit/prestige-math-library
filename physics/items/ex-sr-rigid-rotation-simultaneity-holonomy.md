---
id: ex-sr-rigid-rotation-simultaneity-holonomy
kind: example
domain: mathematics
title: "Worked rigid rotation: rest-space holonomy around the ring and failure of ring synchronization"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sr-fermi-walker-and-rigid-observer-examples, thm-sr-local-congruence-adapted-charts-and-frobenius, def-sr-observer-congruence-and-kinematics, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-parametrize-the-unit-circle]
dependency_roles:
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  thm-sr-local-congruence-adapted-charts-and-frobenius: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
---

## Example

Fix $R>0$ and let $\Omega$ satisfy $\Omega R=3c/5$, so that $\gamma=(1-9/25)^{-1/2}=5/4$ and $c^2-\Omega^2R^2=(16/25)c^2$. In the inertial chart the ring observer at angular position $\phi=\phi_0+\Omega t$ (chart time $t$) has unit tangent

$$n=\gamma\bigl(1,-\tfrac35\sin\phi,\tfrac35\cos\phi,0\bigr)=\tfrac54\bigl(1,-\tfrac35\sin\phi,\tfrac35\cos\phi,0\bigr),$$

which is future unit because $\gamma^2(-1+\tfrac{9}{25})=-\tfrac{25}{16}\cdot\tfrac{16}{25}=-1$. Writing the cylinder $r=R$ in the rotating angular coordinate $\varphi:=\phi-\Omega t$, so that the point has inertial coordinates $\bigl(ct,R\cos(\varphi+\Omega t),R\sin(\varphi+\Omega t)\bigr)$, the induced metric is

$$g=-\bigl(c^2-\Omega^2R^2\bigr)dt^2+2\Omega R^2\,dt\,d\varphi+R^2\,d\varphi^2=-\tfrac{16}{25}c^2dt^2+\tfrac65cR\,dt\,d\varphi+R^2d\varphi^2 .$$

The rest-space covector of $n$ restricted to the cylinder is proportional to $-\bigl(c^2-\Omega^2R^2\bigr)dt+\Omega R^2d\varphi=-\tfrac{16}{25}c^2dt+\tfrac35cR\,d\varphi$, so a curve tangent to the rest spaces satisfies $dt/d\varphi=\Omega R^2/(c^2-\Omega^2R^2)=15R/(16c)$; integrating over one turn $\varphi\in[0,2\pi]$ gives the nonzero chart-time offset

$$\Delta t=\frac{2\pi\Omega R^2}{c^2-\Omega^2R^2}=\frac{15\pi R}{8c}\ne0 .$$

Hence the curve tangent to the rest spaces starting at the observer returns to the same rotating label at a strictly later chart time: the rest simultaneity of the rotating congruence does not close up around the ring, and no globally single-valued real rest-synchronization time with time-oriented nonzero differential exists on the whole cylinder. The ambient congruence extends to the smooth future unit rotating field $n=\gamma(r)\bigl[\partial_0+(\Omega/c)(-x^2\partial_1+x^1\partial_2)\bigr]$ on $r<c/|\Omega|$, which is Born rigid, and the three-dimensional ambient rest distribution is nowhere integrable because its Frobenius form is nonzero; the one-dimensional rest distribution on the cylinder is locally integrable, so its nonzero global holonomy checked above is a different obstruction. This preserves the distinction between ambient local nonintegrability and global ring synchronization failure.

## Facts & Assumptions

**Given:** An inertial chart $(x^0=x^0,x^1,x^2,x^3)$ of the affine Minkowski model with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]), real $\Omega$ and $R>0$ with $\Omega R=3c/5$, the ambient rotating field $n$ and the ring of the Example ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (c)).

[L1] Supplier clause (c): on the open region $r^2=(x^1)^2+(x^2)^2<c^2/\Omega^2$ the field $K=\partial_0+(\Omega/c)(-x^2\partial_1+x^1\partial_2)$ satisfies $\eta(K,K)=-1+\Omega^2r^2/c^2$, the field $n=\gamma(r)K$ with $\gamma(r)=(1-\Omega^2r^2/c^2)^{-1/2}$ is a smooth future unit timelike Born-rigid congruence; $\kappa:=\eta(K,\cdot)=(-1,-(\Omega/c)x^2,(\Omega/c)x^1,0)$ has $d\kappa=2(\Omega/c)dx^1\wedge dx^2$ and $\kappa\wedge d\kappa=-2(\Omega/c)dx^0\wedge dx^1\wedge dx^2$, so $n^\flat\wedge d(n^\flat)\ne0$ when $\Omega\ne0$; on the cylinder $r=R$, $x^3=const$ with rotating angle $\varphi$, the ring observer $\phi=\phi_0+\Omega t$ has $n=\gamma(R)\bigl(1,-(\Omega R/c)\sin\phi,(\Omega R/c)\cos\phi,0\bigr)$, the induced metric is $-(c^2-\Omega^2R^2)dt^2+2\Omega R^2dtd\varphi+R^2d\varphi^2$, the ambient rest covector restricted to the cylinder is proportional to $-(c^2-\Omega^2R^2)dt+\Omega R^2d\varphi$, the rest lines satisfy $dt/d\varphi=\Omega R^2/(c^2-\Omega^2R^2)$, the one-turn offset is $2\pi\Omega R^2/(c^2-\Omega^2R^2)$, and no globally single-valued real rest-synchronization time on the cylinder exists when $\Omega\ne0$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (c), [[def-sr-observer-congruence-and-kinematics]]).

[L2] Frobenius criterion: for a smooth nowhere-zero one-form $\alpha$ on an open set, the rest distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$; for the rest form $\alpha=n^\flat$ this holds if and only if the vorticity vanishes, $\omega=0$ ([[thm-sr-local-congruence-adapted-charts-and-frobenius]] clauses (ii),(iii)(b)).

[L3] A future timelike unit vector field is a congruence, and a vector of the inertial chart with components $(u^0,u^1,u^2,u^3)$ has $\eta(u,u)=-(u^0)^2+(u^1)^2+(u^2)^2+(u^3)^2$ ([[def-sr-observer-congruence-and-kinematics]], [[def-inertial-frame-and-inertial-chart]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] Sine and cosine are the everywhere-convergent power series of [[def-sine-and-cosine-by-power-series]], with derivatives $\cos$ and $-\sin$ ([[thm-sine-and-cosine-derivatives]]), Pythagorean identity $\sin^2\phi+\cos^2\phi=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]), and period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]); the resulting angular parametrization modulo $2\pi$ is the unit circle ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

## Verification

**Proof technique:** direct.

1.1 Numerical data: $\Omega R=3c/5$ gives $\Omega^2R^2=9c^2/25$, hence $c^2-\Omega^2R^2=16c^2/25$, $2\Omega R^2=2(\Omega R)R=6cR/5$, $\Omega R^2/(c^2-\Omega^2R^2)=(3cR/5)/(16c^2/25)=15R/(16c)$ and $\gamma(R)=(1-9/25)^{-1/2}=5/4$; the ring field is $n=\gamma(R)\bigl(1,-(3/5)\sin\phi,(3/5)\cos\phi,0\bigr)=\frac54\bigl(1,-\frac35\sin\phi,\frac35\cos\phi,0\bigr)$. [L1, L3, algebra]

2.1 Future unit property: by [L3], $\eta(n,n)=\frac{25}{16}\bigl(-1+\frac{9}{25}(\sin^2\phi+\cos^2\phi)\bigr)=\frac{25}{16}\bigl(-1+\frac{9}{25}\bigr)=-\frac{25}{16}\cdot\frac{16}{25}=-1$, and the time component $\frac54>0$ makes $n$ future; this verifies the formula of the Example. [L3, step 1.1, L4]

2.2 Cylinder metric and rest covector: substituting $\phi=\varphi+\Omega t$, hence $d\phi=d\varphi+\Omega\,dt$, into $-c^2dt^2+R^2d\phi^2$ (the transverse coordinates being fixed) gives $-(c^2-\Omega^2R^2)dt^2+2\Omega R^2dtd\varphi+R^2d\varphi^2$; with the values of step 1.1 this is $-\frac{16}{25}c^2dt^2+\frac65cR\,dtd\varphi+R^2d\varphi^2$. The covector $\kappa$ of [L1] restricts as $-c\,dt+(\Omega R^2/c)d\phi=-c\,dt+(\Omega R^2/c)(d\varphi+\Omega dt)=-\frac{c^2-\Omega^2R^2}{c}dt+\frac{\Omega R^2}{c}d\varphi$, so $n^\flat=\gamma(R)\kappa$ is proportional to $-(c^2-\Omega^2R^2)dt+\Omega R^2d\varphi=-\frac{16}{25}c^2dt+\frac35cR\,d\varphi$; solving the kernel condition $-(c^2-\Omega^2R^2)\dot t+\Omega R^2\dot\varphi=0$ gives $dt/d\varphi=\Omega R^2/(c^2-\Omega^2R^2)=\frac{15R}{16c}$. [L1, step 1.1, algebra, L4]

3.1 One-turn holonomy: along the rest lines of step 2.2 the chart time changes by $\Delta t=\int_0^{2\pi}\frac{15R}{16c}\,d\varphi=\frac{15\pi R}{8c}$, which is nonzero; hence the rest line starting at $\varphi=0$ returns to the same rotating label $\varphi=2\pi$ at the chart time $\Delta t>0$, and it is not closed as a curve of simultaneity. The no-global-synchronization conclusion of [L1] applies to these ring rest lines with their nonzero time-oriented slope; its proof tests a real synchronization function on a closed angular lift and uses the nonzero fixed-sign angular derivative to contradict periodicity. Thus no such global synchronization time exists. [L1, step 2.2, algebra, L4]

4.1 Ambient nonintegrability: for $\Omega\ne0$ the Frobenius form of the ambient congruence is $n^\flat\wedge d(n^\flat)=\gamma^2\kappa\wedge d\kappa=-2\gamma^2(\Omega/c)dx^0\wedge dx^1\wedge dx^2$, which is nonzero at every point of the region $r<c/|\Omega|$; by [L2] the three-dimensional ambient rest distribution is nowhere integrable, so no local ambient rest-simultaneity hypersurface exists there. On the cylinder the rest distribution is one-dimensional: it is locally integrable because any nowhere-zero vector field has local flow-box coordinates, and its global nontrivial holonomy is the distinct obstruction computed in step 3.1, not an instance of the ambient pointwise nonintegrability. Both the ambient congruence and the ring congruence are Born rigid by [L1]. [L1, L2, step 3.1]

5.1 Conclusion: steps 1.1-2.1 verify the future unit ring field; step 2.2 computes the induced cylinder metric, the rest covector and the slope $dt/d\varphi=15R/(16c)$; step 3.1 computes the exact nonzero holonomy $\Delta t=15\pi R/(8c)$ and the failure of global ring synchronization; and step 4.1 exhibits the ambient nonintegrability of the three-dimensional rest distribution. The example therefore realizes the distinction, promised by [L1], between a locally integrable one-dimensional ring distribution with nonzero global holonomy and a nowhere-integrable ambient distribution. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Why the numbers are exact.** The choice $\Omega R=3c/5$ makes $\gamma=5/4$ and $c^2-\Omega^2R^2=(16/25)c^2$, so the slope is exactly $15R/(16c)$ and the one-turn offset is exactly $15\pi R/(8c)$. The ambient Frobenius three-form is exactly $-2\gamma(r)^2(\Omega/c)\,dx^0\wedge dx^1\wedge dx^2$, as computed in step 4.1; no approximation enters.

- **Two distinct obstructions.** The ambient three-dimensional rest distribution is nowhere integrable for $\Omega\ne0$ (nowhere-zero vorticity by [L2]); the one-dimensional distribution on the ring cylinder is locally integrable but has nonzero holonomy around the ring. The second is not a consequence of the first, and no locally defined synchronization function on the cylinder can be single-valued around the ring.
