---
id: lem-hk-smooth-mixed-derivative-formula
kind: lemma
title: "Mixed-derivative formula for smooth Hardy–Krause variation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hardykrause-variation
  - def-multidimensional-darboux-integral
  - def-multidimensional-grid-partition
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-tagged-partition-and-riemann-sum
  - thm-newton-leibniz-with-interior-derivative
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - cor-archimedean-reciprocal
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - cor-of-reverse-triangle
  - thm-reals-ordered-field
  - thm-multidimensional-darboux-equals-riemann
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
    - title: "Lukas Einkemmer, Quasi-Monte Carlo Methods, §2.3"
      url: "https://www.einkemmer.net/files/qmm.pdf"
---

## Statement

Let $d\ge1$ and let $f:[0,1]^d\to\mathbb R$ be the continuous extension to the closed cube of a function on $(0,1)^d$ whose mixed partial derivatives of every order at most $d$ exist and extend continuously to $[0,1]^d$. This is the $C^d$ hypothesis here, including agreement of the boundary values of $f$ with its order-zero extension. For $u=\{j_1<\cdots<j_q\}$, write $\partial_u f$ for the iterated derivative $\partial_{j_q}\cdots\partial_{j_1}f$, interpreted on the closed cube by its continuous extension. For each nonempty $u$, let $f_u(x_u)=f(x_u;1_{-u})$ be the restriction to the face adjacent to the upper corner. Then
$$V_{HK,1}(f)=\sum_{\emptyset\ne u\subseteq\{1,\ldots,d\}}\int_{[0,1]^{|u|}}\left|\partial_u f(x_u;1_{-u})\right|\,dx_u,$$
where $V_{HK,1}$ is the upper-anchor variation of [[def-hardykrause-variation]], and $\partial_u$ differentiates once in each coordinate in $u$.

## Facts & Assumptions
**Given:** The cube dimension and the stated continuous mixed-partial hypothesis on $f$.

[F1] The upper-anchor Hardy–Krause variation is the sum of the Vitali variations of the face restrictions $f_u(x_u)=f(x_u;1_{-u})$ over all nonempty coordinate subsets $u$. ([[def-hardykrause-variation]])

[F2] If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its interior derivative has a Riemann-integrable extension, then its integral is $G(b)-G(a)$. ([[thm-newton-leibniz-with-interior-derivative]])

[F3] The closed cube is compact in the Euclidean metric, continuous extensions of the mixed partials are uniformly continuous there, and on $q$ coordinates $d_2(x,y)^2=\sum_{j=1}^q|x_j-y_j|^2$. ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]])

[F4] A continuous real function on a closed nondegenerate rectangle is Riemann integrable. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]])

[F5] Iterated Riemann integrals of a Riemann-integrable function on a product rectangle equal its multiple integral whenever the sections in the iterated order are integrable; continuous functions have such sections. ([[thm-riemann-fubini-on-product-rectangles]])

[F6] Riemann integrals are linear and monotone, satisfy the absolute-value estimate, and are additive under each interior coordinate cut; a constant $c$ integrates over $R$ to $c\operatorname{vol}(R)$ by the Darboux definition and rectangle-volume convention. ([[thm-multidimensional-integral-properties]], [[def-multidimensional-darboux-integral]], [[def-multidimensional-rectangle-and-volume]])

[F7] For a bounded Riemann-integrable function, all tagged grid sums converge with mesh to its integral. ([[thm-multidimensional-darboux-equals-riemann]])

[F8] For every $\eta>0$ there is a positive integer $n$ with $1/n<\eta$. ([[cor-archimedean-reciprocal]])

[F9] The real numbers form an ordered field, and for real $a,b$, $|a+b|\ge |a|-|b|$, obtained from the reverse triangle inequality by applying it to $a+b$ and $a$. ([[thm-reals-ordered-field]], [[cor-of-reverse-triangle]])

## Proof

1.1 Fix a nonempty $u=\{j_1<\cdots<j_q\}$ and a product cell $R=\prod_{j\in u}[a_j,b_j]$ in a finite coordinate grid of its face. Put $g=f_u$ and $h=\partial_{j_q}\cdots\partial_{j_1}g$, using the continuous derivative extension. Apply [F2] successively in coordinates $j_1,\ldots,j_q$. If a line lies on the boundary because some other coordinates are fixed at $0$ or $1$, approximate those fixed coordinates by interior values and pass to the limit: every intermediate mixed partial and its derivative have continuous extensions, hence are uniformly continuous by [F3]. The integrands therefore converge uniformly along the line, so the integral difference is bounded by the interval length times a uniform error tending to zero; endpoint values converge as well. At each application the finite alternating differences in the remaining coordinates commute with the integral, yielding exactly the alternating sum over the $2^q$ vertices. By [F4] and [F5] this iterated integral equals the product-rectangle Riemann integral, so $\Delta(g;R)=\int_Rh$. Consequently $|\Delta(g;R)|\le\int_R|h|$. Summing over cells and using the absolute-value estimate and finite grid-cell additivity from [F6] gives $\sum_R|\Delta(g;R)|\le\int_{[0,1]^q}|h|$. Taking the supremum over grids proves $V_V(g)\le\int|h|$. [F2, F3, F4, F5, F6, given]

2.1 Conversely, fix $\varepsilon>0$. By [F3], choose $\delta_1>0$ so that $|h(x)-h(y)|<\varepsilon/2$ whenever $d_2(x,y)<\delta_1$. By [F7] applied to the continuous, hence integrable, function $|h|$ ([F4]), choose $\delta_2>0$ so every tagged grid of mesh below $\delta_2$ has sum within $\varepsilon/2$ of $\int|h|$. By [F8], choose $n$ with $\eta=1/n<\min\{\delta_1/(q+1),\delta_2\}$ and take the uniform product grid of side width $\eta$. For any two points in one cell, each coordinate difference is at most $\eta$, so [F3] gives $d_2(x,y)^2\le q\eta^2<\delta_1^2$ because $q<(q+1)^2$; hence $d_2(x,y)<\delta_1$. Tag each cell at its lower corner $\xi_R$. By [F6], linearity and the constant-integral formula give $\int_Rh=h(\xi_R)\operatorname{vol}(R)+\int_R(h-h(\xi_R))$. Since $|h(x)-h(\xi_R)|<\varepsilon/2$ throughout $R$, monotonicity and the absolute-value estimate in [F6] give $\left|\int_R(h-h(\xi_R))\right|\le\int_R|h-h(\xi_R)|\le(\varepsilon/2)\operatorname{vol}(R)$. Applying [F9] to $a=h(\xi_R)\operatorname{vol}(R)$ and $b=\int_R(h-h(\xi_R))$ yields $|\int_Rh|\ge|h(\xi_R)|\operatorname{vol}(R)-(\varepsilon/2)\operatorname{vol}(R)$. Summing, using that cell volumes total $1$, and applying [F7] to the chosen tags gives $\sum_R|\int_Rh|\ge\sum_R|h(\xi_R)|\operatorname{vol}(R)-\varepsilon/2\ge\int|h|-\varepsilon$. The variation supremum is at least this sum, and arbitrary $\varepsilon$ gives $V_V(g)\ge\int|h|$. [F1, F3, F4, F6, F7, F8, F9, step 1.1, algebra]

3.1 Thus $V_V(f_u)=\int|\partial_u f(x_u;1_{-u})|$ for each nonempty $u$. Summing these finitely many equalities and using [F1] gives the displayed formula. [F1, step 1.1, step 2.1] ∎
