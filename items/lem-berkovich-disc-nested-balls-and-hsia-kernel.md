---
dependency_level: 2
id: lem-berkovich-disc-nested-balls-and-hsia-kernel
kind: lemma
title: "Nested-disc representation and the Hsia kernel on a Berkovich unit disc"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-berkovich-projective-line-by-polynomial-seminorms
  - lem-berkovich-projective-line-compactness-and-classical-density
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, Proposition1.1 and §3"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed and nontrivially nonarchimedean, and let $D_L$ be its polynomial-seminorm unit disc. Write $s_a(x)=x(T-a)$ and $r_x=\inf_{a\in L}s_a(x)$. Every $x\in D_L$ is a pointwise limit of disc seminorms associated to nested closed discs $B(a_n,r_n)\subset B(0,1)$ with $r_n=s_{a_n}(x)\downarrow r_x$. The disc seminorm at $(a,r)$ is
$$x_{a,r}\!\left(\sum_i c_i(T-a)^i\right)=\max_i|c_i|r^i,$$
where the term of degree zero is $|c_0|$, including when $r=0$. One has $r_x=0$ exactly for classical evaluation points. The **unit-disc Hsia kernel**
$$\delta_D(x,y)=\inf_{a\in L}\max(s_a(x),s_a(y))$$
takes values in $[0,1]$, is symmetric and upper semicontinuous jointly, is continuous off the diagonal, and is continuous in either variable with the other fixed. Moreover $\delta_D(x,x)=r_x$, and $\delta_D(a,b)=|a-b|$ for classical unit-disc points. If $y$ is nonclassical, then $\delta_D(x,y)\ge r_y>0$ for all $x$.

## Statement references

[[def-axiom-of-choice]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

[[lem-berkovich-projective-line-compactness-and-classical-density]]

## Facts & Assumptions

**Given:** The valued field and seminorm disc in the statement.

[F1] Disc points are multiplicative nonarchimedean seminorms, their values on polynomials are continuous coordinates, and the classical unit disc is dense. Every polynomial splits over $L$. ([[def-berkovich-projective-line-by-polynomial-seminorms]], [[lem-berkovich-projective-line-compactness-and-classical-density]])

[A1] Full Choice allows the countably many centers chosen to approximate a real infimum below. No countable dense subset of $L$ is assumed. ([[def-axiom-of-choice]])

## Proof

1.1 For $r>0$ the displayed weighted coefficient maximum defines a multiplicative seminorm. Its strong triangle inequality is termwise. For multiplicativity, in each factor choose the largest index attaining its weighted maximum. In the product coefficient at the sum of these indices, their product is the unique term attaining the product of the two maxima: in every other term at least one index exceeds its chosen largest maximizing index. That term has strictly smaller weighted size, so cannot cancel the maximal term. The reverse product bound follows termwise, proving equality. At $r=0$ the formula is evaluation at $a$. Factoring a polynomial over $L$ consequently gives $x_{a,r}(c\prod_j(T-b_j))=|c|\prod_j\max(r,|a-b_j|)$. [F1, algebra]

1.2 For fixed $x$, all centers of modulus $>1$ have $s_a(x)=|a|>1$, while $s_0(x)\le1$. Thus the infimum $r_x$ may be taken over the classical unit disc. If $s_a(x)\ge s_b(x)$ then $|a-b|\le s_a(x)$, with equality when the two seminorm values differ. Hence $B(b,s_b(x))\subset B(a,s_a(x))$. By the definition of infimum and [A1], choose centers whose values approach $r_x$, replacing each successively by a center of smallest value among those already chosen and including $0$ initially. This gives a nonincreasing sequence $r_n=s_{a_n}(x)\to r_x$ and nested discs in the unit disc. [F1, A1, algebra]

1.3 For any $b\in L$, if $s_b(x)=r_x$ then $|a_n-b|\le r_n$, so $x_{a_n,r_n}(T-b)=r_n\to s_b(x)$. If $s_b(x)>r_x$, then eventually $r_n<s_b(x)$; the strict case in step 1.2 gives $|a_n-b|=s_b(x)$, so the same disc-seminorm values eventually equal $s_b(x)$. Factorization in step 1.1 proves convergence on every polynomial. If $r_x=0$, the centers are Cauchy because $|a_n-a_m|\le r_n$ for $m\ge n$, and converge by completeness to some $a\in L$. Their disc values then converge to evaluation at $a$. Conversely evaluation at $a$ has $s_a=0$, proving the characterization of classical points. Empty intersections when $r_x>0$ are not excluded. [F1, step 1.1, step 1.2, algebra]

2.1 The kernel is symmetric, lies in $[0,1]$ by choosing center $0$, and has diagonal value $r_x$. On classical points the ultrametric inequality gives $|a-b|\le\max(|a-c|,|b-c|)$ for every $c$, and choosing $c=a$ proves equality with the kernel. Since each function $(x,y)\mapsto\max(s_a(x),s_a(y))$ is continuous, their infimum is upper semicontinuous. [F1, algebra]

2.2 Fix $y$ and a nested sequence $(a_n,r_n)$ from step 1.2, and put $h_n(x)=\max(s_{a_n}(x),r_n)$. These functions are continuous and nonincreasing, by the nesting inequality and the seminorm triangle inequality. Also $\delta_D(x,y)\le h_n(x)$ by using center $a_n$. For any other center $b$, one has $h_n(x)\le\max(s_b(x),|a_n-b|,r_n)$; by step 1.3 the right side tends to $\max(s_b(x),s_b(y))$. Thus $\lim_nh_n(x)\le\delta_D(x,y)$, proving equality. If $h_n(x)>r_n$, the strict triangle inequality forces $s_{a_m}(x)=s_{a_n}(x)$ for every $m\ge n$, so the sequence has already stabilized at $x$. Otherwise $h_n(x)\le r_n$, and its limit is at least $r_y$, because $h_m(x)\ge r_m\ge r_y$. Consequently
$$0\le h_n(x)-\delta_D(x,y)\le r_n-r_y$$
uniformly in $x$. Uniform convergence proves continuity of the slice. Symmetry gives the other slice, and the infimum definition gives $\delta_D(x,y)\ge r_y$. [F1, step 1.2, step 1.3, step 2.1, algebra]

3.1 Distinct points $x,y$ differ on some linear polynomial $T-c$, because factorization determines every polynomial value from its linear factors. Suppose $s_c(x)<s_c(y)$. For every center $a$, the inequalities $s_c(y)\le\max(s_a(y),|a-c|)$ and $|a-c|\le\max(s_a(x),s_c(x))$ imply $s_c(y)\le\max(s_a(x),s_a(y))$. Choosing $a=c$ therefore shows $\delta_D(x,y)=s_c(y)$. The strict inequality persists on a neighborhood of $(x,y)$, and there the same identity expresses the kernel as one continuous polynomial coordinate. The reversed inequality is identical with $x,y$ interchanged. This proves joint continuity off the diagonal and completes all claims. [F1, step 2.1, step 2.2, algebra] ∎
