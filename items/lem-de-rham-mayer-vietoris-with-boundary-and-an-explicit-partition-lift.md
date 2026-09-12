---
id: "lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift"
kind: "lemma"
title: "De Rham Mayer–Vietoris with boundary and an explicit partition lift"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary","def-countable-choice","thm-long-exact-sequence-in-cohomology","def-smooth-partition-of-unity-subordinate-to-an-open-cover"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 17.20
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For an ordered open cover $M=U\cup V$ of a smooth manifold, possibly with boundary, put $W=U\cap V$ and
$$r\omega=(\omega|_U,\omega|_V),\qquad s(\alpha,\beta)=\beta|_W-\alpha|_W.$$
For the locally extendible de Rham complexes these maps give a short exact sequence
$$0\longrightarrow\Omega^\bullet(M)\xrightarrow{r}\Omega^\bullet(U)\oplus\Omega^\bullet(V)\xrightarrow{s}\Omega^\bullet(W)\longrightarrow0.$$
It induces the de Rham Mayer–Vietoris sequence with positive lift-differential connector $\Delta_{\mathrm{dR}}:H^k_{\mathrm{dR}}(W)\to H^{k+1}_{\mathrm{dR}}(M)$ and initial term $0\to H^0_{\mathrm{dR}}(M)$. The sequence is natural for smooth maps preserving the ordered cover. Countable choice is used only to obtain a smooth partition subordinate to $U,V$; with such a partition supplied, all the conclusions and the displayed connector construction are choice-free.

## Facts & Assumptions

[F1] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the complexes, their local smoothness and restriction/pullback identities at a boundary.

[F2] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]] supplies a subordinate smooth partition under countable choice.

[F3] [[def-countable-choice]] states the axiom $\mathrm{AC}_\omega$ assumed here.

[F4] [[thm-long-exact-sequence-in-cohomology]] gives the natural long exact cohomology sequence of a short exact sequence of complexes.

[F5] [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]] requires nonnegative smooth terms with closed locally finite supports inside their assigned opens and sum one.

## Proof

**Given:** The ordered cover, with either $\mathrm{AC}_\omega$ or a supplied smooth subordinate partition. Use the complexes of [F1] and the maps $r,s$ in the statement.

1.1 Under [F3], apply [F2] to the two-member cover to obtain smooth functions $\rho_U,\rho_V\ge0$ with sum one and supports contained in $U,V$ respectively. If the construction is presented as a locally finite refinement, group a term into $U$ whenever its closed support lies in $U$, and into $V$ otherwise. A subfamily of a locally finite closed family has closed union: near any point only finitely many members meet a neighbourhood, and the finite union is closed there. Thus each grouped sum is smooth with its support still in the assigned open. This gives the asserted pair in the refinement convention as well. Countable choice is spent only in [F2]'s selection of a countable subordinate chart family, its shrinking data and bumps; none of the subsequent steps selects a partition or primitive for each form. [F2, F3, F5, given]

1.2 Restriction commutes with $d$ by [F1], so $r,s$ are real cochain maps. If $r\omega=0$, it vanishes at every point of the cover, so $r$ is injective. Also $sr=0$. If $s(\alpha,\beta)=0$, the forms agree on $W$ and define one form on $M$ by their values on the two opens. Each point has a neighbourhood where it is one of those smooth forms, including at boundary points. This form restricts to $(\alpha,\beta)$, proving $\ker s=\operatorname{im}r$. [F1, given]

2.1 For any form $\eta$ on $W$, define $a=-\rho_V\eta$ there and extend it by zero over $U\setminus\operatorname{supp}\rho_V$. The overlap $W$ and this latter open set cover $U$; on their intersection the expressions agree because $\rho_V=0$. Thus $a$ is smooth on $U$. Similarly $b=\rho_U\eta$ on $W$, extended by zero over $V\setminus\operatorname{supp}\rho_U$, is smooth on $V$. Then $$s(a,b)=(\rho_U+\rho_V)\eta=\eta,$$ proving surjectivity. This argument uses closed supports, not merely vanishing outside the assigned opens. [F1, step 1.1]

3.1 Step 1.2 and step 2.1 give exactness in each degree, hence the short exact cochain sequence in the statement. Apply [F4]. The cohomology of the middle complex is the direct sum of the two cohomologies: its cycles and boundaries are the pairs of cycles and boundaries, and a pair of classes is zero exactly when both components are boundaries. Thus the resulting long exact sequence has precisely the asserted terms. Negative form degrees are zero by [F1], so it starts with $0\to H^0_{\mathrm{dR}}(M)$. [F1, F4, step 1.2, step 2.1]

4.1 For a closed overlap form $\eta$, take any lift $(a,b)$ with $b-a=\eta$ on $W$, for example the pair in step 2.1. Then $db-da=d\eta=0$ on $W$. By step 1.2 the pair $(da,db)$ is the restriction of a unique global form $\zeta$, and $d\zeta=0$ because its restrictions have zero differential. The connector is $$\Delta_{\mathrm{dR}}[\eta]=[\zeta],\qquad r\zeta=(da,db).$$ There is no additional sign. If the lift changes by $r\tau$, then $\zeta$ changes by $d\tau$. If $\eta$ changes by $d\lambda$, lift $\lambda$ to $(u,v)$ using step 2.1 and replace $(a,b)$ by $(a+du,b+dv)$; its differential is unchanged. These computations establish independence of both choices of representatives and lifts. [F1, F4, step 1.2, step 2.1, step 3.1]

5.1 A smooth map of ordered covers pulls forms back on the whole manifold, the two opens and their overlap. By [F1], pullback commutes with $r,s,d$. Pulling back the lift in step 4.1 gives a lift of the pulled-back overlap form and pulls its global differential back to the corresponding global differential. Thus the connector and the other arrows are natural; no compatibility between the independently available partitions is needed. [F1, step 4.1]

6.1 If $W$ is empty, all overlap terms and connectors vanish. If one open is empty, the other is $M$ and the row reduces to an identity with zero terms. If $U=V=M$, the row is diagonal followed by difference; a closed $\eta$ has lift $(0,\eta)$, so the connector is zero. These cases include the empty and one-point manifolds. Degree-zero overlap cocycles give degree-one global forms by step 4.1, while negative-degree connectors are zero. A supplied partition makes the constructions after step 1.1 entirely choice-free; zero forms have the zero lift. [F1, step 1.2, step 2.1, step 4.1, step 5.1] ∎
