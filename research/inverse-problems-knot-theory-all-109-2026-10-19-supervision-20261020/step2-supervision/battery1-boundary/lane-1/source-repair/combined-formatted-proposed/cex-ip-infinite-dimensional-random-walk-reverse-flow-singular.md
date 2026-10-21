---
id: cex-ip-infinite-dimensional-random-walk-reverse-flow-singular
kind: counterexample
title: Infinite-dimensional Gaussian random-walk reverse flow is singular
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - cor-countable-independent-copies-exist
  - cor-iid-finite-variance-strong-law
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-countable-choice
  - def-dependent-choice
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-measure-kernel-and-probability-kernel
  - def-metric-ball
  - def-metric-topology
  - def-norm-and-normed-space
  - def-separable-space
  - def-second-countable-space
  - def-standard-normal-and-normal-laws
  - lem-ip-coordinate-vectors-form-a-basis-of-ell-two
  - lem-ip-gaussian-series-prior-regularity
  - lem-ip-pcn-reference-pair-law-is-symmetric
  - lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates
  - lem-measurable-functions-preserve-independence
  - lem-normal-location-scale-mean-and-variance
  - lem-rat-embeds-dense
  - lem-subset-of-countable
  - lem-standard-normal-fourth-moment
  - lem-prior-and-model-kernel-define-joint-law
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-change-of-variables-for-expectation
  - thm-countable-union-of-countable
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-grouping-independent-sigma-algebras
  - thm-independent-random-elements-have-product-joint-law
  - thm-measurability-of-integration-against-a-kernel
  - thm-metric-open-set-algebra
  - thm-factorization-of-expectations-for-independent-variables
  - lem-borel-product-of-second-countable-spaces
  - thm-product-of-countable
  - thm-rationals-countable
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies dependent and countable choice for the iid Gaussian sequence and the Gaussian-series law; the strong-law and separating-event arguments add no choice use."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§4.2, equation (4.3), and §6.1, Theorem 6.3; a coordinate strong-law separator is proved locally here."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems, full lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf"
      locator: "Chapter 8, §8.2, Examples 8.2.6–8.2.7, random-walk and pCN proposals."
---

## Statement refuted

Assume the Axiom of Choice and fix $\beta\in(0,1]$. Let
$H=\ell^2(\mathbb N,\mathbb R)$ with its complete coordinate basis positively indexed as $(e_j)_{j\ge1}$, where $e_j$ has its nonzero coordinate at $j-1$. Write $u_j=\langle u,e_j\rangle$ for coefficients in this basis throughout. Take
mutually independent standard normal variables $(X_j,Y_j)_{j\ge1}$ and set
$$U=\sum_{j\ge1}2^{-j/2}X_je_j,\qquad \xi=\sum_{j\ge1}2^{-j/2}Y_je_j.$$
These series converge almost surely in $H$ and define independent centered
Borel Gaussian random elements with the same law $\mu_0$. Define the Gaussian
random-walk proposal $V=U+\beta\xi$, its probability kernel
$$Q_\beta(u,B)=\mu_0(\{z\in H:u+\beta z\in B\}),$$
its forward flow $\eta(du,dv)=\mu_0(du)Q_\beta(u,dv)$, and its transpose
$\eta^\top(C)=\eta(\{(u,v):(v,u)\in C\})$. Then $\eta$ and $\eta^\top$ are
mutually singular: a Borel set $A_\beta\subseteq H\times H$ satisfies
$$\eta(A_\beta)=1,\qquad \eta^\top(A_\beta)=0.$$
For the same reference law and scale, the pCN proposal flow is symmetric.

## Statement references

[[lem-ip-gaussian-series-prior-regularity|A weighted Hilbert Gaussian series with summable variances converges and defines a centered Borel Gaussian law.]]

[[lem-ip-coordinate-vectors-form-a-basis-of-ell-two|The canonical coordinate vectors form a complete orthonormal basis of the real square-summable sequence space.]]

[[lem-ip-pcn-reference-pair-law-is-symmetric|The pCN reference pair law is symmetric for every allowed proposal scale.]]

## Facts & Assumptions

**Given:** AC, $\beta\in(0,1]$, and the Gaussian sequence and Hilbert-space notation of the Statement.

[A1] AC implies both Dependent Choice and Countable Choice. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Under Countable Choice and Dependent Choice, a countable independent sequence with the standard normal law exists. [[def-countable-choice]] [[def-dependent-choice]] [[cor-countable-independent-copies-exist]]

[F2] After the explicit reindexing $j\mapsto j-1$ for $j\ge1$, the coordinate vectors form a complete orthonormal basis of $H$, and the norm squared is the sum of coordinate squares. [[lem-ip-coordinate-vectors-form-a-basis-of-ell-two]]

[F3] For independent standard normal coordinates and weights $\lambda_j=2^{-j}$, the series $\sum_j\sqrt{\lambda_j}X_je_j$ converges almost surely in $H$ and defines a centered Borel Gaussian random element. Its coordinates are $2^{-j/2}X_j$. [[lem-ip-gaussian-series-prior-regularity]] [[lem-ip-coordinate-vectors-form-a-basis-of-ell-two]]

[F4] Disjoint subfamilies of an independent family generate independent sigma-algebras, and measurable functions of independent random elements remain independent. [[def-independent-random-elements]] [[thm-grouping-independent-sigma-algebras]] [[lem-measurable-functions-preserve-independence]]

[F5] A $N(0,1)$ variable has mean zero, second moment one, and fourth moment three. [[lem-normal-location-scale-mean-and-variance]] [[lem-standard-normal-fourth-moment]]

[F6] Expectations of integrable products of independent variables factor. [[thm-factorization-of-expectations-for-independent-variables]]

[F7] IID square-integrable real variables satisfy the strong law of large numbers. [[def-identically-distributed-and-iid-random-variables]] [[cor-iid-finite-variance-strong-law]]

[F8] For a probability measure and a probability kernel, the associated joint flow is a probability measure with the iterated-integral identity. [[def-measure-kernel-and-probability-kernel]] [[lem-prior-and-model-kernel-define-joint-law]]

[F9] Integrating a Borel function against a random-element law equals its expectation; independent random elements have product joint law. [[def-law-or-distribution-of-a-random-element]] [[thm-change-of-variables-for-expectation]] [[thm-independent-random-elements-have-product-joint-law]]

[F10] The Borel sigma-algebra of a topological space is generated by its open sets; Borel measurable functions are closed under finite arithmetic operations. [[def-borel-sigma-algebra]] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F11] The finite-support vectors with rational coordinates form a countable
dense subset of $H=\ell^2$: for each $N$ the rational vectors supported in the
first $N$ coordinates are countable by the rational countability and finite
product facts, their union is countable by Countable Choice, and density
follows from finite truncation convergence and rational approximation of each
finite coordinate list. The positive rational-radius norm balls are open in
the induced metric topology and give a countable base: given $x\in U$ with
$U$ open, choose $r>0$ with
$B(x,r)\subseteq U$, then $d$ in the dense set with $\|d-x\|<r/3$ and a
positive rational $s$ with $\|d-x\|<s<r-\|d-x\|$; the triangle inequality
gives $x\in B(d,s)\subseteq U$. Thus $H$ is second-countable, the Borel
sigma-algebra on $H\times H$ is the product sigma-algebra, and integration of
a nonnegative product-measurable function against a probability kernel gives
a measurable function of its source point.
[[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]
[[def-countable-choice]] [[lem-ip-coordinate-vectors-form-a-basis-of-ell-two]]
[[thm-rationals-countable]] [[thm-product-of-countable]]
[[lem-subset-of-countable]]
[[thm-countable-union-of-countable]] [[lem-rat-embeds-dense]]
[[def-separable-space]] [[def-second-countable-space]]
[[def-norm-and-normed-space]] [[def-metric-ball]] [[def-metric-topology]]
[[thm-metric-open-set-algebra]]
[[lem-borel-product-of-second-countable-spaces]]
[[thm-measurability-of-integration-against-a-kernel]]
[[thm-continuous-preimages-of-borel-sets-are-borel]]

[F12] For the same Gaussian reference law and $\beta\in[0,1]$, the pCN proposal pair law is symmetric. [[lem-ip-pcn-reference-pair-law-is-symmetric]]

[F13] Under Countable Choice, Borel probability laws on a separable Hilbert space with the same finite coordinate laws in a complete orthonormal basis are equal. [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 By [A1] and [F1], take a countable independent sequence $(Z_n)_{n\ge1}$ with law $N(0,1)$ and put $X_j=Z_{2j-1}$, $Y_j=Z_{2j}$. Each subsequence is again IID standard normal. The odd and even coordinate sigma-algebras are independent by [F4]. Apply [F3] with $H_0=H_1=H$, $w_j=1$, and $\lambda_j=2^{-j}$ to each subsequence. Since $\sum_j2^{-j}=1$, both series converge almost surely in $H$ and define centered Borel Gaussian random elements. Their finite coordinate laws agree: by [F3], each finite coordinate vector is obtained by multiplying independent standard normals by the same coefficients $2^{-j/2}$, so each vector has the same product normal law by [F5] and [F9]. AC implies Countable Choice by [A1], so [F13] identifies their Borel laws. Each limit is measurable with respect to its own coordinate sigma-algebra: its partial sums are block-measurable, the event that they are Cauchy is a countable combination of measurable norm inequalities, and the limit, set to zero on the null complement, is therefore block-measurable. In detail, for a proper open $O\subset H$ with closed complement $C$, on the convergence event the preimage of $O$ is the condition $\liminf_N\operatorname{dist}(S_N,C)>0$; the distance function is 1-Lipschitz, and the zero value assigned off that event is included exactly when $0\in O$. This is a measurable condition on the block. The odd and even coordinate sigma-algebras are independent by [F4], hence $U$ and $\xi$ are independent. Denote their common law by $\mu_0$. [A1, F1, F2, F3, F4, F5, F9, F13, given, construct]

1.2 For $(u,v)\in H\times H$, set $$f_n(u,v):=\frac1n\sum_{j=1}^n2^j(v_j^2-u_j^2),\qquad A_\beta:=\left\{(u,v):f_n(u,v)\to\beta^2\right\}.$$ Each coordinate map is continuous since $|u_j-v_j|\le\|u-v\|_2$ by [F2]; finite arithmetic operations make $f_n$ Borel by [F10]. Explicitly, $$A_\beta=\bigcap_{k=1}^\infty\bigcup_{N=1}^\infty\bigcap_{n=N}^\infty\{|f_n-\beta^2|<1/k\},$$ so $A_\beta$ is Borel by [F10]. The limit criterion follows because for every $\varepsilon>0$ one can choose $k$ with $1/k<\varepsilon$. [F2, F10, F11, given, construct]

2.1 For each $u\in H$, $Q_\beta(u,\cdot)$ is the pushforward of $\mu_0$ under the continuous map $z\mapsto u+\beta z$, hence is a probability measure. By [F11], $H$ is second-countable and the product Borel sigma-algebra is $\mathcal B(H)\otimes\mathcal B(H)$. For Borel $B\subseteq H$, addition and scalar multiplication make $(u,z)\mapsto u+\beta z$ continuous, so $(u,z)\mapsto\mathbf1_B(u+\beta z)$ is product-measurable. Integrating it against the constant kernel $u\mapsto\mu_0$ is measurable by [F11], so $Q_\beta$ is a probability kernel. Its joint flow $\eta$ exists by [F8]. By the product joint law [F9] and the proposal pushforward, $\eta$ is the law of $(U,U+\beta\xi)$. [F8, F9, F11, step 1.1, given, construct]

2.2 For each $j$, define $$D_j:=2^j\bigl((U+\beta\xi)_j^2-U_j^2\bigr)=(X_j+\beta Y_j)^2-X_j^2=2\beta X_jY_j+\beta^2Y_j^2.$$ The pairs $(X_j,Y_j)$ are independent by grouping the independent coordinates, and have the same product standard-normal law by [F9]. Applying the same polynomial map to each pair therefore makes $(D_j)$ IID by [F4] and [F9]. By [F5]–[F6], $\mathbb E[X_jY_j]=\mathbb E[X_j]\mathbb E[Y_j]=0$, $\mathbb E[Y_j^2]=1$, and $$\mathbb E[D_j]=\beta^2.$$ They are square-integrable: using $(a+b)^2\le2a^2+2b^2$, $$\mathbb E[D_j^2]\le8\beta^2\mathbb E[X_j^2Y_j^2]+2\beta^4\mathbb E[Y_j^4]=8\beta^2+6\beta^4<\infty,$$ where independence gives $\mathbb E[X_j^2Y_j^2]=1$ and [F5] gives $\mathbb E[Y_j^4]=3$. By [F7], $$\frac1n\sum_{j=1}^nD_j\longrightarrow\beta^2\quad\text{almost surely}.$$ [F4, F5, F6, F7, F9, F10, step 1.1, given, algebra]

3.1 Under the forward flow $\eta$, the pair has the law of $(U,V)$ from step 2.1, and $f_n(U,V)=n^{-1}\sum_{j=1}^nD_j$. Step 2.2 therefore gives $\eta(A_\beta)=1$. Under the transpose $\eta^\top$, the pair has the law of $(V,U)$, and $f_n(V,U)=-f_n(U,V)\to-\beta^2$. Since $\beta>0$, $-\beta^2\ne\beta^2$, hence $\eta^\top(A_\beta)=0$. [F9, step 2.1, step 2.2, step 1.2, given, algebra]

4.1 Thus $A_\beta$ and its complement are disjoint Borel sets with $\eta(A_\beta)=1$ and $\eta^\top(A_\beta^c)=1$. This is mutual singularity of the two probability measures, and in particular neither is absolutely continuous with respect to the other. By [F12], the pCN reference proposal flow at this same scale equals its transpose. [F12, step 3.1, given] ∎

