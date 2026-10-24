---
id: lem-hardy-entire-growth-rigidity
kind: lemma
title: Entire rigidity under Gaussian growth and real-axis decay
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - def-real-power
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-numbers-form-a-field
  - thm-polar-form-with-unique-principal-argument
  - thm-liouville-bounded-entire-function
  - thm-maximum-modulus-principle-with-boundary-and-infinity-control
  - thm-real-power-continuity-and-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Terence Tao, Hardy's uncertainty principle (blog post, 18 February 2009)"
      url: "https://terrytao.wordpress.com/2009/02/18/hardys-uncertainty-principle/"
      locator: "Section 1, the complex-variable proof with the sector Phragmén–Lindelöf tweak"
    - title: "Mathilda Lindell, The Phragmén–Lindelöf Principle and Its Applications (Lund University bachelor's thesis 2025:K15)"
      url: "https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9206853&fileOId=9206856"
      locator: "§3.2, Lemmas 3.2.2–3.2.4 and the critical-case proof, PDF pp. 35–40; phase-centered sector damping is proved here."
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§4, pp. 10–11; Theorem 5.2, pp. 11–12"
---

## Statement

Let $a>0$, $b>0$ and let $F:\mathbb C\to\mathbb C$ be entire. Suppose there are
$C_1,C_2\ge0$ with
$$|F(x+iy)|\le C_1e^{\pi y^2/a},\qquad |F(x)|\le C_2e^{-\pi bx^2}\qquad(x,y\in\mathbb R).$$
Then: (i) if $ab>1$, $F\equiv0$; (ii) if $ab=1$,
$F(z)=F(0)e^{-\pi z^2/a}$ for every $z\in\mathbb C$. All constants are absorbed
into the two bounds; no further hypothesis on $F$ is imposed.

## Facts & Assumptions

**Given:** Reals $a>0$, $b>0$, an entire $F:\mathbb C\to\mathbb C$, constants $C_1,C_2\ge0$ satisfying the two displayed bounds, and $C:=\max(C_1,C_2)$.

[F1] The complex exponential is entire with $\exp'=\exp$, satisfies $\exp(\zeta+\eta)=\exp\zeta\exp\eta$, and $|\exp\zeta|=e^{\operatorname{Re}\zeta}$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] Sums, scalar multiples and products of complex differentiable functions are complex differentiable with the usual rules, and a composition of complex differentiable maps is complex differentiable ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]); holomorphy on all of $\mathbb C$ means entire ([[def-complex-differentiability-holomorphic-and-entire]]).

[F3] On the slit plane $S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$ the principal logarithm is holomorphic, and for $w\in\mathbb C$ the principal power $z\mapsto z^w_{\mathrm{pr}}=\exp(w\operatorname{Log}z)$ is holomorphic on $S$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]); for real $s>0$ one has $|z^s_{\mathrm{pr}}|=|z|^s$, and $[0,\infty)\to\mathbb R$, $t\mapsto t^{s}$, is continuous ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]]).

[F4] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F5] Maximum modulus principle with boundary and infinity control: if $\Omega\subseteq\mathbb C$ is a domain, $G$ is holomorphic on $\Omega$ and $M\ge0$ is such that for every $\varepsilon>0$ every boundary point of $\Omega$ has a neighbourhood $V$ with $|G|<M+\varepsilon$ on $V\cap\Omega$, while $|G|<M+\varepsilon$ outside some large circle inside $\Omega$, then $|G|\le M$ on $\Omega$ ([[thm-maximum-modulus-principle-with-boundary-and-infinity-control]]).

[F6] Every $z\ne0$ has a polar form $z=re^{i\alpha}$ with $r=|z|>0$ and $\alpha=\arg z$ ([[thm-polar-form-with-unique-principal-argument]]); the Cartesian field laws ([[thm-complex-numbers-form-a-field]]) and [F1] give the identities $\operatorname{Re}(z^2)=(\operatorname{Re}z)^2-(\operatorname{Im}z)^2$, $\operatorname{Im}(z^2)=|z|^2\sin2\alpha$ and $(\operatorname{Re}z)^2=|z|^2\cos^2\alpha$; by [F1] these give $|e^{\pm i\delta z^2}|=e^{\mp\delta|z|^2\sin2\alpha}$ for real $\delta>0$.

## Proof

**Proof technique:** direct.

To prove the asserted cases (i) and (ii), it suffices to treat $ab\ge1$; assume $b\ge1/a$ throughout the proof. This makes the real-axis bound for the critical function uniform on the two anchor rays used in the sector argument.

1.1 The critical function. Put $\Phi(z):=e^{\pi z^2/a}F(z)$. The map $z\mapsto\pi z^2/a$ is a polynomial, hence complex differentiable everywhere, and composing it with the entire exponential and multiplying by the entire $F$ shows that $\Phi$ is entire ([F1, F2]). For real $x$ and $y$, using $|e^{\pi z^2/a}|=e^{\pi\operatorname{Re}(z^2)/a}$ and the two hypotheses, $$|\Phi(x)|=e^{\pi x^2/a}|F(x)|\le C_2e^{-\pi(b-1/a)x^2}\le C_2,\qquad |\Phi(iy)|=e^{-\pi y^2/a}|F(iy)|\le C_1,$$ and, since $\operatorname{Re}(z^2)=(\operatorname{Re}z)^2-(\operatorname{Im}z)^2$, $$|\Phi(z)|=e^{\pi((\operatorname{Re}z)^2-(\operatorname{Im}z)^2)/a}|F(z)|\le C_1e^{\pi(\operatorname{Re}z)^2/a}.$$ In particular $|\Phi(0)|=|F(0)|\le C_2\le C$. [F1, F2, F6, given]

1.2 Sector data. Fix $\delta>0$ and any $\theta$ with $\arctan\frac{\pi}{2a\delta}<\theta<\frac\pi2$; equivalently $\pi\cos^2\theta/a<\delta\sin2\theta$. Fix also $\varepsilon>0$ small enough that $(2+\varepsilon)\theta<\pi$, and put $$\sigma_\varepsilon:=\cos\tfrac{(2+\varepsilon)\theta}2>0,\qquad \eta_\varepsilon:=\tfrac\pi2-\tfrac{(2+\varepsilon)\theta}2,$$ defining two auxiliary functions on the sectors $S_1=\{0<\arg z<\theta\}$ and $S_2=\{\pi-\theta<\arg z<\pi\}$, both contained in the slit plane $S$ of [F3]: $$h_\varepsilon(z):=\exp\!\big(i\varepsilon\,e^{i\mu}\,z^{2+\varepsilon}_{\mathrm{pr}}\big),\qquad q_\delta(z):=e^{i\delta z^2}\ \ (z\in S_1),\qquad q_\delta(z):=e^{-i\delta z^2}\ \ (z\in S_2),$$ with $\mu:=\eta_\varepsilon$ on $S_1$ and $\mu:=\eta_\varepsilon-(2+\varepsilon)(\pi-\theta)$ on $S_2$. Since $z^{2+\varepsilon}_{\mathrm{pr}}$ is holomorphic on $S$ and exponentials and polynomials are entire, $h_\varepsilon$ and $q_\delta$ are holomorphic on each sector, and so is $G_\varepsilon:=h_\varepsilon q_\delta\Phi$ ([F1, F2, F3]). For $z=re^{i\alpha}$ in the closure of either sector, $|z^{2+\varepsilon}_{\mathrm{pr}}|=r^{2+\varepsilon}$ and $$|h_\varepsilon(z)|=\exp\!\big(-\varepsilon r^{2+\varepsilon}\sin(\mu+(2+\varepsilon)\alpha)\big)\le e^{-\varepsilon\sigma_\varepsilon r^{2+\varepsilon}}\le1,$$ because $\mu+(2+\varepsilon)\alpha\in[\tfrac\pi2-\tfrac{(2+\varepsilon)\theta}2,\tfrac\pi2+\tfrac{(2+\varepsilon)\theta}2]$ for $\alpha\in[0,\theta]$ on $S_1$ and for $\alpha\in[\pi-\theta,\pi]$ on $S_2$. Also $|q_\delta(z)|=e^{\mp\delta\operatorname{Im}(z^2)}$ with the sign making $|q_\delta|\le1$ on the sector. [F1, F2, F3, F6, construct]

2.1 Boundary bounds. On the far ray $\arg z=\theta$ of $S_1$ one has $\operatorname{Re}z=r\cos\theta$ and, by [F6], $|q_\delta(z)|=e^{-\delta r^2\sin2\theta}$, so steps 1.1 and 1.2 give $|G_\varepsilon(z)|\le|q_\delta(z)||\Phi(z)|\le C_1\exp\big(r^2(\pi\cos^2\theta/a-\delta\sin2\theta)\big)\le C_1\le C$ by the choice of $\theta$. On the far ray $\arg z=\pi-\theta$ of $S_2$ one has $\operatorname{Re}z=-r\cos\theta$ and $|q_\delta(z)|=e^{-\delta r^2\sin2\theta}$ as well, so the same computation gives $|G_\varepsilon(z)|\le C_1\le C$ there. On the anchor rays $\arg z=0$ and $\arg z=\pi$ the identity [F6] gives $|q_\delta(z)|=1$, and the display of step 1.2 gives $|h_\varepsilon|\le1$; hence $|G_\varepsilon(z)|\le C_2\le C$ there, and at $z=0$ one has $|G_\varepsilon(0)|=|F(0)|\le C$. [F1, F3, F6, given, step 1.1, step 1.2]

3.1 Boundedness on the sectors. In the closure of either sector, steps 1.1 and 1.2 give $$|G_\varepsilon(z)|\le C_1\exp\big(r^2(\tfrac\pi a+2\delta)-\varepsilon\sigma_\varepsilon r^{2+\varepsilon}\big)\longrightarrow0\qquad(r\to\infty),$$ because $\cos^2\alpha\le1$ and $|\sin2\alpha|\le1$ on the compact angular interval; this is the control at infinity. Step 2.1 gives $|G_\varepsilon|\le C$ on the boundary rays, and $|G_\varepsilon|$ is continuous on the closed sector (the principal power extends continuously from $S$ to the closure of each sector, and $|G_\varepsilon|$ is a finite product of continuous functions), so every boundary point has a neighbourhood $V$ with $|G_\varepsilon|<C+\varepsilon'$ on $V$ intersected with the sector. The maximum modulus principle [F5], applied to the domains $S_1$ and $S_2$, therefore gives $|G_\varepsilon|\le C$ on both sectors. [F1, F3, F5, step 1.2, step 2.1]

4.1 Removing the auxiliary and the sector truncation. Fix $\delta>0$. The perturbation $h_\varepsilon$ tends to $1$ pointwise as $\varepsilon\to0$ along any sequence with $(2+\varepsilon)\theta<\pi$, so step 3.1 gives $|q_\delta\Phi|\le C$ on each sector $S_1(\theta),S_2(\theta)$ for every admissible $\theta\in(\arctan\frac{\pi}{2a\delta},\frac\pi2)$. Since $\theta$ was arbitrary in that interval and the sectors with larger $\theta$ contain those with smaller $\theta$, while $q_\delta$ does not depend on $\theta$, taking $\theta\to\pi/2$ yields $|e^{i\delta z^2}\Phi(z)|\le C$ for every $z$ with $0<\arg z<\pi/2$ and $|e^{-i\delta z^2}\Phi(z)|\le C$ for every $z$ with $\pi/2<\arg z<\pi$. Letting now $\delta\downarrow0$ along any sequence, $|q_\delta(z)|\to1$ at each fixed $z$ by [F1] (the exponent $i\delta z^2\to0$), so $$|\Phi(z)|\le C\qquad(0<\arg z<\pi,\ z\ne0).$$ [F1, step 3.1]

5.1 The lower half-plane. The function $\tilde\Phi(z):=\Phi(-z)$ is entire ([F2]) and satisfies the same three estimates as $\Phi$ in step 1.1, since the bounds $|F(-x)|\le C_2e^{-\pi bx^2}$, $|F(-iy)|\le C_1e^{\pi y^2/a}$ and the growth estimate only involve absolute values and $(\operatorname{Re}(-z))^2=(\operatorname{Re}z)^2$. Applying steps 1.1–4.1 to $\tilde\Phi$ gives $|\Phi(-z)|\le C$ for $0<\arg z<\pi$, that is, $|\Phi(w)|\le C$ for $-\pi<\arg w<0$. [F2, given, step 4.1]

6.1 Conclusion of the critical case and of (i). By steps 4.1 and 5.1 the entire function $\Phi$ satisfies $|\Phi|\le C$ off the coordinate axes, while on the axes step 1.1 gives $|\Phi(x)|\le C_2\le C$ and $|\Phi(iy)|\le C_1\le C$ directly. Hence $\Phi$ is a bounded entire function, so $\Phi$ is constant by [F4]; the constant is $\Phi(0)=F(0)$. Therefore, whenever $b\ge1/a$, $$F(z)=F(0)e^{-\pi z^2/a}\qquad(z\in\mathbb C).$$ If $ab>1$ then $b>1/a$, so the display applies; evaluating at real $x$ gives $|F(0)|e^{-\pi x^2/a}=|F(x)|\le C_2e^{-\pi bx^2}$, that is, $|F(0)|\le C_2e^{-\pi(b-1/a)x^2}$ for every real $x$, and letting $x\to\infty$ forces $F(0)=0$ and hence $F\equiv0$. If $ab=1$ then the display is assertion (ii). [F4, given, step 1.1, step 4.1, step 5.1] ∎
