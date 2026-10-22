---
id: thm-kontsevich-universal-associated-graded-proof
kind: theorem
title: The Kontsevich integral induces the identity on the associated graded
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-countable-choice
  - lem-kontsevich-configuration-integral-convergence-needle-estimates
  - lem-kontsevich-braid-and-knot-isotopy-invariance
justified_by: []
dependency_level: 10
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §8.8.1
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.6
      url: https://arxiv.org/pdf/q-alg/9702009v1
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $K$ be an $n$-singular oriented knot with $n\ge0$ transverse double points and chord diagram $D\in\mathcal A_n^{\mathrm{un}}\otimes_{\mathbb Q}\mathbb C$. Choose disjoint crossing balls and a common height presentation so that the two branches at every singular point are monotone in height inside their ball, all $2^n$ resolutions are strict Morse, and their height functions and number $r$ of local maxima agree outside the crossing balls. Define
$$
\Delta^n I(K):=\sum_{\epsilon\in\{+1,-1\}^n}\left(\prod_{i=1}^n\epsilon_i\right)I(K_\epsilon).
$$
Then $\Delta^n I(K)$ has zero homogeneous components in degrees $m<n$, its degree-$n$ component is exactly $D$, and all remaining terms have degree greater than $n$. For $n=0$, the degree-zero component is the empty diagram with coefficient $1$. The conclusion is in the unframed 4T+1T chord-diagram completion and makes no rational-coefficient claim.

The drawing shows a singular crossing and the two oriented resolutions. The plus resolution is the one with positive determinant crossing sign; the drawing fixes no analytic estimate and is not used in the proof.

```tikz
\begin{tikzpicture}[scale=0.85,thick]
  \begin{scope}
    \draw[->] (-1.1,0) -- (1.15,0) node[right] {$x$};
    \draw[->] (0,-1.1) -- (0,1.15) node[above] {$t$};
    \draw[->,very thick] (-0.85,-0.85) -- (0.85,0.85);
    \draw[->,dashed,very thick] (0.85,-0.85) -- (-0.85,0.85);
    \fill (0,0) circle (1.8pt);
    \node at (0,-1.45) {singular};
  \end{scope}
  \begin{scope}[xshift=3.0cm]
    \draw[very thick] (-0.85,-0.85) -- (-0.14,-0.14);
    \draw[->,very thick] (0.14,0.14) -- (0.85,0.85);
    \draw[->,very thick] (0.85,-0.85) -- (-0.85,0.85);
    \node at (0,-1.2) {$+$};
  \end{scope}
  \begin{scope}[xshift=5.5cm]
    \draw[very thick] (0.85,-0.85) -- (0.14,-0.14);
    \draw[->,very thick] (-0.14,0.14) -- (-0.85,0.85);
    \draw[->,very thick] (-0.85,-0.85) -- (0.85,0.85);
    \node at (0,-1.2) {$-$};
  \end{scope}
\end{tikzpicture}
```

## Statement references

[[def-singular-knot-and-vassiliev-derivative|Alternating resolution sum and singular-knot convention]]

[[def-framed-chord-diagram-and-four-term-relations|4T and unframed 1T quotient]]

[[lem-kontsevich-braid-and-knot-isotopy-invariance|Normalized knot-isotopy invariance under countable choice]]

[Chmutov, Duzhin, and Mostovoy, §8.8.1, printed pp. 239–240](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.6, PDF pp. 16–17](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an $n$-singular oriented knot, its disjoint transverse crossing balls, and the common strict Morse height of all resolutions.

[F1] [[def-singular-knot-and-vassiliev-derivative]]: an $n$-singular knot has $n$ disjoint transverse double points; its $n$th finite difference is the alternating sum of the $2^n$ positive and negative resolutions.

[F2] [[def-kontsevich-integral-on-parenthesized-braids]]: $Z(K)$ is the degreewise configuration integral in the unframed 4T+1T completion, and $I(K)=Z(K)Z(H)^{-r(K)}$.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: an isolated chord is zero in the unframed target, and the 4T relation identifies the local endpoint slides.

[F4] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: the positive crossing sign is $\operatorname{sgn}\det(v_{\rm over},v_{\rm under})$ in the positively oriented projection plane, with the positive Artin half twist assigned sign $+1$.

[F5] [[lem-kontsevich-configuration-integral-convergence-needle-estimates]]: the configuration sum for each fixed strict Morse presentation converges absolutely degreewise. Its controlled local-cap estimate includes explicit uniformity hypotheses and logarithmic factors; the principal-symbol conclusion below uses the separate established external input [F7].

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the countable-choice axiom used by the ambient-isotopy supplier.

[F6] [[lem-kontsevich-braid-and-knot-isotopy-invariance]]: under $\mathrm{AC}_\omega$, the normalized series is invariant under ambient isotopy, and changing a strict Morse presentation of a resolution does not change its value.

[F7] **External input — the principal symbol of the configuration integral.** Chmutov–Duzhin–Mostovoy, §8.8.1, printed pp. 239–240, equation (2) and its proof, establishes for a singular Morse tangle $T_D$ with $n$ transverse double points that its alternating unnormalized integral has no degree below $n$ and degree-$n$ term $D$ in the unframed diagram quotient. The proof treats $n=0$, the local singular two-braid, localization for an arbitrary one-singular tangle, and vertical factorization for general $n$. Its hypotheses are the same unframed configuration integral and positive-minus-negative resolution convention used here. Actual reading for this repair: both pages and the entire argument, including its one-singular localization. This is an imported theorem, not a claimed uniform estimate for every individual pairing as crossing balls shrink.

## Proof

**Given:** As above. Fix a degree cutoff $N$ and work in the finite-dimensional quotient through degree $N$.

1.1 Choose pairwise disjoint balls around the $n$ singular points so each resolved pair of branches is monotone in height inside its ball. The same height function is used on every resolution, so $r(K_\epsilon)=r$ for all $\epsilon$. If necessary, move the singular knot by an isotopy supported in the balls to separate the singular heights and make the crossings monotone; each corresponding resolution is carried by the same ambient isotopy, so [F6] leaves $\Delta^n I(K)$ unchanged. [given, F1, F4, A1, F6, construct]

1.2 Expand the degree-$m$ part of $\Delta^n I(K)$ as a finite sum of pairing integrals over the resolution choices. If a pairing has no chord endpoint in the $i$th crossing ball, its integrand and diagram are independent of the sign $\epsilon_i$, because the two resolved knots agree outside that ball. Summing over $\epsilon_i=+1,-1$ therefore cancels that term. Hence every nonzero contribution to the $n$-fold difference must meet each of the $n$ balls. [F1, F2, construct, algebra]

2.1 Apply the principal-symbol theorem [F7] to the common singular Morse presentation. It gives $D_nZ(K)_m=0$ for $m<n$ and $D_nZ(K)_n=D$. The local hypotheses hold by step 1.1 and the unframed target agrees by [F2, F3]. [F1, F2, F3, F7, step 1.1, algebra]

3.1 For one singular point, let $w_\pm(t)=z_{1,\pm}(t)-z_{2,\pm}(t)$ be the relative complex coordinate of its two monotone branches in the positive and negative resolutions. The loop obtained by following $w_+$ and then the reverse of $w_-$ winds once positively around $0$: the two resolutions are the opposite half-turns of the relative vector. Hence $\frac1{2\pi i}\left(\int d\log w_+-\int d\log w_-\right)=1$. For two upward branches this is the difference of angular changes $+\pi-(-\pi)=2\pi$. Reversing both branch orientations leaves the determinant sign unchanged and changes the down count by two; reversing exactly one branch reverses both the crossing sign and the factor $(-1)^{\downarrow}$. Thus under [F4] the coefficient is $+1$ for every oriented positive resolution. The localization theorem [F7] identifies this local winding contribution with the leading term of the full one-singular tangle. Thus the leading term is the one-chord diagram joining the two preimages. [F2, F4, F7, step 2.1, construct, algebra]

4.1 The degree-$n$ diagram in [F7] pairs exactly the two preimages of each marked double point. Step 3.1 checks that its coefficient has sign $+1$ under the present oriented resolution convention. Local factors compose in height order, and their endpoints occur on the original circle skeleton; hence the resulting class is precisely $D$ in the unframed 4T+1T quotient. This agrees with the full principal-symbol assertion in step 2.1, including diagrams that vanish under 1T. [F1, F3, F7, step 2.1, step 3.1, algebra]

5.1 The common factor $Z(H)^{-r}$ can be pulled outside the alternating sum because all resolutions have the same $r$. Its degree-zero coefficient is $1$, so multiplication by it preserves the first nonzero homogeneous component: the degree-$n$ component remains $D$, and all lower degrees remain zero. For $n=0$, the alternating sum is $I(K)$ and its degree-zero coefficient is $1$ by [F2]. Thus $\Delta^n I(K)=D+\widehat{\mathcal A}^{\mathrm{un}}_{>n}$ in every case. [F2, step 2.1, step 4.1, algebra] ∎
