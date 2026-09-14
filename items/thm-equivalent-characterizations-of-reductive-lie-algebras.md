---
id: thm-equivalent-characterizations-of-reductive-lie-algebras
kind: theorem
title: Equivalent characterizations of reductive Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-ideals-and-quotients-of-semisimple-lie-algebras, thm-weyls-complete-reducibility-theorem, prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: equivalence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 6.2"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§6, Proposition 6.2, printed p. 58"
---

## Statement

For a finite-dimensional Lie algebra $\mathfrak g$ over a characteristic-zero
field, the following are equivalent:

1. $\operatorname{rad}(\mathfrak g)=Z(\mathfrak g)$;
2. $\mathfrak g=Z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$ and the
   derived algebra is semisimple;
3. the adjoint representation of $\mathfrak g$ is completely reducible.

## Facts & Assumptions

**Given:** Such a Lie algebra $\mathfrak g$.

[L1] The quotient by the radical is semisimple
([[prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical]]).

[L2] Weyl's theorem completely reduces finite-dimensional modules for a
semisimple algebra ([[thm-weyls-complete-reducibility-theorem]]).

[L3] Ideals and quotients of semisimple algebras are semisimple
([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

[L4] Semisimple algebras are perfect and centerless
([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L5] A completely reducible representation is a direct sum of irreducible
subrepresentations
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Proof

**Proof technique:** prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.

1.1 Assume condition 1 and write $\mathfrak z=Z(\mathfrak g)$. By [L1], $\mathfrak q=\mathfrak g/\mathfrak z$ is semisimple. It acts on $\mathfrak g$ through adjoints, and $\mathfrak z$ is a trivial submodule. By [L2] there is a $\mathfrak q$-submodule $\mathfrak s$ with $\mathfrak g=\mathfrak z\oplus\mathfrak s$. Invariance says $[\mathfrak g,\mathfrak s]\subseteq\mathfrak s$, so $\mathfrak s$ is an ideal, and projection identifies it with $\mathfrak q$. Hence it is semisimple by [L3]. Since $\mathfrak z$ is central and $\mathfrak s$ is perfect by [L4], $[\mathfrak g,\mathfrak g]=\mathfrak s$. This is condition 2. [L1, L2, L3, L4]
1.2 Assume condition 2. The adjoint module is the direct sum of the trivial module $Z(\mathfrak g)$ and the adjoint module of the semisimple ideal $[\mathfrak g,\mathfrak g]$. The latter is completely reducible by [L2], so the whole adjoint module is completely reducible. This proves condition 3. [L2, given]
1.3 Assume condition 3. By [L5], the adjoint module is a finite direct sum of irreducible submodules. Every submodule $W$ therefore has an invariant complement: starting with $C=0$, if $W\oplus C\neq\mathfrak g$, some irreducible summand in the displayed finite decomposition is not contained in $W+C$; its intersection with $W+C$ is then zero by irreducibility, so adjoining it strictly enlarges $C$ while preserving $W\cap C=0$. Finite dimensionality makes this process terminate with $\mathfrak g=W\oplus C$. Write $\mathfrak r=\operatorname{rad}(\mathfrak g)$ and use this observation to choose an invariant complement $\mathfrak s$. Both are ideals, so $[\mathfrak r,\mathfrak s]\subseteq\mathfrak r\cap\mathfrak s=0$. Apply the observation again to the characteristic ideal $\mathfrak r'=[\mathfrak r,\mathfrak r]$, choosing an invariant complement $\mathfrak c$ in $\mathfrak g$. If $\mathfrak u=\mathfrak r\cap\mathfrak c$, then the decomposition $\mathfrak g=\mathfrak r'\oplus\mathfrak c$ restricts to $\mathfrak r=\mathfrak r'\oplus\mathfrak u$. The summands $\mathfrak r'$ and $\mathfrak u$ are ideals and commute. [L5, algebra]
2.1 From step 1.3, $\mathfrak r=\mathfrak r'\oplus\mathfrak u$ and $[\mathfrak r',\mathfrak u]=0$. Hence $\mathfrak r'=[\mathfrak r,\mathfrak r]=[\mathfrak r',\mathfrak r']+[\mathfrak u,\mathfrak u]$. The second summand lies in both $\mathfrak u$ and $\mathfrak r'$, so it is zero; therefore $\mathfrak r'=[\mathfrak r',\mathfrak r']$. But $\mathfrak r'$ is solvable, and a nonzero perfect algebra cannot be solvable, so $\mathfrak r'=0$. Thus $\mathfrak r$ is abelian and, because it also commutes with $\mathfrak s$, is central in $\mathfrak g$. Conversely the center is an abelian ideal and lies in the radical. This proves condition 1 and closes the equivalence. For $\mathfrak g=0$, all three conditions hold. [step 1.3, algebra] ∎
