---
id: def-transformation-algebra-of-a-g-space
kind: definition
title: The transformation (covariance) algebra $C_c(G\times X)$
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
deps:
  - def-group-action
  - def-left-haar-integral-and-left-haar-measure
  - def-compactly-supported-convolution-on-a-group
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-locally-compact-space
  - def-continuous-map-top
  - def-modular-function-of-a-locally-compact-group
  - def-topological-group
  - thm-the-modular-function-is-a-continuous-homomorphism
  - lem-compactly-supported-kernels-admit-commuting-radon-integrals
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "M. A. Rieffel, Induced representations of C*-algebras, Advances in Math. 13 (1974) 176-257, §1 (covariance algebras)"
      url: "https://www.sciencedirect.com/science/article/pii/S0001870874800225"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Definition

Assume AC ([[def-axiom-of-choice]]). Let $G$ be a locally compact Hausdorff
topological group ([[def-topological-group]], [[def-locally-compact-space]])
acting continuously on a locally compact Hausdorff space $X$
([[def-group-action]], [[def-continuous-map-top]], [[def-locally-compact-space]]),
with a fixed left Haar measure $dg$
([[def-left-haar-integral-and-left-haar-measure]]) and modular function
$\Delta_G$ ([[def-modular-function-of-a-locally-compact-group]]). The
**transformation algebra** of the action is the complex vector space
$C_c(G\times X)$ of continuous complex functions with compact support
([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]), equipped with the
twisted convolution

$$(f_1*f_2)(g,x)=\int_G f_1(h,x)\,f_2(h^{-1}g,h^{-1}x)\,dh$$

and the involution

$$f^*(g,x)=\Delta_G(g)^{-1}\overline{f(g^{-1},g^{-1}x)} .$$

**Well-definedness: support and continuity.** Let
$K_i\subseteq G$, $L_i\subseteq X$ be compact sets with
$\operatorname{supp}f_i\subseteq K_i\times L_i$ ($i=1,2$). If
$f_2(h^{-1}g,h^{-1}x)\ne0$ then $h\in gK_2^{-1}$ and $h^{-1}x\in L_2$, while
$f_1(h,x)\ne0$ forces $h\in K_1$; hence the integrand of $(f_1*f_2)(g,x)$ is
supported in the compact set $K_1\cap gK_2^{-1}$, which is nonempty only for
$g\in K_1K_2$, and the integral is a finite number by finiteness of Haar
measure on compacta. For $g$ in a compact neighbourhood $V$ of a fixed $g_0$
the $h$-support lies in the fixed compact set
$K=K_1\cap VK_2^{-1}$, and $x$ in a compact neighbourhood of a fixed $x_0$;
the map $(h,g,x)\mapsto f_1(h,x)f_2(h^{-1}g,h^{-1}x)$ is continuous on
$G\times G\times X$ as a composition of the continuous group operations and
the continuous action ([[def-topological-group]], [[def-group-action]]), so it
is uniformly continuous on the compact set $K\times \overline V\times L$. Given
$\varepsilon>0$ there is a neighbourhood $U$ of $(g_0,x_0)$ with
$|f_1(h,x)f_2(h^{-1}g,h^{-1}x)-f_1(h,x_0)f_2(h^{-1}g_0,h^{-1}x_0)|\le\varepsilon$
for all $h\in K$ and $(g,x)\in U$; both integrands vanish off $K$, so
$|(f_1*f_2)(g,x)-(f_1*f_2)(g_0,x_0)|\le\varepsilon\,|K|$, where $|K|$ is the
finite Haar measure of $K$. This proves continuity of $f_1*f_2$; its support is
contained in $(K_1K_2)\times L_1$, a compact set, so $f_1*f_2\in C_c(G\times X)$.
The product is bilinear in $(f_1,f_2)$ by linearity of the Haar integral.

**Well-definedness: associativity.** Fix $(g,x)$ and put
$F(h,r)=f_1(h,x)f_2(h^{-1}r,h^{-1}x)f_3(r^{-1}g,r^{-1}x)$; it is continuous and
compactly supported in $(h,r)$, with support in the compact set
$K_1\times(K_1K_2\cap gK_3^{-1})$ by the support computation above. Writing
each convolution as its defining integral, the left-hand side of
$(f_1*f_2)*f_3=f_1*(f_2*f_3)$ at $(g,x)$ is the iterated integral
$\int_G\int_GF(h,r)\,dh\,dr$, while the right-hand side is
$\int_G\int_GF(h,hk)\,dk\,dh$; by
[[lem-compactly-supported-kernels-admit-commuting-radon-integrals]] applied to
the continuous compactly supported kernel $F$ the order of the first iterated
integral may be interchanged, and the inner substitution $r=hk$, which
preserves the left Haar integral by
[[def-left-haar-integral-and-left-haar-measure]] and changes
$h^{-1}r\mapsto k$, $r^{-1}g\mapsto k^{-1}h^{-1}g$,
$r^{-1}x\mapsto k^{-1}h^{-1}x$, identifies them. Hence $*$ is associative.

**Well-definedness: involution.** The function $f^*$ is continuous, since
$(g,x)\mapsto(g^{-1},g^{-1}x)$ and $\Delta_G$ are continuous
([[def-modular-function-of-a-locally-compact-group]],
[[thm-the-modular-function-is-a-continuous-homomorphism]]), and its support is
the image of the compact set $\operatorname{supp}f$ under that homeomorphism,
hence compact; so $f^*\in C_c(G\times X)$. Applying $*$ twice and using that
$\Delta_G$ is a continuous homomorphism into the positive reals, so that
$\Delta_G(g^{-1})=\Delta_G(g)^{-1}$, gives
$$(f^*)^*(g,x)=\Delta_G(g)^{-1}\overline{\Delta_G(g^{-1})^{-1}\overline{f(g,x)}}=f(g,x),$$
that is, $(f^*)^*=f$. In the same way, for the products one computes
$$(f_1*f_2)^*(g,x)=\Delta_G(g)^{-1}\int_G\overline{f_1(h,g^{-1}x)}\,\overline{f_2(h^{-1}g^{-1},h^{-1}g^{-1}x)}\,dh,$$
and substituting $h=g\ell$ in the defining integral of $(f_2^**f_1^*)(g,x)$
turns its modular factor into $\Delta_G(g)^{-1}$ because
$\Delta_G(g\ell)^{-1}\Delta_G(\ell^{-1})^{-1}=\Delta_G(g)^{-1}$, so
$(f_1*f_2)^*=f_2^**f_1^*$. Together with the conjugate-linearity of $*$ this
says that $C_c(G\times X)$ with $*$ and $^*$ is a complex associative algebra
with involution; the involution of the group convolution is the special case
of the published definition ([[def-compactly-supported-convolution-on-a-group]]).

**Trivial action.** If $gx=x$ for all $g,x$, then the twisted product becomes
$(f_1*f_2)(g,x)=\int_G f_1(h,x)f_2(h^{-1}g,x)\,dh$, which is convolution in the
group variable with pointwise multiplication in the base variable, with the
factor order of [[def-compactly-supported-convolution-on-a-group]].

AC is inherited through [[lem-compactly-supported-kernels-admit-commuting-radon-integrals]],
which commutes the two Radon integrals in the associativity computation; no
independent choice step is used, and the support, continuity and involution
computations themselves make no choice.
