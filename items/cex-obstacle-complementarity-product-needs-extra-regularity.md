---
id: "cex-obstacle-complementarity-product-needs-extra-regularity"
kind: "counterexample"
title: "The complementarity product needs extra regularity"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 12
deps:
  - "def-axiom-of-choice"
  - "cor-integral-over-a-null-set-vanishes"
  - "cor-obstacle-complementarity-in-distribution-form"
  - "cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity"
  - "def-dirac-measure"
  - "def-distribution"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-measure-null-set-and-almost-everywhere"
  - "def-metric-ball"
  - "def-multiplication-of-a-distribution-by-a-smooth-function"
  - "def-radon-measure-on-an-lch-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "lem-derivative-of-a-power"
  - "lem-euclidean-balls-have-positive-finite-lebesgue-measure"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "prop-countable-subsets-of-rn-are-lebesgue-null"
  - "prop-dirac-measure-is-a-probability-measure"
  - "thm-acl-characterisation-of-w-one-p"
  - "thm-algebra-of-derivatives"
  - "thm-chain-rule"
  - "thm-comparison-test-for-improper-integrals"
  - "thm-exponential-beats-every-polynomial"
  - "thm-extreme-value-metric"
  - "thm-improper-p-test-rational"
  - "thm-lebesgue-measure-is-a-complete-measure"
  - "thm-logarithm-derivative-and-integral"
  - "thm-polar-coordinates-formula-for-lebesgue-measure"
  - "thm-substitution-for-improper-integrals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 4 Section 4.2, Theorem 4.2 with (58), printed pp. 36-38 (complementarity is stated in the W^{2,2}_loc class, where the relevant products are pointwise); Chapter 3 Section 3.1, printed pp. 26-28 (the variational formulation in H^1 alone)"
---

## Statement refuted

**Refuted:** that for every open $\Omega\subseteq\mathbb R^n$, every $u\in H^1(\Omega;\mathbb R)$ and every nonnegative Radon measure $\mu$ on $\Omega$ ([[def-radon-measure-on-an-lch-space]], [[def-sobolev-space-wkp-and-its-norm]]) the product $u\cdot\mu$ is a well-defined distribution on $\Omega$ by the formula $\varphi\mapsto\int_\Omega u\varphi\,d\mu$. This is the unrestricted class-level product claim; the obstacle corollaries impose continuity or $L^2$ representation to define their products ([[cor-obstacle-complementarity-in-distribution-form]], [[cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity]]).

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the ACL supplier. In dimension $n=2$ the function $u(x)=\log\log(1/|x|)$, extended by a constant outside a neighbourhood of $0$, lies in $H^1(B_{1/2}(0))$ but is unbounded near $0$, so it has no continuous representative there. For the nonnegative Radon measure $\mu=\delta_0$ the calculation of the pairing $\varphi\mapsto\int u\varphi\,d\mu$ requires a representative and returns $0\cdot\varphi(0)$ or $1\cdot\varphi(0)$ for two representatives of the same class; changing the value at the single point $0$ changes the result, so the product $u\cdot\mu$ is not a well-defined distribution. In contrast, the multiplication of a distribution by a smooth function is well-defined ([[def-multiplication-of-a-distribution-by-a-smooth-function]]), because a smooth multiplier carries genuine pointwise values. The Dirac measure in this witness is not asserted to be the reaction of an obstacle solution; the witness refutes multiplication by arbitrary Radon measures from the Sobolev class alone.

## Facts & Assumptions

**Given:** The Axiom of Choice, inherited from the ACL supplier, and the open ball $B:=B_{1/2}(0)\subseteq\mathbb R^2$ ([[def-metric-ball]]), the function $u:B\to\mathbb R$ with $u(x)=\log\log(1/|x|)$ for $0<|x|<1/4$, $u(x)=\log\log 4$ for $1/4\le|x|<1/2$, and $u(0):=0$; the Dirac measure $\mu=\delta_0$ on $B$ ([[def-dirac-measure]]).

[F1] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: the polar surface measure $\sigma$ is a finite Borel measure on $S^1$ and $\int_{\mathbb R^2}f\,d\lambda_2=\int_0^\infty\int_{S^1}f(r\omega)r\,d\sigma(\omega)\,dr$ for every Borel measurable $f\ge0$; a radial integrand gives an inner integral $r\,f(r)\,\sigma(S^1)$.

[F2] [[thm-substitution-for-improper-integrals]], [[thm-improper-p-test-rational]], [[thm-comparison-test-for-improper-integrals]], [[thm-exponential-beats-every-polynomial]]: the monotone substitution $r=e^{-t}$ exchanges $\int_0^{1/4}g(r)\,dr$ with $\int_{\log4}^\infty g(e^{-t})e^{-t}\,dt$ whenever either side converges; $\int_1^\infty t^{-2}\,dt$ converges with value $1$; and for every prescribed polynomial growth there is $T_0$ with $e^{2t}\ge t^4$ for $t\ge T_0$, so $(\log t)^2e^{-2t}\le t^{-2}$ for large $t$ because $\log t\le t$ there.

[F3] [[thm-chain-rule]], [[thm-logarithm-derivative-and-integral]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]: $\frac{d}{dr}\log\log(1/r)=-\frac{1}{r\log(1/r)}$ for $0<r<1$.

[F4] [[thm-acl-characterisation-of-w-one-p]], [[def-l-p-space-as-a-quotient-by-null-functions]]: a class in $L^2(\Omega)$ lies in $H^1(\Omega)=W^{1,2}(\Omega)$ if and only if it has a measurable ACL representative whose classical coordinate derivatives exist almost everywhere, are measurable, and lie in $L^2(\Omega)$.

[F5] [[thm-extreme-value-metric]]: a continuous real function on a compact metric space is bounded.

[F6] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[thm-lebesgue-measure-is-a-complete-measure]]: a Euclidean ball has positive finite Lebesgue measure, singletons are Lebesgue-null, and Lebesgue measure is additive on disjoint measurable sets, so a punctured ball $B_\rho(0)\setminus\{0\}$ has positive measure.

[F7] [[prop-dirac-measure-is-a-probability-measure]], [[def-dirac-measure]], [[cor-integral-over-a-null-set-vanishes]], [[def-measure-null-set-and-almost-everywhere]], [[def-radon-measure-on-an-lch-space]]: $\delta_0$ is a probability measure on $B$ with $\delta_0(\{0\})=1$ and $\delta_0(B\setminus\{0\})=0$, so $B\setminus\{0\}$ is $\delta_0$-null. For a finite-valued Borel measurable real or complex $f$, the function $f-f(0)$ vanishes at $0$ and its absolute value has integral $0$ over $B$, by the null-set integral principle on $B\setminus\{0\}$. Thus $f$ is $\delta_0$-integrable and $\int f\,d\delta_0=f(0)\delta_0(B)=f(0)$. It is a Radon measure: $\delta_0(K)\le1$ on compact sets, and for open $U$ one has $\delta_0(U)=1$ if $0\in U$ (witnessed by the compact set $\{0\}\subseteq U$) and $\delta_0(U)=0$ otherwise, while for Borel $E$ the same alternatives give outer regularity.

[F8] [[lem-test-function-cutoffs-and-euclidean-localization]]: there is $\varphi\in C_c^\infty(B)$ with $0\le\varphi\le1$ and $\varphi=1$ on a neighbourhood of $0$, in particular $\varphi(0)=1$.

## Counterexample

**Proof technique:** direct.

**Given:** The Axiom of Choice and the ball $B=B_{1/2}(0)$ and the function $u$ of the setting above.

1.1 The function $u$ is continuous on $B\setminus\{0\}$: there $|x|$ is continuous and positive, so $x\mapsto\log\log(1/|x|)$ is continuous on the punctured inner ball, and $u$ equals the constant $\log\log 4$ on the outer annulus, with matching limiting value at $|x|=1/4$. Moreover $\log\log(1/r)\to+\infty$ as $r\downarrow0$, because $\log(1/r)\to+\infty$ and $\log s\to+\infty$ as $s\to+\infty$; hence for every $M$ there is $\rho\in(0,1/4)$ with $u(x)>M$ whenever $0<|x|<\rho$. [given]

1.2 For $x\ne0$, rationalising the norm difference gives $(|x+te_i|-|x|)/t=(2x_i+t)/(|x+te_i|+|x|)\to x_i/|x|$ as $t\to0$, hence $\partial_i|x|=x_i/|x|$. On the punctured inner ball $0<|x|<1/4$ the chain rule [F3] gives $\partial_iu(x)=\frac{d}{dr}\log\log(1/r)\big|_{r=|x|}\cdot\frac{x_i}{|x|}=-\frac{x_i}{|x|^2\log(1/|x|)}$, so $|Du|(x)=\frac{1}{|x|\log(1/|x|)}$; on $1/4<|x|<1/2$ the gradient vanishes. The joining circle is Lebesgue-null by [F1] applied to its indicator, since the radial integral is supported at $r=1/4$; the origin is null by [F6]. Define the gradient to be zero on these exceptional sets. By polar coordinates [F1], the substitution $r=e^{-t}$ [F2] and the convergence facts there,
$$\int_Bu^2\,dx=\sigma(S^1)\int_0^{1/4}(\log\log(1/r))^2\,r\,dr+O(1)=\sigma(S^1)\int_{\log4}^\infty(\log t)^2e^{-2t}\,dt+O(1)<+\infty,$$
$$\int_B|Du|^2\,dx=\sigma(S^1)\int_0^{1/4}\frac{dr}{r\log^2(1/r)}=\sigma(S^1)\int_{\log4}^\infty t^{-2}\,dt=\frac{\sigma(S^1)}{\log4}<+\infty,$$
the first integral converging because $(\log t)^2e^{-2t}\le t^{-2}$ for all large $t$ and the remaining compact piece is finite. Hence $u\in L^2(B)$ and its classical gradient lies in $L^2(B)$. [given, step 1.1, F1, F2, F3, F6]

2.1 The function $u$ is Borel measurable, since it is continuous on the open set $B\setminus\{0\}$; along almost every coordinate line — all lines except the single line through $0$ in each of the two coordinate directions — the section is continuous and piecewise $C^1$ with bounded derivatives on each compact subinterval away from $0$ (the joining circle meets a coordinate line in at most two points), hence Lipschitz and absolutely continuous there, and the exceptional lines form a null set. By step 1.2 the classical coordinate derivatives exist almost everywhere, are measurable and lie in $L^2(B)$, so the ACL characterisation [F4] gives $u\in H^1(B)$ and identifies $Du$ with the classical gradient almost everywhere. [step 1.2, F4]

2.2 The class of $u$ has no continuous representative. Suppose $w:B\to\mathbb R$ were continuous with $w=u$ almost everywhere. On the compact ball $\overline B_{1/8}(0)$ the function $w$ is bounded, say $|w|\le M$ [F5]. By step 1.1 choose $\rho\in(0,1/8)$ with $u(x)>M+1$ for all $0<|x|<\rho$; the punctured ball $B_\rho(0)\setminus\{0\}$ has positive Lebesgue measure [F6], so it contains a point $x$ with $w(x)=u(x)>M+1$, contradicting $|w|\le M$. [step 1.1, F5, F6]

3.1 The functions $w_1:=u$ and $w_2:=u+\mathbf 1_{\{0\}}$ (that is, $w_2(0)=1$ and $w_2(x)=u(x)$ for $x\ne0$) are both representatives of the same $L^2$ class, because they differ only on the Lebesgue-null singleton $\{0\}$ [F6, F4]. [step 2.1, F4, F6]

4.1 By [F7], $\mu=\delta_0$ is a nonnegative Radon measure on the locally compact space $B$ and $\int f\,d\delta_0=f(0)$; let $\varphi\in C_c^\infty(B)$ with $\varphi(0)=1$ be the cutoff of [F8]. Evaluating the formula $\varphi\mapsto\int_Bu\varphi\,d\mu$ with the representative $w_1$ gives $w_1(0)\varphi(0)=0$, while evaluating it with $w_2$ gives $w_2(0)\varphi(0)=1$; the two candidates differ by the nonzero distribution $\varphi\mapsto\varphi(0)$. Hence the formula is not independent of the representative of the $H^1$ class, and no distribution $u\cdot\mu$ is defined by it: the product is not a well-defined distribution of the class $u$ alone. [step 3.1, F7, F8]

5.1 Consequently an $H^1$ class alone does not define its product with an arbitrary Radon measure. Sufficient hypotheses supplied by the obstacle corollaries are continuity of the representatives, as in [[cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity]], or the $L^2$ representation of the reaction, as in clause 2 of [[cor-obstacle-complementarity-in-distribution-form]]; neither follows from $u\in H^1$ (and the class here has no continuous representative by step 2.2). This contrasts with [[def-multiplication-of-a-distribution-by-a-smooth-function]], where the multiplier is a genuine function and the product is representative-independent. [step 2.2, step 4.1, F7, F8] ∎
