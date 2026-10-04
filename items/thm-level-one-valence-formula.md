---
id: thm-level-one-valence-formula
kind: theorem
title: "The level-one valence formula"
status: published
origin: pipeline
deps:
  - thm-standard-fundamental-domain-for-the-modular-group
  - lem-modular-quotient-local-charts
  - def-level-one-modular-form-and-cusp-form
  - def-compactified-level-one-modular-curve
  - thm-eisenstein-series-are-modular-forms
  - lem-valence-boundary-arc-computation
  - thm-argument-principle-null-homologous-cycle
  - def-weighted-zero-and-pole-counts-on-cycle
  - lem-logarithmic-derivative-order-residue
  - def-logarithmic-derivative-meromorphic-function
  - thm-isolated-zeros-holomorphic-function
  - def-order-of-zero-holomorphic-function
  - thm-identity-theorem-holomorphic-functions
  - def-meromorphic-function-complex-domain
  - thm-q-expansion-principle-at-the-cusp
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 4.12 and Example 4.13, printed pp. 53–54: the valence identity for weight 2k."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 2 and its full boundary-integral proof, printed pp. 9–10."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 100–102: the related algebraic count using S3-invariant differentials; the boundary proof is in Zagier pp. 9–10."
---

## Statement

Let $k$ be even and let $f\in M_k$ with $f\ne0$. Then
$$\sum_{P\in PSL_2(\mathbb Z)\backslash\mathfrak H}\frac{1}{\nu_P}\operatorname{ord}_P(f)\;+\;\operatorname{ord}_\infty(f)\;=\;\frac{k}{12},$$
where $\nu_P=2$ if $P$ is the class of $i$, $\nu_P=3$ if $P$ is the class of $\omega=e^{2\pi i/3}$, and $\nu_P=1$ otherwise; $\operatorname{ord}_\infty(f)$ is the order of vanishing at $q=0$ of the $q$-expansion from [[thm-q-expansion-principle-at-the-cusp]].

## Facts & Assumptions

**Given:** An even integer $k$, a nonzero $f\in M_k$, its $q$-expansion $f(\tau)=q^ng(q)$ with $n=\operatorname{ord}_\infty(f)$, $g$ holomorphic on $|q|<1$ and $g(0)\ne0$ ([[def-level-one-modular-form-and-cusp-form]], [[thm-q-expansion-principle-at-the-cusp]]); the standard domain $D$ with its closure $\overline D$, the elliptic points $i,\omega,\omega+1$ and stabiliser orders $\nu_i=2$, $\nu_\omega=\nu_{\omega+1}=3$ ([[thm-standard-fundamental-domain-for-the-modular-group]]).

[F1] $f$ is holomorphic on $\mathfrak H$; its zeros are isolated, and the identity theorem forces $f\not\equiv0$ on every connected open subset ([[thm-isolated-zeros-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]]). Orders of zeros are defined by [[def-order-of-zero-holomorphic-function]] and the logarithmic derivative $f'/f$ has a simple pole of residue $m$ at a zero of order $m$ ([[lem-logarithmic-derivative-order-residue]], [[def-logarithmic-derivative-meromorphic-function]], [[def-meromorphic-function-complex-domain]]).

[F2] Argument principle: for a meromorphic $f$ admissible on a cycle $\Gamma$ enclosing a region and nonvanishing on $\Gamma$, $\frac1{2\pi i}\int_\Gamma\frac{f'}{f}dz=Z(f,\Gamma)-P(f,\Gamma)$ with the weighted counts of [[def-weighted-zero-and-pole-counts-on-cycle]] ([[thm-argument-principle-null-homologous-cycle]]).

[F3] On the truncated fundamental domain the circular arc contributes $k/12$ and the vertical sides cancel, in the sense of [[lem-valence-boundary-arc-computation]]; the truncation at height $Y$ is legitimate because $f=q^ng(q)$ with $g(0)\ne0$ gives $f'/f\to2\pi in$ uniformly in $\operatorname{Re}\tau$ as $\operatorname{Im}\tau\to\infty$.

[F4] Representatives and angles: every class in $PSL_2(\mathbb Z)\backslash\mathfrak H$ has a representative in $\overline D$, points of $D$ have distinct classes, and the identifications of $\partial D$ are only the $T$- and $S$-identifications; at $i$ the domain subtends the angle $\pi=2\pi/\nu_i$, at each of $\omega,\omega+1$ the angle $\pi/3$, and each of the two points is a representative of the single class of $\omega$ ([[thm-standard-fundamental-domain-for-the-modular-group]], [[lem-modular-quotient-local-charts]], [[def-compactified-level-one-modular-curve]]).

## Proof

1.1 Since $f\not\equiv0$ and $f$ has isolated zeros, and since $q^ng(q)$ with $g(0)\ne0$ has no zeros for small $|q|$, there are finitely many zeros of $f$ in $\overline D\cap\{\operatorname{Im}\tau\le Y\}$ for each $Y$, and for large $Y$ all zero classes have a representative there. Choose such a $Y$ and $\varepsilon>0$ small, let $R$ be the region obtained from $\overline D\cap\{\operatorname{Im}\tau\le Y\}$ by deleting the open discs of radius $\varepsilon$ around each zero of $f$ in that set (together with the strip $\operatorname{Im}\tau>Y$), and let $\Gamma=\partial R$ with the positive orientation. Then $f$ is holomorphic on a neighbourhood of $\overline R$ and has no zeros on $\Gamma$, so by [F2] $\frac1{2\pi i}\oint_\Gamma\frac{f'}{f}d\tau=0$, and $\Gamma$ consists of the top horizontal segment, the two vertical sides, the circular arc, cut where zeros occur, and the small circles (or circular arcs) around the zeros. [F1, F2, given, algebra]

2.1 The top segment is traversed from right to left; on it $f'/f=2\pi in+o(1)$ uniformly in $\operatorname{Re}\tau$ as $Y\to\infty$ by [F3], so its contribution to $\frac1{2\pi i}\oint$ tends to $-n$. On the parts of $\Gamma$ lying on the vertical sides of $\partial D$ the integrand is $T$-invariant and the two sides are oppositely oriented, so they cancel exactly; the parts lying on the circular arc contribute $k/12$ in the limit $\varepsilon\to0$ by [F3] (the cuts near zeros are accounted for with the small circles below). [F2, F3, step 1.1, given, algebra]

2.2 Consider a class $P\ne\infty$ with $\operatorname{ord}_P(f)=m>0$ and all its representatives in the truncated domain. Near a zero $\tau_0$ of order $m$, $f'/f=m/(\tau-\tau_0)+$holomorphic by [F1], so over a circular arc of angle $\theta$ around $\tau_0$ inside $R$ the integral equals $im\theta+o(1)$ as $\varepsilon\to0$, contributing $-\theta m/(2\pi)$ to $\frac1{2\pi i}\oint_\Gamma$ (the boundary is traversed clockwise around the deleted disc). By [F4] the total angle of the sectors of $R$ at all representatives of $P$ is: $2\pi$ if $P$ is a non-elliptic class (one interior representative, or two boundary representatives each contributing $\pi$), $\pi=2\pi/\nu_i$ for the class of $i$, and $\pi/3+\pi/3=2\pi/3=2\pi/\nu_\omega$ for the class of $\omega$ (represented by the two points $\omega$ and $\omega+1$). Hence each class $P\ne\infty$ contributes $-m/\nu_P=-\operatorname{ord}_P(f)/\nu_P$. [F1, F4, step 1.1, given, algebra]

3.1 Summing 2.1 and 2.2 in the identity of 1.1 and letting $Y\to\infty$, $\varepsilon\to0$ gives $0=\frac{k}{12}-n-\sum_{P\ne\infty}\frac{\operatorname{ord}_P(f)}{\nu_P}$, that is $\sum_{P\ne\infty}\frac1{\nu_P}\operatorname{ord}_P(f)+\operatorname{ord}_\infty(f)=\frac{k}{12}$. All sums are finite by 1.1, and the term $\operatorname{ord}_\infty(f)=n$ appears as the negative of the top-segment limit. [F3, step 2.1, step 2.2, given, algebra] ∎
