---
id: op-gts-k-theoretic-gw-pt-correspondence-for-local-equivariant-calabiyau-fivefolds
kind: open-problem
title: K-theoretic GW/PT correspondence for local equivariant Calabi–Yau fivefolds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: mathematics
library: physics
deps:
  - def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds
  - def-gts-t-equivariant-stable-pair-moduli-on-quasi-projective-threefolds
dependency_roles:
  def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds: mathematical-premise
  def-gts-t-equivariant-stable-pair-moduli-on-quasi-projective-threefolds: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "D. Holmes and Y. Schuler, Experiments with membranes, maps and sheaves"
      url: "https://arxiv.org/pdf/2609.03152v1"
      locator: "§1.4, equations (7)–(11), Conjectures 1.5 and 1.6; §0.1 evidence and the strip-case proof in Proposition 2.5. Version v1 is the only version identified as of 2026-11-04."
---

## Open problem

Let $X$ be a connected smooth toric Calabi–Yau threefold which is the fixed locus of the one-dimensional subtorus $\mathbb C_q^\times\subseteq T$ in an equivariantly Calabi–Yau fivefold $Z$. Assume each stable-pair moduli space $P=P_n(X,\beta)$ is a separated finite-type quasi-projective Deligne–Mumford stack over $\mathbb C$ with the source-compatible $T'$-equivariant perfect obstruction theory $E^\bullet\to L_{P/\mathbb C}$ and a chosen global $T'$-equivariant two-term vector-bundle presentation $[E^{-1}\xrightarrow{d}E^0]\simeq E^\bullet$ in degrees $-1,0$. Use its virtual structure sheaf in the preceding definition, assume the square-root line in the source twist is chosen, and every relevant generalized $T'$-fixed locus, in the saturated isogeny-fixed convention of the preceding K-theory definition, is represented and proper. For every nonzero effective $\beta$ and every $g\ge0$ occurring on the GW side, also assume that the $T$-fixed stable-map stack $\overline M_g(Z,\beta)^T$ is proper. Here $\overline M_g(Z,\beta)$ parametrizes connected genus-$g$ stable maps of class $\beta$ from proper nodal curves to $Z$, with its source equivariant stable-map obstruction theory; its fixed virtual class and moving virtual normal complex define the localization residue after inverting nonzero torus characters. This is the separate GW properness hypothesis of the source, §1.2.1. The symbol $\chi_{T'}$ below denotes the localized equivariant pushforward defined by inverse fixed-locus pushforward and proper Euler characteristic, with concentration and the moving virtual-normal identity proved for the specified virtual sheaf by that supplier. The invariant is valued in the original localized character ring, with individual fixed weights allowed to be computed after a power isogeny. Let
$
Z=\operatorname{Tot}_X(L_4\oplus L_5),\qquad T\cong\mathbb C_q^\times\times T',
$
where $L_4,L_5$ are line bundles with $L_4\otimes L_5\cong K_X$, and $\mathbb C_q^\times$ acts on them with weights $q$ and $q^{-1}$, respectively. In the source's notation, for the universal stable pair $(\mathcal F,s)$ over $P_n(X,\beta)\times X$ with projections $\pi,\rho$, assume the two equivariant pushforwards $R\pi_*(\mathcal F\otimes\rho^*L_j)$, $j=4,5$, are perfect and use the Nekrasov–Okounkov-twisted virtual structure sheaf
$
\widetilde{\mathcal O}^{\rm vir}=\mathcal O^{\rm vir}\otimes\Bigl(K_{\rm vir}\otimes\det\bigl(R\pi_*(\mathcal F\otimes\rho^*(L_4-L_5))\bigr)\Bigr)^{1/2},
$
with the square-root and equivariant conventions of equation (8). The $\beta$-coefficient of the PT series is
$
PT_\beta(Z,\mathbb C_q^\times,T')=\sum_{n\in\mathbb Z}(-1)^{n+(L_4,\beta)}q^{n+K_X\cdot\beta/2}\,\chi_{T'}\bigl(P_n(X,\beta),\widetilde{\mathcal O}^{\rm vir}\bigr),\qquad
PT=1+\sum_{\beta\ne0}Q^\beta PT_\beta.
$
Put $r=\operatorname{rank}T'$ and choose a basis $q_1,\ldots,q_r$ of its character lattice $\operatorname{Hom}(T',\mathbb C^\times)\cong\mathbb Z^r$. Thus the character lattice of $T=\mathbb C_q^\times\times T'$ has basis $q,q_1,\ldots,q_r$ and rank $r+1$. Half-powers are formal generators of the enlarged half-character lattice. In this explicit lattice convention, Conjecture 1.5 predicts rational lifts $\Omega_\beta$ in
$
\mathbb Z[1/2]\bigl[q^{\pm1/2},q_1^{\pm1/2},\ldots,q_r^{\pm1/2},\{(1-q^{a_0/2}\textstyle\prod_{i=1}^{r}q_i^{a_i/2})^{-1}\}_{(a_0,\ldots,a_r)\in\mathbb Z^{r+1}\setminus\{0\}}\bigr]
$
where the product is $1$ when $r=0$. This replaces the undefined $m$ and overlapping indices of the source display by the full character lattice; it changes no conjectural pole condition. The prediction is that $PT=\operatorname{Exp}(\sum_{\beta\ne0}Q^\beta\Omega_\beta)$, with plethystic exponential $\operatorname{Exp}(f)=\exp(\sum_{k>0}k^{-1}f(q_i^k,q^k,Q^k))$. The open problem is to prove the restriction of the source's Conjecture 1.6 to this toric Calabi–Yau threefold setup: under that rational lift and the change of variables $q_i=e^{u\epsilon_i}$ and $q=e^{u\epsilon}$, where $\epsilon=c_1^{\mathbb C_q^\times}(q)$, establish
$
PT(Z,\mathbb C_q^\times,T')(Q,q;q_i)=\exp GW(Z,\mathbb C_q^\times\times T')(Q,u;\epsilon_i),
$
where $GW$ is the source's equivariant genus series $\sum_{\beta\ne0}Q^\beta\sum_{g\ge0}u^{2g-2}\int_{[\overline M_g(Z,\beta)]^{\rm vir}_{\mathbb C_q^\times\times T'}}1$. The general equality remains conjectural: for toric strip geometry with $L_4=L_5=\mathcal O_X$, the paper proves the PT closed formula and establishes the correspondence under its additional torus-action assumptions; other cases include low-degree numerical tests, which are evidence only. The analytic continuation in Conjecture 1.7 is a separate assertion and is not included here.

## Open problem references

[[def-gts-t-equivariant-stable-pair-moduli-on-quasi-projective-threefolds]]

## Status

As of 2026-11-04, Holmes–Schuler arXiv:2609.03152v1 states the general equality as Conjecture 1.6. The source conjecture permits a connected threefold fixed locus more generally; the present formulation retains the approved toric Calabi–Yau threefold scope. Their restricted toric-strip results under additional torus-action hypotheses and low-degree numerical tests do not settle the general problem. No later version was identified in the checked source record.

## Scope and dependency note

The planned A-page supplier [[def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds]] defines stable pairs only for projective threefolds and therefore supplies the projective overlap. The added A-page definition [[def-gts-t-equivariant-stable-pair-moduli-on-quasi-projective-threefolds]] gives the source's noncompact equivariant setup and its proper-fixed-locus conditions for the full conjecture. Both dependencies are retained with their actual scopes; neither supplies a proof of the correspondence.
