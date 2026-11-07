---
id: thm-rankin-classical-prime-gap-lower-bound
kind: theorem
title: "Rankin's classical maximal prime-gap lower bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 4
deps:
  - def-prime-gap-functions
  - def-iterated-logarithms-and-prime-gap-scale
  - def-prime-residue-covering-length
  - lem-prime-residue-covering-length-is-finite
  - lem-crt-residue-covering-to-prime-gap
  - lem-rankin-covering-system-lower-bound
  - def-chebyshev-theta-function
  - thm-chebyshev-theta-linear-bounds
  - thm-natural-logarithm-laws
  - lem-integer-part
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29, Theorem 29.3 and the classical Rankin construction"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "James Maynard, Large gaps between primes, Theorem 1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf"
---

## Statement

Let $p_n$ be the $n$th positive prime in increasing order and, for sufficiently large $X$, set
$$G(X)=\max_{p_n\le X}(p_{n+1}-p_n),\qquad L_R(X)=\frac{\log X\,\log_2X\,\log_4X}{(\log_3X)^2},$$
where $\log$ is the natural logarithm and $\log_{j+1}X=\log(\log_jX)$. There are constants $c>0$ and $X_0$ such that every real $X\ge X_0$ satisfies $G(X)\ge cL_R(X)$.

## Statement references

[[def-prime-gap-functions]]

[[def-iterated-logarithms-and-prime-gap-scale]]

[[lem-rankin-covering-system-lower-bound]]

[Koukoulopoulos, *The Distribution of Prime Numbers*, Chapter 29](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[Maynard, “Large gaps between primes,” Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf)

## Facts & Assumptions

**Given:** A sufficiently large real $X$, the increasing prime sequence $(p_n)$, the maximal-gap convention $p_n\le X$, and the Rankin scale $L_R(X)$.

[F1] For all sufficiently large $z$, $Y(z)\ge c_0z\log z\log_3z/(\log_2z)^2$ for some $c_0>0$ ([[lem-rankin-covering-system-lower-bound]]).

[F2] If residues at cutoff $z$ cover $[1,H]\cap\mathbb Z$, then there is a consecutive-prime gap with smaller prime at most $2P(z)$ and length at least $H+1$, where $P(z)=\prod_{p\le z}p$ ([[lem-crt-residue-covering-to-prime-gap]], [[def-prime-residue-covering-length]]).

[F3] $\theta(z)=\sum_{p\le z}\log p$ and there is an absolute $C_\theta>0$ with $\theta(z)\le C_\theta z$ for every sufficiently large $z$ ([[def-chebyshev-theta-function]], [[thm-chebyshev-theta-linear-bounds]]).

[F4] $P(z)=\prod_{p\le z}p$, so $\log P(z)=\theta(z)$; $G(X)$ is nondecreasing because increasing $X$ only enlarges its finite index set ([[def-prime-residue-covering-length]], [[def-prime-gap-functions]]).

[F5] The natural logarithm is continuous and obeys product and quotient laws ([[thm-natural-logarithm-laws]]).

[F6] For each real $t$, $\lfloor t\rfloor$ is the unique integer $m$ with $m\le t<m+1$ ([[lem-integer-part]]).

[L1] As the variable tends to infinity, $f=O(g)$ means $|f|\le Cg$ for some constant $C$ on a sufficiently large range, $f=o(g)$ means $f/g\to0$, and $f\sim g$ means $f/g\to1$.

## Proof

**Proof technique:** direct.

1.1 Enlarge $C_\theta$ if necessary so $C_\theta\ge1$, put $\alpha=1/(2C_\theta)$, and for each sufficiently large $X$ set $z=\lfloor\alpha\log X\rfloor$. By [F6], $z\le\alpha\log X$ and $z=\alpha\log X+O(1)$, so $z\to\infty$. Then [F3] gives $\theta(z)\le\frac12\log X$. Consequently $2P(z)=2e^{\theta(z)}\le2\sqrt X\le X$ once $X\ge4$. [F3, F4, F5, F6, L1, given, algebra, choose]

2.1 Apply [F1] at this $z$ to obtain an assignment covering a length $H=Y(z)$; the maximum is attained by [F1]. By [F2], $G(2P(z))\ge H+1$, and step 1.1 gives $2P(z)\le X$. Monotonicity in [F4] therefore yields $G(X)\ge H+1\ge c_0z\log z\log_3z/(\log_2z)^2$. [F1, F2, F4, step 1.1]

3.1 Since $z=\alpha\log X+O(1)$, continuity and the product law in [F5] give $\log z=\log_2X+\log\alpha+o(1)$, hence $\log z/\log_2X\to1$. Applying continuity of $\log$ to this ratio gives $\log_2z=\log_3X+o(1)$; applying it once more gives $\log_3z=\log_4X+o(1)$. Also $z/\log X\to\alpha$. Therefore $$\frac{z\log z\log_3z}{(\log_2z)^2}\sim\alpha\frac{\log X\,\log_2X\,\log_4X}{(\log_3X)^2}=\alpha L_R(X).$$ Step 2.1 now proves the claimed lower bound with $c=c_0\alpha/2$ after enlarging $X_0$ if needed. [F5, L1, step 2.1, algebra, choose] ∎

