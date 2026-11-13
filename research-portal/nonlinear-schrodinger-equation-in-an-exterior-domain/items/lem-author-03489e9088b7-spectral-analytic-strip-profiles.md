---
id: lem-author-03489e9088b7-spectral-analytic-strip-profiles
kind: lemma
domain: mathematics
title: Admissible spectral strip profiles and the exact interpolation upper bound
status: draft
proof_strategy: direct
deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:thm-unbounded-borel-functional-calculus
  - math:def-axiom-of-choice
  - math:def-banach-space
  - math:def-topological-vector-space-for-local-convexity
  - math:def-dual-space-of-a-normed-space
  - math:thm-dual-norms-every-vector
  - math:thm-hadamard-three-lines
  - math:def-complex-differentiability-holomorphic-and-entire
dependency_roles:
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  math:thm-unbounded-borel-functional-calculus: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-topological-vector-space-for-local-convexity: mathematical-premise
  math:def-dual-space-of-a-normed-space: mathematical-premise
  math:thm-dual-norms-every-vector: mathematical-premise
  math:thm-hadamard-three-lines: mathematical-premise
  math:def-complex-differentiability-holomorphic-and-entire: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Assume AC and let $T\ge I$ be self-adjoint on a nonzero complex Hilbert space $K$. Give $D(T)$ the norm $\|Tv\|_K$. A compatible complex Banach couple $(X_0,X_1)$ means two complex Banach spaces with continuous injective complex-linear maps into a common Hausdorff complex topological vector space. Identify each endpoint with its image and form its algebraic sum there. For such a couple, use the sum norm $\|x\|_{X_0+X_1}=\inf_{x=x_0+x_1}(\|x_0\|_{X_0}+\|x_1\|_{X_1})$.

For a complex normed space $Y$ and an open set $U\subset\mathbb C$, a map $G:U\to Y$ is complex differentiable at $z\in U$ when there is a vector $G'(z)\in Y$ such that $\lim_{h\to0,\ h\ne0,\ z+h\in U}\|(G(z+h)-G(z))/h-G'(z)\|_Y=0$. It is norm-holomorphic on $U$ when this holds at every point of $U$. This definition also applies when $Y=X_0+X_1$ with its sum norm.

An admissible strip function is a bounded continuous function on $S=\{0\le\operatorname{Re}z\le1\}$ into $X_0+X_1$, norm-holomorphic in its interior, whose boundary maps $t\mapsto F(j+it)$ are continuous $X_j$-valued maps tending to zero as $|t|\to\infty$, $j=0,1$. Set $\|F\|_{\mathcal F}=\max_j\sup_t\|F(j+it)\|_{X_j}$; $[X_0,X_1]_\theta$ consists of the values $F(\theta)$ with $\|x\|_{[X_0,X_1]_\theta}=\inf_{F(\theta)=x}\|F\|_{\mathcal F}$, $0<\theta<1$. The sum quantity, the boundary quantity $\|F\|_{\mathcal F}$, and the interpolation infimum are norms on their respective vector spaces. In particular, every admissible $F$ satisfies $\|F(\theta)\|_{X_0+X_1}\le\|F\|_{\mathcal F}$, and hence $\|x\|_{X_0+X_1}\le\|x\|_{[X_0,X_1]_\theta}$.

For $(X_0,X_1)=(K,D(T))$, this convention gives $D(T^\theta)\subset [K,D(T)]_\theta$ and $\|f\|_{[K,D(T)]_\theta}\le\|T^\theta f\|_K$. More precisely, for $f\in D(T^\theta)$ and $\varepsilon>0$, the formula $F_\varepsilon(z)=e^{\varepsilon(z-\theta)^2}T^{-z}T^\theta f$ is admissible and $\|F_\varepsilon\|_{\mathcal F}\le e^{\varepsilon\max(\theta^2,(1-\theta)^2)}\|T^\theta f\|_K$. Here $T^z$ means the Borel multiplier $e^{z\log\lambda}$ on $[1,\infty)$.

## Facts & Assumptions

[F1] The spectral cutoff construction gives the domain norm, the spectral multipliers and the compatible domain couple [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]].

[F2] The Borel calculus supplies bounded imaginary powers, exact norm integrals and convergence dominated in a scalar spectral measure [[math:thm-unbounded-borel-functional-calculus]].

[F3] AC is assumed for the spectral calculus, for selecting countably many approximate sum decompositions, and for the norming-functional theorem in [F5] [[math:def-axiom-of-choice]].

[F4] Banach means complete for the norm metric [[math:def-banach-space]]. A complex topological vector space has jointly continuous addition and scalar multiplication, and Hausdorff means distinct points have disjoint open neighborhoods [[math:def-topological-vector-space-for-local-convexity]]. These are the underlying notions in the local definition of a compatible couple.

[F5] For a complex normed space $Y$, its dual $Y^*$ consists of bounded complex-linear functionals, with $\|\ell\|=\sup_{\|y\|_Y\le1}|\ell(y)|$ [[math:def-dual-space-of-a-normed-space]]. Under AC, every nonzero $y\in Y$ has $\ell\in Y^*$ with $\|\ell\|=1$ and $\ell(y)=\|y\|_Y$; completeness of $Y$ is not required [[math:thm-dual-norms-every-vector]].

[F6] For a bounded continuous scalar function on $S$ holomorphic in its interior, the supremum on an interior vertical line is at most the geometric interpolation of the two boundary suprema, including zero boundary suprema [[math:thm-hadamard-three-lines]].

[F7] Scalar complex differentiability is convergence of complex difference quotients, and scalar holomorphy means differentiability at every point of the open domain [[math:def-complex-differentiability-holomorphic-and-entire]]. The norm-holomorphic definition above specializes to this definition for $Y=\mathbb C$.

## Proof

**Given:** The data and AC in the statement.

**Goal:** The norm assertions and the exact spectral-profile upper bound.

1.1 Write $\Sigma=X_0+X_1$ and let $V$ be the common Hausdorff topological vector space. The sum infimum is finite and nonnegative. Multiplying decompositions by a nonzero scalar and using the inverse scalar gives absolute homogeneity; adding decompositions within an arbitrary positive error of their infima gives the triangle inequality. Its value at zero is zero. If $\|x\|_\Sigma=0$, use AC to choose $x=a_n+b_n$ with $\|a_n\|_{X_0}+\|b_n\|_{X_1}<1/n$. The endpoint embeddings imply $a_n\to0$ and $b_n\to0$ in $V$. Continuous addition gives $x=a_n+b_n\to0$ in $V$. If $x\ne0$, disjoint neighborhoods of $x$ and $0$ contradict this convergence of the constant sequence. Hence $x=0$, proving separation. Thus $\Sigma$ is a complex normed space, and $\|x_j\|_\Sigma\le\|x_j\|_{X_j}$ for either endpoint by its one-term decomposition. [given, F3, F4]

1.2 Put $g=T^\theta f\in K$. Since $T\ge I$, $\|T^{-z}g\|\le\|g\|$ on $S$, and the sum norm of $(K,D(T))$ equals the $K$ norm: one inequality uses $\|x_1\|_K\le\|Tx_1\|_K$ and the other the decomposition $x=x+0$. The complex-power formula is therefore well-defined as a bounded sum-valued function after multiplication by the Gaussian. For $z\to z_0$ in $S$, the multipliers $\lambda^{-z}$ converge pointwise, bounded by one, giving norm continuity by the scalar spectral norm integral. For $\operatorname{Re}z_0>0$, the difference quotients converge in multiplier operator norm to $-(\log T)T^{-z_0}$ locally: on $\operatorname{Re}z\ge\eta>0$ the Taylor remainder is bounded by a constant times $|z-z_0|(\log\lambda)^2\lambda^{-\eta}$, whose supremum for $\lambda\ge1$ is finite. Thus the function is norm-holomorphic in the interior. [F1, F2, F3]

2.1 Let $F$ be admissible and put $M=\|F\|_{\mathcal F}$. For any $\ell\in\Sigma^*$ with $\|\ell\|\le1$, the scalar function $\phi=\ell\circ F$ is bounded and continuous on $S$. Indeed $|\ell(F(z))|\le\|F(z)\|_\Sigma$. At an interior point, applying $\ell$ to the norm-convergent difference quotients gives $\phi'(z)=\ell(F'(z))$, so $\phi$ is scalar holomorphic. At each boundary point, step 1.1 gives $|\phi(j+it)|\le\|F(j+it)\|_{X_j}\le M$. Three-lines therefore yields $|\ell(F(\theta+it))|\le M$ for every $0<\theta<1$ and $t\in\mathbb R$. If $F(\theta+it)\ne0$, choose its norming functional by [F5]; if it is zero the bound is immediate. This proves $\|F(\theta+it)\|_\Sigma\le M$. [F3, F5, F6, F7, step 1.1]

3.1 The admissible class is a complex vector space: sums and scalar multiples preserve boundedness, continuity, norm derivatives, endpoint continuity, and boundary decay. Its boundary quantity is homogeneous and subadditive. If that quantity vanishes, both boundary maps vanish, and step 2.1 makes every interior value zero, so it is a norm. Evaluation at $\theta$ is linear, so its range $[X_0,X_1]_\theta$ is a vector space. For nonzero scalars, multiplication is a bijection between the corresponding representing functions, giving homogeneity of the infimum. For $x,y$ in the range and $\delta>0$, choose representing functions with boundary norms less than their respective infima plus $\delta$; their sum represents $x+y$ and proves the triangle inequality after $\delta\downarrow0$. The zero function gives norm zero at zero. Infimizing step 2.1 gives $\|x\|_\Sigma\le\|x\|_{[X_0,X_1]_\theta}$; separation of $\Sigma$ then proves positive definiteness of the interpolation infimum. [given, step 1.1, step 2.1]

4.1 On $z=it$, the multiplier $T^{-it}$ is unitary, by $|\lambda^{-it}|=1$. On $z=1+it$, the product/domain formula gives $TF_\varepsilon(1+it)=e^{\varepsilon(1+it-\theta)^2}T^{-it}g$. Both boundary maps are continuous in their respective endpoint norms by the same dominated spectral argument. Their norms equal $e^{\varepsilon((j-\theta)^2-t^2)}\|g\|$, so vanish at infinity and give the asserted upper bound. At $z=\theta$ the product identity gives $F_\varepsilon(\theta)=f$. Taking the infimum and then $\varepsilon\downarrow0$ proves the inclusion and exact upper inequality. [F1, F2, step 3.1, step 1.2] ∎
