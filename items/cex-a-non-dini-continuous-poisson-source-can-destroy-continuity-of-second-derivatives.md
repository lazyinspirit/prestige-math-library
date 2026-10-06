---
id: cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives
kind: counterexample
title: A non-Dini continuous Poisson source can destroy the continuity of the second derivatives
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [def-newtonian-potential, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, thm-polar-coordinates-formula-for-lebesgue-measure, thm-newtonian-potential-for-holder-data-is-classical, lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-euclidean-spheres-and-closed-balls, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, lem-smooth-bump-between-concentric-euclidean-balls, cor-mean-value-theorem, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
sources:
  references:
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, the Dini continuity hypothesis $\\int_0^1\\omega(r)r^{-1}dr<\\infty$ for Theorem 1 and the failure of the second derivatives without it, printed p. 1 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.3, Theorem 5.19 and the discussion of the Hölder/modulus hypothesis for the classical Newtonian solution, printed pp. 119-121 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014; complete 242-page graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7, the kernel computation for the second derivatives of the Newtonian potential, printed pp. 37-39 (read in full)"
---

## Statement refuted

The assertion that continuity of a compactly supported source $f$ suffices for the Newtonian potential $Nf$ to be of class $C^2$ with continuous second derivatives is false; the counterexample and its verification are in the next section.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the dimension $n=2$, any function $h$ and source $f$ with the properties constructed in the counterexample below, and the sign convention $-\Delta\Phi=\delta_0$ with $\Phi(x)=-(2\pi)^{-1}\log|x|$ of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]].

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$, used through the measure, polar and potential interfaces cited below; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] $f$ is continuous: $|f(x)|\le h(|x|)$ with $h(r)\to0$ as $r\downarrow0$, and $f$ is smooth on $\{x\ne0\}$; moreover $\operatorname{supp}f\subseteq\overline B_{1/3}(0)\subseteq\overline B_{1/2}(0)$. The Newtonian potential $Nf(x)=\int\Phi(x-y)f(y)\,dy$ of the bounded compactly supported $f$ is absolutely finite at every $x$ and locally bounded. ([[def-newtonian-potential]], [[lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data]], [[def-euclidean-spheres-and-closed-balls]])

[F2] $\partial_i\Phi(z)=-z_i/(2\pi|z|^2)$ for $z\ne0$, and the mixed kernel is $\partial_1\partial_1\Phi(z)=\cos(2\theta)/(2\pi|z|^2)$ with $z=|z|(\cos\theta,\sin\theta)$; polar integration on $\mathbb R^2$ uses $r\,dr\,d\theta$. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F3] For integrable parameter-dependent functions differentiable in the parameter, differentiation under the integral is valid when the parameter derivatives are measurable and bounded by one integrable majorant throughout a parameter neighbourhood. Repeated differentiation requires this hypothesis at each order. If the resulting derivatives are also pointwise continuous in the parameter under such majorants, dominated convergence makes the parameter integral derivatives continuous. ([[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]])

[F4] For every $0<\alpha<1$, every compactly supported continuous $g$ with finite $\alpha$-Hölder seminorm has $Ng\in C^2(\mathbb R^2)$ with second derivatives locally $\alpha$-Hölder and $-\Delta Ng=g$ pointwise; in particular this applies to every $g\in C_c^\infty(\mathbb R^2)$ and to every $C^{0,\alpha}_c$ function. ([[thm-newtonian-potential-for-holder-data-is-classical]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

[F5] A smooth cutoff equal to one on a compact set and supported in a prescribed larger open set exists (rescalings of a fixed bump), and the mean value theorem bounds an increment by a derivative supremum times the length of the segment. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[cor-mean-value-theorem]], [[def-ck-and-multi-index-notation-in-several-variables]])

[F6] If functions converge pointwise under one integrable majorant, their integrals converge ([[thm-dominated-convergence]]).

[L0] The refuted claim: continuity of a compactly supported continuous source $f$ implies that the Newtonian potential $Nf$ is $C^2$ with continuous second derivatives.

## Counterexample

Choose a smooth scalar cutoff $\eta\in C^\infty([0,\infty);[0,1])$ with $\eta=1$ on $[0,1/4]$ and $\eta=0$ on $[1/3,\infty)$. In $\mathbb R^2$ define $h(0):=0$, $h(r):=\eta(r)/\log(1/r)$ for $0<r<1/3$, and $h(r):=0$ for $r\ge1/3$. Then $h$ is continuous at $0$, smooth on $(0,\infty)$, equals $1/\log(1/r)$ for $0<r\le1/4$, and is supported in $[0,1/3]$. Put $f(x):=h(|x|)\,\frac{x_1^2-x_2^2}{|x|^2}$ for $x\ne0$ and $f(0):=0$. The claim refuted is that such a continuous compactly supported source forces $Nf$ to be $C^2$ with continuous second derivatives.

**Proof technique:** direct.

1.1 Continuity, smoothness away from $0$, and support. Since $(x_1^2-x_2^2)/|x|^2$ is bounded by $1$ and $h\le1$, $|f(x)|\le h(|x|)$ for $x\ne0$ and $f(0)=0$; as $h(r)=1/\log(1/r)\to0$ near $0$, $f$ is continuous there. For $x\ne0$, both $h(|x|)$ and the angular factor are smooth, so $f$ is smooth there. It vanishes for $|x|\ge1/3$, hence is compactly supported in $\overline B_{1/3}(0)$ and the potential is everywhere absolutely finite by [F1]. [given, F1, algebra, A1]

2.1 $Nf\in C^1$ and its first derivatives are kernel convolutions. Fix $x\in\mathbb R^2$, a coordinate $i$, and $h\ne0$, and write $z=x-y$, $r=|h|$. Then $$\frac{Nf(x+he_i)-Nf(x)}h=\int\frac{\Phi(z+he_i)-\Phi(z)}h f(x-z)\,dz,$$ while the candidate derivative is $G_i(x):=\int\partial_i\Phi(z)f(x-z)\,dz$, which is absolutely finite because $|\partial_i\Phi(z)|\le C|z|^{-1}$ is locally integrable and $f$ is bounded with compact support. On $|z|\le2r$, local integrability of the logarithmic kernel gives $$\frac1r\int_{|z|\le2r}\bigl(|\Phi(z+he_i)|+|\Phi(z)|\bigr)|f(x-z)|\,dz+\int_{|z|\le2r}|\partial_i\Phi(z)f(x-z)|\,dz\le C\|f\|_\infty r(1+|\log r|)\to0.$$ On $|z|>2r$, the segment from $z$ to $z+he_i$ stays at distance at least $|z|/2$ from the origin, so the mean-value estimate for $D^2\Phi$ gives $$\left|\frac{\Phi(z+he_i)-\Phi(z)}h-\partial_i\Phi(z)\right|\le C r|z|^{-2}.$$ Since the support of $f(x-\cdot)$ is bounded, the integral of this error is at most $C\|f\|_\infty r\int_{2r}^{R_x}s^{-1}ds=o(1)$ for a fixed finite $R_x$ containing that support. Thus $\partial_iNf(x)=G_i(x)$. For $x'$ in a fixed compact neighborhood of any $x_0$, choose one ball $B_R$ containing all supports of $f(x'-\cdot)$; after the change of variables above, $Nf(x')$ and $G_i(x')$ are integrals on $B_R$ dominated respectively by $\|f\|_\infty|\Phi|$ and $\|f\|_\infty|\partial_i\Phi|$, both integrable there. For any sequence $x_j\to x_0$, pointwise continuity of $f$ and [F6] give $Nf(x_j)\to Nf(x_0)$ and $G_i(x_j)\to G_i(x_0)$; sequential continuity on $\mathbb R^2$ proves continuity of $Nf$ and each $G_i$. Hence $Nf\in C^1$ by the definition of $C^1$. Inserting [F2] gives $\partial_1Nf(x)=-(2\pi)^{-1}\int(x_1-y_1)|x-y|^{-2}f(y)\,dy$. [step 1.1, F1, F2, F6, algebra]

2.2 The truncated Hessian integral. With $z=r(\cos\theta,\sin\theta)$ and $\cos2\theta=2\cos^2\theta-1$, the angular factor gives $z_1^2-z_2^2=r^2\cos2\theta$, so by [F2] and polar integration, for $0<\varepsilon<1/4$, $$\int_{\varepsilon<|z|<1}\partial_1\partial_1\Phi(-z)f(z)\,dz=\frac{1}{2\pi}\int_\varepsilon^{1/4}\frac{h(r)}{r}\,dr\int_0^{2\pi}\cos^2 2\theta\,d\theta+O(1)=\frac12\int_\varepsilon^{1/4}\frac{h(r)}{r}\,dr+O(1),$$ where $\int_0^{2\pi}\cos^22\theta\,d\theta=\pi$ and the $O(1)$ collects the region $1/4<|z|<1$, on which $|h|\le1$ and $|\partial_1\partial_1\Phi|\le(2\pi)^{-1}|z|^{-2}$. Since $\int h(r)r^{-1}dr=-\log\log(1/r)$ on $(0,1/4)$, the last expression equals $\tfrac12\log\log(1/\varepsilon)+O(1)\to+\infty$: the truncated integrals diverge and the principal value $\mathrm{p.v.}\int\partial_1\partial_1\Phi(-z)f(z)\,dz$ does not exist. [step 1.1, F2, algebra]

2.3 Away from the origin second derivatives are finite and continuous. Let $x\ne0$ and choose, by [F5], a cutoff $\chi=1$ on $\overline B(x,|x|/4)$ with $\operatorname{supp}\chi\subset B(x,|x|/2)$. By step 1.1, $f$ is smooth away from $0$, so $\chi f\in C_c^\infty\subset C^{0,1/2}_c$; [F4] gives $N(\chi f)\in C^2$ near $x$. For $g:=(1-\chi)f$, one has $g=0$ on $B(x,|x|/4)$. Thus for $x'\in B(x,|x|/8)$ and $y\in\operatorname{supp}g$, $|x'-y|\ge|x-y|-|x-x'|\ge|x|/8>0$. The integrand $\Phi(x'-y)g(y)$ is smooth in $x'$ there, and it and all its $x'$-derivatives are dominated by constants times $|g(y)|$ on the bounded support. Repeated differentiation under the integral sign [F3] shows that $Ng$ is smooth on $B(x,|x|/8)$. Hence $Nf$ is $C^2$ near every $x\ne0$ with finite continuous second derivatives there. [step 1.1, F3, F4, F5, algebra]

3.1 The second derivative at $0$ does not exist. By step 2.1, for $t\ne0$, $$\frac{\partial_1Nf(te_1)-\partial_1Nf(0)}{t}=-\frac{1}{2\pi t}\int\Bigl(\frac{te_1-y}{|te_1-y|^2}+\frac{y}{|y|^2}\Bigr)_1f(y)\,dy.$$ Split at $|y|=2|t|$. On $|y|\le2|t|$ the integrand is bounded by $C\|f\|_\infty(|y|^{-1}+|te_1-y|^{-1})$, whose integral over the ball of radius $2|t|$ is $O(|t|)$, so this part contributes $O(1)$ after division by $t$. On $|y|\ge2|t|$ the second-order Taylor formula along the segment from $-y$ to $te_1-y$, together with the homogeneity of $\partial_1\Phi$ (degree $-1$) and the mean value bound [F5] for its second derivatives (degree $-3$), writes the integrand divided by $t$ as $\partial_1\partial_1\Phi(-y)f(y)+O(|t|\,|y|^{-3})\,f(y)$, and $\int_{|y|\ge2|t|}|t|\,|y|^{-3}|f(y)|\,dy\le C|t|\int_{2|t|}^{1/2}s^{-2}ds=O(1)$. The main term is exactly the integral of step 2.2 with $\varepsilon=2|t|$, equal to $\tfrac12\log\log(1/(2|t|))+O(1)\to+\infty$ as $t\to0$. Hence the difference quotients of $\partial_1Nf$ at $0$ diverge to $+\infty$ and $\partial_1\partial_1Nf(0)$ does not exist; a fortiori $Nf\notin C^2$ near the origin, and its second derivatives are not continuous there. [step 2.1, step 2.2, F2, F5, algebra]

4.1 Conclusion. Steps 1.1 and 2.1--3.1 exhibit a continuous compactly supported source $f$ whose Newtonian potential is well defined and $C^1$, is $C^2$ away from one point, but fails to be twice differentiable at that point; the truncated Hessian integrals at $0$ diverge like $\tfrac12\log\log(1/\varepsilon)$. Therefore continuity of the source does not imply continuity of the second derivatives of $Nf$, and the counterexample refutes exactly that overclaim. The Hölder hypothesis of [[thm-newtonian-potential-for-holder-data-is-classical]] is used there only through a Dini-type small-scale estimate, and $h(r)=1/\log(1/r)$ has $\int_0^{1/4}h(r)r^{-1}dr=+\infty$, so the failure occurs precisely at the modulus threshold. [step 1.1, step 2.2, step 3.1, step 2.3, given] ∎

## Remarks

- The source $f$ is continuous and compactly supported but not Hölder continuous at the origin: if $\omega_f(r):=\sup_{|x-y|\le r}|f(x)-f(y)|$, then $\omega_f(r)\ge|f(re_1)-f(0)|=1/\log(1/r)$ for $0<r\le1/4$, so $\int_0^{1/4}\omega_f(r)r^{-1}dr=\infty$. No exact equality of the modulus with its radial profile is needed. The example therefore isolates the small-scale modulus as the exact input needed by the Newtonian regularity theorem, beyond mere continuity.
