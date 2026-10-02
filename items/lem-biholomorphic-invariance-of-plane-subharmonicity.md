---
id: lem-biholomorphic-invariance-of-plane-subharmonicity
kind: lemma
title: "Plane subharmonicity is invariant under biholomorphic change of coordinate"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-plane-subharmonic-function, def-biholomorphic-map, thm-conformal-invariance-of-plane-harmonicity, thm-harmonic-majorant-characterization-of-plane-subharmonicity, thm-mean-value-property-for-plane-harmonic-functions, thm-plane-subharmonic-functions-are-locally-integrable]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016, §7.2 (standard ways to produce subharmonic functions: u∘f for u subharmonic and f holomorphic)"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega_1,\Omega_2\subseteq\mathbb C$ be complex domains
([[def-biholomorphic-map]]) and let $G:\Omega_1\to\Omega_2$ be a
biholomorphism. For a function $u:\Omega_2\to[-\infty,\infty)$ the following
are equivalent:

1. $u$ is subharmonic on $\Omega_2$;
2. $u\circ G$ is subharmonic on $\Omega_1$.

The hypothesis that $G$ is a biholomorphism, and not merely holomorphic, is
used through the inverse map in the comparison argument below.

## Facts & Assumptions

**Given:** Complex domains $\Omega_1,\Omega_2\subseteq\mathbb C$, a biholomorphism $G:\Omega_1\to\Omega_2$, and a function $u:\Omega_2\to[-\infty,\infty)$. Write $v:=u\circ G$. For step 1.2, write $w:=u-H$ on $\overline V$.

[F1] Subharmonic means upper semicontinuous, not identically $-\infty$ on any connected component, and satisfying the circle submean inequality on every closed disc contained in the domain ([[def-plane-subharmonic-function]]).

[F2] For a function on a complex domain, subharmonicity is equivalent to the conjunction of the following three conditions: $u$ is upper semicontinuous; $u$ is not identically $-\infty$ on any connected component; and for every closed disc $\overline{D(a,r)}\subseteq\Omega$ and every $h$ continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, with $h\ge u$ on $\partial D(a,r)$, one has $h\ge u$ on $D(a,r)$ ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[F3] Plane harmonic functions satisfy the circle mean-value property ([[thm-mean-value-property-for-plane-harmonic-functions]]).

[F4] If $h$ is harmonic on an open set and $\psi$ is holomorphic on an open set whose image lies in the domain of $h$, then $h\circ\psi$ is harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F5] A subharmonic function on a complex domain is locally integrable, so the set where it equals $-\infty$ is Lebesgue-null and it is finite somewhere in every nonempty open subset of its domain ([[thm-plane-subharmonic-functions-are-locally-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $u$ is subharmonic on $\Omega_2$. The map $G$ is continuous and $u$ is upper semicontinuous, so $v=u\circ G$ is upper semicontinuous. If $C$ is a connected component of $\Omega_1$, then $G(C)$ is a nonempty open subset of $\Omega_2$, and [F5] provides a point of $G(C)$ at which $u$ is finite; hence $v$ is not identically $-\infty$ on $C$. [F1, F5, given]

1.2 Let $\overline{D(a,r)}\Subset\Omega_1$ be a closed disc and let $h$ be continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, with $h\ge v$ on $\partial D(a,r)$. Put $V:=G(D(a,r))$ and $H:=h\circ G^{-1}$. Since $G$ is a homeomorphism, $V$ is a nonempty connected open subset of $\Omega_2$ with $\overline V=G(\overline{D(a,r)})\Subset\Omega_2$, so $\overline V$ is compact and $\partial V=G(\partial D(a,r))$; moreover $H$ is continuous on $\overline V$, harmonic on $V$ by [F4] applied to the holomorphic map $G^{-1}$, and $u\le H$ on $\partial V$ because $h\ge v$ on $\partial D(a,r)$. [F4, given]

2.1 Suppose $u\le H$ failed somewhere in $V$, so $w=u-H$ is positive at some point of $V$. The function $w$ is upper semicontinuous on the compact set $\overline V$, takes no $+\infty$ values, and is positive somewhere. It is bounded above: the relatively open sets $\{w<n\}$ for positive integers $n$ cover $\overline V$, so a finite subcover gives a finite upper bound. Let $M:=\sup_{\overline V}w>0$. For every real $b<M$, the closed set $\{w\ge b\}$ is nonempty, and these sets have the finite intersection property; compactness gives a point where $w=M$. Since $w\le0$ on $\partial V$ by step 1.2, such a maximum point lies in $V$. Now let $z\in V$ satisfy $w(z)=M$, and choose $\rho>0$ with $\overline{D(z,\rho)}\subseteq V$. The submean inequality for $u$ and the mean-value property for $H$ give $$M=w(z)\le\frac1{2\pi}\int_0^{2\pi}w(z+\rho e^{it})\,dt\le M,$$ where the integral is defined because $u$ is locally integrable [F5]. Thus $w=M$ almost everywhere on $\partial D(z,\rho)$. [F1, F3, F5, step 1.2]

3.1 The set $Z:=\{z\in V:w(z)=M\}=\{z\in V:w(z)\ge M\}$ is nonempty and closed in $V$, since $w$ is upper semicontinuous and $w\le M$. It is open as well. If $z\in Z$ and $\overline{D(z,\rho)}\subseteq V$, then for each $0<t<\rho$ step 2.1 gives $w=M$ almost everywhere on $\partial D(z,t)$; that full-measure subset is dense on the circle, so upper semicontinuity gives $w=M$ at every point of that circle. Every point of $D(z,\rho)$ lies on one of these circles or is $z$, hence $D(z,\rho)\subseteq Z$. Since $V$ is connected, $Z=V$ and $w\equiv M$ on $V$. Choose $b\in\partial V$, which is nonempty because $V$ is a nonempty bounded domain. A sequence from $V$ tending to $b$ and upper semicontinuity on $\overline V$ give $w(b)\ge M>0$, contradicting $w\le0$ on $\partial V$ from step 1.2. Therefore $u\le H$ on $V$, that is, $v\le h$ on $D(a,r)$. [step 2.1, step 1.2, given, contradiction]

4.1 By step 1.1 the function $v$ is upper semicontinuous and is not identically $-\infty$ on any connected component of $\Omega_1$, and by steps 1.2 and 3.1 every harmonic majorant of $v$ on the boundary of a compactly contained closed disc majorizes $v$ on the disc. The equivalence [F2] therefore makes $v=u\circ G$ subharmonic on $\Omega_1$. [F2, step 1.1, step 3.1]

5.1 Conversely, if $u\circ G$ is subharmonic on $\Omega_1$, apply the implication of step 4.1 to the biholomorphism $G^{-1}:\Omega_2\to\Omega_1$ and the function $u\circ G$: it gives $(u\circ G)\circ G^{-1}=u$ subharmonic on $\Omega_2$. The two implications prove the equivalence. [step 4.1, given, algebra] ∎
