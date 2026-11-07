---
id: thm-cft-regularity-rationality-c2
kind: theorem
title: Regularity versus rationality and C2-cofiniteness
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - thm-cft-zhu-rationality-criterion
  - def-cft-regularity
  - def-c2-cofinite-vertex-algebra
  - def-rational-vertex-algebra
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-admissible-vertex-algebra-module
  - lem-cft-ordinary-simple-module-is-admissible
dependency_roles:
  thm-cft-zhu-rationality-criterion: mathematical-premise
  def-cft-regularity: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  lem-cft-ordinary-simple-module-is-admissible: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Abe, Buhl, and Dong, Rationality, regularity, and C2-cofiniteness"
      url: "https://arxiv.org/pdf/math/0204021"
      locator: "§2 definitions and the complete proof of Theorem 4.5; the paper assumes CFT type throughout."
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "Corollary 5.5 and the exact C2-cofinite ordinarity inputs it cites."
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "§5.3 and the C2-cofiniteness/module results cited there."
verification:
  precheck: pending
---

## Statement

Let $V$ be a simple conformal vertex algebra of CFT type with finite-dimensional $V/C_2(V)$. “Simple” means that $V$ has no nonzero proper subspace stable under every mode $a_{(m)}$. Then $V$ is regular if and only if it is rational in the admissible-module convention. Under the same hypotheses, these conditions are equivalent to semisimplicity of $A(V)$. Regular means every weak $V$-module is a direct sum of simple ordinary modules. Rational means every admissible $V$-module is a direct sum of irreducible admissible submodules. This does not assert that rationality alone implies $C_2$-cofiniteness.

## Facts & Assumptions

**Given:** $V$ is simple, of CFT type, and $V/C_2(V)$ is finite dimensional.

[F1] [[def-cft-regularity]]: regularity asks for complete reducibility of every weak module into simple ordinary modules.

[F2] [[def-rational-vertex-algebra]]: rationality asks for complete reducibility of every admissible module into irreducible admissible submodules.

[F3] [[def-c2-cofinite-vertex-algebra]]: $C_2(V)=\operatorname{span}\{u_{(-2)}v:u,v\in V\}$; C2-cofiniteness means $\dim(V/C_2(V))<\infty$.

[F4] [[thm-cft-zhu-rationality-criterion]]: for simple CFT-type $V$, rationality is equivalent to semisimplicity of $A(V)$ together with ordinarity of every irreducible admissible module; the proof is escalated.

[F5] [[lem-cft-ordinary-simple-module-is-admissible]]: a simple ordinary module admits a nonnegative grading satisfying the admissible mode-shift rule. This supplies an abstract admissible grading for each simple ordinary summand, not compatibility with an independently fixed grading on a larger module.

[A1] The rational-plus-C2-cofinite-to-regular direction requires the weak-module argument in Abe–Buhl–Dong Theorem 4.5. It constructs lowest-weight vectors in arbitrary weak modules using Buhl spanning and Zhu/DLM module results. The spanning theorem, induced-module construction and resulting decomposition have not been proved locally.

[A2] The C2-cofinite-to-ordinary input for all irreducible admissible modules used in Dong–Jiang Corollary 5.5 is not proved locally. In the regular-to-rational direction, [F5] gives each simple summand its own admissible grading, but the available argument does not show that the decomposition of a weak module respects the original admissible grading on that module. This is the exact unresolved compatibility gap.

## Proof

1.1 If $V$ is rational, the rational-plus-C2-cofinite implication in [A1] gives regularity, namely the weak-module decomposition in [F1]. [given, F1, F2, F3, A1, algebra]

2.1 If $V$ is regular, apply [F1] to an admissible module viewed as a weak module. Its summands are simple ordinary modules, and [F5] gives each summand an admissible grading. This supplies the stated kind of summands, but does not show that their direct-sum decomposition is compatible with the module’s originally specified admissible grading; hence the implication to [F2] still requires the missing compatibility input in [A2]. [given, F1, F2, F5, A2, step 1.1, algebra]

3.1 Under C2-cofiniteness, [A2] supplies ordinarity of irreducible admissible modules. Substituting that condition into [F4] identifies rationality with semisimplicity of $A(V)$. Combined with the regularity/rationality implications above, this gives the asserted three-way equivalence conditional on [A1] and [A2]. [given, F3, F4, A1, A2, step 1.1, step 2.1, algebra] ∎

## Proof status

The source theorem assumes CFT type and uses substantial module theory. The exact open obligations are [A1], [A2], and preservation of the given admissible grading in the regular-to-rational direction; this item is escalated.
