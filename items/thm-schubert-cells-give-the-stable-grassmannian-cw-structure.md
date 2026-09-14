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
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.17"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complete characteristic-ball and CW proof, printed pp.33–35"
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

**Given:** $\mathbb F=\mathbb R$ or $\mathbb C$, $0\leq n\leq N$, and the
coordinate flag.

[F1] A Schubert symbol $a$ has a cell
$e(a)\cong\mathbb F^{d(a)}$ with $d(a)=\sum_i(a_i-i)$
([[def-schubert-cells-in-real-and-complex-grassmannians]]).

[F2] A CW structure requires characteristic disks, closure finiteness, and
the weak topology
([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

## Proof

**Proof technique:** induction.

1.1 For a symbol $a$, replace the normalized echelon rows by the unique orthonormal echelon frame $(v_1,\ldots,v_n)$ whose last nonzero coordinate is $a_i$ and is nonnegative real. Thus $v_i$ lies in a closed hemisphere $H_i$ of dimension $a_i-1$ over $\mathbb R$ or $2a_i-2$ over $\mathbb C$. The space $D(a)$ of these mutually orthogonal frames is a closed ball of real dimension $d(a)$ or $2d(a)$: project to $v_1\in H_1$, rotate $v_1$ to $e_{a_1}$ while fixing its orthogonal complement, identify the fiber with the analogous construction for $(a_2-1,\ldots,a_n-1)$, and induct on $n$. For $n=0$ it is a point. [F1, construct]

2.1 The span map $\chi_a:D(a)\to\operatorname{Gr}_n(\mathbb F^N)$ restricts on the interior, where every last pivot coordinate is positive, to the pivot-coordinate homeomorphism onto $e(a)$ from [F1]. On the boundary at least one last pivot coordinate is zero; echelon reduction then lowers at least one pivot and never increases another. Hence $\chi_a(\partial D(a))$ lies in the union of cells $e(b)$ with $b_i\leq a_i$ for all $i$ and $b\ne a$, all of smaller dimension. [F1, step 1.1]

3.1 Induct on the real cell dimension. The zero-dimensional cells form a finite discrete CW complex. If the union $X_r$ of cells of dimension at most $r$ has the asserted CW structure, attach the finitely many disks $D(a)$ of dimension $r+1$ by the boundary maps in step 2.1. The resulting finite CW complex maps continuously and bijectively to the union $X_{r+1}$. Its source is compact, while the Grassmannian is Hausdorff because distinct planes are separated by a squared projection-length function; therefore the map is a homeomorphism. This completes the dimension induction and proves the finite CW structure and closure order. [F2, step 2.1, construct]

4.1 Under the coordinate inclusion $\mathbb F^N\subseteq\mathbb F^{N+1}$, the cells with $a_n\leq N$ retain the same symbols and characteristic disks, so they form a subcomplex. The stable Grassmannian has the weak topology with respect to these stages; hence [F2] identifies their union as the asserted CW complex. If a subcomplex has dimension at most $r$, then [F1] gives $a_i-i\leq d(a)\leq r$, hence $a_i\leq i+r$ for every symbol it uses. Only finitely many such symbols exist and all have $a_n\leq n+r$, so the subcomplex lies in the finite stage $\operatorname{Gr}_n(\mathbb F^{n+r})$. [F1, F2, step 3.1] ∎
