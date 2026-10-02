---
id: def-nevanlinna-truncated-and-ramification-counts
kind: definition
title: "Truncated value and ramification counts"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-counting-proximity-and-characteristic
  - thm-nevanlinna-quantities-well-defined
  - thm-zero-order-factorization-holomorphic-function
  - thm-pole-characterizations
  - thm-poles-meromorphic-function-are-discrete-and-countable
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-complex-derivative-on-a-domain-implies-constant
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§4 equation (17), printed p. 9: $n_1=n_{f'}(r,0)+2n_f(r,\\infty)-n_{f'}(r,\\infty)$; §§4–6 for the truncated counts"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1–2, printed pp. 87–98: the $\\bar n$, $n_1$ and $N_1$ conventions"
---

## Definition

Let $f$ be a nonconstant meromorphic function on $\mathbb C$ and let
$a\in\widehat{\mathbb C}$ be a sphere target. Fix $r>0$ and let $D_r$ be the
closed disc $|z|\le r$. Counting conventions and the integrated count
$N(r,a;f)$ follow [[def-nevanlinna-counting-proximity-and-characteristic]];
its centre-regularized integral is

$$ N(r,a;f)=n(0,a;f)\log r+\int_0^r\frac{n(t,a;f)-n(0,a;f)}{t}\,dt. $$

**Truncated and weighted counts at one target.** For finite $a$, write the
$a$-points of $f$ in $D_r$ as the finite set of distinct points $b$ with local
degree $m_b$, so that $m_b\ge1$ is the order of the zero of $f-a$ at $b$; for
$a=\infty$ write the poles in $D_r$ as $p$ with pole order $m_p$. Put

$$\bar n(r,a;f):=\#\{b\in D_r: f(b)=a\}\quad(a\ne\infty),\qquad \bar n(r,\infty;f):=\#\{p\in D_r:p\text{ a pole}\},$$

the number of distinct $a$-points counted once, and

$$n_1(r,a;f):=\sum_{b\in D_r,\ f(b)=a}(m_b-1)\quad(a\ne\infty),\qquad n_1(r,\infty;f):=\sum_{p\in D_r}(m_p-1),$$

the same points counted with weight "local degree minus one". The corresponding
integrated quantities use the same centre regularization:

$$ \bar N(r,a;f)=\bar n(0,a;f)\log r+\int_0^r\frac{\bar n(t,a;f)-\bar n(0,a;f)}{t}\,dt, $$

$$ N_1(r,a;f)=n_1(0,a;f)\log r+\int_0^r\frac{n_1(t,a;f)-n_1(0,a;f)}{t}\,dt . $$

Then $n(r,a;f)=\bar n(r,a;f)+n_1(r,a;f)$ for every $r>0$ and every sphere
target $a$, and consequently

$$ N(r,a;f)=\bar N(r,a;f)+N_1(r,a;f). $$

**Ramification of the sphere map.** Let $m_b\ge1$ denote the local degree of
the meromorphic sphere map $f$ at $b$: for a non-pole $b$, this is the order of
the zero of $f-f(b)$ at $b$, and at a pole it is the pole order. Call $b$ a
ramification point when $m_b\ge2$ and put

$$n_1(t,f):=\sum_{b\in D_t,\ m_b\ge2}(m_b-1),\qquad N_1(r,f):=n_1(0,f)\log r+\int_0^r\frac{n_1(t,f)-n_1(0,f)}{t}\,dt,$$

the integrated count of all ramification points of the sphere map $f$, each
weighted by its local degree minus one. The symbols $\bar N$ and $N_1$ are
reserved for these counts; the unbarred $N$ keeps full multiplicity.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$, a sphere target $a$, and $r>0$.

[F1] $n(r,a;f)$ counts local multiplicities on the closed disc $|z|\le r$ with poles counted for $a=\infty$, and $N$ is its centre-regularized integral ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The counts $n(r,a;f)$ are finite for every bounded disc, and $N(r,a;f)$ is finite for every $r>0$ ([[thm-nevanlinna-quantities-well-defined]]).

[F3] A zero of finite order $m$ factors locally as $(z-b)^mh(z)$ with $h(b)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F4] A pole of order $m$ has a reciprocal with a zero of order $m$, and $|f(z)|\to\infty$ as $z$ tends to the pole ([[thm-pole-characterizations]]).

[F5] Every pole of a meromorphic function is isolated, and the pole set is closed and discrete ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F6] A holomorphic function with $f'=0$ throughout a complex domain is constant there ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** verify that the local-degree weights add up to the full
multiplicity, then show that $f'\not\equiv0$ so that the ramification points
form a locally finite divisor.

1.1 At a finite target $a$ and a point $b\in D_r$ with $f(b)=a$, [F3] writes $f-a=(z-b)^{m_b}h$ with $h(b)\ne0$ and $m_b\ge1$; the point contributes $1$ to $\bar n$ and $m_b-1$ to $n_1$, hence $m_b$ to their sum, matching its contribution to $n$. At $a=\infty$, [F4] gives a pole of order $m_p$ contributing $1$ and $m_p-1$; summing the finitely many points of $D_r$ gives $n(r,a;f)=\bar n(r,a;f)+n_1(r,a;f)$. [F1, F3, F4, algebra]

1.2 The derivative satisfies $f'\not\equiv0$: if $f'\equiv0$, then $f$ is holomorphic with zero derivative on $\Omega=\mathbb C\setminus P$, where $P$ is the pole set, and $\Omega$ is a domain because [F5] makes $P$ closed and discrete, so $P\ne\mathbb C$ and any two points of $\Omega$ are joined by a polygonal path that meets $P$ in only finitely many points and can be detoured around them. By [F6], $f$ is constant, say $f=c$, on $\Omega$. Near a pole $p\in P$ it would then follow from [F4] that $|f|\to\infty$, contradicting $f=c$ on a punctured neighbourhood of $p$; so $P=\varnothing$ and $f\equiv c$ on $\mathbb C$, contradicting nonconstancy. [F4, F5, F6, algebra]

2.1 Since $0\le\bar n(r,a;f)\le n(r,a;f)$ and $0\le n_1(r,a;f)\le n(r,a;f)$ pointwise by step 1.1, and $n(r,a;f)$ is finite on every bounded disc, both $\bar n$ and $n_1$ are finite there. [F2, step 1.1, algebra]

2.2 The zeros of $f'$ are locally finite and do not accumulate at poles. At a pole $p$ of order $m$, [F4] gives a local representation $f=(z-p)^{-m}g$ with $g$ holomorphic and $g(p)\ne0$, so $f'=(z-p)^{-m-1}\bigl(-mg+(z-p)g'\bigr)$ has a pole of order $m+1$ there and no zero in a small punctured neighbourhood. Away from the poles $f'$ is holomorphic and, by step 1.2, not identically zero on the domain $\mathbb C\setminus P$; hence its zeros are isolated ([[thm-isolated-zeros-holomorphic-function]]). A set of isolated points with no accumulation point in $\mathbb C$ has only finitely many members in each bounded closed disc: otherwise a sequence of distinct zeros in the disc would converge, by compactness, to a limit that is an accumulation point. [F4, F5, step 1.2, algebra]

2.3 Since $n=\bar n+n_1$ pointwise by step 1.1, including at the centre $z=0$, and since $n_1(t,a;f)\le n(t,a;f)$ is finite for every $t>0$ by [F2], subtracting the centre terms and integrating against $dt/t$ gives $N(r,a;f)=\bar N(r,a;f)+N_1(r,a;f)$ for every $r>0$; the definition of $N_1(r,f)$ uses the same centre regularization as the displayed formulas. [F1, F2, step 1.1, algebra]

3.1 The ramification points of the sphere map are exactly the zeros of $f'$ together with the poles of order at least two. At a non-pole point $b$ where [F3] gives $f-f(b)=(z-b)^m h$ with $h(b)\ne0$ and $m\ge1$, the product rule gives $f'=(z-b)^{m-1}\bigl(mh+(z-b)h'\bigr)$ with $mh(b)\ne0$, so $f'$ has a zero of order exactly $m-1$ at $b$; hence $m\ge2$ exactly when $f'(b)=0$, and then the ramification weight $m-1$ equals the zero order of $f'$. At a pole of order $m$, the representation of step 2.2 shows that the local degree is $m$ and the weight $m-1$, while $f'$ has no zero there. Therefore $n_1(t,f)=n(t,0;f')+\sum_{|p|\le t}(m_p-1)$ for every $t>0$, and this is finite by [F2] and step 2.2. [F2, F3, F4, step 2.2, algebra]

4.1 Steps 1.1 and 2.3 give the pointwise and integrated identities, and steps 2.1, 2.2 and 3.1 show that every count introduced above is finite on each bounded disc and that the ramification points form a locally finite divisor, so the definition is well posed. [step 2.1, step 2.2, step 2.3, step 3.1] ∎
