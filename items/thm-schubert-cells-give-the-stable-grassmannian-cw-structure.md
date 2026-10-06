---
id: thm-schubert-cells-give-the-stable-grassmannian-cw-structure
kind: theorem
title: Schubert cells give the stable Grassmannian CW structure
status: published
origin: pipeline
deps: [def-schubert-cells-in-real-and-complex-grassmannians, def-cw-complex-with-closure-finiteness-and-weak-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  repair: research/frontier-41-ha-dt-29-owner-published-repair-evidence/thm-schubert-cells-give-the-stable-grassmannian-cw-structure.repair.json
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.17"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complete characteristic-ball and CW proof, printed pp.33–34"
    - title: "Milnor and Stasheff, Characteristic Classes, §6"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Lemmas 6.2–6.3 and Theorem 6.4, printed pp.73–80"
---

## Statement

The Schubert strata are open cells whose closures are unions of cells with
componentwise smaller pivot symbols. They form a finite CW structure on
$\operatorname{Gr}_n(\mathbb F^N)$, and the standard inclusions
$\operatorname{Gr}_n(\mathbb F^N)\to
\operatorname{Gr}_n(\mathbb F^{N+1})$ are cellular subcomplex inclusions.
Their union is the stated CW structure on
$\operatorname{Gr}_n(\mathbb F^\infty)$, and each finite-dimensional
subcomplex is contained in a finite stage.

## Facts & Assumptions

**Given:** $\mathbb F=\mathbb R$ or $\mathbb C$, $0\leq n\leq N$, and the coordinate flag.

[F1] A Schubert symbol $a$ has a cell $e(a)\cong\mathbb F^{d(a)}$ with $d(a)=\sum_i(a_i-i)$ ([[def-schubert-cells-in-real-and-complex-grassmannians]]).

[F2] A CW structure requires characteristic disks, closure finiteness, and the weak topology ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

## Proof

**Proof technique:** induction.

1.1 For a symbol $a$, each plane of $e(a)$ has a unique orthonormal echelon frame $(v_1,\ldots,v_n)$ with $v_i\in\mathbb F^{a_i}$ and positive real $a_i$th coordinate: orthonormalize its flag of subspaces of dimensions $1,\ldots,n$. Let $H_i$ instead be the closed hemisphere of unit vectors in $\mathbb F^{a_i}$ whose $a_i$th coordinate is real and nonnegative, and let $D(a)$ consist of all mutually orthogonal frames with $v_i\in H_i$, allowing zero pivot coordinates. Project to $v_1\in H_1$ and put $v_0=e_{a_1}$. There is a continuous family of orthogonal (real case) or unitary (complex case) maps $\rho_v$ carrying $v$ to $v_0$, equal to the identity outside their span and at $v=v_0$: use the plane rotation in the real case and the determinant-one unitary map on their complex two-plane in the complex case. The nonnegative real coordinate ensures $v\ne-v_0$, and these maps tend to the identity as $v\to v_0$. In particular they fix the common perpendicular of $v$ and $v_0$, rather than $v^\perp$ alone. They act only in $\mathbb F^{a_1}$, so preserve $H_i$ and its boundary for $i>1$. Applying $\rho_v$ to the remaining vectors trivializes the projection, with fiber $D(a_2-1,\ldots,a_n-1)$ after deleting coordinate $a_1$. Induction, starting with $n=0$, identifies $D(a)$ with a product of closed balls, hence a closed ball of real dimension $d(a)$ or $2d(a)$. Its boundary is exactly where at least one pivot coordinate is zero. [F1, construct]

2.1 The span map $\chi_a:D(a)\to\operatorname{Gr}_n(\mathbb F^N)$ restricts on the interior, where every last pivot coordinate is positive, to the pivot-coordinate homeomorphism onto $e(a)$ from [F1]. On the boundary at least one last pivot coordinate is zero; echelon reduction then lowers at least one pivot and never increases another. Hence $\chi_a(\partial D(a))$ lies in the union of cells $e(b)$ with $b_i\leq a_i$ for all $i$ and $b\ne a$, all of smaller dimension. [F1, step 1.1]

3.1 Induct on the real cell dimension. The zero-dimensional cells form a finite discrete CW complex. If the union $X_r$ of cells of dimension at most $r$ has the asserted CW structure, attach the finitely many disks $D(a)$ of dimension $r+1$ by the boundary maps in step 2.1. The resulting finite CW complex maps continuously and bijectively to the union $X_{r+1}$. Its source is compact, while the Grassmannian is Hausdorff because distinct planes are separated by a squared projection-length function; therefore the map is a homeomorphism. This completes the dimension induction and proves the finite CW structure and closure order. [F2, step 2.1, construct]

4.1 Under the coordinate inclusion $\mathbb F^N\subseteq\mathbb F^{N+1}$, the cells with $a_n\leq N$ retain the same symbols and characteristic disks, so they form a subcomplex. The stable Grassmannian has the weak topology with respect to these stages; hence [F2] identifies their union as the asserted CW complex. If a subcomplex has dimension at most $r$, then [F1] gives $a_i-i\leq d(a)\leq r$, hence $a_i\leq i+r$ for every symbol it uses. Only finitely many such symbols exist and all have $a_n\leq n+r$, so the subcomplex lies in the finite stage $\operatorname{Gr}_n(\mathbb F^{n+r})$. [F1, F2, step 3.1] ∎
