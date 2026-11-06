---
id: lem-cft-formal-coordinate-fibre-is-aut-o-torsor
kind: lemma
title: A formal-coordinate fibre is an Aut O torsor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-smooth-projective-complex-curve
  - def-cft-aut-o-formal-coordinate-group
  - lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve
dependency_roles:
  def-cft-smooth-projective-complex-curve: mathematical-premise
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§10.1–10.5
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal-coordinate torsors and composition of local-parameter changes.
---

## Statement

Let $X$ be a smooth projective complex curve and $p\in X$. The set
$$\operatorname{Coord}_{X,p}:=\operatorname{Iso}_{\mathbb C\text{-alg}}^{\mathrm{cont}}(\widehat{\mathcal O}_{X,p},\mathbb C\llbracket t\rrbracket)$$
is a right torsor under the group of continuous formal-coordinate substitutions with zero constant term and invertible linear coefficient, using the right-composition product; the action is free and transitive. For a proper holomorphic submersion $\pi:\mathcal X\to S$ with compact connected Riemann-surface fibers, pairwise disjoint holomorphic sections $s_i$, and open $W\subseteq S$, let $\mathcal I_i$ be the ideal sheaf of $s_i(W)$, set $\widehat{\mathcal O}_{\mathcal X,s_i(W)}:=\varprojlim_{k\ge1}s_i^{-1}(\mathcal O_{\mathcal X}/\mathcal I_i^k)$, and let $\widehat{\mathcal I}_i$ be the kernel of restriction to $\mathcal O_W$. Consider complete $\mathcal O_W$-algebra sheaf isomorphisms $\tau_i:\widehat{\mathcal O}_{\mathcal X,s_i(W)}\to\mathcal O_W\llbracket t\rrbracket$ with $\tau_i(\widehat{\mathcal I}_i)=t\mathcal O_W\llbracket t\rrbracket$. If this set of relative formal coordinates is nonempty, it is a right torsor under the group of continuous $\mathcal O_W$-algebra substitutions of $\mathcal O_W\llbracket t\rrbracket$ with zero constant term and invertible linear coefficient; restriction to each fiber over $s\in W$ gives the individual formal-coordinate torsor.

## Statement references

[[def-cft-aut-o-formal-coordinate-group]]

[[def-cft-smooth-projective-complex-curve]]

## Facts & Assumptions

**Given:** A smooth curve $X$, a point $p\in X$, and the formal-coordinate fiber at $p$.

[F1] [[lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve]]: the formal-coordinate fiber at $p$ is nonempty.

[F2] [[def-cft-smooth-projective-complex-curve]]: an individual coordinate is a continuous $\mathbb C$-algebra isomorphism $\widehat{\mathcal O}_{X,p}\to\mathbb C\llbracket t\rrbracket$; over an open family base $W$, a relative coordinate is a continuous $\mathcal O_W$-algebra sheaf isomorphism $\widehat{\mathcal O}_{\mathcal X,s(W)}\to\mathcal O_W\llbracket t\rrbracket$ carrying the completed section ideal to $(t)$.

[F3] [[def-cft-aut-o-formal-coordinate-group]]: write $\phi_\rho(f(t))=f(\rho(t))$ for the ring map associated to a substitution. For the right-composition series product, $\phi_{\rho_1\rho_2}=\phi_{\rho_1}\circ\phi_{\rho_2}$, and the right action on coordinate isomorphisms is $\tau\cdot\rho=\phi_\rho^{-1}\circ\tau$. The same formulas apply over every commutative complex coefficient algebra. For the sheaf $\mathcal O_W\llbracket t\rrbracket$, a continuous $\mathcal O_W$-algebra sheaf automorphism preserving $(t)$ is uniquely substitution by its image $a_1t+a_2t^2+\cdots$ of $t$, where $a_m\in\mathcal O_W(W)$ and $a_1$ is a holomorphic unit; the coefficientwise substitution and inverse recursion commute with restriction.

## Proof

1.1 The individual coordinate set is nonempty by F1. The maps in F3 preserve the defining complete-algebra and ideal conditions in F2. Their action satisfies $$(\tau\cdot\rho_1)\cdot\rho_2=\phi_{\rho_2}^{-1}\phi_{\rho_1}^{-1}\tau=\phi_{\rho_1\rho_2}^{-1}\tau=\tau\cdot(\rho_1\rho_2).$$ If $\tau\cdot\rho=\tau$, surjectivity of $\tau$ gives $\phi_\rho^{-1}=\mathrm{id}$ and hence $\rho(t)=t$. Thus this is a free right action. [F1, F2, F3, algebra]

2.1 Given $\tau_1,\tau_2\in\operatorname{Coord}_{X,p}$, the continuous ring automorphism $\tau_1\circ\tau_2^{-1}$ preserves $(t)$. Let $\rho$ be its unique substitution series, so $\phi_\rho=\tau_1\circ\tau_2^{-1}$. Then $\phi_\rho^{-1}\circ\tau_1=\tau_2$, or $\tau_1\cdot\rho=\tau_2$. Freeness gives uniqueness, proving simple transitivity on the individual fiber. [F2, F3, step 1.1, construct]

3.1 For two relative coordinates over $W$, the composition $\tau_1\circ\tau_2^{-1}$ is a continuous $\mathcal O_W$-algebra sheaf automorphism preserving $(t)$. Its image of $t$ has holomorphic coefficients and unit linear term, and F3 identifies it with a unique $\phi_\rho$. Thus $\tau_1\cdot\rho=\tau_2$; the action law and freeness hold by the same composition identities as in step 1.1. This proves the torsor assertion whenever the relative-coordinate set is nonempty. For each $s\in W$, restriction means reduction of every finite jet modulo the maximal ideal at $s$, followed by inverse limit; it gives a continuous isomorphism $\widehat{\mathcal O}_{X_s,s_i(s)}\to\mathbb C\llbracket t\rrbracket$. For this identification choose base coordinates z and a total coordinate w whose differential complements those of $z\circ\pi$. The map $(z\circ\pi,w)$ is locally biholomorphic: after normalizing its invertible derivative it has form $I+H$ with $\|dH\|<1/2$ on a small ball, so iteration of $x=y-H(x)$ converges locally uniformly to its holomorphic inverse. Subtracting the holomorphic value of w on the section gives a local vertical coordinate vanishing there. Its finite jet rings are $\mathcal O_{W,s}[t]/(t^k)$, proving the identification before passage to the inverse limit. The resulting coordinate makes the fiber set nonempty; the algebraic argument of step 2.1 proves simple transitivity there without any projective-presentation assumption on $X_s$. Every complex substitution series lifts to the relative group by constant coefficient functions, so the restriction is equivariant and its image is the whole individual torsor. No assertion that every individual coordinate extends as a holomorphic chart germ is needed. [F2, F3, step 1.1, step 2.1, construct] ∎
