---
id: lem-ip-planar-measurable-beltrami-cgo-solutions
kind: lemma
title: Measurable-coefficient Beltrami CGO solutions and principal phases
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - lem-ip-planar-principal-beltrami-inverse-gradient-integrability
  - lem-inverse-of-a-quasiconformal-map-is-quasiconformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-fredholm-alternative-for-identity-minus-compact
  - thm-weyl-lemma-for-the-laplacian
  - thm-liouville-bounded-entire-function
  - thm-metric-compactness-equivalences
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Astala and Päivärinta, Calderón's inverse conductivity problem in the plane"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf"
      locator: "Section 3, Proposition 3.3 and its complete similarity proof, printed pp. 276–277; Section 4, Proposition 4.1 and Theorem 4.2 with full proofs, printed pp. 278–279; principal quasiconformal phases in Section 7."
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 3.4, Definition 3.6 and Theorem 3.7, printed pp. 12–13."
dependency_level: 2
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $0\le\kappa<1$ and $2<r\le p_\kappa$ from the near-two inverse. Let $\mu\in L^\infty(\mathbb C;\mathbb C)$ be supported in $D_1$, with $\|\mu\|_\infty\le\kappa$. For each $k\in\mathbb C$ there is a unique solution
$$f_\mu(z,k)=e^{ikz}M_\mu(z,k),\qquad M_\mu(\cdot,k)-1\in W^{1,r}(\mathbb C),\qquad M_\mu(z,k)=1+O(1/z)$$
of $\bar\partial f_\mu=\mu\overline{\partial f_\mu}$, with $f_\mu(\cdot,0)=1$. The function $M_\mu$ never vanishes and
$$\|M_\mu(\cdot,k)-1\|_{W^{1,r}(\mathbb C)}\le C_{\kappa,r} |k|e^{C_{\kappa,r}|k|}.$$
When $k\ne0$, it has a representation
$$f_\mu(z,k)=e^{ik\Phi_\mu(z,k)},$$
where $\Phi_\mu(\cdot,k)$ is a principal $K$-quasiconformal homeomorphism, $K=(1+\kappa)/(1-\kappa)$, conformal outside $\overline D_1$, and
$$\|\Phi_\mu(\cdot,k)-z\|_{W^{1,r}(\mathbb C)}+\sup_z(1+|z|)|\Phi_\mu(z,k)-z|\le C_{\kappa,r}.$$
Consequently $\|f_\mu(\cdot,k)\|_{W^{1,r}(D_S)}\le C_{\kappa,r,S}(1+|k|)e^{C_{\kappa,r,S}|k|}$; for $|k|=1$, the inverse-gradient bound $\int_{D_S}|\partial f_\mu|^{-(r-2)}\le C_{\kappa,r,S}$ also holds uniformly.

## Statement references

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|Cauchy estimates and measurable real-linear inversion.]]

[[lem-ip-planar-principal-beltrami-inverse-gradient-integrability|Principal quasiconformal solutions and inverse-gradient bounds.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the coefficient, exponent and parameter in the statement.

[F1] The Cauchy transform of compact $L^r$ data is bounded, Hölder continuous, $W^{1,r}$, and $O(1/z)$ at infinity, with derivatives $\bar\partial\mathcal Ch=h$ and $\partial\mathcal Ch=\mathcal Bh$. The real-linear inverse of $I-\mu_1\mathcal B-\mu_2\overline{\mathcal B}$ has uniformly bounded norm when $|\mu_1|+|\mu_2|\le\kappa$. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F2] Every compact measurable complex coefficient bounded by $\kappa$ has a principal quasiconformal homeomorphic solution with uniform $W^{1,r}$ deformation and inverse-gradient estimates. Quasiconformal inverses have the same dilatation, preserve null sets and satisfy the weighted area formula and derivative inverse identity. ([[lem-ip-planar-principal-beltrami-inverse-gradient-integrability]], [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]])

[F3] A compact real-linear operator on a real Banach space has $I-K$ invertible whenever its kernel is zero. Complete totally bounded metric spaces are compact. ([[thm-fredholm-alternative-for-identity-minus-compact]], [[thm-metric-compactness-equivalences]])

[F4] Distributional harmonic functions are smooth; bounded entire holomorphic functions are constant. Smooth approximation is available in Sobolev spaces on Euclidean space. ([[thm-weyl-lemma-for-the-laplacian]], [[thm-liouville-bounded-entire-function]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[A1] The Axiom of Choice is used in [F2]–[F3], and Countable Choice in the Fourier, integration and approximation suppliers. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 We first establish the factorization needed below. If a continuous $G\in W^{1,2}_{\mathrm{loc}}(\mathbb C)$ satisfies $\bar\partial G=\nu\partial G$ with $\nu$ compactly supported and $|\nu|\le\kappa$, let $\Psi$ be the principal homeomorphic solution for $\nu$ from [F2]. Then $H=G\circ\Psi^{-1}$ is locally $H^1$ and holomorphic. Here are the Sobolev details: on compact sets, mollifications $G_n$ converge uniformly to $G$ and in $H^1$. The classical composition chain rule with the Sobolev inverse, first by smooth approximation of that inverse, gives $D(G_n\circ\Psi^{-1})=(DG_n\circ\Psi^{-1})D\Psi^{-1}$. The area formula and inverse distortion bound give $\int|D((G_n-G_m)\circ\Psi^{-1})|^2\le K\int|D(G_n-G_m)|^2$ over corresponding compact neighborhoods. Thus these compositions converge locally in $H^1$, with the chain rule in the limit. At common differentiability points, the two Beltrami equations and the inverse derivative identity cancel the $\bar\partial$ derivative of $H$. Null-set preservation makes these identities valid on a full-measure target set. Hence $\bar\partial H=0$ distributionally; apply $\partial$ and [F4] to make $H$ smooth harmonic, and then its Cauchy–Riemann equation gives holomorphy. [A1, F2, F4, given, algebra]

2.1 Suppose a bounded continuous $F\in W^{1,r}_{\mathrm{loc}}$ satisfies $|\bar\partial F|\le\kappa\mathbf1_{D_1}|\partial F|+\gamma|F|$, with $\gamma\in L^r$ supported in $D_1$. It can be written $\bar\partial F=\nu\partial F+AF$ with $\nu,A$ supported in $D_1$, $|\nu|\le\kappa$, and $|A|\le\gamma$. To construct them measurably, if $|\bar\partial F|\le\kappa|\partial F|$, take $\nu=\bar\partial F/\partial F$ and $A=0$, using zero at zero denominators. Otherwise choose $\nu\partial F$ of length $\kappa|\partial F|$ in the direction of $\bar\partial F$, and put $A=(\bar\partial F-\nu\partial F)/F$; in this branch $F\ne0$ wherever the numerator is nonzero, by the assumed inequality. Set both coefficients to zero outside $D_1$. Let $h=(I-\nu\mathcal B)^{-1}A$ and $\eta=\mathcal Ch$. The equation for $h$ implies its support lies in $\overline D_1$. By [F1], $\bar\partial\eta-\nu\partial\eta=A$ and $\|\eta\|_\infty+\|\eta\|_{W^{1,r}}\le C_{\kappa,r}\|\gamma\|_r$, with $\eta=O(1/z)$. The product rule gives $\bar\partial(e^{-\eta}F)=\nu\partial(e^{-\eta}F)$. This bounded continuous function factors as an entire bounded holomorphic function after a principal change of variables by step 1.1, so it is constant. Thus $F=c e^\eta$; if $F\to c_\infty$ at infinity, then $c=c_\infty$. In particular a solution of this inequality tending to zero is identically zero. [F1, F2, F4, step 1.1, algebra]

3.1 Put $e_{-k}(z)=e^{-i(kz+\overline k\overline z)}$, $\nu=e_{-k}\mu$ and $\alpha=-i\overline k e_{-k}\mu$. The ansatz $f=e^{ikz}(1+\eta)$ gives exactly $\bar\partial\eta-\nu\overline{\partial\eta}=\alpha\overline\eta+\alpha$. Define the real-linear operator $K g=\mathcal C(I-\nu\overline{\mathcal B})^{-1}(\alpha\overline g)$ on $L^r(\mathbb C;\mathbb C)$, regarded as a real Banach space. The data to its inverse have support in $\overline D_1$, with norm at most $C_{\kappa,r}|k|\|g\|_r$. Its inverse output has the same support, by its defining equation. The Cauchy map on such data is compact into $L^r$: on the unit ball of data, [F1] gives uniform boundedness and a common Hölder modulus, and gives a uniform $C/|z|$ bound outside $D_2$. To obtain a finite $\epsilon$-net, first make the $L^r$ norm of this exterior tail small by taking a large disk, then partition that disk into sufficiently small squares and quantize the uniformly bounded complex values at their centers to a finite mesh; the Hölder modulus bounds the $L^r$ approximation error inside. Completeness and [F3] turn total boundedness into relative compactness. Thus $K$ is compact. [F1, F3, step 2.1, algebra]

4.1 If $g=Kg$, then $g\in W^{1,r}$ is continuous and bounded by [F1], is $O(1/z)$ at infinity, and satisfies $\bar\partial g-\nu\overline{\partial g}=\alpha\overline g$. Therefore $|\bar\partial g|\le\kappa|\partial g|+|\alpha||g|$, so step 2.1 implies $g=0$. By [F3], $I-K$ is invertible. The equation $\eta-K\eta=\mathcal C(I-\nu\overline{\mathcal B})^{-1}\alpha=K\mathbf1_{D_1}$ has a unique $L^r$ solution. The equation itself and [F1] put $\eta\in W^{1,r}$, continuous with $O(1/z)$ decay. Reversing the ansatz calculation proves existence of $f_\mu$ and the asserted normalization. For any other solution, density of compact smooth functions in global $W^{1,r}$ gives $\partial\eta=\mathcal B\bar\partial\eta$; applying the inverse in [F1] and then $\mathcal C$ recovers the same integral equation, since its holomorphic residual vanishes at infinity. It therefore gives the same $\eta$. When $k=0$, $\alpha=0$, so $\eta=0$ and $f_\mu=1$. [F1, F3, step 2.1, step 3.1, algebra]

5.1 Write $M=1+\eta$ from step 4.1. Its equation is $\bar\partial M=\nu\overline{\partial M}+\alpha\overline M$, so $|\bar\partial M|\le\kappa|\partial M|+|\alpha||M|$. Step 2.1 gives $M=e^a$, where $a=\mathcal Ch$ for data $h$ supported in $\overline D_1$ with $\|h\|_r\le C_{\kappa,r}\|\alpha\|_r\le C_{\kappa,r}|k|$. Thus $M$ never vanishes and $\|a\|_\infty+\|a\|_{W^{1,r}}\le C_{\kappa,r}|k|$. The bounds $|e^a-1|\le e^{\|a\|_\infty}|a|$ and $|\nabla e^a|\le e^{\|a\|_\infty}|\nabla a|$ prove the quantitative bound on $M-1$. The same Cauchy integral gives $|a(z)|\le C_{\kappa,r}|k|/|z|$ for $|z|>2$. [F1, step 2.1, step 4.1, algebra]

6.1 If $k\ne0$, set $\Phi=z+a/(ik)$. Then $f=e^{ik\Phi}$, $\Phi=z+O(1/z)$ and the asserted uniform deformation estimates follow from step 5.1. Since the exponential has no zeros, the chain rule in the Beltrami equation for $f$ gives $|\bar\partial\Phi|\le\kappa|\partial\Phi|$, with $\bar\partial\Phi=0$ outside $\overline D_1$. Define its complex coefficient by $\bar\partial\Phi/\partial\Phi$, using zero where both vanish, and take the principal homeomorphic solution $\Psi$ for that coefficient from [F2]. Step 1.1 gives $\Phi=H\circ\Psi$ with $H$ entire holomorphic. Both maps have the principal expansion, so $H(w)-w\to0$ at infinity. Liouville in [F4] gives $H(w)=w$, hence $\Phi=\Psi$ is a principal quasiconformal homeomorphism. Multiplication and composition with the exponential on $D_S$ now give the stated solution $W^{1,r}$ bound, while for $|k|=1$ the last clause of [F2] gives the inverse-gradient estimate. This completes all claims. [F1, F2, F4, step 1.1, step 5.1, algebra] ∎
