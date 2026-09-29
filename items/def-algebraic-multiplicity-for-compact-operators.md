---
id: def-algebraic-multiplicity-for-compact-operators
kind: definition
title: Algebraic multiplicity of a nonzero compact-operator eigenvalue
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-riesz-schauder-ascent-and-descent-stabilize
  - def-invariant-subspace-and-induced-quotient-operator
  - def-riesz-spectral-projection
  - thm-riesz-spectral-projection-properties
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-fundamental-theorem-of-algebra-liouville-proof
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $T$ be a compact
operator on a complex Hilbert space $H$, and let
$\lambda\ne0$ belong to its spectrum. Riesz–Schauder stabilization supplies an
integer $m_0$ for which the kernels of $(I-T/\lambda)^m$ are constant for
$m\ge m_0$. Define the generalized eigenspace and **algebraic multiplicity** by

$$G_\lambda(T):=\ker(T-\lambda I)^{m_0},\qquad m_{\mathrm{alg}}(\lambda;T):=\dim G_\lambda(T).$$

The value is independent of the choice of stabilized exponent. If $P_\lambda$
is the Riesz spectral projection of $T$ at $\lambda$, then
$G_\lambda(T)=\operatorname{ran}P_\lambda$; in particular the algebraic
multiplicity is the finite rank of that projection.

## Facts & Assumptions

**Given:** AC; a complex Hilbert space $H$; a compact $T:H\to H$; and
$\lambda\ne0$ in $\sigma(T)$.

[A1] For compact $T$, each nonzero spectral value is an eigenvalue with finite-dimensional generalized eigenspace ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A2] For every $\varepsilon>0$, only finitely many spectral values of a compact operator have modulus at least $\varepsilon$ ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A3] If $A=I-K$ with $K$ compact on a Banach space and DC holds, the kernels of $A^m$ stabilize at a finite index ([[lem-riesz-schauder-ascent-and-descent-stabilize]]).

[A4] For the isolated spectral set $E=\{\lambda\}$, the Riesz spectral projection is defined as $P_\lambda=\chi_E(T)$ ([[def-riesz-spectral-projection]]).

[A5] The Riesz projection is idempotent, commutes with $T$, and splits $H$ into its closed invariant range and kernel ([[thm-riesz-spectral-projection-properties]]).

[A6] If nonzero, the restriction spectra on $\operatorname{ran}P_\lambda$ and $\ker P_\lambda$ are respectively $\{\lambda\}$ and $\sigma(T)\setminus\{\lambda\}$ ([[thm-riesz-spectral-projection-properties]]).

[A7] A subspace $W$ is $T$-invariant when $T(W)\subseteq W$ ([[def-invariant-subspace-and-induced-quotient-operator]]).

[A8] A compact operator on an infinite-dimensional Banach space has $0$ in its spectrum ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A9] Every nonconstant complex polynomial has a root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]); an endomorphism of a finite-dimensional space whose characteristic polynomial splits has a Jordan form ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[A10] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 With $A=I-T/\lambda$, we have $T-\lambda I=-\lambda A$. The declared AC assumption supplies DC by [A10], so [A3] gives an $m_0$ for which $\ker(T-\lambda I)^m=\ker A^m$ is constant for every $m\ge m_0$; [A1] makes this stabilized space finite-dimensional. [A1, A3, A10]

1.2 Put $\varepsilon=|\lambda|/2$. By [A2] the set $S_\varepsilon=\{\mu\in\sigma(T):|\mu|\ge\varepsilon\}$ is finite. Every spectral point within distance $|\lambda|/2$ of $\lambda$ lies in $S_\varepsilon$; because $\lambda\in S_\varepsilon$, choose a smaller positive radius excluding the finitely many other points of $S_\varepsilon$. Thus $\lambda$ is isolated and [A4] defines $P_\lambda$. [A2, A4, construct]

2.1 Let $P=P_\lambda$ from [A4]. By [A5] and the meaning of invariant subspace in [A7], $H=\operatorname{ran}P\oplus\ker P$ with both summands closed and $T$-invariant. The restriction of $T$ to $\operatorname{ran}P$ is compact. If this range were infinite-dimensional, [A8] would put $0$ in its restriction spectrum, contrary to [A6], which gives that spectrum as $\{\lambda\}$ and $\lambda\ne0$. Hence $\operatorname{ran}P$ is finite-dimensional. [A4, A5, A6, A7, A8, step 1.2]

3.1 If $\operatorname{ran}P=\{0\}$, then $P=0$ and [A6] would give $\sigma(T)=\sigma(T|_{\ker P})=\sigma(T)\setminus\{\lambda\}$, impossible since $\lambda\in\sigma(T)$. Thus the range is nonzero. Its finite-dimensional restriction has spectrum $\{\lambda\}$ by [A6]. By [A9], its characteristic polynomial splits over $\mathbb C$ and it has a Jordan form; all Jordan blocks have eigenvalue $\lambda$. Therefore $(T-\lambda I)^d$ vanishes on $\operatorname{ran}P$, where $d=\dim\operatorname{ran}P$, so $\operatorname{ran}P\subseteq G_\lambda(T)$. [A6, A9, step 2.1]

4.1 Conversely, take $x\in G_\lambda(T)$ and write $x=Px+(I-P)x$ using [A5]. Since $P$ commutes with $T$, the second term lies in $\ker P$ and is killed by a power of $T-\lambda I$. If $\ker P\ne\{0\}$, [A6] says $\lambda$ is outside the spectrum of $T|_{\ker P}$, so $T-\lambda I$ is invertible there and the second term is zero. If $\ker P=\{0\}$ it is zero directly. Hence $x\in\operatorname{ran}P$, and $G_\lambda(T)=\operatorname{ran}P$. The rank and dimension are finite by step 2.1, and step 1.1 proves independence of the stabilized exponent. [A5, A6, step 1.1, step 2.1] ∎
