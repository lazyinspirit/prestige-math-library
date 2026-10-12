---
id: ex-cm-oscillator-saddle-second-variation-checks
kind: example
title: "An explicit saddle of the oscillator action at $T=2\\pi$: the two variations $\\sin(t/2)$ and $\\sin(3t/2)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [prop-cm-oscillator-second-variation-signs, def-cm-second-variation-of-the-action, lem-cm-second-variation-formula, def-cm-time-dependent-lagrangian-and-action, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-linearity-of-the-integral, thm-ftc-second-part, def-darboux-integral, thm-continuous-implies-integrable, def-interval]
dependency_roles:
  prop-cm-oscillator-second-variation-signs: mathematical-premise
  def-cm-second-variation-of-the-action: mathematical-premise
  lem-cm-second-variation-formula: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.1, printed page 12: the true path of the action may be a minimum or a saddle point, the qualitative fact checked numerically here"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 5 Section 5.1, Eqs. (5.1)-(5.3), printed pages 1-2 of Chapter 5 (PDF pages 87-88): the harmonic oscillator model whose action is evaluated here"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Fix $\omega=1$ and $T=2\pi$ in the chart $\mathcal L(q,v)=\tfrac12(v^2-q^2)$ on
$O=\mathbb R\times\mathbb R\times\mathbb R$ over $[0,2\pi]\times\mathbb R$
([[def-cm-time-dependent-lagrangian-and-action]]), and consider the variations

$$\eta_1(t)=\sin\frac t2,\qquad\eta_3(t)=\sin\frac{3t}{2}$$

of the zero curve $q_0\equiv0$. The proposition [[prop-cm-oscillator-second-variation-signs]]
gives

$$\delta^2S(q_0)[\eta_1,\eta_1]=-\frac{3\pi}{4}<0,\qquad\delta^2S(q_0)[\eta_3,\eta_3]=\frac{5\pi}{4}>0,$$

and with the exact identity $S(\varepsilon\eta)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta,\eta]$
of that proposition,

$$S(\varepsilon\eta_1)=-\frac{3\pi\varepsilon^2}{8}<0<\frac{5\pi\varepsilon^2}{8}=S(\varepsilon\eta_3)\qquad(\varepsilon\ne0).$$

Thus at the duration $T=2\pi>\pi=\pi/\omega$ the stationary zero curve has variations that
decrease and variations that increase the action arbitrarily close to it: it is a saddle, and
neither a local minimiser nor a local maximiser. Every number below is exact; no measurement or
numerical integration is involved.

## Facts & Assumptions

**Given:** The chart $\mathcal L(q,v)=\tfrac12(v^2-q^2)$ over $[0,2\pi]\times\mathbb R$, the zero
curve $q_0$, the variations $\eta_1,\eta_3$, and the action $S$ and second variation $\delta^2S$
of [[def-cm-time-dependent-lagrangian-and-action]] and
[[def-cm-second-variation-of-the-action]].

[L1] Second variation values and exact action ([[prop-cm-oscillator-second-variation-signs]],
[[lem-cm-second-variation-formula]]): for this chart with parameters $\omega=1$, $T=2\pi$ one has
$\delta^2S(q_0)[\eta_n,\eta_n]=\frac T2((n\pi/T)^2-\omega^2)$ for the variations
$\eta_n(t)=\sin(n\pi t/T)$, and $S(\varepsilon\eta_n)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta_n,\eta_n]$
for every real $\varepsilon$.

[L2] Trigonometric integral data ([[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-ftc-second-part]],
[[thm-linearity-of-the-integral]], [[def-darboux-integral]],
[[thm-continuous-implies-integrable]], [[def-interval]]): the double-angle formulas give
$\cos^2 u=\frac12(1+\cos2u)$ and $\sin^2u=\frac12(1-\cos2u)$; $\sin$ and $\cos$ are continuous,
hence integrable on $[0,2\pi]$; the fundamental theorem evaluates the integrals below; and
$\sin0=\sin\pi=\sin2\pi=\sin3\pi=0$.

## Verification

**Proof technique:** direct; substitute $T=2\pi$, $\omega=1$ into the proposition and evaluate the
defining integrals independently.

1.1 The variations: $\eta_1$ and $\eta_3$ are $C^\infty$ on $\mathbb R$ with $\eta_1(0)=\eta_1(2\pi)=0$ and $\eta_3(0)=\eta_3(2\pi)=0$ by [L2], so both are variations of $q_0$; their derivatives are $\eta_1'(t)=\frac12\cos\frac t2$ and $\eta_3'(t)=\frac32\cos\frac{3t}{2}$. [given, L2, algebra]

2.1 Second variations: substituting $T=2\pi$ and $\omega=1$ into [L1] gives $\delta^2S(q_0)[\eta_n,\eta_n]=\pi(n^2/4-1)$, hence $\delta^2S(q_0)[\eta_1,\eta_1]=\pi(1/4-1)=-\frac{3\pi}{4}$ and $\delta^2S(q_0)[\eta_3,\eta_3]=\pi(9/4-1)=\frac{5\pi}{4}$. [step 1.1, given, L1, algebra]

3.1 Independent integral check: by [L2], $$\int_0^{2\pi}\eta_1'(t)^2dt=\frac14\int_0^{2\pi}\frac{1+\cos t}{2}dt=\frac14\cdot\pi,\qquad\int_0^{2\pi}\eta_1(t)^2dt=\int_0^{2\pi}\frac{1-\cos t}{2}dt=\pi,$$ so $\delta^2S(q_0)[\eta_1,\eta_1]=\pi/4-\pi=-\frac{3\pi}{4}$; and with $\eta_3'(t)^2=\frac94\cos^2\frac{3t}{2}$ the same computation gives $\int_0^{2\pi}\eta_3'^2=\frac94\cdot\pi$ and $\int_0^{2\pi}\eta_3^2=\pi$, so $\delta^2S(q_0)[\eta_3,\eta_3]=\frac{9\pi}{4}-\pi=\frac{5\pi}{4}$, in agreement with step 2.1. [step 2.1, L2, algebra]

4.1 Action values and saddle: by the exact identity in [L1], $S(\varepsilon\eta_1)=\frac{\varepsilon^2}{2}\cdot(-\frac{3\pi}{4})=-\frac{3\pi\varepsilon^2}{8}<0$ and $S(\varepsilon\eta_3)=\frac{5\pi\varepsilon^2}{8}>0$ for every $\varepsilon\ne0$, while $S(q_0)=0$; since both families tend to $q_0$ as $\varepsilon\to0$, the stationary zero curve is neither a local minimiser nor a local maximiser, as claimed. [step 2.1, step 3.1, L1, algebra] ∎
