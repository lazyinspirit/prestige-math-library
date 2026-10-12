# Independent local Dollard remainder check

Research only, 2026-10-11. Subject: `thm-nrqm-controlled-dynamics-dollard-integrable-remainder`, current proof 6.1–11.1. Integration and actual consumer review belong to `spectral_lead`. This note creates no production acceptance, certification, readiness or new review cycle. No carrier, manifest, contract, import or engine state was changed.

**Finding.** The local estimate is sound on the original entire annular smooth momentum class. The current proof supplies a global Coulomb-singular remainder bounded by $C_\psi(1+\log|t|)/|t|^2$ for both time signs. No Jost derivative, radial spectral packet, angular truncation or extra packet assumption is needed. Its analytic inputs are explicit Fourier/Schwartz calculus and the free Gaussian identity, not a general noncommuting functional-calculus comparison.

The original delivered `research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/dollard-integrable-remainder-repair-draft.md`, steps 9.1–14.1, already contains this same argument. The separate `parallel-dollard-packet-lemma-draft.md` concerns a channel-completeness route and explicitly leaves real-boundary Wronskian $C^4$ regularity unproved; that hypothesis is not an input to this remainder proof.

## Exact class and conventions

Work in ZF+CC with $\gamma>0$, $H_0=-\Delta$, and

$$\mathcal F_pf(p)=(2\pi)^{-3/2}\mathcal F_2f(p/(2\pi))=(2\pi)^{-3/2}\int e^{-ip\cdot x}f(x)\,dx.$$

Here the last integral is initially on Schwartz functions. The dilation gives $dp=(2\pi)^3d\xi$, so $\mathcal F_p$ is unitary. The momentum operator in these normalized units is $P=-i\nabla$ and $H_0=|P|^2$; the Fourier2pi multiplier is $4\pi^2|\xi|^2$. Let $\phi\in C_c^\infty(\mathbb R^3)$ with support in $a_0\le|p|\le b_0$, $0<a_0<b_0$, and put $\psi=\mathcal F_p^*\phi$. The equal-endpoint case forces $\phi=0$. Let $\tau=|t|\ge1$, $\sigma=\operatorname{sign}t$, $L=\log\tau$, and $a(p)=\gamma/(2|p|)$ away from zero. Set

$$g_t=\mathcal F_p^*(e^{i\sigma aL}\phi),\qquad u_t=e^{-itH_0}g_t=U_D(t)\psi.$$

For every fixed time these functions are Schwartz. The phase preserves the exact annular momentum support. All constants below may depend on this arbitrary $\phi$, its annulus and $\gamma$, but are independent of both signs of sufficiently large $t$. The union of these annular classes is dense: approximate an arbitrary $L^2(dp)$ function by compact smooth functions, then multiply by a smooth cutoff vanishing on a shrinking ball about zero; dominated convergence gives the second approximation. This is a dense proving class, not a restriction on any eventual whole-Hilbert-space wave operator conclusion.

## Signed Gaussian factorization and commutator

The independently authored free Gaussian supplier proves the kernel

$$e^{-itH_0}g(x)=(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)\,dy,$$

with the principal power for every real $t\ne0$. It follows either from that supplier or its local repetition in current 6.1: continue the real Gaussian Fourier identity to $\operatorname{Re}z>0$, apply it to $z=\varepsilon+it$, and remove damping by pointwise dominated convergence and Fourier $L^2$ dominated convergence. The exponential in the damped kernel has modulus at most one; the damped multiplier is a contraction. The limiting undamped multiplier has modulus one and is unitary. This argument works for negative as well as positive $t$.

Define $M_tg(x)=e^{i|x|^2/(4t)}g(x)$ and

$$D_th(x)=(2it)^{-3/2}e^{i|x|^2/(4t)}h(x/(2t)).$$

The principal factors satisfy $(2it)^{-3/2}(2\pi)^{-3/2}=(4\pi it)^{-3/2}$ for either sign. The absolute dilation Jacobian is $(2\tau)^3$, hence $D_t$ is unitary even when the dilation reverses orientation. Expanding the square in the kernel gives exactly

$$e^{-itH_0}=D_t\mathcal F_pM_t.$$

Choose radial $F\in C_c^\infty(\mathbb R^3)$, vanishing near zero, with $F(v)=1/|v|$ for $a_0/2\le|v|\le2b_0$, and zero for $|v|\ge4b_0$. For example, using the explicit smooth step $s$, use $F(v)=\eta(|v|)/|v|$ away from zero, extended by zero, where $\eta(r)=s((r-a_0/4)/(a_0/4))s((4b_0-r)/(2b_0))$. This is identically one on the required annulus and is smooth at zero because it vanishes on a neighborhood there.

Writing $F(P)=\mathcal F_p^*M_F\mathcal F_p$, the factorization and the commutation of $F(P)$ with the free evolution give the exact operator identity on Schwartz inputs

$$[F(x/(2t))-F(P)]e^{-itH_0}g=D_t\mathcal F_p[F(P),M_t]g.$$

This does not commute position and momentum. The convolution kernel of $F(P)$, with this normalization, is

$$k_F(y)=(2\pi)^{-3}\int e^{ip\cdot y}F(p)\,dp.$$

It is Schwartz. If $K_j=\int |y|^j|k_F(y)|\,dy$ for $j=1,2$, the exact commutator formula and elementary phase difference give

$$[F(P),M_t]g(x)=\int k_F(y)[m_t(x-y)-m_t(x)]g(x-y)\,dy,$$

$$|m_t(x-y)-m_t(x)|\le\frac{2|x-y||y|+|y|^2}{4\tau}.$$

Indeed $x=(x-y)+y$, so the difference of the two real quadratic phases has absolute value at most the displayed expression. Weighted Cauchy–Schwarz followed by Tonelli proves $\|w*h\|_2\le\|w\|_1\|h\|_2$ for nonnegative $w\in L^1$, and hence

$$\|[F(P),M_t]g\|_2\le\frac{K_1}{2\tau}\||x|g\|_2+\frac{K_2}{4\tau}\|g\|_2.$$

All relevant integrals are controlled by these finite quantities. Plancherel and differentiation on the compact annular support give

$$\||x|g_t\|_2=\|\nabla(e^{i\sigma aL}\phi)\|_2\le\|\nabla\phi\|_2+L\|\phi\nabla a\|_2,$$

and $\|g_t\|_2=\|\phi\|_2$. On this support $F(P)g_t=|P|^{-1}g_t$, an equality preserved by free evolution. Consequently

$$\|[F(x/(2t))-|P|^{-1}]u_t\|_2\le C_\psi(1+L)/\tau.$$

Only one derivative of the logarithmic modifier is used here. A crude approximation of $M_t-I$ using two position moments could introduce $L^2$; the actual convolution commutator avoids that loss.

## Global singular complement

The spatial difference

$$B_t(x)=\gamma/|x|-\gamma F(x/(2t))/(2\tau)$$

vanishes on $a_0\tau\le|x|\le4b_0\tau$. Radiality of $F$ is useful here: for negative time $|x/(2t)|=|x|/(2\tau)$, so the vanishing annulus is the same.

For completeness, the nonstationary-phase proof can use a fixed neighborhood of $\operatorname{supp}\phi$ contained in $3a_0/4<|p|<5b_0/4$. In the inverse Fourier representation the phase is

$$\theta(p)=p\cdot x-t|p|^2+\sigma a(p)L.$$

For $r=|x|<a_0\tau$, $|x-2tp|\ge a_0\tau/2$. For $r>4b_0\tau$, $|x-2tp|\ge r-(5b_0/2)\tau\ge3r/8$. Both give a constant multiple of $\tau+r$ (with annulus-dependent constants). The perturbation $L\nabla a$ is bounded by $CL$ on the fixed neighborhood and can be absorbed for all sufficiently large $\tau$ because $L/\tau\to0$. Thus, uniformly for both signs on the complement,

$$|\nabla\theta|\ge c(\tau+r),\qquad |\partial_p^\beta\nabla\theta|\le C_\beta\tau\quad(|\beta|\ge1).$$

Differentiating $\nabla\theta/|\nabla\theta|^2$ gives $|\partial_p^\beta(\nabla\theta/|\nabla\theta|^2)|\le C_\beta/(\tau+r)$. A detailed way to see this is to scale $\nabla\theta$ by $\tau+r$: this vector and all its derivatives are bounded and its norm is bounded below; the reciprocal-square map has bounded derivatives on that range. Repeated integration by parts with $(\nabla\theta/(i|\nabla\theta|^2))\cdot\nabla_p$ therefore gives

$$|u_t(x)|\le A_{N,\psi}(\tau+r)^{-N}$$

on that complement for every fixed $N$. Each formal-adjoint application contributes a factor $(\tau+r)^{-1}$; its finitely many differentiated coefficients have the same bounds, and the smooth compact amplitude has no boundary contributions. There is no extra logarithmic loss: the modifier is inside the phase rather than differentiated as an amplitude in this argument.

Now integrate the singular contribution over the complement. The three-dimensional volume factor cancels the square of $r^{-1}$:

$$\|\mathbf1_{\mathrm{complement}}r^{-1}u_t\|_2^2\le4\pi A_{N,\psi}^2\int_0^\infty(\tau+r)^{-2N}\,dr=\frac{4\pi A_{N,\psi}^2}{2N-1}\tau^{1-2N}.$$

The bounded $F$ contribution is supported in $r\le8b_0\tau$. On the complement its square norm satisfies

$$\|\mathbf1_{\mathrm{complement}}F(x/(2t))u_t/(2\tau)\|_2^2\le\frac{4\pi\|F\|_\infty^2A_{N,\psi}^2}{4\tau^2}\int_0^{8b_0\tau}(\tau+r)^{-2N}r^2\,dr\le C_{N,\psi}\tau^{1-2N}.$$

The last inequality follows by $r=\tau s$; the finite $s$ integral is independent of time. Since $B_t$ vanishes on the annulus, triangle inequality with $N=3$ gives $\|B_tu_t\|_2\le C_\psi\tau^{-5/2}$. These estimates include the origin and infinity. They do not merely estimate the main propagation cone or replace the Coulomb potential by a globally bounded one.

## Conclusion and dimensional translation

The exact split is

$$[\gamma/r-\gamma/(2\tau|P|)]u_t=B_tu_t+\frac\gamma{2\tau}[F(x/(2t))-|P|^{-1}]u_t.$$

Therefore its norm is at most $C_\psi\tau^{-5/2}+C'_\psi(1+\log\tau)\tau^{-2}$, yielding the claimed global bound for both signs. On every compact exterior time interval the Fourier profiles have uniformly bounded Schwartz seminorms; thus the singular norm is bounded since $r^{-1}\in L^2_{\mathrm{loc}}(\mathbb R^3)$ and $|P|^{-1}$ is bounded by $a_0^{-1}$ on the annulus. The full two half-line integrals are finite.

The derivative sign also checks directly: $d(\sigma\log|t|)/dt=1/|t|$ on either exterior half-line, hence $iU_D'=(H_0-a(P)/|t|)U_D$. For the attractive Coulomb Hamiltonian the interaction-minus-comparison generator is $-\gamma/r+\gamma/(2|t||P|)$; its norm equals that of the displayed remainder.

The carrier is a normalized mathematical theorem, not a theorem with arbitrary hidden masses and $\hbar$. With physical momentum $Q=-i\hbar\nabla$, reduced mass $\mu>0$, and attractive coupling $\kappa>0$, the physical Hamiltonian is $H_{\rm phys}=Q^2/(2\mu)-\kappa/r=(\hbar^2/(2\mu))H_\gamma$ with $\gamma=2\mu\kappa/\hbar^2$. Physical time $s$ corresponds to normalized time $t=\hbar s/(2\mu)$ in the fixed coordinate convention. Since $p=q/\hbar$, the modifier coefficient is $a(p)=\mu\kappa/(\hbar|q|)$, the comparison potential is $\mu\kappa/(|s||Q|)$, and the free kernel is $(\mu/(2\pi i\hbar s))^{3/2}\exp(i\mu|x-y|^2/(2\hbar s))$. A physical logarithm must be $\log(|s|/s_0)$ with a stated reference time; a changed fixed reference contributes a time-independent phase on each time half-line and preserves the proving class and bound. No dimensional formula is used as an additional premise of the normalized proof.

No unresolved local analytic prerequisite was found in 6.1–11.1. This disposition does not independently certify the separate CC spectral-calculus supplier, all early essential-spectrum reasoning, channel completeness, or downstream consumers; those remain under their respective owners. The spectral lemma's Statement and local analytic suppliers were inspected to distinguish actual prerequisites from unnecessary stronger generic claims. No external source was retrieved or claimed read for this check: the argument was independently checked from its local formulas and inspected supplier text, so literature authority is not a missing step.
