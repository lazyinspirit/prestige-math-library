---
id: ex-em-variational-mathematical-prerequisites-hypothesis-boundaries
kind: example
title: "Hypothesis and convention boundaries for the variational prerequisites"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-total-derivative-in-euclidean-space, lem-em-compact-field-variation, lem-em-fundamental-variation-lemma, def-em-minkowski-affine-space, def-countable-choice, def-directional-and-partial-derivatives, lem-derivative-of-a-power, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, cor-continuous-functions-are-borel-measurable, def-borel-sigma-algebra, thm-borel-sets-are-lebesgue-measurable, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set]
dependency_roles:
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-em-compact-field-variation: mathematical-premise
  lem-em-fundamental-variation-lemma: mathematical-premise
  def-em-minkowski-affine-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "J. Figueroa-O'Farrill, Brief Notes on the Calculus of Variations (University of Edinburgh), §8 'Second variation', printed pp. 10–11: an indefinite Hessian gives neither a maximum nor a minimum, the finite-dimensional model of part (i)"
      url: "https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/CoV.pdf"
---
## Example

Two exact boundary checks. (i) Stationarity is first order. On $\mathbb R^2$ the polynomial $S(x,y)=x^2-y^2$ has differential $DS(0,0):\mathbb R^2\to\mathbb R$ equal to the zero map at $(0,0)$ in the total-derivative sense of [[def-total-derivative-in-euclidean-space]], while $S(\varepsilon,0)=\varepsilon^2>0$ and $S(0,\varepsilon)=-\varepsilon^2<0$ for every $\varepsilon\ne0$; a point where the first variation vanishes need not be a minimum. Consequently the equivalence of [[lem-em-compact-field-variation]] between stationarity and the coefficient equation, and the conversion by [[lem-em-fundamental-variation-lemma]] of a vanishing first variation into pointwise equations, are first-order conditions: they carry no minimality and no existence content, and the example involves no adopted physical action. (ii) Compact support of the variation is essential. Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for this Lebesgue-functional branch, exactly as in the compact-field supplier; the polynomial branch (i) remains choice-free. Take $U=(-1,1)^4$, $\kappa=1$, $J=0$ and the smooth field $A$ with $A_0(x)=(x^1)^2$ and $A_1=A_2=A_3=0$, in the conventions of [[def-em-minkowski-affine-space]]. Then $F_{01}=-2x^1$, $F_{10}=2x^1$, $F^{01}=\eta^{00}\eta^{11}F_{01}=2x^1$ and $F^{10}=-2x^1$, with every remaining component vanishing, so $\partial_\mu F^{\mu0}=\partial_1F^{10}=-2\ne0$ and the coefficient equation $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ fails at $\nu=0$. Nevertheless the variation $h$ with $h_0\equiv1$ and $h_1=h_2=h_3=0$ is smooth but not compactly supported in $U$; along it $A_0+sh_0=(x^1)^2+s$, so $F_{01}$ and the integrand $L=2(x^1)^2$ are independent of $s$ and $S[A+sh]=\int_U2(x^1)^2\,d\lambda$ is constant in $s$, with first variation $0$ although the field equation fails. For the complementary stationarity-boundary check take instead $A_0=x^1$, the other covariant components zero, $J=0$, and $h_0=x^1$, $h_i=0$ (so $A^0=-x^1$, $h^0=-x^1$). Here $F_{01}=-1$ is constant, so the coefficient equations all hold, but this smooth noncompact direction gives $S[A+sh]=8(1+s)^2$ and derivative $16\ne0$ at zero. Thus extending the compact stationarity condition to all smooth noncompact directions would invalidate the converse. These two witnesses show that the stated compact-support hypothesis cannot simply be removed: its coefficient conversion has no boundary term precisely in its declared compact class. Other variation classes require their own boundary hypotheses.

## Facts & Assumptions

**Given:** the two computational branches of the Example: part (i) with $S(x,y)=x^2-y^2$ on $\mathbb R^2$; part (ii) with $U=(-1,1)^4$, $\kappa=1$, $J=0$, and the two fields $A$ and variations $h$ displayed there, in the covariant-component conventions of [L1]. The Axiom of Countable Choice $\mathrm{AC}_\omega$ is assumed in part (ii), exactly as in [[lem-em-compact-field-variation]]; part (i) of the Example uses no choice principle.

[L1] Minkowski conventions: $\eta_{\mu\nu}=\eta^{\mu\nu}=\operatorname{diag}(-1,1,1,1)_{\mu\nu}$ in the standard basis, so raising a covariant component reverses the sign of the zeroth coordinate: $m^0=-m_0$ and $m^i=m_i$ for $i=1,2,3$ ([[def-em-minkowski-affine-space]]).

[L2] Functional and derivative conventions: for smooth $A$ on a neighbourhood of $\overline U$, $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, $F^{\mu\nu}=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$, $L=-\frac{1}{4\kappa}F_{\mu\nu}F^{\mu\nu}+J^\nu A_\nu$ and $S[A]=\int_U L\,d\lambda$; the partial derivative $\partial_\mu$ is the directional derivative in the standard direction and agrees with the ordinary derivative of the corresponding coordinate line ([[lem-em-compact-field-variation]], [[def-directional-and-partial-derivatives]]).

[L3] Derivatives of constants and powers: a constant function has derivative $0$ at every point, $x\mapsto x^2$ has derivative $2x$, and $x\mapsto x$ has derivative $1$; hence $\partial_1(x^1)^2=2x^1$, $\partial_1x^1=1$ and $\partial_0x^1=\partial_0(x^1)^2=0$. Writing $\partial_x$ and $\partial_y$ for the coordinate derivatives along $(1,0)$ and $(0,1)$, respectively, gives $\partial_xS(x,y)=2x$ and $\partial_yS(x,y)=-2y$ ([[lem-derivative-of-a-power]], clauses 1 and 2).

[L4] The open box $U=(-1,1)^4$ has $\lambda(U)=16$, the constant $c\ge0$ on $U$ has $\int_Uc\,d\lambda=c\lambda(U)$, and $\int_U2(x^1)^2\,d\lambda\le\int_U2\,d\lambda=32$; these integrals of the continuous integrands over the bounded open $U$ are finite real numbers, the integrands being continuous hence Borel measurable and every Borel set being Lebesgue measurable under $\mathrm{AC}_\omega$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-continuous-functions-are-borel-measurable]], [[def-borel-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]]).

[L5] Total derivative: $DS(p)$ is a linear map $T:\mathbb R^2\to\mathbb R$ for which $|S(p+r)-S(p)-T(r)|/\lVert r\rVert_2\to0$ as $r\to0$ through nonzero vectors ([[def-total-derivative-in-euclidean-space]]). Here $\lVert(a,b)\rVert_2=\sqrt{a^2+b^2}$, so $|a^2-b^2|\le a^2+b^2=\lVert(a,b)\rVert_2^2$.

## Verification

**Proof technique:** direct; exact finite computations in the conventions of [L1] and [L2].

1.1 Part (i): for $r=(a,b)\ne0$, $|S(r)-S(0,0)|/\lVert r\rVert_2=|a^2-b^2|/\sqrt{a^2+b^2}\le\sqrt{a^2+b^2}\to0$ as $r\to0$. Thus [L5] gives $DS(0,0)=0$. For every $\varepsilon\ne0$, $S(\varepsilon,0)-S(0,0)=\varepsilon^2>0$ and $S(0,\varepsilon)-S(0,0)=-\varepsilon^2<0$; taking $|\varepsilon|$ arbitrarily small shows that the origin is neither a local minimum nor a local maximum. The stationarity equivalence in (c) of [[lem-em-compact-field-variation]] and the coefficient extraction through [[lem-em-fundamental-variation-lemma]] impose first-order conditions, with no minimality or existence assertion. This branch is choice-free. [given, L5, algebra]

1.2 Part (ii), first witness: for $A_0=(x^1)^2$ and $A_1=A_2=A_3=0$, so that $A^0=-(x^1)^2$ by [L1], [L2] and [L3] give $F_{01}=\partial_0A_1-\partial_1A_0=-2x^1$ and $F_{10}=2x^1$ with all remaining $F_{\mu\nu}$ zero; raising both indices by the constant matrix $\eta^{\mu\nu}=\eta_{\mu\nu}$ of [L1] gives $F^{01}=2x^1$, $F^{10}=-2x^1$ and all remaining $F^{\mu\nu}$ zero, hence $\partial_\mu F^{\mu0}=\partial_1F^{10}=-2$, which differs from $-\kappa J^0=0$, so the coefficient equation fails at $\nu=0$. The variation with $h_0\equiv1$ and $h_1=h_2=h_3=0$ has $h^0\equiv-1$ and is smooth but not compactly supported in $U$. Along it $(A+sh)_0=(x^1)^2+s$ and $(A+sh)_i=0$, so $F_{01}(s)=-2x^1$ and $F(s)_{\mu\nu}F(s)^{\mu\nu}=-8(x^1)^2$ are independent of $s$, whence $L(s)=2(x^1)^2$ for every $s$ by [L2] with $\kappa=1$ and $J=0$; the integral $S[A+sh]=\int_U2(x^1)^2\,d\lambda$ is therefore independent of $s$ by [L4], so this smooth noncompact direction has first variation $0$ although the field equation fails. [given, L1, L2, L3, L4, algebra]

2.1 Part (ii), second witness: for $A_0=x^1$, $A_1=A_2=A_3=0$ and $J=0$, one has $F_{01}=\partial_0A_1-\partial_1A_0=-1$ constant, so every $\partial_\mu F^{\mu\nu}=0$ and the coefficient equations $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ all hold; the variation with $h_0=x^1$ and $h_1=h_2=h_3=0$ has $h^0=-x^1$ by [L1]. Along it $(A+sh)_0=(1+s)x^1$, so $F_{01}(s)=-(1+s)$ and $F(s)_{\mu\nu}F(s)^{\mu\nu}=-2(1+s)^2$, whence $L(s)=\frac12(1+s)^2$ by [L2]; since $\lambda(U)=16$ by [L4], $S[A+sh]=8(1+s)^2$, whose derivative at $s=0$ is $16\ne0$. Thus the converse direction in (c) of [[lem-em-compact-field-variation]] would fail if the compactly supported variation class were extended to all smooth directions, so the compact-support hypothesis is essential exactly for the boundary-free coefficient conversion, and part (ii) is the branch that carries $\mathrm{AC}_\omega$. [given, L1, L2, L3, L4, algebra] ∎
