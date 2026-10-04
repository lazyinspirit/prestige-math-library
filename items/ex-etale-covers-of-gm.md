---
id: ex-etale-covers-of-gm
kind: example
title: "Kummer covers of the multiplicative group"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
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
    - title: "Milne, Lectures on Étale Cohomology §3, multiplicative-group coverings and base-field dependence"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
    - title: "SGA 1, Exposé V, fibre-functor classification"
      url: https://arxiv.org/pdf/math/0206203
---

## Example

Assume AC. Let $k$ be an algebraically closed field, let $n\ge1$ be invertible in $k$, and put $\mathbb G_{m,k}=\operatorname{Spec}k[u,u^{-1}]$. The power map
$$\operatorname{Spec}k[t,t^{-1}]\longrightarrow\operatorname{Spec}k[u,u^{-1}],\qquad u\longmapsto t^n$$
is a connected finite étale cover of degree $n$. Its deck group is $\mu_n(k)$, acting by $t\mapsto\zeta t$. With geometric basepoint $u=1$ and a chosen lift $t=1$, it yields a continuous surjective quotient of $\pi_1^{\mathrm{et}}(\mathbb G_{m,k},1)$ of order $n$. These examples exhibit finite covers; no assertion that they exhaust all covers in positive characteristic is made.

If $\operatorname{char}k=p>0$ and $p\mid n$, the same finite power map is not étale. Its fibre over $u=1$ is nonreduced, so its degree cannot be interpreted as the number of geometric fibre points of a finite étale cover.

## Facts & Assumptions

**Given:** AC, $k$, $n$, the two Laurent polynomial rings and the indicated power map.

[F1] Finite free algebras with zero differentials are finite étale, and their module rank counts geometric fibre points ([[lem-finite-etale-algebra-module-presentation-and-rank]]).

[F2] A connected finite étale cover whose automorphisms act simply transitively on the fibre is Galois. Its finite deck group, with the opposite-action convention if necessary, is a quotient of the profinite fibre-functor group ([[lem-finite-etale-galois-refinements-and-quotients]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]). The basepoint conventions are [[def-etale-fundamental-group-and-fibre-functor]]. AC is inherited through these suppliers ([[def-axiom-of-choice]]).

## Verification

1.1 The upstairs algebra is $k[u,u^{-1}][T]/(T^n-u)$: $T$ is automatically invertible because $T^n=u$, so this quotient is $k[t,t^{-1}]$. Division by the monic polynomial shows that $1,T,\ldots,T^{n-1}$ is a free basis over the downstairs ring. The derivative $nT^{n-1}$ is a unit, so the relative differentials vanish. By [F1] the map is finite étale of rank $n$. Its source is integral and nonempty, hence connected. [F1, algebra]

2.1 The fibre at $u=1$ consists of the $n$ distinct roots of $T^n-1$ in $k$. Each $\zeta\in\mu_n(k)$ gives an automorphism $T\mapsto\zeta T$ over the base, and these act simply transitively on that fibre. By [F2] all automorphisms are determined by one fibre point, so these are the entire deck group. The explicit reconstruction in [F2] gives a continuous surjection from the fundamental group to its opposite deck group; this is the same group because $\mu_n(k)$ is abelian. [F1, F2, step 1.1]

3.1 If $p\mid n$, write $n=p^a m$ with $a\ge1$ and $p\nmid m$. In characteristic $p$, $T^n-1=(T^m-1)^{p^a}$. Thus the finite fibre over $1$ has nonzero nilpotents and is not geometrically regular of dimension zero. It cannot be a fibre of an étale morphism by [F1]. This verifies the characteristic restriction and the degree interpretation. [F1, step 1.1, algebra] ∎
