---
id: ex-convolution-on-a-compact-group
kind: example
title: "Convolution of matrix coefficients on a compact group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-normalized-haar-probability-on-a-compact-group, prop-compact-discrete-and-abelian-groups-are-unimodular, def-compactly-supported-convolution-on-a-group, def-convolution-on-cc-and-l1-of-a-group, lem-l1-convolution-norm-inequality, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-complex-l-two-inner-product, lem-haar-translations-are-strongly-continuous-on-lp-one-and-two, lem-haar-change-of-variables-under-inversion, def-unimodular-locally-compact-group, def-subrepresentation-and-irreducible-representation, def-intertwiner-equivalent-and-faithful-representations, def-finite-dimensional-representation-of-a-group-over-a-field, cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B and 31A–31E, printed pp. 115–125"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $G$ be a compact Hausdorff group with its normalized Haar probability
measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). Then the constant
function $\mathbf 1$ satisfies $\mathbf 1\ast\mathbf 1=\mathbf 1$. Moreover, for
continuous finite-dimensional irreducible unitary representations $\pi$ on $V$ and
$\sigma$ on $W$ of $G$
([[def-subrepresentation-and-irreducible-representation]]) with
first-variable-linear coefficients
$$f^{\pi}_{u,v}(x):=\langle\pi(x)u,v\rangle\qquad(u,v\in V),\qquad f^{\sigma}_{w,z}(x):=\langle\sigma(x)w,z\rangle\qquad(w,z\in W),$$
the convolution of coefficients is zero when $\pi\not\cong\sigma$. If they
are equivalent, choose any unitary intertwiner $T:W\to V$ satisfying
$T\sigma(x)=\pi(x)T$. Then
$$f^{\pi}_{u,v}\ast f^{\sigma}_{w,z}=\frac{\langle u,Tz\rangle}{\dim\pi}\,f^{\pi}_{Tw,v}.$$
This formula is independent of the choice of $T$. When $\sigma=\pi$ on the
same space, one may take $T=I_V$.

## Facts & Assumptions

**Given:** A compact Hausdorff group $G$ with its normalized Haar probability measure $\mu$, continuous finite-dimensional irreducible unitary representations $\pi$ on $V$ and $\sigma$ on $W$, and AC.

[F1] A compact Hausdorff group has a left Haar probability measure, and that measure is right invariant; a compact group is unimodular, so $\Delta_G\equiv1$ and inversion preserves $\mu$ ([[cor-normalized-haar-probability-on-a-compact-group]], [[prop-compact-discrete-and-abelian-groups-are-unimodular]], [[def-unimodular-locally-compact-group]], [[lem-haar-change-of-variables-under-inversion]]).

[F2] For $f,g\in C_c(G)$ convolution is $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$, and convolution on $L^1(G)$ is the unique $\mathbb C$-bilinear extension with $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, jointly continuous and agreeing with the $C_c$ formula ([[def-compactly-supported-convolution-on-a-group]], [[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]]).

[F3] $C_c(G)$ is dense in $L^1(G)$ and in $L^2(G)$; on the probability space $G$ one has $\|h\|_1\le\|h\|_2$ for $h\in L^2(G)$, and $L^p(G)=L^p(G,\mu;\mathbb C)$ with $\|h\|_p=(\int_G|h|^p\,d\mu)^{1/p}$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F4] $L^2(G)$ carries the first-variable-linear inner product $\langle h,k\rangle=\int_Gh\overline{k}\,d\mu$, whose induced norm is $\|\cdot\|_2$ ([[def-complex-l-two-inner-product]]).

[F5] Left and modular right translations are strongly continuous on $L^2(G)$; since $\Delta_G\equiv1$ here, the plain right translation $h\mapsto h(\cdot\,g)$ is strongly continuous ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]], [F1]).

[F6] A subrepresentation of a finite-dimensional representation is a linear subspace carried into itself by every $\rho(g)$, and irreducibility means the nonzero space has no proper nonzero subrepresentation; an intertwiner is a linear map with $f\rho(g)=\sigma(g)f$ for all $g$, and equivalence means the existence of an invertible intertwiner ([[def-subrepresentation-and-irreducible-representation]], [[def-intertwiner-equivalent-and-faithful-representations]], [[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F7] Every endomorphism of a nonzero finite-dimensional complex vector space has an eigenvalue in $\mathbb C$ ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]).

[F8] For a continuous finite-dimensional irreducible unitary representation the coefficient $f^{\pi}_{u,v}(x)=\langle\pi(x)u,v\rangle$ is continuous because $x\mapsto\pi(x)u$ and the inner product are continuous, and $|f^{\pi}_{u,v}(x)|\le\|u\|\|v\|$ by Cauchy–Schwarz and unitarity, so it lies in $L^1(G)$ and $L^2(G)$ because $\mu$ is a probability measure.

[A1] AC is assumed in the choice-function form of the cited definition; it is inherited from the Haar-measure, completeness and strong-continuity suppliers [F1], [F3] and [F5], and is first used in step 1.1 through [F3] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Coefficients are square integrable. By [F8] each coefficient $f^{\pi}_{u,v}$ and $f^{\sigma}_{w,z}$ is continuous with $|f^{\pi}_{u,v}|\le\|u\|\|v\|$ and $|f^{\sigma}_{w,z}|\le\|w\|\|z\|$, so both lie in $L^\infty(G)\subseteq L^2(G)$ with $\|f^{\pi}_{u,v}\|_2,\|f^{\sigma}_{w,z}\|_2<\infty$ because $\mu$ is a probability measure; the description of $L^2(G)$ used here is the one of [F3], available under the AC of [A1]. [A1, F3, F8]

1.2 The integral formula computes convolution for $L^2$-functions. Let $f,g\in L^2(G)$ and put $h(x):=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$. For each $x$ the integral converges absolutely with $|h(x)|\le\|f\|_2\|g\|_2$ by Cauchy–Schwarz [F4]. The function $h$ is continuous: for $x,x_0\in G$, Cauchy–Schwarz and the measure-preserving substitution $y\mapsto w=y^{-1}x_0$ (measure preserving by the unimodularity and inversion invariance of [F1]) give $|h(x)-h(x_0)|\le\|f\|_2\,\|g(\cdot\,x_0^{-1}x)-g\|_2\to0$ as $x\to x_0$ by strong continuity of right translation [F5]. Also $\|h\|_2\le\|f\|_2\|g\|_2$: the pointwise Cauchy–Schwarz bound and $\mu(G)=1$ give $\int_G|h(x)|^2d\mu(x)\le\int_G\Bigl(\int_G|f(y)|^2d\mu(y)\Bigr)\Bigl(\int_G|g(y^{-1}x)|^2d\mu(y)\Bigr)d\mu(x)=\|f\|_2^2\|g\|_2^2$ by left invariance of $\mu$ [F1]. Finally, on $C_c(G)\times C_c(G)$ the map $(f,g)\mapsto h$ is the $C_c$ convolution by [F2], and both $(f,g)\mapsto h$ and the $L^1$ convolution are continuous bilinear maps from $L^2(G)\times L^2(G)$ into $L^1(G)$: the first because $\|h\|_1\le\|h\|_2\le\|f\|_2\|g\|_2$, the second because $\|f\ast g\|_1\le\|f\|_1\|g\|_1\le\|f\|_2\|g\|_2$, using $\|t\|_1\le\|t\|_2$ on the probability space $G$ and [F2], [F3]; so density of $C_c(G)$ in $L^2(G)$ [F3] forces $h=f\ast g$ for all $f,g\in L^2(G)$. [F1, F2, F3, F4, F5]

1.3 The averaged operator. Define $A:W\to V$ by $A(\xi):=\int_G\langle\sigma(y)^{-1}\xi,z\rangle\,\pi(y)u\,d\mu(y)$, the integral being computed componentwise in a basis of $V$; the integrand is continuous on the compact group, so the integral exists and $A$ is linear in $\xi$. Then $A$ intertwines $\sigma$ with $\pi$: for $g\in G$ and $\xi\in W$, substituting $y=gy'$ and using invariance of $\mu$ gives $A(\sigma(g)\xi)=\int_G\langle\sigma(y)^{-1}\sigma(g)\xi,z\rangle\pi(y)u\,d\mu(y)=\int_G\langle\sigma(g^{-1}y)^{-1}\xi,z\rangle\pi(y)u\,d\mu(y)=\int_G\langle\sigma(y')^{-1}\xi,z\rangle\pi(gy')u\,d\mu(y')=\pi(g)A(\xi)$, using $\sigma(y)^{-1}\sigma(g)=\sigma(y^{-1}g)$ and the substitution $y=gy'$. [F1, F6]

2.1 The constant function. Since $\mu(G)=1$ and $\mathbf 1\in L^2(G)$ by [F3], the integral formula of step 1.2 gives $(\mathbf 1\ast\mathbf 1)(x)=\int_G\mathbf 1\,d\mu=1$ for every $x$, so $\mathbf 1\ast\mathbf 1=\mathbf 1$. [F1, F3, step 1.2]

2.2 The product identity. For $x\in G$, the integral formula of step 1.2 applied to the coefficients of step 1.1 gives $$(f^{\pi}_{u,v}\ast f^{\sigma}_{w,z})(x)=\int_G\langle\pi(y)u,v\rangle\langle\sigma(y^{-1}x)w,z\rangle\,d\mu(y) =\Bigl\langle\int_G\langle\sigma(y)^{-1}\sigma(x)w,z\rangle\pi(y)u\,d\mu(y),\,v\Bigr\rangle ,$$ where the second equality uses $\sigma(y^{-1}x)=\sigma(y)^{-1}\sigma(x)$ and the linearity of the inner product in its first variable; the right-hand side is $\langle A(\sigma(x)w),v\rangle$ with $A$ as in step 1.3. [F4, F6, step 1.1, step 1.2, step 1.3]

2.3 The trace of $A$ in the case $\sigma=\pi$. Suppose $\sigma$ is the same representation $\pi$ on $V$, of dimension $d$, so that $A$ is an endomorphism of $V$; write $R_y(\xi):=\langle\pi(y)^{-1}\xi,z\rangle\pi(y)u=\langle\xi,\pi(y)z\rangle\pi(y)u$, a rank-one operator with $\operatorname{tr}R_y=\langle\pi(y)u,\pi(y)z\rangle=\langle u,z\rangle$ by unitarity of $\pi(y)$. Integrating the traces, $\operatorname{tr}A=\int_G\langle u,z\rangle\,d\mu(y)=\langle u,z\rangle$. [F1, F4, step 1.3]

3.1 The Schur step. The kernel and the image of any intertwiner are subrepresentations, by [F6]; hence if $A\ne0$, irreducibility makes $A$ an isomorphism. Thus $\pi\not\cong\sigma$ forces $A=0$. If $\pi\cong\sigma$, rescale an invertible intertwiner to a unitary one $T:W\to V$: $T^*T$ commutes with $\sigma$, hence is a positive scalar by the eigenvalue argument of [F7] and irreducibility. Then $AT^{-1}$ commutes with $\pi$ and is scalar by the same argument. Replacing $z$ by $Tz$ in the trace calculation of step 2.3 gives $\operatorname{tr}(AT^{-1})=\langle u,Tz\rangle$, so $A=(\langle u,Tz\rangle/\dim\pi)T$. [F6, F7, step 1.3, step 2.3]

4.1 The coefficient products. The coefficients lie in $L^2(G)\subseteq L^1(G)$ by [F3] and [F8], so step 2.2 computes their convolution. If $\pi\not\cong\sigma$, $A=0$ by step 3.1. Otherwise step 3.1 gives $A=(\langle u,Tz\rangle/\dim\pi)T$, hence step 2.2 gives $(f^{\pi}_{u,v}\ast f^{\sigma}_{w,z})(x)=(\langle u,Tz\rangle/\dim\pi)\langle\pi(x)Tw,v\rangle$. Any two unitary intertwiners differ by a scalar $c$ with $|c|=1$, since their quotient commutes with $\pi$ and the scalar-endomorphism argument of step 3.1 applies. Replacing $T$ by $cT$ conjugate-scales the first factor and scales the coefficient by $c$, so the product is independent of $T$. [F2, F3, F8, step 2.2, step 3.1]

5.1 Together with $\mathbf 1\ast\mathbf 1=\mathbf 1$ from step 2.1, step 4.1 proves the coefficient formula for inequivalent and equivalent irreducible representations. For $\sigma=\pi$, taking $T=I_V$ gives $(\langle u,z\rangle/\dim\pi)f^{\pi}_{w,v}$. ∎ [step 2.1, step 4.1]

## Verification notes

- **Hypotheses used.** Continuity, irreducibility, unitarity in a finite dimension and compactness of $G$ enter; the coefficient $\langle u,z\rangle$ pairs the "input" vector of the first coefficient with the "output" vector of the second, and $f^{\pi}_{w,v}$ uses the two remaining vectors, matching the classical matrix-unit rule.
- **Choice cost.** [A1] is inherited from the suppliers [F1], [F3] and [F5] and is first used in step 1.1 through [F3], as declared in the fact itself; the eigenvalue theorem [F7], the averaging, the trace computation and the norm estimates add no further selection.
