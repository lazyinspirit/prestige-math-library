---
id: thm-fgmt-quantitative-large-prime-gap-bound
kind: theorem
title: Ford–Green–Konyagin–Maynard–Tao quantitative large-gap bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
- def-prime-gap-functions
- def-iterated-logarithms-and-prime-gap-scale
- lem-crt-residue-covering-to-prime-gap
- thm-maynard-simplex-growth-bound
- thm-maynard-multidimensional-sieve-dhl-criterion
- thm-bombieri-vinogradov-prime-distribution
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- lem-finite-residue-covering-from-probability-marginals
- lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals
- thm-chebyshev-theta-linear-bounds
- def-chebyshev-theta-function
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Ford, Green, Konyagin, Maynard, and Tao, Long gaps between primes, Theorem
      1
    url: https://www.ams.org/jams/2018-31-01/S0894-0347-2017-00876-2/S0894-0347-2017-00876-2.pdf
  - title: Maynard, Large gaps between primes, Sections 2–6
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf
---

## Statement

Let $p_n$ be the $n$th positive prime in increasing order. There are constants $c>0$ and $X_0$ such that, for every real $X\ge X_0$, some consecutive primes satisfy $p_n<p_{n+1}\le X$ and
$$p_{n+1}-p_n\ge c\,\frac{\log X\,\log_2X\,\log_4X}{\log_3X},$$
where $\log$ is natural and $\log_{j+1}X=\log(\log_jX)$. In the convention $G(X)=\max_{p_n\le X}(p_{n+1}-p_n)$, this implies the same lower bound for $G(X)$.

## Statement references

[[def-prime-gap-functions]]

[[def-iterated-logarithms-and-prime-gap-scale]]

[Ford, Green, Konyagin, Maynard, and Tao, “Long gaps between primes,” Theorem 1](https://www.ams.org/jams/2018-31-01/S0894-0347-2017-00876-2/S0894-0347-2017-00876-2.pdf)

[[lem-finite-residue-covering-from-probability-marginals]]

[[lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals]]

## Facts & Assumptions

**Given:** The increasing sequence of positive primes, the natural logarithm, and the cutoff convention for $G(X)$ in the Statement.

[F1] For every real $X\ge2$, $G(X)$ is the maximum of $p_{n+1}-p_n$ over $p_n\le X$ ([[def-prime-gap-functions]]).

[F2] The prime sequence is strictly increasing; hence any consecutive gap with $p_{n+1}\le X$ also has $p_n\le X$ and belongs to the maximum in [F1] ([[def-prime-gap-functions]]).

[F3] Maynard’s variational growth statement supplies $M_k>\log k-2\log\log k-2$ for large $k$ ([[thm-maynard-simplex-growth-bound]]).

[F4] The iterated logarithms in the formula are recursively defined from the natural logarithm for all sufficiently large arguments ([[def-iterated-logarithms-and-prime-gap-scale]]).

[L2] The current multidimensional sieve criterion has the exact admissible-tuple, level-of-distribution, and $M_k>2m/\theta$ hypotheses in its Statement, and its full fixed-tuple local proof is supplied at that given-level scope ([[thm-maynard-multidimensional-sieve-dhl-criterion]]).

[L3] The current Bombieri–Vinogradov Statement assumes the Axiom of Choice, Countable Choice, and Dependent Choice and gives its stated progression estimate ([[thm-bombieri-vinogradov-prime-distribution]]).

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice, with the meanings stated in their respective Definitions ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F5] Finite independent residue marginals imply a deterministic covering bound by elementary averaging; this is not the support-preserving hypergraph theorem or the construction of the required sieve weights. [[lem-finite-residue-covering-from-probability-marginals]]

[F6] The literal AC/CC/DC endpoint BV theorem gives the separately reconstructed divisor-weighted prime-count estimate on a fixed interval, for every fixed $\eta<1/2$, with prime-power removal and finite summation before integration. No endpoint supremum is inserted in BV. [[lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals]]

[F7] There are constants $0<c_\theta<C_\theta$ and $t_0$ with $c_\theta t\le\theta(t)\le C_\theta t$ for all $t\ge t_0$, where $\theta(t)=\sum_{p\le t}\log p$ ([[thm-chebyshev-theta-linear-bounds]], [[def-chebyshev-theta-function]]).

## Proof obligation

The full quantitative2018 Statement remains held, including the upper-prime cutoff $p_{n+1}\le X$ and its exact iterated-logarithm scale. The cited source's prime-sieving reduction, essential-support-preserving hypergraph covering theorem, uniform variable-size tuple weights, and multidimensional sieve estimates are separate complete local obligations. [F5] proves only the elementary independent-covering implication; it cannot replace the hypergraph theorem's support, sparsity, codegree and marginal-degree controls. [F6] supplies one explicit AP error bridge for fixed divisor-weight multiplicities, not the growing-parameter weight estimates or a prime cover.

The actual local BV and SW/Vaughan proof subset is independently accepted, at exactly its original AC/CC/DC, $q=1$, full-weight endpoint and reduced-class scopes. Its old review-pending labels are historical. The generic Maynard/DHL criterion [L2] now has a complete local proof at its fixed-tuple, given-level hypotheses. Its conclusion does not establish the specialized large-gap weight identities or their growing-parameter uniformity.

The finite upper-prime cutoff conversion can be supplied without a stronger CRT theorem. Put $M=P(z)$ and $K=2C_\theta/c_\theta+1$, and suppose $M\ge\max\{2,t_0\}$. By [F7], $\theta(KM)-\theta(2M)\ge(c_\theta K-2C_\theta)M=c_\theta M>0$, so the defining finite sum contains a prime $q$ with $2M<q\le KM$. A cover of length $H\ge1$ gives consecutive primes with $p_n\le2M$ and gap at least $H+1$ by [[lem-crt-residue-covering-to-prime-gap]]. Since $q>p_n$, consecutiveness forces $p_{n+1}\le q\le KM$. Thus any supplied cover with $KP(z)\le X$ gives the required upper-prime cutoff. This finite implication uses no choice axiom. Constructing covers at parameters satisfying that inequality and establishing the stated lower bound at every sufficiently large $X$ remain obligations.

The public Statement is unconditional, while the currently supplied distribution branch retains the three choice axioms [A1]. No waiver or downstream proof acceptance is inferred. All original numerical scales and every-sufficiently-large-$X$ quantifiers remain unchanged.
