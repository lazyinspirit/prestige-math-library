---
id: lem-orthogonal-independent-mixing-shared-columns-gaussian
kind: lemma
title: "A shared column of an independent orthogonal mixing must be Gaussian"
status: published
dependency_level: 1
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-square-ica-model, lem-moments-give-derivatives-of-the-characteristic-function, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-local-gaussian-characteristic-function-is-global, thm-ftc-first-part, thm-continuous-implies-integrable, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: "Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, Independent Component Analysis"
      url: "https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf"
      locator: "§7.5–7.6, especially p. 163: non-Gaussian components are individually recoverable while Gaussian components can mix; standardized orthogonal specialization, with an independent local proof"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§3.3.1 and §3.3.3, characteristic-function factorization and finite-moment differentiation; not a source for the Hessian argument authored here"
---

## Statement

Let $S=(S_1,\ldots,S_p)^T$ have mutually independent centered real coordinates with $\mathbb E S_i^2=1$, and let $O\in\mathbb R^{p\times p}$ be orthogonal. Suppose the coordinates of $T=OS$ are mutually independent. If column $i$ of $O$ contains nonzero entries in two different rows, then $S_i$ has the standard Gaussian law. Thus each non-Gaussian source column has exactly one nonzero entry, which is $1$ or $-1$.

## Statement references

[Hyvärinen, Karhunen, and Oja, §7.5–7.6](https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf)

[Durrett, §3.3](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf)

## Facts & Assumptions

**Given:** Mutually independent centered unit-variance $S_i$, an orthogonal matrix $O$, and mutually independent coordinates of $T=OS$.

[F1] [[def-square-ica-model]] specifies mutual independence and the standard Gaussian convention.

[F2] [[lem-moments-give-derivatives-of-the-characteristic-function]] gives $C^2$ characteristic functions for finite-second-moment variables, with $\varphi'(0)=i\mathbb E S_i=0$ and $\varphi''(0)=-\mathbb E S_i^2=-1$.

[F3] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] factors the characteristic function of a finite independent linear sum into the corresponding one-variable characteristic functions.

[F4] [[lem-local-gaussian-characteristic-function-is-global]] proves that agreement with $e^{-u^2/2}$ on any interval around zero forces the standard Gaussian law.

[F5] [[thm-continuous-implies-integrable]] makes each continuous real integrand integrable on compact subintervals; [[thm-ftc-first-part]] differentiates its integral there. Apply both componentwise to the real-parameter complex integrals below.

[F6] [[cor-zero-derivative-implies-constant]] identifies primitives up to a constant on an interval, componentwise for complex functions.

## Proof

1.1 Let $\varphi_i(u)=\mathbb E e^{iuS_i}$ and $\theta_j(v)=\mathbb E e^{ivT_j}$. Each $T_j$ has a finite second moment, since $(\sum_iO_{ji}S_i)^2\le(\sum_iO_{ji}^2)(\sum_iS_i^2)$ pointwise. Thus [F2] makes all these functions $C^2$, and each is one at zero. Choose $\delta>0$ such that none vanishes on $(-\delta,\delta)$; this is possible by continuity and finiteness of the families. Define $$\psi_i(u)=\int_0^u\frac{\varphi_i'(s)}{\varphi_i(s)}\,ds,\qquad \chi_j(v)=\int_0^v\frac{\theta_j'(s)}{\theta_j(s)}\,ds.$$ By [F5] applied on every compact subinterval, these are complex-valued $C^2$ functions on that interval, equal to zero at zero. Differentiation shows $(e^{-\psi_i}\varphi_i)'=0$, so $e^{\psi_i}=\varphi_i$; likewise $e^{\chi_j}=\theta_j$. Moreover $\psi_i'(0)=0$ and $\psi_i''(0)=\varphi_i''(0)-\varphi_i'(0)^2=-1$. This constructs the needed local logarithms without any global nonvanishing hypothesis. [given, F1, F2, F5, F6, construct, algebra]

2.1 For $\lVert t\rVert<\delta$, also $\lVert O^Tt\rVert<\delta$. Factoring the characteristic function of $t^TT=(O^Tt)^TS$ in both independent coordinate systems by [F3] gives $$\prod_i\varphi_i((O^Tt)_i)=\prod_j\theta_j(t_j).$$ Consequently $D(t):=\sum_i\psi_i((O^Tt)_i)-\sum_j\chi_j(t_j)$ has $e^{D(t)}=1$. It is continuous on the ball, is zero at zero, and takes values in the discrete set $2\pi i\mathbb Z$. Along each line segment $s\mapsto st$ the intermediate value property of its imaginary part makes it constant; hence $D(t)=0$ throughout the ball. Differentiating this $C^2$ identity with respect to distinct coordinates $t_j,t_k$ gives $$\sum_i O_{ji}O_{ki}\psi_i''((O^Tt)_i)=0\qquad(j\ne k).$$ [F3, step 1.1, algebra]

3.1 Fix $i$ and two distinct rows $j,k$ with $O_{ji}O_{ki}\ne0$. Orthogonality maps the ball onto itself, so in the last identity one may set $O^Tt=u$ for every $\lVert u\rVert<\delta$. First take $u=ve_i$, $|v|<\delta$, and then $u=0$. Subtraction cancels all summands except the $i$th, giving $O_{ji}O_{ki}(\psi_i''(v)-\psi_i''(0))=0$. Thus $\psi_i''(v)=-1$ throughout $(-\delta,\delta)$. With $\psi_i'(0)=\psi_i(0)=0$, [F6] applied successively to $\psi_i\prime(v)+v$ and $\psi_i(v)+v^2/2$ gives $\psi_i(v)=-v^2/2$ and $\varphi_i(v)=e^{-v^2/2}$ there. By [F4], $S_i$ is standard Gaussian. [F4, F6, step 1.1, step 2.1, algebra]

4.1 The contrapositive of step 3.1 says that a non-Gaussian source column has at most one nonzero entry. Its squared norm is one because $O^TO=I$, so it has exactly one entry, whose square is one. This proves both assertions. [given, step 3.1, algebra] ∎
