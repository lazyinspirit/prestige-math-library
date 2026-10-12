---
id: cex-gr-shearing-congruence-rest-spaces-not-integrable
kind: counterexample
title: "A congruence whose rest spaces are not tangent to any local hypersurfaces"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-shearing-congruence-tetrad-and-adapted-chart, prop-gr-rest-space-integrability-criterion, def-gr-smooth-lorentzian-objects, def-smooth-differential-k-form, def-exterior-derivative-by-the-invariant-vector-field-formula, thm-the-exterior-derivative-is-a-graded-derivation, prop-exterior-derivative-of-a-function-is-its-differential, def-wedge-product-of-differential-forms]
dependency_roles:
  ex-gr-shearing-congruence-tetrad-and-adapted-chart: mathematical-premise
  prop-gr-rest-space-integrability-criterion: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  prop-exterior-derivative-of-a-function-is-its-differential: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 2, sections 2.3-2.4: hypersurface-orthogonality and the Frobenius theorem in the proof that the Weingarten map preserves the tangent space (printed pp. 23-28); Ch. 3, section 3.3.3: a hypersurface-orthogonal congruence of Eulerian observers has vanishing vorticity (printed p. 44)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 19 'Distributions and Foliations': the Frobenius theorem, printed pp. 491-501"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "for every observer congruence on a nonempty open subset of
flat Lorentzian four-space, the family of rest spaces is tangent to local
hypersurfaces" ([[prop-gr-rest-space-integrability-criterion]]).

## Facts & Assumptions

**Given:** The shearing congruence $n=\gamma(\partial_0+\Omega\partial_2)$ on $W=\{|\lambda x^1|<1/2\}\subseteq\mathbb R^4$ with its flat Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$, time orientation $N=\partial_0$, and the one-form $\alpha=n^{\flat}$.

[L1] On $W$ the field $n$ is an observer congruence with $\Omega=\lambda x^1$, $\gamma=(1-\Omega^2)^{-1/2}>0$, $\lambda>0$, and its rest space at $q$ is $n_q^{\perp}=\ker\alpha_q$ ([[ex-gr-shearing-congruence-tetrad-and-adapted-chart]], [[prop-gr-rest-space-integrability-criterion]]).

[L2] The rest spaces of a congruence are tangent to local hypersurfaces if and only if $\alpha\wedge d\alpha=0$ on the domain, where $\alpha=n^{\flat}$ ([[prop-gr-rest-space-integrability-criterion]]).

[L3] The flat map is $\alpha_q(v)=g_q(n_q,v)$, so in the chart $x$ the components of $\alpha$ are $\alpha_a=\sum_bg_{ab}n^b$ ([[prop-gr-rest-space-integrability-criterion]], [[def-smooth-differential-k-form]]).

[L4] The exterior derivative is $\mathbb R$-linear of degree one and satisfies $d(\beta\wedge\gamma)=d\beta\wedge\gamma+(-1)^{\deg\beta}\beta\wedge d\gamma$; the exterior derivative of a smooth function is its differential ([[thm-the-exterior-derivative-is-a-graded-derivation]], [[prop-exterior-derivative-of-a-function-is-its-differential]], [[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

[L5] The wedge product of differential forms is defined pointwise by the wedge product of alternating covectors ([[def-wedge-product-of-differential-forms]]).



## Counterexample

1.1 In the chart $x$ the components of $n$ are $(\gamma,0,\gamma\Omega,0)$ and $g_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$, so by [L3] the components of $\alpha$ are $\alpha_0=-\gamma$, $\alpha_2=\gamma\Omega$ and $\alpha_1=\alpha_3=0$; that is, $\alpha=\gamma(-dx^0+\Omega\,dx^2)$, a smooth $1$-form on $W$. [L1, L3, algebra]

2.1 Since $\gamma$ and $\Omega$ depend only on $x^1$, their differentials are $d\gamma=\gamma'\,dx^1$ and $d\Omega=\Omega'\,dx^1$ by [L4], with $\Omega'=\lambda$ and $\gamma'=\gamma^3\Omega\Omega'$. Applying the Leibniz rule of [L4] twice gives $d\alpha=d\gamma\wedge(-dx^0+\Omega\,dx^2)+\gamma\,d(-dx^0+\Omega\,dx^2)=\gamma'\,dx^1\wedge(-dx^0)+\gamma'\Omega\,dx^1\wedge dx^2+\gamma\Omega'\,dx^1\wedge dx^2=\gamma'\,dx^0\wedge dx^1+(\gamma'\Omega+\gamma\Omega')\,dx^1\wedge dx^2$. [step 1.1, L4, algebra]

3.1 By [L5] and step 2.1, $\alpha\wedge d\alpha=\gamma(-dx^0+\Omega\,dx^2)\wedge\bigl[\gamma'dx^0\wedge dx^1+(\gamma'\Omega+\gamma\Omega')dx^1\wedge dx^2\bigr]$. The terms containing a repeated coordinate differential vanish, and using $dx^2\wedge dx^0\wedge dx^1=dx^0\wedge dx^1\wedge dx^2$ we get $\alpha\wedge d\alpha=\gamma\bigl[-(\gamma'\Omega+\gamma\Omega')+\Omega\gamma'\bigr]dx^0\wedge dx^1\wedge dx^2=-\gamma^2\Omega'\,dx^0\wedge dx^1\wedge dx^2=-\gamma^2\lambda\,dx^0\wedge dx^1\wedge dx^2$. Since $\lambda>0$ and $\gamma>0$ on $W$, the coefficient $-\gamma^2\lambda$ is nonzero at every point of $W$, so $\alpha\wedge d\alpha$ is nowhere zero on $W$. [step 2.1, L5, algebra]

4.1 By [L2], the rest spaces of the congruence are tangent to local hypersurfaces if and only if $\alpha\wedge d\alpha=0$; since $\alpha\wedge d\alpha\neq0$ at every point of $W$ by step 3.1, they are not tangent to any local hypersurface. This refutes the displayed general statement. [step 3.1, L2] ∎

## Remarks




By the companion example
[[ex-gr-shearing-congruence-tetrad-and-adapted-chart]] this same congruence
does admit an adapted chart, so "existence of an adapted chart" and
"integrability of the rest spaces" are genuinely different properties: the
first always holds locally, the second fails here. The counterexample makes no
claim about congruences with vanishing vorticity, and no global foliation
claim.
