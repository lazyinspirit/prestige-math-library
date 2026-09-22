---
id: lem-banach-manifold-differentials-are-chart-independent
kind: lemma
title: Banach manifold differentials are chart independent
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-tangent-space-and-differential-on-a-banach-manifold, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-countable-base-banach-manifold-and-smooth-map, def-frechet-derivative-between-banach-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §1.3"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Let $k \ge 1$, let $M$ be a $C^k$ Banach manifold modelled on $E$ (all manifolds
below are $C^k$ and smooth maps are $C^1$), and use the tangent space, its
vector space structure and the differential of
[[def-tangent-space-and-differential-on-a-banach-manifold]]. Then:

1. $\sim$ is an equivalence relation on the pairs $(\varphi,v)$ with
   $p \in \operatorname{dom}\varphi$.
2. The differential $Df(p) : T_pM \to T_{f(p)}N$ of a $C^1$ map
   $f : M \to N$ is well defined; more precisely, for any two choices of charts
   the resulting classes coincide, and the chart-based vector space operations
   on $T_pM$ are independent of the chart used.
3. $D(\mathrm{id}_M)(p) = \mathrm{id}_{T_pM}$ for every $p$, and
   $D(g \circ f)(p) = Dg(f(p)) \circ Df(p)$ whenever $f : M \to N$ and
   $g : N \to P$ are $C^1$.

## Facts & Assumptions

**Given:** $k \ge 1$, $C^k$ Banach manifolds $M, N, P$ modelled on real Banach spaces $E, F, G$, points $p \in M$, and charts $\varphi, \varphi'$ of $M$ at $p$, $\psi, \psi'$ of $N$ at $f(p)$ for the $C^1$ map $f : M \to N$.

[L1] Definition of tangent vectors, their chart identifications, the vector space operations and the differential, together with the fact that transition maps of a $C^k$ manifold are $C^k$ and hence $C^1$ ([[def-tangent-space-and-differential-on-a-banach-manifold]], [[def-countable-base-banach-manifold-and-smooth-map]]).

[L2] Chain rule, sum rule and the derivative of the identity: for $C^1$ maps of open subsets of Banach spaces, $D(\beta \circ \alpha)(x) = D\beta(\alpha(x))D\alpha(x)$, and $D(\mathrm{id})(x) = I$; a bounded linear map is its own derivative ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-frechet-derivative-between-banach-spaces]]).

[L3] Chart representatives of $C^1$ maps between manifolds are $C^1$ on their open domains, and composites of the transition maps appearing below are defined on a neighbourhood of the relevant point, because chart domains and their images are open ([[def-countable-base-banach-manifold-and-smooth-map]]).



## Proof

**Proof technique:** direct.

1.1 *(Reflexivity and symmetry.)* For a chart $\varphi$ at $p$ the transition $\varphi \circ \varphi^{-1}$ is the identity on an open set containing $\varphi(p)$, so $D(\varphi \circ \varphi^{-1})(\varphi(p)) = I$ by [L2] and $(\varphi,v) \sim (\varphi,v)$. If $(\varphi,v) \sim (\psi,w)$, then $w = D(\psi \circ \varphi^{-1})(\varphi(p))v$; the two transition maps are mutually inverse $C^1$ maps on neighbourhoods of $\varphi(p)$ and $\psi(p)$, so differentiating the identities $(\varphi \circ \psi^{-1}) \circ (\psi \circ \varphi^{-1}) = \mathrm{id}$ and $(\psi \circ \varphi^{-1}) \circ (\varphi \circ \psi^{-1}) = \mathrm{id}$ with [L2] gives $D(\varphi \circ \psi^{-1})(\psi(p))w = v$, that is $(\psi,w) \sim (\varphi,v)$. [L1, L2, L3]

2.1 *(Transitivity.)* If $(\varphi,v) \sim (\psi,w)$ and $(\psi,w) \sim (\chi,u)$, then on a neighbourhood of $\varphi(p)$ the identity $\chi \circ \varphi^{-1} = (\chi \circ \psi^{-1}) \circ (\psi \circ \varphi^{-1})$ holds, and [L2] gives $D(\chi \circ \varphi^{-1})(\varphi(p))v = D(\chi \circ \psi^{-1})(\psi(p))\,D(\psi \circ \varphi^{-1})(\varphi(p))v = D(\chi \circ \psi^{-1})(\psi(p))w = u$, that is $(\varphi,v) \sim (\chi,u)$. Together with [step 1.1], this establishes the equivalence relation before any construction is asserted on its classes. [step 1.1, L2, L3]

3.1 *(The differential is well defined.)* Let $f : M \to N$ be $C^1$ and let $(\varphi,\psi)$, $(\varphi',\psi')$ be two chart pairs at $p$ and $f(p)$. On a neighbourhood of $\varphi'(p)$ one has $\psi' \circ f \circ \varphi'^{-1} = (\psi' \circ \psi^{-1}) \circ (\psi \circ f \circ \varphi^{-1}) \circ (\varphi \circ \varphi'^{-1})$; if $(\varphi',v') \sim (\varphi,v)$, that is $v = D(\varphi \circ \varphi'^{-1})(\varphi'(p))v'$, then [L2] gives $D(\psi' \circ f \circ \varphi'^{-1})(\varphi'(p))v' = D(\psi' \circ \psi^{-1})(\psi(f(p)))\,\bigl[D(\psi \circ f \circ \varphi^{-1})(\varphi(p))v\bigr]$, which is precisely the relation $[\psi', D(\psi' \circ f \circ \varphi'^{-1})(\varphi'(p))v'] = [\psi, D(\psi \circ f \circ \varphi^{-1})(\varphi(p))v]$ defining $\sim$ on the target manifold. Because [step 1.1] and [step 2.1] have already proved that $\sim$ is an equivalence relation, this comparison proves independence of both the representative and the chart pair. [step 1.1, step 2.1, L1, L2, L3]

3.2 *(The vector space operations are chart independent.)* If $(\varphi,v) \sim (\varphi',v')$ and $(\varphi,w) \sim (\varphi',w')$, then the shared transition derivative $T := D(\varphi' \circ \varphi^{-1})(\varphi(p))$ is linear with $v' = Tv$, $w' = Tw$; hence $v'+w' = T(v+w)$ and $\lambda v' = T(\lambda v)$, that is $(\varphi,v+w) \sim (\varphi',v'+w')$ and $(\varphi,\lambda v) \sim (\varphi',\lambda v')$. Since $\sim$ is an equivalence relation by [step 1.1] and [step 2.1], these representative calculations define operations on the quotient classes. [step 1.1, step 2.1, L1, L2, algebra]

4.1 *(Functoriality.)* The maps in this step are well defined on tangent classes by [step 3.1]. For the identity, $D(\mathrm{id}_M)(p)[\varphi,v] = [\varphi, D(\varphi \circ \mathrm{id}_M \circ \varphi^{-1})(\varphi(p))v] = [\varphi, D(\mathrm{id})(\varphi(p))v] = [\varphi,v]$ by [L2]. For a composite, fix charts $\varphi$ at $p$, $\psi$ at $f(p)$ and $\rho$ at $g(f(p))$; then $\rho \circ (g \circ f) \circ \varphi^{-1} = (\rho \circ g \circ \psi^{-1}) \circ (\psi \circ f \circ \varphi^{-1})$ near $\varphi(p)$, and applying [L2] to this identity of open-subset maps gives equality of the two well-defined maps $D(g\circ f)(p)$ and $Dg(f(p)) \circ Df(p)$ on every class represented in the chart $\varphi$. [step 3.1, L1, L2, L3]

5.1 Assertion 1 is [step 1.1] with [step 2.1]; assertion 2 is [step 3.1] and [step 3.2]; assertion 3 is [step 4.1]. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎
