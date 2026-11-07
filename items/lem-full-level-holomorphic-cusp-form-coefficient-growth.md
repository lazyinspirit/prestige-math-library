---
id: lem-full-level-holomorphic-cusp-form-coefficient-growth
kind: lemma
title: "Polynomial Growth of Full-Level Holomorphic Cusp-Form Coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-congruence-modular-form-with-nebentypus
  - thm-q-expansion-principle-at-the-cusp
  - thm-bezout-identity
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and the cusp condition, printed pp. 48–49."
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§2, the level-one holomorphic modular-form normalization used in the standard L-function, and §4, full-level modular forms."
forward_refs: []
---

## Statement

Let $k\ge2$ be even and let $f\in S_k(SL_2(\mathbb Z))$ have Fourier
expansion $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$. There is a constant $C_f$
such that $|a_f(n)|\le C_fn^{k/2}$ for all $n\ge1$. In addition,
$y^{k/2}|f(x+iy)|$ is bounded on the upper half-plane. Consequently, for
$\lambda_f(n):=a_f(n)n^{-(k-1)/2}$ one has
$|\lambda_f(n)|\le C_fn^{1/2}$, the Dirichlet series
$\sum_{n\ge1}\lambda_f(n)n^{-s}$ converges absolutely for
$\operatorname{Re}s>3/2$, and for two such forms $f,g$ the series
$\sum_{n\ge1}\lambda_f(n)\overline{\lambda_g(n)}n^{-s}$ converges absolutely
for $\operatorname{Re}s>2$.

## Statement references

[[def-congruence-subgroup-of-sl2-z|the full-level group]]

[[def-congruence-modular-form-with-nebentypus|the full-level cusp-form convention]]

[[thm-q-expansion-principle-at-the-cusp|the Fourier parameter at the cusp]]

## Facts & Assumptions

**Given:** An even integer $k\ge2$ and a full-level holomorphic cusp form $f$.

[F1] [[def-congruence-subgroup-of-sl2-z]]: $\Gamma_0(1)=SL_2(\mathbb Z)$, acting by $\gamma z=(az+b)/(cz+d)$.

[F2] [[def-congruence-modular-form-with-nebentypus]]: at level $1$ and trivial character, $f(\gamma z)=(cz+d)^kf(z)$ for every $\gamma\in SL_2(\mathbb Z)$, and cuspidality means the constant term of the Fourier expansion at infinity is zero.

[F3] [[thm-q-expansion-principle-at-the-cusp]]: a holomorphic $1$-periodic function has a unique holomorphic function of $q=e^{2\pi iz}$ on $0<|q|<1$, and cuspidality makes that function vanish at $q=0$.

[F4] [[thm-bezout-identity]]: if $\gcd(c,d)=1$, there are integers $a,b$ with $ad-bc=1$.

## Proof

**Given:** The form $f$ and its Fourier coefficients from the statement.

1.1 For fixed $z=x+iy\in\mathbb H$, among coprime integer pairs $(c,d)$ there is a pair minimizing $|cz+d|$. The pair $(0,1)$ gives value $1$; every pair with $|cz+d|\le1$ satisfies $|c|y\le1$ and $|d|\le|cx|+1$, so only finitely many such pairs exist. Choose a minimizing pair and complete it to the bottom row of $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ by [F4]. Then $\operatorname{Im}(\gamma z)=y/|cz+d|^2$ is maximal among all modular transforms of $z$. Left-compose with an integer translation so that $|\operatorname{Re}(\gamma z)|\le1/2$; its imaginary part and maximality are unchanged. If $|\gamma z|<1$, applying $w\mapsto-1/w$ increases its imaginary part, a contradiction. Thus every orbit has a representative in $\mathcal F=\{w:|\operatorname{Re}w|\le1/2,\ |w|\ge1\}$. [F1, F4, given, choose, construct]

2.1 Define $H(z):=|f(z)|(\operatorname{Im}z)^{k/2}$. By [F2] and $\operatorname{Im}(\gamma z)=\operatorname{Im}(z)/|cz+d|^2$, one has $H(\gamma z)=H(z)$. On $\mathcal F$, the part with bounded imaginary part is compact and $H$ is continuous. For large $y$, [F3] writes $f(z)=qG(q)$ with $G$ bounded near $q=0$, so $|f(x+iy)|\le C e^{-2\pi y}$ and $H(x+iy)\le C y^{k/2}e^{-2\pi y}$. Hence $H$ is bounded on $\mathcal F$. [F2, F3, step 1.1, algebra]

3.1 Every $z$ is equivalent to a point of $\mathcal F$ by step 1.1, and $H$ is invariant by step 2.1; therefore $H(z)\le C$ on all of $\mathbb H$, or $|f(x+iy)|\le C y^{-k/2}$. [step 1.1, step 2.1, algebra]

4.1 For $n\ge1$, evaluate the Fourier coefficient at $y=1/n$: $a_f(n)e^{-2\pi}=\int_0^1 f(x+i/n)e^{-2\pi inx}\,dx$. The q-series converges uniformly on this horizontal segment, so termwise integration gives the equality. By step 3.1, $|a_f(n)|\le e^{2\pi}C n^{k/2}$. Multiplying by $n^{-(k-1)/2}$ gives $|\lambda_f(n)|\le C_fn^{1/2}$. Comparison with $\sum n^{1/2-\sigma}$ and $\sum n^{1-\sigma}$ proves the two absolute-convergence assertions for $\sigma>3/2$ and $\sigma>2$, respectively. [F2, F3, step 3.1, algebra] ∎
