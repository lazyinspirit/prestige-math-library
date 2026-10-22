---
id: lem-commuting-affine-peripheral-holonomy-logarithm-factorization
kind: lemma
title: Commuting affine peripheral holonomies factor their logarithms on
  singular parameter spaces
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations
        and a Proof of Thurston's Hyperbolic Dehn Filling Theorem
      url: https://arxiv.org/pdf/math/9901045
      locator: Lemma 2.6 and its commutativity identity, printed pp. 13–14; Theorem
        2.2(1,3); Proposition 3.6
dependency_level: 0
---

## Statement

Let $Z$ be a reduced complex analytic space with point $o$, and suppose $u_i,v_i,a_i,b_i$ are holomorphic germs on $Z$ for $1\le i\le k$, with $k<\infty$, $u_i(o)=v_i(o)=0$, $a_i(o)\ne0$ and $\tau_i^0=b_i(o)/a_i(o)\notin\mathbb R$. Suppose the affine maps
$$L_i(w)=e^{u_i}w+a_i,\qquad P_i(w)=e^{v_i}w+b_i$$
commute at every parameter point. Then, after shrinking around $o$, there are holomorphic germs $\tau_i$ such that $v_i=\tau_i u_i$, $\tau_i(o)=\tau_i^0$ and $\operatorname{Im}\tau_i\ne0$ throughout. In particular $u_i=0$ if and only if $v_i=0$, and $v_i/u_i\to\tau_i^0$ as the parameter tends to $o$ through $u_i\ne0$. No smoothness, dimension or rank hypothesis on $Z$ is required.

For $u_i\ne0$, there is a unique real pair $(p_i,q_i)$ solving $p_iu_i+q_iv_i=2\pi i$. With
$$\widetilde u_i=\frac{2\pi i}{p_i+\tau_i^0q_i},$$
one has
$$|\widetilde u_i-u_i|\le\frac{|\tau_i-\tau_i^0|}{|\operatorname{Im}\tau_i^0|}|u_i|.$$
Set $\widetilde u_i=0$ when $u_i=0$. The functions $\widetilde u_i$ are continuous at such points, and $\|\widetilde u-u\|=o(\|u\|)$ as the parameter tends to $o$ through $u\ne0$.

## Statement references

[Petronio and Porti, Lemma 2.6 and Proposition 3.6](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** The finite collection of holomorphic germs, their values at $o$ and the commuting affine maps in the Statement.

## Proof

1.1 If $k=0$, the collection of germs and every indexed assertion are empty. Both vectors are the unique vector of $\mathbb C^0$, with norm zero; there is no parameter with $u\ne0$, so the final limiting assertion is vacuous. This proves the Statement in that case. Henceforth suppose $k\ge1$. Composition of the two affine maps shows that commutativity is exactly $a_i(e^{v_i}-1)=b_i(e^{u_i}-1)$. Let $E(t)=(e^t-1)/t$ for $t\ne0$ and $E(0)=1$; its convergent series is $\sum_{n\ge0}t^n/(n+1)!$, so it is holomorphic and nonzero near zero. Since $a_i(o)\ne0$, the holomorphic function $\tau_i=(b_i/a_i)E(u_i)/E(v_i)$ is defined near $o$. The commutativity equation becomes exactly $v_i=\tau_i u_i$, and $\tau_i(o)=b_i(o)/a_i(o)$. The finitely many nonreal values permit one common neighborhood on which all $\operatorname{Im}\tau_i$ are nonzero. Thus all $\tau_i$ are nonzero, proving the equivalence of their zero logarithms and the asserted quotient limit. The argument is an identity of holomorphic functions on $Z$, so singular points cause no difficulty. [given, construct, algebra]

2.1 When $u_i\ne0$, real linear independence of $u_i$ and $v_i=\tau_i u_i$ follows from $\operatorname{Im}\tau_i\ne0$. Hence the real linear map $(p,q)\mapsto pu_i+qv_i$ is invertible and gives the unique real pair. Its equation is $(p_i+q_i\tau_i)u_i=2\pi i$. Since $\operatorname{Im}\tau_i^0\ne0$, the denominator $p_i+q_i\tau_i^0$ cannot vanish: if it did, its imaginary part would give $q_i=0$, then its real part $p_i=0$, contrary to the full-turn equation. Therefore $\widetilde u_i/u_i=(p_i+q_i\tau_i)/(p_i+q_i\tau_i^0)$ and $(\widetilde u_i-u_i)/u_i=q_i(\tau_i-\tau_i^0)/(p_i+q_i\tau_i^0)$. The elementary bound $|p_i+q_i\tau_i^0|\ge |q_i|\,|\operatorname{Im}\tau_i^0|$ proves the estimate, including $q_i=0$ where its left side is zero. [step 1.1, algebra]

3.1 On a sufficiently small fixed neighborhood all $\tau_i$ are bounded, so step 2.1 gives $|\widetilde u_i|\le C|u_i|$. Thus extending $\widetilde u_i$ by zero across $u_i=0$ is continuous there; elsewhere its formula is continuous because it comes from an invertible real linear system. Put $\eta(z)=\max_i |\tau_i(z)-\tau_i^0|/|\operatorname{Im}\tau_i^0|$. Finiteness of $k$ and continuity give $\eta(z)\to0$ as $z\to o$. Applying the scalar estimates coordinatewise, also where $u_i=0$, gives $\|\widetilde u-u\|\le\eta(z)\|u\|$. This proves the final assertion. No claim that $u$ is a coordinate system or has nonvanishing derivative has entered the argument. [step 1.1, step 2.1, algebra] ∎

## Scope

The affine normalization retains a chosen peripheral fixed point or eigenline. This lemma supplies the logarithmic quotient and the filling-parameter comparison even when the shape space is singular. It supplies neither a holomorphic coordinate on an ordinary character quotient nor the analytic-space openness, isolated-complete-point, geometric realization or triangulation-existence prerequisites needed for general hyperbolic Dehn filling.
