---
id: pthm-emg-observer-maxwell-current
kind: physics-theorem
title: "Observer Maxwell equations and conserved source charge"
status: draft
origin: pipeline
domain: physics
dependency_level: 2
deps:
  - post-emg-covariant-maxwell
  - lem-emg-maxwell-current-forms
  - lem-emg-gauss-finite-chain
  - thm-gr-point-normal-and-exponential-coordinate-charts
  - thm-sylvesters-law-of-inertia
  - thm-gr-density-divergence-and-finite-chain-flux
  - def-countable-choice
dependency_roles:
  post-emg-covariant-maxwell: physical-assumption
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-gauss-finite-chain: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional deduction of observer-frame SI Maxwell components, smooth-current conservation, and finite-chain Gauss flux in the adopted curved vacuum Maxwell model. It excludes singular or distributional sources, global component formulas for arbitrary non-inertial observers, and noncompact asymptotic charge claims; it reports no experiment or measurement."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, §3.2.5 and §§4.5.3, 4.5.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 1 and Chapter 4"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---
## Statement

Let $(M,g)$ be a smooth ($C^\infty$), Hausdorff, second-countable,
boundaryless, oriented, time-oriented four-manifold with Lorentz metric of
signature $(-,+,+,+)$ and oriented volume form $\mathrm{vol}_g$. Use SI units:
$c>0$ has exact defining value $299\,792\,458\ \mathrm{m\,s^{-1}}$; its
identification as the vacuum light/clock conversion is adopted in this
framework, not derived here. The constant $\mu_0>0$ has units
$\mathrm{N\,A^{-2}}$ and is experimentally determined in the revised SI; set
$\epsilon_0:=(\mu_0c^2)^{-1}$ in $\mathrm{F\,m^{-1}}$. The manifold
orientation is independent of the time orientation. Let $\mathcal D\subseteq M$
be the open field domain. Let $F$ be a smooth real two-form with components in
tesla, and let $j$ be a smooth vector field whose components have units
$\mathrm{A\,m^{-2}}$, both on $\mathcal D$. An **observer field** is a smooth
future-directed vector field $n$ with $g(n,n)=-1$; no
hypersurface-orthogonality or global inertial chart is assumed. On decomposable
$k$-covectors define
$\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle_g:=\det(g^{-1}(\alpha_i,\beta_j))$ and extend bilinearly. Define the Hodge star by
$\alpha\wedge *\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$ and define
insertion by $(i_X\omega)(Y_1,\ldots,Y_{k-1})=\omega(X,Y_1,\ldots,Y_{k-1})$.
The observer fields are the spatial covectors
$E_a:=cF_{ab}n^b=-c(i_nF)_a$ and
$B_a:= -(*F)_{ab}n^b=(i_n*F)_a$. Antisymmetry makes both covectors spatial,
that is, they annihilate $n$. In a positively oriented orthonormal tetrad with
time axis $n$ (an ordered basis with metric matrix $\operatorname{diag}(-1,1,1,1)$), let $\delta_{ij}$ be the Euclidean spatial metric and let
$\varepsilon_{ijk}$ be the alternating symbol with $\varepsilon_{123}=+1$;
at an event write $F_{0i}=-E_i/c$ and $F_{ij}=\varepsilon_{ijk}B_k$ for the
tetrad components at that event. Define the local
charge and current densities by $\rho:=j^0/c$ and $J^i:=j^i$, so
$[\rho]=\mathrm{C\,m^{-3}}$ and $[J^i]=\mathrm{A\,m^{-2}}$. For spatial
components define $\nabla\cdot X:=\sum_i\partial_iX_i$ and
$(\nabla\times X)_k:=\varepsilon_{kij}\partial_iX_j$. Coordinates are
lengths, with $x^0=ct$ and $\partial_0=c^{-1}\partial_t$; $E_i$ has units
$\mathrm{V\,m^{-1}}$ and $B_i$ has units tesla.

Assume Countable Choice $\mathrm{AC}_\omega$ as stated in [A2] and the adopted
curved vacuum Maxwell equations in [A1] on $\mathcal D$, with $\nabla$ the
Levi-Civita connection of $g$. A **point-normal
Lorentz chart at $p\in\mathcal D$** means a positively oriented chart in
$\mathcal D$ with $g_{ab}(p)=\operatorname{diag}
(-1,1,1,1)$, $\partial_cg_{ab}(p)=0$, and coordinate time axis $n(p)$.
In this chart define $\widehat E_i(x):=-cF_{0i}(x)$ and
$\widehat B_i(x):=\tfrac12\varepsilon_{ijk}F_{jk}(x)$; at $p$ these are the
components measured by $n(p)$. Derivatives in the pointwise formulas below
act on these chart-component functions, not on components of a varying
observer congruence. Then
$\nabla_a j^a=0$. At each event $p$, in a positively oriented point-normal
Lorentz chart whose time axis is $n(p)$, the component equations at $p$ are

$$\nabla\cdot\widehat{\mathbf E}=\rho/\epsilon_0,\qquad \nabla\times\widehat{\mathbf B}-c^{-2}\partial_t\widehat{\mathbf E}=\mu_0\mathbf J,\qquad \nabla\cdot\widehat{\mathbf B}=0,\qquad \partial_t\widehat{\mathbf B}+\nabla\times\widehat{\mathbf E}=0.$$

These four component equations hold throughout a fixed Minkowski inertial
chart with constant observer $n=\partial_0$. For $k\ge0$, let
$\Delta^k:=\{(t_0,\ldots,t_k)\in\mathbb R^{k+1}:t_i\ge0,\sum_i t_i=1\}$.
A **smooth singular $k$-simplex** is a smooth map $\Delta^k\to\mathcal D$; a
**finite smooth singular $k$-chain** is a finite real linear combination of
such simplices, with boundary the alternating sum of their oriented faces. A
smooth singular three-simplex is **spacelike** when its differential has rank
three and its pullback metric is positive definite on its interior; a
spacelike three-chain has this property on each simplex and is oriented by
its future-directed unit normal. For a finite smooth oriented spacelike
three-chain $\Sigma$ in the field domain, define its source charge by
$Q(\Sigma):=c^{-1}\int_\Sigma i_j\mathrm{vol}_g$ (in coulombs). If
$\partial\Sigma$ is its finite smooth boundary chain, then

$$Q(\Sigma)=\frac{1}{\mu_0c}\int_{\partial\Sigma}*F.$$

The component identities at a general event are local observer measurements;
they do not assert that an arbitrary observer field supplies a global inertial
coordinate system or a preferred foliation.

## Facts & Assumptions

**Given:** The smooth geometric and field data in the Statement, a point $p$ in
the field domain, Countable Choice $\mathrm{AC}_\omega$, and the adopted model
premise [A1]. All differential forms, chains, and fields are smooth on the
domain where they are used.

[A1] Draft adopted model postulate [[post-emg-covariant-maxwell]]:
on its selected smooth oriented Lorentzian domain,
using the Levi-Civita connection of $g$, $dF=0$ and
$\nabla_aF^{ab}=-\mu_0j^b$. The proposed scope excludes singular self-fields
and macroscopic material-excitation substitutions.

[A2] The Axiom of Countable Choice [[def-countable-choice]] ($\mathrm{AC}_\omega$):
every sequence of nonempty sets has a choice function. This is the exact
background choice premise carried by the current mathematical suppliers; the
finite component and Stokes calculations below use no stronger principle.

[F1] Draft mathematical supplier [[lem-emg-maxwell-current-forms]]:
for smooth $F$, put $v^b=\nabla_aF^{ab}$. Its Statement gives
$d*F=-i_v\mathrm{vol}_g$, so $\nabla_aF^{ab}=-\mu_0j^b$ implies
$d*F=\mu_0i_j\mathrm{vol}_g$; the normal-frame coefficients give the four
SI component equations under the chart abbreviations
$\widehat E_i=-cF_{0i}$, $\widehat B_i=\tfrac12\varepsilon_{ijk}F_{jk}$,
$j=(c\rho,\mathbf J)$, and $\epsilon_0\mu_0c^2=1$. The identity
$d(i_j\mathrm{vol}_g)=(\nabla_aj^a)\mathrm{vol}_g$ is supplied with its
full chart proof in [F5].

[F2] Draft mathematical supplier [[lem-emg-gauss-finite-chain]]:
its Statement covers each finite smooth oriented spacelike three-chain
$\Sigma$ in the domain and gives
$Q(\Sigma)=c^{-1}\int_\Sigma i_j\mathrm{vol}_g$ and
$Q(\Sigma)=(\mu_0c)^{-1}\int_{\partial\Sigma}*F$ under the sourced Maxwell
equations. Its proof is complete at the inspected draft, and its Stokes use
is restricted to finite smooth chains. The model postulate [A1] remains a
draft physical adoption.

[F3] Published chart theorem [[thm-gr-point-normal-and-exponential-coordinate-charts]]:
for every $g_p$-orthonormal basis, its exponential-coordinate part uses
$u=\psi\circ\exp_p^{-1}$ to give a chart with
$g_{ab}(p)=\operatorname{diag}(-1,1,1,1)$ and $\partial_cg_{ab}(p)=0$; the
coordinate basis at $p$ is the chosen basis because $d\exp_p|_0$ is the
identity and $\psi$ is its coordinate isomorphism. It applies to any selected
$g_p$-orthonormal basis, not just a frame chosen by that theorem.

[F4] Published Sylvester law [[thm-sylvesters-law-of-inertia]]:
the positive, negative and zero indices of a real symmetric form are
independent of the diagonalizing basis. In an orthogonal direct sum these
indices add, by applying this uniqueness statement to the block-diagonal
matrix.

[F5] Published current-density theorem
[[thm-gr-density-divergence-and-finite-chain-flux]]: for a smooth current
vector $j$, its Statement gives
$d(i_j\mathrm{vol}_g)=(\nabla_aj^a)\mathrm{vol}_g$. Its proof computes both
sides in oriented coordinates and verifies the density-divergence identity.

## Proof


1.1 By [A1], $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$. The sign identity in
[F1] gives $d*F=\mu_0i_j\mathrm{vol}_g$. Apply $d$ and use $d^2=0$ to get
$d(i_j\mathrm{vol}_g)=0$ since $\mu_0>0$. By the proved density-divergence
identity [F5], this is $(\nabla_aj^a)\mathrm{vol}_g=0$. The volume form is
nowhere zero, so $\nabla_aj^a=0$. [given, A1, A2, F1, F5, algebra]

1.2 At $p$, put $W=n(p)^\perp$. Every $v\in T_pM$ has the orthogonal
decomposition $v=-g_p(v,n(p))n(p)+(v+g_p(v,n(p))n(p))$; the second term is
orthogonal to $n(p)$. The summands intersect only in zero because
$g_p(n(p),n(p))=-1$, so $T_pM=\mathbb R n(p)\oplus W$ and $\dim W=3$. The
restriction of $g_p$ to $W$ is nondegenerate: a vector in its radical is
orthogonal to both $W$ and $n(p)$, hence to all of $T_pM$, and must be zero.
The first summand has inertia $(0,1,0)$, while $g_p$ has inertia $(3,1,0)$;
[F4] therefore gives inertia $(3,0,0)$ on $W$, so $g_p|_W$ is positive
definite. Choose a basis $w_1,w_2,w_3$ of $W$ and set
$e_1=w_1/\sqrt{g_p(w_1,w_1)}$. Set
$v_2=w_2-g_p(w_2,e_1)e_1$; linear independence gives $v_2\ne0$, and direct
substitution gives $g_p(v_2,e_1)=0$. Set $e_2=v_2/\sqrt{g_p(v_2,v_2)}$.
Next set $v_3=w_3-g_p(w_3,e_1)e_1-g_p(w_3,e_2)e_2$. Independence gives
$v_3\ne0$, and $g_p(v_3,e_1)=g_p(v_3,e_2)=0$ by orthonormality of $e_1,e_2$.
Positive definiteness makes all three denominators positive; set
$e_3=v_3/\sqrt{g_p(v_3,v_3)}$. If needed, reverse $e_3$ so
$(n(p),e_1,e_2,e_3)$ is positively oriented. This is a $g_p$-orthonormal
basis. By [F3], its exponential chart is point-normal and has time axis
$n(p)$; restrict the chart to its intersection with the open domain
$\mathcal D$. Use its component functions
$\widehat E_i=-cF_{0i}$ and
$\widehat B_i=\tfrac12\varepsilon_{ijk}F_{jk}$. The spatial
coefficient $(dF)_{123}=0$ is
$\partial_1\widehat B_1+\partial_2\widehat B_2+\partial_3\widehat B_3=0$. For each cyclic triple
$(i,j,k)$, $(dF)_{0ij}=0$ reads
$c^{-1}\partial_t\widehat B_k+c^{-1}(\nabla\times\widehat{\mathbf E})_k=0$, hence
$\partial_t\widehat{\mathbf B}+\nabla\times\widehat{\mathbf E}=0$. [given, A1, A2, F1, F3, F4, algebra]

2.1 The remaining four coefficients of $d*F=\mu_0i_j\mathrm{vol}_g$ are
$(d*F)_{123}=c^{-1}\nabla\cdot\widehat{\mathbf E}=\mu_0c\rho$ and
$(d*F)_{0ij}=\varepsilon_{ijk}\bigl(c^{-2}\partial_t\widehat E_k-(\nabla\times\widehat{\mathbf B})_k\bigr)=-\mu_0\varepsilon_{ijk}J^k$. Multiplying by $c$ in the first identity and using $\epsilon_0^{-1}=\mu_0c^2$ gives $\nabla\cdot\widehat{\mathbf E}=\rho/\epsilon_0$; the second gives $\nabla\times\widehat{\mathbf B}-c^{-2}\partial_t\widehat{\mathbf E}=\mu_0\mathbf J$. These equations are pointwise in the chosen normal chart; in an inertial Minkowski chart with constant observer $n=\partial_0$ the same component identities hold throughout that chart. [step 1.1, F1, algebra]

3.1 For a finite smooth spacelike chain $\Sigma$, [F2] applies to the sourced equation from step 1.1 and states
$Q(\Sigma)=c^{-1}\int_\Sigma i_j\mathrm{vol}_g=(\mu_0c)^{-1}\int_{\partial\Sigma}*F$. The coefficient and orientation are those fixed in [A1] and [F1]; no limiting surface is used. [step 1.1, A1, A2, F1, F2, given, algebra] ∎

## Remarks

The postulate and its current are adopted model inputs. The equations and
charge identity are conditional deductions; they are not experimental
observations or evidence that the adopted model describes nature. The current
supplier statements and proofs were inspected; readiness is bound to the
current physical adoption [A1] and supplier dependency closure.
