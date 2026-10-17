---
id: lem-emg-local-potential-construction
kind: lemma
title: "Radial primitives for closed one- and two-forms"
status: draft
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-newton-leibniz-with-interior-derivative
  - thm-continuous-implies-integrable
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Victor Guillemin and Peter Haine, Differential Forms, MIT 18.952 text (2019), sections 2.4 and 2.6"
      url: "https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf"
      locator: "Section 2.4, coordinate exterior derivative and d²=0, printed pp. 53–57; section 2.6, homotopy operator and Poincaré consequence, printed pp. 61–65."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $D\subseteq\mathbb R^4$ be an open set star-shaped about $p\in D$, meaning $p+t(x-p)\in D$ for every $x\in D$ and $0\le t\le1$. Let $F=\frac12F_{ab}\,dx^a\wedge dx^b$ be a smooth real closed two-form on $D$. Use Einstein summation over coordinate indices $a,b,c\in\{0,1,2,3\}$. Define

$$
A_b(x):=\int_0^1 t(x-p)^aF_{ab}(p+t(x-p))\,dt.
$$

Then $A=A_b\,dx^b$ is a smooth real one-form on $D$ and $dA=F$. More generally, if $\alpha=\alpha_a dx^a$ is a smooth closed one-form on $D$, then

$$
\chi(x):=\int_0^1(x-p)^a\alpha_a(p+t(x-p))\,dt
$$

is smooth and $d\chi=\alpha$. The first formula gives a local potential for every smooth closed two-form in a star-shaped coordinate chart; it does not assert global exactness.

## Facts & Assumptions

**Given:** A star-shaped open coordinate domain $D\subseteq\mathbb R^4$, its center $p$, and the smooth closed forms $F$ and, for the final assertion, $\alpha$.

[F1] [[def-emg-lorentzian-forms]]: a smooth real $k$-form is a smooth section of $\bigwedge^kT^*M$; in a coordinate chart its coefficients are smooth functions.

[F2] [[lem-emg-lorentz-hodge-calculus]]: $d$ has the alternating coordinate formula, and $d^2=0$. In particular $dF=0$ means $\partial_cF_{ab}+\partial_aF_{bc}+\partial_bF_{ca}=0$, while $(dA)_{cb}=\partial_cA_b-\partial_bA_c$.

[F3] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: if an integrand and its parameter derivative are continuous on a compact rectangle, the parameter derivative passes through its Riemann integral.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: for a continuous function on a closed interval with a continuous integrable extension of its interior derivative, the integral of that derivative is the endpoint difference.

[F5] [[thm-continuous-implies-integrable]]: every continuous real function on a closed bounded interval is Riemann integrable.

[A1] The typed finite-real, metric, power, sequence-limit and boundaryless conventions in the declared dependencies are authored earlier on this page. Their exact scopes remain separate: the sequence criterion assumes $\mathrm{AC}_\omega$ only for its reverse implication. The radial coefficient calculation below uses no selection from a countable family.

## Proof

1.1 Put $y=x-p$. Fix $x_0\in D$ and choose a closed coordinate box $K\subset D$ with $x_0$ in its interior. The image of $K\times[0,1]$ under $(x,t)\mapsto p+t(x-p)$ is compact and lies in $D$, so the integrand $G_b(x,t)=t(x-p)^aF_{ab}(p+t(x-p))$ and every $x$-partial derivative are continuous on $K\times[0,1]$. Fixing all but one coordinate, [F3] passes that parameter derivative through the integral on the corresponding compact rectangle; applying it repeatedly to each derivative shows that every partial derivative of $A_b$ exists and is continuous near $x_0$. Since $x_0$ was arbitrary, $A_b$ is smooth on $D$, and $A=A_b\,dx^b$ is a smooth one-form. [given, F1, F3, algebra]

2.1 By the differentiation-under-the-integral justification in step 1.1, differentiate the integral and use antisymmetry to obtain $\partial_cA_b-\partial_bA_c=\int_0^1\left(2tF_{cb}(p+ty)+t^2y^a(\partial_cF_{ab}-\partial_bF_{ac})(p+ty)\right)dt$. The closure identity in [F2] gives $\partial_cF_{ab}-\partial_bF_{ac}=\partial_aF_{cb}$. Thus the integrand is $\frac{d}{dt}\bigl(t^2F_{cb}(p+ty)\bigr)$. [given, F2, F3, step 1.1, algebra]

3.1 The function $t\mapsto t^2F_{cb}(p+ty)$ is continuous on $[0,1]$, differentiable on $(0,1)$, and its derivative extends continuously to both endpoints, hence is integrable by [F5]. The Newton–Leibniz formula [F4] evaluates the integral as $F_{cb}(x)-0$, since $t^2F_{cb}(p+ty)=0$ at $t=0$. Therefore every coefficient of $dA$ equals the corresponding coefficient of $F$, so $dA=F$. [given, F2, F4, F5, step 2.1, algebra]

4.1 For the one-form formula, [F3] applies to the smooth integrand on the same compact-image rectangles as in step 1.1, so $\chi$ is smooth. Closedness gives $\partial_b\alpha_a=\partial_a\alpha_b$, and hence $\partial_b\chi=\int_0^1\left(\alpha_b(p+ty)+t y^a\partial_a\alpha_b(p+ty)\right)dt=\int_0^1\frac{d}{dt}\bigl(t\alpha_b(p+ty)\bigr)dt=\alpha_b(x)$ by [F4] and [F5]; the lower endpoint vanishes. Thus $d\chi=\alpha$, proving this local gauge-difference assertion without assuming a global real phase. [given, F2, F3, F4, F5, step 1.1, algebra] ∎


## Remarks

The radial calculation uses only the stated smoothness and star-shaped-domain hypotheses and the local exterior-derivative formula. The additional typed dependencies preserve the approved foundational conventions; their statements do not introduce a choice step into this explicit finite-interval calculation.
