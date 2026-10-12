---
id: lem-gr-kinematic-decomposition-identities
kind: lemma
title: "Rest-space character of the kinematic fields and the double contraction of B"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-geodesic-congruence-and-kinematics, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-selected-connection, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
dependency_roles:
  def-gr-geodesic-congruence-and-kinematics: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the Weingarten map, its Riccati equation (6.4) and the definitions of expansion and shear, section 6.2 printed pp. 161-163"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic deviation equation for neighbouring observers, section 4.5 printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $n$ be a geodesic congruence with kinematic quantities $B$, $\theta$,
$\sigma$, $\omega$ and $h$ on $U$ as in
[[def-gr-geodesic-congruence-and-kinematics]], and write
$h^{ab}:=g^{ab}+n^an^b$. Then, everywhere on $U$:

**(a)** $n^aB_{ab}=0$ and $B_{ab}n^b=0$; hence $B$ takes values in the
rest-space bundle $n^{\perp}$ in both slots
([[def-gr-observer-and-rest-space]]).

**(b)** $h_{ab}n^b=0$, the restriction of $h$ to $n^{\perp}$ is positive
definite, $h^{ab}h_{bc}=\delta^a_c+n^an_c$, and $h_{ab}h^{ba}=3$.

**(c)** $\sigma_{ab}$ is symmetric and $h^{ab}\sigma_{ab}=0$;
$\omega_{ab}$ is antisymmetric; and
$B_{ab}=\tfrac13\theta\,h_{ab}+\sigma_{ab}+\omega_{ab}$.

**(d)** $B_{ab}B^{ba}=\tfrac13\theta^2+\sigma_{ab}\sigma^{ab}-\omega_{ab}\omega^{ab}$,
where all indices are raised with $g$; moreover
$\sigma_{ab}\sigma^{ab}\ge0$ and $\omega_{ab}\omega^{ab}\ge0$, the first
vanishing exactly when $\sigma=0$ and the second exactly when $\omega=0$.

## Facts & Assumptions

**Given:** A geodesic congruence $n$ on an open set $U$ with $\nabla_nn=0$, $g(n,n)=-1$, and the fields $B$, $h$, $\theta$, $\sigma$, $\omega$ of [[def-gr-geodesic-congruence-and-kinematics]].

[L1] $\nabla g=0$ and $\nabla$ commutes with contractions, so $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ for all smooth fields ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]]).

[L2] $n$ is future unit timelike with $\nabla_nn=0$ ([[def-gr-geodesic-congruence-and-kinematics]], [[def-gr-observer-congruence-and-adapted-charts]]).

[L3] Components and contractions are formed in any chart, and $g^{ab}$ is the inverse matrix of $g_{ab}$ with $g^{ac}g_{cb}=\delta^a_b$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-lorentzian-objects]]).

[L4] On the rest space $n_q^{\perp}=\{v:g_q(n_q,v)=0\}$ the form $g_q$ is positive definite, and a finite-dimensional real inner product space has an orthonormal basis ([[def-gr-observer-and-rest-space]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L5] For a smooth covariant $2$-tensor field $X$, $h^{ab}X_{ab}=h^{ab}X_{(ab)}$, since $h$ is symmetric ([[def-gr-smooth-lorentzian-objects]]).

## Proof

**Proof technique:** direct.

1.1 (Rest-space character.) $n^aB_{ab}=n^a\nabla_bn_a=\tfrac12\nabla_b(g(n,n))=0$ by [L1] and the unit condition $g(n,n)=-1$ in [L2]. Also $B_{ab}n^b=n^b\nabla_bn_a=(\nabla_nn)_a=0$ by the geodesic condition [L2]. This proves (a). [given, L1, L2, algebra]

2.1 (The rest-space metric field.) $h_{ab}n^b=g_{ab}n^b+n_an_bn^b=n_a+n_a(n^bn_b)=n_a-n_a=0$, since $n^bn_b=g(n,n)=-1$ [L2]. On $n^{\perp}$ the form $h$ agrees with $g$, hence is positive definite by [L4]. For the mixed identity, $h^{ab}h_{bc}=(g^{ab}+n^an^b)(g_{bc}+n_bn_c)=\delta^a_c+n^an_c+n^an_c-n^an_c=\delta^a_c+n^an_c$, where $g^{ab}n_b=n^a$, $g_{bc}n^b=n_c$ and $n^bn_b=-1$ were used [L3]. Contraction gives $h_{ab}h^{ba}=(g_{ab}+n_an_b)(g^{ba}+n^bn^a)=g_{ab}g^{ba}+g_{ab}n^bn^a+(n_an_b)g^{ba}+(n_an_b)(n^bn^a)=4+n^an_a+n_an^a+(n^an_a)^2=4-1-1+1=3$, alternatively from $h_{ab}h^{ba}=h_{ab}(g^{ba}+n^bn^a)=g_{ab}g^{ba}+n_an_bg^{ba}+h_{ab}n^bn^a=4-1+0=3$. This proves (b). [step 1.1, given, L2, L3, algebra]

3.1 (Decomposition, symmetry and traces.) $B_{ab}=B_{(ab)}+B_{[ab]}$, and substituting the definitions of $\sigma$ and $\omega$ gives $B_{ab}=\tfrac13\theta h_{ab}+\sigma_{ab}+\omega_{ab}$. Symmetry of $\sigma$ and antisymmetry of $\omega$ are immediate from the symmetrized and antisymmetrized definitions, and $h^{ab}\sigma_{ab}=h^{ab}B_{(ab)}-\tfrac13\theta h^{ab}h_{ab}=h^{ab}B_{ab}-\theta=0$, using [L5], step 2.1 and $g^{ab}B_{ab}=\theta$. This proves (c). [step 2.1, given, L3, L5, algebra]

4.1 (Double contraction in a rest-space frame.) Fix a point $q\in U$ and let $M$ be the matrix of $B$ in a $g$-orthonormal basis $e_1,e_2,e_3$ of $n_q^{\perp}$, whose existence is [L4]. Since $B$ is rest-space in both slots by (a), $B_{ab}B^{ba}=\sum_{i,j}M_{ij}M_{ji}=\operatorname{tr}(M^2)$. Write $M=\tfrac13\theta I+S+A$ with $S$ the symmetric traceless and $A$ the antisymmetric part, so that $S$ and $A$ are the matrices of $\sigma$ and $\omega$ in this basis. By cyclicity of the trace, $\operatorname{tr}(SA)=\operatorname{tr}((SA)^{\mathsf T})=\operatorname{tr}(A^{\mathsf T}S^{\mathsf T})=-\operatorname{tr}(AS)=-\operatorname{tr}(SA)$, so $\operatorname{tr}(SA)=0$; similarly $\operatorname{tr}(S)=0$ and $\operatorname{tr}(A)=0$ kill the mixed terms with $I$, and $\operatorname{tr}(I^2)=3$. Hence $\operatorname{tr}(M^2)=\tfrac13\theta^2+\operatorname{tr}(S^2)+\operatorname{tr}(A^2)=\tfrac13\theta^2+\sum_{i,j}(S_{ij})^2-\sum_{i,j}(A_{ij})^2$, and in the orthonormal rest basis the two sums are $\sigma_{ab}\sigma^{ab}$ and $\omega_{ab}\omega^{ab}$. This proves the displayed identity of (d). [step 3.1, L4, algebra]

5.1 (Signs and vanishing.) In the same orthonormal basis, $\sigma_{ab}\sigma^{ab}=\sum_{i,j}(S_{ij})^2\ge0$ with equality exactly when $S=0$, i.e. $\sigma=0$, and $\omega_{ab}\omega^{ab}=\sum_{i,j}(A_{ij})^2\ge0$ with equality exactly when $\omega=0$. Together with step 4.1 this completes the proof. [step 4.1, algebra] ∎

## Remarks

- **Conventions.** The factor $\tfrac13$ is the reciprocal of the dimension of the rest space in four spacetime dimensions; all contractions in the displayed identity use the Lorentzian metric $g$, and $h^{ab}=g^{ab}+n^an^b$ is the projection tensor, not the inverse matrix of the degenerate form $h_{ab}$.
- **Scope.** No Ricci or Einstein equation is used; the identities are purely kinematic.
