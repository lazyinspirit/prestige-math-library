---
id: "thm-clifford-correspondence"
kind: "theorem"
title: "Clifford correspondence"
status: published
origin: "pipeline"
deps: ["lem-induction-from-the-inertia-group-recovers-the-module", "lem-inducing-an-irreducible-inertia-module-is-irreducible", "thm-clifford-homogeneous-restriction-formula"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.2 p.2; tom Dieck Theorem 4.2.4(1–3,5) pp.55–56"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. Induction gives a bijection
$$ \operatorname{Irr}(I\mid\theta)\longrightarrow\operatorname{Irr}(G\mid\theta). $$
On module isomorphism classes, the inverse takes the $\theta$-isotypical component. Conjugate normal types give the same target set, and the sets $\operatorname{Irr}(G\mid\theta)$, indexed by distinct $G$-orbits in $\operatorname{Irr}(N)$, partition $\operatorname{Irr}(G)$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] For irreducible $V$ lying over $\theta$, the component $V_\theta$ is irreducible over inertia and its induction is isomorphic to $V$. ([[lem-induction-from-the-inertia-group-recovers-the-module]]).

[F2] An irreducible inertia module above $\theta$ induces irreducibly, and its identity-coset block is the full $\theta$-component, isomorphic to the original inertia module. ([[lem-inducing-an-irreducible-inertia-module-is-irreducible]]).

[F3] The normal restriction of an irreducible character is a positive common multiple of the sum of the distinct conjugates of any constituent. ([[thm-clifford-homogeneous-restriction-formula]]).

## Proof

**Proof technique:** direct.

1.1 Induction sends each element of $\operatorname{Irr}(I\mid\theta)$ to an irreducible lying over $\theta$. Conversely, every irreducible $V$ lying over $\theta$ is induced from its irreducible component $V_\theta$. This proves that the displayed map is defined and surjective. [F1, F2, given]

2.1 Taking the $\theta$-component of an induced module recovers its inducing module. A $G$-isomorphism preserves these components, since it sends simple $N$-submodules to simple submodules of the same type. Hence isomorphic induced modules have isomorphic inducing modules. This proves injectivity and the specified inverse. [F2, step 1.1]

3.1 The restriction formula shows that occurrence of one type is equivalent to occurrence of each conjugate, and excludes every type outside that orbit. Every irreducible $G$-module has a nonzero finite-dimensional restriction: an $N$-stable nonzero subspace of least possible dimension is simple, so a constituent exists. Consequently the orbit-indexed sets cover $\operatorname{Irr}(G)$ and are pairwise disjoint. No step requires I to be proper in G or to properly contain N. [F3, step 1.1, step 2.1] ∎
