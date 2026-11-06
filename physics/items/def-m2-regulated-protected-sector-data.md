---
id: def-m2-regulated-protected-sector-data
kind: definition
title: M2 Regulated Protected Sector Data
status: published
origin: session
domain: physics
library: physics
category: string-theory
dependency_level: 9
deps:
  - def-m2-brane-worldvolume-action
  - def-m2-combined-fermion-cfield-descent-data
dependency_roles:
  def-m2-brane-worldvolume-action: formulation-prerequisite
  def-m2-combined-fermion-cfield-descent-data: mathematical-premise
physical_scope: >-
  Original F4 background/charge scope retained as the physical realization objective. Specifying required data does not assert its physical existence; smooth source-model restrictions remain explicit.
proof_strategy: direct
proof_status: exact required quantum-data contract; physical existence is not asserted or supplied
relations:
  motivated_by:
    - pthm-m2-kappa-symmetry-on-cjs-background
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bergshoeff, Sezgin, and Townsend, Supermembranes and Eleven-Dimensional Supergravity (1987)"
      url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
      locator: "Eqs. (3)–(20), PDF pp. 2–5: classical action and local κ variation"
    - title: "Paul K. Townsend, Four Lectures on M-theory"
      url: https://arxiv.org/pdf/hep-th/9612121v3
      locator: "§2, full 55-page lecture notes: Green–Schwarz membrane action and superspace symmetry"
---

## Definition

A **regulated protected-sector data package** for a specified background
and charge sector is the following supplied physical input record.

1. For each regulator value $\epsilon>0$, specify a pre-Hilbert space
   $\mathcal K^0_\epsilon$ with inner product and norm, its Hilbert
   completion $\widehat{\mathcal K}_\epsilon$, and a Hilbert-orthogonal
   ghost-number decomposition
   $\widehat{\mathcal K}_\epsilon=\widehat{\bigoplus}_{g\in\mathbb Z}\widehat{\mathcal K}^{\,g}_\epsilon$.
   The associated ghost-number
   operator is the self-adjoint $N_\epsilon x=gx$ on
   $\widehat{\mathcal K}^{\,g}_\epsilon$,
   with domain $\{x=(x_g):\sum_g g^2\|x_g\|^2<\infty\}$. Supply a
   densely defined closed differential $d_\epsilon$ on
   $\widehat{\mathcal K}_\epsilon$ such that
   $\operatorname{ran}d_\epsilon\subseteq\operatorname{dom}d_\epsilon$,
   $d_\epsilon^2x=0$ for every $x\in\operatorname{dom}d_\epsilon$, and
   $\operatorname{dom}d_\epsilon$ is invariant under the ghost-sector
   projections. Its ghost-number action is required to be
   $d_\epsilon(\operatorname{dom}d_\epsilon\cap
   \widehat{\mathcal K}^{\,g}_\epsilon)\subseteq
   \widehat{\mathcal K}^{\,g+1}_\epsilon$. Specify the physical ghost
   number $g_{\rm phys}$ and take the physical Hilbert space to be
   $$
   \mathcal H_\epsilon:=\ker d_{\epsilon,g_{\rm phys}}\big/\overline{\operatorname{ran}d_{\epsilon,g_{\rm phys}-1}},\qquad d_{\epsilon,g}:=d_\epsilon|_{\operatorname{dom}d_\epsilon\cap\widehat{\mathcal K}^{\,g}_\epsilon}.
   $$
   Thus $[x]=[y]$ exactly when
   $x-y\in\overline{\operatorname{ran}d_{\epsilon,g_{\rm phys}-1}}$,
   and $\|[x]\|=\inf_{r\in\overline{\operatorname{ran}
   d_{\epsilon,g_{\rm phys}-1}}}\|x+r\|$. Supply a self-adjoint unitary
   involution $\Gamma_\epsilon$ on the BRST Hilbert space, preserving
   each ghost sector and $\operatorname{dom}d_\epsilon$, with
   $d_\epsilon\Gamma_\epsilon=-\Gamma_\epsilon d_\epsilon$ on that
   domain. Its induced quotient involution is the selected physical
   four-dimensional chirality grading. Fix the convention
   $\eta=(-,+,+,+)$ and
   $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$ in a positively
   oriented orthonormal Lorentz frame, with
   $\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}$: the positive
   eigenspace is right-handed and the negative eigenspace is
   left-handed. Write $\mathcal H_\epsilon^+$ and
   $\mathcal H_\epsilon^-$ for the $+1$ and $-1$ eigenspaces of the
   induced quotient grading, and set $n_R:=\dim\mathcal H_\epsilon^+$
   and $n_L:=\dim\mathcal H_\epsilon^-$ when these are finite. The
   graded net chirality is then $n_R-n_L$; no finiteness is asserted here.
2. Supply on $\mathcal H_\epsilon$ a densely defined closed
   self-adjoint charge $Q_\epsilon$ with
   $\Gamma_\epsilon Q_\epsilon=-Q_\epsilon\Gamma_\epsilon$ on its
   invariant domain, its normalization and square, and the exact
   symmetry and commutation relations used in the model. Supply a
   self-adjoint Hamiltonian $H_\epsilon$ whose unitary evolution
   $e^{-itH_\epsilon}$ preserves the physical quotient and grading,
   preserves $\operatorname{dom}(Q_\epsilon)$, and commutes with
   $Q_\epsilon$ there.
3. For regulator removal, supply a common graded Hilbert space
   $\mathcal K$, graded Hilbert spaces $\mathcal H_0$ and
   $\mathcal H_\epsilon$ as above, and grading-preserving linear
   isometries $J_\epsilon:\mathcal H_\epsilon\to\mathcal K$
   for $\epsilon\ge0$. Set $\Pi_\epsilon=J_\epsilon J_\epsilon^*$.
   Supply an odd self-adjoint $Q_0$ on a specified dense invariant
   domain in $\mathcal H_0$. The convergence required here is
   generalized strong-resolvent convergence: for every
   $x\in\mathcal K$ and $z\in\mathbb C\setminus\mathbb R$,
   $$
   \|\Pi_\epsilon x-\Pi_0x\|\longrightarrow0,\qquad \|J_\epsilon(Q_\epsilon-z)^{-1}J_\epsilon^*x-J_0(Q_0-z)^{-1}J_0^*x\|\longrightarrow0\quad(\epsilon\downarrow0).
   $$
   Strong operator convergence means precisely convergence on each
   fixed vector as in these formulas; stronger estimates must be
   separately stated. If a protected index survives removal, require
   each chiral charge to be Fredholm on its graph-norm domain and
   prove convergence of its kernel-minus-cokernel dimension to the
   corresponding index at zero. Record the spectral projections
   $\mathbf1_{I_\epsilon}(Q_\epsilon)$ onto every specified Borel
   energy window $I_\epsilon\subset\mathbb R$ used to track states
   entering or leaving zero, with their transported ranges under
   $J_\epsilon$ and their stated convergence. Strong-resolvent
   convergence alone asserts no index stability or uniform gap.
4. If a curve reduction is claimed, specify a finite-dimensional smooth
   parameter manifold $B_{\rm red}$, a smooth Hilbert bundle
   $\mathscr H\to B_{\rm red}$ with fiber $\mathcal H_b$ equal to the
   physical quotient at the regulator value $\epsilon(b)>0$ and other
   declared parameters, and a unitary
   ambient connection $\nabla^{\mathscr H}$ preserving the physical
   grading. Supply a smooth operator-norm family $b\mapsto P_b$ of
   orthogonal projections of locally constant finite rank on these
   fibers, with $P_b\Gamma_b=\Gamma_bP_b$ for the induced fiber grading
   $\Gamma_b$ and with each
   $P_b$ preserving every operator domain used in the reduction. The
   light bundle is $\mathscr L=\operatorname{im}P$ and its Berry
   connection is, by definition,
   $\nabla^{\rm B}s=P\nabla^{\mathscr H}s$ for smooth sections
   $s$ of $\mathscr L$; the heavy bundle is $\operatorname{im}(I-P)$.
   When the only varying parameter is the regulator, write $P_\epsilon$
   for this family. State the closed block operators, their domains,
   and the bounds used for every block comparison.
   A mode here means a vector in $\mathscr L_b=\operatorname{im}P_b$.
   Supply a smooth even orthogonal subprojection $U_b\le P_b$,
   of locally constant rank, whose range is the designated universal
   mode bundle. “Universal” is a supplied sector designation, not a
   consequence of a rank calculation; any physical justification of
   this designation must be stated separately. Supply a finite index
   set $A$ and smooth even mutually orthogonal projections $V_{a,b}$
   of locally constant rank with
   $U_b+\sum_{a\in A}V_{a,b}=P_b$; the additional light constituents
   are exactly their ranges, including zero ranges if present.
   These equations are the completeness criterion for this record.
   All projections preserve the domains used by their stated block
   restrictions. Record ranks, gradings and those restrictions. A
   claim that this record includes every physical mode in a specified
   energy window additionally requires
   $P_b=\mathbf1_{[-\delta_b,\delta_b]}(Q_b)$ with supplied
   $\delta_b>0$ in the charge's declared units; it is not inferred
   from the word light or from finite rank.
5. If the smooth Euclidean fermion/electric package is used, supply the
   exact mathematical data in the combined Euclidean M2 fermion/C-field
   descent package. Its interface fixes
   a finite-dimensional Hausdorff second-countable parameter manifold
   $B$, a closed Riemannian spin eleven-manifold $Y$, and a proper
   smooth submersion $\pi:\Sigma\to B$ with compact closed oriented
   spin three-dimensional fibers, embedded fiberwise in $Y$. It
   supplies the rank-eight quotient normal bundle
   $N=f^*TY/df(T^v\Sigma)$ with metric, spin lift, orientation, and
   connection; here $df|_{T^v\Sigma}$ is the injective bundle map
   supplied by the fibrewise embedding. It supplies a shifted cocycle $(u,a,t,\omega)$, with
   $u,a\in Z^4_{\rm sm}(Y;\mathbb Z)$, $t\in C^3_{\rm sm}(Y;\mathbb R)$,
   $d\omega=0$, and
   $\delta t=\operatorname{Int}(\omega)-a_{\mathbb R}-u_{\mathbb R}/2$.
   The shift $u$ is fixed, and the declared changes
   $(a,t,\omega)\mapsto(a+\delta b,t-b_{\mathbb R}-\delta s,\omega)$
   retain the specified differential representative. It also supplies
   an actual principal $E_8$ bundle/connection and ordinary differential
   refinement $x_A$ with its stated curvature and integral class. The fixed
   shift $u$ remains arbitrary in the general package. Its local normalized
   total potentials satisfy $d\mathcal C_i=\omega$, equivalently the
   unit-coupled potentials $C_{M,i}=2\pi\mathcal C_i$ satisfy
   $dC_{M,i}=2\pi\omega$, with formal phase $\exp(i\int C_{M,i})$.
   If the exact Freed--Moore source presentation is used, separately supply
   its matching refinement: $[u]=\lambda(TY)$, the global normalized
   correction $c_{\mathrm{corr}}$, curvature equation
   $\omega=\Omega_A-\Lambda/2+d c_{\mathrm{corr}}$, and actual integral/
   differential crosswalk $[a]=\alpha-[u]$, including torsion and flat data.
   None of these source-matching conditions is deduced for an arbitrary
   general shifted-cocycle package.
   The source-model Dirac families are $D_f$ on
   $S(\Sigma_b)\otimes S^+(N_b)$ and $D_0$ on $S(\Sigma_b)$.
   Their dense Sobolev domains, self-adjoint compact-resolvent
   properties, smooth parameter dependence, real/quaternionic
   structures, a vertical metric and horizontal splitting, compatible
   Clifford connections, spectral-cut charts $a\notin\operatorname{spec}(D_b^2)$
   and their finite-rank bands are supplied hypotheses. The exact source
   refinement additionally supplies the doubled graded module, volume
   operator and parallel quaternionic $J$ with $J^2=-1$ commuting with
   the Clifford and Dirac operators, together with compatible invertible-band
   Pfaffian transitions, as typed in the supplier. The package includes the Pfaffian and electric eta lines,
   their transition maps, metrics and geometric connections, and the
   source electric factor, when that matching refinement is supplied,
   $CS_{\Sigma_b}(A)\tau_{D_0}^{-1/4}
   \exp(2\pi i\int_{\Sigma_b}c_{\mathrm{corr}})$. The eta convention is the one
   recorded in the exact supplier. It does not include a tensor pairing
   of these lines and does not identify a Lorentzian fluxed Hessian or
   construct the physical Hilbert quotient above.

This is a definition of required inputs, not an assertion that any
wrapped membrane realizes them. The classical M2 action remains
physical context; classical $\kappa$-symmetry motivates the quantum
gauge problem but does not construct its nonlinear quotient.

## Definition references

[[def-m2-combined-fermion-cfield-descent-data]]

## Facts & Assumptions

**Given:** The stated background and charge labels; for each $\epsilon>0$, the inner products, ghost-number decomposition, closed BRST complex, fixed-ghost-number physical quotient and induced chirality grading, preserved charge, and compatible evolution listed above. A claimed curve reduction additionally supplies its parameterized orthogonal projection family, ambient connection, blocks, domains, and comparison data.

[F1] [[def-m2-brane-worldvolume-action]]: the Green–Schwarz M2 action is a classical action definition; its statement explicitly does not claim a quantization or quantum membrane existence.

[F2] [[def-m2-combined-fermion-cfield-descent-data]]: its current statement and definition supply the closed smooth Euclidean family, rank-eight spin normal data, shifted differential cocycle including integral and flat representatives, E8/normal-spinor Dirac families with explicit domains and real/quaternionic structures, and spectral-cut Pfaffian/eta lines with metrics and connections. It explicitly supplies no tensor pairing and no physical Lorentzian identification. The mathematical contract retains arbitrary supplied shifts and includes the separately specified source-normalized refinement when used, together with inherited full AC. Its actual current readiness must be recaptured after a public interface correction; it asserts no physical instantiation.

[A1] For each regulator, take the Hilbert-completed BRST complex, its ghost-number-one differential, fixed-ghost-number quotient and induced chirality involution, and the closed operators and evolution in items 1–2 as supplied data; the definition makes no claim that they exist for a membrane model.

## Proof

1.1 The closed restriction $d_{\epsilon,g_{\rm phys}}$ has closed kernel. The chain identity places $\operatorname{ran}d_{\epsilon,g_{\rm phys}-1}$ inside that kernel, so its closure is a closed subspace of the kernel and the stated quotient is complete in the quotient Hilbert norm. The relation $d_\epsilon\Gamma_\epsilon=-\Gamma_\epsilon d_\epsilon$, together with preservation of ghost sectors and domains, makes the kernel and the closed range invariant under $\Gamma_\epsilon$. Hence $\Gamma_\epsilon$ descends to a self-adjoint unitary involution on the quotient with the declared positive and negative chirality eigenspaces. [given, A1, algebra]

1.2 Items 2–4 list the additional physical operators and reduction data as supplied fields of the record. In particular, self-adjointness, domain preservation, the evolution commutation relation, the smooth projection family, and any regulator-limit assertion are hypotheses to be supplied with their domains, ambient connection, and bounds. For an orthogonal projection family, $P\nabla^{\mathscr H}$ is a connection on $\operatorname{im}P$: it obeys the connection Leibniz rule and is Hermitian because $P$ is orthogonal and $\nabla^{\mathscr H}$ is unitary. These properties do not follow merely from naming an operator or projection. [given, A1, algebra]

2.1 The Euclidean supplier [F2] supplies the exact mathematical geometric/operator package and explicitly excludes a pairing input and a Lorentzian physical identification. Thus, even when that package is available, it does not fill in the independent physical BRST quotient, preserved charge, or regulator-removal fields of this definition. The action source [F1] supplies only the classical action and expressly excludes a quantum definition. Consequently this definition specifies required data without deriving their existence from the classical action or the Euclidean package. [F1, F2, A1, step 1.1, step 1.2] ∎
