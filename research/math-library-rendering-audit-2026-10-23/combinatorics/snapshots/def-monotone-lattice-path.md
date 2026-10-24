---
id: def-monotone-lattice-path
kind: definition
title: "Monotone lattice paths with steps $E=(1,0)$ and $N=(0,1)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lattice-path-and-step-set, thm-induction-principle, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.2'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Definition

Put $E:=(1,0)$ and $N:=(0,1)$. A **monotone lattice path** is a lattice path
whose steps lie in the step set $\{E,N\}$ with $E=(1,0)$ and $N=(0,1)$
([[def-lattice-path-and-step-set]]). Write

$$\mathcal{M}(P;\ell) := \mathcal{L}_{\{E,N\}}(P;\ell), \qquad \mathcal{M}(P,Q) := \bigcup_{\ell\in\mathbb{N}} \mathcal{L}_{\{E,N\}}(P,Q;\ell),$$

so $\mathcal{M}(P,Q)$ is the set of monotone paths from $P$ to $Q$ of any length.
The letters $E$ and $N$ are the two steps and are also used as the two letters of
the alphabet of a step word.

**Where a monotone path is after $i$ steps.** Let $v\in\mathcal{M}((a,b);\ell)$
have step word $w$, and for $0\le i\le\ell$ let

$$\nu(i) := \lvert\{\, j\in\mathbb{N} : j<i,\ w_j=N \,\}\rvert$$

be the number of $N$ letters among the first $i$ ([[def-finite-cardinality]]).
Then

$$v(i) = \bigl(a+i-\nu(i),\ b+\nu(i)\bigr) \qquad (0\le i\le\ell).$$

Indeed $\nu(0)=0$ and $v(0)=(a,b)$; and if the formula holds at $i-1$ then
$v(i)=v(i-1)+w_{i-1}$, where $w_{i-1}=E$ gives $\nu(i)=\nu(i-1)$ and raises the
first coordinate by $1$, while $w_{i-1}=N$ gives $\nu(i)=\nu(i-1)+1$ and raises
the second coordinate by $1$; in both cases the formula holds at $i$. Induction
on $i$ ([[thm-induction-principle]]) gives it for every $i\le\ell$. Note
$\nu(i)\le i$, so the first coordinate is again a point of $\mathbb{Z}$ with
$a+i-\nu(i)\ge a$.

**Three consequences, recorded because every count below uses them.**

**(a) Both coordinates are nondecreasing along a monotone path**, since
$i\mapsto\nu(i)$ and $i\mapsto i-\nu(i)$ are both nondecreasing.

**(b) The endpoint determines the length and the letter count.** A path
$v\in\mathcal{M}((a,b);\ell)$ satisfies $v(\ell)=(c,d)$ if and only if
$\nu(\ell)=d-b$ and $\ell=(c-a)+(d-b)$.

**(c) Existence.** $\mathcal{M}((a,b),(c,d))$ is nonempty exactly when $a\le c$
and $b\le d$; in that case every one of its members has length
$(c-a)+(d-b)$, and the word $E^{\,c-a}N^{\,d-b}$ traces one of them. Here $c-a$
and $d-b$ denote the natural numbers whose images under the embedding of
$\mathbb{N}$ into $\mathbb{Z}$ are those differences.

**Degenerate rectangles are included.** Under the existence hypotheses
$a\le c$ and $b\le d$, if $c=a$ then every step is $N$ and
$\mathcal{M}((a,b),(c,d))$ has one element; likewise if $d=b$. If $c=a$ and
$d=b$ its one element is the empty path at $(a,b)$.

## Remarks

- **"Monotone" names the conclusion of (a), not an extra hypothesis.** The
  definition fixes a step set; the monotonicity of the coordinates is then forced
  and is proved above rather than assumed.

- **Why $\mathcal{M}(P,Q)$ may be written without a length.** By (c) all its
  members have one and the same length, so no information is lost by suppressing
  it. For a step set in which two different lengths join the same two points this
  notation would be ambiguous, and it is not used there.
