---
id: ex-cft-trivial-voa-torus-rt-comparison
kind: example
title: Trivial VOA and the vacuum-labelled torus RT comparison
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 18
domain: mathematics
library: mathematics
deps:
- def-conformal-vertex-algebra
- def-admissible-vertex-algebra-module
- def-cft-strong-rational-voa
- def-cft-modular-functor-and-sewing
- def-cft-modular-functor-equivalence
- def-modular-ribbon-category-and-hopf-link-data
- thm-cft-strongly-rational-module-category-is-modular
- thm-cft-conformal-block-modular-functor-is-rt
- cor-cft-rt-factorization-and-verlinde-dimension
- def-axiom-of-choice
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-cft-strong-rational-voa: mathematical-premise
  def-cft-modular-functor-and-sewing: mathematical-premise
  def-cft-modular-functor-equivalence: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  thm-cft-strongly-rational-module-category-is-modular: mathematical-premise
  thm-cft-conformal-block-modular-functor-is-rt: mathematical-premise
  cor-cft-rt-factorization-and-verlinde-dimension: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Theorems 4.2.2, 5.3.1, and 5.5.1, for the exact coinvariant, induced-category,
      and RT-comparison interfaces.
  - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories
      and Modular Functor, Chapter 5
    url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
    locator: Definition 5.1.12, printed pp. 97–98, and Sections 5.2 and 5.7 for sewing
      and anomaly conventions. Preliminary lecture-note version.
---

## Example

Let $V=\mathbb C\mathbf1$ with state-field map $Y(a\mathbf1,z)(b\mathbf1)=ab\mathbf1$, translation operator $T=0$, and conformal vector $\omega=0$. Under full AC this is strongly rational in the shared five-condition convention, and its grading-restricted module category has one simple label, the vacuum $0$. Assuming the exact coinvariant, induced-category, and RT-comparison suppliers from this A/B pair, the rank of the stable one-point torus conformal-block bundle with label $0$ equals its RT state-space dimension:

$$\operatorname{rk}\mathbb V_{1,1}(0)=\dim V^{\mathrm{RT}}(\Sigma_{1};0)=\sum_{x\in\{0\}}S_{0x}^{-1}S_{0x}=1.$$

The stable pointed torus is identified with the unmarked torus value by insertion of the vacuum. This is a mathematical chiral example; it does not assert a full local CFT construction.

## Example references

[[def-conformal-vertex-algebra]]

[[def-admissible-vertex-algebra-module]]

[[def-cft-strong-rational-voa]]

[[def-cft-modular-functor-and-sewing]]

[[def-cft-modular-functor-equivalence]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[thm-cft-strongly-rational-module-category-is-modular]]

[[thm-cft-conformal-block-modular-functor-is-rt]]

[[cor-cft-rt-factorization-and-verlinde-dimension]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The one-dimensional complex vector space $V=\mathbb C\mathbf1$, the displayed state-field map and conformal vector, full AC, and the exact current CFT and modular-functor supplier interfaces.

[F1] [[def-conformal-vertex-algebra]] requires a vacuum, state-field map, translation operator, conformal vector giving Virasoro modes with $L(-1)=T$, and a nonnegative integral CFT-type grading with finite-dimensional graded pieces and $V_0=\mathbb C\mathbf1$.

[F2] [[def-admissible-vertex-algebra-module]] requires a direct-sum grading $M=\bigoplus_{n\ge0}M(n)$ respected by the mode-degree rule.

[F3] [[def-cft-strong-rational-voa]] requires simplicity, CFT type, self-contragredience, complete reducibility of admissible modules, and $C_2$-cofiniteness.

[F4] [[def-axiom-of-choice]] permits choosing a basis in each nonzero graded component of an arbitrary admissible module; this is the only choice used in the local rationality verification.

[F5] [[def-cft-modular-functor-and-sewing]] states that insertion of the distinguished vacuum object identifies the surface value with an extra vacuum boundary with the value before adding that boundary.

[F6] [[thm-cft-strongly-rational-module-category-is-modular]] identifies the finite label category $\mathcal C_V$ with the grading-restricted module category and proves its modularity. Auxiliary admissible grading shifts are not separate labels.

[F7] [[thm-cft-conformal-block-modular-functor-is-rt]] compares the coinvariant modular functor to the RT-type functor of $\mathcal C_V$ through its proved cyclic identification and extension comparisons.

[F8] [[cor-cft-rt-factorization-and-verlinde-dimension]] gives the rank formula in the fixed normalized $S$ convention under the exact AC and inherited AC$_\omega$ premises, with the proved VOA suppliers.

[F9] [[def-modular-ribbon-category-and-hopf-link-data]] defines $S$ as the normalized Hopf-link matrix; for a modular category its $1\times1$ matrix in this example is invertible, so $S_{00}\ne0$.

## Verification

1.1 The only nonzero mode of $Y(a\mathbf1,z)$ is $(a\mathbf1)_{(-1)}=a\,\mathrm{id}_V$. Scalar multiplication is lower truncated, the vacuum and creation identities hold, translation covariance holds because both $T$ and $\partial_zY$ are zero, and locality follows from commutativity of scalar multiplication. The conformal vector $\omega=0$ gives $L(n)=0$ for every $n$ and central charge $0$, so the Virasoro relations and $L(-1)=T$ hold. The grading is $V_0=V$ and $V_n=0$ for $n>0$, which is CFT type by [F1]. [given, F1, algebra]

2.1 Every nonzero subspace of $V$ is $V$, so $V$ is simple. Its restricted dual is one-dimensional with the same trivial module action, giving a module isomorphism $V'\cong V$. Since every $(-2)$-mode of $V$ is zero, $C_2(V)=0$ and $V/C_2(V)$ is one-dimensional. [given, F1, F3, step 1.1, algebra]

3.1 Let $M=\bigoplus_{n\ge0}M(n)$ be any admissible $V$-module. The vacuum identity forces $\mathbf1_{(-1)}^M=\mathrm{id}_M$, while every other mode of $\mathbf1$ is zero; hence every vector subspace of $M$ is a $V$-submodule. By [F4], choose a vector-space basis of each nonzero $M(n)$. The one-dimensional spans of all these basis vectors are admissible simple submodules, and their internal direct sum is $M$. Thus every admissible module is completely reducible, completing the five conditions in [F3]. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Every grading-restricted $V$-module is a finite-dimensional vector space: its conformal operator L(0) is zero, so its only generalized-weight space is the whole module and is finite dimensional. All its subspaces are submodules, so it is simple exactly when one dimensional. Forgetting the auxiliary admissible grading, the vacuum is the unique such simple module and the unique label of $\mathcal C_V$, namely $I=\{0\}$. The arbitrary graded admissible modules used in step 3.1 establish rationality; their grading shifts are not additional labels here. [F2, F3, F6, step 3.1, algebra]

5.1 Set $(g,n)=(1,1)$ and the sole label $i_1=0$ in [F8]. The exponent is $2-2g-n=-1$, so the sum has one term $S_{00}^{-1}S_{00}=1$ by $S_{00}\ne0$ from [F9]. The rank and RT state-space dimension are therefore both $1$. [F8, F9, step 4.1, algebra]

6.1 By [F5], the one-point torus value with the vacuum label is isomorphic to the unmarked torus value. By [F7] and the definition in [F8], this isomorphism is compatible with the RT comparison; no claim about another VOA or about full local correlators follows. [F5, F7, F8, step 5.1, algebra] ∎
## Verification scope

The VOA, rationality and one-label calculations are direct, and the exact comparison suppliers are now proved. The finite label category here is finite-dimensional vector spaces, while the rationality hypothesis was verified for arbitrary graded admissible modules.

## Remarks

The existing abstract rank-one modular-functor example on the Batch 14 B page has no VOA input. This example adds the trivial VOA, verifies its strong-rational hypotheses directly, and specializes the CFT-to-RT rank comparison to the stable vacuum-labelled torus. It makes no claim about nontrivial VOAs, analytic convergence beyond the supplied conditions, the Huang–Lepowsky tensor structure, or full-CFT existence.
