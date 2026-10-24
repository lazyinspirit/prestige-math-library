---
id: ex-the-regular-position-momentum-imprimitivity-system
kind: example
title: "The regular translation system on $L^2(\\mathbb R^n)$: position, momentum and trivial stabilizer"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
proof_strategy: direct
deps:
  - thm-mackey-imprimitivity-theorem
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
  - thm-unitary-induction-from-a-closed-subgroup
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-projection-valued-measure
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-strongly-continuous-unitary-representation
  - def-coset
  - def-group-action
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - thm-reals-cauchy-complete
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - lem-metrics-on-rn
  - thm-product-of-countable
  - def-infinitesimal-generator-of-a-unitary-group
  - lem-real-ltwo-multipliers-and-unitary-transport
  - thm-plancherel
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-translation-modulation-dilation-and-reflection-laws
  - lem-schwartz-space-is-dense-in-l-two
  - def-schwartz-space-and-its-seminorms
  - thm-bounded-borel-pvm-integral
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Example

Assume AC and let $n\ge0$ be an integer. Let $G=\mathbb R^n$ act on $X=\mathbb R^n$ by translation, let
$U=\lambda_G$ be the left regular representation on $L^2(\mathbb R^n)$, and let
$P(E)$ be multiplication by the indicator of a Borel set
$E\subseteq\mathbb R^n$. Then $(U,P)$ is a transitive system of imprimitivity
on $\mathbb R^n=\mathbb R^n/\{0\}$ with trivial stabilizer, $P$ is the joint
spectral measure of the $n$ commuting self-adjoint position operators
$M_{x_j}$ of multiplication by the coordinates, and $U$ is the representation
induced from the trivial representation of the trivial subgroup; the
momentum operators are the self-adjoint Fourier multipliers $P_j=\mathcal F_2^{-1}M_{2\pi\xi_j}\mathcal F_2$ on $D_j=\{f\in L^2:\xi_j\mathcal F_2f\in L^2\}$, with $U_{te_j}=e^{-itP_j}$. With the repository convention $U_{te_j}=e^{itT_j}$, the full self-adjoint and derivative generators are $T_j=-P_j$ and $G_j=-iP_j$ on $D_j$. On Schwartz functions, $P_j=-i\partial_j$, $T_j=i\partial_j$ and $G_j=-\partial_j$; the differential notation here is asserted on that test space. The system is the classical model behind the
imprimitivity theorem and behind the position-momentum form of the
Stone-von Neumann uniqueness theorem.

## Facts & Assumptions

**Given:** AC, the translation action of $\mathbb R^n$ on itself, and the pair $(U,P)$ with $U=\lambda_G$ and $P(E)=M_{\mathbf 1_E}$.

[F1] The left regular representation $\lambda_G$ on $L^2(\mathbb R^n)$ is unitary and strongly continuous ([[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-left-and-right-regular-unitary-representations]]).

[F2] For the multiplication PVM $P(E)=M_{\mathbf 1_E}$ on $L^2(\mathbb R^n)$ one has $P(\varnothing)=0$, $P(\mathbb R^n)=I$, $P(E)P(F)=P(E\cap F)$, strong countable additivity, and integration of bounded Borel functions gives multiplication by those functions ([[def-projection-valued-measure]], [[thm-bounded-borel-pvm-integral]]).

[F3] Translation is a continuous transitive action of $\mathbb R^n$ on itself whose stabilizer at the origin is $\{0\}$, so the base is the homogeneous space $\mathbb R^n/\{0\}=\mathbb R^n$; the pair $(U,P)$ with the covariance identity is a transitive system of imprimitivity ([[def-group-action]], [[def-coset]], [[def-system-of-imprimitivity]], [[def-transitive-system-of-imprimitivity]]).

[F4] The $H=\{e\}$ clause of the induction theorem identifies $\operatorname{Ind}_{\{0\}}^{\mathbb R^n}1$ with the left regular representation and its canonical system with the multiplication system ([[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]], [[thm-unitary-induction-from-a-closed-subgroup]], [[def-strongly-continuous-unitary-representation]]).

[F5] The one-parameter groups $t\mapsto U_{te_j}$ are the coordinate translation groups, and their generator is computed directly on the Schwartz space: there the generator satisfies $G_jf=-\partial_jf$, so $-iG_jf=i\partial_jf$, and the multiplier theorem identifies the full Fourier-side domain ([[def-infinitesimal-generator-of-a-unitary-group]], [[lem-real-ltwo-multipliers-and-unitary-transport]], [[thm-plancherel]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]], [[lem-schwartz-space-is-dense-in-l-two]], [[def-schwartz-space-and-its-seminorms]]).

[F6] For $n\ge1$, with the metric $d_\infty(x,y)=\max_j|x_j-y_j|$, real completeness gives convergence of Cauchy sequences and the countable dense set $\mathbb Q^n$ makes $\mathbb R^n$ Polish; its Borel space is standard Borel ([[thm-reals-cauchy-complete]], [[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-metrics-on-rn]], [[def-polish-space]], [[def-standard-borel-space]]). For $n=0$, use the zero metric on the singleton $\mathbb R^0$ instead.

[F7] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** AC, $G=\mathbb R^n$, $X=\mathbb R^n$, the translation action, $U=\lambda_G$ on $L^2(\mathbb R^n)$, and $P(E)=M_{\mathbf 1_E}$.

1.1 For $n=0$, the base and group are singletons, $L^2(\mathbb R^0)=\mathbb C$ with unit mass, $U=I$ and $P$ is the one-point PVM; induction from the trivial group gives this system, and there are no coordinate operators. Thus all claims hold in that case. Assume $n\ge1$ for the remaining steps. Then $U$ is a strongly continuous unitary representation and $P$ is a projection-valued measure by [F1] and [F2]. Covariance is a direct computation from $(U_tf)(x)=f(x-t)$: $U_tP(E)U_t^{-1}=M_{\mathbf 1_E(\cdot-t)}=P(t+E)$. The action is transitive and the stabilizer of the origin is $\{0\}$ by [F3], so the base is $\mathbb R^n/\{0\}=\mathbb R^n$ with the trivial subgroup. [F1, F2, F3, algebra]

1.2 For each $j$, $M_{x_j}$ has domain $\{f\in L^2:x_jf\in L^2\}$ and is an unbounded self-adjoint real multiplication operator by the multiplier result of [F5]. Its spectral projections are $M_{\mathbf 1_{\{x:x_j\in A\}}}$ for Borel $A\subseteq\mathbb R$. They commute, and the joint multiplication PVM is $P$; the unbounded coordinate integral $\int x_j\,dP$ equals $M_{x_j}$ on its stated domain, while bounded Borel functions of the coordinates act by the bounded integrals of [F2]. [F2, F5, algebra]

1.3 $U$ is induced from the trivial representation of the trivial subgroup: by the $H=\{e\}$ clause of [F4], $\operatorname{Ind}_{\{0\}}^{\mathbb R^n}1$ is the left regular representation on $L^2(\mathbb R^n)$, and the canonical system of that induction is the multiplication system $P$. [F4]

1.4 For Schwartz $f$, the difference quotient $(U_{te_j}f-f)/t$ tends in $L^2$ to $-\partial_j f$, by the fundamental theorem of calculus and a Schwartz majorant. To identify the full domain, apply the unitary Fourier transform of [F5]: coordinate translation becomes multiplication by $e^{-2\pi it\xi_j}$ in the usual Fourier normalization. The derivative limit exists precisely when $\xi_j\widehat f\in L^2$: sufficiency follows from $|(e^{-2\pi it\xi_j}-1)/t|\le2\pi|\xi_j|$ and dominated convergence, and necessity from an almost-everywhere convergent subsequence of any $L^2$ limit of the quotients, whose pointwise limit is $-2\pi i\xi_j\widehat f$. Define $P_j=\mathcal F_2^{-1}M_{2\pi\xi_j}\mathcal F_2$ on $D_j=\{f:\xi_j\mathcal F_2f\in L^2\}$. The multiplier theorem makes it self-adjoint and its transported exponential is $U_{te_j}=e^{-itP_j}$. Thus $G_j=-iP_j$ and $T_j=-iG_j=-P_j$ on the full domain $D_j$. On Schwartz functions the Fourier differentiation identity gives $P_j=-i\partial_j$, recovering $G_j=-\partial_j$ and $T_j=i\partial_j$ there. No pointwise derivative of a general $L^2$ class is used. [F5, algebra]

2.1 Standard Borel and Polish: by [F6] the metric $d_\infty$ makes $\mathbb R^n$ complete with countable dense subset $\mathbb Q^n$, so $\mathbb R^n$ is Polish and its Borel space is standard Borel, while the singleton case $n=0$ uses the zero metric as in step 1.1; the base with its standard Borel structure is the one used by the system. [F6, step 1.1]

3.1 Steps 1.1, 1.2, 1.3, 1.4 and 2.1 verify all the displayed claims: transitivity with trivial stabilizer, the PVM as joint spectral measure of position, the induced-representation identification, the momentum generators, and the standard-Borel base. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, F7] ∎
