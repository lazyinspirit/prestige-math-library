---
id: lem-coordinate-direction-form-of-the-slobodeckij-seminorm
kind: lemma
title: "The coordinate-direction form of the Slobodeckij seminorm"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-fractional-slobodeckij-space-on-euclidean-space, thm-polar-coordinates-formula-for-lebesgue-measure, thm-integrals-are-invariant-under-measure-preserving-maps, thm-tonelli-and-fubini-for-completed-product-measures, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-holder-inequality-for-integrals, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, the equivalence (1.3) of the boundary norm with the local incremental-quotient norms, printed pp. 288-289, and footnote 8 on their independence of the local system."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, estimates (3.6)-(3.7), printed pp. 25-26: all lift and trace estimates are carried out in the coordinate-direction difference form."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.1, printed p. 96: the double-integral seminorm whose polar form is compared with directional differences."
---

## Statement

Assume Countable Choice. Let $d\ge1$, $0<s<1$, $1\le p<\infty$, and let
$g:\mathbb R^d\to\mathbb K$ be measurable, with $[\cdot]_{s,p}$ the
Slobodeckij seminorm of
[[def-fractional-slobodeckij-space-on-euclidean-space]] and $e_1,\dots,e_d$ the
canonical basis of $\mathbb R^d$. Then
$$[g]_{s,p}^p\asymp_{d,p,s}\sum_{i=1}^d\int_0^\infty h^{-1-sp}\int_{\mathbb R^d}|g(x+he_i)-g(x)|^p\,dx\,dh,$$
in the sense that both sides are finite simultaneously and the two quantities
are comparable by constants depending only on $d,p,s$. For the trace exponent
$s=\theta=1-1/p$ the weight is $h^{-p}$, because $1+p\theta=p$.

## Facts & Assumptions

**Given:** An integer $d\ge1$, $0<s<1$, $1\le p<\infty$, and a measurable $g:\mathbb R^d\to\mathbb K$, with $[\cdot]_{s,p}$ as in [[def-fractional-slobodeckij-space-on-euclidean-space]]. Write $D_g(h,\omega):=\int_{\mathbb R^d}|g(x+h\omega)-g(x)|^pdx\in[0,\infty]$ for $h>0$, $\omega\in S^{d-1}$, and $F_g(\omega):=\int_0^\infty D_g(h,\omega)h^{-1-sp}dh\in[0,\infty]$.

[F1] For measurable $g$ the seminorm is the completed-product integral of the integrand $|g(x)-g(y)|^p|x-y|^{-d-sp}$ over $\mathbb R^d\times\mathbb R^d$, read as $0$ on the diagonal, and it may be $+\infty$. ([[def-fractional-slobodeckij-space-on-euclidean-space]])

[F2] Assume Countable Choice. For a nonnegative measurable function on a product of sigma-finite measure spaces the double integral equals the two iterated integrals with the section integrals as in the cited statement. For a function measurable on the uncompleted product, all section integrals are measurable on the original factor sigma-algebras. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-countable-choice]])

[F3] If $T$ preserves the measure $\mu$ and $f\ge0$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$; in particular Lebesgue measure is invariant under the translations $x\mapsto x+v$. ([[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F4] Assume Countable Choice. For every Borel measurable $f:\mathbb R^d\to[0,\infty]$, $\int_{\mathbb R^d}f\,d\lambda_d=\int_0^\infty\int_{S^{d-1}}f(r\omega)r^{d-1}d\sigma(\omega)dr$, where $\sigma$ is the finite Borel measure on $S^{d-1}$ given by the polar formula; a Borel measurable angular function composed with $z\mapsto z/|z|$ is Borel measurable off the origin, and the origin is a null set. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

## Proof

**Proof technique:** direct.

1.1 The polar identity and the directional notation. Replace $g$ by a Borel function equal to it almost everywhere; such a function is obtained by replacing the measurable sets in simple approximations by Borel sets modulo null sets. For every fixed increment its difference integral is unchanged, and the double integral is unchanged by Tonelli. Work with that Borel representative below. Substitute $y=x+h$ in [F1] and use translation invariance [F3] to write, for a.e. fixed $h$, $\int_{\mathbb R^d}|g(x)-g(x+h)|^pdx=D_g(|h|,h/|h|)$; Tonelli [F2] then gives $[g]_{s,p}^p=\int_{\mathbb R^d}D_g(|h|,h/|h|)|h|^{-d-sp}dh$. The functions $(h,\omega)\mapsto D_g(h,\omega)$ and $F_g$ are Borel measurable: the first is an iterated integral of the nonnegative measurable function $(x,h,\omega)\mapsto|g(x+h\omega)-g(x)|^p$ over $x$, and the second is the section integral of $D_g(h,\omega)h^{-1-sp}$, both covered by Tonelli's measurability clause [F2]. Polar coordinates [F4] turn the display into $[g]_{s,p}^p=\int_{S^{d-1}}F_g(\omega)\,d\sigma(\omega)$, and $F_g(e_i)=\int_0^\infty h^{-1-sp}\int_{\mathbb R^d}|g(x+he_i)-g(x)|^pdx\,dh$ is the $i$-th summand in the statement; all quantities are nonnegative extended integrals, so no convergence hypothesis is needed. [F1, F2, F3, F4, algebra, given]

1.2 The coordinate increment decomposition. Fix a nonnegative smooth probability density $\rho$ supported in $B(0,1/2)$ and put $\psi(z)=\rho(z-e_i)$. For every $h>0$, $x$ and $z=e_i+t$, the triangle inequality gives $|g(x+he_i)-g(x)|^p\le2^{p-1}(|g(x+he_i)-g(x+hz)|^p+|g(x+hz)-g(x)|^p)$. Average this nonnegative inequality against $\psi(z)dz$ and integrate in $x$. Translation invariance and Tonelli yield $D_g(h,e_i)\le2^{p-1}(\int\rho(t)D_g(h|t|,t/|t|)dt+\int\psi(z)D_g(h|z|,z/|z|)dz)$, with the zero increment interpreted as zero. This argument remains valid for infinite integrals and requires no integral of $g$ itself. [F2, F3, algebra, given]

1.3 The sphere comparison. For a bounded nonnegative compactly supported Borel function $\varphi$ and a nonnegative Borel measurable $F$ on $S^{d-1}$, Tonelli [F2] and polar coordinates [F4], applied to the nonnegative Borel function $z\mapsto\varphi(z)F(z/|z|)$ with the value $0$ prescribed at the origin, give $\int_{\mathbb R^d}\varphi(z)F(z/|z|)\,dz=\int_{S^{d-1}}F(\omega)\bigl(\int_0^\infty\varphi(r\omega)r^{d-1}dr\bigr)d\sigma(\omega)\le C_\varphi\int_{S^{d-1}}F\,d\sigma$, where $C_\varphi:=\sup_{\omega\in S^{d-1}}\int_0^\infty\varphi(r\omega)r^{d-1}dr$ satisfies $C_\varphi\le MR^d/d<\infty$ whenever $\varphi\le M$ and its support lies in $B(0,R)$; this applies in particular to $\varphi=\rho$ and to $\varphi=\psi$. [F2, F4, algebra]

2.1 The upper comparison. Fix $\omega\in S^{d-1}$ and $r>0$ and put $p_k:=r\sum_{i\le k}\omega_ie_i$ for $k=0,\dots,d$, so that $p_0=0$ and $p_d=r\omega$. Telescoping along the polygonal path $p_0,\dots,p_d$ gives $g(x+r\omega)-g(x)=\sum_{k=1}^d\bigl(g(x+p_k)-g(x+p_{k-1})\bigr)$, and each summand is the translate by $p_{k-1}$ of the increment $g(\cdot+r\omega_ke_k)-g(\cdot)$; by convexity and [F3], $D_g(r,\omega)\le d^{p-1}\sum_{k=1}^dD_g(r|\omega_k|,\operatorname{sgn}(\omega_k)e_k)$, the term being zero when $\omega_k=0$. Multiplying by $r^{-1-sp}$, integrating in $r$, and substituting $h=r|\omega_k|$ in the $k$-th term (using $|\omega_k|^{sp}\le1$) and using $F_g(-e_k)=F_g(e_k)$ by translation invariance gives $F_g(\omega)\le d^{p-1}\sum_{k=1}^dF_g(e_k)$ for every $\omega$. Integrating over $S^{d-1}$ with [F4] and step 1.1 yields the upper comparison $[g]_{s,p}^p\le d^{p-1}\sigma(S^{d-1})\sum_{i=1}^dF_g(e_i)$. [F3, F4, step 1.1, algebra]

2.2 The lower comparison. Multiply step 1.2 by $h^{-1-sp}$ and integrate in $h$. Tonelli and the substitutions $u=h|t|$, $u=h|z|$ give $F_g(e_i)\le2^{p-1}(\int\rho(t)|t|^{sp}F_g(t/|t|)dt+\int\psi(z)|z|^{sp}F_g(z/|z|)dz)$. The factors $|t|^{sp}$ and $|z|^{sp}$ are bounded on the respective supports. Step 1.3 therefore bounds the right-hand side by $C(d,p,s)\int_{S^{d-1}}F_g\,d\sigma=C(d,p,s)[g]_{s,p}^p$. [F2, step 1.1, step 1.2, step 1.3, algebra]

3.1 Conclusion. Summing the lower comparison of step 2.2 over $i=1,\dots,d$ and combining it with the upper comparison of step 2.1 gives $c_1\sum_iF_g(e_i)\le[g]_{s,p}^p\le c_2\sum_iF_g(e_i)$ with $c_1,c_2$ depending only on $d,p,s$; in particular the two sides are finite simultaneously, since a finite constant times $+\infty$ is $+\infty$. Writing out $F_g(e_i)$ as the coordinate-direction integral of the statement and using $1+p\theta=p$ at $s=\theta=1-1/p$ gives the displayed equivalence and the weight $h^{-p}$. [step 2.1, step 2.2, algebra, given] ∎

## Source notes

Gagliardo, printed pp. 288-289 and footnote 8, states the equivalence of the double-integral boundary norm with the local incremental-quotient norms in a local system of coordinates; Kampanou, printed pp. 25-26, carries all estimates in the coordinate-direction difference form, and Schikorra, printed p. 96, compares the double-integral seminorm with directional differences. The proof above realizes the comparison through the polar decomposition [F4]: the upper bound telescopes an increment along a coordinate polygonal path, and the lower bound averages a pointwise increment inequality against a fixed smooth probability density centred at $e_i$ and compares the resulting spherical integrals by polar coordinates.
