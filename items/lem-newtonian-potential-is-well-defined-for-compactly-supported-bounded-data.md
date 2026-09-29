---
id: lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data
kind: lemma
title: Bounded compact data give an everywhere finite Newtonian potential
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: §2.11 Newton-potential definition and absolute convergence, printed p.70
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.6.1 local integrability and §2.7 equation (2.24), printed pp.33,36
status: draft
origin: pipeline
proof_strategy: direct
deps: [cor-integral-over-a-null-set-vanishes, def-countable-choice, def-ck-euclidean-maps-and-diffeomorphisms, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-l-infinity-on-a-measure-space, def-locally-integrable-function-on-r-n, def-measure-null-set-and-almost-everywhere, def-metric-ball, def-newtonian-potential, def-p-norms-on-rn, lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets, lem-laplace-fundamental-kernel-is-locally-integrable, lem-p-norms-are-norms-and-induce-the-published-metrics, prop-essential-supremum-is-attained-as-the-least-essential-bound, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sets-are-lebesgue-measurable, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-compact-subset-is-closed-and-bounded, thm-continuous-preimages-of-borel-sets-are-borel, thm-determinant-of-a-triangular-matrix, thm-linearity-of-the-lebesgue-integral-on-l-one]
---

## Statement

Assume Countable Choice and let $n\ge2$. Suppose the $L^\infty(\mathbb R^n)$
class $f$ has a finite-valued measurable representative $f_0$ with compact
support $K$. Then the Newtonian-potential integral for $f_0$ is absolutely
finite at every $x\in\mathbb R^n$, and $Nf_0$ is locally bounded. If $g$ is
any finite-valued measurable representative with $g=f_0$ almost everywhere,
then its integral is also absolutely finite at every $x$ and equals $Nf_0(x)$
pointwise.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge2$, and let $f_0$ be a finite-valued measurable representative of an $L^\infty(\mathbb R^n)$ class, with compact support $K$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] An $L^\infty$ function is measurable and has finite essential supremum. ([[def-l-infinity-on-a-measure-space]]).

[F2] If its essential supremum is finite, then $|f_0|\le\|f_0\|_\infty$ almost everywhere. ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F3] The positive-minus-Laplacian kernel is given by its radial power or logarithmic formula away from zero, and its value at zero may be assigned arbitrarily. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F4] The Newtonian potential is the integral $\int_{\mathbb R^n}\Phi(x-y)f_0(y)\,dy$ wherever it is absolutely finite. ([[def-newtonian-potential]]).

[F5] The normalized kernel $\Phi$ is locally integrable on $\mathbb R^n$. ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F6] Local integrability means that the absolute integral on every Euclidean ball of positive radius is finite. ([[def-locally-integrable-function-on-r-n]]).

[F7] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F8] Every compact subset of a metric space is closed and bounded. ([[thm-compact-subset-is-closed-and-bounded]]).

[F9] For $n\ge1$, $\|\cdot\|_2$ is a norm on $\mathbb R^n$, so it satisfies the triangle inequality. ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[F10] The determinant of a triangular matrix is the product of its diagonal entries. ([[thm-determinant-of-a-triangular-matrix]]).

[F11] The nonnegative integral is monotone. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F12] A nonnegative measurable function has zero integral over a measurable null set. ([[cor-integral-over-a-null-set-vanishes]]).

[F13] The integral over a measurable set is the integral after multiplying by its indicator. ([[def-integral-over-a-measurable-set]]).

[F14] The $L^1$ class is a vector space and its integral is linear. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F15] A continuous map pulls back Borel sets to Borel sets. ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F16] Products, sums, differences and absolute values of measurable real-valued functions are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F17] A real measurable function is integrable exactly when its absolute value has finite integral, and its integral is the difference of the integrals of its positive and negative parts. ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F18] $B(c,r)=\{y:\|y-c\|<r\}$ for $r>0$. ([[def-metric-ball]]).

[F19] A $C^1$ diffeomorphism is a bijection between open sets whose map and inverse are $C^1$. ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F20] Under $\mathrm{AC}_\omega$, every Borel subset of $\mathbb R^n$ is Lebesgue measurable. ([[thm-borel-sets-are-lebesgue-measurable]]).

[F21] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism maps Lebesgue measurable sets to Lebesgue measurable sets. ([[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]]).

[F22] Almost-everywhere equality means equality off a measurable null set. ([[def-measure-null-set-and-almost-everywhere]]).

[F23] The nonnegative integral is homogeneous for nonnegative scalars, including the zero scalar case. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F24] For $n\ge1$, the Euclidean norm and published metric satisfy $\|x-y\|_2=d_2(x,y)$. ([[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

## Proof

**Proof technique:** direct.

1.1 Put $M:=\|f_0\|_\infty<\infty$. By [F2] and [F22], there is a measurable null set $E$ outside which $|f_0|\le M$. Define $\widehat f=f_0\mathbf 1_{E^c}$. By [F16], $\widehat f$ is measurable, and $|\widehat f|\le M$ everywhere; it vanishes outside $K$. The set $K$ is closed and Borel by [F8]. If $K=\varnothing$, then $f_0=0$ everywhere and the conclusion is immediate, so assume $K\ne\varnothing$. [F1, F2, F8, F16, F22, given, cases]

1.2 Fix a ball $C=B(c,R_C)$ with $R_C>0$. By [F8], choose $p\in\mathbb R^n$ and $R_K>0$ with $K\subset B(p,R_K)$. Put $R:=1+R_C+\|c-p\|_2+R_K>0$. For $x\in C$ and $y\in K$, the norm triangle inequality [F9] applied to $x-y=(x-c)+(c-p)+(p-y)$ gives $\|x-y\|_2<R$. By [F24] and the ball definition [F18], this yields $x-K\subset B(0,R)$. For a fixed $x$, define $T_x(y)=x-y$. Directly, $T_x(T_x(y))=y$, $DT_x=-I_n$, and $|\det DT_x|=1$ by [F10]. Thus $T_x$ is a $C^1$ diffeomorphism by [F19]. Moreover, $x-K=T_x^{-1}(K)$ is Borel by [F15] and [F8]. [F8, F9, F10, F15, F18, F19, F24, given, algebra]

2.1 Choose the finite pole value $0$ in [F3]. Since $T_x^{-1}=T_x$, [F21] shows that preimages under $T_x$ of Lebesgue measurable sets are Lebesgue measurable; hence $y\mapsto\Phi(x-y)$ is measurable. The set $x-K$ is Borel by step 1.2, so [F20] and [F16] make $h_x(z):=\mathbf 1_{x-K}(z)|\Phi(z)|$ nonnegative Lebesgue measurable. Applying [F7] to $h_x$ and $T_x$, with $|\det DT_x|=1$, gives $$\int_{x-K}|\Phi(z)|\,dz=\int_{\mathbb R^n}h_x(z)\,dz=\int_{\mathbb R^n}h_x(T_x(y))\,dy=\int_K|\Phi(x-y)|\,dy,$$ because $x-y\in x-K$ exactly when $y\in K$. By [F13], [F11] and step 1.2, $$\int_K|\Phi(x-y)|\,dy\le\int_{B(0,R)}|\Phi(z)|\,dz<\infty,$$ where finiteness follows from [F5]–[F6]. This holds uniformly for $x\in C$. [A1, F3, F5, F6, F7, F11, F13, F16, F20, F21, step 1.2, algebra]

3.1 Since $\widehat f$ vanishes off $K$ and $|\widehat f|\le M$, pointwise $|\Phi(x-y)\widehat f(y)|\le M\mathbf 1_K(y)|\Phi(x-y)|$. The translated kernel and $\widehat f$ are measurable by step 2.1 and [F1, F16], so $u_x$ is measurable. Monotonicity [F11] and homogeneity [F23], together with step 2.1, show $$\int_{\mathbb R^n}|\Phi(x-y)\widehat f(y)|\,dy\le M\int_K|\Phi(x-y)|\,dy\le M\int_{B(0,R)}|\Phi(z)|\,dz<\infty$$ for every $x\in C$. By [F17], $u_x\in L^1$ and $\int u_x=\int u_x^+-\int u_x^-$ with both terms finite and nonnegative, so $|N\widehat f(x)|\le\int|u_x|$. The bound is uniform on $C$. Taking $C=B(x,1)$ for each $x$ proves absolute finiteness everywhere and local boundedness. [F1, F4, F11, F16, F17, F23, step 2.1, algebra]

4.1 Let $g$ be any finite-valued measurable representative with $g=f_0$ almost everywhere. By [F22] choose a measurable null set $N_g$ outside which $g=f_0$, and put $E':=E\cup N_g$. For fixed $x$, the integrands $u_g(y):=\Phi(x-y)g(y)$ and $u_{\widehat f}(y):=\Phi(x-y)\widehat f(y)$ agree off $E'$, so $d:=u_g-u_{\widehat f}$ vanishes there. By [F13], $\int|d|=\int_{E'}|d|=0$ using [F12]. Hence $d\in L^1$; step 3.1 gives $u_{\widehat f}\in L^1$, and [F14] gives $u_g=u_{\widehat f}+d\in L^1$ with $\int u_g=\int u_{\widehat f}$. The measurability established in step 2.1 and [F16] justify the products and difference. Thus every such representative has the same pointwise potential value and absolute finiteness. [F4, F12, F13, F14, F16, F17, F22, step 2.1, step 3.1, algebra]

5.1 If $M=0$, step 1.1 gives $\widehat f=0$ and step 4.1 gives zero potential for every representative. The case $n=1$ is excluded by the hypothesis $n\ge2$. Countable Choice is used exactly through the kernel convention, local-integrability, Borel-measurability, measurable-set, and change-of-variables interfaces [F3–F7, F20–F21]; no full Axiom of Choice is used. There are no endpoint claims or biconditional cases. [A1, F3, F4, F5, F6, F7, F20, F21, step 1.1, step 3.1, step 4.1, cases] ∎

## Source notes

Schmidt §2.11, printed p.70, defines the Newton potential for $f\in L^\infty_{\mathrm{cpt}}$ and says the integral is finite because the fundamental solution lies in $L^1_{\mathrm{loc}}$; his kernel $F$ has the opposite sign to the present $\Phi$, which does not affect absolute convergence. The proof above derives the uniform bound and representative independence from the stated local-integrability and measure interfaces. Hunter §2.6.1, printed p.33, states local integrability of the normalized kernel, while §2.7 equation (2.24), printed p.36, names the integral the Newtonian potential after proving the smooth compact-data case. Hunter's passage does not itself prove the present everywhere-finite bounded-data claim; that part is established here.
