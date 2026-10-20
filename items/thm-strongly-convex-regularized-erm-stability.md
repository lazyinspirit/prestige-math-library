---
id: thm-strongly-convex-regularized-erm-stability
kind: theorem
title: "Strongly convex RKHS regularized ERM is stable"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-uniform-algorithmic-stability
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Olivier Bousquet and André Elisseeff, Stability and Generalization, JMLR 2 (2002), equations (19)–(20), Lemmas 20–21, Theorem 22"
      url: "https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Proposition 14.4"
      url: "https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf"
---

## Statement

Let $(\mathsf X,\Sigma_X)$ and $(\mathsf Y,\Sigma_Y)$ be nonempty measurable instance and label spaces. Let $\kappa\ge0$, and let $\mathcal H$ be a real Hilbert space of $\Sigma_X$-measurable real-valued functions on $\mathsf X$ with kernel sections $K_x\in\mathcal H$ satisfying $f(x)=\langle f,K_x\rangle_{\mathcal H}$ and $\|K_x\|_{\mathcal H}^2=K(x,x)\le\kappa^2$ for every $x\in\mathsf X$. Let $\lambda>0$ and $\sigma\ge0$, and let $c:\mathbb R\times\mathsf Y\to[0,\infty)$ be measurable with respect to $\mathcal B(\mathbb R)\otimes\Sigma_Y$, convex in its first argument, and $\sigma$-Lipschitz there, meaning $|c(u,y)-c(v,y)|\le\sigma|u-v|$ for all $u,v\in\mathbb R$ and $y\in\mathsf Y$. For every $n\ge1$, every indexed sample $S=((x_1,y_1),\ldots,(x_n,y_n))$, and every retained index set $J\subseteq[n]$, define $A_{n,J}$ as the unique attained minimizer over $f\in\mathcal H$ of

$$
\frac1n\sum_{j\in J}c(f(x_j),y_j)+\lambda\|f\|_{\mathcal H}^2.
$$

Assume every such minimum is attained. For a size-$m$ sample, write $A_S:=A_{m,[m]}(S)$ and $A_{S\setminus i}:=A_{m,[m]\setminus\{i\}}(S|_{[m]\setminus\{i\}})$, so the deleted objective retains the original denominator $m$. Then the resulting size-indexed rule is permutation-invariant and has uniform deletion stability

$$\sup_{S\in(\mathsf X\times\mathsf Y)^m,\ 1\le i\le m,\ (x,y)\in\mathsf X\times\mathsf Y}|c(A_S(x),y)-c(A_{S\setminus i}(x),y)|\le\beta_m,\qquad\beta_m:=\frac{\sigma^2\kappa^2}{2\lambda m}.$$

For fixed $\lambda$, this stability envelope is nonincreasing in $m$. The conclusion supplies no uniform bounded-loss constant $M$; any such hypothesis for a concentration bound must be checked separately.
## Statement references

Bousquet and Elisseeff, equations (19)–(20), Lemmas 20–21, and Theorem 22 with proof, printed pp. 512–515; equation (20) keeps denominator $m$ after deletion. [Full JMLR paper PDF](https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf)

Mohri, Rostamizadeh, and Talwalkar, Proposition 14.4 with proof, printed pp. 337–339; this gives the corresponding replacement-stability coefficient, with its distinct convention. [Full second-edition book PDF](https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf)

## Facts & Assumptions

**Given:** A supervised sample space, the stated RKHS evaluation property and diagonal bound, a convex $\sigma$-Lipschitz loss, $\lambda>0$, and attained full-sample and fixed-denominator deletion minimizers.

[F1] Uniform deletion stability is the bound on loss change between the full output and the size-indexed deleted output, uniformly over samples, deleted indices, and test observations. [[def-uniform-algorithmic-stability]]

[F2] In a real inner product space, $|\langle u,v\rangle|\le\|u\|\|v\|$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[A1] For each sample and deleted index, both displayed objectives attain their minima; the deletion objective uses the same denominator $m$ as the full-sample objective.

## Proof

1.1 Write $F(f)=m^{-1}\sum_{j=1}^m c(f(x_j),y_j)+\lambda\|f\|_{\mathcal H}^2$ and $G(f)=m^{-1}\sum_{j\ne i}c(f(x_j),y_j)+\lambda\|f\|_{\mathcal H}^2$, with minimizers $f=A_S$ and $g=A_{S\setminus i}$. For any convex $Q$ and $J_Q(h)=Q(h)+\lambda\|h\|^2$, the identity $\|(1-t)u+tv\|^2=(1-t)\|u\|^2+t\|v\|^2-t(1-t)\|u-v\|^2$ and convexity of $Q$ give $J_Q((1-t)u+tv)\le(1-t)J_Q(u)+tJ_Q(v)-\lambda t(1-t)\|u-v\|^2$. If $u$ minimizes $J_Q$, then $J_Q(u)\le J_Q((1-t)u+tv)$; subtracting $(1-t)J_Q(u)$, dividing by $t>0$, and letting $t\downarrow0$ yields $J_Q(v)-J_Q(u)\ge\lambda\|u-v\|^2$. Applying this to every retained-set objective shows that each minimizer is unique. Each objective is unchanged by simultaneous reordering of the observations and relabeling of the retained indices, so the family is permutation-invariant. Apply the same gap inequality to $F$ at $f$ with $v=g$ and to $G$ at $g$ with $v=f$. [given, A1, algebra]

2.1 Adding the two inequalities from step 1.1 cancels all common loss terms and both regularizers except the deleted observation, so $2\lambda\|f-g\|_{\mathcal H}^2\le F(g)-F(f)+G(f)-G(g)=m^{-1}[c(g(x_i),y_i)-c(f(x_i),y_i)]\le\sigma|g(x_i)-f(x_i)|/m$. The RKHS identity in the Statement and [F2] give $|g(x_i)-f(x_i)|=|\langle g-f,K_{x_i}\rangle|\le\kappa\|g-f\|_{\mathcal H}$. If $f=g$ the desired norm bound is immediate; otherwise dividing by $2\lambda\|f-g\|_{\mathcal H}$ yields $\|f-g\|_{\mathcal H}\le\sigma\kappa/(2\lambda m)$. [A1, F2, step 1.1, algebra]

3.1 For any test pair $(x,y)$, $\sigma$-Lipschitzness and the reproducing-kernel estimate give $|c(f(x),y)-c(g(x),y)|\le\sigma|\langle f-g,K_x\rangle|\le\sigma\kappa\|f-g\|_{\mathcal H}\le\sigma^2\kappa^2/(2\lambda m)$. Taking the supremum over samples, deleted indices, and test pairs gives the stated stability coefficient. Since $1/m$ decreases with $m$ for fixed positive $\lambda$, the displayed envelope is nonincreasing. [given, A1, F1, step 2.1, algebra] ∎
