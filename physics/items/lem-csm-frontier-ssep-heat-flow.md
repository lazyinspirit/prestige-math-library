---
id: lem-csm-frontier-ssep-heat-flow
kind: lemma
title: "Fourier heat flow on the continuum torus"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-countable-choice
  - def-csm-frontier-ssep-weak-heat-solution
  - def-fourier-coefficients-and-trigonometric-polynomials
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-ssep-weak-heat-solution: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "S. R. S. Varadhan, Hydrodynamic Scaling, Chapter 4 lecture notes"
      url: "https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf"
      locator: "Section 4.3, Theorem 4.3.1 and proof, printed pp. 54–56: heat equation on the torus and uniqueness."
    - title: "Claudio Landim, Hydrodynamic Limit of Interacting Particle Systems, complete lecture notes"
      url: "https://math.arizona.edu/~sethuram/588/Landim.pdf"
      locator: "Chapter 2, Section 2.4, printed p. 83: Gaussian heat-kernel formula and weak-solution uniqueness discussion."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$ and let $\rho_0:\mathbb T^d\to\mathbb R$ be measurable with $0\le\rho_0\le1$ almost everywhere, using normalized product Haar measure $dx$. For $k\in\mathbb Z^d$ define $e_k(x)=\exp(2\pi i k\cdot x)$ and $\widehat f(k)=\int_{\mathbb T^d}f(x)e_{-k}(x)\,dx$. For $t>0$ set

$$\rho_t(x):=\sum_{k\in\mathbb Z^d}e^{-4\pi^2|k|^2t}\widehat\rho_0(k)e_k(x),$$

and at $t=0$ set $\rho_t=\rho_0$ as an almost-everywhere class. For smooth periodic $G$, define

$$P_tG(x):=\sum_{k\in\mathbb Z^d}e^{-4\pi^2|k|^2t}\widehat G(k)e_k(x)\quad(t>0),\qquad P_0G:=G.$$

Then on every strip $[\epsilon,T]\times\mathbb T^d$ with $0<\epsilon<T<\infty$, the series for $\rho_t$ and all its space and time derivatives converge absolutely and uniformly; in particular $\rho_t$ is real and smooth for each $t>0$ and $\partial_t\rho_t=\Delta\rho_t$. For every finite $T$ and every smooth $G$, $P_tG$ is smooth on $[0,T]\times\mathbb T^d$, satisfies $\partial_tP_tG=\Delta P_tG$, has uniformly bounded derivatives of every fixed order there, and $P_tG\to G$ uniformly as $t\downarrow0$. Moreover

$$\int_{\mathbb T^d}\rho_tG\,dx=\int_{\mathbb T^d}\rho_0P_tG\,dx,$$

so $(\rho_t)_{0\le t\le T}$ is the unique weak heat solution with datum $\rho_0$ in the stated weak formulation. It preserves $0\le\rho_t\le1$ almost everywhere and the mass $\int\rho_t\,dx=\int\rho_0\,dx$.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-ssep-weak-heat-solution]]

[[def-fourier-coefficients-and-trigonometric-polynomials]]

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $d\ge1$, a real measurable $\rho_0$ with $0\le\rho_0\le1$ almost everywhere on the normalized torus $\mathbb T^d$, and smooth periodic test functions.

[A1] Assume $\mathrm{AC}_\omega$. Full Choice is not needed for this heat-flow lemma; [[def-countable-choice]] states that every countable family of nonempty sets has a choice function.

[F1] [[def-fourier-coefficients-and-trigonometric-polynomials]]: on $\mathbb T^d$ the characters are $e_k(x)=\exp(2\pi i k\cdot x)$, the normalized measure has total mass one, and $\widehat f(k)=\int f e_{-k}\,dx$ for $f\in L^1$.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under $\mathrm{AC}_\omega$, the characters form a complete orthonormal basis of $L^2(\mathbb T^d)$; smooth functions equal their Fourier sums in $L^2$ and Parseval holds.

[F3] [[def-csm-frontier-ssep-weak-heat-solution]]: a weak heat solution has continuous pairings with smooth tests and satisfies the displayed integral identity for every such test.

## Proof

1.1 Since $0\le\rho_0\le1$ and $dx(\mathbb T^d)=1$, $\rho_0\in L^1$ and $|\widehat\rho_0(k)|\le1$ for every $k$. For any smooth $G$ and integer $m\ge1$, periodic integration by parts gives $(1+4\pi^2|k|^2)^m\widehat G(k)=\widehat{(1-\Delta)^mG}(k)$, hence $|\widehat G(k)|\le\|(1-\Delta)^mG\|_{L^1}(1+4\pi^2|k|^2)^{-m}$. If $q\ge0$ is fixed, choose $m>(d+q)/2$; grouping lattice points by $r=\|k\|_\infty$ gives at most $(2r+1)^d-(2r-1)^d\le C_dr^{d-1}$ points in shell $r$. The shell contribution to $\sum_k(1+|k|)^q|\widehat G(k)|$ is at most $C r^{d-1+q-2m}$. Grouping shells into dyadic blocks $2^j\le r<2^{j+1}$ bounds the $j$th block by $C'2^{j(d+q-2m)}$, a convergent geometric series since $2m>d+q$. Thus $\sum_k(1+|k|)^q|\widehat G(k)|<\infty$. [A1, F1, construct, algebra]

2.1 For each $t>0$ and each fixed derivative order, multiplication of the coefficients by any corresponding polynomial in $k$ still leaves an absolutely summable sequence, because $|\widehat\rho_0(k)|\le1$ and the Gaussian factor $e^{-4\pi^2|k|^2t}$ dominates every inverse power on lattice shells. Therefore the heat series and all fixed-order differentiated series converge uniformly on $\mathbb T^d$ for $t\ge\varepsilon>0$. Pairing the $k$ and $-k$ terms shows $\rho_t$ is real. Termwise differentiation is valid on every such compact time interval; both $\partial_t$ and $\Delta$ multiply the $k$th term by $-4\pi^2|k|^2$, so $\partial_t\rho_t=\Delta\rho_t$. [F1, step 1.1, algebra]

2.2 The decay estimate in step 1.1 makes the Fourier series for $G$ and for each fixed space or time derivative of $P_tG$ uniformly absolutely convergent even at $t=0$. By [F2], the series at $t=0$ equals $G$ in $L^2$; both are continuous, so equality almost everywhere implies equality everywhere. Uniform convergence of the differentiated series proves smoothness and uniform derivative bounds on $[0,T]\times\mathbb T^d$. Also $\|P_tG-G\|_\infty\le\sum_k|\widehat G(k)|\,|e^{-4\pi^2|k|^2t}-1|\to0$ by splitting into a finite set of modes and an absolutely summable tail. Termwise differentiation gives $\partial_tP_tG=\Delta P_tG$. [F1, F2, step 1.1, construct]

3.1 Absolute convergence permits termwise integration against $\rho_0\in L^1$. Reindexing $k\mapsto-k$ and using the even multiplier $e^{-4\pi^2|k|^2t}$ gives $\int\rho_tG=\sum_k e^{-4\pi^2|k|^2t}\widehat\rho_0(k)\widehat G(-k)=\int\rho_0P_tG$. By step 2.2 this pairing tends to $\int\rho_0G$ as $t\downarrow0$. Differentiating the pairing for $t>0$ and using $\Delta P_tG=P_t\Delta G$ yields $\frac{d}{dt}\int\rho_tG=\int\rho_t\Delta G$; integration from $0$ proves the weak identity in [F3]. Thus the constructed family is a weak heat solution. [F1, F3, step 2.2, algebra]

3.2 Parseval and the heat coefficients give $\|\rho_t-\rho_0\|_2^2=\sum_k|\widehat\rho_0(k)|^2|e^{-4\pi^2|k|^2t}-1|^2\to0$ as $t\downarrow0$: choose a finite set whose tail in the convergent series $\sum_k|\widehat\rho_0(k)|^2$ is small, then take the limit on that finite set. For $\epsilon>0$ put $a_\epsilon(z)=\frac12(1-z/\sqrt{z^2+\epsilon^2})$ and $\Phi_\epsilon(z)=\int_0^z\int_0^r a_\epsilon(q)\,dq\,dr$. Then $\Phi_\epsilon$ is smooth and convex, $\Phi_\epsilon(0)=\Phi_\epsilon'(0)=0$, and $0\le\Phi_\epsilon(z)\le z^2/2$. On any interval $[a,b]\subset(0,T]$, the heat equation, chain rule, and periodic integration by parts give $\int\Phi_\epsilon(\rho_b)-\int\Phi_\epsilon(\rho_a)=-\int_a^b\int\Phi_\epsilon''(\rho_s)\sum_{i=1}^d|\partial_{x_i}\rho_s|^2\,dx\,ds\le0$. For each real $z$, the defining double integral tends to $\frac12(z^-)^2$, where $z^-:=\max\{-z,0\}$; dominated convergence on the bounded range of $\rho$ over $[a,b]\times\mathbb T^d$ gives the same monotonicity for $\|\rho_t^-\|_2^2$. Letting $a\downarrow0$, the $L^2$ continuity just proved and $\rho_0\ge0$ imply $\rho_t^-=0$. The assumed datum already gives the required bound when $T=0$. [A1, F1, F2, step 2.1, algebra]

4.1 For the upper bound put $b_\epsilon(z)=\frac12(1+(z-1)/\sqrt{(z-1)^2+\epsilon^2})$ and $\Psi_\epsilon(z)=\int_1^z\int_1^r b_\epsilon(q)\,dq\,dr$. This is smooth and convex with $\Psi_\epsilon(1)=\Psi_\epsilon'(1)=0$ and $0\le\Psi_\epsilon(z)\le(z-1)^2/2$. The same integration by parts gives $\int\Psi_\epsilon(\rho_b)\le\int\Psi_\epsilon(\rho_a)$ for $0<a<b$, and $\Psi_\epsilon(z)\to\frac12((z-1)^+)^2$, where $r^+:=\max\{r,0\}$. Dominated convergence and $L^2$ continuity at zero, together with $\rho_0\le1$, give $(\rho_t-1)^+=0$. The zero Fourier coefficient is unchanged by the heat multiplier, so $\int\rho_t=\widehat\rho_0(0)=\int\rho_0$. The assumed datum already gives the bound when $T=0$. [A1, F1, F2, step 3.2, algebra]

5.1 Let $(u_t)$ be any weak heat solution in the sense of [F3]. Testing its weak identity with $e_{-k}$ shows $g_k(t):=\widehat u_t(k)$ is continuous and satisfies $g_k(t)=\widehat\rho_0(k)-4\pi^2|k|^2\int_0^t g_k(s)\,ds$. Hence $g_k$ is differentiable and solves $g_k'=-4\pi^2|k|^2g_k$, so $g_k(t)=e^{-4\pi^2|k|^2t}\widehat\rho_0(k)$, the coefficient of the constructed $\rho_t$. For each $t$, both functions are in $L^2$; equality of all Fourier coefficients and completeness in [F2] imply $u_t=\rho_t$ almost everywhere. Thus the weak heat solution is unique. [F1, F2, F3, step 3.1, algebra] ∎
