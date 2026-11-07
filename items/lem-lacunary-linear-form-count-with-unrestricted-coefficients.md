---
dependency_level: 0
id: lem-lacunary-linear-form-count-with-unrestricted-coefficients
kind: lemma
title: "Lacunary linear-form count for arbitrary coefficient cutoffs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
proof_strategy: direct
sources:
  references:
    - title: "Chow–Technau, Dispersion and Littlewood's conjecture"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "§2 Lemmas 2.1–2.2; the coefficient cutoff restriction is removed by the block width used here"
---

## Statement

Let $r>1$ and let $(a_z)_{z\ge1}$ be positive numbers with $a_{z+1}>ra_z$. For integers $Z\ge2,m\ge1$, real $Y\ge2$, and $0\le K\le a_Z/8$, let $N$ count ordered tuples of integers $(z_1,\ldots,z_m,y_1,\ldots,y_m)$ with $Z<z_i\le2Z$, $0<|y_i|\le Y$, and $|\sum_i y_i a_{z_i}|\le K$. Put
$$W=\left\lceil\frac{\log(16mY)}{\log r}\right\rceil,\qquad C_r=64\left(3+\left\lceil\frac{\log3}{\log r}\right\rceil\right).$$
Then, with no upper restriction on $Y$ or $m$,
$$N\le m!C_r^m\max\{(YZW)^{m/2},\ Y^{m-1}ZW^{m-1}\}.$$

## Statement references

[Chow–Technau, Lemmas 2.1–2.2](https://arxiv.org/pdf/2307.14871v1) — ordered clusters, with arbitrary-cutoff width and both coefficient signs treated below.

## Facts & Assumptions

**Given:** $r,(a_z),Z,m,Y,K,W,C_r$ as stated.

[F1] For $A_1\ge\cdots\ge A_s>0$ and a fixed real $b$, the number of integer tuples $|y_i|\le Y$ satisfying $|\sum_i A_i y_i+b|\le A_1$ is at most $3(2\lfloor Y\rfloor+1)^{s-1}\le8^sY^{s-1}$. Indeed fix $y_2,\ldots,y_s$; the allowable interval for $y_1$ has length2 and contains at most three integers. The displayed numerical bound follows from $Y\ge2$.

## Proof

**Proof technique:** finite ordered-block counting.

1.1 For $m=1$ there are no solutions, since $|y_1|a_{z_1}\ge a_{Z+1}>K$. For $m\ge2$, arrange the indices in decreasing order $z_1\ge\cdots\ge z_m$, paying at most $m!$ for their labels, including repetitions. Starting at the first unassigned index $z_h$, place in its block all subsequent indices at least $z_h-W$. The next block leader, if present, has index less than $z_h-W$ and hence $a$-value less than $r^{-W}a_{z_h}$. There are at most $2^{m-1}$ possible lists of block sizes. [given, construct]

2.1 Fix a block-size list with $\ell$ blocks, of which $t$ have at least two members. Choose all indices in the nonsingleton blocks: their leaders have at most $Z$ choices each, and every other index of such a block has at most $W+1$ choices. This costs at most $Z^t(W+1)^{m-\ell}$. Choose all singleton coefficients in advance, costing at most $(2Y)^{\ell-t}$. These choices may include incompatible block arrangements, which only enlarges the count. Process the blocks from left to right, so the sum $b$ of all preceding blocks is determined at each stage. [step 1.1, construct]

3.1 For a block led by $z_h$, the absolute sum of all later blocks in a possible completion is at most $mY r^{-W}a_{z_h}\le a_{z_h}/16$. Also $K\le a_Z/8<a_{z_h}/8$. Consequently its own sum plus $b$ has modulus less than $a_{z_h}/2$. For a nonsingleton block of size $s$, F1 bounds its coefficient choices by $8^sY^{s-1}$, since its leading coefficient $a_{z_h}$ is largest. [given, F1, step 1.1, step 2.1, algebra]

4.1 For a singleton its nonzero integer coefficient $y$ is already fixed, and the last inequality requires $|b+ya_{z_h}|<a_{z_h}/2$. If $b=0$ this is impossible. Otherwise the triangle inequality and its reverse imply $\frac{|b|}{|y|+1/2}<a_{z_h}<\frac{|b|}{|y|-1/2}.$ The endpoint ratio is at most3, so lacunarity permits at most $3+\lceil\log3/\log r\rceil$ choices of $z_h$. This reasoning is valid for either sign of $b$ or $y$. In particular the first block cannot be a singleton, since its preceding sum is zero, and therefore every viable list has $1\le t\le m/2$. [step 3.1, given, algebra]

5.1 Multiplying step 2.1 and the successive block bounds gives, before labels and block-list enumeration, at most $[16(3+\lceil\log3/\log r\rceil)]^m Z^tY^{m-t}W^{m-\ell}$: use $W+1\le2W$, absorb singleton coefficient factors, and sum the nonsingleton coefficient exponents $s-1$. Since $\ell\ge t$ and $W\ge1$, this is bounded by the same constant times $Z^t(YW)^{m-t}$. As a function of real $t$ this is geometric, so on $1\le t\le m/2$ its maximum occurs at one of the endpoints. Their values are $ZY^{m-1}W^{m-1}$ and $(YZW)^{m/2}$. The factor $m!2^{m-1}$ from ordering and block lists is absorbed by the stated $m!C_r^m$. This proves the assertion in all parameter ranges. [step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

