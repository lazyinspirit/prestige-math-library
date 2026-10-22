---
id: cex-knot-kt-30-boundary-case
kind: counterexample
title: The leading minus sign in the Dubrovnik conversion is necessary
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
proof_strategy: direct
axiom_use: "Choice-free: the counterexample is the one-component unknot and uses only the declared normalizations."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 51–54/printed pp. 466–469: stated Kauffman/Dubrovnik conversion and unknot normalization"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3 and 5.1–5.5"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 33–50: normalized BMW closure trace and tangle evaluation"
---

## Statement refuted

The formula obtained by omitting the leading minus sign,
$$D_K(a,z)=i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz),\qquad i^2=-1,$$
is false: on the one-component unknot it gives $D=-1$, while the declared Dubrovnik normalization gives $D=1$.

The circle below depicts the one-component test link; the numerical refutation follows from its declared writhe, component count, and normalization.

\begin{center}
\begin{tikzpicture}[baseline=-0.5ex,scale=0.75,line width=0.8pt]
\draw (0,0) circle (0.8);
\node at (0,-1.15) {$U$};
\end{tikzpicture}
\end{center}

## Statement references

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Unknot normalization and conversion convention]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §VII](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** The one-component unknot, its writhe and component count, and the declared Dubrovnik and Kauffman values.

[F1] The unknot has $w=0$, $c=1$, $D=1$, and $L=1$ under the stated normalization ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

## Refutation

1.1 Apply the proposed false formula to the unknot from [F1]. Since $i^{-w}=i^0=1$ and $(-1)^c=(-1)^1=-1$, it assigns $D=1\cdot(-1)\cdot1=-1$. This contradicts the declared value $D=1$ in [F1]. [F1, algebra]

2.1 Inserting the leading minus changes that result to $-1\cdot(-1)=1$, exactly the normalized unknot value from [F1]. Thus the leading sign is necessary for the displayed conversion. [F1, step 1.1, algebra] ∎
