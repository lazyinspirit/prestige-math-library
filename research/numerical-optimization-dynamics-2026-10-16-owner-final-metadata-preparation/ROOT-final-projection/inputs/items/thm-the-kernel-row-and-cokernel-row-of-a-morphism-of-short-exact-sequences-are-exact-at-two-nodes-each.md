---
id: thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each
kind: theorem
title: "The kernel row and cokernel row of a morphism of short exact sequences are exact at two nodes each"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-degenerate-exactness-criteria,
       thm-exactness-is-self-dual,
       thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
       cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.16"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

Given a morphism of short exact sequences in an abelian category

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "a"'] & B \arrow[r, "p"] \arrow[d, "b"'] & C \arrow[r] \arrow[d, "c"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0,
```

the induced kernel sequence
$$0 \to \ker(a) \to \ker(b) \to \ker(c)$$
is exact at $\ker(a)$ and at $\ker(b)$.

Dually, the induced cokernel sequence
$$\operatorname{coker}(a) \to \operatorname{coker}(b) \to \operatorname{coker}(c) \to 0$$
is exact at $\operatorname{coker}(b)$ and at $\operatorname{coker}(c)$.

## Facts & Assumptions

**Given:** The morphism of short exact sequences in the statement.

[L1] In a short exact sequence, the left map is a kernel and the right map is a cokernel ([[thm-degenerate-exactness-criteria]]).

[L2] Under the stated endpoint hypotheses, the induced kernel or cokernel sequence is exact at its middle node ([[thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses]]).

[L3] Every kernel is monic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

[L4] Exactness is self-dual ([[thm-exactness-is-self-dual]]).

## Proof

**Proof technique:** direct.

1.1 Because both rows are short exact, [L1] says that the left square is a morphism between exact pairs and that $i'$ is monic. Therefore [L2] applies and gives exactness of the induced kernel sequence $$\ker(a)\to\ker(b)\to\ker(c)$$ at $\ker(b)$. [L1, L2]

1.2 Let $u:\ker(a)\to\ker(b)$ be the induced map and choose kernel arrows $k_a:\ker(a)\to A$ and $k_b:\ker(b)\to B$. If $u s = u t$, then $$i k_a s = k_b u s = k_b u t = i k_a t.$$ The map $i$ is monic by [L1], and $k_a$ is monic by [L3], so $s=t$. Hence $u$ is monic, which is exactly exactness of $$0 \to \ker(a)\to\ker(b)$$ at $\ker(a)$. [L1, L3, algebra]

2.1 Passing to the opposite category turns the diagram into a morphism of short exact sequences again. Applying steps 1.1 and 1.2 there and transporting the result back with [L4] yields exactness of the induced cokernel sequence at $\operatorname{coker}(b)$ and at $\operatorname{coker}(c)$. [L4, step 1.1, step 1.2]

3.1 Hence the kernel row is exact at $\ker(a)$ and $\ker(b)$, and the cokernel row is exact at $\operatorname{coker}(b)$ and $\operatorname{coker}(c)$. [step 1.1, step 1.2, step 2.1] ∎
