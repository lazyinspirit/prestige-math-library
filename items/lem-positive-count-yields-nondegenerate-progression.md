---
id: lem-positive-count-yields-nondegenerate-progression
kind: lemma
title: "The finite extraction procedure terminates and returns at positive count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - alg-green-tao-prime-progression-transfer
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Theorem 1.1, printed pp. 523–524; the diagonal contribution and the short support interval"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§8, proof of Theorem 1.1, printed p. 22; discarding the zero difference and using interval support"
---
## Statement

Fix an integer $k\ge3$ and a real number $0<\epsilon<1/(8k)$. For each prime $p$ let $I_p=\{n\in\{0,1,\ldots,p-1\}:\lceil\epsilon p\rceil\le n\le\lfloor2\epsilon p\rfloor\}$ and let $f_p:\mathbb Z/p\mathbb Z\to[0,\infty)$ vanish outside $I_p$. The finite witness extraction procedure terminates on every input after testing at most $p(p-1)$ pairs. Suppose additionally that there are constants $C,c>0$ such that $\max_x f_p(x)\le C\log p$ and

$$\frac1{p^2}\sum_{x,r\in\mathbb Z/p\mathbb Z}\prod_{j=0}^{k-1}f_p(x+jr)\ge c-o(1)$$

as $p\to\infty$ through primes. Then for all sufficiently large $p$ the procedure returns a pair $(x,r)$ with $r\ne0$ and every $x+jr$ in $I_p$ with $f_p(x+jr)>0$. The standard representatives of these residues form a nonconstant integer arithmetic progression, in increasing or decreasing order.

## Statement references

[Green and Tao, §9, proof of Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §8](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** The fixed $k,\epsilon,C,c$, primes $p\to\infty$, and nonnegative functions $f_p$ with the stated support, pointwise bound, and progression-count lower bound.

[F1] [[alg-green-tao-prime-progression-transfer]]: The procedure enumerates the finite set of pairs with $x\in I_p$ and $r\ne0$ after comparing the full normalized progression count with the $r=0$ contribution.

## Proof

1.1 The set $I_p$ has at most $p$ elements and there are $p-1$ nonzero residue classes $r$. Each pair test consists of finitely many additions and comparisons, so the procedure tests at most $p(p-1)$ pairs and then returns either a witness or its failure value. Any returned pair satisfies the stated support and positivity conditions because those are exactly its return tests. [given, F1, algebra]

1.2 The diagonal contribution in the algorithm satisfies
$$D_{k,p}(f_p)=\frac1{p^2}\sum_x f_p(x)^k\le\frac{(C\log p)^k}{p}=o(1),$$
because there are at most $p$ representatives and every value is at most $C\log p$. The full normalized count is at least $c-o(1)$, so it exceeds $D_{k,p}(f_p)$ by at least $c/2$ for all sufficiently large $p$. [given, F1, algebra]

1.3 Subtracting the diagonal contribution leaves the finite nonnegative sum over $r\ne0$:
$$\frac1{p^2}\sum_x\sum_{r\ne0}\prod_{j=0}^{k-1}f_p(x+jr)>0.$$
At least one summand is positive, and therefore every factor in that product is positive. Since $f_p$ vanishes outside $I_p$, all corresponding residues lie in $I_p$. The exhaustive finite search visits this pair and returns a supported nondegenerate witness. [given, F1, step 1.2, algebra]

1.4 Let $I_p=[a_p,b_p]\cap\mathbb Z$ and $L_p=b_p-a_p$. For sufficiently large $p$, $L_p\le2\epsilon p$ and $b_p\le2\epsilon p$. Let $r_0\in\{1,\ldots,p-1\}$ represent the returned difference. If both $r_0>L_p$ and $p-r_0>L_p$, then the second residue is either $x+r_0>b_p$ without wraparound or $x-(p-r_0)<a_p$ after wraparound, contradicting that it lies in $I_p$. Thus either $r_0\le L_p$ or $s=p-r_0\le L_p$. In the first case, adding $r_0$ to any member of $I_p$ stays below $b_p+L_p\le4\epsilon p<p$, so the sequence lifts without wraparound to an increasing integer progression. In the second case, subtracting $s$ cannot wrap below $0$ and return to $I_p$: such a wrap would land at least at $p-L_p>b_p$. Hence the sequence is an integer progression with step $-s$; reversing its order gives positive common difference. [given, step 1.3, algebra] ∎
## Proof status

The finite search, termination, and short-interval lift are proved locally. This lemma does not establish the positive progression-count input used by the Green–Tao theorem.
