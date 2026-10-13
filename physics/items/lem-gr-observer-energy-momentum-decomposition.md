---
id: lem-gr-observer-energy-momentum-decomposition
kind: lemma
title: "The orthogonal observer decomposition of a symmetric two-tensor and its uniqueness"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, lem-gr-observer-projection-decomposition, lem-lorentz-form-has-orthonormal-basis, def-gr-tensor-fields-and-components, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 4.1.2: the 3+1 decomposition E = T(n,n), p = -T(n,gamma(.)) and S = gamma*T of the stress-energy tensor, printed p. 52 (PDF p. 52), and section 5.2.3, whose remark identifies p with the energy flux, printed p. 74 (PDF p. 74)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.107)-(1.110): the component reading of the stress-energy tensor in a rest frame, printed pp. 29-30 (PDF pp. 36-37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$U\subseteq M$ be a nonempty open subset, let $T$ be a smooth symmetric
covariant $2$-tensor field on $U$ and let $n$ be a smooth observer congruence on
$U$, and let $\mu$, $J$, $\Phi$, $S$ and $h$ be as in
[[def-gr-observer-energy-momentum-current]]. Then:

**(a) Smoothness and elementary properties.** $\mu$ is a smooth function, $J$
and $\Phi$ are smooth vector fields and $S$ is a smooth symmetric contravariant $2$-tensor
field on $U$; moreover

$$n_a\Phi^a=0,\qquad S^{ab}n_b=0,\qquad \mu=-J^an_a .$$

**(b) Orthogonal decomposition.** The identity of smooth tensor fields

$$T^{ab}=\mu\,n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab}$$

holds on $U$, together with the contraction identity
$T^{ab}n_a=-\mu n^b-\Phi^b$.

**(c) Uniqueness.** If $\mu'$ is a smooth function, $\Psi$ a smooth vector
field with $\Psi^an_a=0$ and $S'$ a smooth symmetric contravariant $2$-tensor field with
$S'^{ab}n_b=0$ on $U$, and if

$$T^{ab}=\mu'\,n^an^b+n^a\Psi^b+n^b\Psi^a+S'^{ab},$$

then $\mu'=\mu$, $\Psi=\Phi$ and $S'=S$.

**(d) Values on the rest space and frame components.** For every $p\in U$ and
every $v\in n_p^{\perp}$,

$$T_p(n_p,n_p)=\mu(p),\qquad T_p(n_p,v)=-g_p(\Phi_p,v),$$

The covariant tensor obtained by lowering both slots of $S_p$ is
$S^\flat_p(v,w):=S_p(g_p(v,\cdot),g_p(w,\cdot))$ for $v,w\in T_pM$, with
components $S^\flat_{ab}=g_{ac}g_{bd}S^{cd}$. The restrictions of $T_p$ and
$S^\flat_p$ to $n_p^{\perp}\times n_p^{\perp}$ agree. In every ordered $g_p$-orthonormal basis $(e_0,e_1,e_2,e_3)$ of $T_pM$
with $e_0=n_p$,

$$\mu(p)=T_{00}(p),\qquad \Phi^i(p)=T^{0i}(p)=-T_{0i}(p)\quad(i=1,2,3),$$

and $S^{ij}(p)=T^{ij}(p)$ for $i,j\in\{1,2,3\}$ while $S^{0a}(p)=0$. Finally
$g_{ab}S^{ab}=g_{ab}T^{ab}+\mu$.

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$, the open subset $U$, the smooth symmetric covariant $2$-tensor field $T$ on $U$, the smooth observer congruence $n$ on $U$, and the fields $\mu$, $J$, $\Phi$, $S$, $h$ of [[def-gr-observer-energy-momentum-current]].

[L1] Every $v\in T_pM$ has the unique decomposition $v=-g_p(v,n_p)n_p+h_p(v)$ with $h_p(v)\in n_p^{\perp}$; $h_p$ is linear, $h_p\circ h_p=h_p$, its kernel is $\mathbb Rn_p$, its image is $n_p^{\perp}$, and $g_p(h_p(v),h_p(w))=g_p(v,w)+g_p(v,n_p)g_p(n_p,w)$ ([[lem-gr-observer-projection-decomposition]], [[def-gr-observer-and-rest-space]]).

[L2] The fields $n$, $g$, $g^{-1}$ and $T$ are smooth, and a tensor field defined from them by the standard index operations and pointwise contractions is smooth: its chart components are obtained from the smooth component functions of $n$, $g$, $g^{-1}$ and $T$ by sums of products, and raising and lowering are the contractions $g^{ac}g^{bd}T_{cd}$ and $g_{ac}g_{bd}X^{cd}$ with the smooth inverse-metric components ([[def-gr-tensor-fields-and-components]], [[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] $g_p(n_p,n_p)=-1$ at every $p\in U$ ([[def-gr-observer-and-rest-space]], [[def-gr-observer-congruence-and-adapted-charts]]).

[L4] The inverse-metric components satisfy $g^{ac}g_{cb}=\delta^a{}_b$; raising and lowering an index with $g^{-1}$ and $g$ are inverse linear operations on each tensor slot ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L5] At every $p\in U$ there is a $g_p$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $T_pM$; when $e_0=n_p$ it satisfies $g_p(e_0,e_0)=-1$ and $g_p(e_i,e_j)=\delta_{ij}$ for $i,j\in\{1,2,3\}$, and the components of a tensor in that basis are its contractions with the dual basis ([[lem-lorentz-form-has-orthonormal-basis]], [[def-gr-smooth-lorentzian-objects]], [[def-gr-tensor-fields-and-components]]).

## Proof

**Proof technique:** direct; compute the projections of the tensor in index form, read off the four pieces, and prove uniqueness by contracting the putative decomposition against $n$ and its orthogonal complement.

1.1 (Smoothness and the elementary identities.) Writing components in a chart, $\mu=T_{ab}n^an^b$ is a sum of smooth products, and $J^a=-g^{ab}T_{bc}n^c$ is a sum of smooth products; hence both are smooth, and $\Phi=J-\mu n$ and $S^{ab}=h^a{}_ch^b{}_dT^{cd}$ are smooth by [L2]; symmetry of $T^{cd}$ gives symmetry of $S^{ab}$ by interchanging the two contracted indices. The field $h$ of [[def-gr-observer-energy-momentum-current]] has $h^a{}_bn^b=n^a+n^a(n\cdot n)=0$ and $n_a h^a{}_b=n_b+(n_a n^a)n_b=0$ by [L3], so $n_a\Phi^a=n_aJ^a-\mu(n\cdot n)=n_aJ^a+\mu$ and $S^{ab}n_b=h^a{}_c(n_bh^b{}_d)T^{cd}=0$; finally $n_aJ^a=-T^{ab}n_an_b=-\mu$. [L1, L2, L3, L4, algebra]

2.1 (The decomposition.) Expanding $h^a{}_c=\delta^a{}_c+n^an_c$ and $h^b{}_d=\delta^b{}_d+n^bn_d$ in $S^{ab}=h^a{}_ch^b{}_dT^{cd}$ gives $S^{ab}=T^{ab}+n^aT^{cb}n_c+n^bT^{ad}n_d+n^an^bT^{cd}n_cn_d=T^{ab}-n^aJ^b-n^bJ^a+\mu\,n^an^b$, using $T^{cb}n_c=-J^b$, $T^{ad}n_d=-J^a$ and $T^{cd}n_cn_d=\mu$. Substituting $J=\mu n+\Phi$ and solving for $T^{ab}$ gives $$T^{ab}=\mu\,n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab},$$ because $n^a(\mu n^b+\Phi^b)+n^b(\mu n^a+\Phi^a)-\mu n^an^b=\mu n^an^b+n^a\Phi^b+n^b\Phi^a$. Contracting this identity with $n_a$ and using [L3] gives $T^{ab}n_a=-\mu n^b-\Phi^b$, since $n_a\Phi^a=0$ and $n_an^a=-1$. [step 1.1, L3, L4, algebra]

3.1 (Uniqueness.) Let $\mu',\Psi,S'$ be as in (c). Contracting the assumed decomposition with $n_an_b$ kills every term containing $\Psi$ (because $\Psi^an_a=0$) or $S'$ (because $S'^{ab}n_b=0$) and gives $\mu'=T^{ab}n_an_b=\mu$ by [L3]. Contracting with $n_a$ alone and using $n_an^a=-1$ gives $T^{ab}n_a=-\mu'n^b-\Psi^b$, so $\Psi^b=-T^{ab}n_a-\mu'n^b=J^b-\mu n^b=\Phi^b$, where $-T^{ab}n_a=J^b$ is the definition of $J$ and $\Phi=J-\mu n$. Solving the decomposition for $S'$ now gives $S'^{ab}=T^{ab}-\mu n^an^b-n^a\Phi^b-n^b\Phi^a=S^{ab}$ by step 2.1. [step 1.1, step 2.1, L3, L4, algebra]

4.1 (Rest-space values and frame components.) By definition $\mu=T(n,n)$. For $v\in n_p^{\perp}$, step 2.1 gives $T_p(n_p,v)=T^{ab}n_av_b=(-\mu n^b-\Phi^b)v_b=-g_p(\Phi_p,v)$, since $n^bv_b=0$. For $v,w\in n_p^{\perp}$, contract the decomposition of step 2.1 with $v_aw_b$, where $v_a=g_{ac}v^c$ and $w_b=g_{bd}w^d$. Every term containing $n^a$ or $n^b$ vanishes, giving $T_p(v,w)=S^{ab}v_aw_b=S^\flat_p(v,w)$. In an orthonormal basis with $e_0=n_p$, [L5] gives $n^a=\delta^a_0$ and $n_a=-\delta^0_a$, so $h^0{}_b=\delta^0_b+n^0n_b=\delta^0_b-\delta^0_b=0$ and $h^i{}_b=\delta^i_b$; consequently $S^{0a}=0$, $S^{ij}=T^{ij}$ and $\Phi^i=J^i-\mu n^i=J^i=-T^{ib}n_b=-T^{i0}n_0=T^{i0}=-T_{0i}$, while $\mu=T_{00}$. Contracting the decomposition with $g_{ab}$ gives $g_{ab}S^{ab}=g_{ab}T^{ab}-\mu(n\cdot n)-2g(n,\Phi)=g_{ab}T^{ab}+\mu$; that is, $g_{ab}S^{ab}=g_{ab}T^{ab}+\mu$. [step 2.1, L3, L4, L5, algebra] ∎

## Remarks

- **Minimal hypotheses.** Only symmetry of $T$ and the congruence property
  $g(n,n)=-1$ are used; no equation of
  motion enters the pointwise algebraic decomposition; smoothness of the
  fields uses the smooth inputs and inverse metric in [L2]. The sign
  convention is $J=-\sharp(T(n,\cdot))$ and $T(n,v)=-g(\Phi,v)$ on the rest
  space.

- **Origin of the names.** The names measured energy density, energy flux and
  stress are attached to $\mu$, $\Phi$ and $S$ only through the framework's
  physical reading on this page; this lemma proves the algebraic identities
  alone.
