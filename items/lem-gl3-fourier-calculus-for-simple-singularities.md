---
dependency_level: 5
id: lem-gl3-fourier-calculus-for-simple-singularities
kind: lemma
title: "Fourier calculus for reciprocal power-log singularities"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gl3-voronoi-archimedean-transform, lem-gl3-homogeneous-fourier-mellin-kernel, lem-ip-smooth-whitney-extension-on-compact-sets, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier, thm-polynomial-growth-functions-define-tempered-distributions, thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-integration-by-parts, lem-test-function-cutoffs-and-euclidean-localization, thm-dominated-convergence, def-countable-choice, thm-identity-theorem-holomorphic-functions]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, Theorem 6.6 and its full §6 proof; local Taylor-tail reconstruction using the library's proved smooth Whitney extension"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Let $g\in C^\infty(\mathbb R)$ have every derivative zero at zero and suppose that, for sufficiently large $|u|$, it is a finite sum of terms
$$(\operatorname{sgn}u)^\theta|u|^\nu(\log|u|)^q a(1/u),$$
where $\theta\in\{0,1\}$, $\nu\in\mathbb C$, $q\ge0$ is an integer and $a$ is smooth near zero. Then $g$ is tempered and $\widehat g$ restricts on $\mathbb R\setminus\{0\}$ to an element of $\mathcal S_{\mathrm{sis}}(\mathbb R)$. More precisely, near zero this function is a smooth function plus a finite sum, one group for each displayed tail, of the form
$$(\operatorname{sgn}x)^\theta|x|^{-\nu-1}\sum_{l=0}^{q+1}(\log|x|)^l A_l(x),$$
with all $A_l$ smooth. The degree $q+1$ can be omitted unless $\nu+1$ is an integer congruent to $\theta$ modulo two.

Consequently, for every $f\in\mathcal S_{\mathrm{sis}}(\mathbb R)$, $\alpha\in\mathbb C$ and $\eta\in\{0,1\}$, the smooth, infinitely flat at zero, polynomial-growth function
$$g_{\alpha,\eta}(u)=f(1/u)(\operatorname{sgn}u)^\eta|u|^{-\alpha-1}\quad(u\ne0),\qquad g_{\alpha,\eta}(0)=0$$
defines a tempered distribution, and $\widehat g_{\alpha,\eta}|_{\mathbb R^*}$ belongs to $\mathcal S_{\mathrm{sis}}$. For fixed $f,\eta$ it is an entire function of $\alpha$ at every $x\ne0$, locally uniformly together with every $x$ derivative. On a compact set of $\alpha$, its derivatives decay rapidly at infinity uniformly, and there is an integer $K$ independent of $j$ such that $|D_x^jT_{\alpha,\eta}f(x)|\le C_j|x|^{-K-j}$ for $0<|x|\le1$. It agrees with the absolutely convergent defining integral wherever that integral converges, so supplies the continued operator $T_{\alpha,\eta}$ on the full simple-singularity space.

## Statement references

[Miller and Schmid, Theorem6.6 and its proof in §6](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated data and [[def-countable-choice|Countable Choice]]. Complex powers use the real logarithm of the positive modulus.

[F1] [[lem-gl3-homogeneous-fourier-mellin-kernel]] supplies the meromorphic kernels $K_{\theta,s}$, their explicit Taylor regularization and homogeneous Fourier identity. Their gamma coefficients have at most simple poles, by the displayed gamma formula and its simple-pole continuation.

[F2] [[lem-ip-smooth-whitney-extension-on-compact-sets]] realizes every prescribed smooth jet on the compact singleton $\{0\}$, with no choice axiom; complex values are two real components.

[F3] [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] and [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] identify the transforms of L1 derivatives and moments with bounded continuous functions and the stated polynomial multipliers.

[F4] [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]] gives a smooth transform for a compact distribution. [[thm-polynomial-growth-functions-define-tempered-distributions]] makes the displayed smooth polynomial-growth functions tempered.

[F5] [[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]] and [[thm-integration-by-parts]] supply the local continuous-derivative regularity argument below, under the same Countable Choice.

[F6] [[lem-test-function-cutoffs-and-euclidean-localization]] gives compact and complementary tail cutoffs. [[thm-dominated-convergence]] permits the explicitly dominated Fourier and parameter derivatives below. [[def-gl3-voronoi-archimedean-transform]] defines $\mathcal S_{\mathrm{sis}}$ and its initial operator. [[thm-identity-theorem-holomorphic-functions]] gives uniqueness of analytic continuation.

## Proof

**Given:** The stated data.

1.1 Differentiating a tail term $m$ times gives the bound $O(|u|^{\operatorname{Re}\nu-m}(1+|\log|u||)^q)$ at infinity, since every derivative of $a(1/u)$ contributes further inverse powers. For every integer $j\ge0$ and all sufficiently large $m$, $D_u^m(u^jg)$ therefore belongs to L1. Near zero this follows from smooth infinite flatness; on the intervening compact set it follows from smoothness. In particular $g$ is a smooth function of polynomial growth and is tempered by [F4]. Applying [F3] shows that every distribution derivative $D_x^j\widehat g$, restricted to $x\ne0$, is represented by a continuous function bounded by $C_{j,m}|x|^{-m}$ for arbitrarily large $m$. Indeed multiply its transform identity by $x^m$ and use the L1 bound for $D_u^m(u^jg)$. [F3, F4, given, algebra]

1.2 Choose a smooth tail cutoff $\chi_\infty$ zero near zero and one for large modulus. For a fixed parity $\theta$ the family $\chi_\infty K_{\theta,s}$ is entire as a tempered-distribution family: every parameter derivative is a power of $\log|u|$, controlled against Schwartz tests uniformly on compact parameter sets. The identity in [F1] gives, on $x\ne0$, [F1, F4, F6, algebra]
$$\widehat{\chi_\infty K_{\theta,s}}(x)=(-1)^\theta G_\theta(s)(\operatorname{sgn}x)^\theta|x|^{-s}-\widehat{(1-\chi_\infty)K_{\theta,s}}(x).$$
The second term is a meromorphic family of smooth functions by [F4]: its Laurent coefficients are Fourier transforms of compact distributions. This assertion can also be read directly from [F1]'s finite Taylor-subtraction formula, whose compact-parameter estimates remain valid after every $x$ derivative of the exponential test. Taking the regular Laurent coefficient of degree $q$ at any $s_0$ therefore proves that the transform of $\chi_\infty(\operatorname{sgn}u)^\theta|u|^{s_0-1}(\log|u|)^q$ is, near zero and off zero, a smooth function plus
$$(\operatorname{sgn}x)^\theta|x|^{-s_0}\sum_{l=0}^{q+1}c_l(\log|x|)^l.$$
Here one multiplies the regular coefficient by $q!$; at a pole the whole tail family is entire, so its degree-$q$ Taylor coefficient is the regular Laurent coefficient of the two meromorphic terms together. A simple pole of $G$ raises the logarithmic degree by at most one. Such a pole occurs only when $s_0$ is a nonpositive integer of parity $\theta$. [F1, F4, F6, algebra]

2.1 These continuous distribution derivatives are classical derivatives. Locally on an interval away from zero, let $v_0,v_1$ be the continuous representatives of a distribution and its first derivative. The integral $V(x)=\int_{x_0}^xv_1(t)dt$ exists by [F5]; the estimate of its difference quotient by $\sup_{|t-x|\le|h|}|v_1(t)-v_1(x)|$ proves $V'=v_1$. Compact C1 integration by parts makes its distribution derivative the same. Thus $D(v_0-V)=0$, and [F5] implies $v_0-V$ is constant. Hence $v_0$ is C1 with derivative $v_1$. Iterating gives smoothness, and step 1.1 gives rapid decay of every derivative at infinity. [F5, step 1.1, algebra]

2.2 Treat $g_{\mathrm{tail}}(u)=\chi_\infty(u)(\operatorname{sgn}u)^\theta|u|^\nu(\log|u|)^qa(1/u)$ and write $a(v)=\sum_{j=0}^Na^{(j)}(0)v^j/j!+R_N(v)$. Taylor's remainder gives $R_N(v)=O(|v|^{N+1})$ with the corresponding derivative estimates. The $j$th monomial tail is the case of step 1.2 with parameter $s_j=\nu+1-j$ and parity $\theta+j$. Its singular part is therefore [F1, F6, step 1.2, algebra]
$$(\operatorname{sgn}x)^\theta|x|^{-\nu-1}\sum_{l=0}^{q+1}c_{j,l}x^j(\log|x|)^l,$$
where $c_{j,l}$ depends only on the $j$th jet, the fixed parameters and the homogeneous kernel. In particular it is independent of the truncation $N$. The identity uses $(\operatorname{sgn}x)^{\theta+j}|x|^{-\nu-1+j}=(\operatorname{sgn}x)^\theta|x|^{-\nu-1}x^j$. If $\nu+1$ is not an integer of parity $\theta$, none of the $s_j$ can be a pole of the corresponding $G_{\theta+j}$, so $c_{j,q+1}=0$ for every $j$. [F1, F6, step 1.2, algebra]

3.1 For each $l$, prescribe the complex jet $A_l^{(j)}(0)=j!c_{j,l}$ for all $j\ge0$. The Whitney compatibility conditions on the singleton are vacuous for distinct points, so [F2] gives a smooth $A_l$ with exactly these jets. A compact cutoff equal to one near zero may be applied without changing any jet. For an arbitrary integer $L\ge0$, choose $N>\operatorname{Re}\nu+L$. The remainder tail $\chi_\infty(\operatorname{sgn}u)^\theta|u|^\nu(\log|u|)^qR_N(1/u)$ has every moment through order $L$ in L1, so its Fourier transform is C^L by dominated differentiation in [F3], [F6]. On the output side, $A_l(x)-\sum_{j=0}^Nc_{j,l}x^j$ and its derivatives through order $L$ are $O(|x|^{N+1-j})$. After multiplication by the singular power and logarithm, their derivatives through order $L$ tend to zero at zero, because $N-\operatorname{Re}\nu-L>0$. The extension by zero of these remainders is C^L, verified successively by the difference quotient or mean-value estimate. Thus step 2.2 implies that [F2, F3, F4, F6, step 2.1, step 2.2, algebra]
$$\widehat{g_{\mathrm{tail}}}(x)-(\operatorname{sgn}x)^\theta|x|^{-\nu-1}\sum_l(\log|x|)^lA_l(x)$$
extends to a C^L function near zero for this tail, including its smooth compact Fourier correction terms. Since $L$ is arbitrary and the continuous extensions agree on the punctured neighborhood, this remainder has a single C∞ extension. Summing the finitely many tails proves the asserted simple-singularity description. [F2, F3, F4, F6, step 2.1, step 2.2, algebra]

4.1 If $f\in\mathcal S_{\mathrm{sis}}$, its rapid derivative decay at infinity makes $g_{\alpha,\eta}$ smooth and infinitely flat at zero. Its defining finite simple-singularity expansion at zero becomes exactly the tail expansion in this lemma, with $\nu=-\alpha-1-\beta$, parity $\theta=\eta+\eta_f$, and logarithmic degree unchanged. Steps 1.1–3.1 therefore prove the full mapping into $\mathcal S_{\mathrm{sis}}$ for every complex $\alpha$ and both signs, including resonances. For fixed $f$ and a compact set of $\alpha$, choose $m$ large enough that $D_u^m(u^jg_{\alpha,\eta})$ and each of its parameter derivatives are uniformly L1, for each of finitely many desired $j$. One may take $m=K+j$ with one fixed integer $K$ for all $j$: the tail estimate in step 1.1 requires only $m>j+\max\operatorname{Re}\nu+1$, uniformly on the compact parameter set. This gives the stated common-$K$ power bounds at zero, and taking arbitrarily larger $m$ gives uniform rapid decay at infinity. Then for $x\ne0$ its Fourier formula after $m$ integrations by parts is an ordinary L1 integral divided by a power of $2\pi ix$. Dominated complex difference quotients prove holomorphic dependence on $\alpha$, locally uniformly with those $x$ derivatives. Where $g_{\alpha,\eta}$ is L1 its ordinary Fourier integral is the initial definition. Such a half-plane exists for each fixed $f$, and for Schwartz $f$ includes $\operatorname{Re}\alpha>0$. Analytic uniqueness supplies its continuation to every $\alpha$, completing the assertion. [F3, F4, F6, step 1.1, step 2.1, step 3.1, algebra] ∎
