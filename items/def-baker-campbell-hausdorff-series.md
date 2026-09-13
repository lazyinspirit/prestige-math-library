---
id: def-baker-campbell-hausdorff-series
kind: definition
title: Baker–Campbell–Hausdorff series
status: draft
origin: pipeline
deps: ["def-finite-dimensional-lie-algebra", "def-adjoint-representation-of-a-lie-algebra"]
justified_by: ["lem-local-convergence-of-the-baker-campbell-hausdorff-series"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Theorem 1.3, Dynkin formula (1.4), and Remark 1.4, printed pages 3–4
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Appendix B §4, Theorem B.22 and formulas (B.23)–(B.24), printed pages 669–671
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $\mathfrak g$ be a finite-dimensional real Lie algebra and let
$X,Y\in\mathfrak g$. For a nonempty word
$w=Z_1\cdots Z_N$ in the two letters $X,Y$, define its **right-nested
commutator** by

$$[Z_1]_R=Z_1,\qquad [Z_1\cdots Z_N]_R=[Z_1,[Z_2\cdots Z_N]_R]\quad(N\ge2).$$

Equivalently, when $N\ge2$, this is
$\operatorname{ad}_{Z_1}\circ\cdots\circ
\operatorname{ad}_{Z_{N-1}}(Z_N)$ in the notation of
[[def-adjoint-representation-of-a-lie-algebra]].

For $N\ge1$, the degree-$N$ **Dynkin polynomial** is

$$H_N(X,Y)=\sum_{k=1}^{N}\frac{(-1)^{k-1}}{kN}\sum_{\substack{m_i,n_i\ge0,\ m_i+n_i>0\ (1\le i\le k)\\ \sum_{i=1}^{k}(m_i+n_i)=N}}\frac{[X^{m_1}Y^{n_1}\cdots X^{m_k}Y^{n_k}]_R}{m_1!n_1!\cdots m_k!n_k!}.$$

Here $X^mY^n$ means a block of $m$ copies of $X$ followed by $n$ copies
of $Y$; it is word notation, not multiplication in $\mathfrak g$. For fixed
$N$ both sums are finite, so $H_N(X,Y)$ is well defined using only the vector
space operations and Lie bracket supplied by
[[def-finite-dimensional-lie-algebra]].

The **formal Baker–Campbell–Hausdorff series** is the degree-indexed formal
sum

$$\operatorname{BCH}(X,Y):=\sum_{N=1}^{\infty}H_N(X,Y).$$

It begins

$$X+Y+\frac12[X,Y]+\frac1{12}[X,[X,Y]]+\frac1{12}[Y,[Y,X]]+\cdots.$$

Indeed, the $N=1$ part has the two one-letter blocks and gives $X+Y$. In
degree two, the $k=1$ block $(m_1,n_1)=(1,1)$ contributes
$\frac12[X,Y]$; the two mixed $k=2$ words contribute
$-\frac14([X,Y]+[Y,X])=0$, and all repeated-letter brackets vanish. Direct
collection of the finite degree-three sum gives the two displayed
$1/12$ terms.

Until convergence is proved, $\operatorname{BCH}(X,Y)$ means this formal
sequence of homogeneous Lie polynomials, not an element obtained by summing
infinitely many vectors. Wherever the series converges, the same notation
denotes its sum. The next convergence lemma justifies this analytic meaning
on a neighborhood of $(0,0)$.

For the zero Lie algebra every $H_N$ is zero. For a one-dimensional real Lie
algebra the bracket vanishes, so the formal series is $X+Y$. No metric,
nondegeneracy, interval, endpoint, choice principle, or biconditional is part
of this definition.
