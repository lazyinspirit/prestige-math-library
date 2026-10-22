---
id: lem-euclidean-parametric-transversality-and-canonical-good-parameters
kind: lemma
title: Euclidean parametric transversality and canonical good parameters
status: draft
origin: session
deps:
  - thm-morse-sard-for-euclidean-maps
  - thm-euclidean-inverse-function-theorem
  - thm-transverse-preimage-theorem
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $U\subseteq\mathbb R^d$ and $P\subseteq\mathbb R^k$ be open, $k\ge1$, and let $F:U\times P\to\mathbb R^c$ be smooth and transverse to zero. The parameters $p$ for which $F_p$ fails to be transverse to zero form a countable union of compact null sets in $\mathbb R^k$. In particular every nonempty parameter ball contains a good parameter. The same conclusion holds for finitely many such families and finitely many source boundary strata with specified Euclidean coordinates. No choice principle is required.

If a resulting compact-source curve family has every time slice an embedding for some parameter, then the set of parameters with that property is open. Consequently, if arbitrarily small such parameters exist, one may select them by taking the first qualifying rational tuple in any fixed enumeration, subject to any additional open smallness constraints.

## Facts & Assumptions

**Given:** The Euclidean smooth family in the Statement.

[F1] The Euclidean Morse–Sard theorem is choice-free. Its proof also establishes that a countable union of compact null sets is null without countable choice: choose, for each compact set and rational volume budget, the first finite rational-cube cover below that budget, then sum a prescribed geometric budget sequence. [[thm-morse-sard-for-euclidean-maps]]

[F2] A smooth map with invertible derivative has a unique smooth inverse on a sufficiently small neighborhood, and a transverse zero set has tangent space equal to the derivative kernel. [[thm-euclidean-inverse-function-theorem]], [[thm-transverse-preimage-theorem]]

## Proof

**Given:** $F$, its open source and parameter sets, and transversality to zero.

1.1 Put $Z=F^{-1}(0)$ and let $\pi:Z\to P$ be the parameter projection. By [F2], $Z$ is a smooth submanifold with tangent space $\ker dF$. At $(x,p)\in Z$, surjectivity of $d_xF$ implies surjectivity of $d\pi$: for any parameter tangent $w$, solve $d_xF(v)=-d_pF(w)$. Conversely if $d\pi$ is surjective, for every $w$ there is $v$ with $d_xF(v)+d_pF(w)=0$. Every vector in $\mathbb R^c$ is $d_xF(a)+d_pF(b)$ because $dF$ is onto; subtracting a tangent lift of $b$ expresses it as $d_xF(a-v)$. Thus $d\pi$ is onto exactly when $d_xF$ is onto. The bad parameters are exactly the critical values of $\pi$. [F2, given, algebra]

2.1 Here is an explicit countable chart construction requiring no selection of charts at individual points. For every choice $J$ of $c$ source/parameter coordinate positions, form $\Theta_J$, whose coordinates are $F$ and the remaining $d+k-c$ coordinates. Consider all rational open boxes $B$ with closure inside $U\times P$ for which $d\Theta_J$ is invertible throughout $B$ and $\Theta_J|_B$ is injective. There are only countably many pairs $(J,B)$. At each point of $Z$, some $J$ works by surjectivity of $dF$, and [F2] gives an inverse neighborhood containing a rational box about that point. Thus these boxes cover $Z$. Each qualifying box determines a unique smooth inverse, not a chosen one. Restricting it to the zero coordinates of $F$ gives a chart of $Z\cap B$ with open Euclidean domain $V_{J,B}\subseteq\mathbb R^{d+k-c}$. The parameter projection in that chart is a specified smooth Euclidean map $q_{J,B}:V_{J,B}\to\mathbb R^k$. [F2, step 1.1, construct]

3.1 For every such chart enumerate all rational closed cubes $Q$ lying in its domain. Its critical locus intersected with $Q$ is compact, and its image $E_{J,B,Q}$ under $q_{J,B}$ is compact and null by [F1]. These compact sets cover the critical values of $\pi$, by step 1.1 and the chart cover. There is a countable index set of triples $(J,B,Q)$ and the associated compact sets are uniquely defined. The canonical finite-cover argument in [F1] makes their union null without selecting countably many covers. A nonempty parameter ball has positive volume and cannot lie in that union. Finite unions of families or boundary strata are handled by joining their countable index sets. This proves the transversality assertions. [F1, step 1.1, step 2.1, construct]

4.1 To prove the final openness assertion, fix a smooth family $a_p:[0,1]\times[0,1]\to\mathbb R^n$ for which every $a_{p_0}(\cdot,t)$ is an embedding. Compactness gives a positive lower bound for its source derivative norm. Uniform continuity of that derivative gives a source distance $r>0$ such that, for $|s-s'|<r$, projection onto the derivative direction at $s'$ is strictly monotone along the intervening segment; this proves injectivity there, uniformly in $t$. This condition persists under sufficiently small uniform $C^1$ perturbations. For $|s-s'|\ge r$, the continuous distance $|a_{p_0}(s,t)-a_{p_0}(s',t)|$ has positive minimum on the compact set of such triples. That separation also persists under small uniform perturbations. Thus immersion and injectivity of all slices persist for parameters near $p_0$. Parameter dependence on a compact source is continuous in these uniform norms. Therefore the good-embedding parameter set is open. Its intersection with any further prescribed open smallness condition is open; if nonempty, it contains a rational tuple. A fixed enumeration of rational tuples has a least qualifying index, giving the asserted explicit selection. [given, construct, algebra] ∎

## Remarks

The compact-source openness assertion is used only for selecting parameters that give embeddings, not for arbitrary transversality conditions on noncompact domains. No assertion that a general full-measure parameter set contains rational points is made.
