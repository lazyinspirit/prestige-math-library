---
id: ex-upper-semicontinuity-jumping-h0
kind: example
title: "An upper jump of h0 in a flat projective family"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-field-is-noetherian
  - thm-projective-space-proper-over-base
  - cor-free-modules-are-projective-and-flat
  - cor-upper-semicontinuity-cohomology-dimension
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
  - def-dependent-choice
  - def-field
  - def-finite-type-finite-presentation-module-sheaf
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-gluing-datum-sheaves
  - def-locally-free-sheaf-finite-rank
  - def-module-on-ringed-space
  - def-polynomial-ring-over-a-commutative-ring
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-pullback-module-ringed-spaces
  - def-relative-projective-space-standard-charts
  - def-residue-field-scheme-point
  - def-sheaf-cohomology-derived-global-sections
  - def-twisting-sheaf-proj
  - ex-cech-cocycle-projective-line-o-minus-two
  - lem-proj-associated-sheaf-basic-sections
  - lem-standard-opens-proj-affine
  - thm-gluing-sheaves
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-projective-space-as-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice as inherited
from the cited suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

Let $k$ be a field ([[def-field]]) and let $S=\operatorname{Spec}k[a]$ be the
affine line over $k$ ([[def-affine-scheme-spectrum]],
[[def-polynomial-ring-over-a-commutative-ring]]), with origin
$(a)\in S$ and generic point $\eta$. Let
$X=\mathbb P^1_S$ with its two standard charts $U_0$, $U_1$, whose coordinate
rings over $S$ are $k[a,z]$ and $k[a,z^{-1}]$ with $z=x_1/x_0$
([[def-relative-projective-space-standard-charts]],
[[def-projective-line-two-affine-cover-and-twisting-sheaf]],
[[thm-projective-space-as-proj]]). Then there exist a **rank-two vector bundle**
$\mathcal E$ on $X$ (a locally free $\mathcal O_X$-module of finite rank
[[def-locally-free-sheaf-finite-rank]],
[[def-module-on-ringed-space]]) that is flat over $S$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]) and a short exact
sequence of $\mathcal O_X$-modules
$$0\longrightarrow\mathcal O_X(-2)\longrightarrow\mathcal E\longrightarrow\mathcal O_X\longrightarrow0,$$
constructed by gluing the free rank-two modules with frames $(u_0,v_0)$ over
$U_0$ and $(u_1,v_1)$ over $U_1$ by the transition
$$u_1=z^{-2}u_0,\qquad v_1=v_0+a\,z^{-1}u_0$$
on $U_0\cap U_1$, whose determinant $z^{-2}$ is a unit there. The extension
cocycle of this sequence with respect to the cover $\{U_0,U_1\}$ is
$$a\,x_0^{-1}x_1^{-1}=a\,z^{-1}\,x_0^{-2}\;\in\;\Gamma(U_0\cap U_1,\mathcal O_X(-2)),$$
so that on the fibre over a point $u\in S$ the extension class is $a(u)$ times
the generator $[1/(x_0x_1)]$ of
$H^1(\mathbb P^1_{\kappa(u)},\mathcal O(-2))\cong\kappa(u)$
([[ex-cech-cocycle-projective-line-o-minus-two]],
[[def-residue-field-scheme-point]]).

For every point $u\in S$ let $X_u=X\times_S\operatorname{Spec}\kappa(u)$ be the
fibre, $\mathcal E_u$ the pullback of $\mathcal E$
([[def-pullback-module-ringed-spaces]]) and
$h^0(\mathcal E_u)=\dim_{\kappa(u)}H^0(X_u,\mathcal E_u)$
([[def-sheaf-cohomology-derived-global-sections]]). Then:

1. over the origin, $h^0(\mathcal E_{(a)})=1$, the section restricting to
   $v_0$ and $v_1$ on the two charts being a basis;
2. for every other point $u\ne(a)$ of $S$, including every closed point and the generic point $\eta$,
   $h^0(\mathcal E_u)=0$.

In particular $h^0$ jumps **up** at the origin, in agreement with the upper
semicontinuity of [[cor-upper-semicontinuity-cohomology-dimension]]: the
sublevel set $\{h^0<1\}=S\smallsetminus\{(a)\}$ is open. The field $k$ is
arbitrary, including $k=\mathbb F_2$.

## Facts & Assumptions
**Given:** The Axiom of Choice (and the Axiom of Dependent Choice through the upper-semicontinuity corollary), a field $k$, the base $S=\operatorname{Spec}k[a]$ with the projective line $X=\mathbb P^1_S$, its standard charts $U_0,U_1$ with coordinate $z$, and the glued rank-two bundle $\mathcal E$ of the statement.

[F1] Charts and sections: $X=\mathbb P^1_S$ is covered by the two affine charts $U_0$ and $U_1$ with $\mathcal O_X(U_0)=k[a,z]$, $\mathcal O_X(U_1)=k[a,z^{-1}]$ and $\mathcal O_X(U_0\cap U_1)=k[a,z,z^{-1}]$, where $z=x_1/x_0$ is a unit on the overlap; the global sections of the structure sheaf are $\mathcal O_X(X)=k[a]$, so inside $\mathcal O_X(U_0\cap U_1)$ one has $k[a,z]\cap k[a,z^{-1}]=k[a]$. The twisting sheaf $\mathcal O_X(1)$ is trivialised on $U_0$ by $x_0$ and on $U_1$ by $x_1$, with frame transition $e_1=z\,e_0$, so $\mathcal O_X(d)$ has transition frame $e_1=z^{d}e_0$ and $\mathcal O_X(-2)$ has transition $z^{-2}$. ([[def-relative-projective-space-standard-charts]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[thm-projective-space-as-proj]], [[def-twisting-sheaf-proj]], [[lem-standard-opens-proj-affine]], [[lem-proj-associated-sheaf-basic-sections]])

[F2] Gluing: a gluing datum $(\mathcal F_i,\varphi_{ij})$ for modules on an open cover of a ringed space glues to an $\mathcal O_X$-module $\mathcal F$ with isomorphisms $\mathcal F|_{U_i}\cong\mathcal F_i$ inducing the given $\varphi_{ij}$, unique up to unique isomorphism; sections of $\mathcal F$ over an open $W$ are the compatible families of sections of the $\mathcal F_i$ over $W\cap U_i$, and if every $\mathcal F_i$ is free of rank $r$ then $\mathcal F$ is locally free of rank $r$. ([[thm-gluing-sheaves]], [[def-gluing-datum-sheaves]], [[def-locally-free-sheaf-finite-rank]], [[def-module-on-ringed-space]])

[F3] Flatness: $k[a,z]$ and $k[a,z^{-1}]$ are free $k[a]$-modules, hence flat, and a free module over a commutative ring is flat; a free module over a ring which is flat over the base, localised at a prime, is flat over the corresponding local ring of the base. Consequently $\mathcal E$ is finitely presented as an $\mathcal O_X$-module and flat over $S$, and $X\to S$ is proper by [[thm-projective-space-proper-over-base]] and of finite presentation by its two polynomial charts and quasi-compact overlaps. Moreover the chart rings are Noetherian by [[lem-field-is-noetherian]] and [[cor-finite-variable-polynomial-ring-noetherian]]; hence the locally free finite-rank $\mathcal E$ is coherent by [[thm-coherent-sheaves-abelian-noetherian-scheme]]. ([[cor-free-modules-are-projective-and-flat]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-locally-free-sheaf-finite-rank]])

[F4] The fibre computation: for a field $\kappa$ and a scalar $\lambda\in\kappa$, let $N_\lambda$ be the module on $\mathbb P^1_\kappa$ obtained by gluing free rank-two modules with frames $(u_0,v_0)$ over $D_+(x_0)=\operatorname{Spec}\kappa[z]$ and $(u_1,v_1)$ over $D_+(x_1)=\operatorname{Spec}\kappa[z^{-1}]$ by $u_1=z^{-2}u_0$, $v_1=v_0+\lambda z^{-1}u_0$. Then $\dim_\kappa H^0(\mathbb P^1_\kappa,N_\lambda)=1$ if $\lambda=0$ and $0$ if $\lambda\ne0$. (Constructed in the proof from [F1] and [F2]; no separate library item.)

[F5] The extension cocycle: on $\mathbb P^1_k$ the class of $x_0^{-1}x_1^{-1}$ spans $H^1(\mathbb P^1_k,\mathcal O(-2))\cong k$, for every field $k$. Hence the Čech cocycle of the statement, whose value in the frame $u_0=x_0^{-2}$ of $\mathcal O_X(-2)|_{U_0}$ is $az^{-1}$, is $a$ times this generator on each fibre, and the fibre sequence is $0\to\mathcal O(-2)\to\mathcal E_u\to\mathcal O\to0$. The long exact sequence of this sequence is $0\to H^0(\mathcal O(-2))\to H^0(\mathcal E_u)\to H^0(\mathcal O)\xrightarrow{\delta_u}H^1(\mathcal O(-2))\to H^1(\mathcal E_u)\to0$, and $\delta_u(1)=a(u)\cdot[1/(x_0x_1)]$: the two standard affine charts and their intersection are acyclic for quasi-coherent sheaves, so Čech computes the long-exact connecting map by lifting $1$ on each chart and taking their difference, as calculated in step 1.2. ([[ex-cech-cocycle-projective-line-o-minus-two]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[thm-long-exact-sequence-sheaf-cohomology]], [[def-twisting-sheaf-proj]])

[F6] Upper semicontinuity: for a proper morphism of finite presentation with a coherent module flat over the base, $h^q(s)=\dim_{\kappa(s)}H^q(X_s,\mathcal F_s)$ is upper semicontinuous for every $q$; the corollary inherits the Axiom of Choice and the Axiom of Dependent Choice. ([[cor-upper-semicontinuity-cohomology-dimension]], [[def-axiom-of-choice]], [[def-dependent-choice]], [[def-residue-field-scheme-point]], [[def-sheaf-cohomology-derived-global-sections]])

## Proof

**Proof technique:** direct: build the rank-two bundle by gluing two free rank-two modules over the two standard charts with an invertible transition matrix, verify the sub-line-bundle and quotient, check flatness from the local freeness over the flat charts, and compute the global sections on each fibre by solving the two-chart gluing equations with power-series comparisons in the field's Laurent polynomial ring.

1.1 The gluing datum. On $U_0$ let $\mathcal F_0=\mathcal O_{U_0}^{\oplus2}$ with frame $u_0,v_0$ and on $U_1$ let $\mathcal F_1=\mathcal O_{U_1}^{\oplus2}$ with frame $u_1,v_1$. On the overlap, which is $D(z)\subseteq U_0$ mapped isomorphically to $D(z^{-1})\subseteq U_1$ by $z\leftrightarrow z^{-1}$ by [F1], define $\varphi_{10}:\mathcal F_0|_{U_0\cap U_1}\to\mathcal F_1|_{U_0\cap U_1}$ by $u_0\mapsto z^{2}u_1$ and $v_0\mapsto -a\,z\,u_1+v_1$, equivalently $u_1=z^{-2}u_0$, $v_1=v_0+az^{-1}u_0$. The matrix $\left(\begin{smallmatrix}z^{-2}&az^{-1}\\0&1\end{smallmatrix}\right)$ has determinant $z^{-2}$, a unit on the overlap, so $\varphi_{10}$ is an isomorphism; with $\varphi_{01}=\varphi_{10}^{-1}$ and $\varphi_{00}=\varphi_{11}=\operatorname{id}$, the cocycle condition is vacuous on a two-element cover. By [F2] the datum glues to an $\mathcal O_X$-module $\mathcal E$, locally free of rank two, with $\mathcal E|_{U_0}\cong\mathcal O_{U_0}^{\oplus2}$ in the frame $u_0,v_0$ and similarly over $U_1$. [F1, F2]

1.2 The sub-line-bundle and the quotient. The submodules $\mathcal O_{U_0}u_0$ and $\mathcal O_{U_1}u_1$ are identified by $\varphi_{10}$ because $u_0\mapsto z^2u_1$ and $z^{-2}u_0=u_1$, so by [F2] they glue to a rank-one submodule $\mathcal L\subseteq\mathcal E$ with $\mathcal L|_{U_0}=\mathcal O u_0$ and $\mathcal L|_{U_1}=\mathcal O u_1$; its transition is $u_1=z^{-2}u_0$, which by [F1] is the transition of $\mathcal O_X(-2)$, so $\mathcal L\cong\mathcal O_X(-2)$ (both are invertible modules glued from trivialisations with the same transition function, and they agree on the overlap identifications). Likewise the classes $\bar v_i$ of $v_i$ in the quotients glue with transition $\bar v_1=\bar v_0$, so the quotient $\mathcal E/\mathcal L$ is isomorphic to $\mathcal O_X$. Checking on the two charts, the kernel of $\mathcal E\to\mathcal O_X$ is exactly $\mathcal L$, so $0\to\mathcal O_X(-2)\to\mathcal E\to\mathcal O_X\to0$ is exact, and the extension cocycle with respect to $\{U_0,U_1\}$ is the off-diagonal entry $az^{-1}$ read in the frame $u_0=x_0^{-2}$ of $\mathcal O_X(-2)|_{U_0}$, that is, $a\,x_0^{-1}x_1^{-1}$. On a fibre over $u$, lift the global section $1$ of the quotient $\mathcal O$ by $v_0$ and $v_1$ on the two affine charts. Their overlap difference is $v_1-v_0=a(u)z^{-1}u_0$; the Čech comparison and class calculation of [F5] therefore give $\delta_u(1)=a(u)[1/(x_0x_1)]$ directly. [F1, F2, F5]

1.3 Flatness and finite presentation. By [F3] the coordinate rings $k[a,z]$, $k[a,z^{-1}]$ are free, hence flat, over $k[a]$, so the free modules $\mathcal E|_{U_0}\cong\mathcal O_{U_0}^{\oplus2}$ and $\mathcal E|_{U_1}\cong\mathcal O_{U_1}^{\oplus2}$ are flat over $S$ and finitely presented; flatness and finite presentation are local, so $\mathcal E$ is flat over $S$ and finitely presented, and $X\to S$ is proper of finite presentation since $\mathbb P^1_S\to S$ is projective. [F2, F3, 1.1]

1.4 Fibre sections. Fix $u\in S$ with residue field $\kappa=\kappa(u)$ and scalar $\lambda=a(u)\in\kappa$; the fibre $X_u=\mathbb P^1_\kappa$ has the two charts $\operatorname{Spec}\kappa[z]$, $\operatorname{Spec}\kappa[z^{-1}]$, the pullback $\mathcal E_u$ has the same gluing datum with $a$ replaced by $\lambda$, and, by [F4], $h^0(\mathcal E_u)=1$ when $\lambda=0$ and $h^0(\mathcal E_u)=0$ when $\lambda\ne0$. Indeed, a global section is given by $a_1(z)u_0+b_1(z)v_0$ on $U_0$ and $c_1(z^{-1})u_1+d_1(z^{-1})v_1$ on $U_1$ with $a_1,b_1\in\kappa[z]$, $c_1,d_1\in\kappa[z^{-1}]$; rewriting the $U_1$-expression in the frame of $U_0$ over the overlap and comparing coefficients gives $b_1=d_1$ and $a_1=z^{-2}c_1+\lambda z^{-1}b_1$. If $\lambda=0$ then $a_1=z^{-2}c_1$ with $a_1\in\kappa[z]$, $c_1\in\kappa[z^{-1}]$, which forces $c_1=a_1=0$, while $b_1=d_1\in\kappa[z]\cap\kappa[z^{-1}]=\kappa$ by [F1]; the solutions form the one-dimensional space spanned by the section restricting to $v_0$ and $v_1$. If $\lambda\ne0$ then $b_1=d_1=\beta\in\kappa$ by [F1], and $z^{2}a_1=(\lambda\beta)z+c_1$ is an equality in $\kappa[z,z^{-1}]$. Its coefficient of $z$ gives $\lambda\beta=0$ because the left side has only degrees at least $2$ and $c_1$ has only nonpositive degrees. Then $z^{2}a_1=c_1$ lies in $z^2\kappa[z]\cap\kappa[z^{-1}]=0$, so $a_1=c_1=0$: the only global section is zero. [F1, F4, 1.2]

1.5 The jump. The origin $(a)\in S$ has residue field $k$ and $\lambda=a((a))=0$, so $h^0(\mathcal E_{(a)})=1$ by 1.4 with basis the section restricting to $v_0$ and $v_1$; every other point $u\ne(a)$ has $a(u)\ne0$: if the corresponding prime contained $a$, it would contain the maximal ideal $(a)$ and therefore equal $(a)$; this covers closed points of arbitrary residue degree as well as the generic point — so $h^0(\mathcal E_u)=0$ by 1.4. Both assertions of the statement follow, and the fibres are $\mathbb P^1_{\kappa(u)}$. [1.1, 1.4]

2.1 Boundaries and consistency. The field $k$ is arbitrary, including $k=\mathbb F_2$; the special fibre is nonempty and $\mathcal E_{(a)}\cong\mathcal O(-2)\oplus\mathcal O$ there because the transition matrix is diagonal when $a=0$, consistent with $h^0=1$. Since $h^0$ takes the value $1$ at the origin and $0$ on the nonempty open complement $S\smallsetminus\{(a)\}$, the function is upper semicontinuous in the sense of [F6] and the example shows that the jump is an upward one at the origin, so the conclusion of [F6] cannot be improved to local constancy of $h^0$; the long exact sequence of [F5] gives the same kernel and cokernel description of the connecting map $\delta_u$ (multiplication by $a(u)$), so vanishing of the class at the origin is exactly the failure of the connecting map to be injective. The Axiom of Choice and the Axiom of Dependent Choice are inherited through [F6] and the gluing and cohomology suppliers of [F2], [F4] and [F5]; no further family is selected. [F2, F4, F5, F6, 1.1, 1.4, 1.5] ∎
