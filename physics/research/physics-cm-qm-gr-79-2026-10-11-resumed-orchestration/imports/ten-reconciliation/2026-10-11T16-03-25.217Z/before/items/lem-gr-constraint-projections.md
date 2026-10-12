---
id: lem-gr-constraint-projections
kind: lemma
title: "The normal and normal-tangential projections of the field equation are the constraint equations"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-spacelike-initial-data-and-constraints, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-embedded-submanifold-and-slice-chart]
dependency_roles:
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the Hamiltonian and momentum constraints obtained by projecting the Einstein equation on the normal and tangential directions of the initial surface, section 10.4 printed p. 123 (PDF p. 124)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): projection of the Einstein equation with respect to the normal and the hypersurface, sections 4.1-4.2 printed pp. 51-59; the Hamiltonian and momentum constraint equations, section 4.4.3 printed p. 64"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the initial value formulation and the constraint equations, printed pp. 122-124 (PDF pp. 129-131)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let $T$ be a
smooth symmetric covariant $2$-tensor field on $M$
([[def-gr-smooth-covariant-two-tensor-field]]), let $\kappa,\Lambda\in\mathbb R$
and let $G$ be the Einstein tensor of the metric-selected connection
([[def-gr-curvature-tensor-and-derived-tensors]]). Suppose that the field
equation
$$G+\Lambda g=\kappa T$$
holds at every point of $M$. Let $\Sigma\subseteq M$ be a spacelike embedded
hypersurface with future unit normal field $n$, induced metric $h$ and second
fundamental form $K$, and let $\rho:=T(n,n)$ and $j(V):=-T(n,V)$ for
$V\in T_p\Sigma$, $p\in\Sigma$, be the matter data of
[[def-gr-spacelike-initial-data-and-constraints]] clause (b). Then:

**(a)** The tuple $(\Sigma,h,K,\rho,j)$ satisfies the constraint equations
for $(\kappa,\Lambda)$ in the sense of
[[def-gr-spacelike-initial-data-and-constraints]] clause (b),
$$G(n,n)-\Lambda=\kappa\,\rho,\qquad G(n,V)=\kappa\,T(n,V) \quad\text{for every }V\in T_p\Sigma,\ p\in\Sigma;$$
equivalently $G(n,V)=-\kappa\,j(V)$ on $\Sigma$.

**(b)** The fields $\rho$ and $j$ are smooth on $\Sigma$: in every slice chart
their expressions in the slice coordinates are $C^\infty$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, a smooth symmetric field $T$, constants $\kappa,\Lambda$, a spacelike embedded hypersurface $\Sigma$ with data $(h,K,\rho,j)$ of the definition, and a smooth vector field $V$ tangent to $\Sigma$ at the point under consideration.

[L1] The Einstein tensor is $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12S\,g_{ab}$, a smooth covariant $2$-tensor field on $M$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] The future unit normal $n$ of $\Sigma$ is smooth along $\Sigma$ and satisfies $g(n,n)=-1$ with $g_p(n_p,N_p)<0$; the induced metric $h$ and the second fundamental form $K$ of [[def-gr-spacelike-initial-data-and-constraints]] clause (a) are as constructed there ([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]] clauses (a)-(c), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

[L3] A covariant $2$-tensor field is a family of bilinear maps varying smoothly in charts; evaluating it on smooth vector fields (or on one smooth field twice) therefore gives a smooth function, and $T$ is symmetric ([[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-smooth-lorentzian-objects]]).

[L4] For every $p\in\Sigma$ the equation $G+\Lambda g=\kappa T$ holds at $p$; both sides are evaluated on pairs of vectors of $T_pM$, so equality is preserved under evaluation on any pair ([[def-gr-curvature-tensor-and-derived-tensors]], given).

[L5] In a slice chart $(U,y)$ with $\Sigma\cap U=\{y^4=0\}$, the restriction of $n$ to $\Sigma\cap U$ is expressible in the slice coordinates $y^1,y^2,y^3$ with $C^\infty$ coefficients, because the local extension $\tilde n$ of [L2] has $C^\infty$ components in $y$ and is evaluated at $y^4=0$ ([[def-embedded-submanifold-and-slice-chart]]).

## Proof

**Proof technique:** direct.

1.1 (Normal projection.) Let $p\in\Sigma$ and evaluate the field equation at $p$ on the pair $(n_p,n_p)$, an evaluation of the smooth covariant $2$-tensor field $G$ of [L1]; by [L4] and [L3], $G(n_p,n_p)+\Lambda\,g_p(n_p,n_p)=\kappa T(n_p,n_p)$. By [L2], $g_p(n_p,n_p)=-1$, and $T(n_p,n_p)=\rho(p)$ by the definition of $\rho$; hence $G(n_p,n_p)-\Lambda=\kappa\rho(p)$. [given, L2, L3, L4]

1.2 (Normal-tangential projection.) Let $p\in\Sigma$ and $V\in T_p\Sigma$, and evaluate the field equation at $p$ on the pair $(n_p,V)$; by [L4] and [L3], $G(n_p,V)+\Lambda\,g_p(n_p,V)=\kappa T(n_p,V)$. By [L2], $V$ is tangent to $\Sigma$ and $n_p$ is normal, so $g_p(n_p,V)=0$; hence $G(n_p,V)=\kappa T(n_p,V)=-\kappa\,j(V)$ by the definition of $j$. [given, L2, L3, L4]

2.1 (Conclusion for the constraints.) Steps 1.1 and 1.2 give the two displays of clause (a) for arbitrary $p\in\Sigma$ and $V\in T_p\Sigma$, which is exactly the condition defining that $(\Sigma,h,K,\rho,j)$ satisfies the constraint equations in [[def-gr-spacelike-initial-data-and-constraints]] clause (b). [step 1.1, step 1.2, given]

3.1 (Smoothness of the matter data.) In a slice chart $(U,y)$ as in [L5], the components $n^a$ of the normal, the components $g_{ab}$ of the metric and the components $T_{ab}$ of the stress-energy field are $C^\infty$ functions of $(y^1,y^2,y^3)$ on $\Sigma\cap U$; hence $\rho=T_{ab}n^an^b$ and $j(V)=-$ the corresponding contraction of $T$ with $n$ and $V$ have $C^\infty$ coordinate expressions in the slice coordinates, for every smooth tangent vector field $V$ on $\Sigma$. Since the slice charts cover $\Sigma$, $\rho$ is a smooth function on $\Sigma$ and $j$ a smooth field on $\Sigma$ (a covariant $1$-tensor field in the sense of the restriction to $\Sigma$ of the formulas above). This is (b) and completes the proof. [step 1.1, step 1.2, given, L3, L5] ∎

## Remarks

- **What is and is not claimed.** The lemma is a two-line evaluation identity: it says that a solution of the field equation on the ambient manifold has data satisfying the constraint equations. It does not prove that arbitrary data satisfying the constraints admit a development, and it does not derive the equivalent form of the constraints in terms of the induced scalar curvature and the divergence of $K$; that form requires the Gauss-Codazzi relations and is deferred with the PDE treatment.
- **Smoothness.** Clause (b) records that the matter data are genuine smooth fields on $\Sigma$, which is what the definition asserts; the proof reads the components in slice charts and uses smoothness of $n$ from the normal lemma.
