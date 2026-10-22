---
id: thm-ip-transversely-anisotropic-calderon-uniqueness
kind: theorem
title: "Conditional uniqueness in the transversely anisotropic Calderon problem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-conductivity-dirichlet-to-neumann-map
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-ip-injective-geodesic-ray-transform
  - lem-ip-alessandrini-identity
  - thm-ip-cgo-solvability-and-remainder-bound
  - lem-ip-cta-gaussian-beam-ray-limit
  - cor-uniqueness-of-the-l-one-fourier-transform
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Theorems 1.2-1.4 and proof of Theorem 1.2, PDF pp. 4-24."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.2, CTA potential uniqueness and the attenuation-to-Fourier reduction."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a transversally anisotropic product domain of dimension $n\geq3$, with compact transversal $(M_0,g_0)$, and let $q_1,q_2\in C_c^\infty(M^\circ,\mathbb R)$. Assume zero is not a Dirichlet eigenvalue of either $-\Delta_g+q_j$, assume the unweighted scalar geodesic ray transform on $M_0$ is injective on compactly supported smooth functions, and suppose the full Schrödinger Dirichlet-to-Neumann maps agree:
$$\Lambda_{q_1}=\Lambda_{q_2}:H^{1/2}(\partial M)\to H^{-1/2}(\partial M).$$
Then $q_1=q_2$ on $M$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product domain and distinguished coordinate]]

[[def-ip-injective-geodesic-ray-transform|Unweighted transversal ray transform]]

[[def-ip-conductivity-dirichlet-to-neumann-map|Full Schrödinger DN map]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the DN identity and CGO solver suppliers [F1]--[F2].

[A2] [[def-countable-choice]] is inherited from the DN identity and CGO solver suppliers [F1]--[F2].

**Given:** the compact CTA product, real smooth interior-supported potentials, nonresonance of both operators, injectivity of the real scalar ray transform, and equality of full DN maps.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: under nonresonance, each Schrödinger DN map is a full boundary map on $H^{1/2}(\partial M)$ with normal derivative convention.

[F2] [[lem-ip-alessandrini-identity]] and [[def-ip-conductivity-dirichlet-to-neumann-map]]: the Alessandrini Statement gives the Schrödinger identity for smooth boundary values, while the DN definition gives weak boundary forms on $H^{1/2}$. The exact $H^1$ solutions used below have only $H^{1/2}$ traces, so step 1.1 derives the needed extension directly from those forms.

[F3] [[def-ip-injective-geodesic-ray-transform]]: if a real compactly supported smooth function has zero unweighted integrals over all nontangential transversal geodesics, then it is zero; the same implication for complex functions follows by applying the real statement to real and imaginary parts.

[F4] [[cor-uniqueness-of-the-l-one-fourier-transform]]: two $L^1(\mathbb R)$ functions with equal Fourier transforms are equal almost everywhere.

[F5] [[thm-ip-cgo-solvability-and-remainder-bound]] now imports the $H^1$ real-weight right solver with $O(|\tau|^{-1})$ $L^2$ norm from Dos Santos Ferreira--Kurylev--Lassas--Salo, Proposition 2.1, PDF p. 10, with finite orientation-cover descent. The external result accepts arbitrary $L^2$ forcing and both signs of the real weight, rather than only the particular transport amplitude in that supplier's Statement.

[F6] [[lem-ip-cta-gaussian-beam-ray-limit]] supplies the normalized beam, arbitrarily small residual, and self-intersection ray limit, including nonorientable transversals by orientation-cover descent. The external source is Proposition 3.1, PDF p. 14, with the cross-term estimate on pp. 21--22. Proposition 2.2, PDF p. 11, gives the associated exact-solution correction. These external statements and the cross-term pages were inspected for the bounded repair; no complete new Carleman or beam proof is claimed.

## Proof

**Given:** the data in the statement.

1.1 For exact $H^1$ solutions $u_j$ let $f_j=\operatorname{tr}u_j\in H^{1/2}(\partial M)$ and define $a_j(v,w)=\int_M(g(\nabla_gv,\nabla_g\overline w)+q_jv\overline w)\,dV_g$. By the weak DN definition, $\langle\Lambda_{q_1}f_1,f_2\rangle=a_1(u_1,u_2)$. Let $\widetilde u_1\in H^1(M)$ be the $q_2$ solution with trace $f_1$, which exists by nonresonant weak solvability. Then $\langle\Lambda_{q_2}f_1,f_2\rangle=a_2(\widetilde u_1,u_2)$. Since $u_1-\widetilde u_1\in H_0^1(M)$ and $u_2$ solves the $q_2$ weak equation, $a_2(u_1-\widetilde u_1,u_2)=\overline{a_2(u_2,u_1-\widetilde u_1)}=0$, where the conjugation uses real-valuedness of $q_2$. Subtracting the weak pairings and using equality of the DN maps on all $H^{1/2}(\partial M)$ gives $\int_M Q(x_1,x')u_1(x_1,x')\overline{u_2(x_1,x')}\,dV_g=0$, where $Q=q_1-q_2$. This derives the needed weak-trace extension of [F2]. Because $q_j\in C_c^\infty(M^\circ)$ and $M\Subset\mathbb R\times M_0^\circ$, extension of $Q$ by zero gives a smooth compactly supported function on $\mathbb R\times M_0$. [F1, F2, given, algebra]

2.1 Fix $\lambda\in\mathbb R$, put $s=\tau+i\lambda$, and choose the beam $v_s$ of [F6] with residual $O(\tau^{-K})$. Use the signed real-weight solver [F5] to obtain exact solutions $$u_1=e^{-s x_1}(v_s+r_1),\qquad u_2=e^{s x_1}(v_s+r_2)$$ for the respective potentials, with $r_j\in H^1(M)$ and $\|r_j\|_2=O(\tau^{-1})$. Indeed the conjugated residual is $(-\Delta_{g_0}-s^2)v_s+q_jv_s$, of bounded $L^2$ norm on a fixed product cylinder; multiplication by $e^{\pm i\lambda x_1}$ is bounded there. Correcting with the real-weight solver gives precisely this bound. Their product in step 1.1 is $e^{-2i\lambda x_1}(v_s+r_1)(\overline{v_s}+\overline{r_2})$. Every error integral tends to zero by Cauchy--Schwarz, the boundedness of $Q$, $\|v_s\|_2=O(1)$, and $\|r_j\|_2=o(1)$. Integrating first in $x_1$ gives the smooth compactly supported transversal test function $\widehat Q_\lambda$ below. Applying [F6] proves the attenuated ray identity for every $\lambda$ and every nontangential $\gamma$. This argument works on the base manifold; it does not assume injectivity of a ray transform on its orientation cover. [A1, A2, F5, F6, step 1.1, algebra]

3.1 Step 2.1 supplies $$\int_{\gamma}\widehat Q_\lambda(\gamma(t))e^{-2\lambda t}\,dt=0 \quad\text{for every real }\lambda\text{ and every nontangential geodesic }\gamma,$$ where $\widehat Q_\lambda(x')=\int_{\mathbb R}e^{-2i\lambda x_1}Q(x_1,x')\,dx_1$. At $\lambda=0$, [F3] gives $\widehat Q_0=0$. Assume inductively that $\partial_\lambda^j\widehat Q_0=0$ for every $j<k$. Differentiate the ray identity $k$ times at $\lambda=0$. Differentiation under the finite geodesic integral is valid because $Q$ is smooth with compact $x_1$ support. Leibniz' rule leaves the unweighted ray integral of $\partial_\lambda^k\widehat Q_0$; all other terms contain lower derivatives and vanish by the induction hypothesis. Thus [F3], applied to real and imaginary parts, gives $\partial_\lambda^k\widehat Q_0=0$. Induction proves that every Taylor coefficient of $\lambda\mapsto\widehat Q_\lambda(x')$ vanishes for each fixed $x'$. [F3, given, step 2.1, induction, algebra]

4.1 For each fixed $x'$, compact $x_1$ support makes $\widehat Q_\lambda(x')$ entire in $\lambda$, so its zero Taylor series implies it vanishes for all real $\lambda$. This is the Fourier transform of the $L^1(\mathbb R)$ function $Q(\cdot,x')$ at every frequency $2\lambda$; [F4] gives $Q(\cdot,x')=0$ almost everywhere. Smoothness of $Q$ then yields $Q=0$ on $M$. [F4, step 3.1, algebra] ∎

