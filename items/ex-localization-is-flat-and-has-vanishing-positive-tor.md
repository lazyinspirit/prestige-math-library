---
id: ex-localization-is-flat-and-has-vanishing-positive-tor
title: "Localization is flat and has vanishing positive Tor"
kind: example
status: published
origin: pipeline
deps: ["def-multiplicative-subset-and-localisation", "prop-torsion-free-abelian-groups-are-flat", "def-left-and-right-flat-modules-over-an-arbitrary-ring", "def-tor-by-resolving-the-right-module", "def-balanced-tor-bifunctor", "thm-higher-tor-over-the-integers-vanishes", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Example

For $S=\{2^k:k\ge0\}$, the localization $L=S^{-1}\mathbb Z=\mathbb Z[1/2]$ is flat without any choice assumption. For every supplied projective resolution $Q_\bullet\to N$, one has $H_i(Q_\bullet\otimes_{\mathbb Z}L)=0$ for every $i>0$, also without choice.

Assuming AC, projective resolutions exist for all abelian groups and the usual balanced groups satisfy $\operatorname{Tor}^{\mathbb Z}_i(N,\mathbb Z[1/2])=0$ for every abelian group $N$ and every $i>0$.

## Verification

**Given:** $S=\{2^k:k\ge0\}$ and $L=S^{-1}\mathbb Z$; a supplied projective resolution where specified; AC only for the general balanced-Tor assertion.

1.1 In the fraction definition [[def-multiplicative-subset-and-localisation]], $(a,2^k)$ and $(b,2^l)$ are equivalent precisely when some $2^j$ annihilates $2^l a-2^k b$. Since no nonzero integer is annihilated by $2^j$, this is equivalent to $2^l a=2^k b$. Therefore sending the class of $(a,2^k)$ to the rational $a/2^k$ is a well-defined injective homomorphism with image $\mathbb Z[1/2]$. This proves the asserted identification and makes $L$ torsion-free. [given, algebra]

2.1 By [[prop-torsion-free-abelian-groups-are-flat]], $L$ is flat. Thus tensoring with $L$ preserves short exact sequences, as in [[def-left-and-right-flat-modules-over-an-arbitrary-ring]]. This proof of flatness uses no general localization-exactness or unproved fraction-tensor isomorphism. [step 1.1, algebra]

3.1 Let $Q_\bullet\to N$ be a supplied projective resolution, and fix $i>0$. Write $Z_i=\ker d_i$ and $B_{i-1}=\operatorname{im}d_i$. Tensor the short exact sequence $0\to Z_i\to Q_i\to B_{i-1}\to0$ with $L$. Tensoring the inclusion $B_{i-1}\to Q_{i-1}$ is also injective by flatness. Since $d_i$ factors through these two maps, $\ker(d_i\otimes1)$ is the image of $Z_i\otimes L$ in $Q_i\otimes L$. Exactness of the resolution gives a surjection $Q_{i+1}\to Z_i$; tensoring preserves this surjection, so the same image is $\operatorname{im}(d_{i+1}\otimes1)$. Thus $H_i(Q_\bullet\otimes L)=0$ in every positive degree. This proves the specified-resolution clause of [[def-tor-by-resolving-the-right-module]], without dimension shifting or choice. [step 2.1, given, algebra]

4.1 Under [[def-axiom-of-choice]], [[thm-higher-tor-over-the-integers-vanishes]] supplies projective resolutions of $N$ and $L$. To obtain DC locally, given an entire relation $E$ on a nonempty set $X$ and $x_0\in X$, AC chooses $s(x)\in\{y:xEy\}$ for every $x\in X$; [[thm-recursion]] then gives $x_{n+1}=s(x_n)$ from the prescribed $x_0$. This proves the exact DC hypothesis of [[def-dependent-choice]]. The interface [[def-balanced-tor-bifunctor]] therefore identifies the homology computed in step 3.1 with the usual balanced Tor. Its vanishing holds for all $i>0$, not just for $i=1$. [step 3.1, given, algebra] ∎
