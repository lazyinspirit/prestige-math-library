---
id: lem-etale-specialization-geometric-basepoint-interface
kind: lemma
title: "Trait specialization as a cover functor with geometric basepoint paths"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
  - lem-etale-specialization-proper-geometric-finite-etale-invariance
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Fundamental Groups of Schemes, section 16 (Tag 0BUP), especially Lemmas 16.1 and 16.4 (Tag 0C0N)"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "SGA 1, recomposed edition, Expose X section 2 and Corollary 2.4, printed pages 206-207"
      url: https://arxiv.org/pdf/math/0206203
---

## Statement

Assume AC. Let $R$ be a complete Noetherian DVR with **algebraically closed** residue field $k$ and fraction field $F$, and let $X/R$ be smooth proper with nonempty geometrically connected fibres. Fix an algebraically closed extension $\overline F/F$ and geometric basepoints $\bar x_\eta$ on $X_{\overline F}$ and $\bar x_0$ on $X_k$. Denote by $r:\operatorname{FEt}(X)\to\operatorname{FEt}(X_k)$ restriction, and choose a quasi-inverse $E$ and its equivalence isomorphisms. The functor
$$T:\operatorname{FEt}(X_k)\longrightarrow\operatorname{FEt}(X_{\overline F}),\qquad T(V)=E(V)_{\overline F},$$
together with a geometric fibre-functor path on $X$ between the images of $\bar x_0$ and $\bar x_\eta$, gives a continuous homomorphism
$$\operatorname{sp}:\pi_1^{\mathrm{et}}(X_{\overline F},\bar x_\eta)\longrightarrow\pi_1^{\mathrm{et}}(X_k,\bar x_0).$$
It is the generic-to-special map. Changing that path conjugates it in the special group. Extending either algebraically closed fibre field transports this construction through the equivalence of finite étale cover categories and the compatible geometric basepoints. A local injective map to another complete DVR with the **same residue field $k$** likewise gives the same cover functor and homomorphism after compatible extension of the generic field and choice of path.

This is a new local support item for A911. A strictly henselian DVR can have a merely separably closed imperfect residue field; the hypothesis here is algebraically closed $k$, and no identification between the two hypotheses is made. The lemma constructs the interface on a selected trait. It asserts neither independence from different trait specialization data nor an isomorphism or surjectivity of the displayed map.

## Facts & Assumptions

**Given:** AC, $R$, $k$, $F$, $X$, the two geometric basepoints, $E$, and a path as in the Statement.

[F1] Restriction $r$ is an equivalence for smooth proper $X/R$, including the nonprojective case ([[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]]).

[F2] Fibre functors and their automorphism topology are defined in [[def-etale-fundamental-group-and-fibre-functor]]. Their cover classification is [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]. Connected Galois covers simultaneously trivialize finite collections of covers and have the pointwise unique mapping property ([[lem-finite-etale-galois-refinements-and-quotients]]).

[F3] Algebraically closed field extension preserves the cover category and geometric fibre functor for smooth proper schemes ([[lem-etale-specialization-proper-geometric-finite-etale-invariance]]).

[F4] AC ([[def-axiom-of-choice]]) is inherited through [F1]–[F3] and permits selecting the quasi-inverse and using product compactness for paths.

## Proof

1.1 The total space $X$ is connected. Indeed it is Noetherian and has finitely many irreducible components, so each connected component is open and closed. Each nonempty component meets $X_k$, since it is proper over the local trait and its closed nonempty image contains the closed point. A partition of $X$ would therefore partition connected $X_k$ into two nonempty open and closed sets, a contradiction. Consequently [F2] applies to the images $x_0,x_\eta$ of the chosen geometric basepoints as points of $X$. A path means a natural isomorphism $P:F_{x_0}\to F_{x_\eta}$ on $\operatorname{FEt}(X)$. Such paths exist under AC: take the product, over a small skeleton of covers, of the finite sets of bijections between their two fibres. Naturality and the identities impose closed conditions. Any finitely many such conditions are satisfied by a connected Galois cover simultaneously trivializing the covers involved; choose a point over each basepoint in that Galois cover, and use its unique mapping property in [F2] to identify the fibres of every involved cover compatibly with all maps. These conditions have the finite intersection property, so compactness of the product gives a path. [F2, F4, given, choose, construct]

1.2 By [F1] the quasi-inverse comes with a natural isomorphism $rE\cong\mathrm{id}$. It identifies $F_{x_0}(E(V))$ with $F_{\bar x_0}(V)$. Generic pullback identifies $F_{x_\eta}(E(V))$ with $F_{\bar x_\eta}(T(V))$: both are exactly the lifts of the same geometric point to the same cover. Thus $P$ induces a natural isomorphism $\tau:F_{\bar x_0}\to F_{\bar x_\eta}\circ T$. For $g\in\operatorname{Aut}(F_{\bar x_\eta})$, define on each special cover $V$
$$\operatorname{sp}(g)_V=\tau_V^{-1}\,g_{T(V)}\,\tau_V.$$
Naturality of $g$ and $\tau$ makes this an automorphism of the special fibre functor, and componentwise composition makes $\operatorname{sp}$ a homomorphism. Its continuity follows since the action on any finite special fibre factors through the continuous action on the single finite generic cover $T(V)$; intersections of these action kernels form the topology in [F2]. This explains the direction without assuming any equivalence from special covers to all generic covers. [F1, F2, step 1.1, construct, algebra]

2.1 If $\tau'$ arises from a different path, put $a=\tau^{-1}\tau'$, a natural automorphism of the special fibre functor. Then $\operatorname{sp}'(g)=a^{-1}\operatorname{sp}(g)a$ by direct substitution. Replacing the quasi-inverse gives its unique natural isomorphism compatible with $rE\cong\mathrm{id}$, since $r$ is fully faithful. Transporting $\tau$ through that isomorphism preserves the formula. For algebraically closed field extensions, [F3] identifies the cover categories, and the fibres of finite étale covers are finite sets unchanged by algebraically closed field extension. Applying these identifications to $T$ and $\tau$ gives exactly the transported homomorphism. Arbitrary geometric basepoints are handled by the same path construction of step 1.1 on the corresponding connected smooth proper fibre. [F1, F2, F3, step 1.2, algebra]

3.1 Let $R\to R'$ be local injective between complete DVRs and inducing the identity on $k$, and let $X'=X\times_RR'$. For a special cover $V$, the pullback $E(V)\times_RR'$ is a cover of $X'$ restricting to $V$. By [F1] applied to $X'/R'$, it is naturally isomorphic to $E'(V)$ for any compatible quasi-inverse $E'$. The isomorphism is uniquely determined by the special-fibre identity. Generic pullback then identifies their $T$ functors after a common algebraically closed generic overfield. Compatible paths identify their $\tau$ maps; the formula in step 1.2 gives the same specialization homomorphism. If an independently chosen path is used, step 2.1 supplies exactly the conjugacy qualification. The AC use is precisely [F4] and the compactness construction of step 1.1. [F1, F3, F4, step 1.2, step 2.1, construct] ∎
