---
id: thm-e-quotient-controls-hooks-divisible-by-e
kind: theorem
title: "The e-quotient controls the hooks of e-divisible length"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-e-core-e-quotient-and-e-weight, lem-hooks-are-bead-gap-pairs-on-an-abacus, def-beta-set-and-e-runner-abacus-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 61-62: Theorem 4.11 with its proof, including the removal identity $Q_e(\\lambda\\setminus H)=Q_e(\\lambda)\\setminus f(H)$"
---

## Statement

Let $e\ge2$ and let $\lambda\vdash n$ with $e$-quotient
$Q_e(\lambda)=(\lambda^{(0)},\dots,\lambda^{(e-1)})$ and $e$-core
$C_e(\lambda)$ ([[def-e-core-e-quotient-and-e-weight]]). Then there is a
bijection $f$ from the set of hooks of $\lambda$ of $e$-divisible length onto
the set of hooks of the multipartition $Q_e(\lambda)$, that is, onto
$\bigsqcup_{i=0}^{e-1}\{\text{hooks of }\lambda^{(i)}\}$, such that
$$|H|=e\,|f(H)|\qquad\text{and}\qquad Q_e\bigl(\lambda\setminus H\bigr)=Q_e(\lambda)\setminus f(H),$$
where the right-hand side means that the hook $f(H)$ is removed from the single
component of $Q_e(\lambda)$ that contains it. On the $e$-abacus, $f$ is the
rescaling $b=b'e+i$, $g=g'e+i$ of a bead-gap pair $(b,g)$ lying on a common
runner $i$, followed by the bead-gap dictionary of the runner
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

Here and in the quotient components, removing a hook means deleting its
corresponding rim border strip as in
[[lem-hooks-are-bead-gap-pairs-on-an-abacus]](ii), rather than its arm-and-leg
node set.

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$, a partition $\lambda\vdash n$, a normalised $\beta$-set $X=\{h_1>\cdots>h_m\}$ of $\lambda$, so that $e\mid m=|X|$, with runner label sets $X^{(e)}_i$, top-packed set $X^{(e)}$ and quotient components $\lambda^{(i)}=P(X^{(e)}_i)$ as in [[def-e-core-e-quotient-and-e-weight]].

[F1] For a $\beta$-set $Y$ of a partition $\mu$ the hooks of $\mu$ correspond bijectively to the bead-gap pairs $(b,g)$ of $Y$, with $b\in Y$, $g\notin Y$ and $0\le g<b$, the hook of $(b,g)$ having length $b-g$; the hook has $e$-divisible length if and only if $b\equiv g\pmod e$; and removing the hook of $(b,g)$ replaces $Y$ by $(Y\setminus\{b\})\cup\{g\}$, a $\beta$-set for the partition $\mu$ with that hook removed ([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F2] For $i\in\{0,\dots,e-1\}$ the runner label set $X^{(e)}_i$ is a $\beta$-set for the partition $\lambda^{(i)}=P(X^{(e)}_i)$, and position $ae+i$ of the abacus lies on runner $i$ at row $a$, so that the beads of $X^{(e)}_i$ are exactly the beads of $X$ on runner $i$ ([[def-e-core-e-quotient-and-e-weight]], [[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F3] The chosen $\beta$-set is normalised, $e\mid m$; the removal of a hook does not change the number of beads, so the new $\beta$-set remains normalised ([[def-e-core-e-quotient-and-e-weight]]).

## Proof

**Proof technique:** direct.

1.1 Write a hook $H=H_{i,j}(\lambda)$ of $e$-divisible length in its bead-gap form $(b,g)$ with $b\in X$, $g\notin X$, $0\le g<b$ and $h:=|H|=b-g$. By $e\mid h$ we have $b\equiv g\pmod e$; write the common residue as $s\in\{0,\dots,e-1\}$ and $$b=b'e+s,\qquad g=g'e+s,\qquad b'=\frac{b-s}{e}>g'=\frac{g-s}{e}\ge0.$$ The bead $b$ is a bead of $X$ on runner $s$ and the gap $g$ is a gap of $X$ on runner $s$. [F1, F2]

2.1 Applying step 1.1 conversely, a bead $b'\in X^{(e)}_s$ and a gap $g'\notin X^{(e)}_s$ with $0\le g'<b'$ give the bead-gap pair $(b,g)=(b'e+s,g'e+s)$ of $X$ with $e\mid(b-g)$ and $b-g=e(b'-g')$. Hence $f(H):=$ the hook of $\lambda^{(s)}$ attached to the bead-gap pair $(b',g')$ of the $\beta$-set $X^{(e)}_s$ is well defined, and $f$ is bijective onto the hooks of $\bigsqcup_i\lambda^{(i)}$ because both sides are in bijection with the bead-gap pairs of $X$ whose two positions share a runner, respectively with the union over $s$ of the bead-gap pairs of $X^{(e)}_s$; the length identity is $|H|=b-g=e(b'-g')=e|f(H)|$. [F1, F2, step 1.1]

3.1 For the removal identity, let $X'=(X\setminus\{b\})\cup\{g\}$ be the $\beta$-set of $\lambda\setminus H$ from [F1], again of size $m$ and hence normalised by [F3]. Because $b$ and $g$ lie on runner $s$, the beads of $X'$ on a runner $t\ne s$ are exactly the beads of $X$ on runner $t$, and the beads on runner $s$ have row labels $(X^{(e)}_s\setminus\{b'\})\cup\{g'\}$. Consequently, computing the quotient from the normalised sets by [F2], $$\lambda'^{(t)}=P\bigl((X')^{(e)}_t\bigr)=\lambda^{(t)}\ (t\ne s),\qquad \lambda'^{(s)}=P\bigl((X^{(e)}_s\setminus\{b'\})\cup\{g'\}\bigr),$$ and the last partition is $\lambda^{(s)}$ with its hook $f(H)$ removed, by [F1] applied to the $\beta$-set $X^{(e)}_s$ of $\lambda^{(s)}$. This is exactly the assertion $Q_e(\lambda\setminus H)=Q_e(\lambda)\setminus f(H)$. [F1, F2, F3, step 1.1, step 2.1]

4.1 Steps 2.1 and 3.1 together exhibit the required bijection $f$ with the length and removal identities, and the description of $f$ on the abacus is the rescaling of step 1.1 followed by the bead-gap dictionary of the runner in step 2.1. [step 1.1, step 2.1, step 3.1] ∎

