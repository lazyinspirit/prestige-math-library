---
id: lem-finite-quiver-hall-extension-orbit-count
kind: lemma
title: "Finite-quiver Hall multiplication counts extensions by automorphism orbits"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, Lemma 2.2"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, §§1.1 and 1.3"
      url: "https://arxiv.org/pdf/math/0611617"
verification:
  precheck: pass
---

## Statement

Let $U,V$ be finite-dimensional representations over $\mathbb F_q$. For
$\kappa_M=|\operatorname{Aut}(M)|\delta_M$ and the subobject-first product
from [[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]],
$$\kappa_U\star\kappa_V =\sum_{[M]}\frac{|\operatorname{YExt}^1(V,U)_M|} {|\operatorname{Hom}(V,U)|}\,\kappa_M,$$
where $\operatorname{YExt}^1(V,U)_M$ is the set of endpoint-fixed Yoneda
classes of $0\to U\to E\to V\to0$ whose middle term is isomorphic to $M$.

## Facts & Assumptions

**Given:** Finite-dimensional $U,V$, an isomorphism class $[M]$, and the
subobject-first Hall product.

[F1] In the generic untwisted Hall convention, $[A]*_{qf}[B]$ counts short
exact sequences $0\to B\to L\to A\to0$
([[def-untwisted-hall-algebra]]).

[F2] The local convention is $f\star g=g*_{qf}f$, and
$\kappa_U=|\operatorname{Aut}(U)|\delta_U$
([[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]).

[F3] The sets $\operatorname{Hom}(V,U)$ and
$\operatorname{YExt}^1(V,U)$ are finite; the latter is the endpoint-fixed
Yoneda class set ([[lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form]]).

[F4] For fixed endpoints, the untwisted Hall product has finite support
([[lem-untwisted-hall-product-finiteness]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix the middle object to be $M$. The coefficient of $\delta_M$ in $\delta_U\star\delta_V$ counts subobjects $S\subseteq M$ with $S\cong U$ and $M/S\cong V$, by [F1] and [F2]. For each such $S$, the monomorphisms $U\to M$ with image $S$ form a set of size $|\operatorname{Aut}(U)|$; the epimorphisms $M\to V$ with kernel $S$ form a set of size $|\operatorname{Aut}(V)|$. These choices are independent. Hence the number of endpoint-fixed short exact sequences with middle object literally $M$ is $$g^M_{V,U}|\operatorname{Aut}(U)||\operatorname{Aut}(V)|,$$ where $g^M_{V,U}$ is the Hall coefficient of [F1]. [F1, F2, construct]

1.2 The finite group $\operatorname{Aut}(M)$ acts on those sequences by $(i,p)\mapsto(g i,p g^{-1})$. Its orbits are exactly the endpoint-fixed Yoneda classes with middle term isomorphic to $M$: an isomorphism from any middle object $E\cong M$ transports its sequence to one on $M$, and changing that isomorphism changes the result by this action. The stabilizer of a sequence $(i,p)$ consists of $g$ with $gi=i$ and $pg=p$. Put $h=g-1$. Since $hi=0$ and $p$ is an epimorphism, $h$ factors uniquely as $h=ifp$ for a unique $f:V\to U$. Conversely, $1+ifp$ is invertible because $(ifp)^2=0$, with inverse $1-ifp$. Thus every stabilizer has exactly $|\operatorname{Hom}(V,U)|$ elements. [F3, construct, algebra]

2.1 For a fixed sequence, the map from $\operatorname{Aut}(M)$ to its orbit has fibers exactly the cosets of its stabilizer, so that orbit has size $|\operatorname{Aut}(M)|/|\operatorname{Hom}(V,U)|$. Summing over the $|\operatorname{YExt}^1(V,U)_M|$ orbits gives $$g^M_{V,U}|\operatorname{Aut}(U)||\operatorname{Aut}(V)| =|\operatorname{Aut}(M)|\, \frac{|\operatorname{YExt}^1(V,U)_M|}{|\operatorname{Hom}(V,U)|}.$$ Multiplying the coefficient of $\delta_M$ in $\kappa_U\star\kappa_V$ by the definition of $\kappa_M$ yields precisely the claimed coefficient. Summing over the finitely many possible middle terms is valid by [F3] and [F4]. [F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
