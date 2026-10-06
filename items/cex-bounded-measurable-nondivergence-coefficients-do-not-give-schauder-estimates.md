---
id: cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates
kind: counterexample
title: Bounded measurable coefficients do not give Schauder estimates
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 2
deps: [def-uniformly-elliptic-nondivergence-operator, def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.5-7.6, the continuity hypotheses on $A$ and the discussion of discontinuous coefficients, printed pp. 134-139 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§1 and §3.2.1, the continuity hypothesis $a^{ij}\\in C(\\bar U)$ and the frozen-coefficient proof, printed pp. 3-4 and 105-107 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.3, Lemma 10.16 with $A^{ij}\\in W^{1,\\infty}$ as the Sobolev-scale analogue, printed pp. 240-241 (read for comparison)"
---

## Statement refuted

The assertion that uniform ellipticity with merely bounded (even bounded continuous) principal coefficients suffices for a $C^{2,\alpha}$ conclusion for classical $C^2$ solutions of $Lu=f$ is false; the counterexample below exhibits a bounded continuous uniformly elliptic $L$, a classical $C^2$ solution of $Lu=1$, and a coefficient that fails to make $D^2u$ $\alpha$-Hölder for any exponent larger than the coefficient modulus. This does not contradict the interior Schauder theorem of this page, which assumes $C^{0,\alpha}$ principal coefficients.

## Facts & Assumptions

**Given:** $n\ge2$, $0<\beta<\alpha<1$, the unit ball $B_1(0)\subseteq\mathbb R^n$, the diagonal matrix field $A(x)=\operatorname{diag}(1+|x_1|^\beta,1,\dots,1)$, and the function $u(x)=\int_0^{x_1}\frac{x_1-s}{1+|s|^\beta}\,ds$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] Uniform ellipticity and the nondivergence operator were fixed in [[def-uniformly-elliptic-nondivergence-operator]]: $L=A^{ij}\partial_i\partial_j$ is uniformly elliptic with constants $\lambda,\Lambda$ when the symmetric matrix field satisfies $\lambda|\xi|^2\le A^{ij}(x)\xi_i\xi_j\le\Lambda|\xi|^2$. The Hölder classes and their seminorms are those of [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]. Coordinates $x_i$ and partials $\partial_i$ use the operator's one-based relabelling of coordinate $i-1$ and $\partial_{i-1}$ in [[def-ck-and-multi-index-notation-in-several-variables]]; multi-index derivatives retain that dependency's canonical order.

## Counterexample

**Proof technique:** direct.

1.1 The coefficient field. For $x\in B_1(0)$ the matrix $A(x)=\operatorname{diag}(1+|x_1|^\beta,1,\dots,1)$ is symmetric with eigenvalues $1+|x_1|^\beta\in[1,2]$, so it is bounded, continuous and uniformly elliptic on $B_1(0)$ with $\lambda=1$, $\Lambda=2$; its off-diagonal entries vanish, and its $C^{0,\alpha}$ seminorm on $B_1(0)$ is infinite because $|x_1|^\beta$ is not $\alpha$-Hölder at $0$ when $\alpha>\beta$. [F1, given, algebra]

1.2 The solution. Since the integrand $\frac{x_1-s}{1+|s|^\beta}$ vanishes at $s=x_1$, differentiating under the integral sign gives $u'(x_1)=\int_0^{x_1}\frac{ds}{1+|s|^\beta}$ and $u''(x_1)=\frac{1}{1+|x_1|^\beta}$; both are continuous on $\mathbb R$, so $u\in C^2$, and $u$ depends on $x_1$ only. Hence $A^{ij}(x)\partial_i\partial_ju(x)=A^{11}(x)u''(x_1)=(1+|x_1|^\beta)\cdot\frac{1}{1+|x_1|^\beta}=1$ for every $x\in B_1(0)$, that is $Lu=1$ with $f\equiv1$, which is as smooth as possible. [F1, given, algebra]

2.1 Failure of the Hölder estimate. For $h\to0$ one has $u''(h)-u''(0)=\frac{1}{1+|h|^\beta}-1=-\frac{|h|^\beta}{1+|h|^\beta}$, so $\frac{|u''(h)-u''(0)|}{|h|^{\alpha}}=\frac{|h|^{\beta-\alpha}}{1+|h|^\beta}\to+\infty$ because $\beta<\alpha$; hence $[u'']_{0,\alpha;B_1(0)}=+\infty$ and $u\notin C^{2,\alpha}(B_1(0))$ for the given $\alpha\in(0,1)$. [step 1.2, F1, algebra]

3.1 Conclusion. Steps 1.1, 1.2 and 2.1 give a uniformly elliptic nondivergence operator with bounded continuous (in particular bounded measurable) principal coefficients and a classical $C^2$ solution of $Lu=1$ on $B_1(0)$ whose second derivative fails to be $\alpha$-Hölder. Therefore bounded measurability of the coefficients does not force $C^{2,\alpha}$ regularity; such a statement is false as stated, and the Hölder hypothesis on $A$ in the interior Schauder estimate of this page is not a technical convenience. The example uses no divergence-form interpretation and no choice beyond [A1]. [step 1.1, step 1.2, step 2.1, A1, given] ∎

## Remarks

- The failure is driven by the coefficient's own modulus: $A^{11}-1=|x_1|^\beta$ is $\beta$-Hölder, and the solution inherits exactly that modulus in $u''$; a $C^{0,\alpha}$ coefficient with $\alpha>\beta$ would require $u''$ to gain that Hölder regularity, which the example shows cannot be expected without the hypothesis.
- The coefficient field here is continuous, so the example also refutes the stronger claim with "continuous" in place of "measurable"; its coefficient modulus is Dini and has vanishing mean oscillation as well. Those weaker hypotheses cannot force the particular $C^{2,\alpha}$ conclusion refuted here; they may support different regularity conclusions.
