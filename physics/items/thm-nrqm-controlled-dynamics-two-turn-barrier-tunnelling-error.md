---
id: thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error
aliases: [nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error]
kind: theorem
domain: mathematics
title: "Two-turn barrier tunnelling error"
status: published
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection, thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, thm-nrqm-controlled-dynamics-wkb-explicit-error, thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, def-bochner-integrable-function, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection: mathematical-premise
  thm-nrqm-controlled-dynamics-liouville-turning-point-transformation: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 11 (connection formulas and barrier penetration; standard monograph)"
      url: "https://dlmf.nist.gov/11"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Square Potential Barrier and Cold Emission pp. 64-73 (WKB barrier transmission)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $m>0$. Let $V\in C_c^5(\mathbb R;\mathbb R)$ be fixed and let $E>0$ be such that
$V-E$ has exactly two simple zeros $a<b$, is positive on $(a,b)$ and negative
outside $[a,b]$ with nonvanishing derivative at $a,b$. Set $q(x):=2m(V(x)-E)$
and consider the explicitly parameterized family
$$u_h''(x)=\frac{q(x)}{h^2}u_h(x),\qquad h>0.$$
The quantities and $h$ are nondimensional after fixed scales have been chosen;
the physical reading is the scaled family, with the physical $\hbar$ fixed.
Choose $L>0$ with $\operatorname{supp}V\subset(-L,L)$ and put
$p_0:=\sqrt{2mE}$. Define the scattering amplitudes $r(h),t(h)$ by the exact
solution with one incoming wave from the left and none from the right:
$$u_h(x)=p_0^{-1/2}\bigl(e^{ip_0x/h}+r(h)e^{-ip_0x/h}\bigr)\quad(x\le-L),\qquad u_h(x)=p_0^{-1/2}t(h)e^{ip_0x/h}\quad(x\ge L).$$
Here the conserved dimensionless current is $J_h(u):=h\operatorname{Im}(\overline u\,u')$;
the exterior waves $p_0^{-1/2}e^{\pm ip_0x/h}$ have currents $\pm1$.
The transmission coefficient is the transmitted-to-incoming current ratio
$T(h):=|t(h)|^2$. The proof establishes existence and uniqueness of these
amplitudes. Put $B:=\int_a^b\sqrt{2m(V-E)}\,dx$ and $S:=B/h$. Then there are $h_0>0$, an
$\varepsilon(h)\le Ch$ for $0<h<h_0$, and a constant $C_0$ such that the transmission
coefficient is
$$T(h)=e^{-2S}\bigl[1+O\bigl(\varepsilon(h)+e^{-2S}\bigr)\bigr],$$
quantitatively
$$|T(h)e^{2S}-1|\le\frac{C_0[\varepsilon(h)+e^{-2S}]}{1-C_0[\varepsilon(h)+e^{-2S}]}$$
whenever the denominator is positive. The bound holds for fixed $V,E$ with the
stated separated simple turning points; rectangular walls, coalescing turning
points, barrier-top uniformity and resonant multiwell interference are excluded.

## Facts & Assumptions

**Given:** $m>0$, the potential $V$, the energy $E$ with separated simple turning points $a<b$, the scaled equation $u_h''=q u_h/h^2$, the normalized exterior waves, and small $h>0$.

[F1] Allowed-region WKB control with explicit error $O(\varepsilon(h))$ on intervals bounded away from the turning points, in the form of [[thm-nrqm-controlled-dynamics-wkb-explicit-error]] (b)–(c) ([[thm-nrqm-controlled-dynamics-wkb-explicit-error]]).

[F2] Liouville transformation at each simple turning point reduces the equation to $w''=[\zeta/h^2+R]w$ with bounded $R$. The stable Volterra estimates give two independent exact real solutions $d_l,g_l$ at each turn $l\in\{a,b\}$, normalized so that their forbidden-side leading forms are $q^{-1/4}e^{-S_l(x)}$ and $q^{-1/4}e^{S_l(x)}$, respectively. Their allowed-side leading forms are $2p^{-1/2}\sin\Theta_l$ and $p^{-1/2}\cos\Theta_l$, with the same value and slope errors $O(\varepsilon(h))$ on fixed matching sections. Here $p=\sqrt{-q}$, $S_a(x)=h^{-1}\int_a^x\sqrt q$, $S_b(x)=h^{-1}\int_x^b\sqrt q$ in the barrier, and $\Theta_l$ is the outward allowed-side action divided by $h$ plus $\pi/4$. Reflection is used at $b$ ([[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]], [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]]).

[F3] Airy matching remainders of order $h/|\zeta|^{3/2}$ on fixed matching sections, absorbed into $\varepsilon(h)$ ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]], [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]]).

## Proof

1.1 [Exact exterior solutions and flux] Define $f_L(x)=p_0^{-1/2}e^{-ip_0x/h}$ on $x\le-L$ and $f_R(x)=p_0^{-1/2}e^{ip_0x/h}$ on $x\ge L$, and extend each by its Cauchy data through the compact interaction interval. Existence and uniqueness follow directly from the first-order integral equation for $(u,u')$: its continuous coefficient matrix is bounded on each compact interval, and the ordered Picard iterates are bounded by $M^n\ell^n/n!$; their uniformly convergent sum solves the equation, and the same iterates applied to a difference give uniqueness. Thus no interval Dirichlet spectral/domain supplier is required. Since $q$ is real, $J_h'=h\operatorname{Im}(|u'|^2+q|u|^2/h^2)=0$. On the left write uniquely $f_R=A_h^{\rm in}\overline{f_L}+A_h^{\rm out}f_L$. The currents are $J_h(f_R)=1$ and $J_h(f_L)=-1$, so $|A_h^{\rm in}|^2-|A_h^{\rm out}|^2=1$, in particular $A_h^{\rm in}\ne0$. Consequently $u_h=f_R/A_h^{\rm in}$ has precisely the prescribed boundary form, with $t=1/A_h^{\rm in}$ and $r=A_h^{\rm out}/A_h^{\rm in}$, uniquely. With $W(u,v):=uv'-u'v$, $W(f_L,\overline{f_L})=2i/h$ and therefore $A_h^{\rm in}=hW(f_L,f_R)/(2i)$. [given, F1, algebra]


1.2 [A single error budget and outgoing coefficients] Choose fixed allowed matching sections on either side of each turn and a fixed interior point $x_0\in(a,b)$. Let $\varepsilon(h)$ be the sum of the two Volterra errors $e^{\varepsilon_{h,l}}-1$, the allowed-region coefficient errors $e^{h\int |q_{\rm WKB}|/p}-1$ on the fixed intervals connecting these sections to $\pm L$, and the Airy matching remainders $h/|\zeta_l|^{3/2}$ at the sections and $x_0$. All integrals and matching locations are fixed, hence $\varepsilon(h)\le Ch$ for small $h$. In the allowed region use the scaled state $(p^{1/2}u,hp^{-1/2}u')$. The leading sine/cosine states of [F2] form an invertible two-by-two matrix with inverse bounded independently of $h$, since their phases enter only through sine and cosine; the amplitude-derivative terms are $O(h)$. [F1] transports each exterior outgoing wave to this section with coefficient error $O(\varepsilon)$. Since $e^{i\Theta_l}=\cos\Theta_l+i\sin\Theta_l$, solving the perturbed bounded matrix gives, for constants $\gamma_L,\gamma_R$ of modulus one, $$f_L=\gamma_L\bigl[(1+O(\varepsilon))g_a+(i/2+O(\varepsilon))d_a\bigr],\qquad f_R=\gamma_R\bigl[(1+O(\varepsilon))g_b+(i/2+O(\varepsilon))d_b\bigr].$$ Both outward phase conventions have positive $\Theta_l$ derivative toward the corresponding exterior, so $e^{i\Theta_l}$ denotes the outgoing wave on each side. Inversion is justified for small $h$ by the finite-matrix Neumann series; no exponentially weighted matrix is inverted here. [F1, F2, F3, algebra]


2.1 [The interior Wronskian] Write $S_a=S_a(x_0)$, $S_b=S_b(x_0)$, so $S_a+S_b=S=B/h$. In the common state coordinates $Y(u):=(q(x_0)^{1/4}u(x_0),h q(x_0)^{-1/4}u'(x_0))^{\mathsf T}$, [F2]-[F3] give $$Y(g_a)=e^{S_a}\bigl[(1,1)^{\mathsf T}+O(\varepsilon)\bigr],\quad Y(d_a)=e^{-S_a}\bigl[(1,-1)^{\mathsf T}+O(\varepsilon)\bigr],$$ $$Y(g_b)=e^{S_b}\bigl[(1,-1)^{\mathsf T}+O(\varepsilon)\bigr],\quad Y(d_b)=e^{-S_b}\bigl[(1,1)^{\mathsf T}+O(\varepsilon)\bigr].$$ The $O(\varepsilon)$ terms include the fixed-section amplitude-derivative errors $O(h)$. Since $\det(Y(u),Y(v))=hW(u,v)$, the growing/growing term in step 1.2 is $-2\gamma_L\gamma_R e^S(1+O(\varepsilon))$. Each mixed determinant has zero leading determinant (its two leading vectors coincide), hence is $O(\varepsilon)e^{S_a-S_b}$ or $O(\varepsilon)e^{-S_a+S_b}$. Relative to $e^S$ these are bounded by $O(\varepsilon)e^{-2S_b}$ and $O(\varepsilon)e^{-2S_a}$, respectively. The decaying/decaying term is $O(e^{-S})$. Thus $$hW(f_L,f_R)=-2\gamma_L\gamma_R e^S\bigl[1+O(\varepsilon)+O(e^{-2S})\bigr].$$ This calculation controls the dominant determinant directly and avoids unstable inversion of exponentially separated columns. [step 1.2, F2, F3, algebra]


3.1 [Quantitative transmission error] By steps 1.1 and 2.1 and $|\gamma_L\gamma_R|=1$, $|A_h^{\rm in}|^2e^{-2S}=1+\eta_h$, where $\eta_h$ is real and $|\eta_h|\le C_0[\varepsilon(h)+e^{-2S}]$ after enlarging a fixed $C_0$ to absorb the square of the amplitude error for sufficiently small $h$. Since $T=|A_h^{\rm in}|^{-2}$, one has $T e^{2S}=(1+\eta_h)^{-1}$ and consequently $$|T e^{2S}-1|\le\frac{C_0[\varepsilon(h)+e^{-2S}]}{1-C_0[\varepsilon(h)+e^{-2S}]}$$ whenever its denominator is positive. This is the claimed quantitative bound and implies $T=e^{-2B/h}[1+O(\varepsilon(h)+e^{-2B/h})]$. Constants depend only on $m,V,E$ and the fixed sections, and the excluded cases do not satisfy the hypotheses used. [step 1.1, step 2.1, algebra] ∎

