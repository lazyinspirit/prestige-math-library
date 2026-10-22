---
id: lem-emx-paraxial-phase-multiplier-bound
kind: lemma
title: Uniform phase-multiplier bound for the square-root dispersion law
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-exponential
  - def-limit-point-r
  - lem-complex-conjugation-and-modulus-laws
  - lem-of-square-monotone
  - thm-complex-exponential-addition-and-real-extension
  - thm-reals-cauchy-complete
  - thm-of-square-roots
  - thm-sine-and-cosine-derivatives
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-limit-point-r: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "§6.3, angular-spectrum propagation and the positive square-root longitudinal wave number; the present uniform remainder estimate is proved locally."
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§2, equations (2), (8), and (11), PDF pp. 2253–2254: angular-spectrum data and the square-root dispersion factor; the uniform inequality here is proved locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $k_0>0$, $0<\delta<1$, $z\in\mathbb R$, and $s\in[0,\delta^2]$. Define

$$R(s):=1-\frac{s}{2}-\sqrt{1-s}.$$

Then

$$R(s)=\frac{s^2}{4\left(1-\frac{s}{2}+\sqrt{1-s}\right)},\qquad 0\le R(s)\le\frac{s^2}{8(1-\delta^2)^{3/2}},$$

and

$$\left|e^{izk_0\sqrt{1-s}}-e^{izk_0(1-s/2)}\right| \le \frac{|z|k_0s^2}{8(1-\delta^2)^{3/2}}.$$

More generally, for all real $a,b$,
$$|e^{ia}-e^{ib}|\le|a-b|.$$

## Statement references

[[thm-of-square-roots]]

[[thm-reals-cauchy-complete]]

[[lem-of-square-monotone]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[cor-trigonometric-parity-and-pythagorean-identity]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[lem-complex-conjugation-and-modulus-laws]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

[[thm-sine-and-cosine-derivatives]]

[[cor-differentiable-implies-continuous]]

[[def-limit-point-r]]

[[cor-mean-value-theorem]]

## Facts & Assumptions

**Given:** Reals $k_0>0$, $0<\delta<1$, $z\in\mathbb R$, and $s\in[0,\delta^2]$.

[F1] The real numbers form a complete ordered field, and each nonnegative real has a unique nonnegative square root; a positive radicand has a positive root. [[thm-reals-cauchy-complete]] [[thm-of-square-roots]]

[F2] For real $t$, $e^{it}=\cos t+i\sin t$ and $e^{i\pi}=-1$. The parity and Pythagorean identities give $\cos(-t)=\cos t$, $\sin(-t)=-\sin t$, and $\cos^2t+\sin^2t=1$; with the complex-modulus definition this gives $|e^{it}|=1$ and $|\cos t|,|\sin t|\le1$. For $w=a+ib$, conjugation is $\overline w=a-ib$ and $|w|=\sqrt{a^2+b^2}$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[cor-trigonometric-parity-and-pythagorean-identity]] [[def-complex-conjugate-real-imaginary-part-and-modulus]]

[F3] The complex exponential satisfies $e^{a+b}=e^ae^b$ for complex $a,b$. [[def-complex-exponential]] [[thm-complex-exponential-addition-and-real-extension]]

[F4] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with
derivatives $\cos$ and $-\sin$, and $\sin 0=0$. Every real $t$ is a limit point of $\mathbb R$:
for $\varepsilon>0$, $t+\varepsilon/2$ is a distinct point within distance
$\varepsilon$. Thus both functions are continuous on $\mathbb R$.
[[thm-sine-and-cosine-derivatives]] [[cor-differentiable-implies-continuous]] [[def-limit-point-r]] [[thm-reals-cauchy-complete]]

[F5] If a real function is continuous on a closed nondegenerate interval and differentiable on its interior, its endpoint difference equals its derivative at some interior point times the interval length. [[cor-mean-value-theorem]]

[F6] Complex conjugation is an involution, $\overline{zw}=\overline z\,\overline w$, and the complex modulus is multiplicative: $|zw|=|z||w|$. [[lem-complex-conjugation-and-modulus-laws]]

## Proof

1.1 Rationalizing the definition of $R$ gives $R(s)=\bigl((1-s/2)^2-(1-s)\bigr)/(1-s/2+\sqrt{1-s}) =s^2/\bigl(4(1-s/2+\sqrt{1-s})\bigr)$. The denominator is positive because $s<1$. [given, F1, algebra]

1.2 For real $a,b$, put $d:=a-b$ and $t:=d/2$. By [F3], $e^{ia}-e^{ib}=e^{ib}e^{it}(e^{it}-e^{-it})$. From the Euler formula and parity in [F2], $e^{-it}=\overline{e^{it}}$, so $e^{it}-e^{-it}=2i\sin t$; its modulus is $2|\sin t|$. By [F2] and [F6], the prefactor has modulus $|e^{ib}e^{it}|=|e^{ib}||e^{it}|=1$, and therefore $|e^{ia}-e^{ib}|=2|\sin t|$. If $d\ne0$, apply [F5] to $\sin$ on $[\min(0,t),\max(0,t)]$; [F2] gives $|\cos|\le1$, so [F4] yields $|\sin t|\le|t|$. The same inequality is immediate for $d=0$. Thus $|e^{ia}-e^{ib}|\le|a-b|$. [F2, F3, F4, F5, F6, algebra]

2.1 Put $t:=\sqrt{1-\delta^2}$, so $0<t\le1$. Since $1-s\ge1-\delta^2$, the nonnegative roots obey $\sqrt{1-s}\ge t$: otherwise the difference of their squares, factored as a product of a positive sum and positive difference, would give $1-s<1-\delta^2$. Hence $1-s/2+\sqrt{1-s}\ge1-\delta^2/2+t=(1+t)^2/2\ge2t^3$; the last inequality follows from $(1+t)^2\ge4t$ and $t\ge t^3$. Substitution into step 1.1 proves $0\le R(s)\le s^2/(8t^3)$. [given, F1, step 1.1, algebra]

3.1 Set $a:=zk_0\sqrt{1-s}$ and $b:=zk_0(1-s/2)$ in step 1.2. Then $|a-b|=|z|k_0R(s)$, so step 2.1 gives the stated multiplier bound. [given, step 2.1, step 1.2, algebra] ∎

