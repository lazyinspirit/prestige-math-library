---
id: lem-marchenko-pastur-formula-defines-a-finite-measure
kind: lemma
title: "The Marchenko–Pastur formula defines a probability law with the fixed-point transform"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-countable-choice
  - def-marchenko-pastur-measure
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-identity-theorem-holomorphic-functions
  - thm-dominated-convergence
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3, §3.3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Theorem 2.1 and Lemmas 2.5–2.6"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

For every $\gamma>0$, the set function $\mu_\gamma$ in the definition of the Marchenko–Pastur measure is a Borel probability measure supported on $[0,\infty)$. For every $z\in\mathbb C$ with $\eta:=\operatorname{Im}z>0$, its Stieltjes transform $m_\gamma(z)$ satisfies
$$1+z m_\gamma(z)=\frac{m_\gamma(z)}{1+\gamma m_\gamma(z)},\qquad \operatorname{Im}\bigl(1-\gamma-z-\gamma z m_\gamma(z)\bigr)\le-\eta.$$

## Statement references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 52–58 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Theorem 2.1 and Lemmas 2.5–2.6, printed pp. 29–35 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** Countable choice, $\gamma>0$, the endpoints $a=(1-\sqrt\gamma)^2$, $b=(1+\sqrt\gamma)^2$, and the formula defining $\mu_\gamma$.

[A1] The Axiom of Countable Choice supplies a choice function for each countable family of nonempty sets ([[def-countable-choice]]).

[F1] The set function is the density $\sqrt{(b-x)(x-a)}/(2\pi\gamma x)$ on $(a,b)$ with an atom $(1-1/\gamma)_+$ at zero ([[def-marchenko-pastur-measure]]).

[F2] The identity theorem says holomorphic functions on a connected open set that agree on a set with an interior limit point agree throughout that set ([[thm-identity-theorem-holomorphic-functions]]).

[F3] Dominated convergence allows limits of integrands bounded by one integrable function to pass through the integral ([[thm-dominated-convergence]]).

[F4] Integrating a nonnegative measurable function over measurable sets defines a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[F5] Under countable choice, Lebesgue measure on $\mathbb R$ is a measure, and every Borel subset of $\mathbb R$ is Lebesgue measurable; hence the Borel density used below is measurable for Lebesgue measure ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-borel-sets-are-lebesgue-measurable]]).

## Proof

**Given:** Countable choice, the parameters, and the formula in the Statement.

1.1 Put $B=2\sqrt\gamma$, $A_0=1+\gamma$, and $x(\theta)=A_0+B\cos\theta$ for $0<\theta<\pi$. This substitution maps $(0,\pi)$ onto $(a,b)$ in reverse order, with $\sqrt{(b-x)(x-a)}=B\sin\theta$ and $|dx|=B\sin\theta\,d\theta$. Thus the continuous part of $\mu_\gamma$ becomes $(2/\pi)\sin^2\theta\,d\theta/x(\theta)$. For real $A>B$, the substitution $t=\tan(\theta/2)$ gives $$\int_0^\pi\frac{d\theta}{A+B\cos\theta}=2\int_0^\infty\frac{dt}{(A+B)+(A-B)t^2}=\frac{\pi}{\sqrt{A^2-B^2}}.$$ Write $I_0(A)=\int_0^\pi(A+B\cos\theta)^{-1}d\theta=\pi/\sqrt{A^2-B^2}$. Since $\int_0^\pi\cos\theta\,d\theta=0$ and $\cos\theta/(A+B\cos\theta)=B^{-1}-A/[B(A+B\cos\theta)]$, $$I_1(A):=\int_0^\pi\frac{\cos\theta}{A+B\cos\theta}d\theta=\frac\pi B-\frac A B I_0(A),\quad I_2(A):=\int_0^\pi\frac{\cos^2\theta}{A+B\cos\theta}d\theta=-\frac A B I_1(A)=-\frac{A\pi}{B^2}+\frac{A^2}{B^2}I_0(A).$$ Therefore $$J(A):=\int_0^\pi\frac{\sin^2\theta}{A+B\cos\theta}\,d\theta=I_0(A)-I_2(A)=\frac{\pi(A-\sqrt{A^2-B^2})}{B^2}.$$ For $A=A_0>B$, the root is $|1-\gamma|$; if $\gamma=1$, direct cancellation $\sin^2\theta/(2+2\cos\theta)= (1-\cos\theta)/2$ gives the same value by continuity. Hence the continuous mass is $2J(A_0)/\pi=(A_0-|1-\gamma|)/(2\gamma)=\min(1,\gamma)/\gamma$. Adding $(1-1/\gamma)_+$ gives total mass one. Define $f_\gamma(x):=\sqrt{(b-x)(x-a)}/(2\pi\gamma x)$ for $a<x<b$ and $f_\gamma(x):=0$ otherwise. This is nonnegative and Borel measurable, and has finite integral by the calculation above. By [F5], $f_\gamma$ is Lebesgue measurable. By [F4], $A\mapsto\int_A f_\gamma\,d\lambda$ is a finite Borel measure; the nonnegative multiple $(1-1/\gamma)_+\delta_0$ is a finite measure as well. Their sum is the displayed set function, so it is a Borel probability measure supported on $[0,\infty)$. [A1, F1, F4, F5, algebra, construct]

2.1 For $w=re^{i\theta}\in\mathbb C\setminus(-\infty,0]$, with $r>0$ and $-\pi<\theta<\pi$, define $q_0(w)=\sqrt r\,e^{i\theta/2}$. This is continuous, satisfies $q_0(w)^2=w$, and is holomorphic: for $h\to0$ with $w+h$ in the slit plane, $$\frac{q_0(w+h)-q_0(w)}h=\frac1{q_0(w+h)+q_0(w)}\longrightarrow\frac1{2q_0(w)}.$$ Set $\Omega=\mathbb C\setminus(-\infty,B]$ and $q(A)=q_0(A-B)q_0(A+B)$ for $A\in\Omega$. Both factors are defined and holomorphic there, $q(A)^2=A^2-B^2$, and $q(A)>0$ for real $A>B$. The domain is connected: each $A-B=re^{i\theta}$ with $-\pi<\theta<\pi$ can be joined inside it to $B+1$ by continuously changing $r$ to $1$ and $\theta$ to $0$. The integral $J(A)$ is holomorphic on $\Omega$. Indeed, on any compact subset its denominator is bounded away from zero, and the difference quotient of its integrand tends pointwise to $-\sin^2\theta/(A+B\cos\theta)^2$ with a uniform integrable bound; [F3] justifies passing that limit through the integral. The identity theorem [F2] extends the formula from real $A>B$ (which has limit points inside $\Omega$) to all $A\in\Omega$. In particular it applies to $A_z=A_0-z$, whose imaginary part is negative. [F2, F3, step 1.1, algebra]

3.1 Let $q=\sqrt{(1+\gamma-z)^2-4\gamma}$ on that branch. The substitution in step 1.1 and $1/[x(x-z)]=z^{-1}((x-z)^{-1}-x^{-1})$ give the transform of the continuous part as $[(A_z-q)-(A_0-|1-\gamma|)]/(2\gamma z)$. Adding the atom contributes $-(1-1/\gamma)_+/z$; simplifying in the cases $\gamma\le1$ and $\gamma>1$ gives $$m_\gamma(z)=\frac{1-\gamma-z-q}{2\gamma z}.$$ Since $q^2=(1-\gamma-z)^2-4\gamma z$, substitution verifies $\gamma z m_\gamma(z)^2+(z+\gamma-1)m_\gamma(z)+1=0$, Since step 1.1 gives a probability measure, $\operatorname{Im}m_\gamma(z)=\int\eta/|x-z|^2\,d\mu_\gamma(x)>0$. Thus $1+\gamma m_\gamma(z)\ne0$, and rearranging the quadratic gives the fixed-point equation in the Statement. [step 1.1, step 2.1, algebra]

4.1 For $x\ge0$, $\operatorname{Im}(z/(x-z))=\eta x/|x-z|^2\ge0$. Integrating this identity against the probability measure from step 1.1 gives $\operatorname{Im}(z m_\gamma(z))\ge0$, so $\operatorname{Im}(1-\gamma-z-\gamma z m_\gamma(z))=-\eta-\gamma\operatorname{Im}(z m_\gamma(z))\le-\eta$. [step 1.1, step 3.1, algebra] ∎
