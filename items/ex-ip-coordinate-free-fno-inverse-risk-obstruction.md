---
id: ex-ip-coordinate-free-fno-inverse-risk-obstruction
kind: example
title: Coordinate-free Fourier inverse maps have an odd-mesh risk floor
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: No additional choice axiom is used; the laws, finite predictors and
  explicit constructions are supplied.
sources:
  references:
    - title: Niklas Reinhardt, Sven Wang, and Jakob Zech, Statistical Learning Theory
        for Neural Operators, Journal of Machine Learning Research 27 (2026)
      url: https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf
      locator: "Theorems 5–6, §3, and Appendix B: entropy-controlled ERM rates for
        function-valued regression and FrameNet under compactness, noise,
        random-design, and holomorphy hypotheses."
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas, and Nicholas H.
        Nelsen, Extension and neural operator approximation of the electrical
        impedance tomography inverse map (2025)
      url: https://arxiv.org/pdf/2511.20361
      locator: "Theorem 4.8 and §5: continuum uniform approximation on a compact EIT
        data set, separated from finite training, network-size, and mesh-rate
        guarantees."
    - title: Guillaume Bal, Introduction to Inverse Problems, E6901 Lecture Notes for
        2011 course, full 132-page text
      url: https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf
      locator: "§1.1, PDF pp. 3–4, and §§8.2–8.3, PDF pp. 91–97: forward operators,
        noise, priors, regularization, data misfit, and computational limits; no
        neural-operator sample-rate theorem is imported."
    - title: "Nikola Kovachki et al., Neural Operator: Learning Maps Between Function
        Spaces With Applications to PDEs, Journal of Machine Learning Research
        24 (2023)"
      url: https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf
      locator: "§1.1 and §4.4: parameter sharing, discretization invariance, Fourier
        neural-operator layers, and continuum approximation; these statements
        give no finite-sample inverse-risk rate."
---

## Example

Consider the complete original Fourier architecture and diagonal inverse question reproduced below. For every odd integer $m\ge3$, every $N\ge1$, and every admissible bounded parameter class with a measurable empirical minimizer, its risk satisfies
$$\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)\ge\frac{R^2(3^p-2^p)^2}{4\,3^{2(p+s)}}>0.$$
The same bound holds for every measurable learner whose realized predictor belongs to the stated coordinate-free Fourier class, whether or not it minimizes empirical risk. On the other hand, the unrestricted risk tends to zero as $m\to\infty$ for fixed $p,s,R,\sigma>0$, independently of $N$. Thus no growth of $N,S,B$ can make this original architecture attain the vanishing unrestricted risk along an odd-mesh subsequence. This is a partial resolution: no complete joint bounded-class rate, or corresponding fixed positive even-mesh floor, is asserted. The original question is retained under Original question with explicit positive coordinate indices and empty-class conventions.

## Example references

[Reinhardt, Wang, and Zech, full 2026 JMLR paper](https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf)

[de Hoop et al., full EIT inverse-map paper](https://arxiv.org/pdf/2511.20361)

[Bal, full inverse-problems lecture notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf)

[Kovachki et al., full 2023 JMLR paper](https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf)

## Original question

Let $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ carry normalized Lebesgue measure and fix the real orthonormal Fourier basis
$$\phi_1(x)=1,\qquad \phi_{2k}(x)=\sqrt2\cos(kx),\qquad \phi_{2k+1}(x)=\sqrt2\sin(kx)\quad(k\ge1).$$
Use this basis to identify the real Hilbert space $\ell^2(\mathbb N_{>0})$ with $L^2(\mathbb T;\mathbb R)$. Fix integers $N,m\ge1$ and parameters $s,p,R,\sigma>0$, and define
$$\Theta_s(R)=\left\{\theta\in\ell^2:\sum_{j\ge1}j^{2s}\theta_j^2\le R^2\right\},\qquad (A_p\theta)_j=j^{-p}\theta_j,\qquad \mathcal X_p(R)=A_p\Theta_s(R).$$
The inverse map $G^\dagger:\mathcal X_p(R)\to\ell^2$ is $G^\dagger(A_p\theta)=\theta$. For $m\ge1$, let $P_m$ retain the first $m$ Fourier coefficients and let $I_m:\mathbb R^m\to\ell^2$ append zero coordinates.

Fix a globally Lipschitz nonpolynomial function $\sigma_0:\mathbb R\to\mathbb R$, called the activation. For $x\in\mathbb R^m$, form the scalar input field $\bar u_0(x;z)=\sum_{j=1}^m x_j\phi_j(z)$. A pointwise affine lift $u_0(x;z)=V_{\mathrm{in}}\bar u_0(x;z)+b_{\mathrm{in}}$, with $V_{\mathrm{in}}\in\mathbb R^{c_0}$ and $b_{\mathrm{in}}\in\mathbb R^{c_0}$, creates $c_0$ channels. For fields $u_\ell(z)\in\mathbb R^{c_\ell}$ with positive integer channel counts $c_\ell$, apply an integer number $D\ge1$ of layers indexed by $\ell=0,\ldots,D-1$:
$$u_{\ell+1}(z)=\sigma_0\!\left(W_\ell u_\ell(z)+b_\ell+(\mathcal K_\ell u_\ell)(z)\right).$$
Here $\sigma_0$ acts coordinatewise, $W_\ell\in\mathbb R^{c_{\ell+1}\times c_\ell}$ and $b_\ell\in\mathbb R^{c_{\ell+1}}$ are pointwise channel weights, and $\mathcal K_\ell$ is a Fourier multiplier meaning $\widehat{(\mathcal K_\ell u)}(k)=R_{\ell,k}\widehat u(k)$, where $\widehat u(k)=(2\pi)^{-1}\int_0^{2\pi}u(z)e^{-ikz}\,dz$ is computed componentwise, with matrices $R_{\ell,k}\in\mathbb C^{c_{\ell+1}\times c_\ell}$ satisfying $R_{\ell,-k}=\overline{R_{\ell,k}}$ and $R_{\ell,k}=0$ for $|k|>q$ for some integer cutoff $q\ge0$. A pointwise affine output map $v(x;z)=a_{\mathrm{out}}^\top u_D(z)+b_{\mathrm{out}}$ gives a real scalar field, and the network output is $\Psi_m(x)=(\langle v(x;\cdot),\phi_j\rangle_{L^2})_{j=1}^m$. Let $\mathcal F_{S,B}^{(m)}$ be the union of these maps over architectures whose depth, channel counts, Fourier cutoff, and number of real scalar parameters are each at most the integer $S\ge1$, with every trainable parameter bounded in absolute value by $B>0$. A parameter array used at mesh size $m$ is the same array at every other mesh size. For fixed $S$, there are finitely many allowed architecture indices; equip their disjoint union of bounded real parameter boxes with its Borel structure.

Write $\mathcal P(K)$ for the Borel probability laws on a Borel set $K$. For a Borel probability law $\mu$ on $\Theta_s(R)$, draw independent training truths $\theta_i\sim\mu$ and observations
$$X_{i,m}=P_mA_p\theta_i+\eta_{i,m},\qquad Y_{i,m}=P_m\theta_i,\qquad \eta_{i,m}\sim N(0,\sigma^2m^{-1}I_m),\quad i=1,\ldots,N,$$
with all noises independent, and write $D_{N,m}=((X_{i,m},Y_{i,m}))_{i=1}^N$. A selector is Borel into the finite disjoint union of architecture indices and their bounded parameter boxes, and its realized map minimizes the empirical loss. For each $N,m,S,B$ with $\mathcal F_{S,B}^{(m)}\ne\varnothing$, assume there is at least one such selector $\tau$ that, from $D_{N,m}$, returns a minimizer of
$$\frac1N\sum_{i=1}^N\|\Psi(X_{i,m})-Y_{i,m}\|_2^2$$
over $\Psi\in\mathcal F_{S,B}^{(m)}$; let $\mathcal T_{N,m}(S,B)$ be the set of all such selectors, and set it to $\varnothing$ when $\mathcal F_{S,B}^{(m)}=\varnothing$. At test time, draw an independent $\theta\sim\mu$ and $\eta_m\sim N(0,\sigma^2m^{-1}I_m)$, and define
$$\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)=\inf_{\tau\in\mathcal T_{N,m}(S,B)}\sup_{\mu\in\mathcal P(\Theta_s(R))}E\left\|I_m\tau(D_{N,m})(P_mA_p\theta+\eta_m)-\theta\right\|_{\ell^2}^2.$$
Use the convention $\inf\varnothing=+\infty$, so an empty architecture class has infinite ERM risk. Also define $\mathfrak R^{\mathrm{all}}_{N,m}$ by the same infimum over all Borel predictors from $(D_{N,m},X_m)$ to $\mathbb R^m$, with $X_m=P_mA_p\theta+\eta_m$. Determine matching minimax upper and lower rates for $\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)$ jointly in $N,m,S,B,p,s,R,\sigma$. In particular, characterize the joint growth regimes of $m=m_N$ and $S=S_N$ that separate statistical estimation, neural-operator approximation, and continuum truncation error, and determine when the bounded shared-parameter Fourier architecture attains the unrestricted rate $\mathfrak R^{\mathrm{all}}_{N,m}$.

## Facts & Assumptions

**Given:** The original real Fourier basis $\phi_1=1$, $\phi_2=\sqrt2\cos z$, $\phi_3=\sqrt2\sin z$ and all higher complete cosine/sine pairs; the architecture has only constant pointwise channel weights and biases, Fourier multipliers and a scalar pointwise Lipschitz activation. Its parameters may depend on all training data but are fixed during test evaluation.

[A1] Translation $T_\alpha u(z)=u(z-\alpha)$ is an isometry of $L^2(\mathbb T)$, sends $\phi_2$ to $\phi_3$ for $\alpha=\pi/2$, and preserves each full two-dimensional cosine/sine frequency pair. The first-m-coordinate subspace is translation-invariant when $m$ is odd.

[A2] A vector with distribution $N(0,\tau^2I_m)$ is invariant under every orthogonal matrix: its density is a constant times $e^{-\|x\|^2/(2\tau^2)}$, and orthogonal changes of variables preserve norm and volume.

[A3] $\|x-a\|^2+\|x-b\|^2\ge\|a-b\|^2/2$ by completing the square.

## Verification

**Given:** The original architecture, training and test model, and [A1]–[A3].

1.1 Each Fourier multiplier commutes with translation because the kth translated Fourier coefficient is multiplied by the scalar $e^{-ik\alpha}$, which commutes with its channel matrix. Every constant channel matrix, constant bias and coordinatewise scalar activation also commutes with translation. By induction through the lift, all layers and output map, the realized scalar output field is translation-equivariant. The layer fields are in $L^2$: a globally Lipschitz activation has linear growth, the pointwise weights are finite and the finite Fourier multipliers are bounded. For odd $m$, projection onto the first m coefficients commutes with translation by [A1]. Hence the zero-extended output map $F=I_m\Psi_m$ satisfies $F(U_\alpha x)=T_\alpha F(x)$, where $U_\alpha$ is the orthogonal translation matrix on the retained coefficients. This holds for every individual parameter array, also after data-dependent selection. [A1, given, construct, algebra]

1.2 Put $a=R3^{-(p+s)}$, choose $\theta_c=a2^pe_2$ and $\theta_s=a3^pe_3$, and let $\mu=(\delta_{\theta_c}+\delta_{\theta_s})/2$. These truths lie in the ellipsoid because their weighted squared norms are at most $a^23^{2(p+s)}=R^2$. Their forward coefficient vectors are respectively $ae_2$ and $ae_3$, related by $U=U_{\pi/2}$. Conditional on any training sample, the test truth is still an independent equal-probability draw from these two values. Couple the corresponding test noises as $\eta$ and $U\eta$; by [A2] both have the required $N(0,\sigma^2m^{-1}I_m)$ law. [A1, A2, given, construct, algebra]

1.3 To see unrestricted vanishing without training, put $k_m=\min\{m,\max\{1,\lfloor m^{1/(2(2p+1))}\rfloor\}\}$. Output $j^pX_{m,j}$ for $j\le k_m$ and zero otherwise. Its risk for every truth is at most $\sigma^2m^{-1}\sum_{j\le k_m}j^{2p}+R^2(k_m+1)^{-2s}\le\sigma^2m^{-1}k_m^{2p+1}+R^2(k_m+1)^{-2s}\to0$. It is a Borel predictor and is allowed in the unrestricted class. This proves the contrast with the positive odd-mesh architecture floor. [given, construct, algebra]

2.1 For fixed training data, let $F$ be its selected predictor. By step 1.1, $F(ae_3+U\eta)=T_{\pi/2}F(ae_2+\eta)$. Translating the first output and truth preserves their norm. Consequently the conditional average of the two squared risks is $\tfrac12E[\|T_{\pi/2}F(ae_2+\eta)-T_{\pi/2}\theta_c\|^2+\|T_{\pi/2}F(ae_2+\eta)-\theta_s\|^2]$, which is at least $\|T_{\pi/2}\theta_c-\theta_s\|^2/4=a^2(3^p-2^p)^2/4$ by [A3]. This lower bound is independent of the training sample. Integrating over it, taking the worst law and then the infimum over selectors proves the stated floor. [A1, A3, step 1.1, step 1.2, algebra]

3.1 The mismatch arises because the diagonal inverse rescales the first cosine and sine by different factors $2^p$ and $3^p$, while the coordinate-free architecture must respect translation between them. It is independent of finite training or parameter-size limitations. The proof deliberately uses odd $m$ so both the input noise law and retained output subspace are translation-invariant; it supplies no identical assertion for even $m$, whose last frequency pair is incomplete. [step 1.1, step 2.1, step 1.3, algebra] ∎

## Scope of the resolution

The odd-mesh consistency subquestion is answered negatively, and the unrestricted vanishing comparison is proved. The full requested joint N,m,S,B minimax rate is not resolved here; in particular even meshes break the complete-pair symmetry used by the lower bound, and different activations/parameter budgets may have distinct approximation behavior. This is not the EIT question: the generalized EIT architecture has coordinate/chart lifting, so this coordinate-free translation obstruction is not transferred to it.
