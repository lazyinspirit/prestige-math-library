---
id: lem-the-weighted-area-form-is-sl2-r-invariant
kind: lemma
title: The weighted area form is SL2(R)-invariant
status: published
origin: pipeline
deps:
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - thm-algebra-of-complex-derivatives
  - cor-jacobian-determinant-of-a-holomorphic-map
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-strongly-continuous-unitary-representation
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-axiom-of-choice
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC supplies Countable Choice for the nonnegative change-of-variables theorem. Hilbert structure and the continuous representation notion are inherited from their declared suppliers; the Jacobian and exponent calculation use no additional choice."
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(1), printed pp. 305–306 (unitarity from the invariant weighted measure and automorphy cocycle)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "Appendix I §7, Exercise 7.1, printed p. 27 (unitarity of the weighted holomorphic model; the local proof gives the full change-of-variables calculation)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the notation of [[def-holomorphic-and-antiholomorphic-discrete-series-models]], for every integer $n\ge2$ and $g\in G=\mathrm{SL}_2(\mathbb R)$:

**(1)** The weighted density attached to the model action is invariant: for every $f\in\mathcal H_n^+$, the change of variables $z=g\cdot w$ gives
$$|\pi_n(g)f(z)|^2(\operatorname{Im}z)^{n-2}dx_zdy_z=|f(w)|^2(\operatorname{Im}w)^{n-2}dx_wdy_w$$
after pullback. Thus $\pi_n(g)$ is a bijective linear isometry of $\mathcal H_n^+$, and $\pi_n$ is a unitary representation on this Hilbert space; the conjugate action $\pi_n^-$ is also unitary.

**(2)** These unitary representations are strongly continuous on $G$.

## Facts & Assumptions

**Given:** AC; the weighted models, group actions, and displayed vectors of [[def-holomorphic-and-antiholomorphic-discrete-series-models]]; and the Hilbert space and dense K-type spans of [[lem-the-weighted-discrete-series-space-is-a-hilbert-space]].

[F1] The action is $\pi_n(g)f(z)=j(g^{-1},z)^{-n}f(g^{-1}\cdot z)$, obeys the group law; the antiholomorphic action is its conjugate ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F2] The fractional maps $g\cdot w=\frac{aw+b}{cw+d}$ and $j(g,w)=cw+d$ define a group action of $G$ on $\mathfrak H$ with nonzero automorphy factors and $j(g,z)=cz+d$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]); the elementary identities $\operatorname{Im}(g\cdot w)=\operatorname{Im}w/|j(g,w)|^2$ and $j(g^{-1},g\cdot w)=j(g,w)^{-1}$ are verified in step 1.1.

[F3] The quotient rule gives $\phi_g'(w)=(ad-bc)/(cw+d)^2=(cw+d)^{-2}$, and the real Jacobian of a holomorphic map is $|\phi_g'(w)|^2$ ([[thm-algebra-of-complex-derivatives]], [[cor-jacobian-determinant-of-a-holomorphic-map]]).

[F4] A C1 diffeomorphism between open Euclidean sets changes variables for every nonnegative Lebesgue-measurable integrand ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F5] $\mathcal H_n^+$ is Hilbert and the span of the vectors $f_{n,j}$ is dense; the analogous conjugate span is dense in $\mathcal H_n^-$ ([[lem-the-weighted-discrete-series-space-is-a-hilbert-space]], [[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F6] A unitary representation is a group action by bijective linear isometries on a Hilbert space whose orbit maps are norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A1] AC supplies Countable Choice, required by [F4] ([[def-axiom-of-choice]], [[def-countable-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 Write $\phi_g(w)=g\cdot w=(aw+b)/(cw+d)$ and $j(g,w)=cw+d$. Expanding $\phi_g(w)$ against the conjugate denominator gives $\operatorname{Im}\phi_g(w)=\operatorname{Im}w/|cw+d|^2$, and multiplying matrices gives the cocycle law $j(gh,w)=j(g,h\cdot w)j(h,w)$, which for $gh=1$ yields $j(g^{-1},g\cdot w)=j(g,w)^{-1}$. By [F3], $|\det_{\mathbb R}D\phi_g(w)|=|j(g,w)|^{-4}$; by the imaginary-part identity, $(\operatorname{Im}\phi_g(w))^{n-2}=(\operatorname{Im}w)^{n-2}|j(g,w)|^{-2(n-2)}$. The inverse relation gives $|j(g^{-1},\phi_g(w))|=|j(g,w)|^{-1}$, so $|\pi_n(g)f(\phi_g(w))|^2=|j(g,w)|^{2n}|f(w)|^2$. Multiplying these three factors cancels the exponent $2n-2(n-2)-4=0$, proving the stated pullback identity for the weighted density. [F1, F2, F3, algebra]

1.2 Set $w=(z-i)/(z+i)$ and $F_f(w)=(z+i)^nf(z)$. The inverse $z=i(1+w)/(1-w)$ gives $y=(1-|w|^2)/|1-w|^2$ and $|dz/dw|^2=4/|1-w|^4$, so [F3] and [F4] give $\|f\|_n^2=2^{2-2n}\int_{\mathbb D}|F_f(w)|^2(1-|w|^2)^{n-2}dA(w)$. Here $F_{f_{n,j}}=w^j$. Write $g^{-1}=\begin{pmatrix}A&B\\C&D\end{pmatrix}$ and put $P_g(w)=i(A-iC)(1+w)+(B-iD)(1-w)$ and $R_g(w)=i(A+iC)(1+w)+(B+iD)(1-w)$. Substitution in [F1] gives $F_{\pi_n(g)f_{n,j}}(w)=(2i)^nP_g(w)^j/R_g(w)^{n+j}$. At $g=e$ one has $P_e(w)=2iw$ and $R_e(w)=2i$. Continuity of their coefficients makes $|R_g(w)|\ge1$ on $|w|\le1$ for $g$ sufficiently close to $e$, and the displayed rational functions converge uniformly there to $w^j$. Since $n\ge2$, the disk weight has finite integral, at most $\pi$; hence this uniform convergence implies $\|\pi_n(g)f_{n,j}-f_{n,j}\|_n\to0$. Linearity proves continuity at $e$ on their finite span. [F1, F3, F4, algebra, A1]

2.1 The map $\phi_g:\mathfrak H\to\mathfrak H$ is a C1 diffeomorphism with inverse $\phi_{g^{-1}}$. Apply [F4] to the nonnegative measurable function $z\mapsto|\pi_n(g)f(z)|^2(\operatorname{Im}z)^{n-2}$; the pullback identity of step 1.1 gives $\|\pi_n(g)f\|_n^2=\|f\|_n^2$, including the extended integral identity when either side is infinite. For $f\in\mathcal H_n^+$ this is finite, so $\pi_n(g)$ maps that space into itself and is an isometry. By [F1], $\pi_n(g^{-1})$ is its inverse and the maps obey the group law. Thus they are bijective linear isometries; conjugation gives the same claims for $\pi_n^-$. [F1, F4, step 1.1, algebra, A1]

3.1 This span is dense by [F5], and every $\pi_n(g)$ is an isometry by step 2.1. For arbitrary $f$ and a vector $p$ in the span, $\|\pi_n(g)f-f\|_n\le2\|f-p\|_n+\|\pi_n(g)p-p\|_n$. First approximate $f$ and then use step 1.2 to obtain continuity at $e$. At $g_0$, the group law gives $\|\pi_n(g)f-\pi_n(g_0)f\|_n=\|\pi_n(g_0^{-1}g)f-f\|_n\to0$. Thus [F6] gives strong continuity on $G$; complex conjugation gives the same conclusion for $\pi_n^-$. [F1, F5, F6, step 2.1, step 1.2, algebra] ∎
