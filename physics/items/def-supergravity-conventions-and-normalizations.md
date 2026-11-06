---
id: def-supergravity-conventions-and-normalizations
kind: definition
title: Supergravity Conventions And Normalizations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-string-tension-alpha-prime
  - def-string-coupling-genus-weight
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-string-coupling-genus-weight: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Declared unit, field, curvature, frame, gravitational-coupling, and spinor conventions for the supergravity items in the string-theory library. These are adopted conventions, not universal physical laws, existence claims, or consequences of mathematics."
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§1.1, §3.4–§3.6, §6.1 and §6.3, and §8.2 Remark 8.26; conventions, spinor types, NS–NS normalization, frames, and gravitational coupling."
    - title: "Chih-Kai Chang, Christian Ferko, and Savdeep Sethi, Holography and Irrelevant Operators, Phys. Rev. D 107, 126021 (2023)"
      url: "https://arxiv.org/pdf/2302.03041v2"
      locator: "§2.1, equations (2.1)–(2.2), printed p. 6 (PDF p. 7); the string-frame NS–NS normalization and κ₁₀² = ½(2π)⁷α′⁴e²Φ₀ with gₛ = e^Φ₀."
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions, arXiv:1104.2051v2"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§2.1–§2.2, printed pp. 8–11; 11D and 10D supersymmetry parameters and 10D IIA/IIB chirality."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, printed pp. 28–29, equations (3.7)–(3.13); NS–NS field content, p-form norm, frame relation, and Weyl formula."
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§4.1.1, printed p. 145, PDF p. 152; M_pl^2 = ħc/(8πG) and the Einstein–Hilbert coefficient M_pl^2/2."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let a spacetime of dimension $n$ be a smooth $n$-manifold $M$ equipped with an orientation and a smooth Lorentzian metric $G$ of signature $(-+\cdots+)$. In a local coordinate chart $x^M$, $M=0,\ldots,n-1$, $G_{MN}$ is a symmetric nondegenerate covariant tensor and $G^{MN}$ is its inverse. In ten dimensions, $G^{(s)}$ denotes the string-frame metric. The Levi-Civita connection is the unique torsion-free connection satisfying $\nabla G=0$; in coordinates its coefficients are $\Gamma^P{}_{MN}=\frac12G^{PQ}(\partial_MG_{NQ}+\partial_NG_{MQ}-\partial_QG_{MN})$. Fix the curvature convention
$$
R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ},\qquad R_{QN}=R^P{}_{QPN},\qquad R=G^{QN}R_{QN}.
$$

A smooth $p$-form $F_p$ is an alternating covariant tensor of rank $p$. Its squared norm in this convention is the signed Lorentzian contraction $|F_p|_G^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$; it need not be nonnegative. For a scalar $f$, $\Box_G f:=\nabla^M\nabla_M f=G^{MN}\nabla_M\nabla_N f$. For a local smooth two-form potential $B_2$, set $H_3=dB_2$, with $H_{MNP}=3\partial_{[M}B_{NP]}$; here $d$ is the exterior derivative, so $dH_3=d^2B_2=0$ wherever this potential is defined.

On an oriented Lorentzian manifold let $\mathrm{vol}_G$ be the metric volume form with the chosen orientation, and define the Hodge star by $\alpha\wedge *_G\beta=\langle\alpha,\beta\rangle_G\,\mathrm{vol}_G$ for forms of the same degree, where $\langle\alpha,\beta\rangle_G=(1/p!)\alpha_{M_1\ldots M_p}\beta^{M_1\ldots M_p}$. In dimension $n$ and signature with one negative direction, this convention gives $*_G *_G\alpha=(-1)^{p(n-p)+1}\alpha$ for each $p$-form $\alpha$.

Use natural units $\hbar=c=1$, so energy has dimension length$^{-1}$. Coordinates have length dimension and metric components are dimensionless. The exact upstream definition of $\alpha'>0$ has dimension length$^2$, and $\ell_s=\sqrt{\alpha'}$. For a constant reference or asymptotic dilaton $\Phi_\infty$, write $g_{\mathrm{str}}:=e^{\Phi_\infty}>0$ for the dimensionless string coupling; this is the scalar called $g_s$ by the upstream coupling definition. It is distinct by tensor type from the string-frame metric $G^{(s)}$. A varying dilaton $\Phi$ is a real dimensionless scalar field and does not define a constant coupling by itself. Set
$$
2\kappa_0^2=(2\pi)^7\alpha'^4,\qquad 2\kappa_{10,\mathrm{phys}}^2=g_{\mathrm{str}}^2\,2\kappa_0^2
$$
when the constant asymptotic dilaton has been absorbed into the physical ten-dimensional gravitational coupling. Thus $\kappa_0^2$ and $\kappa_{10,\mathrm{phys}}^2$ both have dimension length$^8$, but they are not the same convention. The string and Einstein metrics are related on the same ten-manifold by $G^{(E)}=e^{-\Phi/2}G^{(s)}$. In four dimensions define $G_N$ as Newton's constant, $\kappa_4^2:=8\pi G_N$, and the reduced Planck mass by $M_P^{-2}:=\kappa_4^2$; the Einstein–Hilbert term is then $(M_P^2/2)\int d^4x\sqrt{-g}\,R$. Here $[G_N]=\mathrm{length}^2$ and $[M_P]=\mathrm{length}^{-1}$.

For spinor counts, let $V=\mathbb R^n$ with $\eta=\operatorname{diag}(-1,1,\ldots,1)$, and let $\mathrm{Cl}(V,\eta)$ be the unital real associative algebra generated linearly by $V$ with $uv+vu=2\eta(u,v)1$. Write $\operatorname{SO}^+(n-1,1)$ for the identity component of its determinant-one isometry group. Define $\operatorname{Spin}^+(n-1,1)$ as the subgroup of even products of vectors $v$ with $\eta(v,v)=\pm1$ whose conjugation action $w\mapsto u w u^{-1}$ on $V$ lies in $\operatorname{SO}^+(n-1,1)$. Supply a time orientation and a spin structure: a principal $\operatorname{Spin}^+(n-1,1)$-bundle $P\to M$ with an equivariant double covering of the oriented, time-oriented orthonormal-frame bundle. No existence of such a lift is asserted. Fix the following ten-dimensional Clifford module, rather than an arbitrary multiple of it. On $S=(\mathbb C^2)^{\otimes5}$ with its ordered tensor-product basis put
$$
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad a_j=Z^{\otimes(j-1)}\otimes X\otimes I_2^{\otimes(5-j)},\quad b_j=Z^{\otimes(j-1)}\otimes Y\otimes I_2^{\otimes(5-j)}\quad(1\le j\le5).
$$
Set $\Gamma_0=i b_5$, $\Gamma_{2j-1}=a_j$ for $1\le j\le5$, and $\Gamma_{2j}=b_j$ for $1\le j\le4$. Clifford multiplication is the real-linear map $v\mapsto\sum_{A=0}^9v^A\Gamma_A$, extended multiplicatively to the real algebra generated by $e_Ae_B+e_Be_A=2\eta_{AB}1$. Its restriction to the spin group defines the representation used in the associated bundle $P\times_{\operatorname{Spin}^+(9,1)}S$. Define the antilinear map $J:S\to S$ by $Jv=b_1b_2b_3b_4\overline v$, where conjugation is in the displayed basis. A Majorana spinor is a smooth section of the associated real subbundle with fiber $S_{\mathbb R}:=\{v:Jv=v\}$. Set $\Gamma_{11}:=\Gamma_0\cdots\Gamma_9$; a Majorana–Weyl spinor of chirality $\pm$ is a smooth section with fiber $S_{\mathbb R}^{\pm}:=\{v\in S_{\mathbb R}:\Gamma_{11}v=\pm v\}$. For eleven dimensions use the same $S,J$ and matrices $\Gamma_0,\ldots,\Gamma_9,\Gamma_{10}:=\varepsilon\Gamma_{11},\ \varepsilon\in\{+1,-1\}$, with a supplied sign $\varepsilon$, the corresponding spin-group restriction and associated-bundle construction.

These formulas give $\{\Gamma_A,\Gamma_B\}=2\eta_{AB}I$, $J^2=I$, and $J\Gamma_A=\Gamma_AJ$. Indeed, the ten matrices $a_j,b_j$ square to $I$ and pairwise anticommute; the $a_j$ are real and the $b_j$ imaginary. The product $b_1b_2b_3b_4$ is real, squares to $I$, commutes with all $a_j,b_5$, and anticommutes with $b_1,\ldots,b_4$, which proves the claims about $J$. Every $v\in S$ decomposes uniquely as $u+iw$ with $u,w\in S_{\mathbb R}$ by $u=(v+Jv)/2$, $w=(v-Jv)/(2i)$, so $\dim_{\mathbb R}S_{\mathbb R}=32$. Also $\Gamma_{11}^2=I$ and $\Gamma_{11}$ anticommutes with each of the first ten matrices. Since $\Gamma_0$ is invertible and preserves $S_{\mathbb R}$, it exchanges the two real chirality spaces, each therefore of dimension $16$. The eleven-dimensional extension has volume product $\Gamma_0\cdots\Gamma_{10}=\varepsilon I$ and real fiber dimension $32$.

The 11D Cremmer–Julia–Scherk (CJS) convention uses one such Majorana parameter; type IIA uses two ten-dimensional Majorana–Weyl parameters of opposite chirality, type IIB two of the same chirality, and ten-dimensional $N=1$ heterotic/type-I one. Here $N$ counts independent copies of these parameter bundles. These are fiber component counts, not dimensions of spaces of sections or of solution spaces. The displayed signs, normalizations and parameter bundles are adopted conventions for the named low-energy frameworks. No claim of physical validity is inferred.

## Definition references

[[def-st-string-tension-alpha-prime]]

[[def-string-coupling-genus-weight]]

[Hamilton, §§1.1, 3.4–3.6, 6.1, 6.3 and 8.2](https://arxiv.org/pdf/1607.00327v3)

[Chang, Ferko, and Sethi, §2.1, equations (2.1)–(2.2)](https://arxiv.org/pdf/2302.03041v2)

[Taylor, §§2.1–2.2](https://arxiv.org/pdf/1104.2051v2)

[Sterckx, §3.2.1](https://arxiv.org/pdf/2410.19600v1)

[Tong, §4.1.1](https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf)

## Remarks

This item uses only the upstream definitions $\alpha'>0$, $\ell_s=\sqrt{\alpha'}$, and $g_{\mathrm{str}}=e^{\Phi_\infty}$ from the two named suppliers. It does not use the topology-weight conclusion $g_{\mathrm{str}}^{2g-2}$ or its Axiom-of-Choice proof as a physical premise. The notation $G^{(s)}$ and $g_{\mathrm{str}}$ separates the metric and scalar that several sources both denote by $g_s$.
