---
id: cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic
kind: corollary
title: "Syzygies from two projective resolutions are stably isomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-syzygy-and-cosyzygy-relative-to-a-resolution, thm-schanuel-lemma-in-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Statement

Syzygies arising from two projective resolutions of the same object are stably isomorphic. In particular, the first syzygies are related by Schanuel's lemma, and higher displayed syzygies inherit the same stable-comparison pattern after truncation.
## Facts & Assumptions

**Given:** Two projective resolutions of the same object $A$.

[L1] Syzygies are the kernels selected from a displayed resolution ([[def-syzygy-and-cosyzygy-relative-to-a-resolution]]).

[L2] Schanuel's lemma identifies the stable class of two projective presentations of the same object ([[thm-schanuel-lemma-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 The first syzygies of the two resolutions are the kernels of two projective presentations of $A$ by [L1]. Therefore [L2] gives a stable isomorphism between them. [L1, L2]

2.1 Proceed by induction. Suppose $\Omega_P^{n-1}(A)\oplus E\cong\Omega_Q^{n-1}(A)\oplus F$ for projective objects $E,F$. After identifying these sums with a common object, the two exact rows $$0\to\Omega_P^n(A)\to P_{n-1}\oplus E\to\Omega_P^{n-1}(A)\oplus E\to0$$ and $$0\to\Omega_Q^n(A)\to Q_{n-1}\oplus F\to\Omega_Q^{n-1}(A)\oplus F\to0$$ are projective presentations of that common object. Applying [L2] gives $$\Omega_P^n(A)\oplus Q_{n-1}\oplus F\cong\Omega_Q^n(A)\oplus P_{n-1}\oplus E,$$ so the $n$th syzygies are stably isomorphic. Together with step 1.1 this proves the claim in every degree. [L1, L2, step 1.1, induction] ∎
