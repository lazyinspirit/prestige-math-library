---
id: lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice
kind: lemma
title: Stabilizer of the $\mathbb R^n$-action on a compact connected regular fibre is a full lattice
status: draft
origin: pipeline
deps: ["def-countable-choice","prop-regular-common-level-sets-are-lagrangian-submanifolds","prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action","cor-every-smooth-vector-field-on-a-compact-manifold-is-complete","cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Proposition 6.10 and proof, pp. 68--69
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

On a compact connected regular fibre $N$ of a completely integrable system,
the $\mathbb R^n$-action is transitive. Its stabilizer $\Gamma$ is a discrete
full lattice in $\mathbb R^n$, and $N\cong\mathbb R^n/\Gamma$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the local commuting flows on a compact connected regular fibre $N$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Its infinitesimal generators form a basis of every $T_pN$.
[[prop-regular-common-level-sets-are-lagrangian-submanifolds]].

[F2] The commuting fields define the local $\mathbb R^n$-action.
[[prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action]].

[F3] Every smooth vector field on a compact manifold is complete.
[[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]].

[F4] Every finitely generated torsion-free abelian group is free abelian.
[[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]].

## Proof

**Proof technique:** direct.

1.1 By [F3], each of the $n$ smooth vector fields restricted to compact $N$ is complete. Their local flows commute by [F2], so their composites define the required global $\mathbb R^n$-action. For each $p\in N$, [F1] says the orbit map $a\mapsto a\cdot p$ has invertible derivative at zero, so its orbit is open. All orbits are open and partition connected $N$, hence there is one orbit. The same derivative makes the stabilizer $\Gamma$ discrete, and the orbit map descends to a diffeomorphism $\mathbb R^n/\Gamma\to N$. [A1, F1, F2, F3, given]

2.1 Let $W=\operatorname{span}_{\mathbb R}\Gamma$. If $W\ne\mathbb R^n$, the quotient $\mathbb R^n/\Gamma$ maps continuously and surjectively onto the noncompact vector space $\mathbb R^n/W$, contradicting compactness of $N$. Thus $\Gamma$ spans $\mathbb R^n$. [step 1.1, given]

3.1 Choose $n$ real-linearly independent elements of $\Gamma$, possible by step 2.1, and let $\Gamma_0$ be their integer span. Every coset of $\Gamma_0$ has a representative in their compact fundamental parallelepiped. Since $\Gamma$ is a subgroup discrete at zero, some $\varepsilon$-ball about zero meets it only at zero; translating shows that distinct elements of $\Gamma$ are uniformly $\varepsilon$-separated. Total boundedness of the parallelepiped therefore makes its intersection with $\Gamma$ finite. Hence $\Gamma/\Gamma_0$ is finite and $\Gamma$ is finitely generated. It is torsion-free as a subgroup of $\mathbb R^n$, so [F4] makes it free abelian. Since it contains $\Gamma_0\cong\mathbb Z^n$ with finite index, its rank is $n$. A $\mathbb Z$-basis of $\Gamma$ spans the same real vector space as $\Gamma$, namely $\mathbb R^n$, and its $n$ members are therefore real-linearly independent. Thus $\Gamma$ is a full lattice. [F4, step 2.1, algebra] ∎
