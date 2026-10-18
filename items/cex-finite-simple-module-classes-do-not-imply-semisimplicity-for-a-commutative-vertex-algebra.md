---
id: cex-finite-simple-module-classes-do-not-imply-semisimplicity-for-a-commutative-vertex-algebra
kind: counterexample
title: Finite simple labels alone do not imply a semisimple module category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
  - lem-module-jacobi-formal-delta-substitution-identity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §4.2.6
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras, §§2.5–2.7
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Statement refuted

The statement “a finite number of simple-module isomorphism classes forces a semisimple module category” is false for vertex-algebra module subcategories.

## Facts & Assumptions

**Given:** The dual-number algebra $A=\mathbb C[\varepsilon]/(\varepsilon^2)$ with its usual unital, commutative multiplication. Equip $V=A$ with $T=0$ and $Y(a,z)b=ab$. A finite-dimensional unital left $A$-module means a finite-dimensional complex vector space $M$ with a unital algebra homomorphism $\rho:A\to\operatorname{End}_{\mathbb C}(M)$. Let $\mathcal C$ be the full subcategory consisting of the constant-field $V$-modules obtained from these actions by $Y_M(a,z)=\rho(a)$. Its morphisms are all $V$-module homomorphisms between these objects. Say that $\mathcal C$ is semisimple if every object is a direct sum of simple objects.

[F1] [[def-vertex-algebra-state-field]]: the vertex-algebra axioms are lower truncation, vacuum and creation, translation covariance, and locality.

[F2] [[def-vertex-algebra-module]]: a module has lower-truncated fields, vacuum action, and the formal module Jacobi identity.

[F3] [[lem-module-jacobi-formal-delta-substitution-identity]]: the difference of the first two module Jacobi delta expansions is the formal delta expansion on the right.

[F4] [[def-conformal-vertex-algebra]]: CFT type requires a direct grading with $V_0=\mathbb C\mathbf1$ and $L(0)$-eigenspaces defining the degrees.

[F5] [[def-vertex-algebra-module]]: a submodule is a linear subspace stable under every module mode; a simple module is nonzero with no proper nonzero submodule; semisimple means an internal direct sum of simple submodules.

## Proof

1.1 Since $A$ is unital, commutative, and associative, the constant field assignment $Y(a,z)b=ab$ has only the mode $a_{(-1)}b=ab$ and all other modes zero. It is lower truncated; the vacuum and creation identities hold because $1b=b$; translation covariance holds because $T=0$ and the field is constant; and locality holds because multiplication operators commute. Thus $V$ is a vertex algebra by [F1]. [given, F1, algebra]

1.2 For any finite-dimensional unital $A$-module $(M,\rho)$, set $Y_M(a,z)=\rho(a)$, a constant field. It is lower truncated and satisfies the vacuum axiom. In its module Jacobi identity, associativity gives $\rho(a)\rho(b)=\rho(ab)=\rho(b)\rho(a)$, so the left side is $(\alpha-\beta)\rho(ab)$, where $\alpha$ and $\beta$ are the first two displayed delta terms; the right side is $\gamma\rho(ab)$, where $\gamma$ is the third term. Identity [F3] gives $\alpha-\beta=\gamma$, so this is a $V$-module by [F2]. Conversely, by the definition of $\mathcal C$, its objects are exactly these unital $A$-modules. [F2, F3, given, algebra]

1.3 For a constant-field object, the only potentially nonzero mode is $a^M_{(-1)}=\rho(a)$, so its $V$-submodules are exactly its $A$-submodules. Let $S$ be a nonzero simple object of $\mathcal C$ in the sense of [F5]. The subspace $\varepsilon S$ is an $A$-submodule. It cannot equal $S$, since then $\varepsilon^2S=\varepsilon S=S$ would contradict $\varepsilon^2=0$ and $S\ne0$. Simplicity therefore gives $\varepsilon S=0$, so the action factors through $A/(\varepsilon)\cong\mathbb C$. Every one-dimensional subspace is then a submodule; simplicity forces $\dim S=1$. Conversely, the one-dimensional module with $\varepsilon$ acting by zero is simple. Hence $\mathcal C$ has exactly one simple isomorphism class. [given, F5, algebra]

2.1 In the regular module $A$, the subspace $\varepsilon A=\mathbb C\varepsilon$ and quotient $A/\varepsilon A\cong\mathbb C$ are both the simple module just described, giving $0\to\mathbb C\varepsilon\to A\to\mathbb C\to0$. If it split as $A$-modules, $A$ would be a direct sum of two modules annihilated by $\varepsilon$, forcing multiplication by $\varepsilon$ on $A$ to be zero; but $\varepsilon\cdot1=\varepsilon\ne0$. Thus this extension does not split, and $\mathcal C$ is not semisimple by [F5]. [given, F5, step 1.3, algebra]

3.1 For every candidate conformal vector $\omega\in V$, the field $Y(\omega,z)$ is constant, so in $Y(\omega,z)=\sum_nL(n)z^{-n-2}$ the only possibly nonzero mode is $L(-2)$ and $L(0)=0$. Its zero eigenspace is all of $V$, which has dimension two, not $\mathbb C\mathbf1$; hence no conformal vector makes this a CFT-type algebra under [F4]. The example is therefore an algebraic module-category counterexample, not a counterexample to a rationality theorem for conformal vertex operator algebras. [F4, given, step 1.1, algebra] ∎
