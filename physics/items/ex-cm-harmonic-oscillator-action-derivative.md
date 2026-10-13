---
id: ex-cm-harmonic-oscillator-action-derivative
kind: example
title: "The harmonic oscillator action variable $J_{\\mathrm a}(E)=E/\\omega$ and $J_{\\mathrm a}'(E)=T/(2\\pi)$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-action-variable-derivative, def-cm-one-dimensional-action-variable, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, thm-substitution, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-of-square-roots]
dependency_roles:
  thm-cm-action-variable-derivative: mathematical-premise
  def-cm-one-dimensional-action-variable: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-substitution: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-of-square-roots: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §4.5.1 and §4.5.3, printed pp. 105-111: the harmonic oscillator action variable and the period relation $\\mathrm dE/\\mathrm dI=\\omega$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Example

Let $m>0$, $k>0$, $U(q)=\frac12kq^2$ on $J_0=\mathbb R$, and for $E>0$ set
$$a(E):=-\sqrt{\frac{2E}{k}},\qquad b(E):=\sqrt{\frac{2E}{k}},\qquad \omega:=\sqrt{\frac{k}{m}},\qquad T:=\frac{2\pi}{\omega}.$$
Then the datum $(J_0,U,m,a,b)$ satisfies the hypotheses of
[[thm-cm-action-variable-derivative]] on every bounded open interval
$(E_0,E_1)$ with $0<E_0<E_1<\infty$. These restrictions define the same
action on overlaps, hence together give a $C^1$ function on $(0,\infty)$; the
action variable of [[def-cm-one-dimensional-action-variable]] is
$$J_{\mathrm a}(E)=\frac{E}{\omega}\qquad(E>0),$$
and
$$J_{\mathrm a}'(E)=\frac{1}{\omega}=\frac{T}{2\pi}\qquad(E>0),$$
in agreement with the general theorem, whose period quadrature is
$T(E)=\sqrt{2m}\int_{a(E)}^{b(E)}\mathrm dq/\sqrt{E-U(q)}=2\pi/\omega$.

## Facts & Assumptions

**Given:** Positive $m,k$, the quadratic potential $U(q)=\frac12kq^2$, the turning-point functions $\pm\sqrt{2E/k}$, and the frequency $\omega=\sqrt{k/m}$.

[L1] Action variable and theorem: $J_{\mathrm a}(E)=\frac1\pi\int_{a(E)}^{b(E)}\sqrt{2m(E-U(q))}\,\mathrm dq$, and under the two simple turning points of this datum, $J_{\mathrm a}'(E)=T(E)/(2\pi)$ with $T(E)=\sqrt{2m}\int_{a(E)}^{b(E)}\mathrm dq/\sqrt{E-U(q)}$ ([[def-cm-one-dimensional-action-variable]], [[thm-cm-action-variable-derivative]]).

[L2] Substitution with $q=\sqrt{2E/k}\sin\vartheta$ on $[-\pi/2,\pi/2]$, where $\cos\vartheta\ge0$, is a differentiable monotone change of variable, and $\cos^2\vartheta=\frac12(1+\cos2\vartheta)$ from the addition formula; the Taylor-free identities $\sin^2+\cos^2=1$ and the endpoint values $\sin(\pm\pi/2)=\pm1$, $\cos(\pm\pi/2)=0$ hold ([[thm-substitution]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] $\sqrt{2E/k}\cdot\sqrt{k/2}=\sqrt{E}$ and $\sqrt{2mE}\cdot\sqrt{E}=\sqrt{2m}\,E$; for $E>0$ the square roots are the positive ones ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 Fix any bounded energy interval $(E_0,E_1)$ with $0<E_0<E_1<\infty$. Restrict $a,b$ to that interval. The datum satisfies the hypotheses of the theorem: $U$ is $C^3$ with $U'(q)=kq$, so $U'(a(E))=-k\sqrt{2E/k}<0<k\sqrt{2E/k}=U'(b(E))$, and $a(E)<b(E)$; moreover $\frac12kq^2<E$ exactly for $a(E)<q<b(E)$, and $U(a(E))=U(b(E))=E$. Every $E>0$ lies in such an interval, for example $(E/2,2E)$, and the defining integrals agree on overlaps; thus the theorem gives a $C^1$ action on all of $(0,\infty)$. [given, L1, algebra]

2.1 Computation of the action variable: substituting $q=\sqrt{2E/k}\,\sin\vartheta$ by [L2] and using $\frac12kq^2=E\sin^2\vartheta$, $$J_{\mathrm a}(E)=\frac1\pi\int_{-\pi/2}^{\pi/2}\sqrt{2mE\cos^2\vartheta}\,\sqrt{\frac{2E}{k}}\cos\vartheta\,\mathrm d\vartheta =\frac{\sqrt{2mE}}{\pi}\sqrt{\frac{2E}{k}}\int_{-\pi/2}^{\pi/2}\cos^2\vartheta\,\mathrm d\vartheta,$$ because $\sqrt{\cos^2\vartheta}=\cos\vartheta\ge0$ on the interval. With $\cos^2\vartheta=\frac12(1+\cos2\vartheta)$ the integral is $\pi/2$, so by [L3] $$J_{\mathrm a}(E)=\frac{\sqrt{2mE}\,\sqrt{2E/k}}{2}=\frac{2E\sqrt{m/k}}{2}=\frac{E}{\omega}.$$ [step 1.1, L2, L3, algebra]

2.2 Period quadrature: put $A=\sqrt{2E/k}$. For $-\pi/2<c<d<\pi/2$ the substitution $q=A\sin\vartheta$ lies strictly between the turning points, where the integrand is continuous and $\cos\vartheta>0$. Hence [L2] gives $\int_{A\sin c}^{A\sin d}dq/\sqrt{E-kq^2/2}=\sqrt{2/k}(d-c)$, since $\sqrt{E\cos^2\vartheta}=\sqrt E\cos\vartheta$ there. Taking the independent limits $c\downarrow-\pi/2$, $d\uparrow\pi/2$ proves convergence at both endpoints and gives $\int_{a(E)}^{b(E)}dq/\sqrt{E-kq^2/2}=\pi\sqrt{2/k}$. Thus $T(E)=\sqrt{2m}\,\pi\sqrt{2/k}=2\pi/\omega$. [step 1.1, L2, L3, algebra]

3.1 Differentiating the closed form of step 2.1, $J_{\mathrm a}'(E)=1/\omega$ for every $E>0$; by step 2.2 this equals $T(E)/(2\pi)$, consistent with the general theorem [L1], which the datum satisfies by step 1.1. [step 1.1, step 2.1, step 2.2, L1, algebra] ∎
