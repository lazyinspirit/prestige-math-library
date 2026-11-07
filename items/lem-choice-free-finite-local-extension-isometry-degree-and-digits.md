---
dependency_level: 5
id: lem-choice-free-finite-local-extension-isometry-degree-and-digits
kind: lemma
title: "Choice-free finite local extension isometry, degree, and digits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-choice-free-norm-equivalence-over-finite-residue-local-field
justified_by: []
proof_strategy: direct
axiom_use: "ZF; valuations are supplied as part of the finite valued extension, and only finite bases/representatives and single-valued recursions are chosen."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad, Ostrowski for number fields, \u00a7\u00a75\u20136; finite-residue compactness specialization below"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter I \u00a75 and Chapter III \u00a7\u00a71\u20134"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Let $L/K$ be a finite extension of nonarchimedean local fields with compatible normalized valuations, so $v_L|_{K^\times}=e\,v_K$ for a positive integer $e$. Put $n=[L:K]$ and $f=[k_L:k_K]$. Then $n=ef$, every $K$-automorphism of $L$ preserves $v_L$, and every intermediate field, with the restricted and renormalized valuation, is a local field. If $k_L=k_K$ and $\varpi$ is a uniformizer of $L$, then $L=K(\varpi)$, and each element of $L$ has a convergent Laurent expansion in $\varpi$ with coefficients in a fixed finite ordered set of residue representatives in $\mathcal O_K$. Once that set is fixed the digits are uniquely determined. All assertions are in ZF.

## Statement references

[[lem-choice-free-norm-equivalence-over-finite-residue-local-field]]

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] Over the given finite-residue complete field, finite-dimensional norm equivalence, completeness and closedness of subspaces hold without choice. [[lem-choice-free-norm-equivalence-over-finite-residue-local-field]]

## Proof

**Given:** The data and conventions above.

1.1 Put $|x|=q_K^{-v_L(x)/e}$ on $L$; it restricts to $|\,\cdot\,|_K$. If $\sigma$ is a $K$-automorphism, both $x\mapsto|x|$ and $x\mapsto|\sigma x|$ are norms on the finite-dimensional $K$-space $L$. By [F1] they are equivalent: $c|x|\le|\sigma x|\le C|x|$. Apply these bounds to $x^r$ for all positive integers $r$ and take $r$th roots. Multiplicativity gives $|\sigma x|=|x|$, hence $v_L(\sigma x)=v_L(x)$. [F1, given, algebra]

1.2 For a $K$-basis $b_1,\ldots,b_n$ put $\Lambda=\sum\mathcal O_K b_i$. Norm equivalence gives $r\ge0$ with $\pi_K^r\Lambda\subseteq\mathcal O_L\subseteq\pi_K^{-r}\Lambda$. Over the discrete valuation ring $\mathcal O_K$, each submodule of a finite-rank free module is finite free: project to a coordinate ideal, choose its generator and one preimage if it is nonzero, split that rank-one summand, and induct on the rank of the kernel. These are finitely many choices. Since $\mathcal O_L$ contains $\pi_K^r\Lambda$, its rank is $n$. [F1, given, algebra]

2.1 If $E$ is intermediate, it is a closed finite-dimensional $K$-subspace of $L$ by [F1] and is complete (or apply the completeness assertion in [F1] directly). The subgroup $v_L(E^\times)$ of $\mathbb Z$ contains $e\mathbb Z$ and is $h\mathbb Z$ for a positive divisor $h$ of $e$. Renormalize by $h$. The residue field of $E$ embeds into the finite field $k_L$, so is finite. The renormalized valuation metric gives the same Cauchy sequences, hence makes $E$ a local field. [F1, step 1.1, algebra]

2.2 Hence $\dim_{k_K}(\mathcal O_L/\pi_K\mathcal O_L)=n$. But $\pi_K\mathcal O_L=\varpi^e\mathcal O_L$, and the filtration by $\varpi^i\mathcal O_L$, $0\le i\le e$, has $e$ successive quotients, each isomorphic to $k_L$ by multiplication by $\varpi^i$. The final residue quotient of the finite-dimensional space shows that $f$ is finite; additivity of dimension then gives $n=ef$. [step 1.2, algebra]

3.1 If $k_L=k_K$, choose once a finite ordered representative set $S\subset\mathcal O_K$, including $0$, for this field. For $x\ne0$, start at $a=v_L(x)$. At step $j\ge a$, the unique $s_j\in S$ congruent to the remainder divided by $\varpi^j$ removes its residue, leaving valuation at least $j+1$. The remainder is allowed to have valuation larger than $j$, in which case $s_j=0$. This deterministic recursion gives $x=\sum_{j\ge a}s_j\varpi^j$ by completeness; $x=0$ has the zero expansion. If two expansions differed, their first differing coefficient would be a unit and could not cancel higher terms, proving uniqueness. Each finite partial sum lies in $K(\varpi)$. That field is a finite-dimensional $K$-subspace of $L$ and is closed by [F1], so it contains the limit $x$. Thus $L=K(\varpi)$. [F1, step 2.1, step 2.2, construct] ∎ 