---
id: def-aqft-eft-scattering-channel
kind: definition
title: Gapped scalar EFT forward channel and matched coefficient data
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 1
deps:
  - def-aqft-scattering-amplitude-input
  - def-aqft-local-operator-and-dimension
dependency_roles:
  def-aqft-scattering-amplitude-input: formulation-prerequisite
  def-aqft-local-operator-and-dimension: formulation-prerequisite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
physical_scope: >-
  Conditional data interface for one massive identical-real-scalar forward
  channel and one fixed local EFT representative. It constructs no Hilbert
  space, S-matrix, continuum measure, or empirical result, and it gives no
  universal sign for off-shell operator coefficients.
sources:
  references:
    - title: Allan Adams et al., Causality, Analyticity and an IR Obstruction to UV Completion
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: Section 4, PDF pp. 14–20, forward analyticity, mass-gap regulation, poles, cuts, and the optical-theorem sign.
    - title: Claudia de Rham et al., Positivity Bounds for Scalar Theories
      url: https://arxiv.org/pdf/1702.06134
      locator: Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3.
    - title: Ivano Basile et al., Lectures in Quantum Gravity
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: Full 303-page lecture-notes PDF; §§3.2.1–3.3.1, printed pp. 90–98.
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: Full 55-page review; §§2.2.1, 2.2.3–2.2.4, and the opening of §2.2.5, printed pp. 20–25.
---

## Definition

Use natural units $c=\hbar=1$ on four-dimensional Minkowski space $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$. Let $\phi\in C^\infty(M,\mathbb R)$ be a real, Grassmann-even (commuting) scalar field of engineering dimension one, with a stable one-particle state of pole mass $m>0$; here stable means an isolated real mass pole with zero decay width. Stability and the existence of this state are physical input data; no construction of a state is asserted. An effective field theory (EFT) here is the selected local low-energy representative organized in powers of its cutoff; its exact amplitude is separate supplied model data. For the finite-jet local-operator convention, use the complexification for the finite-jet algebra and impose the usual reality condition on $\phi$. Take one field species, maximum jet order $r=1$, polynomial degree at most $q=4$, weight $D=8$, trivial internal group, and the standard Lorentz tensor action with contractions formed using $\eta$. The real operator $\mathcal O_8=(\partial_\mu\phi\,\partial^\mu\phi)^2$ is then a local scalar of engineering dimension eight. Its coefficient in a chosen local representative is written

$$\mathcal L_{\mathrm{EFT}}=-\frac12\partial_\mu\phi\,\partial^\mu\phi-\frac12m^2\phi^2+\frac{C_8(\mu_*)}{\Lambda^4}\mathcal O_8+\cdots,$$

where $\Lambda>2m$ is the positive energy cutoff of the EFT description, $0<\mu_*<\Lambda$ is the chosen scale at which the coefficient and matching identity are specified, and $C_8(\mu_*)\in\mathbb R$ is dimensionless in the fixed coefficient convention and local representative. No basis-independence under field redefinitions, equations of motion, or integration by parts is asserted for $C_8$ itself.

The amplitude data consist of an identical-scalar $2\to2$ amplitude $\mathcal A(s,t,u)$ and real on-shell momenta $p_j$ with $p_j^2=-m^2$, $p_1+p_2=p_3+p_4$, and

$$s=-(p_1+p_2)^2,\qquad t=-(p_1-p_3)^2,\qquad u=-(p_1-p_4)^2,\qquad s+t+u=4m^2.$$

The forward slice is $A(s)=\mathcal A(s,0,4m^2-s)$ and assume $A(s)=A(4m^2-s)$ wherever both sides are defined. When the full $t$-dependent amplitude is supplied, use the partial-wave normalization

$$\mathcal A(s,t,u)=16\pi\sqrt{\frac{s}{s-4m^2}}\sum_{\ell=0}^{\infty}(2\ell+1)P_\ell\!\left(1+\frac{2t}{s-4m^2}\right)a_\ell(s),\qquad P_\ell(1)=1.$$

Here $\ell=0,1,2,\ldots$, $P_\ell$ is the Legendre polynomial, and $a_\ell(s)$ is the partial-wave coefficient. The formula is a normalization convention when a full amplitude is supplied; it does not assert convergence or unitarity by itself.

The $S$-matrix convention is $S=1+i(2\pi)^4\delta^4(p_{\mathrm{out}}-p_{\mathrm{in}})\mathcal A+\cdots$. The channel adopts the forward optical-theorem input $\operatorname{Im}A(s+i0)\ge0$ for $s\ge4m^2$ in this normalization. This sign is an assumption on the supplied amplitude data, not a deduction from the EFT truncation.

Put $\nu_0=2m^2$ and $v=s-2m^2$, so $u-2m^2=-v$. Let the specified finite list contain every isolated variable simple pole in the subthreshold interval, with real locations $p_j\in(0,4m^2)\setminus\{2m^2\}$ and real residues $r_j$. For the dimensionless amplitude convention above, $r_j$ has mass dimension two. Define the crossing-symmetric pole subtraction

$$P(s)=\sum_j\left(\frac{r_j}{s-p_j}+\frac{r_j}{4m^2-p_j-s}\right),\qquad B(v)=A(2m^2+v)-P(2m^2+v).$$

The exact amplitude data are required to be crossing even and real analytic, with $B(-v)=B(v)$, $B(\overline v)=\overline{B(v)}$, and $B$ holomorphic on

$$\Omega_{\nu_0}=\mathbb C\setminus\bigl(( -\infty,-\nu_0]\cup[\nu_0,\infty)\bigr).$$

There is no massless pole or cut at the forward point $t=0$. Require finite upper and lower cut-boundary values except at $\pm\nu_0$. Also require $B$ to extend continuously from each open half-plane onto every compact segment of either real cut bank avoiding $\pm\nu_0$. This is an extra admissibility assumption on the supplied data, not a consequence of finite pointwise boundary values or a claim about every quantum field theory. Require the uniform high-energy condition $B(w)=o(|w|^2)$ as $|w|\to\infty$ in the closed upper half-plane including upper cut-bank limits, and vanishing endpoint arcs for the cut integrals. For $\nu\ge\nu_0$, let $\rho(\nu)=\operatorname{Im}B(\nu+i0)$; require $\rho\ge0$, local Riemann integrability on every compact subinterval of $[\nu_0,\infty)$, and finite convergence of $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu$. For every real $|v|<\nu_0$, the upper- and lower-bank integrals of $[B(x)-B(0)]/[x^2(x-v)]$ are required to exist as finite improper Riemann limits. The positive gap $m>0$ and these analytic and spectral assumptions are IR and UV input conditions; they are not derived from a finite regulator.

Define the first nonconstant even forward coefficient by $c_1=B''(0)/2!$, of mass dimension $-4$. Exact matching at $\mu_*$ is a supplied datum of the form

$$c_1=\frac{4C_8(\mu_*)}{\Lambda^4}+\Delta_{\mathrm{match}},$$

where $\Delta_{\mathrm{match}}\in\mathbb R$ has mass dimension $-4$ and contains every other contribution to this exact $v^2$ coefficient, including other operators, loops, and matching or truncation effects. The identity is an assumption to be checked for a selected model, not a conclusion of this definition. Setting $\Delta_{\mathrm{match}}=0$ is an additional exact retained-order matching condition; power counting alone does not set it to zero.

## Definition references

[[def-aqft-scattering-amplitude-input]]

[[def-aqft-local-operator-and-dimension]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, § 4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§ 2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §§ 3.2.1–3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

[Burgess, *Introduction to Effective Field Theory*, §§ 2.2.1, 2.2.3–2.2.4, and opening § 2.2.5](https://arxiv.org/pdf/hep-th/0701053)

## Facts & Assumptions

**Given:** One external identical real scalar with the stated positive mass gap, a selected finite-jet operator representative, a forward amplitude satisfying the declared crossing and analytic data, and the supplied matching identity.

[F1] [[def-aqft-scattering-amplitude-input]]: an external spin-zero species is assigned a mass $m>0$ and elastic two-particle threshold $s=4m^2$; these are input data and do not construct a state or scattering matrix.

[F2] [[def-aqft-local-operator-and-dimension]]: finite-jet local operators have assigned engineering mass weight; in four dimensions a term $C\mathcal O_D/\Lambda^{D-4}$ has dimension four with dimensionless $C$.

[A1] The physical channel adopts the mostly-plus metric, one real Grassmann-even scalar of engineering dimension one, the fixed local operator $\mathcal O_8=(\partial_\mu\phi\,\partial^\mu\phi)^2$, the finite pole list and subtraction, continuous extension to compact cut-bank segments away from thresholds, and the stated analytic, spectral, and exact matching inputs. These are stipulated data, not conclusions about amplitude existence.

## Verification

1.1 The supplier assigns the same positive scalar mass and two-particle threshold used here. Since $s=4m^2$ corresponds to $v=s-2m^2=2m^2=\nu_0$ and $m>0$, the declared threshold is at a strictly positive distance from the forward point; crossing places its partner at $-\nu_0$. [given, A1, F1, algebra]

1.2 Each factor $\partial_\mu\phi$ has engineering dimension two, so $\mathcal O_8$ has dimension eight. It has four field factors, each differentiated once, and the contractions with $\eta$ make it a Lorentz scalar; the stipulated internal group is trivial. Thus it is an invariant member of the declared $r=1$, $q=4$, $D=8$ finite-jet data. The coefficient $C_8/\Lambda^4$ gives a dimension-four Lagrangian term, as required by [F2]. [given, A1, F2, algebra]

2.1 Under $s\mapsto4m^2-s$, the two denominators in each summand of $P(s)$ exchange places, so $P(4m^2-s)=P(s)$. Since the supplied forward amplitude obeys $A(4m^2-s)=A(s)$, subtracting $P$ preserves crossing and gives $B(-v)=B(v)$. This verifies consistency of the subtraction only; it does not establish that any amplitude realizes these inputs. [A1, algebra] ∎
