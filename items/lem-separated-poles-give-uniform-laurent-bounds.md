---
id: lem-separated-poles-give-uniform-laurent-bounds
kind: lemma
title: "Uniform Laurent bounds from separated poles on a shrinking disc"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2, §5.2.12; conditional complex-analytic elaboration of the Laurent-coefficient step"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Fix $a>0$, $A\ge1$, $0<c\le1$, and $B,b,\eta\ge0$. Let $C\ge1$, $0<h\le1$, $M\ge0$, and integers $0\le p\le m\le4$ be given. Set
$$\lambda=\log(eC),\qquad \kappa=\min(1/4,c/(4A)),\qquad r=\kappa\min(h,\lambda^{-1}).$$
For $1\le i\le m$, let $a\le|\alpha_i|\le A$. Suppose $\beta_i=0$ for $i\le p$ and $|\beta_i|\ge ch$ for $p<i\le m$. Let $N$ be holomorphic on an open neighborhood of $\{w:|w|\le2r\}$, with
$$|N(w)|\le M C^\eta\lambda^b\exp(B|w|\lambda)\qquad(|w|\le2r).$$
Define, wherever the denominator is nonzero,
$$L(w)=\frac{N(w)}{\prod_{i=1}^{m}(\alpha_i w+\beta_i)}.$$
Empty products equal one. Then $L$ has a Laurent expansion at zero with pole order at most $p$, and
$$L(w)=\sum_{j=0}^{4}\ell_{-j}w^{-j}+O(|w|).$$
Here $\ell_{-j}=0$ for $j>p$, and a constant $K$ depending only on $a,A,c,B$ satisfies
$$|\ell_{-j}|\le K M C^\eta h^{-(m-j)}\lambda^{b+p-j}\qquad(0\le j\le p).$$
In particular, for each $\epsilon>0$ there is $K_\epsilon$ depending only on $a,A,c,B,b,\epsilon$ such that
$$|\ell_{-j}|\le K_\epsilon M C^{\eta+\epsilon}h^{-4}\qquad(0\le j\le4).$$
The remainder constant and its radius need not be uniform in the data. The hypotheses about $N$, pole factors, and separation are supplied analytic assumptions. No assertion about an automorphic L-function satisfying them is part of this lemma.

## Statement references

[Michel–Venkatesh, §5.2.12, printed p.106](https://arxiv.org/pdf/0903.3591v2). The statement isolates a sufficient analytic mechanism for that coefficient step, rather than asserting the source's automorphic hypotheses.

[[thm-laurent-expansion-annulus]]

[[thm-laurent-coefficient-formula-and-uniqueness]]

## Facts & Assumptions

**Given:** The parameters, rational factorization, holomorphy, numerator estimate, and separated pole factors in the Statement. All logarithms are natural. No choice principle is used.

[F1] A holomorphic function on a complex annulus has a locally uniformly convergent Laurent expansion, by [[thm-laurent-expansion-annulus]].

[F2] The coefficient of $w^n$ in that expansion is $(2\pi i)^{-1}\int_{|w|=\rho}f(w)w^{-n-1}\,dw$ for every circle within the annulus, by [[thm-laurent-coefficient-formula-and-uniqueness]].

## Proof

**Given:** The data of the Statement, and [F1]–[F2].

1.1 Since $\lambda\ge1$ and $r\le\kappa h$, for $i>p$ and $|w|\le2r$ the reverse triangle inequality gives $|\alpha_iw+\beta_i|\ge ch-2Ar\ge ch/2>0$. Thus $g(w):=w^pL(w)=N(w)(\prod_{i\le p}\alpha_i)^{-1}\prod_{i>p}(\alpha_iw+\beta_i)^{-1}$ extends holomorphically to a neighborhood of the closed radius-$2r$ disc. In particular, $L$ is holomorphic on $0<|w|<2r$. [given, algebra]

2.1 On $|w|=r$, the numerator bound and $r\lambda\le\kappa$ give $|g(w)|\le E$, where $E=M C^\eta\lambda^b e^{B\kappa}a^{-p}(2/c)^{m-p}h^{-(m-p)}$. Also $g$ is bounded on a sufficiently small closed disc about zero by continuity. [step 1.1, given, algebra]

3.1 Apply [F1]–[F2] to $g$ on $0<|w|<2r$, writing its Laurent coefficients as $d_n$. Parameterizing a radius-$\rho$ circle by $w=\rho e^{it}$ gives $|d_n|\le\sup_{|w|=\rho}|g(w)|\rho^{-n}$: this follows by the triangle inequality for the integral in [F2], whose parameter interval has length $2\pi$. For $n<0$, boundedness of $g$ near zero and $\rho\to0$ force $d_n=0$. For $n\ge0$, take $\rho=r$ to obtain $|d_n|\le Er^{-n}$. Hence $g(w)=\sum_{n\ge0}d_nw^n$, and division by $w^p$ proves the pole-order assertion with $\ell_{-j}=d_{p-j}$ for $0\le j\le p$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 For $n=p-j\ge0$, the inequalities $h\le1$ and $\lambda\ge1$ give $r^{-n}=\kappa^{-n}\max(h^{-n},\lambda^n)\le\kappa^{-n}h^{-n}\lambda^n$. Substituting this and step 2.1 into $|d_n|\le Er^{-n}$ proves the first coefficient bound. For example one may take $K=e^{B\kappa}\max(1,a^{-4})(2/c)^4\kappa^{-4}$; this works simultaneously for every $m,p,j$ under consideration. [step 3.1, step 2.1, given, algebra]

5.1 Put $d=b+4$ and $x=\log C\ge0$. The function $(1+x)^d e^{-\epsilon x}$ has a finite supremum $H_{d,\epsilon}$ on $[0,\infty)$: its logarithmic derivative is $d/(1+x)-\epsilon$, so its maximum occurs at $x=\max(0,d/\epsilon-1)$. Thus $\lambda^{b+p-j}\le\lambda^{b+4}\le H_{d,\epsilon}C^\epsilon$. Also $0\le m-j\le4$ implies $h^{-(m-j)}\le h^{-4}$. The second coefficient bound follows with $K_\epsilon=K H_{d,\epsilon}$; the coefficients with $j>p$ vanish. [step 4.1, given, algebra]

6.1 For $|w|\le r/2$, the coefficient bound from step 3.1 gives $|\sum_{n\ge p+1}d_nw^{n-p}|\le E r^{-(p+1)}|w|\sum_{q\ge0}(|w|/r)^q\le2E r^{-(p+1)}|w|$. Removing these terms from $L=w^{-p}g$ gives exactly the stated finite expansion with an $O(|w|)$ remainder. This also covers $p=m=0$, $C=1$, and $M=0$; $h=0$ is excluded. [step 3.1, step 5.1, given, algebra] ∎

## Application boundary

For the intended source application use $w=\overline t$, $(s,t)=(t/2,t)$, $h=|z|$ in its small nonzero range, and a conductor parameter comparable to the required product of conductors. The bound for a pole-cleared numerator on the shrinking disc, the exact factors for every sign choice, and the separation of every nonzero pole are still to be proved for the actual partial L-functions. Any missing Euler factors or normalizing factors must be included in $N$ with proved bounds. The lemma gives no control on them merely from their names. In particular, a bound only on the imaginary axis away from zero does not meet the numerator hypothesis. No regularized spectral identity, local-product bound, or removal of a conductor loss follows from this lemma.
