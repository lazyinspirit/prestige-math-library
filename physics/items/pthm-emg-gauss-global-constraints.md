---
id: pthm-emg-gauss-global-constraints
kind: physics-theorem
title: "Global Gauss flux and compact-slice neutrality"
status: published
origin: pipeline
domain: physics
dependency_level: 5
deps:
  - post-emg-covariant-maxwell
  - lem-emg-gauss-finite-chain
  - def-emg-topological-sector
  - lem-emg-sphere-flux-holonomy
  - lem-emg-maxwell-current-forms
  - lem-emg-lorentz-hodge-calculus
  - def-countable-choice
dependency_roles:
  post-emg-covariant-maxwell: physical-assumption
  lem-emg-gauss-finite-chain: mathematical-premise
  def-emg-topological-sector: formulation-prerequisite
  lem-emg-sphere-flux-holonomy: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Finite-domain charge and flux identities under the smooth curved vacuum Maxwell postulate, including side-flux balance and neutrality of compact boundaryless smooth slices. Noncompact decay, singular boundaries, and empirical claims are outside scope; nonbounding cycles are not assigned zero flux by Stokes."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, General Relativity, §3.2.5 and §4.5.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 1 and Chapter 4"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---
## Statement

Let $(M,g)$ be a smooth ($C^\infty$), Hausdorff, second-countable,
boundaryless, oriented, time-oriented Lorentzian four-manifold of signature
$(-,+,+,+)$, with oriented metric volume form $\mathrm{vol}_g$. Use SI
constants $c>0$ with exact defining value $299\,792\,458\ \mathrm{m\,s^{-1}}$
and $\mu_0>0$ in $\mathrm{N\,A^{-2}}$ (experimentally determined in the
revised SI); define $\epsilon_0:=(\mu_0c^2)^{-1}$ in $\mathrm{F\,m^{-1}}$.
Let $\mathcal D\subseteq M$ be the open field domain. Let $F$ be a smooth real
two-form with components in tesla and let $j$ be a smooth current vector field
with components in $\mathrm{A\,m^{-2}}$ on $\mathcal D$. Assume
Countable Choice $\mathrm{AC}_\omega$ as
stated in [A2] and the adopted Maxwell equations in [A1].

Use the Lorentzian Hodge star $\star_g$, the unique smooth bundle map defined
by [[lem-emg-lorentz-hodge-calculus]]: on decomposable $k$-covectors its
induced pairing is
$\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle_g
:=\det(g^{-1}(\alpha_i,\beta_j))$, extended bilinearly, and
$\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$.
In four dimensions with signature $(-,+,+,+)$, that supplier also proves
$\star_g^2=-\mathrm{id}$ on two-forms. Write $*$ for $\star_g$ when the
metric is fixed.

For $k\ge0$, let $\Delta^k:=\{(t_0,\ldots,t_k)\in\mathbb R^{k+1}:t_i\ge0,
\sum_i t_i=1\}$. A **smooth singular $k$-simplex** is a smooth map
$\Delta^k\to\mathcal D$, and a **finite smooth singular $k$-chain** is a
finite real linear combination of such simplices; $\partial$ is the
alternating sum of their oriented faces. A smooth singular three-simplex is
**spacelike** when
its differential has rank three and its pulled-back metric is positive
definite on its interior; a spacelike three-chain has this property on each
simplex. Orient spacelike simplices using their future-directed unit normal.
Define insertion by
$(i_j\omega)(X_1,\ldots,X_{k-1})=\omega(j,X_1,\ldots,X_{k-1})$. For every
finite smooth singular three-chain $C$, set
$\Phi_j(C):=c^{-1}\int_C i_j\mathrm{vol}_g$; for a spacelike slice $\Sigma$
write $Q(\Sigma):=\Phi_j(\Sigma)$, in coulombs.

For every finite smooth oriented four-chain $V$ whose boundary decomposes as
$\partial V=\Sigma_2-\Sigma_1+B$, where $\Sigma_1,\Sigma_2$ are finite
spacelike three-chains and $B$ is the finite side chain, the source-current
flux satisfies

$$Q(\Sigma_2)-Q(\Sigma_1)=-\Phi_j(B).$$

For every compact boundaryless oriented smooth spacelike slice $\Sigma$ in
the domain, represented by a finite smooth three-cycle,
$Q(\Sigma)=0$. For every finite smooth three-chain $W$,
$\int_{\partial W}F=0$; where $j=0$ throughout $W$,
$\int_{\partial W}*F=0$. These conclusions concern bounding surfaces. A
closed surface is **nonbounding in the field domain** when it is a finite
smooth two-cycle $C$ with no finite smooth three-chain $W$ in that domain such
that $C=\partial W$; no zero-flux conclusion is made for such a surface. The
field topology is the global real closed-form model of [F2]; an optional
normalized $U(1)$ connection sector with chosen flux normalization $\kappa_0$
is extra structure, where $U(1):=\{z\in\mathbb C:|z|=1\}$ under multiplication,
and no electric-charge quantization is inferred.

**Punctured-Minkowski example (a separate specialization of the general
setup).** For $b\ne0$ with $b$ measured in webers, let
$M_{\mathrm{punct}}:=\mathbb R_{x^0}\times(\mathbb R^3\setminus\{0\})$ be the
open punctured spacetime, with metric
$g_{\mathrm{punct}}:=-(dx^0)^2+dx^2+dy^2+dz^2$, standard orientation
$dx^0\wedge dx\wedge dy\wedge dz$, future time orientation given by
$\partial_{x^0}$, and field domain $\mathcal D_{\mathrm{punct}}:=M_{\mathrm{punct}}$.
Take $j_{\mathrm{punct}}=0$; in this example, “source-free” means that the
adopted equations [A1] reduce to $dF=0$ and $\nabla_aF^{ab}=0$. Write
$r_{\mathrm{punct}}:=(x^2+y^2+z^2)^{1/2}$, and define on this domain

$$F_b:=\frac{b}{r_{\mathrm{punct}}^3}\left(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy\right).$$

The coordinates $x^0=ct,x,y,z$ and $r_{\mathrm{punct}}$ are in metres. This
is one particular instance of the arbitrary $M,g,\mathcal D,F,j$ fixed above;
the following example claims concern this instance only. For every radius
$R>0$, the sphere $S^2_R$ at fixed $x^0$, with outward orientation, has
$\int_{S^2_R}F_b=4\pi b\ne0$. Its Hodge-dual source-free field
$-\star_{g_{\mathrm{punct}}}F_b$ has
$\int_{S^2_R}\star_{g_{\mathrm{punct}}}(-\star_{g_{\mathrm{punct}}}F_b)=4\pi b\ne0$
as well. The sphere is nonbounding in this punctured domain; this example
makes no claim about a source or field value at the excluded origin.

## Facts & Assumptions

**Given:** Smooth $M,g,F,j$ as stated, finite smooth chains in the domain,
Countable Choice $\mathrm{AC}_\omega$, and the adopted field equations [A1].
The Lorentzian Hodge star $*$ is characterized by
$\alpha\wedge *\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$, with the
induced exterior pairing defined on decomposable covectors by the determinant
of the inverse-metric pairings and extended bilinearly. Integrals are only over
the specified finite chains; no asymptotic limit is implicit.

[A1] Draft adopted model postulate [[post-emg-covariant-maxwell]]:
on its selected smooth oriented Lorentzian domain, using the Levi-Civita
connection of $g$,
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, with no singular self-field or
macroscopic material-excitation assumption.

[A2] The Axiom of Countable Choice [[def-countable-choice]] ($\mathrm{AC}_\omega$):
every sequence of nonempty sets has a choice function. It is carried by the
planned mathematical supplier closure; the exact inherited use is selecting a
countable subatlas in the tangent/tensor-bundle construction documented in
the geometry supplier record. The finite-chain calculations use no stronger
choice principle.

[F1] Draft mathematical supplier [[lem-emg-gauss-finite-chain]]:
its Statement defines, for finite smooth chains,
$Q(\Sigma)=c^{-1}\int_\Sigma i_j\mathrm{vol}_g$, gives Maxwell's formula
$Q(\Sigma)=(\mu_0c)^{-1}\int_{\partial\Sigma}*F$, and
$\partial C=\Sigma_2-\Sigma_1+B$ gives
$Q(\Sigma_2)-Q(\Sigma_1)=-Q(B)$. No arbitrary noncompact or rough integration
domain is part of that interface. Its proof derives the signed four-chain
balance using finite Stokes and current conservation. The inspected proof is
complete; the physical adoption [A1] remains draft.

[F2] Draft formulation definition [[def-emg-topological-sector]]:
the classical field is a global smooth real two-form; the optional fixed
$U(1)$ bundle and normalization $\kappa_0$ are additional data. Its Definition
supplies this distinction but not the punctured-sphere example, and it makes
no claim of quantum electric-charge quantization.

[F3] Draft mathematical supplier [[lem-emg-sphere-flux-holonomy]]:
for $b\ne0$, its Statement defines the smooth Cartesian form $F_b$ on
$\mathbb R\times(\mathbb R^3\setminus\{0\})$, states it is closed, gives
outward unit-sphere flux $4\pi b$, and proves there is no global potential.
The seven typed foundational carriers required for this supplier's geometry
are present on page `emg-mg02` and appear in its declared dependencies.
Nevertheless, this supplier remains draft and has no
independent proof acceptance; the sphere result is used conditionally here.

[F4] Draft mathematical supplier [[lem-emg-maxwell-current-forms]]:
$d*F=\mu_0i_j\mathrm{vol}_g$ is equivalent to
$\nabla_aF^{ab}=-\mu_0j^b$ for smooth fields; in particular, $d*F=0$ gives
$\nabla_aF^{ab}=0$. Its proof is complete at the inspected draft, subject to
the exact mathematical dependency closure listed on that item.

[F5] Published mathematical lemma [[lem-emg-lorentz-hodge-calculus]]:
for the oriented Lorentzian Hodge star in four dimensions,
$*^2=-\mathrm{id}$ on two-forms. Its proof derives the sign from the single
negative direction in the metric signature.

## Proof


1.1 The four-chain balance in [F1] gives
$Q(\Sigma_2)-Q(\Sigma_1)=-Q(B)$. In [F1], the finite-chain functional
$Q(C)$ is defined as $c^{-1}\int_C i_j\mathrm{vol}_g$ for every three-chain
$C$; thus its $Q(B)$ equals the source-current flux $\Phi_j(B)$ defined here.
This is exactly the claimed signed identity, conditional on the sourced
Maxwell equations in [A1] as in [F1]. [given, A1, A2, F1, algebra]

1.2 The bounding-surface clause of [F1] gives
$\int_{\partial W}F=0$ for every finite smooth three-chain $W$. If $j=0$
throughout $W$, [A1] and [F4] give $d*F=0$ there, and finite smooth Stokes
then yields $\int_{\partial W}*F=\int_Wd*F=0$. A closed nonbounding surface
is not $\partial W$ for a chain in the field domain, so these arguments assign
it no flux value. [A1, A2, F1, F4, algebra]

1.3 The draft supplier [F3] states that $F_b$ is smooth and closed on the
punctured domain. In spherical coordinates
$x=r\sin\theta\cos\phi$, $y=r\sin\theta\sin\phi$,
$z=r\cos\theta$, the form restricts to
$F_b=b\sin\theta\,d\theta\wedge d\phi$ on each sphere $S^2_r$, so direct integration over
$0\leq\theta\leq\pi$, $0\leq\phi\leq2\pi$ yields
$\int_{S^2_r}F_b=4\pi b\ne0$. If the sphere were the boundary of a finite
smooth three-chain in that domain, the closed-form bounding-surface result
[F1] would force this integral to vanish. Thus it is nonbounding with
nonzero magnetic flux, conditional on the exact claim of draft supplier [F3];
this use does not constitute independent proof acceptance of that supplier. [A2, F1, F3, algebra]

1.4 In the positively oriented orthonormal spherical coframe
$e^0=dx^0$, $e^1=dr$, $e^2=r\,d\theta$, $e^3=r\sin\theta\,d\phi$,
$F_b=(b/r^2)e^2\wedge e^3$. The Hodge formula of [F5] gives
$*F_b=(b/r^2)e^0\wedge e^1=(b/r^2)dx^0\wedge dr$ because the complementary
index permutation $(2,3,0,1)$ is even and both spatial metric signs are
positive. Hence on this dense polar-coordinate region
$d*F_b=d(b/r^2)\wedge dx^0\wedge dr=0$; smoothness of $F_b$ and $g$ extends
this identity across the polar axes. Along with $dF_b=0$ from [F3], [F4]
gives $\nabla_aF_b^{ab}=0$, so $F_b$ satisfies the smooth
source-free Maxwell equations adopted in [A1] with $j=0$. [A1, A2, F3, F4,
F5, algebra]

2.1 If $\Sigma$ is a compact boundaryless finite smooth three-cycle, then
$\partial\Sigma=0$. The Gauss formula in [F1] therefore gives
$Q(\Sigma)=(\mu_0c)^{-1}\int_{\partial\Sigma}*F=0$. This is the stated
compact-slice neutrality consequence. [step 1.1, F1, algebra]

2.2 [A2, F2] distinguishes the global real closed-form model from an additional
normalized circle-connection choice. Thus the bounding-surface deductions
above impose neither exactness of every closed field form nor a flux rule on
nonbounding cycles, and they introduce no charge-quantization premise. [A2, F2,
step 1.2]

3.1 Put $\widetilde F:=-*F_b$. Then $d\widetilde F=-d*F_b=0$, and [F5]
gives $*\widetilde F=-*^2F_b=F_b$; consequently
$d*\widetilde F=dF_b=0$, so [F4] also gives the source-free divergence
equation for $\widetilde F$. Its electric flux through the same nonbounding
sphere is $\int_{S^2_r}*\widetilde F=\int_{S^2_r}F_b=4\pi b\ne0$. By [F4],
$\widetilde F$ also satisfies the adopted equations [A1] with $j=0$. These are
smooth fields on the punctured domain and make no source or field assertion at
the excluded origin. [step 1.3, step 1.4, A1, A2, F4, F5, algebra] ∎

## Remarks

Charge conservation in an open region requires zero side flux or inclusion of
that side flux, as the first conclusion states. Noncompact slices require a
separately specified exhaustion and convergence/decay hypotheses, which are
not present here. The actual supplier statements and proofs have been
inspected. This item remains conditional: the punctured-sphere result [F3]
remains draft and unaccepted despite the now-present prerequisite carriers,
and [A1] is a draft physical adoption.
