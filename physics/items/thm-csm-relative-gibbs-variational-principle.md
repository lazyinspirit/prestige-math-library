---
id: thm-csm-relative-gibbs-variational-principle
kind: theorem
title: "Reference-relative entropy and Gibbs variational inequality"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-statistical-state-observable
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-csm-statistical-state-observable: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.3.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.5"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $(\Omega,\mathcal F,m)$ be a measure space and let $p,q$ be probability
densities relative to $m$, with $q>0$ almost everywhere on $\{p>0\}$. Define
the relative entropy
$$D(p\Vert q):=\int_{\{p>0\}}p\log(p/q)\,dm,$$
allowing $+\infty$. Then $D(p\Vert q)\ge0$, and equality holds exactly
when $p=q$ almost everywhere. For arbitrary probability densities, extend
$D(p\Vert q)$ to $+\infty$ if $\int_{\{q=0\}}p\,dm>0$.
In particular, let $H$ be extended-real measurable, finite $p$-almost
everywhere, let $\beta>0$, and suppose
$$0<Z=\int e^{-\beta H}dm<\infty,\quad q=Z^{-1}e^{-\beta H},\quad \int p|H|dm<\infty,\quad \int|p\log p|dm<\infty.$$
For $S[p]:=-k\int p\log p\,dm$ and $F:=-\beta^{-1}\log Z$, with $k>0$
and $\beta kT=1$, one has
$$D(p\Vert q)=\beta\bigl(\langle H\rangle_p-F-TS[p]\bigr)\ge0.$$
Write $\mathcal A$ for the probability densities satisfying these finite
energy and absolute entropy conditions. For every measurable $H$ with the
stated positive finite $Z$, define the **extended relative free energy** on
all probability densities by
$$\mathcal F_{\rm ext}[p]:=F+\beta^{-1}D(p\Vert q)\in[F,+\infty].$$
It agrees with $\langle H\rangle_p-TS[p]$ on $\mathcal A$ and has the
unique minimizer $q$, up to almost-everywhere equality, even when the
separate energy and entropy integrals of $q$ are not finite. Moreover,
$$\inf_{p\in\mathcal A}\bigl(\langle H\rangle_p-TS[p]\bigr)=F.$$
This infimum is attained if and only if
$\int q|H|dm<\infty$ and $\int|q\log q|dm<\infty$; in that case its
unique minimizer is $q$. Otherwise no density in $\mathcal A$ attains the
infimum. Products with a zero density are taken as zero on the forbidden
set, and densities may be redefined on null sets. These mathematical
claims do not derive a physical preparation.

## Facts & Assumptions

**Given:** Normalized densities $p,q$, positivity of $q$ on the support of
$p$, and, for the Gibbs identity, finite energy and entropy integrals.

[A1] $p,q\ge0$, $\int p\,dm=\int q\,dm=1$, and $q>0$ wherever $p>0$ up to
an $m$-null set.

[A2] In the Gibbs case, $H$ is extended-real measurable, $\beta>0$ and
$0<Z<\infty$. The finite formula is asserted for $p\in\mathcal A$, meaning
$\int p|H|dm<\infty$ and $\int|p\log p|dm<\infty$; the extended
functional does not require either integral to be finite.

[F1] The natural logarithm is defined on positive reals and has derivative
$1/x$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]).
In particular $\log 1=0$, and $\log(ab)=\log a+\log b$ for positive
$a,b$: for fixed $b$, the derivative of $\log(ab)-\log a$ is zero,
and its value at $a=1$ is $\log b$.

[F2] In the Gibbs clause, $q=Z^{-1}e^{-\beta H}$ is already assumed to be a
probability density relative to $m$ by the displayed hypotheses; no
exponential-family differentiation or finite-valued statistic result is
needed for the relative-entropy identity.

[F3] Entropy and expectations are integrals relative to the chosen measure
([[def-csm-statistical-state-observable]]).

## Proof

**Given:** [A1]–[A2] and the logarithm, normalized Gibbs-density and state
conventions [F1]–[F3].

1.1 For $x>0$, set $h(x)=x-1-\log x$. By [F1], $h'(x)=1-1/x$, which is negative for $0<x<1$ and positive for $x>1$; hence $h(x)\ge h(1)=0$, with equality only at $x=1$. On $\{p>0\}$ put $x=q/p$ to obtain $p\log(p/q)\ge p-q$. The negative part of the left integrand is integrable: where $q>p$, writing $x=q/p>1$ gives $p\log(q/p)=q(\log x)/x\le q$, since $h(x)\ge0$ implies $\log x\le x-1$ and $(x-1)/x\le1$. Therefore its integral is well-defined as an extended real number, and $$D(p\Vert q)\ge\int_{\{p>0\}}(p-q)\,dm =1-\int_{\{p>0\}}q\,dm\ge0.$$ [A1, F1, algebra]

2.1 If $D=0$, both nonnegative gaps in the last inequalities vanish: $q$ has no mass on $\{p=0\}$, and $h(q/p)=0$ $p$-almost everywhere. The strict equality case in step 1.1 gives $q=p$ on $\{p>0\}$, hence $p=q$ almost everywhere. Conversely, if $p=q$ almost everywhere then the defining integrand is zero and $D=0$. [A1, step 1.1]

3.1 In the Gibbs case, [F2] and [A2] give $\log q=-\beta H-\log Z$ $p$-almost everywhere, so all terms below are integrable and $$D(p\Vert q)=\int p\log p\,dm+\beta\langle H\rangle_p+\log Z =\beta\left(\langle H\rangle_p+\beta^{-1}\int p\log p\,dm-F\right).$$ Since $S[p]=-k\int p\log p\,dm$ and $\beta^{-1}=kT$, the middle term is $-TS[p]$. Nonnegativity and the equality condition follow from steps 1.1 and 2.1. [A2, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 If a density gives positive mass to $\{q=0\}$, its extended $D$ is $+\infty$ by definition; otherwise step 1.1 applies after removal of null sets. Thus $\mathcal F_{\rm ext}\ge F$ for every probability density. The density $q$ is allowed here without any energy or entropy integrability assumption: directly $D(q\Vert q)=0$, so $\mathcal F_{\rm ext}[q]=F$. Step 2.1 gives uniqueness. Step 3.1 proves agreement with the original finite formula on $\mathcal A$, without assigning any meaning to an undefined difference $+\infty-\infty$. [A2, F2, step 1.1, step 2.1, step 3.1]

5.1 Let $Q(B):=\int_Bq\,dm$. Positive finite $Z$ implies $H$ is finite $Q$-almost everywhere: $H=+\infty$ has zero Gibbs weight, while $H=-\infty$ can occur only on an $m$-null set, since its exponential weight is infinite. Set $A_n:=\{|H|\le n\}$ and $c_n:=Q(A_n)$. Then $c_n\uparrow1$. Indeed the disjoint sets $A_1,A_2\setminus A_1,\ldots$ cover the finite-energy set, so countable additivity of the probability measure $Q$ makes their partial sums $c_n$ converge to $1$. For every sufficiently large $n$, $c_n>0$ and $p_n:=q\mathbf1_{A_n}/c_n$ is a probability density. On its support $|H|\le n$ and $\log p_n=-\beta H-\log Z-\log c_n$ is bounded, so $p_n\in\mathcal A$. Moreover $p_n/q=1/c_n$ on that support, hence $$D(p_n\Vert q)=-\log c_n\longrightarrow0.$$ The limit follows from the continuity of the logarithm at $1$ supplied by [F1]. Step 3.1 now gives finite free energies $F-\beta^{-1}\log c_n\to F$, proving the stated infimum. Equality for any $p\in\mathcal A$ forces $p=q$ almost everywhere by step 2.1; consequently it is attained exactly when $q\in\mathcal A$, which is precisely the two stated integrability conditions. [A2, F1, F2, F3, step 2.1, step 3.1, algebra] ∎

