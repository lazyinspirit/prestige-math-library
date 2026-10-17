---
id: lem-formal-residue-identities
kind: lemma
title: "Formal residues satisfy integration by parts, logarithmic differentiation, and change of variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-laurent-series-and-residue, prop-formal-derivative-algebra, thm-formal-compositional-inverse, thm-formal-power-series-unit-criterion, thm-laurent-series-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

Let $K$ be a field. For $f,g\in K((x))$,

$$\operatorname{res}_x(Df)=0,\qquad \operatorname{res}_x((Df)g)=-\operatorname{res}_x(fDg).$$

For nonzero $f$,

$$\operatorname{res}_x\!\left(\frac{Df}{f}\right)=v_x(f),$$

where the integer on the right acts by repeated addition and additive inverses in $K$. If, in addition, $K$ contains $\mathbb Q$ and $g\in xK\llbracket x\rrbracket$ has nonzero linear coefficient, then, for every $F\in K((x))$ for which $F\circ g$ is formed by Laurent substitution,

$$\operatorname{res}_x\bigl((F\circ g)Dg\bigr)=\operatorname{res}_x(F).$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Formal Laurent series have support bounded below, coefficientwise addition, finite convolution in each degree, least exponent $v_x$, termwise derivative, and residue $\operatorname{res}_x(f)=[x^{-1}]f$ ([[def-formal-laurent-series-and-residue]]).

[F2] The formal derivative is additive, obeys the product rule, and satisfies $D(f^m)=mf^{m-1}Df$ for $m\ge1$ while $D(1)=0$ ([[prop-formal-derivative-algebra]]).

[F3] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

## Proof

**Proof technique:** inspect Laurent monomials and leading terms.

1.1 The same finite coefficient calculation as for power series gives $D(fg)=(Df)g+fDg$ in $K((x))$. The coefficient of $x^{-1}$ in $Df$ could only come from differentiating the constant term, and that contribution is $0$. Applying this to the product rule gives integration by parts. [given, F1, F2]

1.2 Write $f=x^m u$, where $m=v_x(f)$ and $u\in K\llbracket x\rrbracket$ has nonzero constant coefficient. Then $u$ is a unit by the unit criterion, and $Df/f=mx^{-1}+Du/u$. Since $Du/u\in K\llbracket x\rrbracket$, it has no $x^{-1}$ coefficient. The residue is therefore $m$. [given, F1, F3]

2.1 For the change of variables, linearity reduces the claim coefficientwise to $F=x^m$. If $m\ne-1$, then $g^mDg=D(g^{m+1})/(m+1)$ and its residue is $0$ by step 1.1; division is legitimate because $K$ contains $\mathbb Q$. If $m=-1$, write $g=xu$ with $u(0)\ne0$; then $g^{-1}Dg=x^{-1}+u^{-1}Du$ has residue $1$ by step 1.2. Thus the residue equals that of $x^m$ in every case, and locally finite summation extends the identity to $F$. [step 1.1, step 1.2, given, F1, F2, F3]

3.1 Steps 1.1-2.1 prove the derivative, integration-by-parts, logarithmic-derivative, and substitution identities. [step 1.1, step 1.2, step 2.1] ∎
