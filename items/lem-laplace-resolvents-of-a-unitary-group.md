---
id: lem-laplace-resolvents-of-a-unitary-group
kind: lemma
title: "Laplace resolvents of a unitary group"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-infinitesimal-generator-of-a-unitary-group, def-strongly-continuous-one-parameter-unitary-group, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, thm-bochner-dominated-convergence, thm-bochner-integrability-criterion, thm-bounded-linear-maps-commute-with-bochner-integration, def-strongly-measurable-banach-valued-function, def-banach-valued-simple-function-and-integral, def-countable-choice, def-dependent-choice, def-metric-convergence, thm-cauchy-schwarz-in-an-inner-product-space, thm-newton-leibniz-with-interior-derivative, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Lemma 1.17, Lemma 1.18 and Proposition 1.20 with proof, pp.11-13"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 5.1, pp.146-148"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice and Dependent Choice. Let $U$ be a strongly continuous one-parameter unitary
group on $H$ with infinitesimal generator $G$, and let $\lambda>0$. Then
$$Q_\pm(\lambda)x=\int_0^\infty e^{-\lambda t}U(\pm t)x\,dt$$
is a Bochner integral depending linearly and boundedly on $x$, with
$\|Q_\pm(\lambda)\|\le1/\lambda$ and $\operatorname{ran}Q_\pm(\lambda)\subseteq
D(G)$; moreover
$$(\lambda\mp G)Q_\pm(\lambda)=I,\qquad Q_\pm(\lambda)(\lambda\mp G)=I\ \text{on }D(G),$$
and $Q_+(\lambda)+Q_-(\lambda)=2\lambda\,Q_+(\lambda)Q_-(\lambda)$.

## Facts & Assumptions

[A1] Strong measurability means pointwise almost-everywhere norm approximation by measurable simple functions. Such a function is Bochner integrable when its norm is integrable, and $\|\int f\|\le\int\|f\|$. The integral is the limit of integrals of simple approximations in integral norm ([[def-strongly-measurable-banach-valued-function]], [[def-banach-valued-simple-function-and-integral]], [[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]]).

[A2] Bounded linear maps commute with Bochner integrals and Bochner dominated convergence holds under Countable Choice ([[thm-bounded-linear-maps-commute-with-bochner-integration]], [[thm-bochner-dominated-convergence]], [[def-countable-choice]]).

[A3] The group law, norm preservation and strong continuity hold, and $G$ is the norm derivative at zero on its linear domain ([[def-strongly-continuous-one-parameter-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]], [[def-metric-convergence]]). Cauchy--Schwarz gives continuity of the inner product ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A4] Compact Newton--Leibniz and the Riemann/Lebesgue bridge (under Countable Choice), followed by scalar monotone convergence, apply to the continuous exponential weight ([[thm-newton-leibniz-with-interior-derivative]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-monotone-convergence-for-the-integral]]).

[A5] Lebesgue measurability and measure are invariant under translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Dependent Choice, a strongly continuous unitary group $U$ with generator $G$, and $\lambda>0$.

1.1 For either sign put $F_x(t)=e^{-\lambda t}U(\pm t)x$ on $[0,\infty)$. It is continuous. For integer $n\ge1$, approximate it on $[0,n)$ by its values at the left endpoints of intervals of length $2^{-n}$ and put zero elsewhere. These are measurable simple functions with finite support measure, converging at every fixed $t\ge0$ to $F_x(t)$ by continuity. Thus $F_x$ is strongly measurable. Compact Newton--Leibniz with primitive $-e^{-\lambda t}/\lambda$ and the bridge in [A4] give $\int_0^N e^{-\lambda t}dt=(1-e^{-\lambda N})/\lambda$. Monotone convergence as integer $N\to\infty$ gives $\int_0^\infty e^{-\lambda t}dt=1/\lambda$. Since $\|F_x(t)\|=e^{-\lambda t}\|x\|$, [A1] defines $Q_\pm x$ and gives $\|Q_\pm x\|\le\|x\|/\lambda$. Linearity follows first for simple integrals and then by adding their approximating sequences in integral norm. Therefore these are bounded linear operators. [A1, A3, A4]

1.2 For $x\in D(G)$ write $v_h=(U(h)x-x)/h\to Gx$ for real $h\ne0$. Norm preservation and the inner-product expansion give $0=2\operatorname{Re}\langle v_h,x\rangle+h\|v_h\|^2$. Since a convergent family is bounded near zero, the limit gives $\operatorname{Re}\langle Gx,x\rangle=0$. Hence $\operatorname{Re}\langle(\lambda\mp G)x,x\rangle=\lambda\|x\|^2$. If $(\lambda\mp G)x=0$, positivity of $\lambda$ gives $x=0$; both shifts are injective. This argument requires no density or closedness theorem for $G$. [A3, given]

2.1 Translation of a Bochner integral is legitimate here: for simple integrable functions it follows termwise from [A5]; for their integral-norm limits the scalar change-of-variables identity follows first for nonnegative simple functions, then by monotone convergence, and shows that translation preserves the approximation error. Thus the simple identities pass to the Bochner integral by [A1]. Subdivision and linearity follow in the same way from simple integrals. Also $\|h^{-1}\int_0^hF_x(s)ds-x\|\le\sup_{0\le s\le h}\|F_x(s)-x\|\to0$ as $h\downarrow0$. The tail $\int_h^\infty F_x$ tends to $Q_\pm x$, since the norm of the omitted integral is at most $h\|x\|$. [A1, A4, A5, step 1.1]

3.1 For the plus sign and $h>0$, commuting $U(h)$ with integration and translating gives $\frac{U(h)-I}{h}Q_+x=\frac{e^{\lambda h}-1}{h}\int_h^\infty e^{-\lambda s}U(s)x\,ds-\frac1h\int_0^he^{-\lambda s}U(s)x\,ds\to\lambda Q_+x-x$ by step 2.1. To obtain the required two-sided derivative, if $y\in H$ has right quotient $v_h=(U(h)y-y)/h\to v$, then $\frac{U(-h)y-y}{-h}=U(-h)v_h\to v$: its error is bounded by $\|v_h-v\|+\|U(-h)v-v\|$. Thus $Q_+x\in D(G)$ and $(\lambda-G)Q_+x=x$. For $V(t)=U(-t)$, substitution $s=-t$ in the two-sided derivative definition gives $D(G_V)=D(G)$ and $G_V=-G$. Applying the proved plus-sign argument to $V$ gives $Q_-x\in D(G)$ and $(\lambda+G)Q_-x=x$. [A2, A3, step 1.1, step 2.1]

4.1 For $x\in D(G)$ let $y=Q_\pm(\lambda\mp G)x$. Step 3.1 places $y$ in $D(G)$ and gives $(\lambda\mp G)y=(\lambda\mp G)x$. Injectivity from step 1.2 implies $y=x$, proving $Q_\pm(\lambda\mp G)=I$ on $D(G)$. Together with step 3.1 this shows $\operatorname{ran}Q_\pm=D(G)$ and both inverse identities with their stated domains. [step 3.1, step 1.2]

5.1 From $(\lambda+G)Q_-=I$ obtain $GQ_-=I-\lambda Q_-$ and $(\lambda-G)Q_-=2\lambda Q_--I$. Multiplication on the left by $Q_+$ is legitimate on every vector because $\operatorname{ran}Q_-\subseteq D(G)$. Step 4.1 gives $Q_-=2\lambda Q_+Q_--Q_+$, hence $Q_++Q_-=2\lambda Q_+Q_-$. [step 3.1, step 4.1]

6.1 The norm bound, range and inverse claims are steps 1.1, 3.1 and 4.1, and the sum identity is step 5.1. For $H=\{0\}$ the same formulas directly concern its unique full-domain operator; zero vectors give zero integrals. The strict condition $\lambda>0$ ensures integrability and injectivity. Countable Choice supplies the compact integration bridge and the Bochner framework; the declared Dependent Choice is not additionally needed by this proof. No half-line fundamental theorem for a merely bounded derivative is invoked. [A1, A2, A4, step 1.1, step 3.1, step 1.2, step 4.1, step 5.1] ∎



## Source notes

Schnaubelt, Lemma 1.18 and Proposition 1.20(a)-(b), printed pp.11-13, supplies the translated-integral route to the resolvent. Here unitarity proves injectivity directly, so the left inverse follows from the right inverse without any half-line scalar fundamental theorem or a prior closedness theorem for the generator. Both signs and the two-sided derivative are checked explicitly.
