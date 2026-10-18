---
id: lem-cone-sites-admit-stable-polynomial-norming-stencils
kind: lemma
title: "Uniform cone domains admit stable polynomial norming stencils"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - thm-rank-nullity
  - thm-reals-field
  - thm-reals-ordered-field
  - thm-root-bound-for-polynomials-over-a-domain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), §§2.1–2.2"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
---

## Statement

Let $\Omega\subset\mathbb R^d$ be an admitted domain of [[def-rbf-kernels-sites-and-augmented-interpolation]], let $X\subset\Omega$ be finite and nonempty, and put $h=h_X$. Fix an integer $m\ge1$ and let $J=\dim\Pi_{m-1}(\mathbb R^d)$. There are constants $R,B,h_0>0$, depending only on $d,m,r_0,\theta$, such that if $0<h\le h_0$, then for every $x\in\overline\Omega$ there are distinct nodes $y_1,\ldots,y_J\in X$ and real weights $\lambda_1,\ldots,\lambda_J$ with
$$|y_j-x|\le Rh,\qquad \sum_{j=1}^J|\lambda_j|\le B,\qquad p(x)=\sum_{j=1}^J\lambda_jp(y_j)\quad(p\in\Pi_{m-1}(\mathbb R^d)).$$
No lower bound on site separation is assumed.

## Facts & Assumptions

**Given:** An admitted domain with uniform cone constants $r_0,\theta$, a finite nonempty site set $X$, fill distance $h$, an integer $m\ge1$, and a point $x\in\overline\Omega$.

[F1] The cone constants give, at each $x$, an orthogonal map $Q_x$ that sends the radius-$r_0$ cone into $\Omega-x$; the fill distance is $\sup_{z\in\Omega}\min_{y\in X}|z-y|$. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

[F2] A nonzero univariate polynomial over an integral domain has at most its degree many distinct roots. ([[thm-root-bound-for-polynomials-over-a-domain]])

[F3] For a linear map with finite-dimensional domain, dimension is nullity plus rank. ([[thm-rank-nullity]])

[F4] The real numbers form a totally ordered field. In an interval $I=(a,b)$, the $m$ numbers $a+\frac{k}{m+1}(b-a)$, $1\le k\le m$, are distinct and lie in $I$. ([[thm-reals-ordered-field]])

[A1] For one fixed $x$, choose its cone orientation and finitely many nearest sites; these are finite choices, and the argument below never selects a family of stencils indexed by all $x$.

## Proof

**Given:** The data above and the finite-dimensional polynomial space $\Pi_{m-1}(\mathbb R^d)$ with its monomial basis.

1.1 The evaluations at points of the open unit cone $C=\{z:0<|z|<1,\ z_1>|z|\cos\theta\}$ span the dual of $\Pi_{m-1}(\mathbb R^d)$. Indeed, if fewer than $J$ independent evaluations have been chosen, the map from $\Pi_{m-1}$ to their finite value list has nonzero kernel by [F3]; choose a nonzero polynomial $p$ in that kernel. Since $C$ is nonempty and open (it contains $e_1/2$), it contains a box $I_1\times\cdots\times I_d$ of nonempty open intervals. Write $p$ as a polynomial in its first coordinate, of degree at most $m-1$. For every fixed tuple of the other coordinates in their intervals, this univariate polynomial vanishes at the $m$ distinct points $a_1+\frac{k}{m+1}(b_1-a_1)$, $1\le k\le m$, where $I_1=(a_1,b_1)$. These points lie in $I_1$ by [F4], so the root bound [F2] forces every coefficient to vanish at that tuple. Applying the same argument inductively to each coefficient polynomial on $I_2\times\cdots\times I_d$ shows every coefficient is identically zero, contrary to the choice of $p$. Thus $p$ is nonzero at some point of $C$, and evaluation there increases the independent list. After the finite number $J$ of steps, choose $z_1,\ldots,z_J\in C$ with invertible evaluation matrix. [F2, F3, F4, given, choose]

2.1 For the chosen nodes, the weights representing evaluation at zero are the row $\mathbf p(0)^{\mathsf T}E^{-1}$, where $E$ is their evaluation matrix and $\mathbf p$ is the monomial vector. Choose $\varepsilon>0$ smaller than one third of the minimum distance between reference nodes. On the bounded perturbation neighborhood, every monomial entry changes by at most a constant times $\varepsilon$ by telescoping its finite product; the determinant, being a finite signed sum of products of entries, therefore changes by at most $C\varepsilon$. Choose $\varepsilon$ smaller if necessary so $C\varepsilon<|\det E|/2$. Then $|\det E'|\ge|\det E|/2$ for every perturbed matrix $E'$. Its cofactors are bounded there because the entries are bounded, so the adjugate formula $E'^{-1}=\operatorname{adj}(E')/\det E'$ gives a uniform bound $B$ on the sum of absolute evaluation-at-zero weights. [step 1.1, algebra, choose]

3.1 Choose $L>1/\varepsilon$ and set $h_0\le r_0/L$. For the fixed $x$, use [F1] to choose $Q_x$. Each target $x+LhQ_xz_j$ lies in $\Omega$ when $h\le h_0$, so the fill-distance definition supplies a site $y_j\in X$ within distance $h$. The normalized points $z'_j=(Lh)^{-1}Q_x^{-1}(y_j-x)$ then satisfy $|z'_j-z_j|\le1/L<\varepsilon$; hence they are distinct and their evaluation weights have sum at most $B$. [F1, A1, step 2.1, given, choose]

4.1 For any $p\in\Pi_{m-1}(\mathbb R^d)$, the affine pullback $q(z)=p(x+LhQ_xz)$ has degree at most $m-1$. The weights from step 3.1 represent evaluation at zero for every such polynomial, so $p(x)=q(0)=\sum_j\lambda_jq(z'_j)=\sum_j\lambda_jp(y_j)$. Also $|y_j-x|\le Lh|z_j|+h\le(L+1)h$. Taking $R=L+1$ proves the bounds with constants independent of $X,h,x$; no separation condition entered the construction. [step 3.1, algebra] ∎
