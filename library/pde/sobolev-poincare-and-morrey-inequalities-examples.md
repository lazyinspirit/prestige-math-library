---
page: sobolev-poincare-and-morrey-inequalities-examples
title: "Sobolev Poincare and Morrey Inequalities — Examples"
status: published
items: []
examples: ["ex-scaling-for-the-sobolev-conjugate", "ex-poincare-on-an-interval-with-sharp-scaling", "cex-poincare-wirtinger-needs-connectedness", "cex-poincare-without-mean-trace-or-zero-set-normalisation-fails", "cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation", "cex-critical-w-one-n-does-not-embed-in-linfinity", "cex-morrey-endpoint-p-equals-n-fails", "ex-holder-representative-of-a-radial-sobolev-function", "cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay"]
---

This companion page carries the computations and witnesses that pin down the
constants, exponents and hypotheses of the Sobolev, Poincare and Morrey
inequalities on the parent page. The dilation computations show both
directions of the scaling argument: writing $u_\lambda(x)=u(\lambda x)$ forces
the balance $1-n/p+n/q=0$ and hence the Sobolev conjugate $q=p^{*}$, while the
opposite concentration $\varphi_\lambda(x)=\varphi(x/\lambda)$ makes the
$W^{1,p}\to L^q$ ratio diverge for every $q>p^{*}$, so the exponent is sharp.
The outward dilation $\varphi_k(x)=\varphi(x/k)$ shows that on $\mathbb R^n$
the full $W^{1,p}$ norm does not bound $L^q$ for $0<q<p$, and an explicit
power tail shows that set inclusion fails as well. The same mean-zero dilates
defeat the homogeneous Poincare estimate, while the critical whole-space
inequality is unaffected.

The Poincare examples calibrate the constants: on an interval the mean-zero
inequality is linear in the length, and the affine function attains the
matching positive multiple of the length, so the dependence cannot be
improved. The two disjoint unit balls with the indicator function of one of
them show that connectedness is essential, and the constant function on a ball
shows that a gradient-only estimate without a mean, trace or positive-measure
zero-set normalisation fails for both the critical and the same-exponent
bounds. On the Morrey side, the radial powers $|x|^{\alpha_0+\delta}$ with
$\alpha_0=1-n/p$ attain the Holder exponent exactly and exhibit the
borderline for fixed $p>n$: the energy diverges as $\delta\downarrow0$ and
$|x|^{\alpha_0}$ is not a Sobolev function. The failure at $p=n$ is supplied
by the localised double logarithm $\log\log(1+1/|x|)$ is the unbounded $W^{1,n}$
witness: this compactly supported function belongs to every finite $L^q$ but
into neither $L^\infty$ nor any Holder class.

Conventions: $n\ge2$, $1\le p<n$ (or $p>n$ in the Morrey examples), and all
functions are scalar. Each computation is independent of the parent page's
constants and records the exact exponents and normalisations it uses.
