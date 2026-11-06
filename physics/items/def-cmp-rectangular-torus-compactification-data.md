---
id: def-cmp-rectangular-torus-compactification-data
kind: definition
title: Rectangular flat-torus string compactification data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
physical_scope: "Source-free, unwarped product compactifications with a rectangular flat internal torus. The scalar spectrum is the two-derivative minimally coupled Kaluza-Klein spectrum; the string momentum and winding sector is the kinematic finite product of the supplied free-circle data. No full interacting CFT, nonrectangular Narain, or general T-duality claim is made."
deps:
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - def-compact-free-string-circle-spectrum
  - def-countable-choice
  - prop-flat-torus-model-geometry
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  def-compact-free-string-circle-spectrum: formulation-prerequisite
  def-countable-choice: mathematical-premise
  prop-flat-torus-model-geometry: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: https://arxiv.org/pdf/2106.08343v2
      locator: "§4, PDF pp. 25–29: closed strings on a torus, dimensionless coordinates of period 2π, constant target metric, momentum and winding zero modes, and mass-shell and level-matching formulas. The source uses ℏ=1 and α′=2, so its radius conventions are not silently identified with R_i."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§8.1, PDF pp. 55–59: compact boson radius, momentum and winding sectors, oscillator contributions, and torus partition function. In the displayed convention p_L=m/(2r)+nr and p_R=m/(2r)−nr."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Countable Choice. Let $n\ge1$, let $R_i\in(0,\infty)$ be finite radii with units of length, and let $\theta^i\sim\theta^i+2\pi$ be dimensionless angular coordinates. Put $S^1_{R_i}:=\mathbb R/(2\pi R_i\mathbb Z)$, represented by the physical coordinate $y^i=R_i\theta^i$, and define the rectangular torus $T^n_R:=\prod_{i=1}^n S^1_{R_i}$ with internal line element $ds_n^2=\sum_{i=1}^n R_i^2(d\theta^i)^2$. The internal metric is constant, diagonal, flat, and Riemannian. The external space is a Lorentzian $d$-manifold $(M_d,g_{\mu\nu})$ with signature $(-,+,\ldots,+)$, and the product background metric is $ds_{d+n}^2=g_{\mu\nu}(x)dx^\mu dx^\nu+ds_n^2$, with no warp factor or moduli-dependent Weyl rescaling. The dilaton is a constant $\Phi_0$, the internal NS two-form $B_2$ vanishes, and background field strengths and localized sources vanish.

For the minimally coupled scalar sector, define $m_0^2$ as the external mass-squared parameter in the separated equation $(\Box_d+\Delta_{T^n_R}-m_0^2)\Phi=0$, where $\Box_d:=g^{\mu\nu}\nabla_\mu\nabla_\nu$ and $\Delta_{T^n_R}:=\operatorname{div}\operatorname{grad}$ is the nonpositive-sign Laplace–Beltrami operator. Use natural units $c=\hbar=1$, so $R_i$ has dimension inverse mass and $m_0$ has dimension mass. The coordinate characters $\chi_{\mathbf n}(\theta)=e^{i\sum_i n_i\theta^i}$, $\mathbf n=(n_1,\ldots,n_n)\in\mathbb Z^n$, form the Fourier modes of this compact internal space. Their two-derivative Kaluza–Klein masses are $m_{\mathbf n}^2=m_0^2+\sum_i n_i^2/R_i^2$.

For the kinematic free closed-string product sector, use the single-circle data on each factor: for $X^i\simeq X^i+2\pi R_i$, momentum $n_i\in\mathbb Z$ and winding $w_i\in\mathbb Z$ give $p_{L,i}=n_i/R_i+w_iR_i/\alpha'$ and $p_{R,i}=n_i/R_i-w_iR_i/\alpha'$, with $\alpha'>0$ of dimension length squared. Let $\mathcal I_i$ be the single-circle orthonormal basis-label set from that data, including $(n_i,w_i)$ and its finite-support left and right oscillator occupations. Define the product Hilbert space to be $\mathscr H_{\mathbf R}:=\ell^2(\prod_{i=1}^n\mathcal I_i,\mathbb C)$ with its coordinate orthonormal basis. For a tuple of labels, define $h_i:=\alpha'p_{L,i}^2/4+N_{L,i}$ and $\bar h_i:=\alpha'p_{R,i}^2/4+N_{R,i}$ as in the single-circle data, and define the total product weights by $h:=\sum_{i=1}^n h_i$ and $\bar h:=\sum_{i=1}^n\bar h_i$. Thus the product convention means a finite product of independent circle basis sectors with additive left and right weight labels. It supplies no further OPE, sewing, modular-invariance, or interacting-string data. This product statement does not extend to off-diagonal metric or $B$-field moduli, the general Narain $O(n,n;\mathbb Z)$ action, or arbitrary T-duality transformations.

## Definition references

[[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]

[[def-compact-free-string-circle-spectrum]]

[[def-countable-choice]]

[[prop-flat-torus-model-geometry]]

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

## Facts & Assumptions

**Given:** The direct product metric and scalar wave equation in the Definition, radii $R_i>0$, and the Axiom of Countable Choice.

[F1] [[prop-flat-torus-model-geometry]]: the quotient $\mathbb R^n/\mathbb Z^n$ with its constant Euclidean metric is a smooth, connected, boundaryless flat torus; the quotient map is a local isometry. Its statement assumes Countable Choice.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: assuming Countable Choice, the coordinate characters $e_k(x)=e^{2\pi i k\cdot x}$, $k\in\mathbb Z^n$, form a complete orthonormal basis of $L^2(\mathbb T^n)$ for normalized Haar measure, where $\mathbb T^n=\mathbb R^n/\mathbb Z^n$.

[F3] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]] (current carrier): fix $D=d+n$, a smooth Lorentzian external $d$-manifold $M_d$, and a smooth compact boundaryless Riemannian internal $n$-manifold $(Y_n,\hat g)$. The current unwarped product ansatz is $ds_D^2=g_{\mu\nu}(x)dx^\mu dx^\nu+h_{mn}(y)dy^m dy^n$. The carrier also defines a warped Einstein-frame ansatz and requires each reduction to declare periods, normalizations, frame, dilaton, moduli, sources, boundary conditions, and retained orders. It explicitly says these are ansatz data, not consequences of compactness or harmonicity; a harmonic-mode ansatz is not a consistency theorem. The relevant current hypotheses are smooth nondegenerate product metrics and a positive finite-volume Riemannian internal metric. Its current Step-1 row remains escalated and hash-stale: the recorded conventions-readiness gap is now closed, but its owner has not refreshed the row. The exact unwarped product clause consumed here is present.

[F4] [[def-compact-free-string-circle-spectrum]] (current carrier and current batch-59 page placement; its current Step-1 record is ready): for a free closed-string coordinate $X^1\sim X^1+2\pi R$ on a flat Lorentzian cylinder, $R>0$, integer momentum $n$ and winding $w$ give $p_L=n/R+wR/\alpha'$ and $p_R=n/R-wR/\alpha'$. For left/right oscillator grades $N,\bar N\in\mathbb Z_{\ge0}$, the weights are $h=\alpha'p_L^2/4+N$ and $\bar h=\alpha'p_R^2/4+\bar N$, with level matching $h-\bar h=nw+N-\bar N=0$ when other sectors are included consistently. Its hypotheses exclude $B$ field, orbifold, interaction, defect, and backreaction and require additive other sectors. The current carrier contains a complete zero-mode normalization and level-matching verification.

[A1] [[def-countable-choice]]: for every sequence $(X_j)_{j\in\mathbb N}$ of nonempty sets, there is a function $f$ with $f(j)\in X_j$ for every $j$. This is the exact Countable Choice assumption used by [F1] and [F2]; no full Axiom of Choice is used here.

[A2] The scalar field is a smooth function on $M_d\times T^n_R$ satisfying the minimally coupled product equation $(\Box_d+\Delta_{T^n_R}-m_0^2)\Phi=0$. This specifies the scalar sector whose Kaluza–Klein masses are being computed; it is not a claim about every ten-dimensional field or a string-scale correction.

[A3] The exact free-string datum here is the finite product Hilbert space $\mathscr H_{\mathbf R}=\ell^2(\prod_i\mathcal I_i)$ of the single-circle basis-label sets, with total weights $h=\sum_i h_i$ and $\bar h=\sum_i\bar h_i$. This is the kinematic product model for a diagonal internal metric and vanishing $B_2$; it is not a definition or proof of a full interacting worldsheet CFT.

## Proof

**Given:** [F1]–[F4], [A1]–[A2], the stated radii and coordinate periods, and the displayed product metric.

1.1 The map $[\theta]\mapsto[\theta/(2\pi)]$ identifies $T^n_R$ as a smooth manifold with $\mathbb R^n/\mathbb Z^n$. In angular coordinates its metric matrix is $g_{ij}=R_i^2\delta_{ij}$ and $\sqrt{\det g}=\prod_iR_i$ is constant, so the coordinate formula $\Delta f=(\sqrt{\det g})^{-1}\partial_i(\sqrt{\det g}\,g^{ij}\partial_j f)$ gives $\Delta_{T^n_R}=\sum_iR_i^{-2}\partial_{\theta^i}^2$. The coordinate quotient is compact: every class has a representative in $[0,1]^n$, and the quotient map restricted to this compact cube is continuous and surjective. The constant rescaling of the flat quotient metric preserves this topology and zero curvature. This is the unwarped product case of [F3]. [F1, F3, given, algebra]

1.2 Under $x^i=\theta^i/(2\pi)$, $\chi_{\mathbf n}(\theta)=e^{2\pi i\mathbf n\cdot x}$. By [F2] these characters are a complete orthonormal basis, and direct differentiation gives $-\Delta_{T^n_R}\chi_{\mathbf n}=\left(\sum_i n_i^2/R_i^2\right)\chi_{\mathbf n}$. Thus the integer labels give the complete scalar internal spectrum, with no missing non-Fourier modes. [F2, A1, algebra]

2.1 For each $\mathbf n$, define $\phi_{\mathbf n}(x)=\int_{T^n_R}\Phi(x,\theta)\overline{\chi_{\mathbf n}(\theta)}\,d\mu(\theta)$ using normalized Haar measure. Multiply [A2] by $\overline{\chi_{\mathbf n}}$ and integrate over the compact torus. Smoothness permits differentiation under this integral, and periodicity eliminates boundary terms; integration by parts moves $\Delta_{T^n_R}$ onto $\chi_{\mathbf n}$. By step 1.2, the resulting coefficient equation is $(\Box_d-m_0^2-\sum_i n_i^2/R_i^2)\phi_{\mathbf n}=0$. Completeness in [F2] ensures that these Fourier coefficients exhaust the scalar modes. With the stated mostly-plus convention this is the Klein–Gordon equation of mass squared $m_0^2+\sum_i n_i^2/R_i^2$. [A2, F2, step 1.2, algebra]

3.1 For each $i$, [F4] supplies the single-circle basis labels $(n_i,w_i)$ and finite-support oscillator occupations, with the corresponding left/right weights. By [A3], a product basis vector is a tuple of those labels in $\prod_i\mathcal I_i$, and its total weights are the explicit sums $h=\sum_i h_i$ and $\bar h=\sum_i\bar h_i$. Hence the product zero modes are labelled by $(\mathbf n,\mathbf w)\in\mathbb Z^n\times\mathbb Z^n$ and the total left/right weights add componentwise. This is the rectangular kinematic product-circle sector only; no full CFT, off-diagonal Narain lattice, or general $O(n,n;\mathbb Z)$ statement follows. [A3, F4, given] ∎

## Remarks

Arvanitakis–Hohm–Hull–Lekeu use dimensionless coordinates of period $2\pi$ and the convention $\alpha'=2$ in §4; Ginsparg's compact-boson convention is $p_L=m/(2r)+nr$, $p_R=m/(2r)-nr$. These are compatible with the current single-circle formula after the convention change $R=2r$, $\alpha'=2$ and the momentum/winding label identification. The cited treatments support the circle data and torus scope, not a locally proved general Narain duality or a consistent truncation theorem.

The scalar Kaluza–Klein argument is complete conditionally on its displayed equation and mathematical suppliers. The free-circle carrier and its batch-59 page placement are current and its Step-1 record is ready. The exact unwarped product clause in the KK-ansatz carrier matches [F3], and no frame-conversion calculation is used. However, the current KK-ansatz Step-1 row remains escalated and is hash-stale: its recorded conventions prerequisite was missing then, while the conventions supplier now has a ready record. This batch does not overwrite that escalation; the item remains escalated until its owner refreshes the stale readiness record.
