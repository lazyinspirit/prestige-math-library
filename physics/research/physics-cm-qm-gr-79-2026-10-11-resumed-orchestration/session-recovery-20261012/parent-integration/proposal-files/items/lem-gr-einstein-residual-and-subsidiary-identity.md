---
id: lem-gr-einstein-residual-and-subsidiary-identity
kind: lemma
title: "The Einstein residual through the gauge vector, and the subsidiary wave equation satisfied by the gauge vector"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-second-bianchi-and-divergence-free-einstein, lem-gr-contracted-commutator-identity, def-gr-inverse-metric-and-musical-isomorphisms, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
  lem-gr-contracted-commutator-identity: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 2.4 (The Evolution Equations): the splitting of the field equations into evolution and constraint parts, gauge source functions and the harmonically reduced field equations (2.39), and the subsidiary system obtained from their divergence"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, let $\bar g$ be a smooth background
metric, let $H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$ be the
harmonic-gauge vector and let $E_{ab}=G_{ab}+\Lambda g_{ab}-\kappa T_{ab}$ be
the Einstein residual of a smooth symmetric tensor $T$
([[def-gr-harmonic-gauge-and-reduced-equations]]). Then:

**(a)** On every open set where $(g,T)$ solves the reduced Einstein equation, the identity
$$E_{ab}=\tfrac12\bigl(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c\bigr)$$
holds on that set; and

**(b)** if $(g,T)$ solves the reduced Einstein equation on an open set $U$ and
$\nabla^aT_{ab}=0$ on $U$, then the gauge vector satisfies the homogeneous
linear wave equation
$$\Box_gH_b+\operatorname{Ric}_{ba}H^a=0\qquad\text{on }U,$$
where $\Box_gH_b=\nabla^a\nabla_aH_b$.

## Facts & Assumptions
**Given:** the manifold and connection, the metrics $g,\bar g$, the gauge vector $H$, the constants $\Lambda,\kappa$, the tensor $T$ and the residual $E$.

[L1] Trace of the reduced equation: if $(g,T)$ solves $\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}=\kappa(T_{ab}-\tfrac12Tg_{ab})+\Lambda g_{ab}$, then $S-\nabla_cH^c=-\kappa T+4\Lambda$ with $S=g^{ab}\operatorname{Ric}_{ab}$ and $T=g^{ab}T_{ab}$ ([[def-gr-harmonic-gauge-and-reduced-equations]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] Contracted second Bianchi identity: $\nabla^aG_{ab}=0$ ([[thm-gr-second-bianchi-and-divergence-free-einstein]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L3] Commutator identity: $\nabla^a\nabla_bH_a-\nabla_b\nabla^aH_a=R_{ba}H^a$, with $R_{ba}$ the Ricci tensor in the framework's sign convention ([[lem-gr-contracted-commutator-identity]]).

[L4] Metric compatibility: $\nabla^ag_{ab}=0$, and $\nabla$ is torsion-free and compatible with $g$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).



## Proof

**Proof technique:** direct.

1.1 (The residual identity (a).) Substituting the reduced equation into the definition of $E$ and using the trace identity [L1]: $E_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}+\Lambda g_{ab}-\kappa T_{ab}=\nabla_{(a}H_{b)}+\kappa(T_{ab}-\tfrac12Tg_{ab})+\Lambda g_{ab}-\tfrac12Sg_{ab}+\Lambda g_{ab}-\kappa T_{ab}=\nabla_{(a}H_{b)}-\tfrac12(\nabla^cH_c)g_{ab}$, because $S=\nabla^cH_c-\kappa T+4\Lambda$ and the $\kappa T$, $\Lambda$ terms cancel in pairs ($-\tfrac12\kappa Tg_{ab}-\tfrac12(-\kappa T)g_{ab}=0$ and $\Lambda g_{ab}+\Lambda g_{ab}-\tfrac12\cdot4\Lambda g_{ab}=0$). Since $\nabla_{(a}H_{b)}-\tfrac12(\nabla^cH_c)g_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla^cH_c)$, this is (a). [L1, algebra]

1.2 (Vanishing of the same divergence.) By definition $E=G+\Lambda g-\kappa T$ and [L2], [L4] give $\nabla^aE_{ab}=0+\Lambda\nabla^ag_{ab}-\kappa\nabla^aT_{ab}=-\kappa\nabla^aT_{ab}=0$ on $U$ by the on-shell conservation hypothesis. [L2, L4, algebra]

2.1 (Divergence of the residual.) Take the divergence of (a): $\nabla^aE_{ab}=\tfrac12\bigl(\nabla^a\nabla_aH_b+\nabla^a\nabla_bH_a-\nabla_b\nabla^cH_c\bigr)=\tfrac12\bigl(\Box_gH_b+R_{ba}H^a\bigr)$, where the last equality uses the commutator identity [L3] in the form $\nabla^a\nabla_bH_a-\nabla_b\nabla_cH^c=R_{ba}H^a$ (with [L4] to raise the index freely). [step 1.1, L3, L4, algebra]

3.1 (Conclusion (b).) Comparing steps 2.1 and 1.2 gives $\Box_gH_b+R_{ba}H^a=0$ on $U$. [step 2.1, step 1.2, algebra] ∎



## Remarks

- **Role.** Clause (b) is the subsidiary equation whose zero Cauchy data force the harmonic gauge to persist; the Cauchy data are computed in [[thm-gr-harmonic-constraint-propagation]].
