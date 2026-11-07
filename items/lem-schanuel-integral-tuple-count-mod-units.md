---
id: lem-schanuel-integral-tuple-count-mod-units
kind: lemma
title: Schanuel's archimedean integral-tuple count modulo units
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-invertible-element
  - def-archimedean-embeddings-and-number-field-signature
  - def-logarithmic-unit-embedding
  - thm-logarithmic-unit-image-is-a-full-lattice
  - lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
  - def-roots-of-unity-in-a-field
  - lem-roots-of-unity-in-a-number-field-are-finite
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-ideal-class-group-of-a-domain
  - thm-finiteness-of-the-number-field-class-group
  - def-fractional-ideal-norm-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-generated-and-principal-ideals
  - thm-product-formula-for-number-fields
  - def-minkowski-embedding-of-a-number-field
  - thm-covolume-of-an-ideal-lattice
  - def-number-field-regulator
  - thm-number-field-regulator-is-well-defined
  - def-schanuel-constant
  - lem-lipschitz-boundary-lattice-point-count
  - def-jordan-inner-and-outer-content
  - thm-jordan-boundary-criterion
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-disc-jordan-content-is-pi-r-squared
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-natural-logarithm-laws
  - lem-derivative-algebra-and-chain-rules
  - thm-derivative-of-exponential
  - thm-exponential-limits-and-range
  - thm-substitution-for-improper-integrals
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 1 and its proof, printed pp. 435–444"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$ and signature $(r_1,r_2)$, let $m\ge2$, and let $\mathfrak a$ be a nonzero integral ideal of $\mathcal O_K$. For $\mathbf x=(x_0,\dots,x_{m-1})\in\mathfrak a^m\setminus\{0\}$, put
$$
M_\sigma(\mathbf x):=\max_i|\sigma(x_i)|,\qquad M_\tau(\mathbf x):=\max_i|\tau(x_i)|^2,\qquad H_\infty(\mathbf x):=\prod_{\sigma:K\hookrightarrow\mathbb R}M_\sigma(\mathbf x)\prod_{\tau:K\hookrightarrow\mathbb C\,/\,\mathrm{conjugation}}M_\tau(\mathbf x),
$$
using one embedding from each complex-conjugate pair. Let $S_{K,m,\mathfrak a}(Y)$ be the set of equivalence classes under $\mathbf x\sim u\mathbf x$ for $u\in\mathcal O_K^\times$ of the tuples satisfying $H_\infty(\mathbf x)\le YN\mathfrak a$. Then, as $Y\to\infty$,
$$
|S_{K,m,\mathfrak a}(Y)|=\frac{R_K\kappa_{K,m}}{w_K}Y^m+O_{K,m}\!\left(Y^{m-1/N}\right),
$$
uniformly over all nonzero integral ideals $\mathfrak a$ of $\mathcal O_K$; $R_K$, $w_K$, and $\kappa_{K,m}$ have the doubled complex-place normalization stated in the definition of the Schanuel constant.

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-invertible-element]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-fractional-ideal-norm-number-field]]

[[def-number-field-regulator]]

[[def-schanuel-constant]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of degree $N$ and signature $(r_1,r_2)$, an integer $m\ge2$, and a nonzero integral ideal $\mathfrak a\subseteq\mathcal O_K$.

[A1] The Axiom of Choice is assumed by the unit-logarithm lattice theorem and the number-field class-group finiteness theorem; it implies Countable Choice for the measure suppliers used in the volume calculation. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F1] At each real place the normalized absolute value is $|\sigma(x)|$, and at each complex place it is $|\tau(x)|^2$. The logarithmic unit embedding is $\lambda(u)=(\log|\sigma(u)|,2\log|\tau(u)|)$, its image is a full lattice in $H=\{z\in\mathbb R^{r_1+r_2}:\sum_vz_v=0\}$, and its kernel on $\mathcal O_K^\times$ is $\mu(K)$. ([[def-archimedean-embeddings-and-number-field-signature]], [[def-logarithmic-unit-embedding]], [[thm-logarithmic-unit-image-is-a-full-lattice]], [[lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity]])

[F2] The group $\mu(K)$ is finite, with cardinality $w_K$ in the definition of $C_{K,m}$; the regulator uses the same doubled complex coordinates and $R_K>0$. ([[def-roots-of-unity-in-a-field]], [[lem-roots-of-unity-in-a-number-field-are-finite]], [[def-number-field-regulator]], [[thm-number-field-regulator-is-well-defined]], [[def-schanuel-constant]])

[F3] Under the unscaled Minkowski embedding, every nonzero integral ideal is a full lattice with covolume $2^{-r_2}\sqrt{D_K}\,N\mathfrak a$. ([[def-minkowski-embedding-of-a-number-field]], [[thm-covolume-of-an-ideal-lattice]])

[F4] The ideal class group of $\mathcal O_K$ is finite. If $\mathfrak a=(\alpha)\mathfrak a_0$ with $\mathfrak a$ and $\mathfrak a_0$ integral and $\alpha\in K^\times$, then the fractional ideal norm is multiplicative and
$$
N((\alpha))=\prod_{v\mid\infty}|\alpha|_v,
$$
because the finite factor in the product formula is $N((\alpha))^{-1}$. ([[cor-ring-of-integers-is-a-dedekind-domain]], [[def-ideal-class-group-of-a-domain]], [[thm-finiteness-of-the-number-field-class-group]], [[def-fractional-ideal-norm-number-field]], [[def-prime-ideal-valuations-on-fractional-ideals]], [[def-generated-and-principal-ideals]], [[thm-product-formula-for-number-fields]])

[F5] $\kappa_{K,m}=\left(2^{r_1}(2\pi)^{r_2}/\sqrt{D_K}\right)^m m^{r_1+r_2-1}$. ([[def-schanuel-constant]])

[F6] Under Countable Choice, real boxes and products of complex discs have the products of their factor volumes; a complex disc of radius $r$ has area $\pi r^2$, and an invertible linear change of coordinates multiplies Lebesgue volume by the absolute determinant. ([[def-countable-choice]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[cor-disc-jordan-content-is-pi-r-squared]], [[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

[F7] A bounded set whose boundary has Jordan content zero is Jordan measurable. ([[def-jordan-inner-and-outer-content]], [[thm-jordan-boundary-criterion]])

[F8] A bounded Jordan-measurable domain with the stated finite Lipschitz boundary charts satisfies the lattice-point estimate $\#(\Lambda\cap tD)=\operatorname{Vol}(D)t^k/\operatorname{covol}(\Lambda)+O(t^{k-1})$. ([[lem-lipschitz-boundary-lattice-point-count]])

[F9] The logarithm is continuous, strictly increasing, and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$. ([[thm-natural-logarithm-laws]])

[F10] For $m\ge2$, $\int_{-\infty}^0e^{mS}\,dS=1/m$: the chain and product rules give derivative $m e^{mS}$, the exponential tends to zero at $-\infty$, and the improper substitution theorem applies on compact truncations and then in the limit. ([[lem-derivative-algebra-and-chain-rules]], [[thm-derivative-of-exponential]], [[thm-exponential-limits-and-range]], [[thm-substitution-for-improper-integrals]])

## Proof

1.1 Set $s:=r_1+r_2$, put $q_v=1$ at real places and $q_v=2$ at complex places, so $\sum_vq_v=N$, and define $\Pi(y):=y-(\sum_vy_v)(q_v)_v/N$. For every nonzero archimedean tuple $\mathbf x$, write $\eta(\mathbf x):=(\log M_v(\mathbf x))_v$. Multiplying the tuple by a unit $u$ adds $\lambda(u)$ to $\eta$, while multiplying all archimedean coordinates by a positive real $t$ adds $(q_v\log t)_v$; therefore $\Pi\eta(u\mathbf x)=\Pi\eta(\mathbf x)$ modulo the unit-log lattice and $H_\infty(t\mathbf x)=t^NH_\infty(\mathbf x)$. [A1, F1, F6, F9, algebra]

2.1 Choose a $\mathbb Z$-basis $\lambda(u_1),\dots,\lambda(u_r)$ of the full unit-log lattice, where $r=s-1$, and let $T_j:H\to\mathbb R$ be the coordinate functionals in that real basis; for $r=0$ this is the empty list and $F=\{0\}$. Put $F:=\{z\in H:0\le T_j(z)<1\text{ for }1\le j\le r\}$, a half-open fundamental parallelepiped. On the archimedean ambient space $V_\infty^m:=\prod_{\sigma:K\hookrightarrow\mathbb R}\mathbb R^m\times\prod_{\tau\text{ one from each complex-conjugate pair}}\mathbb C^m$, extend each $M_v$ by the same maximum formula on its place block and put $H_\infty=\prod_vM_v$. Every unit orbit has a representative whose projected logarithm lies in $F$; any two such representatives differ by an element of $\ker\lambda=\mu(K)$. Since a root of unity cannot fix a nonzero tuple unless it is $1$, each orbit has exactly $w_K$ representatives in $A:=\{\mathbf x\in V_\infty^m:M_v(\mathbf x)>0\ \forall v,\ \Pi\eta(\mathbf x)\in F,\ H_\infty(\mathbf x)\le1\}$. The tuples in the Statement therefore correspond to the lattice points of $\sigma(\mathfrak a)^m\cap(YN\mathfrak a)^{1/N}A$, with exactly $w_K$ points per unit orbit. [F1, F2, given, step 1.1, choose, construct]

2.2 At a real place, the volume of $\{\mathbf x:M_\sigma(\mathbf x)\le u\}$ is $(2u)^m$, so in $y_\sigma=\log u$ its density is $m2^m e^{my_\sigma}dy_\sigma$. At a complex place, $M_\tau(\mathbf x)\le u$ is a product of $m$ discs of radius $\sqrt u$, with volume $(\pi u)^m$, so in $y_\tau=\log u$ its density is $m\pi^m e^{my_\tau}dy_\tau$. Multiplying the placewise densities gives $m^s2^{mr_1}\pi^{mr_2}e^{mS}\,dy$. [A1, F6, F9, F10, given, step 1.1, algebra]

3.1 For each place $v$, write the $m$-coordinate block as $x_v=r_v^{1/q_v}\theta_v$, where $r_v=M_v(\mathbf x)>0$ and $\max_i|\theta_{v,i}|=1$. Put $z=\Pi\eta$ and $t=e^{S/N}$ with $S=\sum_v\eta_v\le0$. Then $0<t\le1$, $z\in F$, and $r_v=e^{z_v}t^{q_v}$, so $x_v=t e^{z_v/q_v}\theta_v$. Since $F$ is bounded and each $\theta_v$ lies on a compact max-norm unit sphere, this parametrization bounds every real and complex coordinate of $\mathbf x$ uniformly; its closure also includes only the origin at $t=0$. Thus $A$ is bounded. [given, F1, F9, step 2.1, algebra, construct]

4.1 The closure of $F$ is a compact parallelepiped. Each max-norm unit sphere in a real block is the boundary of a cube, and each complex one is a finite union of pieces on which one coordinate lies on the unit circle and the others lie in closed unit discs; these pieces have finite Lipschitz charts, including their corners. The formula in step 3.1 is Lipschitz on the compact parameter pieces $[0,1]\times\overline F\times\prod_v\{\max_i|\theta_{v,i}|=1\}$. Away from $t=0$, the boundary of $A$ is contained in the images of the outer face $t=1$ and of the finitely many faces of $\overline F$; the remaining parameter directions are unconstrained. The point at $t=0$ is the origin. Each listed parameter face has dimension $mN-1$ and finitely many Lipschitz charts, so these images together with the origin cover $\partial A$ by finitely many Lipschitz charts of dimension $mN-1$. Subdividing each chart's parameter cube into $q^{mN-1}$ cubes of side $1/q$ covers its image by boxes of side $O(1/q)$ and total volume $O(1/q)$; hence $\partial A$ has Jordan content zero. By [F7], $A$ is Jordan measurable. [F1, F7, step 2.1, step 3.1, construct, algebra]

5.1 In the coordinates $z=\Pi y\in H$ and $S=\sum_vy_v$, one has $y=z+(q_v)_vS/N$. Delete the last coordinate of $z$, using $z_s=-\sum_{v<s}z_v$; the resulting linear map $(z_1,\dots,z_{s-1},S)\mapsto y$ has absolute determinant $1$, because its first $s-1$ columns have an identity block and the entries of its final column sum to $\sum_vq_v/N=1$. The region $A$ corresponds to $z\in F$ and $S\le0$. The regulator's deleted-row convention gives coordinate volume $R_K$ for $F$, and [F10] evaluates the radial integral; together with the density in step 2.2 and Jordan measurability from step 4.1 this gives $\operatorname{Vol}(A)=R_Km^{s-1}2^{mr_1}\pi^{mr_2}$. [F2, F6, F9, F10, step 2.1, step 2.2, step 4.1, algebra]

6.1 The lattice $\sigma(\mathfrak a)^m$ has dimension $mN$ and covolume $2^{-mr_2}D_K^{m/2}(N\mathfrak a)^m$ by [F3] and the product-volume formula in [F6]. Applying [F8] to the scaled domain from step 2.1, whose Jordan and boundary conditions were proved in step 4.1, gives main term $\operatorname{Vol}(A)(YN\mathfrak a)^m/(2^{-mr_2}D_K^{m/2}(N\mathfrak a)^m)=R_K\kappa_{K,m}Y^m$ and error $O_{K,m,\mathfrak a}(Y^{m-1/N})$. Dividing by the $w_K$ representatives per unit orbit gives the asserted main term and a fixed-ideal error. [F3, F5, F7, step 2.1, step 4.1, step 5.1, algebra]

7.1 The class group is finite by [F4]. Choose one integral ideal representative $\mathfrak a_0$ for each class. If $\mathfrak a=(\alpha)\mathfrak a_0$, multiplication by $\alpha$ bijects $\mathfrak a_0^m$ with $\mathfrak a^m$, commutes with unit multiplication, and scales both $H_\infty$ and $N\mathfrak a$ by the same factor $\prod_{v\mid\infty}|\alpha|_v=N((\alpha))$. Thus the orbit counts for $\mathfrak a$ and $\mathfrak a_0$ agree for every $Y$. Taking the maximum of the finitely many fixed-representative error constants in step 6.1 makes the error uniform over all nonzero integral ideals. [F4, given, step 6.1, algebra]

8.1 Steps 6.1 and 7.1 prove the claimed asymptotic with an implied constant depending only on $K$ and $m$. [step 6.1, step 7.1] ∎

