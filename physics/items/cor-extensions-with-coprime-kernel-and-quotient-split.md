---
id: cor-extensions-with-coprime-kernel-and-quotient-split
kind: corollary
title: "Extensions with coprime kernel and quotient split"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base, thm-schur-zassenhaus-existence, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Let

$$1\to N\to G\to Q\to1$$

be an extension of finite groups. If $\gcd(|N|,|Q|)=1$, then the extension
splits.

## Facts & Assumptions

**Given:** The displayed extension of finite groups, with $\gcd(|N|,|Q|)=1$.

[L1] In a group extension, the kernel is normal and the quotient recovers the base ([[lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base]]).

[L2] A normal Hall subgroup has a complement ([[thm-schur-zassenhaus-existence]]).

[L3] A complement to the kernel is equivalent to a splitting section ([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the kernel $N$ is normal in $G$ and $G/N\cong Q$, so $[G:N]=|G/N|=|Q|$. Because $\gcd(|N|,|Q|)=1$, no prime divisor of $[G:N]$ divides $|N|$. Hence $N$ is a Hall subgroup of $G$. [given, L1, algebra]

2.1 By [L2], the normal Hall subgroup $N$ has a complement in $G$. Then [L3] turns that complement into a splitting section, so the extension splits. [L2, L3, step 1.1] ∎
