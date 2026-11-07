---
dependency_level: 0
id: lem-primitive-subgroup-wedges-and-rank-one-extension-bounds
kind: lemma
title: "Primitive subgroup wedges and rank-one covolume bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-bezout-identity
  - thm-division-algorithm-in-z
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis, Flows on homogeneous spaces and Diophantine approximation on manifolds"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§5, Lemma 5.1 and the primitive-subgroup proof of Theorem 5.2"
---

## Statement

Let $m\ge1$ and $h\in\operatorname{GL}_m(\mathbb R)$. A subgroup $\Gamma\subset\mathbb Z^m$ is primitive if $\Gamma=(\operatorname{span}_{\mathbb R}\Gamma)\cap\mathbb Z^m$. Such a subgroup of rank $r$ has an integer basis and an exterior vector $w_\Gamma\in\bigwedge^r\mathbb Z^m$, well defined up to sign, with Euclidean covolume $\psi_\Gamma(h)=\|\bigwedge^r h(w_\Gamma)\|_2$. Put $\psi_{\{0\}}=1$.

The primitive subgroups form a countable poset under inclusion, whose nonzero members have chain length at most $m$. For each $A<\infty$ there are only finitely many primitive subgroups with $\psi_\Gamma(h)\le A$.

If $\Gamma$ is primitive and $v\in\mathbb Z^m\setminus\operatorname{span}_{\mathbb R}\Gamma$, set $\Lambda=(\operatorname{span}_{\mathbb R}(\Gamma\cup\{v\}))\cap\mathbb Z^m$. Then
$$\psi_\Lambda(h)\le\psi_\Gamma(h)\,\|hv\|_2.$$

## Statement references

[Kleinbock–Margulis, §5](https://arxiv.org/pdf/math/9810036v1) — primitive subgroup and exterior-norm arguments.

## Facts & Assumptions

**Given:** A positive integer $m$, an invertible real matrix $h$, and the subgroups and vectors in the Statement. Exterior powers have the Euclidean norm in the standard wedge basis.

[F1] Integer division and Bézout's identity hold. [[thm-division-algorithm-in-z]], [[thm-bezout-identity]] Iterating the two-integer identity gives it for finite lists. For a pair $(a,b)\ne(0,0)$ with $ua+vb=g=\gcd(a,b)>0$, the matrix with rows $(u,v)$ and $(-b/g,a/g)$ has determinant1 and sends that pair to $(g,0)$; zero pairs are skipped. These explicit integer operations and signed coordinate swaps justify the reductions below.

## Proof

**Proof technique:** finite integer elimination and Euclidean exterior algebra.

1.1 Every subgroup $H\subset\mathbb Z^m$ is free on at most $m$ generators. The case $m=0$ is the trivial group. Induct on $m$: the last-coordinate image is either0 or $a\mathbb Z$ with $a>0$ its least positive element. In the latter case take one element $u\in H$ with last coordinate $a$; subtracting integer multiples of $u$ identifies the kernel with a subgroup of $\mathbb Z^{m-1}$ and gives $H=\ker\oplus\mathbb Zu$. In the zero-image case use only the kernel. This is a finite induction and invokes only finitely many existential choices for the fixed group. Two bases of $H$ are related by inverse integer matrices, whose determinants are $\pm1$, so their top exterior vectors differ only by sign. [given, F1, construct]

2.1 A primitive subgroup $\Gamma$ is a direct summand of $\mathbb Z^m$. Indeed, choose a nonzero vector of $\Gamma$ if it is nonzero and divide its coordinates by their greatest common divisor. The resulting vector still lies in $\Gamma$ by primitivity. Bézout row operations carry it to $e_1$. Subtracting first coordinates then writes the transformed group as $\mathbb Ze_1\oplus\Gamma'$ with $\Gamma'$ primitive in $\mathbb Z^{m-1}$: any integer point in its real span is also an integer point in the real span of the full group. Induction supplies an integer basis of $\mathbb Z^m$ whose first $r$ elements form a basis of $\Gamma$. The zero subgroup is immediate. In particular the real span of a rank-$r$ primitive subgroup has dimension $r$. [step 1.1, F1, construct]

3.1 The set of finite integer vectors is countable by explicit finite-coordinate enumeration, and so is the set of finite lists of such vectors. Each subgroup has such a generating list by step 1.1; choose its least indexed generating list to inject the set of subgroups into $\mathbb N$. If two primitive subgroups have the same span, both equal the integer points in that span and hence coincide. Therefore strict inclusion of primitive subgroups strictly increases rank, which proves the chain-length assertion. [step 1.1, step 2.1, construct]

3.2 If $A<0$ the family is empty because covolumes are nonnegative. Otherwise, for fixed rank $r$, the coordinate vector $w_\Gamma$ is an integer point in a fixed finite-dimensional exterior space. The covolume bound implies $\|w_\Gamma\|_2\le\|\bigwedge^r h^{-1}\|\,A$, so there are finitely many possible integer coordinate vectors. A nonzero decomposable exterior vector determines its span as $\{x:x\wedge w_\Gamma=0\}$; a primitive subgroup is then recovered as its integer points. Thus each wedge up to sign determines at most one primitive subgroup. Sum over the finitely many ranks, including rank0. This proves the finiteness assertion, and also justifies the covolume definition by basis change. [step 1.1, step 2.1, algebra]

3.3 Apply the direct-summand coordinates from step 2.1 to $\Gamma$. In the quotient coordinate space $\mathbb Z^{m-r}$ the image of $\Lambda$ is the integer points on the line through the nonzero image of $v$. Dividing that integer vector by the greatest common divisor of its coordinates shows those points form $\mathbb Z\bar u$ for a primitive vector $\bar u$, and the image of $v$ is $a\bar u$ for a nonzero integer $a$. Lift $\bar u$ to $u\in\Lambda$. A basis $\gamma_1,\ldots,\gamma_r$ of $\Gamma$, followed by $u$, is a basis of $\Lambda$, and $v=au+\gamma$ for some $\gamma\in\Gamma$. [step 2.1, F1, construct]

4.1 Consequently $|a|\psi_\Lambda(h)=\|(h\gamma_1\wedge\cdots\wedge h\gamma_r)\wedge hv\|_2$. Orthogonal projection of $hv$ to the perpendicular complement of the span of the $h\gamma_i$ shows this last norm is the product of $\psi_\Gamma(h)$ and the length of that projection, at most $\psi_\Gamma(h)\|hv\|_2$. Since $|a|\ge1$, this proves the inequality. The same computation with the empty exterior vector proves it for $r=0$, with covolume1 and no assumption that1 is at most any auxiliary threshold. [step 3.3, algebra] ∎

