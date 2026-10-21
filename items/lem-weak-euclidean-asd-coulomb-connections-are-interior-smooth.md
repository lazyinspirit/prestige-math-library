---
id: lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth
kind: lemma
title: "Interior smoothness of weak Euclidean ASD connections in Coulomb gauge"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-small-critical-drift-poisson-gradient-inverse
  - def-riesz-transforms-on-euclidean-space
  - cor-riesz-transforms-are-bounded-on-lp
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - cor-locally-integrable-weakly-harmonic-functions-are-smooth
  - thm-liouville-theorem-for-bounded-harmonic-functions
  - thm-absolute-continuity-of-the-integral
  - thm-holder-inequality-for-integrals
  - thm-banach-fixed-point
  - thm-riesz-fischer-completeness-of-l-p
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-smooth-bump-between-concentric-euclidean-balls
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Lemma 4.7 and subsequent regularity discussion, pp.17–19"
      url: "https://arxiv.org/pdf/math/0209352"
---

## Statement

Assume full AC. Let $\Omega\subset\mathbb R^4$ be open, with the standard Euclidean metric and orientation. Let $a\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathfrak{su}(2)\otimes\mathbb R^4)$ satisfy $d^*a=0$ and $F_a^+=0$ distributionally, where $F_a=da+a\wedge a$ and $F_a^+=(F_a+*F_a)/2$. Then the coefficient classes of $a$ have smooth representatives on $\Omega$, and these representatives satisfy the same equations classically.

This is an interior assertion for a given weak Coulomb gauge. No boundary regularity, existence of a gauge, curved-metric or perturbed ASD equation, singular removal, Fredholm statement, or gluing theorem is asserted.

## Statement references

[[lem-small-critical-drift-poisson-gradient-inverse|Constructed critical potential bounds]]

[[cor-riesz-transforms-are-bounded-on-lp|Riesz bounds]]

[Tao–Tian, Lemma 4.7 and following discussion](https://arxiv.org/pdf/math/0209352)

## Facts & Assumptions

[F1] The full proof of [[lem-small-critical-drift-poisson-gradient-inverse]], steps 1.1–4.1, constructs $Nf=(4\pi^2|x|^2)^{-1}*f$ for compactly supported data, proves $-\Delta Nf=f$, and proves consistent bounded maps $H=\nabla N:L^2_c\to L^4$ and $H:L^3_c\to L^{12}$. For a compact source in $L^1$, $Hf$ is smooth off the support and $O(|x|^{-3})$ at infinity. These are actual proved linear conclusions, independent of its later drift construction.

[F2] Riesz transforms have Fourier symbols $-i\xi_j/|\xi|$ and are bounded on finite $L^p$, $1<p<\infty$. Fourier differentiation and Plancherel identify the symbol calculations below ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-bounded-on-lp]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-plancherel]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F3] A locally integrable distributionally harmonic function is smooth, and a bounded entire harmonic function is constant ([[cor-locally-integrable-weakly-harmonic-functions-are-smooth]], [[thm-liouville-theorem-for-bounded-harmonic-functions]]).

[F4] Absolute continuity of integrals makes the $L^4$ norm of a fixed locally $L^4$ coefficient small on sufficiently small balls. Holder controls products, finite $L^p$ spaces are complete, and simultaneous contraction iterations are legitimate ([[thm-absolute-continuity-of-the-integral]], [[thm-holder-inequality-for-integrals]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-banach-fixed-point]]).

[F5] Balls are Sobolev extension domains. The proved higher-order embeddings include $W^{1,2}\hookrightarrow L^4$, $W^{1,6}\hookrightarrow C^{0,\alpha}$ for $0<\alpha<1/3$, and the embeddings of sufficiently high $W^{m,6}$ into every fixed finite classical differentiability class ([[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F6] Smooth Sobolev approximation and compactly supported cutoffs between balls are available. Unit-mass smooth bumps generate approximate identities; their convolutions converge in every finite $L^p$, are smooth, and differentiate under the integral sign ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-smooth-bump-between-concentric-euclidean-balls]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F7] Full AC is inherited through these analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The open set and weak Coulomb ASD form in the statement. All operators below act componentwise on the three real coefficients of $\mathfrak{su}(2)$.

1.1 **An explicit elliptic first-order system.** Regard a one-form as the four-component column $a=(a_1,a_2,a_3,a_4)^T$. Define the constant-coefficient operator $D=\sum_{k=1}^4C_k\partial_k$ by the matrix $$D=\begin{pmatrix}\partial_1&\partial_2&\partial_3&\partial_4\\-\partial_2&\partial_1&-\partial_4&\partial_3\\-\partial_3&\partial_4&\partial_1&-\partial_2\\-\partial_4&-\partial_3&\partial_2&\partial_1\end{pmatrix}.$$ Its first row is divergence; the other rows are $(da)_{12}+(da)_{34}$, $(da)_{13}-(da)_{24}$, and $(da)_{14}+(da)_{23}$. Thus the hypotheses say $Da=Q(a)a$, where $Q(a)v$ has components $0$, $-[a_1,v_2]-[a_3,v_4]$, $-[a_1,v_3]+[a_2,v_4]$, and $-[a_1,v_4]-[a_2,v_3]$. The bracket inequality $|[X,Y]|\le2|X||Y|$ gives $|Q(a)v|\le c|a||v|$. The displayed matrices satisfy $C_k^TC_l+C_l^TC_k=2\delta_{kl}I$, by multiplying their signed permutation entries, so their formal adjoint obeys $D^*D=-\Delta I$. The equations are meaningful distributionally, since [F5] gives $a\in L^4_{\mathrm{loc}}$ and hence $Q(a)a\in L^2_{\mathrm{loc}}$. [F4, F5, given, construct, algebra]

2.1 **The actual first-order potential and estimate.** Set $Kf=-\sum_kC_k^TH_kf=D^*Nf$ for compactly supported real twelve-component data. By [F1], $K:L^2_c\to L^4$ and $K:L^3_c\to L^{12}$ are consistent bounded operators, with norms at most $M_2,M_3$. For smooth compactly supported $v$, the identity $D^*Dv=-\Delta v$ and [F2] give $\partial_jv=-\sum_kC_k^TR_jR_k(Dv)$ by comparing Fourier symbols away from zero and then using Plancherel injectivity. Consequently $\|\nabla v\|_p\le A_p\|Dv\|_p$ for every $1<p<\infty$. These estimates extend to any compactly supported $v\in L^p$ with $Dv\in L^p$ distributionally: choose a nonnegative cutoff from [F6] and divide it by its positive finite integral to obtain a unit-mass smooth kernel. Convolution with its mollifiers from [F6] gives compactly supported smooth $v_\eta$, with $v_\eta\to v$ and $Dv_\eta\to Dv$ in $L^p$. The latter equality follows directly by testing the distributional identity against the translated smooth kernel. Applying the estimate to $v_\eta-v_\zeta$ makes the gradients Cauchy; completeness and the derivative test identities identify their limit as $\nabla v$. Thus such a $v$ actually belongs to $W^{1,p}$, with the same estimate. [F1, F2, F4, F6, step 1.1, construct, algebra]

3.1 **The potential identifies existing compact solutions.** If $v\in W^{1,2}$ is compactly supported, then $Dv\in L^2_c$ and [F1] gives $K(Dv)\in L^4$. The function $v-K(Dv)$ is locally integrable and distributionally harmonic, since $-\Delta K(Dv)=D^*Dv=-\Delta v$. By [F3] it has a smooth entire harmonic representative. Outside a ball containing both supports, $v=0$ almost everywhere and $K(Dv)=O(|x|^{-3})$ by [F1]; this representative therefore tends to zero at infinity. It is bounded on the remaining compact ball, hence [F3] makes it identically zero. Thus $v=K(Dv)$ as classes. [F1, F3, step 1.1, step 2.1, algebra]

4.1 **Critical local improvement by two consistent contractions.** Fix $x\in\Omega$. Choose $B_{2r}(x)\Subset\Omega$ so small that $c\|a\|_{L^4(B_{2r})}\max(M_2,M_3)\le1/2$, by [F4]–[F5]. Choose a smooth cutoff $\chi$ supported there and equal to one near $\overline B_r(x)$. Put $v=\chi a$, extended by zero, and extend $Q(a)|_{B_{2r}}$ by zero as $B$. Then $v\in W^{1,2}$ is compactly supported and $Dv=Bv+f$, where $f=\sum_kC_k(\partial_k\chi)a\in L^2_c\cap L^3_c$, since it is compactly supported and in $L^4$. By step 3.1, $v=K(f+Bv)$. The operator $Tz=K(f+Bz)$ is a contraction with constant at most $1/2$ both on $L^4$ and on $L^{12}$: Holder gives $Bz\in L^2$ for $z\in L^4$, and $Bz\in L^3$ for $z\in L^{12}$. These sources have common compact support. Start at zero; every iterate belongs to both spaces, and [F4] gives limits in both norms. On bounded sets both convergences imply distributional convergence, so the two limits are the same class. Uniqueness in $L^4$ identifies that class with the already existing $v$. Therefore $a\in L^{12}(B_r(x))$. This obtains an actual gain beyond the critical exponent, with no assumed stronger initial gauge. [F1, F4, F5, F6, step 1.1, step 2.1, step 3.1, choose, construct, algebra]

5.1 **The first supercritical derivative bound.** Since $x$ was arbitrary, step 4.1 gives $a\in L^{12}_{\mathrm{loc}}$. The equation $Da=Q(a)a$ then has right side in $L^6_{\mathrm{loc}}$. For a further compactly supported cutoff $\psi$, the form $w=\psi a$ lies in $L^6$ and $Dw=\psi Q(a)a+\sum_kC_k(\partial_k\psi)a$ lies in $L^6$, with compact support. The actual weak-to-strong conclusion of step 2.1 gives $w\in W^{1,6}$. Hence $a\in W^{1,6}_{\mathrm{loc}}$ and is locally bounded and continuous by [F5]. [F4, F5, F6, step 1.1, step 2.1, step 4.1, algebra]

6.1 **Complete derivative bootstrap.** Suppose $a\in W^{m,6}_{\mathrm{loc}}$ for some integer $m\ge1$. Each derivative of order at most $m-1$ is locally bounded by [F5], since it belongs to $W^{1,6}$ on smaller balls. The ordinary finite Leibniz formula, justified by smooth approximation [F6], shows $Q(a)a\in W^{m,6}_{\mathrm{loc}}$: in a derivative of order $m$, the terms with all derivatives on one factor use its $L^6$ norm and the bounded undifferentiated factor; every remaining factor has order at most $m-1$, so both are bounded on a smaller ball. The same estimates applied to differences justify passage from smooth approximants, since $W^{m,6}$ convergence gives uniform convergence of derivatives through order $m-1$ by [F5]. For any compactly supported cutoff $\psi$, it follows that $D(\psi a)\in W^{m,6}$. For each $|\alpha|=m$, the distribution $z=D^\alpha(\psi a)$ lies in $L^6$ with compact support and $Dz=D^\alpha D(\psi a)\in L^6$, because constant-coefficient derivatives commute on distributions. Step 2.1 gives $z\in W^{1,6}$. Thus $a\in W^{m+1,6}_{\mathrm{loc}}$. Starting at step 5.1, induction gives every finite Sobolev order. [F4, F5, F6, step 1.1, step 2.1, step 5.1, induction, algebra]

7.1 **Smooth representatives and the equations.** For each fixed integer $k$, step 6.1 and [F5] give $C^k$ representatives on smaller balls by choosing a sufficiently large Sobolev order. Continuous representatives of the same class agree on overlaps, since a nonzero continuous difference persists on an open ball of positive measure. The resulting representative is therefore $C^k$ for every $k$, hence smooth on $\Omega$. Its classical derivatives equal the weak derivatives by smooth approximation and the embeddings, so the original weak Coulomb and ASD equations hold classically. All reasoning was interior and used only the given Euclidean weak gauge. Full AC is inherited through [F1]–[F7]. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 5.1, step 6.1, algebra] ∎

## Source notes

The full Lemma 4.7 proof and following regularity discussion in Tao–Tian, PDF pp.17–19, were read. Their broader Yang–Mills argument ends by omitting standard bootstrap details. No such omitted bootstrap is imported here: the Euclidean ASD system is written explicitly, its actual first-order inverse and weak-to-strong estimate are reconstructed, simultaneous critical contractions give $L^{12}$, and the derivative induction is supplied in full. The proved Newtonian/Riesz/Sobolev/mollifier suppliers are the premises. This closes interior regularity only after a weak Coulomb ASD connection exists; it does not close any full instanton Floer construction.
