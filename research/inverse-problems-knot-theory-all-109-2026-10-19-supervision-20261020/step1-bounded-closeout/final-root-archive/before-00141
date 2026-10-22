---
id: ex-knot-kt-35-worked-cases
kind: example
title: Conway coefficients and the degree-two Kontsevich symbol
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - def-kontsevich-integral-on-parenthesized-braids
  - def-conway-polynomial
  - def-framed-chord-diagram-and-four-term-relations
  - thm-conway-second-coefficient-is-type-two
  - thm-kontsevich-integral-is-universal
justified_by: []
dependency_level: 12
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §2.3 and §3.1.1
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: Polyak–Viro Formulas for Coefficients of the Conway Polynomial, §§3.4–4.2
      url: https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.6
      url: https://arxiv.org/pdf/q-alg/9702009v1
---

## Example

Assume a Conway skein function $\nabla$ on oriented links exists with $\nabla_U=1$ and $\nabla_{L_+}-\nabla_{L_-}=z\nabla_{L_0}$. For a knot $K$, put $a_2(K)=[z^2]\nabla_K(z)$. The unframed degree-one chord-diagram module is zero. The degree-two symbol of $a_2$ is the weight system $w_2$ that assigns $1$ to the intersecting two-chord diagram and $0$ to the diagram with two nonintersecting chords. In particular, $a_2(U)=0$ for the unknot and $a_2(T)=1$ for the positive trefoil $T$ that is the closure of the two-strand braid $\sigma_1^3$. Under countable choice, the degree-two truncation of the normalized Kontsevich series recovers this example up to its unique degree-zero normalization: for every knot type $K$,
$$
a_2(K)=w_2(I_2(K))-w_2(I_2(U)).
$$
Here $I_2(K)$ is the degree-two coefficient of $I(K)$, and $I_0(K)=1$ is its degree-zero coefficient. This calculation is conditional on the existence supplier for $\nabla$ and asserts no rationality for the coefficients of $I(K)$.

The two degree-two chord patterns are shown below. Endpoints alternate in the first diagram and not in the second; the diagram only labels the two cases used in the algebraic check.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \begin{scope}
    \draw (0,0) circle (1);
    \draw[->] (0.1,0.99) .. controls (0.35,0.95) and (0.52,0.84) .. (0.65,0.76);
    \draw[very thick] ({cos(60)},{sin(60)}) -- ({cos(240)},{sin(240)});
    \draw[very thick] ({cos(150)},{sin(150)}) -- ({cos(330)},{sin(330)});
    \node at (0,-1.35) {$D_{\times}$};
  \end{scope}
  \begin{scope}[xshift=3.4cm]
    \draw (0,0) circle (1);
    \draw[->] (0.1,0.99) .. controls (0.35,0.95) and (0.52,0.84) .. (0.65,0.76);
    \draw[very thick] ({cos(40)},{sin(40)}) -- ({cos(130)},{sin(130)});
    \draw[very thick] ({cos(220)},{sin(220)}) -- ({cos(310)},{sin(310)});
    \node at (0,-1.35) {$D_{\parallel}$};
  \end{scope}
\end{tikzpicture}
```

## Example references

[[def-conway-polynomial|Conway skein interface]]

[[thm-conway-second-coefficient-is-type-two|Degree-two Conway symbol and trefoil value]]

[[def-framed-chord-diagram-and-four-term-relations|Unframed 4T+1T quotient]]

[[thm-kontsevich-integral-is-universal|Recovery from the truncated universal series]]

[Chmutov, Duzhin, and Mostovoy, §2.3, printed pp. 35–37, and §3.1.1](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Chmutov, Cap Khoury, and Rossi, §§3.4–4.2, PDF pp. 4–8](https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf)

[Bar-Natan and Stoimenow, §2.6, PDF pp. 16–17](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** A Conway skein function $\nabla$, the unframed chord-diagram module, the positive Artin crossing convention, and countable choice for knot-isotopy invariance of $I$.

[F1] [[def-conway-polynomial]]: $\nabla_U=1$ and $\nabla_{L_+}-\nabla_{L_-}=z\nabla_{L_0}$ for every oriented skein triple.

[F2] [[thm-conway-second-coefficient-is-type-two]]: $a_2$ has type at most two, its degree-two symbol is $w_2(D_{\times})=1$, $w_2(D_{\parallel})=0$, and $a_2(U)=0$, $a_2(T)=1$ for the specified positive trefoil.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: degree-one diagrams are killed by 1T; at degree two the only circle diagrams are the intersecting and nonintersecting patterns shown.

[F4] [[thm-kontsevich-integral-is-universal]]: under countable choice, every type-at-most-two invariant has a complex-linear functional on the sum of unframed chord modules through degree two that recovers it; the degree-two part of this functional is its degree-two symbol.

[F5] [[def-kontsevich-integral-on-parenthesized-braids]]: $I_0(K)=1$ for every knot, since both $Z(K)$ and $Z(H)$ have degree-zero coefficient $1$.



[F6] **Discharged existence input.** [[def-conway-polynomial]] now supplies the actual unique $\mathbb Z[z]$-valued oriented ambient-link invariant by its explicitly external Garaev coefficient theorem and CDM ambient-link/skein interpretation, followed by the finite polynomial/uniqueness argument. Thus the Conway function in the Given is an actual available object, not an unresolved well-definedness premise. The finite coefficient/chord/trefoil arguments below are retained unchanged; no general rationality assertion for the Kontsevich coefficients is used.

## Verification

**Given:** As above.

1.1 The unique degree-one circle diagram has an isolated chord, so [F3] sets it to zero. In degree two, the two chord pairings are exactly $D_{\times}$ and $D_{\parallel}$: their four endpoints either alternate or do not. By [F2], $w_2$ evaluates them as $1$ and $0$, so it is a nonzero functional on the unframed quotient. [F2, F3, given, algebra]

1.2 The unknot normalization gives $a_2(U)=0$. For the positive Hopf link $H_2=\widehat{\sigma_1^2}$, switching one crossing cancels an adjacent positive and negative half twist and gives the two-component unlink; smoothing gives $\widehat{\sigma_1}=U$. A local type-I curl on one component of the two-component unlink has both crossing signs isotopic to that unlink and smoothing equal to the three-component unlink. The skein relation therefore gives $z\nabla_{U_3}=0$. Multiplication by the indeterminate $z$ is injective in $\mathbb Z[z]$, because a polynomial $f=\sum a_jz^j$ with $zf=0$ has every coefficient $a_j=0$; hence $\nabla_{U_3}=0$. Applying the same curl argument to the unknot gives $\nabla_{U_2}=0$. Thus $\nabla_{H_2}=z$. For $T=\widehat{\sigma_1^3}$, switching one crossing cancels an adjacent inverse pair and gives $U$, while smoothing gives $H_2$. Hence $\nabla_T-1=z\nabla_{H_2}=z^2$, so $a_2(T)=1$. [F1, F2, given, algebra]

2.1 Let $W$ be the functional supplied by [F4] for $a_2$. Its degree-two restriction is $w_2$ by [F2]; the only lower-degree summand is degree zero because [F3] makes degree one zero. Since $a_2(U)=0$ and $I_0(U)=1$ by [F5], the value of $W$ on the degree-zero unit is $-w_2(I_2(U))$. Therefore $W(I_{\le2}(K))=w_2(I_2(K))-w_2(I_2(U))$, which equals $a_2(K)$ by [F4]. This verifies the displayed universal-series recovery for every knot type. [F2, F3, F4, F5, step 1.1, step 1.2, algebra] ∎
