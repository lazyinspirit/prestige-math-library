---
id: thm-dual-of-c0-is-ell-one
kind: theorem
title: "The continuous dual of c0 is ell-one"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "def-c-zero-and-ell-infinity", "lem-finite-truncations-are-dense-in-c0-and-ell-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 1.36, pp.36–37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "For f define a_n=f(e_n). For each finite prefix use x_n=conj(a_n)/|a_n| when nonzero, else 0, to bound its absolute sum by ||f||. Absolute convergence yields a functional; finite-truncation density recovers f. The same finite test vectors prove norm equality. No conjugate is inserted into the pairing."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $$\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-dual-space-of-a-normed-space]], with its stated hypotheses: Let $X$ be a normed space over the scalar field $\mathbb{K}$, where $\mathbb{K}=\mathbb{R}$ in the literal definition and $\mathbb{K}=\mathbb{C}$ by the convention of rem-real-and-complex-normed-space-convention. The **dual space** of $X$ is $X^*:=\mathcal{B}(X,\mathbb{K}),$ the space of bounded linear functionals on $X$ (def-space-of-bounded-linear-operators). Each $f \in X^*$ is in particular a linear functional in the algebraic sense, so $X^*$ is a subspace of the algebraic dual from def-algebraic-dual-and-linear-functional. The **dual norm** on $X^*$ is the operator norm: $\|f\|_{X^*}:=\|f\| =\sup\{|f(x)|:\|x\| \le 1\}.$

[F2] From [[def-c-zero-and-ell-infinity]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$, with absolute value in the real case and modulus $|a+ib|=\sqrt{a^2+b^2}$ in the complex case. A scalar sequence here is a function $x:\mathbb N\to\mathbb K$, including index zero. Let $\ell^\infty=\{x=(x_n)_{n\in\mathbb N}:\sup_{n\in\mathbb N}|x_n|<\infty\},\qquad c_0=\{x\in\ell^\infty:x_n\to0\},$ both equipped with $\|x\|_\infty=\sup_{n\in\mathbb N}|x_n|$. Thus $c_0$ is a specified linear subspace of the bounded-sequence space $\ell^\infty$. Here $x_n\to0$ means that for every real $\varepsilon>0$ there is $N\in\mathbb N$ such that $|x_n|<\varepsilon$ for all $n\ge N$. Addition and scalar multiplication are coordinatewise. The scalar triangle inequality makes bounded sequences and null sequences linear spaces and gives the triangle inequality for the displayed supremum norm. Absolute homogeneity follows coordinatewise, and a zero supremum forces every coordinate to vanish.

[F3] From [[lem-finite-truncations-are-dense-in-c0-and-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Use coordinates indexed by $\mathbb N=\{0,1,\ldots\}$. Define $\ell^1(\mathbb K)=\{a:\sum_{n=0}^\infty|a_n|<\infty\}$, with coordinatewise operations and norm $\|a\|_1=\sum_n|a_n|$. Let $P_N$ retain coordinates $0,\ldots,N$ and set all others to zero. Then $\|x-P_Nx\|_\infty\longrightarrow0\quad(x\in c_0(\mathbb K)),\qquad\|a-P_Na\|_1\longrightarrow0\quad(a\in\ell^1(\mathbb K)).$

## Proof

1.1 For $a\in\ell^1$ and $x\in c_0$, $\sum|a_nx_n|\le\|a\|_1\|x\|_\infty$. Hence the scalar series is absolutely convergent, defines a linear functional, and gives $\|f_a\|\le\|a\|_1$; the map $a\mapsto f_a$ is linear. [F1, F2, F3]

2.1 For each finite prefix set $u_n=\overline{a_n}/|a_n|$ when $n\le N$ and $a_n\ne0$, and $u_n=0$ otherwise (real conjugation does nothing). Then $u\in c_0$, $\|u\|_\infty\le1$, and $f_a(u)=\sum_{n\le N}|a_n|$. Taking $N\to\infty$ proves $\|f_a\|\ge\|a\|_1$. This includes $a=0$ without a unit-vector assumption. [step 1.1]

3.1 Given $f\in c_0^*$, define $a_n=f(e_n)$, where $e_n$ is the coordinate unit sequence. The same finite phase test gives $\sum_{n\le N}|a_n|=f(u)\le\|f\|$ for every $N$. Thus $a\in\ell^1$. No simultaneous arbitrary sign selections occur: every phase is specified by a formula. [F1, F2, step 2.1]

4.1 By truncation density and continuity, $f(x)=\lim_N f(P_Nx)=\lim_N\sum_{n\le N}a_nx_n=f_a(x)$. Thus the map is onto. Evaluation at each $e_n$ determines $a_n$ uniquely, proving injectivity as well as uniqueness of the representation. [F3, step 1.1, step 3.1] ∎
