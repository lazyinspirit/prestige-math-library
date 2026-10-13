---
id: ex-cm-stationary-path-need-not-be-a-local-minimum
kind: example
title: "A stationary path that is not a local minimum: the quadratic model $\\mathcal L=\\tfrac12(v^2-4q^2)$ on $[0,\\pi]$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula, thm-cm-stationarity-iff-euler-lagrange, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-linearity-of-the-integral, def-darboux-integral, thm-continuous-implies-integrable, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.1 (Introduction to the Calculus of Variations: stationary values of a functional need not be extrema)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 (the remark that the true path may be a minimum or a saddle), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Let $n=1$, $[a,b]=[0,\pi]$, $U=\mathbb R$, and
$\mathcal L(q,v)=\tfrac12\bigl(v^2-4q^2\bigr)$, a $C^\infty$ (hence $C^2$) Lagrangian on
$\mathbb R\times\mathbb R\times\mathbb R$ ([[def-cm-time-dependent-lagrangian-and-action]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]). Let

$$q_*(t):=\sin 2t,\qquad \eta(t):=\sin t .$$

Use fixed-endpoint admissible $C^2$ curves with $q(0)=q(\pi)=0$ and the norm $\|q\|_{C^2}:=\max_{0\le j\le2}\sup_{t\in[0,\pi]}|q^{(j)}(t)|$. A local minimum means $S(q_*)\le S(q)$ for all admissible $q$ in some ball about $q_*$ in this norm. Then $q_*$ is a stationary curve of the action
$S(q)=\int_0^\pi\tfrac12(q'^2-4q^2)dt$, and for the one-parameter family
$q_*+\epsilon\eta$ one has the exact identity

$$S(q_*+\epsilon\eta)=S(q_*)-\frac{3\pi}{4}\epsilon^2\qquad(\epsilon\in\mathbb R).$$

In particular $S(q_*+\epsilon\eta)<S(q_*)$ for every $\epsilon\ne0$: the stationary curve is not a
local minimum of the action. The model has no minimiser at all, since
$S(\lambda\eta)=-\tfrac{3\pi}{4}\lambda^2\to-\infty$ as $|\lambda|\to\infty$.

## Facts & Assumptions

**Given:** The Lagrangian $\mathcal L(q,v)=\tfrac12(v^2-4q^2)$ on $[0,\pi]$, the curves $q_*(t)=\sin 2t$ and $\eta(t)=\sin t$, and the action $S$ of [[def-cm-time-dependent-lagrangian-and-action]].

[F1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$ with $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]]); the chain rule gives $q_*'(t)=2\cos 2t$ and $q_*''(t)=-4\sin 2t$ ([[thm-chain-rule-for-total-derivatives]]). The addition formulas $\cos(2t)=\cos^2t-\sin^2t$, $\sin(2t)=2\sin t\cos t$ and the Pythagorean identity $\cos^2t+\sin^2t=1$ hold for all real $t$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]), and $\sin(2\pi)=0$ because $2\pi$ is a period of $\sin$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F2] The Euler–Lagrange expression of $\mathcal L$ along a $C^2$ curve $q$ is $E_{\mathcal L}(q)=-q''-4q$, because $\mathcal L_q=-4q$ and $\mathcal L_v=q'$; stationarity of a $C^2$ curve for $S$ is equivalent to $E_{\mathcal L}(q)=0$ ([[def-cm-time-dependent-lagrangian-and-action]], [[thm-cm-stationarity-iff-euler-lagrange]], [[lem-cm-first-variation-formula]]).

[F3] For a $C^2$ family $q_\epsilon$ the first variation is the derivative at $\epsilon=0$ of $\epsilon\mapsto S(q_\epsilon)$; the integral is linear and integrable functions are the continuous ones here ([[thm-linearity-of-the-integral]], [[def-darboux-integral]], [[thm-continuous-implies-integrable]], [[def-interval]]). The second fundamental theorem evaluates $\int_0^\pi\cos 2t\,dt=\tfrac12\bigl[\sin 2t\bigr]_0^\pi=\tfrac12(\sin 2\pi-\sin0)=0$ ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]]).

## Verification

**Proof technique:** direct; check the Euler–Lagrange equation and expand the quadratic action exactly.

1.1 The curve $q_*$ is $C^2$ on an open interval containing $[0,\pi]$ with $q_*(0)=q_*(\pi)=0$, and $E_{\mathcal L}(q_*)=-q_*''-4q_*=4\sin2t-4\sin2t=0$; hence $q_*$ is stationary for $S$ by [F2]. [F1, F2, given]

2.1 For every $\epsilon$ the curve $q_*+\epsilon\eta$ is $C^2$ with zero endpoint values, and the integrand of its action is a quadratic polynomial in $\epsilon$: $\tfrac12\bigl((q_*'+\epsilon\eta')^2-4(q_*+\epsilon\eta)^2\bigr) =\tfrac12\bigl(q_*'^2-4q_*^2\bigr)+\epsilon\bigl(q_*'\eta'-4q_*\eta\bigr) +\tfrac{\epsilon^2}{2}\bigl(\eta'^2-4\eta^2\bigr).$ By [F3] the action is the sum of the integrals of the three summands, and the linear term is $\epsilon\,\delta S(q_*)[\eta]=0$ by step 1.1 and [F2]. [F1, F2, F3, step 1.1, algebra]

3.1 The quadratic term: with $\eta=\sin$, $\eta'=\cos$ and $\eta'^2-4\eta^2=\cos^2t-4\sin^2t$. By [F1], $\cos^2t=\tfrac12(1+\cos2t)$ and $\sin^2t=\tfrac12(1-\cos2t)$, so $\cos^2t-4\sin^2t=\tfrac12(1+\cos2t)-2(1-\cos2t)=-\tfrac32+\tfrac52\cos2t$. Integrating over $[0,\pi]$ and using $\int_0^\pi\cos2t\,dt=0$ from [F3] and $\int_0^\pi 1\,dt=\pi$ gives $\int_0^\pi(\eta'^2-4\eta^2)dt=-\tfrac{3\pi}{2}$. Substituting into step 2.1 gives $S(q_*+\epsilon\eta)=S(q_*)-\tfrac{3\pi}{4}\epsilon^2$ for every real $\epsilon$. [F1, F3, step 2.1, algebra]

4.1 A positive direction is $\zeta(t):=\sin3t$, which vanishes at both endpoints. The same expansion as step 2.1 has zero linear term by stationarity and gives $S(q_*+\epsilon\zeta)-S(q_*)=\frac12\epsilon^2\int_0^\pi(9\cos^23t-4\sin^23t)dt=\frac{5\pi}{4}\epsilon^2$. Use the double-angle formulas and $\int_0^\pi\cos6t\,dt=[\sin6t/6]_0^\pi=0$, by periodicity from [F1]. Thus arbitrarily small nonzero variations in this direction increase the action, whereas step 3.1 decreases it in direction $\eta$. [F1, F2, F3, step 2.1, step 3.1, algebra]

5.1 Since $\|\epsilon\eta\|_{C^2}=|\epsilon|\|\eta\|_{C^2}\to0$ and $-\tfrac{3\pi}{4}\epsilon^2<0$ for every $\epsilon\ne0$, arbitrarily small nonzero variations of the stationary curve strictly decrease the action; thus $q_*$ is not a local minimum. Moreover $S(\lambda\eta)=-\tfrac{3\pi}{4}\lambda^2$ tends to $-\infty$, so the model has no minimising curve at all. [step 3.1, algebra] ∎

## Remarks

- The example is a mathematical model with an indefinite quadratic Lagrangian; it shows that the Euler–Lagrange equation is a necessary condition only, and that "principle of least action" is a misnomer in general. The stationary curve here is a saddle in the infinite-dimensional sense realised by the decreasing family $q_*+\epsilon\sin t$ and the increasing family $q_*+\epsilon\sin3t$ of steps 3.1 and 4.1.

- The zero curve $q=0$ is also stationary for this model, and it is likewise not a local minimum, by the same computation with $q_*$ replaced by $0$. Nothing here depends on the interpretation of $\mathcal L$ as a physical energy; no positivity of the kinetic term is claimed.
