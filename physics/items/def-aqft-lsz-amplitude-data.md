---
id: def-aqft-lsz-amplitude-data
kind: definition
title: Regulated perturbative LSZ amplitude data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-aqft-local-operator-and-dimension]
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders, §2"
      url: "https://arxiv.org/pdf/1811.09413"
    - title: "Edward Witten, Notes On Supermanifolds And Integration, §3.1, equation (3.6)"
      url: "https://arxiv.org/pdf/1209.2199"
verification:
  precheck: n/a
---
## Definition

Fix the field data and Minkowski convention from the earlier finite-jet definition, an integer truncation order $N\geq0$, and the truncated coefficient ring $R_N=\mathbb C[\epsilon]/(\epsilon^{N+1})$. For each regulator label $\rho$, let $X_\rho=X_\rho^{\bar 0}\oplus X_\rho^{\bar 1}$ be a finite-dimensional $\mathbb Z/2$-graded complex vector space of field-mode components, with $n_0=\dim_{\mathbb C}X_\rho^{\bar 0}$ and $n_1=\dim_{\mathbb C}X_\rho^{\bar 1}$. Choose even coordinates $q^1,\ldots,q^{n_0}$ and a basis of $X_\rho^{\bar 1}$ whose dual odd coordinate generators are $\xi_1,\ldots,\xi_{n_1}\in(X_\rho^{\bar 1})^*$. Choose a real integration contour $\Gamma_\rho$ in the underlying real space of $X_\rho^{\bar 0}$ and a specified complex-linear functional $\ell_\rho$ on a specified complex algebra $\mathcal C_\rho$ of coefficient functions on $\Gamma_\rho$. The domain $\mathcal C_\rho$ must contain every coefficient function to which $\ell_\rho$ is applied. In an actual integral, $\ell_\rho(f)=\int_{\Gamma_\rho}f\,d\nu_\rho$ for a stated measure $\nu_\rho$ and the coefficients must be integrable; in a formal perturbative integral, $\ell_\rho$ is the stated coefficientwise linear functional and its domain is part of the datum.

The odd-coordinate algebra is the finite exterior algebra $\Lambda(\xi_1,\ldots,\xi_{n_1})$, where $\xi_a\xi_b=-\xi_b\xi_a$ and $\xi_a^2=0$. Put $\mathcal H_\rho=\mathcal C_\rho\otimes\Lambda(\xi_1,\ldots,\xi_{n_1})$ with graded tensor-product multiplication. For an ordered subset $I=\{i_1<\cdots<i_k\}$, write $\xi_I=\xi_{i_1}\cdots\xi_{i_k}$, and set $\xi_\varnothing=1$. Every field-coordinate expression is a finite sum $H=\sum_I f_I\xi_I$. Define the normalized odd-coordinate integration functional by
$$
\mathcal B_\rho(H)=f_{\{1,\ldots,n_1\}},\qquad \mathcal B_\rho(\xi_1\cdots\xi_{n_1})=1.
$$
If $n_1=0$, $\mathcal B_\rho$ is the identity. The full integration functional is $\mathcal I_\rho=\ell_\rho\circ\mathcal B_\rho$, extended coefficientwise to source variables and $R_N$. Thus “integration over odd coordinates” means coefficient extraction in the chosen exterior algebra, not an ordinary integral over odd numbers.

Introduce commuting formal source variables $j_1,\ldots,j_{n_0}$ dual to the even coordinates and independent anticommuting formal source generators $\eta_1,\ldots,\eta_{n_1}$ dual to the ordered odd coordinates. Their algebra is $\mathscr J_\rho=\mathbb C[\![j_1,\ldots,j_{n_0}]\!]\otimes\Lambda(\eta_1,\ldots,\eta_{n_1})$. In these bases the source pairing is
$$
\langle J,\varphi\rangle=\sum_{a=1}^{n_0}j_aq^a+\sum_{b=1}^{n_1}\eta_b\xi_b,
$$
with each odd source placed to the left of its odd field coordinate, so the pairing is even. In particular, $J$ is a graded formal source, not an ordinary element of the complex dual $X_\rho^*$.

A regulated perturbative generating datum also specifies an even action $S_{\rho,\epsilon}\in\mathcal H_\rho\otimes R_N$ and the generating functional
$$
Z_{\rho,\epsilon}[J]=\mathcal I_\rho\!\left(\exp\!\bigl(iS_{\rho,\epsilon}(\varphi)+i\langle J,\varphi\rangle\bigr)\right),\qquad Z_{\rho,\epsilon}[0]\text{ is a unit}.
$$
The exponential is interpreted in the chosen convergent or formal algebra: the ordinary exponential is applied to the commuting body and the nilpotent odd and $\epsilon$ parts are expanded finitely. Every coefficient of the generating integrand and of its formal source derivatives must belong to the domain of $\mathcal I_\rho$. “A unit” means that the $\epsilon^0$ coefficient of $Z_{\rho,\epsilon}[0]$ is nonzero; hence the normalized functional $\widehat Z_{\rho,\epsilon}[J]=Z_{\rho,\epsilon}[J]/Z_{\rho,\epsilon}[0]$ is defined in $\mathscr J_\rho\otimes R_N$ and has constant term $1$ at $J=0$.

For an ordered list of source components, define the connected $n$-point kernel as $i^{-n}$ times the corresponding ordered source derivatives of $\log\widehat Z_{\rho,\epsilon}[J]$ at $J=0$. Even-source derivatives are ordinary derivatives. Odd-source derivatives are left graded derivatives, characterized by $\partial^L_{\eta_a}\eta_b=\delta_{ab}$ and
$$
\partial^L_{\eta_a}(UV)=(\partial^L_{\eta_a}U)V+(-1)^{|U|}U(\partial^L_{\eta_a}V)
$$
for homogeneous $U,V$. The logarithm is the formal logarithm with zero constant term. The regulator datum supplies the reconstruction of the component kernels as spacetime kernels and a Fourier-transform convention. The Fourier transform is $\widetilde f(p)=\int e^{ip\cdot x}f(x)\,d^4x$, interpreted in the specified function or distribution space.

An admissible field-coordinate change is a local, parity-preserving formal map $F_{\rho,\epsilon}=\operatorname{id}+\sum_{k=1}^{N}\epsilon^kF_{\rho,k}$ on these graded coordinates with an inverse modulo $\epsilon^{N+1}$. Each coefficient of each $F_{\rho,k}$ is polynomial in the odd coordinates and holomorphic in the even coordinates on a specified open neighborhood of the integration contour. Substitution into nilpotent even displacements uses finite Taylor expansions; the coordinate algebra and integration domain must contain every coefficient used in these substitutions and derivatives. Thus $DF$ is defined coefficientwise, with left odd derivatives and the stated ordering. If the coordinates come from spacetime fields, local means that each output field at $x$ depends on a finite jet of the input fields at $x$. Its regulated Jacobian factor $\mathcal J_{F,\rho}$ is a multiplier in the field-coordinate algebra specified by the exact graded change-of-variables identity
$$
\mathcal I_\rho(h(\varphi))=\mathcal I_\rho\!\left(h(F_{\rho,\epsilon}(\psi))\,\mathcal J_{F,\rho}(\psi)\right)
$$
for every admissible integrand $h$, with the functional extended coefficientwise over $\mathscr J_\rho\otimes R_N$. No assertion that $\mathcal J_{F,\rho}=1$ is part of the definition. In the coordinate-volume case the even functional integrates $dq^1\wedge\cdots\wedge dq^{n_0}$ over an oriented real $n_0$-dimensional contour; its contour and boundary data must satisfy this identity with the Berezinian multiplier. This is additional integration data, not an assertion for arbitrary $\nu_\rho$ or $\ell_\rho$. The Berezinian is defined algebraically: if the graded derivative has block form $DF=\begin{pmatrix}A&B\\C&D\end{pmatrix}$ with $D$ invertible, then $\operatorname{Ber}(DF)=\det(A-BD^{-1}C)(\det D)^{-1}$. Here $DF\equiv I$ modulo $\epsilon$, so both diagonal blocks are invertible over the truncated algebra; empty determinants are one. For a general even functional the exact identity, including any measure-density factor, remains the requirement. In the transformed coordinates the source is $\langle J,F_{\rho,\epsilon}(\psi)\rangle$, so the field insertion remains the same named original coordinate.

An LSZ amplitude datum additionally specifies a nonempty directed preordered set $(D,\preceq)$ of regulator labels: $\preceq$ is reflexive and transitive, and every pair of labels has a common upper bound. The regulator limit means the net limit along this preorder. For each $n$, specify a common complex vector space $E_n$ of momentum-space kernels for all selected ordered lists of field components, with a Hausdorff vector-space topology $\tau_n$, and complex-linear reconstruction maps from the finite regulated component arrays into $E_n$. The kernel domains, function or distribution spaces, topology, and reconstruction maps must be specified in each instance of the datum; the maps incorporate the declared Fourier convention and, when used, extraction of the overall momentum-conservation delta function. Extend them coefficientwise over $R_N$ and denote their outputs by $G_{\rho,n}=\sum_{k=0}^N\epsilon^kG_{\rho,n}^{(k)}\in E_n\otimes R_N$. The assertion $G_n=\lim_\rho G_{\rho,n}$ means that for every $k\in\{0,\ldots,N\}$ and every $\tau_n$-neighborhood $V$ of zero there is $\rho_0\in D$ such that $G_{\rho,n}^{(k)}-G_n^{(k)}\in V$ whenever $\rho_0\preceq\rho$. Hausdorffness makes this limit unique. For example, weak distribution convergence must name a test-function space and means convergence of the pairing with every test function. Both descriptions in an amplitude comparison use the same $D$, spaces, topologies, and reconstruction maps. Existence is required only in these supplied spaces and along this supplied scheme; independence of other regulator schemes is not asserted.

For each external one-particle channel $a$ (with a fixed polarization component when the field has spin), the datum specifies a mass $m_a>0$ and nonzero simple-pole residue $Z_a\in\mathbb C^\times$ at $s_a=m_a^2$, where $s_a=-\eta^{\mu\nu}p_{a,\mu}p_{a,\nu}$. A stable external channel means precisely that this isolated pole exists with nonzero residue and zero width. Choose a nonzero scalar $z_a$ with $z_a^2=Z_a$ as part of the datum; throughout, $Z_a^{1/2}$ means this chosen $z_a$ and $Z_a^{-1/2}$ means $z_a^{-1}$. These choices are fixed for amplitude comparisons; no canonical complex square-root branch is assumed.

For each selected field-parity sector, supply equally long finite ordered lists of interpolating-field components $\varphi_A$ and channels $a$, and an invertible complex matrix $U=(U_{Aa})$. Define channel-coordinate insertions $\chi_a=\sum_A(U^{-1})_{aA}\varphi_A$ and their ordered connected kernels by multilinearity:
$$
G_{a_1\ldots a_n}=\sum_{A_1,\ldots,A_n}\left(\prod_{j=1}^n(U^{-1})_{a_j A_j}\right)G_{A_1\ldots A_n}.
$$
Require the following external-leg pole factorization for the original component kernels:
$$
G_{A_1\ldots A_n}=\sum_{b_1,\ldots,b_n}\left(\prod_{j=1}^n\frac{U_{A_j b_j}z_{b_j}}{s_j-m_{b_j}^2}\right)\mathcal A_{b_1\ldots b_n}+\text{terms missing at least one external pole}.
$$
The sums run over the declared channels in the corresponding parity sectors, and every remainder must have zero joint residue at every declared external-pole tuple. This equation defines the overlap meaning of $U$: the external-leg factor of $\varphi_A$ for channel $a$ is $U_{Aa}z_a$. Multiplying by $U^{-1}$ on each leg selects its channel factor, also when channel masses coincide. Below $G_n$ abbreviates the channel-coordinate kernel $G_{a_1\ldots a_n}$. Require its pole factorization
$$
G_n(p_1,\ldots,p_n)=\left(\prod_{j=1}^n\frac{Z_{a_j}^{1/2}}{s_j-m_{a_j}^2}\right)\mathcal A_n(p_1,\ldots,p_n)+\text{terms missing at least one external pole}.
$$
For each external-pole tuple, the datum also specifies an approach domain $B_n\subseteq(\mathbb C\setminus\{0\})^n$ with $0$ in its closure, a Hausdorff topological complex vector space $T_n$ for the remaining kinematic variables, and a complex-linear map $H_n:E_n\to\{h:B_n\to T_n\}$. This map supplies the off-shell kernel at $\delta_j=s_j-m_{a_j}^2$, including any required continuation or distributional slicing; its existence is additional data, not an automatic restriction of a distribution. In the following formula the joint limit means the limit of $(\prod_j\delta_j)H_n(G_n)(\delta)$ in $T_n\otimes R_N$, coefficientwise, as $\delta\to0$ within $B_n$: for every coefficient and every neighborhood of zero in $T_n$, the difference from its limit lies in that neighborhood for all $\delta\in B_n$ sufficiently close to zero. Require that limit to exist, and interpret every zero-joint-residue remainder above in this same sense. These approach domains, maps and topologies are fixed in amplitude comparisons. First take the regulator limit in $E_n\otimes R_N$, then this joint pole limit; no exchange of limits is assumed. The normalized LSZ amplitude is the joint residue
$$
\mathcal A_n=\left(\prod_{j=1}^n Z_{a_j}^{-1/2}\right)\lim_{s_j\to m_{a_j}^2}\left(\prod_{j=1}^n(s_j-m_{a_j}^2)\right)G_n,
$$
with the overall momentum-conservation delta function removed and the same ordered graded-source convention as above. The joint limits, Fourier transforms, pole factorization and invertible overlap data must all exist as part of the supplied LSZ datum. This definition supplies only the regulator and pole data needed for a conditional amplitude statement. It does not assert that a continuum limit, stable particles, or LSZ poles exist for a given quantum field theory.

## Definition references

[[def-aqft-local-operator-and-dimension|Finite-jet local operators and engineering dimension]]

[Criado–Pérez-Victoria, §2, equations (2.2)–(2.8)](https://arxiv.org/pdf/1811.09413)

[Witten, §3.1, equation (3.6): algebraic Berezinian convention](https://arxiv.org/pdf/1209.2199)
