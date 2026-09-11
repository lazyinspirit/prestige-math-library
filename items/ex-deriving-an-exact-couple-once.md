---
id: ex-deriving-an-exact-couple-once
kind: example
title: Deriving an exact couple once
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["ex-the-exact-couple-of-a-two-step-filtration", "def-derived-exact-couple", "thm-the-derived-couple-is-exact"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Example

Derive once the initial exact couple of the two-step filtration on $\mathbb Z/4$ in [[ex-the-exact-couple-of-a-two-step-filtration]]. Its new $E$ page is unchanged, but its $D$ image terms shift:
$$D^2_{p,-p}=\begin{cases}0&p\le0,\\2\mathbb Z/4&p=1,\\\mathbb Z/4&p\ge2,\end{cases}\qquad E^2_{0,0}=2\mathbb Z/4,\quad E^2_{1,-1}=(\mathbb Z/4)/(2\mathbb Z/4).$$
All other $E^2$ and off-diagonal $D^2$ terms vanish. The new $j$ has degree $(-1,1)$, sending the subgroup at $(1,-1)$ isomorphically to $E^2_{0,0}$ and the group at $(2,-2)$ by the parity quotient to $E^2_{1,-1}$.

## Facts & Assumptions

[F1] [[ex-the-exact-couple-of-a-two-step-filtration]] specifies the initial groups, maps and zero $k$.

[F2] [[def-derived-exact-couple]] uses $D^2=\operatorname{im}i^1$, $E^2=H(E^1,j^1k^1)$, with $j^2(i^1x)=[j^1x]$, restricted $i^2$ and $k^2[e]=k^1e$.

[F3] [[thm-the-derived-couple-is-exact]] states the three exactness equalities and the page-two grading; here they can also be checked explicitly.

## Verification

**Given:** The initial couple in [F1], whose nonzero groups have total degree zero.

1.1 Since $k^1=0$, the differential $j^1k^1$ is zero and $E^2=E^1$ by the identity cycle quotient. For $D^2_{p,-p}$ take the image of $D^1_{p-1,1-p}\to D^1_{p,-p}$. It is zero for $p\le0$, the subgroup $\{0,2\}$ for $p=1$, and the whole $\mathbb Z/4$ for $p\ge2$. These are the displayed terms. [F1, F2]

2.1 The restricted $i^2$ at $p=1$ is the inclusion $\{0,2\}\hookrightarrow\mathbb Z/4$ and at $p\ge2$ is identity; at smaller indices it has zero source. For $a\in D^2_{1,-1}=\{0,2\}$ its preimage under the old inclusion is the same element of $D^1_{0,0}$, so $j^2(a)=a\in E^2_{0,0}$. At $p=2$ the old $i^1$ is identity on $\mathbb Z/4$, so $j^2(a)$ is its parity class in $E^2_{1,-1}$. Every other $j^2$ has zero target, and $k^2=0$ by its defining formula. Thus the $j$ index changes by $(-1,1)$ rather than remaining degree zero. [F1, F2, step 1.1]

3.1 At $D^2$ before $j^2$, when $p=1$ both the incoming $i^2$ image and the kernel are zero; when $p=2$ both are $\{0,2\}$; when $p\ge3$ both are the whole group; and when $p\le0$ both are zero. Every $j^2$ onto a nonzero $E^2$ term is surjective, so its image equals $\ker k^2$. All $i^2$ maps are injective, so their kernels are zero, exactly the incoming $k^2$ images. Off-diagonal terms are zero. This verifies all exactness claims of [F3] directly, with the transition indices now one and two. The derivation used only literal subgroup inclusions and quotient maps; no chosen section or AC occurs. [F3, step 1.1, step 2.1] ∎
