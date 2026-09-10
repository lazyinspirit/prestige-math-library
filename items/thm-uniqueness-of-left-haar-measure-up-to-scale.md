---
id: thm-uniqueness-of-left-haar-measure-up-to-scale
kind: theorem
title: Uniqueness of left Haar measure up to scale
deps: [lem-haar-integral-comparison-inequality, thm-rmk-uniqueness-among-radon-measures, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-recursion, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
proof_strategy: direct
---

## Statement

Assume AC. Any two left Haar measures on an LCH group are positive scalar multiples on every Borel set.

## Facts & Assumptions

**Given:** Left Haar measures $\mu,\nu$ on $G$, and AC.

[F1] For the associated functionals, symmetric small-support functions make the comparison error arbitrarily small and have positive integrals. ([[lem-haar-integral-comparison-inequality]])

[F2] Equality on $C_c$ integrals identifies Radon measures on the Borel sigma algebra. ([[thm-rmk-uniqueness-among-radon-measures]])

[F3] Under DC, a compact set inside an open set admits a compactly supported cutoff that is one on the compact set. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F4] Given a set $A$, an element $a\in A$ and a function $f:A\to A$, recursion gives $g:\mathbb N\to A$ with $g(0)=a$ and $g(n+1)=f(g(n))$. ([[thm-recursion]])

[A1] AC is assumed in the choice-function form stated in the cited definition. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 First discharge the dependent-choice hypothesis of [F3] directly. For any set $A$, a prescribed $a\in A$, and a relation $R\subseteq A\times A$ with every successor set $R[x]=\{y\in A:xRy\}$ nonempty, [A1] chooses one member of each set in $\{R[x]:x\in A\}$. Composing this choice function with $x\mapsto R[x]$ gives $f:A\to A$ with $xRf(x)$. By [F4], $g(0)=a$ and $g(n+1)=f(g(n))$ define an infinite $R$-chain. This proves exactly the required dependent-choice principle, including the prescribed starting point. Now let $I(f)=\int f\,d\mu$ and $J(f)=\int f\,d\nu$. Compact finiteness makes these real-valued on real $C_c$. They are positive and invariant. They are nonzero: for each measure, nonzeroness and outer regularity give an open set of positive mass, open inner regularity gives a compact subset of positive mass, and [F3] gives a cutoff dominating its indicator. Use one such nonzero cutoff as $f_0$; strict positivity in [F1] gives $I(f_0),J(f_0)>0$. [F1, F3, F4, A1]

2.1 Fix $f\ge0$ and $\epsilon>0$. Choose the same symmetric $u$ so the [F1] bounds for $f$ and $f_0$ are both at most $\epsilon$, using the intersection of their identity neighbourhoods. Divide by $I(u)>0$ and set $r=J(u)/I(u)$. Then $|rI(f)-J(f)|\le\epsilon$ and $|rI(f_0)-J(f_0)|\le\epsilon$. Multiplying by $I(f_0)$ and $I(f)$ respectively and subtracting cancels $r$, giving $|I(f_0)J(f)-I(f)J(f_0)|\le\epsilon(I(f_0)+I(f))$. Letting $\epsilon\downarrow0$ proves $J(f)=cI(f)$ with $c=J(f_0)/I(f_0)>0$. [F1, step 1.1]

3.1 For real $h=h^+-h^-$, linearity extends $J=cI$ from the positive cone to all $C_c(G;\mathbb R)$. The measure $c\mu$ is Radon because scaling by a finite positive scalar preserves each regularity equality and compact finiteness. Therefore [F2] gives $\nu=c\mu$ on all Borel sets, including those of infinite measure. [F2, step 2.1] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
