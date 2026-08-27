---
id: thm-conformal-transport-of-plane-dirichlet-solutions
kind: theorem
title: "Conformal transport of continuous Dirichlet solutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-perron-solves-dirichlet-on-regular-plane-domains, thm-conformal-invariance-of-plane-harmonicity, cor-uniqueness-for-the-bounded-plane-dirichlet-problem, def-barrier-and-regular-boundary-point]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement

Let $\Omega,\Omega'\subseteq\mathbb C$ be bounded regular complex domains, let
$F:\Omega\to\Omega'$ be a conformal bijection that extends to a homeomorphism
$\overline\Omega\to\overline{\Omega'}$, and let
$\varphi:\partial\Omega'\to\mathbb R$ be continuous. If $u$ is the unique
continuous harmonic function on $\overline\Omega$ with boundary data
$\varphi\circ F|_{\partial\Omega}$, then
$$v:=u\circ F^{-1}$$
is the unique continuous harmonic function on $\overline{\Omega'}$ with boundary
data $\varphi$.

## Facts & Assumptions

**Given:** Bounded regular complex domains $\Omega,\Omega'$, a closure-homeomorphic conformal bijection $F:\Omega\to\Omega'$, and a continuous boundary datum $\varphi:\partial\Omega'\to\mathbb R$.

[L1] On a regular bounded plane domain, Perron's method gives the unique continuous harmonic solution of the Dirichlet problem ([[thm-perron-solves-dirichlet-on-regular-plane-domains]]).

[L2] Harmonicity is preserved under holomorphic changes of coordinate ([[thm-conformal-invariance-of-plane-harmonicity]]).

[L3] A bounded-domain continuous harmonic extension of fixed boundary data is unique ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the source datum $\varphi\circ F|_{\partial\Omega}$ has a unique continuous harmonic solution $u$ on $\overline\Omega$. Define $v=u\circ F^{-1}$ on $\Omega'$. Since $F^{-1}$ is holomorphic on $\Omega'$, [L2] makes $v$ harmonic on $\Omega'$. [L1, L2, given]

2.1 The homeomorphic extension of $F$ to the closures shows that $F^{-1}$ extends continuously from $\overline{\Omega'}$ to $\overline\Omega$. Therefore $v$ extends continuously to $\overline{\Omega'}$, and for $\xi\in\partial\Omega'$ one has [step 1.1, given]
$$v(\xi)=u(F^{-1}(\xi))=(\varphi\circ F)(F^{-1}(\xi))=\varphi(\xi).$$
This identifies the transported boundary values. [step 1.1, given]

3.1 Let $w$ be any other continuous harmonic function on $\overline{\Omega'}$ with boundary data $\varphi$. Then $w\circ F$ is continuous on $\overline\Omega$, harmonic on $\Omega$ by [L2], and has boundary values $\varphi\circ F$ on $\partial\Omega$. By [L3], one has $w\circ F=u$ on $\overline\Omega$, hence $w=v$ on $\overline{\Omega'}$. [L2, L3, step 2.1]

4.1 Thus $v=u\circ F^{-1}$ is exactly the unique Dirichlet solution on $\Omega'$ with boundary data $\varphi$. [step 3.1] ∎
