---
id: lem-clifford-quotient-factorization
kind: lemma
title: Factorization through the Clifford quotient
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw
dependency_level: 1
deps: [def-clifford-algebra-of-a-quadratic-space, def-left-right-and-two-sided-ideal, def-algebra-over-a-commutative-ring]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $q_Q:T_k(V)\to\mathrm{Cl}(V,Q)$ be the quotient map from [[def-clifford-algebra-of-a-quadratic-space]]. If $A$ is a unital associative $k$-algebra and $\psi:T_k(V)\to A$ is a unital $k$-algebra homomorphism satisfying $\psi(j(v)^2-Q(v)1)=0$ for every $v\in V$, then there is a unique unital $k$-algebra homomorphism $\bar\psi:\mathrm{Cl}(V,Q)\to A$ with $\psi=\bar\psi\circ q_Q$.

## Facts & Assumptions

**Given:** The field, vector space, form, tensor algebra, and Clifford quotient in [[def-clifford-algebra-of-a-quadratic-space]], together with a unital $k$-algebra $A$ and a homomorphism $\psi$ killing each defining relation.

[F1] The Clifford algebra is $T_k(V)/J_Q$, where $J_Q$ is the smallest two-sided ideal containing all $j(v)^2-Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F2] A two-sided ideal is an additive subgroup stable under multiplication on both sides, and a unital $k$-algebra has a central unital $k$-structure map ([[def-left-right-and-two-sided-ideal]], [[def-algebra-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Since $\psi$ is a homomorphism, its kernel is closed under addition and under left and right multiplication by elements of $T_k(V)$. It is therefore a two-sided ideal in the sense of [F2] containing each defining relation, and minimality in [F1] gives $J_Q\subseteq\ker\psi$. [given, F1, F2, algebra]

2.1 Define $\bar\psi(t+J_Q)=\psi(t)$. If $t+J_Q=t'+J_Q$, then $t-t'\in J_Q\subseteq\ker\psi$, so $\psi(t)=\psi(t')$ and the definition is well defined. [step 1.1, F1, construct]

3.1 The induced map preserves addition, multiplication, scalar multiplication, and the unit because $\psi$ does and the quotient operations are induced from $T_k(V)$. Since $q_Q$ is surjective, any map factoring $\psi$ agrees with $\bar\psi$ on every coset; thus the factor is unique. [step 2.1, F1, algebra] ∎
