---
id: lem-fd-2d-transport-commutator-l1-bound
kind: lemma
title: "Two-dimensional transport commutator bound by the Fourier l1 gradient sum"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - lem-fd-2d-fourier-log-velocity-bound
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  lem-fd-2d-fourier-log-velocity-bound: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.6"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
      locator: "PDF pp. 45–51; the precise commutator estimate below is proved from its Fourier coefficient formula."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $Q_2=\mathbb R^2/(2\pi\mathbb Z)^2$ have normalized measure $d\mu=(2\pi)^{-2}dx$, Fourier coefficients $\widehat f(k)=\int_{Q_2}f(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and componentwise norms $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^2}w_k^{2m}|\widehat f(k)|^2$. Let $m\ge4$ be an integer and $u\in C^\infty(Q_2;\mathbb R^2)$ be divergence-free. Define $\Lambda^m$ by $\widehat{\Lambda^m f}(k)=w_k^m\widehat f(k)$, $S(u)=\sum_{k\ne0}|k|\,|\widehat u(k)|$, and $[\Lambda^m,u\cdot\nabla]u=\Lambda^m((u\cdot\nabla)u)-u\cdot\nabla(\Lambda^m u)$. Then
$$\|[\Lambda^m,u\cdot\nabla]u\|_{L^2(Q_2)}\le C_m S(u)\|u\|_{H^m},$$
where $S(u)<\infty$ and $C_m$ depends only on $m$.

## Statement references

[[def-fd-periodic-fourier-sobolev-spaces]]

[[lem-fd-2d-fourier-log-velocity-bound]]

[Kuksin and Shirikyan, *Mathematics of Two-Dimensional Turbulence*, Chapter 2, §2.1.6](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the normalized Fourier conventions in the Statement, and the smooth divergence-free field $u$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: Fourier coefficients use weights $w_k=(1+|k|^2)^{1/2}$, and the componentwise $H^m$ norm is the coefficient sum in the Statement.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: on the normalized $2\pi$-periodic torus, Parseval identifies the $L^2$ norm with the coefficient $\ell^2$ norm.

[F3] [[lem-fd-2d-fourier-log-velocity-bound]]: every smooth divergence-free field in the Statement has $S(u)<\infty$.

## Proof

1.1 For each nonzero $k\in\mathbb Z^2$, choose $j$ with $|k_j|\ge|k|/\sqrt2$. Integrating the coefficient formula by parts $N$ times in $x_j$ (each boundary term vanishes by periodicity) gives $|\widehat u(k)|\le C_N(1+|k|)^{-N}$ for every integer $N\ge1$, with $C_N$ controlled by the suprema of the $N$th derivatives of $u$. The unit squares centered on lattice points in $n\le|k|<n+1$ have disjoint interiors and lie in the annulus of radii $\max(0,n-1)$ and $n+2$. For $n\ge2$ its area is $\pi((n+2)^2-(n-1)^2)=\pi(6n+3)\le 9\pi n$, and the $n=1$ disk of radius $3$ also has area $9\pi$; hence the shell has at most $9\pi n$ lattice points. Choose $N=m+5$. The shell sums of $(1+|k|)^{m+1}|\widehat u(k)|$ are then bounded by $C_m n^{-3}$, so the Fourier series of $u$, its first derivatives, $\Lambda^mu$, and the first derivatives of $\Lambda^mu$ converge absolutely. Thus the two products in the commutator have absolutely convergent coefficient convolutions, and the product formula and multiplier definition give
$$\widehat{[\Lambda^m,u\cdot\nabla]u}(k)=i\sum_{v+\ell=k}(w_k^m-w_\ell^m)(\widehat u(v)\cdot\ell)\widehat u(\ell).$$
[given, A1, F1, algebra]

2.1 For $x\in\mathbb R^2$, $w_x=(1+|x|^2)^{1/2}$ satisfies $|\nabla w_x^m|=m|x|w_x^{m-2}\le m w_x^{m-1}$. The mean-value theorem along the segment from $\ell$ to $\ell+v$, together with $w_{\ell+\theta v}\le w_\ell+w_v$ and $(a+b)^{m-1}\le C_m(a^{m-1}+b^{m-1})$, therefore gives
$$|w_{\ell+v}^m-w_\ell^m|\le C_m|v|(w_v^{m-1}+w_\ell^{m-1}).$$
[given, F1, step 1.1, algebra]

3.1 Apply the bound in step 2.1 to each summand in step 1.1 and use $|\widehat u(v)\cdot\ell|\le|\widehat u(v)||\ell|$. The term containing $w_v^{m-1}$ is bounded pointwise by $C_m(w_v^m|\widehat u(v)|)(|\ell||\widehat u(\ell)|)$ because $|v|\le w_v$. The term containing $w_\ell^{m-1}$ is bounded by $C_m(|v||\widehat u(v)|)(w_\ell^m|\widehat u(\ell)|)$ because $|\ell|\le w_\ell$. Summing over the two output components changes only the dimension-dependent constant. [given, F1, step 1.1, step 2.1, algebra]

4.1 For the first convolution, set $a_v=w_v^m|\widehat u(v)|$ and $b_\ell=|\ell||\widehat u(\ell)|$. Then [F1] gives $\|a\|_{\ell^2}=\|u\|_{H^m}$ and [F3] gives $\|b\|_{\ell^1}=S(u)$, so $\|a*b\|_{\ell^2}\le\|a\|_{\ell^2}\|b\|_{\ell^1}=\|u\|_{H^m}S(u)$. For the second convolution take $c_v=|v||\widehat u(v)|$ and $d_\ell=w_\ell^m|\widehat u(\ell)|$; then $\|c\|_{\ell^1}=S(u)$ and $\|d\|_{\ell^2}=\|u\|_{H^m}$, giving the same bound by $\|c*d\|_{\ell^2}\le\|c\|_{\ell^1}\|d\|_{\ell^2}$. Summing the finitely many vector components and applying Parseval [F2] proves the asserted $L^2$ estimate. [given, A1, F1, F2, F3, step 3.1, algebra] ∎
