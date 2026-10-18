---
id: lem-bem-lipschitz-graph-sobolev-and-green-interface
kind: lemma
title: Sobolev pullback and Green identity on Lipschitz graphs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-axiom-of-choice
  - thm-na-rademacher-euclidean
  - thm-acl-characterisation-of-w-one-p
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - lem-na-lipschitz-scalar-h1-h2-extension
  - thm-sobolev-spaces-are-banach-spaces
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - prop-mollifier-families-are-l-one-approximate-identities
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-holder-inequality-for-integrals
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - thm-rmk-uniqueness-among-radon-measures
  - def-banach-valued-vector-measure-and-variation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Martin Costabel, Boundary Integral Operators on Lipschitz Domains, Elementary Results (1988)
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: Printed pp. 614 and 617, Lipschitz coordinate invariance and the first Green formula. The elementary graph proof below supplies the local prerequisite.
---

## Statement

Assume the Axiom of Choice. Let $\psi:\mathbb R^2\to\mathbb R$ be $L$-Lipschitz, put $\Phi(z,t)=(z,t+\psi(z))$, and let $G=\{(z,s):s>\psi(z)\}$. Pullback by $\Phi$ and by its inverse preserves volume and is bounded on $H^1(\mathbb R^3)$. The localized pullbacks from either side of a Lipschitz graph to flat half-boxes are bounded in $H^1$. A function $u\in H^1$ up to the graph has a bounded local $L^2$ trace $\tau u$, obtained from its flattened one-dimensional endpoint trace. For compactly supported smooth $\eta$ in a graph chart,
$$\int_G\big((\partial_j u)\eta+u\partial_j\eta\big)\,dx=\int_{\partial G}(\tau u)\eta n_j\,dS.$$
Here, with derivatives defined almost everywhere,
$$dS=\sqrt{1+|\nabla\psi(z)|^2}\,dz,\qquad n\,dS=(\partial_1\psi,\partial_2\psi,-1)\,dz.$$
For a domain below the graph the normal sign reverses. These graph surface measures and normals agree on overlapping rigid graph charts, so they define an intrinsic surface measure and almost-everywhere unit outward normal on a compact Lipschitz boundary. Such a boundary satisfies $|\Gamma\cap B(x,r)|\le Cr^2$ for small $r$ and $|\{x:\operatorname{dist}(x,\Gamma)<\delta\}|\le C\delta$ for small $\delta$.

Matching local traces on the two sides make piecewise $H^1$ functions glue to $H^1$ with the piecewise weak gradient. A zero-trace $H^1$ function supported inside a boundary chart extends by zero through the graph with no distributional boundary derivative; it can be approximated in $H^1$ by smooth functions supported strictly on its own side. The corresponding assertions hold after finite chart localization on a bounded Lipschitz domain or bounded boundary collar.

## Facts & Assumptions

**Given:** AC, the graph, shear and one-sided chart functions in the Statement. In localized formulas the test support stays away from the chart sides.

[A1] AC supplies the assumptions of all cited Sobolev, integration and differentiability interfaces. ([[def-axiom-of-choice]])

[F1] Lipschitz functions are differentiable almost everywhere, and locally Lipschitz functions have the corresponding weak derivatives by the ACL characterization. ([[thm-na-rademacher-euclidean]], [[thm-acl-characterisation-of-w-one-p]])

[F2] Completed-product Fubini and the absolutely continuous fundamental theorem apply to the coordinate slices used below. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]])

[F3] Bounded Lipschitz domains admit bounded whole-space $H^1$ extension. Compactly supported extensions can be mollified with convergence of the function and each first weak derivative in $L^2$; $H^1$ is complete. Translation converges in $L^2$ for the function and each first weak derivative, so it converges in $H^1$. Smooth cutoffs obey the weak product rule. ([[lem-na-lipschitz-scalar-h1-h2-extension]], [[thm-sobolev-spaces-are-banach-spaces]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F4] Lebesgue measure is Radon, and Radon measures are determined by continuous compactly supported tests. Vector-measure variation is the supremum over finite measurable partitions of the sums of the vector norms. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[thm-rmk-uniqueness-among-radon-measures]], [[def-banach-valued-vector-measure-and-variation]])

[F5] Integral Cauchy--Schwarz is the square-integrable case of Holder. ([[thm-holder-inequality-for-integrals]])

## Proof

1.1 For every nonnegative measurable $f$, vertical translation in each fixed $z$ slice and [F2] give $\int f(\Phi(z,t))\,dzdt=\int f(z,s)\,dzds$; the inverse has the same property. The maps are continuous bijections, so Borel measurability is preserved, and this identity also preserves null sets and hence completed Lebesgue measurability. First take smooth compactly supported $u$. Its composition with either Lipschitz shear is locally Lipschitz, so [F1] gives weak derivatives equal almost everywhere to the ordinary chain-rule values. In particular $\partial_t(u\circ\Phi)=(\partial_3u)\circ\Phi$ and $\partial_i(u\circ\Phi)=(\partial_i u)\circ\Phi+(\partial_3u)\circ\Phi\,\partial_i\psi$ for $i=1,2$. The volume identity and $|\nabla\psi|\le L$ bound its $H^1$ norm by $C_L\|u\|_{H^1}$; the inverse uses $-\psi$. By the whole-space smooth approximation in [F3], both operators extend to all $H^1$ functions, with the correct almost-everywhere compositions identified by the exact $L^2$ volume identity. For a one-sided domain or collar, first use its extension [F3] and localize inside the chart; the same estimates give the asserted local pullbacks independently of the extension, since the compositions agree on that side. [A1, F1, F2, F3, given, construct, algebra]

1.2 On a flat box $Q'\times(0,a)$, smooth $f$ satisfies $|f(z,0)|^2\le C_a\int_0^a(|f(z,t)|^2+|\partial_tf(z,t)|^2)dt$ by the fundamental theorem and [F5]. Integrating in $z$ gives a bounded $L^2$ endpoint trace. Approximation by [F3] extends it to $H^1$; the same fundamental-theorem estimate gives convergence of the slice values to that trace in local $L^2$ as $t\downarrow0$. Define $\tau u$ by applying this trace to the shear pullback in step 1.1. For continuous ambient smooth inputs it is exactly $u(z,\psi(z))$. The bounds make it independent of approximants. [F2, F3, F5, step 1.1, algebra]

2.1 First take an ambient smooth compactly supported $v$ in a chart. Vertical integration gives $\int_G\partial_3v=-\int v(z,\psi(z))dz$. For $i=1,2$, put $A(z)=\int_{\psi(z)}^\infty v(z,s)ds$. This is compactly supported and Lipschitz; [F1] and the one-dimensional differentiation of the lower endpoint give $\partial_iA=\int_{\psi(z)}^\infty\partial_iv(z,s)ds-v(z,\psi(z))\partial_i\psi$ almost everywhere. Its weak derivative integrates to zero by [F2], so $\int_G\partial_iv=\int v(z,\psi(z))\partial_i\psi dz$. These identities are exactly $\int_G\partial_jv=\int v n_jdS$ with the displayed graph formulas. Apply them to $v=u\eta$ for ambient smooth $u$. Approximate a general one-sided $H^1$ input by restrictions of ambient smooth extensions from [F3]; step 1.2 passes their boundary products in $L^2$ on the bounded graph base and their weak derivatives in $L^2$ on the chart. This proves the stated Green identity. No derivative of the graph normal is taken. [F1, F2, F3, step 1.2, given, algebra]

2.2 The vector surface measure in step 2.1 is intrinsic: on a chart it represents the distribution $\eta\mapsto\int_G\nabla\eta$, and on an overlap both chart expressions represent the same domain distribution. Locally these are finite Radon vector measures, because they are continuous graph pushforwards of bounded measurable densities times planar Lebesgue measure on compact subcharts. Equality on smooth tests gives equality on continuous compactly supported tests by uniform mollification; [F4] applied to the positive and negative coordinate measures then gives equality of the vector measures. Their variation is exactly the stated scalar graph measure. Indeed write that vector measure as $n\mu$ with $|n|=1$. The triangle inequality gives variation at most $\mu$. For the reverse inequality partition the unit sphere into finitely many measurable sets on which $n$ differs from one fixed unit vector by at most $\epsilon$; on each such set projection on that vector bounds its vector-measure norm below by $(1-\epsilon)\mu$ of the set. The finite partition definition in [F4], followed by $\epsilon\downarrow0$, gives variation at least $\mu$. Thus both scalar surface measure and its unit normal agree on overlaps. [F4, step 2.1, algebra]

3.1 In a fixed graph chart the graph area density is at most $\sqrt{1+L^2}$, and the base projection of its intersection with a radius-$r$ ball lies in a planar radius-$r$ disk. Thus its area is at most $C_Lr^2$. A finite compact graph cover gives the same bound for the whole compact boundary, uniformly in the ball center. A point at distance less than $\delta$ from a graph has vertical distance at most $(1+L)\delta$: compare it to a graph point at that distance and use the Lipschitz bound. Choose finitely many smaller graph charts covering the compact boundary with positive margins inside their original charts. For sufficiently small $\delta$, its entire $\delta$ neighborhood is covered by the corresponding enlarged chart cylinders; each has bounded planar base and vertical strip thickness at most $2(1+L)\delta$. Fubini gives volume at most $C\delta$ after the finite sum. [F2, step 2.2, algebra]

4.1 Sum the Green formula in step 2.1 over the two sides and localize by a finite smooth chart partition. The normals are opposite and the trace difference is zero for a matching pair, so its interface terms cancel; derivatives of the partition cancel because their sum is one. Hence its distributional gradient is the piecewise $L^2$ gradient and the glued function is $H^1$ locally. The same argument against the zero function on the other side proves zero extension of a zero-trace field has its zero-extended gradient. In flat coordinates a compactly supported zero extension is $H^1$ and supported in $t\ge0$; translation to $t\ge\epsilon$ converges in $H^1$ by [F3]. Pull back to the graph using step 1.1. This produces $H^1$ approximants supported a positive distance inside the graph side, because vertical separation $\epsilon$ gives Euclidean separation at least $\epsilon/\sqrt{1+L^2}$. Mollify in physical coordinates at less than half that distance; [F3] gives interior smooth approximants converging in $H^1$. Cutoffs preserve support margins at chart sides. A finite chart partition and interior cutoffs supply the asserted localized and bounded-domain conclusions. [F2, F3, step 1.1, step 1.2, step 2.1, step 2.2, given, construct, algebra] ∎
