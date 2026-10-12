---
id: lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative
kind: lemma
title: "General linear Stiefel perverse normalization is exact and conservative"
status: draft
origin: session
deps: ["lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom", "thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes", "lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC and the actual finite GL Stiefel resolution $P_N=U_N\times X\to X_N=P_N/G$ for $G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$. Put $s_N=\dim_\mathbb C B_N$. The middle-perverse structure on the actual $D^b_{G,c}(X;k)$ is detected by restriction to $X$, and the functor $A\mapsto Q_N(A)[s_N]$ is perverse exact and conservative. Perverse truncations lift through sufficiently large bounded finite-resolution image comparisons. At the actual degree-zero Hom stabilization bound, lifted finite projectors preserve and reflect perverse concentration and simplicity after correcting the common shift $s_N$.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure]] is used with its explicit hypotheses.

## Proof

1.1 Let $u_N=\dim_\mathbb C U_N$ and $g=\dim_\mathbb C G$. The maps $\operatorname{pr}_X:P_N\to X$ and $q_N:P_N\to X_N$ are smooth surjections of relative dimensions $u_N$ and $g$. Their pullbacks of $A$ agree: $q_N^*Q_N(A)=\operatorname{pr}_X^*A_X$. Since $s_N=u_N-g$, the explicit ordinary smooth-pullback theorem identifies the perverse inequalities on $A_X$ with those on $Q_N(A)[s_N]$. Surjective pullback reflects them and zero objects. [given, F1, F2, F3]

1.2 Apply ordinary perverse truncation to $Q_N(A)[s_N]$ and shift back by $-s_N$. Smooth t-exactness identifies its principal-bundle pullback with $\operatorname{pr}_X^*({}^p\tau A_X)$. Thus it satisfies the finite-resolution image criterion whenever $r_N$ covers these bounded ordinary amplitudes. Boundedness of the ordinary t structure means that only finitely many underlying truncations differ from zero and A, so choose one sufficiently large N for all of them and the finite diagram. The fully faithful image comparison lifts their triangles, whose ordinary support/cosupport conditions are reflected by the smooth surjections. This constructs the equivariant t structure; uniqueness of truncation gives its resolution independence and the asserted t-exactness. [given, F1, F2, F3]

2.1 For a finite family of projectors on a normalized finite resolution, the degree-zero ring comparison lifts all idempotent and orthogonality equations. The derived Cartesian supplier's telescope splits those idempotents inside the bounded constructible equivariant category. Their principal-bundle images are the original summands. The reflected perverse inequalities give the same single perverse degree after the common shift correction. If a finite-resolution perverse summand is simple, a nonzero proper subobject of its equivariant lift would give one after exact conservative normalized pullback, a contradiction. This is the finite projector route, and uses no compatible infinite splitting or derived full faithfulness of restriction to X. [given, F1, F2, F3] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
