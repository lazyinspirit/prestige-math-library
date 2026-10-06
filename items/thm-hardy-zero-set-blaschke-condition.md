---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "3e8045b84f35f42ef0cdb3912075fbb2e9e33e97c06e9cff043ce64189b9d3c5"
id: thm-hardy-zero-set-blaschke-condition
kind: theorem
title: "The zero set of a Hardy function satisfies the Blaschke condition"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, thm-jensen-formula-on-a-disc, thm-jensens-integral-inequality, thm-jensen-inequality-for-expectation, thm-identity-theorem-holomorphic-functions, thm-taylor-expansion-holomorphic-function, thm-removable-singularity-characterizations, def-complex-differentiability-holomorphic-and-entire, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.6, §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Jensen's inequality and Jensen's formula, printed pp. 32-34, and Lemma 5.17 (Blaschke condition), printed p. 35: the zero sum bound and $\\log(1/|a_n|)\\sim(1-|a_n|)$."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Blaschke products, printed pp. 51-52: the disc Jensen formula and the Blaschke condition for the zeros of a nonzero H^p function."
---

## Statement

Let $f$ be holomorphic on $\mathbb D$ with $f\not\equiv0$, and suppose that
$$\liminf_{r\uparrow1}\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)<+\infty,$$
where $\log|f|=-\infty$ at the zeros of $f$. This hypothesis holds in
particular for every $f\in H^p(\mathbb D)$, $0<p\le\infty$: the logarithmic
Jensen inequality and [[lem-hardy-radial-means-are-monotone]] give
$\int_{\mathbb T}\log|f_r|\,dm\le\log\|f\|_{H^p}$ for $0<p<\infty$ and
$\int_{\mathbb T}\log|f_r|\,dm\le\log\|f\|_\infty$ for $p=\infty$. Let
$(a_n)_{n\ge1}$ be the zeros of $f$ in $\mathbb D$ repeated according to
multiplicity. Then $f$ has finite vanishing order $m\ge0$ at the origin (with $m=0$
when $f(0)\ne0$), and the
nonzero zeros satisfy
$$\sum_{n:\,a_n\ne0}\log\frac1{|a_n|}<+\infty,\qquad\text{hence}\qquad \sum_{n\ge1}(1-|a_n|)<+\infty.$$
(The second inequality uses $\log(1/x)\ge1-x$ for $0<x\le1$. The finite
vanishing order at the origin contributes finitely many terms equal to $1$ to the
second sum and does not affect convergence of the nonzero part.)

## Facts & Assumptions

**Given:** A holomorphic function $f\not\equiv0$ on $\mathbb D$ satisfying the displayed liminf hypothesis, its zero sequence $(a_n)$ repeated with multiplicity, and (where used) the exponent $p\in(0,\infty]$.

[L1] If $f\not\equiv0$, then $f$ has a finite vanishing order at the origin: there are an integer $m\ge0$ and a holomorphic $g:\mathbb D\to\mathbb C$ with $f(z)=z^mg(z)$ for all $z\in\mathbb D$ and $g(0)\ne0$; the zeros of $f$ are then the origin together with the zeros of $g$, with multiplicities, and $f(r\cdot)$ is holomorphic on a neighbourhood of the closed unit disc for every $0<r<1$ ([[thm-taylor-expansion-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]], [[thm-removable-singularity-characterizations]], [[def-complex-differentiability-holomorphic-and-entire]]).

[L2] Jensen's formula on a disc: if $F$ is holomorphic on a neighbourhood of $\{|z|\le R\}$, $F(0)\ne0$, and $F$ has no zero on $|z|=R$, then $\log|F(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|F(Re^{it})|\,dt-\sum_{|a|<R}\log\frac{R}{|a|}$, the sum over the zeros of $F$ in $|z|<R$ with multiplicity; for a radius meeting boundary zeros the identity is recovered by taking $r\uparrow R$ through radii that avoid zeros on $|z|=r$ ([[thm-jensen-formula-on-a-disc]]).

[L3] Logarithmic Jensen inequality. For a measurable $Y\ge0$ on the probability space $(\mathbb T,m)$ with $\int_{\mathbb T}Y\,dm<+\infty$, one has $\int_{\mathbb T}\log Y\,dm\le\log\int_{\mathbb T}Y\,dm$, with both sides in $[-\infty,\infty)$ and $\log0:=-\infty$. Indeed, for $g_n:=\max(\log Y,-n)$ the convex Jensen inequality applied to $g_n$ and the convex function $\exp$ gives $\exp\bigl(\int g_n\,dm\bigr)\le\int\exp(g_n)\,dm\le\int Y\,dm+e^{-n}$, and passing to the limit in $n$ gives the claim ([[thm-jensens-integral-inequality]], [[thm-jensen-inequality-for-expectation]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L4] The classes $H^p(\mathbb D)$ and their norms are defined by suprema of radial $L^p$ means; for $f\in H^p$, $0<p<\infty$, one has $\|f_r\|_{L^p}\le\|f\|_{H^p}$ for every $0\le r<1$ by definition of the supremum, and for $p=\infty$, $|f(z)|\le\|f\|_{H^\infty}$ for all $z$ ([[def-analytic-hardy-space-disc]], [[lem-hardy-radial-means-are-monotone]]).

[L5] For $0<x\le1$ one has $\log(1/x)\ge1-x$; and for a sequence of nonnegative terms increasing to a limit, the sum of the limits is the limit of the sums (monotone convergence for series) ([[thm-monotone-convergence-for-the-integral]]).



## Proof

**Proof technique:** direct.

1.1 Reduction at the origin. By [L1] write $f(z)=z^mg(z)$ with $m\ge0$, $g$ holomorphic on $\mathbb D$ and $g(0)\ne0$; this $m$ is the finite order of the zero of $f$ at the origin, and $f$ has no other zeros at the origin. For $0<r<1$, $$\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)=m\log r+\int_{\mathbb T}\log|g(r\zeta)|\,dm(\zeta)$$ (for $m=0$ this is the identity; for $m\ge1$ it holds because $\log|r^m\zeta^m|=m\log r$ is constant on the circle). Hence $\liminf_{r\uparrow1}\int_{\mathbb T}\log|g(r\zeta)|\,dm(\zeta)=\liminf_{r\uparrow1}\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)<+\infty$, because $m\log r\to0$. [given, L1, algebra]

1.2 The logarithmic Jensen inequality at each radius. Let $F$ be holomorphic on a neighbourhood of the closed unit disc and not identically zero. Applying [L3] to $Y:=|F|^p$ with $0<p<\infty$, and noting $\int_{\mathbb T}|F|^p\,dm=\|F\|_{L^p}^p<+\infty$ because $F$ is continuous, gives $$\int_{\mathbb T}\log|F|\,dm=\frac1p\int_{\mathbb T}\log|F|^p\,dm\le\frac1p\log\int_{\mathbb T}|F|^p\,dm=\log\|F\|_{L^p}.$$ For $p=\infty$, $\log|F|\le\log\|F\|_\infty$ pointwise, so $\int_{\mathbb T}\log|F|\,dm\le\log\|F\|_\infty$. [L3, algebra]

1.3 Jensen's formula for $g$. Fix $0<r<1$ such that no $|a_n|$ equals $r$, and apply [L2] with $R=1$ to $F:=g(r\,\cdot\,)$, whose zeros in $|z|<1$ are the points $a_n/r$ for those zeros $a_n$ of $f$ (equivalently of $g$) with $0<|a_n|<r$: $$-\sum_{0<|a_n|<r}\log\frac{r}{|a_n|}=\log|g(0)|-\int_{\mathbb T}\log|g(r\zeta)|\,dm(\zeta).$$ [given, L1, L2, algebra]

2.1 The $H^p$ clause. Let $f\in H^p(\mathbb D)$. If $p=\infty$, then for every $0<r<1$ step 1.2 applied to $f_r$ and [L4] give $\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)\le\log\|f_r\|_\infty\le\log\|f\|_{H^\infty}<+\infty$, so the liminf hypothesis holds (when $\|f\|_{H^\infty}=0$ then $f\equiv0$, excluded). If $0<p<\infty$, the same steps give $\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)\le\log\|f_r\|_{L^p}\le\log\|f\|_{H^p}<+\infty$. [step 1.2, L4]

2.2 Good radii and their limiting means. Jensen's formula in step 1.3, together with its boundary-zero limiting form in [L2], says that $M(r):=\int\log|g(r\zeta)|dm=\log|g(0)|+\sum_{0<|a_n|<r}\log(r/|a_n|)$ for every $0<r<1$; a zero on the radius contributes zero in that limiting identity. Thus $M(r)$ is nondecreasing. There are finitely many zero moduli in any closed subdisc, so a strictly increasing sequence of radii avoiding them and tending to $1$ can be chosen recursively, for instance from the rational radii in successive intervals tending to $1$. Monotonicity makes its means tend to $\liminf_{r\uparrow1}M(r)$. Along these radii, $\sum_{0<|a_n|<r_j}\log(r_j/|a_n|)=M(r_j)-\log|g(0)|$ by step 1.3. [step 1.3, L1, L2, algebra]

3.1 The Blaschke condition. In the identity of step 2.2 the left-hand side $S_j:=\sum_{0<|a_n|<r_j}\log(r_j/|a_n|)$ has nonnegative terms that increase with $j$ and eventually include every nonzero zero, so $S_j$ increases to $S:=\sum_{n:a_n\ne0}\log(1/|a_n|)\in[0,+\infty]$. By the choice of the radii, the right-hand side converges to $L:=\liminf_{r\uparrow1}\int_{\mathbb T}\log|g(r\zeta)|\,dm(\zeta)-\log|g(0)|$, and $L<+\infty$ by step 1.1; since $S_j\ge0$ for every $j$, $L\ge0$ as well, so $L\in[0,+\infty)$. As limits of the same identity, $S=L<+\infty$. Since $\log(1/x)\ge1-x$ for $0<x\le1$, also $\sum_{n:a_n\ne0}(1-|a_n|)\le\sum_{n:a_n\ne0}\log\frac1{|a_n|}<+\infty$, and the zero at the origin contributes the finite amount $m$ to the second sum; hence $\sum_{n\ge1}(1-|a_n|)<+\infty$. [step 2.2, L1, L5, algebra]

4.1 Assembly. Step 1.1 produces the finite order $m$ of the zero at the origin and transfers the liminf hypothesis from $f$ to $g$; step 2.1 verifies the hypothesis for $H^p$ functions; steps 1.3–3.1 convert Jensen's formula for the dilated functions $g(r\,\cdot\,)$ into convergence of the zero sum $\sum\log(1/|a_n|)$ over the nonzero zeros, and then into the Blaschke condition $\sum(1-|a_n|)<+\infty$. [step 1.1, step 2.1, step 1.3, step 3.1] ∎
