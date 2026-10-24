---
id: lem-bounded-variation-gives-one-sided-dirichlet-integrability
kind: lemma
title: "Bounded variation gives one-sided Dirichlet integrability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-decomposition-for-bv-functions, lem-variation-function-and-jordan-identities, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel, thm-second-mean-value-theorem-for-integrals, lem-sine-positive-and-cosine-decreasing-on-zero-two, thm-riemann-lebesgue-lemma-for-fourier-coefficients]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $0<\delta<1/2$, and let $u:[0,\delta]\to\mathbb R$ have bounded variation.
Assume that $u(0)=0$ and $\lim_{t\downarrow0}u(t)=0$. Then

$$\int_0^\delta u(t)\frac{\sin((2N+1)\pi t)}{\sin(\pi t)}\,dt \to 0 \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real $\delta$ with $0<\delta<1/2$ and a bounded-variation function $u:[0,\delta]\to\mathbb R$ such that $u(0)=0$ and $\lim_{t\downarrow0}u(t)=0$.

[L1] Jordan decomposition writes $u=u(0)+P_u-N_u$ with $P_u,N_u$ nondecreasing, normalized by $P_u(0)=N_u(0)=0$, and minimal among such decompositions ([[thm-jordan-decomposition-for-bv-functions]]).

[L2] The variation identity is $\operatorname{Var}_{[0,\eta]}(u)=P_u(\eta)+N_u(\eta)$ for every $\eta\in[0,\delta]$ ([[lem-variation-function-and-jordan-identities]]).

[L3] The Dirichlet kernel satisfies $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ for $t\notin\mathbb Z$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

[L4] Bonnet's second mean value theorem applies to a monotone factor and an integrable factor on a compact interval ([[thm-second-mean-value-theorem-for-integrals]]).

[L5] For $0<y\le2$, $\sin y\ge y/3>0$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L6] Assuming the Axiom of Countable Choice, Fourier coefficients of an $L^1(\mathbb T)$ function tend to $0$ at infinity ([[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $u=P_u-N_u$ with $P_u(0)=N_u(0)=0$ and $P_u,N_u$ nondecreasing. Let $$p:=\inf_{0<t\le\delta}P_u(t)=\lim_{t\downarrow0}P_u(t), \qquad q:=\inf_{0<t\le\delta}N_u(t)=\lim_{t\downarrow0}N_u(t).$$ Since $u(t)\to0$, one has $p-q=0$. If $p=q>0$, define $\widetilde P(0)=\widetilde N(0)=0$ and $\widetilde P(t)=P_u(t)-p$, $\widetilde N(t)=N_u(t)-p$ for $t>0$. Then $\widetilde P,\widetilde N$ are again nondecreasing, nonnegative, normalized, and satisfy $u=\widetilde P-\widetilde N$, but $\widetilde P(t)<P_u(t)$ for every $t>0$, contradicting the minimality in [L1]. Hence $p=q=0$, so $$P_u(t)\to0, \qquad N_u(t)\to0, \qquad \operatorname{Var}_{[0,t]}(u)=P_u(t)+N_u(t)\to0$$ as $t\downarrow0$ by [L2]. [L1, L2, given, contradiction]

1.2 For $0\le t\le\delta$, define $$H_N(t):=\int_0^t D_N(s)\,ds.$$ Using [L3] and the change of variables $y=(2N+1)\pi s$, $$H_N(t)=\int_0^{(2N+1)\pi t}\sin y\cdot g_N(y)\,dy,$$ where $$g_N(y):=\frac{1}{(2N+1)\pi\sin(y/(2N+1))}.$$ If $(2N+1)\pi t\le1$, then $0<y/(2N+1)\le1<2$, so [L5] and $|\sin y|\le y$ give $|\sin y\,g_N(y)|\le 3/\pi$ on $[0,(2N+1)\pi t]$, hence $|H_N(t)|\le3/\pi$. If $(2N+1)\pi t>1$, the same estimate controls the part on $[0,1]$, while on $[1,(2N+1)\pi t]$ the function $g_N$ is positive and decreasing because $0<y/(2N+1)\le\pi/2$. Bonnet's theorem [L4] therefore gives a point $\xi$ with $$\int_1^{(2N+1)\pi t}\sin y\,g_N(y)\,dy=g_N(1)\int_1^\xi\sin y\,dy+g_N((2N+1)\pi t)\int_\xi^{(2N+1)\pi t}\sin y\,dy.$$ The absolute value is at most $$2g_N(1)+2g_N((2N+1)\pi t)\le4g_N(1)\le\frac{12}{\pi}$$ by monotonicity of $g_N$ and [L5]. Thus $$|H_N(t)|\le\frac{15}{\pi} \qquad (0\le t\le\delta,\ N\ge0).$$ [L3, L4, L5, algebra]

2.1 Fix $\varepsilon>0$. By step 1.1, choose $\eta\in(0,\delta)$ such that $$\operatorname{Var}_{[0,\eta]}(u)<\frac{\pi\varepsilon}{60}.$$ Applying [L4] to the monotone functions $P_u$ and $N_u$ on $[0,\eta]$, and using $P_u(0)=N_u(0)=0$, step 1.2 yields $$\left|\int_0^\eta P_u(t)D_N(t)\,dt\right|\le\frac{30}{\pi}P_u(\eta), \qquad \left|\int_0^\eta N_u(t)D_N(t)\,dt\right|\le\frac{30}{\pi}N_u(\eta).$$ Therefore $$\left|\int_0^\eta u(t)D_N(t)\,dt\right|\le\frac{30}{\pi}\bigl(P_u(\eta)+N_u(\eta)\bigr)=\frac{30}{\pi}\operatorname{Var}_{[0,\eta]}(u)<\frac{\varepsilon}{2}.$$ [L2, L4, step 1.1, step 1.2, given, choose, algebra]

3.1 On $[\eta,\delta]$, define $$\psi(t):=\mathbf 1_{[\eta,\delta]}(t)\,\frac{u(t)e^{i\pi t}}{\sin(\pi t)}.$$ Because $\sin(\pi t)$ is bounded away from $0$ on $[\eta,\delta]$ and $u$ is bounded on the compact interval $[\eta,\delta]$, one has $\psi\in L^1(\mathbb T)$. By [L3], $$\int_\eta^\delta u(t)D_N(t)\,dt=\operatorname{Im}\int_0^1\psi(t)e^{2\pi iNt}\,dt=\operatorname{Im}\,\widehat\psi(-N).$$ [L3, step 2.1, algebra]

4.1 By [L6], $\widehat\psi(-N)\to0$. So step 3.1 gives $$\int_\eta^\delta u(t)D_N(t)\,dt\to0.$$ Choose $N_0$ such that the absolute value of this integral is below $\varepsilon/2$ for every $N\ge N_0$. Combining with step 2.1 shows that, for $N\ge N_0$, $$\left|\int_0^\delta u(t)D_N(t)\,dt\right|<\varepsilon.$$ Since $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ on $(0,\delta]$ by [L3], the stated limit follows. [L3, L6, step 2.1, step 3.1, choose, algebra] ∎
