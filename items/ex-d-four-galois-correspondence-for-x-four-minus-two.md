---
id: ex-d-four-galois-correspondence-for-x-four-minus-two
kind: example
title: "The ten-field $D_4$ correspondence for the splitting field of $x^4-2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory, thm-finite-galois-extension-characterizations, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-eisenstein-irreducibility-criterion]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Examples 4.7 and 5.9"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Example

Let $a$ be the positive real fourth root of $2$, let $i^2=-1$, and put $L=\mathbb Q(a,i)$. Define

$$r(a)=ia,\quad r(i)=i,\qquad s(a)=a,\quad s(i)=-i.$$

Then $\operatorname{Gal}(L/\mathbb Q)=\langle r,s:r^4=s^2=1,\ srs=r^{-1}\rangle\cong D_4$, and the complete correspondence is

| Subgroup | Fixed field |
|---|---|
| $\{1\}$ | $\mathbb Q(a,i)$ |
| $\langle r^2\rangle$ | $\mathbb Q(a^2,i)$ |
| $\langle s\rangle$ | $\mathbb Q(a)$ |
| $\langle rs\rangle$ | $\mathbb Q(a(1+i))$ |
| $\langle r^2s\rangle$ | $\mathbb Q(ia)$ |
| $\langle r^3s\rangle$ | $\mathbb Q(a(1-i))$ |
| $\langle r\rangle$ | $\mathbb Q(i)$ |
| $\langle r^2,s\rangle$ | $\mathbb Q(a^2)$ |
| $\langle r^2,rs\rangle$ | $\mathbb Q(ia^2)$ |
| $D_4$ | $\mathbb Q$ |

## Facts & Assumptions

**Given:** Eisenstein's irreducibility criterion ([[thm-eisenstein-irreducibility-criterion]]) and the normality correspondence of [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]].

[L1] In the finite Galois correspondence, $[K:K^H]=|H|$ and $[K^H:F]=[G:H]$, and the subgroup and intermediate-field assignments are mutually inverse bijections ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L2] For a finite extension $L/E$ with $G=\operatorname{Aut}(L/E)$, being Galois, being the splitting field of a separable polynomial, $|G|=[L:E]$, and $L^G=E$ are equivalent ([[thm-finite-galois-extension-characterizations]]).

## Verification

**Proof technique:** direct.

1.1 Eisenstein makes $x^4-2$ irreducible, so $[\mathbb Q(a):\mathbb Q]=4$. Since $\mathbb Q(a)\subseteq\mathbb R$ and $i\notin\mathbb R$, adjoining $i$ doubles the degree. Thus $1,a,a^2,a^3,i,ia,ia^2,ia^3$ is a basis of the degree-eight splitting field $L$. [given, algebra]

2.1 The displayed maps preserve $a^4=2$ and $i^2=-1$, permute the roots $a,ia,-a,-ia$, and satisfy $r^4=s^2=1$ and $srs=r^{-1}$; their eight composites are distinct. Those four roots are distinct, so $x^4-2$ is separable and step 1.1 makes $L$ its splitting field; by [L2], $L/\mathbb Q$ is finite Galois with $|\operatorname{Gal}(L/\mathbb Q)|=[L:\mathbb Q]=8$. The eight composites therefore exhaust the automorphism group and give $D_4$. [step 1.1, L2, construct]

3.1 Applying the generators to the eight basis coefficients verifies that every field in the table is fixed by its displayed subgroup. Their degrees over $\mathbb Q$ are respectively $8,4,4,4,4,4,2,2,2,1$. [step 2.1, algebra]

4.1 Those degrees equal the subgroup indices required by [L1], so each containment in step 3.1 is equality and the table is complete. The four reflection subgroups are nonnormal and give the nonnormal quartic fields; the remaining subgroups are normal and give the normal strict fields or endpoints. [step 3.1, L1] ∎
