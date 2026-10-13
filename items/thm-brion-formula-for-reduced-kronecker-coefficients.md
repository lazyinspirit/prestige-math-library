---
id: thm-brion-formula-for-reduced-kronecker-coefficients
kind: theorem
title: "Brion's formula for the reduced Kronecker coefficients"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-reduced-kronecker-coefficient,
       lem-vertex-operator-series-for-padded-schur-functions,
       lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities,
       def-padded-kronecker-coefficient-sequence,
       lem-padding-completion-is-compatible-with-the-internal-product,
       thm-murnaghan-stability-for-kronecker-coefficients,
       def-kronecker-coefficient-and-internal-tensor-product,
       def-first-row-padding-completion-and-the-stabilization-operator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); Proposition 3.2 and identity (10), pp. 9-10 (Brion's formula and the symmetric Cauchy-type identity)"
      url: "https://arxiv.org/pdf/1607.02887"
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Murnaghan's theorem p. 4 and Lemma 2.1 pp. 7-8"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Statement

For all partitions $\alpha,\beta,\gamma$,
$$\bar g^\gamma_{\alpha,\beta} =\bigl\langle s_\alpha[X]s_\beta[Y]\,\big|\,\sigma[XY]\,s_\gamma[XY+X+Y]\bigr\rangle_{X,Y},$$
the inner product being the Hall inner product extended to symmetric functions
in the two alphabet variables $X,Y$, and $\bar g^\gamma_{\alpha,\beta}$ the
reduced Kronecker coefficient
([[def-reduced-kronecker-coefficient]]).

Equivalently, introducing a third alphabet $Z$,
$$\sum_{\alpha,\beta,\gamma}\bar g^\gamma_{\alpha,\beta}\, s_\alpha[X]s_\beta[Y]s_\gamma[Z] =\sigma[XYZ+XY+XZ+YZ],$$
the symmetric Cauchy-type identity for the reduced coefficients, summed over
all triples of partitions and by total degree. Equivalently again, in the
notation of
[[lem-padding-completion-is-compatible-with-the-internal-product]],
$$R_{\alpha,\beta}=\sum_\gamma \bar g^\gamma_{\alpha,\beta}\,s_\gamma,$$
the finite Schur expansion of the polynomial $R_{\alpha,\beta}$.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$, alphabet variables $X,Y,Z,A,B$ and integers $a=|\alpha|$, $b=|\beta|$.

[F1] The element $R_{\alpha,\beta}[Z]=\langle s_\alpha[A]s_\beta[B]\,|\,\sigma[ZAB+ZA+ZB+AB]\rangle_{A,B}$ is a finite polynomial in $Z$ of degree at most $a+b$, and the identity of graded series $\sum_{n\ge0}(U_ns_\alpha)*(U_ns_\beta)t^n=\sigma[tX]R_{\alpha,\beta}[tX-1]$ holds ([[lem-padding-completion-is-compatible-with-the-internal-product]]).

[F2] For every $\gamma$ in the finite support and all sufficiently large $n$, $g^{\gamma[n]}_{\alpha[n],\beta[n]}=\bar g^\gamma_{\alpha,\beta}$; for fixed $\alpha,\beta$ only finitely many $\bar g^\gamma_{\alpha,\beta}$ are nonzero ([[thm-murnaghan-stability-for-kronecker-coefficients]], [[def-reduced-kronecker-coefficient]], [[def-padded-kronecker-coefficient-sequence]]).

[F3] The Cauchy identity $\sigma[UV]=\sum_\lambda s_\lambda[U]s_\lambda[V]$ and the reproducing kernel $\langle\sigma[AX]\,|\,f[X]\rangle_X=f[A]$ hold for all specializations, summed by degree ([[lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities]]).

[F4] $U_ns_\lambda=s_{\lambda[n]}$; for $n\ge|\lambda|+\lambda_1$ these are honest Schur functions, and increasing $n$ by $k\ge0$ increases their first part by $k$, so $s_{\lambda[n+k]}=V^k(s_{\lambda[n]})$. Distinct admissible tails give distinct padded partitions, since deleting the first row recovers the tail ([[def-first-row-padding-completion-and-the-stabilization-operator]], [[def-padded-kronecker-coefficient-sequence]]).

[F5] $s_\mu*s_\nu=\sum_\delta g^\delta_{\mu,\nu}s_\delta$ for partitions of a common size, and $g^\delta_{\mu,\nu}=0$ unless $\delta$ has that size ([[def-kronecker-coefficient-and-internal-tensor-product]]).

## Proof

**Proof technique:** comparison of generating functions at a large rank.

1.1 *The polynomial $R$ and its Schur coefficients.* By [F1], $R_{\alpha,\beta}$ is a finite element of $\Lambda_Z$ of degree at most $a+b$, so it has a unique finite Schur expansion $R_{\alpha,\beta}=\sum_\gamma r_\gamma s_\gamma$ with $r_\gamma=\langle R_{\alpha,\beta},s_\gamma\rangle_Z$. [F1]

2.1 *Identification of the coefficients.* Choose $n$ large enough that (i) $n\ge|\alpha|+\alpha_1$ and $n\ge|\beta|+\beta_1$, (ii) $n\ge|\lambda|+\lambda_1$ for every $\lambda$ occurring in the finite support of $R_{\alpha,\beta}$ and for every $\gamma$ in the finite support $S(\alpha,\beta)$ of the reduced coefficients, and (iii) $n$ is at least the Murnaghan stability threshold of [F2]; this is possible by [F1] and [F2]. By [F1], [F4] and the definition of $U_n$, $(U_ns_\alpha)*(U_ns_\beta)=\sigma[tX]R[tX-1]$-coefficient at $t^n$, which is $\sum_\gamma r_\gamma s_{\gamma[n]}$, a sum over honest Schur functions by (ii) with pairwise distinct labels; by [F2] and [F5], the same element is $s_{\alpha[n]}*s_{\beta[n]}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_{\gamma[n]}$, again over honest Schur functions, with the same set of labels by (ii). Comparing the two expansions in the Schur basis of $\Lambda^n$ gives $r_\gamma=\bar g^\gamma_{\alpha,\beta}$ for every $\gamma$, treating $\gamma$ outside both finite supports as zero on each side. [F1, F2, F4, F5, step 1.1]

3.1 *First form.* Factor the kernel of $R_{\alpha,\beta}$ as $\sigma[AB]\,\sigma[Z(AB+A+B)]$ and expand the second factor with the Cauchy identity [F3]: $\sigma[Z(AB+A+B)]=\sum_\gamma s_\gamma[Z]s_\gamma[AB+A+B]$. Reading off the coefficient of $s_\gamma[Z]$ in $R_{\alpha,\beta}$ gives $r_\gamma=\langle s_\alpha[A]s_\beta[B]\,|\,\sigma[AB]\,s_\gamma[AB+A+B]\rangle_{A,B}$; combining with step 2.1 yields the displayed Brion formula after renaming the pairing variables $A,B$ to $X,Y$. [F1, F3, step 2.1]

4.1 *Three-alphabet form.* Sum the first form against $s_\alpha[X]s_\beta[Y]s_\gamma[Z]$ and use the reproducing kernel [F3] twice: for fixed $\gamma$, $\sum_{\alpha,\beta}s_\alpha[X]s_\beta[Y]\langle s_\alpha[A]s_\beta[B],\sigma[AB]s_\gamma[AB+A+B]\rangle_{A,B}=\langle\sigma[XA]\sigma[YB],\sigma[AB]s_\gamma[AB+A+B]\rangle_{A,B}=\sigma[XY]s_\gamma[XY+X+Y]$, where the last equality applies $\langle\sigma[AX]|h[X]\rangle_X=h[A]$ in each variable after truncating to each fixed output bidegree; the pairings then involve only finitely many homogeneous polynomial components. Hence $\sum_{\alpha,\beta,\gamma}\bar g^\gamma_{\alpha,\beta}s_\alpha[X]s_\beta[Y]s_\gamma[Z]=\sigma[XY]\sum_\gamma s_\gamma[Z]s_\gamma[XY+X+Y]=\sigma[XY]\sigma[Z(XY+X+Y)]$ by [F3], and $XY+Z(XY+X+Y)=XYZ+XY+XZ+YZ$. [F3, step 2.1, step 3.1]

5.1 *Finiteness and choice.* In step 2.1 the set of labels is finite by [F1] and [F2]; in step 4.1 each total degree receives finitely many triples with nonzero coefficient, because $\bar g$ vanishes outside the finite support and the Schur expansions are homogeneous. The argument uses no choice principle: the comparably large rank $n$ is a single existential instantiation, and the expansions are finite. [F1, F2, step 2.1, step 4.1] ∎
