---
id: post-rpm-null-test-particle-action
kind: postulate
title: "Massless test-particle action and momentum scale"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-rpm-test-clock-and-background, lem-rpm-einbein-variation-and-equivalence]
dependency_roles:
  post-rpm-test-clock-and-background: formulation-prerequisite
  lem-rpm-einbein-variation-and-equivalence: formulation-prerequisite
physical_scope: "Separate classical massless test-particle sector with nonzero future-null momentum; no proper-time parameter, no P=mU identification, and no claim of empirical realization."
sources:
  references:
    - title: "David Tong, String Theory, complete lecture notes, §1.1.2 relativistic particle and einbein"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Postulate

Let $a,b\in\mathbb R$ with $a<b$. A configuration on $[a,b]$ consists of a $C^2$ curve $x:[a,b]\to M$ and a smooth positive function $e:[a,b]\to(0,\infty)$ on the prescribed background of [[post-rpm-test-clock-and-background]]. Vary $x$ and $e$ independently: $x$ through $C^2$ variations $H:(-\epsilon_0,\epsilon_0)\times[a,b]\to M$ for some $\epsilon_0>0$, with $H(0,s)=x(s)$ and $H(\epsilon,a)=x(a)$, $H(\epsilon,b)=x(b)$, and no causal restriction on the varied curves; and $e$ through jointly smooth positive variations $e_\epsilon:[a,b]\to(0,\infty)$ whose variation field $\delta e:=\partial_\epsilon e_\epsilon|_{\epsilon=0}$ is compactly supported in $(a,b)$. Adopt a distinct massless test-particle sector with primitive action

$$S_0[x,e]=\frac12\int_a^b e(s)^{-1}g_{x(s)}(T(s),T(s))\,ds,\qquad T(s)=dx/ds,$$

and stationary under all such independent variations. The variational equations and their null branch follow from [[lem-rpm-einbein-variation-and-equivalence]]: the constraint is $g(T,T)=0$, and the physical branch requires $T$ to be nonzero and future-directed. The associated momentum $P=T/e$ is nonzero future null; its positive scale is primitive initial data, not $mU$ for any $m=0$ substitution. Null curves have no proper-time parameter. With $s$ in seconds, $T$ in metres per second, and $e$ in kg$^{-1}$, the integral has units joule-seconds. For finite intervals $[a',b']$ and $[a,b]$, an orientation-preserving $C^\infty$ diffeomorphism $s=\phi(r):[a',b']\to[a,b]$ with $\phi'>0$ transforms $T_r(r)=\phi'(r)T(\phi(r))$ and $e_r(r)=\phi'(r)e(\phi(r))$; this leaves the functional invariant by [[lem-rpm-einbein-variation-and-equivalence]] and preserves the stated configuration class. Neither the scale nor a clock reading is inferred from the ray image alone.

This is an adopted classical model formulation, not an empirical observation or a theorem. Its scope excludes mass generation, interactions, and quantum field effects.
