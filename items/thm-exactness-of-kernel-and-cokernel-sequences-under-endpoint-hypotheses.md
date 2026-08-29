---
id: thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses
kind: theorem
title: "Exactness of kernel and cokernel sequences under endpoint hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-covering-criterion-for-exactness,
       thm-exactness-is-self-dual,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.16"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-23
---

## Statement

Consider a commutative diagram in an abelian category

```tikzcd
X \arrow[r, "f"] \arrow[d, "\alpha"'] & Y \arrow[r, "g"] \arrow[d, "\beta"'] & Z \arrow[d, "\gamma"'] \\
U \arrow[r, "k"'] & V \arrow[r, "l"'] & W.
```

Then:

1. if the top row is exact and $k$ is monic, the induced sequence
   $$\ker(\alpha)\to\ker(\beta)\to\ker(\gamma)$$
   is exact;
2. if the bottom row is exact and $g$ is epic, the induced sequence
   $$\operatorname{coker}(\alpha)\to\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma)$$
   is exact.

## Facts & Assumptions

**Given:** The commutative diagram in the statement.

[L1] Exactness can be tested by the covering criterion ([[thm-the-covering-criterion-for-exactness]]).

[L2] Exactness is self-dual ([[thm-exactness-is-self-dual]]).

[L3] Kernels are universal for morphisms annihilated by the given map, and cokernels are dual ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L4] Every kernel is monic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Assume the top row is exact and $k$ is monic. Choose kernels $h:\ker(\alpha) \to X$, $i:\ker(\beta) \to Y$, and $j:\ker(\gamma) \to Z$. By [L3], the commutative diagram induces morphisms $$a:\ker(\alpha)\to\ker(\beta),\qquad b:\ker(\beta)\to\ker(\gamma)$$ with $$i a = f h,\qquad j b = g i.$$ [L3, assume-hyp, construct]

2.1 To prove exactness of $$\ker(\alpha)\xrightarrow{a}\ker(\beta)\xrightarrow{b}\ker(\gamma),$$ apply the covering criterion [L1] to the pair $(a,b)$. Let $u:T \to \ker(\beta)$ satisfy $b u = 0$. Then $$g i u = j b u = 0,$$ so exactness of the top row gives an object $P$, an epimorphism $e:P \to T$, and a morphism $x:P \to X$ with $$i u e = f x.$$ [L1, L3, step 1.1, construct]

3.1 Applying $\beta$ to the displayed equality gives $$0 = \beta i u e = k \alpha x.$$ Since $k$ is monic, $\alpha x = 0$. The kernel property of $h$ therefore gives $x':P \to \ker(\alpha)$ with $h x' = x$. Now $$i u e = f h x' = i a x',$$ so monicity of $i$ from [L4] yields $u e = a x'$. Also $$j b a = g i a = g f h = 0,$$ so monicity of $j$ from [L4] gives $b a = 0$. Thus the pair $(a,b)$ satisfies both parts of the covering criterion [L1], and the kernel sequence is exact. [L1, L3, L4, step 1.1, step 2.1, algebra]

4.1 The cokernel statement is the formal dual of steps 1.1 to 3.1 in the opposite abelian category: bottom-row exactness becomes top-row exactness, the epicity of $g$ becomes monicity of $g^{\mathrm{op}}$, kernels become cokernels, and [L2] transports the resulting exact sequence back to the original category. [L2, step 1.1, step 2.1, step 3.1]

5.1 Therefore both displayed induced sequences are exact under the stated endpoint hypotheses. [step 3.1, step 4.1] ∎
