---
id: lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean
kind: lemma
title: A UCB-invariant mean yields a topological invariant mean
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-reiter-condition-p1
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-axiom-of-choice
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-complex-haar-l-infinity-space
  - def-left-haar-integral-and-left-haar-measure
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-convolution-on-cc-and-l1-of-a-group
  - lem-l1-convolution-norm-inequality
  - lem-convolution-preserves-cc-and-is-associative
  - def-compactly-supported-convolution-on-a-group
  - lem-compactly-supported-kernels-admit-commuting-radon-integrals
  - def-compact-space
  - def-hausdorff-space
  - def-borel-sigma-algebra
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - lem-finite-choice
proof_strategy: direct
axiom_use: AC is inherited through Cc density, the extended L1 convolution, and the published positive probability approximate-identity net. Finite compact partitions use only finite choice; no global Bochner measurability or separability is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.3, complete proof of Theorem G.3.1, implication (i) to (ii), printed pp. 453–454"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Slides 11–14, files pp. 11–14: the UCB convolution identity, approximate-identity comparison, and construction of the topological invariant mean"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with fixed left Haar
measure $\mu$, and let $m$ be a left-invariant mean on the actual-function
space $\mathrm{UCB}(G)$ of [[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]. Thus $m$ is a positive complex-linear functional with $m(1_G)=1$ and $m(L_g\psi)=m(\psi)$ for every $g\in G$ and $\psi\in\mathrm{UCB}(G)$. Fix $f_0\in\mathcal P$ for $\mathcal P$ of [[def-reiter-condition-p1]], and define
$$\widetilde m(\varphi):=m(f_0*\varphi)\qquad(\varphi\in L^\infty(G)),$$
where $*$ is the pointwise $L^1$-to-$L^\infty$ smoothing of
[[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]].
Then $\widetilde m$ is a mean on $L^\infty(G)$ and is topologically invariant:
$$\widetilde m(f*\varphi)=\widetilde m(\varphi)\qquad(f\in\mathcal P,\ \varphi\in L^\infty(G)).$$

## Facts & Assumptions

**Given:** AC, an LCH group $G$ with fixed left Haar measure $\mu$, a
left-invariant mean $m$ on $\mathrm{UCB}(G)$, and the probability densities
$\mathcal P$.

[A1] AC is assumed in the choice-function form of the axiom
([[def-axiom-of-choice]]).

[F1] $\mathrm{UCB}(G)$ consists of actual bounded continuous functions; its
left-translation orbit is sup-norm continuous, translations preserve UCB, and
its sup norm agrees with the embedded $L^\infty$ norm
([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[F2] The smoothing formula $f*\varphi(x)=\int f(y)\varphi(y^{-1}x)\,d\mu(y)$ is an actual bounded UCB function independent of representatives, with sup bound, left-equivariance and associativity $(f*b)*\varphi=f*(b*\varphi)$ for $f,b\in L^1$, $\varphi\in L^\infty$
([[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]]).

[F3] $C_c(G)$ is dense in $L^1(G)$ under AC. The extended convolution is a continuous bilinear operation agreeing with the Cc formula and satisfying $\|u*v\|_1\le\|u\|_1\|v\|_1$; the Cc convolution kernel is continuous and compactly supported
([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]], [[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F4] For Cc kernels, Fubini interchanges the compactly supported Radon integrals under AC; left Haar invariance gives $\int v(y^{-1}x)\,d\mu(x)=\int v\,d\mu$
([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]], [[def-left-haar-integral-and-left-haar-measure]]).

[F5] The positive probability approximate-identity net $(e_U)$ lies in $C_c(G)\cap\mathcal P$ and satisfies $\|f*e_U-f\|_1\to0$ for every $f\in L^1(G)$ under AC
([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]], [[def-reiter-condition-p1]]).

[F6] The integral is linear, satisfies $|\int u|\le\int|u|$, and is monotone and positively homogeneous on nonnegative measurable functions; a nonnegative function with zero integral vanishes almost everywhere
([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F7] On a compact subset of a Hausdorff space, a finite open cover can be disjointified into a finite Borel partition; samples can be chosen from its finitely many nonempty cells ([[def-compact-space]], [[def-hausdorff-space]], [[def-borel-sigma-algebra]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 First, $m$ has norm one. For a real-valued $\psi\in\mathrm{UCB}(G)$, $\|\psi\|_{\sup}1_G\pm\psi\ge0$, so positivity and $m(1_G)=1$ imply $m(\psi)\in\mathbb R$ and $|m(\psi)|\le\|\psi\|_{\sup}$. For complex $\psi$, choose $\alpha$ with $|\alpha|=1$ and $\alpha m(\psi)=|m(\psi)|$; conjugation preserves UCB, so $\operatorname{Re}(\alpha\psi)\in\mathrm{UCB}(G)$ and $|m(\psi)|=m(\operatorname{Re}(\alpha\psi))\le\|\psi\|_{\sup}$ by positivity. Testing at $1_G$ gives $\|m\|=1$. Now fix $f,b\in\mathcal P$. By [F3] choose Cc approximants $u_n,v_n$ to $f,b$ in $L^1$, and replace them by $|u_n|,|v_n|$; since $f,b\ge0$ and $||u_n|-f|\le|u_n-f|$, these remain convergent nonnegative Cc approximants. [A1, F3, F7, algebra]

2.1 Fix $f\in\mathcal P$ and $\psi\in\mathrm{UCB}(G)$. Given $\varepsilon>0$, choose $u\in C_c(G)$ with $\|f-u\|_1<\varepsilon$ and put $K=\operatorname{supp}u$; then $\int_{G\setminus K}f\,d\mu<\varepsilon$. Since $y\mapsto L_y\psi$ is sup-norm continuous and $K$ is compact, a finite open cover of $K$ gives a finite Borel partition $E_1,\dots,E_N$ of $K$ and sample points $y_j\in K$ with $\|L_y\psi-L_{y_j}\psi\|_{\sup}<\varepsilon$ for $y\in E_j$. Set $S=\sum_j(\int_{E_j}f\,d\mu)L_{y_j}\psi$. The pointwise smoothing formula in [F2] gives $\|f*\psi-S\|_{\sup}\le\varepsilon+\varepsilon\|\psi\|_{\sup}$, from the partition error on $K$ and the tail outside $K$. Invariance and linearity of $m$ give $m(S)=m(\psi)\int_Kf\,d\mu$, hence $|m(S)-m(\psi)|\le\varepsilon\|\psi\|_{\sup}$. By step 1.1, $|m(f*\psi)-m(\psi)|\le\varepsilon(1+2\|\psi\|_{\sup})$; letting $\varepsilon\downarrow0$ proves $m(f*\psi)=m(\psi)$. This uses finite Borel partitions and pointwise scalar integrals, with no Bochner measurability or separability assumption. [A1, F1, F2, F3, F7, construct, step 1.1]

2.2 Define $\widetilde m(\varphi)=m(f_0*\varphi)$. By [F2], $\widetilde m$ is complex-linear and $|\widetilde m(\varphi)|\le\|f_0*\varphi\|_{\sup}\le\|\varphi\|_\infty$ by step 1.1. If $\varphi\ge0$, the pointwise smoothing formula gives $f_0*\varphi\ge0$, hence $\widetilde m(\varphi)\ge0$. Also $f_0*1_G=1_G$ because $\int f_0=1$, so $\widetilde m(1_G)=1$. Therefore $\widetilde m$ is a mean on $L^\infty(G)$. [F2, F6, step 1.1]

2.3 For nonnegative $u,v\in C_c(G)$, the compactly supported convolution formula gives $u*v\ge0$. Its integral is $\int_x\int_y u(y)v(y^{-1}x)\,d\mu(y)\,d\mu(x)=\int_yu(y)\int_zv(z)\,d\mu(z)\,d\mu(y)=(\int u)(\int v)$ by [F4] and the substitution $x=yz$. Applying this to the approximants fixed in step 1.1 gives convolution masses tending to $(\int f)(\int b)=1$. [F3, F4, F6, step 1.1]

3.1 Let $(e_U)$ be the net of [F5]. For any $f\in\mathcal P$ and $\varphi\in L^\infty(G)$, $e_U*\varphi\in\mathrm{UCB}(G)$ by [F2], so step 2.1 and associativity in [F2] give $m((f*e_U)*\varphi)=m(f*(e_U*\varphi))=m(e_U*\varphi)$. Also [F2] gives $\|(f*e_U)*\varphi-f*\varphi\|_{\sup}\le\|f*e_U-f\|_1\|\varphi\|_\infty\to0$ by [F5]. Since $m$ is bounded by step 1.1, $m(f*\varphi)=\lim_U m(e_U*\varphi)$, independent of $f\in\mathcal P$. Hence $m(f*\varphi)=m(f_0*\varphi)$ for all $f,f_0\in\mathcal P$. [F2, F5, step 1.1, step 2.1]

3.2 The extension bound in [F3] gives $u_n*v_n\to f*b$ in $L^1$ for the nonnegative Cc approximants from step 1.1: the difference is bounded by $\|u_n-f\|_1\|v_n\|_1+\|f\|_1\|v_n-b\|_1$. Since each $u_n*v_n$ is nonnegative, $\|\operatorname{Im}(f*b)\|_1$ and $\|\bigl(\operatorname{Re}(f*b)\bigr)^-\|_1$ are bounded by $\|u_n*v_n-f*b\|_1$ and tend to zero; [F6] implies $f*b\ge0$ almost everywhere. Continuity of integration on $L^1$, also in [F6], gives $\int f*b=\lim_n(\int u_n)(\int v_n)=1$ by step 2.3. Thus $f*b\in\mathcal P$. [F3, F6, step 1.1, step 2.3]

4.1 For $f\in\mathcal P$ and $\varphi\in L^\infty(G)$, associativity in [F2] gives $\widetilde m(f*\varphi)=m(f_0*(f*\varphi))=m((f_0*f)*\varphi)$. Step 3.2 gives $f_0*f\in\mathcal P$, so the kernel independence proved in step 3.1 makes this value $m(f_0*\varphi)=\widetilde m(\varphi)$. Every argument of $m$ here is a smoothed UCB function by [F2]; no value of $m$ on an arbitrary unsmoothed $L^\infty$ input is used. Together with step 2.2 this proves that $\widetilde m$ is a topological invariant mean. [F2, step 3.1, step 3.2, step 2.2] ∎

## Remark

Step 3.2 also proves that the extended $L^1$ convolution preserves probability
densities: for all $f,b\in\mathcal P$, one has $f*b\in\mathcal P$. The
local proof uses nonnegative compactly supported approximants, compact-support
Radon integration, and convergence in the $L^1$ convolution norm.

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G, §G.3, proof of Theorem G.3.1,
(i) to (ii), printed pp. 453–454, proves the identity $m(f*\varphi)=m(\varphi)$
for UCB inputs, compares probability kernels using a positive approximate
identity, and defines $\widetilde m(\varphi)=m(f_0*\varphi)$. Thomas, Lecture
20, slides 11–14, gives the same construction. The local proof justifies the
compact-partition approximation and uses the right-L1 estimate
$\|f*e_U-f\|_1$ with the smoothing bound; it makes no sup-norm approximate-
identity claim for arbitrary L-infinity inputs.
