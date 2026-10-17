---
page: sobolev-poincare-and-morrey-inequalities
title: Sobolev Poincare and Morrey Inequalities
status: published
items: ["def-sobolev-conjugate-exponent", "lem-pointwise-potential-bound-for-compactly-supported-smooth-functions", "thm-gagliardo-nirenberg-sobolev-inequality-for-p-one", "thm-gagliardo-nirenberg-sobolev-inequality", "cor-sobolev-inequality-for-w-one-p-zero", "thm-poincare-inequality-on-a-ball", "thm-poincare-inequality-for-w-one-p-zero", "lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n", "def-john-domain-and-john-constant", "lem-john-domain-admits-bounded-overlap-ball-chains", "lem-truncated-riesz-kernel-potential-bounded-on-lp", "thm-poincare-wirtinger-on-bounded-john-domains", "thm-poincare-inequality-with-a-positive-measure-zero-set", "cor-poincare-wirtinger-on-convex-domains", "thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n", "thm-sobolev-poincare-on-bounded-connected-extension-domains", "thm-critical-sobolev-embedding-into-every-finite-lq", "lem-ball-mean-oscillation-potential-bound", "thm-morrey-inequality-for-p-greater-than-n", "thm-w-one-infinity-functions-have-lipschitz-representatives", "lem-weak-partial-derivatives-lower-sobolev-order", "thm-higher-order-sobolev-embedding", "lem-weak-product-rule-for-bounded-sobolev-functions", "cor-sobolev-algebra-above-the-critical-index", "rem-critical-sobolev-does-not-embed-in-linfinity", "rem-domain-classes-for-the-mean-zero-poincare-inequality"]
examples: []
---

This page develops the first-order Sobolev inequalities and the Poincare and
Morrey inequalities on Euclidean domains. The Sobolev conjugate
$p^{*}=np/(n-p)$ is defined with its scaling identity and iterated form, and
the endpoint $p=1$ Gagliardo-Nirenberg-Sobolev inequality is proved by
multiplying the $n$ one-dimensional primitive bounds. The pointwise potential
bound for compactly supported smooth functions and the $W^{1,p}$ ball-mean
oscillation estimate by the Riesz potential of the gradient provide the
analytic engine: they are the substitutes for the maximal-function and
$p>n$ arguments of the classical treatments, and they are proved from polar
coordinates, Fubini, and the smooth approximation of Sobolev classes. The
$1<p<n$ inequality is obtained from the $p=1$ case through the
$|u|^{\gamma}$ device with $\gamma=p(n-1)/(n-p)$ and Holder's inequality,
first for compactly supported smooth functions and then for all of
$W^{1,p}(\mathbb R^n)$ by density and completeness; the zero-boundary closure corollary
follows by extension by zero.

The Poincare theory is developed for three domain classes. On a ball the
convex-domain Poincare-Wirtinger corollary gives the mean-zero estimate with
an explicit dimension-only constant linear in the radius. On bounded John
domains the John curve is converted into a bounded-overlap chain of balls;
telescoping the ball means along the chain, bounding the differences by the
ball Poincare inequality, and summing with the truncated Riesz kernel bound
gives the mean-zero inequality for every $1\le p<\infty$. Bounded convex
domains and the cone-condition classes are compared with the John class, and a
positive-measure zero set normalisation is shown to control the mean, giving
the zero-set Poincare inequality. On bounded connected extension domains the
mean-zero estimate for $1<p<n$ is proved by an extension-cutoff-mollification
argument with Arzela-Ascoli, and the Sobolev-Poincare form at the critical
exponent $p^{*}$ follows from the extension-domain embedding. On the
whole space $W^{1,p}$ does not include into $L^q$ for $q<p$, even with the full Sobolev norm; an explicit power tail witnesses the set-inclusion failure, while dilation disproves the continuous bound and the homogeneous Poincare estimate; the consequences are recorded on the examples
page.

Morrey's inequality for $p>n$ is proved by combining the ball oscillation
bound with Holder's inequality in the exponent $1-n/p$, comparing ball means
at two scales, and identifying the continuous representative by Lebesgue
differentiation; the same computation yields the local Holder bound with the
norm taken on a fixed doubled ball. At $p=\infty$ the $W^{1,\infty}$ classes
of a bounded convex domain are identified with Lipschitz classes through a
multiplicity estimate for segment integrals, a.e.-pair Lipschitz bounds,
Lebesgue points and the dense-subset extension theorem. The higher-order
embedding iterates the first-order Sobolev and Morrey inequalities through the
lower-order weak derivatives, covering the subcritical, critical and
supercritical orders, and the Sobolev algebra property above the critical
index follows from the higher-order Leibniz identity together with
the iterated embeddings. Closing remarks record the $p=n$ endpoint, where the
critical space embeds into every finite $L^q$ but not into $L^\infty$, and the
domain classes covered by the mean-zero Poincare inequality.

Conventions: $\Omega\subseteq\mathbb R^n$ is open, $n\ge2$, $\mathbb K$ is
$\mathbb R$ or $\mathbb C$, and $|Du|$ denotes the Euclidean norm of the weak
gradient. The Axiom of Choice is stated on the items whose proofs invoke the
ACL, extension, density or Arzela-Ascoli interfaces; the mean-zero estimates
are stated with their exact exponent ranges, and the constants depend only on
the data named in each statement.
