---
id: ex-lowest-k-types-of-the-first-holomorphic-discrete-series
kind: example
title: Lowest K-types of the first holomorphic discrete series
status: published
origin: pipeline
deps:
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - thm-irreducibility-and-k-types-of-the-discrete-series
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-axiom-of-choice
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through the weighted model, Hilbert-space, and representation suppliers. The explicit n=2 integral and K-character calculations use no additional choice."
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(1)–(2) and Exercise 7.4.17, printed pp. 305–308 (holomorphic model, extremal vector, and K-types)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (NSF/CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Example 2.7, printed pp. 10–11 (the extremal submodule and its one-sided K-weight chain)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the holomorphic model $D_2^-=(\pi_2,\mathcal H_2^+)$ of [[def-holomorphic-and-antiholomorphic-discrete-series-models]], put $f_{2,j}(z)=(z-i)^j(z+i)^{-2-j}$. The extremal vector $f_{2,0}(z)=(z+i)^{-2}$ has norm squared $\pi/4$, so $(2/\sqrt\pi)f_{2,0}$ has unit norm; it is annihilated by $L_{E_+}$ and has K-character $e^{-2i\theta}$. The vectors $f_{2,j}$, $j\ge0$, form the complete multiplicity-one K-type chain with characters $e^{-i(2+2j)\theta}$; their ladder coefficients are $L_{E_+}f_{2,0}=0$, $L_{E_+}f_{2,j}=-j f_{2,j-1}$ for $j\ge1$, and $L_{E_-}f_{2,j}=(2+j)f_{2,j+1}$ for $j\ge0$.

## Facts & Assumptions

**Given:** AC and the weighted holomorphic discrete-series model at $n=2$.

[F1] In the model, $f_{n,j}(z)=(z-i)^j(z+i)^{-n-j}$ and $\pi_n(k_\theta)f_{n,j}=e^{-i(n+2j)\theta}f_{n,j}$; the derived actions are $L_{E_+}f_{n,0}=0$, $L_{E_+}f_{n,j}=-j f_{n,j-1}$ for $j\ge1$, and $L_{E_-}f_{n,j}=(n+j)f_{n,j+1}$ for $j\ge0$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]], [[def-k-finite-and-smooth-vectors-for-sl2-r]]).

[F2] The weighted holomorphic space is a Hilbert space whose displayed vectors are a complete orthogonal K-type basis ([[lem-the-weighted-discrete-series-space-is-a-hilbert-space]]).

[F3] $D_n^-$ is an irreducible strongly continuous unitary representation for every $n\ge2$ ([[thm-irreducibility-and-k-types-of-the-discrete-series]]).

[F4] Tonelli's theorem interchanges the iterated integrals of a nonnegative measurable function on the product of the two sigma-finite Lebesgue spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[A1] AC is inherited through the model, Hilbert-space, and representation suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The definitions and hypotheses in the Statement.

1.1 Since $y^{2-2}=1$ and $|z+i|^2=x^2+(y+1)^2$ for $z=x+iy$, [F4] gives $\|f_{2,0}\|_2^2=\int_0^\infty\int_{-\infty}^{\infty}(x^2+(y+1)^2)^{-2}\,dx\,dy$. For $a>0$, the substitution $x=a\tan t$ yields $\int_{-\infty}^{\infty}(x^2+a^2)^{-2}dx=a^{-3}\int_{-\pi/2}^{\pi/2}\cos^2t\,dt=\pi/(2a^3)$. Taking $a=y+1$ therefore gives $\|f_{2,0}\|_2^2=(\pi/2)\int_0^\infty(y+1)^{-3}dy=\pi/4$, and $\|(2/\sqrt\pi)f_{2,0}\|_2=1$. [F1, F4, algebra, A1]

2.1 Setting $n=2$ in [F1] gives $f_{2,j}(z)=(z-i)^j(z+i)^{-2-j}$, K-character $e^{-i(2+2j)\theta}$, and $L_{E_+}f_{2,0}=0$, $L_{E_+}f_{2,j}=-j f_{2,j-1}$ for $j\ge1$, and $L_{E_-}f_{2,j}=(2+j)f_{2,j+1}$ for $j\ge0$. Thus every step from $f_{2,j}$ to $f_{2,j+1}$ and every return step for $j>0$ has nonzero coefficient. By [F2], these lines give the full multiplicity-one K-type decomposition of $D_2^-$, and [F3] gives its irreducibility. [F1, F2, F3, algebra] ∎
