---
id: def-banach-algebra-valued-contour-integral
kind: definition
title: Banach algebra valued contour integral
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-banach-space", "def-unital-banach-algebra", "def-complex-contours-reversal-concatenation-and-closedness", "def-bochner-integrable-function", "thm-bochner-integrability-criterion", "cor-piecewise-c1-paths-have-additive-speed-integral-length", "cor-mean-value-theorem", "def-complex-line-integral-over-a-rectifiable-path", "def-integration-and-index-of-complex-chain"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemmas 5.7–5.9 and Definition 5.8, printed pp. 213–216"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 43–47"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Definition

Let $E$ be a complex Banach space ([[def-banach-space]]), let
$\gamma:[a,b]\to\mathbb C$ be a piecewise $C^1$ contour
([[def-complex-contours-reversal-concatenation-and-closedness]]), and let
$f:\gamma^*\to E$ be continuous. The construction applies in particular to
$E=A$ for a unital complex Banach algebra ([[def-unital-banach-algebra]]);
no algebra multiplication or unit is used.

For $a<b$ fix a finite subdivision $a=t_0<\cdots<t_m=b$ such that the
restriction of $\gamma$ on each piece has a continuous derivative extension
$v_k$ to its closed interval. Given a tagged partition $P=(s_j,\xi_j)$
refining these nodes, define
$$S(f,\gamma,P,\xi)=\sum_j f(\gamma(\xi_j))v_{k(j)}(\xi_j)(s_j-s_{j-1})\in E,$$
where $[s_{j-1},s_j]$ lies in the $k(j)$-th piece. At a node, use the
derivative extension from this piece; the two adjacent intervals may therefore
use different values. The **contour integral** is the norm limit
$$\int_\gamma f(z)\,dz=\lim_{\operatorname{mesh}(P)\to0}S(f,\gamma,P,\xi).$$
Existence and independence of all these choices are verified below. On a
singleton parameter interval the integral is defined to be zero.

Equivalently it is the Bochner integral on the finite Lebesgue measure interval
$$\int_a^b f(\gamma(t))\gamma'(t)\,dt,$$
where the finitely many corner values may be assigned arbitrarily. It satisfies
$$\left\|\int_\gamma f(z)\,dz\right\|\le L(\gamma)\sup_{z\in\gamma^*}\|f(z)\|.$$
Concatenation adds the integrals and reversal negates them. An increasing
piecewise-$C^1$ bijection of compact parameter intervals whose inverse is also
piecewise $C^1$ leaves the integral unchanged.

For a finite complex chain $\Gamma=\sum_{k<r}m_k\gamma_k$ whose nonzero terms
are piecewise $C^1$ contours, and continuous $f:\Gamma^*\to E$, define
$$\int_\Gamma f(z)\,dz=\sum_{\substack{k<r\\m_k\ne0}}m_k\int_{\gamma_k}f(z)\,dz.$$
Zero-coefficient terms are omitted; the empty chain integrates to zero.

## Remarks

**Existence and Bochner agreement.** On the $k$-th closed piece put
$F_k(t)=f(\gamma(t))v_k(t)$. This is uniformly continuous and bounded.
Subdivide each piece into $2^n$ equal intervals and use its left endpoint
values to obtain finite-valued measurable step functions $h_n$. Assign fixed
values at the finitely many nodes. Uniform continuity on the finitely many
pieces shows $h_n\to F$ uniformly away from these nodes; here $F$ denotes
$f(\gamma)\gamma'$ with the chosen node values. In particular $F$ is strongly
measurable, not merely scalar measurable. Each $h_n$ is integrable, and
$\int\|F-h_n\|\to0$ on this finite interval. Thus the definition of Bochner
integration ([[def-bochner-integrable-function]]) supplies its integral, and
[[thm-bochner-integrability-criterion]] gives independence of the approximants.

For arbitrary tagged refinements the corresponding step function differs
from $F$ in norm by at most a common modulus $\omega(\operatorname{mesh}P)$
off the nodes. Hence its $L^1$ difference from $F$ is at most
$(b-a)\omega(\operatorname{mesh}P)$. Comparing its simple integral with those
of $h_n$, the triangle inequality for finite sums bounds the difference of
integrals by the $L^1$ difference. Passing to the limit proves convergence of
all tagged sums to the same Bochner value. Different finite subdivisions
have a common refinement and the same a.e. function $F$; changing finitely
many endpoint values changes neither integral. This proves all independence
claims without a choice of an infinite family of tags.

**Norm estimate.** The triangle inequality gives
$$\|S(f,\gamma,P,\xi)\|\le \sup_{\gamma^*}\|f\|\sum_j|v_{k(j)}(\xi_j)|(s_j-s_{j-1}).$$
The scalar sums tend to the sum of the speed integrals on the pieces,
which is $L(\gamma)$ by
[[cor-piecewise-c1-paths-have-additive-speed-integral-length]]. Taking the
limit proves the bound. A constant contour and a zero integrand therefore
have zero integral, as does a contour with singleton parameter interval.

**Increment sums and parameter changes.** The same value is the limit of
$$T(f,\gamma,P,\xi)=\sum_j f(\gamma(\xi_j))\bigl(\gamma(s_j)-\gamma(s_{j-1})\bigr).$$
To see this, apply the real mean-value theorem
([[cor-mean-value-theorem]]) separately to the two coordinates of $\gamma$
on an interval contained in one smooth piece. If $\eta$ is a common modulus
of the derivative extensions, the difference between its complex increment
and $v_{k(j)}(\xi_j)(s_j-s_{j-1})$ is at most
$\sqrt2\eta(\operatorname{mesh}P)(s_j-s_{j-1})$. Therefore
$\|T-S\|\le\sqrt2\sup\|f\|(b-a)\eta(\operatorname{mesh}P)\to0$.
This also holds for partitions not containing the original nodes: inserting
the finitely many nodes changes only intervals of total length at most
$2m\operatorname{mesh}P$. The bounded derivative extensions bound the
variation of $\gamma$ there by a constant times this length, so both their
old and subdivided contributions tend to zero.

Under an increasing reparametrization as specified above, tagged partitions
and tags map to tagged partitions and tags with exactly the same increment
sums. Uniform continuity of the parameter map makes the image mesh tend to
zero. Both contours remain piecewise $C^1$, so their integrals agree.
Reversal reverses the order and the signs of the increments. For concatenation,
split a partition at the joining parameter and use its two affine pieces;
the increment sums split into the two sums. These facts prove the asserted
reversal and concatenation identities. Finite linearity in chains follows
from their definition. No claim is made here for a reparametrization taking
a contour outside the piecewise-$C^1$ domain.

**Scalar consistency.** When $E=\mathbb C$, expansion into real and imaginary
parts turns the increment sums into the four Riemann–Stieltjes sums in
[[def-complex-line-integral-over-a-rectifiable-path]]. Thus the limits agree
on the common piecewise-$C^1$ domain. Taking finite sums gives agreement with
[[def-integration-and-index-of-complex-chain]]. The zero Banach space is
allowed and all its integrals are zero. The construction uses completeness,
uniform continuity and explicitly prescribed finite subdivisions; it makes
no new choice assumption.
