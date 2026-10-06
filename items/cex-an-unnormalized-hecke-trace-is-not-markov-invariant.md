---
id: cex-an-unnormalized-hecke-trace-is-not-markov-invariant
kind: counterexample
title: "An unnormalized Hecke trace is not Markov invariant"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [def-homflypt-polynomial-from-the-hecke-markov-trace,
       lem-the-markov-trace-of-an-inverse-hecke-generator,
       def-the-homflypt-coefficient-ring,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-exponent-sum-of-a-braid,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       thm-the-hecke-trace-construction-is-an-oriented-link-invariant,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 Theorem 12 and the two stabilization factors (printed pp. 47-49)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the two Markov stabilization factors z and z_-)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
---

## Statement refuted

Assume AC for the link-invariance assertion about the corrected normalization.
The unnormalized trace family $\operatorname{tr}_n$ of
[[thm-the-ocneanu-markov-trace-exists-and-is-unique]], and more generally any
normalization of the form
$u^{e(\beta)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(\beta))$ whose parameters
$u,\alpha$ fail at least one of the two relations $u\alpha z=1$ and
$u^2=z_-/z$, is invariant under positive and negative Markov stabilizations of
braids.

## Facts & Assumptions

**Given:** AC ([[def-axiom-of-choice]]), the Hecke tower over $\Lambda=\mathbb Z[v^{\pm1},z]$, the Ocneanu trace, a braid $\beta\in B_n$, and a normalization $u^{e(\beta)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(\beta))$ with parameters in a commutative ring containing $\Lambda$ and in which $u,z$ are units. The counterexample calculation is algebraic; AC is included because [F4] cites the choice-qualified link-invariance result.

[F1] $\operatorname{tr}_{n+1}(xT_ny)=z\operatorname{tr}_n(xy)$ and $\operatorname{tr}_{n+1}(xT_n^{-1})=z_-\operatorname{tr}_n(x)$ for all $x,y\in H(n)$, with $z_-=v^{-1}(z+1-v)$ ([[thm-the-ocneanu-markov-trace-exists-and-is-unique]], [[lem-the-markov-trace-of-an-inverse-hecke-generator]]).

[F2] $z\ne z_-$ in the domain $\Lambda$: indeed $z-z_-=(1-v^{-1})(z+1)\neq0$ ([[lem-the-markov-trace-of-an-inverse-hecke-generator]]).

[F3] $\pi_{n+1}(\beta\sigma_n)=\iota_n(\pi_n(\beta))T_n$ and $\pi_{n+1}(\beta\sigma_n^{-1})=\iota_n(\pi_n(\beta))T_n^{-1}$, and $e(\beta\sigma_n)=e(\beta)+1$, $e(\beta\sigma_n^{-1})=e(\beta)-1$ ([[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]], [[def-exponent-sum-of-a-braid]]).

[F4] In the coefficient ring of [[def-the-homflypt-coefficient-ring]], $u^2=z_-/z$; with $\alpha=(uz)^{-1}$ from [[def-homflypt-polynomial-from-the-hecke-markov-trace]], this gives $u\alpha z=1$ and $u^{-1}\alpha z_-=1$. The link-invariance theorem [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]] proves these are the two stabilization factors for its normalization.

## Counterexample

**Proof technique:** counterexample: compute the two stabilization factors of the raw trace, then read off the cancellation conditions of the normalization.

1.1 **The stabilization factors of the raw trace.** By [F3] and [F1] $\operatorname{tr}_{n+1}(\pi_{n+1}(\beta\sigma_n))=\operatorname{tr}_{n+1}(\pi_n(\beta)T_n)=z\operatorname{tr}_n(\pi_n(\beta))$, and similarly $\operatorname{tr}_{n+1}(\pi_{n+1}(\beta\sigma_n^{-1})) =z_-\operatorname{tr}_n(\pi_n(\beta))$. By [F2] the two factors $z$ and $z_-$ are distinct, so whenever $\operatorname{tr}_n(\pi_n(\beta))\neq0$ the raw trace family takes different values on the two stabilizations and is therefore not Markov invariant. [F1, F2, F3, algebra]

2.1 **The normalized family.** For the normalization $F(\beta):=u^{e(\beta)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(\beta))$, [F3] gives $F(\beta\sigma_n)=u\alpha z\,F(\beta)$ and $F(\beta\sigma_n^{-1})=u^{-1}\alpha z_- F(\beta)$. Both stabilization factors equal $1$ precisely when $u\alpha z=1$ and $u^{-1}\alpha z_-=1$; given the first relation $\alpha=(uz)^{-1}$, and substituting this into the second gives $z_-/(u^2z)=1$, i.e. $u^2=z_-/z$, since $u$ and $z$ are units. For the trivial braid $1\in B_1$ one has $F(1)=1$, so $F(\sigma_1)$ and $F(\sigma_1^{-1})$ are the two factors themselves. If either factor differs from $1$, that stabilization changes the value of this witness. Hence a normalization failing either relation is not invariant under both stabilizations; the two stabilized values need not differ from each other. [F1, F3, F4, step 1.1, algebra]

3.1 **The explicit witness.** Take $u=1$ and $\alpha=z^{-1}$ in a ring containing $\Lambda$ with $z$ inverted. Then the positive factor is $u\alpha z=1$, while the negative factor is $u^{-1}\alpha z_-=z_-/z=\frac{z+1-v}{vz}$, which is not $1$: the equality $\frac{z+1-v}{vz}=1$ would give $z+1-v=vz$, i.e. $(1-v)(z+1)=0$, and both factors $1-v$ and $z+1$ are nonzero in the domain $\Lambda$. Concretely, for $\beta=1\in B_1$ one has $\operatorname{tr}_1(1)=1$ and hence $F(\sigma_1)=1$ while $F(\sigma_1^{-1})=z_-/z\neq1$ in $B_2$; the two closures are the same unknot, so $F$ is not an invariant of the closure, which refutes the displayed statement. The corrected normalization is the one of [F4], whose two factors are both $1$. [F1, F2, F3, F4, step 2.1, algebra] ∎

## Remarks

- The two stabilization factors are the classical Markov parameters of the Ocneanu trace: the positive stabilization multiplies the trace by $z$ and the negative one by $z_-$.
- The counterexample is the reason the coefficient ring of [[def-the-homflypt-coefficient-ring]] imposes both relations $u\alpha z=1$ and $u^2=z_-/z$; dropping either one destroys the invariance proved in [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]].
