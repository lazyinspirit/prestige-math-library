---
id: ex-accumulating-subvarieties-defeat-full-fano-count
kind: example
title: "An accumulating line prevents the predicted full-surface count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-smooth-fano-variety-over-number-field
  - def-picard-rank-over-number-field
  - def-adelic-metrization-and-anticanonical-height
  - lem-fermat-cubic-surface-is-fano-with-rational-line
  - lem-standard-projective-line-height-count-lower-bound
  - def-peyre-leading-constant
  - thm-northcott-finiteness-for-projective-points
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tim Browning and Daniel Loughran, Varieties with too many rational points, §1 and cubic-surface discussion"
      url: "https://pure.manchester.ac.uk/ws/portalfiles/portal/51264698/Heights.pdf"
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed p. 11 / PDF p. 22: a rational line on a cubic surface contributes at least order B^2 to the full count."
verification: {}
---

## Example

Let $X/\mathbb Q$ be the Fermat cubic surface with the standard anticanonical height from the preceding example, and let $N_X(B):=\#\{P\in X(\mathbb Q):H_{-K_X}(P)\le B\}$. For every real $B\ge2$, one has $N_X(B)\ge B^2/16$. Consequently, for every fixed integer $\rho\ge1$ and every $c>0$, the unfiltered count on all of $X(\mathbb Q)$ cannot have a finite asymptotic $N_X(B)\sim cB(\log B)^{\rho-1}$. This is an obstruction to using the predicted open-subset formula on the whole surface; it does not assert that the open-subset conjecture fails or assign a value to $\rho(X)$.

## Example references

[[lem-fermat-cubic-surface-is-fano-with-rational-line]]

[[lem-standard-projective-line-height-count-lower-bound]]

[[def-peyre-leading-constant]]

## Facts & Assumptions

**Given:** The Fermat cubic surface with the standard anticanonical metric specified in the preceding example, and $B\ge2$.

[F1] The given standard metric is the maximum metric on $\mathcal O(1)$: at each rational place its local height factor is the maximum of the coordinate absolute values, up to the common-coordinate factor that cancels in the product. In particular, for primitive integer coordinates the finite-place product is $1$ and the real factor is their maximum absolute value. This follows directly from integer unique factorization and the product formula over $\mathbb Q$; no general number-field choice principle is needed.

## Verification

1.1 The map $[u:v]\mapsto[u:-u:v:-v]$ is injective and its image lies on $X$, since $u^3+(-u)^3+v^3+(-v)^3=0$. If $u,v$ are coprime integers, the four coordinates are primitive, and [F1] gives height $\max(|u|,|v|)$. Likewise every point of $X(\mathbb Q)$ has a primitive integer representative unique up to sign, and its height is the maximum absolute coordinate. Thus at each finite height bound there are finitely many possible representatives and $N_X(B)$ is finite. [given, F1, construct, algebra]

2.1 Put $N=\lfloor B\rfloor$. Each coprime pair of positive integers $1\le u,v\le N$ gives a distinct point in step 1.1 of height at most $B$. A non-coprime pair has a common divisor $d\ge2$, so the number of such pairs is at most $N^2\sum_{d=2}^{\infty}d^{-2}\le3N^2/4$: the $d=2$ term is $1/4$ and the rest is bounded by $\int_2^\infty x^{-2}\,dx=1/2$. Hence at least $N^2/4\ge B^2/16$ points are counted, because $N\ge B/2$. [given, step 1.1, algebra]

3.1 If $N_X(B)\sim cB(\log B)^{\rho-1}$ for fixed $c>0$ and integer $\rho\ge1$, then $N_X(B)/B^2\to0$, since $(\log B)^{\rho-1}/B\to0$. Step 2.1 gives $N_X(B)/B^2\ge1/16$ for every $B\ge2$, a contradiction. [given, step 2.1, algebra] ∎
