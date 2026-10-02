---
id: lem-hermite-minkowski-bounded-primitive-integral-element
kind: lemma
title: "Bounded primitive integral element for Hermite-Minkowski"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-minkowski-embedding-of-a-number-field
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - thm-covolume-of-an-ideal-lattice
  - thm-minkowski-convex-body-theorem
  - cor-trace-and-norm-of-an-algebraic-integer
  - thm-field-norm-and-trace-by-embeddings
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - lem-restriction-fibres-for-embeddings-in-a-finite-tower
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - cor-rational-algebraic-integers-are-integers
  - thm-tower-law-for-finite-field-extensions
  - def-full-euclidean-lattice-and-covolume
  - def-convex-subset-of-euclidean-space
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 8 Theorem 8.43 proof, pp.151-152."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 Theorem 28.4, p.147."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix an integer $n\ge2$
and a real number $B\ge1$. Let $K$ be a number field of degree
$n=[K:\mathbb Q]$ whose discriminant satisfies $|d_K|\le B$. Then there is an
integral element $\alpha\in\mathcal O_K$ with $K=\mathbb Q(\alpha)$ such that
every conjugate of $\alpha$ has modulus at most $\sqrt{B+2}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge2$, a real number $B\ge1$, and
a number field $K$ of degree $n$ with $|d_K|\le B$. Write $(r_1,r_2)$ for the
signature of $K$, so $n=r_1+2r_2$, and $D:=|d_K|$, so $1\le D\le B$.

[A1] The Axiom of Choice implies the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), which is the
choice hypothesis of the volume fact [F5], invoked in steps 2.2 and 2.3; the
strict Minkowski theorem [F2] is applied under the Axiom of Choice assumed in
the statement, and no other selection is made in this proof.

[F1] $\sigma(\mathcal O_K)$ is a full lattice in $\mathbb R^n$ with
$\operatorname{covol}(\sigma(\mathcal O_K))=2^{-r_2}\sqrt{|d_K|}$
([[thm-ring-of-integers-and-ideals-are-full-lattices]],
[[thm-covolume-of-an-ideal-lattice]],
[[def-full-euclidean-lattice-and-covolume]]).

[F2] Minkowski convex-body theorem, strict form: under the Axiom of Choice, a
Lebesgue measurable convex centrally symmetric $C\subseteq\mathbb R^n$ with
$\lambda_n(C)>2^n\operatorname{covol}(\Lambda)$ contains a nonzero point of
the full lattice $\Lambda$
([[thm-minkowski-convex-body-theorem]],
[[def-full-euclidean-lattice-and-covolume]]).

[F3] The unscaled Minkowski embedding is
$\sigma(x)=(\sigma_1(x),\dots,\sigma_{r_1}(x),\tau_1(x),\dots,\tau_{r_2}(x))$
with each complex coordinate $\tau_j(x)$ split into its real and imaginary
parts, and it is injective
([[def-minkowski-embedding-of-a-number-field]]).

[F4] The embeddings of $K$ into $\mathbb C$ over $\mathbb Q$ are the $r_1$
real embeddings $\sigma_i$, and the two members $\tau_j,\bar\tau_j$ of each
complex conjugate pair. For every $0\ne\alpha\in\mathcal O_K$ the norm is
$N_{K/\mathbb Q}(\alpha)
=\prod_{i=1}^{r_1}\sigma_i(\alpha)\prod_{j=1}^{r_2}\tau_j(\alpha)\bar\tau_j(\alpha)$,
this product is nonzero because embeddings are injective field homomorphisms,
and $N_{K/\mathbb Q}(\alpha)\in\mathbb Z$; hence
$|N_{K/\mathbb Q}(\alpha)|\ge1$ and
$|N_{K/\mathbb Q}(\alpha)|
=\prod_i|\sigma_i(\alpha)|\prod_j|\tau_j(\alpha)|^2$
([[thm-field-norm-and-trace-by-embeddings]],
[[cor-trace-and-norm-of-an-algebraic-integer]]).

[F5] Euclidean volume is multiplicative over Borel product sets
([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]), and the open disc of
radius $\rho$ in $\mathbb R^2$ has area $\pi\rho^2$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F6] A product of convex sets is convex, and a product of sets each symmetric
about the origin is centrally symmetric; bounded open intervals and open discs
are convex and symmetric about the origin
([[def-convex-subset-of-euclidean-space]]).

[F7] For the finite tower $\mathbb Q\subseteq\mathbb Q(\alpha)\subseteq K$,
restriction
$\operatorname{Hom}_{\mathbb Q}(K,\mathbb C)\to
\operatorname{Hom}_{\mathbb Q}(\mathbb Q(\alpha),\mathbb C)$ is surjective and
every fibre has cardinality $[K:\mathbb Q(\alpha)]_s$, the separable degree
([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[F8] Fields of characteristic zero are perfect and algebraic extensions of
perfect fields are separable; hence $K/\mathbb Q(\alpha)$ is separable and
$[K:\mathbb Q(\alpha)]_s=[K:\mathbb Q(\alpha)]$
([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
[[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[F9] For $N=1$, the Gregory--Leibniz finite-remainder formula has partial sum
$1-1/3=2/3$ and remainder $\int_0^1 x^4/(1+x^2)\,dx>0$. For example, the
integrand is at least $1/32$ on $[1/2,1]$, so the remainder is at least
$1/64$. Thus $\pi/4>2/3$ and $\pi>8/3>2$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F10] A finite tower of field extensions satisfies
$[K:\mathbb Q]=[K:\mathbb Q(\alpha)][\mathbb Q(\alpha):\mathbb Q]$
([[thm-tower-law-for-finite-field-extensions]]).

[F11] A rational algebraic integer is an integer
([[cor-rational-algebraic-integers-are-integers]]).

## Proof
1.1 Exactly one of the cases $r_1\ge1$ and $r_1=0$ holds; in the second case $n=r_1+2r_2=2r_2\ge2$ gives $r_2\ge1$. We treat the two cases in turn and produce the same conclusion in each. [F3, given]
1.2 Case $r_1\ge1$. Let $X$ be the set of $(x_1,\dots,x_{r_1},z_1,\dots,z_{r_2})\in\mathbb R^{r_1}\times\mathbb C^{r_2}$ with $|x_1|<\sqrt{D+1}$, $|x_i|<1$ for $2\le i\le r_1$, and $|z_j|<1$ for all $j$; in the real coordinates of [F3] this is $|x_1|<\sqrt{D+1}$, $|x_i|<1$, $(\operatorname{Re}z_j)^2+(\operatorname{Im}z_j)^2<1$. [F3, given]
1.3 Case $r_1=0$. Here $n=2r_2$ with $r_2\ge1$. Let $Y$ be the set of $(z_1,\dots,z_{r_2})\in\mathbb C^{r_2}$ with $|\operatorname{Re}z_1|<1$, $|\operatorname{Im}z_1|<\sqrt{D+1}$, and $|z_j|<1$ for $j\ge2$; written in real coordinates, $Y$ is the product of the rectangle $(-1,1)\times(-\sqrt{D+1},\sqrt{D+1})$ in the first complex coordinate with $r_2-1$ open unit discs. [F3, given]
2.1 $X$ is a product of bounded open intervals and open discs, hence open and therefore Lebesgue measurable, and by [F6] it is convex and centrally symmetric. [F6, step 1.2]
2.2 By [F5] and step 1.2, $\lambda_n(X)=(2\sqrt{D+1})\cdot 2^{r_1-1}\cdot\pi^{r_2}=2^{r_1}\pi^{r_2}\sqrt{D+1}$. [A1, F5, step 1.2]
2.3 $Y$ is open and hence measurable, convex and centrally symmetric by [F6], and by [F5] it has $\lambda_n(Y)=(2\cdot 2\sqrt{D+1})\cdot\pi^{r_2-1}=4\pi^{r_2-1}\sqrt{D+1}$. [A1, F5, F6, step 1.3]
2.4 Every $(z_1,\dots,z_{r_2})\in Y$ has $|z_1|^2=(\operatorname{Re}z_1)^2+(\operatorname{Im}z_1)^2<1+(D+1)=D+2\le B+2$ by the defining coordinate bounds and $D\le B$. Thus $|z_1|<\sqrt{B+2}$. [step 1.3, given, algebra]
3.1 By [F1] and step 2.2, $\lambda_n(X)/(2^n\operatorname{covol}(\sigma(\mathcal O_K))) =(\pi/2)^{r_2}\sqrt{1+1/D}$. If $r_2=0$, the square-root factor is greater than $1$; if $r_2>0$, [F9] gives $\pi/2>1$ and again the ratio is greater than $1$. Thus $\lambda_n(X)>2^n\operatorname{covol}(\sigma(\mathcal O_K))$. [F1, F9, step 2.2, algebra]
3.2 By [F1] and step 2.3, $\lambda_n(Y)/(2^n\operatorname{covol}(\sigma(\mathcal O_K))) =2(\pi/2)^{r_2-1}\sqrt{1+1/D}>1$, since $r_2\ge1$, [F9] gives $\pi/2>1$, and $D\ge1$. Applying [F2] gives in this case an element $0\ne\alpha\in\mathcal O_K$ with $\sigma(\alpha)\in Y$. [F1, F2, F9, step 2.3, algebra]
4.1 Applying [F2] with $\Lambda=\sigma(\mathcal O_K)$ and $C=X$, whose hypotheses are verified in steps 2.1 and 3.1, gives in this case an element $0\ne\alpha\in\mathcal O_K$ with $\sigma(\alpha)\in X$. [F1, F2, step 2.1, step 3.1]
4.2 In the totally complex case with $r_2\ge2$, every $j\ge2$ has $0<|\tau_j(\alpha)|<1$. There is at least one such factor, so $Q:=\prod_{j\ge2}|\tau_j(\alpha)|^2<1$. By [F4], $|N_{K/\mathbb Q}(\alpha)|=|\tau_1(\alpha)|^2Q\ge1$, hence $|\tau_1(\alpha)|>1$. [F4, step 3.2]
4.3 If $r_1=0$ and $r_2=1$, then $[K:\mathbb Q]=2$. The element from step 3.2 is nonzero and satisfies $|\operatorname{Re}\tau_1(\alpha)|<1$. If $\alpha\in\mathbb Q$, [F11] makes $\alpha\in\mathbb Z$; since an embedding fixes $\mathbb Q$, this would give $|\alpha|<1$ and hence $\alpha=0$, a contradiction. Therefore $\alpha\notin\mathbb Q$, so $[\mathbb Q(\alpha):\mathbb Q]>1$. By the tower law [F10] this degree divides $[K:\mathbb Q]=2$, and thus $K=\mathbb Q(\alpha)$. Its two complex embeddings give the two conjugates, which are distinct because $\alpha$ generates $K$; both have modulus less than $\sqrt{B+2}$ by step 2.4 and conjugation. [F4, F10, F11, step 3.2, step 2.4]
5.1 For this $\alpha$ in the real-embedding case and every $i\ge2$ one has $|\sigma_i(\alpha)|<1$, and for every $j$ one has $|\tau_j(\alpha)|<1$. There are $r_1-1+2r_2=n-1\ge1$ factors in $P:=\prod_{i\ge2}|\sigma_i(\alpha)|\prod_j|\tau_j(\alpha)|^2$, each positive and less than $1$, so $P<1$ and $|N_{K/\mathbb Q}(\alpha)|=|\sigma_1(\alpha)|P$. Since the norm has absolute value at least $1$ by [F4], necessarily $|\sigma_1(\alpha)|>1$. [F4, step 4.1]
5.2 If $r_1=0$ and $r_2\ge2$, every embedding other than $\tau_1$ and $\bar\tau_1$ sends $\alpha$ to a value of modulus $<1$. The values $\tau_1(\alpha)$ and $\bar\tau_1(\alpha)$ have modulus $>1$ by step 4.2 and are distinct: equality would make $\tau_1(\alpha)$ real, contrary to $|\operatorname{Re}\tau_1(\alpha)|<1$. Thus the fibre of [F7] over $\tau_1|_{\mathbb Q(\alpha)}$ is the singleton $\{\tau_1\}$, so $[K:\mathbb Q(\alpha)]_s=1$, and [F8] gives $[K:\mathbb Q(\alpha)]=1$, that is, $K=\mathbb Q(\alpha)$. [F7, F8, step 1.3, step 4.2]
6.1 So in this case every embedding $\varphi$ of $K$ other than $\sigma_1$ sends $\alpha$ to a complex number of modulus $<1$, while $|\sigma_1(\alpha)|>1$; in particular $\varphi(\alpha)=\sigma_1(\alpha)$ holds only for $\varphi=\sigma_1$. Also $|\sigma_1(\alpha)|<\sqrt{D+1}\le\sqrt{B+2}$ by step 1.2, and $D+1\le B+2$ since $D\le B$. [F4, step 1.2, step 5.1]
7.1 The fibre of the restriction map [F7] over $\sigma_1|_{\mathbb Q(\alpha)}$ is the set $\{\varphi:\varphi(\alpha)=\sigma_1(\alpha)\}$, and the fibre is nonempty because it contains $\sigma_1$; by step 6.1 it is the singleton $\{\sigma_1\}$. Hence $[K:\mathbb Q(\alpha)]_s=1$ by [F7], and [F8] upgrades this to $[K:\mathbb Q(\alpha)]=1$, that is, $K=\mathbb Q(\alpha)$. [F7, F8, step 6.1]
8.1 Steps 7.1, 5.2, and 4.3 cover respectively the real-embedding case, the totally complex case with $r_2\ge2$, and the totally complex quadratic case; each gives $K=\mathbb Q(\alpha)$ for the constructed integral $\alpha$. In the real-embedding case step 6.1 bounds the distinguished real conjugate and all others have modulus $<1$. In the totally complex cases step 2.4 bounds $\tau_1(\alpha)$ and its conjugate, while all other conjugates have modulus $<1$ by the chosen window. Since $B\ge1$, these bounds are all at most $\sqrt{B+2}$. [step 5.1, step 2.4, step 6.1, step 5.2, step 4.3, step 7.1] ∎
## Remarks

The two windows are the ones used by Milne: the real case enlarges the first
real coordinate, and the totally complex case enlarges the imaginary part of
the first complex coordinate while keeping its real part in $(-1,1)$. For
$r_2\ge2$, the norm makes the first conjugate pair the unique values outside
the unit circle, and the asymmetry separates the pair. For $r_2=1$, the strict
real-coordinate bound rules out a rational integral element, and degree two
then makes the nonzero element primitive. The uniform bound $\sqrt{B+2}$
absorbs both coordinate bounds. This lemma is
the analytic input to the Hermite-Minkowski finiteness theorem proved later on
this page; the finiteness of the possible minimal polynomials there is a
separate, purely algebraic step.
