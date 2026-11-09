---
id: lem-author-2ac325480ae8-slice-localization
kind: lemma
title: Restriction to the slice commutes with big-site localization
status: draft
domain: mathematics
deps:
  - lem-author-2ac325480ae8-slice-site
dependency_roles:
  lem-author-2ac325480ae8-slice-site: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
With the sites and conventions of [[lem-author-2ac325480ae8-slice-site]], there is a canonical natural equivalence $j^*L_{\mathcal C}P\simeq L_{\mathcal C/U}(j^*P)$ for every complex-valued presheaf $P$. It identifies the restriction of the ambient localization unit with the slice localization unit. The same argument works for hyperdescent localization if that convention is chosen on both sites; no equivalence between ordinary and hypercomplete localization is needed here.

## Facts & Assumptions
[F1] [[lem-author-2ac325480ae8-slice-site]] gives the actual sites and preservation of sheaves by $j^*,j_*$.

[F2] Sheafification is the reflective localization of presheaves into sheaves: a map is a local equivalence precisely when mapping it into every sheaf gives an equivalence of mapping spaces.

## Proof
**Given:** $P$ on $\mathcal C$.

**Goal:** Prove localization compatibility, including the actual units.

1.1 The formulas in [F1] give an adjunction $j^*\dashv j_*$. Explicitly, a map $j^*P\to Q$ yields $P(V)\to P(V\times_SU)\to Q(V\times_SU\to U)$. In the other direction, evaluate $P\to j_*Q$ at $V$ and restrict $Q$ along the graph $(\operatorname{id},f):V\to V\times_SU$ for each $(V,f)$. Naturality and the projection–graph identities make these constructions inverse, coherently; equivalently the forgetful functor on scheme categories has right adjoint $V\mapsto V\times_SU$, and the functor-category adjunction is the induced one. Hence this is an adjunction of mapping spaces, not just of isomorphism classes. [F1, construct]

2.1 If $v:P\to P^{\prime}$ is a local equivalence on $\mathcal C$ and $Q$ is any slice sheaf, then $j_*Q$ is a sheaf by [F1]. The adjunction gives $\operatorname{Map}(j^*P^{\prime},Q)\simeq\operatorname{Map}(P^{\prime},j_*Q)\simeq\operatorname{Map}(P,j_*Q)\simeq\operatorname{Map}(j^*P,Q)$. Thus $j^*v$ is a local equivalence. [F1, F2, step 1.1]

3.1 Apply this to the localization unit $P\to L_{\mathcal C}P$. Its restriction is a local equivalence, and its target is a slice sheaf by [F1]. The universal property in [F2] identifies it with the slice localization unit. The resulting equivalence is canonical and natural in $P$, so it transports natural maps as well as objects. For hyperdescent, pullback preserves hypercovers and the same descent/adjunction argument applies verbatim. [F1, F2, step 2.1] ∎
