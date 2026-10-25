---
id: lem-valence-boundary-arc-computation
kind: lemma
title: "The boundary arc contribution in the valence computation"
status: published
origin: pipeline
deps:
  - def-level-one-modular-form-and-cusp-form
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - def-logarithmic-derivative-meromorphic-function
  - thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
  - def-complex-contours-reversal-concatenation-and-closedness
  - cor-contour-integral-of-a-constant-is-an-endpoint-increment
provenance:
  statement: literature-derived
  proof: ai-altered
proof_source: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-valence-boundary-arc-computation; evidence research/frontier-38-owner-30-reader-21.md, research/frontier-38-owner-30-reader-findings-21.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 4.12 and Example 4.13, printed pp. 53-54: the valence identity (with weight 2k in Milne)."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 2 and its proof, printed pp. 9-10: the boundary integral and its arc contribution."
---

## Statement

Let $k$ be even and let $0\ne f\in M_k$. On the unit-circle arc of the fundamental domain (away from the finitely many zeros and poles of $f$) one has the identity $d\log f(S\tau)=d\log f(\tau)+k\,d\tau/\tau$ with $S\tau=-1/\tau$. Consequently, with the boundary orientation used in the argument-principle computation, the circular arc, traversed clockwise from $\omega$ to $\omega+1$, of the positively oriented boundary of the truncated fundamental domain contributes the net amount $\pi ik/6$ to $\oint d\log f$ (hence $k/12$ after division by $2\pi i$), while the two vertical boundary sides cancel by $T$-invariance. If zeros lie on the boundary, these contributions mean limits after deleting paired neighbourhoods under $S$ and $T$; the small indentation arcs are counted separately.

## Facts & Assumptions

**Given:** Even $k$, a nonzero modular form $f\in M_k$ ([[def-level-one-modular-form-and-cusp-form]]), and the standard domain $D$ with $S\tau=-1/\tau$, $T\tau=\tau+1$, the arc being $|\tau|=1$ between $\omega=e^{2\pi i/3}$ and $\omega+1=e^{i\pi/3}$ through $i$ ([[thm-standard-fundamental-domain-for-the-modular-group]]).

[F1] $f(S\tau)=\tau^kf(\tau)$ for $S=\bigl(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\bigr)$ and $f(T\tau)=f(\tau)$ ([[def-level-one-modular-form-and-cusp-form]]).

[F2] Logarithmic derivative and the chain rule: on any region where a holomorphic $g$ has no zeros, $d\log g=g'/g\,d\tau$; for $c\ne0$, $\frac{d}{d\tau}\log f(S\tau)=\frac{f'(S\tau)}{f(S\tau)}\cdot\frac{1}{\tau^2}$ ([[def-logarithmic-derivative-meromorphic-function]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F3] For a closed contour, $\oint d\log f$ is computed by the argument principle; reversal changes the sign, concatenation adds, and $\int_\gamma d\tau/\tau$ over a contour from $a$ to $b$ equals the increment of a logarithm, in particular $\int_\omega^id\tau/\tau=\log i-\log\omega$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]], [[def-complex-contours-reversal-concatenation-and-closedness]], [[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

## Proof

1.1 On a neighbourhood avoiding zeros, differentiate $f(S\tau)=\tau^kf(\tau)$ and divide by that equality. The chain and product rules [F2] give $\frac{f\prime(S\tau)}{f(S\tau)}\tau^{-2}=\frac{f\prime(\tau)}{f(\tau)}+k/\tau$, hence $d\log f(S\tau)=d\log f(\tau)+k\,d\tau/\tau$. No global logarithm of $f$ is required. [F1, F2, given, algebra]

2.1 Let $L$ be the clockwise half-arc $\omega\to i$ and $R$ the half-arc $i\to\omega+1$. Since $S(L)$ is $R$ with reversed orientation, integrating 1.1 gives $-\int_Rd\log f=\int_Ld\log f+k\int_Ld\tau/\tau$. Thus $A:=\int_Ld\log f+\int_Rd\log f=-k\int_Ld\tau/\tau=-k(i\pi/2-2\pi i/3)=\pi ik/6$, and $A/(2\pi i)=k/12$. When boundary zeros occur, delete matching subarcs under $S$; the same equality holds on the remaining half-arcs, and the omitted integral of $d\tau/\tau$ tends to zero. In particular it also applies when $i$ or the endpoints are zeros. [F3, step 1.1, given, algebra]

3.1 Vertical sides: the right vertical side of the truncated domain is the image under $T$ of the left vertical side, the map being orientation preserving on $\mathfrak H$; since $f(T\tau)=f(\tau)$ the logarithmic derivative is $T$-invariant, and the two sides are traversed in opposite directions as parts of the boundary, so their contributions to $\oint d\log f$ cancel. Hence the net contribution of the boundary pieces lying on $\partial D$ is the arc contribution $\pi ik/6$. [F1, F3, given, algebra] ∎
