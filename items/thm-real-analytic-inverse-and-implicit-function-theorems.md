---
id: thm-real-analytic-inverse-and-implicit-function-theorems
kind: theorem
title: Real analytic inverse and implicit functions
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Real inverse/implicit reduction used in Gantumur §5, printed p. 12. The local proof below derives the analytic assertion from the earlier holomorphic inverse theorem and power-series expansion.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-real-analytic-germ-in-several-variables", "thm-power-series-define-holomorphic-functions-in-several-variables", "thm-holomorphic-inverse-function-theorem-several-variables", "cor-uniqueness-of-multivariable-power-series-coefficients", "thm-power-series-expansion-in-several-complex-variables"]
---

## Statement

Let $f$ be a real analytic map between open subsets of $\mathbb R^n$, $n\ge1$. If $Df(a)$ is invertible, $f$ has a real analytic local inverse near $f(a)$. Let $P(x,y)$ be real analytic near $(a,b)\in\mathbb R^d\times\mathbb R^k$, $k\ge1$, with $P(a,b)=0$ and $D_yP(a,b)$ invertible. On sufficiently small neighborhoods its zero set is exactly the graph of a unique real analytic $y=g(x)$ with $g(a)=b$.

## Facts & Assumptions

**Given:** A real analytic map f with $Df(a)$ invertible; for the implicit assertion, analytic $P(x,y)$ with $P(a,b)=0$ and $D_yP(a,b)$ invertible.

[F1] Real-coefficient analytic maps complexify near their real centre. ([[def-real-analytic-germ-in-several-variables]]).

[F2] A holomorphic map with nonsingular complex Jacobian has a biholomorphic local inverse. ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

[F3] Continuous separately holomorphic functions have absolutely convergent local power-series expansions. ([[thm-power-series-expansion-in-several-complex-variables]]).

[F4] Equal convergent power series have equal coefficients. ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

## Proof

1.1 Complexify $f$ to $F$ on a conjugation-invariant polydisc by F1. Its complex Jacobian at the real point $a$ is the same real matrix as $Df(a)$, so its determinant is nonzero. F2 supplies a holomorphic inverse $G$ on an open neighborhood of $f(a)$. Shrink its domain to a conjugation-invariant polydisc $V$ on which both $G(w)$ and $\overline{G(w)}$ lie in the injectivity neighborhood of $F$. This is possible by continuity at $f(a)$, since both limits are $a$. [given, F1, F2]

2.1 Real coefficients give $F(\overline z)=\overline{F(z)}$. Thus $F(\overline{G(w)})=\overline w=F(G(\overline w))$ for $w\in V$. Injectivity gives $G(\overline w)=\overline{G(w)}$, so $G$ maps the real slice into the real slice. Each component is continuous and separately holomorphic (restrict its complex differential to a coordinate line), so F3 expands it at the real centre $f(a)$. Conjugating this series and using the displayed identity and F4 shows every coefficient equals its conjugate. The expansion therefore restricts to a real analytic inverse. [step 1.1, F3, F4]

3.1 Set $H(x,y)=(x,P(x,y))$. Its derivative at $(a,b)$ has block matrix $\begin{pmatrix}I&0\\D_xP&D_yP\end{pmatrix}$, whose determinant is $\det D_yP\ne0$. Steps 1.1–2.1 give a real analytic inverse $K$ near $(a,0)$. The first coordinate identity $H(K(x,z))=(x,z)$ forces $K(x,z)=(x,k(x,z))$. Define $g(x)=k(x,0)$ after shrinking to a product neighborhood. [given, step 1.1, step 2.1, algebra]

4.1 The identity $H(K(x,0))=(x,0)$ implies $P(x,g(x))=0$ and $g(a)=b$. Conversely, if $(x,y)$ is in the chosen inverse neighborhood and $P(x,y)=0$, then $H(x,y)=(x,0)$, hence $(x,y)=K(x,0)$ and $y=g(x)$. This proves both the graph description and local uniqueness. [step 3.1, algebra] ∎

## Source notes

Real inverse/implicit reduction used in Gantumur §5, printed p. 12. The local proof below derives the analytic assertion from the earlier holomorphic inverse theorem and power-series expansion.

