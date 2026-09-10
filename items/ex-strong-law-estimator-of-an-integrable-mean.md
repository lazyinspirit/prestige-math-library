---
id: ex-strong-law-estimator-of-an-integrable-mean
kind: example
title: Strong law estimator of an integrable mean
deps: ["thm-kolmogorov-iid-l1-strong-law", "cor-countable-independent-copies-exist", "thm-probability-law-and-distribution-function-correspondence", "cor-layer-cake-formulas-for-random-variables", "thm-layer-cake-formula-for-l-p-powers", "def-real-power", "thm-real-power-continuity-and-derivatives", "def-countable-choice", "def-axiom-of-choice", "thm-ftc-second-part", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-measure-uniqueness-on-a-sigma-finite-pi-system", "def-dependent-choice", "thm-recursion"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. The probability law with $F(x)=0$ for $x<1$ and $F(x)=1-x^{-3/2}$ for $x\ge1$ has density $\rho(x)=(3/2)x^{-5/2}\mathbf1_{[1,\infty)}(x)$, mean 3 and infinite second moment. The sample means of IID copies converge almost surely to 3.

## Facts & Assumptions

[F1] [[thm-real-power-continuity-and-derivatives]]: For $a>0$, the function $x\mapsto a^x$ is continuous on $\mathbb R$ and
$$(a^x)'=a^x\log a.$$
For $\alpha\in\mathbb R$, the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$, with
$$(x^\alpha)'=\alpha x^{\alpha-1}.$$

[F2] [[thm-probability-law-and-distribution-function-correspondence]]: Assume the Axiom of Countable Choice.

1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let
   $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous,
   satisfies
   $$\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$$
   and obeys
   $$\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$$
2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and
   right-continuous with
   $$\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$$
   then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such
   that
   $$\mu((a,b])=F(b)-F(a)\qquad(a<b),$$
   equivalently
   $$F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$$

[F3] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: Let $f:X\to[0,+\infty]$ be measurable and define
$$\nu_f(A):=\int_A f\,d\mu \qquad (A\in\mathcal A).$$
Then $\nu_f$ is a measure on $(X,\mathcal A)$.

[F4] [[thm-continuous-implies-integrable]]: Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
(def-continuity-real). Then $f$ is bounded (def-bounded-set) and Riemann
integrable on $[a,b]$ (def-darboux-integral).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/N$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

[F5] [[thm-ftc-second-part]]: Let $a < b$ be reals, let $G : [a,b] \to \mathbb{R}$ be differentiable at every
point of $[a,b]$ as a function on $[a,b]$ (def-derivative; at $a$ and $b$
this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable
on $[a,b]$ (def-darboux-integral). Then

$$\int_a^b f \;=\; G(b) - G(a) .$$

**Both hypotheses are needed and neither is removable.** A function may be
differentiable everywhere with $G'$ not integrable — then the left-hand side does
not exist (an everywhere differentiable function with unbounded derivative) — and an
integrable $f$ need not be the derivative of anything
(the sign function); both witnesses are on the
companion page.

**No continuity of $f$ is assumed**, which is what makes this the working form:
the theorem evaluates $\int_a^b f$ for every integrable derivative, not only for
continuous integrands.

[F6] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: Assume the Axiom of Countable Choice. Let $a<b$ and let $f:[a,b]\to\mathbb R$ be
bounded and Riemann integrable. Then $f$ is Lebesgue measurable on $[a,b]$ and
is integrable there, and its Lebesgue integral equals its Riemann integral:
$$\int_{[a,b]} f\,d\lambda_1=\int_a^b f(x)\,dx.$$

This is the point at which the completeness of Lebesgue measure is used
essentially: the proof obtains a Borel function equal to $f$ almost everywhere,
and measurability of $f$ itself is then a completeness statement.

[F7] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

[F8] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: Let $\mathcal P$ be a $\pi$-system on $X$ generating $\mathcal A$, and let $\mu,\nu$ be measures on $(X,\mathcal A)$ that agree on $\mathcal P$. Suppose there is an increasing sequence $(P_n)$ in $\mathcal P$ with

$$X=\bigcup_nP_n,\qquad \mu(P_n)=\nu(P_n)<+\infty\quad(n\in\mathbb N).$$

Then $\mu=\nu$ on $\mathcal A$.

[F9] [[cor-layer-cake-formulas-for-random-variables]]: Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space.

1. If $X:\Omega\to[0,+\infty]$ is measurable, then
   $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt,$$
   where the right-hand side may be $+\infty$.
2. If $X$ is an integrable real random variable, then
   $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt-\int_0^\infty \mathbb P(X<-t)\,dt.$$

[F10] [[thm-layer-cake-formula-for-l-p-powers]]: Let $(X,\mathcal A,\mu)$ be a measure space, let $f : X \to \mathbb C$ be
measurable, and let $0<p<\infty$. Then
$$\int_X |f|^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{|f|>t\})\,dt = p\int_0^\infty t^{p-1}A_f(t)\,dt,$$
where either side may be $+\infty$.

[F11] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F12] [[def-dependent-choice]]: Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a function $x : \mathbb{N} \to X$ (def-function,
> def-natural-numbers) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

Here a sequence in $X$ means a function from $\mathbb{N}$ to $X$, not necessarily
a real-valued sequence. As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** def-choice-function and
def-axiom-of-choice select one element from each member of a family that is
fixed in advance, and def-countable-choice does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense (def-chain). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

[F13] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$
on $(S,\Sigma)$ is the common law of a countable independent family of
$S$-valued random elements.

[F14] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 F1 makes F continuous at 1 and on each side, nondecreasing, and gives its limits 0 and 1 at infinity. AC implies CC by choosing from each member of a countable nonempty family, so F2 constructs its unique probability law. [F1, F2]

2.1 The displayed nonnegative Borel density defines a measure by F3. On [1,R], F4 and F5 with primitive $-x^{-3/2}$ give $\int_1^R\rho(x)\,dx=1-R^{-3/2}$. F6 applies under the CC from step 1.1. F7 extends these nonnegative compact integrals to total mass one. The same calculation on every interval gives the increments of F; F8 on finite intervals identifies the density measure with the law in step 1.1. [F3, F4, F5, F6, F7, F8, step 1.1]

3.1 The tail is $P(X>t)=1$ for $0\le t<1$ and $t^{-3/2}$ for $t\ge1$. F9 and F10 give $\mathbb EX=1+\int_1^\infty t^{-3/2}\,dt$ and $\mathbb EX^2=1+2\int_1^\infty t^{-1/2}\,dt$. The primitives $-2t^{-1/2}$ and $2\sqrt t$ evaluate compact integrals as $2(1-R^{-1/2})$ and $2(\sqrt R-1)$. The compact comparison and increasing-truncation argument in step 2.1 therefore give $\mathbb EX=3$ and $\mathbb EX^2=\infty$. [F9, F10, step 2.1]

4.1 For any entire relation R, AC selects a successor function s and F11 iterates it from an arbitrary prescribed starting point; this proves F12. Together with the CC from step 1.1 it licenses F13. Apply F14 to these copies: step 3.1 verifies integrability with mean 3, although the second moment is infinite. [F11, F12, F13, F14, step 1.1, step 3.1] ∎
