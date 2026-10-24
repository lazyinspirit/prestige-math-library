---
id: thm-complex-dual-of-ell-one-is-ell-infinity
kind: theorem
title: "The complex continuous dual of ell-one is ell-infinity"
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
    - title: "Bühler–Salamon, Functional Analysis, Example 1.35, p.36 (scalar-field extension of its coefficient proof)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "For f, coefficients b_n=f(e_n) are bounded by ||f||. Absolute convergence defines the pairing and truncation proves representation. Testing e_n yields the supremum lower bound, with no requirement that a maximum exists."
---

## Statement

For complex sequence spaces, with indices starting at zero, $$\ell^\infty(\mathbb C)\longrightarrow\ell^1(\mathbb C)^*,\qquad b\longmapsto h_b,\qquad h_b(a)=\sum_{n=0}^\infty b_na_n$$ is a complex-linear isometric bijection. There is no conjugation in this pairing.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-dual-space-of-a-normed-space]], with its stated hypotheses: Let $X$ be a normed space over the scalar field $\mathbb{K}$, where $\mathbb{K}=\mathbb{R}$ in the literal definition and $\mathbb{K}=\mathbb{C}$ by the convention of rem-real-and-complex-normed-space-convention. The **dual space** of $X$ is $X^*:=\mathcal{B}(X,\mathbb{K}),$ the space of bounded linear functionals on $X$ (def-space-of-bounded-linear-operators). Each $f \in X^*$ is in particular a linear functional in the algebraic sense, so $X^*$ is a subspace of the algebraic dual from def-algebraic-dual-and-linear-functional. The **dual norm** on $X^*$ is the operator norm: $\|f\|_{X^*}:=\|f\| =\sup\{|f(x)|:\|x\| \le 1\}.$

[F2] From [[def-c-zero-and-ell-infinity]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$, with absolute value in the real case and modulus $|a+ib|=\sqrt{a^2+b^2}$ in the complex case. A scalar sequence here is a function $x:\mathbb N\to\mathbb K$, including index zero. Let $\ell^\infty=\{x=(x_n)_{n\in\mathbb N}:\sup_{n\in\mathbb N}|x_n|<\infty\},\qquad c_0=\{x\in\ell^\infty:x_n\to0\},$ both equipped with $\|x\|_\infty=\sup_{n\in\mathbb N}|x_n|$. Thus $c_0$ is a specified linear subspace of the bounded-sequence space $\ell^\infty$. Here $x_n\to0$ means that for every real $\varepsilon>0$ there is $N\in\mathbb N$ such that $|x_n|<\varepsilon$ for all $n\ge N$. Addition and scalar multiplication are coordinatewise. The scalar triangle inequality makes bounded sequences and null sequences linear spaces and gives the triangle inequality for the displayed supremum norm. Absolute homogeneity follows coordinatewise, and a zero supremum forces every coordinate to vanish.

[F3] From [[lem-finite-truncations-are-dense-in-c0-and-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Use coordinates indexed by $\mathbb N=\{0,1,\ldots\}$. Define $\ell^1(\mathbb K)=\{a:\sum_{n=0}^\infty|a_n|<\infty\}$, with coordinatewise operations and norm $\|a\|_1=\sum_n|a_n|$. Let $P_N$ retain coordinates $0,\ldots,N$ and set all others to zero. Then $\|x-P_Nx\|_\infty\longrightarrow0\quad(x\in c_0(\mathbb K)),\qquad\|a-P_Na\|_1\longrightarrow0\quad(a\in\ell^1(\mathbb K)).$

## Proof

1.1 For bounded $b$ and $a\in\ell^1(\mathbb C)$, $\sum|b_na_n|\le\|b\|_\infty\|a\|_1$. The series therefore defines a complex-linear functional with $\|h_b\|\le\|b\|_\infty$, and depends complex-linearly on $b$. [F1, F2, F3]

2.1 Since $\|e_n\|_1=1$, $\|h_b\|\ge|h_b(e_n)|=|b_n|$ for every $n$. Taking the supremum gives equality of norms; no maximizing coordinate is required. For $b=0$ this reads $0=0$. [step 1.1]

3.1 Given $h\in\ell^1(\mathbb C)^*$, let $b_n=h(e_n)$. Then $|b_n|\le\|h\|$, so $b\in\ell^\infty$. Truncation density gives $h(a)=\lim_Nh(P_Na)=\sum_nb_na_n$. Hence the map is onto, and evaluation at $e_n$ makes the coefficient sequence unique. [F1, F2, F3, step 1.1] ∎
