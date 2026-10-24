---
page: smooth-approximation-and-sobolev-extension-examples
title: Smooth Approximation and Sobolev Extension — Examples
status: published
items: []
examples: ["ex-mollification-of-the-absolute-value", "ex-zero-extension-of-a-compactly-supported-sobolev-function", "cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump", "cex-c-infinity-up-to-boundary-density-is-domain-sensitive", "cex-not-every-open-set-is-a-w-one-p-extension-domain", "ex-reflection-extension-on-the-half-line", "cex-mollification-after-zero-extension-does-not-preserve-boundary-values"]
---

These companions compute and stress-test the approximation and extension
claims. The absolute-value corner has weak derivative the sign function, and
its mollifications converge in every finite $W^{1,p}$ on bounded intervals
while the derivative error across the corner stays bounded below in
$L^\infty$; this is the endpoint phenomenon behind the exclusion of
$p=\infty$. Compactly supported Sobolev classes extend by zero with equal
norms, while the zero extension of $u\equiv1$ on $(0,1)$ creates endpoint
jumps whose distributional derivative is $\delta_0-\delta_1$, so it has no
weak derivative represented by a locally integrable function. Mollification
smooths those jumps but does not impose zero boundary values: an even
mollifier gives endpoint limits $1/2$ at every scale
$0<\varepsilon<1/2$. On the half-line the
even reflection is computed explicitly, including the finite-$p$ factor
$2^{1/p}$ and the printed factor-two slip in the cited source. Two
domain-sensitive counterexamples delimit the extension and density theorems:
the slit disc admits a $W^{1,p}$ branch, $1\le p<2$, whose two one-sided
boundary values differ by $2\pi$, so no globally smooth function can
approximate it, and an inward cusp blocks every $W^{1,3/2}$ extension.

The constructions use the main page's conventions: bounded open boxes,
intervals and domains in Euclidean space, with weak derivatives taken as
almost-everywhere classes. Countable Choice is declared through the stated
weak-derivative, convolution and measure interfaces; the slit-disc and cusp
counterexamples additionally rely on the ACL and product-measure interfaces
that declare the Axiom of Choice, and the extension computations use the
chart and reflection interfaces that declare Countable Choice apart from
those two counterexamples.
