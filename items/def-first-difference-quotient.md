---
id: def-first-difference-quotient
kind: definition
title: "Difference quotients on a shrunken domain"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-locally-integrable-function-as-a-regular-distribution, def-translation-of-a-function-on-rn, def-l-p-space-as-a-quotient-by-null-functions, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice]
landmark: false
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Appendix 4.C, Definition 4.51, printed p. 124 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, the difference-quotient operators and their elementary properties, printed pp. 58-62 (read in full)"
---

## Definition

Assume Countable Choice for the Sobolev interfaces used below. Let
$\Omega\subseteq\mathbb R^n$ be open with $n\ge1$, let
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$u\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$
([[def-locally-integrable-function-as-a-regular-distribution]]). For
$h\in\mathbb R\setminus\{0\}$ and $i\in\{1,\dots,n\}$ let $e_i$ be the
$i$-th standard unit vector and put
$$\Omega_{i,h}:=\{x\in\Omega:x+he_i\in\Omega\}=\Omega\cap(\Omega-he_i),$$
an open subset of $\Omega$, since it is the intersection of the open set
$\Omega$ with the preimage of $\Omega$ under the homeomorphism
$x\mapsto x+he_i$. The **$i$-th difference quotient of $u$ of size $h$** is
$$\delta_h^iu(x):=\frac{u(x+he_i)-u(x)}{h},\qquad x\in\Omega_{i,h},$$
read on the almost-everywhere classes
([[def-l-p-space-as-a-quotient-by-null-functions]]); the
**difference-quotient vector** is
$$\delta_hu:=(\delta_h^1u,\dots,\delta_h^nu),$$
defined on the open intersection $\Omega_h:=\bigcap_{i=1}^n\Omega_{i,h}$,
while each component is defined on its own shrunken set $\Omega_{i,h}$.

Throughout this page the translation notation is the published one of
[[def-translation-of-a-function-on-rn]], namely
$\tau_hu(x)=u(x-h)$; consequently the forward shift that occurs in the
product rule is the translate by $-he_i$:
$$u(x+he_i)=(\tau_{-he_i}u)(x),\qquad \delta_h^iu=\frac{\tau_{-he_i}u-u}{h}\quad\text{on }\Omega_{i,h}.$$

For the open upper half-space
$H=\{x_n>0\}$ and a **tangential**
index $j<n$, the translation $x\mapsto x+he_j$ maps $H$ onto $H$; hence
$\delta_h^ju$ is defined on all of $H$. For the **normal** index $n$ and
$h>0$ one has $H_{n,h}=H$ (since $x_n>0$ implies $x_n+h>0$), while for
$h<0$ one has $H_{n,h}=\{x\in H:x_n>|h|\}$, a proper subset of $H$.

**Well-definedness.** Both values $u(x)$ and $u(x+he_i)$ in the numerator are
defined for every $x\in\Omega_{i,h}$, and
$$|\delta_h^iu(x)|\le\frac{|u(x+he_i)|+|u(x)|}{|h|},$$
so $\delta_h^iu\in L^1_{\mathrm{loc}}(\Omega_{i,h};\mathbb K)$: on a compact
$K\Subset\Omega_{i,h}$ the first term is controlled by
$\int_K|u(x+he_i)|\,dx=\int_{K+he_i}|u(y)|\,dy<\infty$, because
$K+he_i$ is a compact subset of $\Omega$, and the second term is controlled
on $K\Subset\Omega$. Further, the definition depends only on the class of
$u$: if $u=\widetilde u$ almost everywhere on $\Omega$ and $E\subseteq\Omega$
is a null set with $u=\widetilde u$ on $\Omega\setminus E$, then
$\delta_h^iu\ne\delta_h^i\widetilde u$ only at points of
$(\Omega_{i,h}\cap E)\cup(\Omega_{i,h}\cap(E-he_i))$, a null set because
$E$ is null and $E-he_i$ is null by the choice-free translation invariance of
Lebesgue measure
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

**Two warnings, part of the definition.** First, a difference quotient is
defined on the shrunken set $\Omega_{i,h}$ inside $\Omega$, which may equal
$\Omega$ when the shift preserves it; in particular it may be undefined on a strip of width $|h|$
along the boundary, so no estimate below differentiates a Sobolev class
across the boundary. Second, extending a class $u\in H^1_0(\Omega)$ by zero
does not enlarge the domain of its difference quotient: the quotient of the
extension agrees with $\delta_h^iu$ on $\Omega_{i,h}$, while values outside
$\Omega_{i,h}$ use points not both in $\Omega$ and are not values of the
original quotient. In the upper half-space, $\Omega_{n,h}=H$ for $h>0$,
whereas $\Omega_{n,h}=\{x\in H:x_n>|h|\}$ for $h<0$. This is why every
boundary argument on this page uses only
tangential quotients of compactly supported localisations, for which the
shrunken domain is the whole half-space and no extension across
$\partial\Omega$ is invoked.
