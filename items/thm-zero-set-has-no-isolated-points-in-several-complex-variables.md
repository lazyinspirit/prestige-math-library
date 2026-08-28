---
id: thm-zero-set-has-no-isolated-points-in-several-complex-variables
kind: theorem
title: "A nonzero holomorphic hypersurface in complex dimension at least two has no isolated points"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular, lem-stability-of-slice-zero-count-under-holomorphic-parameters, thm-weierstrass-preparation-theorem, thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 1.6"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.7"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m\ge2$, let $U\subseteq\mathbb C^m$ be a domain, and let $f:U\to\mathbb C$
be holomorphic and not identically zero. Then every point $a\in Z(f)$ is a
limit point of $Z(f)\setminus\{a\}$.

## Facts & Assumptions

**Given:** A domain $U\subseteq\mathbb C^m$ with $m\ge2$, a nonzero holomorphic function $f:U\to\mathbb C$, and a point $a\in U$ with $f(a)=0$.

[L1] A holomorphic function on a domain that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[L2] A nonzero germ becomes regular after a linear coordinate change, and nearby slices of a regular germ carry the same zero count ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]], [[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

## Proof

**Proof technique:** direct.

1.1 The germ of $f$ at $a$ is nonzero: otherwise $f$ would vanish on a neighbourhood of $a$, and [L1] would force $f\equiv0$ on the domain $U$, contrary to the hypothesis. After translating $a$ to $0$ and applying the invertible complex-linear coordinate change from [L2], which preserves local zero sets and isolatedness, we may therefore assume that $a=0$ and that $f$ is regular in $z_m$ of some order $d$. Because $f(0)=0$, that order satisfies $d\ge1$. [given, L1, L2]

2.1 Step 1.1 and [L2] give a neighbourhood $V\subseteq\mathbb C^{m-1}$ of $0$ and a radius $r>0$ such that every slice over $z'\in V$ has exactly $d$ zeros in $|\zeta|<r$. Since $m\ge2$, the parameter space $\mathbb C^{m-1}$ is nontrivial, so choose $z'\in V\setminus\{0\}$ arbitrarily small. Then there exists $z_m$ with $|z_m|<r$ and $f(z',z_m)=0$. Because $z'\ne0$, this zero is different from the origin. [step 1.1, L2, choose]

3.1 By taking $z'$ arbitrarily close to $0$ in step 2.1, we obtain zeros of $f$ distinct from $0=a$ arbitrarily close to the origin in the chosen coordinates. Undoing the coordinate change shows that the original point $a$ is a limit point of $Z(f)\setminus\{a\}$. [step 2.1] ∎
