---
id: lem-qftx-free-weyl-functoriality
kind: lemma
title: Green morphisms induce algebraic Weyl maps
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-countable-choice
  - def-gr-causal-curves-and-reachability
  - def-gr-smooth-lorentzian-objects
  - def-qftx-free-weyl-net
  - def-qftx-green-hyperbolic-interface
  - lem-qftx-green-propagator-symplectic-quotient
  - lem-qftx-compact-green-support-overlap
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-qftx-free-weyl-net: mathematical-premise
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise
  lem-qftx-compact-green-support-overlap: mathematical-premise
  lem-manifold-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 4 §4.3, Lemmas 4.3.5–4.3.8, compatibility and induced symplectic maps, printed pp. 127–130.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.2, equations (31)–(33), the Weyl relations and their dependence on the symplectic quotient, printed pp. 17–18.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice and let $\iota:U\to M$ be an admissible Green-background morphism of [[def-qftx-free-weyl-net]], with Green data of [[def-qftx-green-hyperbolic-interface]]. The extension map $[f]\mapsto[\iota_*f]$ is a well-defined real symplectic linear map $S_\iota:V(U)\to V(M)$. The generator assignment $W_U(v)\mapsto W_M(S_\iota v)$ extends to a unital $*$-homomorphism $\alpha_\iota:\mathfrak W(U)\to\mathfrak W(M)$, and identity and composition of admissible embeddings are preserved. For every open $O\subseteq U$, the map also sends $\mathfrak W_U(O)$ into $\mathfrak W_M(\operatorname{im}(\iota|_O))$.

## Statement references

[[def-qftx-free-weyl-net]]

[[def-qftx-green-hyperbolic-interface]]

## Functoriality diagram

For composable admissible embeddings, the two paths send each generator $W_{M_1}(v)$ to $W_{M_3}(S_{\jmath\circ\iota}v)$; the equality is checked algebraically below, independently of the diagram.

```tikzcd
\mathfrak W(M_1) \arrow[r,"\alpha_{\iota}"] \arrow[dr,"\alpha_{\jmath\circ\iota}"'] & \mathfrak W(M_2) \arrow[d,"\alpha_{\jmath}"] \\
& \mathfrak W(M_3)
```

## Facts & Assumptions

**Given:** Green-data backgrounds $U,M$, an admissible embedding $\iota:U\to M$, and real test functions $f,h$ on $U$.

[A1] Assume Countable Choice as stated in [[def-countable-choice]] for the time-oriented Lorentzian background data.

[F1] [[def-qftx-green-hyperbolic-interface]]: $E_\pm$ obey $PE_\pm f=E_\pm Pf=f$, have respectively future and past causal support. The definition supplies formal self-adjointness but does not assert Green-map uniqueness; the needed uniqueness is proved below.

[F2] [[lem-qftx-green-propagator-symplectic-quotient]]: $V(M)=\mathcal D_g(M)/P\mathcal D_g(M)$ carries the well-defined symplectic form $\sigma_M([f],[h])=\int_M f(E_Mh)\,\mu_{g_M}$, and likewise on $U$.

[F3] [[def-qftx-free-weyl-net]]: $W(v)W(w)=e^{-i\sigma(v,w)/2}W(v+w)$, $W(v)^*=W(-v)$, and $W(0)$ is the unit.

[F4] [[def-qftx-free-weyl-net]]: an admissible embedding is causally convex, isometric, preserves orientation and time orientation, and intertwines the scalar operators; its test map is extension by zero.

[F5] [[lem-qftx-compact-green-support-overlap]]: the closed overlap of a future-supported smooth function over a compact set and a past-supported smooth function over a compact set is compact under Countable Choice.

[F6] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies a compactly supported smooth cutoff equal to one near such an overlap.

## Proof

1.1 First the displayed Weyl relations define an associative unital $*$-algebra on the finite formal sums. For $v,w,z\in V(M)$, the exponent in $(W(v)W(w))W(z)$ is $-\tfrac i2(\sigma(v,w)+\sigma(v+w,z))$, whereas the exponent in $W(v)(W(w)W(z))$ is $-\tfrac i2(\sigma(w,z)+\sigma(v,w+z))$; bilinearity makes these equal. Also $W(0)W(v)=W(v)=W(v)W(0)$ since $\sigma(0,v)=\sigma(v,0)=0$, and $W(v)W(-v)=W(0)$ since $\sigma(v,-v)=0$. The involution reverses products because alternation gives $\sigma(w,v)=-\sigma(v,w)$; hence the relations are consistent with the claimed unit and involution. [F2, F3, algebra]

1.2 Put $S_\iota[f]:=[\iota_*f]$. It is well-defined because $\iota_*(P_U k)=P_M(\iota_*k)$ by [F4], so changing $f$ by an element of $P_U\mathcal D_g(U)$ changes $\iota_*f$ by an element of $P_M\mathcal D_g(M)$. For $f\in\mathcal D_g(U)$, the restriction $u=(E_M^\pm\iota_*f)|_U$ solves $P_Uu=f$. Its support lies in $J_M^\pm(\operatorname{supp}f)\cap U=J_U^\pm(\operatorname{supp}f)$: the inclusion from right to left is immediate, and the reverse follows because a causal curve in $M$ from a point of $\operatorname{supp}f\subset U$ to a point of $U$ remains in $U$ by causal convexity [F4]. Here is the uniqueness argument actually needed. If $w$ is the difference of $u$ and $E_U^+f$, then $P_Uw=0$ and $\operatorname{supp}w\subseteq J_U^+(\operatorname{supp}f)$. For any compact smooth real $h$ on $U$, set $v=E_U^-h$. The closed overlap of their supports is compact by [F5]. A compact cutoff $\eta=1$ near that overlap from [F6] gives $\int_U wh\,\mu_g=\int_U wPv\,\mu_g=\int_U(Pw)v\,\mu_g=0$: apply formal self-adjointness first to $\eta w$ and $v$; every commutator term has a derivative of $\eta$ where both supports meet and hence vanishes. A smooth nonzero real $w$ has a small fixed-sign coordinate neighborhood and a nonnegative test bump there, contradicting this vanishing integral. Thus $w=0$. The advanced case interchanges the signs. Hence $u=E_U^\pm f$ without presupposing uniqueness in the definition. The isometry preserves $\mu_g$, so this compatibility gives $\sigma_M(S_\iota[f],S_\iota[h])=\int_U f(E_Uh)\,\mu_{g_U}=\sigma_U([f],[h])$; thus $S_\iota$ is symplectic. [A1, F1, F2, F4, F5, F6, given, algebra]

2.1 Define $\alpha_\iota$ on each basis symbol by $\alpha_{\iota}\bigl(W_U(v)\bigr)=W_M(S_\iota v)$ and extend complex-linearly to finite sums. Since $S_\iota$ is symplectic, applying $\alpha_\iota$ to the product in [F3] gives $e^{-i\sigma_U(v,w)/2}W_M(S_{\iota}(v+w))=W_M(S_\iota v)W_M(S_\iota w)$; applying it to $W_U(v)^*$ gives $W_M(-S_\iota v)=W_M(S_\iota v)^*$. It also sends $W_U(0)$ to $W_M(0)$, so it is a unital $*$-homomorphism. If $f$ is supported in an open $O\subseteq U$, then $\iota_*f$ is supported in $\operatorname{im}(\iota|_O)$; therefore the generator formula sends each local generator into $\mathfrak W_M(\operatorname{im}(\iota|_O))$, and sums and products do too. Extension by zero respects identity and composition, hence the generator formula gives $\alpha_{\mathrm{id}}=\mathrm{id}$ and $\alpha_{\jmath\circ\iota}=\alpha_\jmath\circ\alpha_\iota$. [F2, F3, F4, step 1.2, given, algebra] ∎
