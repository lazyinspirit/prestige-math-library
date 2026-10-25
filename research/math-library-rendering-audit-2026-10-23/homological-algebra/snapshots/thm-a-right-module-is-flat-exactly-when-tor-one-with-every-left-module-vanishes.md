---
id: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes
title: "A right module is flat exactly when Tor one against every left module vanishes"
kind: theorem
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "def-tor-by-resolving-the-left-module", "thm-long-exact-tor-sequence-in-the-left-module-variable", "def-balanced-tor-bifunctor", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
A right $R$-module $N$ is flat if and only if $\operatorname{Tor}_1^R(N,M)=0$ for every left $R$-module $M$.

## Proof

**Given:** a right module $N$ and an arbitrary left module $M$.

1.1 If $N$ is flat, tensor a full projective resolution of $M$ with $N$. Exactness of $N\otimes_R-$ preserves the augmented resolution, so its positive homology, and in particular $\operatorname{Tor}_1(N,M)$ by [[def-balanced-tor-bifunctor]], vanishes. [given]

1.2 If $A\to B\to C\to0$ is exact in left modules, [[thm-universal-property-of-module-tensor-products]] identifies $N\otimes_R C$ with $(N\otimes_R B)/\operatorname{im}(N\otimes_R A)$: balanced maps annihilating the image are precisely those that descend to $N\times C$. Thus $N\otimes_R-$ is right exact over the arbitrary ring $R$. Applied to a resolution $P_1\to P_0\to X\to0$, this gives $H_0(N\otimes_R P_\bullet)\cong N\otimes_R X$. This is natural under comparison maps because augmentations commute with them. By [[def-balanced-tor-bifunctor]], it is the natural identification $\operatorname{Tor}_0^R(N,X)\cong N\otimes_R X$. [given, algebra]

2.1 Conversely, for an inclusion $K\hookrightarrow P$ of left modules, apply [[thm-long-exact-tor-sequence-in-the-left-module-variable]] to $0\to K\to P\to P/K\to0$. Exactness identifies the kernel of $N\otimes K\to N\otimes P$ with the image of $\operatorname{Tor}_1(N,P/K)$. [step 1.2, algebra]

3.1 Universal vanishing gives injectivity for every such inclusion, and right exactness supplies the rest; thus $N\otimes_R-$ is exact. [step 2.1, algebra] ∎
