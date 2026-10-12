---
id: ex-nrqm-magnetic-and-detection-finite-dark-bin-probability
aliases: [nrqm-magnetic-and-detection-example-finite-dark-bin-probability]
kind: example
domain: mathematics
title: "A dark bin of positive length has positive coherent probability"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, def-sine-and-cosine-by-power-series, def-complex-exponential, thm-algebra-of-derivatives, cor-primitives-of-a-continuous-function, def-countable-choice]
dependency_roles:
  thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4 pp. 13-18 (two-slit interference, dark fringes and intensities)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.3 pp. 92-95 (probability measures from vectors and interference of amplitudes)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Work on
$D=\mathbb R/\mathbb Z$ identified with $[0,1)$ and Lebesgue measure, and take
the two normalized amplitudes
$$a(x):=1,\qquad b(x):=e^{2\pi ix}\qquad(x\in[0,1)),$$
so that $\|a\|=\|b\|=1$ in $L^2(D)$ and
$|a(x)+b(x)|^2=2+2\cos(2\pi x)$
([[def-complex-exponential]], [[thm-sine-and-cosine-addition-formulas]]).
Then:

(a) the coherent law of
[[thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws]] is
$p_{\mathrm{coh}}(B)=\int_B\bigl(1+\cos(2\pi x)\bigr)dx$ for every measurable
$B\subseteq[0,1)$, and $p_{\mathrm{mix}}(B)=|B|$ for the balanced incoherent
law $w=\frac12$, where $|B|$ is Lebesgue measure; in particular
$p_{\mathrm{coh}}(B)\le p_{\mathrm{mix}}(B)$ on bins where the cosine is
negative on average;

(b) the density $1+\cos(2\pi x)$ vanishes at the single point
$x_0=\frac12$, the ideal dark point; nevertheless for every
$\varepsilon\in(0,\frac12)$ the symmetric dark bin
$B_\varepsilon=(\frac12-\varepsilon,\frac12+\varepsilon)$ has
$$p_{\mathrm{coh}}(B_\varepsilon)=2\varepsilon-\frac{\sin(2\pi\varepsilon)}{\pi} =\frac{2\pi^2}{3}\varepsilon^3+O(\varepsilon^5)>0,$$
so a bin of positive length containing the dark point is not forbidden;

(c) for the same bin $p_{\mathrm{mix}}(B_\varepsilon)=2\varepsilon$, so
$p_{\mathrm{coh}}(B_\varepsilon)<p_{\mathrm{mix}}(B_\varepsilon)$ and the
visibility of the pattern is a property of the accumulated distribution over
bins, not of a single detection.

The example is a computation in the specified two-amplitude model; it asserts
no detector law, no measured counts and no empirical conclusion.

## Verification

**Given:** the amplitudes $a=1$, $b(x)=e^{2\pi ix}$ on $[0,1)$ and bins $B_\varepsilon$ as above.

**Proof technique:** direct evaluation of the two bin laws and of the elementary integral $\int\cos(2\pi x)dx$, together with the pointwise vanishing of the density at $x_0=\frac12$.

[F1] $\|a+b\|^2=\int_0^1|1+e^{2\pi ix}|^2dx$ and, for every measurable bin $B$, $p_{\mathrm{coh}}(B)=\|a+b\|^{-2}\int_B|a+b|^2$; for unit $a,b$ the balanced incoherent law is $p_{\mathrm{mix}}(B)=\frac12\int_B|a|^2+\frac12\int_B|b|^2$ ([[thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws]] clauses (a), (b)).

[F2] $|1+e^{2\pi ix}|^2=(1+e^{2\pi ix})(1+e^{-2\pi ix})=2+2\cos(2\pi x)$; $\int_0^1\cos(2\pi x)dx=0$; and $\frac d{dx}\sin(2\pi x)=2\pi\cos(2\pi x)$ with $\sin(\pi\pm\theta)=\mp\sin\theta$ for the second fundamental theorem of calculus applied to the continuous primitive $\frac{\sin(2\pi x)}{2\pi}$ ([[def-complex-exponential]], [[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[cor-primitives-of-a-continuous-function]]).

1.1 [The two laws] By [F2], $\|a+b\|^2=\int_0^1(2+2\cos(2\pi x))dx=2$, so $p_{\mathrm{coh}}(B)=\frac12\int_B(2+2\cos(2\pi x))dx=\int_B(1+\cos(2\pi x))dx$ by [F1]. Since $|a|=|b|=1$, $p_{\mathrm{mix}}(B)=\frac12|B|+\frac12|B|=|B|$. This is (a). [given, F1, F2, algebra]

2.1 [The dark point and the dark bin] The density $1+\cos(2\pi x)$ equals $1+\cos\pi=0$ at $x_0=\frac12$, a single point of Lebesgue measure zero. For $0<\varepsilon<\frac12$, [F2] gives $\int_{1/2-\varepsilon}^{1/2+\varepsilon}\cos(2\pi x)dx=\frac{\sin(2\pi x)}{2\pi}\bigr|_{1/2-\varepsilon}^{1/2+\varepsilon}=\frac{\sin(\pi+2\pi\varepsilon)-\sin(\pi-2\pi\varepsilon)}{2\pi}=\frac{-\sin(2\pi\varepsilon)-\sin(2\pi\varepsilon)}{2\pi}=-\frac{\sin(2\pi\varepsilon)}\pi$, so $p_{\mathrm{coh}}(B_\varepsilon)=2\varepsilon-\frac{\sin(2\pi\varepsilon)}\pi$. Since $0<2\pi\varepsilon<\pi$ and $\sin\theta<\theta$ for $\theta>0$, $2\varepsilon=\frac{2\pi\varepsilon}\pi>\frac{\sin(2\pi\varepsilon)}\pi$, so the probability is strictly positive; the Taylor expansion of $\sin$ gives $2\varepsilon-\frac{\sin(2\pi\varepsilon)}\pi=\frac{(2\pi\varepsilon)^3}{6\pi}+O(\varepsilon^5)=\frac{2\pi^2}3\varepsilon^3+O(\varepsilon^5)$. This is (b). [given, F2, step 1.1, algebra]

3.1 [Comparison and scope] By step 1.1, $p_{\mathrm{mix}}(B_\varepsilon)=2\varepsilon$, so the strict inequality of step 2.1 gives $p_{\mathrm{coh}}(B_\varepsilon)<p_{\mathrm{mix}}(B_\varepsilon)$; this is (c). The statements are properties of the two computed bin laws on the specified amplitudes, and no observed frequency is claimed. [given, step 1.1, step 2.1, algebra] ∎
