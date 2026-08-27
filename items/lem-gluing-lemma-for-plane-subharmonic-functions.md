---
id: lem-gluing-lemma-for-plane-subharmonic-functions
kind: lemma
title: "Subharmonic pieces glue across a boundary under the limsup inequality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-harmonic-majorant-characterization-of-plane-subharmonicity,
       lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity,
       thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain, let $D\subseteq\Omega$ be
open, let $u$ be subharmonic on $\Omega$, and let $v$ be subharmonic on every
connected component of $D$. Assume that for every
$\zeta\in\partial D\cap\Omega$,
$$\limsup_{\substack{z\to\zeta\\ z\in D}}v(z)\le u(\zeta).$$
Define
$$w(z)=\begin{cases}\max\{u(z),v(z)\},& z\in D,\\ u(z),& z\in\Omega\setminus D.\end{cases}$$
Then $w$ is subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, an open subset $D\subseteq\Omega$,
subharmonic functions $u$ on $\Omega$ and $v$ on every component of $D$, and
the boundary limsup inequality of the Statement.

[L1] Subharmonicity is equivalent to harmonic comparison on compactly contained discs ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[L2] Finite maxima preserve subharmonicity
([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L3] A subharmonic function attaining a finite interior maximum on a connected
domain is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 On $D$, the function $w=\max\{u,v\}$ is subharmonic by [L2]. Away from $\partial D$ its upper semicontinuity is therefore clear. At $\zeta\in\partial D\cap\Omega$, the inside limsup is at most $u(\zeta)$ by the hypothesis and upper semicontinuity of $u$, while the outside limsup is at most $u(\zeta)=w(\zeta)$. Thus $w$ is upper semicontinuous on $\Omega$. [given, L2]

1.2 Let $\overline B\subseteq\Omega$ be a closed disc and let $h$ be continuous on $\overline B$, harmonic on $B$, and satisfy $h\ge w$ on $\partial B$. Because $w\ge u$ there, [L1] first gives $h\ge u$ throughout $B$. [L1, given]

2.1 Let $C$ be a connected component of $B\cap D$. On $\partial C\cap\partial B$ one has $h\ge w\ge v$. At a boundary point of $C$ inside $B$, the seam hypothesis and step 1.2 give $\limsup_C(v-h)\le u-h\le0$. Thus the subharmonic function $v-h$ has boundary limsup at most $0$ on the bounded domain $C$. If it were positive somewhere, upper semicontinuity and the boundary bound would make it attain a positive interior maximum, contradicting [L3]. Hence $h\ge v$ on every such component. [step 1.2, L3, given]

3.1 Steps 1.2 and 2.1 give $h\ge u$ on $B$ and $h\ge v$ on $B\cap D$, hence $h\ge w$ throughout $B$. Every harmonic boundary majorant therefore majorizes $w$, so [L1] and step 1.1 make $w$ subharmonic on $\Omega$. [L1, step 1.1, step 1.2, step 2.1] ∎
