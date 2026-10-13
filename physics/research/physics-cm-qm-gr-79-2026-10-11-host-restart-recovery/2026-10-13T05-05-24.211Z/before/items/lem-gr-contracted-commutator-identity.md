---
id: lem-gr-contracted-commutator-identity
kind: lemma
title: "The commutator of covariant derivatives on a vector field and its contracted component identity"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, thm-gr-point-normal-and-exponential-coordinate-charts, def-christoffel-symbols-of-an-affine-connection]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the commutator of covariant derivatives (3.65)-(3.66) and the Riemann tensor (3.67), printed pp. 75-76 (PDF pp. 82-83)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the Ricci identity and the Bianchi identities, sections 4.2-4.6 printed pp. 41-49 (PDF pp. 42-50)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the Riccati equation (6.4) for the Weingarten map of a hypersurface-orthogonal congruence, derived from the curvature commutator, section 6.2 printed pp. 161-163"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ and curvature $R$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). For a smooth vector field
$Z$ let $A$ be the smooth $(1,1)$-tensor field $A^a{}_b:=\nabla_bZ^a$ and
let $B:=\nabla A$ be its covariant derivative, $B^a{}_{bc}:=\nabla_bA^a{}_c$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] for the
extension of $\nabla$ to tensor fields).

**(a)** For all smooth vector fields $Z$ and all indices,
$$B^a{}_{bc}-B^a{}_{cb}=R^a{}_{dbc}Z^d .$$

**(b)** Contracting the first index with the second lower index,
$$B^a{}_{ab}-B^a{}_{ba}=\operatorname{Ric}_{bd}Z^d .$$

**(c)** For all smooth vector fields $V,Z$,
$$V^c\nabla_c(\nabla_aZ^a)=\nabla_a\bigl(V^c\nabla_cZ^a\bigr) -(\nabla_aV^c)(\nabla_cZ^a)-\operatorname{Ric}_{cd}V^cZ^d ,$$
where $\nabla_aW^a$ denotes the divergence of a vector field and
$\nabla_a(V^c\nabla_cZ^a)$ is the divergence of the vector field
$W^a:=V^c\nabla_cZ^a$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, curvature and Ricci tensor, and smooth vector fields $V,Z$.

[L1] The curvature operator is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and its components satisfy $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$; the Christoffel symbols are characterized by $\nabla_{\partial_b}\partial_a=\Gamma^e{}_{ab}\partial_e$ and satisfy $\Gamma^e{}_{ab}=\Gamma^e{}_{ba}$ ([[def-gr-curvature-tensor-and-derived-tensors]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]]).

[L2] The extension of $\nabla$ to tensor fields is determined by the Leibniz rule and commutation with contractions. With $B^a{}_{bc}:=\nabla_bA^a{}_c$, its components are $B^a{}_{bc}=\partial_bA^a{}_c+\Gamma^a{}_{bd}A^d{}_c-\Gamma^d{}_{bc}A^a{}_d$. The curvature tensor and its contractions are smooth tensor fields, and the Ricci tensor satisfies $\operatorname{Ric}_{bd}=R^a{}_{bad}$ and $\operatorname{Ric}_{bd}=\operatorname{Ric}_{db}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]], [[thm-gr-curvature-algebraic-symmetries]], [[def-gr-curvature-tensor-and-derived-tensors]]). Here $\operatorname{Ric}_{bd}=R^a{}_{bad}$ follows by raising the first index in the defining formula $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$ and comparing with clause (a) of the definition of the curvature components.

[L3] In a point-normal chart at $p$ one has $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]]).

## Proof

**Proof technique:** direct.

1.1 (The uncontracted identity.) Both sides of (a) are components of smooth tensor fields, so it suffices to verify the identity at an arbitrary point $p$. Take a point-normal chart at $p$ as in [L3]. There $A^a{}_c(p)=\partial_cZ^a(p)$. From [L2] and $\Gamma(p)=0$, $B^a{}_{bc}(p)=\partial_b\partial_cZ^a(p)+\partial_b\Gamma^a{}_{cd}(p)Z^d(p)$. The second derivatives of $Z$ cancel after antisymmetrizing, giving $B^a{}_{bc}(p)-B^a{}_{cb}(p)=\bigl(\partial_b\Gamma^a{}_{cd}(p)-\partial_c\Gamma^a{}_{bd}(p)\bigr)Z^d(p)$. By [L1], the coordinate formula for $R(\partial_b,\partial_c)\partial_d$ is $R^a{}_{dbc}=\partial_b\Gamma^a{}_{cd}-\partial_c\Gamma^a{}_{bd}+\Gamma^e{}_{cd}\Gamma^a{}_{be}-\Gamma^e{}_{bd}\Gamma^a{}_{ce}$. At $p$ its quadratic terms vanish, so its coefficient is exactly the one above. Thus $B^a{}_{bc}-B^a{}_{cb}=R^a{}_{dbc}Z^d$ at $p$ and hence everywhere, proving (a). [given, L1, L2, L3, algebra]

2.1 (The contracted identity.) Set the first index equal to the second lower index in (a) and sum, as the Einstein convention of [[def-gr-smooth-lorentzian-objects]] prescribes: $B^a{}_{ab}-B^a{}_{ba}=R^a{}_{dab}Z^d$. By [L2], $\operatorname{Ric}_{db}=R^a{}_{dab}$ (relabel $\operatorname{Ric}_{bd}=R^a{}_{bad}$ by exchanging the free indices), and $\operatorname{Ric}_{db}=\operatorname{Ric}_{bd}$, so $B^a{}_{ab}-B^a{}_{ba}=\operatorname{Ric}_{bd}Z^d$, which is (b). [step 1.1, L2, algebra]

3.1 (The operational form.) Let $\theta_Z:=\nabla_aZ^a=A^a{}_a$ be the divergence of $Z$, a smooth function. By [L2] the covariant derivative of a contraction is the contraction of the derivative, so $\nabla_c\theta_Z=\nabla_c(A^a{}_a)=B^a{}_{ca}$. By (b) with the free index $b$ renamed to $c$, $B^a{}_{ac}-B^a{}_{ca}=\operatorname{Ric}_{cd}Z^d$, hence $B^a{}_{ca}=B^a{}_{ac}-\operatorname{Ric}_{cd}Z^d=\nabla_aA^a{}_c-\operatorname{Ric}_{cd}Z^d=\nabla_a(\nabla_cZ^a)-\operatorname{Ric}_{cd}Z^d$, where the last step uses the definition $B^a{}_{ac}=\nabla_aA^a{}_c$ and $A^a{}_c=\nabla_cZ^a$. Multiplying by $V^c$ and using the Leibniz rule for the contracted product, $V^c\nabla_a(\nabla_cZ^a)=\nabla_a\bigl(V^c\nabla_cZ^a\bigr)-(\nabla_aV^c)(\nabla_cZ^a)$. Substituting this and the Ricci term into $V^c\nabla_c\theta_Z$ gives the displayed identity of (c), which completes the proof. [step 2.1, L2, algebra] ∎

## Remarks

- **Conventions.** The signs and the order of the curvature indices are those of [[def-gr-curvature-tensor-and-derived-tensors]]; with the opposite convention for $R$ the sign of the Ricci term reverses. The identity is used in the Raychaudhuri equation in the form (c) with $V=Z=n$.
