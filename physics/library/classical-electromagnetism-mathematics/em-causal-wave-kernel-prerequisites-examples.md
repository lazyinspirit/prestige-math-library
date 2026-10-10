---
page: em-causal-wave-kernel-prerequisites-examples
title: Causal kernels, gauge and point fields after wave existence — Examples
status: draft
items: []
examples: [ex-em-causal-wave-kernel-prerequisites-explicit-checks]
---

The companion page records three explicit mathematical checks of the
conventions and hypotheses used on [[em-causal-wave-kernel-prerequisites]]; all
of them carry `domain: mathematics` and make no empirical claim.

[[ex-em-causal-wave-kernel-prerequisites-explicit-checks]] first specializes the
retarded point formulas of [[lem-em-point-retarded-potential-and-fields]] to the
static history $z\equiv0$, where the root is $s=t-|x|/c$ and the pair reduces to
$\varphi=C/|x|$, $A=0$, $E=Cx/|x|^3$, $B=0$, and checks that the kernel's
retarded-history integral then reproduces the time-independent Poisson kernel
$1/(4\pi|x-y|)$ on each compact observation region once the static source is cut
off in time. Second, it performs an explicit Lorenz-gauge transformation in an
instance where the Lorenz divergence is the nonzero constant $G=1$: for
$\varphi\equiv0$, $A=(x_1,0,0)$ and $\chi=-|x|^2/6$ one has $W\chi=1=G$, the
gauge transform is $T_\chi(\varphi,A)=(0,((2/3)x_1,-x_2/3,-x_3/3))$, its Lorenz
divergence vanishes and the fields are unchanged, which is the point where the
lemma's clause (d) about differences of solutions enters because the explicit
gauge function does not carry the zero Cauchy data of the existence
construction. Third, it verifies the sharpness of the kernel support at the cone
apex and at every nonzero cone point by a nonnegative-test computation, matching
the support statement of [[lem-em-retarded-wave-kernel]].
