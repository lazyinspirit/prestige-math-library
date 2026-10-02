---
id: lem-locality-of-subharmonicity
kind: lemma
title: "Locality of subharmonicity in the plane and on Riemann surfaces"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-riemann-surface-and-holomorphic-atlas
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-maximum-principle-for-plane-subharmonic-functions
  - thm-harmonic-majorant-characterization-of-plane-subharmonicity
  - thm-heine-borel-rn
  - lem-biholomorphic-invariance-of-plane-subharmonicity
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF p. 1: plane theorems whose proofs depend solely on local behaviour hold on Riemann surfaces; PDF pp. 1-2: chartwise definition of harmonic, subharmonic and analytic functions on a surface and the Perron process."
---

## Statement

1. **Plane domains.** Let $\Omega\subseteq\mathbb C$ be a complex domain and let
   $u:\Omega\to[-\infty,\infty)$ be upper semicontinuous. Suppose that every
   point of $\Omega$ has a connected open neighbourhood on which $u$ is
   subharmonic ([[def-plane-subharmonic-function]]). Then $u$ is subharmonic
   on $\Omega$.

2. **Riemann surfaces.** Let $W$ be an open subset of a Riemann surface $X$
   ([[def-riemann-surface-and-holomorphic-atlas]]) and let
   $u:W\to[-\infty,\infty)$. Suppose that every point of $W$ has an open
   neighbourhood on which $u$ is subharmonic
   ([[def-harmonic-and-subharmonic-riemann-surface-functions]]). Then $u$ is
   subharmonic on $W$.

No choice principle is used.

## Facts & Assumptions
**Given:** A complex domain $\Omega$ and an upper semicontinuous
$u:\Omega\to[-\infty,\infty)$ that is subharmonic on a connected open
neighbourhood of each of its points, for part 1; an open subset $W$ of a
Riemann surface $X$ and a $u:W\to[-\infty,\infty)$ that is subharmonic on an
open neighbourhood of each of its points, for part 2.

[F1] Plane subharmonicity: $u$ is subharmonic on a plane domain when $u$ is
upper semicontinuous, is not identically $-\infty$ on any component, and
satisfies the sub-mean inequality over every closed disc; equivalently, by the
harmonic-majorant characterisation, $u$ is subharmonic exactly when $u$ is
upper semicontinuous, is not identically $-\infty$ on any component, and for
every closed disc $\overline{D(a,r)}$ in the domain and every function $h$
continuous on $\overline{D(a,r)}$ and harmonic on $D(a,r)$ with $h\ge u$ on
$\partial D(a,r)$, one has $h\ge u$ on $D(a,r)$
([[def-plane-subharmonic-function]],
[[thm-harmonic-majorant-characterization-of-plane-subharmonicity]],
[[def-plane-harmonic-function]]).

[F2] Finite sums: if $u_1,\dots,u_m$ are subharmonic on a plane domain and
$\alpha_1,\dots,\alpha_m\ge0$, then $\alpha_1u_1+\cdots+\alpha_mu_m$ is
subharmonic; in particular, if $u$ is subharmonic and $h$ is harmonic on a
domain, then $u-h$ is subharmonic there, since $-h$ is harmonic and every
harmonic function is subharmonic
([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]],
[[def-plane-subharmonic-function]]).

[F3] A subharmonic function that attains a finite maximum at an interior point
of a domain is constant on that domain
([[thm-maximum-principle-for-plane-subharmonic-functions]]).

[F4] Elementary upper-semicontinuity consequence, also for values in
$[-\infty,\infty)$: if $s(x)<a$ for real $a$, upper semicontinuity gives a
neighbourhood of $x$ on which $s<a$. Hence $\{s<a\}$ is open and its
complement $\{s\ge a\}$ is closed. In particular, a finite maximum set is
closed. This argument applies on the plane disc and does not invoke the
real-line level-set theorem.

[F5] Closed bounded subsets of $\mathbb R^n$ are compact, so every closed disc
$\overline{D(a,r)}\subseteq\mathbb C$ is compact ([[thm-heine-borel-rn]]).

[F6] Surface subharmonicity is chartwise: $u$ is subharmonic on an open
$W\subseteq X$ when every connected component of every chart expression is plane subharmonic,
and a biholomorphic change of coordinates preserves plane subharmonicity in
both directions; restricting a subharmonic function to an open subset
preserves subharmonicity
([[def-harmonic-and-subharmonic-riemann-surface-functions]],
[[def-riemann-surface-and-holomorphic-atlas]],
[[lem-biholomorphic-invariance-of-plane-subharmonicity]]).

**Proof technique:** direct: reduce the plane statement to the harmonic
majorant characterisation by a maximum-set openness argument, then transport
it chartwise to surfaces.

## Proof

1.1 Under the hypothesis of part 1, $u$ is not identically $-\infty$ on any connected component $C$ of $\Omega$. Otherwise, for a point $x\in C$, take a connected open neighbourhood $V\subseteq\Omega$ of $x$ on which $u$ is subharmonic. Since $V$ is connected and meets $C$, it lies in $C$, so $u\equiv-\infty$ on $V$, contrary to [F1]. [F1, given, cases]

1.2 **Harmonic comparison.** Let $\overline{D(a,r)}\subseteq\Omega$ be a closed disc and let $h$ be continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, with $h\ge u$ on $\partial D(a,r)$; then $h\ge u$ on $D(a,r)$. Suppose not and put $s:=u-h$ on $\overline{D(a,r)}$; then $s$ is upper semicontinuous (difference of an upper semicontinuous function and a continuous one), $s\le0$ at every point of $\partial D(a,r)$, and $s$ is positive somewhere on $D(a,r)$. Put $M:=\sup_{\overline{D(a,r)}}s>0$. Compactness supplies boundedness and attainment without selecting a sequence: the open sets $\{s<m\}$, for positive integers $m$, cover the closed disc since $s$ has no $+\infty$ values; a finite subcover bounds $s$ above. For each real $b<M$, the closed set $K_b=\{s\ge b\}$ in the closed disc is nonempty, and these sets have the finite intersection property because a finite list has a largest $b<M$. Their intersection is nonempty: otherwise their open complements cover the compact disc and a finite subcover contradicts that finite intersection property. At an intersection point $z$ one has $s(z)\ge b$ for every $b<M$, hence $s(z)=M$. Since $s\le0$ on the boundary and $M>0$, this point is interior. The maximum set $Z:=\{z\in D(a,r):s(z)=M\}$ is nonempty and closed in $D(a,r)$ [F4]. It is also open: given $z\in Z$, choose a small open disc $V$ about $z$, contained in $D(a,r)$ and in a neighbourhood on which $u$ is subharmonic; then $s=u+(-h)$ is subharmonic on the domain $V$ [F1, F2] and attains the finite maximum $M$ at the interior point $z$, so $s\equiv M$ on $V$ [F3], a neighbourhood of $z$ contained in $Z$. Hence $Z$ is a nonempty clopen subset of the connected disc $D(a,r)$, so $Z=D(a,r)$ and $s\equiv M>0$ on $D(a,r)$. But for $\zeta\in\partial D(a,r)$ and any sequence $z_j\in D(a,r)$ with $z_j\to\zeta$ one has $\limsup_{z\to\zeta}s(z)\ge\lim_js(z_j)=M>0$, while $s(\zeta)\le0$ and $s$ is upper semicontinuous, a contradiction. Therefore $M\le0$ and $h\ge u$ on $D(a,r)$. [F1, F2, F3, F4, F5, given, cases]

2.1 Part 1 follows: $u$ is upper semicontinuous by hypothesis, is not identically $-\infty$ on any component by step 1.1, and satisfies the harmonic comparison of step 1.2, so the harmonic-majorant characterisation makes $u$ subharmonic on $\Omega$. [step 1.1, step 1.2, F1]

3.1 **Surface case.** Let $W\subseteq X$ and $u$ be as in part 2. First $u$ is upper semicontinuous on $W$: for $x\in W$ choose an open neighbourhood $V$ of $x$ on which $u$ is subharmonic, hence upper semicontinuous, and $\limsup_{y\to x}u(y)\le u(x)$ computed with $y\in V$ is the limsup over $W$. Next, for every chart $\varphi:U\to U'$ of the atlas with $U\cap W\neq\varnothing$, the chart expression $u_\varphi$ on $\varphi(U\cap W)$ is upper semicontinuous, being the composition of the upper semicontinuous $u$ with the continuous inverse chart, and every point of $\varphi(U\cap W)$ has a connected open neighbourhood on which $u_\varphi$ is subharmonic: if $V\subseteq W$ is an open neighbourhood of the corresponding point of $U\cap W$ on which $u$ is subharmonic, take an inverse-chart image of a small plane disc contained in $\varphi(U\cap V)$, so the resulting neighbourhood is connected and contained in $U\cap V$, so by [F6] the chart expression of $u$ is plane subharmonic on its image. Apply step 2.1 (part 1) separately to each connected component of the open plane set $\varphi(U\cap W)$; it makes $u_\varphi$ subharmonic on each component; as $\varphi$ was an arbitrary chart of the atlas, [F6] makes $u$ subharmonic on $W$. [step 2.1, F6, given]

4.1 Part 1 is step 2.1 and part 2 is step 3.1, so the lemma holds: every assertion above used only the displayed hypotheses, and no choice principle was invoked. [step 2.1, step 3.1] ∎
