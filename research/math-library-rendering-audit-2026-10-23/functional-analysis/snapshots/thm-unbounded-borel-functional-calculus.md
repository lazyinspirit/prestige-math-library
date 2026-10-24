---
id: thm-unbounded-borel-functional-calculus
kind: theorem
title: "Unbounded Borel functional calculus: domains, products, spectral mapping"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-projection-valued-measure, thm-dominated-convergence, def-axiom-of-choice, def-orthogonality-and-orthogonal-complement, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, lem-scalar-and-complex-measures-from-a-pvm, thm-monotone-convergence-for-the-integral, thm-rationals-countable, lem-q-and-irrationals-dense-r]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 3.2, pp.104-105; Theorem 3.7 and Corollary 3.8, p.110 (real spectral support; complex essential-range extension proved here)"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.38 and Remark 6.42, Sec. 6.4"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator with spectral
projection valued measure $E$ on $\mathbb R$ acting on a complex Hilbert space $H$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]) and let
$f,g:\mathbb R\to\mathbb C$ be Borel. Write $u(T)=u(E)$, with the truncation definition below. If $H=\{0\}$, use its unique PVM and unique full-domain operator directly. Then:

1. $f(T)^*=\overline f(T)$;
2. $f(T)g(T)$ has domain $D(g(T))\cap D((fg)(T))$ and equals the restriction of
   $(fg)(T)$ to that domain, and its closure is $(fg)(T)$;
3. on $D(f(T))\cap D(g(T))$ the sum $f(T)+g(T)$ equals the restriction of
   $(f+g)(T)$, and the closure of $f(T)+g(T)$ is $(f+g)(T)$;
4. the spectrum of $f(T)$ is the essential range
   $\{z\in\mathbb C:E(f^{-1}(B_\varepsilon(z)))\ne0$ for every
   $\varepsilon>0\}$ of $f$ with respect to $E$;
5. if $f$ is continuous then that essential range is the closure of
   $f(\sigma(T))$, with the closure redundant when $f(\sigma(T))$ is closed.

## Facts & Assumptions

[A1] For every finite-valued measurable $u$, $u(E)$ has domain $D_u=\{x:\int|u|^2\,dE_x<\infty\}$, is densely defined and closed, and satisfies $\|u(E)x\|^2=\int|u|^2\,dE_x$ and $u(E)^*=\overline u(E)$. It is the norm limit of $u_m(E)x$, where $u_m=u\mathbf1_{\{|u|\le m\}}$. Bounded approximants dominated by $C|u|$ and converging pointwise to $u$ converge on $D_u$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[def-unbounded-integral-against-a-pvm]]).

[A2] On nonzero $H$ the bounded measurable PVM calculus is linear, unital, multiplicative and adjoint preserving, and $\|h(E)x\|^2=\int|h|^2\,dE_x$. The scalar measure $E_x$ is finite with total mass $\|x\|^2$ ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A3] Dominated convergence holds for an integrable majorant, and monotone convergence holds for increasing nonnegative measurable functions ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]]).

[A4] A spectral PVM represents $T$ as the integral of the identity function with its exact squared-integrability domain; the cited spectral theorem assumes nonzero $H$ and AC ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-axiom-of-choice]]). The resolvent convention is $(zI-S)^{-1}$, required bounded and everywhere defined ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A5] $E(B\cap C)=E(B)E(C)$, projection values are contractive, and $E$ is strongly countably additive with $E(\mathbb R)=I$ ([[def-projection-valued-measure]]). Rational intervals form a countable base of $\mathbb R$, by countability and density of the rationals ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

## Proof

**Proof technique:** direct.

**Given:** The self-adjoint operator and spectral PVM in the statement, under AC.

1.1 For $H=\{0\}$ all integrals are the unique full-domain operator by [A1]. Sums, products, adjoints and closures are that operator; its resolvent is all $\mathbb C$ and its spectrum is empty. Every spectral projection is zero, so every essential range here is empty, as is $f(\sigma(T))$. Thus all claims hold. Henceforth $H\ne\{0\}$, and all bounded calculus uses have the hypothesis required by [A2]. [A1, A2, A4, A5]

1.2 For bounded Borel $h$ and arbitrary $x\in H$, bounded multiplication gives $E(B)h(E)=(\mathbf1_Bh)(E)$, so $E_{h(E)x}(B)=\int_B|h|^2\,dE_x$. For $x\in D_g$, truncate $g$: norm convergence and boundedness of $E(B)$ give $E_{g(E)x}(B)=\lim_m E_{g_m(E)x}(B)=\int_B|g|^2\,dE_x$ by monotone convergence. Hence $dE_{g(E)x}=|g|^2dE_x$, including when $g$ is unbounded. [A1, A2, A3, A5]

1.3 We will also use a dominated approximation with a general square-integrable majorant. Fix $x\in D_u$ and bounded Borel $h$. Comparing with $u_m$ using [A2] and then passing $m\to\infty$ gives $\|h(E)x-u(E)x\|^2=\int|h-u|^2\,dE_x$; the scalar limit is dominated by $2\|h\|_\infty^2+2|u|^2$. Therefore if bounded $h_n\to u$ pointwise and $|h_n|\le G$ with $\int G^2\,dE_x<\infty$, then $u$ is square integrable and $h_n(E)x\to u(E)x$, by dominated convergence with $|h_n-u|^2\le4G^2$. [A1, A2, A3]

2.1 For $x\in D_f\cap D_g$, $x\in D_{f+g}$ since $|f+g|^2\le2|f|^2+2|g|^2$. Bounded linearity and step 1.3 applied to $f_m+g_m$ with $G=|f|+|g|$ show $f(E)x+g(E)x=(f+g)(E)x$. In particular $D_{u-z}=D_u$ and $(u-z)(E)=u(E)-zI$, since constants are integrable against finite $E_x$. [A1, A2, step 1.3]

2.2 If $h$ is bounded and $x\in D_g$, step 1.2 shows $h(E)x\in D_g$, while $x\in D_{hg}$. The bounded identities $h(E)g_m(E)x=g_m(E)h(E)x=(hg_m)(E)x$ pass to limits: the last uses [A1] with target $hg$ since $|hg_m|\le|hg|$. Thus $h(E)g(E)x=g(E)h(E)x=(hg)(E)x$ for $x\in D_g$. [A1, A2, step 1.2]

3.1 The definition of composition and step 1.2 yield $D(f(E)g(E))=D_g\cap D_{fg}$. For $x$ in that domain, step 2.2 gives $f_m(E)g(E)x=(f_mg)(E)x$. The left side tends to $f(E)g(E)x$ by [A1]. To control the right side without pretending $f_mg$ bounded, note that $(f_mg)(E)x=E(\{|f|\le m\})(fg)(E)x$: apply step 2.2 with $g$ there replaced by $fg$ and the bounded indicator. The projections converge strongly to $I$, since their complementary squared norms are integrals of decreasing indicators against finite scalar measures. Hence the right side tends to $(fg)(E)x$, proving the product value. [A1, A2, A3, A5, step 1.2, step 2.2]

3.2 For $x\in D_{f+g}$ use $x_m=E(\{|f|\le m,|g|\le m\})x$. Step 1.2 shows $x_m\in D_f\cap D_g$, and gives $x_m\to x$ and $\|(f+g)(E)(x_m-x)\|^2=\int_{\{|f|>m\}\cup\{|g|>m\}}|f+g|^2\,dE_x\to0$. Step 2.1 and closedness in [A1] prove the sum closure. These cutoff ranges also show the sum domain dense. [A1, A2, A3, A5, step 1.2, step 2.1]

4.1 For $x\in D_{fg}$ put $x_m=E(\{|g|\le m\})x$. Step 1.2 shows $x_m\in D_g\cap D_{fg}$. The same step and dominated convergence give $x_m\to x$ and $\|(fg)(E)(x_m-x)\|^2=\int_{\{|g|>m\}}|fg|^2\,dE_x\to0$. Thus every point of the graph of $(fg)(E)$ is a limit of graph points of $f(E)g(E)$. The reverse graph inclusion follows from step 3.1 and closedness in [A1], proving the product closure. The composition domain is dense as well: the ranges of $E(\{|f|\le m,|g|\le m\})$, contained in that domain, approximate every vector by the same indicator estimate. [A1, A2, A3, A5, step 1.2, step 3.1]

4.2 Suppose $E(\{|f-z|<\varepsilon\})=0$ for some $\varepsilon>0$. Define the Borel function $w$ piecewise: $w(\lambda)=1/(z-f(\lambda))$ when $|f(\lambda)-z|\ge\varepsilon$, and $w(\lambda)=0$ otherwise. It is bounded by $1/\varepsilon$, and $(z-f)w=1$ off an $E$-null set. By the domain and value identities of step 3.1, $(z-f)(E)w(E)$ has domain all $H$ and equals $I$; $w(E)(z-f)(E)$ has domain $D_{z-f}$ and equals the identity there. Null-set invariance is supplied by [A1]. By step 2.1, $D_{z-f}=D_f$ and $(z-f)(E)=zI-f(E)$ (linearity with constants, or multiplication by $-1$ in step 2.2). Thus $w(E)$ is its bounded inverse and $z\in\rho(f(E))$ in the convention of [A4]. Only the inverse is asserted bounded. [A1, A2, A4, step 2.1, step 2.2, step 3.1]

5.1 Conversely suppose $E(\{|f-z|<\varepsilon\})\ne0$ for every $\varepsilon>0$. Using AC in [A4], choose unit $x_n$ in the range of $E(\{|f-z|<1/n\})$ for each $n\ge1$. The scalar measure of $x_n$ is supported there by [A5], and $|f|\le|z|+1/n$ there, so $x_n\in D_f$. Hence $\|(zI-f(E))x_n\|^2=\int|z-f|^2\,dE_{x_n}\le1/n^2$ by [A1] and step 2.1. A bounded inverse with bound $C$ would give $1\le C/n$ for every $n$, impossible. This proves the essential-range formula. [A1, A4, A5, step 2.1, step 4.2]

6.1 Apply steps 4.2 and 5.1 to $u(\lambda)=\lambda$, which represents $T$ by [A4]. Nonreal $z$ have a ball disjoint from $\mathbb R$, so $\sigma(T)\subseteq\mathbb R$; for real $\lambda$, membership in $\sigma(T)$ is equivalent to every interval about $\lambda$ having nonzero projection. The union $U$ of all rational intervals with zero projection is exactly $\mathbb R\setminus\sigma(T)$, by the rational base in [A5] and projection monotonicity from $E(B\cap C)=E(B)E(C)$. Enumerate pairs of a fixed rational enumeration by increasing sums of their indices, giving an enumeration of rational intervals. In that enumeration retain such intervals and replace the rest by the empty set. Disjointify this sequence by subtracting previous intervals. Each resulting set has zero projection, and their union is $U$, so strong countable additivity gives $E(U)=0$. In particular $U$ is open and measurable. [A4, A5, step 4.2, step 5.1]

7.1 Let $f$ be continuous. If $z\notin\overline{f(\sigma(T))}$, a ball about $z$ has preimage contained in $U$ of step 6.1, so that preimage has zero projection. Conversely, for $z\in\overline{f(\sigma(T))}$ and $\varepsilon>0$, choose $\lambda\in\sigma(T)$ with $|f(\lambda)-z|<\varepsilon/2$. Continuity supplies an interval about $\lambda$ whose image lies in $B_\varepsilon(z)$; its projection is nonzero by step 6.1, so the whole preimage has nonzero projection. This proves the continuous spectral-mapping formula. The adjoint identity is [A1], and steps 3.1, 4.1, 3.2, 4.2 and 5.1 prove the remaining claims. [A1, A5, step 3.1, step 4.1, step 3.2, step 4.2, step 5.1, step 6.1] ∎
