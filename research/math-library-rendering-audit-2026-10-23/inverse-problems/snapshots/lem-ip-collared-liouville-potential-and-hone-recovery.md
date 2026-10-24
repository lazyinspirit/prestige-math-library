---
id: lem-ip-collared-liouville-potential-and-hone-recovery
kind: lemma
title: Collared Sobolev conductivities have regular Liouville potentials and H1 recovery
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-plancherel
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-ip-collared-sobolev-besov-source-functional-cutoff
  - lem-compact-support-zero-extension-in-wkp
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-l-one-approximate-identity-on-rn
  - lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - thm-l-one-approximate-identities-converge-in-l-p
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Lemmas 6.4–6.5 and the potential-to-conductivity estimate (6.9)
dependency_level: 1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice. Fix $5/2<s<7/2$, $0<\rho<1$, $0<m<1<M$ and $A>0$. Suppose $\sigma_j=1+a_j$ on $\mathbb R^3$, where $a_j$ is real, supported in $\overline{B_\rho}$, $\|a_j\|_{H^s(\mathbb R^3)}\le A$, and $m\le\sigma_j\le M$, for $j=1,2$. Then $g_j=\sqrt{\sigma_j}$ and $\log g_j$ belong to $C^1$, with $g_j-1,\log g_j\in H^s(\mathbb R^3)$ supported in $\overline{B_\rho}$ and uniformly bounded in $H^s$ and $C^1$. The real Liouville potentials
$$q_j=g_j^{-1}\Delta g_j$$
belong to $H^{s-2}(\mathbb R^3)$, have support in $\overline{B_\rho}$, and have norms bounded in terms of $s,\rho,m,M,A$. Moreover,
$$\|\sigma_1-\sigma_2\|_{H^1(\mathbb R^3)}\le C\|q_1-q_2\|_{H^{-1}(\mathbb R^3)},$$
with the same dependence. In particular the right side may be replaced by $C\|q_1-q_2\|_{H^{-1/2}}$ when that stronger norm is used. The Fourier and intrinsic norms for collared variations are those of the collared Sobolev source-functional lemma.

## Statement references

[[lem-ip-collared-sobolev-besov-source-functional-cutoff]]

[[thm-plancherel]]

[Weidling, Lemmas 6.4–6.5](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The choice assumption and collared positive conductivities, Sobolev exponent, and uniform norm bounds in the Statement.

[F1] Whole-space Fourier transformation is unitary on $L^2$. [[thm-plancherel]] Its distributional extension, agreement with Plancherel and derivative rule are given by [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], and [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]. We use their angular-frequency form: $\widehat f(\xi)=(2\pi)^{-3/2}(\mathcal F_{2\pi}f)(\xi/(2\pi))$, so $\widehat{D^\alpha f}=(i\xi)^\alpha\widehat f$. Weighted Sobolev pairings then follow by Fourier Cauchy–Schwarz.

[F2] The intrinsic and Fourier norm conventions are specified in [[lem-ip-collared-sobolev-besov-source-functional-cutoff]]. The fractional norm identity needed here is proved in step 2.1 below, rather than imported as a conclusion of that lemma.

[F3] A Sobolev function supported in a compact subset of an open set extends by zero with all weak derivatives through the stated integer order. [[lem-compact-support-zero-extension-in-wkp]]

[F4] A nonnegative unit-mass smooth bump generates a compactly supported $L^1$ approximate identity. [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[def-l-one-approximate-identity-on-rn]]

[F5] Mollification commutes with weak derivatives on the whole space, and approximate identities converge in finite $L^2$. [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[thm-l-one-approximate-identities-converge-in-l-p]]

[F6] Tonelli's theorem interchanges the nonnegative measurable fractional-difference integrals below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] Countable Choice is used at the Fourier interfaces. [[def-countable-choice]]

## Proof

1.1 Weighted Fourier Cauchy–Schwarz gives $\|a\|_\infty+\|\nabla a\|_\infty\le C_s\|a\|_{H^s}$ because $\int(1+|\xi|^2)^{-s}(1+|\xi|)^2d\xi<\infty$ for $s>5/2$. The Fourier integrals for $a$ and its first derivatives converge absolutely and are continuous by dominated convergence, so these bounds hold for a $C^1$ representative. We shall also use $\|fg\|_{H^b}\le C\|f\|_{H^r}\|g\|_{H^b}$ when $r>3/2$ and $0\le b\le r$. Here is a direct justification: split Fourier space into dyadic annuli, use $\|f_j\|_\infty\le C2^{3j/2}\|f_j\|_2$ for low-high products, and $\|Q_j(f_kg_k)\|_2\le C2^{3j/2}\|f_k\|_2\|g_k\|_2$ when comparable high shells $k$ produce a shell $j\le k+C$. The low-high sum is bounded by $\|f\|_{H^r}\|g\|_{H^b}$ since $r>3/2$. For high-low products, sum the low $g$ blocks with bound $C2^{j(3/2-b)}\|g\|_{H^b}$ if $b<3/2$, a square-root logarithmic factor if $b=3/2$, or $C\|g\|_{H^b}$ if $b>3/2$; the excess $r-3/2>0$ makes the resulting geometric sum converge. For high-high products, weighted summation over $k\ge j-C$ has geometric kernel $2^{-(k-j)(r+b)}$ and excess factor $2^{j(3/2-r)}$; Cauchy–Schwarz for the input shell sequences completes the bound. The estimates are first proved for Fourier truncations and then passed to their norm limits. [A1, F1, given, algebra]

2.1 For $f\in L^2$ and $0<\theta<1$, Plancherel and [F6] give $\int_{\mathbb R^3}\int_{\mathbb R^3}|f(x+h)-f(x)|^2|h|^{-3-2\theta}dx\,dh=\int_{\mathbb R^3}|\widehat f(\xi)|^2\int_{\mathbb R^3}|e^{i\xi\cdot h}-1|^2|h|^{-3-2\theta}dh\,d\xi$. The translation formula follows by substitution on Schwartz functions and then $L^2$ density. Rotation and dilation make the inner integral $c_\theta|\xi|^{2\theta}$, where $0<c_\theta<\infty$ because $|e^{iu}-1|\le\min\{2,|u|\}$. Adding $\|f\|_2^2$ proves equivalence with the Fourier $H^\theta$ norm. Applying this identity to the weak derivatives of order $k$ and using [F1] proves the analogous whole-space intrinsic/Fourier comparison at order $k+\theta$; at integer orders use the derivative rule alone. For $0<\theta<1$, multiplication by a bounded $C^1$ function $h$ is bounded on $H^\theta$. Indeed $|h(x)f(x)-h(y)f(y)|^2\le2\|h\|_\infty^2|f(x)-f(y)|^2+2|f(y)|^2|h(x)-h(y)|^2$. In the last term use $|h(x)-h(y)|\le\min\{2\|h\|_\infty,\|\nabla h\|_\infty|x-y|\}$; integrating the kernel $|x-y|^{-3-2\theta}$ near and far from the diagonal gives a finite constant times $\|f\|_2^2$. Apply the identity just proved to get the Fourier Sobolev bound. For $\theta=0$ this is just the $L^2$ multiplier bound. [F1, F2, F6, step 1.1, algebra]

3.1 If $F$ is any smooth scalar function on a neighborhood of $[m,M]$, then $F(1+a)-F(1)$ belongs to $H^s$ with a uniform bound over this class. To verify the fractional highest derivative directly, write $s=k+\theta$ with $k=2$ or $3$ and $0\le\theta<1$. For $k=2$, the chain rule gives terms $F'(\sigma)D^2a$ and $F''(\sigma)Da\,Da$. The first term is in $H^\theta$ by step 2.1, since $F'(\sigma)$ is bounded $C^1$ uniformly; for the second, $Da\in H^{s-1}$ with $s-1>3/2$, so the algebra bound in step 1.1 and then step 2.1 apply. For $k=3$, the terms are $F'(\sigma)D^3a$, $F''(\sigma)D^2a\,Da$, and $F'''(\sigma)(Da)^3$. Here $Da\in H^{s-1}$ is a multiplier on $H^{s-2}$ by step 1.1, so $D^2a\,Da\in H^{s-2}\subset H^\theta$; the remaining products follow from the same algebra and step 2.1. Lower derivatives have the corresponding easier estimates; the function itself has an $L^2$ bound by the mean value theorem and vanishes wherever $a=0$. These calculations may first be made for smooth approximations: convolve $a$ with a nonnegative mollifier, which preserves $m\le1+a\le M$ and uniform $H^s$ and $C^1$ bounds, and then use convergence in lower Sobolev orders and weak compactness in the Hilbert $H^s$ space to identify the asserted weak derivatives and bound. A bounded sequence in this separable Fourier Hilbert space has a weakly convergent subsequence by diagonal convergence of its countable Fourier coordinates and the norm bound; hence only Countable Choice is used. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 to $F(t)=\sqrt t$, $\frac12\log t$, and $t^{-1/2}$ to obtain the stated regularity and support of $g_j-1$, $\log g_j$, and $g_j^{-1}-1$. To bound $q_j=g_j^{-1}\Delta g_j$ in $H^{s-2}$, for $s<3$ use step 2.1 with $\theta=s-2\in(1/2,1)$ and the uniform $C^1$ norm of $g_j^{-1}$; for $s\ge3$ use the multiplier bound in step 1.1 with $r=s$ and $b=s-2$. Split $g_j^{-1}=1+(g_j^{-1}-1)$ for that whole-space bound. The support statement follows from $g_j=1$ outside the collar ball and from the local definition of weak derivatives. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Put $w=\log g_1-\log g_2$, $H=g_1g_2$ and $Q=q_1-q_2$. Since $H\nabla w=g_2\nabla g_1-g_1\nabla g_2$, distributional differentiation gives $\operatorname{div}(H\nabla w)=g_2\Delta g_1-g_1\Delta g_2=HQ$. The equality follows first for smooth positive approximations and then in distributions using step 4.1 and the Sobolev products from steps 1.1–2.1; all terms also have their ordinary weak-product interpretation because $g_j$ are $C^1$ and $\Delta g_j\in L^2$. The functions $w$ and its gradient vanish outside $\overline{B_\rho}$. By [F3], extend $w$ by zero to $\mathbb R^3$. Choose a nonnegative unit-mass smooth mollifier from [F4]. For small $\varepsilon$, its convolution with the zero extension is supported in $B_2$; by [F5], the mollifications converge to $w$ in $H^1$. Thus the distributional identity may be tested against $w$: $Q\in H^{-1}$ and multiplication by the bounded $C^1$ function $H$ is bounded on $H^1$. It gives $\int H|\nabla w|^2=-\langle Q,Hw\rangle$. [A1, F1, F3, F4, F5, step 1.1, step 4.1, algebra]

6.1 A compactly supported $H^1$ function in $B_\rho\subset(-2,2)^3$ obeys $\|w\|_2\le4\|\partial_1w\|_2$: for a smooth approximation supported in the same larger cube, write $w(x_1,x')=\int_{-2}^{x_1}\partial_1w(t,x')dt$, apply Cauchy–Schwarz, and integrate in $x_1,x'$; passing to $H^1$ limits gives the inequality. Since $H\ge m$, step 5.1 and the Fourier dual bound yield $m\|\nabla w\|_2^2\le\|Q\|_{H^{-1}}\|Hw\|_{H^1}\le C\|Q\|_{H^{-1}}\|w\|_{H^1}$. Poincaré in the first sentence then implies $\|w\|_{H^1}\le C\|Q\|_{H^{-1}}$, dividing by its norm if nonzero. Finally $\sigma_1-\sigma_2=\sigma_2(e^{2w}-1)$; the uniform bounds for $w$, $\sigma_2$ and $\nabla\sigma_2$, the mean value theorem, and the ordinary weak product rule give $\|\sigma_1-\sigma_2\|_{H^1}\le C\|w\|_{H^1}$. Also $\|Q\|_{H^{-1}}\le\|Q\|_{H^{-1/2}}$ by the Fourier weights. This proves all recovery claims. [F1, step 1.1, step 5.1, algebra] ∎
