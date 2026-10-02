---
id: "lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity"
kind: "lemma"
title: "A smooth psh exhaustion gives Hartogs pseudoconvexity on bounded domains"
status: published
origin: "pipeline"
deps:
  [
    "def-axiom-of-choice",
    "def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity",
    "def-polydisc-boundary-radius",
    "def-plurisubharmonic-function",
    "def-plane-subharmonic-function",
    "thm-holomorphic-pullback-of-plurisubharmonic-functions",
    "thm-harmonic-majorant-characterization-of-plane-subharmonicity",
    "thm-harmonic-conjugate-on-homologically-simply-connected-domains",
    "thm-maximum-principle-for-plane-subharmonic-functions"
  ]
landmark: false
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I §7.A, Theorem 7.2(c)→(d), printed p. 54: two-disc continuation
        using a psh exhaustion. The final norm comparison below uses the library
        equal-radius polydisc convention, not Euclidean distance."
verification:
  {
    "precheck": "pass",
    judge: { model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02 },
    audited: 2026-10-02
  }
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb C^n$, $n\ge1$, be a bounded domain with a smooth plurisubharmonic exhaustion $S$. Then $\Omega$ is Hartogs pseudoconvex: $-\log\delta_\Omega$ is plurisubharmonic, where $\delta_\Omega$ is the equal-radius polydisc boundary function.

## Facts & Assumptions

**Given:** AC; the bounded domain $\Omega$; and $S\in C^\infty(\Omega,\mathbb R)$ plurisubharmonic, with compact sublevels in $\Omega$.

[F1] Holomorphic pullback preserves plurisubharmonicity for a $C^2$ psh function ([[thm-holomorphic-pullback-of-plurisubharmonic-functions]]). Psh is subharmonicity on affine complex lines ([[def-plurisubharmonic-function]]).

[F2] An upper semicontinuous, finite function on a plane domain is subharmonic if it satisfies harmonic comparison on every compactly contained closed disc ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[F3] On a disc a harmonic function is the real part of a holomorphic function, since a disc is homologically simply connected ([[thm-harmonic-conjugate-on-homologically-simply-connected-domains]]).

[F4] A subharmonic function attaining a finite interior maximum is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]); the submean convention is that of [[def-plane-subharmonic-function]].

[F5] The equal-radius polydisc radius is the distance to the complement in the coordinate sup norm ([[def-polydisc-boundary-radius]]), and its negative logarithm being psh is Hartogs pseudoconvexity ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

**Choice use.** AC is the ambient hypothesis. The argument makes only finitely many selections for each disc, direction and harmonic majorant.

## Proof

1.1 For each fixed nonzero $\xi\in\mathbb C^n$ define $$d_\xi(z)=\sup\{r>0:z+\{t:|t|<r\}\xi\subset\Omega\},\qquad u_\xi=-\log d_\xi.$$ These radii are positive and finite because $\Omega$ is open and bounded. If $r<d_\xi(z)$, the closed directional disc of radius $r$ is compact in $\Omega$, and sufficiently small translations stay in $\Omega$. Thus $d_\xi$ is lower semicontinuous, so $u_\xi$ is upper semicontinuous. [given, construct]

2.1 Fix an affine base disc $z(\zeta)=a+\zeta v$ with $z(\overline{\mathbb D})\subset\Omega$, and a continuous real harmonic majorant $h$ on the closed unit disc with $h\ge u_\xi\circ z$ on its boundary. For $0<s<1$ the function $h_s(\zeta)=h(s\zeta)$ is harmonic on a disc of radius greater than $1$, and $h_s\to h$ uniformly on the closed unit disc. Given $\eta>0$, choose $s$ so that $|h_s-h|<\eta$ there; by [F3] choose a holomorphic $H$ on a disc of radius greater than $1$ with $\operatorname{Re}H=h_s+\eta$. Then $$\Phi(\zeta,t)=z(\zeta)+t e^{-H(\zeta)}\xi$$ is holomorphic near the closed base disc, and for $|\zeta|=1$, $|t|<1$, its value belongs to $\Omega$, since $e^{-\operatorname{Re}H}\le d_\xi(z(\zeta))$. Compactness of the base disc also puts all its images in $\Omega$ for sufficiently small $|t|$. [F3, step 1.1, given, construct]

3.1 Let $r_*$ be the supremum of radii $r\le1$ for which $\Phi(\overline{\mathbb D}\times\{t:|t|<r\})\subset\Omega$. Suppose $r_*<1$, and fix $r_*<b<1$. The image of $\partial\mathbb D\times\{|t|\le b\}$ is a compact subset of $\Omega$ by step 2.1. Let $M$ be the maximum of $S$ on this image. For each $|t|<r_*$, [F1] makes $S\circ\Phi(\cdot,t)$ subharmonic, continuous on the closed base disc; its boundary values are at most $M$, so [F4] bounds it everywhere by $M$. All these images therefore lie in the fixed compact sublevel $K=\{S\le M\}\subset\Omega$. By continuity their limits with $|t|\le r_*$ also lie in $K$. Uniform continuity on a slightly larger compact product then increases the admissible radius beyond $r_*$, contradicting its definition. Thus $r_*=1$, and $d_\xi(z(\zeta))\ge e^{-h_s(\zeta)-\eta}$ throughout the base disc. [F1, F4, step 2.1, given, assume-contra, discharge-contradiction]

4.1 Step 3.1 gives $u_\xi\circ z\le h_s+\eta$. Choose $s\to1$ and $\eta\to0$ with the stated uniform error, to conclude $u_\xi\circ z\le h$. The affine-disc normalization covers every closed disc in every complex line in $\Omega$. Hence [F2], together with the upper semicontinuity of step 1.1, makes each $u_\xi$ plurisubharmonic. The dilation of the majorant in step 2.1 ensures that $H$ and $\Phi$ are defined past the base boundary; no boundary continuity of an arbitrary harmonic conjugate is assumed. [F1, F2, step 1.1, step 2.1, step 3.1]

5.1 Write $\|\xi\|_\infty=\max_{j<n}|\xi_j|$. A sup-norm polydisc of radius $r$ consists exactly of all directional discs of radius $r$ with $\|\xi\|_\infty=1$, so $$\delta_\Omega(z)=\inf_{\|\xi\|_\infty=1}d_\xi(z),\qquad u(z):=-\log\delta_\Omega(z)=\sup_{\|\xi\|_\infty=1}u_\xi(z).$$ By [F5], $\delta_\Omega$ is a positive continuous distance function on $\Omega$, so $u$ is continuous. On any compactly contained affine circle, each $u_\xi$ satisfies its submean inequality and is at most $u$ on the circle. Therefore $u_\xi$ at the center is at most the circle average of $u$; taking the supremum gives that same bound for $u$ at the center. Its continuity and these submean inequalities make it psh by [F1] and [F4]. This proves the exact Hartogs convention of [F5]. [F1, F4, F5, step 4.1] ∎
