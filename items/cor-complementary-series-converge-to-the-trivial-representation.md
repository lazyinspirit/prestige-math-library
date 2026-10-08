---
id: cor-complementary-series-converge-to-the-trivial-representation
kind: corollary
title: The spherical complementary series converge to the trivial representation
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-finite-products-of-compact-spaces
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-dual-pairing-between-opposite-principal-series-parameters
  - def-standard-intertwining-operator-for-sl2-r
  - thm-meromorphic-continuation-and-intertwining-identity-for-a-nu
  - thm-unitarity-of-the-sl2-complementary-series
  - thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu
  - def-matrix-coefficient-of-a-unitary-representation
  - def-weak-containment-of-unitary-representations
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-hilbert-direct-sum-of-unitary-representations
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - cor-mean-value-theorem
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-chain-rule
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.3, printed pp. 51–52: the invariant-form positivity criterion and Theorem 9.3 list the spherical complementary range and the trivial representation; no coefficient-limit or Fell-convergence argument is given"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.20 and Proposition 7.4.21, printed pp. 310–312, and Exercise 7.4.22, printed p. 313: the complementary-form range and construction sketch, with no boundary coefficient-limit or Fell-convergence argument"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For $0<\nu<1$ let $\varphi_\nu(g)=B_\nu(\Pi_\nu(g)f_0,f_0)$ be the spherical function of the spherical complementary series $I_{0,\nu}$ (the matrix coefficient of the $K$-fixed vector $f_0=1$ with respect to the normalized invariant form of [[thm-unitarity-of-the-sl2-complementary-series]]). Then
$$\varphi_\nu(g)=\int_K|\alpha(p(k,g))|^{1-\nu}\,dk,$$
so $\varphi_\nu\to1$ uniformly on every compact subset of $G$ as $\nu\uparrow1$. Consequently, for any sequence $0<\nu_j<1$ increasing to $1$, the trivial representation is weakly contained in $\widehat\bigoplus_j I_{0,\nu_j}$, and the classes of the spherical complementary series converge to the trivial class in the Fell topology of [[def-fell-topology-on-the-unitary-dual]] as $\nu\uparrow1$ (equivalently, by $I_{0,\nu}\cong I_{0,-\nu}$, as $|\nu|\uparrow1$).

## Facts & Assumptions

**Given:** AC, $G=\mathrm{SL}_2(\mathbb R)$, a real parameter $0<\nu<1$, the smooth compact-picture representation $I_{0,\nu}$, its normalized positive form $B_\nu$, and the constant vector $f_0=1$.

[F1] In the compact picture, $(\Pi_\nu(g)f)(k)=|\alpha(p(k,g))|^{1+\nu}f(\kappa(k,g))$, where $kg=p(k,g)\kappa(k,g)$ is the canonical positive-diagonal Iwasawa factorization and the factors depend continuously on $(k,g)$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F2] The constant vector $f_0$ is $K$-fixed, has norm one for $B_\nu$, and the even Fourier vectors form the complete K-type basis ([[lem-k-type-decomposition-of-the-sl2-principal-series]], [[thm-unitarity-of-the-sl2-complementary-series]]).

[F3] The normalized form is $B_\nu(f,h)=\langle R_\nu f,h\rangle_0$, where $R_\nu=A(\nu)/c_0(\nu)$ is the smooth normalized intertwiner and $\langle u,h\rangle_0=\int_Ku(k)\overline{h(k)}\,dk$ is the invariant pairing between $I_{0,-\nu}$ and $I_{0,\nu}$ ([[thm-unitarity-of-the-sl2-complementary-series]], [[def-standard-intertwining-operator-for-sl2-r]], [[lem-dual-pairing-between-opposite-principal-series-parameters]]).

[F4] The normalized intertwiner is continuous, satisfies $R_\nu\Pi_\nu(g)=\Pi_{-\nu}(g)R_\nu$, and has $R_\nu f_0=f_0$; its spherical K-type multipliers are $a_n(\nu)$ ([[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]], [[thm-unitarity-of-the-sl2-complementary-series]]).

[F5] For $0<\nu<1$, the completion in $B_\nu$ is a strongly continuous irreducible unitary representation. The smooth Fourier vectors are dense in its weighted Hilbert completion ([[thm-unitarity-of-the-sl2-complementary-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F6] A basic Fell neighborhood tests finitely many diagonal coefficients of one representation on a compact set, each uniformly within a positive tolerance of a finite sum of diagonal coefficients of the candidate representation. Every diagonal coefficient of the trivial representation is a nonnegative constant ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F7] For a strongly continuous unitary representation, the trivial representation is weakly contained exactly when the representation has almost invariant unit vectors uniformly on each compact subset; the Hilbert direct sum acts componentwise and remains strongly continuous ([[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]], [[def-weak-containment-of-unitary-representations]], [[def-hilbert-direct-sum-of-unitary-representations]]).

[F8] Outside the exceptional lattice, the base-normalized smooth intertwiner $R_\nu$ has inverse $R_{-\nu}$ ([[thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu]]).

[F9] The product of two compact topological spaces is compact ([[thm-finite-products-of-compact-spaces]]).

[F10] The complex exponential has derivative itself and restricts to the real exponential; the real chain rule therefore gives $(e^{at})'=ae^{at}$ for real $a$. The real mean value theorem applies on every nondegenerate closed interval for this smooth function ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-chain-rule]], [[cor-mean-value-theorem]]).

[A1] AC supplies the normalized Haar probability $dk$ through the compact-picture construction and is the declared hypothesis of the unitary-completion, Hilbert-direct-sum, Fell-topology and weak-containment suppliers. The sequence $(\nu_j)$ is given, and no further selection is made ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** identify the normalized spherical coefficient through the opposite-parameter intertwiner, prove compact-uniform convergence directly, and apply the coefficient and almost-invariant-vector definitions.

1.1 Put $R_\nu=A(\nu)/c_0(\nu)$ on the smooth compact picture. By [F3]–[F4], $B_\nu(f,h)=\langle R_\nu f,h\rangle_0$, $R_\nu f_0=f_0$, and $R_\nu\Pi_\nu(g)=\Pi_{-\nu}(g)R_\nu$. Therefore $\varphi_\nu(g)=\langle\Pi_{-\nu}(g)f_0,f_0\rangle_0$. Substituting the compact-picture action at parameter $-\nu$ and $f_0=1$ gives $\varphi_\nu(g)=\int_K|\alpha(p(k,g))|^{1-\nu}\,dk$, with the exponent $1-\nu$ coming from the intertwiner rather than the original $1+\nu$ action. [F1, F2, F3, F4]

1.2 For $0<\nu<1$, the normalized intertwiner has $R_\nu f_n=a_n(\nu)f_n$, and the displayed product weights satisfy $a_n(-\nu)=a_n(\nu)^{-1}$ for every even $n$. Consequently, on finite Fourier sums, $B_{-\nu}(R_\nu f,R_\nu h)=B_\nu(f,h)$. The finite Fourier sums are dense in both Hilbert completions by [F5]; the inverse $R_{-\nu}$ from [F8] gives surjectivity. Thus $R_\nu$ extends to a unitary operator between the completions. The smooth intertwining identity [F4] extends to the completions by density, since both representation operators and the extended intertwiner are bounded. Hence the two unitary representations are equivalent, so their classes for parameters $\nu$ and $-\nu$ agree. Thus parameter-sign equivalence reduces the limit as $|\nu|\uparrow1$ to the positive-parameter limit. [F4, F5, F8, algebra]

2.1 Let $Q\subseteq G$ be compact. If $Q=\varnothing$ the assertion is vacuous, so assume $Q\ne\varnothing$ and set $d(k,g)=|\alpha(p(k,g))|$. By [F1], $d$ is positive and continuous on $K\times Q$. The Iwasawa data make $K$ a circle, hence compact; [F9] makes $K\times Q$ compact. For each $(k,g)$ continuity gives a neighborhood on which $d>d(k,g)/2>0$ and a neighborhood on which $d<d(k,g)+1$. Finite subcovers of these two covers give constants $0<m\le d\le M<\infty$ on $K\times Q$. Thus $|\log d|\le C:=\max(|\log m|,|\log M|)$ there. For $0<\nu<1$ and $|x|\le C$, the function $t\mapsto e^{(1-\nu)t}$ is continuously differentiable on the closed interval with endpoints $0,x$ by [F10]. If $x=0$ its increment is zero; otherwise the mean value theorem in [F10] and the derivative bound $(1-\nu)e^{(1-\nu)t}\le(1-\nu)e^C$ on that interval give $|e^{(1-\nu)x}-1|\le(1-\nu)C e^C$. This gives $\sup_{g\in Q}|\varphi_\nu(g)-1|\le(1-\nu)C e^C\to0$ as $\nu\uparrow1$, using that $dk$ is normalized Haar probability. [F1, F9, F10, step 1.1, A1, algebra]

3.1 A basic Fell neighborhood of the trivial class tests a finite list of its diagonal coefficients on a compact set $Q$, each to a common tolerance $\epsilon>0$. Each coefficient is a constant $c_i\ge0$; if the list is empty or all $c_i=0$, the zero approximants suffice. Otherwise put $C=\max_i c_i>0$. For each $c_i>0$, the vector $\sqrt{c_i}f_0$ in $I_{0,\nu}$ gives the diagonal coefficient $c_i\varphi_\nu$; for $c_i=0$, use the zero vector. By step 2.1, choose $\nu$ sufficiently close to $1$ that $\sup_{g\in Q}|\varphi_\nu(g)-1|<\epsilon/C$. Then every tested coefficient is within $\epsilon$ of its constant on $Q$. Hence every basic Fell neighborhood of the trivial class contains $[I_{0, \nu}]$ for all sufficiently large $\nu<1$, proving $[I_{0, \nu}]\to[1_G]$. [F2, F5, F6, step 2.1]

3.2 Let $0<\nu_j<1$ increase to $1$, and form the strongly continuous Hilbert direct sum $\Pi=\widehat\bigoplus_j\Pi_{\nu_j}$. If $\xi_j$ is the unit vector $f_0$ in its $j$th summand, then $\sup_{g\in Q}\|\Pi(g)\xi_j-\xi_j\|^2=\sup_{g\in Q}2(1-\operatorname{Re}\varphi_{\nu_j}(g))\to0$ for each compact $Q$ by step 2.1. Hence $\Pi$ has almost invariant unit vectors and $1_G\prec\Pi$ by [F7]. Each fixed summand has no nonzero invariant vector: it is irreducible by [F5] and has infinitely many K-types by [F2], so it is not the one-dimensional trivial representation. Since the direct sum acts componentwise, it too has no nonzero invariant vector. This is a sequence-level weak-containment conclusion; no such assertion is made for an individual fixed $I_{0,\nu}$. [F2, F5, F7, step 2.1]

4.1 AC is already declared and used for normalized Haar measure, the unitary completions, and the direct-sum weak-containment suppliers; the coefficient limits and the two displayed estimates are choice-free. [A1, F7] ∎
