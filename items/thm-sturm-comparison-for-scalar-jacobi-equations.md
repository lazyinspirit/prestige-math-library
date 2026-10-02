---
id: thm-sturm-comparison-for-scalar-jacobi-equations
kind: theorem
title: Sturm comparison for scalar jacobi equations
status: published
origin: pipeline
deps:
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-algebra-of-derivatives
  - lem-sign-preservation-near-a-limit
  - cor-mean-value-theorem
  - def-complete-ordered-field
  - thm-dedekind-complete
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lemma 24.2.2, §24.2, printed pp.176–177: the Sturm comparison lemma"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, pp.12–14: scalar comparison of the solutions of the Jacobi equation"
---

## Statement

Let $L>0$ and let $a,b:[0,L]\to\mathbb R$ be continuous functions with
$a(t)\le b(t)$ for every $t\in[0,L]$. Let $u,v:[0,L]\to\mathbb R$ be twice
continuously differentiable solutions of
$$u''+a\,u=0,\qquad v''+b\,v=0\qquad\text{on }[0,L],$$
with the common initial data
$$u(0)=v(0)=0,\qquad u'(0)=v'(0)=c>0.$$
Let $\tau\ge0$ be the first positive zero of $v$ when $v$ has one in $(0,L]$
and put $\tau:=+\infty$ when it does not; thus $v(t)>0$ for every
$t\in(0,L]$ with $t<\tau$ and, when $\tau\le L$, $v(\tau)=0$. Then:

1. $v(t)>0$ and $u(t)\ge v(t)>0$ for every $t\in(0,L]$ with $t<\tau$;
2. $u$ has no zero in $(0,L]$ before $\tau$; when $\tau\le L$ one has
   $u(\tau)\ge v(\tau)=0$, so the first positive zero of $u$ is no earlier
   than $\tau$.

The result concerns two scalar ordinary differential equations on a closed
interval. It uses no manifold, no completeness hypothesis and no choice
principle: only the pointwise ordering $a\le b$ of the coefficients, the common
positive initial slope and the two equations enter. The positivity $c>0$ is
essential for the direction stated; the degenerate initial slope $c=0$ admits
the solution $u\equiv v\equiv0$, for which no inequality of the statement is
asserted.

## Facts & Assumptions

**Given:** A length $L>0$, continuous functions $a,b:[0,L]\to\mathbb R$ with $a\le b$ pointwise, twice continuously differentiable $u,v$ solving $u''+au=0$ and $v''+bv=0$ on $[0,L]$, the common initial data $u(0)=v(0)=0$, $u'(0)=v'(0)=c>0$, and the first positive zero $\tau$ of $v$ as in the Statement.

[F1] Differentiation is linear and the product rule holds: for differentiable $f,g$ one has $(fg)'=f'g+fg'$ and $(f\pm g)'=f'\pm g'$, and these rules apply on an interval ([[thm-algebra-of-derivatives]]). In particular $h:=u'v-uv'$ is differentiable on $[0,L]$ with $h'=u''v-uv''$.

[F2] Sign preservation and the mean value theorem: a function $w$ continuous at $0$ with $w(0)=c>0$ satisfies $w\ge c/2>0$ on some interval $[0,\delta]$, and if $w$ is continuous on $[0,t]$ and differentiable on $(0,t)$ then $w(t)-w(0)=w'(\xi)\,t$ for some $\xi\in(0,t)$; consequently $u(t)=u'(\xi)t>0$ and $v(t)=v'(\eta)t>0$ for all sufficiently small $t>0$ ([[lem-sign-preservation-near-a-limit]], [[cor-mean-value-theorem]]).

[F3] The real numbers have the least-upper-bound property: every nonempty set of reals that is bounded above has a least upper bound ([[def-complete-ordered-field]], [[thm-dedekind-complete]]).

[F4] Model data for a positive constant coefficient $k$: $\operatorname{sn}_k''+k\,\operatorname{sn}_k=0$ on $\mathbb R$ with $\operatorname{sn}_k(0)=0$ and $\operatorname{sn}_k'(0)=1$ ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]), while $\operatorname{sn}_k(t)>0$ for $0<t<\pi/\sqrt k$ and $\operatorname{sn}_k(\pi/\sqrt k)=0$ ([[def-comparison-sine-cosine-and-cotangent-functions]]).

## Proof

1.1 The reduced Wronskian identity. [F1, given]
Define $h(t):=u'(t)v(t)-u(t)v'(t)$ on $[0,L]$. By [F1] the product rule applies to both terms and the two differential equations give $$h'=u''v+u'v'-u'v'-uv''=(-au)v-u(-bv)=(b-a)uv.$$ At the left endpoint, $h(0)=u'(0)v(0)-u(0)v'(0)=c\cdot0-0\cdot c=0$. [F1, given]

1.2 Both solutions are positive immediately to the right of $0$, and the quotient has limit $1$. [F2, given]
The functions $u'$ and $v'$ are continuous at $0$ with $u'(0)=v'(0)=c>0$, so [F2] yields $\delta>0$ with $u'\ge c/2>0$ and $v'\ge c/2>0$ on $[0,\delta]$. For $0<t<\delta$ the mean value theorem in [F2] applied to $u$ and to $v$ on $[0,t]$ produces $\xi,\eta\in(0,t)$ with $u(t)=u'(\xi)t>0$ and $v(t)=v'(\eta)t>0$. Hence the quotient $f:=u/v$ is defined on $(0,\delta)$, and since $u(t)/t\to u'(0)$ and $v(t)/t\to v'(0)$ as $t\downarrow0$ by the definition of the one-sided derivative at the endpoint, $$f(t)=\frac{u(t)/t}{v(t)/t}\longrightarrow\frac{u'(0)}{v'(0)}=1\qquad(t\downarrow0).$$ [F2, given]

2.1 The inequality propagates up to the supremum of the set of times where it holds. [F3, step 1.1, step 1.2]
Put $$A:=\{\,t\in(0,L]:u(s)\ge v(s)>0\ \text{for every }s\in(0,t]\,\}.$$ This set is nonempty: on the initial interval of step 1.2 both solutions
are positive, so step 1.1 gives $h^\prime=(b-a)uv\ge0$. The mean value
theorem and $h(0)=0$ give $h\ge0$ there. Therefore
$(u/v)^\prime=h/v^2\ge0$, and the limit $u/v\to1$ gives $u\ge v$
throughout this initial interval. Any sufficiently small positive endpoint
thus belongs to $A$. The set is bounded above by $L$, so $T:=\sup A$ exists in $\mathbb R$ by [F3] and $0<T\le L$. For every $s\in(0,T)$ choose $t\in A$ with $s<t$, which is possible because $T$ is the least upper bound of $A$; then $u(s)\ge v(s)>0$. Hence $uv\ge0$ on $(0,T)$, and step 1.1 together with $a\le b$ gives $h'=(b-a)uv\ge0$ on $(0,T)$. Since $h(0)=0$ by step 1.1, the mean value theorem in [F2] applied on $[0,s]$ yields $h(s)=h'(\xi)s\ge0$ for every $s\in(0,T)$, so $h\ge0$ on $(0,T)$. The denominator $v$ is positive on $(0,T)$, so the quotient rule in [F1] together with step 1.1 gives $$f'=\frac{u'v-uv'}{v^{2}}=\frac{h}{v^{2}}\ge0\qquad\text{on }(0,T),$$ that is, $f$ is nondecreasing on $(0,T)$. For fixed $s\in(0,T)$ and $0<t<s$ this gives $f(s)\ge f(t)$, and letting $t\downarrow0$ in the limit of step 1.2 yields $f(s)\ge1$, that is, $u(s)\ge v(s)$. [F1, F2, F3, step 1.1, step 1.2]

3.1 The supremum reaches the first zero of $v$ or the domain endpoint. [step 2.1]
Put $\tau_L:=\min\{\tau,L\}$. We claim $T\ge\tau_L$. Suppose instead $T<\tau_L$, so that $T<L$ and $T<\tau$, and since $\tau$ is the first positive zero of $v$, one has $v>0$ on $(0,T]$; put $d:=v(T)>0$. From $u\ge v$ on $(0,T)$ and continuity of $u$ and $v$ at $T$ we get $u(T)\ge v(T)=d$. Choose $\varepsilon>0$ with $T+\varepsilon<L$ and with $u>d/2>0$ and $v>d/2>0$ on $[T,T+\varepsilon]$, possible by continuity. Then $uv\ge0$ on $(0,T+\varepsilon)$: on $(0,T)$ because $u\ge v>0$, and on $(T,T+\varepsilon)$ because both factors are positive there. By step 1.1, $h'\ge0$ on $(0,T+\varepsilon)$, and from $h(0)=0$ the mean value theorem in [F2] gives $h\ge0$ on $(0,T+\varepsilon)$. Since $v>0$ on $(0,T+\varepsilon)$, the quotient rule and step 1.1 give $f'=h/v^{2}\ge0$ on $(0,T+\varepsilon)$; monotonicity of $f$ together with the limit $f(0+)=1$ of step 1.2 then gives $u(s)\ge v(s)$ for every $s\in(0,T+\varepsilon)$. As $v>0$ on $(T,T+\varepsilon)$, every $t$ with $T<t<T+\varepsilon$ satisfies $t\in A$, contradicting the definition of $T$ as an upper bound of $A$. Therefore $T\ge\tau_L$. For every $t\in(0,\tau_L)$, step 2.1 gives $u(t)\ge v(t)>0$. If $\tau_L=L<\tau$, continuity extends $u\ge v>0$ to $t=L$; if $\tau_L=\tau\le L$, continuity gives $u(\tau)\ge v(\tau)=0$. This proves the stated conclusions on the domain $[0,L]$. [step 2.1]

4.1 The first positive zero of $u$ is no earlier than $\tau$. [step 3.1]
If $v$ has no zero in $(0,L]$, then $\tau=+\infty$ and step 3.1 gives $u(t)\ge v(t)>0$ on all of $(0,L]$; in particular neither $u$ nor $v$ has a positive zero. If $v$ has a zero in $(0,L]$, let $\tau$ be its first one: by step 1.2 the zero set lies in $[\delta,L]$ for some $\delta>0$; it is a nonempty closed subset of this compact interval, so it has a minimum $\tau$ with $v(\tau)=0$, and no zero lies in $(0,\tau)$. Since $u\ge v$ on $(0,\tau)$ by step 3.1 and $u$ is continuous, passing to the limit gives $u(\tau)\ge v(\tau)=0$. Hence $u>0$ on $(0,\tau)$, and its first positive zero, when it exists, is at least $\tau$. [step 3.1]

5.1 Model case and boundary conventions. [F4, step 4.1]
For $a\equiv b\equiv k>0$ and $u=v=\operatorname{sn}_k$, [F4] shows that both equations hold with common initial slope $c=1$, and step 4.1 recovers $\operatorname{sn}_k>0$ on $(0,\pi/\sqrt k)$. For the comparison form, let $k>0$ and suppose the coefficient of a given solution $v$ satisfies $b(t)\le k$ for all $t$; take the pair of the theorem to be the given $v$ and $c\,\operatorname{sn}_k$: the first member solves $w''+b\,w=0$, the second solves $w''+k\,w=0$ by [F4] and has initial slope $c\cdot1=c$, and $b\le k$ is the required pointwise ordering. Step 4.1, applied only on the common domain $[0,L]$, shows that $v$ has no zero on $(0,\min\{L,\pi/\sqrt k\})$; if $L<\pi/\sqrt k$, it is positive also at $L$, and if $L\ge\pi/\sqrt k$, its first zero on $[0,L]$ is no earlier than $\pi/\sqrt k$. The interval is one-sided at $0$, where the initial data and the one-sided derivatives live; the endpoint $L$ enters only through the convention for $\tau$. The degenerate coefficient $b\equiv0$ admits $v(t)=ct$, which solves the equation and has no positive zero, so the statement is consistent in the flat case. The excluded case $c=0$ has the zero solution and no comparison content, and the empty interval is excluded by $L>0$. No manifold, no indexed family of solutions and no selection principle occur, so the argument is choice-free. [F4, step 4.1] ∎
