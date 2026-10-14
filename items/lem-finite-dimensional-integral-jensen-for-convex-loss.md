---
id: lem-finite-dimensional-integral-jensen-for-convex-loss
kind: lemma
title: Integral Jensen inequality for finite-dimensional convex losses
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - def-metric-interior-closure-boundary
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
  - thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set
  - lem-convex-set-and-closure-have-same-interior-and-boundary
  - thm-convex-functions-have-subgradients-at-interior-points
  - def-subgradient-and-subdifferential
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.2, PDF pp. 102–104"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4–5, PDF pp. 7–13"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\geq1$ and let $C$ be a
nonempty closed convex subset of $\mathbb R^d$, with closedness in the Euclidean
topology ([[def-metric-interior-closure-boundary]]) and convexity as in
[[def-convex-subset-of-euclidean-space]]. Let $\mu$ be a probability measure on
its Borel sets, and assume $\int_C\|a\|_2\,\mu(da)<\infty$, where $\|\cdot\|_2$
is the Euclidean norm from [[def-euclidean-inner-product]]. Define the barycenter
$b=\int_Ca\,\mu(da)$ coordinatewise and assume $b\in C$. If
$f:C\to[0,+\infty]$ is Borel measurable and convex, then
$$f(b)\leq\int_C f(a)\,\mu(da).$$
Convexity for this possibly extended-valued $f$ uses the extended-functional
convention of
[[def-convex-and-strictly-convex-functionals-on-a-banach-space]], including its
endpoint convention for $0\cdot(+\infty)$. On a convex restriction where
$f$ is finite, this inequality reduces to the real-valued Euclidean convention of
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]], as used in the
subgradient step of the proof. The barycenter is the vector of coordinate
integrals.

## Facts & Assumptions

**Given:** The statement's $C$, $\mu$, $f$, and barycenter $b$.

[A1] Assume the Axiom of Choice and Countable Choice, as required by the supporting-hyperplane and subgradient suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] A point outside a nonempty closed convex set is strictly separated from it by a hyperplane ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[F2] A boundary point of a nonempty convex set has a supporting hyperplane ([[thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set]]).

[F3] The supplier statement gives common ordinary interior and boundary; its proof steps 2.1--3.1 also prove that a convex set and its closure have the same relative interior in their affine hull ([[lem-convex-set-and-closure-have-same-interior-and-boundary]]).

[F4] A finite convex function has a subgradient at every interior point of its domain ([[thm-convex-functions-have-subgradients-at-interior-points]]); a subgradient satisfies the global supporting inequality of [[def-subgradient-and-subdifferential]].

[F5] A nonnegative measurable function with integral zero vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F6] Coordinate integrals are linear and give the barycenter, while the expectation of an integrable real function is the difference of its positive- and negative-part integrals ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] The nonnegative integral is monotone and positively homogeneous, so a pointwise nonnegative simple minorant gives a lower bound on the integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] The nonnegative integral is additive on finite sums ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $\int f\,d\mu=+\infty$, the conclusion holds because $f(b)\in[0,+\infty]$. Otherwise let $A:=\{a\in C:f(a)=+\infty\}$. For every integer $n\geq1$, the simple function $n\mathbf1_A$ is bounded above by $f$, so [F7] gives $n\mu(A)=\int n\mathbf1_A\,d\mu\leq\int f\,d\mu<\infty$. If $\mu(A)>0$, these lower bounds are unbounded as $n\to\infty$ (and are already infinite if $\mu(A)=+\infty$), a contradiction. Thus $E:=C\setminus A=\{a:f(a)<\infty\}$ has full $\mu$-measure. Let $S$ be the support of $\mu$, the set of points every relative open neighbourhood of which has positive measure. Since $C$ has a countable base inherited from rational balls in $\mathbb R^d$, the complement of $S$ is a countable union of open null basic sets, so $\mu(S)=1$. Every neighbourhood of a point of $S$ meets $E$, hence $E\cap S$ is dense in $S$. [F7, given]

2.1 Let $C_0$ be the closure of the set of finite convex combinations of points of $S$. Then $C_0\subseteq C$. If $b\notin C_0$, [F1] gives a linear functional $u$ and a real $\alpha$ with $\langle u,y\rangle\leq\alpha<\langle u,b\rangle$ for all $y\in C_0$. The function $\psi(a)=\alpha-\langle u,a\rangle$ is integrable by the first-moment assumption and is nonnegative on the full-measure support $S$. Hence $\psi^-=0$ almost everywhere, so [F5] gives $\int\psi^-\,d\mu=0$ and $\int\psi\,d\mu=\int\psi^+\,d\mu\geq0$. By [F6] and the coordinate definition of $b$, this says $\alpha-\langle u,b\rangle\geq0$, contradicting the strict separation. Thus $b\in C_0$. [F1, F5, F6, step 1.1]

3.1 If $b$ were on the relative boundary of $C_0$, [F2], applied in its affine hull, would give a nonzero supporting normal $v$ there with $\langle v,y-b\rangle\leq0$ for all $y\in C_0$. Set $u(a)=\langle v,b-a\rangle$. The first-moment assumption makes $u$ integrable, and [F6] gives $\int u\,d\mu=0$. Since $u\geq0$ on the full-measure support $S$, its negative part $u^-$ vanishes almost everywhere; [F5] gives $\int u^-\,d\mu=0$. The signed-integral definition in [F6] then gives $\int u^+\,d\mu=0$, so [F5] implies $u^+=0$ almost everywhere and therefore $u=0$ almost everywhere. By continuity of $u$ and the definition of support, every point of $S$ must lie in the hyperplane $\langle v,y-b\rangle=0$: otherwise a neighborhood of a support point outside it would have positive measure on which $u\ne0$. Its closed convex hull $C_0$ would lie in that hyperplane, contradicting that $v$ is nonzero in the direction space of its affine hull. Hence $b$ is in the relative interior of $C_0$. [A1, F2, F5, F6, step 2.1]

4.1 Put $C_1=\operatorname{conv}(E\cap S)$, where $\operatorname{conv}$ denotes finite convex combinations. The extended-functional convexity inequality makes $f$ finite on $C_1$; on these finite values it is the real-valued Euclidean convexity of [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]. Density from step 1.1 gives $\overline{C_1}=C_0$. By [F3], $b$ is in the relative interior of $C_1$. If this affine hull has dimension zero, then $\mu$ is concentrated at $b$ and the claim is equality. Otherwise identify the affine hull isometrically with $\mathbb R^k$; [F4] applied to $f|_{C_1}$ gives a subgradient $v$ at $b$, so $f(y)\geq f(b)+\langle v,y-b\rangle$ for every $y\in C_1$. [A1, F3, F4, step 1.1, step 3.1]

5.1 Let $\ell(a)=f(b)+\langle v,a-b\rangle$ and $w=(f-\ell)\mathbf1_E$, defining $w=0$ on $E^c$. The function $w$ is integrable because $f\mathbf1_E$ has finite nonnegative integral and $\ell$ is integrable by the first-moment assumption. The supporting inequality gives $w\geq0$ on $E\cap S$, a full-measure set; thus $w^-=0$ almost everywhere. By [F5], $\int w^-\,d\mu=0$, so [F6] gives $\int w\,d\mu=\int w^+\,d\mu\geq0$. Linearity [F6] now yields $\int f\mathbf1_E\,d\mu\geq\int\ell\mathbf1_E\,d\mu$. Also $f=f\mathbf1_E+f\mathbf1_{E^c}$, with $f\mathbf1_{E^c}=0$ almost everywhere; [F5] and additivity [F8] give $\int f\,d\mu=\int f\mathbf1_E\,d\mu$. The integrable function $\ell\mathbf1_{E^c}$ is likewise zero almost everywhere, so [F5] applied to its positive and negative parts and linearity [F6] give $\int\ell\,d\mu=\int\ell\mathbf1_E\,d\mu$. Finally [F6] and the barycenter definition yield $\int\ell\,d\mu=f(b)+\langle v,b-b\rangle=f(b)$. This proves the claim in the finite-integral case; the infinite-integral case was handled in step 1.1. [F5, F6, F8, step 1.1, step 4.1] ∎
