---
id: thm-mahler-expansion-for-continuous-p-adic-functions
kind: theorem
title: Mahler expansion of continuous p-adic functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-p-adic-integers-as-compatible-residue-classes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Theorem 3.21, §3.4, printed pp. 123–126
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Contextual reference only; no Mahler-specific theorem or page locator verified in the available local source history
verification: {}
---

## Statement

For every continuous function $f:\mathbb Z_p\to\mathbb Z_p$, define $\Delta f(x)=f(x+1)-f(x)$ and $a_n=\Delta^n f(0)$. Then $a_n\to0$ $p$-adically and
$$f(x)=\sum_{n=0}^{\infty}a_n\binom{x}{n}\qquad(x\in\mathbb Z_p),$$
with uniform convergence. The coefficients are unique.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 3.21, §3.4, pp. 123–126](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory* (contextual reference; Mahler-specific locator unverified)](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A continuous function $f:\mathbb Z_p\to\mathbb Z_p$.

[F1] $\mathbb Z_p$ is the set of compatible residues modulo $p^n$, with the residue-cylinder topology; compatibility gives completeness for its $p$-adic metric. [[def-p-adic-integers-as-compatible-residue-classes]]

## Proof

1.1 The residue cylinders at level $n$ are labeled by the ordered integers $0,\ldots,p^n-1$. To prove compactness without a choice axiom, suppose an open cover has no finite subcover. Call a cylinder bad if it has no finite subcover. The whole space is bad, and a bad cylinder has a bad child: otherwise finitely many finite subcovers, one for each of its $p$ children, cover it. At each stage take the least-labeled bad child. Deterministic recursion produces compatible residues, hence a point $x$ by [F1]. Some member of the cover contains $x$ and therefore contains a residue cylinder about $x$, contradicting badness of the chosen cylinder at that level. Thus the space is compact. Each cylinder contains its nonnegative integer label, so nonnegative integers are dense. A continuous $f$ is uniformly approximable by functions constant on a finite residue quotient: for fixed $r$, every point has a cylinder on which $f$ is constant modulo $p^r$; compactness gives finitely many such cylinders, and a common level refines all of them. At that level take the value of $f$ at the canonical integer label of each cylinder. This gives a canonical locally constant $g$ with $\|f-g\|_\infty\le p^{-r}$. [F1, given, construct, algebra]

2.1 For $g$ factoring through $\mathbb Z/p^m\mathbb Z$, let $E(g)(x)=g(x+1)$. On this finite cyclic function module, $E^{p^m}=1$ and, modulo $p$, $(E-1)^{p^m}=E^{p^m}-1=0$. Thus $(E-1)^{p^m}$ maps the module into $p$ times itself; its $q$th power maps it into $p^q$ times itself. Writing $n=qp^m+r$ gives $\Delta^ng(0)\in p^q\mathbb Z_p$. Hence these coefficients tend to zero. The finite-difference formula is an integral linear combination of translates, so $|\Delta^n(f-g)(0)|_p\le\|f-g\|_\infty$. Use the approximations of step 1.1 at each prescribed precision to conclude $a_n\to0$. [F1, step 1.1, algebra]

3.1 Repeated differences give $a_n=\sum_{j=0}^n(-1)^{n-j}\binom njf(j)$. For $N\ge0$, the coefficient of $f(j)$ in $\sum_{n=0}^N\binom Nn a_n$ is $\binom Nj\sum_{r=0}^{N-j}(-1)^r\binom{N-j}{r}$, equal to $0$ for $j<N$ and $1$ for $j=N$. Thus $f(N)=\sum_{n=0}^Na_n\binom Nn$. Each rational polynomial $\binom{x}{n}$ is continuous and is integer-valued on nonnegative integers, hence $\mathbb Z_p$-valued everywhere by density and separation. Since $a_n\to0$, completeness gives uniform convergence of the displayed series; its sum agrees with $f$ on the dense integers and therefore everywhere. Finally $\Delta\binom{x}{n}=\binom{x}{n-1}$ for $n\ge1$ and $\Delta1=0$. A finite difference is continuous in the uniform norm, so applying $\Delta^m$ termwise at $0$ recovers exactly $a_m$. This proves uniqueness. [F1, step 1.1, step 2.1, algebra] ∎
