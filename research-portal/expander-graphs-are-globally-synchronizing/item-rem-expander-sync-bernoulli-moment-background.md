---
title: Symmetry and moments in the random-matrix discussion
status: published
research_item: rem-expander-sync-bernoulli-moment-background
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 31, Section 6, paragraph before (6.1)
      statement: The article describes centered Bernoulli entries as nonsymmetrically
        distributed and says that, if the distribution were symmetric, all even
        moments would vanish and much of the machinery in references [7,47]
        would give precise bounds.
      hypotheses: The discussion concerns the centered adjacency matrix of G(n,p) and
        a hypothetical symmetric entry distribution.
      reading_limits: The original PDF page 31 image and its extracted text were
        inspected for the printed parity assertion and conditional
        precise-bounds attribution. This citation does not establish either
        mathematical claim or the applicability of references [7,47]; those
        references were not independently inspected.
---

PDF p. 31: ` Section 6 paragraph before (6.1) `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)
- [prop-expander-prereq-random-matrix-walk-expansion](item-prop-expander-prereq-random-matrix-walk-expansion)
- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)
- [math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)
- [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel)


## Statement

In its discussion of the centered adjacency matrix $\Delta_A$ of $G(n,p)$, the article describes centered Bernoulli entries as nonsymmetrically distributed and says that, if the distribution were symmetric, all even moments would vanish and much of the machinery in [7,47] would give precise bounds. The parity assertion is incorrect: symmetry about zero forces integrable odd moments to vanish, not even moments in general.

For distinct vertices, an entry of $\Delta_A$ is $B-p$, where $B$ is Bernoulli$(p)$: $B=1$ with probability $p$ and $B=0$ with probability $1-p$. For $0<p<1$, this centered law is symmetric about zero exactly when $p=1/2$. The diagonal entry is the deterministic value $-p$ under the loop-free convention.

A concrete symmetric counterexample to the printed parity assertion is $W=B-B'$, where $B,B'$ are independent Bernoulli$(1/2)$ variables on the four-outcome space $\{0,1\}^2$ with each outcome having probability $1/4$. Its law is symmetric about zero, but $\mathbb E[W^2]=1/2$. More precisely, let $n,\ell\ge1$ be integers and let $M=(M_{ab})_{1\le a,b\le n}$ be a real symmetric random matrix on one probability space. Suppose its upper-triangular entries, including the diagonal, are mutually independent, each has a law symmetric about zero, and $\mathbb E|M_{ab}|^{2\ell}<\infty$ for every $a\le b$. In the closed-walk expansion of $\mathbb E[\operatorname{Tr}M^{2\ell}]$, every term containing an unordered edge, including a loop, with odd multiplicity vanishes.

## Statement references

[Erdős–Rényi random graph](item-def-expander-sync-erdos-renyi)

[Centered graph matrices](item-def-expander-sync-centered-matrices)

[Bernoulli variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[Bernoulli difference moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)

[Trace expansion and parity cancellation](item-prop-expander-prereq-random-matrix-walk-expansion)

[Integrable expectation](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

[Expectation as integration against the law](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)

[Linearity of the integrable expectation](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[Finite probability spaces](https://alphabetamath.cc/item/def-finite-probability-space-and-event)

[Independence of finite-valued variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)

## Facts & Assumptions

[F1] In the loop-free graph $G(n,p)$, distinct-edge indicators are Bernoulli$(p)$, and $\Delta_A=A-pJ$ because $d^*=pn$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi), [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)).

[F2] A finite probability space has nonnegative outcome weights summing to one, and event probabilities are sums of their outcome weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)). Two finite-valued variables are independent when their joint assignment probabilities factor into their marginal probabilities ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)). For $p\in[0,1]$ and independent Bernoulli$(p)$ variables $B,B'$ on one finite probability space, the difference $W=B-B'$ has symmetric law and $\mathbb E[W^2]=2p(1-p)$ ([prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)). Finite expectation is the probability-weighted sum of values ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] For integers $n,\ell\ge1$, let $M$ be a real symmetric $n\times n$ random matrix on one probability space, with mutually independent upper-triangular entries including the diagonal and $\mathbb E|M_{ab}|^{2\ell}<\infty$ for all $a\le b$. The closed-walk expansion of $\mathbb E[\operatorname{Tr}M^{2\ell}]$ factors each walk expectation into moments of its distinct unordered edges, including loops. If every entry law is symmetric about zero, each factor whose edge multiplicity is odd vanishes ([prop-expander-prereq-random-matrix-walk-expansion](item-prop-expander-prereq-random-matrix-walk-expansion)).

[F4] For an integrable real random variable $Y$, expectation is the finite integral $\mathbb E[Y]=\int_\Omega Y\,d\mathbb P$ ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)). For a real random variable $X$ with law $\mathbb P_X$ and a Borel function $g$ such that $g(X)$ is integrable, $\mathbb E[g(X)]=\int_{\mathbb R}g\,d\mathbb P_X$ ([math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)). The Lebesgue integral is linear on $L^1$, so scalar multiples of an integrable variable are integrable and $\mathbb E[cY]=c\mathbb E[Y]$ for real $c$ ([math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)).

[F5] For every nonnegative integer $k$, the real polynomial map $x\mapsto x^k$ is continuous on $\mathbb R$ ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions), clause 5). A continuous map between topological spaces has Borel preimages of all Borel sets ([math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel)). Thus these polynomial maps are measurable from $(\mathbb R,\mathcal B(\mathbb R))$ to itself. Neither result requires a choice assumption.

## Verification

**Given:** The graph convention and variables stated above, and the hypotheses in [F3] when applying the trace expansion.

**Goal:** Verify the centered entry law, the counterexample, and the corrected parity statement.

1.1 By [F1], an off-diagonal entry is $B-p$, taking $1-p$ with probability $p$ and $-p$ with probability $1-p$. For $0<p<1$ both values occur. Equality of this two-point law with its reflection requires $1-p=p$, and at $p=1/2$ the two reflected values have equal probability. The loop-free adjacency diagonal is zero, so the diagonal of $A-pJ$ is $-p$. [F1, given, algebra]

1.2 On $\Omega=\{0,1\}^2$, assign each of the four outcomes weight $1/4$ and set $B(b,b')=b$, $B'(b,b')=b'$. These nonnegative weights sum to one; each coordinate has probabilities $1/2$ at $0$ and $1$, and every joint coordinate assignment has probability $1/4=(1/2)(1/2)$. Thus [F2] verifies a finite probability space and independent Bernoulli$(1/2)$ variables. Applying its difference-moment formula at $p=1/2$ gives a symmetric $W=B-B'$ with $\mathbb E[W^2]=2(1/2)(1/2)=1/2$, disproving the printed even-moment assertion. [F2, given, algebra]

1.3 Let $X$ be a real random variable whose law equals that of $-X$, and let $k$ be a positive odd integer such that $X^k$ is integrable. By [F5], $g(x)=x^k$ is continuous on $\mathbb R$ and has Borel preimages of every Borel set; it is therefore Borel measurable, as required by the law-integration formula in [F4]. Since $(-X)^k=-X^k$, [F4] shows that $(-X)^k$ is also integrable. Applying the law-integration formula in [F4] to $X$ and to $-X$ therefore gives $\mathbb E[X^k]=\int_{\mathbb R}x^k\,d\mathbb P_X=\mathbb E[(-X)^k]$. Linearity from [F4] makes the last expectation $-\mathbb E[X^k]$. This is a finite real number by integrability, so $\mathbb E[X^k]=0$. [F4, F5, given, algebra]

2.1 Apply [F3] to $M$ and the integers $n,\ell$ in the Statement. All its hypotheses are imposed there: real symmetry on one probability space, mutual independence of the entire upper triangle including the diagonal, and finite absolute moments of order $2\ell$. In the expansion of $\mathbb E[\operatorname{Tr}M^{2\ell}]$, each walk expectation factors into entry moments; symmetry of each entry law makes an odd edge multiplicity supply a zero factor. Thus the stated even trace power has the claimed odd-multiplicity cancellation, including for loop edges. [F3, given] ∎

## Source notes

The printed parity assertion and the conditional claim that much of the machinery in [7,47] would give precise bounds for a symmetric entry distribution are attributed to the article’s Section 6, PDF page 31. The correction and example follow from the stated suppliers; no claim is made here about the precise results or applicability of [7,47].
