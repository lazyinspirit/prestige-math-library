---
dependency_level: 5
id: lem-berkovich-kernel-under-complete-algebraically-closed-extension
kind: lemma
title: "Berkovich kernels and dynamical potentials under complete algebraically closed extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-berkovich-projective-line-by-polynomial-seminorms
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-berkovich-disc-nested-balls-and-hsia-kernel
  - lem-berkovich-dynamical-green-kernel-continuous-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§1–3 seminorm/disc constructions; base-field adaptation"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L_0\subset L$ be complete algebraically closed nontrivially nonarchimedean valued fields with the same absolute value on $L_0$. Restriction of polynomial seminorms defines a continuous map $r:X_L\to X_{L_0}$ of their Berkovich projective lines. It has a continuous closed-embedding section $j:X_{L_0}\to X_L$, characterized on a unit chart by extending each nested-disc representation with centers in $L_0$ to the same nested discs over $L$. It satisfies
$$\delta_L(z,j(x))=\delta_{L_0}(r(z),x),\qquad \delta_L(z,z)\le\delta_{L_0}(r(z),r(z)).$$
If a homogeneous lift $F$ has coefficients in $L_0$, then $q_{F,L}=q_{F,L_0}\circ r$ and
$$g_{\phi,L}(z,z)\ge g_{\phi,L_0}(r(z),r(z))$$
in the extended reals. The section does not claim that a type-IV point stays type IV after extension; only its seminorm and radius are preserved.

## Statement references

[[def-axiom-of-choice]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

## Facts & Assumptions

**Given:** The valued inclusion and projective lines in the statement; for the last assertions, a lift over $L_0$.

[F1] Unit-disc points are polynomial seminorms, projective lines are compact Hausdorff two-disc quotients, and classical points are dense. ([[def-berkovich-projective-line-by-polynomial-seminorms]], [[lem-berkovich-projective-line-compactness-and-classical-density]])

[F2] Nested discs represent every point. If $x$ has a nested sequence $(a_n,r_n)$, then $\delta_D(y,x)=\lim_n\max(y(T-a_n),r_n)$, uniformly in $y$. Kernel slices are continuous. ([[lem-berkovich-disc-nested-balls-and-hsia-kernel]])

[F3] The global spherical kernel obeys the two-chart rule, and the potential is the uniform limit of normalized logarithmic homogeneous iterate norms. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[A1] Choice is inherited from the seminorm constructions. ([[def-axiom-of-choice]])

## Proof

1.1 Restriction to $L_0[T]$ preserves all seminorm axioms and unit-chart inequalities, is continuous on each polynomial coordinate and commutes with inversion on the circle. It therefore defines the stated continuous map $r$ on the quotient. For $x\in D_{L_0}$ with nested centers $(a_n,r_n)$, the same discs over $L$ define a decreasing sequence of multiplicative seminorms; each polynomial value has a finite nonnegative limit, and the limit preserves multiplication and the strong triangle inequality. Thus it defines a point $j(x)\in D_L$. For $b\in L$ with $|b|\le1$, let $p_b\in D_{L_0}$ be restriction of classical evaluation at $b$. Factorization over $L$ and [F2] give
$$j(x)(T-b)=\lim_n\max(r_n,|a_n-b|)=\delta_{D,L_0}(x,p_b).$$
For $|b|>1$ the value is $|b|$ throughout. This formula proves independence of the nested representation and continuity in $x$, first on linear factors and then on every polynomial over $L$. [F1, F2, algebra]

1.2 For $b\in L_0$, the last formula equals $x(T-b)$ by [F2], so $rj=\operatorname{id}$ on each disc. The two definitions of $j$ agree on their circles: they are continuous there and agree on classical circle points, which are dense by the finite-root approximation in [F1] (choose modulus-one approximants). Thus they commute with inversion and glue to a continuous section on the projective line. It is a closed embedding because its domain is compact and its codomain is Hausdorff, by [F1]. [F1, F2, step 1.1, algebra]

2.1 For $z\in D_L$ and $x\in D_{L_0}$, [F2] applied to the same nested centers gives
$$\delta_{D,L}(z,jx)=\lim_n\max(z(T-a_n),r_n)=\delta_{D,L_0}(rz,x).$$
On the diagonal the infimum over all centers in $L$ is at most the infimum over the centers in $L_0$, giving the diagonal inequality on each chart. The mixed-chart rules in [F3] extend the identity globally, because restriction preserves the coordinate modulus and the distinction between the circle and its strict interior. [F2, F3, step 1.1, algebra]

2.2 When $F$ has coefficients in $L_0$, every polynomial in its iterate-coordinate formula has coefficients in $L_0$. Restriction therefore preserves each normalized logarithmic iterate norm and, by the uniform limit in [F3], preserves $q_F$. The two fields give the same resultant absolute value. Combining with the diagonal spherical-kernel inequality and applying $-\log$, with $-\log0=+\infty$, proves the Green diagonal inequality. [F3, step 2.1, algebra] ∎
