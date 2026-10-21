---
id: op-ip-neural-operator-sample-complexity-for-inverse-maps
kind: open-problem
title: Joint sample and mesh rates for neural inverse maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: No choice axiom is used; all classes, sampling laws, discretizations, and risks are specified.
sources:
  references:
    - title: Niklas Reinhardt, Sven Wang, and Jakob Zech, Statistical Learning Theory for Neural Operators, Journal of Machine Learning Research 27 (2026)
      url: https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf
      locator: "Theorems 5–6, §3, and Appendix B: entropy-controlled ERM rates for function-valued regression and FrameNet under compactness, noise, random-design, and holomorphy hypotheses."
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas, and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map (2025)
      url: https://arxiv.org/pdf/2511.20361
      locator: "Theorem 4.8 and §5: continuum uniform approximation on a compact EIT data set, separated from finite training, network-size, and mesh-rate guarantees."
    - title: Guillaume Bal, Introduction to Inverse Problems, E6901 Lecture Notes for 2011 course, full 132-page text
      url: https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf
      locator: "§1.1, PDF pp. 3–4, and §§8.2–8.3, PDF pp. 91–97: forward operators, noise, priors, regularization, data misfit, and computational limits; no neural-operator sample-rate theorem is imported."
    - title: "Nikola Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs, Journal of Machine Learning Research 24 (2023)"
      url: https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf
      locator: "§1.1 and §4.4: parameter sharing, discretization invariance, Fourier neural-operator layers, and continuum approximation; these statements give no finite-sample inverse-risk rate."
forward_refs:
  - ex-ip-coordinate-free-fno-inverse-risk-obstruction
---

## Open problem

Let $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ carry normalized Lebesgue measure and fix the real orthonormal Fourier basis
$$\phi_1(x)=1,\qquad \phi_{2k}(x)=\sqrt2\cos(kx),\qquad \phi_{2k+1}(x)=\sqrt2\sin(kx)\quad(k\ge1).$$
Use this basis to identify the real Hilbert space $\ell^2(\mathbb N)$ with $L^2(\mathbb T;\mathbb R)$. Fix integers $N,m\ge1$ and parameters $s,p,R,\sigma>0$, and define
$$\Theta_s(R)=\left\{\theta\in\ell^2:\sum_{j\ge1}j^{2s}\theta_j^2\le R^2\right\},\qquad (A_p\theta)_j=j^{-p}\theta_j,\qquad \mathcal X_p(R)=A_p\Theta_s(R).$$
The inverse map $G^\dagger:\mathcal X_p(R)\to\ell^2$ is $G^\dagger(A_p\theta)=\theta$. For $m\ge1$, let $P_m$ retain the first $m$ Fourier coefficients and let $I_m:\mathbb R^m\to\ell^2$ append zero coordinates.

Fix a globally Lipschitz nonpolynomial function $\sigma_0:\mathbb R\to\mathbb R$, called the activation. For $x\in\mathbb R^m$, form the scalar input field $\bar u_0(x;z)=\sum_{j=1}^m x_j\phi_j(z)$. A pointwise affine lift $u_0(x;z)=V_{\mathrm{in}}\bar u_0(x;z)+b_{\mathrm{in}}$, with $V_{\mathrm{in}}\in\mathbb R^{c_0}$ and $b_{\mathrm{in}}\in\mathbb R^{c_0}$, creates $c_0$ channels. For fields $u_\ell(z)\in\mathbb R^{c_\ell}$ with positive integer channel counts $c_\ell$, apply an integer number $D\ge1$ of layers indexed by $\ell=0,\ldots,D-1$:
$$u_{\ell+1}(z)=\sigma_0\!\left(W_\ell u_\ell(z)+b_\ell+(\mathcal K_\ell u_\ell)(z)\right).$$
Here $\sigma_0$ acts coordinatewise, $W_\ell\in\mathbb R^{c_{\ell+1}\times c_\ell}$ and $b_\ell\in\mathbb R^{c_{\ell+1}}$ are pointwise channel weights, and $\mathcal K_\ell$ is a Fourier multiplier meaning $\widehat{(\mathcal K_\ell u)}(k)=R_{\ell,k}\widehat u(k)$, where $\widehat u(k)=(2\pi)^{-1}\int_0^{2\pi}u(z)e^{-ikz}\,dz$ is computed componentwise, with matrices $R_{\ell,k}\in\mathbb C^{c_{\ell+1}\times c_\ell}$ satisfying $R_{\ell,-k}=\overline{R_{\ell,k}}$ and $R_{\ell,k}=0$ for $|k|>q$ for some integer cutoff $q\ge0$. A pointwise affine output map $v(x;z)=a_{\mathrm{out}}^\top u_D(z)+b_{\mathrm{out}}$ gives a real scalar field, and the network output is $\Psi_m(x)=(\langle v(x;\cdot),\phi_j\rangle_{L^2})_{j=1}^m$. Let $\mathcal F_{S,B}^{(m)}$ be the union of these maps over architectures whose depth, channel counts, Fourier cutoff, and number of real scalar parameters are each at most the integer $S\ge1$, with every trainable parameter bounded in absolute value by $B>0$. A parameter array used at mesh size $m$ is the same array at every other mesh size. For fixed $S$, there are finitely many allowed architecture indices; equip their disjoint union of bounded real parameter boxes with its Borel structure.

Write $\mathcal P(K)$ for the Borel probability laws on a Borel set $K$. For a Borel probability law $\mu$ on $\Theta_s(R)$, draw independent training truths $\theta_i\sim\mu$ and observations
$$X_{i,m}=P_mA_p\theta_i+\eta_{i,m},\qquad Y_{i,m}=P_m\theta_i,\qquad \eta_{i,m}\sim N(0,\sigma^2m^{-1}I_m),\quad i=1,\ldots,N,$$
with all noises independent, and write $D_{N,m}=((X_{i,m},Y_{i,m}))_{i=1}^N$. A selector is Borel into the finite disjoint union of architecture indices and their bounded parameter boxes, and its realized map minimizes the empirical loss. For each $N,m,S,B$, assume there is at least one such selector $\tau$ that, from $D_{N,m}$, returns a minimizer of
$$\frac1N\sum_{i=1}^N\|\Psi(X_{i,m})-Y_{i,m}\|_2^2$$
over $\Psi\in\mathcal F_{S,B}^{(m)}$; let $\mathcal T_{N,m}(S,B)$ be the set of all such selectors. At test time, draw an independent $\theta\sim\mu$ and $\eta_m\sim N(0,\sigma^2m^{-1}I_m)$, and define
$$\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)=\inf_{\tau\in\mathcal T_{N,m}(S,B)}\sup_{\mu\in\mathcal P(\Theta_s(R))}E\left\|I_m\tau(D_{N,m})(P_mA_p\theta+\eta_m)-\theta\right\|_{\ell^2}^2.$$
Also define $\mathfrak R^{\mathrm{all}}_{N,m}$ by the same infimum over all Borel predictors from $(D_{N,m},X_m)$ to $\mathbb R^m$, with $X_m=P_mA_p\theta+\eta_m$. Determine matching minimax upper and lower rates for $\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)$ jointly in $N,m,S,B,p,s,R,\sigma$. In particular, characterize the joint growth regimes of $m=m_N$ and $S=S_N$ that separate statistical estimation, neural-operator approximation, and continuum truncation error, and determine when the bounded shared-parameter Fourier architecture attains the unrestricted rate $\mathfrak R^{\mathrm{all}}_{N,m}$.
## Open problem references

[Reinhardt, Wang, and Zech, full 2026 JMLR paper](https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf)

[de Hoop et al., full EIT inverse-map paper](https://arxiv.org/pdf/2511.20361)

[Bal, full inverse-problems lecture notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf)

[Kovachki et al., full 2023 JMLR paper](https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf)

## Status

As of 2026-10-19, the original full joint $N,m,S,B$ risk-rate question is not resolved by this review. One obstruction is now explicit: the specified coordinate-free Fourier architecture is translation-equivariant, whereas $A_p^{-1}$ rescales the first cosine and sine differently. For every odd mesh $m\ge3$, its worst-law risk has the positive floor $R^2(3^p-2^p)^2/(4\,3^{2(p+s)})$, independently of training size and parameter budget, while an unrestricted cutoff predictor has risk tending to zero. Thus unrestricted-rate attainment along odd meshes is ruled out for this original architecture. The corresponding all-parameter bounded-class rate, including even meshes, is not supplied by that argument.

Reinhardt, Wang, and Zech give function-space regression/ERM bounds under their stated compactness, entropy and noise hypotheses, including a holomorphic FrameNet application; these are not the original noisy-input, joint-mesh inverse-risk rate. Kovachki et al. describe Fourier layers, translation symmetries and continuum approximation with their stated architecture conventions. The EIT inverse-map question concerns a generalized architecture with coordinate/chart lifting and a different compact dataset, so this coordinate-free obstruction does not identify the two formulations. No global novelty claim or claim that every finite-sample neural inverse problem is unsolved is made.


## References

[[ex-ip-coordinate-free-fno-inverse-risk-obstruction|Explicit odd-mesh obstruction and unrestricted comparison.]]


## Remarks

The statement is a mesh-dependent extension of the existing draft question on finite-sample generalization of neural inverse maps. It does not use that open question as a premise or supplier.

## Remarks references

[[op-ip-finite-sample-generalization-of-neural-inverse-maps|Related draft question on finite-sample generalization without a mesh-rate claim.]]
