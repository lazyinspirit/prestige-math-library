---
id: lem-countable-choice-hilbert-parametrices-and-index-stability
kind: lemma
title: "Hilbert parametrices and finite-rank approximation give index stability under countable choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - thm-connected-subsets-of-r-are-intervals
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§3.2, printed pp.20–22, uses Fredholm index stability in the holomorphic-disk setting. The Hilbert-space parametrix criterion and stability below are proved locally under countable choice; no full-AC Banach-space theorem is invoked."
---

## Statement

Assume countable choice. Let $X,Y$ be real or complex Hilbert spaces over the same scalar field, and let $A:X\to Y$ be bounded and linear. Suppose bounded linear maps $L,R:Y\to X$ satisfy $LA=1_X+K_X$ and $AR=1_Y+K_Y$, where $K_X,K_Y$ are operator-norm limits of finite-rank operators. Then $A$ is Fredholm. Its range is closed, the restriction $A:(\ker A)^\perp\to\operatorname{ran}A$ has a bounded inverse, and there is a bounded linear $S:Y\to X$ for which $1_X-SA$ and $1_Y-AS$ have finite rank.

Every such $A$ has a neighborhood in operator norm consisting of Fredholm operators with the same index. If $K:X\to Y$ is an operator-norm limit of finite-rank operators, then $A+K$ is Fredholm with $\operatorname{ind}(A+K)=\operatorname{ind}A$. All dimensions and indices use the specified scalar field. The hypotheses are Hilbert spaces and explicit finite-rank approximation; no assertion for arbitrary Banach spaces or for a general compact operator is substituted.

## Statement references

[[def-countable-choice|The exact choice assumption]]

[[def-fredholm-operator-cokernel-and-index|Fredholmness and index]]

## Facts & Assumptions

**Given:** The Hilbert spaces and bounded operators with the displayed parametrix identities and finite-rank-approximation hypotheses, and countable choice.

[A1] [[def-countable-choice]] is used to choose countably many approximate minimizers, ordered finite covers, and the sequence in the closed-range argument. Unique Hilbert projections thereafter require no further choice.

[F1] [[def-fredholm-operator-cokernel-and-index]] defines Fredholmness by a finite-dimensional kernel, closed range and finite-dimensional cokernel, and the index by their dimension difference.

[F2] [[thm-connected-subsets-of-r-are-intervals]] implies that $[0,1]$ is connected. Hence an integer-valued locally constant function on that interval is constant.

## Proof

1.1 **Orthogonal projection under countable choice.** For a closed linear subspace $Z$ of a Hilbert space and a fixed vector $x$, let $a=\inf_{z\in Z}\|x-z\|$. Choose $z_n\in Z$ with $\|x-z_n\|^2<a^2+1/n$ by [A1]. The parallelogram identity and $(z_n+z_m)/2\in Z$ give $\|z_n-z_m\|^2\le2/n+2/m$. Completeness gives a limit $z\in Z$ attaining the infimum. Minimality for $z+tv$, $v\in Z$, $t\in\mathbb R$, implies $\operatorname{Re}\langle x-z,v\rangle=0$; in the complex case repeat with $iv$ to get the full orthogonality. The decomposition $x=z+(x-z)$ is unique. Its uniqueness defines a linear projection $P_Z$ of norm at most one for every $x$, without choosing an independent representative for each fiber. Consequently $X=Z\oplus Z^\perp$ as Hilbert spaces. [given, A1, construct, algebra]

1.2 **The sequential compactness actually needed.** If $K$ is an operator-norm limit of finite-rank maps, the image of its unit ball is totally bounded. For a tolerance $\varepsilon$, choose a finite-rank $F$ within $\varepsilon/3$. Choose a finite orthonormal basis in its range by finite Gram–Schmidt. The coordinates of $F$ of a unit vector are bounded by $\|F\|$; a finite grid of coordinate boxes gives a finite $\varepsilon/3$ net there. Together with $\|K-F\|<\varepsilon/3$ this gives a finite $\varepsilon$ net for the $K$ image. Every bounded sequence has a subsequence whose $K$ images converge: choose finite ordered covers at scales $2^{-j}$ under [A1], retain at each stage the first cover set containing infinitely many remaining indices, and choose the least next retained index. The resulting images are Cauchy and converge by Hilbert completeness. This construction uses a given countable sequence and finite choices, not dependent choice on arbitrary sets. Composing a norm-convergent finite-rank approximation on either side by bounded maps, or taking a finite linear combination of such approximations, retains the same property. [A1, given, construct, algebra]

2.1 **Finite kernel.** Choose a finite-rank $F_X$ with $\|K_X-F_X\|<1/2$. For $x\in\ker A$, the equation $x=-K_Xx$ gives $\|x\|\le\|F_Xx\|+\|x\|/2$. Thus $F_X$ is injective on $\ker A$, which is consequently finite dimensional. The kernel is closed because $A$ is bounded. Step 1.1 therefore gives its orthogonal complement $Z$. [given, step 1.1, construct, algebra]

3.1 **Closed range and a quantitative inverse.** There is $c>0$ with $\|Ax\|\ge c\|x\|$ for every $x\in Z$. Otherwise [A1] chooses unit $x_n\in Z$ with $\|Ax_n\|<1/n$. Step 1.2 supplies a subsequence on which $K_Xx_n$ converges. The identity $x_n=LAx_n-K_Xx_n$ then makes that subsequence converge to a unit vector in $Z\cap\ker A$, a contradiction. For a convergent sequence $Ax_n$ in the range, replace $x_n$ by $P_Zx_n$; the lower bound makes these new preimages Cauchy, so their limit maps to the required limit. Thus the range is closed. The restriction $A_Z:Z\to\operatorname{ran}A$ is bijective and its inverse has norm at most $1/c$: injectivity is $Z\cap\ker A=0$, and surjectivity follows by subtracting the kernel projection from any preimage. If $Z=0$, any $c>0$ works and the inverse on the zero space is the zero map. [A1, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 **Finite cokernel and a finite-error parametrix.** Put $C=(\operatorname{ran}A)^\perp$, with projection $P_C$ supplied by steps 1.1 and 3.1. For $y\in C$, the identity $AR=1+K_Y$ gives $y=-P_CK_Yy$. Choose finite-rank $F_Y$ with $\|K_Y-F_Y\|<1/2$. Then $\|y\|\le\|P_CF_Yy\|+\|y\|/2$, so $P_CF_Y$ is injective on $C$. Hence $C$ is finite dimensional and the cokernel is identified with $C$ by the orthogonal splitting. This proves Fredholmness in [F1]. Set $S=A_Z^{-1}P_{\operatorname{ran}A}$. Then $SA=1-P_{\ker A}$ and $AS=1-P_C$; these errors have finite rank. The maps and lower bound are genuine bounded Hilbert operators obtained above. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **A finite block proof of local index constancy.** Write $N=\ker A$, $Z=N^\perp$, $R_A=\operatorname{ran}A$ and $C=R_A^\perp$. For a bounded perturbation $E$ with $\|E\|<c$ from step 3.1, order source and target as $Z\oplus N$ and $R_A\oplus C$. The first block $J=A_Z+E_{R_AZ}$ is invertible by the norm-convergent geometric series for $1+A_Z^{-1}E_{R_AZ}$. The full operator has matrix $\begin{pmatrix}J&E_{R_AN}\\E_{CZ}&E_{CN}\end{pmatrix}$. The invertible source change $(z,n)\mapsto(z+J^{-1}E_{R_AN}n,n)$ and target change $(r,c')\mapsto(r,c'-E_{CZ}J^{-1}r)$ reduce this matrix to $\operatorname{diag}(J,F)$, where $F=E_{CN}-E_{CZ}J^{-1}E_{R_AN}:N\to C$. These changes and their inverses are bounded. The range of that diagonal operator is closed, since its first summand is all of $R_A$ and the second is finite dimensional. Its kernel and cokernel are those of the finite-dimensional $F$. Finite rank-nullity therefore gives $\operatorname{ind}(A+E)=\dim N-\dim C=\operatorname{ind}A$. This includes zero kernel, zero cokernel and the zero-space blocks. [F1, step 3.1, step 4.1, construct, algebra]

6.1 **Finite-rank-approximable perturbations.** Let $K:X\to Y$ satisfy the last hypothesis, and put $A_t=A+tK$. For every $0\le t\le1$, the same original $L,R$ give $LA_t=1+(K_X+tLK)$ and $A_tR=1+(K_Y+tKR)$. Both errors are norm limits of finite-rank operators by step 1.2, so steps 2.1–3.1 prove that each $A_t$ is Fredholm, with the quantitative inverse and finite-error parametrix needed in step 5.1. Also $\|A_t-A_s\|\le|t-s|\|K\|$. Step 5.1 consequently makes its index locally constant in $t$, and [F2] makes it constant on $[0,1]$. Hence $\operatorname{ind}(A+K)=\operatorname{ind}A$. The argument used only the two stated parametrix identities, Hilbert orthogonality under [A1], finite-dimensional algebra and norm limits of specified finite-rank approximations. It neither invokes a full-choice Banach splitting nor substitutes a general compactness assumption. [A1, F1, F2, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra] ∎
