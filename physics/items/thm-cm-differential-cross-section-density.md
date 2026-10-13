---
id: thm-cm-differential-cross-section-density
kind: theorem
title: "One-dimensional substitution on a deflection branch: the outgoing
  angular measure has density $b|\\mathrm db/\\mathrm d\\theta|$, hence
  cross-section density $b|\\mathrm db/\\mathrm d\\theta|/\\sin\\theta$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  [
    def-cm-scattering-data,
    def-interval,
    def-continuity-real,
    thm-derivative-of-an-inverse,
    cor-one-dimensional-change-of-variables-with-absolute-derivative,
    thm-continuous-implies-integrable,
    thm-additivity-over-subintervals,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    thm-algebra-of-continuous-functions,
    cor-mean-value-theorem,
    thm-differentiation-under-the-integral-sign-on-a-compact-rectangle,
    def-countable-choice,
    thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral,
    thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets,
    thm-tonelli-theorem-for-sigma-finite-product-spaces,
    thm-measure-uniqueness-on-a-sigma-finite-pi-system,
    thm-continuous-preimages-of-borel-sets-are-borel,
    thm-increasing-simple-approximation-of-a-nonnegative-measurable-function,
    thm-monotone-convergence-for-the-integral,
    def-integrable-real-and-complex-functions-and-their-integrals,
    thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  ]
dependency_roles:
  def-cm-scattering-data: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-measure-uniqueness-on-a-sigma-finite-pi-system: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-increasing-simple-approximation-of-a-nonnegative-measurable-function: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (347)-(351): the annular incident area $2\\pi b\\,\\mathrm
        db$ and the outgoing solid angle, giving $\\mathrm d\\sigma/\\mathrm
        d\\Omega=(b/\\sin\\theta)|\\mathrm db/\\mathrm d\\theta|$"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics,
        §3.5, Eqs. (3.70)-(3.72): the differential cross-section and the
        geometric relation $\\mathrm d\\sigma/\\mathrm d\\Omega=b|\\mathrm
        db/\\mathrm d\\theta|/\\sin\\theta$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let
$\theta:(a_1,a_2)\to(\theta_1,\theta_2)\subseteq(0,\pi)$ be a deflection
branch of [[def-cm-scattering-data]], with inverse $b(\theta)$, and set
$D=(a_1,a_2)\times(0,2\pi)$, $H=(\theta_1,\theta_2)\times(0,2\pi)$ and
$T(b,\varphi)=(\theta(b),\varphi)$. Restrict the incident measure $\nu$ to
$D$. Its pushforward, defined by $T_*\nu(B)=\nu(T^{-1}(B))$ for Borel
$B\subseteq H$, satisfies
$$T_*\nu(B)=\int_B b(\theta)|b'(\theta)|\,d\lambda_2(\theta,\varphi).$$
For every nonnegative Borel $g:H\to[0,+\infty]$, and for every real Borel
$g$ with either side's integral of $|g|$ finite, consequently
$$\int_D g(\theta(b),\varphi)b\,d\lambda_2(b,\varphi)=\int_H g(\theta,\varphi)b(\theta)|b'(\theta)|\,d\lambda_2(\theta,\varphi).$$
The nonnegative equality allows $+\infty$; in the real case both sides are
finite and absolute integrability on one side is equivalent to that on the
other. In particular it applies to continuous periodic test functions that
are nonnegative or absolutely integrable, and to compactly supported
continuous test functions. No equality of undefined signed improper
integrals is asserted. Nonnegative double-integral notation denotes the
corresponding Lebesgue integrals, with iterated integrals justified by Tonelli.

Thus the outgoing angular measure has density $b(\theta)|b'(\theta)|$
against $d\theta\,d\varphi$ and density
$$\frac{d\sigma}{d\Omega}(\theta)=\frac{b(\theta)|b'(\theta)|}{\sin\theta}=\frac{b(\theta)}{\sin\theta\,|\theta'(b(\theta))|}$$
against the solid-angle measure. For finitely many branches on disjoint
incident intervals the measures add, including on overlapping image
intervals; in particular contributions with pairwise disjoint images add.

## Facts & Assumptions

**Given:** Countable choice, the branch, its inverse, $D,H,T,\nu$ and the test function as stated.

[L1] The inverse is $C^1$, with $b'=1/(\theta'\circ b)$; the sign of the continuous nonzero derivative is constant, so the branch is strictly monotone ([[thm-derivative-of-an-inverse]], [[cor-mean-value-theorem]], [[def-interval]], [[def-continuity-real]]).

[L2] Compact substitution with absolute derivative holds on every closed interval lying strictly inside the branch; continuous functions there are Riemann integrable and their Riemann and Lebesgue integrals agree under countable choice ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[L3] On Borel subsets of the plane $\lambda_2=\lambda_1\times\lambda_1$, and Tonelli applies to nonnegative Borel integrands. Measures agreeing on a generating pi-system with an increasing common finite-measure exhaustion agree everywhere ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]).

[L4] Continuous maps have Borel preimages; a nonnegative measurable density defines a measure. Nonnegative measurable functions have increasing simple approximations and monotone convergence holds; real integrability means finite integral of the absolute value ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-cm-scattering-data]]).

[L5] $\sin\theta>0$ on $(0,\pi)$: the solid-angle definition proves this from $\sin0=\sin\pi=0$ and strict increase/decrease on the two half intervals; its continuous density is Borel measurable ([[def-cm-scattering-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $b$ is $C^1$ and $h(\theta)=b(\theta)|b'(\theta)|$ is continuous and positive. The map $T$ is a homeomorphism $D\to H$, so $T_*\nu$ is a Borel measure: preimages are Borel and preserve disjoint countable unions. The nonnegative density $h$ defines another Borel measure $\eta(B)=\int_B h\,d\lambda_2$ by [L4]. [given, L1, L4]

2.1 Let $c<d$ lie in $(\theta_1,\theta_2)$ and $0<p<q<2\pi$. Apply compact substitution [L2] to the inverse map $b$ on $[c,d]$, with integrand $x\mapsto x$: writing $u=\min(b(c),b(d))$, $v=\max(b(c),b(d))$, it gives $\int_c^d h(\theta)\,d\theta=\int_u^v x\,dx$. Endpoints have Lebesgue measure zero, so Tonelli [L3] yields $\eta((c,d)\times(p,q))=(q-p)\int_u^v x\,dx=\nu(T^{-1}((c,d)\times(p,q)))$. These quantities are finite. [step 1.1, L2, L3, algebra]

3.1 Interior open rectangles, together with the empty set, form a pi-system generating the Borel sets of $H$: rational rectangles form a countable base, and every open set is the union of those base rectangles it contains. Choose explicit nested interior intervals exhausting each open coordinate interval; their product rectangles exhaust $H$ and have the common finite measure of step 2.1. Thus measure uniqueness [L3] gives $T_*\nu=\eta$ on every Borel set of $H$, proving the asserted pushforward identity even for unbounded open branches. [step 1.1, step 2.1, L3]

4.1 The test-function identity first holds for indicator functions by step 3.1 and the definition of pushforward, then for nonnegative simple functions by finite addition, and finally for every nonnegative Borel $g$ by increasing simple approximation and monotone convergence [L4] on both sides. Apply this to $|g|$ to obtain equivalence of absolute integrability; applying it to the positive and negative parts gives the real identity whenever that absolute integral is finite. Tonelli [L3] supplies the nonnegative iterated form. [step 3.1, L3, L4, algebra]

5.1 Since $\sin\theta>0$ by [L5], rewriting $h\,d\lambda_2=(h/\sin\theta)\,d\Omega$ gives the solid-angle density; [L1] gives its reciprocal-derivative expression. Pushforward commutes with finite addition of measures by its definition, so branches on disjoint incident intervals contribute the sum of these measures, and the sum of the densities wherever their images overlap. This proves all assertions. [step 1.1, step 3.1, step 4.1, L1, L4, L5, algebra] ∎
