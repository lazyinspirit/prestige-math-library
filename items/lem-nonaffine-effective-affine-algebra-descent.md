---
id: lem-nonaffine-effective-affine-algebra-descent
kind: lemma
title: "Faithfully flat descent of modules and affine algebras is effective"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-faithfully-flat-descent-vanishing, thm-associativity-of-balanced-tensor-products, thm-affine-scheme-ring-anti-equivalence]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Descent, Sections 35.3-35.5, faithful flat module descent"
      url: https://stacks.math.columbia.edu/download/descent.pdf
    - title: "SGA1, Expose VIII, Sections 1-2, affine descent"
      url: https://arxiv.org/pdf/math/0206203
---

## Statement

Assume the Axiom of Choice. For a faithfully flat ring map $A\to B$, base change identifies $A$-modules with $B$-modules equipped with a descent isomorphism between their two pullbacks to $B\otimes_AB$, satisfying the cocycle identity over the triple tensor product. The same is true for commutative unital algebras, when transport is an algebra isomorphism. Writing transport as $\theta:N\otimes_AB\to B\otimes_AN$, the descended module or algebra is
$$D=\{n\in N:\theta(n\otimes1)=1\otimes n\},$$
and $B\otimes_AD\to N$, $b\otimes d\mapsto bd$, is an isomorphism respecting the datum.

## Facts & Assumptions

[F1] Faithfully flat tensor extension preserves exactness and detects zero modules and isomorphisms. Iterated tensor products give the pullbacks of affine modules and their maps. ([[thm-faithfully-flat-descent-vanishing]], [[thm-associativity-of-balanced-tensor-products]])

[F2] Affine schemes and rings are contravariantly equivalent. ([[thm-affine-scheme-ring-anti-equivalence]])

## Proof

**Given:** AC, $A\to B$, $N$, and the compatible transport $\theta$.

1.1 First consider an affine cover with a section. For the equivalent scheme map $g:T\to S$ with section $s$, set $M=s^*N$. Pull transport back along $T\to T\times_ST$, $t\mapsto(s(g(t)),t)$; it gives an isomorphism $g^*M\to N$. Compatibility with the original transport is the cocycle identity pulled back along $(s(g(t_1)),t_1,t_2)$. Diagonal transport is an invertible idempotent, hence the identity, and reverse transport is its inverse by the same cocycle. Pulling back a compatible map along $s$ recovers its unique map on $M$. Therefore descent is effective and fully faithful for this split cover. The argument applies equally to algebra transports. [F1, F2, construct]

2.1 The displayed $D$ is the kernel of the difference of two $A$-linear maps from $N$ into $B\otimes_AN$. Flat scalar extension preserves this kernel. After extending $A$ to $B$, the cover becomes $\operatorname{Spec}(B\otimes_AB)\to\operatorname{Spec}B$, with diagonal section supplied by multiplication $B\otimes_AB\to B$. The datum becomes split, so step 1.1 says its invariant module recovers its downstairs module, and the base extension of the natural map $B\otimes_AD\to N$ is an isomorphism. Faithful flatness in [F1] reflects that isomorphism, proving the displayed descent map is an isomorphism before extension. [F1, step 1.1, algebra]

3.1 For the canonical datum on $B\otimes_AQ$, the invariant equalizer is $Q$. Indeed after tensoring by $B$, the sequence $0\to Q\to B\otimes_AQ\rightrightarrows B\otimes_AB\otimes_AQ$ becomes split exact, using multiplication and the split-cover argument of step 1.1. Exactness and detection in [F1] give the original assertion. A compatible map $N\to N'$ preserves invariant equalizers; step 2.1 identifies it uniquely with the base extension of its restriction $D\to D'$. This proves full faithfulness as well as effectiveness for modules. [F1, step 1.1, step 2.1, algebra]

4.1 For algebra transport, the invariant subset is closed under unit, sums, scalar multiplication, and products, because transport preserves these operations. Thus $D$ is an $A$-algebra. The module isomorphism in step 2.1 preserves multiplication and unit and is an algebra isomorphism. Compatible algebra maps restrict to algebra maps on invariants by step 3.1, giving the asserted algebra equivalence and effective affine scheme descent through [F2]. AC is inherited from the module and affine-scheme suppliers. [F1, F2, step 2.1, step 3.1, algebra] ∎
