---
id: cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls
kind: counterexample
title: Freezing cannot absorb a fixed oscillation on arbitrarily small balls
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 3
deps: [lem-freezing-coefficients-and-schauder-error-estimate, def-uniformly-elliptic-nondivergence-operator, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-euclidean-spheres-and-closed-balls]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.5, the requirement $\\rho^\\alpha[A]_{C^\\alpha}<\\tfrac12$ in the freezing proof, printed pp. 148-149 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.2.1, Part I, the frozen-coefficient modulus $\\epsilon(\\delta)\\to0$, printed pp. 106-107 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the continuity restrictions imposed on the coefficients before the Schauder estimates, printed pp. 125-126 (read in full)"
---

## Statement refuted

Freezing coefficients is a stable device only when the coefficient oscillation at small scales actually vanishes. The assertion that the Hölder (or continuity) hypothesis on the principal coefficients in the freezing and Schauder arguments can be replaced by mere boundedness, or that the freezing radius alone can make an arbitrary fixed oscillation absorbable, is false: for a jump coefficient the freezing error is not even $\alpha$-Hölder at any scale, so no choice of the freezing radius makes the error term absorbable by the scaled norm.

## Facts & Assumptions

**Given:** $n\ge1$, real numbers $a_0>b>0$, the coefficient field $a(x):=a_0+b\,\operatorname{sign}(x_1)$ on $\mathbb R^n$, the diagonal matrix field $A(x):=a(x)I_n$ (or, in $n=1$, the scalar coefficient), and centres $x_0$ with $x_{0,1}=0$.

[F1] The freezing estimate [[lem-freezing-coefficients-and-schauder-error-estimate]] requires $[A]_{0,\alpha;B_R(x_0)}\le K$ and produces a bound $\rho^2\|(L-L_0)u\|^{*}_{0,\alpha;B_\rho(x_0)}\le\varepsilon\|u\|^{*}_{2,\alpha;B_\rho(x_0)}+C_\varepsilon\sup|u|$, where $\|g\|^{*}_{0,\alpha}=\sup|g|+\rho^\alpha[g]_{0,\alpha}$; in particular the left-hand side must be finite. The local Hölder seminorms are those of [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], the ballistic Euclidean balls those of [[def-euclidean-spheres-and-closed-balls]], and the nondivergence operator convention that of [[def-uniformly-elliptic-nondivergence-operator]].

## Counterexample

**Proof technique:** direct.

1.1 The coefficient field. The function $\operatorname{sign}(x_1)$ is bounded and measurable (it is piecewise constant with a single jump), so $a$ is bounded and measurable, and $A=a\,I_n$ is a bounded symmetric measurable matrix field. For every $x$, $a(x)\in[a_0-b,a_0+b]$ (with the standard convention $\operatorname{sign}(0)=0$ if used), and off the interface it equals one of the endpoint values. Thus the eigenvalues of $A(x)$ lie in $[a_0-b,a_0+b]$, so $A$ is uniformly elliptic with $\lambda=a_0-b>0$ and $\Lambda=a_0+b$; no continuity or Hölder regularity is available at $x_1=0$. [F1, given, algebra]

2.1 The oscillation is fixed and never small. Let $x_0$ satisfy $x_{0,1}=0$ and let $\rho>0$. The two points $x_0\pm\tfrac\rho2e_1$ lie in $B_\rho(x_0)$ and have first coordinate relative to the interface equal to $\pm\rho/2$, so $a$ takes both values $a_0+b$ and $a_0-b$ on the ball: $\operatorname{osc}_{B_\rho(x_0)}a=2b$, independent of $\rho$. Consequently the freezing modulus of continuity $\epsilon(\delta):=\sup_{|x-y|\le\delta}|a(x)-a(y)|$ satisfies $\epsilon(\delta)=2b$ for every $\delta>0$, because pairs straddling the hyperplane $x_1=0$ are at arbitrarily small distance. [step 1.1, F1, given, algebra]

3.1 The freezing error is not Hölder at any scale. Let $0<\alpha<1$ and consider the pair $x_0+t e_1$, $x_0-t e_1$ with $t>0$: both lie in $B_{2t}(x_0)$ and $|a(x_0+te_1)-a(x_0-te_1)|=2b$, so $$\frac{|a(x_0+te_1)-a(x_0-te_1)|}{|(x_0+te_1)-(x_0-te_1)|^{\alpha}}=\frac{2b}{(2t)^{\alpha}}\longrightarrow+\infty\qquad(t\downarrow0).$$ Hence $[a]_{0,\alpha;B_\rho(x_0)}=+\infty$ for every $\rho>0$ and every $\alpha\in(0,1)$: the coefficient is bounded but nowhere near Hölder on any ball centred on its interface. [step 2.1, F1, algebra]

4.1 No radius absorbs the frozen error. Take $L:=a(x)\Delta$ with frozen part $L_0:=a_0\Delta$ and $u(x):=x_1^2/2$, which is $C^\infty$ with $\Delta u=1$ and finite scaled norm $\|u\|^{*}_{2,\alpha;B_\rho(x_0)}\le C(1+\rho+\rho^2)$ on every ball of radius $\rho\le1$. Then $(L-L_0)u=(a-a_0)\Delta u=a-a_0$ on $B_\rho(x_0)$ (up to the measure-zero hyperplane), so $$\rho^2\|(L-L_0)u\|^{*}_{0,\alpha;B_\rho(x_0)}\ge\rho^{2+\alpha}\,[a-a_0]_{0,\alpha;B_\rho(x_0)}=+\infty$$ by step 3.1, while the right-hand side $\varepsilon\|u\|^{*}_{2,\alpha;B_\rho(x_0)}+C_\varepsilon\sup_{B_\rho}|u|$ is finite for every $\varepsilon>0$ and every finite $C_\varepsilon$. Hence the freezing estimate cannot hold for this coefficient for any choice of the freezing radius $\rho$, and no radius can make the coefficient-oscillation term absorbable. [step 2.1, step 3.1, F1, given, algebra]

5.1 Conclusion. A bounded measurable (indeed piecewise constant) uniformly elliptic coefficient with a fixed jump has oscillation $2b$ at every scale and freezing error of infinite $\alpha$-Hölder seminorm; the freezing and Schauder arguments therefore genuinely need the vanishing small-scale oscillation provided by $C^{0,\alpha}$ (or continuity) hypotheses, and this is not a technical convenience. The statement above is refuted, while the freezing lemma with its stated $C^{0,\alpha}$ hypothesis is untouched by this example. [step 1.1, step 4.1, given] ∎

## Remarks

- The example also shows that in dimension one the coefficient $\operatorname{sign}$ is the sharp obstruction: the jump in $a$ has size $2b$, and its one-dimensional distributional derivative is $2b\delta_0$. The sign function itself is not a derivative of the Heaviside function.
