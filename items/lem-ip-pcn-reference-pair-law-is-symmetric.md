---
id: lem-ip-pcn-reference-pair-law-is-symmetric
kind: lemma
title: The pCN Gaussian reference pair law is symmetric
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-prior-preserving-crank-nicolson
  - def-axiom-of-choice
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-countable-choice
  - def-dual-space-of-a-normed-space
  - def-hilbert-space
  - def-law-or-distribution-of-a-random-element
  - def-moments-variance-and-covariance
  - def-independent-random-elements
  - def-multivariate-normal-law
  - def-metric-ball
  - def-metric-topology
  - def-norm-and-normed-space
  - def-separable-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-second-countable-space
  - lem-borel-product-of-second-countable-spaces
  - lem-measurable-functions-preserve-independence
  - lem-rat-embeds-dense
  - lem-subset-of-countable
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-countable-iff-surjection-from-n
  - lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-factorization-of-expectations-for-independent-variables
  - thm-metric-open-set-algebra
  - thm-independent-random-elements-have-product-joint-law
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-product-of-countable
  - thm-rationals-countable
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-uniqueness-of-a-law-from-its-characteristic-function
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used through the Borel Gaussian and multivariate normal interfaces and implies the Countable Choice needed by the coordinate-law supplier. No stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§6.1, Theorem 6.2 and proof that the prior flow is symmetric for the Crank–Nicolson choice."
    - title: "Yury Korolev and Jonas Latz, Inverse Problems: Lecture Notes, Michaelmas Term 2020 (University of Cambridge, 18 May 2021)"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf"
      locator: "Chapter 8, §8.2, Example 8.2.7 and pCN reference-preserving proposal."
---

## Statement

Assume the Axiom of Choice. Let $H$ be a separable real Hilbert space and let
$\mu_0$ be a centered Borel Gaussian probability measure on $H$. Let $U$ and
$\xi$ be independent random elements with law $\mu_0$. For
$\beta\in[0,1]$, set $\rho=\sqrt{1-\beta^2}$ and
$V=\rho U+\beta\xi$. The joint Borel law of $(U,V)$ on $H\times H$ is
unchanged by the coordinate swap $(u,v)\mapsto(v,u)$.

## Statement references

[[alg-ip-prior-preserving-crank-nicolson|The pCN proposal combines the current state with an independent Gaussian reference draw.]]

[[def-hilbert-space|A real Hilbert space is complete for the norm induced by its inner product.]]

[[def-separable-space|A separable space has an at most countable dense subset.]]

[[def-dual-space-of-a-normed-space|The continuous dual consists of bounded linear functionals.]]

[[def-borel-gaussian-random-element-on-a-separable-banach-space|A centered Borel Gaussian random element is measurable and all its continuous linear projections are centered normal.]]

[[def-independent-random-elements|Independent random elements generate independent sigma-algebras.]]

[[def-law-or-distribution-of-a-random-element|The law of a random element is the pushforward probability on its measurable target.]]

[[lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates|Finite coordinate laws determine a Borel probability law on a separable Hilbert space under Countable Choice.]]

## Facts & Assumptions

**Given:** AC, a separable real Hilbert space $H$, a centered Borel Gaussian probability $\mu_0$ on $H$, independent $U,\xi\sim\mu_0$, and $\rho^2+\beta^2=1$ with $0\le\beta\le1$.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The algorithm's proposal is $V=\rho U+\beta\xi$ with an independent $\xi\sim\mu_0$. [[alg-ip-prior-preserving-crank-nicolson]]

[F2] A separable Hilbert space has a finite or countable complete orthonormal basis. A countable dense subset, its product with itself, and the product with the positive rationals are at most countable; the positive rationals are dense in the reals. [[def-separable-space]] [[lem-countable-iff-surjection-from-n]] [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]] [[thm-product-of-countable]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]] [[lem-subset-of-countable]] [[def-norm-and-normed-space]] [[def-metric-ball]] [[def-metric-topology]] [[thm-metric-open-set-algebra]]

[F3] $H^*$ denotes the continuous dual, and every continuous linear functional of a centered Borel Gaussian random element has a centered real normal law. [[def-dual-space-of-a-normed-space]] [[def-borel-gaussian-random-element-on-a-separable-banach-space]]

[F4] A centered Borel Gaussian random element in a separable Banach space has finite moments of every polynomial order by Fernique exponential-square integrability. [[thm-fernique-integrability-for-separable-banach-gaussian-law]]

[F5] Independent random elements have the product of their marginal laws as their joint law. Each continuous linear functional is Borel measurable, so applying such functionals separately to independent random elements preserves independence. Independence is independence of the sigma-algebras generated by the random elements. [[def-independent-random-elements]] [[thm-independent-random-elements-have-product-joint-law]] [[thm-continuous-preimages-of-borel-sets-are-borel]] [[lem-measurable-functions-preserve-independence]]

[F6] For independent scalar normal variables, the characteristic function of a finite linear combination is the product of the scalar normal characteristic functions; uniqueness of characteristic functions then makes the combination normal, including when its variance is zero. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] [[lem-characteristic-function-of-a-normal-law]] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F7] A finite-dimensional normal law is determined by its mean and covariance, including in the singular case. [[def-multivariate-normal-law]] [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F8] Under AC's consequence Countable Choice, two Borel probabilities on a separable Hilbert space with the same finite coordinate laws in a complete orthonormal basis are equal. [[thm-choice-implies-dependent-implies-countable-choice]] [[lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates]]

[F9] For independent integrable real random variables, expectations of their products factor; covariance is the expectation of the product of centered variables, and expectation is linear on integrable functions. [[thm-factorization-of-expectations-for-independent-variables]] [[def-moments-variance-and-covariance]] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F10] For second-countable spaces, the Borel sigma-algebra on the product equals the product sigma-algebra, which is generated by measurable rectangles. [[def-second-countable-space]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[lem-borel-product-of-second-countable-spaces]] [[def-law-or-distribution-of-a-random-element]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], take a finite or countable complete orthonormal basis $(e_j)$ of $H$. Give $H\times H$ the inner product $\langle(u,v),(x,y)\rangle_\times=\langle u,x\rangle+\langle v,y\rangle$. Its induced norm is $\sqrt{\|u\|^2+\|v\|^2}$. It is complete because a Cauchy sequence has Cauchy coordinate sequences in $H$, whose limits in $H$ give its product limit. Thus this is a Hilbert space. The family $(e_j,0),(0,e_j)$ is orthonormal, and any vector orthogonal to every listed vector has both components orthogonal to every $e_j$, hence both components are zero by completeness; it is a complete orthonormal basis. Let $D\subseteq H$ be countable and dense. The balls $B(d,s)$ with $d\in D$ and positive rational $s$ form a countable base for $H$: for $x\in U$ open, choose $r>0$ with $B(x,r)\subseteq U$, then $d\in D$ with $\|d-x\|<r/3$ and rational $s$ with $\|d-x\|<s<r-\|d-x\|$. Thus $H$ is second-countable. Then $D\times D$ is countable by [F2] and dense, since each coordinate of a pair can be approximated within $\varepsilon/2$ to make the product norm error less than $\varepsilon$. Balls with centers in $D\times D$ and positive rational radii form a countable base: for $z$ in an open set choose $r>0$ with $B(z,r)$ contained there, then a center $d$ with $\|d-z\|<r/3$ and rational $s$ with $\|d-z\|<s<r-\|d-z\|$ give $z\in B(d,s)\subseteq B(z,r)$. Thus $H\times H$ is second-countable, and [F10] identifies its Borel sigma-algebra with the product Borel sigma-algebra. Since $U$ and $\xi$ are Borel random elements, the pair $(U,\xi)$ is measurable into the product sigma-algebra: the preimage of each measurable rectangle is the intersection of the two coordinate preimages, and rectangles generate the product sigma-algebra. Continuous addition and scalar multiplication then make $(U,V)$ and $(V,U)$ Borel random elements of $H\times H$. Their Borel laws are therefore defined. [F2, F10, given, construct]

2.1 Fix a finite list of continuous linear functionals on $H\times H$. Each has the form $(u,v)\mapsto\ell(u)+m(v)$, because its restrictions to the two coordinate subspaces sum to the functional. Any real linear combination of the listed projections is another such functional. Under $(U,V)$ that combination is $(\ell+\rho m)(U)+\beta m(\xi)$; under $(V,U)$ it is $(\rho\ell+m)(U)+\beta\ell(\xi)$. By [F3], the two summands in each display are centered normal, and [F5] makes them independent; [F6] makes their sum normal, including a zero coefficient. Hence every finite projection vector under either pair is multivariate normal by the projection definition in [F7], with zero mean. [A1, F1, F3, F5, F6, F7, step 1.1, given]

3.1 Define the symmetric covariance form $\Gamma(\ell,m)=\mathbb E[\ell(U)m(U)]$. These products are integrable: [F4] gives finite second moments of $\|U\|$, boundedness of $\ell,m$ gives finite second moments of their evaluations, and $|ab|\le(a^2+b^2)/2$. The same argument applies to evaluations of $\xi$. For functionals $(\ell,m)$ and $(\ell',m')$, the projection under $(U,V)$ is $(\ell+\rho m)(U)+\beta m(\xi)$. Independence and centering make its mixed covariance terms zero by [F9], so its covariance with the corresponding projection for $(\ell',m')$ is $$\Gamma(\ell,\ell')+\rho\Gamma(\ell,m')+\rho\Gamma(m,\ell')+\Gamma(m,m'),$$ using $\rho^2+\beta^2=1$. Under $(V,U)$ the projections are $(\rho\ell+m)(U)+\beta\ell(\xi)$ and $(\rho\ell'+m')(U)+\beta\ell'(\xi)$; expansion gives the same expression because $\Gamma$ is symmetric. Therefore the finite projection vectors from step 2.1 have equal covariance matrices and zero means. [F3, F4, F5, F9, step 2.1, given, algebra]

4.1 By [F7], the finite projection laws in step 3.1 are equal, in particular the finite coordinate laws for the product basis from step 1.1. That step also shows that $H\times H$ is a separable Hilbert space. By [A1], Countable Choice follows from AC; the coordinate-law result [F8] therefore identifies the two Borel probability laws. Hence $\operatorname{Law}(U,V)=\operatorname{Law}(V,U)$. [A1, F7, F8, step 1.1, step 3.1]

5.1 Step 4.1 is the claimed invariance of the joint law under coordinate swap, for every $\beta\in[0,1]$, including the identity proposal at $\beta=0$ and the independent-reference proposal at $\beta=1$. [step 4.1, given] ∎

